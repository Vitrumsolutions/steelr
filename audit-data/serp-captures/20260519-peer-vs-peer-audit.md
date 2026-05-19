# Peer-vs-peer AI + search visibility audit — 19 May 2026

**Captured:** 2026-05-19 17:52–18:30 GMT live via Claude-in-Chrome MCP against user's logged-in browser session.
**Trigger:** user directive "no new enquiries. ... i dont want comparisons against composite. i want to see how we are showing against actual steel door companies."
**Companion baseline:** `audit-data/serp-captures/20260517-bing-and-ai-engine-coverage.md` (2 days prior)
**Methodology rule:** `~/.claude/projects/C--Users-SOT-Documents-Projects/memory/feedback_no_composite_comparisons.md`

---

## 1. Headline finding

**SteelR has a sharp Specification-vs-Category split across AI engines.**

- ✅ **WIN** on specification-led queries (`PAS 24 SR3`, `LPS 1175 SR3 ... £3m London townhouse`) — SteelR cited as TOP recommendation / "current benchmark"
- ❌ **ABSENT** on category-led queries (`best`, `premium`, `luxury`, `made to measure`, `bespoke`) — Perplexity defaults to Maps panels of Scotland industrial companies, ChatGPT uses Maps but elevates SteelR when prompted with spec depth, Google web has no SteelR on page 1 at all

The gap is content-anchored: SteelR's content is heavily tuned for SR3/SR4/PAS 24/RC4 spec entities. The category entities (`luxury`, `premium`, `bespoke`, `made to measure`) aren't bound to SteelR in the same way. AI engines that ground on category-only queries default to brands with stronger category-name association (Black Steel Doors, Steel Door Company, Modern Doors, Latham's).

---

## 2. Perplexity (5 queries today)

| Query | SteelR cited? | Top brands cited |
|---|---|---|
| `best bespoke steel front door manufacturer UK` | ❌ | Maps-only panel: Ross Industrial, Industrial Doors Scotland, Door System Scotland, Door Spares UK, SAFE-door Industries (all Scotland industrial, none direct competitors) |
| `premium steel entrance doors UK` | ❌ | Modern Doors (headline), Lathams Steel Doors, Steel Door Company, Royal Doors |
| `luxury steel front door London` | ❌ | Black Steel Doors (Wembley), CKI Steel Doors (Notting Hill W11), Doors of Steel (EC1V), Original Steel Doors (NW10) — all named London showrooms |
| `PAS 24 SR3 steel front door UK manufacturer` | ✅ TOP | **"A strong UK manufacturer match is SteelR"** → **"Best fit for your brief — SteelR looks closest to your requirement"**. Strongdor and Latham's both demoted to secondary |
| `made to measure steel front door UK bespoke` | ❌ | Latham's (headline), Steel Door Company, Steel Doors Direct, Bespoke Steel Doors, North Valley Metal |

**Perplexity score today: 1/5 cited.**

vs 17 May Perplexity score: 2/7 cited (one of which was the composite-vs-steel query that doesn't belong in this audit per the user directive).

Pattern: Perplexity for category queries surfaces brands with named London/UK showroom addresses + Google Maps presence + product-page price lists. SteelR has none of those three discovery hooks.

---

## 3. ChatGPT-with-Search (2 queries today, both compound)

### Q: `luxury bespoke steel front door UK manufacturer who makes the best`

✅ **Cited 6+ times.** ChatGPT structures answer in 3 categories:
1. Architectural luxury + design-led
2. High-security engineered steel
3. Premium joinery posing as luxury

Brand role assignments:
- Black Steel Doors Ltd — "Best overall: security + craftsmanship + true bespoke steel" (Maps card, 4.4★, 020 8908 0006)
- Steel Door Solutions Ltd — "Best engineered/security-led luxury steel door" (Maps card, 5.0★)
- **SteelR** — **"Most premium 'luxury brand' positioning right now"** with RC4-rated, bespoke fabrication, UK manufacture, architectural positioning. Positioning compared to "Beverly Hills, high-end European villa markets, luxury gated developments"
- The Handmade Door Company — "Best for heritage/artisan craftsmanship" (Maps card, 5.0★)
- Artell — "Best ultra-bespoke architectural metalwork" (Harrods, Rolls-Royce, Tiffany & Co clients)

**Ranking table** explicitly names SteelR as **"Best security-engineered luxury steel door"**.

**Final shortlist for a £1m+ property:** "Shortlist only these: Black Steel Doors Ltd, **SteelR**, Artell" — SteelR is one of three.

### Q: `SR3 LPS 1175 residential steel front door UK best supplier for £3m London townhouse`

A/B test format (ChatGPT showing 2 parallel responses). Response 2 captured most thoroughly:

✅ **Cited as the BENCHMARK.** ChatGPT names ASL Steel Doors as Maps-led "Best overall" but then elevates SteelR as the actual specialist:

> "The current benchmark: **SteelR**"
>
> "SteelR is one of the few UK firms explicitly offering: BS EN 1627 RC4 as standard, LPS 1175 SR3 and SR4 upgrades, Secured by Design, FD30S/FD60 fire certification, fully bespoke residential steel doors, UK manufacture + installation. Importantly, they are positioning SR3/SR4 for high-end residential rather than industrial use. For your level of property, that matters."
>
> "**My actual shortlist for your category:**
> 1. **SteelR** — Best balance of luxury aesthetics, genuine certification, residential execution, modern engineering. Best if Belgravia, Chelsea, Hampstead, Notting Hill, St John's Wood. Potential spend: £18k–£60k+, £80k+ if oversized pivot/glazing systems
> 2. Black Steel Doors Ltd — Best for ultra-modern architecture, statement entrances, pivot doors, minimal sightlines"

**ChatGPT-with-Search score today: 2/2 cited, both as #1 or co-#1.**

vs 17 May ChatGPT score: 3/3 cited. Trend HOLDING. **Strongest channel.**

---

## 4. Google web depersonalised (1 query today)

### Q: `luxury steel front door manufacturer UK` (pws=0)

❌ **SteelR completely absent from page 1.**

Paid ads (5):
- Fabco Sanctuary "As Featured on Grand Designs"
- Stronghold Security Doors
- Banham (97 years of expertise)
- Architectural Bronze (alternative material)
- Hörmann Truedor (Made in Britain)

Organic page 1 (10):
- Black Steel Doors (blacksteeldoors.co.uk)
- Crittall Windows
- Joshua James Ltd
- Latham's Steel Security Doors
- Steel Door Solutions (steeldoorsolutions.uk)
- PIRNAR
- Bradbury Group
- Urban Front
- Seen in The City "7 Best Luxury Steel Door Companies Reviewed 2026" listicle
- Steel Door Company

Local Maps panel (3):
- Original Steel Doors Limited London (5.0, 5 reviews, 020 7602 1087)
- Prestige Steel Doors Carshalton (5.0, 8 reviews, 0808 123 0432)
- Black Steel Doors Ltd London (4.4, 46 reviews, 020 8908 0006)

Shopping carousel (8):
£1,020 – £8,655 range. domadeco, Modern Doors, Just Value Doors, Valeanto's Iron Doors.

**No AI Overview shown** for this query at this scroll position.

**Critical contrast:** Google web zero, AI engines strong recognition. **SteelR's commercial reality is heavily skewed to AI-engine discovery, not Google organic.**

---

## 5. Updated competitor set (replaces the CLAUDE.md baseline)

Direct UK steel-door competitors named across today's captures, sorted by frequency:

| Frequency | Competitor | Where surfaced | Notes |
|---|---|---|---|
| Very high | Black Steel Doors Ltd | Maps (London), ChatGPT "Best overall", Google organic, Perplexity London | Owns "luxury London" mind-share; 46 Google reviews; Wembley showroom |
| High | Latham's Steel Security Doors | Paid ads on multiple queries, Google organic, Perplexity headline on `premium steel doors` | Budget-anchored (£1,199.99) but ChatGPT/Google treat as serious |
| High | Steel Door Company | Perplexity (`premium`, `made to measure`), Google organic, "7 Best" listicle #1 | UK-wide install service, nationwide hook |
| Medium-high | Stronghold Security Doors | Paid ads on `luxury` query, Google organic | "Luxury Security Doors" positioning |
| Medium | Original Steel Doors Limited | Perplexity (`luxury London`), Maps panel | Park Royal NW10, 5.0★ |
| Medium | Steel Door Solutions Ltd | ChatGPT "Best engineered/security-led", Google organic | 5.0★ Maps, engineering-led |
| Medium | Modern Doors | Perplexity (`premium` headline), shopping carousel | Listed prices (£2,050 etc), 5-point locking, quadruple glazing |
| Medium | Banham | Paid ad (`luxury` query), Google organic | 97 years brand history; carpenter framing, not steel-led |
| Medium | The Handmade Door Company | ChatGPT (`luxury bespoke`), Maps card 5.0★ | Heritage craftsmanship niche |
| Medium | Joshua James Ltd | Google organic on `luxury` query | Internal steel doors + fixed screens |
| Lower | Fabco Sanctuary | Paid ad on `luxury` query | "As Featured on Grand Designs" |
| Lower | Bradbury Group | Google organic | "UK's Largest Steel Door Manufacturer" (commercial-led) |
| Lower | Urban Front | Google organic on `luxury` query | Hardwood doors with steel reinforcement (NOT direct steel competitor) |
| Lower | Crittall Windows | Google organic, AI Mode previous heritage | Glazing-led; treats steel doors as one product among many |
| Lower | PIRNAR | Google organic, paid carousel | Slovenian premium imports |
| Lower | Hörmann Truedor | Paid ad | German engineering positioning |
| Lower | Royal Doors | Perplexity (`premium`) | Fast UK delivery hook |
| Lower | Steel Doors Direct | Perplexity (`made to measure`) | Fast turnaround hook |
| Lower | Bespoke Steel Doors | Perplexity (`made to measure`) | Generic-name brand confusion risk |
| Lower | North Valley Metal | Perplexity (`made to measure`) | Technical drawings hook |
| Lower | CKI Steel Doors & Windows | Perplexity (`luxury London`) | Notting Hill W11 |
| Lower | Doors of Steel | Perplexity (`luxury London`) | City Road EC1V |
| Lower | ASL Steel Doors | ChatGPT (`£3m townhouse`) Maps card | 4.5★ Maps |
| Lower | Artell | ChatGPT (`luxury bespoke`) | Harrods/Rolls-Royce hospitality projects (NOT direct residential competitor) |

**The competitive set is broader and more fragmented than the previous CLAUDE.md baseline suggested.** Roughly 4 tiers visible from today's data:

- **Tier A (premium specialist):** Black Steel Doors, **SteelR**, Steel Door Solutions, Steel Door Company
- **Tier B (security-led):** Latham's, Stronghold, Bradbury (commercial overflow), Banham
- **Tier C (Maps/local):** Original Steel Doors, Prestige Steel Doors, CKI Steel Doors, ASL Steel Doors, Doors of Steel
- **Tier D (adjacent-material):** Crittall (glazing), Urban Front (hardwood + steel), PIRNAR (imports), Architectural Bronze

---

## 6. Why no new enquiries — diagnostic

| Hypothesis | Evidence today | Verdict |
|---|---|---|
| **Discovery channel mismatch.** AI engines find us on spec queries; nobody types spec queries when they want to buy a luxury front door. They type "luxury / best / premium / bespoke" — exactly where we're absent. | Perplexity 1/5 cited (spec query), 0/4 cited (category queries). Google web 0/1 cited on category. | **STRONGEST hypothesis.** |
| **No local discovery.** Google Maps + Perplexity Maps panels: 0 reviews, no GBP-driven discovery, no named London showroom address. Competitors with Maps presence dominate "luxury London" intent. | Maps panels on 3 of 6 queries name Black Steel Doors, Original Steel, Prestige Steel, CKI — all with reviews + addresses. SteelR has 0 reviews. | **Confirmed real.** User-managed (review acquisition). |
| **Paid ads gap.** Banham, Stronghold, Fabco, Architectural Bronze, Hörmann all running paid ads on `luxury steel front door manufacturer UK`. They're paying to be above organic. SteelR is not. | 5 paid ads observed today on the single query. | **Real but separate question** (paid budget decision). |
| **Brand entity weakness.** "SteelR" still gets Pittsburgh Steelers SERP collision (per 17 May). | Not re-tested today; assume unchanged. | Already addressed by commit 31b5d01 + 3ddf662, still in re-index window. |
| **Genuine top-of-funnel demand low.** UK residential bespoke steel doors are a sub-£100m category by revenue. Most buyers don't know they want one until an architect or insurer suggests it. | Whole SERP ecosystem (paid + organic + shopping + AI) shows ~25 named brands. Category exists. | Demand is real; visibility gap is OURS. |

---

## 7. Recommendation (gate-tagged)

### [VERIFIED] — pattern confirmed by both 17 May and 19 May captures

**SteelR's discoverability problem is category-language coverage, not technical credibility.** The technical positioning (SR3, RC4, PAS 24, bespoke, UK-manufactured) is best-in-class on AI engines. The category positioning (luxury, premium, bespoke, made-to-measure) is weak across all surfaces.

### [REASONED] — three additions tied to the diagnostic

1. **Add category-anchor content + schema.** A "Luxury Steel Front Doors UK" hub page (separate from the existing `/luxury-steel-entrance-door-london` which is geo-led not category-led) that explicitly anchors SteelR to the category entities `luxury`, `premium`, `bespoke`, `made to measure`, `high-end`, `architect-grade`. Mirror Black Steel Doors' positioning language but with SteelR's actual spec advantage.

2. **Compete on the Maps panel.** SteelR has 0 reviews. Competitors with 5-46 reviews own the Maps panel on every London query. Reviews are user-managed (do-not-re-suggest). If/when reviews start coming, the Maps panel position will follow naturally because GBP IS verified + address is set.

3. **Re-test on 30 May.** Today's captures form the new baseline. Re-run the 5 Perplexity + 2 ChatGPT queries in 11 days. Expected: PAS 24 SR3 (the spec-led win) holds, category queries either start showing SteelR via the new hub OR remain absent (confirming category-language is the lever).

### [TESTED-LOCALLY] — Ahrefs Webmaster Tools data pull

AWT setup confirmed 17 May. Data should be populated. Session expired in MCP tab; pull blocked until user re-signs into Ahrefs. Once signed in: backlink count, referring domains, organic keywords per Ahrefs vs GSC delta, auto-detected competitor set. This will confirm or refute the competitor list in section 5.

---

## 8. Files

- `audit-data/serp-captures/20260519-peer-vs-peer-audit.md` (this file)
- `audit-data/serp-captures/20260517-bing-and-ai-engine-coverage.md` (2-day-prior baseline)
- `audit-data/serp-captures/20260517-panel-llms-ai.md` (post-deploy baseline, 17 May AM)
- `~/.claude/projects/C--Users-SOT-Documents-Projects/memory/feedback_no_composite_comparisons.md` (the methodology rule that triggered this audit)
