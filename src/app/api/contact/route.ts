import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

// File-upload constraints — must mirror src/components/FileUpload.tsx.
const MAX_FILES = 3;
const PER_FILE_MAX_BYTES = 4 * 1024 * 1024;
const TOTAL_FILES_MAX_BYTES = 4 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
]);
const FIELD_CAP = 500;
const MESSAGE_CAP = 2000;

function cap(s: unknown, max = FIELD_CAP): string {
  return String(s ?? "").slice(0, max);
}

/** Strip CR/LF from any field that flows into an email header (CWE-93). */
function stripCrlf(s: string): string {
  return s.replace(/[\r\n]/g, " ");
}

function escapeHtml(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const contentType = req.headers.get("content-type") || "";
    const isMultipart = contentType.startsWith("multipart/form-data");

    let name: string;
    let phone: string;
    let email: string;
    let postcode: string;
    let propertyType: string;
    let doorStyle: string;
    let message: string;
    let source: string;
    let utm_source: string;
    let utm_medium: string;
    let utm_campaign: string;
    const validatedFiles: { filename: string; type: string; content: string }[] = [];

    if (isMultipart) {
      const fd = await req.formData();
      name = cap(fd.get("name"));
      phone = cap(fd.get("phone"));
      email = cap(fd.get("email"));
      postcode = cap(fd.get("postcode"));
      propertyType = cap(fd.get("propertyType"));
      doorStyle = cap(fd.get("doorStyle"));
      message = cap(fd.get("message"), MESSAGE_CAP);
      source = cap(fd.get("source"));
      utm_source = cap(fd.get("utm_source"));
      utm_medium = cap(fd.get("utm_medium"));
      utm_campaign = cap(fd.get("utm_campaign"));

      const fileEntries = fd.getAll("files").filter((v): v is File => v instanceof File);
      if (fileEntries.length > MAX_FILES) {
        return NextResponse.json(
          { error: `Max ${MAX_FILES} files per submission.` },
          { status: 400 }
        );
      }
      let totalSize = 0;
      for (const f of fileEntries) {
        if (!ACCEPTED_FILE_TYPES.has(f.type)) {
          return NextResponse.json(
            { error: `File type "${f.type}" not allowed. JPEG, PNG, WebP, or PDF only.` },
            { status: 400 }
          );
        }
        if (f.size > PER_FILE_MAX_BYTES) {
          return NextResponse.json(
            { error: `File "${f.name}" exceeds 4MB limit.` },
            { status: 413 }
          );
        }
        totalSize += f.size;
        if (totalSize > TOTAL_FILES_MAX_BYTES) {
          return NextResponse.json(
            { error: "Total attachment size exceeds 4MB limit." },
            { status: 413 }
          );
        }
        const buf = Buffer.from(await f.arrayBuffer());
        const safeName = f.name.replace(/[/\\]/g, "_").slice(0, 100) || "attachment";
        validatedFiles.push({
          filename: safeName,
          type: f.type,
          content: buf.toString("base64"),
        });
      }
    } else {
      const body = await req.json();
      name = cap(body.name);
      phone = cap(body.phone);
      email = cap(body.email);
      postcode = cap(body.postcode);
      propertyType = cap(body.propertyType);
      doorStyle = cap(body.doorStyle);
      message = cap(body.message, MESSAGE_CAP);
      source = cap(body.source);
      utm_source = cap(body.utm_source);
      utm_medium = cap(body.utm_medium);
      utm_campaign = cap(body.utm_campaign);
    }

    // Minimum required: name + phone (everything else can be collected on the call-back).
    if (!name.trim() || !phone.trim()) {
      return NextResponse.json(
        { error: "Missing required fields (name and phone required)" },
        { status: 400 }
      );
    }

    // Subject includes source tag so you can triage inline enquiries vs full-form at a glance.
    // CRLF stripped from source to prevent header injection (CWE-93).
    const safeSource = stripCrlf(source);
    const subject = safeSource
      ? `New Enquiry [${safeSource}] — SteelR`
      : "New Enquiry — SteelR";

    const row = (label: string, value?: string) =>
      value
        ? `<tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold; width: 160px;">${escapeHtml(label)}</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee;">${escapeHtml(value)}</td>
          </tr>`
        : "";

    const attachmentRow =
      validatedFiles.length > 0
        ? `<tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold; color: #c9a96e;">Attachments</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; color: #c9a96e;">${validatedFiles.length} file${validatedFiles.length > 1 ? "s" : ""} (${validatedFiles.map((f) => escapeHtml(f.filename)).join(", ")})</td>
          </tr>`
        : "";

    const emailPayload: Parameters<typeof resend.emails.send>[0] = {
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
          ${attachmentRow}
          ${safeSource ? `<tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold; color: #c9a96e;">Page / Source</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; color: #c9a96e;">${escapeHtml(safeSource)}</td>
          </tr>` : ""}
          ${utm_source ? `<tr>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; font-weight: bold; color: #c9a96e;">UTM</td>
            <td style="padding: 8px 16px; border-bottom: 1px solid #eee; color: #c9a96e;">${escapeHtml(utm_source)} / ${escapeHtml(utm_medium || "direct")} / ${escapeHtml(utm_campaign || "none")}</td>
          </tr>` : ""}
        </table>
      `,
    };
    if (validatedFiles.length > 0) {
      emailPayload.attachments = validatedFiles.map((f) => ({
        filename: f.filename,
        content: f.content,
      }));
    }

    await resend.emails.send(emailPayload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
