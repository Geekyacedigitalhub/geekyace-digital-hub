import path from "path";

const TEAM_MEMBER_UPLOAD_PREFIX = "/uploads/team-members/";
const TEAM_MEMBER_FILE_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\.(jpg|png|webp)$/i;

export function getStoredTeamImagePath(imageUrl: string | null | undefined): string | null {
  if (!imageUrl?.startsWith(TEAM_MEMBER_UPLOAD_PREFIX)) return null;

  const filename = imageUrl.slice(TEAM_MEMBER_UPLOAD_PREFIX.length);
  if (!TEAM_MEMBER_FILE_RE.test(filename)) return null;

  return path.join(
    process.cwd(),
    "public",
    "uploads",
    "team-members",
    filename
  );
}

export function isStoredTeamImageUrl(imageUrl: string | null | undefined): boolean {
  return getStoredTeamImagePath(imageUrl) !== null;
}
