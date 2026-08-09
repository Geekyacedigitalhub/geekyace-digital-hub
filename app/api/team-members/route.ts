import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { mkdir, unlink, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";
import { cookies } from "next/headers";

import {
  getAdminSessionCookieName,
  isAdminAuthenticated,
} from "@/app/lib/admin-auth";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
} as const;

/**
 * Check whether the current request
 * belongs to an authenticated administrator.
 */
async function requireAdmin(): Promise<boolean> {
  const cookieStore = await cookies();

  const session = cookieStore.get(
    getAdminSessionCookieName()
  )?.value;

  return isAdminAuthenticated(session);
}

/**
 * Convert arrays or strings into the
 * comma-separated string format used
 * by the database.
 */
function normalizeList(value: unknown): string {
  if (Array.isArray(value)) {
    return value
      .map((item) => String(item).trim())
      .filter(Boolean)
      .join(", ");
  }

  return String(value ?? "").trim();
}

/**
 * Validate the actual file signature instead
 * of trusting only the browser-provided MIME type.
 */
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
      buffer.toString("ascii", 0, 4) === "RIFF" &&
      buffer.toString("ascii", 8, 12) === "WEBP"
    );
  }

  return false;
}

/**
 * GET
 *
 * Public team directory.
 *
 * Anyone can read team members.
 * This is intentionally NOT admin protected
 * because the public website needs to display
 * the team directory.
 */
export async function GET() {
  try {
    const members = await prisma.teamMember.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      members,
    });
  } catch (error) {
    console.error(
      "Get team members error:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to load team members.",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * POST
 *
 * Admin only.
 *
 * Creates a new team member.
 */
export async function POST(request: Request) {
  let uploadedImagePath: string | null = null;

  try {
    /**
     * SECURITY CHECK
     *
     * Only authenticated administrators
     * can create team members.
     */
    const authenticated = await requireAdmin();

    if (!authenticated) {
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

    let imageUrl: string | null = null;

    /**
     * ==========================================
     * MULTIPART FORM DATA
     * ==========================================
     */
    if (
      contentType.includes(
        "multipart/form-data"
      )
    ) {
      const formData = await request.formData();

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

      skills = normalizeList(
        formData.get("skills")
      );

      expertise = normalizeList(
        formData.get("expertise")
      );

      platforms = normalizeList(
        formData.get("platforms")
      );

      const image = formData.get("image");

      /**
       * ========================================
       * IMAGE UPLOAD
       * ========================================
       */
      if (
        image instanceof File &&
        image.size > 0
      ) {
        /**
         * File size validation
         */
        if (image.size > MAX_IMAGE_SIZE) {
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

        /**
         * MIME type validation
         */
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

        /**
         * Read file
         */
        const buffer = Buffer.from(
          await image.arrayBuffer()
        );

        /**
         * Verify actual file signature
         */
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

        /**
         * Create upload directory
         */
        const uploadDirectory = path.join(
          process.cwd(),
          "public",
          "uploads",
          "team-members"
        );

        await mkdir(uploadDirectory, {
          recursive: true,
        });

        /**
         * Generate unique filename
         */
        const filename = `${crypto.randomUUID()}.${extension}`;

        const filePath = path.join(
          uploadDirectory,
          filename
        );

        /**
         * Save image
         */
        await writeFile(
          filePath,
          buffer
        );

        uploadedImagePath = filePath;

        imageUrl =
          `/uploads/team-members/${filename}`;
      }
    } else {
      /**
       * ==========================================
       * JSON REQUEST
       * ==========================================
       */
      let body: Record<string, unknown>;

      try {
        body = await request.json();
      } catch {
        return NextResponse.json(
          {
            error:
              "Invalid request body.",
          },
          {
            status: 400,
          }
        );
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

      skills = normalizeList(
        body.skills
      );

      expertise = normalizeList(
        body.expertise
      );

      platforms = normalizeList(
        body.platforms
      );

      /**
       * JSON requests may optionally provide
       * an existing image URL.
       */
      if (
        body.imageUrl !== undefined &&
        body.imageUrl !== null
      ) {
        imageUrl =
          String(body.imageUrl).trim() ||
          null;
      }
    }

    /**
     * ==========================================
     * REQUIRED FIELDS
     * ==========================================
     */
    if (
      !name ||
      !role ||
      !bio ||
      !skills ||
      !expertise
    ) {
      /**
       * If an image was already uploaded but
       * validation failed afterward, remove it.
       */
      if (uploadedImagePath) {
        try {
          await unlink(uploadedImagePath);
        } catch (cleanupError) {
          console.warn(
            "Unable to clean up uploaded image:",
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

    /**
     * ==========================================
     * CREATE DATABASE RECORD
     * ==========================================
     */
    const member =
      await prisma.teamMember.create({
        data: {
          name,
          role,
          bio,
          location: location || null,
          availability:
            availability || "Available",
          skills,
          expertise,
          platforms,
          imageUrl,
        },
      });

    /**
     * ==========================================
     * SUCCESS
     * ==========================================
     */
    return NextResponse.json(
      {
        success: true,
        member,
        message:
          "Team member created successfully.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Create team member error:",
      error
    );

    /**
     * If database creation fails after the
     * image was uploaded, remove the orphaned
     * image file.
     */
    if (uploadedImagePath) {
      try {
        await unlink(uploadedImagePath);
      } catch (cleanupError) {
        console.warn(
          "Unable to clean up uploaded image after error:",
          cleanupError
        );
      }
    }

    return NextResponse.json(
      {
        error:
          "Unable to create team member.",
      },
      {
        status: 500,
      }
    );
  }
}