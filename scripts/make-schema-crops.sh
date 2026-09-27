#!/usr/bin/env bash
# Generate the 16:9, 4:3 and 1:1 crops Google recommends for Recipe images.
#
#   ./scripts/make-schema-crops.sh                       # every recipe hero missing crops
#   ./scripts/make-schema-crops.sh --force               # rebuild them all
#   ./scripts/make-schema-crops.sh <hero-name> [...]     # specific heroes
#   ./scripts/make-schema-crops.sh <hero-name>:north     # crop anchored off-centre
#
# Produces in public/images/, from the full-size <hero-name>.webp:
#   <hero-name>-16x9.webp   1200x675
#   <hero-name>-4x3.webp    1024x768
#   <hero-name>-1x1.webp     800x800
#
# Why: Google's Recipe docs ask for 16:9, 4:3 and 1:1 images; carousels and
# the square thumbnail crop a single 3:2 hero however they like. RecipePage
# lists only the crops that exist on disk, so a recipe without them still
# emits valid schema with the 3:2 hero alone.
#
# The crops are fetched by Google, not by browsers, so there is no byte budget.
# Look at every 1:1 — it cuts the most. If the subject sits off-centre, pass a
# gravity after a colon (north, south, east, west, and the corners).
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/public/images"
force=""
names=()

for arg in "$@"; do
  case "$arg" in
    --force) force=1 ;;
    *) names+=("$arg") ;;
  esac
done

if [ ${#names[@]} -eq 0 ]; then
  while IFS= read -r hero; do names+=("$hero"); done < <(
    grep -ohE "/images/[a-z0-9-]+\.webp" "$root/src/data/recipes.ts" | sed -E 's#/images/##; s#\.webp$##' | sort -u
  )
fi

made=0
skipped=0

crop() { # src gravity width height outfile
  magick "$1" -gravity "$2" -crop "$(ratio_box "$3" "$4")+0+0" +repage \
    -resize "${3}x${4}!" -strip -quality 80 "$5"
}

# Largest box of the target ratio that fits inside the 1200x800 source.
ratio_box() {
  local w=1200 h=800 tw=$1 th=$2
  if [ $((w * th)) -gt $((h * tw)) ]; then
    echo "$((h * tw / th))x$h"
  else
    echo "${w}x$((w * th / tw))"
  fi
}

for entry in "${names[@]}"; do
  name="${entry%%:*}"
  gravity="center"
  [ "$entry" != "$name" ] && gravity="${entry#*:}"
  src="$out/$name.webp"
  [ -f "$src" ] || { echo "error: no hero at $src" >&2; exit 1; }

  for spec in 16x9:1200:675 4x3:1024:768 1x1:800:800; do
    IFS=: read -r ratio width height <<< "$spec"
    file="$out/$name-$ratio.webp"
    if [ -f "$file" ] && [ -z "$force" ]; then
      skipped=$((skipped + 1))
      continue
    fi
    crop "$src" "$gravity" "$width" "$height" "$file"
    made=$((made + 1))
  done
done

echo "schema crops: $made written, $skipped already current"
