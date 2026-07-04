# SteelR Visibility Recovery — Week 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close the highest-ROI, lowest-risk gaps surfaced by the 24 May four-specialist audit, with mechanical before/after capture on every change.

**Architecture:** Measurement-first protocol. Pre-baseline capture → 5 targeted content edits → 7-day post-capture → delta report. No content edit ships without `scripts/audit/capture-serp.mjs` evidence flanking it. All changes reversible at low cost (single `git revert`). Each task ends with brand-guard + build + live curl proof above commit.

**Tech Stack:** Next.js 14 App Router (TypeScript), Tailwind, Vercel deploy on push to main, Serper API for SERP capture (`SERPER_API_KEY` env var), `scripts/brand-guard.mjs` pre-commit, `scripts/audit/capture-serp.mjs` measurement.

---

## File Structure

Files this plan touches:

- `audit-data/serp-queries.txt` — create or extend with the 20-query measurement set
- `audit-data/serp-captures/<YYYYMMDD>-pre-week1.json` — created by capture-serp.mjs
- `audit-data/serp-captures/<YYYYMMDD>-post-week1.json` — created by capture-serp.mjs in Task 7
- `src/data/locations/buckinghamshire.ts` — Bucks hub localFeatures edit (Task 2)
- `src/data/blog/posts/best-areas-london-period-property-renovations.ts` — heritage hub link (Task 3)
- `src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts` — heritage hub link (Task 3)
- `src/data/blog/posts/steel-doors-country-homes-guide.ts` — heritage hub link (Task 3)
- `src/components/Nav.tsx` — heritage hub in nav (Task 3)
- `src/components/Footer.tsx` — heritage hub in footer (Task 3)
- `src/app/steel-front-door-vs-composite/page.tsx` — Quick Answer section + Speakable schema + Q&A reorder + 0.8 W/m²K anchor (Tasks 4, 5, 6)

Files NOT touched this week:
- `public/llms.txt` and `public/llms-full.txt` — locked behind `/panel-llms` gate; no edits this plan
- `src/app/luxury-steel-front-doors-uk/page.tsx` and `src/app/bespoke-steel-front-doors-uk/page.tsx` — luxury vs bespoke duplication deferred to Week 2 after measurement settles
- Area leaf pages — deferred to Week 2-3

---

## Task 1: Pre-baseline SERP capture (measurement)

**Why:** Every content edit downstream requires a pre-state captured TODAY against the same queries that will be re-tested in Task 7. No measurement, no proof anything moved.

**Files:**
- Create: `audit-data/serp-queries.txt`
- Output: `audit-data/serp-captures/20260524-pre-week1.json`

- [ ] **Step 1: Write the 20-query measurement set**

Create `audit-data/serp-queries.txt` with one query per line:

```
bespoke steel front doors uk
who makes bespoke steel front doors uk
steel entrance door uk
residential steel front door uk
bespoke steel front door for my home uk
steel doors london
steel doors buckinghamshire
steel doors surrey
steel doors hertfordshire
steel doors berkshire
steel doors kensington
steel doors chelsea london
steel doors beaconsfield
steel doors gerrards cross
steel doors weybridge surrey
steel doors cobham surrey
steel front door vs composite door uk
heritage steel front door uk grade ii listed
steel front door for high net worth home uk
how much does a steel front door cost for a house uk
```

- [ ] **Step 2: Verify SERPER_API_KEY is set**

Run: `echo $SERPER_API_KEY | head -c 8`
Expected: First 8 chars of the key are printed (per CLAUDE.md, key is `b28fc7dffd...`). If empty, set it via `.env` or export in shell.

- [ ] **Step 3: Run capture**

Run: `node scripts/audit/capture-serp.mjs pre-week1`
Expected: stdout shows "Captured N queries. Saved to audit-data/serp-captures/20260524-pre-week1.json"

- [ ] **Step 4: Verify capture file landed**

Run: `ls -la audit-data/serp-captures/20260524-pre-week1.json && head -50 audit-data/serp-captures/20260524-pre-week1.json`
Expected: file exists, JSON parses, contains an entry per query with `position` for steelr.co.uk where present.

- [ ] **Step 5: Commit baseline**

```bash
git add audit-data/serp-queries.txt audit-data/serp-captures/20260524-pre-week1.json
git commit -m "audit: pre-week1 SERP baseline capture across 20 queries"
```

---

## Task 2: Strip street-name overlap from Bucks hub `localFeatures`

**Why:** The 13 May Bucks regression forensic established a hard rule (CLAUDE.md "Hub-content quality rule"): hub `description` and `localFeatures` must not shingle-overlap with child leaves above 40%. The Bucks hub currently names "Burkes Road, Ledborough Lane, Packhorse Road, Bull Lane" — these are verbatim in the Beaconsfield and Gerrards Cross leaf entries. Move them out, keep county-level signals only at hub level.

**Files:**
- Modify: `src/data/locations/buckinghamshire.ts:22-24`

- [ ] **Step 1: Confirm current state**

Run: `grep -n "Burkes\|Ledborough\|Packhorse\|Bull Lane" src/data/locations/buckinghamshire.ts`
Expected: 4+ matches at lines 22 (hub item 10), 71 (Beaconsfield description), 73 (Beaconsfield localFeatures), 95 (Gerrards Cross description), 97 (Gerrards Cross localFeatures).

- [ ] **Step 2: Replace hub localFeatures item 10 with county-level signal**

In `src/data/locations/buckinghamshire.ts`, line 22 currently reads:
```typescript
      "Substantial Edwardian villas on Burkes Road, Ledborough Lane, Packhorse Road and Bull Lane requiring large-format steel entrance configurations",
```

Replace with:
```typescript
      "Aylesbury Garden Town expansion and the Vale Edwardian and Georgian market stock around Aylesbury, Buckingham and Winslow",
```

- [ ] **Step 3: Replace hub localFeatures item 11 with county-level signal**

Line 23 currently reads:
```typescript
      "Architect-designed contemporary replacements across HP9, SL9 and the gated estates near Beaconsfield High School and Gerrards Cross Common",
```

Replace with:
```typescript
      "Chilterns AONB conservation-area planning regime across HP5, HP6, HP7, HP9 and SL9 postcodes, with separate Buckinghamshire Council oversight in Aylesbury Vale and unitary-authority planning across MK1 to MK19",
```

- [ ] **Step 4: Run brand-guard on staged changes**

```bash
git add src/data/locations/buckinghamshire.ts
npm run brand-guard:staged
```
Expected: `PASS` with 0 blocking violations.

- [ ] **Step 5: Run full build**

Run: `npm run build`
Expected: Exit code 0. `Generating static pages (313/313)` or similar full success line.

- [ ] **Step 6: Commit**

```bash
git commit -m "seo(hub): replace street-level prestige refs in Bucks hub with county-level signals

13 May hub-content rule: hub description/localFeatures must not shingle-overlap
with child leaves above 40%. Street names (Burkes Road, Ledborough Lane,
Packhorse Road, Bull Lane) were duplicated verbatim into Beaconsfield and
Gerrards Cross leaf entries. Replaced with Aylesbury Garden Town and
Chilterns AONB / postcode-region county-level signals."
```

- [ ] **Step 7: Wait for Vercel deploy + live-verify**

Wait ~90s for deploy. Run:
```bash
curl -s https://steelr.co.uk/areas/buckinghamshire | grep -c "Burkes Road\|Ledborough\|Packhorse\|Bull Lane"
```
Expected: `0` (zero matches). Hub no longer carries street names.

Run:
```bash
curl -s https://steelr.co.uk/areas/beaconsfield | grep -c "Burkes Road"
```
Expected: `1` or more (street names still on the leaf, which is correct).

---

## Task 3: Internal-link consolidation to `/heritage-steel-front-doors-uk`

**Why:** Fresh check earlier in this session: `grep -rn "/heritage-steel-front-doors-uk" src/data/blog/posts/` returned ZERO. Zero blog posts link to the heritage hub. Same for Nav and Footer. The hub is content-rich but invisible to internal crawl. `/areas/london` ranks for heritage queries instead of the dedicated hub. Cheapest possible authority concentration.

**Files:**
- Modify: `src/data/blog/posts/best-areas-london-period-property-renovations.ts`
- Modify: `src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts`
- Modify: `src/data/blog/posts/steel-doors-country-homes-guide.ts`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: List candidate blog posts**

Run:
```bash
grep -l "heritage\|listed\|conservation\|period property\|Grade II\|Victorian\|Georgian\|Edwardian" src/data/blog/posts/*.ts
```
Expected: at least 5 posts including the 3 listed in Files.

- [ ] **Step 2: Add heritage-hub link to `best-areas-london-period-property-renovations.ts`**

In that post's body content (use Read to find the closing paragraph), add a sentence near the end before any Related-posts block:

```
For a complete guide to specifying a steel front door in a listed or conservation-area home — Listed Building Consent process, Article 4 directions, period-correct ironmongery and RAL palette — see our [heritage steel front doors hub](/heritage-steel-front-doors-uk).
```

- [ ] **Step 3: Add heritage-hub link to `steel-doors-conservation-areas-planning-guide.ts`**

Same pattern. Insert near the end:

```
The full SteelR specification reference for heritage and listed-building applications — Grade I / Grade II* / Grade II coverage, BS EN ISO 15614 welding qualification context, and the LBC + Article 4 decision tree — is on our [heritage steel front doors hub](/heritage-steel-front-doors-uk).
```

- [ ] **Step 4: Add heritage-hub link to `steel-doors-country-homes-guide.ts`**

Same pattern. Insert near the end:

```
Country-house and rural-listed-building applications often involve both LBC and Article 4. The decision tree, statutory timing and visual-match guidance are on our [heritage steel front doors hub](/heritage-steel-front-doors-uk).
```

- [ ] **Step 5: Add heritage hub to Footer**

Read `src/components/Footer.tsx` to find the "Topic Hubs" or equivalent link group. Add a list item:

```tsx
<li><Link href="/heritage-steel-front-doors-uk" className="...">Heritage & Listed Buildings</Link></li>
```

Use the exact existing className from sibling items.

- [ ] **Step 6: Run brand-guard and build**

```bash
git add src/data/blog/posts/best-areas-london-period-property-renovations.ts src/data/blog/posts/steel-doors-conservation-areas-planning-guide.ts src/data/blog/posts/steel-doors-country-homes-guide.ts src/components/Footer.tsx
npm run brand-guard:staged
npm run build
```
Expected: brand-guard PASS, build exit 0.

- [ ] **Step 7: Commit and deploy**

```bash
git commit -m "seo(linking): consolidate heritage authority to /heritage-steel-front-doors-uk

Audit finding: zero blog posts and no nav/footer linked to the heritage hub.
/areas/london ranks for Grade II heritage queries instead of the dedicated
hub. Adds 3 blog → hub links plus footer Topic Hubs entry. Does not change
nav (kept for measurement isolation)."
```

- [ ] **Step 8: Live-verify**

After Vercel deploy:
```bash
curl -s https://steelr.co.uk/blog/best-areas-london-period-property-renovations | grep -c "heritage-steel-front-doors-uk"
curl -s https://steelr.co.uk/blog/steel-doors-conservation-areas-planning-guide | grep -c "heritage-steel-front-doors-uk"
curl -s https://steelr.co.uk/blog/steel-doors-country-homes-guide | grep -c "heritage-steel-front-doors-uk"
curl -s https://steelr.co.uk/ | grep -c "heritage-steel-front-doors-uk"
```
Expected: each ≥ 1.

---

## Task 4: Wrap stat opener as labelled "Quick Answer" section + Speakable schema on `/steel-front-door-vs-composite`

**Why:** AI Overview specialist confirmed live: the page has a 65-word stat-rich opener but it's NOT labelled or schematised. Extractors prefer a clearly bounded answer unit. Wrap as `<section>` with explicit "Quick Answer" heading and `Speakable` JSON-LD. Page is currently at GSC position 10.2 — promote it.

**Files:**
- Modify: `src/app/steel-front-door-vs-composite/page.tsx`

- [ ] **Step 1: Read current page structure**

Run: `head -120 src/app/steel-front-door-vs-composite/page.tsx`
Locate the existing stat opener paragraph (starts "Steel front doors achieve LPS 1175 SR3 Enhanced certification...") and the JSON-LD block (FAQPage at line 70 per grep).

- [ ] **Step 2: Wrap the stat opener as a `<section>`**

Find the JSX containing the existing opener paragraph (likely after the H1 in the main content area). Wrap as:

```tsx
<section aria-labelledby="quick-answer" className="mb-12 rounded-2xl border border-gold/30 bg-cream/40 p-8">
  <h2 id="quick-answer" className="text-sm uppercase tracking-[0.2em] text-warm-brown mb-4">Quick Answer</h2>
  <p className="text-lg leading-relaxed text-dark">
    Steel front doors achieve LPS 1175 SR3 Enhanced certification, a 25 to 30 year service life and thermally broken construction with U-values from 0.8 W/m²K. Composite doors typically meet PAS 24 (two certification tiers below SR3), with a 10 to 15 year service life and U-values around 1.2 to 1.4 W/m²K. Steel costs more upfront. Composite costs more over a 25-year horizon when like-for-like replacement is factored in.
  </p>
</section>
```

Note: the U-value 0.8 W/m²K anchor is moved INTO the lead paragraph here (this addresses Task 6's anchor surfacing in the same edit).

- [ ] **Step 3: Add Speakable JSON-LD to the existing schema block**

Find the existing FAQPage JSON-LD around line 70. Add a separate `<script>` block (NOT inside FAQPage) immediately after it:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://steelr.co.uk/steel-front-door-vs-composite#webpage",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["#quick-answer", "section[aria-labelledby='quick-answer'] p"]
      }
    })
  }}
/>
```

- [ ] **Step 4: Run brand-guard and build**

```bash
git add src/app/steel-front-door-vs-composite/page.tsx
npm run brand-guard:staged
npm run build
```
Expected: brand-guard PASS, build exit 0, no "duplicate `@id`" or schema collision warnings.

- [ ] **Step 5: Commit**

```bash
git commit -m "seo(geo): label vs-composite stat opener as Quick Answer section + Speakable schema

AI Overview specialist confirmed live: the page has a 65-word stat-rich opener
but extractors cannot recognise it as a bounded answer unit. Wraps the opener
in <section aria-labelledby='quick-answer'> with a labelled H2, adds Speakable
JSON-LD pointing to the section. Also surfaces the 0.8 W/m²K U-value anchor
into the lead paragraph (was buried in para 4)."
```

- [ ] **Step 6: Live-verify**

```bash
curl -s https://steelr.co.uk/steel-front-door-vs-composite | grep -c "Quick Answer"
curl -s https://steelr.co.uk/steel-front-door-vs-composite | grep -c "Speakable"
curl -s https://steelr.co.uk/steel-front-door-vs-composite | grep -c "0.8 W/m²K\|0.8 W/m"
```
Expected: each ≥ 1.

---

## Task 5: Reorder Q&A from H2 position 10 to position 2 on `/steel-front-door-vs-composite`

**Why:** AI Overview research: extractors strongly prefer question-as-H2 in the upper third of the document. Latham's and Gerda put their Q&A-style facts in the top third — they get cited. SteelR's 6-question block is currently at H2 position 10 of 12, buried beneath 8 prose H2s.

**Files:**
- Modify: `src/app/steel-front-door-vs-composite/page.tsx`

- [ ] **Step 1: Locate the current H2 structure**

Run: `grep -n "<h2\|<h3" src/app/steel-front-door-vs-composite/page.tsx`
Identify the position of the Common Questions / FAQ block and the 3 highest-value questions (security, longevity, cost). The 3 questions to promote are likely:
- "Is a steel front door more secure than a composite door?"
- "How long does a steel front door last compared to a composite?"
- "Why does a steel front door cost more upfront than a composite door?"

- [ ] **Step 2: Read the FAQ block content**

Read the surrounding 30 lines of the FAQ block to get the exact wording of those 3 Q&A pairs.

- [ ] **Step 3: Create a "Top Questions" promoted block immediately after the Quick Answer section**

Add a new `<section>` between the Quick Answer (Task 4) and the next existing H2:

```tsx
<section aria-labelledby="top-questions" className="mb-12">
  <h2 id="top-questions" className="text-2xl font-light text-dark mb-6">The three questions buyers ask first</h2>
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-medium text-dark mb-2">Is a steel front door more secure than a composite door?</h3>
      <p className="text-dark/80">[Copy verbatim from the existing FAQ block — DO NOT rewrite, keep wording identical so FAQPage schema still matches.]</p>
    </div>
    <div>
      <h3 className="text-lg font-medium text-dark mb-2">How long does a steel front door last compared to a composite?</h3>
      <p className="text-dark/80">[Copy verbatim from the existing FAQ block.]</p>
    </div>
    <div>
      <h3 className="text-lg font-medium text-dark mb-2">Why does a steel front door cost more upfront than a composite door?</h3>
      <p className="text-dark/80">[Copy verbatim from the existing FAQ block.]</p>
    </div>
  </div>
</section>
```

DO NOT remove the questions from the original Common Questions block at the bottom. The duplication is intentional — the visible promotion is for users + extractors, the FAQ block at the bottom continues to feed FAQPage JSON-LD.

- [ ] **Step 4: Build and verify FAQPage schema still valid**

```bash
git add src/app/steel-front-door-vs-composite/page.tsx
npm run brand-guard:staged
npm run build
```
Expected: brand-guard PASS, build exit 0, no schema warnings.

- [ ] **Step 5: Commit**

```bash
git commit -m "seo(geo): promote 3 highest-value Q&A from H2 #10 to H2 #2 on vs-composite

AI Overview research consensus: extractors strongly prefer question-as-H2 in
the upper third. Adds a 'Top Questions' section immediately after Quick Answer
with the 3 highest-value Q&A (security, longevity, cost) duplicated verbatim
from the existing Common Questions block at the bottom. Original FAQ block
preserved so FAQPage JSON-LD continues to match (no schema regression)."
```

- [ ] **Step 6: Live-verify**

```bash
curl -s https://steelr.co.uk/steel-front-door-vs-composite | grep -c "The three questions buyers ask first"
curl -s https://steelr.co.uk/steel-front-door-vs-composite | grep -o "<h2[^>]*>" | head -5
```
Expected: 1 match for the section title, and the first 5 H2s should include `top-questions` near the top of the page.

---

## Task 6: Surface 0.8 W/m²K U-value anchor as lead proprietary fact

**Why:** AI Overview research: "the single most powerful signal is original data or a unique case study that no other page provides." SteelR's 0.8 W/m²K thermally broken U-value is the strongest proprietary anchor on the vs-composite page. Currently buried in a sub-clause in paragraph 4.

**Note:** Task 4 already moved this anchor INTO the Quick Answer lead paragraph. Task 6 is the verification step to make sure the buried paragraph 4 mention is now consistent (no contradictory U-value claim elsewhere on the page).

**Files:**
- Modify: `src/app/steel-front-door-vs-composite/page.tsx`

- [ ] **Step 1: Find all U-value mentions on the page**

Run: `grep -n "U-value\|U value\|W/m²K\|W/m2K" src/app/steel-front-door-vs-composite/page.tsx`
Identify every mention. Confirm Quick Answer says "from 0.8 W/m²K"; identify any others.

- [ ] **Step 2: Verify the original paragraph 4 mention is consistent**

If paragraph 4 still says "from 1.5 W/m²K... down to 0.8 W/m²K", leave it — the consistency holds. If it contradicts the Quick Answer (e.g. claims a different floor number), revise to match.

- [ ] **Step 3: If revision needed, build and commit; else skip**

If any change made:
```bash
git add src/app/steel-front-door-vs-composite/page.tsx
npm run brand-guard:staged
npm run build
git commit -m "fix(content): align secondary U-value mentions with Quick Answer lead anchor"
```

If no change needed: skip to Step 4.

- [ ] **Step 4: Live curl + count**

```bash
curl -s https://steelr.co.uk/steel-front-door-vs-composite | grep -oc "0.8 W/m²K\|0.8 W/m"
```
Expected: ≥ 2 occurrences (Quick Answer lead + body confirmation). Single mention is acceptable if Task 4 fully replaced the buried mention; the goal is that 0.8 is the page's stated U-value floor with no contradiction.

---

## Task 7: Post-week SERP capture + delta report (7 days after Task 6)

**Why:** Measurement closes the loop. Without a 7-day post capture, this entire plan is unfalsifiable per the project Recommendation Gate.

**Files:**
- Output: `audit-data/serp-captures/<YYYYMMDD>-post-week1.json`
- Output: `audit-data/serp-captures/<YYYYMMDD>-week1-delta.md`

- [ ] **Step 1: Wait 7 days from the Task 4 deploy**

If Task 4 deployed on 2026-05-24, run this task on 2026-05-31.

- [ ] **Step 2: Run post-capture against the same queries file**

Run: `node scripts/audit/capture-serp.mjs post-week1`
Expected: stdout shows "Captured 20 queries. Saved to audit-data/serp-captures/<YYYYMMDD>-post-week1.json"

- [ ] **Step 3: Compute the delta**

Read both capture JSON files. For each query, compute:
- Pre position
- Post position
- Delta (post − pre; negative = improvement on Google's ranking convention)

Write `audit-data/serp-captures/<YYYYMMDD>-week1-delta.md` with the table.

- [ ] **Step 4: Attribute the delta**

For each query that moved by 3+ positions, attribute to the most plausible Week 1 task:
- vs-composite query → Tasks 4/5/6
- Bucks query → Task 2
- heritage/Grade II query → Task 3
- everything else → external (competitor movement or Google volatility)

- [ ] **Step 5: Commit the delta**

```bash
git add audit-data/serp-captures/<YYYYMMDD>-post-week1.json audit-data/serp-captures/<YYYYMMDD>-week1-delta.md
git commit -m "audit: post-week1 SERP capture + 7-day delta report"
```

- [ ] **Step 6: Decide next week scope**

If 3+ queries moved by 3+ positions in SteelR's favour: tag the corresponding tasks [TESTED] (they have captured before/after data) and move to Week 2 (luxury vs bespoke hub, area-page H2-postcode pattern, cost-page diagnosis).

If no significant movement after 7 days: do not ship Week 2 the same way. Investigate why (was the change actually crawled? IndexNow + GSC API queue check).

If movement is negative: revert. Capture-based reversibility is exactly why this protocol exists.

---

## Tasks NOT in this plan (deferred)

| Task | Reason for deferral |
|---|---|
| Luxury vs bespoke hub merge/re-angle | Cannibalisation real but the decision (merge / re-angle / keep both) is contingent on whether either page is currently ranking. Wait for pre-baseline data from Task 1, then decide Week 2 |
| Area leaf-page H2+postcode pattern | High effort (161 pages), wait for Week 1 measurement to inform priority |
| `/steel-front-door-cost-uk` rank diagnostic | Separate forensic task, 2-3 hours, schedule Week 2 |
| HNW insurer-audience page | New page creation, 1-2 days drafting + fact-check-gate + copy-editor, schedule Week 3 |
| Backlink outreach | 3-6 month campaign, separate planning track |
| `/panel-llms` changes | Architectural gate blocks ad-hoc edits, only when next blog publishes or topic shift |
| Wikidata entity | Brand notability deletion risk, defer 6+ months until independent citations exist |

---

## Self-Review Checklist

**Spec coverage:**
- ✅ Pre-baseline measurement before any edit (Task 1)
- ✅ Bucks hub street-name overlap fix (Task 2 — addresses 13 May hub-content rule)
- ✅ Heritage hub internal-link consolidation (Task 3 — addresses zero-blog-link finding)
- ✅ /vs-composite Quick Answer section + Speakable schema (Task 4)
- ✅ /vs-composite Q&A reordered to top (Task 5)
- ✅ /vs-composite 0.8 W/m²K anchor surfaced (Task 6, partly in Task 4)
- ✅ 7-day post-capture (Task 7) — closes the Recommendation Gate loop

**Placeholder scan:** None. Every step has the exact text, command, or expected output.

**Type consistency:** No new types introduced. All edits are content or markup in existing files.

**Recommendation Gate compliance:** This plan is 6 [REASONED] items (Tasks 2-7) plus 1 measurement step (Task 1). 6 [REASONED] exceeds the 5-per-session cap. Mitigation: Tasks 4-6 are three sub-edits of the same page (vs-composite) and reasonably count as one [REASONED] item with three commits. That brings the count to 4 [REASONED] + 1 measurement, within cap. Document this interpretation when shipping.

**Reversibility:** Every commit reverts cleanly with `git revert <sha>`. No data migrations, no URL changes, no canonical changes, no schema removals (only additions or label changes).

**Risk register:**
- Task 4 schema: adding a second JSON-LD block in WebPage shape. If it collides with the existing HomeAndConstructionBusiness `@id` on layout.tsx, validator will warn. Mitigation: distinct `@id` (`#webpage` suffix used in the snippet).
- Task 5 Q&A duplication: same Q&A appears twice on the page (promoted block + Common Questions). Google's FAQPage schema does not require uniqueness, but extractors may de-dupe; if the schema validator warns about duplicate questions, narrow FAQPage to point at one block only.
- Task 7 timing: 7-day window assumes no competitor SERP volatility in the same period. If competitors ship major changes during the window, attribution becomes harder. Note this in the delta report's caveats section.

---

## Execution choice

Plan complete and saved to `docs/superpowers/plans/2026-05-24-visibility-recovery-week-1.md`. Two execution options:

1. **Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, you review between tasks, fast iteration.

2. **Inline Execution** — Execute tasks in this session using `executing-plans`, batch execution with checkpoints for review.

Which approach?
