export type RecipeArticle = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  minutes: string;
  image: string;
  imageAlt: string;
  recipeName: string;
  keywords: string[]; // recipe-specific schema keywords; pairings are appended automatically
  cardMushroom: string; // label shown on recipe cards
  cardGuide: string; // slug of the guide whose "Use it in" section links this recipe
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
    keywords: ['mushrooms and onions', 'cremini mushrooms'],
    cardMushroom: 'Cremini',
    cardGuide: 'how-to-cook-cremini-mushrooms',
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
  },
  {
    slug: 'garlic-mushroom-pasta',
    title: 'Garlic Mushroom Pasta',
    description: 'Brown cremini in a hot pan, build a glossy garlic butter sauce with starchy pasta water, and toss with spaghetti in about 30 minutes.',
    updated: '2026-08-01',
    minutes: '30 min',
    image: '/images/cookmushroom-garlic-mushroom-pasta-hero.webp',
    imageAlt: 'Spaghetti tossed with browned cremini mushrooms, garlic, and parsley in a skillet',
    recipeName: 'Garlic Butter Mushroom Pasta',
    keywords: ['garlic mushroom pasta', 'mushroom spaghetti', 'weeknight pasta'],
    cardMushroom: 'Cremini',
    cardGuide: 'how-to-cook-mushrooms-in-a-pan',
    yieldText: '4 servings',
    prepIsoTime: 'PT10M',
    cookIsoTime: 'PT20M',
    totalIsoTime: 'PT30M',
    ingredients: [
      '12 oz (340 g) spaghetti or linguine',
      '1 lb (454 g) cremini mushrooms, wiped clean and sliced 1/4 inch thick',
      '3 tbsp (45 ml) olive oil',
      '3 tbsp (42 g) unsalted butter, divided',
      '6 garlic cloves, thinly sliced',
      '1/2 tsp red pepper flakes (optional)',
      '1/2 cup (120 ml) dry white wine, or an extra 1/2 cup pasta water',
      '1 1/2 oz (45 g) Parmesan, finely grated, plus more to serve',
      '1/3 cup chopped flat-leaf parsley',
      '1 tsp kosher salt, plus more for the pasta water',
      '1/2 tsp black pepper'
    ],
    steps: [
      'Bring a large pot of well-salted water to a boil. Do not start the pasta yet — the mushrooms need a head start.',
      'Heat the olive oil in a wide skillet over medium-high. Add the mushrooms in as close to one layer as you can and leave them undisturbed for 3 minutes, until the undersides are browned.',
      'Stir and keep cooking 5 to 7 minutes, until the released liquid has fully cooked away and the pan looks dry again. Season with the salt and pepper.',
      'Drop the pasta into the boiling water now and cook to 1 minute short of the package time.',
      'Lower the skillet to medium. Push the mushrooms aside, add 1 tbsp butter, the garlic, and the pepper flakes, and cook 45 to 60 seconds, until the garlic smells sweet but has not browned.',
      'Pour in the wine and scrape the pan. Simmer 2 minutes, until the liquid has reduced by about half.',
      'Reserve 1 1/2 cups pasta water, then drain. Add the pasta to the skillet with the remaining 2 tbsp butter, the Parmesan, and 1 cup pasta water. Toss hard for about a minute, until the sauce turns glossy and clings to the strands.',
      'Add more pasta water a splash at a time if it looks tight. Stir in the parsley and serve with extra Parmesan.'
    ],
    tips: [
      'Cook the mushrooms in two batches if your skillet is smaller than 12 inches; crowding steams them and the sauce turns watery.',
      'Salt the mushrooms only after they have browned. Early salt pulls water out and delays the crust.',
      'The starchy pasta water is what emulsifies the sauce. Reserve more than you think you need before draining.',
      'Add the Parmesan off direct high heat so it melts smoothly instead of turning stringy.'
    ],
    pairings: ['green salad', 'garlic bread', 'roast chicken', 'white wine'],
    storage: [
      'Refrigerate leftovers in an airtight container for up to 3 days.',
      'Reheat in a skillet over medium heat with a splash of water to loosen the sauce; the microwave dries the pasta out.',
      'This dish does not freeze well — the sauce breaks and the pasta softens on thawing.'
    ],
    relatedLinks: [
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-cook-cremini-mushrooms/', label: 'How to cook cremini mushrooms' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms for deeper flavor' },
      { href: '/how-to-cook-porcini-mushrooms/', label: 'How to cook porcini mushrooms' }
    ]
  },
  {
    slug: 'shiitake-mushroom-ramen',
    title: 'Shiitake Mushroom Ramen',
    description: 'Steep dried shiitake and kombu into a savory broth, sear fresh shiitake caps, and build a deeply flavored vegetarian ramen bowl in 45 minutes.',
    updated: '2026-08-01',
    minutes: '45 min',
    image: '/images/cookmushroom-shiitake-ramen-hero.webp',
    imageAlt: 'Bowl of shiitake mushroom ramen with seared shiitake caps, soft egg, scallions, and nori',
    recipeName: 'Shiitake Mushroom Ramen',
    keywords: ['shiitake ramen', 'mushroom ramen', 'vegetarian ramen broth'],
    cardMushroom: 'Shiitake',
    cardGuide: 'how-to-cook-shiitake-mushrooms',
    yieldText: '2 large bowls',
    prepIsoTime: 'PT15M',
    cookIsoTime: 'PT30M',
    totalIsoTime: 'PT45M',
    ingredients: [
      '1 oz (28 g) dried shiitake mushrooms',
      '1 piece kombu, about 4 inches square',
      '6 cups (1.4 L) water',
      '8 oz (225 g) fresh shiitake mushrooms, stems removed and caps sliced',
      '1 tbsp (15 ml) neutral oil',
      '3 garlic cloves, minced',
      '1 tbsp (15 g) minced fresh ginger',
      '3 tbsp (45 ml) soy sauce',
      '1 tbsp (15 g) white miso paste',
      '1 tsp (5 ml) toasted sesame oil',
      '2 portions fresh or dried ramen noodles',
      '2 soft-boiled eggs, halved (optional)',
      '2 scallions, thinly sliced',
      '1 sheet nori, cut into strips'
    ],
    steps: [
      'Put the dried shiitake and kombu in a saucepan with the water. Let them soak for 15 minutes off the heat — this cold start draws out more flavor than boiling straight away.',
      'Bring the pot to a bare simmer over medium heat. Pull the kombu out just before the water boils, or the broth turns bitter and slippery.',
      'Simmer the broth gently for 20 minutes. Lift out the rehydrated shiitake, squeeze them over the pot, then slice them and set aside.',
      'While the broth simmers, heat the oil in a skillet over medium-high. Sear the fresh shiitake caps in one layer for 4 to 5 minutes without stirring, until the edges are browned and the slices smell nutty.',
      'Add the garlic and ginger to the skillet and cook 45 seconds, until fragrant. Scrape the whole skillet into the broth.',
      'Whisk the miso with a ladleful of hot broth in a small bowl until smooth, then stir it back into the pot with the soy sauce and sesame oil. Keep the broth below a boil from here — boiling dulls the miso.',
      'Cook the noodles in a separate pot of water to package time, then drain well so they do not water down the broth.',
      'Divide the noodles between two bowls, ladle the broth and mushrooms over them, and top with egg, scallions, and nori.'
    ],
    tips: [
      'Never boil kombu. Pull it the moment small bubbles appear at the edges of the pot.',
      'Strain and save the dried-shiitake soaking liquid — it is the backbone of the broth, not something to discard.',
      'Cook noodles separately. Boiling them in the broth releases starch and turns it cloudy and thick.',
      'Fresh shiitake stems are too fibrous to eat, but they are worth adding to the broth pot and straining out later.'
    ],
    pairings: ['soft-boiled eggs', 'chili crisp', 'bok choy', 'corn', 'bamboo shoots'],
    storage: [
      'Store the broth separately from the noodles for up to 4 days; noodles left sitting in broth turn to mush.',
      'The broth freezes well for up to 3 months. Freeze it before adding the miso, then whisk fresh miso in when reheating.',
      'Reheat the broth to just below a simmer and cook fresh noodles to order.'
    ],
    relatedLinks: [
      { href: '/how-to-cook-shiitake-mushrooms/', label: 'How to cook shiitake mushrooms' },
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms' },
      { href: '/how-to-cook-enoki-mushrooms/', label: 'How to cook enoki mushrooms' },
      { href: '/how-to-cook-wood-ear-mushrooms/', label: 'How to cook wood ear mushrooms' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' }
    ]
  }
];
