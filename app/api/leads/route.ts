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

export async function GET() {
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
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    if (hasBodyExceededLimit(request, JSON_BODY_LIMIT)) return requestTooLargeResponse();
    const rate = checkRateLimit(`lead:${getClientIdentifier(request)}`, 10, 10 * 60 * 1000);
    if (!rate.allowed) return rateLimitResponse(rate.retryAfterSeconds);

    const body: LeadRequestBody = await request.json();

    const lead = await prisma.lead.create({
      data: {
        name: body.name?.trim() || null,
        email: body.email?.trim() || null,
        businessName:
          body.businessName?.trim() || null,
        businessType:
          body.businessType?.trim() || null,
        projectType:
          body.projectType?.trim() || null,
        mainGoal: body.mainGoal?.trim() || null,
        features: body.features?.trim() || null,
        targetUsers:
          body.targetUsers?.trim() || null,
        timeline: body.timeline?.trim() || null,
        budget: body.budget?.trim() || null,
        recommendedService:
          body.recommendedService?.trim() || null,
        conversationSummary:
          body.conversationSummary?.trim() || null,
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