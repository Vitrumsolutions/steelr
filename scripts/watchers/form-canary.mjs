import { fetchWithTimeout } from "./utils.mjs";
import { SITE_ORIGIN, FORM_CANARIES } from "./config.mjs";

// HTTP-only canary: verifies the API endpoint accepts a POST and returns success.
// Does NOT verify Resend email delivery — that needs phase 2 with Resend API
// inbox polling or a server-side X-Canary header short-circuit in the route.
// The payload includes a [CANARY] marker so any email landing in the inbox is
// recognisable and can be filtered.
export async function runFormCanary() {
  const findings = [];

  for (const canary of FORM_CANARIES) {
    try {
      const res = await fetchWithTimeout(canary.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Set Origin header for parity with browser-originated POSTs. SteelR's
          // /api/contact does not currently lock origins, but Vitrums' does;
          // setting it on both keeps behaviour identical.
          "Origin": SITE_ORIGIN,
          "Referer": `${SITE_ORIGIN}/contact`,
        },
        body: JSON.stringify(canary.payload),
      });

      const body = await res.text();
      let parsed;
      try { parsed = JSON.parse(body); } catch { parsed = null; }

      if (!res.ok) {
        findings.push({
          severity: "alert",
          watcher: "form-canary",
          path: canary.label,
          message: `HTTP ${res.status} on ${canary.label}`,
          details: { body: body.slice(0, 300) },
        });
        continue;
      }

      if (parsed && parsed.success === false) {
        findings.push({
          severity: "alert",
          watcher: "form-canary",
          path: canary.label,
          message: `endpoint returned success:false on ${canary.label}`,
          details: { error: parsed.error },
        });
        continue;
      }

      findings.push({
        severity: "ok",
        watcher: "form-canary",
        path: canary.label,
        message: `${canary.label} responded HTTP ${res.status}`,
      });
    } catch (err) {
      findings.push({
        severity: "alert",
        watcher: "form-canary",
        path: canary.label,
        message: `canary failed: ${err.message}`,
      });
    }
  }

  return { findings, state: {} };
}
