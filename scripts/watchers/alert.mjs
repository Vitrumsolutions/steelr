import { ALERT_EMAIL } from "./config.mjs";

// Sends a single Resend email when alerts are present. Requires RESEND_API_KEY
// in env. Returns true on success; logs and returns false on failure (the
// digest run itself still succeeds even if alerting fails — we don't want a
// flaky email service to fail the workflow).
export async function sendAlertEmail(alerts, digestPath, digestUrl) {
  if (!alerts.length) return true;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[alert] RESEND_API_KEY not set; skipping email. Alerts would have been:");
    for (const a of alerts) console.error(`  - ${a.watcher} ${a.path}: ${a.message}`);
    return false;
  }

  const date = new Date().toISOString().slice(0, 10);
  const subject = `${ALERT_EMAIL.subjectPrefix} ${alerts.length} alert${alerts.length === 1 ? "" : "s"} ${date}`;

  const lines = [];
  lines.push(`<h2>SteelR watchers — ${alerts.length} alert${alerts.length === 1 ? "" : "s"} on ${date}</h2>`);
  lines.push(`<p>Digest: <code>${digestPath}</code></p>`);
  if (digestUrl) lines.push(`<p>Permalink: <a href="${digestUrl}">${digestUrl}</a></p>`);
  lines.push("<table border=1 cellpadding=8 cellspacing=0><thead><tr><th>Watcher</th><th>Path</th><th>Message</th></tr></thead><tbody>");
  for (const a of alerts) {
    lines.push(
      `<tr><td>${escapeHtml(a.watcher)}</td><td>${escapeHtml(a.path)}</td><td>${escapeHtml(a.message)}</td></tr>`
    );
  }
  lines.push("</tbody></table>");
  lines.push("<p style='color:#666;font-size:12px'>Sent by scripts/watchers/alert.mjs. To stop: disable the watchers-nightly workflow in GitHub Actions.</p>");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: ALERT_EMAIL.from,
        to: ALERT_EMAIL.to,
        subject,
        html: lines.join("\n"),
      }),
    });
    if (!res.ok) {
      console.error(`[alert] Resend HTTP ${res.status}: ${await res.text()}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error(`[alert] send failed: ${err.message}`);
    return false;
  }
}

function escapeHtml(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
