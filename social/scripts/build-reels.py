"""
SteelR Ken Burns Reels Generator

Takes portrait source images from public/images/ and produces 20 vertical
10-second MP4 Reels (1080x1920, H.264) with:
  - Slow Ken Burns zoom-pan
  - Caption overlay (bottom-left)
  - Spec line (top)
  - Gold 'steel|r' watermark (bottom-right)
  - Optional dark gradient for text legibility

Run: python social/scripts/build-reels.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import sys
import os

# moviepy 2.0+ reorganised imports; be tolerant of both layouts
try:
    from moviepy.editor import ImageClip, CompositeVideoClip, concatenate_videoclips
except ImportError:
    from moviepy import ImageClip, CompositeVideoClip, concatenate_videoclips

ROOT = Path(__file__).resolve().parents[2]
IMG_DIR = ROOT / "public" / "images"
OUT = ROOT / "social" / "reels"
OUT.mkdir(parents=True, exist_ok=True)
FRAMES_TMP = OUT / "_frames"
FRAMES_TMP.mkdir(exist_ok=True)
FONT_VF = ROOT / "social" / "fonts" / "Montserrat-Thin.ttf"

# Brand tokens
CREAM = (245, 240, 232)
DARK = (26, 26, 24)
GOLD = (201, 169, 110)

# Output dims
W, H = 1080, 1920
FPS = 30
DURATION = 10  # seconds

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


def load_and_fit(image_path):
    """Load image, rotate per EXIF, resize so it at least covers 1080x1920, return as PIL."""
    img = Image.open(image_path)
    # Respect EXIF orientation
    exif = img.getexif()
    orientation = exif.get(274, 1)
    if orientation == 3:
        img = img.rotate(180, expand=True)
    elif orientation == 6:
        img = img.rotate(270, expand=True)
    elif orientation == 8:
        img = img.rotate(90, expand=True)

    img = img.convert("RGB")

    # Scale to at least cover the target aspect, with headroom for pan
    src_w, src_h = img.size
    # We want the scaled image to be ~1.15x the target at minimum (for zoom-in range)
    target_w = int(W * 1.15)
    target_h = int(H * 1.15)
    scale = max(target_w / src_w, target_h / src_h)
    new_w = int(src_w * scale)
    new_h = int(src_h * scale)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    return img


def render_frame(base_img, zoom_factor, pan_x, pan_y, caption, spec, watermark_font, caption_font, spec_font):
    """Render a single frame: crop scaled+shifted base_img, overlay text + watermark."""
    src_w, src_h = base_img.size

    # Crop box in source coordinates centred at (src_w/2 + pan_x, src_h/2 + pan_y)
    # Size of crop is (W / zoom_factor, H / zoom_factor) relative to base image space
    # But base_img is already scaled so just divide by zoom
    crop_w = W / zoom_factor
    crop_h = H / zoom_factor
    cx = src_w / 2 + pan_x
    cy = src_h / 2 + pan_y
    left = int(cx - crop_w / 2)
    top = int(cy - crop_h / 2)
    right = int(left + crop_w)
    bottom = int(top + crop_h)

    # Clamp to source bounds
    if left < 0:
        right -= left
        left = 0
    if top < 0:
        bottom -= top
        top = 0
    if right > src_w:
        left -= (right - src_w)
        right = src_w
    if bottom > src_h:
        top -= (bottom - src_h)
        bottom = src_h

    frame = base_img.crop((left, top, right, bottom)).resize((W, H), Image.LANCZOS)

    # Dark gradient overlays for text legibility (top + bottom)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    # Bottom gradient — 420px, opaque at very bottom
    for i in range(420):
        alpha = int(200 * (i / 420) ** 1.2)
        od.rectangle([0, H - i - 1, W, H - i], fill=(0, 0, 0, alpha))
    # Top gradient — 360px, stronger than before so gold spec text reads
    for i in range(360):
        alpha = int(190 * (i / 360) ** 1.2)
        od.rectangle([0, i, W, i + 1], fill=(0, 0, 0, alpha))

    frame = Image.alpha_composite(frame.convert("RGBA"), overlay)

    d = ImageDraw.Draw(frame)

    # Spec line (top centre, tracked)
    if spec:
        spec_tracking = int(spec_font.size * 0.3)
        spec_bbox = d.textbbox((0, 0), spec, font=spec_font)
        spec_w = (spec_bbox[2] - spec_bbox[0]) + spec_tracking * (len(spec) - 1)
        sx = W // 2 - spec_w // 2
        sy = 140
        for ch in spec:
            d.text((sx, sy), ch, fill=GOLD, font=spec_font)
            cb = d.textbbox((0, 0), ch, font=spec_font)
            sx += (cb[2] - cb[0]) + spec_tracking

    # Caption (bottom-left, multi-line supported)
    if caption:
        lines = caption.split("\n")
        cy_line = H - 260
        for line in lines:
            d.text((80, cy_line), line, fill=CREAM, font=caption_font)
            cy_line += int(caption_font.size * 1.15)

    # Watermark steel|r bottom-right
    wm_font = watermark_font
    wm_text_a, wm_text_b = "steel", "r"
    a_bbox = d.textbbox((0, 0), wm_text_a, font=wm_font)
    b_bbox = d.textbbox((0, 0), wm_text_b, font=wm_font)
    a_w = a_bbox[2] - a_bbox[0]
    b_w = b_bbox[2] - b_bbox[0]
    pipe_h = int(wm_font.size * 1.0)
    pipe_w = max(2, int(wm_font.size / 22))
    gap = int(wm_font.size * 0.12)
    total_w = a_w + gap + pipe_w + gap + b_w
    wm_x = W - total_w - 60
    wm_y = H - wm_font.size - 100

    d.text((wm_x, wm_y), wm_text_a, fill=CREAM, font=wm_font)
    pipe_x = wm_x + a_w + gap
    pipe_y = wm_y + (wm_font.size - pipe_h) // 2 + int(wm_font.size * 0.08)
    d.rectangle([pipe_x, pipe_y, pipe_x + pipe_w, pipe_y + pipe_h], fill=GOLD)
    d.text((pipe_x + pipe_w + gap, wm_y), wm_text_b, fill=CREAM, font=wm_font)

    return frame.convert("RGB")


def build_reel(source, caption, spec, out_filename, zoom_direction="in"):
    """Build one 10-second reel. zoom_direction: 'in' or 'out'."""
    print(f"Building {out_filename}")
    print(f"  source: {source.name}")
    base = load_and_fit(source)
    src_w, src_h = base.size

    watermark_font = load_font(48, "thin")
    caption_font = load_font(58, "light")
    spec_font = load_font(32, "regular")

    # Zoom range: 1.0 -> 1.12 (zoom in) or 1.12 -> 1.0 (zoom out)
    if zoom_direction == "in":
        z0, z1 = 1.0, 1.12
    else:
        z0, z1 = 1.12, 1.0

    # Small random-ish pan derived from image aspect
    pan_max_x = (src_w - W) * 0.05
    pan_max_y = (src_h - H) * 0.05

    def make_frame(t):
        p = t / DURATION  # 0 -&gt; 1
        # Ease-in-out curve
        ease = 0.5 - 0.5 * np.cos(p * np.pi)
        zoom = z0 + (z1 - z0) * ease
        px = pan_max_x * (ease - 0.5) * 2  # -pan_max -&gt; +pan_max
        py = pan_max_y * (ease - 0.5) * 2 * 0.3  # less y movement
        frame = render_frame(base, zoom, px, py, caption, spec, watermark_font, caption_font, spec_font)
        return np.array(frame)

    # Build via moviepy VideoClip-style from function
    try:
        from moviepy.video.VideoClip import VideoClip
    except ImportError:
        from moviepy import VideoClip

    clip = VideoClip(make_frame, duration=DURATION)
    out_path = OUT / out_filename
    clip.write_videofile(
        str(out_path),
        fps=FPS,
        codec="libx264",
        audio=False,
        preset="fast",
        threads=4,
        bitrate="6000k",
        logger=None,
    )
    print(f"  wrote {out_path.name} ({out_path.stat().st_size // 1024} KB)")


# 20 reel specs
REELS = [
    {
        "source": "gallery/steelr-black-ornate-medallion-sidelights.jpg",
        "caption": "Black Ornate Entrance\nwith Medallion Detail",
        "spec": "SR3 RATED  ·  PAS 24  ·  UK MANUFACTURED",
        "filename": "01-black-ornate-medallion.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-navy-traditional-brass-fanlight.jpg",
        "caption": "Navy Blue Traditional\nwith Brass Fanlight",
        "spec": "BESPOKE  ·  ANY RAL COLOUR  ·  MADE TO ORDER",
        "filename": "02-navy-brass-fanlight.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-black-traditional-doctor-knocker-canopy.jpg",
        "caption": "Black Traditional Steel Door\nwith Doctor Knocker",
        "spec": "ENGINEERED FOR PERMANENCE",
        "filename": "03-black-doctor-knocker.mp4",
        "zoom": "out",
    },
    {
        "source": "gallery/steelr-cream-traditional-lion-knocker-topiary.jpg",
        "caption": "Cream Traditional\nwith Lion Knocker",
        "spec": "SECURED BY DESIGN  ·  FD30S FIRE RATED",
        "filename": "04-cream-lion-knocker.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-black-panelled-double-fingerprint.jpg",
        "caption": "Panelled Double Door\nwith Fingerprint Access",
        "spec": "EKEY BIOMETRIC  ·  SR3 AS STANDARD",
        "filename": "05-black-fingerprint-double.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-black-ornate-lion-knocker-sidelights.jpg",
        "caption": "Black Ornate Door\nwith Lion Knocker",
        "spec": "BESPOKE STEEL ENTRANCE DOORS",
        "filename": "06-black-lion-sidelights.mp4",
        "zoom": "out",
    },
    {
        "source": "gallery/steelr-navy-panelled-lanterns-fanlight.jpg",
        "caption": "Navy Panelled Entrance\nwith Lanterns and Fanlight",
        "spec": "ANY RAL  ·  ANY FINISH  ·  ANY CONFIGURATION",
        "filename": "07-navy-lanterns.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-black-contemporary-ribbed-topiary.jpg",
        "caption": "Contemporary Ribbed\nBlack Entrance",
        "spec": "DESIGNED FOR DISTINCTION",
        "filename": "08-black-ribbed.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-olive-traditional-arched-surround.jpg",
        "caption": "Olive Green Traditional\nwith Arched Stone Surround",
        "spec": "COUNTRY HOUSE  ·  CONSERVATION APPROVED",
        "filename": "09-olive-arched.mp4",
        "zoom": "out",
    },
    {
        "source": "gallery/steelr-black-traditional-timber-canopy.jpg",
        "caption": "Black Traditional\nwith Timber Canopy",
        "spec": "PERIOD-SYMPATHETIC  ·  SR3 RATED",
        "filename": "10-black-timber-canopy.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-sage-panelled-arched-wreath.jpg",
        "caption": "Sage Green Panelled\nwith Arched Wreath",
        "spec": "ANY RAL COLOUR  ·  MATCHED INSIDE AND OUT",
        "filename": "11-sage-wreath.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-walnut-ribbed-columns.jpg",
        "caption": "Walnut Ribbed\nwith Stone Columns",
        "spec": "CONTEMPORARY LUXURY",
        "filename": "12-walnut-columns.mp4",
        "zoom": "out",
    },
    {
        "source": "gallery/steelr-black-panelled-grille-sidelights.jpg",
        "caption": "Black Panelled\nwith Decorative Grille",
        "spec": "SR3  ·  SR4 LPS 1175 AVAILABLE",
        "filename": "13-black-grille.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-grey-panelled-stone-surround.jpg",
        "caption": "Grey Panelled\nwith Stone Surround",
        "spec": "LONDON TOWNHOUSE  ·  BESPOKE SPECIFICATION",
        "filename": "14-grey-stone.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-red-traditional-lion-knocker.jpg",
        "caption": "Statement Red Traditional\nwith Lion Knocker",
        "spec": "ANY RAL COLOUR  ·  MADE FOR YOU",
        "filename": "15-red-lion.mp4",
        "zoom": "out",
    },
    {
        "source": "gallery/steelr-black-traditional-stained-glass.jpg",
        "caption": "Black Traditional\nwith Stained Glass",
        "spec": "HERITAGE DETAILING  ·  MODERN SECURITY",
        "filename": "16-black-stained-glass.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-taupe-panelled-dual-sidelights.jpg",
        "caption": "Taupe Panelled Entrance\nwith Dual Sidelights",
        "spec": "SOFT NEUTRAL PALETTE  ·  ANY RAL",
        "filename": "17-taupe-dual.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-black-ornate-checkerboard-canopy.jpg",
        "caption": "Black Ornate\nCheckerboard Steel",
        "spec": "SIGNATURE CRAFTSMANSHIP",
        "filename": "18-black-checkerboard.mp4",
        "zoom": "out",
    },
    {
        "source": "gallery/steelr-cobalt-ornate-lion-knocker.jpg",
        "caption": "Cobalt Blue Ornate\nwith Lion Knocker",
        "spec": "BESPOKE COLOUR  ·  STATEMENT ENTRANCE",
        "filename": "19-cobalt-lion.mp4",
        "zoom": "in",
    },
    {
        "source": "gallery/steelr-champagne-arched-geometric-double.jpg",
        "caption": "Champagne Geometric\nArched Double Door",
        "spec": "GRAND ENTRANCE  ·  ARCHITECT-READY",
        "filename": "20-champagne-arched.mp4",
        "zoom": "in",
    },
]


def main():
    print(f"Building {len(REELS)} SteelR Ken Burns Reels -&gt; {OUT}\n")
    # Ensure imageio-ffmpeg binary is set
    try:
        import imageio_ffmpeg
        ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
        os.environ["IMAGEIO_FFMPEG_EXE"] = ffmpeg_exe
    except ImportError:
        pass

    built = 0
    skipped = 0
    for reel in REELS:
        src = IMG_DIR / reel["source"]
        if not src.exists():
            print(f"  SKIP: {reel['filename']} — source missing: {src}")
            skipped += 1
            continue
        try:
            build_reel(src, reel["caption"], reel["spec"], reel["filename"], reel["zoom"])
            built += 1
        except Exception as e:
            print(f"  ERROR on {reel['filename']}: {e}")
            skipped += 1

    print(f"\nDone. {built} built, {skipped} skipped. Output: {OUT}")


if __name__ == "__main__":
    main()
