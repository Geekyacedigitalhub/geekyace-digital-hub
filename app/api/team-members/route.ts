import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { cookies } from "next/headers";
import {
  deleteTeamImage,
  TeamImageStorageError,
  uploadTeamImage,
} from "@/app/lib/team-image-storage";

import {
  getAdminSessionCookieName,
  isAdminAuthenticated,
} from "@/app/lib/admin-auth";

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
    const query = { where: { published: true }, orderBy: [{ featured: "desc" }, { createdAt: "desc" }] };
    const members = await prisma.teamMember.findMany(query as unknown as Parameters<typeof prisma.teamMember.findMany>[0]);

    return NextResponse.json({
      success: true,
      members,
    });
  } catch (error) {
    console.warn(
      "Team database is temporarily unavailable:",
      error instanceof Error ? error.message : error
    );

    return NextResponse.json(
      { success: false, members: [], error: "The team directory is temporarily unavailable." },
      { status: 503 }
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
  let uploadedImageUrl: string | null = null;

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
    let slug = "";
    let headline = "";
    let studioId = "";
    let yearsExperience: number | null = null;
    let languages = "";
    let portfolioUrl = "";
    let featured = false;
    let published = true;
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

      slug = String(formData.get("slug") || "").trim().toLowerCase();
      headline = String(formData.get("headline") || "").trim();
      studioId = String(formData.get("studioId") || "").trim();
      const experienceValue = Number(formData.get("yearsExperience"));
      yearsExperience = Number.isFinite(experienceValue) && experienceValue > 0 ? Math.floor(experienceValue) : null;
      languages = normalizeList(formData.get("languages"));
      portfolioUrl = String(formData.get("portfolioUrl") || "").trim();
      featured = String(formData.get("featured") || "").toLowerCase() === "true";
      published = String(formData.get("published") || "true").toLowerCase() !== "false";

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
        try {
          imageUrl = await uploadTeamImage(image);
          uploadedImageUrl = imageUrl;
        } catch (error) {
          if (error instanceof TeamImageStorageError) {
            return NextResponse.json({ error: error.message }, { status: error.status });
          }

          throw error;
        }
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

      slug = String(body.slug || "").trim().toLowerCase();
      headline = String(body.headline || "").trim();
      studioId = String(body.studioId || "").trim();
      const experienceValue = Number(body.yearsExperience);
      yearsExperience = Number.isFinite(experienceValue) && experienceValue > 0 ? Math.floor(experienceValue) : null;
      languages = normalizeList(body.languages);
      portfolioUrl = String(body.portfolioUrl || "").trim();
      featured = Boolean(body.featured);
      published = body.published !== false;

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
      if (uploadedImageUrl) {
        try {
          await deleteTeamImage(uploadedImageUrl);
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
    if (slug && !slug.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)) {
      return NextResponse.json({ error: "Public profile slug must use lowercase letters, numbers, and hyphens." }, { status: 400 });
    }

    const memberData = {
          name,
          role,
          slug: slug || null,
          headline: headline || null,
          studioId: studioId || null,
          yearsExperience,
          languages: languages || null,
          portfolioUrl: portfolioUrl || null,
          featured,
          published,
          bio,
          location: location || null,
          availability:
            availability || "Available",
          skills,
          expertise,
          platforms,
          imageUrl,
        };
    const member = await prisma.teamMember.create({ data: memberData as unknown as Parameters<typeof prisma.teamMember.create>[0]["data"] });

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
    if (uploadedImageUrl) {
      try {
        await deleteTeamImage(uploadedImageUrl);
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
