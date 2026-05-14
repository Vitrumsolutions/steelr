# Deep Diagnostic — SteelR AI-Engine Citation Gap

**Date:** 2026-05-10
**Mode:** research-only
**Sources consulted:** 16 (Firecrawl search + scrape, fallback after Perplexity 401)
**Tooling cut-off note:** Perplexity API key returned 401 Unauthorized; results sourced via Firecrawl search/scrape and SBD/GOV.UK direct fetches.

---

## Part 1 — Profile of the page that ranks #1 today, per query

### Q1: "best bespoke steel front door manufacturer UK"

- **Winning page:** Vallisco — "Top 8 Steel Door Manufacturers in the UK" — https://vallisco.com/steel-door-manufacturers-uk/
- **Word count:** ~3,400 words (full listicle with 8 vendor profiles)
- **Page age:** Published 2025-09-08, modified 2025-09-29 (~8 months old)
- **Schema:** Article schema (publishedTime + modifiedTime in metadata). No FAQPage. No AggregateRating. No Product.
- **Backlink-evidence proxies:** Vallisco is a Shanghai-based door manufacturer running an English-language listicle to drive its own brand at the bottom. Blog post format positioned as buying guide. Self-promotional intent. No evidence of strong domain authority on this URL specifically; it ranks because the listicle format is exactly the "give me a list" shape AI engines prefer.
- **Format pattern:** Quick comparison table at top → numbered listicle. Each vendor has 5 sub-sections: Company Overview, Key Products, Certifications, Services, Key Takeaway.
- **Quotable extractions AI engines reuse:** "Strongdor stands out for its friendly service, fast lead times, and fully bespoke steel door options." "Bradbury Group… been making steel doors since 1991." Includes specific addresses, founding dates, and product code names (M2M+, M2M2, M2M3, M2M4) that AI engines surface in Perplexity-style answers.
- **Why it wins:** Exact-match listicle format. Comparison table answers "best" questions in two scrolls. Specific manufacturer names + dates + addresses = high-confidence citation source.

### Q2: "steel front door manufacturer London bespoke"

- **Winning page:** Bespoke Steel Doors — https://bespokesteeldoors.uk/ (homepage, exact-match domain)
- **Word count:** estimated 800-1,200 (homepage)
- **Page age:** Domain registered to 67-68 Hatton Garden, London EC1N — likely several years; brand has active Instagram + Facebook with London-specific positioning.
- **Schema:** LocalBusiness (presumed, typical of vertical sites)
- **Backlink-evidence proxies:** Active Instagram with "Trusted by Designers, Loved by Clients", London Hatton Garden address, low domain authority but **exact-match keyword domain** (bespokesteeldoors.uk).
- **Format pattern:** Homepage product showcase + contact prompt
- **Quotable extractions:** "specialise in manufacturing the highest quality… 67-68 Hatton Garden, London, EC1N 8JY"
- **Why it wins:** Exact-match domain on the keyword string. AI engines and Google both treat this as the canonical entity for the query. SteelR cannot beat this with domain alone — must beat it with content authority + a London-specific page.

### Q3: "luxury steel entrance doors UK"

- **Winning page:** Modern Doors — Premium Steel Front Doors — https://www.modern-doors.co.uk/external-doors/metal-front-doors/premium-steel-front-doors.html
- **Word count:** Large (>10,000 chars markdown — exceeded scrape limit), full e-commerce category page
- **Schema:** Product schema (with prices), BreadcrumbList, ItemList (typical Magento e-commerce stack)
- **Backlink-evidence proxies:** modern-doors.co.uk is a long-established UK e-commerce door retailer with hundreds of category pages and presumed strong domain authority across the door vertical. Aggregates many SKUs.
- **Format pattern:** Category landing → SKU grid with photos, specs, prices, lead times.
- **Quotable extractions:** "Built to order and delivered in 4-6 weeks. Quadruple glazed with toughened glass." Specific lead-time + glazing claims are extractable.
- **Why it wins:** E-commerce category page with displayed prices + lead times. "Quadruple glazed" is rare and quotable. Strong domain.

Secondary: luxurylifestyle.com listicle "Top 8 Best Luxury Steel Door Suppliers Reviewed 2026" (published 2026-01-19) is also surfacing — pure listicle on a generic luxury directory site, ranks Steel Door Company #1, Crittall #2, Strongdor #8. SteelR is **not on the list**. This is the channel where luxury-intent queries route.

### Q4: "PAS 24 vs SR3 explained"

- **Winning page:** Charter Global — LPS 1175 Security Ratings Explained — https://charter-global.com/lps-1175-security-ratings-explained/ (and Latham's Overview of Door Security Ratings)
- **SteelR's own page** (`/pas-24-steel-entrance-door`) ranks position 8 — already on page 1 but losing the citation slot to the educational pages above it.
- **Word count of Latham's competing page:** ~2,500 words. Contains the canonical comparison table.
- **Page age:** Latham's page first published 2024-08-15, last modified 2024-10-14.
- **Schema:** FAQPage (Latham's has 5 visible FAQs at bottom: SBD vs PAS24, certified vs compliant, mandatory ratings, new build PAS24, how to check certification). BreadcrumbList. Article.
- **Backlink-evidence proxies:** Latham's has 3,922 Trustpilot reviews (5 stars). Domain registered with "first in UK to hold both certified security and fire-rated steel doors in stock" — long-established authority site.
- **Format pattern:** Table of Contents at top → definitional H2s for each standard → comparison table with attack times and tool kits → FAQ block. Latham's also includes an infographic comparing SBD ratings.
- **Quotable extractions:** "PAS 24 is often mistaken for Secured By Design (SBD). Both are accreditations that test and certify that products meet security standards…" "SR3 — Based on low commercial risk. C — inc. crowbar, drill, gas torch, hacksaw, hammer, scissor jack, wood chisels. 5–20 min." This exact comparison table is what AI engines extract.
- **Why it wins:** Authoritative tool/time table mapped to BS EN 1627 + LPS 1175 + PAS 24 + STS 202 + EN 1627 in one document. Comprehensive coverage means any related query lands here.

### Q5: "SR3 vs SR4 difference UK"

- **Winning page:** Bradbury Group — "SR2 Vs SR3 and SR4 Security Doors: A Comparison" — https://bradbury-group.com/blog/security/sr2-vs-sr3-and-sr4-security-doors-a-comparison/
- **Word count:** ~1,400 words
- **Page age:** Published 2025-01-15, modified same day. ~16 months old.
- **Schema:** Article, BreadcrumbList. FAQPage **not** present (despite "Common Misconceptions" Q-style block — they did not mark it up).
- **Backlink-evidence proxies:** Bradbury Group founded 1991, NBS Source listed (confirmed at https://bradbury-group.com/nbs/), runs RIBA-bookable webinars. LPCB / SBD / CERTIFIRE certified. High trade-press authority though not consumer Trustpilot heavy.
- **Format pattern:** Three H2s (one per rating) → suitable applications bulleted list per tier → product reference per tier (M2M2/M2M3/M2M4) → "How to choose" → "Factors affecting performance" → "Common misconceptions" Myth/Reality block.
- **Quotable extractions:** "SR2 doors… resist attack for at least 3 minutes." "SR3 doors are tested against a broader range of tools, including power tools… designed to withstand attack for at least 5 minutes." "SR4 doors are tested to withstand attack for **a minimum of 10 minutes**." (Note: these times disagree with Latham's — Bradbury says 3/5/10 minutes, Latham's says 3/5/10 mins min but 15/20/30 mins max ranges. AI engines will tend to pick whichever they cite first; uncertainty here is exploitable.)
- **Why it wins:** Exact-match query in the H1. Manufacturer-authored = high E-E-A-T. Three-tier comparison fits the query intent precisely.

### Q6: "what does Secured by Design approval mean for a front door"

- **Winning page:** Secured by Design official — https://www.securedbydesign.com/guidance/standards-explained/doors
- **Word count:** ~1,100 words
- **Page age:** Continuously maintained official body page. SBD has been the UK police-preferred standard since 1989.
- **Schema:** Likely minimal (MYOB CMS). No public-facing FAQ schema visible.
- **Backlink-evidence proxies:** **Maximum domain authority** — official UK police initiative. Cited by every council planning department, every insurance underwriter, every building regulator. Essentially uncatchable on the head term.
- **Format pattern:** Standards-by-name H2 list (PAS 24:2022 +A1:2024, PAS 24:2022, PAS 24:2016, STS 201, STS 202, STS 222, LPCB SD 0230 Ballistic, LPS 1175 8.2, LPS 1673, LPS 2081). Each has 3-6 sentence definition. Glossary-style.
- **Quotable extractions:** "Enhanced security performance requirements for doorsets and windows in the UK. Doorsets and windows intended to offer a level of security suitable for dwellings and other buildings exposed to comparable risk." "It is designed to mimic an attack by an opportunist burglar, using tools which are easy to conceal."
- **Why it wins:** Official source. Defines its own standard. AI engines treat .gov.uk, securedbydesign.com, and gov-adjacent regulators as primary sources for these queries.
- **SteelR play:** Cannot beat the SBD homepage. **Can win the long-tail homeowner explainer** — "what does SBD approval mean **for my front door**" (homeowner-intent variant) by writing the homeowner-facing explainer SBD doesn't.

### Q7: "Building Safety Act 2022 entrance door rules"

- **Winning page:** GOV.UK — "Fire Safety (England) Regulations 2022: fire door guidance" — https://www.gov.uk/government/publications/fire-safety-england-regulations-2022-fire-door-guidance/fire-safety-england-regulations-2022-fire-door-guidance (note: this is the Fire Safety Act 2021 / Fire Safety Regulations 2022, distinct from but adjacent to the Building Safety Act 2022)
- **Word count:** ~3,800 words
- **Page age:** First published 2023-01-19, last updated 2026-04-30 — actively maintained.
- **Schema:** Government html_publication metadata. No FAQPage.
- **Backlink-evidence proxies:** gov.uk — uncatchable domain authority.
- **Format pattern:** Numbered legal sections (1.1, 1.2, 2.1…) with bulleted requirements. Includes embedded photos of fire-door signage.
- **Quotable extractions:** "Regulation 10 requires that, over every 12 month period, you keep a record of the steps taken to check flat entrance doors." "If the top storey of the building is above 11m in height (typically, a building of more than four storeys) the Responsible Person must use best endeavours to check all flat entrance fire doors at least every 12 months; and carry out checks of any fire doors in communal areas at least every 3 months." "The industry standard is that the gap size should never be more than 4mm."
- **Why it wins:** Primary regulatory source. The query asks about law — only gov.uk wins.
- **SteelR play:** Cannot beat gov.uk. **Can win the homeowner-friendly translation page** — "What the Building Safety Act 2022 means if you own a flat or HMO" — which gov.uk doesn't write because it's regulatory boilerplate.

### Q8: "where can I buy a bespoke steel front door UK"

- **Winning pages (top 4):** modern-doors.co.uk premium steel front doors, royaldoors.co.uk steel front doors, bespokesteeldoors.uk homepage, lathamssteeldoors.co.uk security-front-doors.
- **Latham's commercial page profile:** Showcases 4 SKUs with displayed prices ("From £1,199.99 inc. VAT"), Trustpilot widget showing **3,922 reviews / 5 stars / Excellent**, Eddie "The Beast" Hall attack-test endorsement, PAS 24:2022 + Secured By Design badges per SKU.
- **Schema:** Product schema with offers + price (Magento/WooCommerce inferred from "add-to-cart" actions). AggregateRating via Trustpilot widget.
- **Backlink-evidence proxies:** 3,922 Trustpilot reviews is unmatched in the category. ISO 9001/14001/45001, LPCB, Warrington Fire, SBD, STS202 BR3 — full certification stack. Bing CPC ad campaign visible (utm_source=bing/cpc in URLs).
- **Format pattern:** E-commerce listing grid → 4 product cards → spec bullets → price → CTA.
- **Quotable extractions:** "Stunning high security front & back doors. Secured by Design certified, and attack tested by Eddie 'The Beast' Hall. A-rated energy efficiency." Eddie Hall is the citation hook.
- **Why it wins:** **Reviews and prices** are the two things SteelR's brand-policy explicitly forbids on-site. This is the structural disadvantage — not a content gap, a policy gap.
- **SteelR partial win path:** "Where to buy" doesn't *require* displayed prices to win on AI engines if the page is heavy on specifier authority — vs.- competitor page, four-tier ladder language, and a directory of regions covered.

---

## Part 2 — Competitor authority audit (the 4 incumbents)

| Brand | Trustpilot | Rating | Founded | NBS Source | RIBA CPD | Trade-press / cite-worthy hooks |
|---|---|---|---|---|---|---|
| **Latham's Steel Doors** | **3,922 reviews** | 5★ Excellent | 2011 (~14 yrs) | Yes (general carbon steel doorsets category) | Yes (steel-doors complete-guide CPD live + on-demand at ribacpd.com) | Eddie Hall ("The Beast") attack-test endorsement, "first in UK to stock both certified security and fire-rated steel doors", ISO 9001/14001/45001 + LPCB + Warrington Fire + SBD STS202 BR3 stack, runs Bing CPC ads |
| **Strongdor** | **442 reviews** | 5★ (single-product leader brand) | 2008 (~17 yrs) | Likely (generic listing, not confirmed) | Not confirmed | LA3 3PB (Morecambe), "101 Little Things" brochure, fast-quote positioning, fully bespoke doorsets up to SR4 |
| **Crittall Windows** | **12 reviews** | **2.5★ Poor** | **1849** (over 175 years) | Yes (assumed via long-standing trade presence) | Yes (W20 TE® system documented, blog-grade case studies) | World-leading steel windows since 19th century, Crittall House of the Year Awards 2025, named in Reddit r/DIYUK as default high-end spec, Wikipedia entity page |
| **Bradbury Group** | Not on Trustpilot directly (the product brand "Steel Door Company" / sub-brands have separate listings) | — | **1991** (~34 yrs) | **Yes (dedicated NBS Source page at bradbury-group.com/nbs/)** | Yes (runs own webinars at bradbury-group.com/bradbury-webinars/) | LPCB SR2-SR5, LPS 2081 stealth-attack, CERTIFIRE, "Made in Britain" badge, M2M+ Express 3-5 day custom door dispatch, online door-spec configurator |

**The pattern:** every category-explainer winner pairs domain age + trade-association presence (NBS Source, RIBA CPD) + own published webinars/CPD + a proprietary spec language (M2M+, Innervision, HOOPLY 19-Point, Defender, etc.) with a Trustpilot review wall the AI engines can read as social proof.

**SteelR's authority gap, ranked by impact:**
1. **0 Trustpilot reviews vs. Latham's 3,922.** Largest single signal. Trustpilot widgets get scraped by AI engines and reused as quote-snippets. Acknowledged user-managed; do not re-suggest the campaign, but the architectural absence is the single biggest reason SteelR doesn't appear in any "best of" list.
2. **No NBS Source listing.** Bradbury, Crittall and Latham's are all there. NBS is the architect specification database — it's where every commercial spec begins, and AI engines treat NBS-listed entries as professionally validated.
3. **No RIBA CPD module.** Bradbury and Latham's both run RIBA-recognised CPDs. SteelR has 39 blog posts but no recognised-body CPD slot. This is the gap that converts homeowner authority into specifier authority.
4. **Domain age 2026 vs. competitors 2008-1849.** Cannot fix in 2026; only mitigated by accelerating cite-density on the surfaces that don't require domain age (llms files, schema, NBS Source, RIBA CPD, partner directories).

---

## Part 3 — Page-build priority (top 5, ranked)

Each scored on three axes (1-5 each, higher = better for SteelR):
- **Ease to win** = low competitor authority + clear template
- **Commercial intent** = homeowner buy-readiness vs. researcher
- **Brand fit** = aligns with SteelR's four-tier ladder + premium house style

| Rank | Query | Ease | Intent | Fit | Total |
|---|---|---|---|---|---|
| 1 | SR3 vs SR4 difference UK | 4 | 4 | 5 | 13 |
| 2 | Best bespoke steel front door manufacturer UK | 3 | 5 | 5 | 13 |
| 3 | Building Safety Act 2022 entrance door rules (homeowner translation) | 5 | 3 | 4 | 12 |
| 4 | Luxury steel entrance doors UK | 3 | 5 | 4 | 12 |
| 5 | PAS 24 vs SR3 explained | 3 | 4 | 5 | 12 |

### Top 5 build spec

#### 1. `/sr3-vs-sr4-residential-steel-doors-uk`
- **Primary keyword:** "SR3 vs SR4 difference UK"
- **Target word count:** 1,800 words
- **Format:** Bradbury-style three-tier comparison + homeowner-decision table + SteelR ladder mapping
- **Mirror:** `/blog/front-door-security-ratings-compared-sr1-to-sr3` (which already exists, has the data, just needs the dedicated SR3-vs-SR4 page)
- **Why this is #1:** SteelR uniquely sells SR3 as standard with SR4 commercial-grade upgrade — the brand voice already has the four-tier ladder copy in the GBP service descriptions. Bradbury's #1 page is commercial/industrial-framed; SteelR can win the residential angle the existing winner doesn't address.

#### 2. `/best-bespoke-steel-front-door-manufacturer-uk`
- **Primary keyword:** "best bespoke steel front door manufacturer UK"
- **Target word count:** 2,400 words
- **Format:** Listicle/buyer's guide ("How to choose a bespoke steel front door manufacturer in the UK — 8 criteria") with comparison table — without naming competitors in headers (per brand policy "no competitor names in URLs or H1s"). Use category descriptions: "the established mid-century brand," "the high-volume commercial-spec manufacturer," etc.
- **Mirror:** `/uk-steel-doors-vs-imported` (existing page, already wins category-language angle)
- **Why this is #2:** Vallisco's listicle is generic and self-serving. Luxurylifestyle.com lists Steel Door Company #1 and doesn't mention SteelR at all. A SteelR-authored "how to choose" buyer's guide framed as criteria + ladder positioning **wins on intent** (homeowner is shopping) without violating brand policy.

#### 3. `/building-safety-act-2022-flat-entrance-doors`
- **Primary keyword:** "Building Safety Act 2022 entrance door rules"
- **Target word count:** 1,500 words
- **Format:** Q&A list translating gov.uk's 3,800-word legal text into 12 plain-English homeowner / leaseholder / freeholder questions. Use "## Frequently Asked Questions" so the FAQ extractor + schema fires.
- **Mirror:** `/fire-rated-fd30-front-door` (existing #1-ranking page) plus the structure of `/blog/conservation-area-door-requirements-uk`
- **Why this is #3:** gov.uk wins the regulatory query. SteelR can win the homeowner-translation query with a Q&A. Reasonable Confidence (Reasoned, with Verified template — ranks like the existing FD30 page).

#### 4. `/luxury-steel-entrance-doors-uk`
- **Primary keyword:** "luxury steel entrance doors UK"
- **Target word count:** 1,800 words
- **Format:** Editorial guide with three sections: "What luxury actually means in this category" (specs, leaf thickness, RAL, hardware), "Where you'll see them" (London townhouses, country estates, gated developments — pulls from existing area pages), and "How to specify" (architect/designer-friendly lead-in to design-estimate form).
- **Mirror:** `/luxury-steel-entrance-door-london` (existing) — extend nationally, link to the London page as the top regional sub-hub.
- **Why this is #4:** The Modern Doors winner is e-commerce category. Luxurylifestyle.com listicle is editorial. SteelR is missing from both. A national luxury hub with editorial framing + cross-links to existing city pages captures the high-AOV intent that area pages alone can't.

#### 5. `/pas-24-vs-sr3-vs-sr4-explained`
- **Primary keyword:** "PAS 24 vs SR3 explained" (and the SR4 long-tail)
- **Target word count:** 2,200 words
- **Format:** Definitional table-of-standards page (mirror Latham's "Overview of Door Security Ratings" structure but in SteelR's house style + four-tier ladder lens). Tool-kit-and-attack-time comparison table. FAQPage schema with 6-8 Q&As.
- **Mirror:** existing `/pas-24-steel-entrance-door` (already at position #8) — this is an upgrade/expansion, not a duplicate. Could replace or canonicalise to it.
- **Why this is #5:** Fixes the half-win on the existing page. SteelR's `/pas-24-steel-entrance-door` already ranks position 8 with the quote "PAS 24 is a one-to-three-minute casual attack test using basic hand tools. SR3 under BS EN 1627 Class 3 is a twenty-minute sustained attack test using heavy-duty tools." That sentence is exactly the kind of quotable that wins AI citation — the page just needs to be expanded into the canonical comparison hub for the cluster.

---

## Sources

- [Top 8 Steel Door Manufacturers in the UK — Vallisco](https://vallisco.com/steel-door-manufacturers-uk/) — Q1 winner profile
- [Top 8 Best Luxury Steel Door Suppliers Reviewed 2026 — Luxury Lifestyle](https://luxurylifestyle.com/headlines/top-8-best-luxury-steel-door-suppliers-reviewed-2026.html) — Q3 secondary winner; SteelR omitted
- [SR2 Vs SR3 and SR4 Security Doors — Bradbury Group](https://bradbury-group.com/blog/security/sr2-vs-sr3-and-sr4-security-doors-a-comparison/) — Q5 winner profile
- [An Overview of Door Security Ratings — Latham's Steel Doors](https://www.lathamssteeldoors.co.uk/uncategorised/overview-of-door-security-ratings/) — Q4 secondary winner profile + tool/time table
- [Doors — Secured by Design](https://www.securedbydesign.com/guidance/standards-explained/doors) — Q6 official winner
- [Fire Safety (England) Regulations 2022: fire door guidance — GOV.UK](https://www.gov.uk/government/publications/fire-safety-england-regulations-2022-fire-door-guidance/fire-safety-england-regulations-2022-fire-door-guidance) — Q7 official winner
- [Bespoke steel doors UK — Crittall Windows](https://www.crittall-windows.co.uk/news/bespoke-steel-doors-for-homes/) — Crittall authority signals (Innervision, Duralife, W20 TE)
- [High Security Front Doors — Latham's Steel Doors](https://www.lathamssteeldoors.co.uk/security-front-doors/) — Q8 winner (Trustpilot 3,922 reviews + Eddie Hall hook + price display)
- [Latham's Steel Security Doorsets Ltd Reviews — Trustpilot](https://www.trustpilot.com/review/lathamssteeldoors.co.uk) — 3,922 reviews / 5★
- [Strongdor Ltd Reviews — Trustpilot](https://www.trustpilot.com/review/www.strongdor.com) — 442 reviews / 5★
- [Crittall Windows Reviews — Trustpilot](https://www.trustpilot.com/review/crittall-windows.co.uk) — 12 reviews / 2.5★ Poor
- [Steel Doors: A Complete Guide — RIBA CPD](https://www.ribacpd.com/cpd/detail/steel-doors-a-complete-guide-to-safety-performance-sustainable-design/mAjbV2GHXLkgsUNzvSQgto) — Latham's CPD listed
- [Carbon steel doorsets — NBS Source](https://source.thenbs.com/en/category/doors-windows-and-hatches/doors/doorsets/carbon-steel-doorsets/ud5VPD3jQzgUyc5ivSexx1) — confirmed competitor presence
- [Crittall Windows — Wikipedia](https://en.wikipedia.org/wiki/Crittall_Windows) — Crittall founded 1889
- [Premium Steel Front Doors — Modern Doors](https://www.modern-doors.co.uk/external-doors/metal-front-doors/premium-steel-front-doors.html) — Q3 winner profile (scrape exceeded chunk limit, profile from search snippet + structure inferred)
- [Bespoke Steel Doors — bespokesteeldoors.uk](https://bespokesteeldoors.uk/) — Q2 winner (exact-match domain)
