# Heritage Steel Front Doors Hub — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a new editorial topic hub at `https://steelr.co.uk/heritage-steel-front-doors-uk` that addresses the Listed Building Consent / conservation-area gap surfaced in the 16 May 2026 SERP baseline, plus three 308 redirects that resolve the period-property blog cannibalisation cluster.

**Architecture:** New Next.js App Router page using the existing `<InfoPage>` component (no new shared components). Schema markup is inline JSON-LD per the project pattern (BreadcrumbList + FAQPage + optional WebPage with about array). Redirects extend the existing `redirects()` function in `next.config.mjs`. Sitemap entry hard-coded in `src/app/sitemap.ts` at priority 0.9. llms.txt updates are gated by the pre-commit panel-llms workflow and ship in a separate second commit.

**Tech Stack:** Next.js 14 App Router, TypeScript, the project's `<InfoPage>` component (`src/components/InfoPage.tsx`), Schema.org JSON-LD, Resend (no change), Vercel (auto-deploy on push to main).

**Reference pattern:** `src/app/steel-front-door-vs-composite/page.tsx` is the canonical model. The heritage page mirrors that file's structure exactly: `metadata` export → `faqs` array → `breadcrumbSchema` + `faqSchema` JSON strings → default-export function returns two `<script>` tags then a single `<InfoPage>` component.

**User-facing phases (sign-off points between each):** Page draft → schema + redirects + sitemap → verification → commit A → post-deploy indexing → llms.txt commit B → state.md + measurement reminder.

---

## Pre-flight (already completed in brainstorming session)

- ✅ Baseline SERP captured: `audit-data/serp-captures/20260516-heritage-baseline.md`
- ✅ Spec approved: `docs/superpowers/specs/2026-05-16-heritage-hub-design.md`
- ✅ Four specialist reviews folded into spec (deep-reviewer, research-scout, cannibalisation-auditor, seo-schema-validator)
- ✅ Reference pattern confirmed: `src/app/steel-front-door-vs-composite/page.tsx`

---

## Phase 1 — Page draft (single commit-ready stop after this phase)

### Task 1: Create the page file with metadata + schema scaffolding

**Files:**
- Create: `src/app/heritage-steel-front-doors-uk/page.tsx`

- [ ] **Step 1: Create the directory and file with the top-of-file scaffold**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Heritage Steel Front Doors UK | Listed & Conservation | SteelR",
  description:
    "Heritage steel front doors for Grade II listed buildings, conservation areas and period properties. Listed Building Consent guidance from a UK manufacturer.",
  alternates: { canonical: "https://steelr.co.uk/heritage-steel-front-doors-uk" },
  openGraph: {
    title: "Heritage Steel Front Doors UK | SteelR",
    description:
      "Heritage steel front doors for Grade II listed buildings, conservation areas and period properties. Listed Building Consent guidance from a UK manufacturer.",
    url: "https://steelr.co.uk/heritage-steel-front-doors-uk",
    type: "website",
    images: ["/og-image.png"],
  },
};
```

- [ ] **Step 2: Add the FAQ array (6 items per spec)**

After the `metadata` export, append:

```tsx
const faqs = [
  {
    question: "Is a steel door allowed on a Grade II listed building?",
    answer:
      // Direct rebuttal of the AI Overview's "generally prohibited" claim.
      // Cite Historic England framing: "listing does not prevent all changes
      // or freeze a building in time". State the actual test is preservation
      // of special architectural or historic interest, decided by the LPA
      // conservation officer case-by-case under Section 7 of the Planning
      // (Listed Buildings and Conservation Areas) Act 1990. State that steel
      // is approvable where panel proportions, ironmongery, glazing pattern
      // and finish respect the original. Draft per spec section "FAQs" #1.
      "",
  },
  {
    question:
      "What is the difference between Listed Building Consent and Conservation Area planning permission?",
    answer:
      // Per spec section "FAQs" #2. Distinguish: LBC for any listed building
      // regardless of conservation-area status (all grades I, II*, II). CA
      // planning permission for non-listed buildings located in a designated
      // conservation area where the change affects the streetscape. Both
      // routes administered by the Local Planning Authority. AONB and Article
      // 4 directions can add restrictions.
      "",
  },
  {
    question: "How long does Listed Building Consent take and what does it cost?",
    answer:
      // Per spec section "FAQs" #3 and research-scout facts:
      // Fee: £0 (per Planning Portal). 8-week statutory determination period.
      // 21-day public consultation window within that period. Refusal can be
      // appealed to the Planning Inspectorate within 6 months. Historic
      // England consulted only on Grade I and II*, not standard Grade II.
      "",
  },
  {
    question: "Can a steel door visually match my original Victorian / Georgian / Edwardian timber door?",
    answer:
      // Per spec section "FAQs" #4. Steel is fabricated not moulded, so panel
      // proportions, moulding profiles, knocker placement, letterplate style,
      // glazing pattern and sidelight configuration can match the original
      // specification exactly. Composite doors are constrained by mould
      // geometry. Steel is closer to traditional joinery in this respect.
      "",
  },
  {
    question:
      "What if my property is in a Crittall-original or Arts and Crafts context?",
    answer:
      // Per spec section "FAQs" #5 and research-scout: Crittall is glazing/
      // garden-doors, not solid heritage front doors. If the property has
      // Crittall-original glazing or continuous historic steel detailing the
      // substrate cannot match, the right route is a Crittall-replica glazed
      // door, not a solid steel panel door. SteelR will advise honestly when
      // this applies and recommend the alternative.
      "",
  },
  {
    question: "Which UK home insurers recognise SR3 certification on heritage properties?",
    answer:
      // Per spec section "FAQs" #6. SR3 (LPS 1175 Enhanced) is widely
      // recognised by mainstream UK insurers and high-net-worth specialists
      // as a meaningful upgrade over PAS 24. On heritage properties at higher
      // contents-value brackets, SR3 frequently moves the underwriting
      // conversation. Insurers do not typically penalise heritage properties
      // for steel-door specification provided LBC has been granted.
      "",
  },
];
```

The empty `answer: ""` strings are intentional scaffolding — the prose is drafted in Task 4 once the structural skeleton is in place.

- [ ] **Step 3: Add the BreadcrumbList and FAQPage schema JSON-LD blocks**

After the `faqs` array:

```tsx
const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Heritage Steel Front Doors UK",
      item: "https://steelr.co.uk/heritage-steel-front-doors-uk",
    },
  ],
});

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

const webPageSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Heritage Steel Front Doors UK",
  url: "https://steelr.co.uk/heritage-steel-front-doors-uk",
  about: [
    { "@type": "Thing", name: "Listed Building Consent" },
    { "@type": "Thing", name: "Conservation Area planning permission" },
    {
      "@type": "Thing",
      name: "Planning (Listed Buildings and Conservation Areas) Act 1990",
    },
    { "@type": "Thing", name: "Historic England" },
    { "@type": "Thing", name: "Local Authority Building Control" },
    { "@type": "Thing", name: "Grade II listed building" },
    { "@type": "Thing", name: "Conservation area" },
    { "@type": "Thing", name: "PAS 24:2022" },
    { "@type": "Thing", name: "BS EN 1627:2011 RC4" },
    { "@type": "Thing", name: "LPS 1175 SR3" },
    { "@type": "Thing", name: "LPS 1175 SR4" },
    { "@type": "Thing", name: "Secured by Design" },
  ],
});
```

- [ ] **Step 4: Add the page function with three script tags and the empty InfoPage shell**

```tsx
export default function HeritageSteelFrontDoorsUkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageSchema }}
      />

      <InfoPage
        heroTitle="Heritage Steel Front Doors"
        h1="Heritage Steel Front Doors for Grade II Listed Buildings, Conservation Areas and Period Properties"
        intro={{
          pretitle: "Written by a UK manufacturer working in heritage contexts",
          title: "",
          body: <></>,
          body2: <></>,
        }}
        sections={[]}
        related={{ title: "Related reading", links: [] }}
        faqs={faqs}
        whyConsider={{ items: [] }}
        ctaHeading="Specify a heritage door"
        ctaHref="/contact"
        enquirySource="hub-heritage"
        enquiryContextLabel="Heritage Steel Front Doors"
      />
    </>
  );
}
```

- [ ] **Step 5: Run the build to confirm the empty scaffold compiles**

Run: `npm run build`

Expected: build succeeds. The new route appears in the build output. No type errors.

If type errors appear, fix the import paths (`@/components/InfoPage` is the standard alias) before continuing.

---

### Task 2: Write the intro paragraph (direct AI-Overview rebuttal)

**Files:**
- Modify: `src/app/heritage-steel-front-doors-uk/page.tsx` (intro prop on InfoPage)

- [ ] **Step 1: Replace the empty intro with the rebuttal-led intro**

In the `intro={{...}}` block, set the values to:

```tsx
intro={{
  pretitle: "Written by a UK manufacturer working in heritage contexts",
  title:
    "Steel front doors can be installed on listed and conservation-area properties, where the design respects the building",
  body: (
    <>
      The most common claim made about steel doors on Grade II listed
      buildings is that they are not allowed. Google's AI Overview puts
      it bluntly: "generally prohibited unless it is an exact, like-for-like
      replacement of a historical steel original." That framing is a misread
      of the actual regulatory test. Historic England, the Local Authority
      Building Control consumer guidance, and the Planning (Listed Buildings
      and Conservation Areas) Act 1990 all frame this as a consent test, not
      a material ban. Historic England's published position is direct:
      <em> listing does not prevent all changes or freeze a building in time</em>.
    </>
  ),
  body2: (
    <>
      What the conservation officer actually assesses is whether the
      proposed door preserves the special architectural or historic interest
      of the building. A faithfully detailed steel door, with period-correct
      proportions, ironmongery, glazing pattern and finish, can satisfy that
      test. This page sets out the legal framework, the design specification
      that wins approval, the period-by-period detailing, and the step-by-step
      Listed Building Consent process, from a manufacturer that has supplied
      doors to Grade II listed terraces in Kensington and conservation-area
      properties in Hampstead.
    </>
  ),
}}
```

- [ ] **Step 2: Run brand-guard on the file alone to check house-style compliance early**

Run: `node scripts/brand-guard.mjs src/app/heritage-steel-front-doors-uk/page.tsx`

Expected: no violations. If "affordable", "cheap", "discount" appear, fix. If any em dash `—` or `–` appears, replace with a comma, full stop, or "is" / "means" / "in other words". If an exclamation mark appears, rewrite.

- [ ] **Step 3: Run the build again**

Run: `npm run build`

Expected: succeeds.

---

### Task 3: Write the 8 body sections

This is the bulk of the prose work. Each section is a discrete sub-task; ship them as one commit at the end of the phase.

**Files:**
- Modify: `src/app/heritage-steel-front-doors-uk/page.tsx` (sections array on InfoPage)

- [ ] **Step 1: Replace the empty `sections={[]}` with the full sections array, ordered per spec**

For each section, embed an `InfoSection` object in the array. The prose is drafted per the spec at `docs/superpowers/specs/2026-05-16-heritage-hub-design.md` lines covering "Sections (8...)" through to the period and hardware sections. Structure:

```tsx
sections={[
  // Section 1 — Intro is the InfoPage `intro` prop above. Body sections start at #2 per spec numbering.

  // Section 2 — What Grade II listed and conservation status actually require
  {
    pretitle: "The legal framework",
    title: "What Grade II listed and conservation status actually require",
    body: (
      <>
        {/* Draft per spec section 2. Required content elements (every one
            must appear, in this order):
            1. Name the Planning (Listed Buildings and Conservation Areas)
               Act 1990, section 7, as the governing statute for works
               to a listed building.
            2. Cite Historic England as the published authority on door
               replacement guidance for listed buildings.
            3. Cite LABC (Local Authority Building Control) consumer
               guidance as the regulator's plain-English position.
            4. Distinguish Listed Building Consent (any listed building,
               all grades) from Conservation Area planning permission
               (non-listed buildings in designated conservation areas)
               from Article 4 directions and AONB context.
            5. State LBC factual specifics: £0 fee, 8-week statutory
               determination, 21-day public consultation, appeal to the
               Planning Inspectorate within 6 months. Historic England
               consulted on Grade I and II* only, not standard Grade II.
            Tone: editorial, premium, no marketing language. Length
            target: 280-340 words. */}
      </>
    ),
  },

  // Section 3 — Spec-by-spec comparison table
  {
    pretitle: "At a glance",
    title: "Heritage steel vs heritage composite imitation vs heritage timber",
    body: (
      <>
        {/* Lead paragraph (60-90 words) framing the table: a manufacturer-
            published, verifiable comparison across three material routes
            for heritage frontages. State that figures are typical UK
            market values and that SteelR figures are verifiable against
            the UKAS-accredited test report pack.

            Then render an HTML <table> with the same visual styling as
            the table in src/app/steel-front-door-vs-composite/page.tsx
            (lines 124-160 onwards for the wrapper div + table CSS).
            Use four columns: Specification | Heritage steel | Heritage
            composite imitation | Heritage timber traditional.

            Rows REQUIRED per spec (every one must appear):
            - Security certification
            - Thermal performance (U-value)
            - Acoustic performance
            - Fire rating (FD30S / FD60 availability)
            - Service life
            - Maintenance cycle
            - Visual authenticity (the deep-reviewer-mandated row)
            - Bespoke flexibility (panel proportions, glazing, hardware)
            - Conservation-officer acceptability

            Caption (sr-only): "Spec-by-spec comparison of heritage steel,
            heritage composite imitation, and heritage timber traditional
            front doors." */}
      </>
    ),
  },

  // Section 4 — Designing a steel door to satisfy a conservation officer
  // (includes the embedded "Where steel does not work" callout, NOT a
  // separate numbered section, per deep-reviewer)
  {
    pretitle: "Design specification",
    title: "Designing a steel door to satisfy a conservation officer",
    body: (
      <>
        {/* Main body (200-260 words): six-panel layouts for Georgian,
            four-panel for Victorian, simpler-glazed for Edwardian,
            period-correct ironmongery (lion-head knockers, ring knockers,
            traditional letter plates), heritage RAL colour, no visible
            certification marks on the streetscape, frame profile matching
            original reveals, glazing patterns matching original lights.
            Content can be absorbed from blog
            `best-front-doors-period-properties` (sections "Steel Doors:
            The Best of Both Worlds" through "Listed Buildings and
            Conservation Areas"). */}
      </>
    ),
    body2: (
      <>
        {/* Embedded callout (90-130 words) — "Where steel does not work
            for heritage". Honest two-paragraph note: if the property has
            Crittall-original glazing or continuous historic steel
            detailing the substrate cannot match, the right answer is a
            Crittall-replica glazed door (not a solid steel panel door).
            SteelR will advise honestly when this applies and recommend
            the alternative. Builds editorial credibility per deep-
            reviewer. */}
      </>
    ),
  },

  // Section 5 — Period-by-period guide
  {
    pretitle: "Era-tied design and colour",
    title: "Period-by-period guide",
    body: (
      <>
        {/* Open with a 40-60 word framing sentence about each era having
            its own door grammar. Then render four sub-blocks as HTML
            <h3> + paragraph + bullet list. The four sub-blocks (in
            order, full content for each except inter-war which is one
            paragraph per user direction):

            Georgian (1714-1837):
            - Six-panel doors, rectangular fanlights with radial or
              spider-web glazing bars, restrained proportions.
            - Period-tied RAL: black RAL 9005, dark green RAL 6007,
              deep red RAL 3011, navy RAL 5011.

            Victorian (1837-1901):
            - Four-panel doors often with top panels glazed, stained-
              glass leaded lights, deeper mouldings, ornate hardware
              (lion-head knockers in brass).
            - Period-tied RAL: dark green RAL 6007, burgundy RAL 3005,
              brown RAL 8016, navy RAL 5011, black RAL 9005.

            Edwardian (1901-1910):
            - Simpler panels often with large upper glazed panel, Art
              Nouveau and Arts and Crafts motifs in glazing, wider
              openings.
            - Period-tied RAL: sage green RAL 6021, cream RAL 9001,
              olive RAL 6003, muted blue RAL 5024.

            Inter-war (1918-1939): ONE PARAGRAPH ONLY per user
            direction. Flush panels, geometric glazing, Bauhaus and
            Modernist influences in selected stock. RAL: black RAL 9005,
            anthracite RAL 7016, olive RAL 6003.

            Per deep-reviewer, RAL is tied to period in this section,
            not a generic list. */}
      </>
    ),
  },

  // Section 6 — The Listed Building Consent process, step by step
  {
    pretitle: "Process",
    title: "The Listed Building Consent process, step by step",
    body: (
      <>
        {/* 200-260 words. Numbered HTML <ol> of the actual LBC stages,
            citing real UK gov sources from the research-scout report:
            1. Measured drawings of the existing door and elevations.
            2. Pre-application enquiry with the local conservation
               officer. Optional but materially raises approval odds.
            3. Formal Listed Building Consent application via the
               Planning Portal. Fee: £0.
            4. 21-day public consultation period within the 8-week
               statutory determination window.
            5. Conservation officer recommendation to the planning
               committee or delegated officer.
            6. Determination notice within the 8-week clock (often
               longer for complex applications).
            7. If approved: 3-year consent window to commence works.
            8. If refused: appeal to the Planning Inspectorate within
               6 months of the decision.

            Close with a 30-40 word statement that SteelR provides
            measured drawings, specification pack, period-detail
            visualisation and the certification documentation needed
            for the application, in-house. */}
      </>
    ),
  },

  // Section 7 — Heritage RAL colour palette consolidated reference
  {
    pretitle: "Specifying colour",
    title: "Heritage RAL colour palette reference",
    body: (
      <>
        {/* 80-120 word framing about heritage colour as a planning
            consideration not just an aesthetic one. Then a consolidated
            reference card. Use the same RAL codes from section 5.
            Render as a grouped <ul> or simple table:

            Georgian: RAL 9005 black, RAL 6007 dark green, RAL 3011
            deep red, RAL 5011 navy.
            Victorian: RAL 6007 dark green, RAL 3005 burgundy, RAL
            8016 brown, RAL 5011 navy, RAL 9005 black.
            Edwardian: RAL 6021 sage green, RAL 9001 cream, RAL 6003
            olive, RAL 5024 muted blue.
            Inter-war: RAL 9005 black, RAL 7016 anthracite, RAL 6003
            olive.

            Close with a one-sentence note that SteelR can specify any
            RAL Classic colour, and that dual-colour finishes (heritage
            exterior, contemporary interior) are available. */}
      </>
    ),
  },

  // Section 8 — Period-appropriate hardware
  {
    pretitle: "Hardware",
    title: "Period-appropriate hardware",
    body: (
      <>
        {/* 120-180 words. Cover: lion-head knockers (Georgian/Victorian),
            ring knockers (versatile traditional), decorative letter
            plates (period-appropriate), Art Nouveau handles (Edwardian),
            finger plates and bell pulls (Victorian), numerals and bell
            pushes. Finishes: polished brass, satin nickel, dark bronze,
            black. Note that hardware is part of the conservation officer
            assessment and should be selected to match documentary
            evidence of the original where possible. */}
      </>
    ),
  },
]}
```

- [ ] **Step 2: Draft the actual prose in each `body` block**

Replace the JSX-comment placeholders with the actual prose. Constraints, all enforced:

- No em dashes (`—` or `–`). Replace with commas, semicolons, or sentence rewrites.
- No exclamation marks.
- No displayed prices.
- No banned words ("affordable", "cheap", "best prices", "discount") describing SteelR or its products.
- No promotional adjectives stacked ("exquisite premium ultra-luxury") — measured editorial register.
- Target total rendered word count 2,200-2,800 for the page body (not counting FAQs).

Work section by section. Save and run the build after each section to catch type errors early.

- [ ] **Step 3: Run brand-guard on the page**

Run: `node scripts/brand-guard.mjs src/app/heritage-steel-front-doors-uk/page.tsx`

Expected: zero violations. Fix any flagged lines before moving on.

- [ ] **Step 4: Run the build to confirm the page compiles**

Run: `npm run build`

Expected: succeeds. The route `/heritage-steel-front-doors-uk` should appear in the build output as a static page.

---

### Task 4: Draft the FAQ answers

**Files:**
- Modify: `src/app/heritage-steel-front-doors-uk/page.tsx` (faqs array at top of file)

- [ ] **Step 1: Replace each empty `answer: ""` with the actual prose**

The JSX comments in Task 1 Step 2 specify each FAQ's required content. Write each as 80-150 words. Constraints:

- FAQ 1 must name the AI Overview phrase, name Historic England, name Section 7 of the Planning (Listed Buildings and Conservation Areas) Act 1990, and quote the Historic England line "listing does not prevent all changes or freeze a building in time."
- FAQ 3 must state factual specifics: £0 fee, 8-week statutory determination, 21-day public consultation, 6-month Planning Inspectorate appeal window, Historic England consulted only on Grade I and II*.
- FAQ 5 must name the Crittall-replica alternative honestly when the original was Crittall glazing.
- No em dashes, no exclamation marks, no banned words.

- [ ] **Step 2: Run brand-guard once more**

Run: `node scripts/brand-guard.mjs src/app/heritage-steel-front-doors-uk/page.tsx`

Expected: zero violations.

- [ ] **Step 3: Run the build**

Run: `npm run build`

Expected: succeeds.

---

### Task 5: Add the related links and the whyConsider closing block

**Files:**
- Modify: `src/app/heritage-steel-front-doors-uk/page.tsx`

- [ ] **Step 1: Populate the `related` prop with 4 links**

Replace the empty `links: []` with:

```tsx
related={{
  title: "Related reading",
  links: [
    {
      href: "/sr3-residential-steel-door",
      label: "SR3 residential steel doors",
      description: "The LPS 1175 Enhanced certification that lifts a heritage steel door above PAS 24, explained.",
    },
    {
      href: "/secured-by-design-steel-front-door",
      label: "Secured by Design steel front doors",
      description: "The UK police-preferred specification, recognised by insurers across the heritage property market.",
    },
    {
      href: "/blog/steel-doors-conservation-areas-planning-guide",
      label: "Conservation-area planning guide for steel doors",
      description: "The Section 69 and Article 4 detail behind conservation-area door applications, in companion blog form.",
    },
    {
      href: "/luxury-steel-entrance-door-london",
      label: "Luxury steel entrance doors in London",
      description: "The London prestige market hub, sister-page to this national heritage reference.",
    },
  ],
}}
```

- [ ] **Step 2: Populate the `whyConsider` block**

Replace the empty `items: []` with:

```tsx
whyConsider={{
  items: [
    "Your property is Grade II listed in a recognised conservation area and you have time for the Listed Building Consent route",
    "Your conservation officer has indicated openness to material upgrade with sympathetic design",
    "You want heritage proportions and a 25-year service life without the maintenance cycle of timber",
    "Your insurance assessment recommends an upgrade above PAS 24 for a higher-value property in a period setting",
  ],
}}
```

- [ ] **Step 3: Run the build**

Run: `npm run build`

Expected: succeeds.

---

### Task 6: Local preview review

- [ ] **Step 1: Start the dev server**

Run: `npm run dev`

Expected: server starts on port 3000.

- [ ] **Step 2: Open the page in a browser**

Navigate to: `http://localhost:3000/heritage-steel-front-doors-uk`

Visually verify:
- Hero banner renders with title visible
- Intro section renders both body paragraphs
- All 8 sections render in order
- Spec table renders with all 9 rows + 4 columns
- 4 RAL sub-blocks render in the period-by-period section
- LBC process ordered list renders with 8 steps
- 6 FAQs render with answers
- whyConsider block renders with 4 lines
- 4 related links render at the foot
- QuickEnquiry form renders inline above the CTA
- CTA button reads "Specify a heritage door" and links to /contact

- [ ] **Step 3: Stop the dev server**

Ctrl+C in the dev server terminal.

---

**Phase 1 sign-off stop.** All page content is written and locally previewable. No commit yet. Next phase: schema, redirects, sitemap.

---

## Phase 2 — Schema, redirects, sitemap

### Task 7: Add the three 308 redirects to `next.config.mjs`

**Files:**
- Modify: `next.config.mjs`

- [ ] **Step 1: Append three redirect entries to the existing `redirects()` array**

Add the following block immediately after the last existing entry (the `how-much-do-steel-doors-cost-uk → /steel-front-door-cost-uk` redirect, line 73 in current file), inside the array and before the closing `];`:

```javascript
      // Fourth wave cannibalisation cleanup (16 May 2026). Cannibalisation
      // auditor flagged the heritage / period / conservation cluster as a
      // five-blog redundancy. Two blogs are absorbed into the new
      // /heritage-steel-front-doors-uk topic hub. A third blog is a stub
      // of its longer companion and is redirected to the companion blog
      // (NOT the new hub — different intent).
      {
        source: "/blog/best-front-doors-period-properties",
        destination: "/heritage-steel-front-doors-uk",
        permanent: true,
      },
      {
        source: "/blog/period-property-front-door-ultimate-guide",
        destination: "/heritage-steel-front-doors-uk",
        permanent: true,
      },
      {
        source: "/blog/conservation-area-door-requirements-uk",
        destination: "/blog/steel-doors-conservation-areas-planning-guide",
        permanent: true,
      },
```

- [ ] **Step 2: Run the build to confirm the config parses**

Run: `npm run build`

Expected: succeeds. No "duplicate source" warnings.

---

### Task 8: Add the sitemap entry

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Locate the existing topic-page entries**

Search the file for entries like `/bespoke-steel-front-doors-uk` or `/sr3-residential-steel-door` to find the topic-page block. Each is rendered as an object with `url`, `lastModified`, `changeFrequency`, `priority`.

- [ ] **Step 2: Add the new entry next to the other priority 0.9 entries**

Insert (in the same block as `/bespoke-steel-front-doors-uk`):

```typescript
    {
      url: `${baseUrl}/heritage-steel-front-doors-uk`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
```

- [ ] **Step 3: Run the build**

Run: `npm run build`

Expected: succeeds. The sitemap output should include the new URL.

- [ ] **Step 4: Verify sitemap output**

Start the dev server (`npm run dev`), then fetch the sitemap:

Run: `curl http://localhost:3000/sitemap.xml | grep heritage`

Expected: one line containing `<loc>https://steelr.co.uk/heritage-steel-front-doors-uk</loc>`. Stop the dev server.

---

**Phase 2 sign-off stop.** Page, schema, redirects, sitemap all in place. Next phase: verification gates before commit.

---

## Phase 3 — Verification gates

Each gate must pass before commit. If any fails, fix and re-run.

### Task 9: Brand-guard (full sweep)

- [ ] **Step 1: Run full brand-guard**

Run: `npm run brand-guard`

Expected: zero violations. If any flagged, fix them in the page file and re-run.

### Task 10: Build verification

- [ ] **Step 1: Run a fresh build from a clean state**

Run: `rm -rf .next && npm run build`

Expected: succeeds with no errors. Route `/heritage-steel-front-doors-uk` appears as a Static page in the build output.

### Task 11: Copy-editor subagent review

- [ ] **Step 1: Dispatch the copy-editor subagent against the new page**

Use the Agent tool with `subagent_type: copy-editor`, prompt:

> "Read `src/app/heritage-steel-front-doors-uk/page.tsx` end-to-end. Review every prose block: the intro body and body2, every section body and body2, every FAQ answer, every related-link description, every whyConsider line. Enforce SteelR house style: no em dashes (— or –), no exclamation marks, no displayed prices, no banned words ('affordable', 'cheap', 'best prices', 'discount') describing SteelR or its products, no stacked promotional adjectives, no AI-tell phrases. Premium editorial register. Return PASS or a line-numbered fix list."

Expected: PASS verdict. If FAIL, apply each fix listed and re-run.

### Task 12: Fact-check-gate subagent review

- [ ] **Step 1: Dispatch the fact-check-gate subagent**

Use the Agent tool with `subagent_type: fact-check-gate`, prompt:

> "Cross-check every factual claim in `src/app/heritage-steel-front-doors-uk/page.tsx` against the SteelR project's CLAUDE.md (project slug: steelr). Claims to verify include: SteelR has supplied doors to Grade II listed terraces in Kensington and conservation-area properties in Hampstead; Planning (Listed Buildings and Conservation Areas) Act 1990 section 7 governs works to listed buildings; LBC fee is £0; 8-week statutory determination period applies; 21-day public consultation within that window; appeal to the Planning Inspectorate within 6 months; Historic England consulted only on Grade I and II*; BS EN 1627:2011 RC4 is the SteelR Standard; LPS 1175 SR3 is the Enhanced upgrade; LPS 1175 SR4 is the Commercial-grade upgrade; Secured by Design accreditation. Return PASS or list each unsupported claim with the source it conflicts with."

Expected: PASS. If FAIL, soften unsupported claims or remove them.

### Task 13: seo-schema-validator subagent review

- [ ] **Step 1: Dispatch the seo-schema-validator subagent**

Use the Agent tool with `subagent_type: seo-schema-validator`, prompt:

> "Validate the three inline JSON-LD schema blocks in `src/app/heritage-steel-front-doors-uk/page.tsx`: BreadcrumbList, FAQPage, and WebPage with about array. Verify each parses as valid JSON, each emits Google-supported schema types, the canonical URL in metadata matches the URL inside breadcrumb itemListElement[1].item, the meta title is 50-65 characters, meta description is 140-165 characters, Open Graph block is complete. Return PASS or list each problem."

Expected: PASS. If FAIL, fix each issue.

---

**Phase 3 sign-off stop.** Four green gates. Ready to commit.

---

## Phase 4 — Ship commit A (page + redirects + sitemap)

### Task 14: Stage and commit

**Files committed in this commit:**
- `src/app/heritage-steel-front-doors-uk/page.tsx` (new)
- `next.config.mjs` (3 new redirects)
- `src/app/sitemap.ts` (1 new entry)
- `audit-data/serp-captures/20260516-heritage-baseline.md` (already created, untracked)
- `docs/superpowers/specs/2026-05-16-heritage-hub-design.md` (already created, untracked)
- `docs/superpowers/plans/2026-05-16-heritage-hub-implementation.md` (this file)

**NOT in this commit:** `public/llms.txt`, `public/llms-full.txt`. Those ship in commit B after the panel-llms gate.

- [ ] **Step 1: Stage only the files for commit A**

Run:

```bash
git add src/app/heritage-steel-front-doors-uk/page.tsx \
        next.config.mjs \
        src/app/sitemap.ts \
        audit-data/serp-captures/20260516-heritage-baseline.md \
        docs/superpowers/specs/2026-05-16-heritage-hub-design.md \
        docs/superpowers/plans/2026-05-16-heritage-hub-implementation.md
```

- [ ] **Step 2: Verify nothing unintended is staged**

Run: `git status`

Expected: 6 files staged (5 new + 1 modified). `public/llms.txt` and `public/llms-full.txt` must NOT appear in the staged list. If they do, run `git restore --staged public/llms*` to unstage.

- [ ] **Step 3: Run staged-files brand-guard one final time**

Run: `npm run brand-guard:staged`

Expected: zero violations.

- [ ] **Step 4: Commit with conventional message**

Run:

```bash
git commit -m "$(cat <<'EOF'
add: /heritage-steel-front-doors-uk topic hub + 3 cannibalisation redirects

New editorial topic hub addressing Listed Building Consent + conservation
area + period-property intent. Engages directly with Google AI Overview's
"generally prohibited" misread of Grade II listed building rules, citing
Historic England, LABC and Planning (Listed Buildings and Conservation
Areas) Act 1990 section 7.

Cannibalisation cleanup: 308 best-front-doors-period-properties and
period-property-front-door-ultimate-guide into the new hub; 308
conservation-area-door-requirements-uk into the longer
steel-doors-conservation-areas-planning-guide companion blog (different
intent, different target).

Baseline SERP captured 16 May at audit-data/serp-captures/20260516-
heritage-baseline.md; re-measure 14-30 days post-launch.

llms.txt and llms-full.txt updates ship in a separate commit via the
panel-llms gate.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 5: Verify commit landed**

Run: `git log --oneline -1`

Expected: commit appears with the message subject.

- [ ] **Step 6: Push to main**

Pause here. Confirm with the user before pushing — the user may want to review the deployed page before triggering the post-deploy tasks.

Once confirmed, run: `git push origin main`

Expected: push succeeds. Vercel auto-deploy triggered.

- [ ] **Step 7: Confirm the page is live**

Wait 60-90 seconds for Vercel deploy. Then run:

```bash
curl -sI https://steelr.co.uk/heritage-steel-front-doors-uk | head -3
```

Expected: `HTTP/2 200`.

Also verify the redirects:

```bash
curl -sI https://steelr.co.uk/blog/best-front-doors-period-properties | head -3
curl -sI https://steelr.co.uk/blog/period-property-front-door-ultimate-guide | head -3
curl -sI https://steelr.co.uk/blog/conservation-area-door-requirements-uk | head -3
```

Expected: each returns `HTTP/2 308` with `location:` pointing to the new destination.

---

**Phase 4 sign-off stop.** Page is live. Next phase: indexing.

---

## Phase 5 — Post-deploy indexing

### Task 15: Submit to IndexNow (Bing, Yandex, Seznam, Naver)

- [ ] **Step 1: Submit the new URL**

Run:

```bash
node scripts/bing/indexnow-submit.mjs https://steelr.co.uk/heritage-steel-front-doors-uk
```

Expected: HTTP 200 response from `api.indexnow.org`.

### Task 16: Queue for Google Indexing API daily auto-submit

**Files:**
- Modify: `audit-data/gsc-indexing-tracker-steelr.json`

- [ ] **Step 1: Add the new URL to the `queue` array**

Open `audit-data/gsc-indexing-tracker-steelr.json`, find the `"queue"` array, and add:

```json
"https://steelr.co.uk/heritage-steel-front-doors-uk"
```

The daily Windows Task Scheduler job (`SteelrGSCIndexer`) will pick it up at 07:30 UK on the next run.

- [ ] **Step 2: Increment the `totalPages` counter to reflect the new URL**

Increment whatever current value is there by 1.

- [ ] **Step 3: Stage and commit the tracker update**

Run:

```bash
git add audit-data/gsc-indexing-tracker-steelr.json
git commit -m "chore: queue /heritage-steel-front-doors-uk for GSC Indexing API"
```

### Task 17: Manual URL Inspection priority crawl (GSC UI)

- [ ] **Step 1: User-action item**

Open Google Search Console, property `sc-domain:steelr.co.uk`. Paste `https://steelr.co.uk/heritage-steel-front-doors-uk` into the top URL Inspection bar. When the result loads, click "Request indexing." Subject to GSC's 10-per-day quota.

---

**Phase 5 sign-off stop.** Page is live, submitted to Bing immediately and Google for next-day crawl. Next phase: llms.txt commit B.

---

## Phase 6 — llms.txt panel-gated commit B

### Task 18: Edit llms.txt and llms-full.txt

**Files:**
- Modify: `public/llms.txt`
- Modify: `public/llms-full.txt`

- [ ] **Step 1: Add the URL line in `public/llms.txt`**

Open `public/llms.txt`. Find the "Topic Pages" or equivalent section that lists URLs in the format:

```
- [Topic Page Title](https://steelr.co.uk/topic-slug)
```

Add a new line in the same format:

```
- [Heritage Steel Front Doors UK](https://steelr.co.uk/heritage-steel-front-doors-uk)
```

- [ ] **Step 2: Add the 2-3 sentence extract in `public/llms-full.txt`**

Open `public/llms-full.txt`. Find the "Topic Pages" section that lists each topic page with a brief extract. Add a new entry following the existing pattern, format:

```
### Heritage Steel Front Doors UK

URL: https://steelr.co.uk/heritage-steel-front-doors-uk

Editorial reference on installing steel front doors on Grade II listed
buildings, in designated conservation areas, and on period properties.
Addresses the regulatory framework (Planning (Listed Buildings and
Conservation Areas) Act 1990 section 7, Historic England guidance,
LABC consumer guidance), the Listed Building Consent process (£0 fee,
8-week statutory determination, appeal route), period-by-period design
specification (Georgian, Victorian, Edwardian, inter-war), heritage
RAL colour palette tied to era, and period-appropriate hardware.
SteelR positioning: steel is approvable on listed and conservation
properties where panel proportions, ironmongery, glazing pattern and
finish respect the original.
```

### Task 19: Run the panel-llms workflow

- [ ] **Step 1: Stage the llms files**

Run:

```bash
git add public/llms.txt public/llms-full.txt
```

- [ ] **Step 2: Attempt a commit (it WILL fail)**

Run:

```bash
git commit -m "Add /heritage-steel-front-doors-uk to llms.txt and llms-full.txt"
```

Expected: pre-commit hook BLOCKS the commit with a "no panel approval marker" message naming the two staged files.

This is intentional — the rejection is the gate working correctly.

- [ ] **Step 3: Run the panel-llms slash command**

In Claude Code:

```
/panel-llms
```

This dispatches four agents in parallel (visibility-audit-runner, cannibalisation-auditor, research-scout, deep-reviewer) and produces a consolidated findings report.

- [ ] **Step 4: User reviews the panel findings**

Show the panel report to the user. Wait for explicit "approve" before proceeding. If the user requests changes, edit the llms files and re-run `/panel-llms`.

- [ ] **Step 5: Run the approval slash command**

Only after the user explicitly approves the findings:

```
/panel-llms-approve
```

This writes `.checks/llms-panel.json` with the staged-file SHAs.

- [ ] **Step 6: Re-run the commit**

```bash
git commit -m "$(cat <<'EOF'
add: /heritage-steel-front-doors-uk to llms.txt and llms-full.txt

URL line added to llms.txt Topic Pages section. Full extract added to
llms-full.txt Topic Pages section covering regulatory framework,
LBC process, period-by-period design, RAL palette, hardware.

Panel-llms findings approved by user before this commit.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

Expected: commit succeeds. Pre-commit hook reads the SHA marker, matches it to the staged content, allows the commit through.

- [ ] **Step 7: Push to main**

Run: `git push origin main`

Expected: push succeeds. Vercel auto-deploy.

- [ ] **Step 8: Verify llms files updated live**

Wait 60 seconds. Then:

```bash
curl -s https://steelr.co.uk/llms.txt | grep heritage
curl -s https://steelr.co.uk/llms-full.txt | grep -A 2 "Heritage Steel Front Doors"
```

Expected: both return the new lines.

---

**Phase 6 sign-off stop.** llms files updated. Page is fully shipped on-site and AI-citation-surface.

---

## Phase 7 — STATE.md update and measurement reminder

### Task 20: Update SteelR STATE.md

**Files:**
- Modify: `STATE.md`

- [ ] **Step 1: Dispatch state-md-updater subagent**

Use the Agent tool with `subagent_type: state-md-updater`, prompt:

> "Update SteelR's project STATE.md to reflect this session: shipped /heritage-steel-front-doors-uk topic hub (commit A) + 3 cannibalisation redirects + sitemap entry, then shipped llms.txt + llms-full.txt updates via the panel-llms gate (commit B). Baseline captured at audit-data/serp-captures/20260516-heritage-baseline.md. Next-action item: re-pull baseline queries 14-30 days post-deploy to capture before/after impact for the Recommendation Gate. Read the git log for the actual commit messages and SHAs."

Expected: STATE.md updated with where-I-left-off, next-action, recent-wins entries.

### Task 21: Set the 14-day measurement reminder

- [ ] **Step 1: Calendar / reminder set by user**

Today is 16 May 2026. Re-measurement window opens 30 May 2026 (14 days post-launch). Earliest meaningful re-pull date: 30 May 2026.

Re-pull steps for that future session:

1. Re-run the 3 baseline queries on ChatGPT-with-Search via the user's logged-in browser
2. Re-run depersonalised Google SERP captures for the 3 baseline queries
3. Pull GSC Performance report filtered to query cluster `heritage*`, `grade ii*`, `listed building*`, `conservation area*`
4. Compare to baseline in `audit-data/serp-captures/20260516-heritage-baseline.md`
5. Write the re-measurement to `audit-data/serp-captures/2026MMDD-heritage-postlaunch.md`
6. Tag the recommendation: if SteelR appears on any new query, upgrade [REASONED] → [TESTED]. If not, the experiment fails honestly and we revisit.

---

**Plan complete.**

---

## Verification matrix (quick-glance)

| Gate | Command / agent | Expected | Phase |
|---|---|---|---|
| Build | `npm run build` | 0 errors, route appears | 1, 2, 3 |
| Brand-guard staged | `npm run brand-guard:staged` | 0 violations | 4 |
| Brand-guard full | `npm run brand-guard` | 0 violations | 3 |
| copy-editor agent | dispatch with subagent_type | PASS | 3 |
| fact-check-gate agent | dispatch with subagent_type | PASS | 3 |
| seo-schema-validator agent | dispatch with subagent_type | PASS | 3 |
| Page live | `curl -sI <url>` | HTTP/2 200 | 4 |
| Redirects live | `curl -sI` each of 3 redirects | HTTP/2 308 each | 4 |
| IndexNow accepted | script output | HTTP 200 | 5 |
| llms files live | `curl -s` each + grep | matching lines | 6 |

## Self-review check

- **Spec coverage:** Every spec section maps to at least one task. Sections 1-8 → Tasks 2, 3. FAQs → Task 4. Related links + whyConsider → Task 5. Schema → Task 1. Redirects → Task 7. Sitemap → Task 8. Verification gates → Tasks 9-13. Indexing → Tasks 15-17. llms gate → Tasks 18-19. STATE → Task 20. Re-measurement → Task 21.
- **Placeholders:** Every step contains exact commands, exact code, or exact file paths. The body-prose tasks (3, 4) contain JSX-comment instruction blocks specifying what must appear, not "fill in prose"; this is deliberate because 2,200-2,800 words of prose cannot be embedded in a plan without making the plan unreadable, and the spec carries the prose constraints.
- **Type consistency:** Property names (`heroTitle`, `h1`, `intro`, `sections`, `related`, `faqs`, `whyConsider`, `ctaHeading`, `ctaHref`, `enquirySource`, `enquiryContextLabel`) match the `InfoPageProps` interface at `src/components/InfoPage.tsx` lines 35-77.
- **No spec drift:** Three redirects (not two), section 6 demoted to callout in section 4, period-tied RAL palette, anonymous credibility marker, optional WebPage schema with about array — all match the spec exactly.
