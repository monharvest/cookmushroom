#!/usr/bin/env bash
# Convert a source photo into the CookMushroom hero WebP trio.
#
#   ./scripts/make-hero.sh <source-image> <hero-name>
#   ./scripts/make-hero.sh ~/Downloads/pasta.png cookmushroom-garlic-mushroom-pasta-hero
#
# Produces in public/images/:
#   <hero-name>.webp       1200x800  (target <=110 KB, per AGENTS.md)
#   <hero-name>-900.webp    900x600
#   <hero-name>-600.webp    600x400
#
# Source should be landscape 3:2 and at least 1200x800. Anything larger is
# center-cropped to 3:2.
set -euo pipefail

src=${1:?usage: make-hero.sh <source-image> <hero-name>}
name=${2:?usage: make-hero.sh <source-image> <hero-name>}
out="$(cd "$(dirname "$0")/.." && pwd)/public/images"
budget=$((110 * 1024))

[ -f "$src" ] || { echo "error: no such file: $src" >&2; exit 1; }
mkdir -p "$out"

render() { # width height quality outfile
  magick "$src" -resize "${1}x${2}^" -gravity center -extent "${1}x${2}" \
    -strip -quality "$3" "$4"
}

# Full size: step quality down until it fits the byte budget.
for q in 82 78 74 70 66 62; do
  render 1200 800 "$q" "$out/$name.webp"
  size=$(wc -c < "$out/$name.webp")
  [ "$size" -le "$budget" ] && break
done

render 900 600 80 "$out/$name-900.webp"
render 600 400 80 "$out/$name-600.webp"

echo "wrote (quality $q):"
for f in "$name.webp" "$name-900.webp" "$name-600.webp"; do
  printf '  %-52s %6.1f KB\n' "$f" "$(echo "scale=1; $(wc -c < "$out/$f")/1024" | bc)"
done
[ "$size" -le "$budget" ] || echo "WARNING: full size still over 110 KB budget"
