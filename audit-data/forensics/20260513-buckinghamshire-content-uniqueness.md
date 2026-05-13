# Buckinghamshire content uniqueness forensic

Date: 13 May 2026
Page under investigation: https://steelr.co.uk/areas/buckinghamshire
Trigger: page was Google #1 for "steel doors Buckinghamshire" on 22 Apr,
outside top 30 by 5 May.

## 1. Method

Read-only forensic. Four input surfaces:

1. `src/data/locations/buckinghamshire.ts` (Bucks hub entry + 11 child area entries).
2. `src/data/locations/{surrey,hertfordshire,kent}.ts` (sibling hub entries).
3. `src/app/areas/[slug]/page.tsx` (the shared template all 17 hubs render through).
4. Live HTML at `/areas/buckinghamshire` fetched 13 May 2026 to validate that
   what the data + template produce is what is actually being served.

Word counts taken from the source data + template, validated against the
live-page WebFetch capture. Boilerplate variant for Bucks is index 1
(per `getVariantIndex()` at page.tsx:45). Sibling hubs use index 0 (Kent),
index 2 (Surrey), index 3 (Herts).

No `src/data/local-product-content.ts` exists on SteelR; per CLAUDE.md this
is a Vitrums-only pattern. SteelR location uniqueness is therefore entirely
carried by the `description` field on each `Location` entry plus an optional
`localFeatures` array and optional per-location `faqs` array.

Wayback Machine has **zero snapshots** of `/areas/buckinghamshire`
(`archive.org/wayback/available?url=steelr.co.uk/areas/buckinghamshire`
returns `archived_snapshots: {}`). Wayback diff is therefore not possible.
Falling back to git history as the proxy for "what changed between 22 Apr
and 5 May."

## 2. Bucks hub page composition

Total visible body words on the live page: **945**.

| Section | Words | Source | Shared with |
|---|---:|---|---|
| Hub `description` paragraph | 67 | data file, unchanged since first hub-split commit `0ea1d78` | only Bucks |
| Manufacturing boilerplate v1 | 56 | template variant function | Bucks rotates to v1; identical strings shared with 3 other hubs |
| Customisation boilerplate v1 | 59 | template variant function | as above |
| Child-area grid (11 town names) | 17 | data file `name` fields | only Bucks |
| Hub-level shared template sections | 746 | template (page.tsx) | identical wording on all 17 hub pages |
| **Total** | **945** | | |

The 746-word shared template block breaks down as:

- Default 4 FAQs (281 words)
- Security-specification block + 4-card ladder (115 words, added 5 May 2026)
- Audience hubs block (37 words, added 5 May 2026)
- Quick enquiry panel (90 words)
- Credentials section blurb + 9-item list (83 words)
- Section headings (47 words)
- Credentials banner strip (33 words)
- Guides-for-homeowners block (32 words)
- Final CTA (28 words)

**Bucks-only unique prose ratio: 7.1%** (67/945).
**Bucks-unique-or-near-unique ratio: 8.9%** (67 + 17 town names / 945).

The hub has **zero** `localFeatures` and **zero** custom `faqs`. The
template's conditional renderer at page.tsx:458 only renders the Local
Property Types block when `location.localFeatures.length > 0`. Bucks gets
no such block. The same is true on Surrey, Herts and Kent hubs.

## 3. Sibling hub comparison

All four hub entries in the data share the same shape: a single
~70-word `description`, no `localFeatures`, no custom `faqs`.

| Hub | Hub-description words | localFeatures | Custom FAQs |
|---|---:|---:|---:|
| Buckinghamshire | 67 | 0 | 0 |
| Surrey | 72 | 0 | 0 |
| Hertfordshire | 76 | 0 | 0 |
| Kent | 69 | 0 | 0 |

Since every hub renders the same 746-word template block plus its rotated
boilerplate (each variant is also 56+59 words, give or take a few), the
**unique-prose ratio on every hub is in the 7-8% band**. Bucks is not an
outlier on this axis; the entire hub tier is content-thin compared to its
own children.

Comparison with a child area (Beaconsfield) makes this stark. Beaconsfield's
`description` is 192 words and it carries 4 `localFeatures` bullets (44
words of HP9 postcodes, road names, school catchments). That is roughly
240 words of locality-specific signal vs Bucks hub's 67. The child pages
have ~3.5x more unique local content than the hub they belong to.

## 4. Wayback diff

Not available. The Wayback Availability API confirms no snapshots exist
for `/areas/buckinghamshire`. The page has never been archived. Substitute
evidence: git history on `src/data/locations/buckinghamshire.ts` shows only
**four** commits ever touched the file:

- `0ea1d78` (initial hub-split, 8 Apr era)
- `036d624` (SEO expansion of 10 child area pages, late Apr)
- `2c54c8b` (3 May 4-tier ladder sweep)
- `37c6833` (recent reconciliation)

**None of these four commits modified the Bucks hub `description` field
itself.** Every change touched a child area's `description` field for
ladder-language standardisation. The Bucks hub paragraph rendered on 22 Apr
is byte-identical to what is rendered today.

## 5. Specific paragraphs added or removed since 22 Apr

Added since 22 Apr at template level (affects all 161 area pages including
Bucks hub):

- **Security Specification block + 4-card ladder** (added 5 May 2026, in
  commit `a2dee50` per the comment at page.tsx:762-764). 115 shared words,
  links to `/sr3-residential-steel-door`, `/pas-24-steel-entrance-door`,
  `/secured-by-design-steel-front-door`, `/fire-rated-fd30-front-door`.
- **Audience hubs block** (added same commit). 37 shared words, links to
  `/architects`, `/developers`, `/housing-associations`,
  `/property-managers`.

Net effect on Bucks: total page word count rose by roughly 152 words, all
of it identical to every other hub and area page. Unique-prose denominator
got bigger; numerator (the 67-word description) did not move. The
unique-prose ratio actually **fell** between 22 Apr and 5 May, even though
no Bucks-specific prose was removed.

Pre-22 Apr the unique ratio was approximately 67 / 793 = 8.4%.
Post-5 May the unique ratio is 67 / 945 = 7.1%.

Removed since 22 Apr: nothing. No paragraph was deleted from the Bucks
hub. The 4-tier ladder sweep on 3 May touched every child area description
but skipped the hub entry entirely.

## 6. Verdict: is content dilution a plausible cause?

**Plausible but not sufficient on its own.** Two findings cut against a
simple "the page lost unique content" story:

1. The Bucks hub `description` field is **byte-identical** to its 22 Apr
   state. Nothing was rewritten.
2. The unique-prose ratio is low (7.1%), but it has always been low.
   Pre-22 Apr it sat at roughly 8.4%. A 1.3-point drop from a low base
   is unlikely to flip a #1 to outside top 30 by itself.

What did change: the page got **fatter with shared boilerplate**. The
5 May ladder and audience-hub blocks add 152 words of text that is now
duplicated across 161 area pages plus 10 InfoPage hubs plus the parent
`/areas` listing. Google's similarity detection may now see Bucks as
substantially more template-like than it did on 22 Apr.

Two stronger candidate causes are visible but outside this brief:

- The hub renders **no `localFeatures` block at all**, yet every child
  area renders one with 4 specific town/postcode/property-type bullets.
  Bucks the county-level page has no local signals; Beaconsfield the
  child has 4. Google's reading of "which page is the better Bucks
  answer" may have flipped to the child pages.
- The default-FAQ block (281 words) is rendered identically on Bucks
  hub, Surrey hub, Herts hub, and Kent hub with only the `${location.name}`
  token substituted. Four-county FAQ near-duplicates is exactly the
  signal Google's duplicate-content layer punishes most.

Recommendation for the next session (not for this read-only forensic):
adding 200-300 words of genuine Bucks-specific prose to the hub
`description` plus a `localFeatures` array naming the Chiltern AONB,
HP9/SL9/HP6 postcodes, and the 3-4 highest-value pockets would lift the
unique ratio from 7.1% to roughly 25%. That is a structural fix, not a
ladder-wording one.
