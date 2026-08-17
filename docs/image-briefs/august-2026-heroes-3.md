# Hero image brief — August 2026, batch 3 (2 images)

**Status: generated 2026-08-17.** Both WebP trios exist and are wired in `guides.ts`.
Uncommitted; not pushed.

**Hand the two prompt blocks below to Hermes (via Grok).** Everything Hermes needs is in
this file — prompt, aspect ratio, and reject criteria.

## Workflow

1. Generate each image at **1200×800 or larger, landscape 3:2**, PNG or JPG.
   If the generator has an aspect-ratio control, set 3:2 — do not accept a square crop.
2. Save anywhere (e.g. `~/Downloads/freeze.png`, `~/Downloads/dry.png`).
3. Run the converter once per image — it produces the WebP trio at the right sizes and
   byte budget:

```bash
./scripts/make-hero.sh ~/Downloads/freeze.png cookmushroom-freezing-mushrooms-hero
```

```bash
./scripts/make-hero.sh ~/Downloads/dry.png cookmushroom-drying-mushrooms-hero
```

4. Then add the matching line to each entry in `src/data/guides.ts`, immediately before
   its `steps:` property (the only wiring step). Exact lines in each section below.
5. `npm run build`, then push.

## House style

Editorial food photography, landscape 3:2, natural window light from the left,
shallow depth of field, warm neutral background. Realistic texture.
**No people, no hands, no text, no labels, no logos, no watermark.**
Match the existing 33 heroes: appetizing but restrained, one hero subject, minimal props.

---

## 1. Freezing mushrooms

- **File name:** `cookmushroom-freezing-mushrooms-hero`
- **Page:** `/how-to-freeze-mushrooms/`
- **Wiring line:**

```ts
image: '/images/cookmushroom-freezing-mushrooms-hero.webp', imageAlt: 'Browned sautéed mushroom slices spread in a single layer on a parchment-lined tray, cooled and ready to freeze',
```

> Editorial food photograph of cooked mushrooms prepared for freezing: golden-brown
> sautéed cremini slices spread in a single even layer on a parchment-lined metal
> baking tray, well spaced so the pieces do not touch. Cool natural side light, shallow
> depth of field, warm neutral background, visible browned edges and a dry surface on
> the slices. Landscape 3:2. No people, no hands, no text, no labels, no watermark.

**Check before converting:**

- The mushrooms must look **cooked and browned**, not raw. The entire page argues you
  sauté before freezing — a tray of raw white slices contradicts the thesis outright.
- **Single layer, pieces separated.** That spacing is the actual technique being taught.
- No ice, no frost, no visible freezer interior, no frozen block. This is the tray
  going *into* the freezer, not coming out.
- No pooled liquid or glossy wetness on the tray — the slices should read as dry-surfaced.
- No plastic bags, no packaging, no labels in frame.
- Plain cremini or button only. No wild or specialty species.

---

## 2. Drying mushrooms

- **File name:** `cookmushroom-drying-mushrooms-hero`
- **Page:** `/how-to-dry-mushrooms/`
- **Wiring line:**

```ts
image: '/images/cookmushroom-drying-mushrooms-hero.webp', imageAlt: 'Thin mushroom slices arranged in a single layer on a wire drying rack beside a jar of finished dried mushrooms',
```

> Editorial food photograph of mushrooms being dried: thin, even slices of fresh
> mushroom arranged in a single layer on a stainless wire drying rack, with a clear
> glass jar of finished, shrunken dried mushroom slices beside it. Warm natural side
> light, shallow depth of field, neutral wooden surface, visible gill texture on the cut
> faces. Landscape 3:2. No people, no hands, no text, no labels, no watermark.

**Check before converting:**

- Slices must be **thin and even** — the page's core instruction is uniform 1/4-inch
  slices. Chunky, ragged pieces contradict it.
- **Single layer with gaps.** Overlapping slices are the mistake the page warns about.
- The jar contents must look genuinely **dried**: shrunken, curled, leathery-to-brittle
  and noticeably darker than the fresh slices on the rack. If the jar looks like fresh
  mushrooms, reject it — the fresh/dried contrast is the whole point of the frame.
- No mould, no fuzz, no dark wet spots on any slice.
- No dehydrator branding, appliance logos, or model markings in frame.
- Plain cremini, button, or shiitake. Keep it to one variety.
