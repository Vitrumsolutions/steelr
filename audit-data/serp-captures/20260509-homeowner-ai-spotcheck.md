# Homeowner AI-engine visibility spot-check — 2026-05-09

**Question:** Where does SteelR appear when an actual UK homeowner (not a specifier) asks AI engines or AI-grounded search the buying questions they ask before purchasing a front door?

**Method.** Live WebSearch (Bing-backed, US-region — the same retrieval graph that grounds ChatGPT Search, Perplexity Web, Bing Copilot, and partially Google AI Overviews). Each query produces (a) a top-10 organic link list and (b) an AI-summary block. Both are read for SteelR presence, competitor mix, and source-of-truth signals. Two SteelR pages were also pulled directly (`/steel-front-door-cost-uk`, `/blog/best-front-door-home-security`) to confirm what AI engines would extract if they reached the site. Perplexity logged-in answer pages 403'd as expected; the Bing graph is the closest read-only proxy available without the Chrome MCP session.

**Engines / surfaces effectively tested:** Bing-grounded retrieval graph (the source layer for ChatGPT Search, Perplexity Web, Bing Copilot, Gemini Web, partially Google AI Overviews) + 2 direct SteelR page fetches.

**Files referenced:**
- `public/llms.txt` (read in full)
- `audit-data/serp-captures/20260506-ai-citation-spotcheck.md` (prior baseline — specifier queries)

---

## Per-query findings

### Q1 — "best front door for security UK"
- **SteelR appears?** YES (organic link only, position 6 of 10 — `/blog/best-front-door-home-security`).
- **AI summary cites SteelR?** NO. AI summary cites Latham's, Fenx, Everest, BGW Doors, Fort Premium.
- **Competitors:** Latham's (heavy — top 2 results + AI summary lead), Fort Premium, Doors for Security, Fenx, Everest, BGW Doors, Home Secure Shop, London Locks.
- **Source signal:** AI grounded on Latham's product pages and Fenx 2026 material guide (which the AI quoted for the "Steel is consistent leader for SR3" line — that line **is itself paraphrased from the SteelR /blog/best-front-door-home-security FAQ**, suggesting downstream copy of SteelR content into a competitor blog that is then re-cited).

### Q2 — "are steel front doors worth it"
- **SteelR appears?** NO. Not in organic top 10 and not in AI summary.
- **Competitors:** Latham's, Gerda, Fairview, GreenMatch, JK Doors, Door Supplies Online, AGD Surrey, Fenx.
- **Source signal:** AI grounded on Door Supplies Online + Gerda + Latham's "why choose a steel door" pillar piece. Heavy uPVC/composite-trade-press citation graph; SteelR's own "Are Steel Doors Worth It?" blog at `/blog/are-steel-doors-worth-it-uk` is invisible.

### Q3 — "burglar proof front door UK"
- **SteelR appears?** NO. SteelR has a dedicated `/blog/best-burglar-proof-front-doors-uk` post listed in llms.txt — it is not surfaced.
- **Competitors:** Everest, Latham's, Doors for Security, Fort Premium, Rockdoor, GreenMatch, Top Security Doors, PIRNAR, Trademark Windows.
- **Source signal:** AI grounded on Latham's high-security pages + Rockdoor security features + Fort Premium homepage. PIRNAR (Slovenian luxury) appears, suggesting the model is reaching into European premium brands that SteelR competes with on premium positioning.

### Q4 — "how to make my front door more secure"
- **SteelR appears?** NO.
- **Competitors:** Vufold, Met Police (.met.police.uk), Custom Trade Systems, Fenx, Haus Installations, Everest, Stronghold Security Doors, ERA Protect, Lockey Digital, Victorian Front Door blog.
- **Source signal:** AI grounded on Met Police door-security advice page + retrofit/lock-upgrade content. This is a retrofit/DIY query — buying intent is lower, so loss is acceptable, but no SteelR mention at all is unusual given the `/blog/how-to-improve-home-security-uk` post exists.

### Q5 — "best front door brands UK"
- **SteelR appears?** NO. Critically, this is the homeowner version of the prior baseline's "best UK bespoke steel front door manufacturers" query (where ChatGPT/Claude.ai placed SteelR #1).
- **Competitors:** Solidor, Endurance, Rockdoor, Truedor, Comp Door, Doorstop, Latham's, Fixr, HIMOLON, APRO, DWE, Top Choice, ERA Fortress, Yale, Mul-T-Lock, EVVA.
- **Source signal:** AI grounded on Fixr's "Best Entry Door Brands of 2026" + composite-trade roundups. The question collapses into "best composite door brands" because the Bing graph weights composite category traffic far heavier than steel.

### Q6 — "steel vs composite front door which is better"
- **SteelR appears?** NO. SteelR has `/steel-front-door-vs-composite` (a Phase 1D topic page) — it is not surfaced.
- **Competitors:** Gerda (top 2 results), Latham's, Fairview, Ken Rhodes, UNICCM, Polar Bear Windows, UK Composite Doors, MoneySavingExpert forum.
- **Source signal:** AI grounded on Gerda's "steel/aluminium vs composite" + Latham's "why choose a steel door" pillar. The two top pieces are the canonical comparison content for this query and have decades of citation graph.

### Q7 — "front door for London townhouse"
- **SteelR appears?** NO.
- **Competitors:** Pinterest, London Door Company (.londondoor.co.uk), Donna Hatch, Look Up London, Beth Lindsey, iStock, Shutterstock, Getty.
- **Source signal:** AI grounded on heritage/period-design content and stock-photo libraries. SteelR's `/blog/front-doors-london-townhouses-guide` is invisible. This is a heavy intent loss — the query is exactly the homeowner persona SteelR's London prime-residential pages target.

### Q8 — "secure front door for terraced house"
- **SteelR appears?** NO.
- **Competitors:** Solidor (#1, blog post on terraced houses), Latham's, Houzz, London Door Company, Birmingham CCTV, Everest, Harrington Windows, Anglian Home, HomeBuildDoors.
- **Source signal:** AI summary explicitly recommends "composite doors with multi-point locking systems" as the safest option for terraced houses. SteelR's category gets ranked second to composite for this housing type. No SteelR-specific "terraced house" content exists in the blog.

### Q9 — "how much does a steel front door cost UK"
- **SteelR appears?** NO. Critically — SteelR has `/steel-front-door-cost-uk` Phase 1D topic page that is the canonical pricing page on the site, intentionally without displayed prices per brand policy.
- **Competitors:** South Yorkshire Windows, Fairview, GreenMatch, ExpertSure, Fenx, Custom Trade Systems, WhatCost, Latham's. Bradbury Group + Joshua James appear in the related "are steel doors expensive" query.
- **Source signal:** AI cites a single concrete number range — "£450 to £2,100" — repeated across 5+ competitor pages. The "no displayed prices" policy means the AI cannot extract a number from SteelR and so quotes the cheapest competitor it can find. **This is the highest-leverage absence in the audit.** A homeowner asking about cost gets pushed to budget steel doors at £450, with no signal that bespoke premium-tier exists.

### Q10 — "do steel front doors need planning permission"
- **SteelR appears?** NO.
- **Competitors:** Doors of Steel, IDSystems, Everest, Planning Portal, AM Steel Buildings, Cliffside Windows, UK Doors Online, Noticed.uk, DoorStation, Astraframe.
- **Source signal:** AI grounded on Planning Portal + Everest. SteelR has `/blog/conservation-area-door-requirements-uk` — partially relevant but not surfaced. Generic regulatory query, the AI does what it should and goes to Planning Portal first.

### Q11 — "what's the strongest front door I can buy"
- **SteelR appears?** NO. Same shape as Q3.
- **Competitors:** Everest, Latham's (2 pages), Rockdoor, Harrington Windows, HomeBuildDoors, Vufold, Eurocell, First Class Windows, GreenMatch.
- **Source signal:** AI summary contradicts itself — opens with "Steel doors are the strongest type of front door" then immediately concludes "composite doors are widely considered the most secure front doors for residential properties." The hedge favours composite because of citation-graph weight. Latham's high-security 63mm door is the only steel product cited by name.

### Q12 — "steel front door vs reinforced wooden door"
- **SteelR appears?** NO. SteelR has `/blog/steel-vs-timber-entrance-doors` — not surfaced.
- **Competitors:** Doors Supplies Online, Clark Hall (US), Maclin Security Door (US), First Impression Ironworks (US), Steel Door Institute (US), Quora, AAA Screen, Love That Door, Feldco (US).
- **Source signal:** AI grounded on US sources — surprisingly little UK-specific content is indexed for this exact phrase. SteelR's UK-specific timber comparison blog could plausibly own this query if surfaced.

---

## Brand-anchored control (for contrast)

To establish whether SteelR's content is reachable when explicitly queried:

### Control A — "SteelR bespoke steel front doors UK"
- SteelR appears at organic positions 1, 2, 3, 4, 5 — five of the top 10 results are steelr.co.uk pages.
- AI summary leads with `Bespoke Steel Front Doors UK | Made to Measure, Installed Nationwide | SteelR`.
- AI quotes verbatim: "8 to 12 weeks", "SR3 rated as standard", "PAS 24 certified, Secured by Design approved, FD30 fire rated", "site survey by their design team".
- Conclusion: **the llms.txt + topic-page content is being extracted accurately when the brand is named in the query.**

### Control B — "steel front door London buy bespoke manufacturer"
- SteelR appears at position 4 (`/areas/london` — meta title "Steel Doors London | Bespoke Steel Front Doors, SR3 Rated | SteelR" surfaced).
- AI summary lists SteelR as one of five named manufacturers (alongside Original Steel Doors, DM Window Solutions, Durwin Glazing, Totally Steel Doors). SteelR's paragraph is the longest and quotes "PAS 24 certified, Secured by Design approved, FD30 fire rated, UK manufactured with nationwide installation … 8 to 12 weeks".
- Conclusion: **on category-plus-bespoke queries, SteelR is in the cited shortlist; on category-only queries it is invisible.**

---

## Tally

| Bucket | Count |
|---|---:|
| **Wins (any SteelR signal in answer)** | 1 of 12 (Q1 — link only, no AI mention) |
| **Losses (no organic, no AI mention)** | 11 of 12 |
| **Brand-anchored control wins** | 2 of 2 |

For comparison, the 2026-05-06 specifier-query audit had **2 of 5 engines (ChatGPT + Claude.ai) placing SteelR #1** on "best UK bespoke steel front door manufacturers". The homeowner-query audit shows that win **does not translate downstream** — the moment the query loses the words "steel" or "bespoke", SteelR drops out of every retrieval surface.

---

## Top 3 query types where SteelR is winning

1. **Brand-anchored queries** — "SteelR …", "SteelR steel doors London …". 5/10 organic and lead AI citation. Verbatim 8-12 weeks / SR3 / PAS 24 / SBD / FD30 phrasing extracted directly from llms.txt.
2. **Specifier "best of bespoke steel" queries** — preserved from 2026-05-06 baseline (ChatGPT #1 "Rolls-Royce", Claude.ai #1 in shortlist). These are NOT homeowner queries.
3. **Phase 1D topic-page queries when brand keyword is added** — "steel front door London bespoke manufacturer" (Control B): SteelR is named in shortlist. The topic pages exist; the brand keyword is the trigger.

## Top 3 query types where SteelR is absent (highest leverage to fix)

1. **Cost queries (Q9 — "how much does a steel front door cost UK")** — highest commercial intent of the 12. AI quotes "£450 to £2,100" from competitors; SteelR's no-displayed-prices policy means the model cannot extract a number from `/steel-front-door-cost-uk` even though the page exists. Result: a high-intent homeowner is steered toward budget product. **Fix without breaking brand policy:** add a quotable factor band the AI can extract (e.g. "Bespoke steel front doors in the UK typically span £X-£Y for the supply-only door, with the spread driven by [factors]") that names the bespoke premium tier without committing to a specific SteelR price. Phrasing must be confidence-tagged Tested-locally and deep-reviewed before shipping per the SteelR Recommendation Gate.

2. **Material-comparison queries (Q6 "steel vs composite which is better", Q12 "steel vs reinforced wooden")** — SteelR has both topic pages live (`/steel-front-door-vs-composite`, `/blog/steel-vs-timber-entrance-doors`) and they are not surfaced. Loss is structural — Gerda/Latham's "why steel" pillar pieces have decade-long citation graph and own the comparison query. **Fix:** topic-page off-page authority work (third-party citations, trade-press features) — already noted in 2026-05-06 baseline as a strategic gap. No quick on-site fix.

3. **Housing-type queries (Q7 "front door for London townhouse", Q8 "secure front door for terraced house")** — both are exactly SteelR's London prime-residential persona. Q7 collapses to heritage/Pinterest content. Q8 collapses to Solidor's terraced-house blog post. **Fix:** SteelR's `/blog/front-doors-london-townhouses-guide` exists but isn't being weighted; a targeted "front door for terraced house" piece does not exist and could plausibly own that query. This is a content gap (1 piece) plus an authority signal gap.

## Does the existing llms.txt + llms-full.txt cover the losing queries?

**Coverage check** (read against the 12-query list):

| Query | llms.txt coverage |
|---|---|
| Q1 best front door for security | ✅ Direct Answer "What security rating does a SteelR …" + Entity Reference list includes "best steel front door UK" + blog link to `/blog/best-front-door-home-security` |
| Q2 are steel front doors worth it | ✅ Linked: `/blog/are-steel-doors-worth-it-uk` is in Topic and Comparison Guides |
| Q3 burglar proof front door UK | ✅ Linked: `/blog/best-burglar-proof-front-doors-uk` |
| Q4 how to make my front door more secure | ✅ Linked: `/blog/how-to-improve-home-security-uk` |
| Q5 best front door brands UK | ❌ No homeowner-framed "brands" Direct Answer. Entity Reference uses "best steel front door UK" not "best front door UK" — the broader phrasing is unowned. |
| Q6 steel vs composite | ✅ Linked: `/steel-front-door-vs-composite` Phase 1D page |
| Q7 front door for London townhouse | ✅ Linked: `/blog/front-doors-london-townhouses-guide` |
| Q8 secure front door for terraced house | ❌ No "terraced house" blog post. Adjacent: London townhouse + period property posts only. |
| Q9 how much does a steel front door cost | ⚠️ Linked but with deliberate no-prices policy that prevents AI extraction. Direct Answer in llms.txt explicitly says "There are no fixed prices" — AI can't quote a number. |
| Q10 do steel front doors need planning permission | ⚠️ Adjacent: `/blog/conservation-area-door-requirements-uk` is the closest, but doesn't directly answer "do they need planning permission". |
| Q11 strongest front door | ✅ Direct Answer on RC4 / SR3 / SR4 / LPS 1673 four-tier ladder + glossary entries. |
| Q12 steel vs reinforced wooden | ✅ Linked: `/blog/steel-vs-timber-entrance-doors` |

**Conclusion on coverage:** **9 of 12 losing queries have content that exists.** The losses are not primarily content losses — they are off-page authority losses (citation graph), plus 3 specific gaps: Q5 (no homeowner "brands" framing), Q8 (no terraced-house piece), Q9 (no extractable price band).

## Specific factual claims AI engines are quoting from SteelR (do not change)

These are the verbatim phrases the AI summary in Control A + Control B extracted, confirming what is currently working:

- **"8 to 12 weeks"** lead time. Quoted verbatim. Currently set in llms.txt Direct Answer + Glossary (SR3 entry "8-12 week lead time").
- **"SR3 rated as standard"** — quoted in Control A. Comes from the four-tier ladder framing in llms.txt.
- **"PAS 24 certified, Secured by Design approved, FD30 fire rated, UK manufactured with nationwide installation"** — quoted as a single phrase. Comes from the "Why SteelR is the UK Specialist" block in llms.txt.
- **"Site survey by their design team"** — quoted in Control B. Comes from the on-site structural survey language used across the topic pages.
- **"Each commission begins with a site survey"** — quoted in Control B. Comes from `/areas/london` and `/bespoke-steel-front-doors-uk` page copy.
- **"BS EN 1627 RC4 single leaf, unglazed"** — direct citation in baseline 2026-05-06 across ChatGPT, Claude.ai, Google AI Mode. Standard tier framing on every door.
- **"Four-tier residential security ladder"** — extracted verbatim by Claude.ai in baseline. Unique to SteelR in the UK market.
- **"Approximately 70% of domestic burglaries involve entry through a door"** + **"Properties built to Secured by Design standards experience up to 75% less burglary"** + **"LPS 1175 SR3 resists attack with professional-grade tools for 5 minutes"** — these three claims from `/blog/best-front-door-home-security` are being downstream-cited. The Q1 AI summary's "Steel is the consistent leader for SR3 residential certification" line appears to be paraphrased from the same SteelR FAQ; the model attributes it to Fenx because Fenx republished it.

**Do not change** any of the seven verbatim phrases above. They are what currently survives the retrieval layer and lands in AI answers when SteelR is reached at all.

---

## Strategic implication

The 2026-05-06 specifier-query baseline showed SteelR winning on retrieval-heavy engines (ChatGPT, Claude.ai web-search) for "best UK bespoke steel front door manufacturers". This homeowner audit confirms that win is **narrow** — it depends on the user typing "steel" or "bespoke" into the query. UK homeowners ask broader questions: cost, security, comparison, housing type. On those queries SteelR is invisible against the established trade-press citation graph (Latham's, Fort Premium, Solidor, Rockdoor, Gerda, Bradbury) and against composite-category content that owns the broader "best front door" intent.

The 2026-05-06 baseline already identified three levers to close this — trade-press features, YMYL bylines, long-tail "best [niche]" pages. This homeowner audit adds **three concrete content gaps** (none of which are urgent enough to bypass the Recommendation Gate, but all of which are Tested-locally tier work):

1. A Q9 cost-band sentence in `/steel-front-door-cost-uk` that names the bespoke premium price band without committing to a specific SteelR price (deep-reviewer + brand-policy gate must approve).
2. A Q8 terraced-house blog post (one new piece, follows existing London townhouse template).
3. A Q5 "best front door brands UK" homeowner-framed Direct Answer in llms.txt that plants SteelR in the broader "front door brands" entity space (currently only "best steel front door UK" is claimed).

None of these are "ship today" recommendations. Each needs its own panel pass under the SteelR Recommendation Gate before touching files.

---

## Files

- This report: `audit-data/serp-captures/20260509-homeowner-ai-spotcheck.md`
- Prior baseline (specifier queries, 2026-05-06): `audit-data/serp-captures/20260506-ai-citation-spotcheck.md`
- Source: live WebSearch (Bing-grounded) on 2026-05-09 + 2 direct page fetches (steelr.co.uk/steel-front-door-cost-uk, steelr.co.uk/blog/best-front-door-home-security)

**Caveat on method.** WebSearch is a Bing-grounded retrieval graph. It is the closest read-only proxy to the source layer that grounds ChatGPT Search, Bing Copilot, Perplexity Web, and partially Google AI Overviews — but it is not a direct read of those engines' final summaries. ChatGPT and Claude.ai's web-search tools (per the 2026-05-06 baseline) sometimes ground past the Bing graph onto SteelR's own pages directly via URL retrieval, which the Bing-graph proxy misses. So a small subset of the "no" verdicts above (most likely Q5, Q9, Q11) may flip to "yes" in ChatGPT or Claude.ai when run through a logged-in browser session. Confirming that requires a Chrome MCP session — not available in this audit.
