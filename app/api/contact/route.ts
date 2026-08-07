import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
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
          message: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "Geekyace Contact Form <onboarding@resend.dev>",
      to: "geekyacedigital@gmail.com",
      replyTo: email,
      subject: `New Project Enquiry from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7;padding:20px;">
          <h2 style="color:#16a34a;">📩 New Project Enquiry</h2>

          <table style="border-collapse:collapse;width:100%;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Company</strong></td>
              <td>${company || "N/A"}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td><strong>Service</strong></td>
              <td>${service}</td>
            </tr>

            <tr>
              <td><strong>Budget</strong></td>
              <td>${budget || "N/A"}</td>
            </tr>

            <tr>
              <td><strong>Timeline</strong></td>
              <td>${timeline || "N/A"}</td>
            </tr>

            <tr>
              <td><strong>Preferred Contact</strong></td>
              <td>${contactMethod || "N/A"}</td>
            </tr>
          </table>

          <hr style="margin:30px 0;" />

          <h3>Project Description</h3>

          <p>${message}</p>

          <hr style="margin:30px 0;" />

          <p style="color:#666;">
            Sent automatically from the Geekyace Digital Hub website.
          </p>
        </div>
      `,
    });

    console.log("========== RESEND RESPONSE ==========");
    console.log(result);
    console.log("====================================");

    if (result.error) {
      console.error(result.error);

      return NextResponse.json(
        {
          success: false,
          message: result.error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 }
    );
  }
}