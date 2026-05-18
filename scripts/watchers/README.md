# SteelR Nightly Watchers

Lightweight HTTP-based watchers that run at **03:00 UK (BST)** / **02:00 UK (GMT)** every morning via GitHub Actions and produce a single dated markdown digest committed to `audit-data/digest/YYYY-MM-DD.md`. When any watcher emits an `alert`-severity finding, a single Resend email is sent to `info@supplywindows.co.uk`.

Mirrors Vitrums' watcher layer with SteelR-specific watched URLs, integrity targets, and two form canaries (contact + estimate).

## What runs

| Watcher | What it checks |
|---|---|
| `content-drift.mjs` | HTTP status, JSON-LD presence, canonical link presence, word-count floor, content hash diff on ~32 watched pages (homepage, 10 topic hubs, 5 area hubs, area leaves, top blog posts, conversion paths) |
| `sitemap-drift.mjs` | Sitemap URL count delta vs prior run; alerts on ≥5% drop. Designed to catch a Bucks-style hub deindexation early. |
| `integrity-check.mjs` | `robots.txt`, `llms.txt`, `llms-full.txt`, `sitemap.xml` are live, contain expected markers, and have not shrunk ≥10% |
| `form-canary.mjs` | POSTs a test entry through `/api/contact` AND `/api/estimate` with `[CANARY]` marker; alerts on non-2xx or `success:false` |

`digest.mjs` orchestrates the watchers in parallel, writes the markdown digest, persists state to `audit-data/digest/_state.json`, and triggers `alert.mjs` if any alerts fired.

## Bucks-regression coverage

The 5 area hubs in `WATCHED_PAGES` (London, Buckinghamshire, Surrey, Hertfordshire, Kent) all have a 250-word floor, matching the Hub-content quality rule. A Bucks-style content thin-out would trip an alert the morning after it shipped, not 21 days later.

## Configuration

Edit `config.mjs` to:
- Add/remove watched pages (`WATCHED_PAGES`)
- Change word-count floors per page type
- Add/remove integrity files
- Adjust thresholds (`THRESHOLDS`)
- Change alert email recipient

## Run locally

```bash
# Full run, including both form canaries (POSTs to /api/contact and /api/estimate,
# which trigger real Resend emails tagged [CANARY]).
node scripts/watchers/digest.mjs

# Smoke test that runs everything except the canaries — no emails sent.
WATCHERS_SKIP_CANARY=1 node scripts/watchers/digest.mjs
```

The first run captures a baseline (no alerts fire on first-time content). From day 2 onward, drift triggers alerts. State persists in `audit-data/digest/_state.json`.

## Required secret

Add to GitHub Actions secrets (Settings → Secrets and variables → Actions → New repository secret):

| Secret | Used for | Source |
|---|---|---|
| `RESEND_API_KEY` | Sending alert emails | Same key already on Vercel for the contact-form path. Copy from Vercel → SteelR project → Settings → Environment Variables. |

Without `RESEND_API_KEY`, the watchers still run and write the digest. Alerts are logged to the workflow output but no email is sent.

## What is not verified yet (limitations)

- **Email delivery via Resend.** The form canary verifies the API endpoint responds successfully but does not verify the lead email actually lands in `info@supplywindows.co.uk`. Phase 2 will add Resend inbox polling or a server-side `X-Canary` header short-circuit to silence the daily canary emails.
- **Two daily canary emails** land in the inbox (one contact, one estimate), both with `[CANARY]` in the message. Filter on subject containing `Canary Test` if noise.
- **Search Console, Bing Webmaster, GA4, CrUX, PSI, AI-citation.** None of these are in phase 1. Each requires a credential to be added as a GitHub secret. Phase 2.

## Costs

Zero cost. Phase 2 credential watchers stay on free API tiers.

## Failure handling

- Network timeouts: 15s per request. Failing request becomes a single alert; other watchers continue.
- Resend down: digest still written, workflow still succeeds. Console logs the would-be alerts.
- Workflow timeout: 15 minutes total budget. Current expected runtime ~2-3s with hot cache, ~10s cold.

## Disable / pause

GitHub repo → Actions → Nightly Watchers → ⋮ → Disable workflow.

Or rename the file (e.g. `watchers-nightly.yml.disabled`).

## Manual trigger

GitHub repo → Actions → Nightly Watchers → Run workflow.
