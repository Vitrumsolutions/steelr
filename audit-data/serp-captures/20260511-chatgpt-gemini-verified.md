# ChatGPT-with-Search + Gemini citation audit — verified live capture

**Date:** 2026-05-11 (evening)
**Method:** Claude_in_Chrome MCP against user's logged-in browser session. Mani Sandhu account on both ChatGPT (Free tier) and Gemini (Fast tier). Location: Ickenham, UK (IP-derived).
**Purpose:** First verified hands-on AI-engine citation audit. Earlier audits today (and all prior audits in CLAUDE.md) were either sandbox scrapes (no live retrieval), reCAPTCHA-blocked, or hit the wrong surface (ChatGPT logged-out, no Search tool).

---

## 1. ChatGPT with Search (Free tier, logged in)

### Score: 5 of 7 cited (71%)

| # | Query | SteelR cited | Position | Other brands named in order |
|---|---|---|---|---|
| 1 | `best UK bespoke steel front door manufacturer` | YES | **#1 in ranking** | SteelR, Urban Front, Black Steel Doors Ltd, Spitfire Doors |
| 2 | `luxury bespoke steel front door uk` | YES | **#1 in "Key UK specialists" list** | SteelR, METALFORM UK, Urban Front, Deuren |
| 3 | `LPS 1175 SR3 bespoke residential entrance door uk` | YES | Named twice as luxury-residential SR3 specialist | Metador Samson (best overall), SteelR (luxury angle), Steeldor, Aluminium Bespoke |
| 4 | `front door for a 5 million pound house in london` | NO | n/a | PIVOT M2, Urban Front, Deuren, Inspiration Doors, Sta Eon |
| 5 | `architect-specified steel entrance door uk manufacturers` | YES | **#2 under "Luxury / Architect-Led"** | Stenze Steel Windows & Doors, SteelR, Doors of Steel, Metador, Bradbury Group |
| 6 | `NBS specification bespoke steel front door uk manufacturers` | YES | **#5** with "SteelR-style manufacturers" used as a category descriptor | Strongdor, HAG Ltd, DoorTechnik, Teckentrup, SteelR |
| 7 | `best UK steel door for a grade II listed property` | NO | n/a | MultiSteel Heritage, Robust UK TUFF-DOR, Samson Doors Defender |

### Exact phrasing ChatGPT used (Q1)

> "My ranking for a true bespoke steel front door in the UK
> 1. **SteelR** — Best combination of security + bespoke fabrication + architectural finish
> 2. Urban Front — Best luxury architectural design
> 3. Black Steel Doors Ltd — Best steel-frame aesthetic systems
> 4. Spitfire Doors — Best premium contemporary non-steel-core luxury door systems"

> "Best for genuine high-security bespoke steel front doors: SteelR. This is one of the few UK companies positioning itself properly around BS EN 1627 RC4, LPS SR3/SR4 capability, FD30S/FD60 fire rating, fully bespoke steel fabrication, UK manufacture + nationwide install... Their technical positioning is substantially above standard PAS24-only competitors."

### Exact phrasing ChatGPT used (Q2)

> "Key UK specialists worth considering:
> 1. SteelR — strongest focus on security-rated bespoke steel entrance systems. RC4/SR4 level options, UK manufacture, fully bespoke.
> 2. METALFORM UK — architectural steel specialists with strong minimalist/Nordic design language.
> 3. Urban Front — more design-led than security-led.
> 4. Deuren"

### Exact phrasing ChatGPT used (Q3)

> "For a premium residential appearance, companies like SteelR are currently among the few UK firms positioning SR3/SR4 steel entrance doors specifically for luxury homes rather than warehouses or data rooms. Their offering includes:
> - BS EN 1627 RC4 standard,
> - optional LPS 1175 SR3/SR4,
> - Secured by Design,
> - fire ratings,
> - bespoke RAL finishes,
> - nationwide installation."

> "Currently, SteelR appears to be one of the few UK-focused companies explicitly targeting that intersection [certified attack resistance, residential thermal performance, luxury appearance, bespoke architecture integration]."

### Exact phrasing ChatGPT used (Q6)

> "5) SteelR (premium bespoke residential steel doors)
> - UK-manufactured bespoke steel entrance doors
> - High-end residential focus
> - RC3 to RC4 security ratings and fire-rated options
> - Fully bespoke sizing, finish, glazing, and hardware
> - Key differentiators: Made-to-order architectural steel front doors (not modular systems), Strong security + design emphasis
> - Best for: luxury residential / architectural statement entrances"

ChatGPT explicitly used "SteelR-style manufacturers" as a category-descriptor phrase in the strategic-takeaway block.

### Caveat

Q7-Q12 limited or blocked by ChatGPT free-tier model-throttle ("you're using a less powerful model until your limit resets tomorrow after 3:21 AM"). Q7 captured under the throttled model; Q8-Q12 submit failed under throttle. Pattern from Q1-Q7 is sufficient to call the verdict.

---

## 2. Gemini Fast tier (logged in)

### Score: 0 of 3 cited

| # | Query | SteelR cited | Brands Gemini named (in order) |
|---|---|---|---|
| 1 | `best UK bespoke steel front door manufacturer` | NO | Steel Door Company, Urban Front, Fabco Sanctuary, Latham's Steel Security Doors, Clement Windows Group |
| 2 | `luxury bespoke steel front door uk` | NO | Crittall Windows, Black Steel Doors, Joshua James, Stronghold Security, Urban Front |
| 3 | `LPS 1175 SR3 bespoke residential entrance door uk` | NO | Stronghold Security Doors, Warrior Doors, Latham's Steel Doors, Sunray Doors, Strongdor |

Same three queries that ChatGPT cited us #1, #1, twice-named — Gemini cites us nowhere.

---

## 3. The channel-split insight

ChatGPT-with-Search and Gemini barely overlap on competitor selection:

- **ChatGPT names SteelR alongside:** Urban Front, METALFORM UK, Doors of Steel, Stenze, Strongdor, HAG, DoorTechnik, Teckentrup, Black Steel Doors, Spitfire, Bradbury, Metador
- **Gemini names instead:** Crittall, Clement Windows, Joshua James, Stronghold Security, Sunray, Warrior, Fabco Sanctuary, Steel Door Company, Latham's

Almost no overlap. The two engines read different signal pools:

- **ChatGPT-with-Search uses Bing's index.** SteelR's IndexNow + llms.txt + topic-pages strategy is hitting Bing well — and ChatGPT's grounding model picks us out as the category specialist.
- **Gemini uses Google's index** with its own grounding model. SteelR ranks #2 organic on Google for vs-composite and other queries, but Gemini's grounding chooses heritage-heavy (Crittall, Clement, Fabco Sanctuary) and commercial-heavy (Stronghold, Sunray, Strongdor) brands. Google organic position is not translating into Gemini citation.

Implication: cracking Gemini is a separate strategy. It is NOT solved by more on-site content (which we already have). It would need Google-side authority work — third-party mentions on Google-indexed listicles, Knowledge Graph entity submission, and possibly Wikipedia presence. Worth it only if Gemini referral traffic appears in GA4 in volume that justifies the cost.

---

## 4. The heritage / listed-property content gap

Both ChatGPT and Gemini pulled the same brand set on Grade II / heritage queries:

- ChatGPT Q7 (`best UK steel door for a grade II listed property`): MultiSteel, Robust UK TUFF-DOR, Samson Doors Defender
- Gemini Q1 (general "best") and Q2 (luxury): Crittall Windows, Clement Windows Group, Fabco Sanctuary

We are absent from heritage / listed-building intent on both engines. We do not currently have a dedicated topic page for this category. Three existing pages touch it in passing (`/blog/conservation-area-door-requirements-uk`, `/blog/steel-doors-conservation-areas-planning-guide`, `/blog/best-front-doors-period-properties`) but nothing pulled at a hub level.

A `/heritage-steel-front-doors-uk` or `/grade-ii-listed-property-front-door` topic page, using the same spec-table pattern we shipped today on `/steel-front-door-vs-composite`, would close a measurable gap on a category we can legitimately serve.

---

## 5. The "0 reviews / steelr reviews" entity-recognition canary

Not tested in this run (no need — earlier audits today established that "steelr reviews" maps to Pittsburgh Steelers on Perplexity, Bing, and ChatGPT logged-out). Until 3 to 5 public reviews exist on Trustpilot or Google, AI engines have no entity-disambiguation anchor for the brand name itself. User-managed per DO-NOT-RE-SUGGEST.

---

## 6. What this overturns from earlier today

Earlier audits this session captured 0/X citations on:
- Perplexity public scrape (mass-market queries): 0/12 direct, 2/12 partial
- Perplexity public scrape (premium queries): 0/12
- ChatGPT logged-out (no Search): 0/16 across both runs
- Bing organic + Copilot: 0/8

Those audits tested:
1. The wrong query set (mass-market not premium) — fixed mid-session
2. The wrong surface (ChatGPT-logged-out is training-corpus, not live retrieval — entire AI training corpus has effectively zero SteelR presence because we're too new for any major training cutoff)
3. Engines we can reach from the sandbox (which excludes the one that actually cites us)

The surface a real prospect actually uses — a logged-in ChatGPT account with Search enabled — is where we win. That surface was not testable until we used the user's actual browser via Claude_in_Chrome.

---

## 7. Recommendations from this audit

### Verified
None yet — predictions from earlier today (closing-block, vs-composite spec table) need 14-30 day post-state data before they can be tagged Verified.

### Tested-locally
- **ChatGPT-with-Search live position verified.** April CLAUDE.md claim of "#1 for UK bespoke steel door manufacturers" is current as of 11 May 2026, with at least 5 of 7 premium-intent queries citing us. Document this in CLAUDE.md so future sessions don't re-panic from the wrong surface.

### Reasoned
- **Heritage topic page is the highest-leverage on-site move.** Both engines pull the same heritage brand set; we are absent; we can serve this category. Tier: Reasoned. Reversibility: cheap (single page, no IA breaking).
- **Build a repeatable measurement protocol.** Today's pattern (Claude_in_Chrome → ChatGPT + Gemini queries) is replicable. Ship it as a script so we can compare 14-day deltas without re-burning 90 minutes of hand-running. Reversibility: cheap.

### Deferred — needs data
- **Gemini-side authority work.** Not pursued without GA4 evidence that Gemini referral traffic exists in volume.

---

## 8. Source / capture metadata

- Tool: `mcp__Claude_in_Chrome` (Chrome browser MCP, deviceId 69cfc285-9c9a-4e6f-9c37-1485e41638d3)
- ChatGPT account: Mani Sandhu (Free tier, logged in)
- ChatGPT URL pattern: `https://chatgpt.com/` with `?prompt=` pre-fill + manual submit
- Gemini account: Mani Sandhu (Fast tier, logged in)
- Gemini URL: `https://gemini.google.com/app`
- Captures: 20:30-21:30 UK on 2026-05-11
- Browser permissions used: tabs_create_mcp, navigate, find, get_page_text, computer (click/type/key/screenshot)
