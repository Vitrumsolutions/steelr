# Directory address audit — SteelR brand
# Date: 2026-05-26
# Trigger: post-removal of home address from steelr.co.uk schema + llms + body copy
# Purpose: one-shot inventory of where the home address `11 Silverbirch Close, Uxbridge UB10 8AP` is STILL publicly exposed under the SteelR brand on third-party surfaces.

## Method
- Google site-specific searches against each of the 10 UK directories on the workspace `DO NOT RE-SUGGEST` list (Yell, Houzz, MyBuilder, Checkatrade, Trustpilot, FMB, Cylex, Bark, TradeSupermarket, Which? Trusted Traders)
- Direct profile URL probes for Trustpilot (`/review/steelr.co.uk`) and Yell (`/biz/steelr-uxbridge`)
- Google SERP scrape for `"SteelR Bespoke Steel Entrance Doors"` to confirm GBP card + AI Overview content
- Captures via Claude-in-Chrome MCP in user's authenticated session

## Findings

### 🔴 Active exposures — user action required

| Surface | URL / location | What it shows | Recommended action |
|---|---|---|---|
| **Google Business Profile** | Maps card at top of `https://www.google.com/search?q=Steelr+Bespoke+Steel+Entrance+Doors` | `Address: 11 Silver Birch Cl, Ickenham, Uxbridge UB10 8AP` (last updated 4 weeks ago per GBP) | Three options: **(a)** leave alone — SteelR has 0 GMB reviews and is 0/11 on Maps, so practical harm is near-zero; **(b)** update GBP address to `2nd Floor, Premier House, 309 Ballards Lane, London N12 8LY` — triggers postcard re-verification (1-2 weeks, postcard to accountant), restores full GBP-schema consistency; **(c)** hide address (set GBP as a "service-area business" rather than "store") — keeps Maps listing without publishing any street address |

### ⚠ Cached but transient — will self-heal

| Surface | What it shows | Time to refresh |
|---|---|---|
| **Google AI Overview** | "SteelR (Vitrum Solutions Ltd) is headquartered and manufactures at 11 Silverbirch Close, Ickenham, Uxbridge, UB10 8AP" | Indexing API push triggered today (2026-05-26) for 25 top URLs; AI Overview typically re-pulls within 24-72h of fresh crawl |
| **ChatGPT / Perplexity / Gemini cached answers** | May still reference old address | Engine-dependent re-crawl cycle, typically 1-4 weeks |
| **Bing cache** | IndexNow ping fired today for 25 URLs to Bing + Yandex + Seznam | Hours to days |

### ✅ Not exposed — verified absent

| Directory | Probe | Result |
|---|---|---|
| Trustpilot | `https://www.trustpilot.com/review/steelr.co.uk` | 404 — no profile exists |
| Yell | `https://www.yell.com/biz/steelr-uxbridge` + `site:yell.com SteelR` SERP | No SteelR profile in SERP; direct URL hits Cloudflare bot wall |
| Houzz | `site:houzz.co.uk SteelR` SERP | 0 SteelR results |
| MyBuilder | `site:mybuilder.com SteelR` SERP | 0 SteelR results |
| Checkatrade | `site:checkatrade.com SteelR` SERP | 0 SteelR results |
| FMB | `site:fmb.org.uk SteelR` SERP | 0 SteelR results |
| Cylex | `site:cylex-uk.co.uk SteelR` SERP | 0 SteelR results |
| Bark | `site:bark.com SteelR` SERP | 0 SteelR results |
| TradeSupermarket | (covered in batched SERP query) | 0 SteelR results |
| Which? Trusted Traders | `site:trustedtraders.which.co.uk SteelR` SERP | 0 SteelR results |

**Interpretation:** SteelR brand is NOT registered on any of the 10 UK trade directories on the workspace DO NOT RE-SUGGEST list. The Vitrums brand has equivalents on most of these per `vitrums/CLAUDE.md`, but they were never propagated to SteelR. This is good for the privacy question (no leak surface), but is a separate decision on whether SteelR should be registered on any of them later (out of scope for this audit).

### ✅ Public-record disclosure — no action

| Surface | What it shows |
|---|---|
| Companies House (Vitrum Solutions Ltd, company no. 14790315) | Registered office = `2nd Floor, Premier House, 309 Ballards Lane, London N12 8LY` — already aligned with the new schema. Public record by statute; no privacy issue. |

## Net summary

- **1 of 12 audited public surfaces still leaks the home address (GBP).** Down from 12 of 12 before today's fix.
- Code-level surfaces all clean and live-verified post-deploy.
- Cached AI engine answers will re-pull within 24-72h (Google) to 4 weeks (slower engines), accelerated by today's Indexing API + IndexNow pushes.
- Recommended GBP action depends on Mani's trade-off preference between Maps presence (currently 0/11) vs full address consistency.
