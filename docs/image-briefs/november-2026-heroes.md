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

## 2. `cookmushroom-mushrooms-for-steak-hero` — `/sauteed-mushrooms-for-steak/`

**Alt text on the page:** *Browned cremini mushrooms in a glossy cream pan sauce with thyme in
a cast-iron skillet*

### THE PROMPT

> Editorial three-quarter-angle food photograph of a black cast-iron skillet on a dark wooden
> table, filled with halved and quartered brown cremini mushrooms that are deeply seared and
> golden-brown on their cut faces, coated in a glossy, light tan cream pan sauce that pools
> thickly around them. Small fresh thyme leaves and chopped chives are scattered on top, with a
> few flecks of black pepper. The mushrooms are the subject and fill most of the frame. Warm
> natural side light from the left, soft shadows, shallow depth of field, realistic texture with
> visible browning and crisp edges. Landscape 3:2 aspect ratio, composed for 3:2. No steak in the
> pan, no plated meat, no knives or forks, no appliances, no people, no hands, no text, no
> labels, no watermark.

### Reject it if

- The mushrooms are **pale, gray or boiled-looking** — the page is about hard browning.
- The sauce is **thin and watery** or the mushrooms are drowning in it.
- A **steak dominates the frame** (an edge of sliced steak blurred far in the background is
  acceptable; prefer none).
- White button mushrooms, or sliced thin. Wrong ratio; any text or watermark.

---

## 3. `cookmushroom-marinated-mushrooms-hero` — `/marinated-mushrooms/`

**Alt text on the page:** *Marinated button mushrooms with garlic, herbs, red pepper flakes and
olive oil in a glass jar and a small bowl*

### THE PROMPT

> Editorial three-quarter-angle food photograph of small whole white button mushrooms marinated
> in golden olive oil with thin garlic slices, chopped parsley, dried oregano, red pepper flakes
> and a bay leaf, served in a small shallow ceramic bowl in the foreground, with an open glass
> jar of more marinated mushrooms just behind it. The mushrooms are plump, glossy, slightly
> darkened and tinted by the marinade. A few small pieces of diced roasted red pepper. Pale stone
> or linen surface. Warm natural side light from the left, soft shadows, shallow depth of field,
> realistic texture. Landscape 3:2 aspect ratio, composed for 3:2. No cured meats, no cheese
> board, no crackers, no toothpick flags, no appliances, no people, no hands, no text, no labels
> on the jar, no watermark.

### Reject it if

- The mushrooms look **raw, white and dry**, or shriveled and slimy.
- They are **sliced** instead of whole small caps.
- An antipasto spread crowds the frame so mushrooms are not clearly the subject.
- The jar carries a **label or brand**. Wrong ratio; any text or watermark.

## Attempt log

- 2026-11-03, attempt 1 (all three): generated 1024x576 (16:9) sources, center-cropped to 864x576 (3:2), Lanczos-upscaled to 1200x800, then make-hero.sh / make-og-cards.sh / make-schema-crops.sh. 1:1 crops checked: food centered, no gravity override needed. Marinated: hero.webp 104.3 KB (q82), within budget. Duxelles 129.8 KB and steak 122.7 KB at q62: over the 110 KB budget because of generator grain.
- 2026-11-03, attempt 2 (duxelles, steak): `magick up.png -blur 0x0.7` on the 1200x800 source to remove grain (0x0.5 was not enough; 0x0.9 was more than needed), then reran all three scripts. Duxelles hero.webp 109.5 KB (q66), steak 109.1 KB (q70). Both under budget, and both still look sharp.
