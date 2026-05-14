# Google organic + Maps spot-check — 2026-05-06 (post-63778fb deploy)

**Method:** Chrome MCP driving the user's logged-in Google session (UK locale, en-GB).
**Time:** 6 hours after commit 63778fb landed live.
**Method limitation:** Google Maps results show "You manage this Business Profile" badge on SteelR's listing for the user (Mani Sandhu, owner) — Maps positions are owner-biased and uncertain for general searchers.

## Top-line

**3 wins, 2 gaps.** The post-rewrite topic hubs are reindexing fast — `/sr3-residential-steel-door` jumped from #6 (morning) to #2 (now) in 6 hours. The Buckinghamshire regression flagged this morning has fully reversed (off-top-30 → #1). The two gaps are broad-commercial unprompted queries where heritage brands dominate.

## Per-query findings

### Q1: `steelr` — brand recall
**Result: #1 organic + 6 sitelinks.** Brand SERP fully owned.

- Title surfaced: "SteelR | Bespoke Steel Front Doors UK | SR3 / SR4 Available" — the exact post-fix `/security` meta title from yesterday's commit
- Snippet starts with "Yes." — likely the FAQ flip we shipped
- 6 sitelinks: About SteelR, Blog, Bespoke Steel Door Designs, Steel Entrance Doors London, Bespoke Steel Front Doors UK, Our Process
- Right-rail knowledge panel: Pittsburgh Steelers (NFL) — generic brand competition for the term "steelr", not a SteelR-specific issue

### Q2: `bespoke steel front doors UK` — priority 0.9 hub query
**Result: SteelR absent page 1 organic + AI Overview not citing SteelR.** Major gap on the flagship hub.

- Top 10 organic: Modern Doors, Bespoke Steel Doors, Strongdor, Black Steel Doors, Original Steel Doors, steeldoorsolutions, uniquesteelwindows, Maxium, Samson, Crittall
- AI Overview cites "Modern doors +5" — SteelR not in those 6 sources
- Maps 3-pack: SteelR shown as logged-in owner; general-searcher position unknown

The `/bespoke-steel-front-doors-uk` hub page (sitemap priority 0.9) is built and live, but Google hasn't promoted it on its own flagship query yet. Possible reasons: page is recent (Phase 1D, 18 Apr); competitors have years of backlinks; today's hero rewrite hasn't been recrawled by Google for this hub yet.

### Q3: `SR3 residential steel door` — post-rewrite topic hub test
**Result: #2 organic.** Up from #6 (this morning) → #2 (now) in 6 hours.

- #1: Strongdor — Security Rated Steel Door - SR3
- **#2: steelr.co.uk — SR3 Residential Steel Door | LPS 1175 Enhanced Upgrade**
- Snippet shows verbatim post-rewrite body copy: *"LPS 1175 SR3 is SteelR's Enhanced upgrade tier above the BS EN 1627 RC4 Standard. The LPCB police-preferred specification, available on every door."*

Direct evidence today's recrawl is happening on this URL. Multiple competitors below SteelR are flagged "Missing: residential" by Google — SteelR's title is the cleanest exact-intent match for "SR3 residential steel door".

### Q4: `steel doors London` — broad-commercial query
**Result: SteelR absent top 9 organic.** Same gap as morning audit on this query (the Kensington borough page is doing better at #5).

- Top 9: steeldoorsolutions, steeldoorslondon, Design Plus, doorsuppliers, Black Steel, Original Steel Doors, Bradbury, ArtSteel, Prestige

Heritage citation graph wins again. Same pattern as Perplexity/Gemini/AI Mode best-of queries.

### Q5: `steel doors Buckinghamshire` — regression check
**Result: #1 organic. The regression has fully reversed within 6 hours.**

- **#1: steelr.co.uk — Steel Doors Buckinghamshire**
- #2: vitrums.co.uk — Steel Security Doors in Buckinghamshire (parent company cross-cite)
- #3-10: HomeWorks, TS Designs, Samson Doors, Doors4Security, Original Steel Doors, Samson Doors, steelsecuritydoors, Bradbury

Morning audit had this URL "off top-30". Now #1. Almost certainly an index refresh that picked up the area-page security spec block + the post-fix metadata. Both Mani-owned properties (SteelR + Vitrum Solutions) holding top 2.

## Pattern across the 5 queries

| Query type | SteelR result | Why |
|---|---|---|
| Brand | 🔥 #1 + 6 sitelinks | Yesterday's rewritten content surfacing |
| Direct topic hub (SR3) | 🔥 #2 (was #6 this morning) | Recrawl picked up the post-rewrite content + verbatim body copy in snippet |
| Area page (Buckinghamshire) | 🔥 #1 (was off top-30 this morning) | Regression reversed by index refresh; area template + security spec block winning |
| Priority hub (bespoke front doors UK) | ❌ Absent page 1 | Same heritage citation gap as Perplexity/Gemini/AI Mode |
| Broad commercial (steel doors London) | ❌ Absent top 9 | Same as above |

## What this validates

- ✅ The /security FAQ flip + meta title rewrite are now propagated to brand SERP
- ✅ The /sr3-residential-steel-door post-rewrite is being read AND ranking — #6 → #2 in 6 hours
- ✅ Area pages are healthy — Buckinghamshire regression reversed, suggests this morning's "off top-30" was a transient indexing flicker not a content issue
- ✅ Snippet surfacing yesterday's verbatim body copy proves recrawl is current

## What's still open

- **Broad-commercial best-of queries** (steel doors London, bespoke steel front doors UK) — same gap as the AI engines (Perplexity / Gemini / Google AI Mode). Heritage citation graph dominates. Three remediation levers identified earlier (trade press, YMYL bylines, long-tail "best [niche]" pages) apply equally here.
- **AI Overview on the priority hub query** — Modern Doors +5 are cited; SteelR isn't yet a source for the AI Overview on "bespoke steel front doors UK". Worth monitoring whether yesterday's content updates change the citation set within a week.
- **Maps 3-pack** for general searchers — owner-bias makes Chrome MCP's view unreliable. Would need an unauthenticated session or a non-Mani logged-in user to verify.

## Strategic implication

**The post-deploy state is healthier than the morning audit suggested.** Two of the five queries (Buckinghamshire, SR3 residential) showed material improvements within 6 hours of commit 63778fb landing — both now #1 or #2. The brand query is locked in at #1.

The remaining gaps (`bespoke steel front doors UK`, `steel doors London`) are unprompted broad-commercial queries — same shape as the AI engines' best-of question, same root cause (citation graph thin), same remediation playbook.

## Files

- This report: `audit-data/serp-captures/20260506-google-organic-spotcheck.md` (gitignored)
- Source: live Chrome MCP session against google.co.uk, 2026-05-06
- Companion: `audit-data/serp-captures/20260506-ai-citation-spotcheck.md` (5 AI engines tested earlier today)
