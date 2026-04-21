"""
Build a visual preview of what the Instagram profile will look like
once set up, so you can see the whole thing composited before committing.

Layout (iPhone aspect, 1080x1920):
  - Top status bar + header
  - Profile avatar (cream-on-dark circle) left
  - Stats right: posts / followers / following
  - Display name 'Steelr'
  - Handle '@steelrdoors'
  - Bio (4 lines)
  - Link to steelr.co.uk/design-estimate
  - 3 tabs (Posts / Reels / Tagged)
  - 3x3 grid preview of first 9 reels (as extracted frames)

Run: python social/scripts/build-profile-preview.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import subprocess
import os

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "social" / "brand-kit" / "instagram-profile-preview.png"
BRAND_KIT = ROOT / "social" / "brand-kit"
REELS = ROOT / "social" / "reels"
FONT_VF = ROOT / "social" / "fonts" / "Montserrat-Thin.ttf"

CREAM = (245, 240, 232)
DARK = (26, 26, 24)
GOLD = (201, 169, 110)
WARM_BROWN = (138, 111, 78)
BG_IG = (255, 255, 255)   # Instagram white background
TEXT_DARK = (0, 0, 0)
TEXT_MUTED = (115, 115, 115)

WEIGHT_NAMES = {
    "thin": b"Thin", "light": b"Light", "regular": b"Regular",
    "medium": b"Medium", "semibold": b"SemiBold", "bold": b"Bold",
}

W, H = 1080, 1920


def load_font(size, weight="regular"):
    font = ImageFont.truetype(str(FONT_VF), size)
    try:
        font.set_variation_by_name(WEIGHT_NAMES.get(weight, b"Regular"))
    except (AttributeError, OSError):
        pass
    return font


def extract_reel_frame(reel_path, out_path, timestamp="00:00:05"):
    """Extract one frame from a reel at given timestamp using imageio-ffmpeg."""
    import imageio_ffmpeg
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    subprocess.run([
        ffmpeg, "-y", "-ss", timestamp, "-i", str(reel_path),
        "-frames:v", "1", "-q:v", "2", str(out_path),
    ], check=True, capture_output=True)


def circular_crop(img, size):
    """Return a circular-cropped square PIL Image of given size."""
    img = img.resize((size, size), Image.LANCZOS).convert("RGBA")
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse([0, 0, size, size], fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


def build():
    canvas = Image.new("RGB", (W, H), BG_IG)
    d = ImageDraw.Draw(canvas)

    # --- Header bar ---
    handle_font = load_font(44, "semibold")
    d.text((40, 60), "steelrdoors", fill=TEXT_DARK, font=handle_font)
    # Three-dot menu placeholder top right
    d.text((W - 90, 68), "· · ·", fill=TEXT_DARK, font=load_font(36, "regular"))

    # --- Profile row ---
    avatar_size = 260
    avatar_path = BRAND_KIT / "profile-avatar-dark.png"
    avatar = Image.open(avatar_path).convert("RGBA")
    # Crop circular
    avatar_circ = circular_crop(avatar, avatar_size)
    canvas.paste(avatar_circ, (50, 180), avatar_circ)

    # Stats (posts / followers / following) right of avatar
    stats_x = 420
    stats_y = 230
    stat_num = load_font(48, "semibold")
    stat_lbl = load_font(26, "regular")

    stats = [("20", "Posts"), ("0", "Followers"), ("0", "Following")]
    stat_gap = 220
    for i, (num, lbl) in enumerate(stats):
        cx = stats_x + i * stat_gap
        # Centre number + label under cx
        n_bbox = d.textbbox((0, 0), num, font=stat_num)
        n_w = n_bbox[2] - n_bbox[0]
        d.text((cx - n_w // 2, stats_y), num, fill=TEXT_DARK, font=stat_num)
        l_bbox = d.textbbox((0, 0), lbl, font=stat_lbl)
        l_w = l_bbox[2] - l_bbox[0]
        d.text((cx - l_w // 2, stats_y + 65), lbl, fill=TEXT_DARK, font=stat_lbl)

    # --- Display name ---
    name_font = load_font(36, "semibold")
    d.text((50, 490), "Steelr", fill=TEXT_DARK, font=name_font)

    # Sub-label under display name
    sub_font = load_font(26, "regular")
    d.text((50, 540), "Home Goods Store", fill=TEXT_DARK, font=sub_font)

    # --- Bio (matches README.md Instagram bio) ---
    bio_font = load_font(28, "regular")
    bio_lines = [
        "Bespoke steel entrance doors.",
        "Engineered for permanence. Designed for distinction.",
        "SR3 standard. SR4 available. UK manufactured.",
        "Private consultations London + Home Counties",
    ]
    y = 600
    for line in bio_lines:
        d.text((50, y), line, fill=TEXT_DARK, font=bio_font)
        y += 44

    # Link
    link_font = load_font(28, "medium")
    d.text((50, y + 12), "steelr.co.uk/design-estimate", fill=(0, 55, 107), font=link_font)
    y += 60

    # --- CTA buttons ---
    btn_y = 830
    btn_h = 82
    # Button widths (3 buttons fill screen width minus gaps)
    btn_w = (W - 40 * 2 - 20 * 2) // 3
    btn_bg = (239, 239, 239)
    btn_font = load_font(26, "semibold")

    labels = ["Follow", "Message", "Email"]
    for i, lbl in enumerate(labels):
        x = 40 + i * (btn_w + 20)
        d.rounded_rectangle([x, btn_y, x + btn_w, btn_y + btn_h], radius=12, fill=btn_bg)
        lbl_bbox = d.textbbox((0, 0), lbl, font=btn_font)
        lbl_w = lbl_bbox[2] - lbl_bbox[0]
        lbl_h = lbl_bbox[3] - lbl_bbox[1]
        d.text((x + btn_w // 2 - lbl_w // 2, btn_y + btn_h // 2 - lbl_h // 2 - 2), lbl, fill=TEXT_DARK, font=btn_font)

    # --- Highlights row ---
    hl_y = 960
    highlights = [
        ("Collection", BRAND_KIT / "highlight-covers" / "highlight-collection.png"),
        ("Details", BRAND_KIT / "highlight-covers" / "highlight-details.png"),
        ("Process", BRAND_KIT / "highlight-covers" / "highlight-process.png"),
        ("Areas", BRAND_KIT / "highlight-covers" / "highlight-areas.png"),
        ("Security", BRAND_KIT / "highlight-covers" / "highlight-security.png"),
    ]
    hl_size = 140
    hl_gap = (W - 2 * 40 - 5 * hl_size) // 4
    hl_font = load_font(22, "regular")

    for i, (label, cover_path) in enumerate(highlights):
        x = 40 + i * (hl_size + hl_gap)
        cover = Image.open(cover_path).convert("RGBA")
        cover_circ = circular_crop(cover, hl_size)
        # Cream ring
        ring_d = ImageDraw.Draw(canvas)
        ring_d.ellipse([x - 4, hl_y - 4, x + hl_size + 4, hl_y + hl_size + 4], outline=(220, 220, 220), width=2)
        canvas.paste(cover_circ, (x, hl_y), cover_circ)
        # Label below
        lbl_bbox = d.textbbox((0, 0), label, font=hl_font)
        lbl_w = lbl_bbox[2] - lbl_bbox[0]
        d.text((x + hl_size // 2 - lbl_w // 2, hl_y + hl_size + 16), label, fill=TEXT_DARK, font=hl_font)

    # --- Tab bar ---
    tab_y = 1220
    tab_h = 70
    tab_lbl_y = tab_y + 18
    # Grid icon (active, black), Reels icon, Tagged icon — just use labels for simplicity
    tab_font = load_font(24, "semibold")
    # Simulate icons with text
    d.line([(0, tab_y), (W, tab_y)], fill=(230, 230, 230), width=2)
    # Active indicator under first tab
    d.line([(0, tab_y + tab_h - 4), (W // 3, tab_y + tab_h - 4)], fill=TEXT_DARK, width=4)
    # Three icons
    icon_font = load_font(34, "regular")
    tabs = ["▦", "▶", "♥"]  # grid, play, tag
    for i, icon in enumerate(tabs):
        cx = W // 3 * i + W // 6
        ib = d.textbbox((0, 0), icon, font=icon_font)
        iw = ib[2] - ib[0]
        d.text((cx - iw // 2, tab_y + 15), icon, fill=TEXT_DARK, font=icon_font)

    # --- 3x3 grid of reel preview frames ---
    grid_start_y = tab_y + tab_h + 10
    grid_size = W // 3  # ~360 per cell
    # Need 9 frames — extract from reels 01-09
    FRAMES_TMP = ROOT / "social" / "reels" / "_grid-frames"
    FRAMES_TMP.mkdir(exist_ok=True)

    frames_needed = [
        REELS / "01-black-ornate-medallion.mp4",
        REELS / "02-navy-brass-fanlight.mp4",
        REELS / "03-black-doctor-knocker.mp4",
        REELS / "04-cream-lion-knocker.mp4",
        REELS / "05-black-fingerprint-double.mp4",
        REELS / "06-black-lion-sidelights.mp4",
        REELS / "07-navy-lanterns.mp4",
        REELS / "08-black-ribbed.mp4",
        REELS / "09-olive-arched.mp4",
    ]

    for i, reel_path in enumerate(frames_needed):
        col = i % 3
        row = i // 3
        x = col * grid_size
        y = grid_start_y + row * grid_size
        if y + grid_size > H:
            continue  # overflow

        if not reel_path.exists():
            # Draw placeholder
            d.rectangle([x, y, x + grid_size, y + grid_size], fill=(200, 200, 200))
            continue

        # Extract frame
        frame_path = FRAMES_TMP / f"frame-{i+1:02d}.jpg"
        if not frame_path.exists():
            extract_reel_frame(reel_path, frame_path, "00:00:04")

        frame = Image.open(frame_path).convert("RGB")
        # Source is 1080x1920 — crop to square centre
        src_w, src_h = frame.size
        crop_side = min(src_w, src_h)
        left = (src_w - crop_side) // 2
        top = (src_h - crop_side) // 2
        frame = frame.crop((left, top, left + crop_side, top + crop_side))
        frame = frame.resize((grid_size, grid_size), Image.LANCZOS)
        canvas.paste(frame, (x, y))

    canvas.save(OUT, "PNG", optimize=True)
    print(f"Profile preview written: {OUT}")
    print(f"Size: {OUT.stat().st_size // 1024} KB")


if __name__ == "__main__":
    build()
