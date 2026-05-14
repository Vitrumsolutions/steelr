# llms.txt / llms-full.txt Integrity Audit — 14 May 2026

Read-only diagnostic. No edits made to either llms file. Any change recommended
here must route through the `/panel-llms` + `/panel-llms-approve` gate before commit.

## Method

- Live HTTP check of both files (curl, status + byte size).
- Local file line/byte count vs live.
- Blog reconciliation: 40 source posts in `src/data/blog/posts/*.ts` vs the "Blog
  Page URLs" and "Blog Excerpts" sections of llms-full, and the "Topic and
  Comparison Guides" list in llms.txt.
- Area reconciliation: 177 unique location slugs from `src/data/locations/*.ts`
  vs the "Full Area Page Listing" in llms-full.
- Hub count: `grep -c 'type: "hub"'` across location files (17 raw, 1 is the
  `types.ts` type-definition false positive, so **16 real hubs**).
- InfoPage / topic / audience hub coverage vs `src/app/` route folders.
- Certification-wording sweep for "Class 3" residuals.
- Git log/status of both files.

## Both-files status

| File | Live HTTP | Live bytes | Local bytes | Local lines | Git state |
|---|---|---|---|---|---|
| `public/llms.txt` | 200 | 43,060 | 43,424 | 364 | committed (27a3110) |
| `public/llms-full.txt` | 200 | 255,840 | 258,461 | 2,621 | committed (27a3110) |

Live byte count is ~360 / ~2,600 bytes below local — normal CRLF/whitespace
delta or a deploy slightly behind HEAD; not material. Neither file is bloated or
truncated. Sizes are healthy (llms.txt 43 KB, llms-full 255 KB — large but
expected for a 40-post + 177-area reference). Both dated `2026-05-11`.

## llms-full.txt reconciliation

**Missing — blog (Blog Page URLs section, lines 1076-1116):** 37 of 40 posts
listed. Absent:
- `hmo-front-door-requirements-uk-landlord-guide`
- `steel-front-doors-building-safety-act-2022`
- `steel-front-doors-with-sidelights-uk-buyers-guide`

These 3 ARE present in the "Blog Excerpts" section (40/40 there) and in
llms.txt's guide list — so the gap is isolated to the URL index block in
llms-full. Low citation impact (excerpt block is the cited surface) but it is an
internal inconsistency.

**Orphaned — blog:** none. No llms-full blog entry points to a non-existent post.

**Area listing:** exact match. All 177 source location slugs appear in the "Full
Area Page Listing"; zero orphans, zero missing.

**Stale count in area header (line 859):** header reads
`161 Areas Served, 17 Regional Hubs, 178 Pages Total`. Source truth is
**16 hubs + 161 areas = 177 records**. The "17 hubs / 178 pages" repeats the
known `types.ts` false-positive miscount (CLAUDE.md flags the same trap). Header
should read `16 Regional Hubs, 177 Pages Total`.

**Missing — topic page:** `/sr3-vs-sr4-residential-steel-doors-uk` exists as a
route (`src/app/sr3-vs-sr4-residential-steel-doors-uk/page.tsx`, shipped commit
37c6833) but appears in **neither** llms file. The "Topic and Comparison Guides"
section of llms-full lists 13 topic URLs; this is the one omission.

**Audience hubs:** all 4 present (housing-associations, developers, architects,
property-managers) with full procurement copy. Good.

**Not represented:** `/ai-answers` and `/lookbook` routes — likely utility/index
pages, not content hubs; their omission is defensible, no action needed unless
they carry citable content.

**Duplicate sections / broken refs:** none found. 28 top-level `##` headings,
all distinct. Internal blog/area URLs all resolve to real routes.

## llms.txt reconciliation

- Key Pages list (13 entries): all resolve to real routes. No stale entries.
- "Topic and Comparison Guides" section unusually carries the **full 40-post
  blog list** plus the 13 topic-page guides — all 40 posts present here,
  including the 3 missing from llms-full's URL block. So llms.txt is the more
  complete blog index of the two.
- Same omission as llms-full: `/sr3-vs-sr4-residential-steel-doors-uk` is absent.
- Audience Hubs section: all 4 present.
- Areas Served: curated prose summary (not exhaustive) — by design, fine.

## Certification-wording check

**Clean.** Zero "Class 3" / "BS EN 1627 ... Class 3" matches in either file. The
11 May backfill (commit 27a3110, "clears 3 Class 3 residuals") did its job. RC4
wording is consistent: `BS EN 1627:2011 RC4 single leaf, unglazed` as the
Standard tier throughout (25 mentions in llms.txt, 107 in llms-full).

## Staleness vs enriched hubs (commits b38a698 + 976de1a)

Confirmed: the 13-14 May hub enrichment touched only `src/data/locations/*.ts`,
not the llms files (gate would block; no auto-regen path exists for
locations-data edits). The llms-full "Full Area Page Listing" still lists every
hub as a bare `/areas/<slug>` URL line with no descriptive text. The newly
enriched hub content — named largest population centres (Aylesbury, Milton
Keynes, High Wycombe for Bucks), AONB / National Park context (Chilterns AONB),
specific postcodes (HP9, SL9, MK), and 4 FAQs per hub — is **not reflected**
anywhere in llms-full. The area section is materially thinner than the live
site it describes. This is the single biggest staleness gap: the hubs are now
25-30% unique-content density on-site but llms-full still treats them as URL
stubs. AI engines reading llms-full get none of the county-level depth that the
hub pages now carry.

## Prioritised recommendations (all require the /panel-llms gate)

1. **[Reasoned, cheap]** Fix area header line 859: `17 Regional Hubs, 178 Pages
   Total` -> `16 Regional Hubs, 177 Pages Total`. Factual correction; the count
   is provably wrong against source.
2. **[Reasoned, cheap]** Add `/sr3-vs-sr4-residential-steel-doors-uk` to the
   Topic and Comparison Guides section of **both** files. Real page, citable
   comparison content, currently invisible to AI crawlers via llms.
3. **[Reasoned, cheap]** Add the 3 missing posts to llms-full's "Blog Page URLs"
   block so it matches the Blog Excerpts section (40/40).
4. **[Reasoned, medium]** Enrich the llms-full area section so each of the 16
   hubs carries a 2-3 sentence extract from its new `description` (largest towns,
   AONB context, key postcodes). This is the highest-value change — it closes a
   real content-depth gap on SteelR's strongest citation surface — but it is the
   largest edit and most disruptive to AI cache, so it needs the full panel and
   explicit user sign-off. Consider a follow-up: add a regen step so future
   locations-data enrichment propagates to llms-full automatically.

Gate note: items 1-3 are small factual corrections; item 4 is a substantive
content change. All four are blocked by the pre-commit hook until `/panel-llms`
runs and the user approves via `/panel-llms-approve`.
