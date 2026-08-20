import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/app/lib/prisma";
import { getAdminSessionCookieName, isAdminAuthenticated } from "@/app/lib/admin-auth";
import { checkRateLimit, isRequestBodyTooLarge, rateLimitHeaders } from "@/app/lib/request-security";

type LeadRequestBody = {
  name?: string;
  email?: string;
  businessName?: string;
  businessType?: string;
  projectType?: string;
  mainGoal?: string;
  features?: string;
  targetUsers?: string;
  timeline?: string;
  budget?: string;
  recommendedService?: string;
  conversationSummary?: string;
  source?: string;
  serviceSlug?: string;
  studioId?: string;
  referrer?: string;
  consent?: boolean;
  website?: string;
};

const clean = (value: unknown, max = 500) => String(value ?? "").trim().slice(0, max);

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(getAdminSessionCookieName())?.value;
    if (!isAdminAuthenticated(session)) {
      return NextResponse.json({ success: false, message: "Unauthorized." }, { status: 401 });
    }

    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      leads,
    });
  } catch (error) {
    console.error("GET LEADS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load leads.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    if (isRequestBodyTooLarge(request, 32 * 1024)) return NextResponse.json({ success: false, message: "Request is too large." }, { status: 413 });
    const rateLimit = checkRateLimit(request, "lead", 8, 15 * 60 * 1000);
    if (!rateLimit.allowed) return NextResponse.json({ success: false, message: "Too many requests. Please wait before trying again." }, { status: 429, headers: rateLimitHeaders(rateLimit) });

    const body = await request.json().catch(() => null) as LeadRequestBody | null;
    if (!body) return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
    if (clean(body.website)) return NextResponse.json({ success: true, message: "Request received." }, { status: 201 });
    if (body.consent !== true) return NextResponse.json({ success: false, message: "Consent is required before details can be saved." }, { status: 400 });

    const leadData = {
        name: clean(body.name, 100) || null,
        email: clean(body.email, 160).toLowerCase() || null,
        businessName:
          clean(body.businessName, 160) || null,
        businessType:
          clean(body.businessType, 160) || null,
        projectType:
          clean(body.projectType, 160) || null,
        mainGoal: clean(body.mainGoal, 2_500) || null,
        features: clean(body.features, 2_500) || null,
        targetUsers:
          clean(body.targetUsers, 1_000) || null,
        timeline: clean(body.timeline, 160) || null,
        budget: clean(body.budget, 160) || null,
        recommendedService:
          clean(body.recommendedService, 160) || null,
        conversationSummary:
          clean(body.conversationSummary, 3_000) || null,
        source: clean(body.source, 40).toUpperCase() || "AI",
        serviceSlug: clean(body.serviceSlug, 120) || null,
        studioId: clean(body.studioId, 80) || null,
        referrer: clean(body.referrer, 500) || request.headers.get("referer"),
        consent: true,
        status: "NEW",
      };
    const lead = await prisma.lead.create({ data: leadData as unknown as Parameters<typeof prisma.lead.create>[0]["data"] });

    return NextResponse.json(
      {
        success: true,
        message: "Lead created successfully.",
        lead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CREATE LEAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create lead.",
      },
      { status: 500 }
    );
  }
}
