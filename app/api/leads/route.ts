import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

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