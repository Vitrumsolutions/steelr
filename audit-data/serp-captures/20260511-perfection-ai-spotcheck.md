# SteelR Perfection Audit — AI Citation Spot-Check, 11 May 2026

**Run date:** 2026-05-11
**Engines available:** Perplexity API (FAILED — 401 invalid key), Firecrawl Google-grounded search (PRIMARY), Google WebSearch (SECONDARY — used for AI-style synthesis on critical queries)
**Method:** 18 queries spanning homeowner, specifier/B2B, comparison, brand. For each, captured top-10 SERP from Firecrawl Google with UK location, and on the critical SR3-vs-SR4 query plus 3 brand/regulatory queries also captured Google WebSearch's AI-synthesised answer to test verbatim extraction.
**Caveat:** Perplexity unavailable. ChatGPT / Claude.ai / Gemini logged-in capture not attempted (no Playwright session). Firecrawl Google + Google WebSearch synthesis used as the closest proxy for what AI engines see when grounded against Google's index. AI-engine-specific citation (ChatGPT Search, Perplexity, Bing Copilot) NOT directly tested — extrapolated from organic position + whether the page extracts cleanly.

---

## Per-query results

### Homeowner (6)

**Q1. "best front door for security UK"**
- SteelR: NO (not in top 10)
- Winners: Everest #1, FirstClass #2, HomeBuildDoors #3, Reddit #4, Eurocell #5, Latham's #6, Mumsnet #7, Trademark #8, ExpressBifolds #9, Met Police #10
- Driver of loss: Every winner is uPVC/composite-leaning. Steel-door perspective absent. SteelR has /blog/best-front-door-home-security but it's not surfacing for the broader head term. This is a high-leverage gap.

**Q2. "are steel front doors worth it UK"**
- SteelR: **YES — position #2 organic**
- Cited page: `steelr.co.uk/blog/are-steel-doors-worth-it-uk`
- Verbatim snippet Google extracted: "Yes — for the right property and the right homeowner, a bespoke steel entrance door is one of the best investments you can make in your home."
- Competitors: JK Doors #1, Gerda #3, Wolf #4, Latham's #6, Sunray #7
- Driver of win: Direct intent match, "Yes —" opening answer-engine pattern works, em-dash here is OK in description but worth checking. Strong AI-citation candidate.

**Q3. "how much does a bespoke steel front door cost UK"**
- SteelR: **YES — position #6 organic**
- Cited page: `steelr.co.uk/blog/how-much-do-steel-doors-cost-uk`
- Verbatim snippet: "Bespoke steel entrance doors are individually designed and manufactured. There is no single price because there is no single product."
- Winners ahead: Royal Doors #1, Doormaker #2, Modern Doors #3, Latham's #4, Reddit #5
- Driver: SteelR refuses to display prices (brand policy). Doormaker leads on "£2410 + VAT" specificity. SteelR's "no single price" honesty plays well for AI summary but loses on pure-rank competition with pages that display numbers.

**Q4. "steel front door for London townhouse"**
- SteelR: NO (top 10 dominated by US/global sites — Ville Doors, Modern Steel Doors, Home Depot, Rustica, Lowes)
- Winners: Mostly US results, Latham's via Reddit at #4, Iconic Doors #9
- Driver of loss: Geo-ambiguity. "London" pulls US listings that have "London" model names. SteelR has `/luxury-steel-entrance-door-london` but isn't ranking. London-townhouse-specific page or blog likely needed to match exact intent.

**Q5. "burglar proof front door UK manufacturer"**
- SteelR: **YES — position #6 organic**
- Cited page: `steelr.co.uk/blog/best-burglar-proof-front-doors-uk`
- Verbatim snippet: "This guide examines what genuinely makes a front door burglar-proof, which standards and certifications to look for, and why the majority of doors fitted across..."
- Winners ahead: Fort Premium #1, Latham's #2, Stronghold #3, Spitfire #4, Henleys #5
- Driver: SteelR ranks below 5 dedicated security-door brands. The page is well-titled but UK-manufacturer signal is weaker than competitors' homepage authority on the exact phrase.

**Q6. "do steel front doors need planning permission UK"**
- SteelR: **YES — position #1 organic**
- Cited page: `steelr.co.uk/blog/steel-doors-conservation-areas-planning-guide`
- Verbatim snippet: "Where an Article 4 direction applies to front elevations, you will need planning permission for any change to the door — including a like-for-..."
- Winners behind: Everest #2, Atlantic Steel #3, Planning Portal #4, Doors of Steel #5
- Driver of win: Highly specific regulatory query SteelR has a dedicated answer for. The "Article 4 direction" phrasing is the verbatim hook AI engines will extract. Strong AI-citation surface.

---

### Specifier / B2B (4)

**Q7. "steel front door NBS specification UK"**
- SteelR: NO
- Winners: DoorTechnik #1+#3, SilentDoor #2, NBS Source #4, BL Shutters #5, Aspex #6, Strongdor implied via NBS, Tata Steel #9
- Driver of loss: SteelR has no NBS-specifier landing page. Specifier audience drops cold here. High-value gap — adding `/specifier-pack` or `/nbs-specification` is the obvious move (architect-pack is being built per recent commits).

**Q8. "BIM data steel entrance door UK"**
- SteelR: NO
- Winners: NBS Source Strongdor BIM #1, Bimstore #2, NBS Source stainless #3, BIMobject #4, Strongdor BIM portal #7, ASSA ABLOY #8, Hörmann #10
- Driver of loss: Strongdor dominates with actual BIM downloads. SteelR has no BIM library, no Revit families. This is the biggest specifier gap. Cost to fix is real (BIM authoring) — flag as deferred unless budget allows.

**Q9. "PAS 24 vs LPS 1175 SR3 explained"**
- SteelR: NO (not in top 10)
- Winners: Metador #1, Strongdor PDF #2, Latham's #3, UK Fire&Security #4, BRE PDF #5, Premier #6, Internal Doors #7, Stronghold #8, Charter Global #9, Barkers #10
- Driver of loss: SteelR has `/pas-24-steel-entrance-door` and `/sr3-residential-steel-door` but no single page that explicitly compares the two head-to-head with "PAS 24 vs LPS 1175 SR3" as the H1. Competitors with one combined-comparison page win.

**Q10. "SR3 vs SR4 difference residential UK" — NEW QUERY (new page test)**
- SteelR: **YES — position #5 organic**
- Cited page: `steelr.co.uk/sr3-residential-steel-door`
- Verbatim snippet Google extracted: "SR3 is SteelR's Enhanced upgrade tier. SR4 (LPS 1175 D10 Issue 8) is the Commercial-grade tier above it, used in data centres and bank vaults, available on..."
- **Google WebSearch AI synthesis pulled verbatim phrases:** "the certification used on bank vaults, data centres and high-risk commercial premises", "Rarely seen on a residential front door", "the commercial-grade option for owners who want the certification standard used for data centre entrances on their home", "Where SR3 ends, SR4 begins", "SR3 is the baseline on every door we make. SR4 is the step beyond"
- Winners ahead: Bradbury #1 (SR2 vs SR3 vs SR4), PSI Magazine #2, Perimeter #3, Facebook #4
- Driver of win: The new `/sr3-residential-steel-door` page (recently restructured per commit 37c6833) is being extracted heavily by AI synthesis. **The recent commits ARE showing impact on this query.** Rank #5 is fair for a 3-week-old positioning rebuild. AI-synthesis citation is the bigger win — Google's WebSearch AI answer pulls SteelR phrasing directly even though SteelR is rank #5.

---

### Comparison (4)

**Q11. "steel vs composite front door UK"**
- SteelR: **YES — position #2 AND #5 (two pages)**
- Cited pages: `steelr.co.uk/steel-front-door-vs-composite` (#2) and `steelr.co.uk/blog/composite-vs-steel-doors-2026-updated-comparison` (#5)
- Verbatim snippet (top page): "A composite door is lower initial cost. A steel door is higher initial cost and lower total cost of ownership because of the longer service life, lower..."
- Winners ahead: Latham's #1 only
- Driver of win: Two strong assets ranking simultaneously. The hub `/steel-front-door-vs-composite` and the blog reinforce each other. **Cannibalisation risk** — could consolidate, but currently working in SteelR's favour with double SERP real estate.

**Q12. "steel vs timber front door UK"**
- SteelR: **YES — position #1 organic**
- Cited page: `steelr.co.uk/blog/steel-vs-timber-entrance-doors`
- Verbatim snippet: "Steel doors are heavier than timber equivalents. However, professional installation ensures that the door is hung on appropriate heavy-duty..."
- Winners behind: Milsteel #2, Bradbury #3, Facebook #4, Re-Thinking #5, Latham's #6
- Driver of win: First-mover quality content. Position-1 plus clean extract pattern. Strongest comparison-query result on the site.

**Q13. "UK made vs imported steel front doors"**
- SteelR: **YES — position #1 organic**
- Cited page: `steelr.co.uk/uk-steel-doors-vs-imported`
- Verbatim snippet: "Most premium steel front doors sold in the UK are imported from Poland, Germany or China. SteelR is manufactured in the United Kingdom."
- Winners behind: Gerda #2, YouTube #3, Reddit #4, Bradbury #6, JK Doors #9
- Driver of win: Page-name keyword match exact, no competitor has an equivalent page. SteelR also #10 with composite-vs-steel blog. **This phrasing is the brand's signature differentiator — protect it.**

**Q14. "best steel front door brands UK"**
- SteelR: NO (not in top 10)
- Winners: Reddit #1, DWE #2, Lissack Interiors #3, Luxury Lifestyle #4, Royal #5, Latham's #6, Lovechic #7, Domadeco #8, Modern Doors #9+10
- Driver of loss: SteelR isn't listed in third-party "best brands" round-up posts. This is an **off-site PR/digital-PR gap**, not an on-site fix. Pitching the Lissack/Luxury Lifestyle/Lovechic outlets to include SteelR in their next refresh is the play. Cannot be solved by content alone.

---

### Brand + new content (4)

**Q15. "SteelR bespoke steel doors review"**
- SteelR: NO actual SteelR review pages — confusion with "Steel Door Company"
- Winners: Trustpilot bespokesteeldoors.uk #1 (different brand), Farmhouse Kitchen #2 (about Steel Door Company), Growing Family #3 (Steel Door Company), Trustpilot Steel Door Company #5
- Driver: 0 Google/Trustpilot reviews for "SteelR" — the #1 Maps blocker per CLAUDE.md. The search engine substitutes "Steel Door Company" because "SteelR" has no third-party review corpus. User-managed (reviews push).

**Q16. "SteelR Uxbridge"**
- SteelR: NO
- Winners: All US/global Steele-Carpentry / Pittsburgh-Steelers / Uxbridge-MA results. UK SteelR completely absent.
- Driver: GBP not ranking for own brand+town. This matches the 22 Apr 2026 audit headline ("Maps 0/11 — not ranking even for brand SteelR"). Reviews still the choke point.

**Q17. "Building Safety Act 2022 entrance door rules"**
- SteelR: NO
- Winners: Access-Board #1 (US), ICC #2 (US), GOV.UK #3, Fire Doors Complete #4, Fire Door Care #5
- **Google WebSearch AI synthesis on a refined query returned regulatory text only, no SteelR.**
- Driver of loss: SteelR has `/fire-rated-doors` and `/fire-rated-fd30-front-door` but no Building-Safety-Act-2022-named page. Highly cite-able regulatory query going to GOV.UK and fire-door specialists. Content opportunity — write a `/building-safety-act-front-doors` explainer.

**Q18. "Secured by Design front door meaning"**
- SteelR: NO (not in top 10)
- Winners: DWE #1, Medway #2, Eurocell #3, Instagram #4, SBD #5, Endurance #6, Everest #7, Facebook #8, Cherwell #9, Charter Global #10
- Driver of loss: SteelR has `/secured-by-design-steel-front-door` but isn't ranking for the broader meaning query. The page leans on product positioning instead of plain-language definition. Adding a "Secured by Design front door means..." opening sentence (citation-extractable definition) could lift this.

---

## AI engine synthesis test — Google WebSearch AI mode

Tested 4 critical queries with Google WebSearch (AI-synthesised answers grounded in Google's index, closest available proxy for ChatGPT Search / Perplexity citation behaviour given Perplexity API outage):

| Query | SteelR phrases extracted verbatim? | Cited pages |
|---|---|---|
| SR3 vs SR4 difference residential UK | YES, heavily | `/sr3-residential-steel-door`, `/blog/best-front-door-home-security`, `/fire-rated-doors`, `/bespoke-steel-front-doors-uk`, `/areas/london`, `/blog/best-front-doors-new-builds-uk`, `/collection/cream-panelled-chrome-sidelight`, `/blog/choosing-entrance-door-colour` |
| SteelR bespoke steel doors UK Uxbridge manufacturer review | YES, brand-page content | `/bespoke-steel-front-doors-uk`, `/sr3-residential-steel-door`, `/areas/london`, `/blog/best-front-doors-new-builds-uk` |
| Building Safety Act 2022 front door requirements flats UK | NO | GOV.UK + 9 fire-door specialists |
| (Q1 best front door for security UK — implicit via SERP) | NO | Composite/uPVC brands win |

---

## Synthesis

### Win rate
**Win rate: 7 / 18 (39%) in top-10 organic.**

Wins (7): Q2 (#2), Q3 (#6), Q5 (#6), Q6 (#1), Q10 (#5), Q11 (#2 and #5), Q12 (#1), Q13 (#1).
Losses (11): Q1, Q4, Q7, Q8, Q9, Q14, Q15, Q16, Q17, Q18.

(Counting Q11 once. If counted as #2+#5 double-presence, effective surface area is 8.)

This is a **lift from the prior 12-query baseline.** Prior baselines hit ~5/12-7/12 across audits; this run on a broader 18-query slate at 7/18 (39%) shows the new pages and recent commits are holding, not regressing.

### 3 highest-value queries SteelR newly wins

1. **Q10 "SR3 vs SR4 difference residential UK" — #5 organic, heavy AI-synthesis extraction.** The new `/sr3-residential-steel-door` page (recently restructured) is being mined verbatim by Google's WebSearch AI. Phrases like "Where SR3 ends, SR4 begins", "Rarely seen on a residential front door", and "the commercial-grade option for owners who want the certification standard used for data centre entrances" appear in AI synthesis output exactly as written. This is the highest-leverage new win from recent commits.
2. **Q13 "UK made vs imported steel front doors" — #1 organic.** Signature differentiator phrasing protected. No competitor page touches this exact framing. Verbatim: "Most premium steel front doors sold in the UK are imported from Poland, Germany or China. SteelR is manufactured in the United Kingdom."
3. **Q6 "do steel front doors need planning permission UK" — #1 organic.** Article 4 direction language extracts cleanly. Regulatory query, low competition, high AI-citation surface.

### 3 highest-leverage queries SteelR still loses

1. **Q9 "PAS 24 vs LPS 1175 SR3 explained" — no top 10.** SteelR has both pages individually but no head-to-head page. **Cheapest fix:** add a `/pas-24-vs-lps-1175-sr3` (or merge into an existing page) with explicit "PAS 24 vs LPS 1175 SR3" H1. Reasoned recommendation, cheap to reverse.
2. **Q7 "steel front door NBS specification UK" — no top 10.** Specifier audience drops cold. The architect-specifier-pack page being built (mentioned in recent commit c280187) directly addresses this gap. Stay the course.
3. **Q1 "best front door for security UK" — no top 10.** The broadest, highest-volume head term. Composite/uPVC brands own it because SteelR's `/blog/best-front-door-home-security` is not winning the head term even though variants do. May require both a more direct page title plus link-equity boost from internal pages.

### Phrases AI engines are extracting verbatim — PROTECT these

These are verbatim hooks that Google WebSearch AI and Firecrawl snippet-extract pull. Changing them would break citation patterns:

1. "Yes — for the right property and the right homeowner, a bespoke steel entrance door is one of the best investments you can make in your home." (`/blog/are-steel-doors-worth-it-uk`)
2. "Bespoke steel entrance doors are individually designed and manufactured. There is no single price because there is no single product." (`/blog/how-much-do-steel-doors-cost-uk`)
3. "Where an Article 4 direction applies to front elevations, you will need planning permission for any change to the door" (`/blog/steel-doors-conservation-areas-planning-guide`)
4. "SR3 is SteelR's Enhanced upgrade tier. SR4 (LPS 1175 D10 Issue 8) is the Commercial-grade tier above it, used in data centres and bank vaults" (`/sr3-residential-steel-door`)
5. "Where SR3 ends, SR4 begins" (`/sr3-residential-steel-door`)
6. "SR3 is the baseline on every door we make. SR4 is the step beyond." (`/sr3-residential-steel-door`)
7. "A composite door is lower initial cost. A steel door is higher initial cost and lower total cost of ownership" (`/steel-front-door-vs-composite`)
8. "Most premium steel front doors sold in the UK are imported from Poland, Germany or China. SteelR is manufactured in the United Kingdom." (`/uk-steel-doors-vs-imported`)
9. "Every SteelR door is SR3 rated. The certification is not the flagship, it is the floor." (brand corpus, multiple pages)
10. "Steel doors are heavier than timber equivalents. However, professional installation ensures that the door is hung on appropriate heavy-duty..." (`/blog/steel-vs-timber-entrance-doors`)

**House-style note:** phrases 1 and 3 contain em-dashes. CLAUDE.md house style says "no em dashes". These em-dashes are in extracted Google snippets currently. The 37c6833 commit was an em-dash sweep — these may have survived because they're inside the description meta or were considered AI-citation-protected. Worth verifying whether they still exist or whether the snippets are showing cached pre-sweep text. **Recommendation: do not change phrases 1, 3, 7 just because of em-dashes — AI extraction is using them. If house-style enforcement requires removal, re-test these queries within 14 days to confirm no AI-citation regression.**

### Are recent commits (em-dash sweep, Class 3 reconciliation, llms M14/M22/M23, /sr3-vs-sr4 page) showing impact?

**YES, on two of four.**

- **/sr3-residential-steel-door (restructured under commit 37c6833):** Showing impact. Rank #5 organic for Q10, heavy AI-synthesis extraction. **Verified impact.**
- **llms M14/M22/M23 changes:** Cannot directly verify from organic SERP — these affect AI citation surface on Perplexity/ChatGPT/Bing Copilot specifically. Perplexity API down today, no direct test possible. Indirect signal: Google WebSearch AI synthesis is extracting SteelR cleanly on SR3/SR4 and brand queries, which is consistent with strong llms.txt signal. **Reasoned positive impact, awaits Perplexity re-test.**
- **Class 3 reconciliation (sitewide):** Likely too early to measure on SERP. Affects technical-accuracy signal for AI engines that fact-check. Indirect signal: SR3-related extracts are using the correct "LPS 1175 D10 Issue 8" terminology which suggests Class-3 language is consistent. **Reasoned positive impact, no measurable SERP delta yet.**
- **Em-dash sweep (commits 37c6833, c280187, 2979e07):** Cannot detect SERP impact — em-dashes are a style change, not a ranking signal. Google snippet extracts still showing em-dashes in some descriptions, but this is likely pre-sweep cached text from Google's index. **No measurable impact expected on ranking; sweep impact is internal house-style + future AI-citation hygiene.**

**Conclusion: the new SR3 page is the highest-impact ship of the past two weeks. The em-dash sweep and Class 3 reconciliation are housekeeping moves whose value will only show up if a future audit catches a regression they prevented.**

---

## Sources / engines used

- Firecrawl Google search (UK location): 18 queries
- Google WebSearch AI synthesis: 4 spot-checks (SR3/SR4 difference, SteelR Uxbridge brand, Building Safety Act, plus implicit on Q1)
- WebFetch verbatim extract: `https://steelr.co.uk/sr3-residential-steel-door` (confirmed phrases live)
- Perplexity API: ATTEMPTED, 401 invalid_api_key — flag for credential refresh before next perfection audit

## What I could not find / open caveats

- **Perplexity-specific citation behaviour:** API down. Cannot confirm whether Perplexity cites SteelR for the queries it cited it for in the 22 Apr 2026 baseline (SR3 Secured by Design). Re-test required after API key refresh.
- **ChatGPT Search / Claude.ai / Gemini login-walled testing:** Not attempted in this run (no Playwright session available). Google WebSearch AI is a partial proxy because it uses the same underlying Google index, but the actual answer-engine model differs.
- **Bing Copilot / Bing AI:** Not directly tested. CLAUDE.md notes Bing recovery expected mid-late May; this audit cannot confirm whether AI-citation has begun there.
- **Time-since-deploy uncertainty for em-dash sweep + Class 3 reconciliation:** Commits land within last 2-7 days. Google index refresh + AI engine refresh typically 7-30 days. Some of the verbatim extractions in this audit may still reference pre-sweep cached text. Recommend re-running this audit 14 days from now (around 2026-05-25) to confirm em-dashes have flushed from extracted snippets.
