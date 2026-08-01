# Hero image brief — July 2026 batch (3 images)

**Status:** the three pages are written, built, and passing the gate. They are
**not deployed** because their hero images do not exist yet (AGENTS.md: never ship
broken image references). Drop the images in, run one command each, and they go live.

## Workflow

1. Generate each image below at **1200×800 or larger, landscape 3:2**, PNG or JPG.
2. Save anywhere (e.g. `~/Downloads/`).
3. Run the converter — it makes the WebP trio at the right sizes and byte budget:

```bash
./scripts/make-hero.sh ~/Downloads/pasta.png cookmushroom-garlic-mushroom-pasta-hero
```

4. Repeat for all three, then `npm run build` and push. The data files already
   reference these exact filenames — nothing else to wire up.

## House style (applies to all three)

Editorial food photography, landscape 3:2, natural window light from the left,
shallow depth of field, warm neutral background (cream linen, pale wood, or dark
slate). Realistic texture — visible browning, steam, glossy sauce.
**No people, no hands, no text, no labels, no logos, no watermark.**
Match the existing 28 heroes: appetizing but restrained, one hero subject, minimal props.

---

## 1. Garlic mushroom pasta

- **File name:** `cookmushroom-garlic-mushroom-pasta-hero`
- **Page:** `/garlic-mushroom-pasta/`
- **Alt text already set:** "Spaghetti tossed with browned cremini mushrooms, garlic, and parsley in a skillet"

> Editorial food photograph of garlic mushroom pasta: spaghetti twirled in a wide
> skillet and tossed with deeply browned sliced cremini mushrooms, thin slivers of
> golden garlic, and chopped flat-leaf parsley, coated in a glossy emulsified butter
> sauce that clings to the strands. Grated Parmesan melting on top. Warm cream linen
> background, soft natural window light from the left, shallow depth of field, slight
> steam. Landscape 3:2. No people, no hands, no text, no labels, no watermark.

**Check before converting:** mushrooms must read as *browned*, not pale/raw; sauce
glossy rather than soupy; pasta is long strands (spaghetti/linguine), not short shapes.

---

## 2. Shiitake mushroom ramen

- **File name:** `cookmushroom-shiitake-ramen-hero`
- **Page:** `/shiitake-mushroom-ramen/`
- **Alt text already set:** "Bowl of shiitake mushroom ramen with seared shiitake caps, soft egg, scallions, and nori"

> Editorial food photograph of shiitake mushroom ramen: a dark ceramic bowl of
> golden-brown broth with a nest of wavy ramen noodles, sliced seared shiitake
> mushroom caps with browned edges (tan-brown umbrella caps, pale cream gills,
> curled rim), a halved soft-boiled egg with a jammy orange yolk, thin scallion
> rings, and a strip of nori resting on the rim. Overhead-to-45° angle, dark slate
> background, soft natural light from the left, visible steam. Landscape 3:2.
> No people, no hands, no chopsticks in motion, no text, no labels, no watermark.

**Check before converting:** shiitake must have the umbrella cap + curled rim
(not flat button mushrooms); yolk jammy, not hard-cooked; broth clear, not cloudy.

---

## 3. Frozen mushrooms

- **File name:** `cookmushroom-frozen-mushrooms-hero`
- **Page:** `/how-to-cook-frozen-mushrooms/`
- **Alt text already set:** "Frozen mushroom pieces cooking in a hot skillet with steam rising as the ice water evaporates"

> Editorial food photograph of frozen mushroom pieces cooking in a hot stainless
> steel skillet: pale, ice-frosted sliced mushrooms partly thawing in the pan with
> shallow released liquid pooling and visible steam rising as the water boils off.
> Some pieces at the edge starting to brown. Warm neutral background, natural window
> light from the left, shallow depth of field. Landscape 3:2. No people, no hands,
> no text, no labels, no watermark.

**Check before converting:** this one must show the *frost + steam + released liquid*
stage — that is the whole point of the page. A photo of nicely browned mushrooms is
wrong here and duplicates the pan guide's hero.

---

## Reject and regenerate if

- Wrong species shape (see the descriptor table in `docs/grok-recipe-prompt.md`).
- Fused/warped utensils, extra pan handles, impossible geometry.
- Any text, watermark, or logo artifact.
- Looks raw when the recipe says browned (or vice versa for #3).
