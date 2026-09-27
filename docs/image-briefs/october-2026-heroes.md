# Hero image brief — mushroom stuffing

**Status: SHIPPED 2026-09-27.** Attempt 1 accepted and live on `/mushroom-stuffing/`,
13 days ahead of the October 10 target. Native 3:2 (1248×832, quality model). Crisp
golden top, browned mushrooms, sage, white rectangular dish, spoon in the scooped corner.
Visual gate passed against every reject criterion; two minor notes, neither a reject — a
few mushroom slices near the spoon are only lightly browned, and the scooped corner reads
softer than the page's "not soggy" pitch.

- **File name:** `cookmushroom-mushroom-stuffing-hero`
- **Page:** `/mushroom-stuffing/`
- **Alt text already on the page** (the image must match it): *Baked mushroom stuffing with
  a crisp golden top, browned mushrooms and sage in a white baking dish*
- **Why:** calendar 4.1, reordered from `/mushroom-gravy/` on 2026-09-27.

**Keyword note (Ubersuggest, US, 2026-09-27):** `mushroom stuffing` 1,300/mo average,
**9,900 in November**, SD 22. The live SERP is weak: two grocery-chain recipe pages, an
Allrecipes category page and a Facebook post in the top 10, DA 21 blogs at #11–13.

---

## THE PROMPT — use this one

Paste verbatim. Plain prose, no markdown.

> Editorial three-quarter-angle food photograph of a white rectangular ceramic baking dish
> of freshly baked bread stuffing on a pale wooden table. The top is deep golden brown and
> crisp, with craggy toasted bread cubes standing up at different heights rather than a
> flat surface. Well-browned slices of brown cremini mushrooms and darker chopped
> mushrooms are clearly visible between the bread cubes, with small flecks of chopped
> parsley and a few whole crisp sage leaves on top. One corner has been scooped out and a
> large metal serving spoon rests in the dish, showing a moist, soft interior of bread and
> mushrooms. Warm natural side light from the left, soft shadows, shallow depth of field.
> Landscape 3:2 aspect ratio, composed for 3:2. No turkey, no meat, no sausage, no melted
> cheese, no gravy boat, no candles, no pumpkins, no autumn leaves or seasonal decorations.
> No people, no hands, no text, no labels, no watermark.

## Reject it if

- **The top is flat, pale, or wet-looking.** The page's whole argument is a crisp top and a
  stuffing that is not soggy; a pale, damp surface contradicts it.
- **The mushrooms are not clearly mushrooms.** If it reads as plain bread stuffing, or the
  mushrooms look raw, grey or rubbery rather than browned, it fails.
- Any **meat, sausage crumbles or melted cheese.** The recipe is vegetarian and has no cheese.
- It reads as **bread pudding** (smooth custard set around the bread) or as a salad of
  croutons.
- The dish is a **cast-iron skillet or a round casserole**. The alt text says a white baking
  dish. (If a skillet version comes out clearly better, keep it and say so — I will change
  the alt text to match rather than ship a mismatch.)
- **Seasonal props** crowd the frame. The house style is food-only.
- Wrong aspect ratio — must be 3:2 landscape, composed for it, not centre-cropped from 16:9.
- Any text, label, logo or watermark.

## Then

```bash
./scripts/make-hero.sh ~/Downloads/stuffing.png cookmushroom-mushroom-stuffing-hero
```

```bash
./scripts/make-og-cards.sh
```

After that the page is ready to push. The data file already references this exact filename,
so nothing else needs wiring.

## House style

Match the other recipe heroes: one hero subject, restrained props, natural window light from
the left, warm neutral ground, realistic texture — visible browning, crisp edges.

## Note from the puffball briefs

Do not use similes naming another food to describe texture. Describing puffball flesh as
"like a dense fresh cheese" sent six generations to fried halloumi. Describe the thing
itself.

## Attempt log

- **Attempt 1 (accepted 2026-09-27):** Grok Imagine quality, native 3:2 (1248×832 JPEG). White rectangular dish, crisp uneven golden top, browned cremini slices, sage and parsley, spoon in a scooped moist corner. No meat, cheese, or seasonal props. Full-size WebP 109.9 KB (112,610 bytes). Not pushed.
