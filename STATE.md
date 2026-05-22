# SteelR — STATE

**Last updated:** 2026-05-22 (audit fix batch items 1-8 shipped + deployed + verified live; HEAD `1f0ad73`)
**Priority:** P0

---

## Where I left off

**Audit fix batch items 1–7 shipped, deployed, and verified live (commit `e477d46`).** Full audit report that drove the batch: `audit-data/comprehensive-audit-20260522.md`.

The commit covers consistency + accessibility fixes plus one adjacent dead-link fix folded in (`collection/[slug]` styleBlogMap Traditional entries pointed at two 308-redirected blog slugs — same bug class as item 2). Build passed (exit 0, 312 routes), gates passed (`copy-editor`, `seo-schema-validator`, `accessibility-reviewer`, `brand-guard`), pushed, Vercel deployed, all changes curl-verified on production, 312 URLs submitted via IndexNow (200, 0 failed).

**One subagent verdict overridden:** `accessibility-reviewer` issued a "FAIL" asking to revert the footer heading `h2`→`h3`. Not applied — the actual Lighthouse axe `heading-order` data flagged the `<h3>` as the failure (`h1`→`h3` skips a level). Mechanical evidence beat the agent opinion. Footer stays `h2`.

**Items 8 and 9 NOT done** — both have real blockers, see Next action.

**Headline audit results (unchanged, for context):**
- GSC indexing healthy — **287 of 312 sitemap URLs indexed (92%)**, zero pages in crawl limbo.
- Desktop performance excellent (Lighthouse 86–97); **mobile weak — `/collection` is the worst page (Perf 45, LCP 6.3s, TBT 2.24s)**.
- ChatGPT-with-Search cites SteelR strongly on comparison/security intent; **Perplexity and Gemini do not cite SteelR at all**.

---

## Next action

### DONE — audit fix batch items 1–7 (commit `e477d46`, deployed + verified live)

Items 1–7 shipped. Per-item verification (all curl-confirmed on production):
- **1** Meta descriptions trimmed: `/sr3-vs-sr4` 181→143; area-page template fixed (one template feeds all 161 area pages — Buckinghamshire 182→155, Surrey 146, Kensington 150).
- **2** `getAreaGuides()` `common` repointed to `steel-doors-conservation-areas-planning-guide`. Adjacent fix folded in: `collection/[slug]` styleBlogMap Traditional entries repointed off the same dead `period-property-*` / `best-front-doors-period-properties` slugs.
- **3** Duplicate BreadcrumbList removed — moved out of `collection/layout.tsx` into `collection/page.tsx`; each collection route now emits exactly one.
- **4** No change needed — `prefers-reduced-motion` already present at `globals.css:135-145` (audit §7 finding was stale).
- **5** Footer link opacity 0.5→0.7.
- **6** Form-input focus rings already existed globally (`globals.css:119-133`, audit §7 stale); added gold `focus-visible` outline to `NavMobileMenu` links only.
- **7** `/collection` a11y: filter-button + mobile-card-link contrast fixed, footer heading `h3`→`h2`, mobile link touch targets enlarged.

### DONE — item 8: SR4 blog re-angle (commit `1f0ad73`, deployed + verified live)

`/blog/sr4-lps-1175-commercial-grade-residential` re-angled from a spec explainer into an editorial commercial-to-residential crossover piece. New title "Why a Data-Centre Door Standard Is Now Fitted to UK Homes" (slug unchanged, no redirect). Resolves the SR4 blog ↔ `/sr4-residential-steel-door` cannibalisation. Cleared `copy-editor` PASS, `fact-check-gate` PASS (14 claims sourced), build exit 0, the 4-agent `/panel-llms` gate, `/panel-llms-approve`, and independent main-session verification: title term overlap blog-vs-topic dropped **30.0%→8.3%** (`audit-data/sr4-overlap-check.mjs`, re-runnable); body vocabulary overlap rose 18.2%→23.1% (expected — still an SR4 article; title/intent is the cannibalisation mechanism). `llms-full.txt` + `llms.txt` synced. Live title/H1/meta + IndexNow (1 URL, 200) confirmed.

### TODO — item 9 (still blocked)

9. **Redirect `/fire-rated-doors` → `/fire-rated-fd30-front-door`** (~70% overlap). **BLOCKED:** STATE plan requires confirming the winner via GSC Performance page-level data first. Could not be fetched (Serper depleted, no GSC API tool). Internal linking already favours `/fire-rated-fd30-front-door` (footer + all 161 area security grids link it; `/fire-rated-doors` is unlinked legacy). User to confirm via GSC, or approve the [REASONED] direction. Redirect goes in `next.config.mjs`.

### TODO — indexing follow-up
IndexNow done (312 URLs submitted, 200). **Still pending: resubmit `sitemap.xml` in the GSC UI** (Google last read it 22 Apr / 306 URLs; live is 312) — manual UI step, user-side.

**P0 (carry-over) — Confirm `generate_lead` GA4 event fires.** Fill `/design-estimate`, submit, verify in GA4 Real-Time, mark as Key Event. User-side, 90 seconds.

**P1 — Mobile-perf is paused, not resolved** (see Blockers). `/collection` Perf 45 is now the worst page; a fresh perf diagnosis pass should start there, not from the partly-invalidated `2026-05-20-mobile-perf-followup.md` spec.

**P2 — Correct stale facts in `steelr/CLAUDE.md`** per audit report §11: indexed 67→287, sitemap 313→312, llms.txt 239→366 lines, llms-full.txt 1,231→2,813 lines, blog posts 40/46→37. CLAUDE.md is a critical file — treat as its own careful task.

---

## Blockers

- **`/collection` mobile performance** — Perf 45, LCP 6.3s, TBT 2.24s (3-run median, `audit-data/lighthouse-20260522/collection-mobile-*.json`). Worst page on the site.
- **Home mobile TBT measured 975ms** (3-run) vs 494ms on the 21 May 5-run close-out — possible regression or Vercel lab variance; needs a 5-run reconfirm before acting.
- **Core Web Vitals field data: none.** GSC reports "Not enough usage data" — site too young for CrUX. Speed is currently neutral for ranking. CrUX window expected ~mid-June.
- **Serper credits depleted** — `visibility-audit.py` fails silently (returns empty, not error). Top up ($50 / 50k) or use live browser SERP / GSC instead.
- **Bing Webmaster Tools site-indexing not audited** — this session was directed to Bing Places for Business instead. BWT indexing + AI-citation (BETA) tabs remain unverified.
- **Google Maps 3-pack neutral position unmeasurable** from the GBP-owner's logged-in browser (shows the management panel, not a neutral SERP).
- **`generate_lead` Key Event = 0** in GA4. Blocks conversion measurement.
- **0 Google reviews** — gates SteelR out of AI local-packs and the Maps 3-pack. User-managed.
- **ChatGPT Free-tier throttles** after a few queries per session.

---

## Recent wins (22 May 2026 — item 8 SR4 re-angle)

- **SR4 blog re-angled and shipped** — commit `1f0ad73`, deployed, verified live. De-cannibalised from the `/sr4-residential-steel-door` topic page: title term overlap 30.0%→8.3% (measured, `audit-data/sr4-overlap-check.mjs`).
- **Panel-llms gate run properly** — 4-agent panel + `/panel-llms-approve` marker + independent main-session mechanical verification after the user (correctly) challenged relying on agent verdicts. `feedback_cant_trust_subagent.md` repeat logged (now repeat_count 3).

## Recent wins (22 May 2026 — audit fix batch)

- **Audit fix batch 1–7 shipped** — commit `e477d46`, 7 source files, 38 insertions / 26 deletions. Build exit 0 (312 routes); `copy-editor` + `seo-schema-validator` + `accessibility-reviewer` + `brand-guard` all PASS; pushed (rebased over a nightly-digest commit); Vercel deployed; every change curl-verified on production; 312 URLs IndexNow-submitted (200, 0 failed).
- **Two stale audit findings caught** — `prefers-reduced-motion` (item 4) and form-input focus rings (item 6) already existed in `globals.css`; verified against live code rather than blindly duplicating.
- **One adjacent dead-link fix folded in** — `collection/[slug]` styleBlogMap Traditional entries were pointing at two 308-redirected blog slugs; repointed to live posts.
- **One subagent verdict overridden with mechanical evidence** — `accessibility-reviewer` wanted footer `h2`→`h3` reverted; the Lighthouse axe `heading-order` data showed the `h3` was the actual failure. Kept `h2`.

## Recent wins (audit, 22 May 2026)

- **Comprehensive audit delivered** — `audit-data/comprehensive-audit-20260522.md`. Every figure live-verified.
- **42-run Lighthouse audit** (7 pages × desktop+mobile × 3 runs) — JSON in `audit-data/lighthouse-20260522/`, medians in `audit-data/lighthouse-parse-20260522.py` output. Desktop 86–97; mobile weak, `/collection` worst.
- **GSC fully reviewed** — 287 indexed / 7 not (6 redirects + 1 stale duplicate `/collection/grey-panelled-lever-handle`); sitemap last read 22 Apr (stale); 33 clicks / 7.76k impressions / position 34.1; topic/comparison pages are the ranking engine (`/uk-steel-doors-vs-imported` pos 3.4, `composite vs steel doors` pos 10.2).
- **AI engine visibility freshly tested** — ChatGPT-with-Search strong on comparison/security (cited ~7×, listed first); Perplexity and Gemini do not cite SteelR; ChatGPT misses local-pack + heritage intent.
- **Schema live-verified** — 14 JSON-LD types valid, no Product offers block, all topic pages emit FAQPage, every page has exactly one H1.
- **Two false findings caught** — Serper "0/26" was API failure not real zeros; a subagent's "site-wide 404" was a 308 redirect. Both reverted, reported correctly.

## Recent wins (21 May 2026 — Spec C + Spec B)

- **Spec C** — llms-full.txt topic-restructure, 64 Q&A pairs across all 16 topic-hub entries, 4 panel-gated commits (`0ead4cf`/`a632247`/`2c2a192`/`e5c50de`).
- **Spec B** — conservation-area FAQ migration, commits `28a292e`/`c01baeb`/`b0d0838`.

## Recent wins (20 May 2026 — mobile perf)

- Phase 1-3 mobile-perf recovery shipped (framer-motion off homepage chunk, Nav as Server Component, hero animation defer, AVIF, long-cache headers). Two wrong-target fixes caught by measurement and reverted. End-of-session home mobile: Perf 59 / LCP 5.24s / TBT 494ms (5-run median). Acceptance targets not hit; perf work paused for a fresh diagnosis. Detail in git history `cab209c`→`8e68ccd`.

---

## Key files

### Audit artifacts (this session)
- `audit-data/comprehensive-audit-20260522.md` — the full audit report
- `audit-data/lighthouse-20260522/` — 42 Lighthouse JSON files
- `audit-data/lighthouse-parse-20260522.py` — median parser
- `audit-data/lighthouse-run-20260522.sh` — the runner script
- `audit-data/live-verify-20260522.py` — live H1/schema/canonical/meta checker

### Files item 9 will touch (when unblocked)
- `next.config.mjs` — fire-rated redirect (after GSC data confirms the winner)
- `src/app/fire-rated-fd30-front-door/page.tsx` — repoint its 2 internal links to `/fire-rated-doors` (lines 101, 253) if that page is the one redirected away
- `src/app/sitemap/page.tsx:35` — HTML sitemap entry for `/fire-rated-doors`

### Infrastructure
- `public/llms.txt` / `public/llms-full.txt` — AI-grounding files, panel-llms gated.
- `scripts/bing/indexnow-submit.mjs` — IndexNow submitter for post-deploy re-index
- `audit-data/gsc-indexing-tracker-steelr.json` — Indexing API tracker
- `audit-data/sr4-overlap-check.mjs` — one-off cannibalisation overlap check from the item-8 verification

---

## How to start the next session (handoff)

The audit fix batch is done: **items 1–8 shipped, deployed, verified live** (commits `e477d46`, `1f0ad73`). Only item 9 remains, and it is genuinely blocked.

1. `/clear` for a clean context.
2. Fresh session in the steelr repo.
3. Three things are queued, none urgent:
   - **Item 9 — fire-rated redirect.** Blocked on GSC page-level data. Before deciding, pull GSC Performance impressions/position for `/fire-rated-doors` vs `/fire-rated-fd30-front-door`. NOTE the "legacy page" framing is wrong: `/fire-rated-doors` has its own FAQPage schema, 7 internal links, and is linked from the fd30 hub itself — the two are genuine peers. Do NOT redirect on a reasoned guess; the GSC data decides the winner.
   - **`generate_lead` GA4 check** — user-side, ~90 sec (fill `/design-estimate`, verify in GA4 Real-Time, mark as Key Event).
   - **GSC sitemap resubmit** — user-side UI step (Google's snapshot 22 Apr / 306 URLs; live 312).
4. P1 (mobile perf, `/collection` Perf 45) and P2 (correct stale `steelr/CLAUDE.md` facts per audit §11) are larger standalone tasks.

---

## Memory feedback files

`feedback_cant_trust_subagent.md` incremented to **repeat_count 3** this session (2026-05-22): I presented the `/panel-llms` 4-agent consensus as confirmation to commit; the user stopped me; the load-bearing claims were then re-derived with deterministic main-session checks (`audit-data/sr4-overlap-check.mjs`, grep, git diff, build exit) before the commit went through. Other active corrections unchanged: `feedback_check-recheck-report.md` (6), `feedback_fresh_checks_first.md` (2).
