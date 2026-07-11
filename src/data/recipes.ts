export type RecipeArticle = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  minutes: string;
  image: string;
  imageAlt: string;
  recipeName: string;
  yieldText: string;
  prepIsoTime: string;
  cookIsoTime: string;
  totalIsoTime: string;
  ingredients: string[];
  steps: string[];
  tips: string[];
  pairings: string[];
  storage: string[];
  relatedLinks: { href: string; label: string }[];
};

export const recipeArticles: RecipeArticle[] = [
  {
    slug: 'sauteed-mushrooms-and-onions',
    title: 'Sautéed Mushrooms and Onions',
    description: 'Sauté mushrooms and onions in one skillet until the onions are golden, the cremini browned, and the pan glossy with butter, thyme, and balsamic.',
    updated: '2026-07-11',
    minutes: '35 min',
    image: '/images/cookmushroom-mushrooms-onions-hero.webp',
    imageAlt: 'Sautéed cremini mushrooms and golden onions with thyme in a cast-iron skillet',
    recipeName: 'Buttery Sautéed Mushrooms and Onions',
    yieldText: '4 side servings',
    prepIsoTime: 'PT10M',
    cookIsoTime: 'PT25M',
    totalIsoTime: 'PT35M',
    ingredients: [
      '1 lb (454 g) cremini mushrooms, wiped clean and sliced 1/4 inch thick',
      '2 medium yellow onions (about 400 g), halved and thinly sliced',
      '1 tbsp (15 ml) olive oil',
      '2 tbsp (28 g) unsalted butter',
      '1 tsp fresh thyme leaves',
      '3/4 tsp kosher salt, divided',
      '1/4 tsp black pepper',
      '1 tsp (5 ml) balsamic vinegar'
    ],
    steps: [
      'Slice the mushrooms and onions. Keep the mushroom slices fairly even so they brown at the same pace.',
      'Heat a wide skillet over medium heat. Add the olive oil and onions with 1/4 tsp salt. Cook for 10 to 12 minutes, stirring every minute or two, until soft and golden at the edges.',
      'Raise the heat to medium-high. Push the onions to the edge of the pan and add the mushrooms in an even layer. Leave them undisturbed for 3 minutes so the cut sides can brown.',
      'Toss the mushrooms with the onions. Cook 6 to 8 minutes more, until the released liquid has cooked away and the mushrooms have browned edges.',
      'Lower the heat to medium. Add the butter, thyme, remaining salt, and pepper. Toss for 1 minute until the butter coats everything.',
      'Add the balsamic vinegar and toss for 30 seconds. Serve when the onions are soft and golden and the pan is glossy, not watery.'
    ],
    tips: [
      'Use the widest skillet available; crowding delays browning.',
      'Do not add the butter until the mushroom liquid has mostly cooked away.',
      'For deeper onion color, keep the heat at medium and add 5 to 10 minutes before adding the mushrooms.'
    ],
    pairings: ['steak', 'burgers', 'polenta', 'toast with ricotta', 'mashed potatoes'],
    storage: [
      'Refrigerate cooled leftovers in an airtight container for up to 3 days.',
      'Reheat in a skillet over medium heat until hot; add a splash of water only if the pan looks dry.',
      'Freeze only if texture is secondary; thawed mushrooms and onions are best folded into sauces or soups.'
    ],
    relatedLinks: [
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-cook-cremini-mushrooms/', label: 'How to cook cremini mushrooms' },
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-roast-mushrooms-in-oven/', label: 'How to roast mushrooms in the oven' }
    ]
  }
];
