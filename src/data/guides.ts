import { recipeArticles } from './recipes';

export type GuideSection = {
  heading: string;
  text?: string;
  bullets?: string[];
  ordered?: string[];
  quote?: string;
  table?: { headings: string[]; rows: string[][] };
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
  // Groups the guides index. Species pages are identified by mushroomSlug;
  // everything else is a method guide unless marked 'storage'.
  group?: 'storage';
  image?: string; // local path under /public only — never hotlink external images
  imageAlt?: string;
  badge?: string;
  sections?: GuideSection[];
  relatedLinks?: GuideLink[];
  // External citations, rendered as a "Sources" list at the end of the article.
  // Only for pages where a reader makes a real food-safety decision, and only
  // when the linked page actually states the claim. Followed links (no nofollow)
  // — that is the point of the citation.
  sources?: GuideLink[];
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
  { mushroom: 'Chicken of the woods', mushroomSlug: 'chicken-of-the-woods', method: 'Sear + covered finish', methodSlug: 'pan', time: '15–20 min', heat: 'Medium-high, then medium', fat: '2 tbsp oil, butter at finish', done: 'Centres tender and steaming; no dry, chalky core.' },
  { mushroom: 'Chicken of the woods', mushroomSlug: 'chicken-of-the-woods', method: 'Oven roast', methodSlug: 'oven', time: '25–30 min', heat: '400°F / 200°C', fat: '2 tbsp oil per 12 oz / 340 g', done: 'Edges browned and crisp, centres tender all the way through.' },
  { mushroom: 'Puffball', mushroomSlug: 'puffball', method: 'Pan sear', methodSlug: 'pan', time: '6–8 min', heat: 'Medium-high', fat: '2 tbsp oil per 1 lb / 454 g', done: 'Both faces deep golden, centres custardy not squeaky.' },
  { mushroom: 'Puffball', mushroomSlug: 'puffball', method: 'Grill (slabs)', methodSlug: 'grill', time: '6–8 min', heat: 'Medium-high direct, 425–450°F / 220–230°C', fat: 'Brush with oil', done: 'Grill-marked and tender; cut 3/4 inch thick so slabs hold.' },
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
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' },
      { href: '/how-to-store-mushrooms/', label: 'How to store mushrooms so they stay firm' },
      { href: '/how-to-tell-if-mushrooms-are-bad/', label: 'How to tell if mushrooms are bad' },
      { href: '/how-to-cook-chicken-of-the-woods/', label: 'How to cook chicken of the woods' }
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
      { href: '/how-to-cook-puffball-mushrooms/', label: 'How to cook puffball mushrooms' },
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
    slug: 'how-to-clean-mushrooms',
    group: 'storage', label: 'Cleaning mushrooms', badge: 'Start here', title: 'How to Clean Mushrooms Before Cooking', description: 'Clean mushrooms with a brush, damp towel, or a quick rinse—never a soak. What to use for each variety so they brown instead of steam.', minutes: '4 min', updated: '2026-07-11', isoTime: 'PT5M', prepIsoTime: 'PT2M', heat: 'No heat', cut: 'Clean whole before cutting', finish: 'Dry completely before cooking', showCookTimes: false,
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
      { href: '/how-to-store-mushrooms/', label: 'How to store mushrooms after cleaning' },
      { href: '/how-to-tell-if-mushrooms-are-bad/', label: 'How to tell if mushrooms are bad' },
    ]
  },
  {
    slug: 'how-to-store-mushrooms',
    group: 'storage', label: 'Storing mushrooms', badge: 'Start here', title: 'How to Store Mushrooms So They Stay Firm, Not Slimy', description: 'Store mushrooms unwashed in their vented carton or a paper bag on a main fridge shelf, never sealed plastic. Shelf life by variety and when to cook them.', minutes: '6 min', updated: '2026-08-07', isoTime: 'PT2M', prepIsoTime: 'PT1M', heat: 'No heat', cut: 'Store whole; slice only before cooking', finish: 'Cook them before the caps wrinkle', showCookTimes: false,
    quickFacts: [
      { label: 'Where', value: 'Main fridge shelf, at or below 40°F / 4°C' },
      { label: 'Wrapper', value: 'Vented carton or paper bag' },
      { label: 'Washing', value: 'Only in the minute before cooking' },
      { label: 'Typical window', value: '3–7 days, by variety' },
    ],
    image: '/images/cookmushroom-storing-mushrooms-hero.webp', imageAlt: 'Cremini mushrooms in an open paper bag beside a vented carton on a refrigerator shelf',
    steps: [
      'Do not wash mushrooms before storing them. Surface water is what turns caps slimy in the bag — clean them in the minute before they reach the pan instead.',
      'Leave store-bought mushrooms in the carton they came in. The film lid is perforated on purpose and the tray keeps air moving underneath.',
      'For loose or opened mushrooms, use a paper bag and fold the top over once. Paper absorbs the moisture they give off while still letting them breathe.',
      'Put the bag or carton on a main shelf toward the back, the coldest part of the fridge. If you use the crisper drawer, set its vent to low humidity so moisture does not collect around the bag.',
      'Keep mushrooms away from onions, garlic, and anything strongly aromatic. They are porous and pick up smells from their neighbours.',
      'Check them each day. Firm and dry to the touch means keep going; damp, dark, or wrinkled means cook them tonight.'
    ],
    tips: [
      'An opened carton still works. Re-cover it loosely with the original film or a paper towel instead of switching to a zip-top bag.',
      'A folded paper towel in the container catches condensation. Swap it out once it feels damp.',
      'Slice mushrooms only when you are ready to cook. Cut surfaces dry out, brown, and lose their window far faster than whole caps.',
      'Buy the quantity you will cook that week. No storage method beats a mushroom that was in the ground four days ago.'
    ],
    pairings: ['the pan method', 'oven-roasted mushrooms', 'grilled mushrooms', 'dried mushroom broth'],
    sections: [
      { heading: 'The 30-second answer', text: 'Unwashed, in the fridge, in something that breathes. The vented carton mushrooms come in is already the right container; a paper bag is the right replacement once you open it. Sealed plastic is the one real mistake — it traps the moisture the mushrooms give off and returns it to their surfaces as slime.' },
      { heading: 'The rule', quote: 'Mushrooms spoil from water and warmth. Every good storage decision is about removing one of the two.' },
      { heading: 'Why mushrooms last nine days at the farm and three at home', text: 'Post-harvest handling research puts the optimum for mushrooms at 32–34°F with 95% relative humidity, which gives a shelf life of roughly 7 to 9 days. At 36°F — still a cold fridge by any home standard — that window falls to 3 to 5 days, because surface browning, stem elongation, and veil opening all accelerate. Home refrigerators run around 37–40°F and much drier than 95%, so the honest expectation for most mushrooms is a handful of days, not a week. That is the single biggest reason mushrooms bought on Sunday look tired by Wednesday, and it is why the coldest shelf beats a fancier container every time.' },
      { heading: 'Paper bag, original carton, or zip-top?', bullets: [
        'Original carton: the best option and the one already in your hand. The perforated film and the tray were designed for the mushroom respiration rate.',
        'Paper bag: the right container for loose mushrooms or an opened pack. It absorbs surface moisture and still lets air through. Fold the top over rather than rolling it shut.',
        'Zip-top or sealed container: the mistake. Mushrooms respire quickly, and a sealed bag turns that moisture straight back into condensation on the caps.',
        'Bare on a shelf: they will not go slimy, but they dehydrate — caps shrivel, edges curl, and the texture goes leathery in the pan.',
        'Reused cardboard or a food container: fine if it is clean and not sealed. Line it with parchment or a paper bag if it has held anything else.'
      ] },
      { heading: 'Shelf life by variety', text: 'These are texture windows for whole, unwashed mushrooms in a fridge held at or below 40°F. Treat them as quality guides, not safety deadlines — the checks in the next section beat the calendar every time. Denser mushrooms hold longest; thin-edged and delicate ones go first.',
        table: {
          headings: ['Mushroom', 'Whole, unwashed', 'Sliced or opened', 'First thing to go'],
          rows: [
            ['Button / cremini', '5–7 days', '3–5 days', 'Caps darken; gills open out underneath'],
            ['Portobello', '4–6 days', '2–3 days', 'Gills turn black and damp'],
            ['Shiitake', '7–10 days', '4–5 days', 'Caps dry and curl at the rim'],
            ['King oyster', '7–10 days', '3–4 days', 'Cut stem end dries and yellows'],
            ['Oyster', '3–5 days', '2–3 days', 'Thin edges wilt and go translucent'],
            ['Maitake', '4–6 days', '2–3 days', 'Frond tips soften and darken'],
            ['Enoki', '5–7 days', '2 days', 'Stems turn slippery near the base'],
            ['Shimeji', '5–7 days', '3 days', 'The clustered base browns'],
            ["Lion's mane", '3–5 days', '2 days', 'Spines yellow and the surface weeps'],
            ['Chanterelles, morels (market-bought)', '3–5 days', 'Cook the day you cut them', 'Caps go limp and smell sour'],
            ['Wood ear (fresh)', '5–7 days', '3 days', 'Loses its snap'],
            ['Dried, any variety', 'Months in a sealed jar', 'Use within a year', 'Aroma fades long before it looks different']
          ]
        }
      },
      { heading: 'Where in the fridge they should sit', text: 'The back of a main shelf is colder and steadier than the door or the front. The crisper drawer is a reasonable second choice, but only with the vent open to low humidity; a drawer sealed for greens holds exactly the moisture mushrooms need to shed. Keep them off the very bottom of the fridge if that is where condensation collects, and keep them away from cut onions and garlic, which they will taste like by day three.' },
      { heading: 'Cleaned, sliced, and cooked mushrooms', text: 'Cleaned mushrooms are on a different clock. Once you have brushed or rinsed them, cook them the same day — the moisture you added is now working against them. Sliced mushrooms hold two to three days at best, and their cut faces brown as they sit. Cooked mushrooms are the easiest of the three: cooled and refrigerated in a closed container, they keep about 3 days and reheat best in a hot dry skillet rather than a microwave.' },
      { heading: 'The signs they are going', text: 'Three things mean throw them out: a slick, tacky film on the cap, a sour or fishy smell, and fuzzy growth. Wrinkled caps, darkened gills, and dry brown bruises are quality signals rather than safety ones — those mushrooms belong in tonight’s pan, not the bin. Our guide to telling if mushrooms have gone bad works through every symptom in a table, including the ones that look alarming and are not.' },
      { heading: 'When to stop storing and start cooking', text: 'The best answer to a fridge full of aging mushrooms is a pan, not a better container. Mushrooms two or three days past their best brown better than fresh ones, because they have already lost some of their water. Cook the whole batch down, then store what you made: cooked mushrooms hold 3 days in the fridge and freeze usefully for a couple of months, while raw mushrooms frozen without cooking turn watery on thawing.' }
    ],
    faqs: [
      { question: 'Should you store mushrooms in paper or plastic?', answer: 'Paper, or the vented carton they came in. A sealed plastic bag traps the moisture mushrooms give off and returns it to their surfaces, which is what makes caps slimy. Paper absorbs it while still letting air through.' },
      { question: 'How long do mushrooms last in the fridge?', answer: 'Most whole button and cremini mushrooms hold 5 to 7 days; dense shiitake and king oyster stretch to about 10; delicate oyster and lion’s mane go first at 3 to 5. Sliced mushrooms lose roughly half that window.' },
      { question: 'Should you wash mushrooms before storing them?', answer: 'No. Washing adds the surface water that causes sliminess in storage. Clean mushrooms in the minute before they go into the pan instead, and dry them well.' },
      { question: 'Can you store mushrooms at room temperature?', answer: 'Only for a few hours. Mushrooms respire quickly and warmth accelerates browning, stem elongation, and veil opening — at a counter temperature they visibly decline within a day.' },
      { question: 'Are wrinkled mushrooms still good?', answer: 'Usually yes. Wrinkling is dehydration rather than spoilage, and the flavor is concentrated. Use them somewhere with liquid — soup, gravy, a braise. Sliminess and sour smells are the signals to stop.' },
      { question: 'Should mushrooms go in the crisper drawer?', answer: 'Only with the vent set to low humidity. A drawer sealed for leafy greens holds the exact moisture mushrooms need to release. A main shelf toward the back is simpler and colder.' },
      { question: 'How do you store mushrooms you cannot cook in time?', answer: 'Cook them first, then store what you made. Sautéed mushrooms keep about 3 days refrigerated and freeze for a couple of months; raw mushrooms frozen without cooking thaw watery and soft.' }
    ],
    storage: [
      'Fresh, whole: unwashed, in the vented carton or a folded paper bag, on a main fridge shelf.',
      'Cleaned or sliced: cook the same day if cleaned, within 2 to 3 days if sliced.',
      'Cooked: cool completely, then refrigerate in a closed container for up to 3 days.',
      'Reheating: a hot dry skillet for 2 to 3 minutes crisps the edges again; a microwave leaves them soft.'
    ],
    variations: [
      'Bought loose in bulk: split them into two paper bags rather than one crowded one, so air reaches the mushrooms in the middle.',
      'Pre-sliced packs: leave them sealed as sold and use them by the date on the pack — the cut faces are already exposed.',
      'Market-purchased or expert-verified wild mushrooms: store them in a single layer on a towel-lined tray, loosely covered, and cook them within a few days.',
      'Dried mushrooms: an airtight jar in a dark cupboard, away from the stove. They keep for many months, but the aroma fades long before they look any different.'
    ],
    sources: [
      { href: 'https://www.foodsafety.gov/keep-food-safe/foodkeeper-app', label: 'USDA FoodKeeper — storage timelines for fresh produce' },
      { href: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts', label: 'FoodSafety.gov — Cold Food Storage Chart' },
    ],
    relatedLinks: [
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-cook-mushrooms/', label: 'How to cook mushrooms so they brown, not steam' },
      { href: '/how-to-cook-frozen-mushrooms/', label: 'How to cook frozen mushrooms' },
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' },
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-tell-if-mushrooms-are-bad/', label: 'How to tell if mushrooms have gone bad' },
      { href: '/how-to-freeze-mushrooms/', label: 'How to freeze mushrooms without ruining them' },
      { href: '/how-to-dry-mushrooms/', label: 'How to dry mushrooms in a dehydrator or oven' },
      { href: '/mushroom-cook-time-chart/', label: 'Mushroom cook time chart' }
    ]
  },
  {
    slug: 'how-to-tell-if-mushrooms-are-bad',
    group: 'storage', label: 'Spoiled mushrooms', badge: 'Safety check', title: 'How to Tell If Mushrooms Are Bad (Slime, Smell, Spots)', description: 'Mushrooms have gone bad when they feel slimy, smell sour or fishy, or grow fuzzy mold. Wrinkles and dark caps are usually still fine to cook.', minutes: '6 min', updated: '2026-08-17', isoTime: 'PT2M', prepIsoTime: 'PT1M', heat: 'No heat', cut: 'Halve one mushroom to check the inside', finish: 'Cook the good ones tonight', showCookTimes: false,
    quickFacts: [
      { label: 'Throw out', value: 'Slime, fuzz, sour or fishy smell' },
      { label: 'Still good', value: 'Wrinkled, dry, darkened, open gills' },
      { label: 'Cook tonight', value: 'Damp patches or a faint musty note' },
      { label: 'Cooked leftovers', value: 'About 3 days refrigerated' },
    ],
    image: '/images/cookmushroom-mushrooms-going-bad-hero.webp', imageAlt: 'Four firm cremini mushrooms on a wooden board beside two older ones with cracked darkened caps, one turned over showing dark open gills',
    steps: [
      'Look first. Spread the mushrooms out on a board. You are looking for wet patches that spread, fuzzy growth, and liquid pooled in the carton — not for colour, which changes on every mushroom as it ages.',
      'Touch one. A good mushroom is dry and slightly suedelike, and it springs back when you press the cap. A tacky, slick film that clings to your fingers is the end of the line.',
      'Smell the batch, not one mushroom. Put your nose near the open container. Fresh mushrooms smell faintly earthy and of very little else; sour, fishy, or ammonia notes mean throw them out.',
      'Halve a doubtful one. The interior should be uniformly pale and dry-looking. Brown, wet, or streaked flesh inside means the breakdown has gone past the surface.',
      'Sort into three piles: bin, cook tonight, keep. Cook the middle pile down in a hot dry pan tonight — cooked mushrooms buy you another three days.'
    ],
    tips: [
      'Weight tells you more than colour. A mushroom that feels light for its size has lost water, which is a texture problem, not a safety one.',
      'One slimy mushroom does not condemn the pack. Remove it, check its neighbours by hand, and cook the rest immediately.',
      'Visible mold is different — discard the whole container rather than picking around it. Mold threads run further than the fuzz you can see in a soft, wet food.',
      'If you have to talk yourself into it, bin it. Mushrooms are cheap and a spoiled batch tastes sour even after hard browning.'
    ],
    pairings: ['the pan method', 'oven-roasted mushrooms', 'mushroom storage', 'dried mushroom broth'],
    sections: [
      { heading: 'The 30-second answer', text: 'Trust your hands and your nose before the date on the pack. A mushroom that is dry, firm, and smells of almost nothing is good, however dark or wrinkled it looks. Three signals mean throw it out: a slick, tacky film on the cap, a sour or fishy smell, and fuzzy growth. Everything else on this page — wrinkles, brown caps, black gills, stretched stems — is a quality problem, and quality problems are solved in a hot pan tonight.' },
      { heading: 'The rule', quote: 'Slime, sour smell, and fuzz mean bin it. Wrinkles, dark caps, and open gills just mean cook them tonight.' },
      { heading: 'Symptom by symptom', text: 'Find what you are actually looking at, then read across. The verdicts assume mushrooms that have been refrigerated the whole time; anything left out overnight on a warm counter gets binned regardless of how it looks.',
        table: {
          headings: ['What you see or feel', 'What it is', 'Verdict'],
          rows: [
            ['Slick, tacky film on the cap', 'Bacterial breakdown on a wet surface', 'Throw out'],
            ['Sour, fishy, or ammonia smell', 'Spoilage well underway', 'Throw out'],
            ['Fuzzy white, green, or grey growth', 'Mold on a high-moisture food', 'Throw out the whole container'],
            ['Wet dark patches that spread', 'Soft rot moving through the cap', 'Throw out'],
            ['Liquid pooled in the carton', 'The mushrooms are weeping', 'Smell them: sour means bin, clean means cook now'],
            ['Wrinkled caps, light in the hand', 'Dehydration, not spoilage', 'Good — use in soup, gravy, or a braise'],
            ['Caps darkened to tan or brown', 'Normal oxidation with age', 'Good — they brown better than fresh ones'],
            ['Gills open and dark underneath', 'A mushroom that matured after harvest', 'Good — deeper flavour, darker sauce'],
            ['Small dry brown spots or bruises', 'Handling marks', 'Good — trim them if you like'],
            ['Stems stretched, veil torn', 'Growth continued in the fridge', 'Good — quality is falling, cook this week'],
            ['White fluff at the stem base', 'Usually mycelium, not mold', 'Good if it is dry and smells earthy']
          ]
        }
      },
      { heading: 'Slime is the signal that ends it', text: 'Sliminess is the one sign with no workaround. It is a wet bacterial film on the cap surface, and it does not cook off — it carries a sour taste straight into the pan and no amount of browning covers it. The test is your fingertips, not your eyes: run a finger across a cap and see whether it drags. A good mushroom feels dry and faintly suedelike; a spoiled one feels like it has been wiped with oil. Once one mushroom in a pack is genuinely slimy, check the rest by hand rather than by sight, because the ones underneath it usually went first.' },
      { heading: 'Wrinkled and light is not spoiled', text: 'The most common mistake is throwing away perfectly good mushrooms because they shrivelled. Wrinkling is water loss, which is the opposite problem to spoilage, and it concentrates flavour rather than ruining it. A wrinkled mushroom that still smells of nothing much is a soup mushroom, a gravy mushroom, or a braise mushroom — put it somewhere with liquid, where the texture never mattered. It is only a problem if you wanted it whole and glossy on a plate. Mushrooms that have dried to the point of being hard and leathery are also still usable: treat them like a dried mushroom and rehydrate them.' },
      { heading: 'Dark caps, black gills, and bruises', text: 'Mushrooms brown as they age the way a cut apple does, and the gills of a button mushroom open from pale pink to chocolate brown to near black as the cap flattens out. None of that is spoilage. A darkened cremini browns faster in a pan than a bright white one because it has already given up water, and mature open gills make a noticeably deeper mushroom sauce. Portobellos have black gills the day you buy them. What you are checking on a dark mushroom is whether the darkness is dry or wet: dry and even is age, while a dark patch that is damp and spreading outward from a point is rot.' },
      { heading: 'What a bad mushroom smells like', text: 'The smell test is the most reliable of the three, and the easiest to do badly. Open the container and put your nose over the whole batch rather than sniffing one mushroom — spoilage smells are concentrated in the trapped air. A fresh mushroom smells faintly of damp earth and almost nothing else; some varieties, like shiitake and matsutake, smell distinctly of themselves and always have. What you are listening for is a change in character rather than strength: sour, fishy, or a sharp ammonia note. Any of those, and the batch goes out even if it looks fine. Smell beats appearance every time, because a mushroom can be well into breaking down before its surface shows it.' },
      { heading: 'Fuzz: mold, or the mushroom itself?', text: 'Fine white fluff around the base of a stem or between mushrooms in a cluster is usually mycelium — the fungus that grew the mushroom, still alive and still growing. It is dry, it sits where the mushroom met its growing medium, and it smells earthy. That batch is fine. Mold is different: it sits on the cap rather than the base, it is often green, grey, or blue-tinged, it looks damp or cottony, and it comes with a musty smell. Because mushrooms are soft and full of water, food-safety guidance for high-moisture foods is to discard the item rather than cut the mold away — the threads spread further than the visible patch. When you genuinely cannot tell the two apart, use the smell and the surface underneath: dry and earthy stays, damp and musty goes.' },
      { heading: 'Sliced, cleaned, and cooked mushrooms are on different clocks', bullets: [
        'Pre-sliced packs go first. Every cut face is exposed surface, so they brown, weep, and sour faster than whole caps — use them by the date on the pack and trust your nose over it.',
        'Mushrooms you washed are on a same-day clock. The water you added is the water that causes sliminess, which is why cleaning belongs in the minute before cooking.',
        'Cooked mushrooms keep about 3 days refrigerated in a closed container. They are safe long before they are good — a sour or fizzy note or any sliminess in the container means bin them.',
        'Cooked mushrooms left out at room temperature for more than 2 hours go out regardless of how they look or smell. That is the general rule for cooked foods, not a mushroom quirk.',
        'Frozen cooked mushrooms hold a couple of months and cannot really "go bad" in the freezer, but they get watery and flat after that. Raw mushrooms frozen without cooking always thaw soft.'
      ] },
      { heading: 'Varieties that mislead you', bullets: [
        'Portobello: black, damp-looking gills are how it arrives. Judge the cap edge and the cut stem instead — a rim that has gone soft and wet is the real signal.',
        'Oyster: thin edges wilt and go translucent early. Translucent and dry is tired but usable; translucent and slimy is finished.',
        'Enoki: the compact base browns and goes slippery well before the caps do. Trim generously; if the slipperiness reaches the stems, bin the bundle.',
        "Lion's mane: the spines yellow and the surface starts to weep. Yellowing alone is age. Weeping plus a sour smell is spoilage.",
        'Shiitake: caps dry and curl at the rim, which is nearly harmless — dry shiitake caps are still excellent in broth.',
        'Chanterelles and morels (market-purchased or expert-verified): both go limp and smell sour quickly. Morels also collect grit and small insects in their pits, so halve them and look inside before deciding.',
        'Wood ear (fresh): it loses its snap first. A lobe that folds without springing back has passed its point, even with no smell.'
      ] },
      { heading: 'Wild mushrooms have one extra rule', text: 'Everything above is about spoilage — mushrooms you already know are edible getting old. It says nothing about whether a wild mushroom was safe to eat in the first place, and no freshness check substitutes for identification. Cook only mushrooms that were market-purchased or verified by an expert who handled the actual specimen, and never eat a wild mushroom on the strength of a photo match. Foraged mushrooms also spoil faster than shop-bought ones because they were rarely chilled straight after picking: store them in a single layer on a towel-lined tray and cook them within a few days.' },
      { heading: 'The date on the package', text: 'The date printed on a mushroom carton is a quality estimate from the packer, not a safety deadline, and it assumes a colder fridge than most homes run. Whole button mushrooms are often perfectly good three days past it and occasionally sour two days before it, depending on how long they sat in a warm delivery van. Use the date to decide what to cook first when you open the fridge, and use your hands and nose to decide whether to cook it at all.' },
      { heading: 'When you are not sure', text: 'The honest answer for a borderline batch is that it is a cooking decision, not a gamble. Cook one mushroom in a dry pan and taste it: good mushrooms taste savoury and faintly sweet, and mushrooms on the way out taste sour or metallic in a way that hard browning does not hide. If the smell already gave you pause, skip that step and bin them — a spoiled batch will not improve, and mushrooms are among the cheapest things in the fridge to replace.' }
    ],
    faqs: [
      { question: 'Are slimy mushrooms safe to eat if you cook them?', answer: 'No. Sliminess is a bacterial film on the cap, and cooking does not remove the sour taste it carries. Throw slimy mushrooms out rather than washing or browning them.' },
      { question: 'Can you eat mushrooms that have turned brown?', answer: 'Usually yes. Browning is oxidation with age, not spoilage, and darkened mushrooms actually brown faster in a hot pan because they have already lost water. Check that the darkness is dry and even rather than a wet patch that is spreading.' },
      { question: 'Are wrinkled mushrooms still good?', answer: 'Yes, in most cases. Wrinkling is dehydration and it concentrates flavour. Use them where texture does not matter — soup, gravy, a braise. Slime and sour smells are the signals to stop, not shrivelling.' },
      { question: 'What does a bad mushroom smell like?', answer: 'Sour, fishy, or sharply of ammonia. Fresh mushrooms smell faintly earthy and of little else. Smell the whole open container rather than one mushroom, since spoilage odours concentrate in the trapped air.' },
      { question: 'Is the white fuzz on my mushrooms mold?', answer: 'Usually not. Dry white fluff at the stem base is mycelium, the fungus itself, and it is harmless. Mold sits on the cap, looks damp or cottony, often carries a green or grey tint, and smells musty — discard the whole container in that case.' },
      { question: 'How long do mushrooms last in the fridge?', answer: 'Whole button and cremini mushrooms hold about 5 to 7 days, dense shiitake and king oyster closer to 10, and delicate oyster or lion’s mane 3 to 5. Sliced mushrooms lose roughly half that window. Storage method changes those numbers more than the variety does.' },
      { question: 'Can old mushrooms make you sick?', answer: 'Spoiled mushrooms carry the bacteria and molds that broke them down, and eating them can cause stomach upset. This is ordinary food spoilage rather than mushroom toxicity, and the fix is the same as for any soft, wet food: when it is slimy, smells sour, or has fuzzy growth, throw it out.' },
      { question: 'Do cooked mushrooms go bad faster than raw ones?', answer: 'They keep about 3 days refrigerated, which is shorter than a whole raw mushroom but longer than a mushroom that was already on its last day. Cooking a tired batch tonight is the standard way to buy time.' }
    ],
    storage: [
      'Still good: back to a vented carton or folded paper bag on a main fridge shelf, unwashed.',
      'Borderline: cook the whole batch down tonight in a hot dry pan, then refrigerate what you made.',
      'Cooked: closed container in the fridge for about 3 days; reheat in a hot dry skillet, not a microwave.',
      'Past it: bin the whole container rather than sorting through it, and wash the tray or drawer it sat in.'
    ],
    sources: [
      { href: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/molds-food-are-they-dangerous', label: 'USDA FSIS — Molds on Food: Are They Dangerous?' },
      { href: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts', label: 'FoodSafety.gov — Cold Food Storage Chart' },
      { href: 'https://www.foodsafety.gov/keep-food-safe/foodkeeper-app', label: 'USDA FoodKeeper — storage timelines for fresh produce' },
    ],
    relatedLinks: [
      { href: '/how-to-store-mushrooms/', label: 'How to store mushrooms so they stay firm' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-cook-mushrooms/', label: 'How to cook mushrooms so they brown, not steam' },
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-freeze-mushrooms/', label: 'How to freeze mushrooms without ruining them' },
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' },
      { href: '/how-to-cook-frozen-mushrooms/', label: 'How to cook frozen mushrooms' }
    ]
  },
  {
    slug: 'how-to-freeze-mushrooms',
    group: 'storage', label: 'Freezing mushrooms', badge: 'Cook first', title: 'How to Freeze Mushrooms (Sauté First, Not Raw)', description: 'Freeze mushrooms after cooking, not raw: sauté or steam them first, cool them completely, then freeze flat in portions for up to 3 months.', minutes: '6 min', updated: '2026-08-17', isoTime: 'PT12M', prepIsoTime: 'PT10M', heat: 'Medium-high in the pan, then 0°F / -18°C', cut: 'Slice or quarter before cooking', finish: 'Cool completely, then freeze flat', showCookTimes: false,
    quickFacts: [
      { label: 'Best method', value: 'Sauté, cool, then freeze' },
      { label: 'Raw freezing', value: 'Only for mushrooms headed to soup' },
      { label: 'Keeps', value: '2–3 months for good texture' },
      { label: 'Thawing', value: 'Never — cook them from frozen' },
    ],
    image: '/images/cookmushroom-freezing-mushrooms-hero.webp', imageAlt: 'Browned sautéed mushroom slices spread in a single layer on a parchment-lined tray, cooled and ready to freeze',
    steps: [
      'Clean and cut the mushrooms as you would for cooking: quarter small ones, slice large ones about 1/4 inch thick. Keep the pieces even so they cook at the same rate.',
      'Sauté them in a wide pan over medium-high heat with a little oil, in batches if the pan is crowded. Cook until the released liquid has evaporated and the edges are browned, about 8 to 10 minutes.',
      'Season lightly or not at all. Salt draws out more water in the freezer, and you can season properly when you cook the mushrooms for real.',
      'Cool them completely on a plate or tray. Freezing anything warm builds ice crystals inside the bag and raises the temperature of everything around it.',
      'Freeze in a single layer on a lined tray for about an hour, until firm. This keeps the pieces separate so you can pour out a handful instead of chiselling at a block.',
      'Bag them flat, press the air out, label with the date, and stack. Flat bags freeze faster, thaw faster, and store better than lumpy ones.'
    ],
    tips: [
      'Freeze in the portions you actually cook with. A 1-cup bag goes into a pan or a soup; a 2-pound brick has to be defrosted as a whole before you can use any of it.',
      'Undercook slightly if the mushrooms are destined for a long-simmered dish. They will finish cooking in the pot.',
      'Squeeze the air out by hand, or lower a nearly-sealed bag into a bowl of water so the pressure pushes the air out through the last inch of the seal.',
      'Label the variety as well as the date. Frozen cooked mushrooms all look alike, and porcini deserve better than being mistaken for button mushrooms.'
    ],
    pairings: ['soups', 'pasta sauces', 'gravy', 'risotto', 'stews', 'fillings'],
    sections: [
      { heading: 'The 30-second answer', text: 'Cook mushrooms before you freeze them. Sauté them in a wide pan until the water has cooked off and the edges brown, cool them completely, freeze them in a single layer on a tray, then bag them flat. They keep 2 to 3 months with good texture and cook straight from frozen. Freezing mushrooms raw is the common shortcut and it is the reason so many people think frozen mushrooms are watery — raw mushrooms are roughly 90 percent water, and freezing that water is what wrecks them.' },
      { heading: 'The rule', quote: 'Freeze cooked mushrooms, not raw ones. The pan removes the water that the freezer would otherwise turn against you.' },
      { heading: 'Why raw mushrooms freeze badly', text: 'Water expands as it freezes. Inside a raw mushroom that water sits in intact cells, so the ice crystals puncture the cell walls from the inside out. Nothing puts those walls back — when the mushroom thaws, it slumps and leaks the water it was holding, and you get a grey, limp piece that steams instead of browning. Cooking first drives off most of that water before it can do the damage, which is why a sautéed mushroom comes out of the freezer as recognisably a mushroom and a raw one comes out as a wet sponge. This is also why you should never refreeze mushrooms that have thawed: the second round of ice crystals works on tissue that has already been broken once.' },
      { heading: 'Four ways to freeze, compared', text: 'All four start with clean, dry, evenly cut mushrooms. The difference is how much work you do now versus how much texture you have later.',
        table: {
          headings: ['Method', 'Prep time', 'Keeps well', 'Texture after cooking', 'Best for'],
          rows: [
            ['Sautéed', '15–20 min', '2–3 months', 'Best — browned and firm', 'Almost everything; the default'],
            ['Steam-blanched', '10–15 min', '3–4 months', 'Soft but intact', 'Large batches, freezer efficiency'],
            ['Roasted', '25–30 min', '2–3 months', 'Concentrated, slightly chewy', 'Sheet-pan volume with no stirring'],
            ['Raw, sliced', '5 min', '1–2 months', 'Watery and limp', 'Soups and stocks only'],
            ['Duxelles (cooked paste)', '30–40 min', '3 months', 'Excellent — it was already a paste', 'Sauces, fillings, stuffed anything']
          ]
        }
      },
      { heading: 'The sauté method, in detail', text: 'This is the one to use unless you have a reason not to. Work in batches wide enough that the mushrooms sit mostly flat — a crowded pan steams, and steamed mushrooms carry their water into the freezer with them. Use a little oil rather than butter, because butter solidifies oddly when frozen and browns again unevenly on reheating. Stop when the pan looks dry and the edges are properly browned, not merely softened: any liquid still in the pan is liquid that becomes ice. Skip the garlic, herbs, wine, and cream — aromatics fade or turn bitter over months, and dairy splits on thawing. Season those in when you cook the mushrooms for the dish they are actually going into.' },
      { heading: 'The steam-blanch method, for volume', text: 'Blanching is how commercial packers do it, and it is worth knowing if you have bought several pounds cheap. Steam the pieces over boiling water for 3 to 5 minutes depending on thickness, until they are heated through and slightly translucent, then plunge them into ice water to stop the cooking and drain them thoroughly. Steaming beats boiling here because boiled mushrooms absorb water rather than losing it. Blanched mushrooms keep a month or so longer than sautéed ones, because the brief cooking deactivates the enzymes that dull flavour over time, but they come out softer and without any browning. They are best where they will be simmered anyway.' },
      { heading: 'When freezing raw is actually fine', text: 'There is one honest use for raw frozen mushrooms: anything that ends up in liquid and cooks for a long time. Stock, broth, a long-simmered soup, a bolognese. In those dishes the texture was never going to survive anyway, and the flavour transfers fine. If you are doing it, slice the mushrooms first, freeze them in a single layer, bag them, and use them within a month or two — and cook them straight from frozen, without thawing. Shiitake stems and mushroom trimmings are the best candidates of all, since a scrap bag in the freezer becomes stock later at no cost.' },
      { heading: 'Portion flat, portion small', text: 'How you bag mushrooms matters nearly as much as how you cook them. A flat bag freezes through in a fraction of the time a lumpy one takes, which means smaller ice crystals and less damage, and it thaws evenly and stacks like a file. Press out as much air as you can — air is what causes freezer burn, the dry greyish patches that taste of nothing. Then portion for the way you actually cook: roughly a cup per bag covers a pasta sauce or a risotto, and it is far easier to use two bags than to hack a portion off a frozen block.' },
      { heading: 'How long they really keep', text: 'Food held constantly at 0°F / -18°C stays safe indefinitely — freezing does not make food unsafe, it just stops the clock. What runs out is quality. Sautéed mushrooms hold their texture and flavour for about 2 to 3 months, blanched ones 3 to 4, and raw ones 1 to 2 before they turn noticeably watery and flat. Past those windows they are still perfectly edible and simply less good, so use the older bags in stews and soups where nobody is examining the texture. A freezer that gets opened constantly, or one that defrost-cycles, shortens all of these numbers.' },
      { heading: 'Which mushrooms freeze best', bullets: [
        'Button, cremini, portobello: freeze very well sautéed. The workhorses of this method.',
        'Shiitake, maitake, king oyster: dense enough to hold their structure; among the best results you will get.',
        'Porcini, morels, black trumpets (market-purchased or expert-verified): freeze well cooked, though drying suits them even better if you want the flavour concentrated.',
        'Chanterelles: dry-sauté them first, exactly as you would to cook them, then freeze. Raw-frozen chanterelles turn to mush.',
        'Oyster and shimeji: acceptable but not exciting — the thin edges go limp. Send them to soups.',
        "Enoki and lion's mane: skip it. Both are too delicate to come back from freezing in any useful state.",
        'Wood ear: no reason to bother. It is sold dried and rehydrates perfectly, which is a better route.'
      ] },
      { heading: 'What not to do', bullets: [
        'Do not thaw before cooking. Frozen mushrooms go straight into a hot dry pan; thawed ones leak onto the board and go limp.',
        'Do not refreeze anything that has thawed. Texture collapses and the food-safety margin narrows.',
        'Do not freeze in the shop carton. It is vented on purpose, which is the opposite of what a freezer needs.',
        'Do not salt heavily before freezing. Salt pulls water out and lowers the freezing point, both of which work against you here.',
        'Do not freeze mushrooms that were already on the edge. The freezer pauses spoilage, it does not reverse it — a mushroom that smelled sour going in smells sour coming out.'
      ] },
      { heading: 'Cooking them afterwards', text: 'Take them straight from the freezer into a hot, dry pan and let the ice water boil off before you add fat — the same sequence as fresh mushrooms, just with more water to drive away at the start. Expect them to be softer than fresh no matter how carefully you froze them, and put them where that does not matter: soups, sauces, gravies, risotto, fillings, pizza. Our guide to cooking frozen mushrooms walks through the pan sequence in detail, including the reasons thawing makes it worse.' }
    ],
    faqs: [
      { question: 'Can you freeze mushrooms raw?', answer: 'You can, but they thaw watery and limp because ice crystals rupture the cell walls of a food that is about 90 percent water. Raw freezing only makes sense for mushrooms headed into stock, soup, or a long-simmered sauce, and they should be used within a month or two.' },
      { question: 'Do you have to cook mushrooms before freezing?', answer: 'For any dish where texture matters, yes. Sautéing drives off most of the water before it can freeze into cell-puncturing crystals, which is the whole reason cooked mushrooms come back from the freezer and raw ones do not.' },
      { question: 'How long do frozen mushrooms last?', answer: 'Sautéed mushrooms hold good texture for 2 to 3 months, blanched for 3 to 4, raw for 1 to 2. At a constant 0°F they stay safe far longer than that — what expires is quality, not safety.' },
      { question: 'Should you thaw frozen mushrooms before cooking?', answer: 'No. Cook them straight from frozen in a hot dry pan and let the ice water boil off first. Thawing lets them leak their water and go limp before they reach any heat.' },
      { question: 'Can you freeze mushrooms whole?', answer: 'You can, but there is rarely a reason to. Whole mushrooms freeze slowly, which means larger ice crystals and worse texture, and they still have to be cut once frozen. Cut them before cooking instead.' },
      { question: 'Why did my frozen mushrooms turn out slimy?', answer: 'Usually one of three things: they were frozen raw, they were thawed before cooking, or the pan never got hot enough to drive off the ice water. Cook from frozen in a wide, hot, dry pan and wait for the sizzling to replace the bubbling.' },
      { question: 'Can you refreeze mushrooms?', answer: 'No. The first freeze already broke the cell structure and the thaw released the water; a second cycle leaves you with pulp, and the time spent above freezing narrows the safety margin as well.' },
      { question: 'Is it better to freeze or dry mushrooms?', answer: 'It depends on the mushroom. Dense, aromatic varieties like porcini, shiitake, and morels concentrate beautifully when dried and store for a year. Everyday button and cremini mushrooms are better sautéed and frozen, since drying them gains little.' }
    ],
    storage: [
      'Sautéed: cooled completely, frozen flat in 1-cup portions, 2 to 3 months for best quality.',
      'Blanched: drained thoroughly, bagged flat, 3 to 4 months.',
      'Raw: sliced and single-layer frozen, 1 to 2 months, for soup and stock only.',
      'All of them: cook from frozen, never thaw, and never refreeze once thawed.'
    ],
    sources: [
      { href: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety', label: 'USDA FSIS — Freezing and Food Safety' },
      { href: 'https://www.foodsafety.gov/keep-food-safe/foodkeeper-app', label: 'USDA FoodKeeper — storage timelines for fresh produce' },
    ],
    relatedLinks: [
      { href: '/how-to-cook-frozen-mushrooms/', label: 'How to cook frozen mushrooms without thawing' },
      { href: '/how-to-dry-mushrooms/', label: 'How to dry mushrooms in a dehydrator or oven' },
      { href: '/how-to-store-mushrooms/', label: 'How to store mushrooms so they stay firm' },
      { href: '/how-to-tell-if-mushrooms-are-bad/', label: 'How to tell if mushrooms are bad' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-cook-chicken-of-the-woods/', label: 'How to cook chicken of the woods' }
    ]
  },
  {
    slug: 'how-to-dry-mushrooms',
    group: 'storage', label: 'Drying mushrooms', badge: 'Keeps a year', title: 'How to Dry Mushrooms in a Dehydrator or Oven', description: 'Dry mushrooms at 125–135°F until they snap rather than bend — 4 to 10 hours in a dehydrator, 2 to 4 in an oven. Slicing, conditioning, and storage.', minutes: '7 min', updated: '2026-08-17', isoTime: 'PT6H', prepIsoTime: 'PT15M', heat: '125–135°F / 52–57°C', cut: 'Even 1/4-inch slices', finish: 'Condition for a week, then store airtight', showCookTimes: false,
    quickFacts: [
      { label: 'Temperature', value: '125–135°F / 52–57°C' },
      { label: 'Cut', value: 'Even slices, about 1/4 inch' },
      { label: 'Done when', value: 'They snap, not bend' },
      { label: 'Keeps', value: 'About a year, airtight and dark' },
    ],
    image: '/images/cookmushroom-drying-mushrooms-hero.webp', imageAlt: 'Thin mushroom slices arranged in a single layer on a wire drying rack beside a jar of finished dried mushrooms',
    steps: [
      'Brush the mushrooms clean. Do not wash them — you are about to spend hours removing water, so adding more at the start is wasted time.',
      'Slice evenly, about 1/4 inch thick. Even thickness matters more than the exact number: a tray of mixed thicknesses finishes at wildly different times and the thick pieces are the ones that spoil the jar.',
      'Lay the slices in a single layer with space around them. Overlapping pieces trap moisture between them and dry unevenly.',
      'Dry at 125–135°F / 52–57°C. Check at 4 hours, then hourly. Most slices take 4 to 8 hours; thick pieces and whole small mushrooms can take 10 or more.',
      'Test on a cooled slice, not a warm one. Warm mushrooms feel pliable even when they are done. A properly dried slice snaps cleanly in half; one that bends needs more time.',
      'Cool completely, then condition: pack loosely into a jar, leave it a week, and shake it daily. Any condensation on the glass means moisture is still in there — return the whole batch to the heat.',
      'Store airtight in a dark cupboard, away from the stove. Label with the variety and the date.'
    ],
    tips: [
      'Sort by thickness onto separate trays. Then you can pull one tray early instead of over-drying everything to rescue a few thick slices.',
      'A dehydrator is worth it if you do this more than twice a year. Ovens run hot even at their lowest setting, and the difference between drying and slowly cooking is about 20 degrees.',
      'Save the crumbs and broken pieces. Blitzed to a powder, they are the most useful thing to come out of this whole process.',
      'Do not dry different varieties on the same tray if you care which is which. Dried mushrooms are hard to tell apart and the aromas mingle.'
    ],
    pairings: ['broths', 'risotto', 'pasta sauces', 'braises', 'rubs and seasoning'],
    sections: [
      { heading: 'The 30-second answer', text: 'Slice clean mushrooms about 1/4 inch thick, spread them in a single layer, and dry them at 125–135°F until a cooled slice snaps instead of bending. That is 4 to 8 hours in a dehydrator and 2 to 4 in an oven set to its lowest temperature with the door propped open. Then condition them in a jar for a week to catch any moisture you missed. Done properly they keep about a year, and they rehydrate into something more intensely flavoured than the fresh mushroom you started with.' },
      { heading: 'The rule', quote: 'Dry until they snap. A slice that bends is still holding water, and water left in the jar is what spoils the whole batch.' },
      { heading: 'Prep: slice thin, slice even, do not wash', text: 'Brush or wipe the mushrooms rather than rinsing them. Water on the surface simply extends the drying time, and mushrooms that are about to lose 90 percent of their weight in moisture do not need any help getting wetter. Slice about 1/4 inch thick — thinner dries faster and rehydrates quicker but turns brittle and loses pieces; much thicker risks a slice that feels dry outside while holding moisture in the middle, which is the single most common way a jar goes mouldy weeks later. Small mushrooms can be halved, and very small ones dried whole if you are patient. Trim anything soft, bruised, or damp before it goes on the tray: drying preserves a mushroom, it does not improve one.' },
      { heading: 'Dehydrator method', text: 'A dehydrator is the right tool because it holds a low temperature and moves air, which is exactly the combination drying wants. Set it to 125–135°F / 52–57°C, arrange the slices with space around each one, and rotate the trays every couple of hours if your model heats unevenly. Expect 4 to 8 hours for 1/4-inch slices and up to 10 or 12 for thick pieces or whole caps. Higher temperatures do not save much time and start to cook the mushrooms instead, which darkens them and dulls the aroma you are trying to concentrate.' },
      { heading: 'Oven method', text: 'An oven works if you accept less control. Set it as low as it goes — 150–170°F on most ovens, which is already above ideal — and prop the door open with a wooden spoon so the moisture escapes instead of recirculating. Use wire racks over sheet pans so air reaches both sides, and turn the slices once an hour. Most batches finish in 2 to 4 hours, but check from 90 minutes because the higher temperature means the margin between dried and toasted is narrow. If your oven has a convection setting, use it; if it has a dedicated dehydrate mode, use that and follow the dehydrator timings instead.' },
      { heading: 'Air-drying, and when it works', text: 'Threading mushrooms on string and hanging them in a warm, dry, airy spot is the oldest method and still a good one — in the right climate. It needs low humidity and real air movement, and it takes days rather than hours. In a humid kitchen it does not work: the mushrooms sit damp long enough to mould before they dry. If your climate suits it, thread sliced mushrooms with a needle, leave gaps between them, hang them out of direct sun, and cover them loosely with muslin against insects. Otherwise use a machine and spend the time elsewhere.' },
      { heading: 'The step almost everyone skips: conditioning', text: 'Conditioning is what separates a jar that lasts a year from one that grows mould in November. Individual slices finish at slightly different moisture levels, and sealing them together lets the wetter ones share their moisture with the rest. So: cool the batch completely, pack it loosely into a clear jar at about two-thirds full, seal it, and leave it a week — shaking it once a day so nothing settles into a damp clump. Watch the inside of the glass. Any condensation, any softness returning to the slices, and the whole batch goes back on the trays for another hour or two. Only after a clear week does it go into permanent storage.' },
      { heading: 'Which mushrooms are worth drying', text: 'Drying rewards dense, aromatic mushrooms and punishes delicate watery ones. Some varieties genuinely taste better dried than fresh, because the process concentrates their savoury compounds; others simply become leathery.',
        table: {
          headings: ['Mushroom', 'Dries', 'What to expect'],
          rows: [
            ['Porcini (market-purchased or verified)', 'Excellent', 'The classic. Flavour deepens dramatically; the soaking broth is worth as much as the mushroom'],
            ['Shiitake', 'Excellent', 'Intensifies into something quite different from fresh; stems dry well for stock'],
            ['Morels (market-purchased or verified)', 'Excellent', 'Traditional and reliable. Halve them first so the hollow interior dries through'],
            ['Black trumpet', 'Excellent', 'Dries fast and keeps its dark, faintly truffle-like character'],
            ['Maitake', 'Good', 'Break into fronds first; rehydrates well into soups'],
            ['Button / cremini', 'Good', 'Works, but gains less than the others — usually better sautéed and frozen'],
            ['Oyster', 'Fair', 'Thin edges go brittle and crumble; fine for powder'],
            ['King oyster', 'Fair', 'Slice thin across the stem or it never dries through the middle'],
            ['Chanterelles', 'Poor', 'A known disappointment — they turn leathery and never fully rehydrate. Sauté and freeze instead'],
            ["Lion's mane", 'Poor', 'The spines break up and the texture that makes it worth eating does not come back'],
            ['Enoki', 'Poor', 'Too fine. Dries to fragile threads with little flavour to show for it'],
            ['Wood ear', 'Excellent', 'Dries and rehydrates perfectly, which is why it is nearly always sold this way']
          ]
        }
      },
      { heading: 'Storing what you made', text: 'Airtight glass in a dark cupboard, away from the heat of the stove. Light and warmth fade the aroma long before the mushrooms look any different, which is the real failure mode of dried mushrooms — not spoilage, but a jar that quietly stops tasting of anything. A year is a reasonable expectation for good flavour, and they remain usable well beyond that. Vacuum sealing or a food-safe desiccant packet extends it further. Check the jar occasionally for condensation or clumping; either means moisture got in, and a batch showing actual mould goes out entirely rather than being picked through.' },
      { heading: 'Mushroom powder, the best by-product', text: 'Do not throw away the broken pieces and dust at the bottom of the tray. Blitz dried mushrooms in a spice grinder or blender until they are a fine powder, and you have the most useful seasoning in the cupboard: a spoonful stirred into a stew, a gravy, a risotto, or a burger mix adds savoury depth with no soaking and no texture to accommodate. Shiitake and porcini powder are the strongest. Store it exactly like the slices, airtight and dark, and expect the aroma to fade a little faster than whole pieces because there is so much more surface area.' },
      { heading: 'What drying does and does not do', text: 'Drying removes the water that bacteria and moulds need, which is why a properly dried mushroom keeps for a year at room temperature. It does not make anything safe that was not safe already. It does not neutralise the toxins in a misidentified mushroom, and it does not rescue a mushroom that was already slimy or sour when it went on the tray — start with mushrooms that were market-purchased or verified by an expert who handled the actual specimen, and start with mushrooms you would happily have cooked that day. Some varieties, including morels, must be cooked after rehydrating rather than eaten as-is.' },
      { heading: 'Using them afterwards', text: 'Rehydrate in hot water for 20 to 30 minutes, then squeeze the pieces out and strain the soaking liquid through a coffee filter to catch the grit. That liquid is the point as much as the mushrooms are — it is a concentrated broth and it belongs in whatever you are making. Our guide to cooking dried mushrooms covers the soak, the strain, and what to do with both halves of the result.' }
    ],
    faqs: [
      { question: 'What temperature do you dry mushrooms at?', answer: '125–135°F / 52–57°C. Hotter starts to cook them, which darkens the slices and dulls the aroma you are trying to concentrate. In an oven that cannot go that low, use the lowest setting with the door propped open and check much earlier.' },
      { question: 'How do you know when mushrooms are dry enough?', answer: 'A cooled slice snaps cleanly in half. Test cooled, never warm — warm mushrooms feel pliable even when finished. Anything that bends still holds moisture and needs more time.' },
      { question: 'Can you dry mushrooms in the oven?', answer: 'Yes. Set the oven to its lowest temperature, prop the door open with a wooden spoon so moisture escapes, and use wire racks so air reaches both sides. Most batches take 2 to 4 hours, but start checking at 90 minutes.' },
      { question: 'Should you wash mushrooms before drying them?', answer: 'No. Brush or wipe them instead. Washing adds surface water to a process whose entire purpose is removing water, and it lengthens the drying time for no benefit.' },
      { question: 'How long do dried mushrooms last?', answer: 'About a year with good flavour if they are airtight, dark, and away from heat, and they stay usable longer than that. The aroma fades well before they look any different, which is the real limit.' },
      { question: 'What is conditioning and do I have to do it?', answer: 'Conditioning means resting the cooled batch in a sealed jar for a week, shaking daily, so moisture equalises between wetter and drier pieces. It is the step that prevents a jar going mouldy weeks later, and skipping it is the most common reason a batch fails.' },
      { question: 'Which mushrooms should not be dried?', answer: 'Chanterelles turn leathery and never fully rehydrate; lion’s mane loses the texture that makes it worth eating; enoki is too fine to be worth the tray space. Sauté and freeze those instead.' },
      { question: 'Do you have to cook dried mushrooms after rehydrating?', answer: 'Yes, treat them as you would the fresh mushroom. Rehydrating restores water, not doneness, and varieties that must be thoroughly cooked when fresh — morels among them — must still be thoroughly cooked after soaking.' }
    ],
    storage: [
      'Airtight glass jar in a dark cupboard, away from the stove. Label with variety and date.',
      'Condition for a week before permanent storage; any condensation means back to the trays.',
      'About a year for good flavour; vacuum sealing or a desiccant packet extends it.',
      'Powder keeps the same way but fades faster — make it in small batches.'
    ],
    sources: [
      { href: 'https://nchfp.uga.edu/how/dry/', label: 'National Center for Home Food Preservation — Drying' },
      { href: 'https://nchfp.uga.edu/how/dry/drying-vegetables/', label: 'NCHFP — Drying vegetables, including conditioning' },
    ],
    relatedLinks: [
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms and use the broth' },
      { href: '/how-to-freeze-mushrooms/', label: 'How to freeze mushrooms without ruining them' },
      { href: '/how-to-store-mushrooms/', label: 'How to store mushrooms so they stay firm' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-cook-porcini-mushrooms/', label: 'How to cook porcini mushrooms' },
      { href: '/how-to-cook-shiitake-mushrooms/', label: 'How to cook shiitake mushrooms' }
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
      { href: '/garlic-mushroom-pasta/', label: 'Garlic mushroom pasta recipe' },
      { href: '/how-to-store-mushrooms/', label: 'How to store mushrooms, fresh and dried' },
      { href: '/how-to-dry-mushrooms/', label: 'How to dry mushrooms in a dehydrator or oven' }
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
      { href: '/how-to-cook-puffball-mushrooms/', label: 'How to cook puffball mushrooms' },
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
      { heading: 'Freezing mushrooms yourself', text: 'Cook them first — sauté or steam, cool completely, then freeze in a single layer before bagging. Raw home-frozen mushrooms hold far less structure than commercially blanched ones and turn watery on cooking. Our guide to freezing mushrooms covers the sauté and blanch methods, portioning, and how long each keeps.' }
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
    sources: [
      { href: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety', label: 'USDA FSIS — Freezing and Food Safety' },
    ],
    relatedLinks: [
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' },
      { href: '/how-to-cook-mushrooms/', label: 'How to cook mushrooms so they brown, not steam' },
      { href: '/how-to-cook-cremini-mushrooms/', label: 'How to cook cremini mushrooms' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-store-mushrooms/', label: 'How to store fresh mushrooms before they get here' },
      { href: '/how-to-freeze-mushrooms/', label: 'How to freeze mushrooms yourself' }
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
      { href: '/how-to-freeze-mushrooms/', label: 'How to freeze mushrooms without ruining them' },
      { href: '/how-to-dry-mushrooms/', label: 'How to dry mushrooms (and which ones not to)' },
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
      'Drying: not worth it. Chanterelles turn leathery and never fully rehydrate — sauté and freeze them instead.',
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
      { href: '/how-to-cook-puffball-mushrooms/', label: 'How to cook puffball mushrooms' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' },
      { href: '/how-to-cook-chicken-of-the-woods/', label: 'How to cook chicken of the woods' },
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
    slug: 'how-to-cook-puffball-mushrooms', mushroomSlug: 'puffball', label: 'Puffball', badge: 'Slice test first', title: 'How to Cook Puffball Mushrooms', description: 'Puffball cooks like a mild steak: cut into slabs, salt, and sear hot. Slice one open first — the inside must be pure, solid white all the way through.', minutes: '7 min', updated: '2026-08-31', image: '/images/cookmushroom-puffball-hero.webp', imageAlt: 'Golden seared giant puffball slabs with thyme and garlic in a cast-iron skillet', isoTime: 'PT8M', prepIsoTime: 'PT15M', heat: 'Medium-high', cut: 'Slabs 1/2 inch thick, skin trimmed', finish: 'Butter, lemon, and parsley',
    recipeName: 'Seared Puffball Steaks', yieldText: '2 to 3 side servings',
    ingredients: [
      '1 lb (454 g) giant puffball, market-purchased or expert-verified, pure white and solid throughout',
      '3/4 tsp (4 g) kosher salt, divided',
      '2 tbsp (30 ml) olive oil',
      '2 tbsp (28 g) unsalted butter',
      '2 garlic cloves (6 g), thinly sliced',
      '1 tsp fresh thyme leaves',
      '1/4 tsp black pepper',
      '1 tbsp (15 ml) lemon juice',
      '2 tbsp (8 g) chopped fresh parsley'
    ],
    steps: [
      'Cut the puffball in half from top to bottom before anything else. The interior must be uniformly white, firm, and completely featureless — like a fresh marshmallow all the way through. Stop and discard it if you see any yellow, olive, brown, or purple tint, any spongy or hollow area, or the faint outline of a cap, gills, or a stem inside. See the safety section below.',
      'Trim off the outer skin and any discoloured patch, then cut the flesh into slabs about 1/2 inch (1 cm) thick. Cubes will not brown; slabs will.',
      'Lay the slabs on a board or a rack, salt them with half the salt, and leave them for 10 to 15 minutes. Puffball is mostly water, and this pulls a surprising amount of it to the surface.',
      'Blot both sides thoroughly with a towel. Skipping this is the difference between searing and steaming.',
      'Heat the olive oil in a wide skillet over medium-high heat until it shimmers. Lay the slabs in one layer with space between them.',
      'Cook undisturbed for 3 to 4 minutes, until the undersides are deep golden. Puffball browns faster than a dense mushroom like king oyster, so watch it from the third minute.',
      'Turn the slabs, add the butter, garlic, thyme, remaining salt, and pepper, and cook for 3 to 4 minutes more, spooning the foaming butter over the tops.',
      'Add the lemon juice, toss for 20 seconds, scatter the parsley, and serve hot. The slabs should be golden and custardy in the middle, never squeaky or watery.'
    ],
    tips: [
      'If the source or the identification is uncertain, do not cook or eat the mushroom.',
      'Salt and blot before the pan, not in it. Salting in the pan draws water out over the heat and the slabs stew.',
      'A crowded pan is the usual reason puffball goes grey and rubbery. Cook in two batches rather than overlapping the slabs.',
      'Cook it the day you get it. Puffball has the shortest useful life of any mushroom on this site.'
    ],
    pairings: ['toasted sourdough', 'a fried egg', 'creamy polenta', 'roasted tomatoes', 'a sharp green salad'],
    sections: [
      { heading: 'Sourcing and the slice test', text: 'Cook puffball only from a reputable market or from a wild sample verified by a qualified expert who handled the actual specimen — not a photo, not an app, not a comparison against pictures online. Never eat an unknown wild mushroom. One check matters enough to repeat on every puffball, including ones you are confident about: cut it in half from top to bottom and look at the cut face. An edible puffball is pure white, uniformly firm, and completely featureless inside, with no structure of any kind. Two things you might see instead both mean discard. A yellow, olive, brown, or purple tint means the spores have started to develop; the mushroom is past eating and will taste bitter. The faint silhouette of a cap, gills, or a stem means it is not a puffball at all but the immature button of another mushroom, and some of those are deadly. This slice test is a safety habit, not an identification method — it does not tell you the specimen is a puffball, only that a specimen you already had verified has not been mistaken for something with internal structure.' },
      { heading: 'What it actually tastes like', text: 'Very mild, and closer in character to a fresh cheese or firm tofu than to a woodland mushroom. There is a clean, faintly nutty savour and almost none of the dark, earthy depth of a cremini or porcini. The texture is what people remember: dense and custardy when it is cooked well, a little like a thick slice of aubergine that has held its shape. That mildness makes it a carrier rather than a star. It takes garlic, herbs, browned butter, soy, miso, or a hot chilli oil and gives them a substantial body to sit on, which is why so many puffball recipes are really seasoning recipes.' },
      { heading: 'Cut it into slabs, not cubes', text: 'This is the decision that most affects the result. Puffball is close to 90 per cent water, so it needs as much pan contact as you can give it and as little trapped moisture as possible. A 1/2-inch slab has two broad flat faces that brown, and it holds together when you turn it. Cubes have six small faces, never sit still long enough to colour, and release their water into a crowded pan, where the whole lot simmers grey. If the puffball is very large, cut it into steaks first and only then decide whether to halve them; a wide slab is easier to handle than it looks and can always be cut on the plate.' },
      { heading: 'Why it browns faster than you expect', text: 'Most mushrooms make you wait: cremini and portobello release water for several minutes before the pan is dry enough to brown, which is the whole point of the technique on the pan-cooking page. Puffball behaves differently because you have already removed much of that water by salting and blotting, and because its flesh is soft and open rather than dense. The surface reaches browning temperature quickly, and it will go from golden to bitter and dark in under a minute if you leave it. Set a shorter mental timer than you would for a portobello and look at the third minute rather than the sixth.' },
      { heading: 'Where puffball fits in the autumn kitchen', text: 'Giant puffballs appear from late summer into autumn, at the same time as several other species worth cooking, and they are the most perishable of the group. If a haul arrives together, cook the puffball first, on the day. Chicken of the woods keeps a couple of days in the fridge and rewards longer cooking; chanterelles hold better still and want a dry pan; morels belong to spring rather than autumn but share the one habit worth carrying across all of them — cut the mushroom open and look inside before it goes anywhere near a pan.' }
    ],
    variations: [
      'Breaded: dip salted, blotted slabs in flour, then egg, then breadcrumbs, and shallow-fry until golden on both sides. The most popular way to serve puffball, and the mildness is the reason it works.',
      'Garlic and soy: swap the lemon for 1 tbsp (15 ml) soy sauce added off the heat, and finish with sliced spring onion.',
      'Puffball toast: pile the finished slabs on thick sourdough rubbed with a cut garlic clove, with a fried egg on top.',
      'Grilled: brush 3/4-inch slabs with oil and grill over medium-high direct heat for 3 to 4 minutes a side. Cut them thicker for the grill so they do not fall through.'
    ],
    storage: [
      'Cook puffball the day you get it. It is the most perishable mushroom on this site and a day in the fridge visibly softens it.',
      'If you must hold it, wrap it loosely in paper and refrigerate for no more than 24 hours. Do not seal it in plastic.',
      'Yellowing inside means it is past eating, not merely tired. Discard it rather than trimming around it.',
      'Cooked puffball keeps 3 days in a sealed container in the fridge. Reheat in a dry pan over medium rather than a microwave, which turns it spongy.',
      'Raw puffball freezes badly — it collapses to water on thawing. Sear the slabs first, cool them, and freeze those instead.'
    ],
    faqs: [
      { question: 'How do I know a puffball is safe to eat?', answer: 'The only reliable answer is that it was bought from a reputable market or verified by a qualified expert who handled the specimen itself. On top of that, always cut it open: the inside must be pure white, firm, and completely featureless. Any yellow or brown tint, or any outline of a cap, gills, or stem, means discard it.' },
      { question: 'Why did my puffball turn out rubbery and grey?', answer: 'Almost always a crowded pan or skipped blotting. Puffball is mostly water, so if the slabs overlap or go in damp, the pan drops below browning temperature and they stew in their own liquid. Salt, rest, blot, and cook in two batches.' },
      { question: 'Do I need to peel a puffball?', answer: 'Trim the outer skin off, yes. It is thin but tough and it does not soften in the pan. Take off any discoloured patch at the same time.' },
      { question: 'Can I eat a puffball that has gone yellow inside?', answer: 'No. Yellow, olive, or brown flesh means the spores have started to develop. It will taste bitter and is no longer considered edible. Discard the whole thing rather than cutting around the discoloured part.' },
      { question: 'How thick should I cut the slabs?', answer: 'About 1/2 inch (1 cm) for a pan, and closer to 3/4 inch for a grill so they hold together over the bars. Thinner than 1/2 inch and they dry out before they colour.' },
      { question: 'Can I cook puffball like a portobello?', answer: 'The cut is similar but the timing is not. Puffball has already given up much of its water by the time it hits the pan, so it browns in 3 to 4 minutes a side rather than the 8 to 12 minutes a portobello wants. Watch it earlier than you think you need to.' }
    ],
    relatedLinks: [
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-cook-chicken-of-the-woods/', label: 'How to cook chicken of the woods' },
      { href: '/how-to-cook-morel-mushrooms/', label: 'How to cook morel mushrooms' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-tell-if-mushrooms-are-bad/', label: 'How to tell if mushrooms are bad' },
      { href: '/how-to-store-mushrooms/', label: 'How to store mushrooms so they stay firm' }
    ]
  },
  {
    slug: 'how-to-cook-chicken-of-the-woods', mushroomSlug: 'chicken-of-the-woods', label: 'Chicken of the woods', badge: 'Poultry texture', title: 'How to Cook Chicken of the Woods', description: 'Chicken of the woods needs longer cooking than most mushrooms — 15 to 20 minutes. Use the young tender growth, slice across the grain, and cook it through.', minutes: '8 min', updated: '2026-08-22', image: '/images/cookmushroom-chicken-of-the-woods-hero.webp', imageAlt: 'Golden pan-cooked chicken of the woods pieces with thyme and lemon in a cast-iron skillet', isoTime: 'PT20M', prepIsoTime: 'PT10M', heat: 'Medium-high, then medium', cut: 'Slice across the grain into 1/2-inch slabs', finish: 'Lemon juice and fresh parsley',
    recipeName: 'Pan-Seared Chicken of the Woods', yieldText: '2 to 3 side servings',
    ingredients: [
      '12 oz (340 g) chicken of the woods, market-purchased or expert-verified, from young tender growth',
      '2 tbsp (30 ml) olive oil',
      '2 tbsp (28 g) unsalted butter',
      '2 garlic cloves (6 g), thinly sliced',
      '3/4 tsp (4 g) kosher salt',
      '1/4 tsp black pepper',
      '2 tsp fresh thyme leaves',
      '3 tbsp (45 ml) water or light stock',
      '1 tbsp (15 ml) lemon juice',
      '2 tbsp (8 g) chopped fresh parsley'
    ],
    steps: [
      'Trim away the woody base where the mushroom met the tree, along with any part that has gone pale, dry, or crumbly at the edge. Keep the tender growth — it gives slightly under a thumb and cuts without resistance.',
      'Brush off dirt and wipe the surface with a damp cloth. Do not soak it. This is a porous shelf mushroom and it will drink the water, then steam instead of brown.',
      'Slice across the grain into 1/2-inch (1 cm) slabs, so the fibres end up short on the plate rather than stringy.',
      'Heat the olive oil in a wide skillet over medium-high heat. Lay the slabs in one layer with space between them and cook for 4 minutes, undisturbed, until the undersides are deep golden.',
      'Turn the pieces and cook for 3 to 4 minutes more, until the second side has colour.',
      'Add the water, cover the pan, and lower the heat to medium. Cook for 6 to 8 minutes. This is the stage that gets heat into the middle of a slab that is thicker and denser than it looks.',
      'Uncover and let any remaining liquid cook away. Add the butter, garlic, salt, pepper, and thyme, and cook for 2 minutes more, until the garlic is fragrant and the slabs are glossy.',
      'Add the lemon juice and parsley, toss for 30 seconds, and serve hot. The centres should be tender and steaming throughout, with no dry, chalky core.'
    ],
    tips: [
      'If the source or the identification is uncertain, do not cook or eat the mushroom.',
      'The tender edge is the part worth cooking. Anything that resists the knife will resist the fork.',
      'The covered stage is not optional. Searing alone browns the outside of a slab and leaves the centre undercooked.',
      'Eat a small portion the first time you try it, even from a verified source. See the note below.'
    ],
    pairings: ['toasted sourdough', 'creamy polenta', 'buttered noodles', 'roasted potatoes', 'a sharp green salad'],
    sections: [
      { heading: 'Sourcing and safety', text: 'Cook chicken of the woods only from a reputable market or from a wild sample verified by a qualified expert who handled the actual specimen — not a photo, not an app, not a comparison against pictures online. Never eat an unknown wild mushroom. Cook it thoroughly and serve it hot; it is not eaten raw or lightly cooked. One further caution specific to this species: a minority of people report digestive upset after eating chicken of the woods even when it was correctly identified and properly cooked, and reports cluster around older specimens and around mushrooms taken from conifers or eucalyptus rather than oak. The practical response is the one experienced cooks use — eat a small portion the first time, cooked through, and wait a day before eating more.' },
      { heading: 'Only the young growth is worth cooking', text: 'This is the single decision that determines whether the meal is good. A young bracket is soft, bright, and faintly moist at the edge; it cuts like a firm chicken breast. As it ages it turns pale, dries out, goes chalky or fibrous, and develops a sour edge that no amount of butter fixes. Age runs from the outside in, so a large bracket is often worth harvesting for its outer two or three inches alone with the rest discarded. Test with the knife before you commit the pan to it: if a slice crumbles rather than cuts, or if you feel the blade dragging through fibre, that piece is past it.' },
      { heading: 'What it actually tastes like', text: 'Mild — far milder than most people expect from something that looks so dramatic. There is a soft savoury flavour with a faint lemony note, and very little of the earthy, dark taste of a cremini or a porcini. The reason for its reputation is texture rather than flavour: dense, layered, and fibrous in a way that pulls apart like poultry meat, which is where the name comes from. That mildness makes it a carrier. It takes a marinade, a hot sauce, or a breadcrumb coating better than almost any other mushroom, and it is why the buffalo and fried preparations below are the ones most people come back to.' },
      { heading: 'Chicken of the woods vs hen of the woods', text: 'Two different mushrooms with names built to be confused. Chicken of the woods (Laetiporus) grows as a solid, bright orange-and-yellow shelf on the side of a tree, and cooks like a dense slab of meat — it needs long, moist heat to get through the middle. Hen of the woods, better known as maitake (Grifola frondosa), grows as a grey-brown ruffled cluster at the base of a tree, and cooks in half the time because the fronds are thin. If you have a ruffled, feathery cluster rather than a solid orange shelf, our maitake guide is the page you want; the technique here will overcook it.' },
      { heading: 'Cleaning it', text: 'Brush, wipe, and trim — that is the whole job. Chicken of the woods grows above the ground on a trunk rather than in soil, so it arrives far cleaner than a morel or a chanterelle, and the dirt that is present sits on the surface. Its structure is genuinely absorbent, so a rinse under the tap costs you the browning later. Check the underside pores for insects, which do find it, and cut away any section that has been tunnelled through.' },
      { heading: 'Why it takes longer than other mushrooms', table: {
          headings: ['Cut', 'Method', 'Time', 'Best for'],
          rows: [
            ['1/2-inch slabs, across the grain', 'Sear, then covered finish', '15–20 min', 'The default. Browned faces, tender centres, works with any sauce'],
            ['1-inch cubes', 'Oven roast at 400°F / 200°C', '25–30 min', 'Hands-off batches; toss halfway, expect crisp edges'],
            ['Torn into strips', 'Shallow fry, breaded', '6–8 min after a 10-min pre-steam', 'Nuggets and buffalo pieces — pre-steam or the coating burns first'],
            ['Thin 1/4-inch slices', 'Pan sauté', '10–12 min', 'Pasta and tacos, where the pieces finish in sauce'],
            ['Chunks', 'Simmer in broth or soup', '25–30 min', 'Older or firmer pieces that were never going to sear well']
          ]
        }, text: 'A cremini is 90% water and mostly air by structure, so it cooks in eight minutes. Chicken of the woods is dense, layered, and low in free water, which means heat travels through it slowly and there is no burst of released moisture to help. Every method below therefore either runs longer than you expect or adds moisture back — a covered pan, a broth, a pre-steam before frying. Skipping that step is the most common way this mushroom disappoints people: the outside looks perfect and the middle is dry and squeaky.' }
    ],
    faqs: [
      { question: 'Can you eat chicken of the woods raw?', answer: 'No. It is cooked thoroughly and served hot, never raw or lightly cooked. Raw or undercooked specimens are the most common cause of the digestive upset this mushroom is sometimes blamed for.' },
      { question: 'How long do you cook chicken of the woods?', answer: '15 to 20 minutes for 1/2-inch slabs — roughly 8 minutes of searing followed by 6 to 8 minutes covered with a splash of liquid. Oven roasting takes 25 to 30 minutes. It is nearly twice as long as a cremini needs, and the extra time is not optional.' },
      { question: 'What does chicken of the woods taste like?', answer: 'Mild and softly savoury with a faint lemony note — much less earthy than a cremini or porcini. Its appeal is the dense, layered, pull-apart texture rather than a strong flavour, which is why it carries sauces and coatings so well.' },
      { question: 'Why does chicken of the woods make some people sick?', answer: 'A minority of people report digestive upset even from correctly identified, properly cooked specimens, and the reports cluster around older mushrooms and around ones taken from conifers or eucalyptus rather than oak. Use young growth, cook it through, and eat a small portion the first time.' },
      { question: 'How do you know when it is done?', answer: 'The centre of a slab is tender and steaming hot, with no dry or chalky core and no squeak against the teeth. A fork should go in without resistance, the same test you would use on a potato.' },
      { question: 'How do you clean chicken of the woods?', answer: 'Brush off surface dirt and wipe with a damp cloth. Do not soak or rinse it — the structure is absorbent and the water it takes on will stop it browning. Check the pores underneath for insects and cut away any tunnelled sections.' },
      { question: 'Can you freeze chicken of the woods?', answer: 'Yes, and it is the best way to keep it. Cook it first — sear or sauté the slices, cool them, and freeze in a single layer. Frozen raw, it turns spongy and watery on thawing. Cooked, it keeps 3 to 4 months with good texture.' },
      { question: 'Can you dry chicken of the woods?', answer: 'You can, but it is not the mushroom to dry. It rehydrates to a stringy, slightly cottony texture and gains none of the concentrated aroma that makes dried porcini or shiitake worth the effort. Cook it and freeze it instead.' },
      { question: 'What is the best way to cook chicken of the woods?', answer: 'Pan-searing 1/2-inch slabs and finishing them covered is the method that suits it best, because it browns the faces and still gets heat to the middle. If you want one dish to try first, make the buffalo version — the mild flavour and firm texture are built for it.' }
    ],
    storage: [
      'Refrigerate fresh, unwashed brackets in a paper bag for 3 to 5 days. It holds longer than a morel but the tender edge dries out first — cook that part soonest.',
      'Refrigerate cooked chicken of the woods in a covered container within 2 hours and use it within 3 to 4 days.',
      'Freeze it cooked, never raw: sauté the slices, cool them, freeze in a single layer, then bag. 3 to 4 months for good texture.',
      'Drying is a poor fit for this species — it rehydrates stringy. Cook and freeze instead.'
    ],
    variations: [
      'Buffalo chicken of the woods: pre-steam the strips for 10 minutes, dredge in seasoned flour, shallow fry until crisp, then toss in 1/3 cup (80 ml) hot sauce melted with 2 tbsp (28 g) butter.',
      'Fried nuggets: cut 1-inch pieces, pre-steam, then coat in buttermilk and seasoned flour and shallow fry for 6 to 8 minutes.',
      'Tacos: sauté 1/4-inch slices with cumin, smoked paprika, and lime, then finish in the pan with a splash of stock.',
      'Pasta: toss the seared slabs with 8 oz (225 g) cooked pasta, 1/4 cup (60 ml) pasta water, and plenty of black pepper.',
      'Soup: simmer chunks in chicken or vegetable broth for 25 to 30 minutes — the method that rescues firmer pieces that would never sear well.',
      'Sandwich: pile the seared slabs on toasted bread with mayonnaise, lettuce, and a squeeze of lemon.'
    ],
    relatedLinks: [
      { href: '/how-to-cook-puffball-mushrooms/', label: 'How to cook puffball mushrooms' },
      { href: '/how-to-cook-maitake-mushrooms/', label: 'How to cook maitake (hen of the woods) mushrooms' },
      { href: '/how-to-cook-morel-mushrooms/', label: 'How to cook morel mushrooms' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-freeze-mushrooms/', label: 'How to freeze mushrooms without ruining them' },
      { href: '/how-to-store-mushrooms/', label: 'How to store mushrooms so they stay firm' },
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' }
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
      { href: '/how-to-dry-mushrooms/', label: 'How to dry porcini and other mushrooms' },
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
    slug: 'how-to-cook-maitake-mushrooms', mushroomSlug: 'maitake', label: 'Maitake', badge: 'Ruffled clusters', title: 'How to Cook Maitake (Hen of the Woods) Mushrooms', description: 'Hot pan sear maitake mushrooms until the fronds turn golden and crisp, finished with garlic butter. Ready in about 12 minutes.', minutes: '5 min', updated: '2026-08-22', isoTime: 'PT12M', prepIsoTime: 'PT5M', heat: 'Medium-high', cut: 'Break into large clusters or 1-inch pieces', finish: 'Garlic butter, soy, scallion',
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
      { heading: 'Safety first: look-alikes', text: 'Maitake has few dangerous look-alikes, but always buy from a trusted market or supplier.', bullets: ['Confirm the grey-brown ruffled overlapping fronds growing in a dense cluster at the base of oaks.', 'Buy from a market or get expert verification before eating any wild find.'] },
      { heading: 'Hen of the woods is not chicken of the woods', text: 'The names invite the mix-up, but these are different mushrooms that cook nothing alike. Maitake — hen of the woods — is the grey-brown ruffled cluster, and its thin fronds crisp in about 12 minutes in a hot pan. Chicken of the woods is a solid orange-and-yellow shelf growing on the side of a trunk, dense enough that it needs 15 to 20 minutes with a covered stage to get heat into the middle. Cook a chicken of the woods slab with this maitake method and the centre will still be undercooked when the outside looks done.' }
    ],
    relatedLinks: [
      { href: '/how-to-cook-chicken-of-the-woods/', label: 'How to cook chicken of the woods' },
      { href: '/how-to-cook-oyster-mushrooms/', label: 'How to cook oyster mushrooms' },
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' }
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
    slug: 'how-to-cook-lobster-mushrooms', mushroomSlug: 'lobster', label: 'Lobster mushrooms', badge: 'Seafood illusion', title: 'How to Cook Lobster Mushrooms', description: 'Cook lobster mushrooms in butter with shallot, garlic, and thyme for about 15 minutes, until the edges brown and a clean lemon finish lifts them.', minutes: '6 min', updated: '2026-07-11', image: '/images/lemon-thyme-lobster-mushrooms-hero.webp', imageAlt: 'Orange lobster mushrooms sautéed with lemon and thyme in a skillet', isoTime: 'PT15M', prepIsoTime: 'PT15M', heat: 'Medium-high, then medium', cut: 'Brush clean; trim the base; slice 1/4 inch thick', finish: 'White wine, lemon juice, and fresh thyme',
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
      { href: '/how-to-dry-mushrooms/', label: 'How to dry shiitake and other mushrooms' },
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
      { href: '/how-to-cook-frozen-mushrooms/', label: 'How to cook frozen mushrooms' },
      { href: '/how-to-store-mushrooms/', label: 'How to store cremini so they stay firm' },
      { href: '/how-to-tell-if-mushrooms-are-bad/', label: 'How to tell if mushrooms are bad' }
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
    slug: 'how-to-prepare-reishi-mushrooms', mushroomSlug: 'reishi', label: 'Reishi', badge: 'Wellness tonic', title: 'How to Prepare Reishi Mushrooms', description: 'Simmer dried reishi slices at 185–195°F for about an hour to make a clear culinary infusion, then strain and balance the bitterness with ginger or citrus.', minutes: '5 min', updated: '2026-07-11', image: '/images/cookmushroom-reishi-ginger-infusion-hero.webp', imageAlt: 'Reishi culinary infusion with dried reishi, ginger, and orange peel', isoTime: 'PT1H', prepIsoTime: 'PT5M', heat: 'Low simmer, 185–195°F / 85–91°C; avoid a rolling boil', cut: 'Use dried slices as supplied, or split large pieces with kitchen shears', finish: 'Strain fully, then balance the bitterness with ginger, citrus, or sweetener',
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
    slug: 'how-to-use-truffles', mushroomSlug: 'truffles', label: 'Truffles', badge: 'Gourmet luxury', title: 'How to Use Truffles at the Table', description: 'Use truffles with restraint: toss a simple buttered pasta, then shave them paper-thin at the table and off the heat so their aroma stays vivid.', minutes: '5 min', updated: '2026-07-11', image: '/images/cookmushroom-truffle-buttered-pasta-hero.webp', imageAlt: 'Fresh truffle shavings over buttered tagliatelle with Parmesan', isoTime: 'PT12M', prepIsoTime: 'PT10M', heat: 'Medium-high for the pasta water, then low for the butter sauce', cut: 'Shave the truffle paper-thin just before serving', finish: 'Add the truffle off heat so its aroma blooms over the warm dish',
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
