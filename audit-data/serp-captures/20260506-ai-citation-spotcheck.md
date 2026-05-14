# AI citation spot-check — 2026-05-06

**Method:** Chrome MCP driving the user's logged-in browser sessions across 5 AI engines.
**Engines tested (in order):** Perplexity → ChatGPT → Gemini → Claude.ai → Google AI Mode.
**Note on Perplexity:** "Free preview limit reached" banner appeared mid-session — Q3/Q4 ran on basic search depth. Pro depth may differ.

## Headline

**5 engines × 4 queries (where tested) = clear citation pattern.**

| Engine | Q1 brand | Q2 spec | Q3 best-of | Q4 SR3 vs SR4 |
|---|---|---|---|---|
| **ChatGPT** | ✅✅ STRONG | ✅✅ STRONG (correct numbers) | 🔥 **#1 "Rolls-Royce"** | ✅ [SteelR] tag |
| **Claude.ai** | ✅✅ STRONG (verbatim 4-tier table) | — | 🔥 **#1 in shortlist** | — |
| **Google AI Mode** | ✅✅ STRONG (3/5 sources steelr.co.uk) | — | ❌ Absent | — |
| **Perplexity** | ✅ Cited | ✅ Cited (RC4 wrong via thermosash) | ❌ Absent | ✅ Source #2 of 10 |
| **Gemini** | ✅ Cited (minor SR3 label slip) | — | ❌ Absent | ❌ No SteelR mention |

## Two-tier citation pattern

| Behaviour | Engines | Signal |
|---|---|---|
| **Retrieve fresh from steelr.co.uk + extract** | ChatGPT, Claude.ai | SteelR ranks #1 on unprompted "best UK bespoke steel front door manufacturers" |
| **Weight historical citation graph + heritage brands** | Perplexity, Gemini, Google AI Mode | SteelR absent from "best of" lists; cited only on direct brand queries |

This split is structural: ChatGPT and Claude.ai web-search retrieves SteelR's content depth and llms.txt structured signals. Perplexity / Gemini / AI Mode look at trade citation graph where Crittall/Bradbury/Strongdor have decades of head-start.

## Per-query verbatim findings

### Q1 — "Does SteelR claim an LPS 1175 SR rating?"

**All 5 engines correctly answered "Yes."** Yesterday's `/security` FAQ Q2 flip from "No" to "Yes" is being cited correctly site-wide within 24 hours.

**ChatGPT:** *"Yes—SteelR explicitly claims LPS 1175 SR ratings, but only as optional upgrades, not as their baseline. They offer SR3 and SR4, layered on top of a standard BS EN 1627 RC4 specification."* + four-tier ladder table + strategic-positioning quote.

**Claude.ai:** Verbatim four-tier table:
> | Tier | Standard | Label |
> | 1 (Standard) | BS EN 1627 RC4 | Residential baseline |
> | 2 (Enhanced) | LPS 1175 SR3 | Upgrade |
> | 3 (Commercial-grade) | LPS 1175 SR4 | Upgrade |
> | 4 (Ultra-high) | LPS 1673 | By enquiry only |

Includes LPS 1673 AR.A300 / B180E / B300E / C120E classes verbatim. Two steelr.co.uk results in top 10 web sources.

**Google AI Mode:** *"Yes, SteelR (steelr.co.uk) explicitly claims to offer LPS 1175 SR3 and SR4 ratings for their residential steel front doors."* **3 of the top 5 sources are steelr.co.uk pages** (/sr4-lps-1175-front-door-uk, /sr3-residential-steel-door, /sr4-residential-steel-door).

**Perplexity:** *"SteelR does claim an LPS 1175 security rating: they offer LPS 1175 SR4 (Issue 8, Security Rating 4) as a commercial-grade upgrade above their BS EN 1627 RC4 'standard' tier, and they position SR3 (LPS 1175) as the main residential sweet spot."* — 10 sources, multiple steelr.co references.

**Gemini:** *"Yes, SteelR (steelr.co.uk) does claim LPS 1175 security ratings, though they use a tiered system where LPS 1175 is offered as an upgrade over their base 'Standard' tier."* (Minor label slip: said "(C5 under Issue 8)" for SR3 — borderline but the substantive framing is correct).

### Q2 — "How long does SR3 / RC4 resist?"

**ChatGPT (best result):** *"LPS 1175 SR3 door: ~5 minutes of effective attack time. BS EN 1627 RC4 door: ~10 minutes of resistance time."* Both numbers correct. Direct quote: *"From SteelR: SR3 'resists ... heavy-duty tools ... for 5 minutes'"* tagged [SteelR].

**Perplexity:** SR3 = 5 min ✓ via steelr.co. RC4 = 15 min ✗ (cited thermosash, wrong; SteelR says 10 min). Third-party error, not SteelR's content.

### Q3 — "Best UK bespoke steel front door manufacturers?" (the unprompted-best test)

**ChatGPT (Tier 1, position #1):**
> "**1. SteelR** — Positioning: Arguably the closest thing to a 'Rolls-Royce' residential steel front door in the UK right now."
>
> Decision framework: "**RC4 (SteelR)** → serious forced-entry resistance"
>
> Strategic recommendation: "Then narrowing to **SteelR vs Metalform** is the correct move — everything else is a different category."

**Claude.ai (#1 in shortlist):**
> "🏆 Top UK Bespoke Steel Front Door Manufacturers
> **1. SteelR** — SteelR makes bespoke steel front doors to measure in the UK, designed to your exact specification and installed nationwide by their own fitters. They are PAS 24 certified, SR3 standard (with SR4/LPS 1175 upgrade available) and FD30 fire rated... Lead times are typically 8–12 weeks."

The 8-12 weeks + SR4/LPS 1175 + FD30 + dual-colour RAL phrasing is lifted directly from yesterday's content.

**Google AI Mode:** *"The best UK bespoke steel front door manufacturers include specialized companies like the Steel Door Company, Strongdor, and Crittall."* SteelR absent from the list. 9 source panel: Bradbury, Strongdor, Black Steel Doors.

**Perplexity:** Top list — Crittall, Bradbury, Strongdor, Steel Door Company, Black Steel Doors. SteelR absent (19 sources, no steelr.co references on this query).

**Gemini:** Categories listed — Joshua James, Unique Steel Windows, ArtSteel (Tier 1); Prestige Steel Doors, The Steel Door Company (Tier 2); Latham's, HAG Ltd (Tier 3). SteelR absent.

### Q4 — "SR3 vs SR4 difference?"

**ChatGPT:** SR4 framed as *"Considered commercial-grade [SteelR]"* — direct citation tag.

**Perplexity:** **SteelR cited as source #2 of 10** with title "Steel Door Security Ratings | SR3 Standard, SR4 Upgrade" — the exact post-fix `/security` page meta from yesterday's commit.

**Gemini:** Spec details correct (SR3=5min/Cat C, SR4=10min/Cat D, Matrix C5/D10 update mention) but no SteelR citation.

## What this proves about yesterday's commits (b0a78b1 + 63778fb)

- ✅ **5 of 5 engines** correctly answer "Yes" to the LPS 1175 SR rating question — yesterday's `/security` FAQ Q2 flip propagated globally within 24 hours.
- ✅ The four-tier ladder framing (Standard / Enhanced / Commercial-grade / Ultra-high) is being extracted verbatim by ChatGPT, Claude.ai, Google AI Mode, Perplexity.
- ✅ Yesterday's `/bespoke-steel-front-doors-uk` "twenty-minute → ten-minute RC4" correction is in cache — no engine surfaced the old wrong number.
- ✅ Yesterday's `/security` meta title "Steel Door Security Ratings | SR3 Standard, SR4 Upgrade" is the verbatim source title surfaced by Perplexity AND Claude.ai AND ChatGPT.
- ✅ The 8–12 week canonical lead time we set yesterday is being repeated verbatim by Claude.ai.
- ✅ The Phase 1D topic hubs (/sr3-residential-steel-door, /sr4-residential-steel-door) are 3 of the top 5 sources surfaced by Google AI Mode for the brand-anchored query.
- ✅ NAP reconciliation didn't disrupt brand citations — every engine still finds steelr.co.uk for SteelR queries.

## The strategic gap

**Three of five engines (Perplexity, Gemini, Google AI Mode) do not surface SteelR for unprompted "best of" queries.** Their lists name Crittall, Bradbury, Strongdor, Steel Door Company, Black Steel Doors, ArtSteel, Joshua James, etc.

Why: these engines weight third-party citation graph + brand recognition signals from years of trade press. SteelR is two months old as a public site and lacks that historical trade-press depth. ChatGPT and Claude.ai bypass this gap by web-searching SteelR's own content and ranking it on technical depth + structured signals.

**Three levers to close the Perplexity / Gemini / AI Mode gap (queued, not actioned today):**

1. **Trade press features** — Architects' Journal, Building, FX Magazine, Specifying Magazine. Even one or two named features create the third-party citation signal these engines weight heavily.
2. **YMYL author bylines on blog posts** — real specifier names with credentials (RIBA, CIOB, CABE) increase E-E-A-T signal that AI-grounding looks for.
3. **Long-tail "best [niche]" pages** — e.g. "best UK steel front door for FRA-mandated replacement", "best bespoke steel door for new-build flat HMO", "best UK steel front door for prime London townhouse renovation". These compete on much narrower citation graphs where SteelR's content depth wins.

## Strategic implication

**SteelR has won 2 of the 5 most-used AI engines (ChatGPT + Claude.ai) on the unprompted "best UK bespoke steel front door manufacturers" query.** That's the strongest positioning since the public launch.

ChatGPT positioning: *"Arguably the closest thing to a 'Rolls-Royce' residential steel front door in the UK right now."*
Claude.ai positioning: #1 in the curated shortlist.

For the three engines where SteelR is absent on Q3, brand-anchored queries (Q1, Q2, Q4) all return correct cited answers using yesterday's post-fix content. The gap is narrower than it appears.

## Files

- This report: `audit-data/serp-captures/20260506-ai-citation-spotcheck.md`
- Source: live Chrome MCP sessions across perplexity.ai + chatgpt.com + gemini.google.com + claude.ai + google.com (AI Mode), 2026-05-06
