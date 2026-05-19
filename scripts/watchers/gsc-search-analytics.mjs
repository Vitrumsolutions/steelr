import { createSign } from "node:crypto";
import { fetchWithTimeout } from "./utils.mjs";
import { GSC_CONFIG } from "./config.mjs";

// Mints a Google service-account JWT and exchanges it for an OAuth access token
// without pulling in the `googleapis` npm package. Keeps watchers dep-free.

function b64url(input) {
  return Buffer.from(input).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

async function getAccessToken(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = b64url(JSON.stringify({
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claim}`);
  const sig = b64url(signer.sign(serviceAccount.private_key));
  const jwt = `${header}.${claim}.${sig}`;

  const res = await fetchWithTimeout("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    throw new Error(`OAuth token exchange failed: HTTP ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  return data.access_token;
}

async function querySearchAnalytics(token, siteUrl, body) {
  const res = await fetchWithTimeout(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  if (!res.ok) {
    throw new Error(`GSC HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  return res.json();
}

function isoDateOffset(daysBack) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - daysBack);
  return d.toISOString().slice(0, 10);
}

function loadServiceAccount() {
  const candidates = [
    process.env.GSC_SERVICE_ACCOUNT_JSON,
    process.env.GOOGLE_INDEXING_SERVICE_ACCOUNT,
  ];
  for (const raw of candidates) {
    if (!raw) continue;
    try {
      const parsed = JSON.parse(raw);
      if (parsed.client_email && parsed.private_key) return parsed;
    } catch {
      // fall through
    }
  }
  return null;
}

export async function runGscSearchAnalytics(priorState = {}) {
  const findings = [];
  const state = {};

  const sa = loadServiceAccount();
  if (!sa) {
    findings.push({
      severity: "info",
      watcher: "gsc-search-analytics",
      path: "(skipped)",
      message: "GSC_SERVICE_ACCOUNT_JSON not set; pull skipped",
    });
    return { findings, state: priorState };
  }

  let token;
  try {
    token = await getAccessToken(sa);
  } catch (err) {
    findings.push({
      severity: "alert",
      watcher: "gsc-search-analytics",
      path: "(auth)",
      message: `OAuth failed: ${err.message}`,
    });
    return { findings, state: priorState };
  }

  // Last full 7-day window (GSC data lags ~2 days, so end = today-3, start = today-9).
  const endDate = isoDateOffset(3);
  const startDate = isoDateOffset(9);
  const priorEnd = isoDateOffset(10);
  const priorStart = isoDateOffset(16);

  try {
    const [current, prior] = await Promise.all([
      querySearchAnalytics(token, GSC_CONFIG.siteUrl, {
        startDate, endDate,
        dimensions: ["page"],
        rowLimit: 200,
      }),
      querySearchAnalytics(token, GSC_CONFIG.siteUrl, {
        startDate: priorStart, endDate: priorEnd,
        dimensions: ["page"],
        rowLimit: 200,
      }),
    ]);

    const currentRows = current.rows || [];
    const priorRows = prior.rows || [];
    const priorMap = new Map(priorRows.map((r) => [r.keys[0], r]));

    const currentTotal = currentRows.reduce((a, r) => a + (r.clicks || 0), 0);
    const priorTotal = priorRows.reduce((a, r) => a + (r.clicks || 0), 0);
    const totalDeltaPct = priorTotal > 0 ? ((currentTotal - priorTotal) / priorTotal) * 100 : 0;

    findings.push({
      severity: "info",
      watcher: "gsc-search-analytics",
      path: `${startDate} → ${endDate}`,
      message: `clicks ${priorTotal} → ${currentTotal} (${totalDeltaPct >= 0 ? "+" : ""}${totalDeltaPct.toFixed(1)}%) across ${currentRows.length} pages`,
    });

    // Top-20 page regressions: clicks dropped by configured threshold AND prior clicks were meaningful (>=5).
    const topPages = [...currentRows].sort((a, b) => (b.clicks || 0) - (a.clicks || 0)).slice(0, 20);
    for (const row of topPages) {
      const pageUrl = row.keys[0];
      const before = priorMap.get(pageUrl);
      if (!before || (before.clicks || 0) < GSC_CONFIG.minPriorClicksForAlert) continue;
      const dropPct = ((before.clicks - row.clicks) / before.clicks) * 100;
      if (dropPct >= GSC_CONFIG.clickDropAlertPct) {
        findings.push({
          severity: "alert",
          watcher: "gsc-search-analytics",
          path: pageUrl.replace(GSC_CONFIG.siteUrl, "") || "/",
          message: `clicks ${before.clicks} → ${row.clicks} (-${dropPct.toFixed(0)}%) position ${(before.position || 0).toFixed(1)} → ${(row.position || 0).toFixed(1)}`,
        });
      }
      const posDelta = (row.position || 0) - (before.position || 0);
      if (posDelta >= GSC_CONFIG.positionDropAlert) {
        findings.push({
          severity: "alert",
          watcher: "gsc-search-analytics",
          path: pageUrl.replace(GSC_CONFIG.siteUrl, "") || "/",
          message: `position drop ${(before.position || 0).toFixed(1)} → ${(row.position || 0).toFixed(1)} (+${posDelta.toFixed(1)})`,
        });
      }
    }

    state.lastPull = new Date().toISOString();
    state.window = { startDate, endDate };
    state.clicksTotal = currentTotal;
    state.pagesCount = currentRows.length;
  } catch (err) {
    // 403 "API has not been used" means the GCP project needs Search Console
    // API enabled. Operational (user toggles in console.cloud.google.com), not
    // a site alert. Same logic for credential-permission denials. Other errors
    // (5xx, parse, network) keep alert severity so they wake the inbox.
    const isOperational = /API has not been used|API not enabled|access_denied|invalid_grant/i.test(err.message);
    findings.push({
      severity: isOperational ? "info" : "alert",
      watcher: "gsc-search-analytics",
      path: "(query)",
      message: isOperational ? `GSC operational: ${err.message.slice(0, 120)}` : `GSC query failed: ${err.message}`,
    });
  }

  return { findings, state };
}
