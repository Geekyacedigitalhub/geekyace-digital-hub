import { NextResponse } from "next/server";
import { isSameOriginRequest, sameOriginFailureResponse } from "@/app/lib/request-security";
import { prisma } from "@/app/lib/prisma";
import {
  mkdir,
  unlink,
  writeFile,
} from "fs/promises";
import { getStoredTeamImagePath, isStoredTeamImageUrl } from "@/app/lib/team-member-images";
import path from "path";
import crypto from "crypto";
import { cookies } from "next/headers";
import { checkRateLimit, getClientIdentifier, rateLimitResponse } from "@/app/lib/rate-limit";
import { hasBodyExceededLimit, UPLOAD_BODY_LIMIT, requestTooLargeResponse } from "@/app/lib/request-limits";

import {
  getAdminSessionCookieName,
  isAdminAuthenticated,
} from "@/app/lib/admin-auth";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const FIELD_LIMITS = { name: 200, role: 200, bio: 2000, location: 200, availability: 100, skills: 2000, expertise: 2000, platforms: 1000 } as const;

function validateFields(fields: Record<string, string>): string | null {
  for (const [field, value] of Object.entries(fields)) {
    const limit = FIELD_LIMITS[field as keyof typeof FIELD_LIMITS];
    if (limit && value.length > limit) return `${field} is too long.`;
  }
  return null;
}

const publicTeamMemberSelect = {
  id: true,
  name: true,
  role: true,
  bio: true,
  location: true,
  availability: true,
  skills: true,
  expertise: true,
  platforms: true,
  imageUrl: true,
} as const;

const ALLOWED_IMAGE_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
} as const;

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

interface TeamMemberWithImage {
  id: string;
  name: string;
  role: string;
  bio: string;
  location: string | null;
  availability: string;
  skills: string;
  expertise: string;
  platforms: string;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

function asTeamMemberWithImage(
  member: unknown
): TeamMemberWithImage {
  return member as TeamMemberWithImage;
}

function isValidImageSignature(
  buffer: Buffer,
  mimeType: string
): boolean {
  if (mimeType === "image/jpeg") {
    return (
      buffer.length >= 3 &&
      buffer[0] === 0xff &&
      buffer[1] === 0xd8 &&
      buffer[2] === 0xff
    );
  }

  if (mimeType === "image/png") {
    return (
      buffer.length >= 8 &&
      buffer[0] === 0x89 &&
      buffer[1] === 0x50 &&
      buffer[2] === 0x4e &&
      buffer[3] === 0x47 &&
      buffer[4] === 0x0d &&
      buffer[5] === 0x0a &&
      buffer[6] === 0x1a &&
      buffer[7] === 0x0a
    );
  }

  if (mimeType === "image/webp") {
    return (
      buffer.length >= 12 &&
      buffer.toString("ascii", 0, 4) ===
        "RIFF" &&
      buffer.toString("ascii", 8, 12) ===
        "WEBP"
    );
  }

  return false;
}

/*
 * GET
 * Fetch one team member
 */
export async function GET(
  _request: Request,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const result =
      await prisma.teamMember.findUnique({
        where: {
          id,
        },
        select: publicTeamMemberSelect,
      });

    if (!result) {
      return NextResponse.json(
        {
          error: "Team member not found.",
        },
        {
          status: 404,
        }
      );
    }

    const member =
      asTeamMemberWithImage(result);

    return NextResponse.json(
      {
        success: true,
        member,
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Get team member request failed.");

    return NextResponse.json(
      {
        error:
          "Unable to load team member.",
      },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

/*
 * PUT
 * Update an existing team member
 */
export async function PUT(
  request: Request,
  { params }: RouteContext
) {
  let uploadedImagePath: string | null = null;

  try {
    if (!isSameOriginRequest(request)) return sameOriginFailureResponse();
    const rate = checkRateLimit(`team-member-mutation:${getClientIdentifier(request)}`, 30, 10 * 60 * 1000);
    if (!rate.allowed) return rateLimitResponse(rate.retryAfterSeconds);

    const cookieStore = await cookies();
    const session = cookieStore.get(
      getAdminSessionCookieName()
    )?.value;

    if (!isAdminAuthenticated(session)) {
      return NextResponse.json(
        {
          error:
            "Unauthorized. Administrator access required.",
        },
        {
          status: 401,
        }
      );
    }

    const { id } = await params;

    const result =
      await prisma.teamMember.findUnique({
        where: {
          id,
        },
      });

    if (!result) {
      return NextResponse.json(
        {
          error:
            "Team member not found.",
        },
        {
          status: 404,
        }
      );
    }

    const existingMember =
      asTeamMemberWithImage(result);

    if (hasBodyExceededLimit(request, UPLOAD_BODY_LIMIT)) return requestTooLargeResponse();

    const contentType =
      request.headers.get("content-type") || "";

    let name = "";
    let role = "";
    let bio = "";
    let location = "";
    let availability = "Available";
    let skills = "";
    let expertise = "";
    let platforms = "";

    let newImageUrl =
      existingMember.imageUrl;

    let shouldRemoveOldImage = false;

    /*
     * MULTIPART FORM DATA
     */
    if (
      contentType.includes(
        "multipart/form-data"
      )
    ) {
      const formData =
        await request.formData();

      name = String(
        formData.get("name") || ""
      ).trim();

      role = String(
        formData.get("role") || ""
      ).trim();

      bio = String(
        formData.get("bio") || ""
      ).trim();

      location = String(
        formData.get("location") || ""
      ).trim();

      availability = String(
        formData.get("availability") ||
          "Available"
      ).trim();

      skills = String(
        formData.get("skills") || ""
      ).trim();

      expertise = String(
        formData.get("expertise") || ""
      ).trim();

      platforms = String(
        formData.get("platforms") || ""
      ).trim();

      const removeImage =
        String(
          formData.get("removeImage") || ""
        ).toLowerCase() === "true";

      const image =
        formData.get("image");

      /*
       * New image uploaded
       */
      if (
        image instanceof File &&
        image.size > 0
      ) {
        if (
          image.size >
          MAX_IMAGE_SIZE
        ) {
          return NextResponse.json(
            {
              error:
                "Profile image must be 5MB or smaller.",
            },
            {
              status: 400,
            }
          );
        }

        const extension =
          ALLOWED_IMAGE_TYPES[
            image.type as keyof typeof ALLOWED_IMAGE_TYPES
          ];

        if (!extension) {
          return NextResponse.json(
            {
              error:
                "Only JPG, PNG, and WEBP images are allowed.",
            },
            {
              status: 400,
            }
          );
        }

        const buffer = Buffer.from(
          await image.arrayBuffer()
        );

        if (
          !isValidImageSignature(
            buffer,
            image.type
          )
        ) {
          return NextResponse.json(
            {
              error:
                "The uploaded file is not a valid image.",
            },
            {
              status: 400,
            }
          );
        }

        const uploadDirectory =
          path.join(
            process.cwd(),
            "public",
            "uploads",
            "team-members"
          );

        await mkdir(
          uploadDirectory,
          {
            recursive: true,
          }
        );

        const filename =
          `${crypto.randomUUID()}.${extension}`;

        const filePath =
          path.join(
            uploadDirectory,
            filename
          );

        await writeFile(
          filePath,
          buffer
        );
        uploadedImagePath = filePath;

        newImageUrl =
          `/uploads/team-members/${filename}`;

        shouldRemoveOldImage = true;
      } else if (removeImage) {
        /*
         * Remove current image
         */
        newImageUrl = null;
        shouldRemoveOldImage = true;
      }
    } else {
      /*
       * JSON request
       */
      let body: Record<string, unknown>;
      try {
        const rawBody: unknown = await request.json();
        if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) return NextResponse.json({ error: "Invalid request body." }, { status: 400, headers: { "Cache-Control": "no-store" } });
        body = rawBody as Record<string, unknown>;
      } catch {
        return NextResponse.json({ error: "Invalid JSON request body." }, { status: 400, headers: { "Cache-Control": "no-store" } });
      }

      name = String(
        body.name || ""
      ).trim();

      role = String(
        body.role || ""
      ).trim();

      bio = String(
        body.bio || ""
      ).trim();

      location = String(
        body.location || ""
      ).trim();

      availability = String(
        body.availability ||
          "Available"
      ).trim();

      skills =
        Array.isArray(body.skills)
          ? body.skills.join(", ")
          : String(
              body.skills || ""
            ).trim();

      expertise =
        Array.isArray(
          body.expertise
        )
          ? body.expertise.join(", ")
          : String(
              body.expertise || ""
            ).trim();

      platforms =
        Array.isArray(
          body.platforms
        )
          ? body.platforms.join(", ")
          : String(
              body.platforms || ""
            ).trim();

      if (body.imageUrl !== undefined) {
        newImageUrl = body.imageUrl ? String(body.imageUrl).trim() : null;
        if (newImageUrl && !isStoredTeamImageUrl(newImageUrl)) {
          return NextResponse.json(
            { error: "Invalid team member image URL." },
            { status: 400 }
          );
        }
      }
    }

    const fieldError = validateFields({ name, role, bio, location, availability, skills, expertise, platforms });
    if (fieldError) {
      if (uploadedImagePath) {
        try { await unlink(uploadedImagePath); } catch (cleanupError) { console.warn("Unable to clean up uploaded image:", cleanupError); }
      }
      return NextResponse.json({ error: fieldError }, { status: 400 });
    }

    /*
     * Validate required fields
     */
    if (
      !name ||
      !role ||
      !bio ||
      !skills ||
      !expertise
    ) {
      if (uploadedImagePath) {
        try {
          await unlink(uploadedImagePath);
        } catch (cleanupError) {
          console.warn(
            "Unable to clean up uploaded image after validation failure:",
            cleanupError
          );
        }
      }

      return NextResponse.json(
        {
          error:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * Update database
     */
    const updatedResult =
      await prisma.teamMember.update({
        where: {
          id,
        },
        data: {
          name,
          role,
          bio,
          location:
            location || null,
          availability:
            availability ||
            "Available",
          skills,
          expertise,
          platforms,
          imageUrl:
            newImageUrl,
        },
      });

    const updatedMember =
      asTeamMemberWithImage(
        updatedResult
      );

    /*
     * Delete old image after
     * successful database update
     */
    if (
      shouldRemoveOldImage &&
      existingMember.imageUrl &&
      existingMember.imageUrl !== newImageUrl &&
      isStoredTeamImageUrl(existingMember.imageUrl)
    ) {
      const oldImagePath = getStoredTeamImagePath(existingMember.imageUrl);

      try {
        if (oldImagePath) {
          await unlink(oldImagePath);
        }
      } catch (error) {
        console.warn(
          "Unable to remove old profile image:",
          error
        );
      }
    }

    return NextResponse.json({
      success: true,
      member: updatedMember,
      message:
        "Team member updated successfully.",
    });
  } catch (error) {
    console.error("Update team member request failed.");

    if (uploadedImagePath) {
      try {
        await unlink(uploadedImagePath);
      } catch (cleanupError) {
        console.warn("Unable to clean up uploaded image after update failure:", cleanupError);
      }
    }

    return NextResponse.json(
      {
        error:
          "Unable to update team member.",
      },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

/*
 * DELETE
 * Remove a team member and
 * their profile image
 */
export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  try {
    if (!isSameOriginRequest(request)) return sameOriginFailureResponse();
    const rate = checkRateLimit(`team-member-delete:${getClientIdentifier(request)}`, 20, 10 * 60 * 1000);
    if (!rate.allowed) return rateLimitResponse(rate.retryAfterSeconds);
    const cookieStore = await cookies();
    const session = cookieStore.get(
      getAdminSessionCookieName()
    )?.value;

    if (!isAdminAuthenticated(session)) {
      return NextResponse.json(
        {
          error:
            "Unauthorized. Administrator access required.",
        },
        {
          status: 401,
        }
      );
    }

    const { id } = await params;

    const result =
      await prisma.teamMember.findUnique({
        where: {
          id,
        },
      });

    if (!result) {
      return NextResponse.json(
        {
          error:
            "Team member not found.",
        },
        {
          status: 404,
        }
      );
    }

    const member =
      asTeamMemberWithImage(result);

    /*
     * Delete the database record first. If the database deletion fails,
     * keep the image so the existing record remains internally consistent.
     */
    await prisma.teamMember.delete({
      where: {
        id,
      },
    });

    /* Delete profile image using a validated generated filename only. */
    const imagePath = getStoredTeamImagePath(member.imageUrl);
    if (imagePath) {
      try {
        await unlink(imagePath);
      } catch (error) {
        console.warn("Unable to remove profile image after database deletion:", error);
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Team member removed successfully.",
    });
  } catch (error) {
    console.error("Delete team member request failed.");

    return NextResponse.json(
      {
        error:
          "Unable to remove team member.",
      },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}