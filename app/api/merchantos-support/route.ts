import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit, getClientIdentifier, rateLimitResponse } from "@/app/lib/rate-limit";

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
    const rate = checkRateLimit(`merchantos-support:${getClientIdentifier(request)}`, 5, 10 * 60 * 1000);
    if (!rate.allowed) return rateLimitResponse(rate.retryAfterSeconds);

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const supportTo = process.env.MERCHANTOS_SUPPORT_EMAIL || "hello@geekyacedigitalhub.com";

    if (!apiKey || !from) {
      console.error("MerchantOS support email is not configured.");
      return NextResponse.json(
        { success: false, message: "Support email is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const formData = await request.formData();
    const honeypot = String(formData.get("website") || "").trim();
    if (honeypot) return NextResponse.json({ success: true });

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const storeUrl = String(formData.get("storeUrl") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const themeName = String(formData.get("themeName") || "MerchantOS").trim();
    const attachment = formData.get("attachment");

    if (!name || !email || !storeUrl || !description) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (name.length > 120 || email.length > 254 || storeUrl.length > 500 || description.length > 5000) {
      return NextResponse.json(
        { success: false, message: "One or more fields are too long." },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email) || !isHttpUrl(storeUrl)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address and store URL." },
        { status: 400 }
      );
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    if (attachment instanceof File && attachment.size > 0) {
      if (attachment.size > MAX_FILE_BYTES) {
        return NextResponse.json(
          { success: false, message: "The attachment must be 5 MB or smaller." },
          { status: 400 }
        );
      }
      if (!ALLOWED_TYPES.has(attachment.type)) {
        return NextResponse.json(
          { success: false, message: "Upload a PNG, JPG, WebP, or PDF file." },
          { status: 400 }
        );
      }
      attachments.push({
        filename: attachment.name || "merchantos-support-file",
        content: Buffer.from(await attachment.arrayBuffer()),
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeStoreUrl = escapeHtml(storeUrl);
    const safeDescription = escapeHtml(description).replace(/\n/g, "<br />");
    const safeThemeName = escapeHtml(themeName);

    const ticket = await resend.emails.send({
      from,
      to: supportTo,
      replyTo: email,
      subject: `[MerchantOS Support] ${name} — ${storeUrl}`,
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

    if (ticket.error) {
      console.error("MerchantOS support ticket email failed:", ticket.error);
      return NextResponse.json(
        { success: false, message: "We couldn't send your support request. Please try again." },
        { status: 500 }
      );
    }

    const receipt = await resend.emails.send({
      from,
      to: email,
      subject: "We received your MerchantOS support request",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2 style="color:#16a34a">We received your request</h2>
          <p>Hi ${safeName},</p>
          <p>Thanks for contacting MerchantOS support. Your request for <strong>${safeStoreUrl}</strong> has been received.</p>
          <p>We aim to reply within two business days. Critical confirmed MerchantOS theme bugs are prioritized.</p>
          <p>You can reply to this email if you need to add useful details.</p>
          <p>— GeekyAce Digital Hub</p>
        </div>
      `,
      replyTo: supportTo,
    });

    if (receipt.error) {
      console.error("MerchantOS support auto-responder failed:", receipt.error);
      return NextResponse.json(
        { success: false, message: "Your request was received, but the confirmation email could not be sent." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Support request received." });
  } catch (error) {
    console.error("MERCHANTOS SUPPORT API ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong while sending your support request." },
      { status: 500 }
    );
  }
}
