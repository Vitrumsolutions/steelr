# steelr — Project Guide

## What is this?
**steelr** is a premium website for a bespoke entrance door company. The brand sits under Supply Windows (supplywindows.co.uk). The site should feel architectural, refined, and high-end — like the product itself.

## Brand Identity

### Name & Logo
- **Wordmark:** `steel|r` — the pipe is a CSS element (not a character), 1.5px wide, gold (#c9a96e)
- **Tagline:** Bespoke Entrance Doors
- **Hero tagline:** "Engineered for permanence. Designed for distinction."
- **Logo file:** `public/steelr-logo-v5.html` — full brand sheet with all variants

### Logo Variants
- **Inline:** Wordmark + separator + tagline in one line (nav, headers)
- **Stacked:** Wordmark over tagline (hero, footer)
- **Light/Dark:** Both cream-on-dark and dark-on-cream versions
- **Sizes:** Favicon (16px), Nav (24px), Standard (48px), Hero (72px)

### Typography
- **Font:** Montserrat (Google Fonts)
- **Weights:** 200 (wordmark/headlines), 300 (body light), 400 (tagline/labels)
- **Style:** Generous letter-spacing on uppercase elements, tight on wordmark (-0.03em)

### Colour Palette
| Token       | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| cream       | `#f5f0e8` | Light backgrounds              |
| dark        | `#1a1a18` | Dark backgrounds, body text    |
| gold        | `#c9a96e` | Accent, pipe, CTAs             |
| warm-brown  | `#8a6f4e` | Tagline text                   |
| page-bg     | `#e8e3db` | Outer page background          |

### UI Elements
- **CTA buttons:** Gold (#c9a96e) background, dark text, uppercase, 9px, 0.25em spacing
- **Nav links:** Uppercase, 9px, 0.2em spacing, muted colour
- **Separators:** 1px gold lines at low opacity

## Site Structure
- **Navigation:** Collection · About · Process · Contact
- **Phone:** 0800 861 1450
- **CTA:** "Request a Consultation"

## Image Manifest

All images follow the naming convention: `steelr-{colour}-{style}-{feature}.jpg`
Orientation is noted so code can handle layout correctly.

### hero/ (5 images)
| File | Orientation | Dimensions |
|------|-------------|------------|
| `steelr-black-contemporary-sidelight.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-checkerboard.jpg` | portrait | 1200x1600 |
| `steelr-black-traditional-lion-knocker.jpg` | portrait | 1068x1600 |
| `steelr-navy-panelled-lanterns.jpg` | portrait | 1068x1600 |
| `steelr-navy-traditional-vine-porch.jpg` | portrait | 1200x1600 |

### gallery/ (39 images)
| File | Orientation | Dimensions |
|------|-------------|------------|
| `steelr-black-contemporary-dual-sidelights.jpg` | portrait | 899x1599 |
| `steelr-black-contemporary-panelled-sidelights.jpg` | portrait | 1200x1600 |
| `steelr-black-contemporary-ribbed-open.jpeg` | portrait | 1200x1600 |
| `steelr-black-contemporary-ribbed-topiary.jpg` | portrait | 1200x1600 |
| `steelr-black-contemporary-sunburst.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-checkerboard-canopy.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-circular-fluted.jpg` | portrait | 874x1600 |
| `steelr-black-ornate-double-gable.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-lion-knocker-sidelights.jpg` | portrait | 1200x1600 |
| `steelr-black-ornate-medallion-driveway.jpeg` | portrait | 1200x1600 |
| `steelr-black-ornate-medallion-sidelights.jpg` | portrait | 738x1600 |
| `steelr-black-panelled-double-letterbox.jpg` | portrait | 768x1344 |
| `steelr-black-panelled-ring-knocker-recessed.jpg` | portrait | 1200x1600 |
| `steelr-black-panelled-sidelights-palms.jpg` | **landscape** | 1500x1001 |
| `steelr-black-traditional-chrome-interior.jpg` | portrait | 1200x1600 |
| `steelr-black-traditional-columns-mansion.jpg` | **landscape** | 897x636 |
| `steelr-black-traditional-lion-knocker-fanlight.jpg` | portrait | 1068x1600 |
| `steelr-black-traditional-lion-knocker-open.jpg` | portrait | 769x947 |
| `steelr-black-traditional-ring-knocker-open.jpg` | portrait | 1200x1600 |
| `steelr-black-traditional-stained-glass.jpg` | portrait | 1001x1500 |
| `steelr-black-traditional-wide-frosted.jpg` | **landscape** | 1600x720 |
| `steelr-champagne-arched-geometric-double.jpg` | portrait | 681x1600 |
| `steelr-cobalt-ornate-lion-knocker.jpg` | portrait | 1080x1920 |
| `steelr-cream-panelled-chrome-sidelight.jpg` | portrait | 354x494 |
| `steelr-grey-panelled-lever-handle.jpg` | portrait | 1080x1920 |
| `steelr-grey-panelled-stone-surround.jpg` | portrait | 872x943 |
| `steelr-navy-panelled-chrome-palms.jpg` | portrait | 1001x1500 |
| `steelr-navy-panelled-lanterns-fanlight.jpg` | portrait | 1068x1600 |
| `steelr-navy-traditional-vine-porch.jpg` | portrait | 1200x1600 |
| `steelr-olive-panelled-ring-knocker-sidelight.jpg` | portrait | 353x481 |
| `steelr-olive-traditional-arched-surround.jpg` | portrait | 1200x1600 |
| `steelr-olive-traditional-brass-pendant.jpg` | portrait | 1001x1500 |
| `steelr-red-traditional-lion-knocker.jpg` | portrait | 1200x1600 |
| `steelr-sage-panelled-arched-wreath.jpg` | portrait | 768x1024 |
| `steelr-sage-traditional-arched-brick.jpg` | portrait | 1001x1500 |
| `steelr-taupe-panelled-chrome-dual-sidelights.jpg` | portrait | 1200x1600 |
| `steelr-taupe-panelled-dual-sidelights.jpg` | portrait | 1200x1600 |
| `steelr-teal-panelled-glass-hallway.jpg` | portrait | 1068x1600 |
| `steelr-walnut-ribbed-columns.jpg` | portrait | 1200x1600 |

### detail/ (4 images)
| File | Orientation | Dimensions |
|------|-------------|------------|
| `steelr-black-panelled-brass-lion-closeup.jpg` | portrait | 233x433 |
| `steelr-grey-panelled-brass-handle-closeup.jpeg` | portrait | 1068x1600 |
| `steelr-grey-panelled-chrome-multilock.jpg` | portrait | 1080x1920 |
| `steelr-navy-panelled-chrome-ring-closeup.jpg` | portrait | 433x1093 |

### Orientation Summary
- **Portrait:** 45 images (most door shots are naturally tall)
- **Landscape:** 3 images (good for full-width hero banners, feature sections)
- Landscape files: `steelr-black-panelled-sidelights-palms.jpg`, `steelr-black-traditional-columns-mansion.jpg`, `steelr-black-traditional-wide-frosted.jpg`

## Tech Stack
_To be confirmed — update this section once decided._

## Notes
- The pipe in the logo must always be a CSS element, never a `|` character
- Dark nav overlays on hero images with semi-transparent gradient backdrop
- Design language: minimal, architectural, high white-space, no clutter
