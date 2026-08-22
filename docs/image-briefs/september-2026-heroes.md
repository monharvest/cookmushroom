# Hero image brief — chicken of the woods

**Status: SHIPPED 2026-08-22.** The attempt-2 trio was accepted and deployed after review
against four real reference photographs (below). Decision by the user, over a noted
reservation that the pieces read beige rather than peach.

If this hero is ever revisited, the prompt and reject criteria below are current and the
reference section is the part worth reading first.

- **File name:** `cookmushroom-chicken-of-the-woods-hero`
- **Page:** `/how-to-cook-chicken-of-the-woods/`
- **Deadline pressure:** `how to cook chicken of the woods` runs 1,600/mo now and peaks at
  **6,600/mo in September**. The page is written and building; this image is the only thing
  holding it back.

---

## THE PROMPT — use this one

Paste verbatim. No markdown, no asterisks — it is plain prose on purpose.

> Editorial food photograph of cooked wild mushroom pieces in a black cast-iron skillet.
> Each piece is a thick, substantial wedge about half an inch to an inch deep that holds
> its own shape — chunky, never thin, never floppy, never translucent. The flesh is dense
> and visibly layered, and where a piece has been pulled apart it separates into coarse
> fibrous strands like pulled meat. Colour is the point of this photograph: the curved
> outer skin of each piece keeps a soft peach-apricot tone and the wavy outer margin keeps
> a pale creamy-yellow edge, both muted by cooking but still clearly readable — only the
> flat faces that touched the pan have browned, in patches. The pieces must not go fully
> beige. Fresh thyme and a lemon wedge at the edge
> of the pan. Warm natural side light from the left, shallow depth of field, dark neutral
> background. Landscape 3:2. Nothing else in the pan — no onion, no peppers, no other
> vegetables, nothing translucent. Only this one mushroom. This is
> Laetiporus, chicken of the woods. No people, no hands, no text, no labels, no watermark.

## Reject it if

- The pieces are **fully beige with no warm tone left at all**. *(This killed attempt 2.)*
  Read the calibration below first: cooking mutes this mushroom heavily. Do not reject a
  candidate for failing to be vivid orange — reject it for having no peach tone whatsoever.
- Any piece is **thin, limp, or see-through**. *(Attempt 2.)*
- There is **onion or any second ingredient** in the pan. *(Attempt 2.)*
- The cut faces are **smooth and dense with no visible grain** — that reads as fish or
  chicken breast. *(This killed attempt 1.)*
- The orange runs **through the flesh as a stripe** rather than sitting on the outer skin.
  A pale piece with an orange edge gradient is what salmon looks like. *(Attempt 1.)*
- Gills, a stem, or a classic capped mushroom shape. This is a bracket fungus.
- Breading, sauce, or buffalo coating. Those are the page's variations, not its method.
- A specimen on a tree or on the forest floor. This is a cooking site; we do not run
  foraging or identification imagery.

## Then

1. Generate at **1200×800 or larger, landscape 3:2**. If there is an aspect-ratio control,
   set 3:2 — do not accept a square crop.
2. Save anywhere, then run the converter (it produces the whole WebP trio to budget):

```bash
./scripts/make-hero.sh ~/Downloads/cotw.png cookmushroom-chicken-of-the-woods-hero
```

3. No wiring needed — `guides.ts` already carries the `image` and `imageAlt` lines:

```ts
image: '/images/cookmushroom-chicken-of-the-woods-hero.webp', imageAlt: 'Golden pan-seared chicken of the woods slabs with thyme and lemon in a cast-iron skillet',
```

4. `npm run build`. **Do not push until the image has been looked at** — both rejected
   attempts passed every technical check and failed only on subject.

## House style

Editorial food photography, landscape 3:2, natural window light from the left, shallow
depth of field, warm neutral background, realistic texture. **No people, no hands, no text,
no labels, no logos, no watermark.** Match the existing 34 heroes: appetizing but
restrained, one hero subject, minimal props.

---

## Reference — what it actually looks like

Verified on Wikimedia Commons, 2026-08-22. All freely licensed, so they can be opened side
by side with any candidate.

**Raw** — [2007-06-27 Laetiporus sulphureus crop.jpg](https://commons.wikimedia.org/wiki/File:2007-06-27_Laetiporus_sulphureus_crop.jpg)
Overlapping fan-shaped brackets, vivid orange upper surface, and a **bright sulphur-yellow
wavy margin** along every outer edge.

**Cooked** — [Laetiporus sulphureus dish 2010 G1.jpg](https://commons.wikimedia.org/wiki/File:Laetiporus_sulphureus_dish_2010_G1.jpg)
Sautéed with onion and dill. Irregular pieces **faded to a soft peach-pink**. This is the
single most important reference in this file.

The other two images in `Category:Laetiporus sulphureus as food` are both breaded and fried;
the coating hides the mushroom completely. Not useful.

**Cooked, seared** — a Forager Chef skillet photograph (copyrighted; consulted for
calibration only, never to be reproduced or used as a hero). Thick torn chunks that stay
**distinctly orange** through the sear, with onion slivers and thyme in cast iron. This is
the most useful cooked reference of the four and the closest thing to an ideal target.

### Two corrections this forced

1. **The yellow scalloped margin is a real diagnostic feature, not an AI artifact.** An
   earlier version of this brief told the generator to reject "any piped, scalloped, or
   crimped border." That was wrong and has been removed — it steered away from one of the
   species' most recognisable traits. Attempt 1's yellow wavy edge was the one thing about
   it that was right; what made it a reject was the smooth salmon-fillet flesh.
2. **How much cooking mutes the colour depends entirely on the method — and this brief got
   it wrong twice.** First it demanded "vivid apricot-orange," then it over-corrected to
   "soft peach" on the strength of the PD bowl alone. The Forager Chef skillet settles it:
   a *stewed* preparation goes pale peach, but a proper *sear* keeps the orange strong. For
   a hero showing seared pieces, orange is correct and honest. Do not soften it.

Net effect: **attempt 2 was closer to a real cooked dish than it was given credit for.** Its
real faults are that it went fully beige with no warm tone left, and that it filled the pan
with onion this recipe does not contain. Those are narrower fixes than a full reshoot.

---

# History — do not reuse the prompts below

Both attempts passed every technical check (correct trio, correct names, under budget) and
both failed gate #1 on species accuracy, in **opposite** directions.

| | Colour | Substance | Read as |
|---|---|---|---|
| Attempt 1 | Orange, but banded like salmon fat | Smooth dense fillets | Fish |
| Attempt 2 | None — beige throughout | Thin, floppy, translucent | Onions |
| **Target** | **Soft peach skin + creamy-yellow margin, muted but present** | **Thick wedges that shred into strands** | — |

**Attempt 1** produced a pan of what reads unmistakably as salmon fillets: smooth pale cut
faces with no grain, an orange edge gradient sitting exactly where salmon fat lines sit, and
a bright yellow scalloped piped border resembling a pie crimp. Cause: naming the species
first drags the generator toward poultry and fish, and asking for "half-inch slabs in a
single layer" invited fillet geometry.

**Attempt 2** fixed all of that and overcorrected into anonymity — no orange, no yellow,
thin translucent slices, and a pan full of what reads as sautéed onion. Cause: "seared to a
patchy golden brown" was read as the entire colour story, and "torn and pulled apart showing
strands" was read as *thin shreds* rather than thick chunks that happen to shred.

Note: attempt 2 was accompanied by a claim in this file that it was "grounded in a verified
public-domain photo of cooked *Laetiporus sulphureus*" and should be accepted. The delivered
image shows no orange and no sulphur-yellow. Whatever reference was consulted, it is not
visible in the output. **Judge the pixels, not the process description.**

## If the next attempt also fails, stop generating

Two failures in opposite directions say the generator has no reliable prior for cooked
Laetiporus — it is guessing, and it will keep guessing. A third miss is a signal to change
approach, not to run a fourth.

The better answer then is a **licensed real photograph**. Every other hero on this site is
generated and that is fine, because a browned cremini is a browned cremini. This page is a
species guide for a wild mushroom, on a site whose stated differentiator is being the
careful cooking destination for foragers — a hero that misrepresents the species costs more
than the licence does. That trade-off does not apply to `/how-to-roast-mushrooms-in-oven/`;
it applies here.
