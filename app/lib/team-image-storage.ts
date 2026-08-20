import { del, put } from "@vercel/blob";

export const TEAM_IMAGE_MAX_BYTES = 4 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
} as const;

export class TeamImageStorageError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = "TeamImageStorageError";
    this.status = status;
  }
}

function isValidImageSignature(buffer: Buffer, mimeType: string): boolean {
  if (mimeType === "image/jpeg") {
    return buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
  }

  if (mimeType === "image/png") {
    return buffer.length >= 8 && buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47 && buffer[4] === 0x0d && buffer[5] === 0x0a && buffer[6] === 0x1a && buffer[7] === 0x0a;
  }

  if (mimeType === "image/webp") {
    return buffer.length >= 12 && buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP";
  }

  return false;
}

export function isManagedTeamImageUrl(value: string | null | undefined): value is string {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname.endsWith(".public.blob.vercel-storage.com") && url.pathname.startsWith("/team-members/");
  } catch {
    return false;
  }
}

export async function uploadTeamImage(image: File): Promise<string> {
  if (image.size > TEAM_IMAGE_MAX_BYTES) {
    throw new TeamImageStorageError("Profile image must be 4MB or smaller.");
  }

  const extension = ALLOWED_IMAGE_TYPES[image.type as keyof typeof ALLOWED_IMAGE_TYPES];

  if (!extension) {
    throw new TeamImageStorageError("Only JPG, PNG, and WEBP images are allowed.");
  }

  const buffer = Buffer.from(await image.arrayBuffer());

  if (!isValidImageSignature(buffer, image.type)) {
    throw new TeamImageStorageError("The uploaded file is not a valid image.");
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new TeamImageStorageError(
      "Permanent image storage is not connected yet. Create a public Vercel Blob store and pull its environment variables before uploading team photos.",
      503
    );
  }

  const blob = await put(`team-members/profile.${extension}`, buffer, {
    access: "public",
    addRandomSuffix: true,
    contentType: image.type,
  });

  return blob.url;
}

export async function deleteTeamImage(imageUrl: string | null | undefined): Promise<void> {
  if (!isManagedTeamImageUrl(imageUrl)) return;
  await del(imageUrl);
}
