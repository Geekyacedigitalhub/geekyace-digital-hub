import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/app/lib/prisma";
import { checkRateLimit, isRequestBodyTooLarge, rateLimitHeaders } from "@/app/lib/request-security";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max = 500) => String(value ?? "").trim().slice(0, max);

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    if (isRequestBodyTooLarge(request, 32 * 1024)) {
      return NextResponse.json({ success: false, message: "Request is too large." }, { status: 413 });
    }

    const rateLimit = checkRateLimit(request, "contact", 6, 15 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, message: "Too many enquiries were submitted. Please wait before trying again." },
        { status: 429, headers: rateLimitHeaders(rateLimit) }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !fromEmail || !toEmail) {
      console.error("RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_TO_EMAIL is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
    }

    const {
      name,
      company,
      email,
      phone,
      service,
      budget,
      timeline,
      contactMethod,
      message,
      source,
      serviceSlug,
      studioId,
      consent,
      website,
    } = body;

    if (clean(website)) {
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    const normalizedName = clean(name, 100).replace(/[\r\n]+/g, " ");
    const normalizedCompany = clean(company, 160);
    const normalizedEmail = clean(email, 160).toLowerCase();
    const normalizedPhone = clean(phone, 60);
    const normalizedService = clean(service, 160);
    const normalizedBudget = clean(budget, 100);
    const normalizedTimeline = clean(timeline, 100);
    const normalizedContactMethod = clean(contactMethod, 100);
    const normalizedMessage = clean(message, 4_000);

    if (!normalizedName || !emailPattern.test(normalizedEmail) || !normalizedPhone || !normalizedService || normalizedMessage.length < 10 || consent !== true) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(normalizedName);
    const safeCompany = escapeHtml(normalizedCompany || "N/A");
    const safeEmail = escapeHtml(normalizedEmail);
    const safePhone = escapeHtml(normalizedPhone);
    const safeService = escapeHtml(normalizedService);
    const safeBudget = escapeHtml(normalizedBudget || "N/A");
    const safeTimeline = escapeHtml(normalizedTimeline || "N/A");
    const safeContactMethod = escapeHtml(
      normalizedContactMethod || "N/A"
    );
    const safeMessage = escapeHtml(normalizedMessage).replace(
      /\n/g,
      "<br />"
    );

    try {
      const leadData = {
          name: normalizedName,
          email: normalizedEmail,
          businessName: normalizedCompany || null,
          projectType: normalizedService,
          mainGoal: normalizedMessage,
          timeline: normalizedTimeline || null,
          budget: normalizedBudget || null,
          recommendedService: normalizedService,
          conversationSummary: [
            `Phone: ${normalizedPhone}`,
            `Preferred contact: ${normalizedContactMethod || "Not specified"}`,
          ].join("\n"),
          source: String(source || "CONTACT").trim().toUpperCase(),
          serviceSlug: String(serviceSlug || "").trim() || null,
          studioId: String(studioId || "").trim() || null,
          referrer: request.headers.get("referer"),
          consent: true,
          status: "NEW",
        };
      await prisma.lead.create({ data: leadData as unknown as Parameters<typeof prisma.lead.create>[0]["data"] });
    } catch (leadError) {
      console.error("CONTACT LEAD SAVE ERROR:", leadError);
    }

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: normalizedEmail,
      subject: `New Project Enquiry from ${normalizedName}`,
      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.7;
            color: #1e293b;
            background: #f8fafc;
            padding: 30px;
          "
        >
          <div
            style="
              max-width: 700px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 16px;
              padding: 30px;
              border: 1px solid #e2e8f0;
            "
          >
            <h2
              style="
                color: #16a34a;
                margin-top: 0;
              "
            >
              📩 New Project Enquiry
            </h2>

            <p>
              A new project enquiry has been submitted
              through the Geekyace Digital Hub website.
            </p>

            <table
              style="
                border-collapse: collapse;
                width: 100%;
                margin-top: 25px;
              "
            >
              <tr>
                <td style="padding: 10px 0;">
                  <strong>Name</strong>
                </td>
                <td style="padding: 10px 0;">
                  ${safeName}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Company</strong>
                </td>
                <td style="padding: 10px 0;">
                  ${safeCompany}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Email</strong>
                </td>
                <td style="padding: 10px 0;">
                  ${safeEmail}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Phone</strong>
                </td>
                <td style="padding: 10px 0;">
                  ${safePhone}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Service</strong>
                </td>
                <td style="padding: 10px 0;">
                  ${safeService}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Budget</strong>
                </td>
                <td style="padding: 10px 0;">
                  ${safeBudget}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Timeline</strong>
                </td>
                <td style="padding: 10px 0;">
                  ${safeTimeline}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Preferred Contact</strong>
                </td>
                <td style="padding: 10px 0;">
                  ${safeContactMethod}
                </td>
              </tr>
            </table>

            <hr
              style="
                margin: 30px 0;
                border: none;
                border-top: 1px solid #e2e8f0;
              "
            />

            <h3>Project Description</h3>

            <div
              style="
                background: #f8fafc;
                border-radius: 12px;
                padding: 20px;
              "
            >
              ${safeMessage}
            </div>

            <hr
              style="
                margin: 30px 0;
                border: none;
                border-top: 1px solid #e2e8f0;
              "
            />

            <p
              style="
                color: #64748b;
                font-size: 13px;
              "
            >
              Sent automatically from the
              Geekyace Digital Hub website.
            </p>
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error("RESEND ERROR:", result.error);

      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't send your enquiry right now. Please try again.",
        },
        { status: 500 }
      );
    }

    console.log("Contact enquiry sent successfully.");

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending your enquiry.",
      },
      { status: 500 }
    );
  }
}
