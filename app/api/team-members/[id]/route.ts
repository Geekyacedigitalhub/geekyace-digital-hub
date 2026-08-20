import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  getAdminSessionCookieName,
  isAdminAuthenticated,
} from "@/app/lib/admin-auth";
import { prisma } from "@/app/lib/prisma";
import {
  deleteTeamImage,
  TeamImageStorageError,
  uploadTeamImage,
} from "@/app/lib/team-image-storage";

interface RouteContext {
  params: Promise<{ id: string }>;
}

interface TeamMemberWithImage {
  id: string;
  name: string;
  role: string;
  slug?: string | null;
  headline?: string | null;
  studioId?: string | null;
  yearsExperience?: number | null;
  languages?: string | null;
  portfolioUrl?: string | null;
  featured?: boolean;
  published?: boolean;
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

function asTeamMemberWithImage(member: unknown): TeamMemberWithImage {
  return member as TeamMemberWithImage;
}

async function requireAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(getAdminSessionCookieName())?.value;
  return isAdminAuthenticated(session);
}

function unauthorizedResponse() {
  return NextResponse.json(
    { error: "Unauthorized. Administrator access required." },
    { status: 401 }
  );
}

function normalizeList(value: unknown): string {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean).join(", ");
  }

  return String(value ?? "").trim();
}

export async function GET(_request: Request, { params }: RouteContext) {
  try {
    if (!(await requireAdmin())) return unauthorizedResponse();

    const { id } = await params;
    const result = await prisma.teamMember.findUnique({ where: { id } });

    if (!result) {
      return NextResponse.json({ error: "Team member not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, member: asTeamMemberWithImage(result) });
  } catch (error) {
    console.error("Get team member error:", error);
    return NextResponse.json({ error: "Unable to load team member." }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: RouteContext) {
  let uploadedImageUrl: string | null = null;

  try {
    if (!(await requireAdmin())) return unauthorizedResponse();

    const { id } = await params;
    const result = await prisma.teamMember.findUnique({ where: { id } });

    if (!result) {
      return NextResponse.json({ error: "Team member not found." }, { status: 404 });
    }

    const existingMember = asTeamMemberWithImage(result);
    const contentType = request.headers.get("content-type") || "";

    let name = "";
    let role = "";
    let slug = existingMember.slug || "";
    let headline = existingMember.headline || "";
    let studioId = existingMember.studioId || "";
    let yearsExperience = existingMember.yearsExperience ?? null;
    let languages = existingMember.languages || "";
    let portfolioUrl = existingMember.portfolioUrl || "";
    let featured = existingMember.featured ?? false;
    let published = existingMember.published ?? true;
    let bio = "";
    let location = "";
    let availability = "Available";
    let skills = "";
    let expertise = "";
    let platforms = "";
    let newImageUrl = existingMember.imageUrl;
    let shouldRemoveOldImage = false;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      name = String(formData.get("name") || "").trim();
      role = String(formData.get("role") || "").trim();
      slug = String(formData.get("slug") || "").trim().toLowerCase();
      headline = String(formData.get("headline") || "").trim();
      studioId = String(formData.get("studioId") || "").trim();
      const experienceValue = Number(formData.get("yearsExperience"));
      yearsExperience = Number.isFinite(experienceValue) && experienceValue > 0 ? Math.floor(experienceValue) : null;
      languages = normalizeList(formData.get("languages"));
      portfolioUrl = String(formData.get("portfolioUrl") || "").trim();
      featured = String(formData.get("featured") || "").toLowerCase() === "true";
      published = String(formData.get("published") || "true").toLowerCase() !== "false";
      bio = String(formData.get("bio") || "").trim();
      location = String(formData.get("location") || "").trim();
      availability = String(formData.get("availability") || "Available").trim();
      skills = normalizeList(formData.get("skills"));
      expertise = normalizeList(formData.get("expertise"));
      platforms = normalizeList(formData.get("platforms"));

      const removeImage = String(formData.get("removeImage") || "").toLowerCase() === "true";
      const image = formData.get("image");

      if (image instanceof File && image.size > 0) {
        try {
          newImageUrl = await uploadTeamImage(image);
          uploadedImageUrl = newImageUrl;
          shouldRemoveOldImage = true;
        } catch (error) {
          if (error instanceof TeamImageStorageError) {
            return NextResponse.json({ error: error.message }, { status: error.status });
          }
          throw error;
        }
      } else if (removeImage) {
        newImageUrl = null;
        shouldRemoveOldImage = true;
      }
    } else {
      const body = (await request.json()) as Record<string, unknown>;
      name = String(body.name || "").trim();
      role = String(body.role || "").trim();
      slug = String(body.slug || "").trim().toLowerCase();
      headline = String(body.headline || "").trim();
      studioId = String(body.studioId || "").trim();
      const experienceValue = Number(body.yearsExperience);
      yearsExperience = Number.isFinite(experienceValue) && experienceValue > 0 ? Math.floor(experienceValue) : null;
      languages = normalizeList(body.languages);
      portfolioUrl = String(body.portfolioUrl || "").trim();
      featured = Boolean(body.featured);
      published = body.published !== false;
      bio = String(body.bio || "").trim();
      location = String(body.location || "").trim();
      availability = String(body.availability || "Available").trim();
      skills = normalizeList(body.skills);
      expertise = normalizeList(body.expertise);
      platforms = normalizeList(body.platforms);

      if (body.imageUrl !== undefined) {
        newImageUrl = body.imageUrl ? String(body.imageUrl).trim() : null;
        shouldRemoveOldImage = newImageUrl !== existingMember.imageUrl;
      }
    }

    if (!name || !role || !bio || !skills || !expertise) {
      if (uploadedImageUrl) {
        await deleteTeamImage(uploadedImageUrl).catch((cleanupError) => {
          console.warn("Unable to clean up rejected profile image:", cleanupError);
        });
      }

      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (slug && !slug.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)) return NextResponse.json({ error: "Public profile slug must use lowercase letters, numbers, and hyphens." }, { status: 400 });

    const memberData = {
        slug: slug || null,
        headline: headline || null,
        studioId: studioId || null,
        yearsExperience,
        languages: languages || null,
        portfolioUrl: portfolioUrl || null,
        featured,
        published,
        name,
        role,
        bio,
        location: location || null,
        availability: availability || "Available",
        skills,
        expertise,
        platforms,
        imageUrl: newImageUrl,
      };
    const updatedResult = await prisma.teamMember.update({
      where: { id },
      data: memberData as unknown as Parameters<typeof prisma.teamMember.update>[0]["data"],
    });

    if (
      shouldRemoveOldImage &&
      existingMember.imageUrl &&
      existingMember.imageUrl !== newImageUrl
    ) {
      await deleteTeamImage(existingMember.imageUrl).catch((cleanupError) => {
        console.warn("Unable to remove replaced Blob profile image:", cleanupError);
      });
    }

    return NextResponse.json({
      success: true,
      member: asTeamMemberWithImage(updatedResult),
      message: "Team member updated successfully.",
    });
  } catch (error) {
    if (uploadedImageUrl) {
      await deleteTeamImage(uploadedImageUrl).catch((cleanupError) => {
        console.warn("Unable to clean up profile image after update failure:", cleanupError);
      });
    }

    console.error("Update team member error:", error);
    return NextResponse.json({ error: "Unable to update team member." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  try {
    if (!(await requireAdmin())) return unauthorizedResponse();

    const { id } = await params;
    const result = await prisma.teamMember.findUnique({ where: { id } });

    if (!result) {
      return NextResponse.json({ error: "Team member not found." }, { status: 404 });
    }

    const member = asTeamMemberWithImage(result);
    await prisma.teamMember.delete({ where: { id } });

    await deleteTeamImage(member.imageUrl).catch((cleanupError) => {
      console.warn("Unable to remove deleted member's Blob image:", cleanupError);
    });

    return NextResponse.json({
      success: true,
      message: "Team member removed successfully.",
    });
  } catch (error) {
    console.error("Delete team member error:", error);
    return NextResponse.json({ error: "Unable to remove team member." }, { status: 500 });
  }
}
