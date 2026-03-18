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

## Image Directories
- `public/images/hero/` — Full-width hero images
- `public/images/gallery/` — Product gallery / collection
- `public/images/detail/` — Close-up detail shots

## Tech Stack
_To be confirmed — update this section once decided._

## Notes
- The pipe in the logo must always be a CSS element, never a `|` character
- Dark nav overlays on hero images with semi-transparent gradient backdrop
- Design language: minimal, architectural, high white-space, no clutter
