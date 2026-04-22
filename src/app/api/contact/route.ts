import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const {
      name,
      phone,
      email,
      postcode,
      propertyType,
      doorStyle,
      message,
      source, // NEW: where on the site the enquiry came from (e.g. area-london, collection-X, blog-Y, hub-security)
      utm_source,
      utm_medium,
      utm_campaign,
    } = body;

    // Minimum required: name + phone (everything else can be collected on the call-back).
    // Compact forms like QuickEnquiry send just name/phone/postcode; the full ContactForm
    // still sends propertyType + doorStyle + email as it does now.
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Missing required fields (name and phone required)" },
        { status: 400 }
      );
    }

    // Subject includes source tag so you can triage inline enquiries vs full-form at a glance
    const subject = source
      ? `New Enquiry [${source}] — SteelR`
      : "New Enquiry — SteelR";

    const row = (label: string, value?: string) =>
      value
        ? `<tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold; width: 160px;">${label}</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee;">${value}</td>
          </tr>`
        : "";

    await resend.emails.send({
      from: "SteelR Enquiries <noreply@steelr.co.uk>",
      to: "info@supplywindows.co.uk",
      subject,
      html: `
        <h2>New Enquiry from steelr.co.uk</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          ${row("Name", name)}
          ${row("Phone", phone)}
          ${row("Email", email)}
          ${row("Postcode", postcode)}
          ${row("Property Type", propertyType)}
          ${row("Door Style", doorStyle)}
          ${row("Message", message)}
          ${source ? `<tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold; color: #c9a96e;">Page / Source</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; color: #c9a96e;">${source}</td>
          </tr>` : ""}
          ${utm_source ? `<tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold; color: #c9a96e;">UTM</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; color: #c9a96e;">${utm_source} / ${utm_medium || "direct"} / ${utm_campaign || "none"}</td>
          </tr>` : ""}
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
