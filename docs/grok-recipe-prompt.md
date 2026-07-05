# Grok prompt for CookMushroom recipe content + images

How to use, every time:
1. Run `npm run grok` in this repo. It reads `src/data/guides.ts` and prints
   (a) a duplicate-guard block listing everything already on the site, and
   (b) a "NEXT UP" list of guides still missing the full recipe template.
2. Pick the top NEXT UP item — that's your next recipe. Grok never decides
   what's next; the site data does.
3. Paste the duplicate-guard block into Grok FIRST, then the MASTER PROMPT
   below with the three variables filled in from the NEXT UP item.
4. Ask for the image using the "IMAGE PROMPT" block.
5. Paste the returned object into `speciesGuides` in `src/data/guides.ts`
   (replace the existing entry for that slug if one exists), save the image to
   `public/images/`, run `npm run build`.
6. Next session, `npm run grok` again — the guide you just upgraded now shows
   as done, so the list stays accurate with zero bookkeeping.

Variables:
- `{{MUSHROOM}}` — e.g. "shiitake mushrooms"
- `{{METHOD}}` — the one best method, e.g. "hot pan sauté with soy-butter finish"
- `{{SLUG}}` — the page slug, e.g. "how-to-cook-shiitake-mushrooms"

Note: when upgrading an existing guide, also paste the current object from
`guides.ts` into Grok with the line "This page already exists — keep the slug,
mushroomSlug, and anything worth keeping; upgrade it to the full template."
That preserves continuity instead of generating a conflicting rewrite.

---

## MASTER PROMPT (content)

You are a recipe writer for CookMushroom.com, a narrow, practical reference site
about cooking edible mushrooms. Write one complete guide for **{{MUSHROOM}}**
using **{{METHOD}}** as the primary method.

### Voice — non-negotiable
- Plain kitchen English. Short sentences. Second person.
- Every claim must be something a home cook can see, hear, smell, or time.
  "Cook until the pan looks dry, about 4–6 minutes" — not "cook until done."
- Banned words and moves: "elevate", "delve", "culinary journey", "umami bomb",
  "game-changer", "look no further", rhetorical questions, exclamation marks,
  and any sentence that could open any food blog ("Mushrooms are a versatile...").
- Do not pad. If a section has nothing real to say, say less.

### Safety rules — non-negotiable
- Identification notes are safety REMINDERS only. Name the dangerous look-alike
  and its distinguishing features if one exists, then say: buy from a market or
  get expert verification. Never state or imply that the reader's wild find is safe.
- No health, medical, or supplement claims. For functional mushrooms (chaga,
  reishi), describe preparation only.
- Never invent sourcing, testing stories, or a named human author.

### Output format
Return ONE TypeScript object literal, nothing else, matching this exact shape.
Field rules are in the comments — follow them, then delete nothing and add nothing:

```ts
{
  slug: '{{SLUG}}',
  mushroomSlug: '<short-slug, e.g. shiitake>',
  label: '<1-3 word display name>',
  badge: '<2-3 word hook, e.g. "Asian standard">',
  // Title: front-load the search phrase "How to Cook X Mushrooms", <= 60 chars,
  // optional parenthetical or colon tail describing the method or payoff.
  title: 'How to Cook ... ',
  // Description: <= 160 chars, answers the query directly, includes method + a
  // concrete cue or time. This is the meta description AND the page lead.
  description: '...',
  minutes: '<read time, e.g. "5 min">',
  updated: '<today, ISO: YYYY-MM-DD>',
  isoTime: 'PT<cook minutes>M',      // active cook time only
  prepIsoTime: 'PT<prep minutes>M',
  heat: '<e.g. "Medium-high" or "400°F / 200°C">',
  cut: '<e.g. "1/4 inch slices">',
  finish: '<e.g. "Soy, butter, scallion">',
  image: '/images/<mushroomSlug>-<dish-word>.png',
  imageAlt: '<literal description of the image, mention the species and the pan/dish>',
  recipeName: '<Dish name a person would search, e.g. "Soy-Butter Shiitake Caps">',
  yieldText: '<e.g. "2 servings as a side">',
  // 6-9 ingredients. Quantities in imperial AND metric: "1 lb (450 g)".
  // Order of use. Mark optional items "(optional)".
  ingredients: [ ... ],
  // 5-7 steps. Each step = one action + one sensory cue or time.
  // Step 1 is always cleaning/prep. Never bury two actions in one step.
  steps: [ ... ],
  // 3 tips: the mistakes that actually ruin this mushroom, stated as fixes.
  tips: [ ... ],
  // 4-6 lowercase pairing nouns, e.g. 'rice bowls', 'toast'.
  pairings: [ ... ],
  // 2-3 intro sections rendered BEFORE the recipe. Required headings:
  //   1. "Why <method> works for <mushroom>" — the physics/texture reason, 60-100 words.
  //   2. If a wild look-alike exists: "Safety first: ..." with bullets naming the
  //      look-alike's features + the market/expert-verification line.
  //   3. Optional: cleaning or buying notes worth knowing, may use `quote` for
  //      a one-sentence rule worth highlighting.
  sections: [
    { heading: '...', text: '...' },
    { heading: '...', text: '...', bullets: [ ... ] },
    { heading: '...', quote: '...' }
  ],
  // 4-6 FAQs. Questions = real search phrasings ("Can you eat X raw?",
  // "Why did my X turn out rubbery?"). First sentence of each answer is the
  // direct answer; 2-3 sentences total.
  faqs: [
    { question: '...', answer: '...' }
  ],
  // 3-4 bullets: fresh storage, cooked leftovers + how to reheat (and how NOT to),
  // freezing (state if raw freezing ruins texture), drying if relevant.
  storage: [ ... ],
  // 4 bullets, each "<Name>: <one-line how>", tied to real dishes.
  variations: [ ... ]
}
```

Before returning, self-check: title <= 60 chars and starts with "How to Cook"
(or "How to Prepare/Use" where cooking is the wrong verb); description <= 160
chars; every step has a cue or time; no banned words; no health claims; no
"safe to eat" statements about wild finds.

---

## IMAGE PROMPT (hero, one per recipe)

Generate this after the content, filling in from the object you just wrote:

> Photorealistic overhead-to-45° food photograph of <recipeName>: <species —
> include its distinctive visual features, see table below> in a dark cast-iron
> skillet, cooked to golden-brown with visible crisp edges, garnished as the
> recipe describes. Warm cream linen or pale wood background (#fbf7ee tones),
> soft natural window light from the left, shallow depth of field. Rustic,
> minimal styling: at most one herb sprig and one small pinch bowl beside the
> pan. Landscape 3:2. No text, no watermark, no logo, no hands, no people,
> no cutlery in motion.

Species accuracy matters more than beauty — a wrong-species photo on a cooking
guide is a trust and safety problem. Include the descriptor in every prompt:

| Mushroom | Visual descriptor to include |
|---|---|
| Chanterelle | golden trumpet/funnel shape, wavy cap edge, blunt ridges (not gills) running down the stem |
| Morel | tan-brown conical cap with deep honeycomb pits, hollow |
| Lion's mane | white shaggy pom-pom of soft icicle-like spines |
| Shiitake | tan-brown umbrella caps, pale cream gills, curled rim |
| Oyster | fan/shelf-shaped grey-beige caps in overlapping clusters |
| King oyster | thick white cylindrical stem, small flat brown cap |
| Maitake | grey-brown ruffled overlapping fronds in a cluster |
| Enoki | long thin white stems with tiny caps, in a bundle |
| Cremini | small smooth brown button caps |
| Portobello | large flat brown cap with dark exposed gills |
| Porcini | fat bulbous pale stem, brown bun-like cap |
| Black trumpet | thin dark grey-black funnel, hollow |
| Shimeji | small tan caps on white stems in a joined cluster |
| Wood ear | dark brown wavy ear-shaped translucent folds |

### Image checklist before publishing (human, 30 seconds)
1. Is the species recognizably correct? (Compare against a real photo.)
2. Cooked appearance matches the recipe (browned, not raw-looking)?
3. No text/watermark artifacts, no mangled utensils?
4. Export/resize to 1200×800 PNG, filename = the `image` field, drop into
   `public/images/`, done.

---

## Also ask Grok for the recipe card (one line)

> Also return one entry for the recipe index in this shape:
> `{ name: '<recipeName, shortened>', mushroom: '<label>', time: '<total min> min', guide: '{{SLUG}}', description: '<one sentence, imperative, method-first>' }`

Paste it into `recipeCards` in `src/data/guides.ts`.

---

## What NOT to outsource to Grok
- The `updated` date — set it yourself to the day you actually publish.
- Species-safety review — read the look-alike section against a trusted source
  (or delete it) before publishing; never publish an ID claim you can't verify.
- Final image species check — see checklist above.
