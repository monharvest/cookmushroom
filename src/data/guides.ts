export type GuideSection = {
  heading: string;
  text?: string;
  bullets?: string[];
  ordered?: string[];
  quote?: string;
  image?: { src: string; alt: string };
};

export type GuideFaq = { question: string; answer: string };

export type GuideArticle = {
  slug: string;
  label: string;
  title: string;
  description: string;
  minutes: string;
  updated: string; // ISO date of the last substantive edit; rendered on-page and in schema
  isoTime: string;
  heat: string;
  cut: string;
  finish: string;
  steps: string[];
  tips: string[];
  pairings: string[];
  mushroomSlug?: string;
  image?: string; // local path under /public only — never hotlink external images
  imageAlt?: string;
  badge?: string;
  sections?: GuideSection[];
  // Full recipe-template fields. When `ingredients` is present the page emits
  // Recipe schema instead of Article schema. See how-to-cook-chanterelle-mushrooms
  // for the exemplar every guide should grow into.
  recipeName?: string;
  yieldText?: string;
  prepIsoTime?: string;
  ingredients?: string[];
  faqs?: GuideFaq[];
  storage?: string[];
  variations?: string[];
};

export const cookTimes = [
  { mushroom: 'Button / cremini', mushroomSlug: 'button-cremini', method: 'Pan sauté', methodSlug: 'pan', time: '8–10 min', heat: 'Medium-high', fat: '1 tbsp oil per 8 oz / 225 g', done: 'Deep brown edges, no pooled water.' },
  { mushroom: 'Button / cremini', mushroomSlug: 'button-cremini', method: 'Air fryer', methodSlug: 'air-fryer', time: '10–12 min', heat: '390°F / 200°C', fat: '2 tsp oil per 8 oz / 225 g', done: 'Shrunk, browned, lightly crisp.' },
  { mushroom: 'Oyster', mushroomSlug: 'oyster', method: 'Pan sauté', methodSlug: 'pan', time: '7–9 min', heat: 'Medium-high', fat: '1 tbsp oil per 8 oz / 225 g', done: 'Lacy edges turn golden and tender.' },
  { mushroom: 'Oyster', mushroomSlug: 'oyster', method: 'Air fryer', methodSlug: 'air-fryer', time: '8–10 min', heat: '375°F / 190°C', fat: '2 tsp oil per 8 oz / 225 g', done: 'Edges crisp, centers still juicy.' },
  { mushroom: "Lion's mane", mushroomSlug: 'lions-mane', method: 'Pan sear', methodSlug: 'pan', time: '10–14 min', heat: 'Medium', fat: '1 tbsp oil, butter at finish', done: 'Pressed slices are browned and meaty.' },
  { mushroom: "Lion's mane", mushroomSlug: 'lions-mane', method: 'Air fryer', methodSlug: 'air-fryer', time: '10–12 min', heat: '375°F / 190°C', fat: 'Light oil spray', done: 'Golden ridges, firm bite.' },
  { mushroom: 'Enoki', mushroomSlug: 'enoki', method: 'Pan quick cook', methodSlug: 'pan', time: '2–4 min', heat: 'Medium-high', fat: '1 tsp oil', done: 'Just wilted; stems still springy.' },
  { mushroom: 'Enoki', mushroomSlug: 'enoki', method: 'Broil', methodSlug: 'broil', time: '3–5 min', heat: 'High broil', fat: 'Sauce or 1 tsp oil', done: 'Tips browned, bundles softened.' },
  { mushroom: 'Shiitake', mushroomSlug: 'shiitake', method: 'Pan sauté', methodSlug: 'pan', time: '6–8 min', heat: 'Medium-high', fat: '1 tbsp oil per 8 oz / 225 g', done: 'Caps browned; stems removed or very tender.' },
  { mushroom: 'Shiitake', mushroomSlug: 'shiitake', method: 'Soup simmer', methodSlug: 'soup', time: '10–15 min', heat: 'Gentle simmer', fat: 'None required', done: 'Caps are silky and broth smells savory.' },
  { mushroom: 'Portobello', mushroomSlug: 'portobello', method: 'Grill / pan sear', methodSlug: 'pan', time: '8–12 min', heat: 'Medium-high', fat: 'Brush with oil', done: 'Flexible, browned, juices released.' },
  { mushroom: 'Portobello', mushroomSlug: 'portobello', method: 'Oven roast', methodSlug: 'oven', time: '15–20 min', heat: '425°F / 220°C', fat: 'Brush with oil', done: 'Tender center, browned rim.' },
  { mushroom: 'Chanterelles', mushroomSlug: 'chanterelles', method: 'Dry sauté', methodSlug: 'pan', time: '8–10 min', heat: 'Hot pan, then medium', fat: 'Butter after water cooks off', done: 'Pan dry, edges lightly crisp.' },
  { mushroom: 'Morels', mushroomSlug: 'morels', method: 'Butter sauté', methodSlug: 'pan', time: '7–9 min', heat: 'Medium-high', fat: '3 tbsp butter', done: 'Crisp edges and nutty aroma.' },
  { mushroom: 'Porcini', mushroomSlug: 'porcini', method: 'Rehydrate + sauté', methodSlug: 'pan', time: '20 min soak + sauté', heat: 'Boiling water, then medium', fat: 'Butter or olive oil', done: 'Broth strained and mushrooms tender.' },
  { mushroom: 'Shaggy mane', mushroomSlug: 'shaggy-mane', method: 'Butter sauté', methodSlug: 'pan', time: '6–8 min', heat: 'Medium', fat: 'Butter', done: 'Released juices reduce to a glaze.' },
  { mushroom: 'Maitake', mushroomSlug: 'maitake', method: 'Pan sear', methodSlug: 'pan', time: '10–12 min', heat: 'Medium-high', fat: '2 tbsp oil, butter at finish', done: 'Fronds golden with crisp edges.' },
  { mushroom: 'Maitake', mushroomSlug: 'maitake', method: 'Pressed roast', methodSlug: 'oven', time: '25 min', heat: '420°F / 215°C', fat: 'Olive oil', done: 'Crisp ruffled edges.' },
  { mushroom: 'Lobster', mushroomSlug: 'lobster', method: 'Pan sear', methodSlug: 'pan', time: '10–12 min', heat: 'Medium, then high', fat: 'Butter', done: 'Medallions browned at the edges.' },
  { mushroom: 'Black trumpet', mushroomSlug: 'black-trumpet', method: 'Cream reduction', methodSlug: 'pan', time: '8–10 min', heat: 'Medium', fat: 'Butter + cream', done: 'Cream thick enough to coat pasta.' },
  { mushroom: 'Wood ear', mushroomSlug: 'wood-ear', method: 'Soup simmer', methodSlug: 'soup', time: '10 min', heat: 'Gentle simmer', fat: 'None required', done: 'Ribbons stay snappy in broth.' },
  { mushroom: 'Matsutake', mushroomSlug: 'matsutake', method: 'Rice steam', methodSlug: 'steam', time: 'Rice-cooker cycle', heat: 'Steam', fat: 'None required', done: 'Aroma perfumes the rice.' },
  { mushroom: 'Shimeji', mushroomSlug: 'shimeji', method: 'Sesame sauté', methodSlug: 'pan', time: '5 min', heat: 'High', fat: 'Sesame oil', done: 'Stems soften and bitterness cooks off.' },
  { mushroom: 'King oyster', mushroomSlug: 'king-oyster', method: 'Scallop sear', methodSlug: 'pan', time: '6–8 min', heat: 'High', fat: 'Oil, butter to baste', done: 'Deep gold crust on scored faces.' },
  { mushroom: 'Paddy straw', mushroomSlug: 'paddy-straw', method: 'Broth simmer', methodSlug: 'soup', time: '5–8 min', heat: 'Simmer', fat: 'None required', done: 'Caps are velvety and broth-filled.' },
  { mushroom: 'Chaga', mushroomSlug: 'chaga', method: 'Tonic simmer', methodSlug: 'simmer', time: '45 min', heat: 'Low simmer', fat: 'None', done: 'Water turns dark and vanilla-hinted.' },
  { mushroom: 'Reishi', mushroomSlug: 'reishi', method: 'Dual extraction', methodSlug: 'extract', time: 'Hours + 1 month', heat: 'Low simmer', fat: 'Alcohol for triterpenes', done: 'Water extract and tincture are combined.' },
  { mushroom: 'Truffles', mushroomSlug: 'truffles', method: 'Raw shave', methodSlug: 'finish', time: 'At serving', heat: 'No direct heat', fat: 'Warm butter or cream dish', done: 'Paper-thin shavings hit warm food.' }
];

const methodGuides: GuideArticle[] = [
  {
    slug: 'how-to-cook-mushrooms', label: 'All mushrooms', badge: 'Start here', title: 'How to Cook Mushrooms So They Brown, Not Steam', description: 'Cook sliced mushrooms in a wide hot skillet for 8–10 minutes, then add garlic butter once the pan is dry and the edges are deep brown.', minutes: '7 min', updated: '2026-07-10', isoTime: 'PT10M', prepIsoTime: 'PT5M', heat: 'Medium-high', cut: '1/4-inch slices', finish: 'Garlic butter, parsley, lemon',
    image: '/images/garlic-butter-mushrooms.jpg', imageAlt: 'Golden-brown garlic-butter cremini and white button mushrooms in a cast-iron skillet with parsley',
    recipeName: 'Golden Garlic-Butter Mushrooms', yieldText: '4 servings as a side',
    ingredients: [
      '1 lb (450 g) cremini or white button mushrooms',
      '1 tbsp (15 ml) neutral oil',
      '2 tbsp (28 g) unsalted butter',
      '2 garlic cloves (about 6 g), minced',
      '1/2 tsp (3 g) fine sea salt',
      '1/4 tsp freshly ground black pepper',
      '1 tbsp (4 g) chopped flat-leaf parsley',
      '1 tsp (5 ml) lemon juice (optional)'
    ],
    steps: [
      'Wipe away loose dirt, rinse briefly only if needed, and dry the mushrooms well. Trim the stem ends and slice the mushrooms 1/4 inch thick.',
      'Heat a wide 12-inch skillet over medium-high for 2 minutes. Add the oil and swirl to coat the pan.',
      'Add the mushrooms in one layer. Leave them undisturbed for 3 minutes, until the bottom edges turn golden.',
      'Stir and cook for 4–5 minutes more, until the released liquid evaporates and the pan looks dry.',
      'Lower the heat to medium. Add the salt, butter, and garlic and toss for 1 minute, until the garlic smells fragrant but has not browned.',
      'Remove from the heat. Add the black pepper, parsley, and optional lemon juice, then serve while the edges are still crisp.'
    ],
    tips: [
      'Use two batches if the mushrooms overlap heavily. A crowded pan traps steam.',
      'Wait until the pan looks dry before adding butter. Butter added early mixes with mushroom water instead of browning the slices.',
      'Add garlic during the final minute. Garlic added at the start can burn before the mushrooms brown.'
    ],
    pairings: ['steak', 'eggs', 'pasta', 'toast', 'rice bowls', 'polenta'],
    sections: [
      { heading: 'Why a wide hot pan works for mushrooms', text: 'Fresh mushrooms release water as they heat. A wide skillet gives that water room to evaporate, while medium-high heat browns the exposed surfaces once the pan dries. Leaving the first side alone for 3 minutes builds color before stirring. Oil handles the early heat; butter and garlic go in only after the water is gone, so they coat the browned slices instead of forming a thin sauce in the pan.' },
      { heading: 'Which mushrooms work with this method', text: 'Cremini and white button mushrooms are the easiest place to start. The same sequence works for sliced portobello caps, stemmed shiitake caps, and torn oyster mushrooms, but delicate pieces may finish sooner. Keep the pieces similar in size and cook in batches when they cannot sit mostly flat against the skillet.' },
      { heading: 'The cleaning rule', quote: 'A quick rinse is fine when mushrooms are dirty, but dry them before they reach the hot pan.' }
    ],
    faqs: [
      { question: 'Should you wash mushrooms before cooking?', answer: 'Yes, if they are visibly dirty. Rinse them briefly instead of soaking them, then dry them well so surface water does not delay browning.' },
      { question: 'Why did my mushrooms turn watery?', answer: 'The pan was crowded, not hot enough, or both. Keep cooking until the liquid evaporates, then brown the mushrooms; use two batches next time if the slices overlap heavily.' },
      { question: 'When should you salt mushrooms?', answer: 'Salt them after the released liquid has mostly evaporated. This keeps the early cooking stage focused on driving off water and building a brown surface.' },
      { question: 'How do you know when mushrooms are done?', answer: 'The pan looks dry, the slices have shrunk, and several edges are deep golden brown. For 1/4-inch cremini or button slices, that takes about 8–10 minutes in a hot, uncrowded skillet.' },
      { question: 'Can you cook mushrooms in butter only?', answer: 'You can, but the milk solids may brown before the mushrooms do. Neutral oil handles the first hot sear; adding butter during the final minute gives you butter flavor without burnt bits.' }
    ],
    storage: [
      'Fresh: keep unwashed mushrooms in a paper bag in the refrigerator and use them within about 5 days.',
      'Cooked leftovers: refrigerate in an airtight container for up to 3 days.',
      'Reheating: use a hot skillet for 2–3 minutes, until the mushrooms are hot and the edges dry out again. A microwave heats them but leaves them softer.',
      'Freezing: cool the cooked mushrooms completely, freeze in a sealed container for up to 2 months, and expect a softer texture after thawing.'
    ],
    variations: [
      'Steakhouse: add 1 tsp Worcestershire sauce with the butter and finish with thyme.',
      'Soy-sesame: replace the salt with 2 tsp soy sauce and finish with a few drops of toasted sesame oil.',
      'Creamy: add 1/3 cup heavy cream after the garlic and simmer for 2 minutes, until it coats the mushrooms.',
      'Onions: brown one thinly sliced small onion for 5 minutes before adding the mushrooms.'
    ]
  },
  { slug: 'how-to-cook-mushrooms-in-a-pan', label: 'Pan mushrooms', title: 'How to Cook Mushrooms in a Pan', description: 'Cook sliced mushrooms in a hot, uncrowded skillet for 8–10 minutes, then add butter and garlic once the liquid has evaporated.', minutes: '4 min', updated: '2026-07-10', image: '/images/cookmushroom-pan-hero.jpg', imageAlt: 'Golden-brown garlic-butter button mushrooms with parsley in a cast-iron skillet', isoTime: 'PT10M', heat: 'Medium-high', cut: '1/4 inch slices', finish: 'Butter in the last minute', steps: ['Slice mushrooms 1/4 inch thick or tear delicate varieties into bite-size pieces.', 'Heat a skillet over medium-high heat. Add oil, then mushrooms in one layer.', 'Leave them alone for 2–3 minutes, stir, then cook 5–7 minutes more.', 'Salt, add butter and garlic for the last minute, then finish with parsley or lemon.'], tips: ['Cast iron or stainless steel browns best.', 'Cook in batches if the pan looks full.', 'Butter burns early; add it near the end.'], pairings: ['omelets', 'burgers', 'risotto', 'ramen', 'grain bowls'] },
  { slug: 'how-to-cook-mushrooms-in-air-fryer', label: 'Air fryer', title: 'How to Cook Mushrooms in an Air Fryer', description: 'Air-fry bite-size mushrooms at 375–390°F for 10–12 minutes, shaking halfway, until the edges are brown and lightly crisp.', minutes: '4 min', updated: '2026-07-10', image: '/images/cookmushroom-air-fryer-hero.jpg', imageAlt: 'Golden air-fried cremini mushrooms with lemon and parsley', isoTime: 'PT12M', heat: '375–390°F', cut: 'Even bite-size pieces', finish: 'Sauce after cooking', steps: ['Cut mushrooms evenly and toss with a little oil, salt, and pepper.', 'Spread in a single layer. Airflow matters more than a heavy coating.', 'Cook at 375–390°F / 190–200°C, shaking halfway.', 'Finish with soy sauce, lemon, chili crisp, or grated parmesan after cooking.'], tips: ['Wet mushrooms go rubbery; dry them first.', 'Small enoki bundles cook fast, so check early.', 'Use parchment only if it does not block airflow.'], pairings: ['salads', 'bowls', 'tacos', 'rice', 'snack plates'] }
];

const speciesGuides: GuideArticle[] = [
  // ── TEMPLATE EXEMPLAR ─────────────────────────────────────────────────────
  // This guide carries every field of the full recipe template: intro sections,
  // ingredients (triggers Recipe schema), FAQs, storage, and variations.
  // Grow every other guide into this shape.
  {
    slug: 'how-to-cook-chanterelle-mushrooms', mushroomSlug: 'chanterelles', label: 'Golden chanterelles', badge: 'Foraging essential', title: 'How to Cook Chanterelle Mushrooms (Dry-Sauté Method)', description: 'Dry-sauté chanterelles until their water cooks off, then add butter, shallot, and thyme for tender centers and lightly crisp edges.', minutes: '7 min', updated: '2026-07-05', isoTime: 'PT10M', prepIsoTime: 'PT5M', heat: 'Hot pan, then medium', cut: 'Tear large pieces', finish: 'Butter, shallot, thyme',
    image: '/images/chanterelles-skillet.png', imageAlt: 'Illustration of golden chanterelle mushrooms dry-sautéing in a cast-iron skillet with thyme and butter',
    recipeName: 'Dry-Sautéed Chanterelles with Butter and Thyme', yieldText: '2 servings as a side',
    ingredients: [
      '1 lb (450 g) fresh chanterelle mushrooms, brushed clean',
      '2 tbsp unsalted butter',
      '1 small shallot, minced',
      '2 sprigs fresh thyme, leaves picked',
      '1/4 tsp fine sea salt, plus more to taste',
      'Freshly ground black pepper',
      'Small squeeze of lemon (optional)'
    ],
    steps: [
      'Brush grit off with a dry brush or paper towel. Rinse briefly only if truly muddy, then dry thoroughly — wet chanterelles steam instead of browning.',
      'Tear large chanterelles lengthwise into thick, bite-size pieces so they cook evenly and keep their meaty texture.',
      'Heat a wide, dry skillet over medium-high. Add the chanterelles with no oil or butter and spread them in one layer.',
      'Let them release their water and simmer in it, stirring occasionally, until the pan looks completely dry — about 4–6 minutes.',
      'Lower the heat to medium. Add the butter, shallot, and thyme and cook 3–4 minutes more, until the edges are lightly crisp and the shallot is soft.',
      'Season with salt and pepper, add a small squeeze of lemon if you like, and serve hot.'
    ],
    tips: ['True chanterelles have blunt false gills that run down the stem.', 'A true golden chanterelle has a white-to-creamy yellow spore print.', "Avoid Jack-O'Lantern mushrooms: true sharp gills and clustered growth on wood are danger signs."], pairings: ['toast', 'cream sauces', 'eggs', 'pasta'],
    sections: [
      { heading: 'Why the dry pan matters', text: 'Chanterelles hold a lot of water. Fat added too early traps that water and the mushrooms boil in it, turning slimy. Starting in a dry pan lets the moisture escape first, which concentrates the fruity, apricot-like aroma chanterelles are prized for and leaves the edges free to crisp in the butter at the end.' },
      { heading: 'Safety first: true chanterelles vs. false look-alikes', text: 'True chanterelles have ridges, or false gills, rather than true blade-like gills. These blunt, wavy folds run down the stem and do not separate easily from the cap.', bullets: ['The spore print is white to creamy yellow.', "Jack-O'Lantern mushrooms have true, sharp, unbranched gills and grow in clusters on decaying wood.", 'Buy from a market or have an experienced forager verify your find — this page is a cooking guide, not an identification manual.'] },
      { heading: 'The golden rule of cleaning', quote: 'Never soak chanterelles in water. They absorb excess moisture and turn slimy when cooked.' }
    ],
    faqs: [
      { question: 'Can you eat chanterelles raw?', answer: 'No. Raw chanterelles are hard to digest and can cause stomach upset, and their apricot-like aroma only develops with heat. Always cook them through.' },
      { question: 'Should you wash chanterelles?', answer: 'Brush them clean when you can. If they are truly muddy, rinse them quickly under running water and dry them well right away — never soak them, or they turn slimy in the pan.' },
      { question: 'Why did my chanterelles turn out slimy or rubbery?', answer: 'Almost always one of two things: they were soaked in water before cooking, or the pan was crowded so their moisture could not evaporate. Use a wide pan, work in batches, and keep cooking until the pan looks dry.' },
      { question: 'How do I know when chanterelles are done?', answer: 'The released liquid has cooked away, the pan looks dry, and the edges are lightly crisp while the centers stay tender. That usually takes 8–10 minutes total.' },
      { question: 'Are wild chanterelles safe to cook?', answer: 'Only if they are positively identified. The dangerous look-alike, the Jack-O’Lantern, has true sharp gills and grows in clusters on wood. If you have any doubt, buy chanterelles from a market instead.' }
    ],
    storage: [
      'Fresh, uncooked: keep in a paper bag in the fridge for 4–5 days. A sealed plastic bag makes them sweat and spoil fast.',
      'Cooked: refrigerate in an airtight container up to 3 days. Reheat in a dry skillet over medium heat — the microwave turns them rubbery.',
      'Freezing: dry-sauté first (through step 4), cool, then freeze up to 3 months. Freezing raw chanterelles ruins the texture.',
      'Drying is not recommended for chanterelles; unlike porcini, they rehydrate leathery.'
    ],
    variations: [
      'Cream sauce: after the butter step, add 1/2 cup heavy cream and simmer 2 minutes, then toss with pasta.',
      'Wine finish: deglaze with a splash of dry white wine just before the butter goes in.',
      'Eggs: fold the finished mushrooms into soft scrambled eggs or an omelet.',
      'Toast: pile onto buttered sourdough and finish with flaky salt.'
    ]
  },
  {
    slug: 'how-to-cook-morel-mushrooms', mushroomSlug: 'morels', label: 'Morels', badge: 'Spring luxury', title: "How to Cook Morel Mushrooms: Butter, Garlic, White Wine", description: 'Halve verified morels, dry-sauté for 2 minutes, then cook in butter and garlic for 5–7 minutes before finishing with white wine.', minutes: '6 min', updated: '2026-07-10', image: '/images/cookmushroom-morel-hero.jpg', imageAlt: 'Butter-seared morel mushrooms with lemon in a cast-iron skillet', isoTime: 'PT9M', heat: 'Medium-high', cut: 'Halved or sliced', finish: 'Butter, garlic, white wine',
    steps: ['Slice morels in half from top to bottom to confirm the hollow interior.', 'Dry sauté sliced morels for 2 minutes.', 'Add butter and a smashed garlic clove; sauté 5–7 minutes.', 'Deglaze with white wine, reduce, and season with flaky salt.'],
    tips: ['True morels have deeply pitted honeycomb caps.', 'True morels are fully hollow when sliced lengthwise.', 'Do not treat false morels as edible.'], pairings: ['buttered toast', 'white wine sauce', 'eggs', 'spring pasta'],
    sections: [
      { heading: 'Identification: true morels vs. false morels', bullets: ['True morels have a distinctive cap covered in deeply pitted honeycomb-like hollows.', 'Slice the mushroom completely from top to bottom. True morels are 100% hollow.'] },
      { heading: 'Recipe: classic butter and garlic sauté', text: 'Dry sauté sliced morels for 2 minutes, then add butter and garlic. Finish with white wine, reduce for 60 seconds, season, and serve.' }
    ]
  },
  {
    slug: 'how-to-cook-lions-mane-mushrooms', mushroomSlug: 'lions-mane', label: "Lion's mane", badge: 'Seafood texture', title: "How to Cook Lion's Mane Mushrooms (Crab-Like Texture)", description: "Dry-sauté lion's mane to remove moisture, then sear thick slices or bind shredded pieces into crisp, crab-style mushroom cakes.", minutes: '5 min', updated: '2026-07-10', image: '/images/cookmushroom-lions-mane-hero.jpg', imageAlt: 'Golden seared lion’s mane mushroom slabs with lemon in a cast-iron skillet', isoTime: 'PT14M', heat: 'Medium', cut: 'Thick slabs or shreds', finish: 'Butter, lemon, Old Bay',
    steps: ['Tear lion’s mane into shreds or slice into slabs.', 'Dry sauté 5 minutes to drive off moisture and compress the fibers.', 'Mix with mayonnaise, Dijon, Old Bay, and breadcrumbs if making cakes.', 'Form patties and shallow fry 3–4 minutes per side.'],
    tips: ['Pre-cook before forming crab-style cakes.', 'Keep pieces large when you want meaty texture.', 'Do not over-wet the mix.'], pairings: ['crabless cakes', 'sandwiches', 'rice bowls', 'lemon butter'],
    sections: [{ heading: 'Recipe: vegan lion’s mane crab cakes', text: 'Tear lion’s mane into small shreds and dry sauté. Mix with mayonnaise, Dijon mustard, Old Bay, and breadcrumbs, then form patties and shallow fry until crisp.' }]
  },
  {
    slug: 'how-to-cook-porcini-mushrooms', mushroomSlug: 'porcini', label: 'King porcini', badge: 'Umami depth', title: 'How to Cook Porcini Mushrooms, Fresh or Dried', description: 'Soak dried porcini for 20 minutes, strain the liquid, then sauté the mushrooms and reduce the filtered broth into pasta or risotto.', minutes: '5 min', updated: '2026-07-10', image: '/images/porcini-garlic-butter-hero.jpg', imageAlt: 'Garlic-butter porcini mushrooms with parsley and lemon in a skillet', isoTime: 'PT20M', heat: 'Boiling soak, then medium', cut: 'Sliced or rehydrated pieces', finish: 'Use the strained soaking broth',
    steps: ['Soak dried porcini in boiling water for 20 minutes.', 'Strain the soaking liquid through fine mesh or paper towel.', 'Sauté the rehydrated mushrooms.', 'Reduce the strained broth into sauces, grains, or pasta.'],
    tips: ['Never discard strained porcini soaking liquid.', 'Filter the liquid carefully to remove grit.', 'Use dried porcini when fresh porcini are unavailable.'], pairings: ['risotto', 'pasta', 'grain sauces', 'ragù'],
    sections: [{ heading: 'Deep umami: maximizing dried porcini', text: 'The soaking liquid carries a potent concentration of mushroom flavor. Strain it well, then reduce it into sauces instead of throwing it away.', ordered: ['Soak dried pieces in boiling water for 20 minutes.', 'Filter through a fine mesh sieve or paper towel.', 'Use the mushrooms in a sauté and reduce the broth into sauces.'] }]
  },
  {
    slug: 'how-to-cook-shaggy-mane-mushrooms', mushroomSlug: 'shaggy-mane', label: 'Shaggy manes', badge: 'Time critical', title: 'How to Cook Shaggy Mane Mushrooms Before They Turn', description: 'Cook expert-verified, pristine white shaggy manes in butter for 6–8 minutes, until their released liquid reduces to a glossy glaze.', minutes: '4 min', updated: '2026-07-10', image: '/images/shaggy-mane-mushrooms-on-toast-hero.jpg', imageAlt: 'Sautéed shaggy mane mushrooms with chives on toasted sourdough', isoTime: 'PT8M', heat: 'Medium', cut: 'Halved lengthwise', finish: 'Parmesan',
    steps: ['Use only pristine white specimens.', 'Slice in half lengthwise.', 'Cook with butter and a little minced garlic.', 'Reduce released juices to a glaze and finish with grated parmesan.'],
    tips: ['Cook the same day they are picked.', 'Discard specimens already turning inky.', 'The released liquid should cook away before finishing.'], pairings: ['parmesan', 'toast', 'eggs', 'simple pasta'],
    sections: [{ heading: 'Preparation and skillet sauté', text: 'Slice pristine white specimens in half lengthwise. Cook with butter and garlic until the released juices reduce into a shiny glaze, then finish with grated parmesan.' }]
  },
  {
    slug: 'how-to-cook-oyster-mushrooms', mushroomSlug: 'oyster', label: 'Oyster', badge: 'Fast umami', title: 'How to Cook Oyster Mushrooms: Crisp Edges, Fast Umami', description: 'Oyster mushrooms grow in shelf-like clusters and cook quickly into tender, savory strips with crisp edges.', minutes: '4 min', updated: '2026-07-10', image: '/images/crisp-garlic-oyster-mushrooms-hero.jpg', imageAlt: 'Crisp-edged oyster mushrooms with garlic butter and lemon in a skillet', isoTime: 'PT9M', heat: 'High, then lower', cut: 'Separated caps or torn strips', finish: 'Garlic and parsley',
    steps: ['Separate caps or tear clusters into strips.', 'Heat olive oil on high.', 'Sear in a single layer untouched for 3 minutes.', 'Flip, lower heat, add sliced garlic and parsley, and cook 60 seconds.'],
    tips: ['Tearing gives better texture than slicing.', 'Use a single layer for crisp rims.', 'They shrink a lot; start with more than you think.'], pairings: ['tacos', 'noodles', 'fried rice', 'toast'],
    sections: [{ heading: 'Recipe: crispy sautéed garlic oysters', text: 'Heat olive oil on high, add separated caps in one layer, and leave them alone until the bottom rims turn dark gold. Flip, lower the heat, add garlic and parsley, and finish quickly.' }]
  },
  {
    slug: 'how-to-cook-maitake-mushrooms', mushroomSlug: 'maitake', label: 'Maitake', badge: 'Ruffled clusters', title: 'How to Cook Maitake (Hen of the Woods) Mushrooms', description: 'Hot pan sear maitake mushrooms until the fronds turn golden and crisp, finished with garlic butter. Ready in about 12 minutes.', minutes: '5 min', updated: '2026-07-05', isoTime: 'PT12M', prepIsoTime: 'PT5M', heat: 'Medium-high', cut: 'Break into large clusters or 1-inch pieces', finish: 'Garlic butter, soy, scallion',
    image: '/images/maitake-seared.jpg', imageAlt: 'Golden-brown seared maitake mushrooms with crisp ruffled edges in a cast-iron skillet, garnished with garlic butter and scallions',
    recipeName: 'Garlic-Butter Seared Maitake', yieldText: '2-3 servings as a side',
    ingredients: [
      '12 oz (340 g) fresh maitake mushrooms',
      '2 tbsp (30 ml) neutral oil',
      '2 tbsp (28 g) butter',
      '3 garlic cloves, minced',
      '1 tbsp (15 ml) soy sauce',
      '1/4 tsp salt',
      '2 scallions, thinly sliced (optional)',
      'Freshly ground black pepper (optional)'
    ],
    steps: [
      'Break the maitake into large clusters or 1-inch pieces, keeping some fronds attached. Wipe clean with a dry cloth if needed. Do not soak in water.',
      'Heat a large cast-iron or heavy skillet over medium-high heat for 2 minutes until hot. Add the oil and swirl to coat.',
      'Add the maitake pieces in a single layer. Cook undisturbed for 4 minutes until the bottom edges turn golden and release from the pan.',
      'Flip or stir the pieces and cook another 4-5 minutes until most fronds show crisp golden-brown edges and the pan looks mostly dry.',
      'Push the mushrooms to one side, add the butter and minced garlic to the empty space. Cook 30-45 seconds until fragrant.',
      'Stir everything together, add the soy sauce, and toss for 30 seconds until the mushrooms glisten. Remove from heat.',
      'Taste and season with salt and black pepper if needed. Top with sliced scallions.'
    ],
    tips: [
      'Cook in batches if the pan is crowded. Overcrowding steams the mushrooms instead of browning them.',
      'Press larger clusters gently with a spatula for better contact and crispier edges.',
      'Add the garlic and butter only at the end. Early garlic burns and turns bitter.',
      'Dry the mushrooms well before cooking. Excess moisture prevents crisp edges.'
    ],
    pairings: ['rice bowls', 'steak', 'pasta', 'eggs', 'polenta', 'tacos'],
    sections: [
      { heading: 'Why a hot pan sear works for maitake', text: 'Maitake’s ruffled fronds hold a lot of moisture. High heat and space in the pan drive off water quickly so the edges can crisp and brown instead of steaming. The final butter-garlic toss coats the delicate layers without making them soggy. This method highlights the mushroom’s meaty texture and nutty flavor in under 12 minutes.' },
      { heading: 'Safety first: look-alikes', text: 'Maitake has few dangerous look-alikes, but always buy from a trusted market or supplier.', bullets: ['Confirm the grey-brown ruffled overlapping fronds growing in a dense cluster at the base of oaks.', 'Buy from a market or get expert verification before eating any wild find.'] }
    ],
    faqs: [
      { question: 'Can you eat maitake raw?', answer: 'No, raw maitake is tough and bitter. Cooking softens the texture and improves flavor and digestibility.' },
      { question: 'Why did my maitake turn out soggy?', answer: 'The pan was not hot enough or the mushrooms were overcrowded. Use high heat, give them space, and wait for edges to release before stirring.' },
      { question: 'Do I need to remove the stems?', answer: 'No. Maitake stems are edible and add texture. Break the cluster into pieces instead of trimming heavily.' },
      { question: 'How do you store fresh maitake?', answer: 'Keep in a paper bag in the fridge for up to 5 days. Avoid plastic bags, which trap moisture.' }
    ],
    storage: [
      'Fresh: store in a paper bag in the refrigerator for up to 5 days.',
      'Cooked leftovers: refrigerate in an airtight container up to 3 days. Reheat in a hot skillet to restore crisp edges. Do not microwave.',
      'Freezing: cooked maitake freezes well up to 2 months. Raw freezing softens the texture too much.',
      'Drying: slice clusters thin and dry for long-term storage. Rehydrate in warm water before cooking.'
    ],
    variations: [
      'Crispy roast: toss with oil, salt, and pepper. Roast at 425°F / 220°C for 18-22 minutes, flipping halfway.',
      'Ginger-chili stir-fry: add ginger and chili flakes with the garlic. Finish with a splash of sesame oil.',
      'Steakhouse style: finish with fresh thyme and a splash of Worcestershire instead of soy.',
      'Taco filling: chop finer after searing and season with cumin and lime for mushroom tacos.'
    ]
  },
  {
    slug: 'how-to-cook-lobster-mushrooms', mushroomSlug: 'lobster', label: 'Lobster mushrooms', badge: 'Seafood illusion', title: 'How to Cook Lobster Mushrooms: Slow Butter Sear', description: 'Slice verified lobster mushrooms into 1/2-inch pieces and sear slowly in butter for about 12 minutes, then finish with lemon and chives.', minutes: '4 min', updated: '2026-07-10', image: '/images/lemon-thyme-lobster-mushrooms-hero.jpg', imageAlt: 'Orange lobster mushrooms sautéed with lemon and thyme in a skillet', isoTime: 'PT12M', heat: 'Medium, then high', cut: '½-inch medallions', finish: 'Lemon and chives',
    steps: ['Slice dense mushrooms into ½-inch medallions.', 'Melt butter over medium heat.', 'Cook 5 minutes per side.', 'Raise heat for 1 minute, then finish with lemon and chives.'],
    tips: ['Use dense, clean specimens.', 'Cook slowly before browning hard.', 'Lemon cuts the richness.'], pairings: ['buttered pasta', 'toast', 'rice', 'chives'],
    sections: [{ heading: 'Recipe: pan-seared butter lobster medallions', text: 'Cook thick medallions slowly in butter, then raise the heat briefly to brown the edges. Finish off heat with lemon juice and chives.' }]
  },
  {
    slug: 'how-to-cook-black-trumpet-mushrooms', mushroomSlug: 'black-trumpet', label: 'Black trumpets', badge: 'Wild truffle note', title: 'How to Cook Black Trumpet Mushrooms', description: 'Split and clean black trumpet mushrooms, sauté them for 3 minutes, then reduce with brandy and cream for a smoky pasta sauce.', minutes: '5 min', updated: '2026-07-10', image: '/images/black-trumpet-butter-pasta-hero.jpg', imageAlt: 'Black trumpet mushroom butter pasta with Parmesan and lemon zest', isoTime: 'PT10M', heat: 'Medium', cut: 'Split and cleaned', finish: 'Brandy and cream',
    steps: ['Sauté minced shallots in butter.', 'Add split black trumpets and cook 3 minutes.', 'Deglaze with brandy.', 'Add heavy cream and simmer until thick, then toss with pasta.'],
    tips: ['Split and clean the hollow centers.', 'Use cream to capture the smoky fragrance.', 'Brandy is optional but useful for depth.'], pairings: ['tagliatelle', 'cream sauce', 'eggs', 'toast'],
    sections: [{ heading: 'Recipe: creamy black trumpet pasta reduction', text: 'Sauté shallots in butter, add black trumpets, deglaze with brandy, then simmer cream until thick enough to coat tagliatelle.' }]
  },
  {
    slug: 'how-to-cook-wood-ear-mushrooms', mushroomSlug: 'wood-ear', label: 'Wood ear', badge: 'Snap and texture', title: 'How to Cook Wood Ear Mushrooms: Keep the Crunch', description: 'Slice wood ear mushrooms into ribbons and simmer for 10 minutes with broth, soy sauce, and black vinegar so they stay pleasantly crisp.', minutes: '4 min', updated: '2026-07-10', image: '/images/wood-ear-sesame-stir-fry-hero.jpg', imageAlt: 'Sesame-glazed wood ear mushroom stir-fry with ginger and scallions', isoTime: 'PT10M', heat: 'Simmer', cut: 'Julienned ribbons', finish: 'Black vinegar and soy',
    steps: ['Slice wood ears into thin ribbons.', 'Bring stock to a simmer.', 'Add wood ear, soy sauce, black vinegar, and bamboo shoots.', 'Simmer 10 minutes and thicken with cornstarch slurry if desired.'],
    tips: ['Texture is the point; do not cook it to mush.', 'Julienne for the best soup bite.', 'Black vinegar sharpens the broth.'], pairings: ['hot and sour soup', 'noodles', 'stir-fries', 'broths'],
    sections: [{ heading: 'Recipe: classic hot and sour mushroom broth', text: 'Simmer julienned wood ear ribbons with stock, soy sauce, black vinegar, and bamboo shoots. Thicken with cornstarch slurry for a classic hot-and-sour texture.' }]
  },
  {
    slug: 'how-to-cook-shiitake-mushrooms', mushroomSlug: 'shiitake', label: 'Shiitake', badge: 'Asian standard', title: 'How to Cook Shiitake Mushrooms: Caps, Not Stems', description: 'Remove the fibrous stems, then sauté shiitake caps over medium-high heat for 6–8 minutes and finish with soy, ginger, or mirin.', minutes: '4 min', updated: '2026-07-10', image: '/images/shiitake-garlic-thyme-hero.jpg', imageAlt: 'Seared shiitake mushrooms with garlic and thyme on a ceramic plate', isoTime: 'PT8M', heat: 'Medium-high', cut: 'Stemmed caps', finish: 'Soy, ginger, mirin',
    steps: ['Twist off tough stems.', 'Slice or leave caps whole.', 'Sauté caps until browned and velvety.', 'Use stems for stock instead of chewing them.'],
    tips: ['Always remove fibrous stems before quick cooking.', 'Save stems for soup stock.', 'Dry shiitake soaking liquid is useful after straining.'], pairings: ['miso soup', 'noodles', 'fried rice', 'dumplings'],
    sections: [{ heading: 'Chef’s tip: remove stems', text: 'Always twist the fibrous stems off before cooking; they are too tough to chew but make excellent soup stock bases.' }]
  },
  {
    slug: 'how-to-cook-enoki-mushrooms', mushroomSlug: 'enoki', label: 'Enoki', badge: 'Crisp strands', title: 'How to Cook Enoki Mushrooms: Quick Heat or Foil Bake', description: 'Trim the dense base, separate the enoki strands, and bake them with garlic-soy butter at 400°F for 10 minutes until tender.', minutes: '3 min', updated: '2026-07-10', image: '/images/enoki-garlic-butter-hero.jpg', imageAlt: 'Garlic-butter enoki mushroom clusters with soy and scallions in a skillet', isoTime: 'PT10M', heat: '400°F / 200°C or quick high heat', cut: 'Trimmed strands', finish: 'Garlic soy butter',
    steps: ['Trim the bottom 1 inch from the root cluster.', 'Separate strands.', 'Wrap in foil with butter, minced garlic, and soy sauce.', 'Bake at 400°F for 10 minutes.'],
    tips: ['Trim the dense base.', 'Do not overcook; enoki turns limp fast.', 'Small bundles season more evenly.'], pairings: ['hot pot', 'ramen', 'rice', 'foil packets'],
    sections: [{ heading: 'Foil-baked garlic soy enoki', text: 'Trim the bottom inch away, separate the strands, and seal them in foil with butter, garlic, and soy sauce. Bake at 400°F for 10 minutes.' }]
  },
  {
    slug: 'how-to-cook-matsutake-mushrooms', mushroomSlug: 'matsutake', label: 'Matsutake', badge: 'Autumn aroma', title: 'How to Cook Matsutake Mushrooms Without Losing the Aroma', description: 'Matsutake mushrooms have a pungent pine-and-cinnamon aroma that should be protected with gentle steaming.', minutes: '4 min', updated: '2026-07-10', image: '/images/matsutake-butter-soy-hero.jpg', imageAlt: 'Butter-seared matsutake mushroom slices with soy and scallions in a skillet', isoTime: 'PT30M', heat: 'Steam', cut: 'Paper-thin lengthwise slices', finish: 'Dashi, sake, light soy',
    steps: ['Clean gently.', 'Slice dense stems paper-thin lengthwise.', 'Lay over washed rice with dashi, sake, and light soy sauce.', 'Run the normal rice-cooker steam cycle.'],
    tips: ['Avoid heavy browning that drives off aroma.', 'Slice thinly to perfume the rice.', 'Simple seasonings work best.'], pairings: ['rice', 'dashi', 'sake', 'light soy'],
    sections: [{ heading: 'Matsutake rice', text: 'To preserve aromatic oils, slice clean stems paper-thin lengthwise and steam them over rice with dashi broth, sake, and light soy sauce.' }]
  },
  {
    slug: 'how-to-cook-shimeji-mushrooms', mushroomSlug: 'shimeji', label: 'Shimeji beech', badge: 'Beech bouquets', title: 'How to Cook Shimeji (Beech) Mushrooms', description: 'Cut away the cluster base and sauté separated shimeji mushrooms in sesame oil over high heat for 5 minutes, until tender and nutty.', minutes: '3 min', updated: '2026-07-05', isoTime: 'PT5M', heat: 'High', cut: 'Separated stems', finish: 'Sesame seeds',
    steps: ['Cut away the thick cluster base.', 'Separate the small stems.', 'Sauté in hot sesame oil over high heat for 5 minutes.', 'Garnish with white sesame seeds.'],
    tips: ['Do not eat shimeji raw.', 'Cut away the dense base cleanly.', 'High heat removes bitterness.'], pairings: ['rice bowls', 'noodles', 'stir-fries', 'sesame'],
    sections: [{ heading: 'Sesame sautéed shimeji', text: 'Cut the base away, separate the stems, and toss in hot sesame oil for 5 minutes until the stems soften. Finish with white sesame seeds.' }]
  },
  {
    slug: 'how-to-cook-king-oyster-mushrooms', mushroomSlug: 'king-oyster', label: 'King oyster', badge: 'Flesh density', title: 'How to Cook King Oyster Mushrooms Like Scallops', description: 'Score thick king oyster stem rounds, sear for 3 minutes per side, then baste with garlic butter for a deep golden crust.', minutes: '4 min', updated: '2026-07-05', isoTime: 'PT8M', heat: 'High', cut: '1-inch scored rounds', finish: 'Butter and garlic baste',
    steps: ['Slice stems into 1-inch discs.', 'Score shallow crosshatches on both faces.', 'Sear in hot oil for 3 minutes per side.', 'Add butter and garlic, then baste constantly.'],
    tips: ['Use the thick white stem for scallop-style rounds.', 'Score lightly; do not cut through.', 'Baste after the crust forms.'], pairings: ['vegan scallops', 'rice', 'noodles', 'garlic butter'],
    sections: [{ heading: 'Vegan scallop-style sear', text: 'Slice the stem into thick discs, score the faces, sear until deeply golden, then baste with butter and garlic.' }]
  },
  {
    slug: 'how-to-cook-paddy-straw-mushrooms', mushroomSlug: 'paddy-straw', label: 'Paddy straw', badge: 'Broth catchers', title: 'How to Cook Paddy Straw Mushrooms in Broths', description: 'Halve market-bought paddy straw mushrooms and simmer them in broth for 5–8 minutes, until the egg-shaped caps are tender and velvety.', minutes: '3 min', updated: '2026-07-05', isoTime: 'PT8M', heat: 'Simmer', cut: 'Halved if large', finish: 'Broth seasoning',
    steps: ['Use verified edible paddy straw mushrooms.', 'Halve larger egg-stage mushrooms.', 'Simmer briefly in Southeast Asian broths.', 'Serve when velvety and filled with broth.'],
    tips: ['Immature wild look-alikes can resemble deadly Amanita species.', 'Never forage look-alikes without expert authentication.', 'Best used in broth rather than hard searing.'], pairings: ['tom yum', 'clear broths', 'curries', 'noodles'],
    sections: [{ heading: 'Wild warning', quote: 'In the field, immature wild straw mushrooms look nearly identical to deadly Death Cap mushrooms. Never forage look-alikes without expert authentication.' }]
  },
  {
    slug: 'how-to-cook-cremini-mushrooms', mushroomSlug: 'cremini', label: 'Cremini', badge: 'Kitchen staple', title: 'How to Cook Cremini Mushrooms: Everyday Roasting', description: 'Toss whole cremini mushrooms with olive oil, balsamic, and thyme, then roast at 400°F for 20 minutes until browned and concentrated.', minutes: '3 min', updated: '2026-07-05', isoTime: 'PT20M', heat: '400°F / 200°C', cut: 'Whole caps', finish: 'Balsamic and thyme',
    steps: ['Toss whole cremini caps with olive oil.', 'Add balsamic vinegar and thyme.', 'Spread across a tray.', 'Bake at 400°F for 20 minutes.'],
    tips: ['Roasting concentrates flavor.', 'Do not crowd the tray.', 'Use balsamic lightly so the mushrooms still brown.'], pairings: ['steak', 'pasta', 'toast', 'grain bowls'],
    sections: [{ heading: 'Everyday roasted cremini', text: 'Toss whole caps with olive oil, balsamic vinegar, and thyme. Roast at 400°F for 20 minutes to evaporate moisture and concentrate the flavor.' }]
  },
  {
    slug: 'how-to-prepare-chaga', mushroomSlug: 'chaga', label: 'Chaga', badge: 'Functional herb', title: 'How to Prepare Chaga: Tea and Tonic Basics', description: 'Chaga is woody and rock-hard, so it is prepared as a long-simmered tonic rather than eaten like a mushroom.', minutes: '3 min', updated: '2026-07-05', isoTime: 'PT45M', heat: 'Low simmer', cut: 'Crushed powder or chunks', finish: 'Dark tonic',
    steps: ['Crush chaga into powder or small chunks.', 'Add 2 tablespoons to 4 cups water.', 'Simmer over low heat for 45 minutes.', 'Drink when the water turns dark and vanilla-hinted.'],
    tips: ['Chaga is not sautéed or chewed.', 'Use hot water extraction.', 'Harvest responsibly from birch only when properly identified.'], pairings: ['tea', 'tonics', 'vanilla', 'warming spices'],
    sections: [{ heading: 'Chaga tonic', text: 'Because chaga is woody and hard, simmer 2 tablespoons of crushed chaga in 4 cups of water for 45 minutes until the water turns into a dark tonic.' }]
  },
  {
    slug: 'how-to-prepare-reishi-mushrooms', mushroomSlug: 'reishi', label: 'Reishi', badge: 'Wellness tonic', title: 'How to Prepare Reishi Mushrooms (Tea and Tincture)', description: 'Slice verified reishi thinly and prepare it as a long-simmered tea or dual extraction; the tough, bitter mushroom is not sautéed for eating.', minutes: '4 min', updated: '2026-07-05', isoTime: 'PT2H', heat: 'Long simmer', cut: 'Thin slices', finish: 'Dual extraction',
    steps: ['Slice reishi thinly.', 'Simmer in water for hours.', 'Infuse in high-proof spirits for about a month.', 'Combine extracts according to your tincture ratio.'],
    tips: ['Do not try to sauté reishi for eating.', 'Water extracts water-soluble compounds.', 'Alcohol extracts triterpenes.'], pairings: ['tea', 'tinctures', 'bitter tonics'],
    sections: [{ heading: 'Dual extraction', text: 'Reishi is simmered in water for hours for water-soluble compounds and infused in high-proof spirits for about a month for triterpenes.' }]
  },
  {
    slug: 'how-to-use-truffles', mushroomSlug: 'truffles', label: 'Truffles', badge: 'Gourmet luxury', title: 'How to Use Truffles: Buying, Shaving, Serving', description: 'Shave fresh truffles paper-thin over warm buttered pasta, risotto, or eggs at serving time so their volatile aroma reaches the plate.', minutes: '3 min', updated: '2026-07-05', isoTime: 'PT1M', heat: 'No direct heat', cut: 'Paper-thin shavings', finish: 'Warm pasta or risotto',
    steps: ['Keep truffles cool and aromatic.', 'Do not heat white truffles directly.', 'Use a truffle razor or shaver.', 'Shave paper-thin slices over warm buttered pasta or risotto right before serving.'],
    tips: ['White truffles should never be cooked.', 'Warm food releases aroma without destroying it.', 'A little goes a long way.'], pairings: ['buttered pasta', 'risotto', 'eggs', 'cream sauces'],
    sections: [{ heading: 'Use truffles without killing the aroma', text: 'Truffle aromatics are volatile. White truffles should never be heated; shave them raw over warm buttered pasta or risotto at the last moment.' }]
  },
  { slug: 'how-to-cook-portobello-mushrooms', mushroomSlug: 'portobello', label: 'Portobello', title: 'How to Cook Portobello Mushrooms', description: 'Grill or pan-sear portobello caps for 4–6 minutes per side, or roast at 425°F for 15–20 minutes, until flexible and browned.', minutes: '4 min', updated: '2026-07-05', isoTime: 'PT20M', heat: 'Medium-high or 425°F', cut: 'Whole caps or slices', finish: 'Rest before slicing', steps: ['Remove the stem. Scrape dark gills only if you want a cleaner-looking dish.', 'Brush with oil, salt, pepper, and a small splash of balsamic or soy sauce.', 'Grill or pan sear 4–6 minutes per side, or roast at 425°F / 220°C for 15–20 minutes.', 'Rest 2 minutes before slicing so juices settle.'], tips: ['Do not over-marinate; portobellos soak up liquid fast.', 'Cook cap side down first for a flatter sear.', 'Use as a burger only after cooking off moisture.'], pairings: ['burgers', 'sandwiches', 'salads', 'polenta'] }
];

export const guideArticles: GuideArticle[] = [...methodGuides, ...speciesGuides];

export const recipeCards = [
  { name: 'Golden garlic-butter mushrooms', mushroom: 'Cremini or white button', time: '15 min', guide: 'how-to-cook-mushrooms', description: 'Sear sliced mushrooms in a wide hot skillet, then finish with garlic butter once the pan is dry.' },
  { name: 'Dry-sautéed chanterelles', mushroom: 'Golden chanterelles', time: '10 min', guide: 'how-to-cook-chanterelle-mushrooms', description: 'Cook without fat first, then finish with butter, shallot, and thyme.' },
  { name: 'Classic butter morels', mushroom: 'Morels', time: '12 min', guide: 'how-to-cook-morel-mushrooms', description: 'Dry sauté, foam in butter and garlic, then deglaze with white wine.' },
  { name: "Lion's mane crab cakes", mushroom: "Lion's mane", time: '25 min', guide: 'how-to-cook-lions-mane-mushrooms', description: 'Dry-sauté shreds, bind with Old Bay and breadcrumbs, then shallow fry.' },
  { name: 'Crispy garlic oyster mushrooms', mushroom: 'Oyster', time: '9 min', guide: 'how-to-cook-oyster-mushrooms', description: 'Sear separated caps hard, then finish with garlic and parsley.' },
  { name: 'Garlic-butter seared maitake', mushroom: 'Maitake', time: '17 min', guide: 'how-to-cook-maitake-mushrooms', description: 'Hot pan sear maitake until crisp and golden, then finish with garlic butter and soy.' },
  { name: 'Pressed maitake steaks', mushroom: 'Maitake', time: '25 min', guide: 'how-to-cook-maitake-mushrooms', description: 'Roast thick slabs under cast iron until the ruffled edges crisp.' },
  { name: 'Black trumpet cream pasta', mushroom: 'Black trumpet', time: '15 min', guide: 'how-to-cook-black-trumpet-mushrooms', description: 'Sauté trumpets, deglaze with brandy, and reduce with cream.' },
  { name: 'King oyster scallops', mushroom: 'King oyster', time: '12 min', guide: 'how-to-cook-king-oyster-mushrooms', description: 'Score stem rounds, sear deeply, then baste with garlic butter.' },
  { name: 'Roasted cremini caps', mushroom: 'Cremini', time: '20 min', guide: 'how-to-cook-cremini-mushrooms', description: 'Roast whole caps with olive oil, balsamic, and thyme.' }
];
