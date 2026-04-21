# SteelR Social Media Kit

Everything needed to launch SteelR on Instagram, TikTok, Pinterest, YouTube Shorts and LinkedIn. All assets generated from existing site imagery (67 portrait door shots, 7 detail close-ups, 5 landscape shots).

## Confirmed Handle + Display Name (locked 21 Apr 2026)

- **URL handle:** `steelrdoors` (lowercase — platform requirement)
- **Display name:** `Steelr`
- **Brand mention in bios:** `SteelrDoors` (mixed-case for readability)

Availability verified via HTTP checks on Instagram, TikTok, YouTube, LinkedIn — all four confirmed free. Pinterest handle availability not 100% verifiable via HTTP (platform returns login wall for both taken and free handles), but the response pattern matches free-handle behaviour.

Create accounts in this order:

1. Instagram (primary)
2. Pinterest (traffic driver)
3. TikTok (reach)
4. YouTube (@handle auto-claimed)
5. LinkedIn Company Page (B2B, architects/developers)

## Brand Kit Contents

See `brand-kit/` folder.

- **profile-avatar-dark.png** (1080x1080) — dark background, gold wordmark. Use everywhere.
- **profile-avatar-light.png** (1080x1080) — cream background, dark wordmark. Alt option.
- **banner-linkedin.png** (1584x396) — LinkedIn company cover.
- **banner-youtube.png** (2560x1440) — YouTube channel art.
- **highlight-covers/** — 6 Instagram Story highlight cover icons (Collection, Details, Process, Areas, Security, FAQ).
- **logo-hires/** — Large-format logos (300 DPI print, 4x standard size).

## Ken Burns Reels

`reels/` — 20 vertical videos (1080x1920, 10 seconds each, MP4, H.264). Slow zoom plus subtle pan on portrait door images, with spec overlay text and gold `steel|r` watermark bottom-right. Caption text appears bottom-left at 50% mark for hook-stop effect.

Ready to upload to Instagram Reels, TikTok, YouTube Shorts (all accept 9:16 MP4).

**Suggested first-week post schedule:**
- Mon 7pm: Reel 1 (Black Ornate Medallion)
- Wed 7pm: Reel 2 (Navy Panelled Brass Fanlight)
- Fri 7pm: Reel 3 (Black Traditional Doctor Knocker)
- Sun 7pm: Carousel post (below)

## Pinterest Pins

`pinterest/` — 40 vertical pins (1000x1500 PNG). Each links to a specific collection door or area page. Organise into these 8 boards on the Pinterest business account:

1. Contemporary Steel Front Doors
2. Traditional Steel Front Doors
3. Ornate Steel Front Doors
4. Black Front Door Ideas
5. Navy Blue Front Door Ideas
6. London Townhouse Doors
7. Surrey + Bucks Country Home Doors
8. Bespoke Security Doors (SR3/SR4)

Pinterest is the highest-ROI channel for this niche — pins have 6-12 month shelf life vs 48 hours for Instagram.

## Instagram Carousels

`carousels/` — 10 multi-slide Instagram posts (1080x1350 portrait). Each repurposes a blog post as 7 swipeable slides. Carries the same SEO authority the blog posts do — gold cover slide, key-facts slides with text overlay, final CTA slide pointing to bio link.

## Platform Bios

### Instagram
```
Bespoke steel entrance doors.
Engineered for permanence. Designed for distinction.
SR3 standard. SR4 available. UK manufactured.
🏡 Private consultations London + Home Counties
🔗 steelr.co.uk/design-estimate
```

### TikTok
```
Bespoke steel front doors. UK-made. SR3/SR4 certified.
Private consultations → steelr.co.uk
```

### Pinterest
```
SteelR — Bespoke steel entrance doors. SR3 certified as standard, SR4 (LPS 1175) commercial-grade upgrade available. UK manufactured, nationwide installation. Every door made to your exact specification in any RAL colour.
```

### YouTube
```
SteelR makes bespoke steel entrance doors for UK homes. Every door custom-manufactured, PAS 24 certified, SR3 rated as standard with SR4 (LPS 1175) commercial-grade upgrade available. Secured by Design approved. FD30S fire rated. Nationwide installation by our own team.

steelr.co.uk
```

### LinkedIn
```
SteelR designs and manufactures bespoke steel entrance doors for private residences, luxury developments and specifier projects across the UK. PAS 24, SR3 (BS EN 1627 Class 3), SR4 (LPS 1175 Issue 8), Secured by Design, FD30S. ISO 9001 manufacturing. Nationwide installation by our own team.
```

## Posting Cadence

| Platform | Frequency | Best times (UK) | Content type |
|---|---|---|---|
| Instagram | 3/week | Mon/Wed/Fri 7-9pm | Reels + carousels |
| TikTok | 2-3/week | Wed/Fri/Sun 6-10pm | Reels (same as IG) |
| Pinterest | 5-10/week | Any time | Pins (evergreen) |
| YouTube Shorts | 2/week | Wed/Sat | Reels (same as IG) |
| LinkedIn | 1/week | Tue/Thu 9am | Carousel or article |

Quality over frequency. Consistency is what compounds.

## Hashtag Pools

### Instagram (mix 5-10 per post)
Premium/brand: #bespokefrontdoor #luxuryfrontdoor #steelfrontdoor #highsecurityfrontdoor #bespokeentrancedoor
Design/interior: #frontdoorinspiration #architecturaldesign #exteriordesign #homedesignideas #kerbappeal
Location: #londonproperty #countryhouseuk #luxuryhomesuk #privatehomesuk
Niche: #sr3 #sr4 #lps1175 #pas24 #securedbydesign #fd30 #passivhausfrontdoor

### TikTok
#frontdoor #luxuryhomes #homedesign #architecture #securitydoors #steeldoor #ukproperty #interiordesign #satisfying #hardware

### Pinterest (per pin, 2-3 keywords)
Use natural phrases, not Instagram-style hashtags. Pinterest search is keyword-driven.
- "Black front door with gold hardware"
- "Luxury steel entrance door London"
- "Grand townhouse front door"
- "Ornate steel door ideas"

## Content Rules (brand-aligned)

Per `CLAUDE.md` house style, applied to all captions:

- **No em dashes or en dashes.** Use full stops, commas, semicolons.
- **No exclamation marks.** Premium understated tone.
- **Never use:** "affordable", "cheap", "best prices", "discount".
- **No displayed prices.** Refer to investment level, not pounds.
- **No competitor names** in captions or carousel slides.

## Build Scripts

All in `scripts/`. Run from the project root:

```bash
# Build everything
python social/scripts/build-brand-kit.py
python social/scripts/build-reels.py
python social/scripts/build-pinterest.py
python social/scripts/build-carousels.py
```

Each script is idempotent — safe to re-run. Reads source images from `public/images/`. Outputs to `social/{brand-kit,reels,pinterest,carousels}/`.

## Tracking

Once accounts are live, add a social performance tracker alongside rank tracking in `vitrums/audit-data/`. Baseline metrics to capture weekly:

- IG followers, reach, profile visits, link clicks
- Pinterest monthly views, outbound clicks, saves
- TikTok followers, video views
- YouTube subscribers, views

The #1 signal that social is working for this brand is **outbound clicks to steelr.co.uk** and **design-estimate form submissions**, not follower count.
