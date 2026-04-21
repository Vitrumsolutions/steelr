# SteelR Social Launch Checklist

Print this, tick as you go. Whole launch should take ~60-90 minutes.

## Phase 1 · Account Setup (you create, I'll paste content)

### Confirmed handle (21 Apr 2026)

- **Handle (URL):** `steelrdoors`
- **Display name:** `Steelr`
- **Email:** `info@supplywindows.co.uk` (same as GBP, GSC, Bing — single login)

Availability pre-verified on Instagram, TikTok, YouTube, LinkedIn (all free). Pinterest to be confirmed at signup.

### Instagram
- [ ] Create business account at [instagram.com/accounts/emailsignup](https://www.instagram.com/accounts/emailsignup/)
- [ ] Email: `info@supplywindows.co.uk`
- [ ] Switch to **Professional → Business → Home Services**
- [ ] Upload `social/brand-kit/profile-avatar-dark.png` as profile photo
- [ ] Paste bio from `social/README.md` → Instagram section
- [ ] Set website: `https://steelr.co.uk/design-estimate`
- [ ] Create 6 Story highlights using `social/brand-kit/highlight-covers/` covers

### Pinterest
- [ ] Create business account at [business.pinterest.com](https://business.pinterest.com/)
- [ ] Upload `social/brand-kit/profile-avatar-dark.png`
- [ ] Paste bio from `social/README.md` → Pinterest section
- [ ] Claim website `steelr.co.uk` (DNS TXT or HTML tag — Vercel dashboard for DNS)
- [ ] Create the 8 boards listed in `social/README.md` → Pinterest Pins section

### TikTok
- [ ] Create account at [tiktok.com/signup](https://www.tiktok.com/signup)
- [ ] Switch to **Business Account**
- [ ] Upload `social/brand-kit/profile-avatar-dark.png`
- [ ] Paste bio from `social/README.md` → TikTok section
- [ ] Add website: `steelr.co.uk`

### YouTube
- [ ] Visit [youtube.com](https://www.youtube.com) while signed into `info@supplywindows.co.uk`
- [ ] Settings → Create Channel → Use a custom name → "SteelR"
- [ ] Channel → Customization → Branding:
  - Profile picture: `social/brand-kit/profile-avatar-dark.png`
  - Banner: `social/brand-kit/banner-youtube.png`
- [ ] Customization → Basic info → paste YouTube bio from `social/README.md`
- [ ] Claim `@steelr` (or fallback handle) in Handles settings
- [ ] Links: add `steelr.co.uk`

### LinkedIn Company Page
- [ ] Go to [linkedin.com/company/setup/new](https://www.linkedin.com/company/setup/new/)
- [ ] Page type: **Company**
- [ ] Name: SteelR
- [ ] LinkedIn URL: `linkedin.com/company/steelr`
- [ ] Website: `https://steelr.co.uk`
- [ ] Industry: Construction
- [ ] Company size: 2-10
- [ ] Logo: `social/brand-kit/profile-avatar-dark.png`
- [ ] Cover image: `social/brand-kit/banner-linkedin.png`
- [ ] Tagline: Bespoke Entrance Doors. Engineered for Permanence.
- [ ] Description: paste LinkedIn bio from `social/README.md`

## Phase 2 · First Week of Content (scheduled posts)

Use a free scheduler: **Meta Business Suite** (IG + FB), **Pinterest native scheduler**, **TikTok native scheduler**, **LinkedIn native**.

### Instagram (3 posts)
- [ ] **Mon 7pm** — Upload `social/reels/01-black-ornate-medallion.mp4` as Reel. Caption from `social/captions.md` → 01.
- [ ] **Wed 7pm** — Upload `02-navy-brass-fanlight.mp4`. Caption from captions → 02.
- [ ] **Fri 7pm** — Upload `03-black-doctor-knocker.mp4`. Caption from captions → 03.

### Pinterest (20 pins first week, 20 second week)
- [ ] Upload 20 pins from `social/pinterest/` (pins 01-20).
- [ ] For each pin, Pinterest will ask for:
  - Title: from `pins.csv`, column `title`
  - Description: from `social/captions.md` → Pinterest pin description template
  - Link: from `pins.csv`, column `link`
  - Board: from `pins.csv`, column `board` (match to board name you created)
- [ ] Spread across 5 days — 4 per day, stagger by 2-3 hours.

### TikTok (2 posts)
- [ ] **Wed 8pm** — same reel as IG Wed (`02-navy-brass-fanlight.mp4`). Caption from captions → 02 TikTok.
- [ ] **Fri 8pm** — same reel as IG Fri (`03-black-doctor-knocker.mp4`). Caption from captions → 03 TikTok.

### YouTube Shorts (2 posts)
- [ ] **Wed** — upload same reel as IG Wed. Title: caption first line. Description: full IG caption.
- [ ] **Fri** — upload same reel as IG Fri.

### LinkedIn (1 post)
- [ ] **Tue 9am** — upload `04-cream-lion-knocker.mp4`. Caption from captions → 04 LinkedIn.

## Phase 3 · Verification + Tracking

- [ ] Confirm all profile avatars render circular without cropping the logo
- [ ] Confirm Pinterest domain verified (green tick next to profile)
- [ ] Confirm IG bio link is clickable and lands on `/design-estimate`
- [ ] Confirm LinkedIn page shows "Follow" button (not logged-in view)
- [ ] Week 2 Monday: note baseline metrics
  - IG followers, reach, profile visits
  - Pinterest monthly viewers, outbound clicks
  - TikTok followers, video views
  - YouTube subscribers
  - LinkedIn followers

## What to avoid on day one

- Following random accounts to seed followers — platforms flag this as bot behaviour
- Buying followers — Instagram shadow-bans, Pinterest demotes
- Using generic hashtags in first 3 posts — platforms treat new accounts with generic hashtags as suspected spam
- Cross-posting identical captions everywhere — Meta and TikTok both demote content flagged as repost
- Uploading reels without captions baked in — 85% of IG Reels are watched muted

## What compounds over time

- Posting consistently at the same times each week (algorithm rewards schedule)
- Answering every comment within 1 hour (algorithm weighting)
- Linking back to steelr.co.uk from every post (domain authority → Pinterest + LinkedIn favour this)
- Tagging partner brands (hardware, RAL paints) in captions — cross-discovery
- Reposting to Stories 24 hours after a Reel drops (double impression count)

## Script refresh

When you want to add more content, run:

```bash
cd C:\Users\SOT\Documents\Projects\steelr
python social/scripts/build-brand-kit.py      # re-export brand kit
python social/scripts/build-reels.py           # re-export all 20 reels
python social/scripts/build-pinterest.py       # re-export all 40 pins
```

Add new source images to `public/images/gallery/`, then edit `REELS` or `PINS` arrays in the relevant script and re-run.
