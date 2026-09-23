import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/app/lib/prisma";
import { checkRateLimit, getClientIdentifier, rateLimitResponse } from "@/app/lib/rate-limit";
import { hasBodyExceededLimit, JSON_BODY_LIMIT, requestTooLargeResponse } from "@/app/lib/request-limits";
import {
  getAdminSessionCookieName,
  isAdminAuthenticated,
} from "@/app/lib/admin-auth";

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
};

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(getAdminSessionCookieName())?.value;

    if (!isAdminAuthenticated(session)) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const pageParam = Number.parseInt(url.searchParams.get("page") || "1", 10);
    const pageSizeParam = Number.parseInt(url.searchParams.get("pageSize") || "50", 10);
    const page = Number.isFinite(pageParam) ? Math.max(1, Math.min(pageParam, 100000)) : 1;
    const pageSize = Number.isFinite(pageSizeParam) ? Math.max(1, Math.min(pageSizeParam, 50)) : 50;

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          businessName: true,
          businessType: true,
          projectType: true,
          mainGoal: true,
          features: true,
          targetUsers: true,
          timeline: true,
          budget: true,
          recommendedService: true,
          conversationSummary: true,
          status: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.lead.count(),
    ]);

    return NextResponse.json({
      success: true,
      leads,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    });
  } catch (error) {
    console.error("GET LEADS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load leads.",
      },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

function limitValue(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.trim();
  return cleaned ? cleaned.slice(0, maxLength) : null;
}

export async function POST(request: Request) {
  try {
    if (hasBodyExceededLimit(request, JSON_BODY_LIMIT)) return requestTooLargeResponse();
    const rate = checkRateLimit(`lead:${getClientIdentifier(request)}`, 10, 10 * 60 * 1000);
    if (!rate.allowed) return rateLimitResponse(rate.retryAfterSeconds);

    const body: LeadRequestBody = await request.json();

    const lead = await prisma.lead.create({
      data: {
        name: limitValue(body.name, 200),
        email: limitValue(body.email, 320),
        businessName:
          limitValue(body.businessName, 200),
        businessType:
          limitValue(body.businessType, 200),
        projectType:
          limitValue(body.projectType, 200),
        mainGoal: limitValue(body.mainGoal, 1000),
        features: limitValue(body.features, 2000),
        targetUsers:
          limitValue(body.targetUsers, 500),
        timeline: limitValue(body.timeline, 200),
        budget: limitValue(body.budget, 200),
        recommendedService:
          limitValue(body.recommendedService, 200),
        conversationSummary:
          limitValue(body.conversationSummary, 4000),
        status: "NEW",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Lead created successfully.",
        leadId: lead.id,
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