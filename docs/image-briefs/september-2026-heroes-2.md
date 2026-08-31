# Hero image brief — giant puffball

**Status: NEEDED.** `/how-to-cook-puffball-mushrooms/` is written, builds clean, and is
committed but **not deployed** — the publication gate forbids shipping a page with a
broken image reference, and this is the only thing missing.

- **File name:** `cookmushroom-puffball-hero`
- **Page:** `/how-to-cook-puffball-mushrooms/`
- **Deadline pressure:** `how to cook puffball mushroom` runs 720/mo now and climbs to
  **2,400 in September and 2,900 in October** (Ubersuggest, US, pulled 2026-08-22). The
  calendar wants this live in early September. It is 31 August.

---

## THE PROMPT — use this one

Paste verbatim. Plain prose, no markdown, on purpose.

> Editorial food photograph of thick white mushroom steaks searing in a black cast-iron
> skillet. Each slab is a broad flat slice about half an inch thick, cut from one very
> large mushroom, so the slabs are wide — several inches across — with a soft rounded
> outline rather than a cap shape. The flesh is uniformly white and completely smooth
> inside, like a dense fresh cheese or a firm marshmallow, with absolutely no gills, no
> stem, no pores, no rings, no internal structure of any kind. The flat faces that touched
> the pan have browned to an even deep gold, and the contrast between the golden crust and
> the pure white interior at the cut edge is the point of the photograph. Foaming butter,
> a few thin slices of garlic and fresh thyme in the pan. Warm natural side light from the
> left, shallow depth of field, dark neutral background. Landscape 3:2. Nothing else in
> the pan — no other vegetables, no sauce, no breading. No people, no hands, no text, no
> labels, no watermark.

## Reject it if

- **Any slab shows gills, a stem, a cap outline, or any internal structure.** This is the
  one that matters more than looks. The entire safety message of the page is that a
  puffball is featureless inside and that internal structure means discard it — a hero
  contradicting that is worse than no hero.
- The interior is **cream, beige, yellow, or grey rather than white**. Yellowing is exactly
  what the page tells readers to throw away.
- The slabs are **small, cube-shaped, or mushroom-cap-shaped**. These are steaks cut from
  something the size of a football.
- The slabs are **thin and floppy** or curling at the edges.
- **Breading or batter.** Breaded puffball is a variation on the page, not its method.
- A **whole puffball sitting in grass or on the forest floor.** This is a cooking site; we
  do not run foraging or identification imagery.
- Anything that reads as **halloumi, tofu, or a scallop** — no rectangular blocks with
  sharp square corners, no perfect discs.

## Then

1. Generate at **1200×800 or larger, landscape 3:2**. If there is an aspect-ratio control,
   set 3:2 — do not accept a square crop.
2. Save anywhere, then run the converter and the social card script:

```bash
./scripts/make-hero.sh ~/Downloads/puffball.png cookmushroom-puffball-hero
```

```bash
./scripts/make-og-cards.sh
```

3. Tell Claude it has landed. The page is already committed; it only needs the image in
   place, a visual check, and a push.

## House style

Matches the other 38 heroes on the site: cast-iron or dark steel pan, warm side light,
dark neutral background, shallow depth of field, food only. No hands, no faces, no props
beyond herbs and aromatics, no text or watermark anywhere in frame.

## Reference — what a giant puffball actually looks like cut

*Calvatia gigantea*, the one people cook. Worth knowing before judging a candidate:

- Whole, it is a **large white ball** — softball to football sized, sometimes bigger — with
  no cap, no stem, and no gills. It looks more like a loaf than a mushroom.
- The outer skin is **thin, smooth to slightly suede-textured, and matte white**, often with
  a little soil discolouration. The page tells readers to trim it off, so it may or may not
  be visible on the slab edges. Either is acceptable.
- **Cut, the flesh is the whole story: solid, uniform, matte white, and totally featureless
  — no grain, no layers, no fibres, no cavity.** Chicken of the woods is fibrous and layered;
  puffball is the opposite, and a candidate showing visible grain is wrong.
- Cooked, the cut faces take colour readily and evenly, more like aubergine or halloumi
  than like a browning cremini. Deep even gold is correct; patchy scorching is not.

### Why the "no internal structure" rule is non-negotiable here

The dangerous look-alike for a puffball is the immature button of an *Amanita*, and the
single check that separates them is slicing it open: an Amanita button shows the faint
silhouette of a cap and stem inside, a true puffball shows nothing at all. The page teaches
that check. An image showing a sliced "puffball" with any internal outline teaches the
opposite of the thing that keeps a reader safe. Reject on this before judging anything else.

## If a candidate fails

Note what failed here before regenerating, so the next attempt does not repeat it. If two
attempts fail on the same criterion, stop and tell Claude — the prompt needs changing, not
the seed.

## Attempt log

*(none yet)*
