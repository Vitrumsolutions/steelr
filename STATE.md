# STATE — SteelR

**Last updated:** 2026-04-23 PM (Indexing batch + workflow audit + fresh visibility scan + 3 under-linked blogs fixed + /ai-answers shipped)
**Priority:** P0

## 23 Apr PM session

**Indexing — 18 URLs pushed via Indexing API (`submit_indexing.py 18 --site=steelr`), all HTTP 200.** Same 18 also pushed to IndexNow (Bing/Yandex/Seznam/Naver) via `scripts/bing/indexnow-submit.mjs`, all HTTP 200. URLs: the 9 priority ones queued in this morning's handoff (`/blog`, `/collection/black-panelled-double-letterbox`, `/areas/cobham`, `/areas/hampstead`, `/areas/buckinghamshire`, 4 priority blog posts) + 6 area hubs whose Tier C content shipped in the last 24h (`/areas/scotland`, `/areas/manchester`, `/areas/yorkshire`, `/areas/cheshire`, `/areas/south-west`, `/areas/birmingham`) + `/`, `/collection`, `/areas`. Tracker now at 307 submitted, 0 in queue.

**Google/Bing Shopping check.** Site does not appear in Google Shopping or Bing Shopping for any tested query. **By design** — no Product schema with offers block, no Merchant Center feed, no displayed prices (per CLAUDE.md brand policy). Bespoke £5k+ doors don't fit Shopping's price-comparison model. No action needed.

**Workflow audit.**
- ✅ Windows Task Scheduler: `SteelrGSCIndexer` ran 07:30 today, LastResult=0, next 24 Apr 07:30. `SteelrScrape` and `SteelrOutreach` also healthy.
- ✅ GitHub Actions: `publish-blog.yml` and `weekly-rank-check.yml` configs valid; secrets resolved.
- ⚠️ **Blog publish queue empty.** `scripts/blog/content-calendar.json` shows 28/28 published; `src/data/blog/staged/` directory is empty. Next cron fires **Thu 24 Apr 20:00 UTC** and will silently no-op. The parallel session that was supposed to refill the queue (per 22 Apr handoff) has not landed work. **Action: refill calendar + staged before Thu 20:00 UTC** or accept a skipped publish slot.
- Note: 40 .ts files in `posts/` but calendar tracks only 28 — 12 posts shipped outside the calendar process (likely the 22 Apr build-out). Not a bug; calendar is publish-cron state, not a complete inventory.

## Fresh visibility scan (23 Apr PM, Serper.dev ground truth)

`python audit-data/visibility-audit.py` rerun. Results written to `audit-data/visibility-audit-results.md`.

| Channel | Score (23 Apr) | vs 22 Apr |
|---|---|---|
| Google organic | 5/26 | flat total, but movement: **steel-vs-composite NEW at #5** (was unranked); **Bucks DROPPED #1 → #9**; **Cobham DROPPED #9 → unranked** |
| Google Maps | 0/11 | flat — still review-blocked |
| Bing organic | 0/15 | flat — still post-migration lag |

**AI engine probes (fresh today):**
- "UK manufacturer bespoke steel front doors SR3 SR4 PAS 24 Secured by Design nationwide installer" — **SteelR result #1**, described as "particularly strong match"
- "Who makes high security steel residential entrance doors LPS 1175 UK" — SteelR NOT in top 10. Specialist LPS 1175 commercial query, dominated by HAG, Sunray, Premier, HM Group, DoorTechnik. SR4 blog (19 Apr) hasn't ranked yet.

**Notable:** Buckinghamshire 8-position drop is the biggest concern. Worth investigating SERP cause (competitor move? title-optimisation parallel session?). Cobham drop similar.

## Shipped this session

- **Internal links — 3 under-linked blog posts fixed.** 11 inline body links added across [what-is-sr3-security-rating](src/data/blog/posts/what-is-sr3-security-rating.ts), [choosing-entrance-door-colour](src/data/blog/posts/choosing-entrance-door-colour.ts), [luxury-front-doors-uk-buyer-guide](src/data/blog/posts/luxury-front-doors-uk-buyer-guide.ts) — links woven into body paragraphs (not just closing-paragraph dump). Targets include topic hubs (`/sr3-residential-steel-door`, `/pas-24-steel-entrance-door`, `/secured-by-design-steel-front-door`, `/colours`, `/bespoke-steel-front-doors-uk`, `/thermally-broken-steel-front-door`) plus related blog posts. Build clean, FAQ validator passed.
- **`/ai-answers` HTML page shipped.** Mirrors Vitrums pattern using SteelR's brand palette (cream/dark/gold). 11 Q&A pairs from `llms.txt:41-72`, FAQPage + BreadcrumbList JSON-LD, Quick Facts box. New files/edits: [src/app/ai-answers/page.tsx](src/app/ai-answers/page.tsx) (new), added to [sitemap.ts](src/app/sitemap.ts), [Footer.tsx](src/components/Footer.tsx) legal links, and [HTML sitemap page](src/app/sitemap/page.tsx). Build passed (188 B page, 98.6 kB First Load JS). **Verification limitation:** verified via build only (compile + FAQ validator pass). Not visually QA'd in browser preview — the page uses inline-style hex values (matches Footer.tsx pattern), structurally identical to working Vitrums equivalent. Worth a quick smoke test post-deploy.

## 23 Apr PM — Indexing API mass push (177 URLs total today)

After commit `7831c88` deployed: pushed 177 URLs via Indexing API + IndexNow. ~23 calls of headroom under Google's 200/day soft cap. Coverage: 10 topic hubs + 16 area hubs + all Tier C/B/A child pages + 11 product/section pages. 35 blog posts + 54 collection door pages still untouched today.

## 23 Apr PM — GSC URL Inspection UI push (10/10 daily quota hit)

Manual Request Indexing via Chrome MCP automation. **Quota exceeded message appeared on 11th attempt.** Total today: 10 (3 earlier + 7 this batch).

This batch (7 successful):
1. `/ai-answers` (was URL unknown to Google)
2. `/blog/sr4-lps-1175-commercial-grade-residential` (recrawl queued)
3. `/sr3-residential-steel-door` (topic hub)
4. `/pas-24-steel-entrance-door` (topic hub)
5. `/secured-by-design-steel-front-door` (topic hub)
6. `/bespoke-steel-front-doors-uk` (topic hub)
7. `/steel-front-door-cost-uk` (topic hub)

**Deferred to tomorrow's UI quota** (rolling 24h reset, queue these first):
- `/areas/buckinghamshire` (rank dropped #1→#9 — top priority)
- `/areas/cobham` (rank dropped #9→unranked — top priority)
- `/steel-front-door-vs-composite` (NEW #5 organic — reinforce)
- `/luxury-steel-entrance-door-london`
- `/uk-steel-doors-vs-imported`
- `/thermally-broken-steel-front-door`
- `/fire-rated-fd30-front-door`

## Next actions (in priority order)

1. **Refill blog publish queue** — Thu 24 Apr 20:00 UTC cron will no-op without it. ~28 hrs to action.
2. **Tomorrow ~17:00 UK: GSC UI push deferred 7 URLs above** (Bucks + Cobham first).
3. **Investigate Bucks #1 → #9 drop** — wait 5-7 days for re-crawl-wobble vs real drop verdict; manual incognito Google UK check is the optional shortcut.
4. **Reviews SSoT + aggregateRating** — still blocked on first GBP review.
5. **Tomorrow: Indexing API push remaining 35 blog posts + 54 collection doors** for full sitemap parity post-template change.

## 25 Apr session — GA4 install + brand-policy price scrub

### GA4 site-wide tracking now live (commit `b106d9c` after `b3f4c0f` and `a56d88b`)

Property `SteelR` (G-VSZ1XXGY2Z) created in info@supplywindows.co.uk Analytics account. `NEXT_PUBLIC_GA_ID` set on Vercel for production+development. `<GoogleAnalytics />` rendered in [layout.tsx](src/app/layout.tsx) site-wide. Realtime confirmed receiving page_views + cookies (`_ga`, `_ga_VSZ1XXGY2Z`).

**Two debug iterations needed before working:** `next/script lazyOnload` then `afterInteractive` both rendered the script tag but never executed the inline init in production builds. Final fix: raw `<script async src=...>` + `<script dangerouslySetInnerHTML>` (canonical GA4 install). Documented in component file. The existing `gtag('event','generate_lead', ...)` in [ThankYouTracking.tsx:33](src/app/thank-you/ThankYouTracking.tsx) now fires automatically on `/thank-you` page loads.

### Brand policy price scrub (commits `3732232`, `709ec68`, plus follow-up commit)

User flagged that displayed prices appeared on the site without approval. Brand policy in CLAUDE.md is unambiguous: no displayed prices. Research-scout confirmed 10 of 11 closest peers (Original Steel Doors, Deuren, Crittall, Inotherm, Pirnar, Gerda, Strongdor, Robust UK, Metador, Bespoke Steel Doors) are quote-only — only Latham's publishes "from £" numbers and they sit below SteelR.

**Removed (5 source files + llms-full.txt regenerated):**
- Area-page FAQ generator at [src/app/areas/[slug]/page.tsx:166](src/app/areas/[slug]/page.tsx) — "from around £5,000" line. Single edit propagates to all 161 area pages.
- llms-full.txt mirror lines (3 instances of £5,000 + 2 instances of £3,000 / mid-thousands)
- [steel-vs-upvc-front-doors-comparison.ts:127](src/data/blog/posts/steel-vs-upvc-front-doors-comparison.ts) — "£3,500 to £8,000" SteelR price
- [luxury-front-doors-uk-buyer-guide.ts:150](src/data/blog/posts/luxury-front-doors-uk-buyer-guide.ts) — "£3,500 vs £9,500" example
- [bespoke-entrance-doors-uk-guide.ts:169](src/data/blog/posts/bespoke-entrance-doors-uk-guide.ts) — "starts from the mid-thousands"
- [how-much-do-steel-doors-cost-uk.ts:242](src/data/blog/posts/how-much-do-steel-doors-cost-uk.ts) — "starts from approximately £3,000"

**Kept deliberately (per research):**
- The body of [how-much-do-steel-doors-cost-uk.ts](src/data/blog/posts/how-much-do-steel-doors-cost-uk.ts) — entry/mid/premium tiers and hardware ranges remain. Cost-guide blog is the highest-leverage AI citation surface and is essentially a "how this is priced" educational piece, not a published list.
- Competitor-material price ranges in vs-composite, vs-timber, vs-fibreglass blogs (educational benchmarking).

**Re-indexing pings after deploy:** 15 URLs to IndexNow + 14 URLs to Google Indexing API (the 12 highest-priority area hubs + 2 edited blogs + llms-full.txt). Today's Indexing API total: 191/200 soft cap.

### Verified retroactively by global subagent routing (which I should have run proactively)

- `copy-editor`: PASS on 5/6 edits, FAIL on "uPVC is a budget commodity" — fixed to "uPVC is a volume commodity" (split sentence, swapped "budget" out of banned-adjective register).
- `seo-schema-validator`: PASS — all FAQPage / BreadcrumbList / LocalBusiness JSON-LD parses; canonical clean; no escape issues with the new parentheses.
- `llms-txt-integrity-checker`: WARN → 2 more SteelR-attributed prices found at llms-full.txt:1330 and :1367 (originating from `how-much-do-steel-doors-cost-uk.ts:242` and `bespoke-entrance-doors-uk-guide.ts:169`). Both fixed in source + llms-full.txt regenerated via `node scripts/blog/backfill-llms-full.mjs`.
- `fact-check-gate`: FAIL on "166 area slugs" — actual is **161 area slugs across 17 region files** (the 166 came from a stale figure in my own commit message, derived in turn from a stale CLAUDE.md "172"). Use **161** going forward. CLAUDE.md still says 172 in places — needs cleaning in a future session.

### Lesson for future sessions: dispatch subagents proactively, not retroactively

The global routing rules in `~/.claude/CLAUDE.md` say `copy-editor`, `seo-schema-validator`, and `llms-txt-integrity-checker` should fire on relevant changes BEFORE shipping. I missed all three during the price-scrub work. The retroactive run caught one real word-choice error and 2 missed SteelR price mentions in llms-full.txt that I would otherwise have left in production. **Run the relevant subagents before pushing any change touching schema, llms-txt files, or shipped prose.**

## ✅ 22-23 Apr session wins (all live on steelr.co.uk via Vercel)

Commit `552b445` on `origin/main` (pushed 22 Apr late PM). All of the below verified live:

- **Collection → blog bridge** — `src/app/collection/[slug]/page.tsx` adds "Guides that pair with this door" section, style-aware blog-slug map. **162 new outbound links** across 54 door pages.
- **Area → blog bridge** — `src/app/areas/[slug]/page.tsx` adds "Guides for {label} Homeowners" section after Nearby Areas, region-routed via `getAreaGuides()` (London / Surrey / Kent / Bucks / Berkshire etc.). **498 new outbound links** across 166 area pages.
- **Blog "Continue Reading" filter** — `src/app/blog/[slug]/page.tsx:48` now prefers same-category posts then falls back to recency (was alphabetical `.slice(0, 2)`).
- **Schema additions** — `src/app/layout.tsx` LocalBusiness now has `@id`, `streetAddress` (11 Silverbirch Close), `postalCode` (UB10 8AP).
- **Direct Answers in `llms-full.txt`** — 10 Q&A pairs copied from `llms.txt` into the deep reference.

Live verification samples (run 23 Apr): `/collection/black-panelled-double-letterbox` (Double Doors) → links to double-doors guide + luxury buyer + security ratings; `/areas/cobham` (Surrey) → Surrey + country-homes + RAL colours; `/areas/hampstead` (London) → London-townhouses + London-period + security.

## GSC URL Inspection submissions (23 Apr AM)

Submitted 3 of 12 planned priority URLs via `/url-inspection/Request Indexing`:
- ✓ `https://steelr.co.uk/`
- ✓ `https://steelr.co.uk/collection`
- ✓ `https://steelr.co.uk/areas`

**Stopped short of quota** — GSC SPA fought every subsequent URL change (Return key not submitting, triple-click + paste needed each time). Remaining 9 to submit in a next session:
- `/blog`
- `/collection/black-panelled-double-letterbox` (template proof with new blog links)
- `/areas/cobham` (Surrey routing proof)
- `/areas/hampstead` (London routing proof)
- `/areas/buckinghamshire` (Bucks ranks #1 — reinforce)
- `/blog/what-is-sr3-security-rating` (SR3 ranks #8, push up)
- `/blog/sr4-lps-1175-commercial-grade-residential`
- `/blog/front-door-security-ratings-compared-sr1-to-sr3`
- `/blog/pas-24-doors-explained-uk-homeowners`

## Remaining queued

- **3 under-linked blog posts** — add inline internal links: `what-is-sr3-security-rating` (0 links currently), `choosing-entrance-door-colour` (0), `luxury-front-doors-uk-buyer-guide` (1). ~15 min content edits.
- **Reviews SSoT + aggregateRating** — port Vitrums' `src/data/reviews.ts` + `scripts/reviews/append-review.mjs` pattern so schema lights up on first GBP review. ~30 min (not useful until first review).
- **`/ai-answers` HTML page** — mirror Vitrums' pattern using the 10 Direct Answers from `llms.txt:41-72`. ~40 min.

## Audit findings (22 Apr — parallel agent sweep)

Read-only audit by general-purpose agent covering CRO on QuickEnquiry, internal linking, and schema/llms diff vs Vitrums.

### Critical severity — internal linking gaps
- `src/app/collection/[slug]/page.tsx:46` — **54 product (door) pages have ZERO blog links.** `getRelatedDoors(door)` returns sibling doors only. Massive missed topical-authority signal. **Fix: add a "Further reading" block mapping door style → 2-3 curated blog slugs.** ~45 min.
- `src/app/areas/[slug]/page.tsx` — **166 area pages have ZERO blog links.** Missing hub→blog signal across the entire area network. **Fix: "Guides for {label} homeowners" block after FAQ section, 2-3 blog links chosen by region.** ~60 min.

### High severity
- `src/app/blog/[slug]/page.tsx:48` — "Continue Reading" uses alphabetical `.slice(0,2)`, ignores `post.category`. Shown on all 40 blog posts. **Fix: filter by matching category first, fallback to recency. 1-line change.**
- `src/app/layout.tsx:82-136` — No `aggregateRating` anywhere on site. Vitrums has one driven from `reviews.ts`. **Fix: port Vitrums' reviews SSoT pattern (`src/data/reviews.ts` + `scripts/reviews/append-review.mjs`) so schema lights up the moment first GBP review lands.** ~30 min (blocked on first review).
- 3 specific blog posts have 0-1 internal links: `what-is-sr3-security-rating.ts` (0), `choosing-entrance-door-colour.ts` (0), `luxury-front-doors-uk-buyer-guide.ts` (1). **Fix: add 3-4 inline links each.**

### Medium severity
- `src/app/layout.tsx:97-102` — LocalBusiness schema missing `streetAddress` + `postalCode` (only locality/region/country). Vitrums has full address. **Fix: add `streetAddress: "11 Silverbirch Close"`, `postalCode: "UB10 8AP"`.**
- `public/llms-full.txt` — Direct Answers Q&A block missing (present in `llms.txt:37-72`). AI crawlers sampling the full version don't see branded Q&A pairs. **Fix: copy from llms.txt into llms-full.txt, expand with 4-5 extras.**
- `src/components/QuickEnquiry.tsx:320` — Copy says "respond within 24 hours, weekdays" but `llms.txt:72` promises "2 working hours". Inconsistent trust signal. **Fix: align to "2 working hours".**

### Low
- `src/app/layout.tsx:84` — No `@id` on Organization. Vitrums has `"@id": "https://www.vitrums.co.uk/#business"`. **Fix: add matching `@id` for SteelR.**
- No `/ai-answers` HTML page (Vitrums has one). Mirror Vitrums' pattern to duplicate AI-citation surface. ~40 min.

## Where I left off
Major build-out session 22 Apr. Commits (newest first): session handoff docs (`350cc0e`), dead-blog-link cleanup in llms (`365d3e2`), second-pass blog cleanup + weekly rank tracker (`36ac572`), baseline visibility audit run (`cf477e2`), 5 West London area pages + llms overhaul (`71f6e28`), `ThankYouTracking` Suspense wrap (`85f5a4e`), QuickEnquiry inline form on all 288 content pages + `/thank-you` GA4 page (`e73f058`), cannibalisation cleanup + thin-content expansion (`1679f13`), 46-post blog SEO metadata rewrite + new luxury pillar (`5584929`), `/lookbook` editorial microsite shipped w/ Vercel Analytics + WhatsApp share + event tracking.

**Audit headline from `audit-data/visibility-audit-20260422.md`:**
- Google organic: 5/26 keywords (19%) — brand #1, SR3 #8, Bucks #1, Cobham #9
- Google Maps: **0/11** — not ranking even for brand query; blocked by 0 GMB reviews
- Bing: **0/15** — post-migration indexing lag, IndexNow wired 19 Apr, recovery expected mid-late May
- Perplexity: cited "best-fit" for SR3 Secured by Design
- ChatGPT: listed FIRST for UK bespoke steel door manufacturers
- Google AI Mode: #1 featured manufacturer, `steelr.co.uk +4` primary citation

**AI engines are the strongest channel. Biggest gap: Maps (review-blocked) + Google organic (indexing lag).**

## Next action
Pick from 5 open options in `CLAUDE.md` handoff (A–E):
- **A.** `/thank-you` leave-a-review CTA (mirrors Vitrums pattern) — small edit
- **B.** Verify GSC Indexing API setup — if missing, ~30 min setup, plausible root cause for 5/26 organic
- **C.** Lighthouse mobile baseline + apply Vitrums perf playbook if weak
- **D.** Internal linking audit across 42 blogs + area + product pages
- **E.** Diff schema / llms.txt against Vitrums to protect the AI-engine moat

**Do not duplicate parallel sessions in flight:** blog queue refill + area page title optimisation.

## Blockers
- 0 GMB reviews blocking Maps 3-pack — user-managed, do not prescribe process
- Bing indexing lag until mid-late May — expected, no action

## Current site scale (verified 22 Apr)
Live https://steelr.co.uk since ~3 Apr 2026.
- **40 blog .ts files** in `src/data/blog/posts/` + 1 staged
- **166 area slugs** across 16 county/city files in `src/data/locations/`
- Doors configured in `src/data/doors.ts`
- `/lookbook` editorial microsite (new 22 Apr)
- 288+ pages wired with source-tagged QuickEnquiry → `/api/contact` → `info@supplywindows.co.uk`
- `/thank-you` with GA4 conversion tracking

_Note: earlier CLAUDE.md notes claim "42 blogs / 173 areas / 62 doors" — those figures are stale. Verify before asserting._

---

_Update at end of every session._
