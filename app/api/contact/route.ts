import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

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
    } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || "N/A");
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service);
    const safeBudget = escapeHtml(budget || "N/A");
    const safeTimeline = escapeHtml(timeline || "N/A");
    const safeContactMethod = escapeHtml(
      contactMethod || "N/A"
    );
    const safeMessage = escapeHtml(message).replace(
      /\n/g,
      "<br />"
    );

    const result = await resend.emails.send({
      from: "Geekyace Contact Form <onboarding@resend.dev>",
      to: "geekyacedigital@gmail.com",
      replyTo: email,
      subject: `New Project Enquiry from ${name}`,
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