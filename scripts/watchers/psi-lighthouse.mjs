import { fetchWithTimeout } from "./utils.mjs";
import { SITE_ORIGIN, PSI_PAGES, PSI_THRESHOLDS } from "./config.mjs";

// Google PageSpeed Insights API v5 — no key required at low volume (<25k/day).
// We hit ~20 calls/day per project (10 URLs × mobile+desktop), well under the cap.
// Adding PAGESPEED_API_KEY env var would raise rate limits but is not required.
const PSI_ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];

async function fetchPsi(url, strategy) {
  const apiKey = process.env.PAGESPEED_API_KEY;
  const params = new URLSearchParams({ url, strategy });
  for (const c of CATEGORIES) params.append("category", c);
  if (apiKey) params.set("key", apiKey);

  const res = await fetchWithTimeout(`${PSI_ENDPOINT}?${params}`, {}, 90_000);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`PSI HTTP ${res.status}: ${body.slice(0, 200)}`);
  }
  return res.json();
}

function extractScores(report) {
  const cats = report?.lighthouseResult?.categories || {};
  const out = {};
  for (const c of CATEGORIES) {
    const score = cats[c]?.score;
    out[c] = typeof score === "number" ? Math.round(score * 100) : null;
  }
  const metrics = report?.lighthouseResult?.audits || {};
  out._metrics = {
    lcp: metrics["largest-contentful-paint"]?.numericValue ?? null,
    cls: metrics["cumulative-layout-shift"]?.numericValue ?? null,
    tbt: metrics["total-blocking-time"]?.numericValue ?? null,
    fcp: metrics["first-contentful-paint"]?.numericValue ?? null,
  };
  return out;
}

export async function runPsiLighthouse(priorState = {}) {
  const findings = [];
  const state = {};

  for (const page of PSI_PAGES) {
    const url = SITE_ORIGIN + page.path;
    for (const strategy of ["mobile", "desktop"]) {
      const key = `${page.path}|${strategy}`;
      try {
        const report = await fetchPsi(url, strategy);
        const scores = extractScores(report);
        state[key] = scores;

        const prior = priorState[key];
        if (!prior) {
          findings.push({
            severity: "ok",
            watcher: "psi-lighthouse",
            path: `${page.path} (${strategy})`,
            message: `baseline P${scores.performance ?? "?"}/A${scores.accessibility ?? "?"}/B${scores["best-practices"] ?? "?"}/S${scores.seo ?? "?"}`,
          });
        } else {
          const drops = [];
          for (const c of CATEGORIES) {
            const now = scores[c];
            const before = prior[c];
            if (typeof now === "number" && typeof before === "number") {
              const delta = before - now;
              if (delta >= PSI_THRESHOLDS.categoryDropPoints) {
                drops.push(`${c} ${before}→${now} (-${delta})`);
              }
            }
          }
          if (drops.length) {
            findings.push({
              severity: "alert",
              watcher: "psi-lighthouse",
              path: `${page.path} (${strategy})`,
              message: `score drop: ${drops.join("; ")}`,
            });
          } else {
            findings.push({
              severity: "info",
              watcher: "psi-lighthouse",
              path: `${page.path} (${strategy})`,
              message: `P${scores.performance ?? "?"}/A${scores.accessibility ?? "?"}/B${scores["best-practices"] ?? "?"}/S${scores.seo ?? "?"}`,
            });
          }
        }
      } catch (err) {
        // 429 quota errors are operational, not a site alert. Without a
        // PAGESPEED_API_KEY they happen on the shared anonymous quota. Tag
        // as info so the inbox isn't woken up. Other PSI failures (5xx,
        // network, parse) stay as alert.
        const isQuota = /HTTP 429|Quota exceeded/i.test(err.message);
        findings.push({
          severity: isQuota ? "info" : "alert",
          watcher: "psi-lighthouse",
          path: `${page.path} (${strategy})`,
          message: isQuota ? `PSI quota: ${err.message.slice(0, 100)}` : `PSI failed: ${err.message}`,
        });
      }
    }
  }

  return { findings, state };
}
