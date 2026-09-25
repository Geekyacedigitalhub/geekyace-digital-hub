import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIdentifier, rateLimitResponse } from "@/app/lib/rate-limit";
import { hasBodyExceededLimit, UPLOAD_BODY_LIMIT, requestTooLargeResponse } from "@/app/lib/request-limits";
import { isSameOriginRequest, sameOriginFailureResponse } from "@/app/lib/request-security";

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "application/pdf",
]);

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(value: string): boolean {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function hasValidFileSignature(buffer: Buffer, type: string): boolean {
  if (type === "image/png") return buffer.length >= 8 && buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  if (type === "image/jpeg") return buffer.length >= 3 && buffer.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]));
  if (type === "image/webp") return buffer.length >= 12 && buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP";
  if (type === "application/pdf") return buffer.subarray(0, 5).toString("ascii") === "%PDF-";
  return false;
}

function sanitizeFilename(value: string): string {
  const cleaned = value.normalize("NFKC").replace(/[^a-zA-Z0-9._-]/g, "_").replace(/_+/g, "_").slice(0, 120);
  return cleaned || "merchantos-support-file";
}

function sanitizeSubject(value: string, fallback: string): string {
  const cleaned = value.replace(/[\r\n]+/g, " ").trim();
  return cleaned || fallback;
}

const RESEND_TIMEOUT_MS = 15_000;

function noStoreJson(data: unknown, init?: ResponseInit) {
  return NextResponse.json(data, {
    ...init,
    headers: { "Cache-Control": "no-store", ...(init?.headers ?? {}) },
  });
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    if (!isSameOriginRequest(request)) return sameOriginFailureResponse();
    if (hasBodyExceededLimit(request, UPLOAD_BODY_LIMIT)) return requestTooLargeResponse();
    const rate = checkRateLimit(`merchantos-support:${getClientIdentifier(request)}`, 5, 10 * 60 * 1000);
    if (!rate.allowed) return rateLimitResponse(rate.retryAfterSeconds);

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const supportTo = process.env.MERCHANTOS_SUPPORT_EMAIL || "hello@geekyacedigitalhub.com";

    if (!apiKey || !from) {
      console.error("MerchantOS support email is not configured.");
      return noStoreJson(
        { success: false, message: "Support email is not configured yet." },
        { status: 500 }
      );
    }

    if (request.headers.get("content-type")?.toLowerCase().startsWith("multipart/form-data") !== true) {
      return noStoreJson(
        { success: false, message: "Content-Type must be multipart/form-data." },
        { status: 415 }
      );
    }

    const resend = new Resend(apiKey);
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return noStoreJson(
        { success: false, message: "Invalid multipart request body." },
        { status: 400 }
      );
    }
    const honeypot = String(formData.get("website") || "").trim();
    if (honeypot) return noStoreJson({ success: true });

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const storeUrl = String(formData.get("storeUrl") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const themeName = String(formData.get("themeName") || "MerchantOS").trim();
    const attachment = formData.get("attachment");

    if (!name || !email || !storeUrl || !description) {
      return noStoreJson(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (name.length > 120 || email.length > 254 || storeUrl.length > 500 || description.length > 5000 || themeName.length > 120) {
      return noStoreJson(
        { success: false, message: "One or more fields are too long." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email) || !isHttpUrl(storeUrl)) {
      return noStoreJson(
        { success: false, message: "Please enter a valid email address and store URL." },
        { status: 400 }
      );
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    if (attachment instanceof File && attachment.size > 0) {
      if (attachment.size > MAX_FILE_BYTES) {
        return noStoreJson(
          { success: false, message: "The attachment must be 5 MB or smaller." },
          { status: 400 }
        );
      }
      if (!ALLOWED_TYPES.has(attachment.type)) {
        return noStoreJson(
          { success: false, message: "Upload a PNG, JPG, WebP, or PDF file." },
          { status: 400 }
        );
      }
      const content = Buffer.from(await attachment.arrayBuffer());
      if (!hasValidFileSignature(content, attachment.type)) {
        return noStoreJson(
          { success: false, message: "The attachment does not match its file type." },
          { status: 400 }
        );
      }
      attachments.push({
        filename: sanitizeFilename(attachment.name),
        content,
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeStoreUrl = escapeHtml(storeUrl);
    const safeDescription = escapeHtml(description).replace(/\n/g, "<br />");
    const safeThemeName = escapeHtml(themeName);

    const emailPromise = resend.emails.send({
      from,
      to: supportTo,
      replyTo: email,
      subject: sanitizeSubject(`[MerchantOS Support] ${name} — ${storeUrl}`, "[MerchantOS Support] New Request"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2 style="color:#16a34a">New MerchantOS support request</h2>
          <p><strong>Theme:</strong> ${safeThemeName}</p>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Store URL:</strong> ${safeStoreUrl}</p>
          <h3>Problem description</h3>
          <p>${safeDescription}</p>
        </div>
      `,
      attachments: attachments.length ? attachments : undefined,
    });

    const ticket = await Promise.race([
      emailPromise,
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error("RESEND_TIMEOUT")), RESEND_TIMEOUT_MS)),
    ]);

    if (ticket.error) {
      console.error("MerchantOS support ticket email failed.");
      return noStoreJson(
        { success: false, message: "We couldn't send your support request. Please try again." },
        { status: 500 }
      );
    }

    return noStoreJson({ success: true, message: "Support request received." });
  } catch (error) {
    if (error instanceof Error && error.message === "RESEND_TIMEOUT") {
      console.error("MerchantOS support email request timed out.");
      return noStoreJson(
        { success: false, message: "The email service is taking too long to respond. Please try again." },
        { status: 504 }
      );
    }
    console.error("MerchantOS support API request failed.");
    return noStoreJson(
      { success: false, message: "Something went wrong while sending your support request." },
      { status: 500 }
    );
  }
}
