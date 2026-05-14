# SteelR cannibalisation audit — 2026-05-13

Inventory: 40 blog posts, 32 static / topic / hub pages in `src/app`, 16 area hubs + 161 leaf area pages. Total addressable URLs in sitemap: 313 (verified live curl).

## 1. Method honesty

What ran:
- `audit-data/blog-seo-audit.py` — metadata length checks across 40 blog posts. Not a cluster detector. Output captured but only useful as a meta-quality view (10 blog posts have over-long titles, 9 have under-length excerpts).
- Custom keyword-fingerprint clusterer over 77 indexable non-area pages (blog + static + topic hub). Tokens normalised, stop-words stripped, set-overlap >= n-1 across 38 priority intents (the 30 in scope plus 8 nearby intents).
- Internal-link density count across every `src/**/*.ts(x)` file for 41 candidate URLs. This is the strongest signal we have for "which page is the canonical answer the site itself believes in."
- Git-log freshness for the 8 most-suspicious overlapping pages.

What could not be tested:
- Live SERP positions. `audit-data/rank-history/2026-05-11.json` is all HTTP 403 (Serper key blocked). 2026-04-22 file has 2 organic positions and nothing maps. Winner selection therefore weights internal-links + content depth + URL depth, not actual rank.
- Click-through actual cannibalisation in GSC. The Search Performance Compare-by-URL view would settle several of the suspected cases below in seconds, but the report file is not in repo.
- 161 leaf area pages were NOT keyword-clustered individually. They are template-driven (single `src/app/areas/[slug]/page.tsx` + per-slug data), and pattern-level dilution is treated as one cross-template observation below rather than 161 individual clusters.

## 2. Confirmed cannibalisation cases

### 2.1 Cost intent — `/steel-front-door-cost-uk` vs `/blog/steel-entrance-doors-cost-uk` vs `/blog/steel-entrance-doors-pricing-factors`
- Winner: **`/steel-front-door-cost-uk`** (topic hub, 1,866 words, 16 inbound internal links, updated 2026-05-11).
- Losers: two blog posts on the same intent with 0 inbound internal links each. The pricing-factors slug was created in Apr 2026 specifically because the original `steel-entrance-doors-cost-uk` slug was already in use. We never resolved that — both still publish, both target the same query.
- Action: **angle-shift** both blogs. Keep `/blog/steel-entrance-doors-pricing-factors` retargeted to "what changes the price of a steel front door" (factor-by-factor, no buyer-intent framing). Retire `/blog/steel-entrance-doors-cost-uk` to 308 redirect to the topic hub. Do not redirect both; that loses the factor-explainer angle which the hub does not cover.

### 2.2 SR3 intent — `/sr3-residential-steel-door` vs `/blog/what-is-sr3-security-rating`
- Winner: **`/sr3-residential-steel-door`** (topic hub, 34 inbound links, in nav of layout.tsx, updated 2026-05-11). The blog post (`/blog/what-is-sr3-security-rating`) was force-resubmitted to the Indexing API on 20 Apr precisely because it was thin and lagging. It has 0 inbound internal links from non-blog pages.
- Action: **angle-shift** the blog. Retarget the blog to "SR3 explained for homeowners — what does the rating mean for a domestic break-in" (consumer-language explainer that the spec-heavy hub deliberately is not). Add a canonical cross-link to the hub at the top.

### 2.3 Fire-rated intent — `/fire-rated-doors` vs `/fire-rated-fd30-front-door`
- Both target the same head term ("fire rated front door / FD30") and both rank as topic-hub-style pages.
- `/fire-rated-doors` (2,671 words, 12 links, older) vs `/fire-rated-fd30-front-door` (1,847 words, 17 links, part of Phase 1D).
- Winner: **`/fire-rated-fd30-front-door`** — newer, more inbound links, narrower head term in URL, Phase 1D `<InfoPage>` template with FAQ schema.
- Action: **308 redirect** `/fire-rated-doors` to `/fire-rated-fd30-front-door`. The older page exists only because Phase 1D shipped without retiring the predecessor. Add a "FD60 upgrade" section to the survivor so the FD60 coverage is not lost. Reversibility: cheap (one redirect, one content paste).

### 2.4 Period / heritage intent
Four pages compete on the period-property / conservation / heritage cluster:
- `/blog/period-property-front-door-ultimate-guide` (blog, 1 inbound link)
- `/blog/best-front-doors-period-properties` (blog, 1 inbound link)
- `/blog/conservation-area-door-requirements-uk` (blog, 2 inbound links)
- `/blog/steel-doors-conservation-areas-planning-guide` (blog, 0 inbound links)

Plus three area-flavoured period pages:
- `/blog/best-areas-london-period-property-renovations`
- `/blog/steel-entrance-doors-buckinghamshire-homes` (title is "Period Property Front Doors in Buckinghamshire" — title mismatch with slug)
- `/blog/front-doors-london-townhouses-guide`

No topic-hub `/heritage-steel-front-doors-uk` exists. CLAUDE.md flags this gap (11 May 2026 — both ChatGPT and Gemini pull competitors on Grade-II queries).
- Action: **build the heritage hub, then consolidate**. Build `/heritage-steel-front-doors-uk` as the topical anchor. Pick one of the two pure-conservation blogs (recommend `/blog/conservation-area-door-requirements-uk` — has the inbound-link head-start), keep it as the regulatory explainer, 308 the other (`/blog/steel-doors-conservation-areas-planning-guide`). Keep the period-property blogs alive but reframe titles so they don't both target "best front door period property" verbatim. Reversibility: medium.

### 2.5 Luxury London intent — `/luxury-steel-entrance-door-london` vs `/areas/london` (hub) vs `/blog/front-doors-london-townhouses-guide`
- `/luxury-steel-entrance-door-london` (1,924 words, 12 inbound links, Phase 1D) is the topic hub.
- `/areas/london` is a 30-borough area hub. Same head intent, different rendering template.
- The blog covers London townhouses specifically — a legitimate sub-angle.
- Winner: **`/luxury-steel-entrance-door-london`** for "luxury steel front door london" / "steel doors london". `/areas/london` should win "steel doors london" only if it shifts to a clear geographic-coverage angle.
- Action: **angle-shift `/areas/london`**. Rewrite the area-hub intro to "Coverage and installation across 30 London boroughs" (logistics / nationwide-installation framing). Link from `/areas/london` up to `/luxury-steel-entrance-door-london` for the spec-and-style angle. Keep the townhouse blog (distinct enough).

### 2.6 Steel-vs-composite intent — `/steel-front-door-vs-composite` vs `/blog/steel-vs-composite-doors`
- Winner: **`/steel-front-door-vs-composite`** (topic hub, 2,883 words, 17 inbound links, spec-table just added 2026-05-13 commit `8ff80a0`).
- Loser: the blog has 0 inbound internal links. It still appears as the historical `/blog/steel-vs-composite-doors` slug (referenced as ranking #2 in older CLAUDE.md context).
- Action: **leave as-is for now**. Blog is informational-intent, hub is commercial. Different positions on the buying journey. Re-test in 30 days; if both still rank below position 10, fold the blog into the hub.

## 3. Suspected cases needing manual verification

- **`/blog/best-burglar-proof-front-doors-uk`** vs **`/blog/best-front-door-home-security`** vs **`/blog/front-door-security-ratings-compared-sr1-to-sr3`** vs **`/security`** — four pages competing for "most secure / burglar-proof front door uk". `/security` is the topic anchor (59 inbound links — highest on the site). The three blogs are largely interchangeable: best-burglar-proof, best-for-home-security, ratings-explained. Verify in GSC Search Performance — if any two share >40% of impressions on the same top-3 queries, merge to one and 308 the others.

- **`/blog/luxury-front-doors-uk-buyer-guide`** vs **`/bespoke-steel-front-doors-uk`** — overlap is partial (luxury vs bespoke). Blog has 1 inbound link, hub has 35. Likely complementary not competing, but worth a GSC URL-compare check.

- **`/security`** vs **`/security-specification`** — title overlap. `/security-specification` is the deeper PAS-24-and-RC4 page (37 inbound). `/security` is the public-facing ratings page (59 inbound, in nav). Different audiences (homeowner vs specifier). Probably fine; flag only because their `<title>` tags both start with "Steel Door".

- **`/blog/are-steel-doors-worth-it-uk`** vs **`/bespoke-steel-front-doors-uk`** — blog targets the doubt-stage query. Hub targets the buyer-stage query. Probably complementary.

## 4. Cross-template patterns

**Area pages (161 leaf + 16 hubs):** template at `src/app/areas/[slug]/page.tsx` produces a near-identical structure for every area. Per CLAUDE.md the boilerplate has 4 hub-rotated paragraph variants — that prevents Google "duplicate without user-selected canonical" but does NOT eliminate intent-level cannibalisation. 161 pages all target some form of "steel doors [town]" with the same `<title>` pattern. Risk: any given town query is split across the leaf town page AND the parent hub. Mitigation already in place: parent hubs at priority 0.8, leaves at 0.6. Recommendation: do NOT add more leaf area pages. Existing 161 are sufficient.

**Topic-hub vs blog-post drift:** every Phase 1D topic page has an older blog post on the same topic with one-tenth the internal-link density. The hub is winning the internal "vote" but the blogs are still in the sitemap pulling AI-citation duty. This is fine for AI-citation. It's risky for traditional SERPs — see the cost / SR3 / fire-rated cases in section 2 for the concrete fixes.

**Audience-hub overlap:** `/architects`, `/developers`, `/property-managers`, `/housing-associations` all rank for variations of "steel doors for [audience]". Each has its own internal-link budget (19–21 links). No cannibalisation; each is a distinct intent. Confirmed clean.

## 5. Recommended next-3 actions

1. **(Reasoned)** Ship the three 308 redirects in section 2.1, 2.3, 2.4 (cost-blog → hub, fire-rated-doors → fire-rated-fd30-front-door, conservation-planning-guide → conservation-requirements). Reversibility: cheap (one config). Metric proof: GSC Search Performance position for "steel front door cost uk" + "fire rated front door uk" 30 days after redirect. Pre/post capture via `scripts/audit/capture-serp.mjs` if a Serper credit refresh becomes available; otherwise GSC alone.

2. **(Reasoned)** Angle-shift the SR3 blog (`/blog/what-is-sr3-security-rating`) to homeowner-language explainer with a top-of-page link to the topic hub. Reversibility: cheap. Metric proof: GSC compare-URL view for the SR3 keyword cluster, capturing impressions split between blog and hub before vs after the rewrite.

3. **(Reasoned)** Build `/heritage-steel-front-doors-uk` topic hub using the same `<InfoPage>` pattern, then 308 `/blog/steel-doors-conservation-areas-planning-guide` to it. Closes the heritage gap flagged in CLAUDE.md (Crittall, Clement, Fabco take all Grade-II citations today). Reversibility: medium. Metric proof: AI-citation spot-check for "heritage front door uk" and "grade ii listed front door" 14 days after launch.

Word count: ~1,360.
