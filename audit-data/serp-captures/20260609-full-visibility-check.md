# SteelR full visibility + technical check — 2026-06-09

**Method:** all live. GSC + ChatGPT via user's logged-in Chrome ("general" profile). Google organic via Firecrawl (server-side, un-personalised, UK location). Schema + llms via subagents fetching live HTTPS. Speed via PageSpeed Insights web UI (PSI keyless API was 429-throttled all session).

## Technical

- **robots.txt** — 200. `User-agent: * / Allow: /`. Sitemap referenced. llms.txt/llms-full.txt references present but COMMENTED (deliberate, per inline note — AI crawlers fetch natively).
- **Schema (seo-schema-validator, 5 live URLs)** — PASS. 17 JSON-LD blocks parse, all Google-supported types. Canonicals all https/non-www/no-trailing-slash, match deployed URL + og:url. No Product offers blocks. Meta/OG complete.
- **llms (llms-txt-integrity-checker)** — WARN.
  - llms.txt = 45,066 bytes; llms-full.txt = 312,881 bytes (CLAUDE.md figures 21,234 / 93,987 are STALE).
  - 5 blog posts in sitemap but MISSING from llms-full Blog Page URLs: `do-steel-front-doors-reduce-noise-uk`, `hmo-front-door-requirements-uk-landlord-guide`, `steel-front-doors-building-safety-act-2022`, `steel-front-doors-with-sidelights-uk-buyers-guide`, `steel-look-aluminium-vs-real-steel-doors`. (Published after last llms regen.) Fix: `node scripts/blog/backfill-llms-full.mjs`.
  - Duplicate `[Contact]` link in llms.txt Key Pages.
  - Lead time still "8 to 12 weeks" / "eight to twelve weeks" (16 instances in llms-full, 2 in llms.txt) — gated behind /panel-llms + owner approval.
  - Area set in sync (177 = 177). No orphans/404s.

## Speed (PageSpeed Insights, mobile, homepage)

- Performance **99** · Accessibility 100 · Best Practices 100 · SEO 100.
- Field data: **No Data** (GSC Core Web Vitals = "Not enough usage data last 90 days", both mobile + desktop). Low traffic, not a perf problem.
- PSI keyless API throttled (429) all session — lab number from web UI instead.

## Google Search Console (live, logged in)

- **Indexing:** 284 indexed / 12 not (9 Page-with-redirect, 1 Duplicate-no-canonical, 2 Crawled-not-indexed). ~90% of 314-URL sitemap.
- **Performance (90d, 16 Mar–7 Jun):** 52 clicks · 12.3k impressions · CTR 0.4% · **avg position 34.6**.
- Clicks brand-dominated: `steelr` 17/164. Commercial queries = impressions, no clicks:
  - composite vs steel doors 383 impr / 0 · secure front doors 312/0 · steel doors london 186/0 · new build front door 178/0 · steel doors surrey 167/0 · entrance doors tarporley 152/0.

## Google organic (Firecrawl, un-personalised, UK)

- `steel front doors uk` → SteelR **absent top 20** (Latham's #1, Modern Doors, Pirnar, Domadeco, Strongdor).
- `composite vs steel doors` → SteelR **#7** (`/steel-front-door-vs-composite`) — only top-20 placement. SERP is mostly US fiberglass-vs-steel blogs/forums → explains 383 impr / 0 clicks.
- `steel doors london` → SteelR **absent top 20** (Black Steel Doors, Steel Door Solutions, Original Steel Doors).

## AI — ChatGPT-with-Search (8 exact baseline queries, vs 27 May)

Free tier downgraded to lighter model from Q6 onward ("out of messages with most advanced model"). 27 May baseline had the same downgrade on later queries.

| # | Query | 9 Jun | 27 May | Δ |
|---|---|---|---|---|
| 1 | best steel front doors uk | ✅ named (balance tier + shortlist) | ❌ | ↑ |
| 2 | steel security doors for home uk | ✅ named (supplier list) | ❌ | ↑ |
| 3 | steel doors london | ❌ absent (supplier list) | ❌ | = |
| 4 | most secure steel front door | ⚠️ source chip only; Hörmann = "best overall" | ✅ #1 | ↓ |
| 5 | bespoke steel front door uk | ✅ named body rec + link | ❌ | ↑ |
| 6 | steel front door companies uk | ✅ #1 (shortlist: best luxury + best security) | ✅ #1 | = |
| 7 | steel front doors for homes uk | ❌ absent (Vitrum Solutions cited instead) | ⚠️ source | ↓ |
| 8 | residential steel front door london | ✅ #1 London bespoke | ✅ #1 | = |

**~5.5/8 ≈ 69% citation (up from 50% on 27 May).** 4 up, 2 down, 2 flat. Broad shopper queries (Q1/Q2/Q5) flipped miss→cited. Losses (Q4/Q7) partly model-downgrade, partly **Vitrum Solutions (sister site) now absorbing source citations** on steel-door price/spec facts.

Not run this session: Perplexity, Gemini (CLAUDE.md rule — test ChatGPT-with-Search first; it's healthy, so AI channel is healthy).

---

## AI — Gemini (logged in, Vitrum Solutions / Ickenham, Flash model)

| Query | 9 Jun | 27 May |
|---|---|---|
| best steel front doors uk | ✅ named "Ultra-Premium & Bespoke Luxury" tier (RC4) | (0/3 overall) |
| steel front door companies uk | ✅ named "Premium & High-End Security Specialists" (RC4, bespoke) | — |

Gemini went from 0/3 (27 May) to 2/2 cited. BUT every supporting citation chip — including the ones under the SteelR entries — reads **"Vitrum Solutions"**. Gemini frames SteelR as "ultra-high-net-worth / budget no issue" (the HNW-gated framing the owner has said to avoid).

## AI — Perplexity (browser, logged in)

| Query | Result |
|---|---|
| best steel front doors uk | ❌ SteelR absent. 9 sources: lathamssteeldoors, modern-doors, doorsuppliesonline, domadeco, hormann. |

Perplexity remains the weakest surface (e-commerce/product-feed players win). Consistent with 11 May baseline.
Perplexity MCP key is INVALID (401) — done via browser instead. Key needs refreshing for future automated runs.

## Vitrums sister-site cannibalisation (vitrums.co.uk) — root of the AI source-citation issue

Firecrawl `site:vitrums.co.uk steel front doors security RC3 RC4` returned a full steel-door footprint on the higher-authority sister domain:
- `vitrums.co.uk/steelr` — page titled "SteelR Steel Front Doors UK | RC4 Bespoke Installer" (a Vitrums page ABOUT SteelR — this is what AI cites instead of steelr.co.uk)
- `vitrums.co.uk/gerda` — Gerda steel doors page
- `vitrums.co.uk/blog/aluminium-vs-steel-front-doors`, `/blog/best-entrance-door-brands-uk-2026` — steel comparison blogs
- Programmatic `/[town]/steel-doors` pages (Penn, Hook, Burford, Basingstoke, Chalfont St Peter…) naming "Gerda and SteelR" — same location-page playbook as SteelR, on the stronger domain
- These pages are the source of the "high-value executive / ultra-HNW" framing of SteelR that AI now repeats.

Net: SteelR wins the MENTION across ChatGPT + Gemini, but Vitrums increasingly wins the CITATION (the trusted source) for steel-door facts. steelr.co.uk does not own its own category citation.

## Blog pipeline — root cause (NOT a dead cron)

- Cron healthy: all publish-blog runs "completed success", incl 2026-06-07 21:19 UTC. Schedule Sun/Tue/Thu 20:00 UTC.
- Local checkout was 1 commit behind origin (c5ed7ec "blog: publish 2026-06-07"); synced.
- Only unposted blog: `glazed-front-door-security-glass-uk` (staged, scheduled 2026-06-09, 404) — due to auto-publish tonight 20:00 UTC.
- REAL bug found: the `## Blog Page URLs` section of llms-full.txt had NO maintainer (no script wrote it) → stuck at 34/39, missing the 5 newest posts. publish-post.mjs updated Blog Excerpts but not this list.
- FIX (scripts/, ungated): added buildBlogPageUrlsSection + writeBlogPageUrlsSection to llms-excerpt.mjs; wired into publish-post.mjs (step 6) + backfill-llms-full.mjs; added CRLF-safe Key Pages de-dup (fixes duplicate [Contact]). Verified: backfill → Blog Page URLs 39/39, sections + footer intact, de-dup 2→1. Local llms-full reverted; cron will regenerate via legitimate --no-verify path tonight once scripts land on origin.
