# Hero image brief — August 2026 (1 image)

**Status: delivered 2026-08-07.** The image was generated from the prompt below,
inspected against the reject criteria, and shipped with the page. Kept as the
reference example of a hero brief that produced a usable image first time.

## Workflow

1. Generate the image below at **1200×800 or larger, landscape 3:2**, PNG or JPG.
2. Save it anywhere (e.g. `~/Downloads/storage.png`).
3. Run the converter — it produces the WebP trio at the right sizes and byte budget:

```bash
./scripts/make-hero.sh ~/Downloads/storage.png cookmushroom-storing-mushrooms-hero
```

4. Then `npm run build` and push. The data file already references this exact
   filename — nothing else to wire up.

## House style

Editorial food photography, landscape 3:2, natural window light from the left,
shallow depth of field, warm neutral background. Realistic texture.
**No people, no hands, no text, no labels, no logos, no watermark.**
Match the existing 31 heroes: appetizing but restrained, one hero subject, minimal props.

---

## Storing mushrooms

- **File name:** `cookmushroom-storing-mushrooms-hero`
- **Page:** `/how-to-store-mushrooms/`
- **Alt text already set:** "Cremini mushrooms in an open paper bag beside a vented carton on a refrigerator shelf"

> Editorial food photograph of fresh mushroom storage: a brown kraft paper bag
> resting on its side with firm, unblemished cremini mushrooms spilling gently out of
> the open top, next to a clear vented plastic produce carton holding more whole
> mushrooms. Set on a clean pale refrigerator shelf or a cool white surface, cool even
> light, shallow depth of field, a few loose mushrooms in front with visible cap
> texture and dry, pale stems. Landscape 3:2. No people, no hands, no text, no labels,
> no watermark.

**Check before converting:**

- Mushrooms must look **fresh and dry** — firm domed caps, no slime, no dark wet
  patches, no wrinkling. The page is about mushrooms staying good; a tired-looking
  mushroom contradicts the whole page.
- The paper bag must read as **paper**, not plastic or fabric. It is the single
  most important object in the frame.
- No water droplets, no washed/wet mushrooms — the page's first instruction is
  "do not wash before storing."
- Whole mushrooms only. Sliced mushrooms contradict the storage advice.
- Species: plain cremini or white button. No wild or specialty species.
