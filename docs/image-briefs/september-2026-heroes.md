# Hero image brief — September 2026, batch 1 (1 image)

**Status: not yet generated.** `/how-to-cook-chicken-of-the-woods/` is written, wired, and
building; the hero is the only thing between it and the publication gate.

**This is the seasonal item — `how to cook chicken of the woods` peaks at 6,600/mo in
September, up from 1,600 now. The page needs to be live and indexed before that.**

## Workflow

1. Generate at **1200×800 or larger, landscape 3:2**, PNG or JPG.
   If the generator has an aspect-ratio control, set 3:2 — do not accept a square crop.
2. Save anywhere (e.g. `~/Downloads/cotw.png`).
3. Run the converter — it produces the WebP trio at the right sizes and byte budget:

```bash
./scripts/make-hero.sh ~/Downloads/cotw.png cookmushroom-chicken-of-the-woods-hero
```

4. No wiring step needed this time — `guides.ts` already carries the `image` and
   `imageAlt` lines. Dropping the files in `public/images/` completes the page.
5. `npm run build`, then push.

## House style

Editorial food photography, landscape 3:2, natural window light from the left,
shallow depth of field, warm neutral background. Realistic texture.
**No people, no hands, no text, no labels, no logos, no watermark.**
Match the existing 34 heroes: appetizing but restrained, one hero subject, minimal props.

---

## 1. Chicken of the woods

- **File name:** `cookmushroom-chicken-of-the-woods-hero`
- **Page:** `/how-to-cook-chicken-of-the-woods/`
- **Already wired in `guides.ts` as:**

```ts
image: '/images/cookmushroom-chicken-of-the-woods-hero.webp', imageAlt: 'Golden pan-seared chicken of the woods slabs with thyme and lemon in a cast-iron skillet',
```

> Editorial food photograph of cooked chicken of the woods mushroom (Laetiporus): thick
> half-inch slabs of the bright orange-and-yellow shelf mushroom, pan-seared to a deep
> golden brown on their faces while the cut edges keep their distinctive apricot-orange
> colour, arranged in a single layer in a black cast-iron skillet. Sprigs of fresh thyme
> and a lemon wedge at the edge of the pan. Warm natural side light, shallow depth of
> field, dark neutral background, visible layered fibrous texture on the cut faces.
> Landscape 3:2. No people, no hands, no text, no labels, no watermark.

**Check before converting — species accuracy matters more here than on any previous hero:**

- **It must not look like actual chicken meat.** This is the single most likely failure:
  the name will push a generator toward poultry. Reject anything with the smooth,
  uniform surface of a chicken breast. Real chicken of the woods shows a **layered,
  fibrous, slightly ragged cut face** — that visible grain is the tell.
- **Colour must be orange-to-apricot at the cut edges**, not brown, not white, not beige.
  A pale or brown mushroom is not this species and the page is a species guide.
- **Cooked, not raw, and not on a tree.** The frame is a skillet of finished food. Reject
  any image of a specimen growing on a trunk or lying on forest floor — this is a cooking
  site and we do not run foraging or identification imagery.
- **Slabs, in one layer, with space between them.** That cut and that spacing are the
  technique the page teaches.
- No gills and no visible stem. Chicken of the woods is a pore-surfaced bracket fungus;
  a gilled, capped, stemmed mushroom is the wrong organism entirely.
- No breading, no sauce, no buffalo coating — those are the variations, not the method.
- One species only. No mixed-mushroom pans.
