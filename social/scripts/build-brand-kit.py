"""
SteelR Brand Kit Generator
Produces profile avatars, platform banners, Instagram Story highlight covers,
and high-resolution logo variants for print.

Run: python social/scripts/build-brand-kit.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import sys

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "social" / "brand-kit"
OUT.mkdir(parents=True, exist_ok=True)
(OUT / "highlight-covers").mkdir(exist_ok=True)
(OUT / "logo-hires").mkdir(exist_ok=True)

# Brand tokens (from CLAUDE.md)
CREAM = (245, 240, 232)
DARK = (26, 26, 24)
GOLD = (201, 169, 110)
WARM_BROWN = (138, 111, 78)

# Bundled Montserrat variable font (weight 100-900)
MONTSERRAT_VF = ROOT / "social" / "fonts" / "Montserrat-Thin.ttf"

WEIGHT_NAMES = {
    "thin": b"Thin",
    "extralight": b"ExtraLight",
    "light": b"Light",
    "regular": b"Regular",
    "medium": b"Medium",
    "semibold": b"SemiBold",
    "bold": b"Bold",
}

def load_font(size, weight="thin"):
    """Load Montserrat VF at requested size and weight axis."""
    if not MONTSERRAT_VF.exists():
        print(f"  WARN: Montserrat VF not found at {MONTSERRAT_VF}, using default", file=sys.stderr)
        return ImageFont.load_default()
    font = ImageFont.truetype(str(MONTSERRAT_VF), size)
    variation = WEIGHT_NAMES.get(weight, b"Thin")
    try:
        font.set_variation_by_name(variation)
    except (AttributeError, OSError):
        pass
    return font


def draw_wordmark(draw, cx, cy, font_size, text_color, pipe_color, tagline_color=None, tagline_text="BESPOKE ENTRANCE DOORS"):
    """Draw 'steel|r' wordmark centred on cx,cy. The pipe is a gold rectangle, never the character '|'.

    Layout is computed so that the FULL block (wordmark plus tagline) is centred vertically on cy.
    """
    font = load_font(font_size, "thin")
    tag_size = max(10, int(font_size * 0.14))
    tag_font = load_font(tag_size, "light") if tagline_color else None

    left = "steel"
    right = "r"

    # Use draw.textbbox for accurate rendering metrics (includes vertical offset from origin)
    left_bbox = draw.textbbox((0, 0), left, font=font)
    right_bbox = draw.textbbox((0, 0), right, font=font)

    left_w = left_bbox[2] - left_bbox[0]
    right_w = right_bbox[2] - right_bbox[0]
    word_h = max(left_bbox[3] - left_bbox[1], right_bbox[3] - right_bbox[1])

    pipe_h = int(font_size * 1.05)
    pipe_w = max(2, int(font_size / 22))
    pipe_gap = max(int(font_size * 0.08), pipe_w * 2)
    total_w = left_w + pipe_gap + pipe_w + pipe_gap + right_w

    # Tagline metrics
    tag_w_total = 0
    tag_h = 0
    tag_tracking = 0
    if tag_font:
        tag_bbox = draw.textbbox((0, 0), tagline_text, font=tag_font)
        tag_tracking = int(tag_font.size * 0.35)
        tag_w_total = (tag_bbox[2] - tag_bbox[0]) + tag_tracking * (len(tagline_text) - 1)
        tag_h = tag_bbox[3] - tag_bbox[1]

    # Gap between wordmark and tagline
    gap = int(font_size * 0.25) if tag_font else 0

    # Total block height and top position so that block is centred on cy
    block_h = word_h + gap + tag_h
    block_top = cy - block_h // 2

    # Wordmark baseline
    # Pillow draws from the top-left of the glyph's raster box; adjust by left_bbox[1]
    word_y = block_top - left_bbox[1]

    x = cx - total_w // 2
    y = word_y

    draw.text((x, y), left, fill=text_color, font=font)
    x += left_w + pipe_gap

    # Pipe vertically aligned to wordmark cap height
    pipe_y = block_top + (word_h - pipe_h) // 2
    draw.rectangle([x, pipe_y, x + pipe_w, pipe_y + pipe_h], fill=pipe_color)
    x += pipe_w + pipe_gap

    draw.text((x, y), right, fill=text_color, font=font)

    # Tagline, letter by letter, with tracking
    if tag_font:
        tag_y = block_top + word_h + gap
        # The bbox top offset for tracked tagline
        first_ch_bbox = draw.textbbox((0, 0), tagline_text[0], font=tag_font)
        tag_y -= first_ch_bbox[1]
        tag_x = cx - tag_w_total // 2
        for ch in tagline_text:
            draw.text((tag_x, tag_y), ch, fill=tagline_color, font=tag_font)
            ch_bbox = draw.textbbox((0, 0), ch, font=tag_font)
            tag_x += (ch_bbox[2] - ch_bbox[0]) + tag_tracking


def make_profile_avatar(filename, size, bg, text_color, tagline_color):
    """Square profile avatar. Wordmark centred, optional tagline."""
    img = Image.new("RGB", (size, size), bg)
    draw = ImageDraw.Draw(img)
    font_size = int(size * 0.18)
    draw_wordmark(draw, size // 2, size // 2, font_size, text_color, GOLD, tagline_color)
    img.save(OUT / filename, "PNG", optimize=True)
    print(f"  created {filename} ({size}x{size})")


def make_banner(filename, width, height, bg, text_color, tagline_color, subtitle=None):
    """Horizontal banner for LinkedIn / YouTube."""
    img = Image.new("RGB", (width, height), bg)
    draw = ImageDraw.Draw(img)

    # Wordmark
    font_size = int(height * 0.18)
    draw_wordmark(draw, width // 2, height // 2 - int(height * 0.05), font_size, text_color, GOLD, tagline_color)

    # Optional subtitle below tagline
    if subtitle:
        sub_font = load_font(int(height * 0.03), "light")
        sub_bbox = sub_font.getbbox(subtitle)
        sub_w = sub_bbox[2] - sub_bbox[0]
        # Apply tracking
        tracking = int(sub_font.size * 0.3)
        sub_w_total = sub_w + tracking * (len(subtitle) - 1)
        sub_x = width // 2 - sub_w_total // 2
        sub_y = height // 2 + int(height * 0.12)
        for ch in subtitle:
            draw.text((sub_x, sub_y), ch, fill=tagline_color, font=sub_font)
            ch_bbox = sub_font.getbbox(ch)
            sub_x += (ch_bbox[2] - ch_bbox[0]) + tracking

    img.save(OUT / filename, "PNG", optimize=True)
    print(f"  created {filename} ({width}x{height})")


def make_highlight_cover(filename, label_text):
    """Instagram Story highlight cover. Dark background, gold text, minimal."""
    size = 1080
    img = Image.new("RGB", (size, size), DARK)
    draw = ImageDraw.Draw(img)

    # Thin gold border ring (subtle)
    ring_inset = 60
    ring_w = 3
    draw.ellipse(
        [ring_inset, ring_inset, size - ring_inset, size - ring_inset],
        outline=GOLD,
        width=ring_w,
    )

    # Label text, uppercase, tracked
    font = load_font(int(size * 0.07), "light")
    text = label_text.upper()
    tracking = int(font.size * 0.3)
    bbox = font.getbbox(text)
    text_w = bbox[2] - bbox[0]
    text_w_total = text_w + tracking * (len(text) - 1)
    text_x = size // 2 - text_w_total // 2
    text_y = size // 2 - (bbox[3] - bbox[1]) // 2 - 10

    for ch in text:
        draw.text((text_x, text_y), ch, fill=GOLD, font=font)
        ch_bbox = font.getbbox(ch)
        text_x += (ch_bbox[2] - ch_bbox[0]) + tracking

    img.save(OUT / "highlight-covers" / filename, "PNG", optimize=True)
    print(f"  highlight-cover: {filename}")


def make_hires_logo(filename, width, height, bg, text_color, tagline_color=None, stacked=False):
    """High-resolution logo for print (300 DPI)."""
    img = Image.new("RGB", (width, height), bg)
    draw = ImageDraw.Draw(img)
    font_size = int((height if stacked else height * 0.5) * 0.65)
    draw_wordmark(draw, width // 2, height // 2, font_size, text_color, GOLD, tagline_color)
    img.save(OUT / "logo-hires" / filename, "PNG", optimize=True, dpi=(300, 300))
    print(f"  hires: {filename} ({width}x{height})")


def main():
    print("Building SteelR brand kit...")
    print(f"Font path: {MONTSERRAT_VF}")
    print()

    # Profile avatars
    print("Profile avatars:")
    make_profile_avatar("profile-avatar-dark.png", 1080, DARK, CREAM, GOLD)
    make_profile_avatar("profile-avatar-light.png", 1080, CREAM, DARK, WARM_BROWN)
    make_profile_avatar("profile-avatar-icon-only.png", 1080, DARK, CREAM, None)
    print()

    # Banners
    print("Platform banners:")
    make_banner(
        "banner-linkedin.png",
        1584, 396,
        DARK, CREAM, GOLD,
        subtitle="BESPOKE STEEL ENTRANCE DOORS  ·  UK MANUFACTURED  ·  SR3 / SR4",
    )
    make_banner(
        "banner-youtube.png",
        2560, 1440,
        DARK, CREAM, GOLD,
        subtitle="BESPOKE STEEL ENTRANCE DOORS",
    )
    make_banner(
        "banner-twitter.png",
        1500, 500,
        DARK, CREAM, GOLD,
        subtitle="ENGINEERED FOR PERMANENCE  ·  DESIGNED FOR DISTINCTION",
    )
    print()

    # Highlight covers
    print("Instagram Story highlight covers:")
    for label, filename in [
        ("Collection", "highlight-collection.png"),
        ("Details", "highlight-details.png"),
        ("Process", "highlight-process.png"),
        ("Areas", "highlight-areas.png"),
        ("Security", "highlight-security.png"),
        ("FAQ", "highlight-faq.png"),
    ]:
        make_highlight_cover(filename, label)
    print()

    # High-res logos for print
    print("Print-ready high-resolution logos (300 DPI):")
    # 4x standard sizes
    make_hires_logo("logo-primary-3200x800.png", 3200, 800, CREAM, DARK, WARM_BROWN)
    make_hires_logo("logo-reversed-3200x800.png", 3200, 800, DARK, CREAM, GOLD)
    make_hires_logo("logo-social-4800x4800.png", 4800, 4800, DARK, CREAM, GOLD, stacked=True)
    make_hires_logo("logo-icon-1600x560.png", 1600, 560, CREAM, DARK)
    print()

    print(f"Done. All assets in {OUT}")


if __name__ == "__main__":
    main()
