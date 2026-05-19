import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runContentDrift } from "./content-drift.mjs";
import { runSitemapDrift } from "./sitemap-drift.mjs";
import { runIntegrityCheck } from "./integrity-check.mjs";
import { runFormCanary } from "./form-canary.mjs";
import { runPsiLighthouse } from "./psi-lighthouse.mjs";
import { runGscSearchAnalytics } from "./gsc-search-analytics.mjs";
import { sendAlertEmail } from "./alert.mjs";
import { todayIsoDate } from "./utils.mjs";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const DIGEST_DIR = path.join(REPO_ROOT, "audit-data", "digest");
const STATE_PATH = path.join(DIGEST_DIR, "_state.json");

async function readPriorState() {
  try {
    const raw = await fs.readFile(STATE_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function writeState(state) {
  await fs.mkdir(DIGEST_DIR, { recursive: true });
  await fs.writeFile(STATE_PATH, JSON.stringify(state, null, 2));
}

function bucket(findings, severity) {
  return findings.filter((f) => f.severity === severity);
}

function renderDigest(date, allFindings, runtimeMs) {
  const alerts = bucket(allFindings, "alert");
  const infos = bucket(allFindings, "info");
  const oks = bucket(allFindings, "ok");

  const lines = [];
  lines.push(`# SteelR watchers — ${date}`);
  lines.push("");
  lines.push(`- Runtime: ${(runtimeMs / 1000).toFixed(1)}s`);
  lines.push(`- Alerts: **${alerts.length}**`);
  lines.push(`- Info events: ${infos.length}`);
  lines.push(`- OK checks: ${oks.length}`);
  lines.push("");

  if (alerts.length) {
    lines.push("## Alerts");
    lines.push("");
    lines.push("| Watcher | Path | Message |");
    lines.push("|---|---|---|");
    for (const a of alerts) {
      lines.push(`| ${a.watcher} | ${a.path} | ${a.message} |`);
    }
    lines.push("");
  }

  if (infos.length) {
    lines.push("## Info");
    lines.push("");
    lines.push("| Watcher | Path | Message |");
    lines.push("|---|---|---|");
    for (const a of infos) {
      lines.push(`| ${a.watcher} | ${a.path} | ${a.message} |`);
    }
    lines.push("");
  }

  if (oks.length) {
    lines.push("## OK / Baseline captures");
    lines.push("");
    lines.push("<details><summary>Show all OK checks</summary>");
    lines.push("");
    lines.push("| Watcher | Path | Message |");
    lines.push("|---|---|---|");
    for (const a of oks) {
      lines.push(`| ${a.watcher} | ${a.path} | ${a.message} |`);
    }
    lines.push("");
    lines.push("</details>");
    lines.push("");
  }

  return lines.join("\n");
}

async function main() {
  const started = Date.now();
  const date = todayIsoDate();
  const prior = await readPriorState();

  const skipCanary = process.env.WATCHERS_SKIP_CANARY === "1";
  const skipPsi = process.env.WATCHERS_SKIP_PSI === "1";

  const tasks = [
    runContentDrift(prior.content || {}),
    runSitemapDrift(prior.sitemap ? { sitemap: prior.sitemap } : {}),
    runIntegrityCheck(prior.integrity || {}),
    runGscSearchAnalytics(prior.gsc || {}),
  ];
  if (!skipCanary) tasks.push(runFormCanary());
  if (!skipPsi) tasks.push(runPsiLighthouse(prior.psi || {}));
  const results = await Promise.all(tasks);

  // Index by watcher name so state assignment is order-independent.
  const byWatcher = {};
  for (const r of results) {
    const watcherName = r.findings[0]?.watcher;
    if (watcherName) byWatcher[watcherName] = r;
  }

  const findings = results.flatMap((r) => r.findings);
  if (skipCanary) {
    findings.push({
      severity: "info",
      watcher: "form-canary",
      path: "(skipped)",
      message: "WATCHERS_SKIP_CANARY=1 — canary not run",
    });
  }
  if (skipPsi) {
    findings.push({
      severity: "info",
      watcher: "psi-lighthouse",
      path: "(skipped)",
      message: "WATCHERS_SKIP_PSI=1 — PSI not run",
    });
  }
  const newState = {
    lastRun: new Date().toISOString(),
    content: byWatcher["content-drift"]?.state || prior.content || {},
    sitemap: byWatcher["sitemap-drift"]?.state?.sitemap || prior.sitemap,
    integrity: byWatcher["integrity-check"]?.state || prior.integrity || {},
    psi: byWatcher["psi-lighthouse"]?.state || prior.psi || {},
    gsc: byWatcher["gsc-search-analytics"]?.state || prior.gsc || {},
  };

  await writeState(newState);

  const runtimeMs = Date.now() - started;
  const markdown = renderDigest(date, findings, runtimeMs);

  const digestFile = path.join(DIGEST_DIR, `${date}.md`);
  await fs.writeFile(digestFile, markdown);

  const alerts = bucket(findings, "alert");
  console.log(`[digest] ${date}: ${alerts.length} alerts, ${bucket(findings, "info").length} info, ${bucket(findings, "ok").length} ok in ${(runtimeMs / 1000).toFixed(1)}s`);

  if (alerts.length) {
    const digestUrl = `https://github.com/Vitrumsolutions/steelr/blob/main/audit-data/digest/${date}.md`;
    await sendAlertEmail(alerts, `audit-data/digest/${date}.md`, digestUrl);
  }

  process.exit(0);
}

main().catch((err) => {
  console.error("[digest] fatal:", err);
  process.exit(1);
});
