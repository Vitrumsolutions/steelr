#!/usr/bin/env bash
# 7 pages x (3 mobile + 3 desktop) = 42 Lighthouse runs against live steelr.co.uk
set -u
OUT="audit-data/lighthouse-20260522"
mkdir -p "$OUT"

labels=(home collection door area blog topic contact)
urls=(
  "https://steelr.co.uk/"
  "https://steelr.co.uk/collection"
  "https://steelr.co.uk/collection/black-contemporary-dual-sidelights"
  "https://steelr.co.uk/areas/buckinghamshire"
  "https://steelr.co.uk/blog/sr4-lps-1175-commercial-grade-residential"
  "https://steelr.co.uk/bespoke-steel-front-doors-uk"
  "https://steelr.co.uk/contact"
)

for idx in "${!labels[@]}"; do
  label="${labels[$idx]}"
  url="${urls[$idx]}"
  for mode in mobile desktop; do
    preset=""
    [ "$mode" = "desktop" ] && preset="--preset=desktop"
    for i in 1 2 3; do
      f="$OUT/${label}-${mode}-${i}.json"
      echo ">>> $label $mode run $i"
      npx -y lighthouse "$url" --quiet \
        --chrome-flags="--headless --no-sandbox --disable-gpu" \
        $preset \
        --only-categories=performance,accessibility,best-practices,seo \
        --output=json --output-path="$f" 2>/dev/null
      if [ -f "$f" ]; then echo "    wrote $f"; else echo "    FAILED $label $mode $i"; fi
    done
  done
done
echo "=== ALL LIGHTHOUSE RUNS DONE ==="
