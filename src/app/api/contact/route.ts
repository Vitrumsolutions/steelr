import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, phone, email, propertyType, doorStyle, message } = body;

    if (!name || !phone || !email || !propertyType || !doorStyle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "SteelR Enquiries <noreply@steelr.co.uk>",
      to: "info@supplywindows.co.uk",
      subject: "New Enquiry — SteelR",
      html: `
        <h2>New Enquiry from steelr.co.uk</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold; width: 160px;">Name</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold;">Property Type</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee;">${propertyType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold;">Door Style</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee;">${doorStyle}</td>
          </tr>
          ${
            message
              ? `<tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold;">Message</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee;">${message}</td>
          </tr>`
              : ""
          }
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
