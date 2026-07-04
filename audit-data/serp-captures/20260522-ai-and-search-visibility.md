# SteelR Visibility Audit — AI engines + organic search

**Date:** 2026-05-22 (evening)
**Method:** live browser capture via Claude_in_Chrome against Mani's logged-in sessions (ChatGPT, Gemini), Perplexity public, Google logged-in. Follows the CLAUDE.md "critical testing rule" — ChatGPT-with-Search tested first.
**Why not the script:** `audit-data/visibility-audit.py` returned false zeros (0/26, 0/11, 0/15) — Serper API credits depleted, garbled response. Perplexity MCP key also returned 401. Both API routes dead; browser capture used instead.

---

## Headline

| Channel | Result | vs baseline |
|---|---|---|
| Google organic | **4/4 queries at #1** | Holding / recovered |
| ChatGPT-with-Search | **1/4** — named only on explicit SR3/PAS24/SBD query | **Regression** (11 May: 5/7) |
| Gemini (logged in) | **0/2** | Unchanged (11 May: 0/3) |
| Perplexity (public) | **0/2** | Unchanged (11 May: 2/12 partial) |
| Bing organic | Not tested — CAPTCHA challenge, not bypassed | — |
| Google local pack | SteelR shows, but owner-logged-in session — not a neutral reading | — |

**The story:** Google organic is strong and Buckinghamshire has recovered. But ChatGPT-with-Search — SteelR's strongest AI channel and the one the protocol says to trust — has degraded. SteelR now only appears on AI queries that explicitly name the certifications (SR3, PAS 24, Secured by Design). On generic "best bespoke steel door manufacturer" and "luxury" and "steel vs composite" queries it is absent.

---

## ChatGPT-with-Search (logged in as Mani Sandhu, Free tier) — 1/4

| # | Query | SteelR cited? | Who ChatGPT named |
|---|---|---|---|
| 1 | "Who makes the best bespoke steel front doors in the UK? ... high-end, security-rated ... Name specific manufacturers" | ❌ No | Black Steel Doors, ASL Steel Doors, Latham's, Original Steel Doors, Fort Security/Fort Premium, Metador, Milsteel |
| 2 | "What are the best UK bespoke steel front door manufacturers?" | ❌ No | Black Steel Doors, CKI, Original Steel Doors, SWSD, Crittall, PIRNAR, Secure House, Totally Steel Doors, Prestige, Milsteel |
| 3 | "Steel front door vs composite ... which is better, and which UK companies make the best steel front doors?" | ❌ No (body); "Vitrum Solutions" — the **sister brand** — cited as a source, not steelr.co.uk | Pirnar, Gerda, Hörmann, Spitfire; composite: Solidor, Rockdoor, Endurance, Palladio |
| 4 | "Which UK manufacturers make SR3-rated, PAS 24 certified, Secured by Design steel front doors for homes?" | ✅ **Yes — named FIRST** under "Best fit for true SR3 + residential aesthetics" | SteelR (#1), Rotec Security, Latham's Security Doorsets |

**Mechanism observed:** queries 1–2 returned a Maps/local-business-grounded answer — competitor entries carried star ratings, phone numbers and "Directions" links. That is a places-data answer, not a content-retrieval answer. SteelR has **0 Google reviews**, so it is filtered out of ratings-grounded "best" lists. Query 4 — which explicitly names the certifications — returned a content-retrieval answer and SteelR won it outright. The site's standards content (llms.txt, topic pages) still works; the failure is that ChatGPT now routes generic/luxury "best" intent through places data.

---

## Gemini (logged in as Mani Sandhu, location Ickenham UK) — 0/2

| # | Query | SteelR cited? | Who Gemini named |
|---|---|---|---|
| 1 | "Who makes the best bespoke steel front doors in the UK? ..." | ❌ No | Stronghold Security Doors, Urban Front, Crittall, J.K Security Doors |
| 2 | "Which UK manufacturers make SR3-rated, PAS 24 certified, Secured by Design steel front doors for homes?" | ❌ No | Bradbury Group, Premier Security & Fire (Premier SSL), Latham's Steel Doors, Robust UK |

Gemini does not surface SteelR — not even on the SR3 specifier query that ChatGPT named SteelR first on. Consistent with the 11 May baseline. Gemini's grounding (Google index) is a separate, harder problem.

---

## Perplexity (public) — 0/2

| # | Query | SteelR cited? | Who Perplexity named |
|---|---|---|---|
| 1 | "Who makes the best bespoke steel front doors in the UK? ..." (27 sources) | ❌ No | Bradbury Group, Crittall, EBD Steel Doors, Steel Door Company, North Valley Metal |
| 2 | "Which UK manufacturers make SR3-rated, PAS 24 certified, Secured by Design steel front doors for homes?" (7 sources) | ❌ No | Latham's Steel Doors, HAG Ltd |

---

## Google organic (logged in) — 4/4 at #1

| Query | SteelR position | Notes |
|---|---|---|
| `steelr` (brand) | **#1** organic (homepage + collection + areas + bespoke page on page 1) | GSC inline panel: avg position 2.3, 12 clicks / 111 impressions / 90 days |
| `bespoke steel front doors UK` | **#1** organic | Above Bespoke Steel Doors, Strongdor, Crittall, Latham's |
| `steel doors Buckinghamshire` | **#1** organic (`/areas/buckinghamshire`) | **Recovery** — STATE.md recorded this hub falling out of top 30 on 13 May; the hub-content rebuild worked |
| `steel front door vs composite door` | **#1** organic (`/steel-front-door-vs-composite`) + **#5** (the 2026 comparison blog) | Two SteelR results on page 1 |

No AI Overview box rendered on any of the four Google queries.

**Google local pack:** "Steelr Bespoke Steel Entrance Doors" appeared in the 3-pack on the bespoke and Buckinghamshire queries — but the session is logged in as the profile owner ("You manage this Business Profile", "Saved in Favourites"), so this placement is not a neutral measurement. Competitor pins (Black Steel Doors 4.4/46 reviews, J.K Security 5.0/8, Original Steel Doors 5.0/5) all carry reviews; SteelR shows "No reviews".

---

## Conclusion

The single highest-value finding: **0 Google reviews is no longer just a Maps-3-pack blocker — it is now an AI-citation blocker too.** ChatGPT-with-Search has changed how it answers generic "best manufacturer" and "luxury" door queries — it grounds them in Google places/ratings data. SteelR with zero reviews is filtered out before the content even matters. SteelR still wins the moment a query names the certifications explicitly (SR3 / PAS 24 / Secured by Design), because that triggers content retrieval where the topic pages and llms.txt do their job.

Organic SEO is healthy and the Buckinghamshire hub fix held.

### Observations (not yet recommendations — tag before acting)

- [REASONED] The ChatGPT regression and the Maps gap now share one root cause (0 reviews). Reviews were already user-managed and out of scope for Claude to action; this audit raises their priority because the cost of zero reviews has widened from "no Maps pack" to "no AI citation on high-intent generic queries."
- [REASONED] Re-test ChatGPT-with-Search on the same 4 queries once SteelR has a handful of Google reviews, to confirm the places-grounding hypothesis.
- Gemini and Perplexity remain 0 — unchanged, separate authority problem, no new signal this session.
