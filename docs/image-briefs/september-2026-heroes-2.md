# Hero image brief — giant puffball

**Status: HERO ON DISK 2026-08-31, not pushed — and NOT yet accepted.** Trio + OG card
written locally from attempt 1. It passes the non-negotiable safety criterion (featureless
inside) but **fails the fried-cheese reject**, so the visual gate has not passed; see the
attempt log. Awaiting the user's decision: ship attempt 1 anyway for the September window,
or regenerate with the corrected prompt below.

- **File name:** `cookmushroom-puffball-hero`
- **Page:** `/how-to-cook-puffball-mushrooms/`
- **Deadline pressure:** `how to cook puffball mushroom` runs 720/mo now and climbs to
  **2,400 in September and 2,900 in October** (Ubersuggest, US, pulled 2026-08-22). The
  calendar wants this live in early September. It is 31 August.

---

## THE PROMPT — use this one

Paste verbatim. Plain prose, no markdown, on purpose.

> Editorial food photograph of thick white mushroom steaks searing in a black cast-iron
> skillet. The slabs were carved by hand from one enormous mushroom the size of a
> football, so they are wide — the largest spans most of the pan — and every one is a
> different irregular shape with a slightly uneven cut edge. No two are alike, and none is
> a neat oval, a disc, or a figure-eight. Each slab is flat and about half an inch thick,
> and it stays flat: the flesh shrinks very slightly in the pan rather than puffing, so
> there is no pillowy dome, no bulging edge, nothing inflated anywhere. The flesh is matte
> white and completely uniform right through — no gills, no stem, no pores, no rings, no
> fibres, no layers, no cavity, no internal structure of any kind. It is soft vegetable
> flesh, faintly porous like dense mushroom, never glossy, never rubbery, never
> squeaky-looking. One or two slabs keep a thin pale grey-white band of skin along one
> outer edge. The flat faces that touched the pan have browned unevenly and in patches the
> way a seared mushroom browns — deep gold in places, paler in others, never a smooth
> continuous fried crust. Foaming butter, a few thin slices of garlic and fresh thyme in
> the pan. Warm natural side light from the left, shallow depth of field, dark neutral
> background. Landscape 3:2 aspect ratio, composed for 3:2 rather than cropped to it. This
> is a mushroom, not cheese: no halloumi, no paneer, no fried cheese, no tofu, no scallops,
> no fishcakes, no potato cakes. No people, no hands, no text, no labels, no watermark.

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
- Anything that reads as **halloumi, paneer, or fried cheese**. *(This killed attempts 1
  through 4.)* The tells, most reliable first: slabs that **puff or dome** with pillowy
  bulging edges — mushroom shrinks, it never inflates; a **smooth continuous golden crust**
  instead of patchy uneven browning; **near-identical regular ovals**; a glossy or rubbery
  interior. Two or more of those present, reject it.
- The slabs are **all the same shape and size**, or any of them is a neat disc or a
  figure-eight. *(Attempts 1 and 3.)* They are carved by hand from one huge mushroom.
- Anything that reads as **tofu, a scallop, a fishcake, or a potato cake**.
- **Wrong aspect ratio.** *(Attempt 4 came back 1280×720.)* Must be 3:2 landscape, composed
  for it — a 16:9 frame centre-cropped to 3:2 loses the top and bottom of the composition.

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

- **Attempt 1 (on disk, converted):** Grok Imagine quality, 16:9 then center-cropped to 3:2. Three thick oval steaks, pure white featureless sides, even gold crust, foaming butter, garlic coins, thyme, cast iron. No gills, stem, cap outline, or internal structure. Reads as halloumi. The prompt's own "dense fresh cheese" simile is likely why.
- **Attempt 2 (rejected):** mushroom-cap silhouettes with dark gills inside. Fails the non-negotiable safety rule.
- **Attempt 3 (rejected):** edit of attempt 1 into peanut / figure-8 slabs. Cartoon outline, not a loaf slice.
- **Attempt 4 (rejected, 16:33, not converted):** dropped the cheese simile, asked for matte suede flesh and different sizes. Still three matching fried-cheese discs. Second miss on reject #7 — stop regenerating; prompt needs changing or use a licensed photo.

**Root cause was this brief, not the generator.** The original prompt described the flesh
as *"like a dense fresh cheese or a firm marshmallow"*. That simile was meant to convey
"uniform and featureless" and instead specified the subject — four seeds produced cheese
because the prompt asked for cheese. Hermes reached the same conclusion independently on
attempt 4. The prompt above has been rewritten: every dairy reference removed, flesh
described as matte porous vegetable flesh, plus the two constraints the failures exposed —
slabs are irregular and hand-cut, and they shrink rather than puff — and the failure modes
named as explicit negatives.

Do not re-run the old prompt with a new seed. That was tried four times.

---
---

# Hero image brief — cutting mushrooms

**Status: HERO ON DISK 2026-08-31, not pushed. Visual gate passed.** Trio + OG card
written locally. Correct subject, even slices, fresh matte cut faces, no hands, no pan.
Ready to deploy.

- **File name:** `cookmushroom-cutting-hero`
- **Page:** `/how-to-cut-mushrooms/`
- **Why this page:** `how to cut mushrooms` runs **2,900/mo at SD 27** (Ubersuggest, US,
  pulled 2026-08-31) — twelve times the volume of the fluting page it replaced in calendar
  slot 3.4, and lower difficulty. Fluting ships as a section inside it.

---

## THE PROMPT — use this one

Paste verbatim. Plain prose, no markdown, on purpose.

> Editorial overhead food photograph of cremini mushrooms being sliced on a pale wooden
> board. A chef's knife rests mid-cut through one mushroom, and beside it sits a neat fan
> of finished slices, each one about a quarter of an inch thick and clearly even with the
> others. Each slice shows the classic mushroom silhouette in cross-section — the domed
> cap and the stem below it in one piece. Two or three whole unsliced mushrooms sit at the
> edge of the board for contrast. The cut faces are pale cream and matte, freshly cut and
> not browned. Warm natural side light from the left, shallow depth of field, dark neutral
> background beyond the board. Landscape 3:2. Clean and uncluttered — no pan, no cooked
> food, no sauce, no clutter of other vegetables. No people, no faces, no text, no labels,
> no watermark.

## Reject it if

- **The slices are visibly uneven in thickness.** The whole page argues that even thickness
  is what matters. A hero of ragged slices undercuts it.
- The slices are **thick wedges or chunks** rather than slices, or so thin they are
  translucent.
- The cut faces are **brown, grey, or wet-looking**. These are freshly cut and should read
  pale, dry and matte.
- **A hand or forearm is prominently in frame.** A knife alone is fine and is what the
  prompt asks for; the house style has no people in it. If a candidate is otherwise
  excellent and shows only fingertips steadying a mushroom, that is a judgement call —
  everything else on the site is food-only.
- The mushrooms are **not button or cremini**. This is the everyday-mushroom page; it should
  not show oyster, shiitake or anything exotic.
- Cooked mushrooms, a skillet, or any heat in the frame. This page is about the board, not
  the pan.

## Then

Same as above:

```bash
./scripts/make-hero.sh ~/Downloads/cutting.png cookmushroom-cutting-hero
```

```bash
./scripts/make-og-cards.sh
```

## House style

Board-and-knife rather than pan, but otherwise identical to the rest of the site: warm
side light, dark neutral background, shallow depth of field, food only, no text or
watermark.

## Attempt log

- **Attempt 1 (accepted, converted):** Grok Imagine quality, 16:9 then center-cropped to 3:2. Cremini on a pale board, chef's knife mid-cut, even ~1/4 inch fan with cap+stem silhouette, two whole mushrooms. No hands, no pan, no text. 3:2 crop clips the knife handle slightly; the fan and board stay in frame.
