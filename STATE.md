# SteelR — STATE

## Where I left off
03 May 2026 evening. **Phases 0 and 1 of the long-term authority roadmap shipped + live verified.** The user pre-approved a multi-commit batch ("continue with 8 commits"). Phase 1 (RC4 topic page completing the 4-tier ladder) shipped in commit `a2fa6f4`. Four bundled a11y commits also shipped (contrast, hero pause, form labels, focus trap + lang). New RC4 page pushed to GSC Indexing API + IndexNow (HTTP 200 both). Next session picks up at Phase 2 (the audience-hub wedge: /for-architects, /for-developers, /insurance-recognised-front-doors-uk, /heritage-conservation-steel-doors-uk).

## The 5 load-bearing patterns (committed once, never break these)

Every future session, every new content addition, every edit MUST work within these. If a piece of content cannot be built within them, do not change the pattern — find a different angle for the content.

1. **The 4-tier cert ladder, this order, these labels, every surface.** `BS EN 1627:2011 RC4 single leaf, unglazed (Standard) → LPS 1175 SR3 (Enhanced) → LPS 1175 SR4 D10 Issue 8 (Commercial-grade) → LPS 1673 (Ultra-high, by enquiry)`. No tier dropped on any page. No reordering. No relabeling.
2. **Topic page recipe.** `<InfoPage>` component + BreadcrumbList JSON-LD + FAQPage JSON-LD + WebPage JSON-LD with `about[]` Things + 5 FAQs (70-110 words each) + back-link to `/bespoke-steel-front-doors-uk` hub. Sitemap priority 0.8 (or 0.85 for cert pages).
3. **Area page recipe.** `generateMetadata` title template + `CredentialsStrip` (now 9 entries including LPS 1673) + 4-variant rotated boilerplate + nearby areas grid + `getAreaGuides()` blog bridges. Sitemap priority 0.7.
4. **llms.txt structural rhythm.** 11 sections in this order: Direct Answers → Why-We're-the-UK-Specialist → Rare Specs → Glossary → Technical Specs → Entity Reference → Areas → Pricing → Contact → Key Pages → Topic Guides. Q&A length 250-785 chars. No duplicate URLs. No inline URLs in Direct Answers. Panel-gated for any change via `/panel-llms`.
5. **House style.** No em-dashes, no exclamations, no banned words ("affordable / cheap / discount / best prices") describing SteelR, no displayed prices, no competitor names in URLs/H1s (factual mentions OK in body), no supplier names anywhere. Brand-guard pre-commit hook enforces.

## The 4-phase roadmap (the order that keeps long-term authority)

**Phase 0 — STRUCTURAL FIXES (✅ SHIPPED in commit `20e9ca4`)**
Close the 4-tier ladder asymmetry across all surfaces. Done in 6 fixes:
- ✅ Area page credentials array now includes LPS 1673 (161 pages)
- ✅ layout.tsx OG + Twitter description rewritten with full 4-tier framing (154 chars)
- ✅ /blog/what-is-sr3-security-rating redirect verified live HTTP 308
- ✅ Blog count reconciled to canonical 39 across CLAUDE.md
- ✅ Duplicate /lps-1673-attack-resistant-steel-door entry removed from llms.txt
- ✅ Entity Reference query maps expanded with RC4 + LPS 1673 mappings (both files)

**Phase 1 — CLOSE THE 4-TIER ASYMMETRY (✅ SHIPPED in commit `a2fa6f4`)**
The genuine wedge is the 4-tier ladder. RC4 is branded as the *Standard* tier on every page but had no dedicated URL while SR3/SR4/LPS 1673 each had one. The structural inconsistency is now closed.
- ✅ `/bs-en-1627-rc4-residential-steel-door` topic page built via Pattern #2 (InfoPage + BreadcrumbList + WebPage about[] + FAQPage + 5 FAQs + back-link to bespoke hub) — live HTTP 200
- ✅ Sitemap priority 0.85 (matches SR3/SR4/LPS 1673)
- ✅ Cross-links FROM 5 sibling pages (sr3, sr4, lps-1673, sbd, bespoke hub) verified live
- ✅ llms.txt Topic Pages entry (350 chars, within 148-650 range)
- ✅ llms-full.txt Topic and Comparison Guides deep-dive entry mirroring SR3 pattern
- ✅ Pushed to GSC Indexing API + IndexNow (HTTP 200 both)
- ⏳ Re-run AI spot-check at 10 May (7-day mark) to measure RC4 ingestion uplift vs 03 May baseline

**Phase 1 a11y polish (✅ SHIPPED, 4 bundled commits)**
- ✅ `85b9cda` — Sub-AA contrast fixed: Nav links 4.0:1→5.4:1, phone link 3.3:1→5.4:1, Hero subhead 3.4:1→5.0:1
- ✅ `5c43dbf` — Hero carousel pause/play control (WCAG 2.2.2)
- ✅ `b2699df` — QuickEnquiry visible labels on 288+ pages (WCAG 3.3.2) + aria-required
- ✅ `b030581` — Mobile menu Tab focus trap (WCAG 2.4.3) + lang="en-GB" (WCAG 3.1.1)

**Phase 2 — BUILD THE AUDIENCE-HUB WEDGE (this month, ~6-10 hours)**
The wedge identified by research-scout: no UK competitor combines homeowner design + full standards depth + conservation/heritage + HNW security narrative. Build dedicated hubs for the 4 audiences:
- `/for-architects` — NBS clauses, BIM/IFC files, U-value calc data, acoustic Rw + Ctr, wind class BS EN 12210, threshold detail drawings, CE/UKCA DoP downloads, fire test reports BS EN 1634-1
- `/for-developers` — Approved Doc Q pack, BSA golden-thread documentation, NHBC/Premier compatibility, social housing frameworks, gateway 2/3 evidence packs
- `/insurance-recognised-front-doors-uk` — LPCB Red Book entries, insurer-recognised certification ladder, expected premium-impact framing, claims-evidence retention
- `/heritage-conservation-steel-doors-uk` — Article 4, Listed Building Consent, period-accurate panel mouldings, conservation officer support letters, named conservation area case studies

Each follows the topic-page recipe (Pattern #2). Each gets one supporting blog post per quarter.

**Phase 3 — POSITION FOR 2026-2028 TRENDS (this quarter, ~8-12 hours)**
Win commercial-intent queries 12-24 months ahead of competitors:
- `/part-l-2026-front-door-u-value-uk` — March 2027 enforcement = 12-month head start. Notional 1.0 W/m²K, backstop 1.6 W/m²K. ADL1_2026 published.
- `/epd-embodied-carbon-residential-front-door-uk` — Procurement threshold in 2026, no competitor coverage right now.
- `/flat-entrance-door-fd30s-fd60-bsa-uk` — BSA quarterly + annual checks live, gov.uk reg 10 fact sheet.
- Existing `/blog/smart-locks-steel-entrance-doors-guide` upgraded to topic page (biometric + SR3 cert preservation).
- Existing `/lps-1673-attack-resistant-steel-door` strengthened (Phase 0 already added Direct Answer + Entity Reference).

**Phase 4 — ONGOING AUTHORITY MAINTENANCE**
- Weekly: GBP review push (user-managed, do not re-suggest).
- Monthly: Cannibalisation auditor sweep + AI spot-check.
- Quarterly: Full visibility audit + Bing recheck.
- Continuous: Every new addition validated against the 5 load-bearing patterns. If it can't fit, it doesn't ship.
- One-time P1: Add ChatGPT/Perplexity/Claude/Gemini/AI-Mode queries to `audit-data/visibility-audit.py` so future runs auto-track AI uptake.

## Things explicitly retired this session (do NOT propose again)

- ❌ 2 separate vs-pages for Latham's / Strongdor — branded "vs" intent is small-volume, blog post handles it via existing pattern. The 2-vs-pages plan is RETIRED.
- ❌ Consolidating existing vs-composite + vs-imported — they work, leave them alone.
- ❌ New `<InfoPage>` variants — every topic page uses the same template. Discipline.
- ❌ Mass-content pushes (no "build 50 area pages") — quality > quantity.
- ❌ BS 8214:2026 content — research-scout couldn't verify the standard exists. Current canonical is BS 8214:2008.

## Next action
- **Phase 2** in next session: build the audience-hub wedge (4 hubs via Pattern #2 InfoPage template):
  1. `/for-architects` — NBS clauses, BIM/IFC files, U-value calc data, acoustic Rw + Ctr, wind class BS EN 12210, threshold detail drawings, CE/UKCA DoP downloads, fire test reports BS EN 1634-1
  2. `/for-developers` — Approved Doc Q pack, BSA golden-thread documentation, NHBC/Premier compatibility, social housing frameworks, gateway 2/3 evidence packs
  3. `/insurance-recognised-front-doors-uk` — LPCB Red Book entries, insurer-recognised certification ladder, expected premium-impact framing, claims-evidence retention
  4. `/heritage-conservation-steel-doors-uk` — Article 4, Listed Building Consent, period-accurate panel mouldings, conservation officer support letters, named conservation area case studies
- **GSC + IndexNow recheck**: 11 priority URLs pushed today (10 from morning + 1 RC4 evening). Check GSC Page Indexing report in 7-10 days for indexing uplift on /areas/buckinghamshire, /areas/kensington, /areas/esher, the 3 Phase 1D pages, sr3, sr4, lps-1673, security-specification, bs-en-1627-rc4.
- **AI spot-check at 10 May (7-day mark)**: re-run on the 10 queries from 03 May baseline to measure (a) whether 4-tier ladder full uptake closed (RC4 + LPS 1673 were absent on 03 May; should now appear), (b) whether new RC4 topic page is being cited.
- **P1 still open**: em-dash detector in brand-guard.mjs is **already implemented** (DASH_PATTERNS at line 138). Yesterday's deep-reviewer recommendation was outdated. Mark off the queue.
- **P2 polish remaining**: InfoPage hero clip verify at 320px with longest H1, page title length trims (7 pages over 60 chars).

## Blockers
- 0 GMB reviews still the Maps 3-pack blocker — user-managed, do not re-suggest.
- Bing recheck 15 May (still inside projected mid-late May recovery window since 19 Apr IndexNow).
- Domain authority is the structural ceiling on Google organic; on-page fixes won't close it alone.
- Supplier disclosure rule: never name the supplier or specific cert IDs that link back to them. Generic body refs (UKAS, LPCB, BRE Global, BM TRADA Q-Mark scheme) are safe.

## Recent wins (last 14 days)
- 2026-05-03 evening — Phase 1 + 4 a11y commits: `/bs-en-1627-rc4-residential-steel-door` topic page completing 4-tier ladder (a2fa6f4); Nav + Hero contrast lifted to 5+:1 (85b9cda); Hero carousel pause control WCAG 2.2.2 (5c43dbf); QuickEnquiry visible labels 288+ pages (b2699df); mobile menu focus trap + lang en-GB (b030581). RC4 page pushed to GSC + IndexNow.
- 2026-05-03 — Phase 0 long-term authority architecture shipped + live: 4-tier ladder now expressed on all 200+ pages (was 13 of 200+); area H1 template fixed across 161 pages; 3 mobile glitches (Hero CTA overlap, QuickEnquiry overflow, CredentialsBanner scroll cue); duplicate llms.txt entry removed; Entity Reference expanded for RC4 + LPS 1673; redirect verified; blog count reconciled (`20e9ca4`, `918b914`, `f314bce`, `2095ea9`, `6ef346a`).
- 2026-05-03 — Multi-agent panel ran (research-scout external authority + deep-reviewer internal audit + cannibalisation-auditor) and produced single coherent long-term plan committed by user.
- 2026-05-03 — GSC Indexing API + IndexNow pushed for 10 priority URLs (3 area pages + 3 Phase 1D + 4 cert/spec pages). All HTTP 200.
- 2026-05-03 — `/security-specification` beefed up with 4-tier side-by-side comparison content via scheduled autonomous P0 task.
- 2026-05-02 — 4-tier cert ladder consistency sweep (3 commits across waves 1+2, 3, 4 + spec gap): 35 source blog posts reframed, factual SR3/RC3 scheme conflation fixed, 39 dB acoustic + 1200 Pa wind + EPD + UKAS-lab framing added to llms files (`2008fa0`, `8d55748`, `785ab7a`).

## Key files
- `next.config.mjs` — 308 redirects (composite-blog deletion, www → non-www, /blog/what-is-sr3 → /sr3-residential-steel-door, /blog/how-much-do-steel-doors-cost-uk → /steel-front-door-cost-uk). Add new redirects here, never chain.
- `src/components/InfoPage.tsx` — shared template for ALL topic pages. Pattern #2 enforced through this. Do NOT create new variants.
- `src/components/CredentialsBanner.tsx` — homepage + collection chrome strip, 8 entries inc. LPS 1673.
- `src/app/areas/[slug]/page.tsx` — 161 area pages template. Credentials array (line 103) now 9 entries inc. LPS 1673. H1 template (line 400-404) cites RC4 Standard + SR3/SR4 Available.
- `src/app/security-specification/page.tsx` — beefed up by scheduled task with 4-tier side-by-side comparison.
- `src/app/sr3-residential-steel-door/page.tsx` + `src/app/sr4-residential-steel-door/page.tsx` + `src/app/lps-1673-attack-resistant-steel-door/page.tsx` — 3 of 4 cert tier pages. Phase 1 builds the 4th: `/bs-en-1627-rc4-residential-steel-door`.
- `public/llms.txt` (now ~35 KB) + `public/llms-full.txt` (~242 KB) — gated by `/panel-llms` + `/panel-llms-approve`. Both files protected by `scripts/checks/llms-panel-check.mjs` PROTECTED array. SHA marker `.checks/llms-panel.json` regenerated for any change.
- `scripts/blog/backfill-llms-full.mjs` — rebuilds Blog Excerpts from `index.ts`. Run after any blog add/edit/delete or any source post change.
- `scripts/brand-guard.mjs` — pre-commit hook. Catches banned words + SteelR-attributed prices. **Does NOT catch em-dashes** (P1 follow-up: add em-dash detector).
- `audit-data/visibility-audit.py` — quarterly script. Currently queries Google + Maps + Bing only; **P1 follow-up: extend with ChatGPT / Perplexity / Claude / Gemini / AI Overview queries**.
- `audit-data/em-dash-backlog-2026-04-28.md` — 1,054-instance cleanup plan.
- `vitrums/audit-data/gsc-indexing-tracker-steelr.json` — GSC submission tracker, 311 URLs submitted. Re-queue from `submitted` → `queue` to push for recrawl.
- `scripts/bing/indexnow-submit.mjs` — pings Bing/Yandex/Seznam/Naver. Run after every llms / topic page change.
- `.claude/scheduled-tasks/steelr-p0-security-spec-beefup-and-visual-qa/SKILL.md` — fired 03 May 09:00 UK (one-time). Auto-disabled. /security-specification beef-up is now in commit `20e9ca4`.
