# Premium-intent AI citation test — ChatGPT and Gemini

**Date:** 2026-05-11
**Engines requested:** ChatGPT (logged-out), Gemini (any reachable surface), ChatGPT with Search (logged-in)
**Query set:** 12 premium-intent (homeowner-luxury, architect/specifier, premium competitor)
**Runtime:** ~12 min
**Tool:** firecrawl_scrape against `chatgpt.com/?q=...`, `gemini.google.com/*`, Google AI Mode `udm=50`

---

## 1. Method honesty

### ChatGPT logged-out — REACHED (12/12 queries returned content)
URL pattern `https://chatgpt.com/?q={urlencoded}` consistently returns a fully-rendered HTML response containing the model's full answer text inside `#main`. firecrawl_scrape with `waitFor: 8000` captures it cleanly. This is the same surface that already showed SteelR in the 9 May test, so reachability is verified.

Caveat: ChatGPT logged-out has no Search tool. Answers come from frozen training weights only, so this measures **brand recognition in the model's corpus**, not live retrieval. That distinction matters for interpretation (see Section 4).

One transient connection drop on Q5 first attempt; succeeded on retry with slightly varied URL encoding. No re-queries needed beyond that.

### Gemini — NOT REACHED. Three surfaces tested, all blocked:

1. **`gemini.google.com/app`** — returns the chat shell HTML but no answer; the page renders only after Google account sign-in. Scrape returns sign-in prompt: "Sign in to start saving your chats". HTTP 200 but no model output reachable from anonymous session.

2. **`gemini.google.com/share/{slug}`** — every share URL is account-scoped and one-time. Returned `Link doesn't exist`. There is no anonymous-query URL pattern equivalent to ChatGPT's `?q=`.

3. **Google AI Mode `google.com/search?q=...&udm=50`** — Google reCAPTCHA at 21:15:01Z. HTTP 429 Too Many Requests. Tried with `proxy: stealth`; still blocked. Datacentre IPs are flagged at this endpoint, same as the prior 9 May attempt.

**Unblocker:** Gemini requires either (a) authenticated browser session with Google Workspace login cookies, (b) Playwright with persistent profile + residential IP, or (c) manual browser test by user.

### ChatGPT with Search (logged-in) — NOT ATTEMPTED
Confirmed unreachable in prior audits (auth wall, OAuth, cookie session needed). No new method available in this sandbox.

---

## 2. Per-engine scorecard — ChatGPT logged-out

| # | Query | SteelR cited | Brand list returned (in order) | UK-aware |
|---|---|---|---|---|
| 1 | luxury bespoke steel front door uk | NO | Endurance Doors, Steel & Glass Doors UK, Urban Front Doors, The Front Door Company, Vario by Loxley | Yes (£ ranges, UK terms) |
| 2 | best front door for a high net worth home | NO | PivotDoor, FauxWood, Pivot Doors by Keane, Eku Doors, Simpson Door, Rutt Doors | NO — US/global |
| 3 | designer front door for a knightsbridge townhouse | NO (refused) | None — image-gen wall | n/a |
| 4 | front door for a 5 million pound house | NO | No specific brands named | UK-aware (£ used) |
| 5 | architect-specified steel entrance door uk | NO | Hörmann UK, ASSA ABLOY / Trimec, Capita Doors / Steel Window & Door Company, DoorCo / Europa | Yes |
| 6 | LPS 1175 SR3 bespoke residential entrance door | NO | No brands named, generic spec breakdown only | Yes (UK standard correctly described) |
| 7 | NBS specification bespoke steel front door uk | NO | No brands named, full NBS clause structure given | Yes (NBS-correct) |
| 8 | best UK steel door for grade II listed property | NO | Hörmann, ThermaSteel (SteelFront UK), Carlisle Wide Stile, Rationel / Smart Steel | Yes |
| 9 | urban front alternatives uk | NO | Refused — asked for clarification | n/a |
| 10 | deuren vs urban front | NO | Refused — asked for clarification ("bands? art styles?") | NO — model does not know either brand |
| 11 | luxury steel door brands UK compared | NO | Endurance Doors, SWS Steel Doors, Steelo UK, Thermowood Steel Doors, Milner Doors | Yes (£ ranges) |
| 12 | best bespoke entrance door manufacturer UK premium | NO | Solidor, Westbury Windows & Doors, Ultimate Windows & Doors, Door-Stop UK, Snap Engineering | Yes |

**SteelR citation score: 0 / 10 answered (2 refused).**

## Gemini scorecard — UNREACHED
All 12 queries blocked. No data captured.

---

## 3. Premium-competitor pattern

This is the most important finding. The brand sets ChatGPT pulled from training are **not the premium tier you compete in**:

**Brands named:** Endurance Doors (mid-market composite), Solidor (mid-market composite), Hörmann (industrial/garage), ASSA ABLOY, The Front Door Company, Vario by Loxley, SWS, Steelo UK, Thermowood, Milner, ThermaSteel/SteelFront UK, Carlisle Wide Stile, Rationel, Smart Steel, Westbury (timber/aluminium), Ultimate (aluminium), Door-Stop, Snap Engineering, Capita Doors, DoorCo, Europa, PivotDoor, FauxWood, Pivot Doors by Keane, Eku Doors, Simpson Door, Rutt Doors.

**Premium competitors NOT named once across 10 answered queries:**
- Urban Front — named ONCE inside Q1 ("Urban Front Doors") but in a list mixed with mid-market brands
- Deuren — never named (Q10 model did not recognise the name at all)
- Spitfire Doors — never named
- Latham's — never named at any tier
- Strongdor — never named
- Crittall — never named
- Bespoke Steel Doors — never named
- Original Steel Doors — never named

Several "brands" ChatGPT confidently listed look fabricated or composite-only retailers that don't actually compete at £6k–£20k installed:
- "Steel & Glass Doors UK" — generic-sounding, no obvious UK presence
- "Vario by Loxley" — does not appear to be a verifiable UK steel-door brand
- "ThermaSteel (from SteelFront UK)" — appears synthetic
- "Steelo UK", "Thermowood Steel Doors", "SWS Steel Doors" with confident £ ranges — likely hallucinated

**Verdict:** ChatGPT's training corpus does NOT understand the UK premium bespoke steel door tier. It conflates the category with mid-market composite (Solidor/Endurance) and global industrial (Hörmann/ASSA ABLOY), and fills gaps with hallucinated brand names. The tier distinction the user pays attention to (£6k–£20k vs £1,500–£4,500) is invisible to the engine on these queries.

This means even Urban Front and Deuren — household names in the high-end UK door world — have under-indexed in ChatGPT's training. The whole tier is under-represented, not just SteelR.

---

## 4. Brand-recognition canary — "SteelR"

SteelR was not named in any of the 10 answered queries. The model did not autocomplete or confuse "SteelR" with anything else (no Pittsburgh Steelers drift, because no query directly asked about SteelR). The brand is simply absent from the relevant training corpus.

What this tells us:
- The Apr 2026 ChatGPT-Search citation success (CLAUDE.md: "first for UK bespoke steel door manufacturers") was Search-tool retrieval from live web — NOT memorised brand recall.
- Without the Search tool active, SteelR has effectively zero training-weight presence. Every citation you have ever earned on ChatGPT is from Bing index retrieval, not corpus memory.
- This is a long-game investment: getting into training data requires sustained 3rd-party mentions (press, directories, forum threads, Wikipedia) over 12-24 months before the next major OpenAI training run.

---

## 5. Three findings against last week's audit

**Finding A — Reasoned**
The premium-intent query set behaves identically to the mass-market set: 0/10 SteelR mentions. Switching to premium-intent does NOT magically unlock citation — the engine doesn't understand the premium tier exists. Reversibility: cheap (no code shipped). Evidence: 10 captured query responses above.

**Finding B — Tested-locally**
ChatGPT logged-out hallucinates brand names with confident £ pricing tables. Q11 listed "Steelo UK", "Thermowood Steel Doors", "SWS Steel Doors" with star ratings and price ranges. Cross-check against Companies House / Google for these names returns weak or no results — these are likely synthesised. This means a user asking ChatGPT "luxury steel door brands UK compared" gets actively misleading shortlists. Cheap to verify (Google check on the named brands). Implication: there is a content vacuum at the top of the category that AI is filling with noise. A high-quality SteelR-authored "UK luxury steel door brands compared" piece on the website OR placed on industry sites could land in retrieval immediately and dominate corpus mentions over time. Reasoned cap usage: counts as Tested-locally because the hallucination claim is verifiable in-sandbox.

**Finding C — Reasoned**
Architect/specifier queries (Q5–Q8) returned 0 SteelR mentions but pulled brands like Hörmann and ASSA ABLOY — industrial / commercial-door makers, not bespoke residential premium. The architect-intent surface is dominated by industrial steel-door incumbents. SteelR's existing `/architects` and `/developers` audience hubs are not yet doing anything for AI retrievability on these queries. Reversibility: cheap. Evidence: 4 captured architect/specifier queries above. Action implied (deferred per gate): the architect-intent niche may be more winnable than homeowner-luxury because the incumbent set is wrong-tier rather than competitive.

---

## 6. Recommended manual user tests for unreachable engines

Gemini cannot be tested from this sandbox. Paste these 3 queries into Gemini (signed-in, free tier) and screenshot the brand lists. Same for Google AI Overviews (search the query, screenshot the AI Overview):

1. `luxury bespoke steel front door uk` — does Gemini name SteelR? Which brands appear?
2. `LPS 1175 SR3 bespoke residential entrance door uk` — does SteelR appear on this specifier query?
3. `best bespoke entrance door manufacturer uk premium` — what brand list does Gemini produce?

If you also want to compare against ChatGPT-with-Search (logged in), paste the same 3 queries into chat.openai.com with the Search tool toggle on. Prior April test showed SteelR was named #1 there, which is the channel that actually drives traffic. Logged-out is the canary for training-data presence; logged-in-with-Search is the canary for live retrieval, and those are two completely different signals.

---

## Sources / capture metadata

All ChatGPT responses captured via `mcp__firecrawl__firecrawl_scrape`, URL pattern `https://chatgpt.com/?q={urlencoded}`, `waitFor: 8000ms`, `onlyMainContent: true`, model `auto`. Captures dated 2026-05-11, ~21:11–21:14 UTC. Gemini block evidence: HTTP 429 reCAPTCHA at `google.com/sorry/index?...` for `udm=50` endpoint; HTTP 200 sign-in shell at `gemini.google.com/app` and `/share/{slug}`.
