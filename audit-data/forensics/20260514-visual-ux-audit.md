# SteelR Visual / UX / Conversion-Flow Audit — 14 May 2026

Read-only diagnostic. No code changed.

## Method

Source review of the shared components (Nav, Logo, Hero, Footer, QuickEnquiry,
InfoPage, ContactForm) plus the four high-traffic templates (homepage
`src/app/page.tsx`, area `src/app/areas/[slug]/page.tsx`, collection item,
blog post, `design-estimate`). Live-site verification via curl against
production HTML on `/`, `/collection`, `/areas/london`, `/blog`,
`/design-estimate`, `/contact`, `/process`, one collection item and one blog
post. Hero image dimensions read off disk with `file`. All seven sampled
routes returned HTTP 200. GA4 (`G-VSZ1XXGY2Z`) confirmed firing in production.

## Brand consistency

Strong and consistent.

- Wordmark is correct everywhere. The pipe is a CSS `<span>` rectangle
  (`Logo.tsx`, `Hero.tsx` logo flash, social scripts) — no literal `|`
  character anywhere in rendered output. Verified in live homepage HTML.
- Colour tokens (cream `#f5f0e8`, ink `#1a1a18`, gold `#c9a96e`, warm-brown
  `#8a6f4e`) are used uniformly across Nav, Hero, InfoPage, QuickEnquiry,
  Footer.
- Montserrat (body) + Cormorant Garamond (display) applied consistently via
  CSS vars. One inconsistency: the mobile menu links use the *display* serif
  font at 26px (`Nav.tsx` line 276) while the desktop nav uses Montserrat
  uppercase 11px. Not wrong, but it is a different visual language for the
  same navigation. Minor.
- No page breaks the minimal-architectural language. House-style rules (no
  em dashes, no exclamation marks) hold in all sampled copy.

## Visual hierarchy and premium positioning

Homepage above-the-fold reads premium and on-brand. The hero CTA block leads
with a security-led headline ("The UK's highest security entrance doors,
made to your exact specification"), a credentials line (BS EN 1627 RC4, ISO
9001, Secured by Design) top-left, and a single gold CTA. White space is
generous, the gradient keeps text legible. This clears the premium bar.

The weak point is the **area-page template**. `/areas/[slug]` has no visual
H1 and no hero banner — it opens straight into a `bg-cream` section with a
9px gold pretitle then an h2. Every other page type (homepage, InfoPage
hubs, design-estimate) gets a dark hero banner or full-screen hero. ~178
area pages — the largest single page class and a major organic entry point
— land the visitor on a comparatively flat, headerless page. The breadcrumb
is present but the page lacks the visual "arrival" moment the rest of the
site has. (Reasoned — no before/after data; metric would be area-page bounce
rate / scroll depth in GA4.)

## Conversion-flow walkthrough

Path is coherent. Landing (hero or area/blog/collection page) gives a
persistent gold "Request a Free Consultation" CTA, plus the click-to-call
`0800 861 1450` in the nav (desktop) and inside QuickEnquiry.

QuickEnquiry placement is good: confirmed live on the sampled collection
item and blog post, and wired into the area template (line 1360) and
InfoPage component (line 569). Three fields only (name/phone/postcode),
phone-first with a large gold click-to-call block as the primary action —
correct for a high-ticket bespoke buyer. GA4 `form_start` / `form_submit`
events fire per source tag.

The `/design-estimate` 4-step form is well-built: accessible step indicator
with `role="progressbar"`, focus moves to the step heading on Next/Back,
scroll-to-top between steps, UTM capture on submit, a summary review before
submit. Step labels are hidden below `sm` (only numbered dots show on
mobile) — acceptable.

CTA label inconsistency: the hero says "Request a Free Consultation",
InfoPage CTA says "Request a Consultation", QuickEnquiry button says
"Request a free consultation", the global brand CTA in CLAUDE.md is
"Request a Consultation". Four near-variants. Low-impact but worth
standardising. (Tested-locally — visible in source.)

## Mobile UX

- **Hamburger fix held.** Live HTML still carries `justify-start
  sm:justify-center` on `#mobile-menu-overlay` and `paddingTop:96px`. The
  pointer-events:none-on-nav fix is intact (`Nav.tsx` line 124) so menu taps
  pass through. Hamburger button is `w-11 h-11` (44px) — meets touch-target
  minimum.
- **Nav now has 9 items** (Collection, Lookbook, Areas, Specifiers, About,
  Process, Blog, Get Estimate, Contact). The overlay comment notes 9 items
  already overflow iPhone SE; `overflow-y-auto` is the safety net. It works
  but the menu is dense. Adding a 10th item would re-break the layout — the
  nav is at its ceiling.
- Hero CTA block, collection grid (`grid-cols-1 md:grid-cols-3`), area
  layout (`grid-cols-1 lg:grid-cols-5`), blog and QuickEnquiry all collapse
  to single column on mobile — no clipped or cramped grids found in source.
- QuickEnquiry inputs are `14px 16px` padding, full-width — comfortably
  tappable. Click-to-call block is full-width on mobile (`w-full sm:w-auto`).
- `design-estimate` step 2 uses `grid-cols-2` for width/height inputs even
  on mobile — two inputs side by side at 375px is tight but functional.

## Imagery

- All 5 hero images are landscape, per the manifest rule. Dimensions:
  1536x1024, 1018x980, 1500x1001, 1600x720, 897x636. **Flag:**
  `steelr-navy-panelled-chrome-frosted.jpg` at 1018x980 is effectively
  square (1.04:1). In a full-screen 16:9+ hero with `object-cover` it will
  crop heavily top and bottom. It renders without distortion (object-cover
  never stretches) but the framing is the weakest of the five. (Reasoned.)
- Area and InfoPage section images use `aspect-[3/4]` / `aspect-[4/3]`
  containers with `object-cover` — no stretch risk.
- All images `quality={80}`, lazy-loaded except hero first frame. Good.

## Navigation

Nav is complete and clear. Footer is sensible: primary links, a 17-item
Topics column, contact, legal row, copyright. The footer Topics list
duplicates the audience hubs (Architects, Developers, Housing Associations,
Property Managers) that the nav exposes as "Specifiers" — minor redundancy,
not a problem. Footer has no broken links in the sampled set.

## Trust signals

Well presented. CredentialsStrip (PAS 24, SR3/SR4, Secured by Design, FD30S,
ISO 9001, UK Manufactured) appears on homepage, area pages and InfoPage.
Hero carries a credentials line. QuickEnquiry repeats the trust row. The
homepage has a 3-card testimonial block and a 10-year-warranty / RC4 / UK-
manufactured stat row.

**The 0-reviews gap is correctly handled on-site.** No `aggregateRating`
schema on homepage, collection item, blog or area pages — so there are no
empty star widgets and no fake-looking "0 reviews" UI anywhere. The site
substitutes named testimonials instead. This is the right call; the gap is
invisible to a first-time visitor. The gap only shows in Google Maps, which
is off-site.

## Premium-tier first-impression verdict

Yes — a homeowner spending £15k would trust this site on first impression.
The homepage, InfoPage hubs and collection pages look architectural,
restrained and expensive. The brand system is disciplined and consistently
applied. Where it falls short of the bar: (1) the area-page template is
visually flatter than the rest of the site and is the biggest entry class;
(2) small CTA-label drift; (3) one near-square hero image that crops poorly.
None of these are credibility-killers — they are polish gaps.

## Top issues ranked by commercial impact

1. **Area-page template has no visual H1 / hero banner** — largest page
   class, major organic landing surface, lands flat. Highest commercial
   leverage. Add a dark hero banner mirroring InfoPage. (Reasoned —
   reversible cheap; metric: area-page scroll depth + enquiry rate by
   source tag in GA4.)
2. **CTA label drift** (4 variants of "Request a Consultation") — small
   trust/consistency cost. Standardise on one. (Tested-locally; reversible
   cheap.)
3. **Near-square hero image** `steelr-navy-panelled-chrome-frosted.jpg`
   crops badly in full-screen hero — swap for a true landscape frame from
   the gallery set. (Reasoned; reversible cheap.)
4. **Nav at 9-item ceiling** — not a current defect, but a constraint:
   adding any further top-level item re-breaks small-viewport layout.
   Note for future IA changes. (Reasoned; no action needed now.)
5. **Mobile menu uses serif font vs desktop sans** — minor visual-language
   inconsistency. Lowest priority. (Reasoned.)

No blockers found. Hamburger fix verified holding. Conversion plumbing
(QuickEnquiry, design-estimate, GA4 events) is intact and well-built.
