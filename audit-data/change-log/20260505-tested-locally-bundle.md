# Change-log: Tested-locally bundle (5 May 2026)

First commit through the new Recommendation Gate. Five Tested-locally
recommendations bundled into one ship cycle.

## Recommendations shipped

1. Add 4 topic hubs (SR3, PAS 24, SBD, FD30) to area-page body
2. Wire audience hubs into 8 topic hub `relatedLinks` arrays
3. Add `hasCredential` array (8 entries) to root schema
4. Replace `OfferCatalog` with `Service[]` array (8 services) in root schema
5. Person author + optional `dateModified` field on Article schema (BlogPost type)

All five tagged Tested-locally per the gate. Reversibility cheap on all.
Schema items measurable via JSON.parse + Rich Results Test. Linking items
measurable via grep counts.

## Pre-state (captured 2026-05-05)

### Topic hub inbound link counts (files containing the URL)

| Topic hub | Files |
|---|---|
| /sr3-residential-steel-door | 25 |
| /pas-24-steel-entrance-door | 16 |
| /secured-by-design-steel-front-door | 22 |
| /fire-rated-fd30-front-door | 13 |
| /sr4-residential-steel-door | 13 |
| /lps-1673-attack-resistant-steel-door | 12 |
| /bs-en-1627-rc4-residential-steel-door | 7 |
| /thermally-broken-steel-front-door | 9 |

### Audience hub inbound link counts

| Audience hub | Files |
|---|---|
| /housing-associations | 3 |
| /developers | 1 |
| /architects | 1 |
| /property-managers | 1 |

### Homepage schema (live curl, 2026-05-05)

- 4 `application/ld+json` blocks emitted on homepage
- Types present: Answer, Country, FAQPage, GeoCoordinates,
  HomeAndConstructionBusiness, OfferCatalog, OpeningHoursSpecification,
  Person, PostalAddress, Question
- Types missing: Service, EducationalOccupationalCredential

### SERP baseline

- Captured at `audit-data/serp-captures/20260505-pre-panel-recommendations.json`
- 24 queries, 5 ranking in top 30, 1 with AI Overview SteelR mention

## Expected post-state

### Topic hub inbound — should add 161 area-page links each to the 4 most-commercial hubs

| Topic hub | Pre | Expected post | Delta |
|---|---|---|---|
| /sr3-residential-steel-door | 25 | ~186 (25 + 161 area pages) | +161 |
| /pas-24-steel-entrance-door | 16 | ~177 | +161 |
| /secured-by-design-steel-front-door | 22 | ~183 | +161 |
| /fire-rated-fd30-front-door | 13 | ~174 | +161 |

### Audience hub inbound — should gain links from 8 topic hubs each

| Audience hub | Pre | Expected post | Delta |
|---|---|---|---|
| /housing-associations | 3 | ~11 | +8 |
| /developers | 1 | ~9 | +8 |
| /architects | 1 | ~9 | +8 |
| /property-managers | 1 | ~9 | +8 |

### Homepage schema — should gain Service + EducationalOccupationalCredential

Expected types added: Service (×8), EducationalOccupationalCredential (×8)

## Post-state capture (TODO 7-14 days from deploy)

- Run grep counts again, paste into post-state table below
- Run `node scripts/audit/capture-serp.mjs post-tested-locally-bundle` and diff
- Run Schema.org Rich Results Test on homepage, paste verdict
- Document whether schema additions and link additions worked

### Post-state — immediate, captured at deploy time (5 May 2026)

#### Topic hub file-level inbound (+1 file each = areas/[slug]/page.tsx)

| Topic hub | Pre | Post (file-level) | Page-level inbound (renders × 161 area pages) |
|---|---|---|---|
| /sr3-residential-steel-door | 25 | 26 | 25 + 161 = 186 |
| /pas-24-steel-entrance-door | 16 | 17 | 16 + 161 = 177 |
| /secured-by-design-steel-front-door | 22 | 23 | 22 + 161 = 183 |
| /fire-rated-fd30-front-door | 13 | 14 | 13 + 161 = 174 |
| /sr4-residential-steel-door | 13 | 13 | unchanged (not in security-spec block) |
| /lps-1673-attack-resistant-steel-door | 12 | 12 | unchanged |
| /bs-en-1627-rc4-residential-steel-door | 7 | 7 | unchanged |
| /thermally-broken-steel-front-door | 9 | 9 | unchanged |

#### Audience hub file-level inbound (+8 each, from topic hub relatedLinks)

| Audience hub | Pre | Post | Delta |
|---|---|---|---|
| /housing-associations | 3 | 11 | +8 ✅ |
| /developers | 1 | 9 | +8 ✅ |
| /architects | 1 | 9 | +8 ✅ |
| /property-managers | 1 | 9 | +8 ✅ |

#### Schema additions (deploy-time)

- `hasCredential` array added to root HomeAndConstructionBusiness — 8 EducationalOccupationalCredential entries (ISO 9001, ISO 14001, PAS 24:2022, BS EN 1627:2011 RC4, LPS 1175 SR3 + SR4, Secured by Design, FD30S, Made in Britain). Will appear in homepage schema after Vercel redeploys.
- `makesOffer` array added — 8 Service entities. Will appear in homepage schema after Vercel redeploys.
- Article schema upgraded to BlogPosting with Person author + dateModified fallback + mainEntityOfPage. Will appear on all 39 blog posts after redeploy.

#### Verification artefacts (immediate)

- npm run build: PASS (292 static pages prerendered)
- npm run lint: PASS (0 ESLint warnings/errors)
- npm run brand-guard: PASS (0 blocking violations)
- node scripts/audit-meta-lengths.mjs: 0 issues
- node scripts/blog/validate-faqs.mjs: PASS (38 OK, 1 backlog non-blocking)

### Post-state — 7-14 days from deploy (TODO 12-19 May 2026)

- [ ] Run `node scripts/audit/capture-serp.mjs post-tested-locally-bundle` and diff vs `20260505-pre-panel-recommendations.json`
- [ ] Manual: paste Schema.org Rich Results Test verdict on https://steelr.co.uk/ (homepage with new hasCredential + Service)
- [ ] Manual: paste Schema.org Rich Results Test verdict on https://steelr.co.uk/blog/sr4-lps-1175-commercial-grade-residential (BlogPosting with Person author)
- [ ] Verdict on each of the 5 recommendations:
  - Recommendation 1 (security spec block on areas) — did the 4 core topic hubs gain ranking on commercial queries?
  - Recommendation 2 (audience hubs in topic relatedLinks) — did the 4 audience hubs gain Google indexation? (Reminder: today's URL Inspection pushes already submitted them.)
  - Recommendation 3 (hasCredential array) — did Rich Results Test verdict change?
  - Recommendation 4 (Service array) — did Rich Results Test verdict change?
  - Recommendation 5 (BlogPosting + Person author) — did Rich Results Test verdict change on blog posts?
- [ ] Promotion: any of the 5 → Verified tier (move to "Verified" examples in templates), or revert?
