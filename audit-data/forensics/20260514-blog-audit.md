# SteelR Blog Content Audit — 14 May 2026

Read-only diagnostic. 40 blog posts in `src/data/blog/posts/*.ts`, all registered in `src/data/blog/index.ts`.

## Method

- Enumerated all 40 post files; cross-checked against index.ts `posts[]` array (40 entries).
- House-style scan: `grep` for em/en dashes, exclamation marks, banned words, "Class 3" residuals, SR-tier typos, `£` prices.
- Internal-link count: `grep -oE '\]\(/[a-z]'` per file.
- FAQ count: `awk` counting `### ` headings after the `## Frequently Asked Questions` marker.
- Live URL: `curl` HTTP status on a 7-post sample plus redirect check.
- Cannibalisation: title/slug intent comparison.

## 40-Post Inventory

| Slug | Category | Words (file) | readTime | FAQ Qs | Int. links |
|---|---|---|---|---|---|
| are-steel-doors-worth-it-uk | Buying Guide | 2864 | 10 min | 5 | 12 |
| bespoke-entrance-doors-uk-guide | Buying Guide | 2291 | 8 min | 6 | 11 |
| best-areas-london-period-property-renovations | Location Guides | 3049 | 9 min | 8 | 17 |
| best-burglar-proof-front-doors-uk | Security | 2476 | 9 min | 6 | 15 |
| best-front-door-home-security | Security | 2063 | 7 min | 6 | 10 |
| best-front-doors-new-builds-uk | Buying Guide | 2441 | 8 min | 6 | 7 |
| best-front-doors-period-properties | Design | 1542 | 7 min | **0** | 6 |
| choosing-entrance-door-colour | Design | 2629 | 8 min | 8 | 12 |
| conservation-area-door-requirements-uk | Guides | 1889 | 4 min | 6 | 20 |
| double-front-doors-pros-cons-guide | Buying Guide | 2417 | 7 min | 6 | 10 |
| fire-rated-front-doors-uk-regulations-guide | Technical | 2411 | 8 min | 6 | 8 |
| front-door-hardware-finishes-brass-chrome-black | Design | 2430 | 7 min | 6 | 7 |
| front-door-replacement-guide-uk-homeowners | Guides | 2584 | 9 min | 6 | 10 |
| front-door-security-ratings-compared-sr1-to-sr3 | Security | 2287 | 8 min | 6 | 7 |
| front-doors-london-townhouses-guide | Location Guides | 2577 | 7 min | 6 | 10 |
| hmo-front-door-requirements-uk-landlord-guide | Security | 2208 | 9 min | 5 | 8 |
| home-insurance-door-security-ratings-uk | Security | 2333 | 7 min | 6 | 7 |
| how-to-improve-home-security-uk | Security | 2041 | 8 min | 6 | **4** |
| luxury-front-doors-uk-buyer-guide | Buying Guide | 2795 | 11 min | 9 | 7 |
| modern-front-door-ideas-inspiration-2026 | Design | 2207 | 9 min | 6 | 11 |
| pas-24-doors-explained-uk-homeowners | Security | 1986 | 8 min | 6 | 11 |
| period-property-front-door-ultimate-guide | Design | 2600 | 9 min | 6 | 7 |
| ral-colours-front-doors-complete-guide | Design | 2590 | 8 min | 6 | 7 |
| secured-by-design-homes-guide-2026 | Security | 2510 | 9 min | 6 | 11 |
| smart-locks-steel-entrance-doors-guide | Technical | 2654 | 7 min | 6 | 8 |
| specifying-steel-doors-architects-guide-2026 | Technical | 2496 | 8 min | 6 | 8 |
| spring-home-improvement-front-door-upgrade | Guides | 2358 | 8 min | 6 | 11 |
| sr4-lps-1175-commercial-grade-residential | Security | 2177 | 9 min | 6 | 6 |
| steel-doors-conservation-areas-planning-guide | Guides | 2574 | 9 min | 6 | 8 |
| steel-doors-country-homes-guide | Guides | 2764 | 10 min | 8 | 22 |
| steel-entrance-doors-buckinghamshire-homes | Location Guides | 1943 | 8 min | 6 | 13 |
| steel-entrance-doors-kent-properties | Location Guides | 2178 | 8 min | 6 | 17 |
| steel-entrance-doors-surrey-properties | Location Guides | 1970 | 7 min | 6 | 17 |
| steel-entrance-door-thermal-performance-u-values | Technical | 2389 | 8 min | 6 | 7 |
| steel-front-doors-building-safety-act-2022 | Security | 2474 | 10 min | 6 | 10 |
| steel-front-doors-with-sidelights-uk-buyers-guide | Buying Guide | 2077 | 8 min | 6 | 11 |
| steel-vs-aluminium-front-doors | Buying Guide | 1791 | 6 min | 6 | 7 |
| steel-vs-fibreglass-doors-uk-comparison | Buying Guide | 2511 | 8 min | 6 | 7 |
| steel-vs-timber-entrance-doors | Buying Guide | 1916 | 6 min | 6 | **4** |
| steel-vs-upvc-front-doors-comparison | Buying Guide | 2348 | 7 min | 6 | 8 |

Word counts are whole-file word counts (include frontmatter/markup); body prose is roughly 200-400 words less. All comfortably above thin-content threshold.

## House-Style Violations

**None found.** Clean across all 40 posts:
- Em dashes / en dashes: 0 occurrences.
- Exclamation marks: 0 (in body content).
- Banned words describing SteelR: 0. All "affordable / cheap / cheaper / discount" hits describe competitor materials (uPVC, fibreglass, softwood timber) or appear in insurer-discount context — explicitly permitted by the brand-guard policy.
- Displayed prices: all `£` figures describe competitor-material price ranges (timber `£200-£5,000`, fibreglass `£1,200-£3,000`, uPVC `£400-£1,500`) or property-value examples (`£750,000 property`, `£1 million`) — permitted educational benchmarking, none SteelR-attributed.

## Factual-Correctness Flags

**No "BS EN 1627 Class 3" residuals.** The regex-sweep regression is fully cleaned — zero hits for "Class 3" / "class3" across all posts.

Certification language is current. `sr4-lps-1175-commercial-grade-residential` and `front-door-security-ratings-compared-sr1-to-sr3` both use the correct four-tier ladder (RC4 Standard / SR3 Enhanced / SR4 Commercial-grade / LPS 1673 Ultra-high). SR5-SR8 references in `best-burglar-proof-front-doors-uk`, `best-front-door-home-security`, `front-door-security-ratings-compared-sr1-to-sr3` and `pas-24-doors-explained-uk-homeowners` are legitimate — they explain the full BS EN 1627 / LPS 1175 standard ranges, not typos, and correctly state SteelR's residential ladder tops at SR4.

## Internal-Linking Gaps

Two posts at the 3-link floor but below the comfort margin (Reasoned, cheap to fix):
- `how-to-improve-home-security-uk` — 4 links.
- `steel-vs-timber-entrance-doors` — 4 links.

Both meet the 3+ standard but are thin versus the 10-15 average. Worth adding 2-3 contextual links each to topic hubs.

**Stale internal link (Reasoned, cheap):** `sr4-lps-1175-commercial-grade-residential` line 20 links to `/blog/what-is-sr3-security-rating`, which was removed 02 May 2026 and now 308-redirects to `/sr3-residential-steel-door`. The link resolves (HTTP 200 via redirect) but should point directly at the live target to avoid a redirect hop. Only one such stale link found site-wide.

## Cannibalisation Flags

Low risk. Prior cleanups (22 Apr, 28 Apr, 02 May per index.ts comments) removed the worst offenders. Remaining soft overlaps (Reasoned, do not action without SERP data):
- `best-front-door-home-security` vs `best-burglar-proof-front-doors-uk` vs `how-to-improve-home-security-uk` — three Security posts on overlapping "home security" intent. Distinct enough by angle (door choice / burglar resistance / whole-home measures) but worth a SERP-position check.
- `front-door-security-ratings-compared-sr1-to-sr3` vs `pas-24-doors-explained-uk-homeowners` — both explain BS EN 1627 tiers; primary intents differ (ratings comparison vs PAS 24 specifically).
- `steel-vs-*` family (aluminium, fibreglass, timber, upvc) — four parallel comparison posts, each a distinct keyword, no cannibalisation.

## FAQ Backlog — Ranked

The CLAUDE.md "17 posts without FAQ" backlog is **stale**. 39 of 40 posts now carry a `## Frequently Asked Questions` section with 5-9 Q&A pairs. Only one genuine gap remains:

1. **best-front-doors-period-properties** (Design, 1542 words, 0 FAQs) — only post lacking a FAQ section. Design category, moderate FAQ-schema value, but it is also the shortest post in the set. Strongest (and only) FAQ candidate. Adding 5-6 Q&As would close the last schema gap and lift the thinnest post toward the ~2000-word peer average.

## Live-URL Reachability

7-post curl sample all returned HTTP 200 (`sr4-lps-1175...`, `steel-vs-timber...`, `best-front-doors-period-properties`, `conservation-area-door-requirements-uk`, `luxury-front-doors-uk-buyer-guide`, `hmo-front-door-requirements...`, `steel-front-doors-building-safety-act-2022`). Removed slug `/blog/what-is-sr3-security-rating` correctly 308s to `/sr3-residential-steel-door`. No broken routes detected.

## Recommendations (gated)

| # | Recommendation | Tier | Reversible | Metric |
|---|---|---|---|---|
| 1 | Add FAQ section (5-6 Qs) to `best-front-doors-period-properties` | Tested-locally | cheap | FAQPage schema count 39->40; validate-faqs pass |
| 2 | Fix stale `/blog/what-is-sr3-security-rating` link in sr4 post to point at `/sr3-residential-steel-door` | Reasoned | cheap | redirect-hop removed; build pass |
| 3 | Add 2-3 internal links each to `how-to-improve-home-security-uk` and `steel-vs-timber-entrance-doors` | Reasoned | cheap | link count 4->7 |
| 4 | SERP-position check on the 3 overlapping Security posts before any merge/redirect | Reasoned | n/a (diagnostic) | rank-tracker positions |

All four are cheap/medium reversibility. No expensive-to-reverse recommendations. Recommendation 4 is diagnostic only — do not merge posts without captured SERP data per the loop-prevention rule.
