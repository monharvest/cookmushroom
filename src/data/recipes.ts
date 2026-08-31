import type { GuideFaq, GuideSection } from './guides';

export type RecipeArticle = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  minutes: string;
  image: string;
  imageAlt: string;
  recipeName: string;
  recipeCategory?: string;
  cookingMethod?: string;
  recipeCuisine?: string;
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
  // Same shapes the guide template uses. Sections render above the recipe card,
  // FAQs below storage — the depth that keeps a recipe page from being a bare card.
  sections?: GuideSection[];
  faqs?: GuideFaq[];
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
    recipeCategory: 'Side dish', cookingMethod: 'Sautéing',
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
    ],
    sections: [
      { heading: 'Why the onions start first', text: 'Onions and mushrooms want opposite pans. Onions soften slowly over medium heat and turn sweet as their sugars break down; mushrooms want a hot, dry pan and a few undisturbed minutes to brown. Starting the onions gives them the 10 to 12 minutes they need, and by the time the mushrooms go in, the pan is hot enough to sear rather than stew. Cooking both from the start gives you pale onions and gray mushrooms.' },
      { heading: 'The one-pan sequence', ordered: ['Onions alone over medium with a pinch of salt, 10 to 12 minutes, until soft and golden at the edges.', 'Heat up to medium-high, onions pushed to the rim, mushrooms in one layer in the cleared center.', 'Three minutes untouched, then toss everything together for 6 to 8 minutes until the pan looks dry.', 'Heat back to medium for butter, thyme, and pepper, then balsamic off the heat.'] },
      { heading: 'The rule that decides the texture', quote: 'Butter goes in when the pan looks dry — not before. Added early, it just floats on mushroom water.' },
      { heading: 'Which mushrooms work here', bullets: ['Cremini: the default. Firm enough to brown, deep enough in flavor to stand up to sweet onions.', 'White button: milder and softer; cut them a little thicker so they hold shape.', 'Portobello: slice the caps into 1/2-inch strips and expect a darker, juicier result.', 'Shiitake: stem them first and cut the cook a minute short — the caps brown fast.', 'Skip enoki, shimeji, and other delicate clusters here; they collapse against long-cooked onions.'] },
      { heading: 'Scaling it for a crowd', text: 'This is where the recipe usually goes wrong. Doubling the batch in the same skillet doubles the water in the pan, and the mushrooms steam instead of browning. Either use two pans, or brown the mushrooms in two batches and return them all to the onions at the butter stage. A 12-inch skillet handles 1 lb of mushrooms comfortably; beyond that, split it.' }
    ],
    faqs: [
      { question: 'Do you cook mushrooms or onions first?', answer: 'Onions first. They need 10 to 12 minutes over medium heat to soften and sweeten, while mushrooms need only 8 to 10 minutes in a hotter pan. Starting them together leaves the onions crunchy and the mushrooms pale.' },
      { question: 'Why are my mushrooms and onions watery?', answer: 'The pan was crowded or the heat was too low, so the mushroom liquid never evaporated. Keep the heat at medium-high after the mushrooms go in and cook until the pan surface looks dry before adding butter.' },
      { question: 'What mushrooms are best for mushrooms and onions?', answer: 'Cremini give the best balance of firmness and flavor. White button, portobello, and stemmed shiitake all work. Delicate clusters like enoki or shimeji do not — they fall apart against long-cooked onions.' },
      { question: 'Do you need sugar to caramelize the onions?', answer: 'No. Yellow onions have enough natural sugar to go golden in 10 to 12 minutes at medium heat. Sugar only speeds up the color, and it browns before the onions are actually soft.' },
      { question: 'Can you make mushrooms and onions ahead?', answer: 'Yes. Cook them fully, cool, and refrigerate up to 3 days. Reheat in a hot skillet rather than a microwave so the edges dry out and crisp again instead of turning soft.' },
      { question: 'What do you serve mushrooms and onions with?', answer: 'They are built for steak and burgers, but they also work spooned over polenta, mashed potatoes, ricotta toast, or folded into an omelet the next morning.' }
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
    recipeCategory: 'Main course', cookingMethod: 'Sautéing', recipeCuisine: 'Italian',
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
    ],
    sections: [
      { heading: 'The timing that makes this work', text: 'Mushrooms need a head start. They take 8 to 10 minutes to release their water and brown, and pasta takes 9 to 11 — but the mushrooms have to be done before the sauce comes together, not alongside it. Get the mushrooms browning first, then drop the pasta once the pan looks dry. Everything meets in the skillet with about a minute to spare.' },
      { heading: 'Why the sauce turns glossy instead of greasy', text: 'There is no cream here. The sauce is an emulsion: starchy pasta water, butter, and Parmesan whisked together by hard tossing. The starch suspended in the cooking water is what holds the fat and liquid in one glossy coat instead of letting them separate into oil and puddle. That is why you reserve more water than you think you need, and why the tossing has to be vigorous rather than gentle.' },
      { heading: 'The rule that saves the sauce', quote: 'Reserve 1 1/2 cups of pasta water before draining. You can always leave it in the cup; you cannot get it back once it is down the sink.' },
      { heading: 'Choosing the mushrooms', bullets: ['Cremini: the everyday default — firm, brown deeply, hold their shape in the toss.', 'Mixed wild: chanterelles, maitake, or oyster mushrooms make a more interesting plate; add torn pieces rather than slices.', 'Dried porcini: soak 1/2 oz, chop, and add with the cremini; use the strained soaking liquid in place of the wine for a much deeper sauce.', 'Shiitake: stem them, slice the caps, and pull them a minute early — they go leathery if overcooked.'] },
      { heading: 'Getting it right without wine', text: 'The wine deglazes the pan and adds acidity. Without it, use an extra 1/2 cup of pasta water to scrape the pan, then add a squeeze of lemon at the end to replace the brightness. Strained dried-mushroom soaking liquid works even better — it deglazes and deepens the mushroom flavor at the same time.' }
    ],
    faqs: [
      { question: 'What mushrooms are best for pasta?', answer: 'Cremini are the reliable choice: firm, deeply flavored, and they hold their shape in the toss. Mixed wild mushrooms make a better plate; shiitake work if you stem them and pull them a minute early.' },
      { question: 'Why is my mushroom pasta sauce watery instead of glossy?', answer: 'Either the mushrooms had not finished releasing their liquid, or there was not enough starchy pasta water and hard tossing to emulsify the butter and Parmesan. Toss vigorously over medium heat until the sauce visibly clings to the strands.' },
      { question: 'Can you make garlic mushroom pasta without wine?', answer: 'Yes. Deglaze with an extra 1/2 cup of pasta water and finish with a squeeze of lemon for the acidity. Strained dried-mushroom soaking liquid is an even better substitute.' },
      { question: 'Should you salt the mushrooms before or after browning?', answer: 'After. Salt pulls water out of mushrooms, so early salting keeps the pan wet and delays the browned crust you are after. Season once the pan looks dry.' },
      { question: 'How do you keep the Parmesan from turning stringy?', answer: 'Add it off direct high heat, with the pasta water already in the pan. Hard heat makes the cheese seize into strands instead of melting smoothly into the sauce.' },
      { question: 'Can you make this ahead?', answer: 'Not well — the sauce is an emulsion and it breaks on reheating. You can brown the mushrooms up to a day ahead and refrigerate them, then build the sauce fresh in about 12 minutes.' }
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
    recipeCategory: 'Main course', cookingMethod: 'Simmering', recipeCuisine: 'Japanese',
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
    ],
    sections: [
      { heading: 'Where the flavor actually comes from', text: 'This broth has no meat and no long simmer, so the savory depth has to come from two sources working together: dried shiitake and kombu. Dried shiitake carry concentrated guanylate; kombu brings glutamate. Neither is dramatic alone, but together they read as far deeper than either one, which is why a 20-minute vegetarian broth can taste like it simmered for hours.' },
      { heading: 'The two rules that decide the broth', bullets: ['Never boil the kombu. Pull it out as small bubbles appear at the pot edge — past that it turns the broth bitter and slippery.', 'Never boil the miso. Whisk it into a ladleful of hot broth, stir it back in, and keep the pot below a simmer from then on.'] },
      { heading: 'Fresh and dried shiitake do different jobs', text: 'The dried mushrooms build the broth and come out tender but soft. The fresh caps get seared separately so they arrive at the bowl with browned edges and a firm bite. Using only one kind gives you either a flat broth or a bowl with no texture — the recipe wants both.' },
      { heading: 'Building the bowl', ordered: ['Broth first, hot and just below a simmer.', 'Noodles cooked separately in plain water and drained well.', 'Noodles into the bowl, broth ladled over them.', 'Seared caps, egg, scallions, and nori on top at the last moment so the nori stays crisp at the edge.'] },
      { heading: 'Making it vegan', text: 'Leave out the soft-boiled egg and check that the miso and noodles are egg-free — many fresh ramen noodles are not. Fried tofu, charred corn, or a spoonful of chili crisp fill the same role the egg played, adding richness without dairy or eggs.' }
    ],
    faqs: [
      { question: 'Can you use only fresh shiitake for ramen broth?', answer: 'You can, but the broth will be noticeably thinner. Drying concentrates shiitake flavor, and the dried mushrooms are what make a 20-minute broth taste long-simmered. Fresh caps are for texture on top.' },
      { question: 'Why did my ramen broth turn bitter and slippery?', answer: 'The kombu boiled. Pull it out just before the water reaches a boil — once it cooks at full heat it releases the compounds that make broth bitter and gives it a slick texture.' },
      { question: 'Can you cook the noodles in the broth?', answer: 'No. Noodles release starch as they cook, which turns the broth cloudy and thick. Cook them in a separate pot of water and drain well before they go into the bowl.' },
      { question: 'How do you make this ramen vegan?', answer: 'Skip the egg and check the noodles and miso for egg or dashi. Fried tofu, charred corn, or chili crisp replace the richness the egg was providing.' },
      { question: 'Can you make the broth ahead?', answer: 'Yes, and it improves. Make it through the soy-and-sesame stage but leave the miso out, refrigerate up to 4 days or freeze up to 3 months, then whisk fresh miso in when you reheat.' },
      { question: 'What should you do with the shiitake stems?', answer: 'Do not eat them — they stay fibrous no matter how long they cook. Drop them into the broth pot for extra flavor and strain them out with the rest of the solids.' }
    ]
  }
];
