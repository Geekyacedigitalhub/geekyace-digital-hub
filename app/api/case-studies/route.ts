import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getAdminSessionCookieName, isAdminAuthenticated } from "@/app/lib/admin-auth";
import { getCaseStudyProofIssues, type CaseStudyProofStatus } from "@/app/lib/caseStudyProof";
import { proofCaseStudies } from "@/app/data/v32GrowthOS";

type CaseStudyDelegate = {
  findMany(args: unknown): Promise<unknown[]>;
  create(args: { data: unknown }): Promise<unknown>;
};
const caseStudyStore = (prisma as unknown as { caseStudy: CaseStudyDelegate }).caseStudy;

const clean = (value: unknown, max = 5000) => String(value ?? "").trim().slice(0, max);
async function authorized() { const store = await cookies(); return isAdminAuthenticated(store.get(getAdminSessionCookieName())?.value); }
const previewRecords = () => proofCaseStudies.map((study) => ({ ...study, id: `preview-${study.slug}`, serviceSlugs: study.serviceSlugs.join(", "), industries: study.industries.join(", "), mediaUrls: null, proofUrl: study.proofUrl || null, clientDisplayName: study.clientDisplayName || null, createdAt: new Date(0).toISOString(), updatedAt: new Date(0).toISOString() }));

export async function GET() {
  if (!(await authorized())) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  try {
    const caseStudies = await caseStudyStore.findMany({ orderBy: [{ featured: "desc" }, { updatedAt: "desc" }] });
    return NextResponse.json({ success: true, caseStudies, preview: false });
  } catch (error) {
    console.error("CASE STUDY CMS GET ERROR:", error);
    if (process.env.NODE_ENV !== "production") return NextResponse.json({ success: true, caseStudies: previewRecords(), preview: true });
    return NextResponse.json({ message: "Unable to load case studies." }, { status: 503 });
  }
}

export async function POST(request: Request) {
  if (!(await authorized())) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  const record = {
    slug: clean(body.slug, 120).toLowerCase(), title: clean(body.title, 160), summary: clean(body.summary, 1200), challenge: clean(body.challenge), approach: clean(body.approach), outcome: clean(body.outcome), studioId: clean(body.studioId, 40), serviceSlugs: clean(body.serviceSlugs, 800), industries: clean(body.industries, 800), heroImageUrl: clean(body.heroImageUrl, 600) || null, mediaUrls: null as string | null, proofStatus: clean(body.proofStatus, 20).toUpperCase() as CaseStudyProofStatus, proofUrl: clean(body.proofUrl, 600) || null, clientPermission: Boolean(body.clientPermission), clientDisplayName: clean(body.clientDisplayName, 160) || null, featured: Boolean(body.featured), published: Boolean(body.published),
  };
  if (!record.slug.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) || !record.studioId || !["VERIFIED", "CONFIDENTIAL", "CONCEPT"].includes(record.proofStatus)) return NextResponse.json({ message: "Add a valid slug, studio, and proof status." }, { status: 400 });
  const issues = getCaseStudyProofIssues(record);
  if (record.published && issues.length) return NextResponse.json({ message: "This case study is not ready to publish.", issues }, { status: 400 });
  try {
    const caseStudy = await caseStudyStore.create({ data: record });
    return NextResponse.json({ success: true, caseStudy, preview: false }, { status: 201 });
  } catch (error) {
    console.error("CASE STUDY CMS CREATE ERROR:", error);
    if (process.env.NODE_ENV !== "production") return NextResponse.json({ success: true, caseStudy: { ...record, id: `preview-${randomUUID().slice(0, 8)}`, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, preview: true }, { status: 202 });
    return NextResponse.json({ message: "Unable to create the case study." }, { status: 503 });
  }
}
