# Hero image brief — stuffed mushrooms

**Status: NEEDED.** The page is drafted on branch `holiday-prep-2026-10` (2026-10-10) and
references this exact file. `npm run build` fails on purpose until it exists
(`scripts/check-image-refs.mjs`), so the page cannot deploy without it. Target: live by
~Oct 25 (calendar 4.2).

- **File name:** `cookmushroom-stuffed-mushrooms-hero`
- **Page:** `/stuffed-mushrooms/`
- **Alt text already on the page** (the image must match it): *Stuffed cremini mushrooms
  with a golden, crisp Parmesan and breadcrumb topping and chopped parsley on a white
  platter*
- **Why:** calendar 4.2, the second pick of the 2026-09-27 month-4 reorder.

**Keyword note (Ubersuggest, US, 2026-09-27):** `air fryer stuffed mushrooms` 1,300/mo,
**SD 20**, December 1,900, SERP DA 22–34. `stuffed mushrooms` 49,500/mo (Nov–Dec 110,000)
but SD 50 — a long-run bonus, not the target.

---

## THE PROMPT — use this one

Paste verbatim. Plain prose, no markdown.

> Editorial three-quarter-angle food photograph of about twelve stuffed brown cremini
> mushroom caps arranged on a plain white oval platter on a pale wooden table. Each cap is
> filled with a mounded, creamy pale filling flecked with chopped browned mushroom and
> green herbs, topped with a deep golden, crisp, craggy crust of toasted breadcrumbs and
> grated cheese. The mushroom caps are browned and slightly glossy, with dark edges, and
> keep their round cup shape. A little chopped fresh parsley is scattered over the top.
> Warm natural side light from the left, soft shadows, shallow depth of field. Landscape
> 3:2 aspect ratio, composed for 3:2. No air fryer, no baskets, no appliances, no cocktail
> glasses, no candles, no holiday decorations, no toothpicks or flags. No people, no
> hands, no text, no labels, no watermark.

## Reject it if

- **The caps are white button mushrooms.** The page says cremini: the caps must read
  brown. (If a button version is clearly better, keep it and say so — I will change the
  alt text rather than ship a mismatch.)
- **The topping is pale or flat.** The page's pitch is a crisp, golden top; a pale or wet
  surface contradicts it.
- **Liquid is pooled on the platter or in the caps.** The page's whole argument is that
  these are not watery.
- **The caps are collapsed, split or shrivelled**, or the filling has slumped off them.
- The mushrooms are **portobellos** (one or two huge caps) or **shiitake** (flat caps).
- **Visible meat, sausage crumbles, bacon, or shrimp.** The recipe is vegetarian; sausage
  is only an FAQ option.
- **An air fryer basket or appliance** is in frame. House style is food-only, and the
  page covers the oven too.
- **Seasonal props** crowd the frame.
- Wrong aspect ratio — must be 3:2 landscape, composed for it, not centre-cropped from 16:9.
- Any text, label, logo or watermark.

## Then

```bash
./scripts/make-hero.sh ~/Downloads/stuffed.png cookmushroom-stuffed-mushrooms-hero
```

```bash
./scripts/make-og-cards.sh
```

```bash
./scripts/make-schema-crops.sh cookmushroom-stuffed-mushrooms-hero
```

This is a recipe hero (it lives in `recipes.ts`), so it also needs the 16:9 / 4:3 / 1:1
schema crops. Look at the 1:1: if it cuts caps off at the edge, re-run with
`cookmushroom-stuffed-mushrooms-hero:north` (or another gravity). Then `npm run build`
must pass with 0 diagnostics and the image check green, and the page is ready to push.

## House style

Match the other recipe heroes: one hero subject, restrained props, natural window light from
the left, warm neutral ground, realistic texture — visible browning, crisp edges.

## Note from the puffball briefs

Do not use similes naming another food to describe texture (puffball "like fresh cheese"
produced fried halloumi six times). The prompt above describes the thing itself.

## Attempt log

- (none yet)
