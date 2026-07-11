# Content briefs — next four CookMushroom guides

**Status:** Ready to write. Priority order below. Each page ships only when its checklist passes.

**Shared rules (all four pages)**

- Follow the existing `GuideArticle` template in `src/data/guides.ts`. Answer-first description, quick-answer grid, sections, tips, pairings, FAQs, storage, variations.
- Voice: concise, practical, observable cues ("pan looks dry", "edges turn golden"). No health or supplement claims. Wild-mushroom wording never confirms a find is safe.
- Titles ≤ 65 chars. Meta descriptions 120–160 chars, answer-first.
- Hero images: Grok, species/subject-accurate, 1200×800, no text or watermarks, exported to WebP ≤ 110 KB, filename matches the `image` field.
- Internal links are part of the deliverable, not an afterthought. Every new page links out to at least 4 existing guides, and at least 3 existing pages link back to it.
- `npm run build` passes after each integration; validate schema with Google Rich Results Test after deploy.

**One template tweak needed before brief 1:** the quick-grid labels ("Best heat", "Cut", "Cook time", "Finish") are hardcoded in `[slug].astro`, and the cook-time chip resolves from the `cookTimes` chart. Add optional per-guide label overrides (e.g. `quickFacts?: {label: string; value: string}[]`) so a non-recipe page like the cleaning guide can show "Tools / Time / Method / Rule" instead. Small, backwards-compatible change.

---

## 1. How to Clean Mushrooms Before Cooking

- **Slug:** `how-to-clean-mushrooms`
- **Title:** How to Clean Mushrooms Before Cooking
- **Meta description draft:** "Clean mushrooms with a brush, damp towel, or a quick rinse — never a soak. What to use for each variety so they brown instead of steam." (~140 chars)
- **Schema:** Article (no `ingredients` field). This is a reference page, not a recipe.
- **Search intent cluster:** clean mushrooms *before cooking / properly / with a brush / baby bella / sliced / do you wash mushrooms*.

**Angle and differentiation.** The site's single most repeated advice ("brush clean, dry well, never soak") finally gets its canonical URL. Every species guide currently repeats a compressed version; this page owns the full answer and every guide links to it.

**Outline**

1. The 30-second answer: brush or wipe for most, quick rinse only when muddy, dry thoroughly, never soak. (Quote block: the golden rule.)
2. Why soaking ruins texture — mushrooms absorb water, water blocks browning. Ties to the site's core "brown, don't steam" thesis.
3. Tool guide: dry brush, damp paper towel, colander rinse — when each is right.
4. By variety (table or bullets): smooth caps (button/cremini/portobello), delicate clusters (enoki, shimeji, oyster), folded wild types that trap grit (morels, black trumpets, chanterelles), dense types you can scrub (lobster, king oyster). Each variety name links to its guide.
5. Cleaning sliced and pre-cut mushrooms.
6. When to clean: right before cooking, not before storage.

**FAQs:** Should you wash mushrooms or just wipe them? · Can you soak mushrooms to clean them? · How do you clean baby bella mushrooms? · How do you get grit out of morels/wild mushrooms? · Do pre-sliced mushrooms need cleaning?

**Quick-grid (with label override):** Tools: soft brush or damp towel · Time: 2–5 minutes · Water: quick rinse only if muddy · Rule: dry completely before the pan.

**Internal links in:** add one line to the "Before you start / Buy and prep" section of the pan, cremini, morel, chanterelle, and oyster guides (minimum). Longer term: link from the shared notice area in `[slug].astro` so all 24 guides point here with one edit.
**Internal links out:** ≥ 6 species guides, cook-time chart.
**Hero:** `cookmushroom-cleaning-hero.webp` — hands brushing dirt off cremini with a soft brush, damp towel and colander nearby, natural window light, no text.

**Done when:** template tweak merged · all shared rules pass · at least 5 existing guides link here.

---

## 2. How to Cook Dried Mushrooms

- **Slug:** `how-to-cook-dried-mushrooms`
- **Title:** How to Cook Dried Mushrooms: Rehydrate and Use the Broth
- **Meta description draft:** "Rehydrate dried mushrooms in hot water for 20–30 minutes, strain the soaking liquid, and use both in soups, pasta, risotto, and rice." (~135 chars)
- **Schema:** Recipe (include `ingredients`). Recipe name: "Rehydrated Mushrooms with Strained Mushroom Broth" — the base method as a usable recipe.
- **Search intent cluster:** how to cook dried mushrooms *for soup / in sauce / for pasta / for ramen / risotto / rice*; how long to soak dried mushrooms.

**Angle and differentiation.** The porcini guide covers one species' soak; this page is the hub for the whole category (porcini, shiitake, wood ear, morels, mixed packs) and — the differentiator — treats the strained broth as half the ingredient.

**Outline**

1. Why this method works: drying concentrates flavor; the soak makes two ingredients (mushrooms + broth).
2. Base method as timed recipe: hot-water soak 20–30 min → lift mushrooms out (don't pour — grit sinks) → strain liquid through fine mesh or paper towel → squeeze, trim, slice → finish in the pan 3–4 min.
3. Soak-time table by type: porcini 20 min, shiitake 25–30 min (remove stems after), wood ear until fully expanded, morels 15–20 min with extra rinse.
4. Using the broth: pasta sauce, risotto stock, ramen base, rice cooking liquid, gravy.
5. What dried mushrooms can't do: no crisp sear like fresh; texture expectations.

**FAQs:** How long do you soak dried mushrooms? · Can you use boiling water? · Do you have to strain the soaking liquid? · Can you cook dried mushrooms without soaking? · How do you store leftover mushroom broth? · Are dried mushrooms as good as fresh?

**Quick-grid:** Heat: hot-water soak, then medium pan · Cut: slice after rehydrating · Cook time: 20–30 min soak + 4 min pan · Finish: strained broth into the dish.

**Internal links in:** porcini guide (its dried-porcini section links here as the full method), shiitake guide, wood ear guide, cook-time chart.
**Internal links out:** porcini, shiitake, wood ear, morel guides; future ramen recipe (placeholder note).
**cookTimes rows:** add "Dried (any), Rehydrate, 20–30 min soak" row.
**Hero:** `cookmushroom-dried-rehydrate-hero.webp` — dried porcini soaking in a glass bowl of amber liquid, strained broth in a jug beside, rustic table, no text.

**Done when:** shared rules pass · porcini guide's dried section links here · Recipe schema validates.

---

## 3. How to Roast Mushrooms in the Oven

- **Slug:** `how-to-roast-mushrooms-in-oven`
- **Title:** How to Roast Mushrooms in the Oven (Crisp, Not Soggy)
- **Meta description draft:** "Roast mushrooms at 400°F for 20–25 minutes on an uncrowded sheet pan, flipping once, until browned and concentrated — no steaming, no sog." (~140 chars)
- **Schema:** Recipe. Recipe name: "Crispy Oven-Roasted Mushrooms" (balsamic-thyme sheet-pan version, button/cremini base).
- **Search intent cluster:** how to cook mushrooms *in oven / in the oven with olive oil*; roast(ed) mushrooms *temperature / how long / 400 / whole*.

**Angle and differentiation.** Completes the method trilogy (pan → air fryer → oven). The oven page owns hands-off batch cooking: sheet pan logic, parchment vs bare metal, convection notes. It must NOT restate the pan guide's browning theory — link to it instead.

**Outline**

1. Why roasting works: dry oven heat evaporates moisture on all sides at once; best method for a pound or more.
2. Timed recipe: 400°F / 200°C, halved button or cremini, oil + salt late, single layer, 20–25 min, flip at 15.
3. Temperature ladder: 375°F gentler for delicate types, 400°F default, 425°F for portobello and dense caps (link to portobello guide).
4. Times by variety (table): button/cremini 20–25, oyster 15–18, king oyster slices 18–22, portobello 15–20 (rows also added to `cookTimes`).
5. Sheet pan rules: no crowding, no deep rims trapping steam, parchment fine above 400°F caveat.

**FAQs:** What temperature is best for roasting mushrooms? · How long do mushrooms take at 400°F? · Should you flip mushrooms when roasting? · Why did my roasted mushrooms come out soggy? · Can you roast mushrooms with vegetables? · Do you need to pre-cook mushrooms before roasting?

**Quick-grid:** Heat: 400°F / 200°C · Cut: halved, even pieces · Cook time: 20–25 min · Finish: balsamic and thyme out of the oven.

**Internal links in:** pan guide ("prefer hands-off? roast instead"), air-fryer guide, cremini guide, portobello guide.
**Internal links out:** pan guide (browning theory), cremini, portobello, king oyster, cleaning guide.
**cookTimes rows:** add oven-roast rows for button/cremini, oyster, king oyster.
**Hero:** `cookmushroom-oven-roast-hero.webp` — sheet pan of deeply browned halved cremini straight from the oven, thyme and balsamic nearby, no text.

**Done when:** shared rules pass · zero duplicated theory paragraphs from the pan guide (spot-check) · new cookTimes rows render on the chart page.

---

## 4. How to Cook Button Mushrooms

- **Slug:** `how-to-cook-button-mushrooms`
- **Title:** How to Cook Button Mushrooms in a Pan, Oven, or Air Fryer
- **Meta description draft:** "Cook button mushrooms in a hot pan for 8–10 minutes, roast at 400°F for 20, or air-fry at 390°F for 10–12 — timings and seasoning that fit their mild flavor." (~155 chars)
- **Schema:** Recipe. Recipe name: "Everyday Garlic Button Mushrooms" (pan version is the recipe block; oven and air fryer are section summaries linking to the method pages).
- **Search intent cluster:** how to cook button mushrooms *in a pan / in oven / in air fryer / with garlic / whole / for pasta / for breakfast*.

**Angle and differentiation — read before writing.** This is the highest cannibalization risk in the batch. It earns its URL only as the **species entity page** for "button mushroom" (what it is, white vs cremini, how its high water content and mild flavor change cooking), not as another generic method page. Method theory lives on the method pages; this page routes to them. If a section starts re-explaining browning, cut it and link.

**Outline**

1. What button mushrooms are: youngest form of *Agaricus bisporus*; cremini is the same mushroom browner and older, portobello fully mature. Links to cremini and portobello guides — this entity relationship is the page's unique content.
2. What their character means in the pan: mildest flavor (season harder), highest water content (dry well, don't crowd), cheapest (buy whole, not sliced).
3. Timed pan recipe (the Recipe block): whole small or halved buttons, garlic, butter finish.
4. Oven summary (3–4 sentences) → link to roast guide. Air-fryer summary → link to air-fryer guide.
5. Whole vs sliced vs quartered: when each cut makes sense.
6. Uses: breakfast, pasta, burgers — links to recipe cards.

**FAQs:** Are button mushrooms and white mushrooms the same? · Button vs cremini — what's the difference? · Can you cook button mushrooms whole? · How do you cook button mushrooms for breakfast? · Why are my button mushrooms rubbery? · Should you peel button mushrooms?

**Quick-grid:** Heat: medium-high pan, 400°F oven, 390°F air fryer · Cut: whole if small, halved if large · Cook time: 8–10 min pan · Finish: garlic butter and parsley.

**Internal links in:** cremini guide (add "younger, whiter version" cross-link), pan guide, air-fryer guide, roast guide (once live), cook-time chart (button/cremini rows already exist).
**Internal links out:** cremini, portobello, pan, oven-roast, air-fryer, cleaning guides.
**mushroomSlug:** `button-cremini` (reuses existing cookTimes rows).
**Hero:** `cookmushroom-button-hero.webp` — whole white button mushrooms browning in a skillet with garlic and parsley, clearly white (not brown cremini), no text.

**Done when:** shared rules pass · a reader can tell in one scroll why this page exists next to the cremini and pan guides · cremini guide links back.

---

## Publication order and dependencies

1. Template tweak (quick-grid label override) → **Cleaning guide** (no dependencies, most internal-link leverage).
2. **Dried mushrooms** (independent).
3. **Oven roast** (adds cookTimes rows the button page reuses).
4. **Button mushrooms** (last — wants the roast page live to link to).

After all four: revisit `/mushroom-recipe-index/` and start real recipe URLs (mushrooms & onions, garlic mushroom pasta, shiitake ramen) per the audit's phase two.
