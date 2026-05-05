# Per-change-type capture protocol

This directory holds capture scripts that produce **before/after evidence**
for shipped changes. The goal is to stop the recommend → ship → discover-it-was-wrong → reverse loop.

Every recommendation that goes through the gate
(`audit-data/templates/recommendation.md`) declares which capture script applies
to it. The capture is run BEFORE shipping, the change is shipped, the capture
is run AGAIN N days later, and the diff tells us whether the recommendation
actually moved the metric.

## Protocol mapping

| Change type | Capture script | When to capture | N days after |
|---|---|---|---|
| Page metadata (title, description, OG, canonical) | `capture-serp.mjs` | Before deploy | 7 days |
| Copy / positioning on a high-traffic page | `capture-serp.mjs` + `capture-ai-citation.mjs` (TODO) | Before deploy | 14 days |
| URL rename + 308 redirect | `capture-serp.mjs` + `capture-gsc-pages.mjs` (TODO) | Before deploy | 14 days |
| Schema.org JSON-LD addition | manual: Google Rich Results Test (capture screenshot to `audit-data/rich-results/`) | Before deploy | 24 hours after deploy |
| Performance / `'use client'` change | `capture-lighthouse.mjs` (TODO, requires local Chrome) | Before deploy | 24 hours after deploy |
| New page / route | `capture-serp.mjs` + manual GSC URL Inspection push | Before deploy | 7 days, 14 days |
| Internal linking (link added to N pages) | `capture-gsc-pages.mjs` (TODO) | Before deploy | 21 days |
| Content rewrite (>30% body change on a hub) | `capture-serp.mjs` + `capture-ai-citation.mjs` (TODO) | Before deploy | 14 days, 28 days |
| Brand-policy / banned-word fix | none (brand-guard pre-commit hook is the gate) | n/a | n/a |
| Build/lint/typing fix | none (npm run build + lint is the gate) | n/a | n/a |

## Currently-built scripts

### `capture-serp.mjs` — live Google SERP rank + snippet
Captures rank position + snippet text + AI Overview presence for a configurable
list of queries. Costs 1 Serper credit per query.

**Usage:**
```bash
node scripts/audit/capture-serp.mjs <label> [queries-file]
```

**Examples:**
```bash
# Pre-state before metadata trim
node scripts/audit/capture-serp.mjs pre-meta-trim-20260505

# Post-state 7 days later
node scripts/audit/capture-serp.mjs post-meta-trim-20260512

# Diff (use jq if installed, else open the JSON files in editor)
diff <(jq '.results[] | {q:.query, p:.steelrPosition}' audit-data/serp-captures/20260505-pre-meta-trim-20260505.json) \
     <(jq '.results[] | {q:.query, p:.steelrPosition}' audit-data/serp-captures/20260512-post-meta-trim-20260505.json)
```

**Output:** `audit-data/serp-captures/<YYYYMMDD>-<label>.json`

## Scripts to build (TODO)

These need building when the corresponding tools are reliably available:

### `capture-lighthouse.mjs`
Runs Lighthouse 5× per page, takes median, writes scores per page to
`audit-data/lighthouse-captures/`. **Blocked:** sandbox does not have Chrome
runtime. Build this when running locally or via Playwright MCP.

### `capture-ai-citation.mjs`
Hits Perplexity API (and Playwright-driven ChatGPT/Gemini if MCP available)
with the audit query list, captures the cited sources per response. **Blocked
until tonight:** Perplexity MCP became available; can build now.

### `capture-gsc-pages.mjs`
Pulls GSC Performance report for affected pages via Chrome MCP. **Blocked:**
Chrome MCP requires interactive session. Build as a runbook (manual Chrome MCP
operation following a fixed pattern) rather than an automated script for now.

### `capture-rich-results.mjs`
Curls each affected page, extracts JSON-LD blocks, optionally pings Google
Rich Results Test API. **Build whenever:** Rich Results Test does not have
a public API; this would need scraping or be replaced with a manual screenshot
protocol.

## How a session uses the protocol

When I (Claude) am asked to ship a change, I:

1. Identify the change type from the table above.
2. If a capture script applies, run it with a `pre-` label.
3. Ship the change (commit + push).
4. Note the post-capture date in `audit-data/change-log/<YYYYMMDD>-<change>.md`
   (template at `audit-data/templates/change-log.md` — TODO build).
5. On the post-capture date (next session that hits it), run the script with
   a `post-` label and diff.
6. Update the change-log file with the verdict: did the metric move?
7. If the metric did not move, the change is **not yet Verified**. Future
   recommendations of similar type stay at Reasoned tier until a similar
   change demonstrates measurable impact.

## What this does NOT solve

- Confounders when many commits ship close together (no script can isolate cause)
- Statistical confidence on small sample sizes (one ranking move could be noise)
- Ranking lag (GSC 2-3 days, organic 7-14 days, AI engine cache 7+ days)
- The need for human judgement on whether a change is sensible before any data exists

It DOES solve:
- The "we never actually checked if the change worked" problem.
- The "I forgot we recommended X 3 weeks ago" problem (change-log is the audit trail).
- The "let's reverse this without proof" problem (loop-prevention rule).

## Directory layout

```
audit-data/
├── templates/
│   ├── recommendation.md       (the gate)
│   ├── synthesis-format.md     (confidence tiers)
│   └── change-log.md           (TODO — change-log entry template)
├── serp-captures/              (output of capture-serp.mjs)
├── lighthouse-captures/        (output of future capture-lighthouse.mjs)
├── ai-citation-captures/       (output of future capture-ai-citation.mjs)
├── gsc-captures/               (output of future capture-gsc-pages.mjs)
├── rich-results/               (manual Schema test screenshots)
└── change-log/                 (one .md per shipped change with pre/post diff)

scripts/audit/
├── README.md                   (this file)
├── capture-serp.mjs            (built, tested 5 May 2026)
├── capture-lighthouse.mjs      (TODO)
├── capture-ai-citation.mjs     (TODO)
└── capture-gsc-pages.mjs       (TODO — likely a runbook, not script)
```
