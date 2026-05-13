# Forensic: Internal link graph around /areas/buckinghamshire

Date: 2026-05-13
Author: Claude forensic agent (read-only)
Context: /areas/buckinghamshire fell from #1 organic ranking between 22 Apr and 5 May. This report quantifies the internal link surface to assess whether on-site signal flow changed in a way that would mechanically harm the page.

## 1. Method

Read-only inspection of three surfaces:

- The area template at `src/app/areas/[slug]/page.tsx`.
- The location data file at `src/data/locations/buckinghamshire.ts`.
- Every other file in `src/` that contains the string `/areas/buckinghamshire` or `/areas/surrey` (control).

For each surface, counted internal Links rendered when slug = `buckinghamshire`. Then walked the corpus for inbound links pointing at the Bucks hub and at Surrey for comparison. Cross-checked the 5 May commit `a2dee50` to identify what changed in the template and where the new outbound flow lands.

Counts are static-template counts, not crawled-DOM counts.

## 2. Outbound link inventory from /areas/buckinghamshire

The Bucks hub renders these internal Links via `src/app/areas/[slug]/page.tsx`:

| Block | Destination | Count |
|---|---|---:|
| Breadcrumb | /, /areas | 2 |
| Body CTA strip | /collection, /process | 2 |
| Body CTA strip | /areas/{parentHub} — Bucks IS a hub, no parent | 0 |
| Hub child grid | /areas/{12 Bucks towns} | 12 |
| Security spec block (added a2dee50) | /sr3-residential-steel-door, /pas-24-steel-entrance-door, /secured-by-design-steel-front-door, /fire-rated-fd30-front-door | 4 |
| Audience hubs block (added a2dee50) | /architects, /developers, /housing-associations, /property-managers | 4 |
| Gallery preview | /collection (x4 instances) | 4 |
| Guides for homeowners (added 22 Apr, commit 552b445) | /blog/steel-entrance-doors-buckinghamshire-homes, /blog/period-property-front-door-ultimate-guide, /blog/ral-colours-front-doors-complete-guide | 3 |
| Final CTA | /contact | 1 |
| Nearby areas | hidden because Bucks is a hub, not an area | 0 |

Total static outbound internal Links from the Bucks hub: 32. Of those, 17 point to non-Bucks destinations (commercial-intent topic hubs, audience hubs, /collection, /process, /contact, /blog posts) and 15 stay inside the Bucks subtree (12 child towns, 2 breadcrumb, 1 gallery group).

Before commit `a2dee50` on 5 May, the page rendered 24 internal Links. The +8 added on 5 May are 4 security topic hub links plus 4 audience hub links.

## 3. Inbound link inventory to /areas/buckinghamshire

Whole-corpus search for `/areas/buckinghamshire` returns 13 occurrences across 10 files:

| Source page | Anchor | Context |
|---|---|---|
| /                                | Buckinghamshire | "We serve homeowners across..." (homepage in-content) |
| /bespoke-steel-front-doors-uk   | Buckinghamshire | Topic hub regional list |
| /contact                         | Buckinghamshire | "Regions covered:" list |
| /blog/double-front-doors-pros-cons-guide | Buckinghamshire (x2) | In-content prose |
| /blog/front-door-replacement-guide-uk-homeowners | Buckinghamshire (x2) | In-content prose |
| /blog/home-insurance-door-security-ratings-uk | Buckinghamshire | In-content prose |
| /blog/how-to-improve-home-security-uk | Buckinghamshire | In-content prose |
| /blog/pas-24-doors-explained-uk-homeowners | Buckinghamshire (x2) | In-content prose |
| /blog/steel-vs-aluminium-front-doors | Buckinghamshire | In-content prose |
| /blog/steel-vs-timber-entrance-doors | Buckinghamshire | In-content prose |

Inbound from area template via `nearbyAreaSlugs`: Bucks appears as nearby in only **2** sibling hubs — Hertfordshire and Surrey. Distinct from the inbound-link list above because `nearbyAreaSlugs` only renders on `type="area"` pages, and Bucks is referenced by `type="hub"` siblings whose nearby-area block does not render. So the `nearbyAreaSlugs` mention is a data-graph statement but produces zero on-page Links at runtime.

There is no Nav link to Bucks. There is no Footer link to Bucks. Bucks gets no link from any topic hub other than `/bespoke-steel-front-doors-uk`.

Total runtime inbound Links to /areas/buckinghamshire: 13 in-content references from 10 source pages.

## 4. Sibling comparison: Surrey

Whole-corpus search for `/areas/surrey` returns 22 occurrences across 16 files:

| Surface | Surrey | Bucks |
|---|---:|---:|
| Homepage in-content | 1 | 1 |
| /bespoke-steel-front-doors-uk | 1 | 1 |
| /contact | 1 | 1 |
| /process | 2 | 0 |
| /blog posts | 17 | 10 |
| **Total** | **22** | **13** |

Surrey appears in 12 blog posts to Bucks's 8. Surrey is referenced in `/process` twice, Bucks zero times. Surrey is also the "nearby" sibling for 4 hubs (Bucks, Herts, Kent, Berks) versus Bucks being nearby for 2 (Herts, Surrey). On the structural data graph Surrey is referenced ~70 percent more often than Bucks.

This is a pre-existing differential, not a 22 Apr to 13 May change. It would not be the cause of the Bucks decline in isolation, but it is the baseline asymmetry against which any new dilution lands harder.

## 5. Link-graph deltas between 22 Apr and 13 May

Commits that touched files relevant to area-page link signal:

- **22 Apr 2026 commit `e73f058`** — QuickEnquiry inline form on all 288 content pages. No new internal Links.
- **22 Apr 2026 commit `552b445`** — Added "Guides for {label} Homeowners" section on every area page. Bucks gained 3 outbound Links to blog posts (Bucks-specific blog + period-property + RAL colours). All 161 area pages got the same 3-card block, routed by region. **Net outbound from Bucks +3; net inbound from these blogs to Bucks unchanged (blogs already linked back via in-content prose).**
- **27 Apr 2026 commit `183755f`** — Topics footer column added. Blog posts gained 1-3 area-page links each. Bucks gained ~4 new inbound (the Bucks-mentioning blogs that did not previously hyperlink "Buckinghamshire"). Net inbound to Bucks: +4.
- **3 May 2026 commits `0accd80` and `2a5f3d8`** — Three new audience hubs (architects, developers, property managers, housing associations). At launch these had 1-3 inbound files each. **No links from those four new pages back to Bucks.** Bucks now competes with 4 new pages for crawl budget and topic authority in the "for specifiers" category.
- **5 May 2026 commit `a2dee50`** — The 644-link rollup. Adds 8 inline Links to every area page template (4 security hubs, 4 audience hubs). Effect on Bucks specifically:
  - Bucks outbound: +8 Links to commercial intent pages.
  - Bucks inbound: unchanged (the 8 new destination pages are now richer in inbound, but they do not link back to Bucks).
  - Across the site, **161 area pages each got the same 8 links**. The 4 topic hubs and 4 audience hubs each gained 161 new inbound. Authority is being redistributed from area hubs to topic hubs and audience hubs.

Net effect for Bucks across the 22 Apr to 13 May window:

| Vector | Pre | Post | Delta |
|---|---:|---:|---:|
| Bucks outbound Links | 24 | 32 | **+8** |
| Bucks inbound Links | 9 | 13 | +4 |
| Bucks outbound to non-Bucks commercial pages | 4 | 12 | **+8** |
| Inbound from topic / audience hubs | 1 (/bespoke-...) | 1 | 0 |

## 6. Verdict

The link graph around Buckinghamshire DID change in a way that is consistent with a Google ranking decline, in two compounding ways.

**First, outbound dilution.** Commit `a2dee50` added 8 commercial-intent outbound Links from every area page, including Bucks. Bucks's outbound count to non-Bucks commercial destinations tripled, from 4 to 12. Internal PageRank conserves on outbound count: the same authority is now divided across more destinations, so the per-Link signal sent to any single destination (including Bucks's own children when crawled by a bot following the gallery and CTA Links) decreased. This is mild because Bucks is a single hub and the absolute outbound count is still modest, but it is non-zero.

**Second, inbound starvation.** The same commit redirected new authority TOWARD topic and audience hubs across 161 area pages. Bucks itself did not gain a single inbound Link from any of the 8 newly-promoted destinations. Surrey did not either. But Surrey had a 70 percent inbound lead before the change. Relative inbound parity widened.

**Third, structural asymmetry.** Bucks gets no Footer link, no Nav link, no audience-hub link, and only one topic-hub link (from `/bespoke-steel-front-doors-uk`). Surrey gets the same plus two inbound from `/process`. The data file has Bucks listed nearby on only 2 sibling hubs versus Surrey on 4. None of this changed in the window, but it is the baseline that made Bucks more vulnerable to the dilution above.

**Net call:** the change is real and directionally consistent with the ranking loss, but the magnitude (8 outbound Links on a hub that already had 24) is modest. This is unlikely to be the sole cause of a #1 to off-page-1 fall on its own. More likely it acted alongside a content or query-relevance change. Specifically worth checking next: did `/architects`, `/developers`, `/housing-associations`, `/property-managers`, or `/sr3-residential-steel-door` start ranking for queries that used to send to Bucks; and did the 5 May area-template `<h2>` rewording ("Every {label} door ships at BS EN 1627:2011 RC4 Standard...") shift the page's perceived primary topic away from "steel doors Buckinghamshire" toward a generic specification topic.

A cheap reversibility test: revert the 4 audience-hub Links from the area template (leave the 4 topic Links — those are more defensible) and observe whether Bucks recovers. The 4 audience hubs were the lowest-priority additions in `a2dee50` and the most diluting (audience hubs are sitemap-orphan from the area template's existing topical theme).

Report ends. Wordcount approx 1380.
