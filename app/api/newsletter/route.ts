import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIdentifier, rateLimitResponse } from "@/app/lib/rate-limit";
import { hasBodyExceededLimit, JSON_BODY_LIMIT, requestTooLargeResponse } from "@/app/lib/request-limits";
import { isSameOriginRequest, sameOriginFailureResponse } from "@/app/lib/request-security";

function noStoreJson(data: unknown, init?: ResponseInit) {
  return NextResponse.json(data, {
    ...init,
    headers: { "Cache-Control": "no-store", ...(init?.headers ?? {}) },
  });
}

function isValidEmail(v: string) {
  return v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// Simple in-memory subscriber list (replaced with a DB / audience list later).
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const subs = new Set<string>();

export async function POST(request: Request) {
  try {
    if (!isSameOriginRequest(request)) return sameOriginFailureResponse();
    if (hasBodyExceededLimit(request, JSON_BODY_LIMIT)) return requestTooLargeResponse();
    const rate = checkRateLimit(`newsletter:${getClientIdentifier(request)}`, 3, 5 * 60 * 1000);
    if (!rate.allowed) return rateLimitResponse(rate.retryAfterSeconds);

    if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
      return noStoreJson({ success: false, message: "Content-Type must be application/json." }, { status: 415 });
    }

    const { email } = (await request.json()) as { email?: unknown };
    if (typeof email !== "string" || !isValidEmail(email)) {
      return noStoreJson({ success: false, message: "Please enter a valid email." }, { status: 400 });
    }
    const normalized = email.trim().toLowerCase();
    if (subs.has(normalized)) {
      return noStoreJson({ success: true, message: "You're already subscribed." });
    }
    subs.add(normalized);

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (apiKey && from && to) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to,
        subject: `New newsletter subscriber: ${normalized}`,
        html: `<p>New newsletter signup: <strong>${normalized}</strong></p>`,
      });
    }

    return noStoreJson({ success: true, message: "You're in. Check your inbox for a confirmation." });
  } catch (err) {
    console.error("newsletter error", err);
    return noStoreJson({ success: false, message: "Something went wrong. Try again." }, { status: 500 });
  }
}
