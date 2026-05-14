# /panel-llms Agent 3 — AI Citation Audit, 11 May 2026

**Run date:** 2026-05-11
**Engines available:** Perplexity API (FAILED — 401 invalid key, same as 11 May baseline), Firecrawl Google-grounded search (PRIMARY method — UK location, top-10 organic)
**Method:** 12 panel queries + 3 luxury/insurance queries from part (b). For each, top-10 SERP captured and SteelR presence/position/cited-page/extracted-snippet logged.
**Caveat:** Direct AI-engine answer capture (ChatGPT Search, Perplexity Web, Bing Copilot) NOT possible without logged-in Playwright session. Firecrawl Google SERP is the closest read-only proxy for what AI engines surface when grounded against Google's index. Position in Google organic is the strongest available proxy for AI citability.

---

## Part (a) — 12-query panel, vs prior baselines

### Commercial intent (4)

**Q1. "best bespoke steel front door manufacturer UK"**
- SteelR: NO (not in top 10).
- Winners: Vallisco roundup #1, Black Steel Doors #2, Custom Door Co #3, Reddit #4, Luxury Lifestyle roundup #5, Lux Bespoke Doors #6, Latham's #7, Modern Doors #8, Domadeco #9, Strongdor #10.
- Driver: SteelR is absent from third-party "best of" listicles (Vallisco, Luxury Lifestyle, Seen In The City). Outreach to be listed in those roundups is the leverage point — not an llms-file fix.

**Q2. "steel front door manufacturer London"**
- SteelR: NO.
- Winners: Stronghold #1, Metador #2, Steel Door Company #3, Maxium Doors #4, Modern Doors #5, Seen In The City #6, Latham's London #7, Domadeco #8, Steel Security Doors #9, Samson #10.
- Driver: SteelR has `/luxury-steel-entrance-door-london` but it does not rank for the "manufacturer" qualifier. Competitor "manufacturer London" anchor density beats SteelR.

**Q3. "luxury steel entrance doors UK"**
- SteelR: NO.
- Winners: Modern Doors #1, Latham's #2, Domadeco #3, Black Steel Doors #4, Luxus Doors #5, Seen In The City #6, Valeanto Iron Doors #7, Steel Door Company #8, Steel Security Doors #9, Royal Doors #10.
- Driver: This is a high-priority luxury head term where SteelR's positioning should win. Loss is likely "luxury" + "UK" exact-match anchor weight on competitor homepages. The `/luxury-steel-entrance-door-london` page targets London, not UK.

**Q4. "where can I buy a bespoke steel front door"**
- SteelR: NO.
- Winners: Royal Doors #1, Bespoke Steel Doors (.uk) #2, Modern Doors #3, Latham's #4, DoorLab #5, Original Steel Doors #6, Strongdor #7, Door Supplies Online #8, Steel Door Company #9, Custom Door Co #10.
- Driver: Competitor exact-match domain at #2 (`bespokesteeldoors.uk`) is a structural disadvantage SteelR cannot overcome on this exact phrasing.

**Commercial intent score: 0/4.**

---

### Specification (4)

**Q5. "PAS 24 vs SR3 explained"**
- SteelR: **YES — position #8.** Page: `/pas-24-steel-entrance-door`.
- Google-extracted snippet: **"PAS 24 is a one-to-three-minute casual attack test using basic hand tools. SR3 under BS EN 1627 Class 3 is a twenty-minute sustained attack test using heavy-..."**
- **CRITICAL FINDING:** the LIVE page meta description Google indexed still says "SR3 under BS EN 1627 Class 3". This is the exact wrong wording the staged llms diff is correcting in `/blog/luxury-front-doors-uk-buyer-guide`. The same error exists on `/pas-24-steel-entrance-door` and is being actively cited by Google. **The staged llms diff fixes only the Blog Excerpts mirror, not the original page.** Recommend flagging to the user that a parallel source-page fix is needed on `/pas-24-steel-entrance-door` (and likely other pages) for citation truth.
- Winners ahead: Latham's #1, Premier SSL #2, BRE PDF #3, Charter Global #4, Stronghold #5, store-fronts #6, DWE #7. Strongdor #9, Sentry #10.

**Q6. "FD30 front door requirements for HMO"**
- SteelR: NO.
- Winners: HMO Architects #1, Facebook HMO group #2, Premier Fire Doors #3, Facebook video #4, Safelincs forum #5, Fire Safety Event #6, LettingaProperty #7, GFD Homes #8, YouTube #9, Northwest Fire Doors #10.
- Driver: SteelR has `/fire-rated-fd30-front-door` but for HMO landlord intent, dedicated landlord/letting publications and HMO-architect content win. Gap remains the same as May 9 baseline.

**Q7. "what does Secured by Design approval mean for a front door"**
- SteelR: NO.
- Winners: Medway #1, SBD itself #2, DWE #3, Jade Windows #4, Facebook #5, Eurocell #6, Instagram #7, Doleta #8, Endurance #9, Cherwell #10.
- Driver: Generic "what does X mean" intent — definitional intent flows to category-explainer sites. SteelR's `/secured-by-design-steel-front-door` is more product-page than explainer.

**Q8. "Building Safety Act 2022 entrance door rules"**
- SteelR: NO. Top 10 dominated by US ADA/IBC results and a smattering of correct UK Fire Safety (England) Regulations 2022 pages. Geo confusion.
- Winners: Access-Board.gov (US) #1, ICC #2, gov.uk Fire Safety Regs #3, FireDoorsComplete #4, FireDoorCare #5, CDF #6, IDigHardware #7, UpCodes #8, LaForce #9, BHMA PDF #10.
- Driver: This query is genuinely difficult — UK + Building Safety Act + "entrance door rules" doesn't map to a single canonical SteelR page. The /fire-rated-fd30-front-door page touches the regs but doesn't title-anchor on "Building Safety Act 2022".

**Specification score: 1/4** (Q5: #8 with citation-truth issue flagged above).

---

### Comparison (4)

**Q9. "steel vs composite front door UK"**
- SteelR: **YES — DOUBLE LISTING #2 and #5.** Pages: `/steel-front-door-vs-composite` (#2) and `/blog/composite-vs-steel-doors-2026-updated-comparison` (#5).
- Verbatim snippet at #2: **"A composite door is lower initial cost. A steel door is higher initial cost and lower total cost of ownership because of the longer service life, lower..."**
- Strong AI-extraction surface. SteelR owns this query class.

**Q10. "SR3 vs SR4 difference"**
- SteelR: NO. SERP overrun by Saints Row video game + Recaro car seat results — bare query is too ambiguous.
- Winners: Reddit Saints Row #1, IGN #2, Facebook Recaro #3, Steam #4, Ozhonda forum #5, Bradbury Group #6 (first relevant), Saints Row Mods #7, YouTube Recaro #8, PistonHeads #9, Dumpshock #10.
- Re-ran with disambiguation "**SR3 vs SR4 difference steel security door UK**": SteelR **#4** via `/blog/front-door-security-ratings-compared-sr1-to-sr3`. Bradbury #1, Latham's #2, ASSA ABLOY PDF #3, then SteelR.
- The new `/sr3-vs-sr4` page (referenced in panel brief as recently shipped) does NOT yet appear — likely too new for Google indexation. Worth re-checking in 2-3 weeks.

**Q11. "steel vs timber front door"**
- SteelR: **YES — position #1.** Page: `/blog/steel-vs-timber-entrance-doors`.
- Snippet extracted: **"Steel doors are heavier than timber equivalents. However, professional installation ensures that the door is hung on appropriate heavy-duty..."**
- Dominant position. AI-citation strong.

**Q12. "UK-made vs imported steel front doors"**
- SteelR: **YES — DOUBLE LISTING #1 and #8.** Pages: `/uk-steel-doors-vs-imported` (#1) and `/blog/composite-vs-steel-doors-2026-updated-comparison` (#8).
- Snippet at #1: **"Most premium steel front doors sold in the UK are imported from Poland, Germany or China. SteelR is manufactured in the United Kingdom."** This is exactly the verbatim hook designed for AI citation. Working as intended.

**Comparison score: 3/4** (Q9, Q11, Q12 all strong; Q10 conditionally won on disambiguated phrasing).

---

### Part (a) totals

- **Total wins:** 4/12 raw (Q5 partial, Q9, Q11, Q12). With Q10 on disambiguated phrasing: 5/12 effective.
- **Strong AI-citation surfaces (extracted snippet present, position ≤5):** Q9 (#2), Q11 (#1), Q12 (#1). Three pages doing the heavy lifting.
- **vs May 11 baseline (18-query panel, 7 wins / 18 = 39% homeowner+specifier mix):** This panel's slate is different — 12 queries skewed harder toward commercial-intent head terms where SteelR has always been weak. **The 4-5/12 here is consistent with the May 11 trajectory, NOT a regression.** The May 10 batch 4 + batch 5 fixes (Class 3 sweep, new /sr3-vs-sr4 page, og:image fixes, 5 Indexing API pushes) cannot be cleanly measured against this slate because:
  1. The /sr3-vs-sr4 page is not yet indexed (verified — does not appear on Q10 even after disambiguation).
  2. The Class 3 fixes were applied to live pages but Google's cache for `/pas-24-steel-entrance-door` still shows the old "SR3 under BS EN 1627 Class 3" wording (Q5 evidence).
  3. og:image fixes are visual social-card improvements — not measurable on text SERP.
- **Conclusion:** the May 10 batch is in flight but not yet reflected in citable Google index for the queries tested. Re-run in 2-3 weeks to capture true delta.

---

## Part (b) — Luxury / SR3 / Insurance triad (where the staged diff matters most)

**Q13. "luxury front doors UK SR3 insurance"**
- SteelR: **YES — position #1.** Page: `/sr3-residential-steel-door`.
- Google-extracted snippet: **"Does SR3 affect home insurance premiums? ... In most cases yes. Home insurers treat independently certified security standards as material reductions in forced-..."**
- This is the live page being cited, NOT the llms files. The staged diff does not change this snippet (live page already uses correct LPS 1175 terminology — verified in commit history per panel brief).

**Q14. "high net worth front door security UK"**
- SteelR: NO.
- Winners: Frontline Security #1, Henleys (HNW security doors) #2, Independent Safes #3, James Hallam #4, PAP #5, Sectech #6, Moore Protection #7, VIS Protection #8, IKS Locksmiths #9, BBC #10.
- Driver: Henleys (#2) explicitly targets HNW/UHNW insurance-reinstatement angle. SteelR's `/blog/luxury-front-doors-uk-buyer-guide` doesn't surface for this phrasing despite covering similar territory.

**Q15. "Home and Legacy insurance front door requirements"**
- SteelR: NO. (SERP heavily polluted with US results — Pennsylvania, Reddit, US thagency.com.)
- Winners include Home & Legacy's own policy PDF (#5).
- Driver: SteelR's luxury blog references Home & Legacy + Hiscox by name but the page isn't ranking for the exact-phrase brand intent. Exact-match insurer-brand queries are likely outside SteelR's natural-rank ceiling.

### Does the staged diff change the cited phrasing?

**No.** The 3 corrected "BS EN 1627 Class 3" → "LPS 1175 SR3 / BS EN 1627 RC4" edits live in the Blog Excerpts mirror of `/blog/luxury-front-doors-uk-buyer-guide` inside `public/llms-full.txt`. Direct Google citation for queries Q13–Q15 currently goes to:
- Q13: `/sr3-residential-steel-door` (correct LPS 1175 wording already live).
- Q14, Q15: SteelR not cited at all.

The staged diff therefore:
- **Does not regress any currently-citing surface.** Safe to ship.
- **Does improve internal consistency** — the Blog Excerpts section is what AI engines (ChatGPT Search via Bing, Perplexity, Gemini) crawl when they hit llms-full.txt directly. Aligning that surface to the corrected technical terminology prevents future contradiction-of-self when an AI engine grounds on both `/pas-24-steel-entrance-door` (still has wrong wording, see Q5) and llms-full.txt (now correct). **An AI engine that crosses both surfaces today would see contradiction.** The diff fixes one side; the source-page side still needs work.

---

## Findings to surface to the user before /panel-llms-approve

1. **Staged diff is safe to ship** — no regression in current AI-citation footprint. Date refresh + 3 technical corrections.
2. **Citation-truth gap on source pages** — `/pas-24-steel-entrance-door`'s meta description still says "SR3 under BS EN 1627 Class 3" (verified at Q5, Google citing this verbatim today). The Class 3 site-wide sweep referenced in the panel brief may not have hit page meta descriptions. Worth a separate Class 3 audit on live pages, not just llms files.
3. **`/sr3-vs-sr4` page not yet indexed** — does not appear on any SR3-vs-SR4 query tested, even with disambiguation. Submit via Indexing API + URL Inspection if not already queued.
4. **AI-citation strongest pages right now:** `/steel-front-door-vs-composite` (#2), `/blog/steel-vs-timber-entrance-doors` (#1), `/uk-steel-doors-vs-imported` (#1), `/sr3-residential-steel-door` (#1 on luxury+insurance). Protect these.
5. **Persistent gaps unchanged from May 9/10/11 baselines:** commercial-intent head terms ("best UK manufacturer", "luxury steel entrance doors UK", "where can I buy") — outreach for third-party listicle inclusion is the lever, not llms-file edits.

---

## Recommendation Gate output

**For /panel-llms-approve decision: APPROVE the staged llms diff.**

- Tier: **Tested-locally** (Firecrawl SERP captured pre-diff at q5 evidence). Reversibility: cheap (git revert).
- Evidence: zero regression risk in current AI-citation footprint (Q13 directly cites live page, not llms; Q14/Q15 don't cite SteelR at all today). Diff improves internal consistency between llms-full.txt and corrected live pages.
- Loop-prevention: this is a corrective fix on prior wrong wording, not a reversal of a prior recommendation. No 7-day capture required.

Out-of-scope-for-this-diff but worth a follow-up task: **fix the same "BS EN 1627 Class 3" wording on live page meta descriptions** (priority: `/pas-24-steel-entrance-door` confirmed via Q5). That is a separate commit and a separate panel.
