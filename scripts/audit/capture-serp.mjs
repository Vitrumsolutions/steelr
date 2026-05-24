#!/usr/bin/env node
/**
 * capture-serp.mjs — Capture live Google SERP rank + snippet for a list of queries.
 *
 * Part of the per-change-type capture protocol (see scripts/audit/README.md).
 *
 * Use this script BEFORE shipping any change that affects:
 *   - page metadata (title, description)
 *   - copy on a high-traffic page
 *   - URL structure (renames, redirects)
 *   - schema affecting rich snippet rendering
 *   - canonical or sitemap
 *
 * Use it AGAIN 7 days after shipping to capture the post-state. Diff the two
 * files to see whether the change moved the metric.
 *
 * Usage:
 *   node scripts/audit/capture-serp.mjs <label> [queries-file]
 *
 *   <label>          A short identifier for the capture (e.g. "pre-meta-trim",
 *                    "post-audience-hubs"). Used in output filename.
 *   [queries-file]   Optional. Path to a newline-separated file of queries to
 *                    check. Defaults to audit-data/serp-queries.txt.
 *
 * Output:
 *   audit-data/serp-captures/<YYYYMMDD>-<label>.json
 *
 * Requires:
 *   FIRECRAWL_API_KEY env var
 *
 * Backend: Firecrawl /v1/search (POST https://api.firecrawl.dev/v1/search)
 * Previous backend was Serper (google.serper.dev/search) — exhausted free-tier
 * lifetime credits. Firecrawl returns the same per-query data (url, title,
 * description) with UK geo support. Output JSON shape is unchanged.
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error("Usage: node scripts/audit/capture-serp.mjs <label> [queries-file]");
  console.error("Example: node scripts/audit/capture-serp.mjs pre-audience-hubs-launch");
  process.exit(1);
}

const label = args[0];
const queriesFile = args[1] || join(ROOT, "audit-data/serp-queries.txt");

// SteelR-tracked queries (default set — write your own at audit-data/serp-queries.txt
// to override). Mirrors the visibility-audit-runner core query list, but rank-checker
// only — no AI engine queries here (those need their own capture script).
const DEFAULT_QUERIES = [
  // Brand
  "steelr",
  "steelr bespoke steel entrance doors",
  // Spec hubs we should win
  "what is PAS 24 for front doors UK",
  "SR3 vs SR4 explained",
  "BS EN 1627 RC4 explained",
  "FD30 fire door requirements",
  "Secured by Design front door UK",
  // Topic / commercial
  "best bespoke steel front door UK",
  "luxury steel entrance doors UK",
  "bespoke steel front doors London",
  "buy steel front door UK",
  // Areas (priority)
  "steel doors Buckinghamshire",
  "steel doors Surrey",
  "steel doors Kensington",
  "steel doors Chelsea",
  "steel doors Cobham",
  "steel doors Esher",
  // Audience hubs (new, watch for indexation)
  "front door supplier housing association UK",
  "developer steel front doors UK",
  "steel front doors architects specifiers",
  // Comparison
  "steel front door vs composite",
  "steel vs timber front door",
  "UK steel doors vs imported",
  "most secure front door material",
];

let queries;
if (existsSync(queriesFile)) {
  queries = readFileSync(queriesFile, "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
} else {
  queries = DEFAULT_QUERIES;
}

console.log(`SERP capture run: ${label} (backend: Firecrawl)`);
console.log(`Queries: ${queries.length}`);
console.log(`Source: ${existsSync(queriesFile) ? queriesFile : "default DEFAULT_QUERIES"}`);

// Firecrawl API key — required, no fallback (previous Serper key exhausted free credits).
const apiKey = process.env.FIRECRAWL_API_KEY;

if (!apiKey) {
  console.error("Error: FIRECRAWL_API_KEY env var is not set.");
  console.error("Set it before running: export FIRECRAWL_API_KEY=fc-...");
  process.exit(1);
}

const TARGET_DOMAIN = "steelr.co.uk";

async function captureQuery(query) {
  // Firecrawl /v1/search — returns top-N web results with UK geo.
  const res = await fetch("https://api.firecrawl.dev/v1/search", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      limit: 10,
      location: "United Kingdom",
    }),
  });
  if (!res.ok) {
    return { query, error: `HTTP ${res.status}: ${await res.text()}` };
  }
  const payload = await res.json();

  if (!payload.success) {
    return { query, error: `Firecrawl error: ${JSON.stringify(payload)}` };
  }

  // Firecrawl returns data as a flat array of { url, title, description }.
  // Position is 1-based array index — no position field in the response.
  const organic = payload.data || [];

  // Find first SteelR result
  const ourIndex = organic.findIndex((r) => r.url && r.url.includes(TARGET_DOMAIN));
  const ourResult = ourIndex !== -1 ? organic[ourIndex] : null;

  // Top 3 non-SteelR results (competitors) from head of results
  const top3Competitors = organic
    .filter((r) => r.url && !r.url.includes(TARGET_DOMAIN))
    .slice(0, 3)
    .map((r, i) => {
      const absPos = organic.findIndex((x) => x.url === r.url) + 1;
      return { position: absPos, title: r.title, link: r.url };
    });

  return {
    query,
    capturedAt: new Date().toISOString(),
    steelrPosition: ourResult ? ourIndex + 1 : null,
    steelrUrl: ourResult?.url || null,
    steelrTitle: ourResult?.title || null,
    steelrSnippet: ourResult?.description || null,
    top3Competitors,
    // Firecrawl /v1/search does not expose AI overviews or People Also Ask.
    // Keep fields present but null so existing diff tooling doesn't break.
    aiOverviewPresent: null,
    aiOverviewMentionsSteelR: false,
    peopleAlsoAsk: [],
    totalOrganicResults: organic.length,
  };
}

const results = [];
let creditsUsed = 0;

for (const query of queries) {
  process.stdout.write(`  ${query.slice(0, 60).padEnd(60)} ... `);
  try {
    const result = await captureQuery(query);
    results.push(result);
    creditsUsed += 1;
    if (result.error) {
      console.log(`ERROR (${result.error.slice(0, 60)})`);
    } else if (result.steelrPosition) {
      console.log(`#${result.steelrPosition} ${result.steelrUrl?.replace("https://steelr.co.uk", "")}`);
    } else {
      console.log("not in top 30");
    }
  } catch (err) {
    results.push({ query, error: err.message });
    console.log(`ERROR (${err.message})`);
  }
  // Rate-limit: 1 query per ~500ms to stay under Firecrawl's request rate.
  await new Promise((r) => setTimeout(r, 500));
}

const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
const outputDir = join(ROOT, "audit-data/serp-captures");
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, `${date}-${label}.json`);

writeFileSync(
  outputPath,
  JSON.stringify(
    {
      label,
      capturedAt: new Date().toISOString(),
      queriesCount: queries.length,
      creditsUsed,
      summary: {
        ranking: results.filter((r) => r.steelrPosition).length,
        notRanking: results.filter((r) => r.steelrPosition === null && !r.error).length,
        errors: results.filter((r) => r.error).length,
        aiOverviewMentions: results.filter((r) => r.aiOverviewMentionsSteelR).length,
      },
      results,
    },
    null,
    2
  )
);

console.log(`\nDone. ${creditsUsed} queries run. Output: ${outputPath}`);
console.log(`\nSummary:`);
console.log(`  Ranking in top 30:           ${results.filter((r) => r.steelrPosition).length}/${queries.length}`);
console.log(`  Not in top 30:               ${results.filter((r) => r.steelrPosition === null && !r.error).length}/${queries.length}`);
console.log(`  Errors:                      ${results.filter((r) => r.error).length}/${queries.length}`);
console.log(`  AI Overview mentioning us:   ${results.filter((r) => r.aiOverviewMentionsSteelR).length}/${queries.length}`);
console.log(`\nTo capture post-state after shipping a change, run:`);
console.log(`  node scripts/audit/capture-serp.mjs post-<change-name>`);
console.log(`then diff with this file:`);
console.log(`  diff <(jq '.results' ${outputPath}) <(jq '.results' audit-data/serp-captures/<date>-post-<change>.json)`);
