import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getAdminSessionCookieName, isAdminAuthenticated } from "@/app/lib/admin-auth";

type CaseStudyDelegate = { update(args: { where: { id: string }; data: { published?: boolean; featured?: boolean } }): Promise<unknown> };
const caseStudyStore = (prisma as unknown as { caseStudy: CaseStudyDelegate }).caseStudy;

async function authorized() { const store = await cookies(); return isAdminAuthenticated(store.get(getAdminSessionCookieName())?.value); }

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await authorized())) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const { id } = await context.params;
  const body = await request.json().catch(() => null) as { published?: boolean; featured?: boolean } | null;
  if (!body || (body.published === undefined && body.featured === undefined)) return NextResponse.json({ message: "No supported update supplied." }, { status: 400 });
  const data: { published?: boolean; featured?: boolean } = {};
  if (typeof body.published === "boolean") data.published = body.published;
  if (typeof body.featured === "boolean") data.featured = body.featured;
  try {
    const caseStudy = await caseStudyStore.update({ where: { id }, data });
    return NextResponse.json({ success: true, caseStudy, preview: false });
  } catch (error) {
    console.error("CASE STUDY CMS UPDATE ERROR:", error);
    if (process.env.NODE_ENV !== "production" && id.startsWith("preview-")) return NextResponse.json({ success: true, caseStudy: { id, ...data }, preview: true }, { status: 202 });
    return NextResponse.json({ message: "Unable to update the case study." }, { status: 503 });
  }
}
