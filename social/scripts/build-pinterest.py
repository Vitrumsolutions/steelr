"""
SteelR Pinterest Pin Generator

Produces 40 vertical pins (1000x1500 PNG) from the door image library.
Each pin carries a descriptive title, subtitle, and the steel|r watermark.
Pinterest search is keyword-driven, so titles use natural phrases that match
common searches (e.g. "Black front door with gold hardware").

Run: python social/scripts/build-pinterest.py

Output: social/pinterest/
Also writes pins.csv — one row per pin mapping filename -> title -> link URL
for Pinterest bulk upload.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import csv
import sys

ROOT = Path(__file__).resolve().parents[2]
IMG_DIR = ROOT / "public" / "images"
OUT = ROOT / "social" / "pinterest"
OUT.mkdir(parents=True, exist_ok=True)
FONT_VF = ROOT / "social" / "fonts" / "Montserrat-Thin.ttf"

CREAM = (245, 240, 232)
DARK = (26, 26, 24)
GOLD = (201, 169, 110)

W, H = 1000, 1500
SITE = "steelr.co.uk"

WEIGHT_NAMES = {
    "thin": b"Thin", "light": b"Light", "regular": b"Regular",
    "medium": b"Medium", "semibold": b"SemiBold", "bold": b"Bold",
}


def load_font(size, weight="light"):
    font = ImageFont.truetype(str(FONT_VF), size)
    try:
        font.set_variation_by_name(WEIGHT_NAMES.get(weight, b"Light"))
    except (AttributeError, OSError):
        pass
    return font


def load_portrait(image_path):
    img = Image.open(image_path)
    exif = img.getexif()
    orientation = exif.get(274, 1)
    if orientation == 3:
        img = img.rotate(180, expand=True)
    elif orientation == 6:
        img = img.rotate(270, expand=True)
    elif orientation == 8:
        img = img.rotate(90, expand=True)
    return img.convert("RGB")


def make_pin(source, title, subtitle, board_tag, link_url, out_filename, style="overlay"):
    """Build a single 1000x1500 Pinterest pin.

    style options:
        'overlay' — full-bleed image with text overlay bottom
        'panel'   — image top ~70% with cream text panel bottom ~30% (Pinterest favourite)
    """
    img = load_portrait(source)

    if style == "panel":
        # Image occupies top 1050px, cream panel bottom 450px
        canvas = Image.new("RGB", (W, H), CREAM)
        # Scale image to 1000x1050 with center-crop
        src_w, src_h = img.size
        target_w, target_h = 1000, 1050
        scale = max(target_w / src_w, target_h / src_h)
        new_w = int(src_w * scale)
        new_h = int(src_h * scale)
        img = img.resize((new_w, new_h), Image.LANCZOS)
        left = (new_w - target_w) // 2
        top = max(0, (new_h - target_h) // 2)
        img = img.crop((left, top, left + target_w, top + target_h))
        canvas.paste(img, (0, 0))

        d = ImageDraw.Draw(canvas)

        # Gold separator line above text
        d.rectangle([400, 1050, 600, 1053], fill=GOLD)

        # Title — multi-line if long
        title_font = load_font(54, "light")
        words = title.split(" ")
        lines = []
        current = []
        max_w = 820
        for w in words:
            test = " ".join(current + [w])
            if d.textbbox((0, 0), test, font=title_font)[2] <= max_w:
                current.append(w)
            else:
                if current:
                    lines.append(" ".join(current))
                current = [w]
        if current:
            lines.append(" ".join(current))

        y = 1110
        for line in lines:
            bbox = d.textbbox((0, 0), line, font=title_font)
            line_w = bbox[2] - bbox[0]
            d.text((W // 2 - line_w // 2, y), line, fill=DARK, font=title_font)
            y += int(title_font.size * 1.2)

        # Subtitle (tracked uppercase, gold)
        if subtitle:
            sub_font = load_font(22, "regular")
            sub_upper = subtitle.upper()
            tracking = int(sub_font.size * 0.3)
            sub_bbox = d.textbbox((0, 0), sub_upper, font=sub_font)
            sub_w = (sub_bbox[2] - sub_bbox[0]) + tracking * (len(sub_upper) - 1)
            sx = W // 2 - sub_w // 2
            sy = y + 20
            for ch in sub_upper:
                d.text((sx, sy), ch, fill=GOLD, font=sub_font)
                cb = d.textbbox((0, 0), ch, font=sub_font)
                sx += (cb[2] - cb[0]) + tracking

        # Site URL at very bottom, tracked small
        site_font = load_font(20, "regular")
        site_upper = SITE.upper()
        tracking2 = int(site_font.size * 0.3)
        site_bbox = d.textbbox((0, 0), site_upper, font=site_font)
        site_w = (site_bbox[2] - site_bbox[0]) + tracking2 * (len(site_upper) - 1)
        ssx = W // 2 - site_w // 2
        ssy = 1430
        for ch in site_upper:
            d.text((ssx, ssy), ch, fill=(100, 80, 55), font=site_font)
            cb = d.textbbox((0, 0), ch, font=site_font)
            ssx += (cb[2] - cb[0]) + tracking2

    else:  # overlay
        # Full-bleed image
        src_w, src_h = img.size
        scale = max(W / src_w, H / src_h)
        new_w = int(src_w * scale)
        new_h = int(src_h * scale)
        img = img.resize((new_w, new_h), Image.LANCZOS)
        left = (new_w - W) // 2
        top = max(0, (new_h - H) // 2)
        canvas = img.crop((left, top, left + W, top + H))

        # Gradients
        overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        od = ImageDraw.Draw(overlay)
        # Bottom gradient for title
        for i in range(550):
            alpha = int(210 * (i / 550) ** 1.2)
            od.rectangle([0, H - i - 1, W, H - i], fill=(0, 0, 0, alpha))
        # Top-right soft vignette for watermark legibility (subtle)
        for i in range(220):
            alpha = int(120 * (i / 220) ** 1.4)
            od.rectangle([0, i, W, i + 1], fill=(0, 0, 0, alpha))

        canvas = Image.alpha_composite(canvas.convert("RGBA"), overlay).convert("RGB")
        d = ImageDraw.Draw(canvas)

        # Title (multi-line wrap)
        title_font = load_font(56, "light")
        words = title.split(" ")
        lines = []
        current = []
        max_w = 840
        for w in words:
            test = " ".join(current + [w])
            if d.textbbox((0, 0), test, font=title_font)[2] <= max_w:
                current.append(w)
            else:
                if current:
                    lines.append(" ".join(current))
                current = [w]
        if current:
            lines.append(" ".join(current))

        y = H - 260 - (len(lines) - 1) * int(title_font.size * 1.15)
        for line in lines:
            d.text((80, y), line, fill=CREAM, font=title_font)
            y += int(title_font.size * 1.15)

        # Subtitle
        if subtitle:
            sub_font = load_font(22, "regular")
            sub_upper = subtitle.upper()
            tracking = int(sub_font.size * 0.3)
            sy = y + 15
            sx = 80
            for ch in sub_upper:
                d.text((sx, sy), ch, fill=GOLD, font=sub_font)
                cb = d.textbbox((0, 0), ch, font=sub_font)
                sx += (cb[2] - cb[0]) + tracking

    # Watermark steel|r — top-right corner for panel style, top-right for overlay
    d = ImageDraw.Draw(canvas)
    wm_font = load_font(32, "thin")
    wm_a, wm_b = "steel", "r"
    a_bbox = d.textbbox((0, 0), wm_a, font=wm_font)
    b_bbox = d.textbbox((0, 0), wm_b, font=wm_font)
    a_w = a_bbox[2] - a_bbox[0]
    b_w = b_bbox[2] - b_bbox[0]
    pipe_h = int(wm_font.size * 1.0)
    pipe_w = max(2, int(wm_font.size / 22))
    gap = int(wm_font.size * 0.12)
    total_w = a_w + gap + pipe_w + gap + b_w
    wm_x = W - total_w - 40
    wm_y = 40
    wm_color = CREAM if style == "overlay" else DARK

    d.text((wm_x, wm_y), wm_a, fill=wm_color, font=wm_font)
    pipe_x = wm_x + a_w + gap
    pipe_y = wm_y + (wm_font.size - pipe_h) // 2 + int(wm_font.size * 0.08)
    d.rectangle([pipe_x, pipe_y, pipe_x + pipe_w, pipe_y + pipe_h], fill=GOLD)
    d.text((pipe_x + pipe_w + gap, wm_y), wm_b, fill=wm_color, font=wm_font)

    canvas.save(OUT / out_filename, "PNG", optimize=True)
    return OUT / out_filename


# 40 pin specs — Pinterest keyword-optimised titles
# Boards: contemporary, traditional, ornate, panelled, black, navy, london, security, country, colour-ideas
PINS = [
    # Panel style (clean, Pinterest-favourite) — 24 pins
    ("gallery/steelr-black-ornate-medallion-sidelights.jpg", "Black Ornate Steel Front Door with Medallion Detail", "London Townhouse", "ornate", "collection/steelr-black-ornate-medallion-sidelights", "panel"),
    ("gallery/steelr-navy-traditional-brass-fanlight.jpg", "Navy Blue Traditional Steel Front Door with Brass Fanlight", "Bespoke UK Made", "traditional", "collection/steelr-navy-traditional-brass-fanlight", "panel"),
    ("gallery/steelr-black-traditional-doctor-knocker-canopy.jpg", "Black Traditional Steel Front Door with Doctor Knocker", "Heritage Style", "traditional", "collection/steelr-black-traditional-doctor-knocker-canopy", "panel"),
    ("gallery/steelr-cream-traditional-lion-knocker-topiary.jpg", "Cream Traditional Steel Front Door with Lion Knocker", "Country House", "traditional", "collection/steelr-cream-traditional-lion-knocker-topiary", "panel"),
    ("gallery/steelr-sage-panelled-arched-wreath.jpg", "Sage Green Arched Panelled Steel Front Door", "Bespoke RAL Colour", "panelled", "collection/steelr-sage-panelled-arched-wreath", "panel"),
    ("gallery/steelr-olive-traditional-arched-surround.jpg", "Olive Green Arched Steel Front Door with Stone Surround", "Conservation Approved", "traditional", "collection/steelr-olive-traditional-arched-surround", "panel"),
    ("gallery/steelr-black-contemporary-ribbed-topiary.jpg", "Black Contemporary Ribbed Steel Front Door", "Modern Minimalist", "contemporary", "collection/steelr-black-contemporary-ribbed-topiary", "panel"),
    ("gallery/steelr-red-traditional-lion-knocker.jpg", "Statement Red Traditional Steel Front Door", "Bold Colour Ideas", "colour-ideas", "collection/steelr-red-traditional-lion-knocker", "panel"),
    ("gallery/steelr-black-panelled-double-fingerprint.jpg", "Black Panelled Double Steel Door with Fingerprint Access", "Smart Security", "panelled", "collection/steelr-black-panelled-double-fingerprint", "panel"),
    ("gallery/steelr-taupe-panelled-dual-sidelights.jpg", "Taupe Panelled Steel Front Door with Dual Sidelights", "Soft Neutral Palette", "panelled", "collection/steelr-taupe-panelled-dual-sidelights", "panel"),
    ("gallery/steelr-walnut-ribbed-columns.jpg", "Walnut Ribbed Contemporary Steel Front Door", "Luxury Entrance", "contemporary", "collection/steelr-walnut-ribbed-columns", "panel"),
    ("gallery/steelr-grey-panelled-stone-surround.jpg", "Grey Panelled Steel Front Door with Stone Surround", "London Townhouse", "panelled", "collection/steelr-grey-panelled-stone-surround", "panel"),
    ("gallery/steelr-cobalt-ornate-lion-knocker.jpg", "Cobalt Blue Ornate Steel Front Door", "Statement Colour", "ornate", "collection/steelr-cobalt-ornate-lion-knocker", "panel"),
    ("gallery/steelr-champagne-arched-geometric-double.jpg", "Champagne Arched Geometric Double Steel Front Door", "Grand Entrance", "contemporary", "collection/steelr-champagne-arched-geometric-double", "panel"),
    ("gallery/steelr-black-traditional-timber-canopy.jpg", "Black Traditional Steel Front Door with Timber Canopy", "Period Property", "traditional", "collection/steelr-black-traditional-timber-canopy", "panel"),
    ("gallery/steelr-espresso-contemporary-gold-inlay.jpg", "Espresso Contemporary Steel Front Door with Gold Inlay", "Luxury Modern", "contemporary", "collection/steelr-espresso-contemporary-gold-inlay", "panel"),
    ("gallery/steelr-charcoal-contemporary-horizontal-double.jpg", "Charcoal Horizontal Line Contemporary Steel Door", "Architect Design", "contemporary", "collection/steelr-charcoal-contemporary-horizontal-double", "panel"),
    ("gallery/steelr-black-traditional-stained-glass.jpg", "Black Traditional Steel Front Door with Stained Glass", "Heritage Detailing", "traditional", "collection/steelr-black-traditional-stained-glass", "panel"),
    ("gallery/steelr-navy-panelled-lanterns-fanlight.jpg", "Navy Panelled Steel Front Door with Lanterns", "Classical Style", "panelled", "collection/steelr-navy-panelled-lanterns-fanlight", "panel"),
    ("gallery/steelr-black-ornate-checkerboard-canopy.jpg", "Black Ornate Checkerboard Steel Front Door", "Signature Craft", "ornate", "collection/steelr-black-ornate-checkerboard-canopy", "panel"),
    ("gallery/steelr-grey-panelled-lever-handle.jpg", "Grey Panelled Steel Front Door with Lever Handle", "Contemporary Classic", "panelled", "collection/steelr-grey-panelled-lever-handle", "panel"),
    ("gallery/steelr-black-ornate-lion-knocker-gable.jpg", "Black Ornate Steel Front Door with Gable Porch", "Grand Home", "ornate", "collection/steelr-black-ornate-lion-knocker-gable", "panel"),
    ("gallery/steelr-sage-contemporary-bar-handle-sidelight.jpg", "Sage Green Contemporary Steel Front Door", "Modern Colour", "colour-ideas", "collection/steelr-sage-contemporary-bar-handle-sidelight", "panel"),
    ("gallery/steelr-black-panelled-grille-sidelights.jpg", "Black Panelled Steel Door with Decorative Grille", "Secured by Design", "security", "collection/steelr-black-panelled-grille-sidelights", "panel"),

    # Overlay style (dramatic, low-info) — 16 pins
    ("gallery/steelr-black-ornate-circular-fluted.jpg", "Ornate Circular Fluted Steel Door", "Bespoke Detailing", "ornate", "collection/steelr-black-ornate-circular-fluted", "overlay"),
    ("gallery/steelr-black-contemporary-dual-sidelights.jpg", "Contemporary Steel Door with Dual Sidelights", "Architect Ready", "contemporary", "collection/steelr-black-contemporary-dual-sidelights", "overlay"),
    ("gallery/steelr-olive-panelled-ring-knocker-sidelight.jpg", "Olive Panelled Steel Door with Ring Knocker", "Country Home", "panelled", "collection/steelr-olive-panelled-ring-knocker-sidelight", "overlay"),
    ("gallery/steelr-black-traditional-lion-knocker-sidelights-garden.jpg", "Black Traditional Steel Door with Lion Knocker", "Heritage Style", "traditional", "collection/steelr-black-traditional-lion-knocker-sidelights-garden", "overlay"),
    ("gallery/steelr-navy-contemporary-square-knocker.jpg", "Navy Contemporary Steel Door with Square Knocker", "Bespoke Navy", "contemporary", "collection/steelr-navy-contemporary-square-knocker", "overlay"),
    ("gallery/steelr-black-panelled-ring-knocker-recessed.jpg", "Black Panelled Steel Door with Ring Knocker", "Recessed Entry", "panelled", "collection/steelr-black-panelled-ring-knocker-recessed", "overlay"),
    ("gallery/steelr-grey-contemporary-horizontal-slots.jpg", "Grey Contemporary Steel Door with Horizontal Slots", "Modern Luxury", "contemporary", "collection/steelr-grey-contemporary-horizontal-slots", "overlay"),
    ("gallery/steelr-teal-panelled-glass-hallway.jpg", "Teal Panelled Steel Door with Glass Panels", "Statement Colour", "colour-ideas", "collection/steelr-teal-panelled-glass-hallway", "overlay"),
    ("gallery/steelr-charcoal-traditional-oval-window-lantern.jpg", "Charcoal Traditional Steel Door with Oval Window", "Classical Detail", "traditional", "collection/steelr-charcoal-traditional-oval-window-lantern", "overlay"),
    ("gallery/steelr-black-ornate-double-gable.jpg", "Double Ornate Steel Front Doors with Gable", "Manor House", "ornate", "collection/steelr-black-ornate-double-gable", "overlay"),
    ("gallery/steelr-black-contemporary-sunburst.jpg", "Black Contemporary Steel Door with Sunburst Detail", "Bespoke Design", "contemporary", "collection/steelr-black-contemporary-sunburst", "overlay"),
    ("gallery/steelr-black-traditional-glazed-double.jpg", "Black Traditional Glazed Double Steel Doors", "Grand Entrance", "traditional", "collection/steelr-black-traditional-glazed-double", "overlay"),
    ("gallery/steelr-olive-traditional-brass-pendant.jpg", "Olive Green Traditional Steel Door with Brass Pendant", "Period Property", "traditional", "collection/steelr-olive-traditional-brass-pendant", "overlay"),
    ("gallery/steelr-black-traditional-doctor-knocker-railings.jpg", "Black Traditional Steel Door with Iron Railings", "Townhouse Style", "traditional", "collection/steelr-black-traditional-doctor-knocker-railings", "overlay"),
    ("gallery/steelr-black-contemporary-panelled-sidelights.jpg", "Contemporary Panelled Steel Door with Sidelights", "Modern Minimalist", "contemporary", "collection/steelr-black-contemporary-panelled-sidelights", "overlay"),
    ("gallery/steelr-black-ornate-lion-knocker-sidelights.jpg", "Black Ornate Steel Door with Lion Knocker", "Luxury Entrance", "ornate", "collection/steelr-black-ornate-lion-knocker-sidelights", "overlay"),
]


def main():
    print(f"Building {len(PINS)} Pinterest pins -> {OUT}\n")
    csv_rows = []
    built = 0
    skipped = 0

    for i, (src_rel, title, subtitle, board, link_path, style) in enumerate(PINS, 1):
        src = IMG_DIR / src_rel
        if not src.exists():
            print(f"  SKIP {i:02d}: source missing — {src_rel}")
            skipped += 1
            continue
        out_filename = f"pin-{i:02d}-{board}-{src.stem.replace('steelr-', '')}.png"
        link_url = f"https://steelr.co.uk/{link_path}"
        try:
            path = make_pin(src, title, subtitle, board, link_url, out_filename, style)
            size_kb = path.stat().st_size // 1024
            print(f"  pin-{i:02d} ({style:7s}) {size_kb:4d}KB  {title[:60]}")
            csv_rows.append({
                "filename": out_filename,
                "title": title,
                "board": board,
                "link": link_url,
                "style": style,
            })
            built += 1
        except Exception as e:
            print(f"  ERROR {i:02d}: {e}")
            skipped += 1

    # CSV for bulk-upload tracking
    csv_path = OUT / "pins.csv"
    with csv_path.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["filename", "title", "board", "link", "style"])
        writer.writeheader()
        writer.writerows(csv_rows)

    print(f"\nDone. {built} built, {skipped} skipped.")
    print(f"Manifest: {csv_path}")


if __name__ == "__main__":
    main()
