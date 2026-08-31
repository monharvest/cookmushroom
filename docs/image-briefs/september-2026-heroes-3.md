# Hero image brief — types of mushrooms (pillar page)

**Status: NEEDED.** `/types-of-mushrooms/` is written, builds clean, committed but **not
deployed** — the publication gate forbids a broken image reference.

- **File name:** `cookmushroom-types-hero`
- **Page:** `/types-of-mushrooms/`
- **Why:** calendar item 3.1, the last Month 3 page. Links to all 27 guides, so it is the
  strongest internal-linking asset on the site.

**Keyword note (Ubersuggest, US, 2026-08-31):** the calendar targeted `types of mushrooms`
(33,100/mo, **SD 65**) and concluded the page could not rank. That is true of the head term,
but the edible/cooking cluster is winnable and the page is written for it instead:
`types of mushrooms edible` 6,600/mo SD 33 · `types of mushrooms for eating` 2,900/mo
**SD 23** · `types of mushrooms cooking` 1,300/mo **SD 23**. SD 23 is easier than
`how to cut mushrooms` (27), which the site already published.

---

## THE PROMPT — use this one

Paste verbatim. Plain prose, no markdown.

> Editorial overhead food photograph of an assortment of fresh culinary mushrooms arranged
> in loose separate groups on a dark slate surface. Include clearly distinct varieties: a
> small pile of brown cremini, one large flat portobello cap, a cluster of grey-brown
> oyster mushrooms, two thick white king oyster stems, a bunch of fine white enoki, and a
> few shiitake with tan caps. Each variety sits in its own group with dark space between
> them so the shapes read separately rather than merging into one heap. All of them are
> raw, fresh and unwashed-looking, with natural colour variation. Warm natural side light
> from the left, soft shadows, shallow depth of field. Landscape 3:2 aspect ratio, composed
> for 3:2. No pan, no cooking, no browning, no herbs, no props, no baskets. No people, no
> hands, no text, no labels, no watermark.

## Reject it if

- **The varieties are not visually distinct** — if it reads as one generic pile of brown
  mushrooms, it fails the whole point of the page.
- Any group is **cooked, browned, or sliced**. These are raw whole mushrooms.
- It includes anything **not on the site**: no red fly agaric, no obviously wild or
  decorative toadstools, nothing with a red or spotted cap. This is a cooking page and a
  poisonous-looking mushroom in the hero is the wrong signal entirely.
- The arrangement is a **basket, crate or rustic foraging scene**. The site does not run
  foraging imagery.
- Wrong aspect ratio — must be 3:2 landscape, composed for it, not centre-cropped from 16:9.
- Anything that reads as a **stock-photo collage** with hard edges between varieties.

## Then

```bash
./scripts/make-hero.sh ~/Downloads/types.png cookmushroom-types-hero
```

```bash
./scripts/make-og-cards.sh
```

## House style

Overhead board/slate shot like the cutting hero rather than a pan shot: warm side light,
dark neutral ground, shallow depth of field, food only, no text or watermark.

## Note from the puffball briefs

Do not use similes naming another food to describe texture. Describing puffball flesh as
"like a dense fresh cheese" sent six generations to fried halloumi. Describe the thing
itself.

## Attempt log

*(none yet)*
