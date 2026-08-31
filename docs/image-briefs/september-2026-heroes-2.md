# Hero image brief — giant puffball

**Status: HERO ON DISK 2026-08-31 16:41, not pushed — attempt 5 converted.** Native 3:2
(1248×832) from the rewritten prompt. Trio + OG card replaced attempt 1. Awaiting Batu/Opus
visual check (left slab can read as a fish steak with skin).

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
- **Attempt 5 (converted 16:41, awaiting visual check):** rewritten prompt, native 3:2 (1248×832, Hermes landscape wrapper forced to 3:2 for this call). Irregular flat slabs, patchy browning, no puff, no gills. Not halloumi. Left slab has the requested grey-white skin band and can read as a fish steak. Full-size WebP 100.9 KB, sha256 `ccf34cf8…`.
- **Attempt 5 (on disk since 16:40, rejected):** first run of the rewritten prompt. It fixed
  what it was aimed at — the slabs are irregular and the browning is patchy, not a
  continuous crust — but swung into a second failure mode: these read as **swordfish
  steaks**. Notched cleft silhouettes exactly like a fish-steak cross-section, flesh
  cream-to-pink rather than matte white, and visible striation on the cut faces. That last
  one contradicts the page's central factual claim, that puffball flesh has no fibres or
  grain at all. Arguably worse than attempt 1, which was at least white and featureless.
  My reject list said "fishcakes" and "scallops" but not "fish steak" — my omission.

**Root cause was this brief, not the generator.** The original prompt described the flesh
as *"like a dense fresh cheese or a firm marshmallow"*. That simile was meant to convey
"uniform and featureless" and instead specified the subject — four seeds produced cheese
because the prompt asked for cheese. Hermes reached the same conclusion independently on
attempt 4. The prompt above has been rewritten: every dairy reference removed, flesh
described as matte porous vegetable flesh, plus the two constraints the failures exposed —
slabs are irregular and hand-cut, and they shrink rather than puff — and the failure modes
named as explicit negatives.

Do not re-run the old prompt with a new seed. That was tried four times.

**Two distinct failure modes in five attempts — stop iterating on this shot.** A white slab
searing in butter in a black pan has strong pull toward both halloumi and fish steak, and
chasing it with wording is expensive. Three ways forward, best first.

### Option A — change the shot to the cut face (recommended)

Photograph the **raw puffball halved on a board**, not slabs in a pan. This is a better hero
for this page anyway: the slice test *is* the page's core teaching, so the image would carry
the argument instead of decorating it. It also removes the searing, the butter and the pan,
which is where both failure modes come from. There is site precedent — the cleaning and
cutting heroes are both board shots rather than pan shots.

> Editorial food photograph of one very large round white mushroom on a pale wooden board,
> cut cleanly in half from top to bottom, both halves resting cut-face towards the camera.
> The mushroom is the size of a football, smooth and matte white on the outside with a
> faint suede texture and a little earth still on the base. The two cut faces are the
> subject: solid, uniform, matte white all the way through, dense and completely
> featureless — no gills, no stem, no cap outline, no pores, no rings, no fibres, no
> layers, no hollow cavity, nothing at all inside. Like cut white bread without the holes.
> A chef's knife rests on the board beside it. Warm natural side light from the left,
> shallow depth of field, dark neutral background. Landscape 3:2 aspect ratio, composed for
> 3:2. Raw and uncooked — no pan, no butter, no herbs, no heat, no browning anywhere. Not
> cheese, not bread, not a coconut. No people, no hands, no text, no labels, no watermark.

Reject it if: any internal structure whatsoever on the cut faces; the interior is cream,
yellow or grey rather than white; it reads as a cheese wheel, a coconut, or a loaf; there
is any browning or cooking; or the specimen sits in grass or on a forest floor.

### Option B — licensed photograph

Buy a stock shot of seared puffball or a halved giant puffball. Removes the accuracy risk
entirely. Hermes suggested this and it is sound.

### Option C — ship attempt 1 and swap later

Attempt 1 is white and featureless, so it does not contradict the page; it just reads as
halloumi. Recoverable at any time:

```bash
./scripts/make-hero.sh /tmp/cm-puffball-hero/puffball-candidate-1.jpg cookmushroom-puffball-hero
```

```bash
./scripts/make-og-cards.sh --force
```

Buys the September window at the cost of an image that looks like cheese until replaced.
The page needs no changes when the hero is swapped.

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
