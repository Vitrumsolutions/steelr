# Homeowner-search AI citation audit — ChatGPT-with-Search + Gemini

**Date:** 2026-05-13 (evening)
**Method:** Claude_in_Chrome MCP against user's logged-in browser (Mani Sandhu). Same protocol as 2026-05-11 verified audit.
**Query set:** Realistic homeowner-shopping queries (the way a real buyer would type into the search box). Not specifier jargon. Not vague generic terms.
**Caveat on coverage:** ChatGPT Free tier silently throttled submit after Q2 — same behaviour as 2026-05-11. 2 ChatGPT queries captured before block. 8 Gemini queries captured (no throttle hit).

---

## Scoreboard

**ChatGPT-with-Search (Free tier, logged in): 2 of 2 cited (100%)**
**Gemini Fast tier (logged in, Ickenham UK location): 1 of 8 cited (12.5%)**

The Victorian-house query was the first Gemini citation captured in any session. All previous Gemini audits returned 0/X.

---

## ChatGPT-with-Search — verbatim

### Q1 `steel front doors uk` — SteelR cited TWICE in editorial body

ChatGPT's "Best overall" pick: Brighton Premium Steel Front Door (Modern Doors, £1,770).

SteelR positioned in body editorial:
> "Steel doors are increasingly replacing timber and composite systems in luxury UK homes because of higher security and lower maintenance. Bespoke manufacturers like **SteelR** and Urban Front now focus heavily on RC-rated security and architectural finishes."

And in closing recommendations:
> "If you want serious burglary resistance: Latham's or **SteelR-style systems** are the smarter route."

Brand list in product carousel: Brighton Premium Steel (Modern Doors), Latham's, Turenwerke ALU-STEEL DS82, Hörmann Thermo46, generic anthracite security door.

### Q2 `bespoke steel front door uk` — SteelR cited TWICE prominently

ChatGPT's positioning, top of body:
> "For UK-specific bespoke fabrication and installation, the strongest specialist currently is **SteelR UK**, offering RC4-rated bespoke steel entrance doors manufactured in Britain with nationwide installation. Their positioning is much closer to luxury architectural glazing firms than standard composite-door suppliers."

And in High-security section:
> "**SteelR's RC4 specification is unusually high for UK residential doors and materially above standard PAS 24 offerings.**"

Other brands in answer: PIVOT M2 (domadeco UK, £10,360 as "best overall"), Sta Eon (high-security pick), Crittall Style French Heritage, Ryterna RD65 (mid-range pick), METALFORM UK, Artell UK, Strongdor (all "worth considering").

ChatGPT explicit budget framing:
> "Steel-look aluminium: ~£2k–£5k installed
> Mid-range insulated steel: ~£4k–£9k installed
> Fully bespoke architectural steel: ~£10k–£30k+ installed"

ChatGPT's £10k–£30k+ band is exactly the tier we sell into. ChatGPT places SteelR as the named UK specialist in that band.

---

## Gemini — verbatim

### Q1 `steel front doors uk` — NOT CITED

Brands Gemini named:
- Gerda Doors (steel-aluminium hybrid, U-value 0.8)
- Steel Door Company (luxury bespoke residential)
- Latham's Steel Doors (security, accessible)
- Crittall (heritage)
- Black Steel Doors (modern French-door style)

### Q2 `bespoke steel front door uk` — NOT CITED

Brands Gemini named:
- Latham's Steel Doors (value-for-money)
- The Steel Door Company (slim-profile glazed)
- Banham (gold standard high-security London — steel core wrapped in timber)
- Prestige Steel Doors (high-end residential pivot)

### Q3 `best front door for a luxury home uk` — NOT CITED

Gemini interpreted "luxury home" as aluminium/timber/pivot, not steel. Brands:
- Spitfire Doors (designer aluminium, S-500/S-700 Pivot)
- Pirnar (ultra-luxury tech, biometric)
- The London Door Co. (bespoke period timber)
- Urban Front (contemporary timber)
- Solarlux (glass & aluminium)

### Q4 `steel front door for my house uk` — NOT CITED

Brands:
- Lathams Steel Doors (£1,100–£1,500)
- Door Supplies Online (Turenwerke, £950–£1,800)
- Strongdor (£1,200+)
- Crittall / Fabco (£3,000+)

### Q5 `high security front door for my home uk` — NOT CITED

Brands:
- Solidor (48mm solid timber core composite)
- Endurance Doors (solid timber core composite)
- Gerda (steel and aluminium hybrid)
- Rockdoor (inner strength construction)

Notable: Gemini's answer here was composite-heavy. No mention of LPS 1175 SR3 manufacturers despite the query being explicitly about high security.

### Q6 `steel front door cost uk` — NO BRANDS

Generic pricing only (£1,200–£4,500 fitted for residential, SR3+ at £4,000+). No specific brand recommendations.

### Q7 `front door for a london townhouse` — NO STEEL BRANDS

Style/colour/period guide. Only brand mentions were Ultion and Yale as smart-lock manufacturers. SteelR absent. Pirnar would have fit but wasn't named in this answer.

### Q8 `steel front door for a victorian house uk` — **SteelR CITED**

The first Gemini citation in any of our audits. Verbatim:
> "**High-End Bespoke Steel (e.g., SteelR, Strongdor)**: These are true security doors. They can be custom-painted in classic Victorian colours (like Oxford Blue, Deep Burgundy, or Forest Green) and manufactured with traditional panel layouts."

Gemini named three categories in this answer:
- **High-End Bespoke Steel**: SteelR, Strongdor
- **Composite with Timber Core**: Endurance
- **Industrial "Crittall" Style**: Climadoor, VuFold

Gemini concluded with a planning-permission caveat:
> "If your Victorian house is a Listed Building or located in a Conservation Area, you may be legally required to use authentic timber."

---

## Pattern recognition

### Where SteelR is now demonstrably winning
- **ChatGPT-with-Search on category-level homeowner queries.** "Steel front doors UK" and "bespoke steel front door UK" both surface us prominently in the editorial body, even when the "best overall" pick is a competitor product. ChatGPT positions us as the named UK specialist at the £10k–£30k bespoke tier.

### Where SteelR is absent in Gemini (the 7 misses)
The brands Gemini consistently picks instead — Latham's, Crittall, Steel Door Company, Gerda, Solidor, Endurance, Rockdoor, Banham, Spitfire, Black Steel Doors — split into three groups:
1. **High-volume mid-market** (Latham's, Solidor, Endurance, Rockdoor, Steel Door Company): these dominate Google retail SEO with directory-style content + heavy review presence
2. **Heritage/architectural-look** (Crittall, Fabco, Black Steel Doors): own the Crittall-style aesthetic searches
3. **Luxury / niche** (Banham, Spitfire, Pirnar, Urban Front, Gerda): named on the "luxury / high-security" queries

We don't fit cleanly into any of those Gemini selection buckets except on the period/Victorian framing — which is where the citation finally surfaced.

### The Victorian win is significant
Yesterday's audit (2026-05-11) flagged heritage / listed property as a content gap. Today's Q8 confirms the inverse: Gemini DOES recognise SteelR specifically in period-property context. So the entity is in Gemini's index but only surfaces on heritage-framed queries.

This means:
- Building `/heritage-steel-front-doors-uk` (the proposed topic page) would compound an already-working signal on Gemini, not start from zero
- The query that surfaces SteelR on Gemini is the same one a buyer would use when shopping for a real property — Victorian/period framing is a high-intent homeowner search
- Gemini's grounding model knows our positioning on period-property security; it doesn't know our positioning on general-luxury or general-bespoke

### What the cross-engine comparison reveals

| Query class | ChatGPT-with-Search | Gemini |
|---|---|---|
| Category-level homeowner ("steel front doors UK") | ✅ cited prominently in body | ❌ Gerda/Latham's/Crittall named |
| Bespoke / luxury commercial intent | ✅ cited as named UK specialist | ❌ heritage + budget brands named |
| Period-property specific (Victorian) | (not tested today) | ✅ named alongside Strongdor |
| Cost / pricing exploration | (not tested today — yesterday: not cited) | No brands (generic) |
| Geography ("london townhouse") | (not tested today) | No steel brands |

Two completely different selection systems. ChatGPT pulls SteelR on category-commercial searches. Gemini pulls SteelR only when the period/heritage angle is explicit.

---

## Recommendations (gate applied)

### Tested-locally
1. **ChatGPT-with-Search position on homeowner searches confirmed strong.** Q1 and Q2 today match the Q1/Q2 result on 2026-05-11. Stability across two consecutive sessions = the citation pattern is reproducible, not a one-off rendering.

### Reasoned
2. **Heritage / Victorian topic page is now the highest-leverage on-site move.** Yesterday's audit flagged the gap from the absence side. Today's Q8 proves Gemini already has the entity-context for SteelR + period property — meaning a dedicated topic page compounds a working signal rather than building from zero. Cheap reversibility. Tier 4/5 capacity remaining this session.

3. **The 8-query Gemini result is not a sign the AI channel is broken.** It is a sign that Gemini reads a different signal pool from ChatGPT (Google index vs Bing index) and weights heritage-tier brands higher on broad queries. Pursuing Gemini wins on the broad queries requires Google-side authority work that is outside on-site scope.

### Deferred (not pursued)
- Re-running the throttled ChatGPT queries on the same account tomorrow when the limit resets. Would round out the Q3–Q12 dataset but won't change the directional finding (we win ChatGPT-with-Search, period-property only on Gemini).
- ChatGPT Plus / Pro upgrade to bypass free-tier throttle on multi-query audits. Cost vs benefit unclear.

---

## Methodology notes for next audit

- **Both engines have anti-automation behaviours.** ChatGPT free-tier silently disables submit after ~2–7 queries per session. Gemini occasionally takes 60+ seconds to start typing the response. Both need ~30 seconds per query end-to-end via Claude_in_Chrome.
- **`?prompt=` pre-fill is unreliable on ChatGPT.** Submit button stays disabled until the user manually types into the input. Workaround: click input, ctrl+A delete, retype manually.
- **Gemini doesn't have the same submit issue.** Click input → type → Return works first time.
- **Per-query cost via Claude_in_Chrome:** ~3–5 minutes including waits and screenshots. 12-query audit = 60–90 minutes hands-on.
- **Repeat cadence:** if we want to track AI-engine citation deltas over time, monthly cadence on the same 12 queries is sufficient. More frequent than monthly will burn ChatGPT throttle.
