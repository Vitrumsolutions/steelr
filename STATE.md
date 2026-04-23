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

## Next actions (in priority order)

1. **Push + ping `/ai-answers`** — once committed and deployed via Vercel, run `python audit-data/submit_indexing.py 1 --site=steelr` after queueing the URL, plus `node scripts/bing/indexnow-submit.mjs https://steelr.co.uk/ai-answers` to fast-index it.
2. **Refill blog publish queue** — Thu 24 Apr 20:00 UTC cron will no-op without it. Parallel session was supposed to handle.
3. **Investigate Bucks #1 → #9 drop** — biggest visibility regression today. Re-check `/areas/buckinghamshire` content + competitor SERP shift.
4. **Reviews SSoT + aggregateRating** — still blocked on first GBP review.
5. **Indexing API queue is empty** — last 18-URL batch all returned HTTP 200. Next obvious push is anything edited above (the 3 blogs + /ai-answers) once committed.

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
