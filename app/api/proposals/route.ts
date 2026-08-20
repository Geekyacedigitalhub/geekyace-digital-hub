import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getMarketplaceService } from "@/app/data/serviceMarketplace";
import { checkRateLimit, isRequestBodyTooLarge, rateLimitHeaders } from "@/app/lib/request-security";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max = 500) => String(value ?? "").trim().slice(0, max);

export async function POST(request: Request) {
  if (isRequestBodyTooLarge(request, 32 * 1024)) return NextResponse.json({ message: "Request is too large." }, { status: 413 });
  const rateLimit = checkRateLimit(request, "proposal", 6, 15 * 60 * 1000);
  if (!rateLimit.allowed) return NextResponse.json({ message: "Too many requests. Please wait before trying again." }, { status: 429, headers: rateLimitHeaders(rateLimit) });
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  if (clean(body.website)) return NextResponse.json({ success: true, reference: "received" }, { status: 201 });
  const name = clean(body.name, 100); const email = clean(body.email, 160).toLowerCase(); const company = clean(body.company, 120); const budget = clean(body.budget, 80); const timeline = clean(body.timeline, 80); const summary = clean(body.summary, 2500); const serviceSlug = clean(body.serviceSlug, 100); const expertSlug = clean(body.expertSlug, 100); const consent = body.consent === true || body.consent === "true";
  const service = getMarketplaceService(serviceSlug);
  if (!name || !emailPattern.test(email) || !budget || !timeline || summary.length < 30 || !service || !consent) return NextResponse.json({ message: "Please complete the required proposal fields." }, { status: 400 });
  try {
    const leadData = { name, email, businessName: company || null, projectType: "Proposal request", mainGoal: summary, timeline, budget, recommendedService: service.title, conversationSummary: expertSlug ? `Requested expert profile: ${expertSlug}` : null, source: "PROPOSAL", serviceSlug: service.slug, studioId: service.studioId, referrer: request.headers.get("referer"), consent, status: "PROPOSAL" };
    const lead = await prisma.lead.create({ data: leadData as unknown as Parameters<typeof prisma.lead.create>[0]["data"] });
    return NextResponse.json({ success: true, reference: lead.id, preview: false }, { status: 201 });
  } catch (error) {
    console.error("PROPOSAL REQUEST ERROR:", error);
    if (process.env.NODE_ENV !== "production") return NextResponse.json({ success: true, reference: `preview-${randomUUID().slice(0, 8)}`, preview: true }, { status: 202 });
    return NextResponse.json({ message: "Unable to record the proposal request." }, { status: 503 });
  }
}
