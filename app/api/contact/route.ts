import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIdentifier, rateLimitResponse } from "@/app/lib/rate-limit";
import { hasBodyExceededLimit, JSON_BODY_LIMIT, requestTooLargeResponse } from "@/app/lib/request-limits";
import { isSameOriginRequest, sameOriginFailureResponse } from "@/app/lib/request-security";

function isValidEmail(value: string): boolean {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeSubject(value: string, fallback: string): string {
  const cleaned = value.replace(/[\r\n]+/g, " ").trim();
  return cleaned || fallback;
}

const RESEND_TIMEOUT_MS = 15_000;

function noStoreJson(data: unknown, init?: ResponseInit) {
  return NextResponse.json(data, {
    ...init,
    headers: {
      "Cache-Control": "no-store",
      ...(init?.headers ?? {}),
    },
  });
}

export async function POST(request: Request) {
  try {
    if (!isSameOriginRequest(request)) return sameOriginFailureResponse();
    if (hasBodyExceededLimit(request, JSON_BODY_LIMIT)) return requestTooLargeResponse();
    const rate = checkRateLimit(`contact:${getClientIdentifier(request)}`, 5, 10 * 60 * 1000);
    if (!rate.allowed) return rateLimitResponse(rate.retryAfterSeconds);

    if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
      return noStoreJson({ success: false, message: "Content-Type must be application/json." }, { status: 415 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !from) {
      console.error("Resend contact email is not configured.");
      return noStoreJson(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    let body: unknown;
    try { body = await request.json(); } catch { return noStoreJson({ success: false, message: "Invalid JSON request body." }, { status: 400 }); }
    if (!body || typeof body !== "object" || Array.isArray(body)) return noStoreJson({ success: false, message: "Invalid request body." }, { status: 400 });

    const nameValue = String(body?.name ?? "").trim();
    const emailValue = String(body?.email ?? "").trim().toLowerCase();
    const phoneValue = String(body?.phone ?? "").trim();
    const serviceValue = String(body?.service ?? "").trim();
    const messageValue = String(body?.message ?? "").trim();
    const companyValue = String(body?.company ?? "").trim();
    const budgetValue = String(body?.budget ?? "").trim();
    const timelineValue = String(body?.timeline ?? "").trim();
    const contactMethodValue = String(body?.contactMethod ?? "").trim();

    if (!isValidEmail(emailValue)) {
      return noStoreJson(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const fieldLimits: Array<[string, number]> = [
      [nameValue, 200], [companyValue, 200], [emailValue, 254], [phoneValue, 80],
      [serviceValue, 200], [budgetValue, 100], [timelineValue, 100],
      [contactMethodValue, 100], [messageValue, 5000],
    ];

    if (fieldLimits.some(([value, limit]) => value.length > limit)) {
      return noStoreJson(
        { success: false, message: "One or more fields are too long." },
        { status: 400 }
      );
    }

    if (!nameValue || !emailValue || !phoneValue || !serviceValue || !messageValue) {
      return noStoreJson(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(nameValue);
    const safeCompany = escapeHtml(companyValue || "N/A");
    const safeEmail = escapeHtml(emailValue);
    const safePhone = escapeHtml(phoneValue);
    const safeService = escapeHtml(serviceValue);
    const safeBudget = escapeHtml(budgetValue || "N/A");
    const safeTimeline = escapeHtml(timelineValue || "N/A");
    const safeContactMethod = escapeHtml(contactMethodValue || "N/A");
    const safeMessage = escapeHtml(messageValue).replace(/\n/g, "<br />");

    const emailPromise = resend.emails.send({
      from,
      to: "geekyacedigital@gmail.com",
      replyTo: emailValue,
      subject: sanitizeSubject(`New Project Enquiry from ${nameValue}`, "New Project Enquiry"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #1e293b; background: #f8fafc; padding: 30px;">
          <div style="max-width: 700px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 30px; border: 1px solid #e2e8f0;">
            <h2 style="color: #16a34a; margin-top: 0;">📩 New Project Enquiry</h2>
            <p>A new project enquiry has been submitted through the Geekyace Digital Hub website.</p>
            <table style="border-collapse: collapse; width: 100%; margin-top: 25px;">
              <tr><td style="padding: 10px 0;"><strong>Name</strong></td><td style="padding: 10px 0;">${safeName}</td></tr>
              <tr><td style="padding: 10px 0;"><strong>Company</strong></td><td style="padding: 10px 0;">${safeCompany}</td></tr>
              <tr><td style="padding: 10px 0;"><strong>Email</strong></td><td style="padding: 10px 0;">${safeEmail}</td></tr>
              <tr><td style="padding: 10px 0;"><strong>Phone</strong></td><td style="padding: 10px 0;">${safePhone}</td></tr>
              <tr><td style="padding: 10px 0;"><strong>Service</strong></td><td style="padding: 10px 0;">${safeService}</td></tr>
              <tr><td style="padding: 10px 0;"><strong>Budget</strong></td><td style="padding: 10px 0;">${safeBudget}</td></tr>
              <tr><td style="padding: 10px 0;"><strong>Timeline</strong></td><td style="padding: 10px 0;">${safeTimeline}</td></tr>
              <tr><td style="padding: 10px 0;"><strong>Preferred Contact</strong></td><td style="padding: 10px 0;">${safeContactMethod}</td></tr>
            </table>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;" />
            <h3>Project Description</h3>
            <div style="background: #f8fafc; border-radius: 12px; padding: 20px;">${safeMessage}</div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;" />
            <p style="color: #64748b; font-size: 13px;">Sent automatically from the Geekyace Digital Hub website.</p>
          </div>
        </div>
      `,
    });

    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;
    try {
      const result = await Promise.race([
        emailPromise,
        new Promise<never>((_, reject) => {
          timeoutHandle = setTimeout(
            () => reject(new Error("RESEND_TIMEOUT")),
            RESEND_TIMEOUT_MS
          );
        }),
      ]);

      if (result.error) {
        console.error("Resend contact email failed.");
        return noStoreJson(
          { success: false, message: "We couldn't send your enquiry right now. Please try again." },
          { status: 500 }
        );
      }

      return noStoreJson({ success: true, message: "Email sent successfully." });
    } finally {
      if (timeoutHandle) clearTimeout(timeoutHandle);
    }

    /*

    if (result.error) {
      console.error("Resend contact email failed.");
      return noStoreJson(
        { success: false, message: "We couldn't send your enquiry right now. Please try again." },
        { status: 500 }
      );
    }

    return noStoreJson({ success: true, message: "Email sent successfully." });
  } catch (error) {
    if (error instanceof Error && error.message === "RESEND_TIMEOUT") {
      console.error("Contact email request timed out.");
      return noStoreJson(
        { success: false, message: "The email service is taking too long to respond. Please try again." },
        { status: 504 }
      );
    }
    console.error("Contact API request failed.");
    return noStoreJson(
      { success: false, message: "Something went wrong while sending your enquiry." },
      { status: 500 }
    );
  }
}
