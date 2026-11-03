# Hero image briefs — November 2026 (calendar 5.1–5.3)

**Status: ALL NEEDED.** The three pages are drafted on branch `content-2026-11` (2026-11-03)
and reference these exact files. `npm run build` fails on purpose until they exist
(`scripts/check-image-refs.mjs`), so nothing can deploy without them.

All three are **recipe heroes** (they live in `recipes.ts`), so each needs the full set:

```bash
./scripts/make-hero.sh ~/Downloads/<source>.png <hero-name>
./scripts/make-og-cards.sh
./scripts/make-schema-crops.sh <hero-name>   # check the 1:1; add :north etc. if it cuts the subject
npm run build
```

Source: landscape **3:2**, at least 1200×800, composed for 3:2 (not centre-cropped from 16:9).
Output per hero: `<name>.webp` 1200×800 (≤110 KB), `-900.webp`, `-600.webp`, `-og.jpg` 1200×630,
`-16x9.webp`, `-4x3.webp`, `-1x1.webp`.

House style: one hero subject, restrained props, natural window light from the left, warm
neutral ground, realistic texture. Mushrooms are the subject. No appliances, no people or
hands, no text, labels or watermark. Do not use similes naming another food.

---

## 1. `cookmushroom-duxelles-hero` — `/mushroom-duxelles/`

**Alt text on the page:** *Dark brown mushroom duxelles with thyme in a stainless skillet, a
wooden spoon drawing a clean line through the paste*

### THE PROMPT

> Editorial overhead three-quarter food photograph of a wide stainless steel skillet on a pale
> wooden table, filled with finely chopped, deeply browned mushroom duxelles: a dark brown,
> dry, clumping paste of tiny mushroom pieces with flecks of minced shallot and small green
> thyme leaves. A wooden spoon rests in the pan and has drawn a clean line through the paste,
> showing the dry bottom of the pan with no liquid. A few whole brown cremini mushrooms and a
> small sprig of thyme sit beside the pan. Warm natural side light from the left, soft
> shadows, shallow depth of field, realistic texture. Landscape 3:2 aspect ratio, composed for
> 3:2. No beef, no pastry, no meat, no food processor, no appliances, no people, no hands, no
> text, no labels, no watermark.

### Reject it if

- The paste looks **wet, glossy or soupy**, or liquid pools in the pan — the page is about dry duxelles.
- The pieces are **slices or chunks**, not a fine chop.
- It is **pale tan** rather than deep brown, or black and muddy.
- A **beef Wellington, pastry or raw beef** is in frame (the page is the mushroom layer).
- A food processor or any appliance is in frame. Wrong ratio; any text or watermark.

---
