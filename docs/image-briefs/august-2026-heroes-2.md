# Hero image brief — August 2026, batch 2 (1 image)

**Status: complete 2026-08-14.** The hero trio is generated and wired to
`/how-to-tell-if-mushrooms-are-bad/`.

## Workflow

1. Generate the image below at **1200×800 or larger, landscape 3:2**, PNG or JPG.
2. Save it anywhere (e.g. `~/Downloads/spoiled.png`).
3. Run the converter:

```bash
./scripts/make-hero.sh ~/Downloads/spoiled.png cookmushroom-mushrooms-going-bad-hero
```

4. Then add these two properties to the `how-to-tell-if-mushrooms-are-bad` entry in
   `src/data/guides.ts`, right before `steps:` (this is the only wiring step):

```ts
image: '/images/cookmushroom-mushrooms-going-bad-hero.webp', imageAlt: 'Four firm cremini mushrooms on a wooden board beside two older ones with cracked darkened caps, one turned over showing dark open gills',
```

5. `npm run build`, then push.

## House style

Editorial food photography, landscape 3:2, natural window light from the left,
shallow depth of field, warm neutral background. Realistic texture.
**No people, no hands, no text, no labels, no logos, no watermark.**
Match the existing heroes: appetizing but restrained, one hero subject, minimal props.

---

## Telling if mushrooms are bad

- **File name:** `cookmushroom-mushrooms-going-bad-hero`
- **Page:** `/how-to-tell-if-mushrooms-are-bad/`
- **Alt text to set:** "Four firm cremini mushrooms on a wooden board beside two older ones with cracked darkened caps, one turned over showing dark open gills"

> Editorial food photograph comparing fresh and aging mushrooms: on the left of a
> pale wooden board, four firm cremini mushrooms with smooth domed caps and dry pale
> stems; on the right, two clearly older mushrooms of the same variety with wrinkled,
> darkened tan caps and one turned over to show gills opened out to dark brown. Cool
> natural side light, shallow depth of field, warm neutral background, visible cap
> texture. Landscape 3:2. No people, no hands, no text, no labels, no watermark.

**Check before converting:**

- The contrast between the two groups must be **readable at a glance** — fresh and
  smooth on one side, wrinkled and darkened on the other. If both groups look the
  same, reject it; the whole page is about telling them apart.
- **No slime, no mold, no fuzz, no wet black rot.** The aging mushrooms should look
  tired, not disgusting. This is a hero on a cooking site, and the page's thesis is
  that wrinkled and dark mushrooms are still perfectly usable.
- No liquid pooling, no water droplets, no washed mushrooms.
- Whole mushrooms only, one variety only (cremini or white button). No wild or
  specialty species, no mixed baskets.
- No packaging in frame — this is the counter-top check, not the storage page.
