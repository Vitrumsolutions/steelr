# SteelR Accessibility Audit - WCAG 2.2 AA

Date: 2026-05-14. Scope: read-only static + live diagnostic. No code changed.

## Method

Source review of `layout.tsx`, `globals.css`, `Nav`, `Footer`, `Hero`,
`ContactForm`, `QuickEnquiry`, `FileUpload`, `HeroImageWithZoom`, `ScrollReveal`,
`ScrollProgress`, `InfoPage`, and page templates for home, `/contact`,
`/design-estimate`, `/areas/[slug]`, `/blog/[slug]`, `/collection/[slug]`,
`/security-specification`. Live checks via curl on `/` and `/contact` (HTTP 200,
`<html lang="en-GB">`, skip link, image alt coverage). Contrast computed from
sRGB relative luminance.

## Per-page-type findings

**Global (layout)** - `lang="en-GB"` set. Skip link `#main-content` present,
`<main id="main-content" tabIndex={-1}>` is a valid target. Single `<nav>`,
`<main>`, `<footer>` landmarks. PASS.

**Homepage `/`** - sr-only H1, then H2/H3 only, no skipped levels. Hero carousel
has a pause/play button (WCAG 2.2.2) with `aria-label`, visible focus outline.
All hero `<Image>` have descriptive alt. PASS.

**Collection door page** - single H1, H2/H3 nesting clean. `HeroImageWithZoom`
is a real `<button>` with `aria-label`, modal has `role="dialog"`
`aria-modal="true"`, Escape closes, focus moves to close button. All images have
alt. Minor: breadcrumb `<nav>` unlabelled (see Outstanding).

**Blog post** - H1 present, markdown `##`/`###` map to H2/H3 in order. `<article>`
landmark used. `<time dateTime>` correct. Breadcrumb `<nav>` unlabelled, no
`aria-current`.

**Area hub `/areas/buckinghamshire`** - sr-only H1, H2/H3 only. All gallery
images have contextual alt. Breadcrumb `<nav>` unlabelled.

**Topic hub `/bespoke-steel-front-doors-uk` (InfoPage)** - sr-only H1, H2/H3
nesting clean. FAQ renders as static H3 + paragraph (not an interactive widget,
so no ARIA needed - correct). PASS.

**`/contact`** - every input has a programmatic `<label htmlFor>`. Optional
fields labelled "(optional)" in text. Error block has `role="alert"`
`aria-live="assertive"`. Submit is a real `<button>`. FileUpload uses a `<label
htmlFor>` wrapping the visually-hidden `<input type="file">` - keyboard
reachable. PASS for labelling.

**`/design-estimate` (multi-step)** - step indicator has `role="progressbar"`
with `aria-valuemin/max/now/text`. Each step has an sr-only H2 that receives
focus on step change. `aria-live="polite"` step announcement present. Every
`Input`/`Select` helper renders `<label htmlFor>`. Strong implementation. PASS.

**QuickEnquiry (inline, 288 pages)** - per-instance unique ids
(`qe-name-${source}`), `<label htmlFor>` on all three fields, `required` +
`aria-required="true"`, honeypot is `aria-hidden` + `tabIndex={-1}`. PASS.

## Contrast computation table

Body text needs 4.5:1, large text / UI components need 3:1.

| Foreground | Background | Ratio | Body | Large/UI |
|---|---|---|---|---|
| gold #c9a96e | cream #f5f0e8 | 2.05:1 | FAIL | FAIL |
| gold #c9a96e | page-bg #e8e3db | 1.79:1 | FAIL | FAIL |
| warm-brown #8a6f4e | cream #f5f0e8 | 4.29:1 | FAIL (marginal) | PASS |
| warm-brown #8a6f4e | page-bg #e8e3db | 3.76:1 | FAIL | PASS |
| dark #1a1a18 | gold #c9a96e (CTA btn) | 7.43:1 | PASS | PASS |
| label #6b5a42 | cream #f5f0e8 | 6.50:1 | PASS | PASS |
| body #5a5a58 | cream #f5f0e8 | 6.41:1 | PASS | PASS |
| breadcrumb link #b8943f | cream #f5f0e8 | 2.93:1 | FAIL | FAIL (marginal) |
| table row-head #999 | cream #f5f0e8 | 2.51:1 | FAIL | FAIL |

CTA buttons (dark on gold) pass comfortably. The risks are gold-as-text and the
two muted greys used for breadcrumb links and table row headers.

## Confirmed fixed from the 3 May 2026 bundle

- `:focus-visible` rings on form inputs (gold 2px outline, offset) - present in
  `globals.css`, plus mouse-only `:focus:not(:focus-visible)` fallback. HELD.
- `prefers-reduced-motion: reduce` block neutralises animation/transition
  duration and scroll-behavior globally; `ScrollReveal` and `ScrollProgress`
  also gate on a `useReducedMotion` hook in JS. Hero Ken Burns + carousel
  crossfade are CSS animations caught by the media query. HELD.
- `/security-specification` table has `<caption class="sr-only">` and
  `scope="col"` / `scope="row"` on all header cells. HELD.

## Outstanding WCAG 2.2 AA failures, ranked

1. **HIGH - gold #c9a96e used as text colour fails 1.4.3.** Appears as link
   hover colour (`hover:text-gold`), the `*` required-field marker, and accent
   text. At 2.05:1 on cream it is unreadable to low-vision users. The `*` is
   `aria-hidden` so not a labelling failure, but hover-to-gold on nav/footer
   links is a real contrast failure on hover state.
2. **HIGH - breadcrumb link #b8943f at 2.93:1 fails 1.4.3** on area, blog and
   collection breadcrumbs. These are functional navigation links.
3. **MEDIUM - table row-header #999 at 2.51:1 fails 1.4.3** on
   `/security-specification`. Row labels carry meaning.
4. **MEDIUM - warm-brown #8a6f4e at 4.29:1 / 3.76:1 fails 1.4.3 for body
   text.** Used for taglines, trust rows, "(optional)" hints, helper copy in
   QuickEnquiry and ContactForm. Passes as large text only; much of it is
   small (10-12px).
5. **LOW - breadcrumb `<nav>` elements have no `aria-label`** (1.3.1 / 4.1.2).
   Two `<nav>` landmarks per page (site nav + breadcrumb) are
   indistinguishable to screen-reader landmark navigation. Last crumb also
   lacks `aria-current="page"`.
6. **LOW - mobile menu overlay**: `role="dialog"` + `aria-modal` + focus trap +
   Esc all correct, but the overlay stays in the DOM with `aria-hidden={!menuOpen}`
   while links inside get `tabIndex={-1}` when closed - acceptable, no trap.
   No failure; noted as verified-good.

## Recommended fixes (not implemented)

- **R1 (Reasoned, cheap):** Stop using `#c9a96e` as a text/link colour. For link
  hover, swap to a darker gold around `#8a6f4e` or darker (compute to >=4.5:1),
  or keep gold only for non-text accents (borders, the logo pipe, icon fills).
  Metric: contrast ratio >=4.5:1 measured pre/post. Reversible cheaply.
- **R2 (Reasoned, cheap):** Darken breadcrumb link from `#b8943f` to a tone at
  >=4.5:1 on cream (around `#7a6033`). Metric: computed ratio. Cheap revert.
- **R3 (Reasoned, cheap):** Darken `/security-specification` row-header `#999`
  to at least `#595959` (4.6:1 on cream). Metric: computed ratio.
- **R4 (Reasoned, cheap):** Replace `#8a6f4e` body/helper text with `#6b5a42`
  (already used elsewhere at 6.5:1) for any text under ~18px. Keep warm-brown
  only for large headings. Metric: computed ratio per instance.
- **R5 (Reasoned, cheap):** Add `aria-label="Breadcrumb"` to the three
  breadcrumb `<nav>` elements and `aria-current="page"` to the final crumb
  span. Metric: landmark uniqueness in an a11y tree dump. Trivial revert.

All five are cheap-to-reverse Reasoned recommendations - within the gate's
Reasoned cap and reversibility rule. None require live data to justify; each is
verifiable in-sandbox by recomputing contrast or dumping the a11y tree.

## Summary verdict

Structural accessibility is strong: correct `lang`, working skip link, single
H1 with a consistent sr-only pattern, proper landmarks, fully labelled forms
including the multi-step estimate and the 288-page inline QuickEnquiry,
keyboard-trapped modals with focus return, a carousel pause control, and a
genuine `prefers-reduced-motion` implementation in both CSS and JS. The 3 May
bundle held in full. The remaining gap is entirely colour contrast: the brand
gold fails as a text colour, and three muted tones (breadcrumb links, table row
headers, warm-brown helper text) fall below 4.5:1 on cream. CTA buttons pass.
None of the failures are structural or blocking for keyboard or screen-reader
users; they are readability failures affecting low-vision visitors, which
matters given the older buyer demographic. Fixing them is five small,
cheap-to-reverse colour-token changes plus one `aria-label` addition.
