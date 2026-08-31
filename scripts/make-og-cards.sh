#!/usr/bin/env bash
# Generate JPEG social cards from the WebP hero trio.
#
#   ./scripts/make-og-cards.sh            # all heroes missing a card
#   ./scripts/make-og-cards.sh --force    # rebuild every card
#
# Produces public/images/<hero-name>-og.jpg at 1200x630 (the canonical
# Open Graph ratio) for every full-size hero WebP.
#
# Why JPEG when the site is WebP-only: og:image is fetched by third-party
# scrapers, not browsers. Facebook, X and Pinterest render WebP, but several
# others — LinkedIn and assorted chat unfurlers among them — still do not, and
# a card that fails to render costs the share entirely. Page images stay WebP.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/public/images"
force=${1:-}
made=0
skipped=0

for src in "$out"/*.webp; do
  case "$src" in *-600.webp|*-900.webp) continue ;; esac
  card="${src%.webp}-og.jpg"
  if [ -f "$card" ] && [ "$force" != "--force" ]; then
    skipped=$((skipped + 1))
    continue
  fi
  magick "$src" -resize '1200x630^' -gravity center -extent 1200x630 \
    -strip -interlace JPEG -quality 82 "$card"
  made=$((made + 1))
done

echo "og cards: $made written, $skipped already current"
