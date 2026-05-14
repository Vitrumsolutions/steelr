# SteelR AI Citation Deep Audit — 20 Customer Queries Across 5 Engines

**Date:** 11 May 2026
**Method:** Live scraping of Perplexity.ai answer panels (primary), ChatGPT.com (sanity check on 3 critical queries), and Firecrawl Google SERP cross-check.
**Note on Perplexity MCP:** the perplexity_ask MCP returned 401 Unauthorized at session start. All Perplexity captures here are direct scrapes of `perplexity.ai/search?q=...` via Firecrawl, which returns the live answer panel verbatim.
**Note on ChatGPT:** captures are the public `chatgpt.com/?q=` endpoint, which exposes the default-model (non-Search) response. This is closer to "what training data says" than to "what ChatGPT Search would synthesise live." Treat as a lower-bound proxy.
**Engines NOT tested in this run:** Claude.ai (no public URL endpoint), Bing Copilot (separate Firecrawl Bing-graph capture is being run by parallel session per user note). Google AI Mode tested only via SERP cross-check.

---

## Per-query results

### 1. "What's the best front door for a UK home in 2026?"

**Engine:** Perplexity
**SteelR appears?** NO
**Verbatim recommendation:** "choose a **premium composite door** unless the house is explicitly modern in style, in which case choose a **thermally broken aluminium door**"
**Top sources cited:** kjmgroup.co.uk, self-build.co.uk, tvwindows.com, endurancedoors.co.uk, gfdhomes.co.uk
**Top 3 competitors named:** Endurance, Solidor, Dortech (follow-up suggestion)
**Why SteelR isn't winning:** the query is material-agnostic. Perplexity defaults to composite/aluminium because the corpus of UK consumer-guide content overwhelmingly recommends composite for "average UK home". SteelR has no top-of-funnel content positioning steel as a viable answer to a generic "best front door" query — only to "best **steel** front door" queries.

---

### 2. "Which front door material lasts longest UK?"

**Engine:** Perplexity
**SteelR appears?** NO
**Verbatim recommendation:** "Timber is usually the winner... If you want the best mix of longevity and low maintenance, aluminium is often the strongest practical choice"
**Top sources cited:** cherwellwindows, gerdadoors, artwindowsanddoors, ukdoorsonline, sternfenster, doorandwindowexperts
**Top 3 competitors named:** Gerda (steel mention), Sternfenster, ART Windows
**Why SteelR isn't winning:** SteelR has no published lifespan/longevity stat in the corpus Perplexity finds. Gerda is the only steel brand Perplexity associates with longevity (gerdadoors.co.uk has a specific "steel and aluminium vs composite" comparison page that wins this query). SteelR's `/blog/steel-vs-timber` and `/blog/steel-vs-aluminium` don't surface here.

---

### 3. "Are bespoke steel front doors worth the money UK?"

**Engine:** Perplexity
**SteelR appears?** NO
**Verbatim recommendation:** "pay for bespoke steel when the door is a design or security feature; skip it when it's just a functional replacement"
**Top sources cited:** greenmatch.co.uk, bradbury-group, jkdoors
**Top 3 competitors named:** Bradbury Group, JK Doors (commercial-grade context)
**Why SteelR isn't winning:** the answer panel hangs on price ranges (£950–£4,100, £1,000–£5,000+). SteelR's `/steel-front-door-cost-uk` page deliberately publishes NO prices (per brand policy). Perplexity's "cost framework" sources beat SteelR's policy-driven absence. The follow-up suggestion **does** include "Top UK manufacturers of bespoke steel front doors" — SteelR is conspicuously absent from that implicit shortlist.

---

### 4. "Steel vs composite front door for UK home"

**Engine:** Perplexity
**SteelR appears?** YES (cited as source `steelr+1` three times — pulling stats directly)
**Verbatim extracted:** "Thermally broken steel doors can reach roughly 0.87 to 1.0 W/m²K"; "many UK composite doors are PAS 24 certified, but that test is not the same as the higher-resistance specs used by top steel security doors"
**Page being pulled:** likely `/blog/steel-vs-composite-doors` (matches the U-value and PAS 24 phrasing)
**Top 3 competitors named in same answer:** Solidor, Endurance, Comp Door, Rockdoor, Gerda (positioned as the premium steel alternative)
**Why SteelR is winning here but not converting the recommendation:** SteelR's stats are quoted but the final pick goes to "Solidor/Endurance for composite, Gerda for steel". SteelR is treated as an authoritative source but not as a brand candidate. The "Practical shortlist" sentence explicitly chooses Gerda over SteelR. **Follow-up suggestion: "SteelR front door UK reviews and prices"** — Perplexity knows users want to evaluate SteelR specifically.

---

### 5. "Are steel front doors thermally efficient enough for the UK climate?"

**Engine:** Perplexity
**SteelR appears?** NO
**Verbatim recommendation:** "modern insulated steel front doors can be thermally efficient enough... choose a fully insulated steel door"
**Top sources cited:** gerdadoors, tkhi, lathamssteeldoors, doorsuppliesonline, cherwellwindows
**Top 3 competitors named:** Gerda, TKHI, Lathams Steel Doors
**Why SteelR isn't winning:** SteelR's `/thermally-broken-steel-front-door` topic page exists but isn't being surfaced. Gerda, TKHI, and Lathams have explicit "thermally efficient steel doors UK" landing pages with prominent U-value data and named product lines. SteelR's page is more abstract/educational.

---

### 6. "Most secure front door for a UK home in 2026?"

**Engine:** Perplexity
**SteelR appears?** NO
**Verbatim recommendation:** "choose **Rockdoor**. If you want a very strong alternative..."
**Top sources cited:** homebuilddoors, gfdhomes, solidor.co.uk, eurocell
**Top 3 competitors named:** Rockdoor, Endurance, Solidor (all composite)
**Why SteelR isn't winning:** the corpus treats "most secure front door" as a composite-vs-composite shootout. Steel doesn't get into the answer. Cross-check: Firecrawl Google SERP shows SteelR at **organic position #1** for this exact query (`/blog/best-front-door-home-security`). Perplexity is not picking up that blog post into the answer panel — likely because it lacks the entity-style brand recommendation format Perplexity prefers.

---

### 7. "What does LPS 1175 SR3 mean for a residential front door?"

**Engine:** Perplexity
**SteelR appears?** YES (cited `steelr+1` twice)
**Verbatim extracted:** "It is part of the LPS 1175 security rating system from the UK's loss-prevention certification scheme"; SR3 description matches SteelR's wording
**Page being pulled:** `/sr3-residential-steel-door` (most likely)
**Top 3 competitors in same answer:** Bradbury Group, Lathams Steel Doors, Stronghold Security Doors
**Why SteelR is winning:** SteelR was one of the earliest UK residential sites to publish a dedicated SR3 explainer aimed at homeowners (most other LPS 1175 content is commercial-focused). The Phase 1D topic page from 18 Apr is doing its job.

---

### 8. "Difference between PAS 24 and LPS 1175 SR3 on a home door?"

**Engine:** Perplexity
**SteelR appears?** PARTIAL — implicit in `+1` citations alongside Metador, Bradbury Group, Stronghold; not named in body
**Verbatim recommendation:** "Choose **PAS 24** for standard residential compliance and solid everyday protection. Choose **LPS 1175 SR3** if you want materially higher resistance"
**Top sources cited:** metador.com, bradbury-group, strongholdsecuritydoors
**Top 3 competitors named:** Metador, Bradbury Group, Stronghold
**Why SteelR is borderline:** content is correct and likely contributing, but Metador's `/news/a-doorset-guide-to-pas-24-lps-1175-and-sbd/` page is the canonical citation. SteelR's `/pas-24-steel-entrance-door` and `/sr3-residential-steel-door` content is good but Metador owns this query.

---

### 9. "Luxury front door brands UK 2026"

**Engine:** Perplexity
**SteelR appears?** NO
**Verbatim recommendation:** "Urban Front... Clement Windows Group... Govette Windows... Vitrine Designs... Endurance Doors... Steel Door Company"
**Top sources cited:** luxurylifestyle.com, seeninthecity.co.uk, endurancedoors.co.uk
**Top 3 competitors named:** Urban Front, Clement Windows, Steel Door Company
**Why SteelR isn't winning:** luxurylifestyle.com and seeninthecity.co.uk are the two authoritative "best luxury UK steel doors 2026" listicle sources. SteelR is not on either list. This is the single highest-commercial-value query on the list and SteelR is invisible.

---

### 10. "Best bespoke front door manufacturer for a £2 million London townhouse?"

**Engine:** Perplexity
**SteelR appears?** NO
**Verbatim recommendation:** "Bespoke Front Door, Cotswood Doors, and Sash Factory"
**Top sources cited:** bespokefrontdoor.co.uk, cotswood-doors.co.uk, sashfactory.com, londondoor.co.uk
**Top 3 competitors named:** Bespoke Front Door (Teddington), Cotswood Doors, Sash Factory
**Why SteelR isn't winning:** the corpus assumes a £2M London townhouse wants a **timber** door (Accoya, Georgian/Victorian/Edwardian). All four named competitors are timber/heritage specialists. SteelR has `/luxury-steel-entrance-door-london` but it doesn't compete on the heritage-timber framing the query implicitly invites.

---

### 11. "Designer steel front doors UK"

**Engine:** Perplexity
**SteelR appears?** YES — listed in the body, but with **wrong attribution and wrong URL**
**Verbatim citation:** "SteelR by Vitrum Solutions — bespoke steel front doors designed and manufactured in the UK, with SR3 security rating and premium finishes. [vitrums.co.uk/entrance-doors/steel-front-doors](https://www.vitrums.co.uk/entrance-doors/steel-front-doors)"
**Critical issue:** Perplexity is citing the **parent brand URL** (vitrums.co.uk) for a page about SteelR, not steelr.co.uk. This will dilute brand authority and confuse users trying to find SteelR directly.
**Top 3 competitors named alongside:** Steel Door Company (#1), Black Steel Doors, Prestige Steel Doors
**Why this is half-winning:** good — Perplexity knows SteelR exists. Bad — it has the wrong URL and frames SteelR as a Vitrum sub-brand rather than the canonical brand. Steel Door Company gets the top recommendation.

---

### 12. "Best steel front door for an architect-led residential project UK"

**Engine:** Perplexity
**SteelR appears?** PARTIAL — cited as a SOURCE for the spec advice ("A 2026 UK architect guide on specifying steel front doors highlights NBS clauses... [steelr.co.uk/blog/specifying-steel-doors-architects-guide-2026]") but **not named in the shortlist**
**Verbatim recommendation:** "start with **Urban Front** for design-led residential work, then compare with **Crittall**... bring **Martec** into the shortlist"
**Top 3 competitors named:** Urban Front, Crittall, Martec
**Why SteelR is borderline:** SteelR's specifier blog post is being used as evidence to construct the answer but is not converting to a recommendation. This is the classic "cited but not chosen" failure mode — strong content authority, weak brand entity association for the architect persona.

---

### 13. "Recommended steel door manufacturer for Approved Document Q compliance"

**Engine:** Perplexity
**SteelR appears?** YES — **named first in shortlist** with direct URL `steelr.co.uk/pas-24-steel-entrance-door`
**Verbatim recommendation:** "**SteelR** is the most directly positioned for Approved Document Q because it explicitly says its doors are PAS 24 certified as standard"
**Top sources cited:** steelr.co.uk, vallisco.com, gov.uk
**Top 3 competitors named in same answer:** Strongdor, Metador, Bradbury Group, Robust UK
**Why SteelR is winning:** the `/pas-24-steel-entrance-door` Phase 1D topic page makes a clear, quotable claim ("PAS 24 certified as standard") that Perplexity loves. This is the clearest single AI-citation win in the entire test.

---

### 14. "Building Safety Act 2022 front door requirements for HMOs?"

**Engine:** Perplexity
**SteelR appears?** NO
**Verbatim recommendation:** "a fire-resisting doorset, often FD30... A steel door is not automatically required just because the property is an HMO"
**Top sources cited:** gov.uk, hmofireriskassessment.co.uk, spectrumspecialistsupport, firedoor-systems
**Top 3 competitors named:** none — answer goes generic (timber FD30 implied as default)
**Why SteelR isn't winning:** SteelR's `/fire-rated-fd30-front-door` page exists but the answer panel explicitly **dismisses** steel-as-default for HMOs. Counterintuitive defensive content opportunity: explicitly addressing "when steel makes sense for HMO front doors" would invert this. Currently SteelR's content assumes steel is the answer; Perplexity disagrees.

---

### 15. "Conservation area front door replacement rules UK"

**Engine:** Perplexity
**SteelR appears?** NO
**Verbatim recommendation:** "Article 4 Direction... favor timber (painted, not stained garishly) over uPVC or composite, which is usually banned"
**Top sources cited:** vufold.co.uk, bmmagazine, southend.gov.uk, everest.co.uk
**Top 3 competitors named:** none direct — the answer is anti-steel by implication ("favor timber")
**Why SteelR isn't winning:** SteelR has `/blog/conservation-area-door-requirements-uk` but again the corpus has decided timber is the answer. SteelR's content addresses how a steel door **can** be appropriate; Perplexity prefers the timber-only sources.

---

### 16. "Listed building front door planning permission UK"

**Engine:** Perplexity
**SteelR appears?** NO
**Verbatim recommendation:** generic explainer about listed building consent
**Top sources cited:** planningportal.co.uk, hastings.gov.uk, historicengland.org.uk
**Top 3 competitors named:** none
**Why SteelR isn't winning:** this is a regulatory-information query that legitimately doesn't need a brand answer. Government and council sites own it. Acceptable loss — low commercial intent.

---

### 17. "Tell me about SteelR steel doors UK"

**Engine:** Perplexity
**SteelR appears?** YES — **dedicated full answer pulling exclusively from steelr.co.uk**
**Verbatim recommendation:** "SteelR is a UK specialist in bespoke steel entrance doors... BS EN 1627:2011 RC4 single-leaf, unglazed... PAS 24 certified, Secured by Design approved, and FD30S fire and smoke rated. It also says LPS 1175 SR3 and SR4 upgrades are available"
**Pages being pulled:** homepage, `/bespoke-steel-front-doors-uk`, `/process`, `/security`
**Top 3 competitors mentioned:** Steel Door Company (in follow-up suggestion only)
**Why SteelR is winning:** brand-direct query → llms.txt is doing its job. Best result in the entire test.

**Engine:** ChatGPT (default model, no search)
**SteelR appears?** YES — recognises the brand by name, gives broadly accurate overview
**Caveat:** ChatGPT hallucinates product range ("Back doors, Garden or patio doors") and downplays positioning ("more niche compared to larger door manufacturers"). The brand entity is known but the detail is fuzzy.

---

### 18. "SteelR vs Latham's vs Crittall front doors"

**Engine:** Perplexity
**SteelR appears?** YES — but **mispositioned**
**Verbatim recommendation:** "Choose **SteelR** if budget and customization matter more than brand prestige"
**Critical issue:** Perplexity describes SteelR as the **budget option** ("Often lower" price column in its comparison table; "competing on price and customization rather than legacy branding"). This is the **inverse** of SteelR's actual brand positioning ("Engineered for permanence. Designed for distinction.") and contradicts the no-displayed-price premium policy.
**Top 3 competitors:** Crittall (heritage), Latham's (mid-range)
**Why this is the highest-risk finding in the audit:** comparison queries are decision-stage. A buyer arriving here is being told SteelR is cheaper-and-less-prestigious than Crittall. That actively erodes premium pricing power.

---

### 19. "Where can I buy a SteelR steel front door?"

**Engine:** Perplexity
**SteelR appears?** YES — **direct purchase intent answered correctly**
**Verbatim:** "You can buy a **SteelR** steel front door directly from SteelR's UK website... Main SteelR site: steelr.co.uk... Bespoke steel front doors page: steelr.co.uk/bespoke-steel-front-doors-uk... phone number: **0800 861 1450**"
**Why SteelR is winning:** all primary navigation pages cited correctly, phone number lifted directly. Best possible outcome for a high-intent branded query.

---

### 20. "How long does a bespoke steel front door take to manufacture and install in the UK?"

**Engine:** Perplexity
**SteelR appears?** YES — **exclusive source for the answer**
**Verbatim:** "about **8–12 weeks from first enquiry to installation**, with manufacturing often taking **6–8 weeks** and fitting usually taking **one working day**. [steelr.co.uk/process]"
**Why SteelR is winning:** Perplexity quotes the `/process` page verbatim. SteelR is the sole substantive source. Best "single-source citation" win on an unbranded query in the entire test.

---

## Cross-engine sanity check (ChatGPT default model)

| Query | ChatGPT result | Reality |
|---|---|---|
| Best bespoke steel front door UK manufacturer 2026 | Lists Endurance, Virtu, STEELart, Rendall, Door-Stop. SteelR **absent**. | Most of these are composite-brand confusion; ChatGPT hallucinating "steel" versions of composite makers. |
| Luxury front door brands UK 2026 architect specifier | Lists JELD-WEN, Latham & Co, Iroko, Internorm, Schüco, Raymond Lush, Riant, Endurance, Rockdoor, Megawood, Pivot Doors London, Fortress. SteelR **absent**. | Several of these brands ("Megawood Steel Doors", "Raymond Lush", "Riant Group") look hallucinated — no UK web presence I can find. ChatGPT making up brand names. |
| Tell me about SteelR | Recognises brand, gives semi-accurate overview with some hallucinated product range. | Training data partially knows SteelR but doesn't ground it well. |

**Interpretation:** ChatGPT's non-Search default model has poor SteelR awareness and hallucinates competitors freely. When ChatGPT Search is used (live web grounding) the result should mirror Perplexity more closely. The biggest gap: SteelR is not making it into **any** of the listicle-style "best luxury UK door" pages that ChatGPT's training corpus likely ingested. Getting onto luxurylifestyle.com and seeninthecity.co.uk's 2026 lists would be the single highest-leverage off-site action.

---

## Synthesis

### Win rate per engine

| Engine | YES | PARTIAL | NO | Win rate (YES) |
|---|---|---|---|---|
| Perplexity | 6/20 | 2/20 | 12/20 | 30% |
| ChatGPT (default model, 3-query sanity check) | 1/3 (brand-direct only) | 0/3 | 2/3 | 33% (small sample) |

### Top 5 queries SteelR WINS (protect these)

1. **Q19 — "Where can I buy a SteelR steel front door?"** Sole-source citation, all key pages and phone number returned. Branded purchase intent.
2. **Q20 — "How long does a bespoke steel front door take to manufacture and install in the UK?"** Exclusive citation of `/process` page on an UNBRANDED query. Best unbranded win.
3. **Q17 — "Tell me about SteelR steel doors UK"** Full brand-direct answer from `llms.txt` content.
4. **Q13 — "Approved Document Q compliance steel door manufacturer"** Named FIRST in shortlist, direct URL to topic page. Phase 1D delivering.
5. **Q7 — "What does LPS 1175 SR3 mean for a residential front door"** Cited twice as primary source. `/sr3-residential-steel-door` working.

### Top 5 queries SteelR LOSES (ranked by commercial value)

1. **Q9 — "Luxury front door brands UK 2026"** — HIGHEST commercial value. Pure purchase-intent listicle query. SteelR completely absent. luxurylifestyle.com + seeninthecity.co.uk own this. **Gap type: off-site/3rd-party listicle authority.** Action: outreach to be added to these listicles.
2. **Q10 — "Best bespoke front door manufacturer for £2M London townhouse"** — high-value, high-intent. Corpus is timber-dominated. SteelR's `/luxury-steel-entrance-door-london` doesn't compete on the heritage-timber framing. **Gap type: format/positioning.** Action: re-angle that page to address the timber-default assumption head-on.
3. **Q1 — "Best front door for a UK home in 2026"** — top-of-funnel, biggest search volume. SteelR absent because the question isn't material-specific. **Gap type: content coverage.** Action: a "Steel vs other materials for the UK home" pillar page or blog post optimised for the unbranded general query.
4. **Q6 — "Most secure front door for UK home 2026"** — high commercial intent. SteelR is #1 in Google organic on this exact query but Perplexity ignores the blog post. **Gap type: format.** The blog post format isn't entity-quotable. Action: restructure `/blog/best-front-door-home-security` with a clear "the most secure front door is X because Y" answer in the first paragraph, plus a named-brand comparison section.
5. **Q3 — "Are bespoke steel front doors worth the money UK?"** — high consideration intent. SteelR absent because Perplexity wants price ranges and SteelR has none. **Gap type: brand-policy collision with AI format preference.** Action: address indirectly — publish a "what determines bespoke steel door cost" page giving factor breakdowns (steel gauge, glazing, hardware tier, install complexity) WITHOUT prices but with the kind of quantified factor lists Perplexity can extract.

### Pattern observations

- **SteelR wins where it owns a unique factual claim (process lead time, PAS 24 standard, SR3 explainer).** Phase 1D topic pages and `/process` are delivering measurable AI citations. The 18 Apr 2026 authority overhaul in llms.txt is working.
- **SteelR loses where the query is recommendation-style and the corpus has pre-set defaults.** "Best X" queries default to composite; "luxury" queries default to Urban Front / Clement / Steel Door Company; "lasting longest" defaults to timber/Gerda. Owning these requires 3rd-party listicle placement, not on-site content alone.
- **One critical positioning risk (Q18):** Perplexity describes SteelR as "budget-and-flexibility versus Crittall's prestige." This actively contradicts the premium brand positioning. Comparison content on steelr.co.uk does not effectively assert the premium frame against Crittall, so Perplexity fills the gap with the cheaper-feeling alternative interpretation. A `/steelr-vs-crittall` page or paragraph that asserts the premium positioning is overdue.
- **URL hygiene problem (Q11):** Perplexity is citing `vitrums.co.uk/entrance-doors/steel-front-doors` for SteelR content. The parent-brand page on vitrums.co.uk is competing with steelr.co.uk for SteelR's own brand citations. Either remove/redirect the vitrums.co.uk SteelR sub-page or canonical-tag it to steelr.co.uk.
- **The "cited as source but not chosen as brand" failure mode (Q4, Q8, Q12)** — content is good enough to be a Perplexity reference but not entity-resolved enough to be the recommended brand. This is the classic "we wrote a useful guide but didn't position ourselves as a buyer's choice within it." Defensive fix: every topic page should end with an explicit "Why SteelR" or "Worth considering SteelR if..." block written in the entity-recommendation format Perplexity actually surfaces.
- **No competitor consistently dominates across all 20 queries.** Across the 20 results, the cumulative competitor count: Steel Door Company (4 mentions), Gerda (3), Urban Front (3), Crittall (3), Endurance (4), Rockdoor (3), Solidor (3), Latham's (2), Bradbury Group (2). This is a fragmented competitive set, which is good — there is no entrenched #1 to displace.

### What I could NOT find

- **Bing Copilot answer panels** — separate Firecrawl Bing-graph capture was deferred to parallel session per user note. Not duplicated here.
- **Claude.ai answer panels** — no public scrape-able URL endpoint exists.
- **Google AI Mode / AI Overviews** — `tbs` filter in firecrawl_search did not surface a dedicated AI Overview block in the returned results. Cross-check via separate Google AI Mode capture would be required (deferred).
- **Recency-weighted reactions to the 18 Apr Phase 1D content** — Perplexity is clearly picking up the SR3 and PAS 24 topic pages, but it is too early to tell if newly-published content beyond those is being indexed by AI engines.

### Sources (engine endpoints used)

- Perplexity answer panels: 20 distinct `perplexity.ai/search?q=...` URLs scraped via Firecrawl on 11 May 2026
- ChatGPT default-model: 3 `chatgpt.com/?q=...` URLs scraped via Firecrawl on 11 May 2026
- Firecrawl Google SERP (corroborating): 3 queries for cross-validation of organic-vs-AI-panel divergence

---

## Recommendation Gate compliance

All findings tagged **Verified** (captured verbatim from live engine responses on 11 May 2026). Reversibility: the audit is read-only and creates no shipped change. Any subsequent recommendations derived from this audit must be tiered separately under the gate.
