import { recipeArticles } from './recipes';

export type GuideSection = {
  heading: string;
  text?: string;
  bullets?: string[];
  ordered?: string[];
  quote?: string;
  image?: { src: string; alt: string };
};

export type GuideFaq = { question: string; answer: string };
export type GuideLink = { href: string; label: string };

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
  quickFacts?: { label: string; value: string }[];
  steps: string[];
  tips: string[];
  pairings: string[];
  mushroomSlug?: string;
  image?: string; // local path under /public only — never hotlink external images
  imageAlt?: string;
  badge?: string;
  sections?: GuideSection[];
  relatedLinks?: GuideLink[];
  showCookTimes?: boolean;
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
  { mushroom: 'Button / cremini', mushroomSlug: 'button-cremini', method: 'Oven roast', methodSlug: 'oven', time: '20–25 min', heat: '400°F / 200°C', fat: '1 tbsp oil per 8 oz / 225 g', done: 'Browned edges, concentrated centers, no pooled liquid.' },
  { mushroom: 'Button / cremini', mushroomSlug: 'button-cremini', method: 'Grill (skewers)', methodSlug: 'grill', time: '8–12 min', heat: 'Medium-high direct, 425–450°F / 220–230°C', fat: 'Oil-based baste, brushed on', done: 'Shrunk by half, grill-marked, no resistance to a knife.' },
  { mushroom: 'Oyster', mushroomSlug: 'oyster', method: 'Pan sauté', methodSlug: 'pan', time: '7–9 min', heat: 'Medium-high', fat: '1 tbsp oil per 8 oz / 225 g', done: 'Lacy edges turn golden and tender.' },
  { mushroom: 'Oyster', mushroomSlug: 'oyster', method: 'Air fryer', methodSlug: 'air-fryer', time: '8–10 min', heat: '375°F / 190°C', fat: '2 tsp oil per 8 oz / 225 g', done: 'Edges crisp, centers still juicy.' },
  { mushroom: 'Oyster', mushroomSlug: 'oyster', method: 'Oven roast', methodSlug: 'oven', time: '15–18 min', heat: '400°F / 200°C', fat: '1 tbsp oil per 8 oz / 225 g', done: 'Torn edges browned and crisp.' },
  { mushroom: 'Oyster', mushroomSlug: 'oyster', method: 'Grill (foil packet)', methodSlug: 'grill', time: '8–10 min', heat: 'Medium-high direct, 425–450°F / 220–230°C', fat: 'Butter sealed in the packet', done: 'Clusters wilted and glossy; open for a final minute to brown.' },
  { mushroom: "Lion's mane", mushroomSlug: 'lions-mane', method: 'Pan sear', methodSlug: 'pan', time: '10–14 min', heat: 'Medium', fat: '1 tbsp oil, butter at finish', done: 'Pressed slices are browned and meaty.' },
  { mushroom: "Lion's mane", mushroomSlug: 'lions-mane', method: 'Air fryer', methodSlug: 'air-fryer', time: '10–12 min', heat: '375°F / 190°C', fat: 'Light oil spray', done: 'Golden ridges, firm bite.' },
  { mushroom: 'Enoki', mushroomSlug: 'enoki', method: 'Pan quick cook', methodSlug: 'pan', time: '2–4 min', heat: 'Medium-high', fat: '1 tsp oil', done: 'Just wilted; stems still springy.' },
  { mushroom: 'Enoki', mushroomSlug: 'enoki', method: 'Broil', methodSlug: 'broil', time: '3–5 min', heat: 'High broil', fat: 'Sauce or 1 tsp oil', done: 'Tips browned, bundles softened.' },
  { mushroom: 'Shiitake', mushroomSlug: 'shiitake', method: 'Pan sauté', methodSlug: 'pan', time: '6–8 min', heat: 'Medium-high', fat: '1 tbsp oil per 8 oz / 225 g', done: 'Caps browned; stems removed or very tender.' },
  { mushroom: 'Shiitake', mushroomSlug: 'shiitake', method: 'Soup simmer', methodSlug: 'soup', time: '10–15 min', heat: 'Gentle simmer', fat: 'None required', done: 'Caps are silky and broth smells savory.' },
  { mushroom: 'Shiitake', mushroomSlug: 'shiitake', method: 'Grill (whole caps)', methodSlug: 'grill', time: '6–8 min', heat: 'Medium-high direct, 425–450°F / 220–230°C', fat: 'Oil-based baste, brushed on', done: 'Caps darkened and pliable; stems removed before grilling.' },
  { mushroom: 'Portobello', mushroomSlug: 'portobello', method: 'Grill / pan sear', methodSlug: 'grill', time: '8–12 min', heat: 'Medium-high', fat: 'Brush with oil', done: 'Flexible, browned, juices released.' },
  { mushroom: 'Portobello', mushroomSlug: 'portobello', method: 'Oven roast', methodSlug: 'oven', time: '15–20 min', heat: '425°F / 220°C', fat: 'Brush with oil', done: 'Tender center, browned rim.' },
  { mushroom: 'Chanterelles', mushroomSlug: 'chanterelles', method: 'Dry sauté', methodSlug: 'pan', time: '8–10 min', heat: 'Hot pan, then medium', fat: 'Butter after water cooks off', done: 'Pan dry, edges lightly crisp.' },
  { mushroom: 'Morels', mushroomSlug: 'morels', method: 'Butter sauté', methodSlug: 'pan', time: '10–14 min', heat: 'Medium, then medium-low', fat: 'Butter and olive oil', done: 'Tender throughout and browned at the edges.' },
  { mushroom: 'Porcini', mushroomSlug: 'porcini', method: 'Pan sauté', methodSlug: 'pan', time: '7–8 min', heat: 'Medium-high, then medium', fat: 'Olive oil, butter at finish', done: 'Browned edges, tender centers.' },
  { mushroom: 'Porcini', mushroomSlug: 'porcini', method: 'Rehydrate + sauté', methodSlug: 'pan', time: '20 min soak + sauté', heat: 'Boiling water, then medium', fat: 'Butter or olive oil', done: 'Broth strained and mushrooms tender.' },
  { mushroom: 'Shaggy mane', mushroomSlug: 'shaggy-mane', method: 'Butter sauté', methodSlug: 'pan', time: '5–6 min', heat: 'Medium-high, then medium', fat: 'Olive oil and butter', done: 'Soft, lightly colored edges.' },
  { mushroom: 'Maitake', mushroomSlug: 'maitake', method: 'Pan sear', methodSlug: 'pan', time: '10–12 min', heat: 'Medium-high', fat: '2 tbsp oil, butter at finish', done: 'Fronds golden with crisp edges.' },
  { mushroom: 'Maitake', mushroomSlug: 'maitake', method: 'Pressed roast', methodSlug: 'oven', time: '25 min', heat: '420°F / 215°C', fat: 'Olive oil', done: 'Crisp ruffled edges.' },
  { mushroom: 'Lobster', mushroomSlug: 'lobster', method: 'Pan sear', methodSlug: 'pan', time: '8–10 min', heat: 'Medium-high, then medium', fat: 'Olive oil and butter', done: 'Slices browned at the edges, tender centers.' },
  { mushroom: 'Black trumpet', mushroomSlug: 'black-trumpet', method: 'Butter sauté', methodSlug: 'pan', time: '3–4 min', heat: 'Medium-high', fat: 'Butter', done: 'Moisture gone, edges beginning to crisp.' },
  { mushroom: 'Wood ear', mushroomSlug: 'wood-ear', method: 'Blanch + stir-fry', methodSlug: 'pan', time: '2 min blanch + 4 min fry', heat: 'High', fat: '1 tbsp neutral oil', done: 'Edges lightly curled; centers springy.' },
  { mushroom: 'Matsutake', mushroomSlug: 'matsutake', method: 'Butter sear', methodSlug: 'pan', time: '4–6 min', heat: 'Medium-high, then medium', fat: 'Oil, butter to baste', done: 'Golden edges; stems tender but springy.' },
  { mushroom: 'Shimeji', mushroomSlug: 'shimeji', method: 'Garlic-butter sauté', methodSlug: 'pan', time: '4–6 min', heat: 'Medium-high', fat: 'Oil, butter at finish', done: 'Golden caps and a mostly dry pan.' },
  { mushroom: 'King oyster', mushroomSlug: 'king-oyster', method: 'Scallop sear', methodSlug: 'pan', time: '6–8 min', heat: 'High', fat: 'Oil, butter to baste', done: 'Deep gold crust on scored faces.' },
  { mushroom: 'King oyster', mushroomSlug: 'king-oyster', method: 'Oven roast', methodSlug: 'oven', time: '18–22 min', heat: '400°F / 200°C', fat: '1 tbsp oil per 8 oz / 225 g', done: 'Slices tender with browned cut faces.' },
  { mushroom: 'King oyster', mushroomSlug: 'king-oyster', method: 'Grill (planks)', methodSlug: 'grill', time: '6–8 min', heat: 'Medium-high direct, 425–450°F / 220–230°C', fat: 'Oil-based baste, brushed on', done: 'Cut faces striped and gold; center gives easily.' },
  { mushroom: 'Paddy straw', mushroomSlug: 'paddy-straw', method: 'Stir-fry', methodSlug: 'pan', time: '3–5 min', heat: 'High', fat: '1 tbsp neutral oil', done: 'Hot throughout and glossy with sauce.' },
  { mushroom: 'Dried mushrooms', mushroomSlug: 'dried-mushrooms', method: 'Rehydrate + pan finish', methodSlug: 'rehydrate', time: '20–30 min soak + 4 min pan', heat: 'Hot water, then medium', fat: '1 tsp oil or butter, optional', done: 'Mushrooms tender; broth strained clear of grit.' },
  { mushroom: 'Chaga', mushroomSlug: 'chaga', method: 'Culinary infusion', methodSlug: 'simmer', time: '40–50 min', heat: 'Low simmer', fat: 'None', done: 'Liquid deep amber-brown and aromatic.' },
  { mushroom: 'Reishi', mushroomSlug: 'reishi', method: 'Culinary infusion', methodSlug: 'simmer', time: '50–60 min', heat: 'Low simmer', fat: 'None', done: 'Liquid dark, woody, and aromatic; solids strained.' },
  { mushroom: 'Truffles', mushroomSlug: 'truffles', method: 'Raw shave', methodSlug: 'finish', time: 'At serving', heat: 'No direct heat', fat: 'Warm butter or cream dish', done: 'Paper-thin shavings hit warm food.' }
];

const methodGuides: GuideArticle[] = [
  {
    slug: 'how-to-cook-mushrooms', label: 'All mushrooms', badge: 'Start here', title: 'How to Cook Mushrooms So They Brown, Not Steam', description: 'Cook sliced mushrooms in a wide hot skillet for 8–10 minutes, then add garlic butter once the pan is dry and the edges are deep brown.', minutes: '7 min', updated: '2026-07-10', isoTime: 'PT10M', prepIsoTime: 'PT5M', heat: 'Medium-high', cut: '1/4-inch slices', finish: 'Garlic butter, parsley, lemon',
    image: '/images/garlic-butter-mushrooms.webp', imageAlt: 'Golden-brown garlic-butter cremini and white button mushrooms in a cast-iron skillet with parsley',
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
    relatedLinks: [
      { href: '/how-to-cook-frozen-mushrooms/', label: 'How to cook frozen mushrooms' },
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' }
    ],
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
  {
    slug: 'how-to-cook-mushrooms-in-a-pan', label: 'Pan mushrooms', title: 'How to Cook Mushrooms in a Pan', description: 'Cook mushrooms in a hot pan until browned and juicy, with simple timing for tender centers, crisp edges, and a savory finish.', minutes: '6 min', updated: '2026-07-11', image: '/images/cookmushroom-pan-hero.webp', imageAlt: 'Golden-brown garlic-butter button mushrooms with parsley in a cast-iron skillet', isoTime: 'PT12M', prepIsoTime: 'PT10M', heat: 'Medium-high to brown, then medium', cut: 'Quarter small mushrooms; halve or slice large ones into 1/4-inch pieces', finish: 'Lemon juice and fresh parsley',
    recipeName: 'Garlic Butter Pan-Fried Mushrooms', yieldText: '4 side servings',
    ingredients: [
      '1 lb (454 g) cremini or button mushrooms, cleaned and cut',
      '2 tbsp (30 ml) olive oil',
      '2 tbsp (28 g) unsalted butter',
      '2 garlic cloves (6 g), minced',
      '1/2 tsp (3 g) kosher salt',
      '1/4 tsp black pepper',
      '1 tbsp (15 ml) lemon juice',
      '2 tbsp (8 g) chopped fresh parsley'
    ],
    steps: [
      'Heat a large skillet over medium-high heat. Add the olive oil and wait until it shimmers.',
      'Add the mushrooms in one layer. Leave them alone for about 3 minutes, until the bottoms turn brown and the edges begin to crisp.',
      'Toss the mushrooms and cook for 4 to 5 minutes more, stirring occasionally as their liquid cooks away and the pieces become bronze and lightly chewy.',
      'Lower the heat to medium. Add the butter, garlic, salt, and pepper. Cook for 1 to 2 minutes, stirring, until the garlic smells sweet and the butter coats the mushrooms.',
      'Add the lemon juice and parsley. Toss for 30 seconds, then taste and adjust the salt.',
      'Serve immediately while the edges are browned and the centers are juicy.'
    ],
    tips: [
      'Dry mushrooms brown better, so avoid rinsing them unless they are visibly muddy.',
      'Do not crowd the pan. Cook in two batches if the mushrooms cover the skillet.',
      'Add salt after the mushrooms begin to brown so they do not release all their moisture at once.'
    ],
    pairings: ['toasted sourdough', 'steak or roast chicken', 'creamy polenta', 'scrambled eggs', 'buttered noodles'],
    sections: [
      { heading: 'Why this method works', text: 'A hot, uncrowded pan lets mushroom moisture evaporate before the butter goes in. That gives the mushrooms browned edges instead of a soft, steamed texture.' },
      { heading: 'Before you start', text: 'Wipe the mushrooms with a damp towel or brush off dirt. Trim the dry ends, then cut the mushrooms into similar-sized pieces so they finish together.' }
    ],
    relatedLinks: [
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-roast-mushrooms-in-oven/', label: 'How to roast mushrooms in the oven' },
      { href: '/how-to-grill-mushrooms/', label: 'How to grill mushrooms' },
      { href: '/how-to-cook-button-mushrooms/', label: 'How to cook button mushrooms' },
      { href: '/garlic-mushroom-pasta/', label: 'Garlic mushroom pasta recipe' },
      { href: '/how-to-cook-frozen-mushrooms/', label: 'How to cook frozen mushrooms' }
    ],
    faqs: [
      { question: 'Should I wash mushrooms before pan-frying?', answer: 'Brush or wipe them first. If they are muddy, rinse them quickly and dry them very well before cooking.' },
      { question: 'Why are my mushrooms releasing so much water?', answer: 'Mushrooms naturally contain a lot of water. A crowded or cooler pan makes them steam instead of brown.' },
      { question: 'How long do mushrooms take to cook in a pan?', answer: 'Sliced or quartered mushrooms usually take 10 to 12 minutes over medium-high to medium heat.' },
      { question: 'Should I salt mushrooms before cooking?', answer: 'You can, but salting after they begin to brown helps them develop better color and keeps the pan from becoming overly wet.' },
      { question: 'Can I use frozen mushrooms?', answer: 'Yes. Cook them from frozen in a wide skillet until their liquid evaporates, then add oil, butter, and seasonings.' }
    ],
    storage: [
      'Refrigerate leftovers in a covered container within 2 hours.',
      'Use refrigerated cooked mushrooms within 3 to 4 days.',
      'Reheat in a skillet over medium heat until hot; the edges will crisp better than in a microwave.',
      'Freeze cooked mushrooms for up to 2 months for best texture.'
    ],
    variations: [
      'Herb mushrooms: add 1 tsp fresh thyme leaves with the butter.',
      'Creamy mushrooms: stir in 1/4 cup (60 ml) heavy cream after the garlic cooks.',
      'Spicy mushrooms: add 1/4 tsp red pepper flakes with the garlic.',
      'Balsamic mushrooms: replace the lemon juice with 1 tbsp (15 ml) balsamic vinegar.'
    ]
  },
  {
    slug: 'how-to-cook-mushrooms-in-air-fryer', label: 'Air fryer', title: 'How to Cook Mushrooms in an Air Fryer', description: 'Air-fry mushrooms with browned edges and tender centers in minutes. Use dry, evenly cut mushrooms and finish with lemon or herbs.', minutes: '5 min', updated: '2026-07-11', image: '/images/cookmushroom-air-fryer-hero.webp', imageAlt: 'Golden air-fried cremini mushrooms with lemon and parsley', isoTime: 'PT10M', prepIsoTime: 'PT10M', heat: '400°F (200°C)', cut: 'Halve small mushrooms; cut large ones into even 1/2-inch pieces', finish: 'Lemon juice and chopped parsley',
    recipeName: 'Crispy Air-Fryer Mushrooms', yieldText: '4 side servings',
    ingredients: [
      '1 lb (454 g) cremini or button mushrooms, halved or quartered',
      '1 tbsp (15 ml) olive oil',
      '1 tsp (5 ml) soy sauce',
      '1 tsp (3 g) garlic powder',
      '1/2 tsp (1 g) smoked paprika',
      '1/2 tsp (3 g) kosher salt',
      '1/4 tsp black pepper',
      '1 tbsp (15 ml) lemon juice',
      '1 tbsp (4 g) chopped fresh parsley'
    ],
    steps: [
      'Preheat the air fryer to 400°F (200°C) for 3 minutes.',
      'Pat the mushrooms dry. Toss them with the olive oil, soy sauce, garlic powder, paprika, salt, and pepper until evenly coated.',
      'Put the mushrooms in the basket in a loose layer, leaving a little space between pieces.',
      'Air-fry for 5 minutes, then shake the basket so the cut sides turn and the hot air reaches the underside.',
      'Cook for 3 to 5 minutes more, until the edges are browned, the centers are tender, and most of the moisture has cooked away.',
      'Transfer to a bowl and toss with lemon juice and parsley. Serve hot.'
    ],
    tips: [
      'Do not pile mushrooms into a deep layer. Cook in batches if needed.',
      'Dry mushrooms before adding oil; surface water slows browning.',
      'Check early if the pieces are small. Air fryers vary, and thin slices can finish in 7 to 8 minutes.'
    ],
    pairings: ['burgers', 'baked potatoes', 'rice bowls', 'breakfast hash', 'tacos'],
    sections: [
      { heading: 'Why use an air fryer?', text: 'Moving hot air browns the mushroom edges quickly while the centers stay tender. The best results come from a dry basket with enough space for the air to circulate.' },
      { heading: 'Before you start', text: 'Brush off dirt and trim the stems. If the mushrooms need rinsing, dry them thoroughly before seasoning. Cut them evenly so small pieces do not overcook.' }
    ],
    relatedLinks: [
      { href: '/how-to-roast-mushrooms-in-oven/', label: 'How to roast mushrooms in the oven' },
      { href: '/how-to-cook-button-mushrooms/', label: 'How to cook button mushrooms' },
    ],
    faqs: [
      { question: 'How long do mushrooms take in an air fryer?', answer: 'At 400°F (200°C), halved or quartered mushrooms usually take 8 to 12 minutes.' },
      { question: 'Do I need to preheat the air fryer?', answer: 'Preheating helps the mushrooms begin browning as soon as they enter the basket. Three minutes is usually enough.' },
      { question: 'Why are my air-fryer mushrooms soggy?', answer: 'The basket may be overcrowded, or the mushrooms may have gone in wet. Give them space and dry them before seasoning.' },
      { question: 'Can I air-fry whole mushrooms?', answer: 'Yes, but whole mushrooms take longer and brown less evenly. Halving them gives better color and seasoning.' },
      { question: 'Can I use canned mushrooms?', answer: 'Yes, but drain and pat them very dry first. They will be softer than fresh mushrooms and may need only 6 to 8 minutes.' }
    ],
    storage: [
      'Refrigerate cooked mushrooms in a covered container within 2 hours.',
      'Use them within 3 to 4 days.',
      'Reheat in the air fryer at 375°F (190°C) for 3 to 5 minutes.',
      'Freeze cooked mushrooms for up to 2 months, though they may be softer after thawing.'
    ],
    variations: [
      'Ranch-style: replace the paprika with 1 tsp dried ranch seasoning.',
      'Lemon pepper: skip the smoked paprika and use 1/2 tsp lemon pepper.',
      'Parmesan: add 2 tbsp grated Parmesan during the final minute.',
      'Chili-lime: replace the lemon juice with 1 tbsp lime juice and add 1/4 tsp chili powder.'
    ]
  },
  {
    slug: 'how-to-clean-mushrooms', label: 'Cleaning mushrooms', badge: 'Start here', title: 'How to Clean Mushrooms Before Cooking', description: 'Clean mushrooms with a brush, damp towel, or a quick rinse—never a soak. What to use for each variety so they brown instead of steam.', minutes: '4 min', updated: '2026-07-11', isoTime: 'PT5M', prepIsoTime: 'PT2M', heat: 'No heat', cut: 'Clean whole before cutting', finish: 'Dry completely before cooking', showCookTimes: false,
    quickFacts: [
      { label: 'Tools', value: 'Soft brush or damp towel' },
      { label: 'Time', value: '2–5 minutes' },
      { label: 'Water', value: 'Quick rinse only if muddy' },
      { label: 'Rule', value: 'Dry completely before the pan' },
    ],
    image: '/images/cookmushroom-cleaning-hero.webp', imageAlt: 'Hands brushing dirt from cremini mushrooms beside a damp towel and colander',
    steps: [
      'Brush off loose dirt with a soft mushroom brush or a dry paper towel.',
      'Wipe any remaining soil with a barely damp towel.',
      'If mushrooms are muddy, rinse them briefly in a colander under cool running water instead of soaking them.',
      'Spread them on a clean towel and pat dry until the caps and stems no longer feel wet.',
      'Trim only the dry stem ends, then cut and cook the mushrooms right away.'
    ],
    tips: [
      'A short rinse does not ruin mushrooms; leaving surface water on them slows browning.',
      'Lift grit-prone mushrooms out of rinse water instead of pouring the water over them again.',
      'Clean mushrooms just before cooking, not before storage.'
    ],
    pairings: ['the pan mushroom method', 'air-fryer mushrooms', 'roasted mushrooms', 'garlic-butter mushrooms'],
    sections: [
      { heading: 'The 30-second answer', text: 'Brush or wipe most mushrooms clean. Use a quick rinse only when they are truly muddy, then dry them thoroughly. Never leave mushrooms soaking in a bowl of water.' },
      { heading: 'The golden rule', quote: 'Clean mushrooms quickly, then dry them completely before they reach a hot pan.' },
      { heading: 'Why soaking gets in the way', text: 'Mushrooms already release water as they cook. Soaking leaves extra water on and in the surface, which keeps the pan wet longer and delays the browned edges you want.' },
      { heading: 'Choose the right tool', bullets: ['Soft brush: best for loose soil on smooth button, cremini, portobello, and king oyster caps.', 'Damp towel: useful for a few stubborn spots when the mushrooms are otherwise clean.', 'Colander rinse: use for muddy mushrooms, then dry them on a towel right away.'] },
      { heading: 'Clean by variety', bullets: ['Smooth caps: brush or wipe button, cremini, and portobello mushrooms.', 'Delicate clusters: trim the base of oyster, enoki, or shimeji, then brush or rinse gently and dry well.', 'Folded wild types: market-purchased chanterelles, morels, and black trumpets can trap grit; brush first, then rinse briefly only if needed.', 'Dense stems: wipe lobster and king oyster mushrooms; trim the dry end instead of peeling them.'] },
      { heading: 'Sliced, pre-cut, and stored mushrooms', text: 'Use pre-sliced mushrooms as packed unless you can see dirt. If you rinse them, dry them especially well because their cut surfaces hold water. Keep fresh mushrooms unwashed in a paper bag, then clean them immediately before cooking.' }
    ],
    faqs: [
      { question: 'Should you wash mushrooms or just wipe them?', answer: 'Brush or wipe lightly soiled mushrooms. A brief rinse is fine when they are muddy, as long as you dry them thoroughly before cooking.' },
      { question: 'Can you soak mushrooms to clean them?', answer: 'No. Soaking leaves them waterlogged and makes browning harder. Use a brief rinse instead when water is necessary.' },
      { question: 'How do you clean baby bella mushrooms?', answer: 'Baby bella mushrooms are cremini mushrooms. Brush or wipe the caps, trim dry stem ends, and rinse only if visible soil remains.' },
      { question: 'How do you get grit out of morels or wild mushrooms?', answer: 'Use only market-purchased mushrooms or mushrooms verified by a qualified expert. Halve hollow morels, brush away loose grit, rinse briefly if needed, then dry them well.' },
      { question: 'Do pre-sliced mushrooms need cleaning?', answer: 'Usually no. If they are visibly dirty, rinse them briefly and dry the cut surfaces very well before cooking.' }
    ],
    storage: [
      'Keep fresh mushrooms unwashed in a paper bag in the refrigerator until you are ready to cook.',
      'Use cleaned mushrooms immediately when possible; surface moisture shortens their best texture window.',
      'If you must hold cleaned mushrooms, refrigerate them loosely covered on a towel and use them the same day.'
    ],
    variations: [
      'Muddy caps: rinse in a colander for a few seconds, then dry on a towel.',
      'Morels: halve lengthwise so you can inspect the hollow center before cooking.',
      'Pre-sliced mushrooms: skip rinsing unless dirt is visible, then dry the cut sides well.'
    ],
    relatedLinks: [
      { href: '/how-to-cook-cremini-mushrooms/', label: 'How to cook cremini mushrooms' },
      { href: '/how-to-cook-oyster-mushrooms/', label: 'How to cook oyster mushrooms' },
      { href: '/how-to-cook-chanterelle-mushrooms/', label: 'How to cook chanterelle mushrooms' },
      { href: '/how-to-cook-morel-mushrooms/', label: 'How to cook morel mushrooms' },
      { href: '/how-to-cook-king-oyster-mushrooms/', label: 'How to cook king oyster mushrooms' },
      { href: '/how-to-cook-portobello-mushrooms/', label: 'How to cook portobello mushrooms' },
    ]
  },
  {
    slug: 'how-to-cook-dried-mushrooms', mushroomSlug: 'dried-mushrooms', label: 'Dried mushrooms', badge: 'Broth included', title: 'How to Cook Dried Mushrooms: Rehydrate and Use the Broth', description: 'Rehydrate dried mushrooms in hot water for 20–30 minutes, strain the soaking liquid, and use both in soups, pasta, risotto, and rice.', minutes: '6 min', updated: '2026-07-11', isoTime: 'PT4M', prepIsoTime: 'PT25M', heat: 'Hot-water soak, then medium pan', cut: 'Slice after rehydrating', finish: 'Strained broth into the dish',
    image: '/images/cookmushroom-dried-rehydrate-hero.webp', imageAlt: 'Dried porcini mushrooms soaking in amber liquid beside a jug of strained mushroom broth',
    recipeName: 'Rehydrated Mushrooms with Strained Mushroom Broth', yieldText: 'About 1 cup rehydrated mushrooms and 1 1/2 cups broth',
    ingredients: [
      '1 oz (28 g) dried mushrooms, such as porcini, shiitake, morels, or a mixed pack',
      '2 cups (475 ml) hot water',
      '1 tsp olive oil or butter, optional for a pan finish',
      'Fine salt and black pepper, to taste'
    ],
    steps: [
      'Put the dried mushrooms in a heatproof bowl and cover with the hot water.',
      'Soak for 20 to 30 minutes, until the mushrooms are pliable and the liquid is deep brown.',
      'Lift the mushrooms out with tongs or a slotted spoon. Do not pour the bowl out yet because grit settles at the bottom.',
      'Strain the soaking liquid through a fine-mesh sieve lined with a paper towel or coffee filter.',
      'Squeeze the softened mushrooms gently, trim any tough stems, and slice larger pieces.',
      'For a quick finish, warm oil or butter in a skillet over medium heat and cook the mushrooms for 3 to 4 minutes. Add the strained broth to the dish, not the pan, unless you want a sauce.'
    ],
    tips: [
      'Hot water works quickly, but avoid a rolling boil that can make delicate dried mushrooms tougher.',
      'Always strain the soaking liquid; a clear-looking bowl can still hold fine grit.',
      'Use the rehydrated mushrooms for tenderness and the broth for concentrated flavor.'
    ],
    pairings: ['pasta', 'risotto', 'ramen', 'rice', 'gravy', 'cream sauces'],
    sections: [
      { heading: 'Why this method works', text: 'Drying concentrates mushroom flavor. A soak gives you two useful ingredients: tender mushrooms for the dish and a savory broth for the sauce, stock, or rice.' },
      { heading: 'Soak times by mushroom', bullets: ['Porcini: soak about 20 minutes, then slice or chop.', 'Shiitake: soak 25 to 30 minutes; remove tough stems after softening.', 'Wood ear: soak until fully expanded, then rinse, trim, and cook thoroughly.', 'Morels: soak 15 to 20 minutes, rinse away any remaining grit, and cook thoroughly.'] },
      { heading: 'Use the strained broth', text: 'Stir the broth into pasta sauce, replace part of risotto stock, add it to a ramen base, cook rice with it, or reduce it into gravy. Keep the last spoonful in the bowl if you can see sediment.' },
      { heading: 'What to expect', text: 'Rehydrated mushrooms are tender and savory, but they do not sear as crisply as fresh mushrooms. Use a brief pan finish for color, then let the broth carry the deeper flavor.' }
    ],
    faqs: [
      { question: 'How long do you soak dried mushrooms?', answer: 'Most dried mushrooms need 20 to 30 minutes in hot water. Thin or delicate pieces can soften sooner; dense shiitakes may need the full half hour.' },
      { question: 'Can you use boiling water?', answer: 'Use hot water rather than aggressively boiling water. It rehydrates mushrooms quickly while being gentler on their texture.' },
      { question: 'Do you have to strain the soaking liquid?', answer: 'Yes. Fine grit settles in the bowl, so strain the liquid through a fine sieve lined with paper towel or a coffee filter.' },
      { question: 'Can you cook dried mushrooms without soaking?', answer: 'Not for this method. Dried mushrooms need moisture to become tender; add them directly only when a soup or braise gives them enough time and liquid to rehydrate.' },
      { question: 'How do you store leftover mushroom broth?', answer: 'Cool strained broth promptly and refrigerate it in a covered container for up to 3 days, or freeze it in small portions.' },
      { question: 'Are dried mushrooms as good as fresh?', answer: 'They are different. Dried mushrooms bring concentrated flavor and broth, while fresh mushrooms give a firmer, browner texture.' }
    ],
    storage: [
      'Keep unopened dried mushrooms sealed in a cool, dry cupboard.',
      'Refrigerate rehydrated mushrooms in a covered container and use within 2 days.',
      'Cool strained broth promptly and refrigerate for up to 3 days or freeze in portions.'
    ],
    variations: [
      'Pasta: reduce 1/2 cup strained broth with cream, butter, or tomato sauce.',
      'Risotto: replace part of the stock with warm strained broth.',
      'Ramen: add strained broth to the base, then finish with rehydrated shiitakes or porcini.'
    ],
    relatedLinks: [
      { href: '/how-to-cook-porcini-mushrooms/', label: 'How to cook porcini mushrooms' },
      { href: '/how-to-cook-shiitake-mushrooms/', label: 'How to cook shiitake mushrooms' },
      { href: '/how-to-cook-wood-ear-mushrooms/', label: 'How to cook wood ear mushrooms' },
      { href: '/how-to-cook-morel-mushrooms/', label: 'How to cook morel mushrooms' },
      { href: '/shiitake-mushroom-ramen/', label: 'Shiitake mushroom ramen recipe' },
      { href: '/how-to-cook-frozen-mushrooms/', label: 'How to cook frozen mushrooms' },
      { href: '/garlic-mushroom-pasta/', label: 'Garlic mushroom pasta recipe' }
    ]
  },
  {
    slug: 'how-to-roast-mushrooms-in-oven', mushroomSlug: 'button-cremini', label: 'Oven-roasted mushrooms', badge: 'Hands-off batch', title: 'How to Roast Mushrooms in the Oven (Crisp, Not Soggy)', description: 'Roast mushrooms at 400°F for 20–25 minutes on an uncrowded sheet pan, flipping once, until browned and concentrated—not steamed or soggy.', minutes: '6 min', updated: '2026-07-11', isoTime: 'PT25M', prepIsoTime: 'PT10M', heat: '400°F / 200°C', cut: 'Halved, even pieces', finish: 'Balsamic and thyme out of the oven',
    image: '/images/cookmushroom-oven-roast-hero.webp', imageAlt: 'Halved cremini mushrooms roasted on a sheet pan with thyme and balsamic nearby',
    recipeName: 'Crispy Oven-Roasted Mushrooms', yieldText: '4 side servings',
    ingredients: [
      '1 lb (454 g) button or cremini mushrooms, halved',
      '1 tbsp (15 ml) olive oil',
      '1/2 tsp kosher salt',
      '1/4 tsp black pepper',
      '1 tsp fresh thyme leaves',
      '1 tsp balsamic vinegar'
    ],
    steps: [
      'Heat the oven to 400°F (200°C). Set a large rimmed sheet pan inside for 5 minutes if you want a stronger first sizzle.',
      'Pat the mushrooms dry and halve them so the pieces are similar in size.',
      'Toss the mushrooms with olive oil and pepper. Spread them cut-side down in one loose layer on the hot or room-temperature pan.',
      'Roast for 15 minutes, then turn the mushrooms and scatter over the salt and thyme.',
      'Roast for 5 to 10 minutes more, until the edges are browned, the centers are tender, and the pan has no pooled liquid.',
      'Move the mushrooms to a bowl and toss with balsamic vinegar. Serve hot.'
    ],
    tips: [
      'Use two sheet pans when a pound of mushrooms overlaps heavily.',
      'A shallow rimmed pan lets steam escape better than a deep roasting dish.',
      'Parchment is fine at 400°F, but bare metal usually gives the cut sides more color.'
    ],
    pairings: ['steak', 'pasta', 'grain bowls', 'eggs', 'roast chicken', 'toast'],
    sections: [
      { heading: 'Why roasting works', text: 'A hot oven is the easiest way to cook a pound or more of mushrooms at once. Give the pieces room on a sheet pan and the moisture can evaporate instead of collecting in a crowded dish.' },
      { heading: 'Choose the temperature', bullets: ['375°F / 190°C: gentler for delicate mushrooms that can dry quickly.', '400°F / 200°C: the default for button and cremini mushrooms.', '425°F / 220°C: useful for thick portobello caps and dense king oyster slices; watch the edges closely.'] },
      { heading: 'Times by variety', bullets: ['Button or cremini: 20 to 25 minutes at 400°F / 200°C.', 'Oyster: 15 to 18 minutes at 400°F / 200°C.', 'King oyster slices: 18 to 22 minutes at 400°F / 200°C.', 'Portobello caps: 15 to 20 minutes at 425°F / 220°C.'] },
      { heading: 'Sheet-pan rules', text: 'Do not crowd the pan, and do not add watery vegetables until the mushrooms have started browning. Flip once at about 15 minutes, then finish when the pan looks dry and the cut edges are bronzed.' }
    ],
    faqs: [
      { question: 'What temperature is best for roasting mushrooms?', answer: 'Use 400°F (200°C) for button and cremini mushrooms. Raise the oven to 425°F (220°C) for thick portobello caps or dense king oyster slices.' },
      { question: 'How long do mushrooms take at 400°F?', answer: 'Halved button or cremini mushrooms usually take 20 to 25 minutes, with one turn after about 15 minutes.' },
      { question: 'Should you flip mushrooms when roasting?', answer: 'Yes. Turn them once after the first 15 minutes so the exposed sides can brown and the pan can finish drying.' },
      { question: 'Why did my roasted mushrooms come out soggy?', answer: 'The pan was crowded, the mushrooms went in wet, or the oven was too cool. Use a wide sheet pan, dry the mushrooms, and roast in a loose layer.' },
      { question: 'Can you roast mushrooms with vegetables?', answer: 'Yes, but choose dry, quick-roasting vegetables or use a second pan. Watery vegetables can make the mushrooms steam.' },
      { question: 'Do you need to pre-cook mushrooms before roasting?', answer: 'No. Start with dry, evenly cut mushrooms and give them room on the sheet pan.' }
    ],
    storage: [
      'Refrigerate cooled roasted mushrooms in a covered container for up to 3 days.',
      'Reheat on a sheet pan at 400°F (200°C) for 5 to 8 minutes, until hot and dry at the edges.',
      'Freeze only when you plan to use the mushrooms later in sauce, soup, or a filling.'
    ],
    variations: [
      'Garlic: add sliced garlic for the final 8 minutes so it does not burn.',
      'Soy-sesame: replace balsamic with 2 tsp soy sauce and finish with a few drops of sesame oil.',
      'Lemon-herb: replace balsamic with lemon juice and parsley after roasting.'
    ],
    relatedLinks: [
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-cook-mushrooms-in-air-fryer/', label: 'How to cook mushrooms in an air fryer' },
      { href: '/how-to-cook-cremini-mushrooms/', label: 'How to cook cremini mushrooms' },
      { href: '/how-to-cook-portobello-mushrooms/', label: 'How to cook portobello mushrooms' },
      { href: '/how-to-cook-king-oyster-mushrooms/', label: 'How to cook king oyster mushrooms' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
    ]
  },
  {
    slug: 'how-to-grill-mushrooms', mushroomSlug: 'button-cremini', label: 'Grilled mushrooms', badge: 'Grill season', title: 'How to Grill Mushrooms (Caps, Skewers, and Foil Packets)', description: 'Grill mushrooms over medium-high direct heat for 8–12 minutes. Whole caps go on the grate, small mushrooms on skewers, delicate ones in foil.', minutes: '7 min', updated: '2026-08-01', image: '/images/cookmushroom-grilled-mushrooms-hero.webp', imageAlt: 'Garlic-herb cremini and white button mushroom skewers with grill marks over glowing coals', isoTime: 'PT12M', prepIsoTime: 'PT15M', heat: 'Medium-high direct heat, 425–450°F / 220–230°C', cut: 'Whole if small; halve larger mushrooms; 1/2-inch planks for dense stems', finish: 'Garlic-herb baste and lemon off the grill',
    recipeName: 'Garlic-Herb Grilled Mushroom Skewers', yieldText: '4 servings as a side',
    ingredients: [
      '1 1/2 lb (680 g) cremini or white button mushrooms, whole if small or halved if large',
      '3 tbsp (45 ml) olive oil',
      '2 tbsp (28 g) unsalted butter, melted',
      '3 garlic cloves (9 g), finely grated',
      '1 tbsp (15 ml) soy sauce or tamari',
      '1 tsp (5 ml) lemon juice, plus more to finish',
      '1 tbsp (3 g) chopped fresh thyme or rosemary',
      '1/2 tsp (2.5 g) kosher salt',
      '1/4 tsp freshly ground black pepper',
      '8 metal skewers, or bamboo skewers soaked in water for 30 minutes'
    ],
    steps: [
      'Brush or wipe the mushrooms clean and dry them well. Leave small mushrooms whole and halve any that are wider than about 1 1/2 inches so every piece is the same thickness.',
      'Whisk the olive oil, melted butter, garlic, soy sauce, lemon juice, herbs, salt, and pepper into a baste. Reserve about a third of it in a separate bowl for after grilling.',
      'Thread the mushrooms onto skewers through the cap and stem, leaving a small gap between pieces so heat can reach the sides. Brush them with the baste.',
      'Heat the grill to medium-high, about 425–450°F (220–230°C), and scrape the grates clean. Oil the grates with a folded paper towel held in tongs.',
      'Lay the skewers over direct heat. Grill for 3 minutes without moving them, until the contact points show grill marks.',
      'Turn the skewers a quarter rotation every 2 to 3 minutes for 8 to 12 minutes total, brushing with baste after each turn, until the mushrooms have shrunk, darkened, and feel tender when pierced.',
      'Move the skewers to a platter, brush with the reserved clean baste, and add a final squeeze of lemon. Serve hot.'
    ],
    tips: [
      'Dry mushrooms take grill marks; wet ones steam. Clean them ahead of time and let the surface dry before the baste goes on.',
      'Keep a third of the baste back before it touches raw mushrooms so you have a clean sauce for the platter.',
      'Two skewers side by side through each mushroom stop the pieces from spinning when you turn them.',
      'Mushrooms shrink by roughly half on the grill. Buy more than looks necessary.'
    ],
    pairings: ['steak', 'grilled chicken', 'burgers', 'couscous', 'grilled corn', 'crusty bread'],
    sections: [
      { heading: 'What this page covers, and what it does not', text: 'This is the cross-variety grilling method: how to set up the fire, which mushrooms suit the grate, the skewer, or the foil packet, and how to tell each one is done. Whole portobello caps have their own marinade and timing on the portobello guide, and scored king oyster medallions are covered on the king oyster guide. Start here to choose the approach, then follow those pages for their specific recipes.' },
      { heading: 'Set up the grill before the mushrooms', text: 'Mushrooms grill fast and burn faster, so the fire matters more than the seasoning. Build a two-zone fire: coals banked to one side, or half the gas burners on high and the rest off. The hot zone gives the char, and the cool zone is where anything cooking too fast can finish without scorching. Scrape the grates while they are hot, then wipe them with oil so the caps release cleanly.' },
      { heading: 'Three ways to get mushrooms over fire', bullets: ['Straight on the grate: for anything wide enough not to fall through — portobello caps, thick king oyster planks, large shiitake caps, halved lengthwise clusters of maitake.', 'Skewers: for button, cremini, and small shiitake. Threading them keeps the pieces together and lets you turn eight at once.', 'Foil packets: for oyster clusters, enoki, shimeji, and anything small or fragile. The mushrooms steam in their own liquid with butter and aromatics, then get a minute on the open grate at the end if you want color.'], text: 'A perforated grill basket is a fourth option and works like a hybrid of the skewer and the foil packet: pieces stay contained but still get direct heat.' },
      { heading: 'Grill times by variety', bullets: ['Button or cremini on skewers: 8–12 minutes total, quarter-turning every 2–3 minutes.', 'Portobello caps, whole: 8–12 minutes, gill-side down first, turned once.', 'King oyster planks, 1/2-inch thick: 6–8 minutes, turned once at the halfway point.', 'Shiitake caps, stems removed: 6–8 minutes, cap-side down first.', 'Oyster or maitake clusters: 4–6 minutes on the grate, or 8–10 minutes in a foil packet.', 'Enoki or shimeji bundles: 8–10 minutes in a foil packet only. They fall through and scorch on an open grate.'] },
      { heading: 'How to tell grilled mushrooms are done', text: 'Look for three signs together: the mushrooms have visibly shrunk, the surface has gone from matte to glossy as their juices come out, and a skewer or paring knife slides through the thickest part with no resistance. Grill marks alone are not doneness — a mushroom can be striped on the outside and squeaky in the middle. If the outside is charring before the center softens, move the pieces to the cool zone and close the lid for two minutes.' },
      { heading: 'Marinate or baste?', text: 'Baste. A long soak in a wet marinade loads the mushroom with liquid that then has to boil off on the grate, which is how grilled mushrooms end up steamed and floppy. Brushing oil, garlic, and herbs on before and during grilling puts the flavor on the surface where the fire can work on it. Salt goes on with the baste rather than an hour ahead, for the same reason.' },
      { heading: 'The one rule that decides everything', quote: 'Dry mushroom, hot grate, oil on the surface — not in the mushroom.' }
    ],
    faqs: [
      { question: 'How long do mushrooms take on the grill?', answer: 'Most take 8 to 12 minutes over medium-high direct heat. Button and cremini on skewers need 8 to 12 minutes with a quarter turn every 2 to 3 minutes; whole portobello caps take 8 to 12; king oyster planks and shiitake caps take 6 to 8.' },
      { question: 'What temperature should the grill be for mushrooms?', answer: 'Medium-high, about 425–450°F (220–230°C). Hotter than that chars the outside before the center is tender; much cooler and the mushrooms release their water and stew instead of browning.' },
      { question: 'Do you have to soak mushrooms before grilling?', answer: 'No. Soaking waterlogs them. Brush them clean, dry them, and brush on an oil-based baste instead — the fat carries the seasoning and helps the surface brown.' },
      { question: 'How do you keep mushrooms from falling through the grill grates?', answer: 'Thread small mushrooms onto skewers, use a perforated grill basket, or wrap fragile varieties like oyster and enoki in a foil packet. Only caps wider than the grate spacing belong directly on the bars.' },
      { question: 'Should you grill mushrooms gill-side up or down?', answer: 'Gill-side down first. The gills face the fire while the cap holds its shape, and when you turn the cap over the released juices collect in the bowl instead of dripping into the coals.' },
      { question: 'Can you grill mushrooms in foil?', answer: 'Yes, and it is the right method for small or delicate varieties. Seal them in a foil packet with butter and aromatics and cook for 8 to 10 minutes; the mushrooms steam in their own liquid. Open the packet for the last minute over direct heat if you want browned edges.' },
      { question: 'Why did my grilled mushrooms turn out rubbery?', answer: 'They came off too early. Rubbery means the interior water has not cooked away yet. Keep going until the pieces have shrunk noticeably and a knife meets no resistance — usually a few minutes past the point the grill marks appear.' }
    ],
    storage: [
      'Refrigerate grilled mushrooms in a covered container for up to 3 days. Pull them off the skewers first so they cool faster.',
      'Reheat in a hot skillet for 2 to 3 minutes rather than a microwave; the pan dries the surface again instead of softening it.',
      'Grilled mushrooms are good cold. Chop leftovers into grain bowls, sandwiches, or a salad with vinaigrette.',
      'Freeze cooled grilled mushrooms in a sealed container for up to 2 months, and plan to use them in sauces or fillings where a softer texture does not matter.'
    ],
    variations: [
      'Balsamic: replace the lemon juice with 1 tbsp balsamic vinegar and brush it on only during the final two minutes so the sugars do not burn.',
      'Smoky: add 1/2 tsp smoked paprika to the baste, or drop a handful of soaked wood chips onto the coals once the skewers go on.',
      'Miso-butter: whisk 1 tbsp white miso into the melted butter and skip the soy sauce.',
      'Mixed skewers: alternate mushrooms with red onion wedges and cherry tomatoes; keep the pieces the same thickness so everything finishes together.',
      'Chimichurri: skip the herbs in the baste and spoon chimichurri over the platter instead.'
    ],
    relatedLinks: [
      { href: '/how-to-cook-portobello-mushrooms/', label: 'How to cook portobello mushrooms' },
      { href: '/how-to-cook-king-oyster-mushrooms/', label: 'How to cook king oyster mushrooms' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-roast-mushrooms-in-oven/', label: 'How to roast mushrooms in the oven' },
      { href: '/how-to-cook-oyster-mushrooms/', label: 'How to cook oyster mushrooms' },
      { href: '/how-to-cook-shiitake-mushrooms/', label: 'How to cook shiitake mushrooms' },
      { href: '/mushroom-cook-time-chart/', label: 'Mushroom cook time chart' },
    ]
  }
];

const speciesGuides: GuideArticle[] = [
  {
    slug: 'how-to-cook-frozen-mushrooms', label: 'Frozen mushrooms', badge: 'No thawing', title: 'How to Cook Frozen Mushrooms (Without Thawing)', description: 'Cook frozen mushrooms straight from the freezer in a hot dry pan. Skip the thaw, drive off the ice water, then brown and season at the end.', minutes: '5 min', updated: '2026-08-01', isoTime: 'PT12M', prepIsoTime: 'PT2M', heat: 'Medium-high, dry pan first', cut: 'Use as frozen', finish: 'Butter and salt at the end',
    image: '/images/cookmushroom-frozen-mushrooms-hero.webp', imageAlt: 'Frozen mushroom pieces cooking in a hot skillet with steam rising as the ice water evaporates',
    recipeName: 'Skillet Frozen Mushrooms', yieldText: '2–3 side servings',
    quickFacts: [
      { label: 'Thaw first?', value: 'No — cook from frozen' },
      { label: 'Pan', value: 'Dry and hot, no oil to start' },
      { label: 'Time', value: '10–14 minutes' },
      { label: 'Best for', value: 'Sautés, soups, sauces, pasta' },
    ],
    showCookTimes: false,
    ingredients: [
      '1 lb (454 g) frozen mushrooms, straight from the freezer',
      '1 tbsp (15 ml) neutral oil',
      '2 tbsp (28 g) unsalted butter',
      '2 garlic cloves, minced',
      '1/2 tsp kosher salt',
      '1/4 tsp black pepper',
      '1 tsp fresh thyme leaves or chopped parsley (optional)'
    ],
    steps: [
      'Do not thaw. Take the mushrooms straight from the freezer — thawed mushrooms leak their water onto the cutting board and go limp before they ever reach the pan.',
      'Heat a wide skillet over medium-high for 2 minutes. Add the frozen mushrooms to the dry pan with no oil. They will hiss and release ice water immediately.',
      'Cook 6 to 8 minutes, stirring occasionally, letting the water boil off. The pan will look flooded at first; keep going until the liquid is gone and you hear sizzling instead of bubbling.',
      'Add the oil once the pan is dry. Spread the mushrooms in one layer and leave them undisturbed for 2 to 3 minutes so the edges can brown.',
      'Lower the heat to medium. Add the butter, garlic, salt, and pepper and cook 1 minute more, until the garlic is fragrant and the mushrooms are glossy.',
      'Stir in the herbs off the heat and serve. Expect softer mushrooms than fresh — freezing ruptures the cell walls, and no technique fully reverses that.'
    ],
    tips: [
      'Oil added at the start just floats on the melting ice and spits. Wait until the pan is dry.',
      'Frozen mushrooms release far more liquid than fresh, so use a wider pan than you think you need.',
      'Never refreeze mushrooms that have thawed. The texture collapses and the water loss is permanent.',
      'Commercially frozen mushrooms are usually blanched first, so they soften faster than ones you froze at home raw.'
    ],
    pairings: ['soups', 'pasta sauces', 'gravy', 'risotto', 'omelets', 'stews'],
    sections: [
      { heading: 'Why you should not thaw frozen mushrooms', text: 'Mushrooms are roughly 90 percent water. Freezing turns that water into ice crystals that puncture the cell walls, so a thawed mushroom slumps and weeps liquid before it ever hits heat. Cooking from frozen skips that stage: the ice goes straight to steam in a hot pan, and the mushrooms hold their shape long enough to brown at the end.' },
      { heading: 'What frozen mushrooms are good for', text: 'Frozen mushrooms will never sear like fresh ones — the texture is softer no matter how carefully you cook them. That makes them excellent where they are one component among many, and poor where they are the star.', bullets: ['Good: soups, stews, pasta sauces, gravies, risotto, pizza toppings, omelets.', 'Poor: standalone sautéed side dishes, salads, anything raw, or dishes where a firm bite is the point.', 'If you want a browned mushroom side, buy fresh — see the pan guide for the method.'] },
      { heading: 'Freezing mushrooms yourself', text: 'If you are freezing your own, cook them first. Sauté or steam them, cool them completely, then freeze in a single layer before bagging. Raw home-frozen mushrooms hold far less structure than commercially blanched ones and turn watery on cooking.' }
    ],
    faqs: [
      { question: 'Can you cook mushrooms straight from frozen?', answer: 'Yes, and you should. Put them in a hot dry pan without thawing and let the ice water boil off first. Thawing beforehand makes them limp and watery.' },
      { question: 'Why are my frozen mushrooms slimy?', answer: 'Either they were thawed before cooking, or the water was never fully driven off in the pan. Keep cooking until the liquid has evaporated and you hear sizzling rather than bubbling.' },
      { question: 'Do frozen mushrooms taste as good as fresh?', answer: 'The flavor holds up well; the texture does not. Use them where softness does not matter — soups, sauces, gravies — and use fresh when you want browned, meaty pieces.' },
      { question: 'Do you need to wash frozen mushrooms?', answer: 'No. Commercially frozen mushrooms are cleaned before freezing, and rinsing only adds more water for you to cook off.' },
      { question: 'How long do frozen mushrooms keep?', answer: 'About 9 to 12 months at 0°F / −18°C for commercially frozen, and closer to 3 months for ones you cooked and froze at home. They stay safe longer but lose flavor.' }
    ],
    storage: [
      'Keep frozen at 0°F / −18°C until the moment you cook; do not let the bag sit out on the counter.',
      'Cooked leftovers keep in the fridge for up to 3 days in an airtight container.',
      'Never refreeze thawed mushrooms — texture and food safety both suffer.',
      'To freeze your own: sauté or steam first, cool completely, freeze in a single layer, then bag for up to 3 months.'
    ],
    variations: [
      'Straight to soup: skip the browning step and add the frozen mushrooms directly to simmering broth.',
      'Cream sauce: after browning, add 1/2 cup heavy cream and reduce 3 minutes, then toss with pasta.',
      'Garlic butter toast: chop finer after cooking and pile onto sourdough with the pan butter.',
      'Gravy base: deglaze the browned mushrooms with stock and thicken with a cornstarch slurry.'
    ],
    relatedLinks: [
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' },
      { href: '/how-to-cook-mushrooms/', label: 'How to cook mushrooms so they brown, not steam' },
      { href: '/how-to-cook-cremini-mushrooms/', label: 'How to cook cremini mushrooms' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' }
    ]
  },
  // ── TEMPLATE EXEMPLAR ─────────────────────────────────────────────────────
  // This guide carries every field of the full recipe template: intro sections,
  // ingredients (triggers Recipe schema), FAQs, storage, and variations.
  // Grow every other guide into this shape.
  {
    slug: 'how-to-cook-chanterelle-mushrooms', mushroomSlug: 'chanterelles', label: 'Golden chanterelles', badge: 'Foraging essential', title: 'How to Cook Chanterelle Mushrooms (Dry-Sauté Method)', description: 'Dry-sauté chanterelles until their water cooks off, then add butter, shallot, and thyme for tender centers and lightly crisp edges.', minutes: '7 min', updated: '2026-07-11', isoTime: 'PT10M', prepIsoTime: 'PT5M', heat: 'Hot pan, then medium', cut: 'Tear large pieces', finish: 'Butter, shallot, thyme',
    image: '/images/chanterelles-skillet.webp', imageAlt: 'Golden chanterelle mushrooms with butter, shallot, and thyme in a cast-iron skillet',
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
    relatedLinks: [
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
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
    slug: 'how-to-cook-morel-mushrooms', mushroomSlug: 'morels', label: 'Morels', badge: 'Spring luxury', title: 'How to Cook Morel Mushrooms', description: 'Learn how to clean and cook morel mushrooms safely with butter, garlic, and herbs for a crisp outside and tender, earthy center.', minutes: '7 min', updated: '2026-07-11', image: '/images/cookmushroom-morel-hero.webp', imageAlt: 'Butter-seared morel mushrooms with lemon in a cast-iron skillet', isoTime: 'PT15M', prepIsoTime: 'PT20M', heat: 'Medium, then medium-low', cut: 'Halve lengthwise to inspect and clean the cavities', finish: 'Lemon juice and fresh chives',
    recipeName: 'Buttery Pan-Cooked Morel Mushrooms', yieldText: '2 side servings',
    ingredients: [
      '6 oz (170 g) fresh morel mushrooms, market-purchased or expert-verified, halved',
      '2 tbsp (28 g) unsalted butter',
      '1 tbsp (15 ml) olive oil',
      '1 small shallot, about 2 oz (56 g), finely chopped',
      '1 garlic clove (3 g), minced',
      '1/2 tsp (3 g) kosher salt',
      '1/4 tsp black pepper',
      '1 tbsp (3 g) chopped fresh chives',
      '1 tsp (5 ml) lemon juice'
    ],
    steps: [
      'Halve each morel lengthwise and inspect the cavities. Brush or quickly rinse away dirt, then pat the mushrooms very dry.',
      'Heat the olive oil and 1 tbsp of the butter in a wide skillet over medium heat.',
      'Add the shallot and cook for 2 minutes, until soft and lightly sweet.',
      'Add the morels in one layer, cut side down. Cook for 4 minutes without moving them, until the bottoms are browned and their moisture begins to evaporate.',
      'Turn the morels. Add the remaining butter, garlic, salt, and pepper. Lower the heat to medium-low and cook for 6 to 7 minutes, turning once, until the mushrooms are tender and fully cooked throughout.',
      'Add the chives and lemon juice. Toss for 30 seconds, then serve hot.'
    ],
    tips: [
      'If the source or identification is uncertain, do not cook or eat the mushrooms.',
      'Dry the morels well after cleaning so they brown instead of boil.',
      'Keep the pan in a single layer. Cook in batches if necessary.'
    ],
    pairings: ['toasted country bread', 'soft polenta', 'scrambled eggs', 'roast chicken', 'creamy pasta'],
    sections: [
      { heading: 'Safety first', text: 'Use morels purchased from a reputable market or a wild sample verified by a qualified mushroom expert. Never eat an unknown wild mushroom. Clean morels carefully and cook them thoroughly; do not eat them raw or undercooked.' },
      { heading: 'Identification: true morels vs. false morels', bullets: ['True morels have a distinctive cap covered in deeply pitted honeycomb-like hollows.', 'Slice the mushroom completely from top to bottom. True morels are 100% hollow.'] },
      { heading: 'Why halve morels?', text: 'The hollow stems and honeycomb caps can hold grit or small insects. Halving them makes those spaces easy to inspect and lets heat reach the center. Brush away loose dirt; if needed, place the halved morels in cool water for up to 5 minutes, lift them out, rinse once, and dry them well. Do not leave them soaking.' }
    ],
    relatedLinks: [
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' },
    ],
    faqs: [
      { question: 'Can I eat morel mushrooms raw?', answer: 'No. Morels should be cooked thoroughly and served hot. Do not eat them raw or undercooked.' },
      { question: 'How should I clean morel mushrooms?', answer: 'Halve them lengthwise, brush away dirt, and briefly rinse or soak them only if needed. Lift them out of the water and dry them well.' },
      { question: 'Can I cook morels that I found myself?', answer: 'Only use a wild sample after qualified expert verification. Do not rely on a photo, app, or casual comparison for identification.' },
      { question: 'How do I know when morels are done?', answer: 'They should be tender throughout, steaming hot, and no longer firm or rubbery in the center.' },
      { question: 'Can I use dried morels?', answer: 'Yes. Rehydrate them according to the package directions, rinse away any grit, dry them, and cook them thoroughly in the same way.' },
      { question: 'Why do morels shrink when cooked?', answer: 'Morels release water as they heat, so their volume naturally decreases. Cut larger pieces generously and cook them in a wide pan.' }
    ],
    storage: [
      'Store fresh, unwashed morels in a paper bag in the refrigerator for up to 2 to 3 days.',
      'Refrigerate cooked morels in a covered container within 2 hours.',
      'Use cooked morels within 3 to 4 days.',
      'Freeze cooked morels for up to 2 months for best quality, then reheat them in a skillet until hot.'
    ],
    variations: [
      'Creamed morels: add 1/3 cup (80 ml) heavy cream after the mushrooms finish cooking and simmer until lightly thickened.',
      'Thyme morels: add 1 tsp fresh thyme leaves with the garlic.',
      'Flour-dusted morels: toss the dried, halved morels with 1 tbsp all-purpose flour before pan-frying.',
      'Morel toast: spoon the cooked mushrooms over toasted bread and add a fried egg.',
      'Morel pasta: toss with 8 oz (225 g) cooked pasta and 1/4 cup (60 ml) pasta water.'
    ]
  },
  {
    slug: 'how-to-cook-lions-mane-mushrooms', mushroomSlug: 'lions-mane', label: "Lion's mane", badge: 'Seafood texture', title: "How to Cook Lion's Mane Mushrooms", description: "Turn lion's mane mushrooms golden and tender in a skillet with butter, garlic, and lemon. Gentle pressing brings out crisp, savory edges.", minutes: '6 min', updated: '2026-07-11', image: '/images/cookmushroom-lions-mane-hero.webp', imageAlt: 'Golden seared lion’s mane mushroom slabs with lemon in a cast-iron skillet', isoTime: 'PT15M', prepIsoTime: 'PT10M', heat: 'Medium, then medium-low', cut: 'Slice into 1-inch slabs or tear into large, even pieces', finish: 'Lemon juice and fresh parsley',
    recipeName: "Golden Skillet Lion's Mane Mushrooms", yieldText: '2 side servings',
    ingredients: [
      "12 oz (340 g) fresh lion's mane mushrooms, cut or torn",
      '1 tbsp (15 ml) olive oil',
      '2 tbsp (28 g) unsalted butter',
      '1 garlic clove (3 g), minced',
      '1/2 tsp (3 g) kosher salt',
      '1/4 tsp black pepper',
      '1 tbsp (15 ml) lemon juice',
      '1 tbsp (4 g) chopped fresh parsley'
    ],
    steps: [
      'Brush the mushrooms clean and trim the base. Cut them into 1-inch slabs or tear them into large pieces.',
      'Heat the olive oil in a wide skillet over medium heat. Add the mushrooms in one layer.',
      'Cook for about 4 minutes, pressing each piece gently with a spatula every 30 seconds as the bottom turns golden and the mushroom begins to shrink.',
      'Turn the pieces and cook for 4 minutes more, pressing lightly until the second side is browned and the centers feel tender.',
      'Lower the heat to medium-low. Add the butter, garlic, salt, and pepper. Cook for 4 to 5 minutes, turning once, until the garlic is fragrant and the mushroom is fully cooked through.',
      'Add the lemon juice and parsley. Toss for 30 seconds, then serve hot.'
    ],
    tips: [
      'Use a wide pan and leave space around each piece for better browning.',
      'Press gently rather than flattening the mushroom completely.',
      'Add butter after the first browning stage so it does not burn before the mushroom cooks through.'
    ],
    pairings: ['toasted sourdough', 'rice or barley', 'roasted vegetables', 'eggs', 'sesame noodles'],
    sections: [
      { heading: 'What to expect', text: "Lion's mane has a soft, layered texture and releases moisture as it cooks. Gentle pressing helps the mushroom make good contact with the pan, so the outside turns golden while the middle stays tender." },
      { heading: 'Before you start', text: 'Brush away dirt and trim only the dry base. Avoid soaking the mushroom because its sponge-like texture absorbs water. Cut or tear it into pieces of similar thickness.' }
    ],
    faqs: [
      { question: "How do I clean lion's mane mushrooms?", answer: 'Brush off dirt and trim the dry base. Avoid soaking them because they absorb water easily.' },
      { question: "Should I slice or tear lion's mane mushrooms?", answer: 'Either works. Slice thick slabs for browned faces, or tear the mushroom into pieces for more crisp edges.' },
      { question: "Why do lion's mane mushrooms release water?", answer: 'Their soft, porous structure holds moisture. A wide pan, moderate heat, and gentle pressing help that moisture cook away.' },
      { question: "How long should lion's mane mushrooms cook?", answer: 'Thick pieces usually take 12 to 15 minutes in a skillet, depending on their size and moisture.' },
      { question: "Can I eat lion's mane mushrooms raw?", answer: 'They are usually cooked for better texture and flavor. Cook them until tender and hot throughout.' },
      { question: "Can I use dried lion's mane mushrooms?", answer: 'Yes. Rehydrate them according to the package directions, squeeze out excess water, and cook until tender and hot.' }
    ],
    storage: [
      "Refrigerate fresh lion's mane mushrooms in a paper bag for up to 5 days.",
      'Store cooked mushrooms in a covered container within 2 hours of cooking.',
      "Use cooked lion's mane within 3 to 4 days.",
      'Reheat in a skillet over medium heat until hot; add a small splash of water if the pieces seem dry.'
    ],
    variations: [
      'Soy-garlic: add 1 tsp soy sauce with the butter.',
      'Crispy herb: add 1 tsp fresh thyme leaves with the parsley.',
      'Spicy: add 1/4 tsp red pepper flakes with the garlic.',
      'Toast: serve the finished mushroom over toast with a soft-boiled egg.',
      'Lemon pasta: toss with 8 oz (225 g) cooked pasta and 1/4 cup (60 ml) pasta water.'
    ]
  },
  {
    slug: 'how-to-cook-porcini-mushrooms', mushroomSlug: 'porcini', label: 'King porcini', badge: 'Umami depth', title: 'How to Cook Porcini Mushrooms', description: 'Learn how to cook porcini mushrooms in a hot skillet for browned edges, a tender center, and a bright garlic-butter finish.', minutes: '6 min', updated: '2026-07-11', image: '/images/porcini-garlic-butter-hero.webp', imageAlt: 'Garlic-butter porcini mushrooms with parsley and lemon in a skillet', isoTime: 'PT12M', prepIsoTime: 'PT15M', heat: 'Medium-high, then medium', cut: 'Brush clean; trim the stem base; slice caps and stems 1/4 inch thick', finish: 'Lemon juice and chopped parsley off the heat',
    recipeName: 'Garlic-Butter Porcini Mushrooms', yieldText: '2 servings',
    ingredients: [
      '12 oz (340 g) fresh porcini mushrooms',
      '1 tbsp (15 ml) olive oil',
      '2 tbsp (28 g) unsalted butter',
      '1 small shallot (40 g), finely diced',
      '2 garlic cloves (6 g), thinly sliced',
      '1/2 tsp (3 g) fine salt',
      '1/4 tsp freshly ground black pepper',
      '1 tsp (5 ml) lemon juice',
      '2 tbsp (8 g) chopped flat-leaf parsley'
    ],
    steps: [
      'Brush the porcini clean, trim the base, and slice them 1/4 inch thick. Keep the slices as even as possible so they finish together.',
      'Heat a wide skillet over medium-high heat. Add the olive oil and wait until it shimmers.',
      'Add the porcini in a single layer. Cook without stirring for 2 minutes, then turn and cook for 2 more minutes, until the edges are browned and the centers feel tender.',
      'Reduce the heat to medium. Add the butter and shallot; cook for 1 1/2 to 2 minutes until the shallot softens and the pan smells nutty.',
      'Add the garlic, salt, and pepper. Toss for 30 to 45 seconds, just until the garlic is fragrant.',
      'Remove from the heat. Stir in the lemon juice and parsley, taste, and serve immediately.'
    ],
    tips: [
      'Use a wide pan and cook in batches if the porcini crowd the surface.',
      'Keep the heat high enough to evaporate moisture, but lower it as soon as the butter goes in.',
      'Slice the stems too; they are firm and flavorful when young and clean.'
    ],
    pairings: ['creamy polenta', 'tagliatelle', 'scrambled eggs', 'grilled sourdough', 'roast chicken'],
    sections: [
      { heading: 'Why this method works', text: 'Porcini have a firm, meaty texture that holds up well to a quick skillet sauté. Starting with a hot pan helps the slices brown before butter, garlic, and shallot add their softer flavors.' },
      { heading: 'Buy and prep', text: 'Buy porcini from a reputable market, or use wild specimens only after expert verification. This guide does not identify mushrooms or establish that a wild find is safe to eat. Brush away soil, trim any tough stem base, and avoid soaking the mushrooms, which can make them watery.' },
      { heading: 'Deep umami: maximizing dried porcini', text: 'The soaking liquid carries a potent concentration of mushroom flavor. Strain it well, then reduce it into sauces instead of throwing it away.', ordered: ['Soak dried pieces in boiling water for 20 minutes.', 'Filter through a fine mesh sieve or paper towel.', 'Use the mushrooms in a sauté and reduce the broth into sauces.'] }
    ],
    relatedLinks: [
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' },
      { href: '/garlic-mushroom-pasta/', label: 'Garlic mushroom pasta recipe' }
    ],
    faqs: [
      { question: 'Can I wash porcini mushrooms?', answer: 'Brush them first. If they are heavily soiled, rinse them briefly under cool water and dry them thoroughly before cooking.' },
      { question: 'Should I cook porcini whole or sliced?', answer: 'Slice them for this recipe so the cut surfaces brown quickly and the centers cook evenly.' },
      { question: 'Can I use dried porcini?', answer: 'Yes, but use a separate rehydration method. Soak dried porcini in hot water, strain the soaking liquid through a fine filter, and add the softened mushrooms to a sauce or pasta dish.' },
      { question: 'Why are my porcini releasing so much water?', answer: 'The pan may be crowded, the mushrooms may be wet, or the heat may be too low. Cook in a single layer and let the moisture evaporate before adding butter.' },
      { question: 'Can I make this recipe dairy-free?', answer: 'Yes. Replace the butter with another tablespoon of olive oil or a dairy-free butter alternative.' }
    ],
    storage: [
      'Refrigerate cooked porcini in a covered container for up to 3 days.',
      'Cool them promptly; do not leave cooked mushrooms at room temperature for extended periods.',
      'Reheat gently in a skillet over medium heat until hot.',
      'For best texture, freeze porcini only after cooking, then use them in sauces, soups, or fillings.'
    ],
    variations: [
      'Cream sauce: add 1/4 cup (60 ml) heavy cream after the garlic cooks and simmer for 2 minutes.',
      'Thyme finish: add 1 tsp fresh thyme leaves with the shallot.',
      'Wine deglaze: add a splash of dry white wine after the garlic and let it reduce.',
      'Pasta: toss the finished mushrooms with cooked tagliatelle and a little pasta water.'
    ]
  },
  {
    slug: 'how-to-cook-shaggy-mane-mushrooms', mushroomSlug: 'shaggy-mane', label: 'Shaggy manes', badge: 'Time critical', title: 'How to Cook Shaggy Mane Mushrooms', description: 'Cook shaggy mane mushrooms quickly with shallot, garlic, and butter, then spoon them over toast while their texture is tender.', minutes: '6 min', updated: '2026-07-11', image: '/images/shaggy-mane-mushrooms-on-toast-hero.webp', imageAlt: 'Sautéed shaggy mane mushrooms with chives on toasted sourdough', isoTime: 'PT10M', prepIsoTime: 'PT10M', heat: 'Medium-high, then medium', cut: 'Trim the base; halve small mushrooms or slice larger ones lengthwise', finish: 'Chives and black pepper over crisp toast',
    recipeName: 'Shaggy Mane Mushrooms on Buttered Toast', yieldText: '2 servings',
    ingredients: [
      '10 oz (280 g) shaggy mane mushrooms',
      '1 tbsp (15 ml) olive oil',
      '1 tbsp (14 g) unsalted butter',
      '1 small shallot (40 g), finely diced',
      '1 garlic clove (3 g), minced',
      '1/2 tsp (3 g) fine salt',
      '1/4 tsp freshly ground black pepper',
      '2 slices sourdough bread (90 g)',
      '1 tbsp (3 g) chopped fresh chives'
    ],
    steps: [
      'Brush the mushrooms clean, trim the stem bases, and halve or slice them lengthwise. Pat away any surface moisture.',
      'Toast the sourdough until crisp at the edges. Keep it warm while you cook the mushrooms.',
      'Heat a wide skillet over medium-high heat. Add the olive oil, then arrange the mushrooms in a loose single layer.',
      'Cook for 2 minutes without stirring. Turn gently and cook for another 2 minutes, until the mushrooms soften and their edges begin to color.',
      'Lower the heat to medium. Add the butter, shallot, garlic, salt, and pepper. Toss for 1 to 2 minutes, until the shallot is soft and the garlic smells sweet.',
      'Spoon the mushrooms over the toast and scatter with chives. Serve while the toast is crisp.'
    ],
    tips: [
      'Cook shaggy mane mushrooms soon after buying them; their quality changes quickly.',
      'Use a gentle turn rather than aggressive stirring because the cooked mushrooms can become fragile.',
      'Toast the bread before starting the skillet so the mushrooms go straight from the pan to the plate.'
    ],
    pairings: ['soft-poached eggs', 'green salad', 'goat cheese', 'roasted tomatoes'],
    sections: [
      { heading: 'Why this method works', text: 'Shaggy mane mushrooms are delicate and cook quickly. A brief sauté keeps their texture soft without letting them sit in their own moisture, while toast gives the tender mushrooms a crisp contrast.' },
      { heading: 'Buy and prep', text: 'Buy shaggy mane mushrooms from a reputable market, or use wild specimens only after expert verification. This guide does not identify mushrooms or establish that a wild find is safe to eat. Cook them promptly after purchase or verification, and discard any specimen that is deteriorating, leaking dark liquid, or otherwise questionable.' }
    ],
    faqs: [
      { question: 'How soon should I cook shaggy mane mushrooms?', answer: 'Cook them as soon as practical after purchase or expert verification, preferably the same day.' },
      { question: 'Why do shaggy mane mushrooms turn dark?', answer: 'They naturally break down as they age, which can cause darkening and an ink-like appearance. Do not use mushrooms that are deteriorating or questionable.' },
      { question: 'Should I boil shaggy mane mushrooms first?', answer: 'Not for this recipe. A direct skillet sauté is enough for the tender texture of fresh, properly sourced mushrooms.' },
      { question: 'Can I store shaggy mane mushrooms overnight?', answer: 'Yes, for a short period. Keep them dry in a paper bag in the refrigerator and cook them promptly.' },
      { question: 'What bread works best with shaggy mane mushrooms?', answer: 'Use a sturdy sourdough, country loaf, or rye bread that can hold the mushrooms without becoming soggy.' }
    ],
    storage: [
      'Refrigerate uncooked mushrooms in a paper bag and use them promptly.',
      'Refrigerate cooked mushrooms in a covered container for up to 2 days.',
      'Store toast separately so it does not soften.',
      'Reheat the mushrooms in a skillet over medium heat; toast fresh bread for serving.'
    ],
    variations: [
      'Creamy: add 2 tbsp (30 ml) heavy cream after the garlic and simmer for 1 minute.',
      'Herb: replace the chives with 1 tbsp chopped tarragon or parsley.',
      'Spicy: add a pinch of red pepper flakes with the garlic.',
      'Beans: serve the mushrooms over warm white beans instead of toast.'
    ]
  },
  {
    slug: 'how-to-cook-oyster-mushrooms', mushroomSlug: 'oyster', label: 'Oyster', badge: 'Fast umami', title: 'How to Cook Oyster Mushrooms', description: 'Learn how to cook oyster mushrooms until their edges turn crisp, then finish them with garlic, butter, soy, lemon, and scallions.', minutes: '6 min', updated: '2026-07-11', image: '/images/crisp-garlic-oyster-mushrooms-hero.webp', imageAlt: 'Crisp-edged oyster mushrooms with garlic butter and lemon in a skillet', isoTime: 'PT12M', prepIsoTime: 'PT10M', heat: 'Medium-high', cut: 'Trim the clustered base; tear caps into bite-size pieces', finish: 'Soy, lemon juice, smoked paprika, and scallions',
    recipeName: 'Crisp-Edged Garlic Oyster Mushrooms', yieldText: '2 servings',
    ingredients: [
      '14 oz (400 g) oyster mushrooms',
      '1 tbsp (15 ml) neutral oil',
      '1 tbsp (14 g) unsalted butter',
      '2 garlic cloves (6 g), minced',
      '1 tsp (5 ml) soy sauce',
      '1 tsp (5 ml) lemon juice',
      '1/4 tsp (1 g) smoked paprika',
      '1/4 tsp fine salt',
      '2 tbsp (12 g) sliced scallions'
    ],
    steps: [
      'Trim away the tough clustered base. Tear the oyster mushroom caps into bite-size pieces and brush off any debris.',
      'Heat a wide skillet over medium-high heat. Add the oil and wait until it shimmers.',
      'Add the mushrooms in a single layer. Cook for 3 to 4 minutes without moving them much, until the bottoms are browned and the pieces begin to soften.',
      'Turn the mushrooms and cook for another minute, allowing the second side to pick up color.',
      'Add the butter, garlic, smoked paprika, and salt. Toss for 1 to 1 1/2 minutes, until the garlic is fragrant and the mushroom edges look crisp.',
      'Stir in the soy sauce and lemon juice. Remove from the heat, scatter with scallions, and serve immediately.'
    ],
    tips: [
      'Tear rather than finely slice the caps to create better browned edges.',
      'If the skillet looks crowded, cook the mushrooms in two batches.',
      'Add soy sauce near the end so it seasons the mushrooms without making the pan too wet.'
    ],
    pairings: ['steamed rice', 'soba noodles', 'toasted sourdough', 'polenta', 'fried eggs'],
    sections: [
      { heading: 'Why this method works', text: 'Tearing oyster mushrooms creates irregular edges that brown well. The mushrooms need room in the pan, so the recipe builds color first and adds butter, garlic, and seasoning only after the moisture has cooked away.' },
      { heading: 'Buy and prep', text: 'Cultivated oyster mushrooms are the simplest choice for this recipe. If using wild-harvested oyster mushrooms, use only market-purchased specimens or mushrooms verified by a qualified expert. This guide does not identify mushrooms or establish that a wild find is safe to eat.' }
    ],
    relatedLinks: [
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-roast-mushrooms-in-oven/', label: 'How to roast mushrooms in the oven' },
      { href: '/how-to-grill-mushrooms/', label: 'How to grill mushrooms' },
    ],
    faqs: [
      { question: 'Should I wash oyster mushrooms?', answer: 'Brush them clean first. If they need a rinse, do it quickly and dry them thoroughly before they hit the pan.' },
      { question: 'Do I eat the oyster mushroom stems?', answer: 'Tender stems can be eaten. Trim away only the dry, woody, or tightly clustered base.' },
      { question: 'Why are my oyster mushrooms soggy?', answer: 'The pan may be crowded, the mushrooms may be wet, or the heat may be too low. Use a wide pan and let the first side brown before stirring.' },
      { question: 'Can I use oyster mushrooms in a sauce?', answer: 'Yes. Brown them first, then add them to pasta sauce, gravy, soup, or a stir-fry near the end of cooking.' },
      { question: 'How do I handle wild oyster mushrooms?', answer: 'Use market-purchased mushrooms or have wild specimens verified by a qualified expert. This recipe cannot confirm the identity or safety of a wild find.' }
    ],
    storage: [
      'Refrigerate uncooked oyster mushrooms in a paper bag for up to 5 days, checking their condition before use.',
      'Refrigerate cooked mushrooms in a covered container for up to 3 days.',
      'Reheat in a hot skillet to restore some edge texture.',
      'Freeze cooked mushrooms only if you plan to use them later in soup, sauce, or a filling.'
    ],
    variations: [
      'Sesame: replace the butter with 1 tsp toasted sesame oil and finish with sesame seeds.',
      'Herb: omit the smoked paprika and add 1 tbsp chopped parsley.',
      'Chili-lime: replace lemon juice with lime juice and add a pinch of chili flakes.',
      'Miso: replace the soy sauce with 1 tsp white miso loosened with 1 tsp water.'
    ]
  },
  {
    slug: 'how-to-cook-maitake-mushrooms', mushroomSlug: 'maitake', label: 'Maitake', badge: 'Ruffled clusters', title: 'How to Cook Maitake (Hen of the Woods) Mushrooms', description: 'Hot pan sear maitake mushrooms until the fronds turn golden and crisp, finished with garlic butter. Ready in about 12 minutes.', minutes: '5 min', updated: '2026-07-05', isoTime: 'PT12M', prepIsoTime: 'PT5M', heat: 'Medium-high', cut: 'Break into large clusters or 1-inch pieces', finish: 'Garlic butter, soy, scallion',
    image: '/images/maitake-seared.webp', imageAlt: 'Golden-brown seared maitake mushrooms with crisp ruffled edges in a cast-iron skillet, garnished with garlic butter and scallions',
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
    slug: 'how-to-cook-lobster-mushrooms', mushroomSlug: 'lobster', label: 'Lobster mushrooms', badge: 'Seafood illusion', title: 'How to Cook Lobster Mushrooms', description: 'Cook lobster mushrooms in butter, shallot, garlic, and thyme for a firm, savory side with a clean lemon finish.', minutes: '6 min', updated: '2026-07-11', image: '/images/lemon-thyme-lobster-mushrooms-hero.webp', imageAlt: 'Orange lobster mushrooms sautéed with lemon and thyme in a skillet', isoTime: 'PT15M', prepIsoTime: 'PT15M', heat: 'Medium-high, then medium', cut: 'Brush clean; trim the base; slice 1/4 inch thick', finish: 'White wine, lemon juice, and fresh thyme',
    recipeName: 'Lemon-Thyme Sautéed Lobster Mushrooms', yieldText: '2 servings',
    ingredients: [
      '12 oz (340 g) fresh lobster mushrooms',
      '1 tbsp (15 ml) olive oil',
      '2 tbsp (28 g) unsalted butter',
      '1 small shallot (40 g), finely diced',
      '2 garlic cloves (6 g), minced',
      '1/2 tsp fresh thyme leaves',
      '1 tbsp (15 ml) dry white wine',
      '1/2 tsp (3 g) fine salt',
      '1 tbsp (15 ml) lemon juice'
    ],
    steps: [
      'Brush or scrub the lobster mushrooms clean. Trim the base and slice the mushrooms 1/4 inch thick.',
      'Heat a wide skillet over medium-high heat. Add the olive oil and wait until it shimmers.',
      'Add the mushrooms in a single layer. Cook for 2 1/2 minutes without moving, then turn and cook for another 2 1/2 minutes until browned at the edges.',
      'Lower the heat to medium. Add the butter and shallot; cook for 1 1/2 to 2 minutes until the shallot softens.',
      'Add the garlic, thyme, and salt. Toss for 30 to 45 seconds, then pour in the wine and scrape up the browned bits.',
      'Simmer until the wine nearly disappears. Remove from the heat, stir in the lemon juice, and serve while hot.'
    ],
    tips: [
      'Slice dense lobster mushrooms evenly so the thicker pieces do not lag behind.',
      'Do not add the wine until the mushrooms have browned; early liquid can prevent good color.',
      'Taste before adding extra salt because the wine reduction concentrates the seasoning.'
    ],
    pairings: ['creamy polenta', 'roasted potatoes', 'buttered noodles', 'grilled steak', 'wilted greens'],
    sections: [
      { heading: 'Why this method works', text: 'Lobster mushrooms have a dense texture, so thin slices and steady heat help them become tender without losing their bite. A short splash of wine loosens the browned bits, while lemon keeps the finish bright.' },
      { heading: 'Buy and prep', text: 'Buy lobster mushrooms from a reputable market, or use wild specimens only after expert verification. This guide does not identify mushrooms or establish that a wild find is safe to eat. Choose clean, firm mushrooms from a known source and trim away any tough or damaged areas.' }
    ],
    faqs: [
      { question: 'What are lobster mushrooms?', answer: 'They are firm, orange-red mushrooms sold fresh or dried. For this recipe, use fresh mushrooms from a reputable market or an expert-verified wild source.' },
      { question: 'Do lobster mushrooms taste like lobster?', answer: 'No. Their name refers to their orange-red appearance and firm texture, not a seafood flavor.' },
      { question: 'Why are my lobster mushrooms tough?', answer: 'The slices may be too thick, the mushrooms may need more time, or the pan may be too hot. Slice them evenly and cook until the centers are tender.' },
      { question: 'Can I use dried lobster mushrooms?', answer: 'Yes, but rehydrate them first and drain them well. Add them to a sauce, stew, or pasta dish after they soften.' },
      { question: 'How should I clean lobster mushrooms?', answer: 'Brush or lightly scrub away debris, then trim the base and any damaged sections. Avoid soaking them for a long time.' },
      { question: 'Can I use a wild lobster mushroom from my own collection?', answer: 'Only use a wild specimen after qualified expert verification. This guide does not identify mushrooms or establish that a wild find is safe to eat.' }
    ],
    storage: [
      'Refrigerate uncooked lobster mushrooms in a paper bag and use them promptly.',
      'Refrigerate cooked mushrooms in a covered container for up to 3 days.',
      'Reheat gently in a skillet with a small splash of water or stock.',
      'Freeze cooked mushrooms for later use in soups, sauces, or stews rather than for serving as a crisp side.'
    ],
    variations: [
      'Cream sauce: add 1/4 cup (60 ml) heavy cream after the wine reduces, then simmer for 2 minutes.',
      'Garlic-herb: add 1 tbsp chopped parsley with the lemon juice.',
      'Spicy: add a pinch of chili flakes with the garlic.',
      'Vegan: replace the butter with another tablespoon of olive oil or a plant-based butter.'
    ]
  },
  {
    slug: 'how-to-cook-black-trumpet-mushrooms', mushroomSlug: 'black-trumpet', label: 'Black trumpets', badge: 'Wild truffle note', title: 'How to Cook Black Trumpet Mushrooms', description: 'Learn how to cook black trumpet mushrooms in a glossy butter-wine pasta, with careful cleaning, quick sautéing, and a clear wild-mushroom safety note.', minutes: '7 min', updated: '2026-07-11', image: '/images/black-trumpet-butter-pasta-hero.webp', imageAlt: 'Black trumpet mushroom butter pasta with Parmesan and lemon zest', isoTime: 'PT15M', prepIsoTime: 'PT10M', heat: 'Medium-high for the mushrooms, then medium-low for the sauce', cut: 'Split or tear mushrooms into 1–2-inch pieces', finish: 'Parmesan, lemon zest, and the last spoonful of butter',
    recipeName: 'Black Trumpet Mushroom Butter Pasta', yieldText: '2 servings',
    ingredients: [
      '8 oz (225 g) fresh black trumpet mushrooms, cleaned and torn',
      '8 oz (225 g) linguine',
      '1 tbsp (15 g) kosher salt for the pasta water',
      '2 tbsp (28 g) unsalted butter, divided',
      '2 garlic cloves (6 g), thinly sliced',
      '1/2 cup (120 ml) dry white wine',
      '1/2 cup (120 ml) reserved pasta water',
      '1/4 cup (25 g) finely grated Parmesan',
      '1 tsp (2 g) finely grated lemon zest'
    ],
    steps: [
      'Brush away debris and split the mushrooms to check for grit. If they are sandy, rinse briefly in cold water, then dry thoroughly.',
      'Bring salted water to a boil and cook the linguine until one minute shy of al dente. Reserve the pasta water before draining.',
      'Melt 1 tbsp butter in a wide skillet over medium-high heat. Add the mushrooms in one layer. Cook 3 to 4 minutes, until their moisture evaporates and the edges begin to crisp.',
      'Lower the heat to medium-low. Add the remaining butter and garlic; cook for 30 seconds, until fragrant. Pour in the wine and simmer until slightly reduced.',
      'Add the drained pasta and reserved water. Toss until the sauce clings to the noodles and looks glossy.',
      'Remove from the heat. Toss with Parmesan and lemon zest. Serve immediately.'
    ],
    tips: [
      'Dry the mushrooms well before sautéing; surface water steams them instead of browning them.',
      'A wide skillet gives the delicate mushrooms room to cook without turning soggy.',
      'Strain any mushroom rinsing water through a fine filter before using it in another dish; gritty water is not worth saving.'
    ],
    pairings: ['roasted chicken', 'seared scallops', 'arugula salad', 'roasted asparagus', 'grilled sourdough'],
    sections: [
      { heading: 'Why this method works', text: 'Black trumpet mushrooms cook quickly. A hot pan drives off their moisture and concentrates their earthy, smoky flavor before butter, wine, and pasta water turn the browned bits into a light sauce.' },
      { heading: 'Safety first', text: 'Use market-purchased black trumpet mushrooms, or wild specimens verified by a qualified local mushroom expert. A mushroom found outdoors and identified by appearance alone should not be eaten.' }
    ],
    faqs: [
      { question: 'Can I use dried black trumpet mushrooms?', answer: 'Yes. Soak them in warm water until pliable, rinse away grit, dry well, and use the strained soaking liquid in place of part of the pasta water.' },
      { question: 'Do black trumpet mushrooms need their stems removed?', answer: 'No. They are naturally hollow and have no tough central stem like shiitakes.' },
      { question: 'How do I keep black trumpet mushrooms from tasting gritty?', answer: 'Split them open, inspect the folds, rinse briefly only when needed, and dry them completely before cooking.' },
      { question: 'How do I know when black trumpets are done?', answer: 'They should smell deeply savory, feel tender, and have slightly crisp edges after their moisture cooks away.' },
      { question: 'Can I eat a wild black trumpet mushroom I found?', answer: 'Only after qualified expert verification. Do not cook or taste an uncertain wild mushroom.' }
    ],
    storage: [
      'Refrigerate fresh mushrooms unwashed in a paper bag and use within 2–3 days.',
      'Refrigerate leftover pasta in an airtight container for up to 3 days.',
      'Reheat gently in a skillet with a splash of water; avoid prolonged microwaving, which can make the pasta rubbery.',
      'Discard any mushroom that develops a sour odor, excessive slime, or unusual discoloration.'
    ],
    variations: [
      'Polenta: replace the linguine with creamy polenta.',
      'Spicy: add 1/4 tsp red pepper flakes with the garlic.',
      'Thyme: stir in 1 tsp fresh thyme with the wine.',
      'Alcohol-free: use vegetable stock instead of wine and finish with extra lemon zest.'
    ]
  },
  {
    slug: 'how-to-cook-wood-ear-mushrooms', mushroomSlug: 'wood-ear', label: 'Wood ear', badge: 'Snap and texture', title: 'How to Cook Wood Ear Mushrooms', description: 'Learn how to cook wood ear mushrooms until springy and lightly crisp, then glaze them with garlic, ginger, soy, and sesame.', minutes: '6 min', updated: '2026-07-11', image: '/images/wood-ear-sesame-stir-fry-hero.webp', imageAlt: 'Sesame-glazed wood ear mushroom stir-fry with ginger and scallions', isoTime: 'PT8M', prepIsoTime: 'PT12M', heat: 'High heat for a quick wok or skillet stir-fry', cut: 'Slice large lobes into 1/2-inch strips; leave small lobes whole', finish: 'Soy, rice vinegar, sugar, and toasted sesame oil',
    recipeName: 'Garlic-Ginger Wood Ear Mushroom Stir-Fry', yieldText: '2 servings',
    ingredients: [
      '8 oz (225 g) fresh wood ear mushrooms, trimmed',
      '1 tbsp (15 ml) neutral oil',
      '2 garlic cloves (6 g), minced',
      '1 tbsp (15 g) fresh ginger, minced',
      '2 scallions (30 g), thinly sliced',
      '2 tbsp (30 ml) soy sauce',
      '1 tbsp (15 ml) rice vinegar',
      '1 tsp (5 ml) toasted sesame oil',
      '1/2 tsp (2 g) granulated sugar'
    ],
    steps: [
      'Rinse the mushrooms, trim away any tough attachment point, and cut large lobes into 1/2-inch strips. Pat them dry.',
      'Drop the mushrooms into boiling water for 2 minutes. Drain well and let excess moisture steam away.',
      'Place a wok or wide skillet over high heat. Add the neutral oil and heat until it shimmers.',
      'Add the mushrooms. Stir frequently for 3 to 4 minutes, until the edges curl slightly and develop a light crispness.',
      'Add the garlic and ginger. Toss until fragrant but not browned, about 30 seconds.',
      'Add soy sauce, rice vinegar, and sugar. Toss for 1 minute until the sauce coats the mushrooms, then remove from the heat, stir in the scallions and sesame oil, and serve hot.'
    ],
    tips: [
      'Dry the mushrooms after blanching so the hot pan can sear them instead of steaming them.',
      'Dried wood ears expand substantially; soak only what you need and trim them after rehydration.',
      'Keep the sauce brief and concentrated so the mushrooms stay springy.'
    ],
    pairings: ['jasmine rice', 'garlic noodles', 'bok choy', 'charred tofu', 'roast pork'],
    sections: [
      { heading: 'Why wood ear mushrooms are different', text: 'Wood ear mushrooms are valued for texture rather than a deep mushroom flavor. Their thin, ear-shaped lobes stay springy after cooking and pick up sauces without becoming soft or heavy.' },
      { heading: 'Fresh or dried', text: 'Fresh wood ears need trimming and rinsing. Dried wood ears must be soaked until fully expanded, then rinsed carefully because grit can collect in their folds. This recipe uses fresh mushrooms.' },
      { heading: 'The best pan technique', text: 'A brief blanch removes surface grit and gives the mushrooms an even start. The final high-heat stir-fry should leave the edges lightly curled and crisp while the centers remain pleasantly chewy.' }
    ],
    relatedLinks: [
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' },
      { href: '/shiitake-mushroom-ramen/', label: 'Shiitake mushroom ramen recipe' }
    ],
    faqs: [
      { question: 'Should I soak dried wood ear mushrooms before cooking?', answer: 'Yes. Soak them in plenty of water until fully expanded, then rinse, trim, and cook thoroughly.' },
      { question: 'Do wood ear mushrooms need blanching?', answer: 'Blanching is useful for this recipe because it cleans the lobes and gives them an even texture before stir-frying.' },
      { question: 'Why are my wood ear mushrooms crunchy?', answer: 'A springy, lightly crunchy texture is normal and is one of their defining qualities.' },
      { question: 'Can I substitute dried wood ears for fresh by volume?', answer: 'No. Dried mushrooms expand as they soak, so rehydrate them first and measure the prepared mushrooms.' },
      { question: 'Are all brown, ear-shaped wild mushrooms safe to eat?', answer: 'No. Use packaged mushrooms or wild specimens verified by a qualified mushroom expert.' }
    ],
    storage: [
      'Keep fresh wood ears refrigerated and use them within 3–5 days.',
      'Store soaked mushrooms in a covered container in the refrigerator and use within 1–2 days.',
      'Refrigerate cooked leftovers for up to 3 days.',
      'Keep dried wood ears sealed in a cool, dry cupboard until needed.'
    ],
    variations: [
      'Chili crisp: add 1 tbsp chili crisp with the soy sauce.',
      'Miso: replace the sugar with 1 tsp white miso for a rounder glaze.',
      'Vegetables: add thinly sliced bell pepper or snap peas for a fuller stir-fry.',
      'Cilantro-lime: finish with cilantro and a squeeze of lime instead of sesame oil.'
    ]
  },
  {
    slug: 'how-to-cook-shiitake-mushrooms', mushroomSlug: 'shiitake', label: 'Shiitake', badge: 'Asian standard', title: 'How to Cook Shiitake Mushrooms', description: 'Learn how to cook shiitake mushrooms until browned and tender, then finish them with garlic, thyme, soy sauce, and lemon.', minutes: '6 min', updated: '2026-07-11', image: '/images/shiitake-garlic-thyme-hero.webp', imageAlt: 'Seared shiitake mushrooms with garlic and thyme on a ceramic plate', isoTime: 'PT10M', prepIsoTime: 'PT10M', heat: 'Medium-high for browning, then medium', cut: 'Remove the woody stems and slice caps 1/4 inch thick', finish: 'Butter, garlic, thyme, soy sauce, and lemon',
    recipeName: 'Garlic-Thyme Seared Shiitake Mushrooms', yieldText: '2 servings',
    ingredients: [
      '12 oz (340 g) fresh shiitake mushrooms, stems removed',
      '1 tbsp (15 ml) olive oil',
      '1 tbsp (14 g) unsalted butter',
      '2 garlic cloves (6 g), thinly sliced',
      '1 tsp fresh thyme leaves',
      '1 tbsp (15 ml) soy sauce',
      '1 tsp (5 ml) lemon juice',
      '1/4 tsp kosher salt',
      '2 tbsp (30 ml) water'
    ],
    steps: [
      'Brush the caps clean or rinse them quickly and dry them well. Remove the woody stems and slice the caps 1/4 inch thick.',
      'Heat a wide skillet over medium-high heat. Add the olive oil when the pan is hot.',
      'Add the shiitakes in a single layer. Cook for 3 minutes without moving, then turn and cook until both sides are browned and the caps feel tender.',
      'Lower the heat to medium. Add butter, garlic, and thyme. Stir until the butter foams and the garlic smells fragrant.',
      'Add the soy sauce, water, and lemon juice. Toss until the liquid reduces to a thin, shiny coating.',
      'Taste and add the kosher salt only if needed. Serve immediately.'
    ],
    tips: [
      'Do not crowd the pan; cook in two batches if the caps overlap.',
      'Dry shiitakes thoroughly after rinsing to prevent steaming.',
      'Reserve the stems for stock instead of throwing them away.'
    ],
    pairings: ['grilled steak', 'creamy polenta', 'soba noodles', 'white beans', 'steamed rice'],
    sections: [
      { heading: 'Why shiitakes brown well', text: 'Shiitake caps have a meaty texture and a strong savory flavor. Cooking them in a single layer gives their exposed surfaces time to brown before the finishing butter and aromatics go into the pan.' },
      { heading: 'What to do with the stems', text: 'Fresh shiitake stems are usually too fibrous to enjoy whole. Trim them off and save them for stock, broth, or a mushroom-scrap freezer bag.' },
      { heading: 'The finishing sauce', text: 'Butter softens the edges of the mushrooms, while soy sauce adds salt and savoriness. Lemon juice keeps the finished dish bright instead of heavy.' }
    ],
    relatedLinks: [
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' },
      { href: '/how-to-grill-mushrooms/', label: 'How to grill mushrooms' },
      { href: '/shiitake-mushroom-ramen/', label: 'Shiitake mushroom ramen recipe' }
    ],
    faqs: [
      { question: 'Should I remove shiitake stems before cooking?', answer: 'Yes. Fresh stems are often fibrous, so remove them and reserve them for stock.' },
      { question: 'Should shiitake mushrooms be washed?', answer: 'Brush them clean when possible. If they need rinsing, do it quickly and dry them completely before cooking.' },
      { question: 'Why did my shiitakes release so much water?', answer: 'The pan may have been crowded, the mushrooms may have been wet, or the heat may have been too low. A wide hot pan helps moisture evaporate.' },
      { question: 'How do I know when shiitakes are done?', answer: 'The caps should be browned, tender, and flexible, with no firm raw center.' },
      { question: 'Can I use dried shiitakes in this recipe?', answer: 'Yes. Soak them until soft, remove the stems, squeeze them dry, and pat the caps dry before searing.' }
    ],
    storage: [
      'Refrigerate fresh shiitakes in a paper bag and use them within 5–7 days.',
      'Store cooked mushrooms in an airtight container for up to 3 days.',
      'Reheat in a skillet over medium heat to restore some of their browned texture.',
      'Freeze reserved stems in a labeled freezer bag for stock.'
    ],
    variations: [
      'Scallion: replace the thyme with rosemary or sliced scallions.',
      'Ginger: add 1 tsp grated ginger with the garlic.',
      'Miso: stir in 1 tsp white miso with the soy sauce.',
      'Toast: serve the finished mushrooms over toast with a poached egg.'
    ]
  },
  {
    slug: 'how-to-cook-enoki-mushrooms', mushroomSlug: 'enoki', label: 'Enoki', badge: 'Crisp strands', title: 'How to Cook Enoki Mushrooms', description: 'Learn how to cook enoki mushrooms thoroughly in a quick garlic-butter skillet, keeping their long stems tender and their small caps intact.', minutes: '5 min', updated: '2026-07-11', image: '/images/enoki-garlic-butter-hero.webp', imageAlt: 'Garlic-butter enoki mushroom clusters with soy and scallions in a skillet', isoTime: 'PT7M', prepIsoTime: 'PT8M', heat: 'Medium heat for even cooking without scorching the fine stems', cut: 'Trim off the compact root base and separate into small bundles', finish: 'Garlic butter, soy sauce, rice vinegar, chili flakes, and scallions',
    recipeName: 'Garlic-Butter Enoki Mushroom Skillet', yieldText: '2 servings',
    ingredients: [
      '2 packages fresh enoki mushrooms, 3.5 oz (100 g) each',
      '1 tbsp (15 ml) neutral oil',
      '1 tbsp (14 g) unsalted butter',
      '1 garlic clove (3 g), minced',
      '1 tbsp (15 ml) soy sauce',
      '1 tsp (5 ml) rice vinegar',
      '1 scallion (30 g), thinly sliced',
      '1/4 tsp red pepper flakes'
    ],
    steps: [
      'Cut away the compact root base from each package. Separate the mushrooms into small bundles, rinse briefly, and dry gently.',
      'Warm a wide skillet over medium heat. Add the neutral oil.',
      'Arrange the enoki bundles in the pan. Cook for about 2 minutes, until the bottoms soften and begin to turn lightly golden.',
      'Turn the bundles with tongs. Cook for 2 to 3 minutes more, until the long stems are fully wilted and hot throughout.',
      'Lower the heat. Add the butter and garlic, tossing until fragrant, then add soy sauce, rice vinegar, and red pepper flakes and toss gently until the sauce coats the mushrooms.',
      'Remove from the heat and scatter over the scallion. Serve at once.'
    ],
    tips: [
      'Cut off only the dense root base; trimming too high can make the small caps fall apart.',
      'Avoid high heat, which can scorch the thin stems before the center is cooked.',
      'Use tongs or chopsticks to turn the bundles gently instead of stirring them into fragments.'
    ],
    pairings: ['steamed rice', 'miso soup', 'grilled salmon', 'lettuce wraps', 'cold soba'],
    relatedLinks: [
      { href: '/shiitake-mushroom-ramen/', label: 'Shiitake mushroom ramen recipe' },
      { href: '/how-to-cook-shiitake-mushrooms/', label: 'How to cook shiitake mushrooms' }
    ],
    sections: [
      { heading: 'Enoki’s delicate structure', text: 'Enoki mushrooms have long, slender white stems and tiny rounded caps that grow in dense clusters. Their texture is tender and slightly springy when cooked, so the goal is to soften the stems without burning the caps.' },
      { heading: 'Cook them thoroughly', text: 'For food safety, cook enoki mushrooms thoroughly rather than serving them raw or undercooked. The finished stems should be fully wilted and hot throughout.' },
      { heading: 'Keep the bundles manageable', text: 'After trimming the root base, separate the mushrooms into small bundles. This gives the stems contact with the pan while keeping the tiny caps attached.' }
    ],
    faqs: [
      { question: 'Do enoki mushrooms need to be fully cooked?', answer: 'Yes. Cook them until the stems are completely wilted and hot throughout rather than serving them raw or undercooked.' },
      { question: 'How do I trim enoki mushrooms?', answer: 'Slice off the compact, dense root base, then separate the remaining stems into small bundles.' },
      { question: 'Why are my enoki mushrooms still crunchy?', answer: 'They need more time in the skillet. Continue cooking until the stems soften and lose their rigid, raw texture.' },
      { question: 'Are long white stems and tiny caps normal for enoki mushrooms?', answer: 'Yes. Those features are characteristic of cultivated enoki mushrooms.' },
      { question: 'What can I use instead of enoki mushrooms?', answer: 'Shimeji mushrooms make the closest textural substitute, though they need a longer cooking time and have broader caps.' }
    ],
    storage: [
      'Keep unopened enoki mushrooms refrigerated in their original package and follow the package date.',
      'Once opened, use them promptly, ideally within 1–2 days.',
      'Refrigerate cooked leftovers in an airtight container for up to 3 days.',
      'Discard mushrooms with a sour odor, dark wet patches, or excessive slime.'
    ],
    variations: [
      'Dairy-free: replace the butter with 1 tsp toasted sesame oil.',
      'Miso: add 1 tsp white miso with the soy sauce.',
      'Nori: wrap each cooked bundle in a small piece of nori before serving.',
      'Fuller meal: add sliced tofu for a fuller skillet dish.'
    ]
  },
  {
    slug: 'how-to-cook-matsutake-mushrooms', mushroomSlug: 'matsutake', label: 'Matsutake', badge: 'Autumn aroma', title: 'How to Cook Matsutake Mushrooms', description: 'Learn how to cook market-bought matsutake mushrooms with gentle cleaning, a hot pan, and a simple butter-soy finish that keeps their aroma clear.', minutes: '6 min', updated: '2026-07-11', image: '/images/matsutake-butter-soy-hero.webp', imageAlt: 'Butter-seared matsutake mushroom slices with soy and scallions in a skillet', isoTime: 'PT12M', prepIsoTime: 'PT10M', heat: 'Medium-high, then medium', cut: 'Wipe clean and slice lengthwise into 1/4-inch pieces', finish: 'Butter, soy sauce, sake, and citrus',
    recipeName: 'Butter-Seared Matsutake Mushrooms with Soy and Citrus', yieldText: '2 servings',
    ingredients: [
      '8 oz (225 g) market-bought matsutake mushrooms, trimmed',
      '1 tbsp (14 g) unsalted butter',
      '1 tsp (5 ml) neutral oil',
      '1 tbsp (15 ml) soy sauce',
      '2 tsp (10 ml) sake',
      '1 tsp (5 ml) lemon or yuzu juice',
      '1 scallion, thinly sliced, about 1 oz (30 g)',
      '1/4 tsp (1 g) kosher salt'
    ],
    steps: [
      'Trim away the dirty ends and wipe the mushrooms clean. Slice them lengthwise into 1/4-inch pieces so the caps and stems stay intact.',
      'Heat a wide skillet over medium-high heat. Add the oil. When it shimmers, place the mushrooms in one layer; the pan should give a quiet sizzle.',
      'Cook without moving for 2 minutes, until the undersides turn golden. Turn the slices and cook for 1 to 2 minutes more, until the stems feel tender but still springy.',
      'Lower the heat to medium. Add the butter and salt, then spoon the foaming butter over the mushrooms until they smell nutty.',
      'Add the soy sauce and sake around the mushrooms. Toss for 30 to 45 seconds, just until the liquid lightly coats the slices.',
      'Remove from the heat. Add the citrus juice and scallion, then serve immediately while the edges are warm and fragrant.'
    ],
    tips: [
      'Do not crowd the skillet; cook in two batches if the slices overlap.',
      'Keep the slices fairly thick so the mushrooms retain their firm, meaty bite.',
      'Add the citrus off the heat to keep the finish bright.'
    ],
    pairings: ['steamed rice', 'soba noodles', 'miso soup', 'roasted kabocha', 'cucumber salad'],
    sections: [
      { heading: 'Why this method works', text: 'Matsutake mushrooms have a firm texture and a strong pine-like aroma. A quick sear gives the edges color without burying their flavor under a heavy sauce.' },
      { heading: 'Before you start', text: 'Use matsutake mushrooms purchased from a reputable market or produce supplier, or use mushrooms verified by a qualified local expert. Never treat a wild mushroom find as safe based on appearance alone. Wipe the mushrooms with a damp cloth or soft brush instead of soaking them.' }
    ],
    faqs: [
      { question: 'Should matsutake mushrooms be washed?', answer: 'Wipe them with a damp cloth or soft brush. Avoid soaking them, which can make them waterlogged and dilute their aroma.' },
      { question: 'Do you eat the stems?', answer: 'Yes. Trim away the dirty base, then cook the stems along with the caps.' },
      { question: 'How do you know when matsutake mushrooms are cooked?', answer: 'They should be hot throughout, lightly browned at the edges, and tender with some springiness in the stems.' },
      { question: 'Can I use dried matsutake mushrooms?', answer: 'Yes, but rehydrate them according to the package directions and pat them dry before searing. The texture and aroma will differ from fresh mushrooms.' },
      { question: 'Can I replace sake?', answer: 'Use dry sherry, dry white wine, or an equal amount of water with a small splash of rice vinegar.' }
    ],
    storage: [
      'Refrigerate leftovers in a shallow airtight container within 2 hours.',
      'Use cooked mushrooms within 3 to 4 days.',
      'Reheat gently in a skillet over medium heat until hot; avoid prolonged microwaving.',
      'Keep fresh mushrooms unwashed in a paper bag in the refrigerator and cook them promptly.'
    ],
    variations: [
      'Sesame: replace the citrus with 1 tsp (5 ml) toasted sesame oil added at the end.',
      'Ginger: add 1 tsp (3 g) grated ginger with the butter.',
      'Rice bowl: serve over buttered rice with a soft-boiled egg.',
      'Herbs: finish with minced mitsuba, parsley, or cilantro instead of scallion.'
    ]
  },
  {
    slug: 'how-to-cook-shimeji-mushrooms', mushroomSlug: 'shimeji', label: 'Shimeji beech', badge: 'Beech bouquets', title: 'How to Cook Shimeji Mushrooms', description: 'Learn how to cook shimeji mushrooms until their clustered caps turn golden, their stems tender, and their savory flavor fits any weeknight meal.', minutes: '5 min', updated: '2026-07-11', image: '/images/shimeji-garlic-butter-hero.webp', imageAlt: 'Golden shimeji mushrooms with garlic butter, soy, and scallions in a skillet', isoTime: 'PT10M', prepIsoTime: 'PT8M', heat: 'Medium-high, then medium', cut: 'Trim the clustered base and separate the stems', finish: 'Garlic butter, soy sauce, rice vinegar, and sesame oil',
    recipeName: 'Golden Garlic-Butter Shimeji Mushrooms', yieldText: '2 servings',
    ingredients: [
      '10 oz (280 g) shimeji mushrooms, trimmed',
      '1 tbsp (15 ml) neutral oil',
      '1 tbsp (14 g) unsalted butter',
      '2 garlic cloves (6 g), finely chopped',
      '1 tbsp (15 ml) soy sauce',
      '1 tsp (5 ml) rice vinegar',
      '1 tsp (5 ml) toasted sesame oil',
      '1 scallion (30 g), sliced'
    ],
    steps: [
      'Trim the base and separate the shimeji into small clusters. Pat them dry; the caps should feel clean and slightly firm.',
      'Heat a wide skillet over medium-high heat. Add the oil and wait until it shimmers.',
      'Add the mushrooms in one layer. Cook for 2 minutes without stirring, then toss and cook for another 1 to 2 minutes until the edges are golden and the pan looks mostly dry.',
      'Lower the heat to medium. Add the butter and garlic. Stir for 30 to 45 seconds, until the garlic smells sweet and the butter lightly foams.',
      'Add the soy sauce and rice vinegar. Toss for 30 seconds, letting the sauce cling to the caps and stems.',
      'Turn off the heat and add the sesame oil and scallion. Toss once more, then serve hot.'
    ],
    tips: [
      'Dry shimeji thoroughly so they brown rather than steam.',
      'Keep the clusters small enough to pick up easily but large enough to retain texture.',
      'Add sesame oil at the end; high heat can flatten its aroma.'
    ],
    pairings: ['jasmine rice', 'udon or ramen', 'grilled chicken', 'seared tofu', 'bok choy'],
    sections: [
      { heading: 'Why this method works', text: 'Shimeji mushrooms release moisture as they cook. Starting in a hot, lightly oiled skillet lets that moisture evaporate before the butter and sauce go in, so the caps brown instead of steam.' },
      { heading: 'Before you start', text: 'Cut away the compact base, then pull the mushrooms into bite-size clusters. A quick rinse is fine if needed, but dry them well before they hit the pan.' }
    ],
    faqs: [
      { question: 'Do I need to remove the base of shimeji mushrooms?', answer: 'Yes. The dense base is fibrous and holds the cluster together. Trim it away, then separate the individual stems or small clusters.' },
      { question: 'Why are my shimeji mushrooms bitter?', answer: 'Undercooked shimeji can taste bitter or harsh. Cook them until the moisture has evaporated and the caps and stems are tender.' },
      { question: 'Can I eat shimeji mushrooms raw?', answer: 'Cook shimeji mushrooms before eating. Heat softens their texture and mellows their flavor.' },
      { question: 'Can I use white and brown shimeji together?', answer: 'Yes. White and brown shimeji can be cooked in the same skillet with the same timing.' },
      { question: 'What can replace soy sauce?', answer: 'Use tamari for a similar flavor, or use 1/2 tsp salt plus 1 tsp water for a soy-free version.' }
    ],
    storage: [
      'Refrigerate cooked shimeji in a shallow airtight container within 2 hours.',
      'Use leftovers within 3 to 4 days.',
      'Reheat in a skillet over medium heat until hot and lightly sizzling.',
      'Store fresh shimeji unwashed in the refrigerator and trim them just before cooking.'
    ],
    variations: [
      'Spicy: add 1/2 tsp chili flakes with the garlic.',
      'Creamy: stir in 1 tbsp (15 ml) heavy cream for a creamy skillet sauce.',
      'Sweet-savory: add 1 tsp (5 ml) maple syrup with the soy sauce.',
      'Soba bowl: toss the finished mushrooms with cooked soba and sliced cucumber.'
    ]
  },
  {
    slug: 'how-to-cook-king-oyster-mushrooms', mushroomSlug: 'king-oyster', label: 'King oyster', badge: 'Flesh density', title: 'How to Cook King Oyster Mushrooms', description: 'Learn how to cook king oyster mushrooms into browned, meaty slices with a crisp edge, tender center, and quick garlic-butter pan sauce.', minutes: '6 min', updated: '2026-07-11', image: '/images/king-oyster-seared-medallions-hero.webp', imageAlt: 'Seared king oyster mushroom medallions with garlic butter in a cast-iron skillet', isoTime: 'PT14M', prepIsoTime: 'PT10M', heat: 'Medium-high, then medium-low', cut: 'Slice stems into 1-inch medallions and score the cut faces', finish: 'Garlic butter, soy sauce, maple syrup, and black pepper',
    recipeName: 'Seared King Oyster Mushroom Medallions', yieldText: '2 servings',
    ingredients: [
      '1 lb (450 g) king oyster mushrooms',
      '1 tbsp (15 ml) neutral oil',
      '1 tbsp (14 g) unsalted butter',
      '2 garlic cloves (6 g), finely chopped',
      '1 tbsp (15 ml) soy sauce',
      '1 tsp (5 ml) maple syrup',
      '1/2 tsp freshly ground black pepper',
      '1 tbsp (4 g) chopped parsley'
    ],
    steps: [
      'Wipe the mushrooms clean. Slice the stems into 1-inch medallions and halve the caps if they are large.',
      'Lightly score a crosshatch pattern on both flat sides of each medallion without cutting all the way through.',
      'Heat a wide skillet over medium-high heat and add the oil. Place the medallions cut-side down and cook for 2 minutes, until the bottoms are deeply golden.',
      'Turn the medallions, add the caps, and cook for 2 minutes more. The centers should feel tender when pressed with a spatula.',
      'Lower the heat to medium-low. Add the butter and garlic, then baste for 30 to 45 seconds until the butter smells nutty and the garlic is pale gold.',
      'Stir the soy sauce and maple syrup together, pour them into the skillet, and toss for 30 seconds. Add black pepper and parsley, then serve.'
    ],
    tips: [
      'Leave space between the medallions so their cut faces can brown.',
      'Press the slices gently with a spatula for even contact, but do not flatten them.',
      'Add the sweet soy mixture at the end to prevent it from burning.'
    ],
    pairings: ['creamy polenta', 'steamed rice', 'mashed potatoes', 'charred broccolini', 'green salad'],
    sections: [
      { heading: 'Why this method works', text: 'King oyster stems are dense and hold their shape when sliced thickly. Scoring the cut faces creates more surface area for browning and lets the pan sauce settle into the ridges.' },
      { heading: 'Before you start', text: 'Wipe the mushrooms clean and trim only the dry ends. Save the caps for the skillet, too; they cook faster, so add them after the thicker stem pieces.' }
    ],
    faqs: [
      { question: 'Do you eat the caps of king oyster mushrooms?', answer: 'Yes. The caps are edible and can be cooked with the thicker stems. Add them a little later because they soften faster.' },
      { question: 'How thick should king oyster mushroom slices be?', answer: 'Cut the stems into slices about 1 inch thick. This gives the outside time to brown while the center stays tender.' },
      { question: 'Why are my king oyster mushrooms watery?', answer: 'The pan may be crowded or not hot enough. Cook in batches if needed and wait until the oil shimmers before adding the mushrooms.' },
      { question: 'Can I grill king oyster mushrooms?', answer: 'Yes. Brush 1/2-inch planks with oil and grill over medium-high direct heat for 6 to 8 minutes, turning once, then add the sauce after grilling. See the full grilling guide for fire setup and times by variety.' },
      { question: 'What can replace maple syrup?', answer: 'Use honey, brown sugar, or 1 tsp (5 ml) mirin.' }
    ],
    storage: [
      'Refrigerate cooked mushrooms in a shallow airtight container within 2 hours.',
      'Use leftovers within 3 to 4 days.',
      'Reheat in a lightly oiled skillet over medium heat to restore the browned edges.',
      'Store fresh king oyster mushrooms in a paper bag in the refrigerator and wipe them clean before slicing.'
    ],
    variations: [
      'Lemon-herb: replace the soy-maple finish with lemon juice and chopped parsley.',
      'Smoky: add 1/2 tsp smoked paprika to the black pepper.',
      'Miso butter: brush the cooked medallions with 1 tbsp butter mashed with 1 tsp white miso.',
      'Sandwich: serve the medallions in toasted buns with shredded cabbage and pickles.'
    ]
  },
  {
    slug: 'how-to-cook-paddy-straw-mushrooms', mushroomSlug: 'paddy-straw', label: 'Paddy straw', badge: 'Broth catchers', title: 'How to Cook Paddy Straw Mushrooms', description: 'Learn how to cook market-bought paddy straw mushrooms safely in a fast ginger-garlic stir-fry with tender centers and a glossy savory sauce.', minutes: '6 min', updated: '2026-07-11', image: '/images/paddy-straw-ginger-garlic-stir-fry-hero.webp', imageAlt: 'Paddy straw mushroom stir-fry with ginger, garlic, lime, and cilantro in a wok', isoTime: 'PT8M', prepIsoTime: 'PT10M', heat: 'High', cut: 'Halve large mushrooms; leave small mushrooms whole', finish: 'Soy sauce, lime juice, and fresh cilantro',
    recipeName: 'Ginger-Garlic Paddy Straw Mushroom Stir-Fry', yieldText: '2 servings',
    ingredients: [
      '14 oz (400 g) market-bought paddy straw mushrooms, fresh or drained canned',
      '1 tbsp (15 ml) neutral oil',
      '2 garlic cloves (6 g), finely chopped',
      '1 tbsp (15 g) fresh ginger, finely grated',
      '1/2 red bell pepper, thinly sliced, about 3 oz (85 g)',
      '1 tbsp (15 ml) soy sauce',
      '1 tsp (5 ml) fresh lime juice',
      '2 tbsp (8 g) chopped cilantro'
    ],
    steps: [
      'Prepare the mushrooms. Halve large fresh or canned mushrooms and leave small ones whole. Pat canned mushrooms dry so they do not flood the wok.',
      'Heat a wok or wide skillet over high heat. Add the oil and wait until it shimmers.',
      'Add the ginger and garlic. Stir for 20 to 30 seconds, until fragrant but not browned.',
      'Add the bell pepper and stir-fry for 1 minute, keeping it bright and slightly crisp.',
      'Add the mushrooms and soy sauce. Toss for 2 to 3 minutes, until the mushrooms are hot, tender, and coated in a glossy sauce.',
      'Turn off the heat. Add the lime juice and cilantro, toss once, and serve immediately.'
    ],
    tips: [
      'Dry canned mushrooms thoroughly before stir-frying.',
      'Keep the pan wide and hot so the mushrooms heat quickly instead of simmering.',
      'Add lime juice after cooking for a cleaner, fresher finish.'
    ],
    pairings: ['jasmine rice', 'rice noodles', 'coconut rice', 'stir-fried greens', 'cucumber salad'],
    sections: [
      { heading: 'Safety and preparation', text: 'Use paddy straw mushrooms purchased from a reputable market or supplier, or mushrooms verified by a qualified local expert. Never treat a wild mushroom find as safe based on appearance alone. If using canned mushrooms, drain and rinse them well. If using fresh market mushrooms, wipe them clean and halve any large ones.' },
      { heading: 'Wild warning', quote: 'In the field, immature wild straw mushrooms look nearly identical to deadly Death Cap mushrooms. Never forage look-alikes without expert authentication.' },
      { heading: 'Why this method works', text: 'Paddy straw mushrooms are delicate and cook quickly. High heat keeps the stir-fry lively while the ginger, garlic, and soy sauce give the mild mushrooms a clear savory finish.' }
    ],
    faqs: [
      { question: 'Should paddy straw mushrooms be washed?', answer: 'Rinse canned paddy straw mushrooms and pat them dry. For fresh market mushrooms, wipe them clean or rinse briefly, then dry them thoroughly.' },
      { question: 'Can I eat paddy straw mushrooms raw?', answer: 'Cook paddy straw mushrooms before eating. This recipe heats them fully and softens their texture.' },
      { question: 'Can I use canned paddy straw mushrooms?', answer: 'Yes. Drain, rinse, and pat them dry before adding them to the hot pan. They need only a few minutes to heat through.' },
      { question: 'How do I cut paddy straw mushrooms?', answer: 'Leave small mushrooms whole and halve larger ones from top to bottom. This keeps the pieces substantial without making them difficult to eat.' },
      { question: 'How do I know when they are done?', answer: 'They should be hot throughout, tender in the center, and evenly coated with the sauce. Fresh mushrooms should no longer look raw at the center.' }
    ],
    storage: [
      'Refrigerate cooked mushrooms in a shallow airtight container within 2 hours.',
      'Use leftovers within 3 to 4 days.',
      'Reheat in a hot skillet until steaming and hot throughout.',
      "Refrigerate opened canned mushrooms in a covered container and follow the can's storage guidance."
    ],
    variations: [
      'Thai chili: add 1 sliced Thai chili with the ginger and garlic.',
      'Snow peas: replace the bell pepper with snow peas or thinly sliced green beans.',
      'Coconut: stir in 2 tbsp (30 ml) coconut milk at the end for a softer sauce.',
      'Sesame-scallion: finish with 1 tsp (5 ml) toasted sesame oil and sliced scallions instead of cilantro.'
    ]
  },
  {
    slug: 'how-to-cook-cremini-mushrooms', mushroomSlug: 'cremini', label: 'Cremini', badge: 'Kitchen staple', title: 'How to Cook Cremini Mushrooms', description: 'Learn how to cook cremini mushrooms until browned and juicy, with garlic, thyme, and a quick pan finish for weeknight meals.', minutes: '4 min', updated: '2026-07-11', image: '/images/cookmushroom-cremini-skillet-hero.webp', imageAlt: 'Golden-brown cremini mushrooms with garlic, thyme, and lemon in a skillet', isoTime: 'PT12M', prepIsoTime: 'PT10M', heat: 'Medium-high skillet heat, then medium for the aromatics', cut: 'Halve small mushrooms and quarter large ones', finish: 'Lemon juice, parsley, and a final pinch of salt',
    recipeName: 'Garlic-Butter Skillet Cremini Mushrooms', yieldText: '4 servings',
    ingredients: [
      '1 lb (454 g) cremini mushrooms',
      '2 tbsp (30 ml) olive oil',
      '2 tbsp (28 g) unsalted butter',
      '3 garlic cloves (9 g), thinly sliced',
      '1 tsp (5 g) kosher salt',
      '1/2 tsp freshly ground black pepper',
      '1 tsp fresh thyme leaves',
      '1 tbsp (15 ml) lemon juice',
      '2 tbsp (8 g) chopped fresh parsley'
    ],
    steps: [
      'Wipe the mushrooms clean, trim the ends, and halve or quarter them. Pat them dry so they sear instead of steam.',
      'Warm the olive oil in a wide skillet over medium-high heat until it shimmers.',
      'Add the mushrooms in a single layer. Cook undisturbed for 2 minutes, then toss every 30–60 seconds until the edges are golden and the released moisture has cooked away.',
      'Add the butter, salt, pepper, and thyme. Toss until the mushrooms look glossy and lightly browned.',
      'Stir in the sliced garlic and cook just until fragrant, keeping it pale rather than brown.',
      'Remove from the heat and toss with lemon juice and parsley. Taste and adjust the salt before serving.'
    ],
    tips: [
      'Use the widest skillet available so the mushrooms remain in contact with the hot surface.',
      'Salt after the mushrooms begin to brown for a firmer texture and deeper color.',
      'Add garlic near the end; early garlic can burn before the mushrooms finish cooking.'
    ],
    pairings: ['creamy polenta', 'buttered noodles', 'grilled sourdough', 'roast chicken or steak', 'arugula salad'],
    sections: [
      { heading: 'Why this method works', text: 'Cremini mushrooms brown best when they have room in the pan. A hot skillet drives off moisture first, then creates a savory golden crust.' },
      { heading: 'Before you start', text: 'Wipe the mushrooms clean with a damp towel and trim only the dry ends. Avoid crowding the pan; cook in two batches if needed.' }
    ],
    relatedLinks: [
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-roast-mushrooms-in-oven/', label: 'How to roast mushrooms in the oven' },
      { href: '/how-to-cook-button-mushrooms/', label: 'How to cook button mushrooms' },
      { href: '/garlic-mushroom-pasta/', label: 'Garlic mushroom pasta recipe' },
      { href: '/how-to-cook-frozen-mushrooms/', label: 'How to cook frozen mushrooms' }
    ],
    faqs: [
      { question: 'Should cremini mushrooms be washed?', answer: 'Yes, they may be rinsed briefly if needed, but dry them thoroughly before cooking. A damp towel is usually enough for lightly soiled mushrooms.' },
      { question: 'Why are my mushrooms watery?', answer: 'The pan is probably crowded or not hot enough. Cook in batches and let the moisture evaporate before adding butter.' },
      { question: 'Do cremini mushrooms need to be peeled?', answer: 'No. Clean them, trim the dry stem ends, and leave the caps intact.' },
      { question: 'Can I use dried thyme?', answer: 'Yes. Use 1/3 tsp dried thyme instead of 1 tsp fresh.' },
      { question: 'How do I know when they are done?', answer: 'They are ready when tender throughout, browned at the edges, and no longer releasing a large amount of liquid.' }
    ],
    storage: [
      'Refrigerate cooled mushrooms in a covered container for up to 3 days.',
      'Reheat in a skillet over medium heat until hot and lightly crisped.',
      'Avoid sealing them while warm, which can create excess condensation.',
      'Freeze only if texture is secondary; thawed mushrooms will be softer.'
    ],
    variations: [
      'Balsamic finish: add 1 tsp balsamic vinegar with the lemon juice.',
      'Chili-garlic: add 1/4 tsp crushed red pepper with the butter.',
      'Creamy skillet: stir in 1/4 cup (60 ml) heavy cream after the garlic cooks.',
      'Soy-sesame: replace half the salt with 1 tsp soy sauce and finish with 1 tsp toasted sesame oil.'
    ]
  },
  {
    slug: 'how-to-prepare-chaga', mushroomSlug: 'chaga', label: 'Chaga', badge: 'Functional herb', title: 'How to Prepare Chaga', description: 'Prepare dried chaga as a simple, low-simmer culinary infusion with clear timing, gentle heat, and practical storage guidance.', minutes: '5 min', updated: '2026-07-11', image: '/images/cookmushroom-chaga-orange-infusion-hero.webp', imageAlt: 'Chaga culinary infusion with dried chaga, cinnamon, and orange peel', isoTime: 'PT50M', prepIsoTime: 'PT5M', heat: 'Gentle simmer, 185–195°F / 85–91°C; avoid a rolling boil', cut: 'Use small dried pieces as supplied; do not pulverize woody pieces', finish: 'Strain completely, then add optional maple syrup and salt',
    recipeName: 'Cinnamon-Orange Chaga Infusion', yieldText: '4 cups',
    ingredients: [
      '1 oz (28 g) dried chaga pieces',
      '4 cups (946 ml) filtered water',
      '1 cinnamon stick (about 3 g)',
      '2 wide strips orange peel (about 4 g)',
      '1 tsp (5 ml) maple syrup, optional',
      '1/8 tsp fine sea salt, optional'
    ],
    steps: [
      'Check the dried pieces for loose debris and brush or rinse them briefly. Drain well.',
      'Place the chaga, water, cinnamon stick, and orange peel in a saucepan.',
      'Warm over medium heat until the liquid begins to steam and small bubbles form around the edge, about 8 minutes.',
      'Reduce the heat to low. Keep the infusion gently simmering for about 40 minutes, until it turns deep amber-brown and smells woody with citrus.',
      'Pour through a fine-mesh strainer into a heatproof jug, removing all solid pieces.',
      'Stir in maple syrup and salt, if using. Serve warm or cool the infusion before refrigerating.'
    ],
    tips: [
      'Keep the lid slightly ajar so the liquid reduces slowly without becoming concentrated too quickly.',
      'Use a fine strainer or coffee filter if small particles pass through the first straining.',
      'Add sweetener after straining so you can adjust the flavor without masking the infusion’s aroma.'
    ],
    pairings: ['oat biscuits', 'rye toast', 'pear compote', 'dark chocolate cake', 'rice pudding'],
    sections: [
      { heading: 'What to expect', text: 'Chaga produces a dark amber-brown infusion with a woody aroma and a mild, earthy flavor. Cinnamon and orange peel give the finished drink a warmer, brighter profile. This guide covers culinary preparation only. Use dried chaga that is labeled and sold for culinary use; strain and discard the woody pieces rather than chewing them.' },
      { heading: 'Gentle heat matters', text: 'A low simmer extracts color and flavor without aggressively boiling the liquid. Keep the surface just active enough to show occasional small bubbles.' }
    ],
    faqs: [
      { question: 'Does chaga need to be boiled?', answer: 'No. A gentle simmer is sufficient for this culinary infusion and helps preserve a clean, rounded flavor.' },
      { question: 'How long should chaga simmer?', answer: 'Simmer dried pieces for about 40–50 minutes, or until the liquid is deeply colored and aromatic.' },
      { question: 'Can I eat the prepared chaga pieces?', answer: 'No. Treat them as woody infusion material: strain them out and discard them rather than chewing them.' },
      { question: 'Can I use powdered chaga?', answer: 'Use only a product labeled for culinary preparation and follow its package directions. Powder can pass through a standard strainer, so filter it carefully.' },
      { question: 'Can the infusion be sweetened?', answer: 'Yes. Add maple syrup, honey, or another sweetener after straining and adjust to taste.' }
    ],
    storage: [
      'Refrigerate the strained infusion in a covered container for up to 3 days.',
      'Cool it promptly before sealing and refrigerating.',
      'Reheat gently in a saucepan or microwave; do not boil it hard.',
      'Discard if it develops an off smell, unusual cloudiness, or visible spoilage.'
    ],
    variations: [
      'Ginger-orange: add 1 oz (28 g) sliced fresh ginger with the chaga.',
      'Apple-spice: add 1/2 cup thinly sliced apple and a pinch of ground clove.',
      'Vanilla-cinnamon: add 1/2 tsp vanilla extract after straining.',
      'Unsweetened citrus: omit maple syrup and add 1 tsp fresh orange juice to each serving.'
    ]
  },
  {
    slug: 'how-to-prepare-reishi-mushrooms', mushroomSlug: 'reishi', label: 'Reishi', badge: 'Wellness tonic', title: 'How to Prepare Reishi Mushrooms', description: 'Prepare dried reishi as a measured, low-simmer culinary infusion with gentle heat, clear timing, and storage guidance.', minutes: '5 min', updated: '2026-07-11', image: '/images/cookmushroom-reishi-ginger-infusion-hero.webp', imageAlt: 'Reishi culinary infusion with dried reishi, ginger, and orange peel', isoTime: 'PT1H', prepIsoTime: 'PT5M', heat: 'Low simmer, 185–195°F / 85–91°C; avoid a rolling boil', cut: 'Use dried slices as supplied, or split large pieces with kitchen shears', finish: 'Strain fully, then balance the bitterness with ginger, citrus, or sweetener',
    recipeName: 'Ginger-Citrus Reishi Infusion', yieldText: '4 cups',
    ingredients: [
      '1 oz (28 g) dried reishi slices or pieces',
      '4 cups (946 ml) filtered water',
      '1 oz (28 g) fresh ginger, thinly sliced',
      '1 cinnamon stick (about 3 g)',
      '2 wide strips orange peel (about 4 g)',
      '1 tbsp brown sugar or maple syrup',
      '1/8 tsp fine sea salt'
    ],
    steps: [
      'Brush away loose debris from the dried reishi and rinse briefly only if needed. Drain it well.',
      'If the pieces are large, split them into smaller sections with kitchen shears. Do not grind them into powder.',
      'Add the reishi, water, ginger, cinnamon, and orange peel to a saucepan.',
      'Warm over medium heat until steam rises and small bubbles appear around the edge, about 8 minutes.',
      'Reduce to low and simmer gently for about 50 minutes, until the liquid is deep brown and smells woody, spicy, and citrusy.',
      'Strain through a fine-mesh sieve. Stir in the sugar or syrup and salt while warm, then taste before serving.'
    ],
    tips: [
      'Expect a bitter note; use citrus, ginger, or sweetener to shape the final flavor rather than trying to remove it.',
      'Keep the liquid below a rolling boil to avoid excessive reduction.',
      'Strain twice if the dried material is crumbly or produces fine particles.'
    ],
    pairings: ['ginger biscuits', 'sesame shortbread', 'poached pear', 'rice pudding', 'citrus cake'],
    sections: [
      { heading: 'Flavor and texture', text: 'Reishi creates a dark, woody infusion with a pronounced bitter finish. Ginger, cinnamon, and orange peel add warmth and fragrance without requiring a complicated preparation. This guide covers culinary preparation only. Use dried reishi that is labeled and sold for culinary use; strain and discard the woody pieces rather than chewing them.' },
      { heading: 'Keep the process gentle', text: 'A low simmer is easier to control than a hard boil and gives the liquid time to develop color. Keep the saucepan uncovered or partly covered so you can monitor the heat.' }
    ],
    faqs: [
      { question: 'How long should reishi simmer?', answer: 'Simmer dried reishi for about 50–60 minutes, or until the infusion is dark and aromatic.' },
      { question: 'Does reishi need to boil?', answer: 'No. A low simmer is enough for this culinary preparation and produces a more controlled reduction.' },
      { question: 'Can I eat the reishi pieces after simmering?', answer: 'No. Strain them out and discard them because the pieces remain woody and tough.' },
      { question: 'How can I balance the bitter flavor?', answer: 'Add ginger, orange peel, a small amount of brown sugar or maple syrup, or a pinch of salt after straining.' },
      { question: 'Can I prepare it ahead?', answer: 'Yes. Strain the infusion, cool it promptly, and refrigerate it in a covered container for up to 3 days.' }
    ],
    storage: [
      'Refrigerate the strained infusion in a covered container for up to 3 days.',
      'Do not store the liquid with the reishi pieces still submerged.',
      'Reheat gently until warm, avoiding a hard boil.',
      'Discard if the infusion develops an off smell, unusual cloudiness, or visible spoilage.'
    ],
    variations: [
      'Cardamom-citrus: add 3 lightly crushed cardamom pods with the cinnamon.',
      'Apple-ginger: add 1/2 cup sliced apple during the simmer.',
      'Vanilla-orange: stir in 1/2 tsp vanilla extract after straining.',
      'Cocoa-spice: add 1 tsp unsweetened cocoa powder and a pinch of cinnamon after straining.'
    ]
  },
  {
    slug: 'how-to-use-truffles', mushroomSlug: 'truffles', label: 'Truffles', badge: 'Gourmet luxury', title: 'How to Use Truffles at the Table', description: 'Use truffles with restraint: warm a simple buttered pasta, then add shavings at the table so their aroma stays vivid.', minutes: '5 min', updated: '2026-07-11', image: '/images/cookmushroom-truffle-buttered-pasta-hero.webp', imageAlt: 'Fresh truffle shavings over buttered tagliatelle with Parmesan', isoTime: 'PT12M', prepIsoTime: 'PT10M', heat: 'Medium-high for the pasta water, then low for the butter sauce', cut: 'Shave the truffle paper-thin just before serving', finish: 'Add the truffle off heat so its aroma blooms over the warm dish',
    recipeName: 'Fresh Truffle Buttered Pasta', yieldText: '4 servings',
    ingredients: [
      '12 oz (340 g) tagliatelle or fettuccine',
      '2 tbsp (28 g) unsalted butter',
      '1 tbsp (15 ml) extra-virgin olive oil',
      '1/2 cup (120 ml) reserved pasta water',
      '1 oz (28 g) finely grated Parmigiano-Reggiano',
      '1 small fresh truffle, 1/2–1 oz (15–30 g)',
      '1/2 tsp fine sea salt for the pasta water',
      '1/4 tsp freshly ground black pepper'
    ],
    steps: [
      'Gently brush the truffle clean, pat it dry, and keep it whole until the pasta is nearly ready.',
      'Bring a large pot of salted water to a boil. Cook the pasta until just tender, following the package timing.',
      'Scoop out 1/2 cup of pasta water, then drain the pasta.',
      'Melt the butter with the olive oil in a skillet over low heat. Add the pasta and enough reserved water to make a glossy coating.',
      'Remove from the heat. Toss with the Parmigiano-Reggiano and black pepper until smooth and lightly creamy.',
      'Divide among warm plates and shave the truffle paper-thin over each portion. Serve immediately while the heat carries the aroma upward.'
    ],
    tips: [
      'Shave the truffle at the last possible moment for the clearest aroma.',
      'Use warm plates so the pasta stays hot without requiring extra cooking.',
      'Add truffle shavings off heat; prolonged high heat can flatten their aroma.'
    ],
    pairings: ['soft scrambled eggs', 'creamy polenta', 'roasted potatoes', 'buttered asparagus', 'grilled sourdough'],
    sections: [
      { heading: 'Use truffles at the finish', text: 'Truffles are most expressive when shaved over a hot but finished dish. The warmth releases their serving aroma without subjecting the delicate shavings to prolonged cooking.' },
      { heading: 'Keep the base simple', text: 'Butter, pasta water, and hard cheese create a glossy background that carries the truffle without competing with it. Serve immediately after shaving.' }
    ],
    faqs: [
      { question: 'Should truffles be cooked?', answer: 'No. Add fresh shavings off heat, directly over the warm finished dish.' },
      { question: 'How much truffle should I use?', answer: 'Use about 1/2–1 oz (15–30 g) for four servings, adjusting for the truffle’s aroma and your preference.' },
      { question: 'How thin should truffle slices be?', answer: 'Shave them paper-thin so the warm pasta can release their aroma evenly.' },
      { question: 'Can I use truffle oil instead?', answer: 'Yes. Add a few drops after plating, but expect a different flavor and aroma from fresh truffle shavings.' },
      { question: 'When should truffle pasta be served?', answer: 'Serve it immediately after shaving because the aroma is strongest while the pasta is hot.' }
    ],
    storage: [
      'Store an uncut fresh truffle wrapped in a dry paper towel inside a covered container in the refrigerator.',
      'Change the paper towel daily and use the truffle as soon as practical.',
      'Refrigerate leftover pasta in a covered container for up to 2 days.',
      'Reheat leftover pasta gently with a splash of water; add any fresh truffle only after reheating.'
    ],
    variations: [
      'Truffle eggs: shave truffle over soft scrambled eggs just before serving.',
      'Truffle polenta: spoon hot polenta into bowls and finish with butter, cheese, and thin shavings.',
      'Truffle potatoes: add shavings to hot roasted or mashed potatoes off heat.',
      'Truffle mushroom toast: spoon sautéed mushrooms onto toast and shave truffle over the top at the table.'
    ]
  },
  {
    slug: 'how-to-cook-portobello-mushrooms', mushroomSlug: 'portobello', label: 'Portobello', title: 'How to Cook Portobello Mushrooms', description: 'Cook portobello mushrooms until tender and browned, using a savory marinade, high heat, and a clean finish for plates or buns.', minutes: '5 min', updated: '2026-07-11', image: '/images/cookmushroom-portobello-grill-hero.webp', imageAlt: 'Balsamic-grilled portobello mushroom caps with lemon and garlic', isoTime: 'PT12M', prepIsoTime: 'PT10M', heat: 'Medium-high grill or grill pan, 425–450°F / 220–230°C', cut: 'Keep the caps whole for cooking; slice after resting if serving in strips', finish: 'Lemon juice and pan juices, served whole or in thick slices',
    recipeName: 'Balsamic-Grilled Portobello Caps', yieldText: '4 servings',
    ingredients: [
      '4 large portobello mushroom caps, about 1 1/4 lb (567 g)',
      '3 tbsp (45 ml) olive oil',
      '2 tbsp (30 ml) balsamic vinegar',
      '1 tbsp (15 ml) soy sauce or tamari',
      '2 garlic cloves (6 g), finely grated',
      '1 tbsp (15 g) Dijon mustard',
      '1/2 tsp (2.5 g) kosher salt',
      '1/2 tsp freshly ground black pepper',
      '1 tbsp (15 ml) lemon juice'
    ],
    steps: [
      'Wipe the caps clean, remove the stems, and scrape out the gills if desired. Keep the caps whole and pat them dry.',
      'Whisk the olive oil, balsamic vinegar, soy sauce, garlic, Dijon, salt, and pepper. Brush over both sides of the caps and let them stand for 10 minutes.',
      'Preheat a grill or grill pan to medium-high, approximately 425–450°F / 220–230°C. The surface should be hot enough to sizzle on contact.',
      'Place the caps gill-side down. Cook for about 5 minutes, until grill marks appear and the edges begin to soften.',
      'Turn the caps and cook for 4 to 6 minutes more, until tender, browned, and slightly glossy from the marinade. Avoid pressing out the juices.',
      'Rest the mushrooms for 2 minutes, then drizzle with lemon juice. Serve whole or slice into thick strips.'
    ],
    tips: [
      'Brush on the marinade instead of leaving the caps submerged; excess liquid can prevent browning.',
      'Cook gill-side down first to help the caps hold their shape.',
      'Let the mushrooms rest before slicing so their juices stay in the cap.'
    ],
    pairings: ['brioche buns', 'herbed couscous', 'grilled asparagus', 'arugula salad', 'roasted potatoes'],
    sections: [
      { heading: 'Make portobellos tender and flavorful', text: 'Portobello caps have a meaty texture and absorb marinades quickly. High heat browns the surface while keeping the center juicy.' },
      { heading: 'Prepare the caps carefully', text: 'Wipe the caps clean rather than soaking them. Remove the stems, and scrape out the dark gills only if you prefer a cleaner-looking marinade and lighter-colored juices.' }
    ],
    faqs: [
      { question: 'Should portobello gills be removed?', answer: 'No. They are edible, but removing them gives the finished dish a cleaner appearance and lighter-colored juices.' },
      { question: 'How long should portobello mushrooms marinate?', answer: 'Ten minutes is enough for this recipe. Longer marinating can make the surface overly soft.' },
      { question: 'How do I know when a portobello is done?', answer: 'It is ready when the cap is tender, browned at the edges, and yields slightly when pressed with tongs.' },
      { question: 'Can portobellos be cooked in a skillet?', answer: 'Yes. Use a hot, lightly oiled skillet and cook the caps for about 5 minutes per side.' },
      { question: 'Why did my portobello release so much liquid?', answer: 'The pan may not have been hot enough, or the caps may have been crowded. Use high heat and cook in batches if needed.' }
    ],
    storage: [
      'Refrigerate cooked portobellos in a covered container for up to 3 days.',
      'Reheat in a skillet or oven until warmed through.',
      'Store leftover marinade separately only if it has not touched raw mushrooms.',
      'Freeze cooked caps only when a softer texture is acceptable after thawing.'
    ],
    variations: [
      'Herb-garlic: add 1 tbsp chopped rosemary or parsley to the marinade.',
      'Smoky: add 1/2 tsp smoked paprika and replace half the balsamic with lemon juice.',
      'Miso-sesame: replace the Dijon with 1 tbsp white miso and finish with 1 tsp sesame oil.',
      'Mediterranean: add 1/2 tsp dried oregano and serve with crumbled feta and sliced cucumber.'
    ],
    relatedLinks: [
      { href: '/how-to-grill-mushrooms/', label: 'How to grill mushrooms' },
      { href: '/how-to-roast-mushrooms-in-oven/', label: 'How to roast mushrooms in the oven' },
      { href: '/how-to-cook-button-mushrooms/', label: 'How to cook button mushrooms' },
    ]
  },
  {
    slug: 'how-to-cook-button-mushrooms', mushroomSlug: 'button-cremini', label: 'White button mushrooms', badge: 'Everyday staple', title: 'How to Cook Button Mushrooms in a Pan, Oven, or Air Fryer', description: 'Cook button mushrooms in a hot pan for 8–10 minutes, roast at 400°F for 20, or air-fry at 390°F for 10–12—timings and seasoning for their mild flavor.', minutes: '6 min', updated: '2026-07-11', isoTime: 'PT10M', prepIsoTime: 'PT8M', heat: 'Medium-high pan, 400°F oven, or 390°F air fryer', cut: 'Whole if small; halve or quarter larger mushrooms', finish: 'Garlic butter and parsley',
    image: '/images/cookmushroom-button-hero.webp', imageAlt: 'White button mushrooms browning in a skillet with garlic and parsley',
    recipeName: 'Everyday Garlic Button Mushrooms', yieldText: '4 side servings',
    ingredients: [
      '1 lb (454 g) white button mushrooms, whole if small or halved if large',
      '1 tbsp (15 ml) neutral oil',
      '2 tbsp (28 g) unsalted butter',
      '2 garlic cloves (6 g), thinly sliced',
      '1/2 tsp kosher salt',
      '1/4 tsp black pepper',
      '1 tbsp (4 g) chopped parsley'
    ],
    steps: [
      'Brush or wipe the mushrooms clean, trim the dry ends, and leave small mushrooms whole or halve larger ones.',
      'Heat a wide skillet over medium-high heat. Add the oil and wait until it shimmers.',
      'Add the mushrooms in one loose layer. Cook for 3 minutes without stirring, until the contact points begin to turn golden.',
      'Turn or toss the mushrooms and cook for 4 to 5 minutes more, until the pan looks dry and the mushrooms are tender.',
      'Lower the heat to medium. Add butter, garlic, salt, and pepper and toss for 1 to 2 minutes, until the garlic is fragrant and pale gold.',
      'Remove from the heat, add parsley, and serve while the edges are browned.'
    ],
    tips: [
      'Buy whole button mushrooms when you can; they stay drier and give you control over the cut.',
      'Do not crowd the skillet. Button mushrooms hold plenty of water and need room for it to evaporate.',
      'Add garlic after the mushrooms have browned so it stays sweet instead of burning.'
    ],
    pairings: ['eggs', 'pasta', 'burgers', 'steak', 'toast', 'rice bowls'],
    sections: [
      { heading: 'What button mushrooms are', text: 'White button mushrooms are the youngest common form of Agaricus bisporus. Cremini are the same mushroom, harvested later with a browner cap; portobellos are the fully mature form. Button mushrooms have the mildest flavor, so they respond well to salt, butter, garlic, and herbs.' },
      { heading: 'What their mild flavor means in the pan', text: 'Dry button mushrooms well and give them room in the skillet. Their high moisture content needs time to cook away, while their mild flavor benefits from a clear finishing seasoning rather than a heavy sauce.' },
      { heading: 'Oven and air-fryer options', text: 'For a hands-off batch, roast halved button mushrooms at 400°F (200°C) for 20 to 25 minutes. For a faster side, air-fry them at 390°F (200°C) for 10 to 12 minutes. Use the dedicated method guides for full sheet-pan and basket rules.' },
      { heading: 'Whole, halved, or sliced', text: 'Leave small buttons whole for a juicy center, halve medium mushrooms for more browned surface, and quarter large mushrooms for pasta or breakfast hash. Thin slices cook quickly but dry out sooner.' }
    ],
    faqs: [
      { question: 'Are button mushrooms and white mushrooms the same?', answer: 'Yes. White button mushroom is the common name for the small, pale form of Agaricus bisporus.' },
      { question: 'What is the difference between button mushrooms and cremini?', answer: 'They are the same species. Cremini are more mature and browner, with a slightly deeper flavor; portobellos are the mature large-cap form.' },
      { question: 'Can you cook button mushrooms whole?', answer: 'Yes. Leave small ones whole, but give them a few extra minutes and turn them so the outside browns evenly.' },
      { question: 'How do you cook button mushrooms for breakfast?', answer: 'Halve or quarter them, brown them in a hot skillet, then finish with butter and herbs. Serve with eggs, toast, or breakfast potatoes.' },
      { question: 'Why are my button mushrooms rubbery?', answer: 'They were likely crowded, cooked in a wet pan, or removed before their moisture cooked away. Keep going until the pan looks dry and the edges are browned.' },
      { question: 'Should you peel button mushrooms?', answer: 'No. Brush or wipe them clean, trim the dry stem end, and leave the cap skin intact.' }
    ],
    storage: [
      'Store fresh button mushrooms unwashed in a paper bag in the refrigerator for up to 5 days.',
      'Refrigerate cooked mushrooms in a covered container for up to 3 days.',
      'Reheat in a hot skillet for 2 to 3 minutes to restore some browned texture.'
    ],
    variations: [
      'Breakfast: add thyme and serve with eggs or potatoes.',
      'Pasta: add a splash of pasta water and Parmesan after the garlic.',
      'Burgers: cook whole small buttons or thick halves, then pile them onto a burger with cheese.'
    ],
    relatedLinks: [
      { href: '/how-to-cook-cremini-mushrooms/', label: 'How to cook cremini mushrooms' },
      { href: '/how-to-cook-portobello-mushrooms/', label: 'How to cook portobello mushrooms' },
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-roast-mushrooms-in-oven/', label: 'How to roast mushrooms in the oven' },
      { href: '/how-to-cook-mushrooms-in-air-fryer/', label: 'How to cook mushrooms in an air fryer' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
    ]
  }
];

export const guideArticles: GuideArticle[] = [...methodGuides, ...speciesGuides];

const guideRecipeCards = [
  { name: 'Golden garlic-butter mushrooms', mushroom: 'Cremini or white button', time: '15 min', guide: 'how-to-cook-mushrooms', description: 'Sear sliced mushrooms in a wide hot skillet, then finish with garlic butter once the pan is dry.' },
  { name: 'Dry-sautéed chanterelles', mushroom: 'Golden chanterelles', time: '10 min', guide: 'how-to-cook-chanterelle-mushrooms', description: 'Cook without fat first, then finish with butter, shallot, and thyme.' },
  { name: 'Buttery pan-cooked morels', mushroom: 'Morels', time: '15 min', guide: 'how-to-cook-morel-mushrooms', description: 'Brown halved morels in butter with shallot and garlic, then finish with lemon and chives.' },
  { name: "Golden skillet lion's mane", mushroom: "Lion's mane", time: '15 min', guide: 'how-to-cook-lions-mane-mushrooms', description: 'Press slabs gently in a hot skillet until golden, then finish with garlic butter and lemon.' },
  { name: 'Crisp-edged garlic oyster mushrooms', mushroom: 'Oyster', time: '12 min', guide: 'how-to-cook-oyster-mushrooms', description: 'Sear torn caps hard, then glaze with garlic butter, soy, and lemon.' },
  { name: 'Garlic-butter seared maitake', mushroom: 'Maitake', time: '17 min', guide: 'how-to-cook-maitake-mushrooms', description: 'Hot pan sear maitake until crisp and golden, then finish with garlic butter and soy.' },
  { name: 'Pressed maitake steaks', mushroom: 'Maitake', time: '25 min', guide: 'how-to-cook-maitake-mushrooms', description: 'Roast thick slabs under cast iron until the ruffled edges crisp.' },
  { name: 'Black trumpet butter pasta', mushroom: 'Black trumpet', time: '15 min', guide: 'how-to-cook-black-trumpet-mushrooms', description: 'Sauté trumpets, then toss with linguine, white wine, Parmesan, and lemon zest.' },
  { name: 'King oyster scallops', mushroom: 'King oyster', time: '14 min', guide: 'how-to-cook-king-oyster-mushrooms', description: 'Score stem rounds, sear deeply, then baste with garlic butter.' },
  { name: 'Garlic-butter skillet cremini', mushroom: 'Cremini', time: '12 min', guide: 'how-to-cook-cremini-mushrooms', description: 'Brown halved cremini in a hot skillet with garlic, thyme, and lemon.' },
  { name: 'Garlic-herb grilled mushroom skewers', mushroom: 'Cremini or white button', time: '27 min', guide: 'how-to-grill-mushrooms', description: 'Thread whole mushrooms on skewers, grill over direct heat, and baste with garlic, herbs, and butter.' }
];

export const recipeCards = [
  ...recipeArticles.map((recipe) => ({
    name: recipe.title,
    mushroom: recipe.cardMushroom,
    time: recipe.minutes,
    // Which guide's "Use it in" section this recipe surfaces on.
    guide: recipe.cardGuide,
    href: `/${recipe.slug}/`,
    description: recipe.description,
  })),
  ...guideRecipeCards.map((recipe) => ({ ...recipe, href: `/${recipe.guide}/` })),
];
