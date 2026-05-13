# /areas/buckinghamshire — git history forensic (22 Apr to 13 May 2026)

Investigation of every commit touching Bucks-relevant files in the window where the page slid from Google #1 (22 Apr) to outside top 30 (5 May, sustained 13 May). The hub-page Buckinghamshire entry in `src/data/locations/buckinghamshire.ts` is the canonical source for the URL ranking on "steel doors Buckinghamshire". The template at `src/app/areas/[slug]/page.tsx` renders title, H1, meta description, schema and body for that URL plus 160 sibling area pages.

## Files investigated

`src/app/areas/[slug]/page.tsx`, `src/data/locations/*.ts` (especially `buckinghamshire.ts`), `src/data/locations/index.ts`, `src/data/locations/types.ts`, `src/app/sitemap.ts`, `src/app/layout.tsx`, `next.config.*`, `public/robots.txt`. No `src/components/areas/` directory exists. No commits touched `index.ts`, `types.ts`, `sitemap.ts`, `next.config.*` or `robots.txt` in window.

## Timeline (oldest to newest)

| # | SHA | Date | Files | What it did to Bucks signal |
|---|---|---|---|---|
| 1 | 036d6240 | 22 Apr 21:38 | `buckinghamshire.ts` (10 child areas) | +1362 chars per child area (Beaconsfield, Gerrards Cross, Amersham, etc). Hub entry untouched on purpose. Net positive. Likely the cause of the #1 rank that day. |
| 2 | 552b4451 | 22 Apr 23:46 | `[slug]/page.tsx` | Added `getAreaGuides()` and a per-area blog-link strip. Adds outbound links (Bucks region maps to bucks blog + period guide + RAL colours). Neutral/positive. |
| 3 | 3732232a | 25 Apr 01:45 | `[slug]/page.tsx` | Removed displayed SteelR prices from FAQ block. Brand-policy fix, no ranking signal change. |
| 4 | 0f539985 | 25 Apr 02:17 | `[slug]/page.tsx` | Stale area-count language updated. Trivial. |
| 5 | 35eb0a96 | 25 Apr 09:14 | `[slug]/page.tsx` | Reviews SSoT + GA4 events on QuickEnquiry. JS only, no copy. |
| 6 | 875df5ea | 28 Apr 00:24 | `[slug]/page.tsx` | **Title pattern rewritten.** Hub title `Steel Entrance Doors Buckinghamshire \| Bespoke Steel Doors \| SteelR` becomes `Steel Doors Buckinghamshire \| Bespoke Steel Front Doors, SR3 Rated \| SteelR`. H1 `Bespoke Steel Entrance Doors Across Buckinghamshire` becomes `Steel Doors Buckinghamshire: Bespoke Steel Front Doors, SR3 Rated`. Description lengthened with SR4 LPS 1175 tail. Commit message describes Bucks as "the canary"; ranking was already #1 when this shipped. |
| 7 | 56fa9989 | 29 Apr 09:10 | `[slug]/page.tsx` | Added `@id` reference into HomeAndConstructionBusiness schema. Description string in schema reverted to shorter wording. No H1 / title change. |
| 8 | ebdb8604 | 29 Apr 15:17 | `[slug]/page.tsx` + locations | Site-wide relabel of SR3/SR4/LPS 1175 to add BS EN 1627:2011 RC4 framing. First introduction of dense cert acronyms into the area-template body. |
| 9 | 5ac969e8 | 02 May 09:28 | `[slug]/page.tsx` | Title hub form **lost the "SR3 Rated" tail**, became `Steel Doors Buckinghamshire \| Bespoke Steel Front Doors \| SteelR`. Description bloated to include `BS EN 1627 RC4 standard, LPS 1175 SR3 / SR4 available, PAS 24, Secured by Design, FD30S`. Schema description rewritten to a 60-word jargon sentence chaining four cert standards. |
| 10 | 2008fa0a | 02 May 15:18 | `[slug]/page.tsx` + locations | Further 4-tier cert ladder consistency edits. |
| 11 | 785ab7a0 | 02 May 16:26 | `[slug]/page.tsx` | Cert-ladder cohesion. |
| 12 | 918b914b | 03 May 08:21 | `[slug]/page.tsx` | **H1 rewritten** from `Bespoke Steel Entrance Doors Across Buckinghamshire` (post-28-Apr `Steel Doors Buckinghamshire: Bespoke Steel Front Doors, SR3 Rated`) to `Steel Doors Buckinghamshire: Bespoke Steel Front Doors, BS EN 1627 RC4 Standard with LPS 1175 SR3 / SR4 Available`. The new H1 is 16 words. The commit message acknowledges this was a reaction to the already-detected regression. |
| 13 | 20e9ca48 | 03 May 09:43 | `[slug]/page.tsx` + locations + layout | Added `"LPS 1673 Attack-Resistance on Enquiry"` 9th entry in `credentials` chrome strip on all 161 area pages. Layout.tsx OG description rewritten to chain all four tiers. |
| 14 | 2c54c8bf | 03 May 20:34 | `buckinghamshire.ts` (6 child areas) | Regex sweep replaced "SR3 as standard" wording in Beaconsfield, Gerrards Cross, Chalfont St Peter, Penn, Princes Risborough, Burnham. Beaconsfield has a regex artifact: `"BS EN 1627 RC4 as Standard with LPS 1175 SR3 (Enhanced upgrade) to BS EN 1627 Class 3"` (residual `to BS EN 1627 Class 3` tail that the original phrase carried). Hub paragraph itself was NOT touched. Bucks was NOT in the 12-page doubled-content list patched by a1c67a2 next day. |
| 15 | a1c67a20 | 04 May 09:43 | other location files | Patched the 12 doubled-content pages from #14. Buckinghamshire pages were not in the patch list. |
| 16 | a2dee509 | 05 May 19:56 | `[slug]/page.tsx` | Added a "security specification" 4-card link block (SR3 + PAS 24 + SBD + FD30 each with text + arrow) under every area page hero. 644 new outbound internal links across 161 pages. Net structural change to body order and link signal. |
| 17 | e8dc947e | 05 May 20:10 | `[slug]/page.tsx` | A11y polish on the same 4-card block (focus-visible outlines, aria-hidden on glyphs). No copy change. |
| 18 | 2979e071 | 10 May 10:09 | `[slug]/page.tsx` | Added a second 4-card block linking to the 4 audience hubs (architects, developers, housing associations, property managers). Em-dash sweep on comments. Another structural body insertion. |
| 19 | 37c6833d | 10 May 18:19 | `buckinghamshire.ts` (Beaconsfield only) | Patched the Beaconsfield regex artifact: removed `to BS EN 1627 Class 3` tail and tightened the cert phrase. Class 3 sweep. |

## Diff highlights — where Bucks signal was diluted

**Title.** 22 Apr title was `Steel Entrance Doors Buckinghamshire | Bespoke Steel Doors | SteelR`. By 13 May the title is `Steel Doors Buckinghamshire | Bespoke Steel Front Doors | SteelR` (commit 5ac969e8). The exact-match keyword phrase "Steel Doors Buckinghamshire" survived. The brand chip after it stayed. Net title change is mild, but the descriptor changed from "Steel Entrance Doors" (which is a real query head SteelR ranks for) to "Bespoke Steel Front Doors". Slightly weaker for the head term.

**H1 (sr-only).** 22 Apr H1 was `Bespoke Steel Entrance Doors Across Buckinghamshire` — a clean keyword-led sentence. By 13 May (after 918b914b) the H1 is `Steel Doors Buckinghamshire: Bespoke Steel Front Doors, BS EN 1627 RC4 Standard with LPS 1175 SR3 / SR4 Available` — 16 words, two cert acronyms, mostly off-topic to the head query "steel doors Buckinghamshire". Google reads H1 as the primary topic vector; this H1 reads as primarily about cert standards, not Buckinghamshire.

**Meta description.** 22 Apr description led with location intent. The 28 Apr, 2 May and 5 May edits chained more and more certification acronyms onto it. By 13 May the description is `Bespoke steel front doors in Buckinghamshire. BS EN 1627 RC4 standard, LPS 1175 SR3 / SR4 available, PAS 24 certified, Secured by Design, FD30S fire rated. UK manufactured by SteelR.` Acronym density is high, location intent is low.

**Schema HomeAndConstructionBusiness `description`.** 22 Apr value was clean prose. 02 May rewrite expanded it to 60 words of chained standards (`Standard residential specification at BS EN 1627:2011 RC4 single leaf, unglazed, with LPS 1175 SR3 and SR4 enhanced and commercial-grade certifications available, and LPS 1673 attack-resistance available by enquiry. PAS 24 certified, Secured by Design approved, FD30S fire rated, ISO 9001 manufactured, Made in Britain.`). This is the schema Google sees for every area page including Bucks hub.

**Body content for the Bucks hub itself.** The hub paragraph (the most ranking-signal-heavy on-page text for `/areas/buckinghamshire`) was not touched. Child-area paragraphs were edited in 2c54c8bf and 37c6833d. The Bucks hub paragraph still reads as it did on 22 Apr. So content depth on the hub did not regress.

**Cert-strip and 4-card additions.** Three structural insertions between 3 May and 10 May added a 9th cert-strip entry, a 4-card security block (a2dee509) and a 4-card audience-hub block (2979e071). Body order shifted. Inbound link signal to /sr3, /sr4, /pas-24, /secured-by-design, /fire-rated-fd30, /architects, /developers, /property-managers, /housing-associations all got 161x boost from area pages; this redistributes PageRank away from the area hub itself.

## Bottom line — most likely cause(s)

Three commits stack to explain the regression. Confidence: Reasoned (per the Recommendation Gate — these are diff-evidence inferences, not before/after captured data). Ranked by signal weight:

1. **918b914b (3 May, H1 rewrite).** Highest-weight signal change. Replaced a clean location-intent H1 with a 16-word cert-acronym H1 across all 161 area pages. Google reads this as topic dilution. The commit message itself names this as the suspected cause and notes positions won't recover immediately. **This is the most likely single cause.**

2. **5ac969e8 (2 May, title + meta + schema rewrite).** Title lost "SR3 Rated", description bloated to acronym-chain, schema description rewritten to 60-word jargon block. Compounds (1).

3. **a2dee509 + 2979e071 (5 + 10 May, 644 + 644 outbound links added).** Redistributes signal away from area pages by giving each one 8 new outbound internal links to topic and audience hubs. Compounds the topic-dilution problem because half the new links point to security cert pages, not steel-doors-by-area pages.

The 22 Apr child-area content uplift (036d6240) is positive and was preserved. The 3 May Batch 1C regex sweep on Bucks child entries left a Beaconsfield artifact patched 7 days later (37c6833d) but did not damage the hub paragraph and was not in the doubled-content list patched by a1c67a2.

To verify: re-run rank tracking after reverting the H1 to the 28 Apr or 22 Apr wording and observe whether `/areas/buckinghamshire` recovers within 14 days. The H1 revert is cheap and reversible.
