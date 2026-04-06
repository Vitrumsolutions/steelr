import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const {
      propertyType,
      projectType,
      doorQuantity,
      installationType,
      width,
      height,
      colour,
      colourOther,
      glazing,
      hardware,
      security,
      fireRating,
      postcode,
      timeline,
      budget,
      name,
      phone,
      email,
      notes,
    } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const colourDisplay = colour === "Other" ? colourOther || "Other" : colour;

    const row = (label: string, value: string | undefined) => {
      if (!value) return "";
      return `
        <tr>
          <td style="padding: 10px 16px; border-bottom: 1px solid #eee; font-weight: bold; width: 200px; color: #6b5a42; font-size: 13px;">${label}</td>
          <td style="padding: 10px 16px; border-bottom: 1px solid #eee; font-size: 14px; color: #1a1a18;">${value}</td>
        </tr>`;
    };

    const html = `
      <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 640px; margin: 0 auto;">
        <div style="background: #1a1a18; padding: 24px 32px;">
          <h1 style="color: #c9a96e; font-size: 20px; font-weight: 300; letter-spacing: 0.1em; margin: 0;">New Design Estimate Request</h1>
        </div>

        <div style="padding: 24px 0;">
          <h2 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.3em; color: #b8943f; margin: 0 0 8px 0;">Contact Details</h2>
          <table style="border-collapse: collapse; width: 100%;">
            ${row("Name", name)}
            ${row("Phone", phone)}
            ${row("Email", email)}
          </table>
        </div>

        <div style="padding: 24px 0;">
          <h2 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.3em; color: #b8943f; margin: 0 0 8px 0;">Project Details</h2>
          <table style="border-collapse: collapse; width: 100%;">
            ${row("Property Type", propertyType)}
            ${row("Project Type", projectType)}
            ${doorQuantity ? row("Number of Doors", doorQuantity) : ""}
            ${row("Installation", installationType)}
          </table>
        </div>

        <div style="padding: 24px 0;">
          <h2 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.3em; color: #b8943f; margin: 0 0 8px 0;">Door Specification</h2>
          <table style="border-collapse: collapse; width: 100%;">
            ${width ? row("Width", `${width} mm`) : ""}
            ${height ? row("Height", `${height} mm`) : ""}
            ${row("Colour", colourDisplay)}
            ${row("Glazing", glazing)}
            ${row("Hardware Finish", hardware)}
            ${row("Security Rating", security)}
            ${row("Fire Rating", fireRating)}
          </table>
        </div>

        <div style="padding: 24px 0;">
          <h2 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.3em; color: #b8943f; margin: 0 0 8px 0;">Site &amp; Budget</h2>
          <table style="border-collapse: collapse; width: 100%;">
            ${row("Location / Postcode", postcode)}
            ${row("Timeline", timeline)}
            ${row("Budget Indication", budget)}
          </table>
        </div>

        ${
          notes
            ? `<div style="padding: 24px 0;">
                <h2 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.3em; color: #b8943f; margin: 0 0 8px 0;">Additional Notes</h2>
                <p style="font-size: 14px; color: #1a1a18; line-height: 1.7; margin: 0;">${notes}</p>
              </div>`
            : ""
        }

        ${
          body.utm_source
            ? `<div style="padding: 24px 0;">
                <h2 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.3em; color: #c9a96e; margin: 0 0 8px 0;">Lead Source</h2>
                <table style="border-collapse: collapse; width: 100%;">
                  ${row("Source", body.utm_source)}
                  ${row("Medium", body.utm_medium)}
                  ${row("Campaign", body.utm_campaign)}
                </table>
              </div>`
            : ""
        }

        <div style="border-top: 1px solid #eee; padding: 16px 0; margin-top: 8px;">
          <p style="font-size: 11px; color: #999; margin: 0;">Submitted via steelr.co.uk/design-estimate</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "SteelR Estimates <noreply@steelr.co.uk>",
      to: "info@supplywindows.co.uk",
      subject: "New Design Estimate Request \u2014 SteelR",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Estimate form error:", error);
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}
