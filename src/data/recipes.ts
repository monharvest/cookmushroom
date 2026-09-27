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
  },
  {
    // Calendar 4.1 (reordered 2026-09-27). Ubersuggest US: `mushroom stuffing`
    // 1,300/mo, 9,900 in November, SD 22; live SERP is grocery-chain recipe
    // pages, an Allrecipes category page and a Facebook post.
    slug: 'mushroom-stuffing',
    title: 'Mushroom Stuffing with Porcini and Sage',
    description: 'Brown the mushrooms until the pan is dry, moisten dried bread with porcini soaking liquid, and bake at 375°F until the top is crisp and the center hits 165°F.',
    updated: '2026-09-27',
    minutes: '1 hr 55 min',
    image: '/images/cookmushroom-mushroom-stuffing-hero.webp',
    imageAlt: 'Baked mushroom stuffing with a crisp golden top, browned mushrooms and sage in a white baking dish',
    recipeName: 'Make-Ahead Mushroom Stuffing with Porcini and Sage',
    keywords: ['mushroom stuffing', 'mushroom dressing', 'Thanksgiving stuffing', 'vegetarian stuffing', 'make-ahead stuffing'],
    cardMushroom: 'Cremini + dried porcini',
    cardGuide: 'how-to-cook-dried-mushrooms',
    yieldText: '10 side servings',
    prepIsoTime: 'PT30M',
    cookIsoTime: 'PT1H25M',
    totalIsoTime: 'PT1H55M',
    recipeCategory: 'Side dish', cookingMethod: 'Baking', recipeCuisine: 'American',
    ingredients: [
      '1 lb (454 g) sturdy white bread or sourdough, cut into 3/4-inch cubes (about 10 cups)',
      '1/2 oz (14 g) dried porcini mushrooms',
      '1 1/2 cups (360 ml) hot water, for soaking',
      '1 1/2 lb (680 g) fresh mushrooms — cremini, or cremini with some shiitake or oyster',
      '3 tbsp (45 ml) olive oil, divided',
      '6 tbsp (85 g) unsalted butter, divided, plus more for the dish',
      '2 medium yellow onions (about 400 g), diced',
      '3 celery stalks (about 150 g), diced',
      '4 garlic cloves, minced',
      '2 tbsp chopped fresh sage, or 2 tsp dried',
      '1 tbsp fresh thyme leaves',
      '1/3 cup (80 ml) dry white wine or dry sherry (optional)',
      '1 1/2 cups (360 ml) vegetable or chicken stock, plus up to 1/2 cup more',
      '2 large eggs',
      '1/3 cup chopped flat-leaf parsley',
      '1 1/2 tsp kosher salt, divided',
      '1/2 tsp black pepper'
    ],
    steps: [
      'Heat the oven to 275°F (135°C). Spread the bread cubes over two sheet pans and bake 30 to 40 minutes, tossing halfway, until they feel dry and crisp all the way through but are still pale.',
      'While the bread dries, cover the porcini with the hot water and soak 20 to 30 minutes. Lift them out, squeeze them over the bowl, and chop them. Strain the soaking liquid through a paper towel or coffee filter; you should have about 1 1/4 cups.',
      'Slice cremini and shiitake caps 1/4 inch thick and tear oyster mushrooms into bite-size pieces. Heat 1 1/2 tbsp oil in a 12-inch skillet over medium-high, add half the mushrooms in one layer, and leave them undisturbed for 3 minutes.',
      'Stir and cook 5 to 7 minutes more, until the released liquid has cooked away, the pan looks dry, and the edges are deep brown. Season with 1/4 tsp salt and tip into a large bowl. Repeat with the remaining oil and mushrooms.',
      'Lower the heat to medium. Add 3 tbsp butter, the onions, celery, and 1/2 tsp salt, and cook 8 to 10 minutes, scraping up the browned bits, until the onions are soft and translucent and the celery is tender.',
      'Add the garlic, sage, and thyme and cook 1 minute, until fragrant. Pour in the wine, if using, and simmer about 1 minute, until it has almost disappeared. Scrape everything into the mushroom bowl and add the chopped porcini.',
      'Raise the oven to 375°F (190°C) and butter a 9x13-inch (23x33 cm) baking dish. Add the dried bread cubes and parsley to the bowl.',
      'Whisk the eggs with the porcini liquid, stock, the remaining 1/2 tsp salt, and the pepper. Pour over the bread and fold gently until evenly moistened. Rest 10 minutes, then fold again.',
      'Squeeze a cube from the middle of the bowl. It should be moist all the way through with no liquid pooling at the bottom. If the centers are still dry, add more stock 1/4 cup at a time.',
      'Spread the stuffing loosely in the dish without pressing it down. Melt the remaining 3 tbsp butter and drizzle it over the top.',
      'Cover with foil and bake 25 minutes. Uncover and bake 20 to 25 minutes more, until the top is deep golden and crisp and the center reads 165°F (74°C). Rest 10 minutes before serving.'
    ],
    tips: [
      'Brown the mushrooms in **two batches**. A single 1 1/2 lb batch floods a 12-inch pan and steams instead of browning — which is exactly the soggy stuffing you are trying to avoid.',
      'Salt the mushrooms only after they brown. Early salt pulls water out and keeps the pan wet.',
      'Taste the stock first. If it is salted store-bought stock, cut the salt in the egg mixture to a pinch.',
      'Do not pack the dish. Loose cubes let the heat in and bake into a craggy, crisp top instead of a flat lid.',
      'Portobellos work, but scrape out the dark gills first or they turn the whole dish gray.'
    ],
    pairings: ['roast turkey', 'roast chicken', 'pork loin', 'cranberry sauce', 'green beans', 'mashed potatoes'],
    storage: [
      'Refrigerate leftovers within 2 hours of baking, covered, for **3 to 4 days**.',
      'Freeze baked stuffing, tightly covered, for up to 1 month. Thaw overnight in the fridge.',
      'Reheat covered at 350°F (175°C) with a splash of stock until the center reaches **165°F (74°C)**, then uncover for the last 10 minutes to crisp the top again.'
    ],
    relatedLinks: [
      { href: '/how-to-cook-dried-mushrooms/', label: 'How to cook dried mushrooms and use the broth' },
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-cook-cremini-mushrooms/', label: 'How to cook cremini mushrooms' },
      { href: '/how-to-cook-shiitake-mushrooms/', label: 'How to cook shiitake mushrooms' },
      { href: '/how-to-cut-mushrooms/', label: 'How to cut mushrooms' },
      { href: '/how-to-store-mushrooms/', label: 'How to store mushrooms before the holiday' }
    ],
    sections: [
      { heading: 'Why mushroom stuffing turns soggy', text: [
        'Mushrooms are about **92 percent water**. The 1 1/2 lb in this recipe carry roughly 2 1/2 cups of it — nearly as much as all the stock and soaking liquid combined. Stir them into the bread raw, or only softened, and they keep releasing that water in the oven. The bread underneath soaks it up and turns to paste while the top dries out.',
        'The fix is the one that runs through every guide on this site: **brown them until the pan looks dry** before they go anywhere near the bread. The water cooks off in the skillet, where it can evaporate, instead of in the dish, where it has nowhere to go. It also turns spongy mushrooms into browned, savory ones, which is most of the flavor in the finished stuffing.'
      ] },
      { heading: 'Porcini liquid does the work of meat stock', text: [
        'Most stuffing gets its savory depth from turkey stock, sausage, or pan drippings. Here half an ounce of dried porcini does that job. Soaking them makes a dark, concentrated broth that replaces nearly half the stock, and the stuffing tastes meaty even when every ingredient is vegetarian.',
        'Strain the soaking liquid through a paper towel or coffee filter, not just a sieve — dried porcini carry grit, and it settles to the bottom of the bowl. **Pour slowly and leave the last spoonful behind.** The soaked porcini get chopped and folded in, so nothing is wasted.'
      ] },
      { heading: 'Which mushrooms to use', text: [
        'Cremini are the base: cheap, firm, and they brown reliably. Swap up to a third of the weight for something with more character — shiitake, oyster, or maitake — and the stuffing tastes of more than one mushroom. Keep the total at 1 1/2 lb whatever the mix.',
        'Skip enoki. The thin strands go stringy in a long bake and tangle through the bread.'
      ], table: { headings: ['Mushroom', 'Share of the mix', 'Prep'], rows: [
        ['Cremini', 'Up to all of it', 'Slices 1/4 inch; the reliable base.'],
        ['White button', 'Up to all of it', 'Milder than cremini; slice a little thicker.'],
        ['Shiitake', 'Up to a third', 'Stems off — they stay woody. Slice the caps.'],
        ['Oyster', 'Up to a third', 'Tear along the grain; the edges crisp in the pan.'],
        ['Maitake', 'Up to a third', 'Break into small clusters; frilly edges brown fast.'],
        ['Chanterelle', 'Up to half, in season', 'Tear lengthwise; dry-sauté before adding any fat.'],
        ['Portobello', 'Up to a third', 'Scrape out the gills or the dish turns gray.'],
        ['Dried porcini', '1/2 oz on top of the fresh', 'Soak, chop, and use the strained liquid.']
      ] } },
      { heading: 'Dry bread, not stale bread', text: [
        'Stale and dry are not the same thing. A loaf left out overnight firms up mostly because its starch changes, not because the water has gone, so it soaks up less stock and slumps sooner. Drying the cubes in a low oven actually removes the water, and **a dry cube soaks up liquid and still holds its shape** through the bake.',
        'Use a sturdy loaf with some chew — country white, sourdough, or a plain Italian loaf. Soft sandwich bread turns to porridge. The cubes are ready when they feel **dry and crisp right through but are still pale**: you are drying them, not toasting them.'
      ] },
      { heading: 'The check before it goes in the oven', text: 'Bread varies more than any other ingredient here, so the liquid is a starting point, not a rule. Dry centers bake into dry stuffing; liquid pooling in the bowl bakes into a dense, wet bottom layer.', quote: 'Squeeze a cube from the middle of the bowl. Moist all the way through, with nothing pooling underneath, is right.' },
      { heading: 'Make it ahead for Thanksgiving', text: [
        'Almost all the work can be done days before the oven gets crowded. The one step to leave for the day is combining the bread with the eggs and liquid: assembled stuffing left overnight keeps absorbing, and the bottom layer bakes up dense.',
        'If the mushroom mixture comes straight from the fridge, add about 10 minutes to the covered bake and **go by the thermometer, not the clock**.'
      ], table: { headings: ['Step', 'How far ahead', 'Keep it'], rows: [
        ['Dry the bread cubes', 'Up to 3 days', 'Airtight container at room temperature'],
        ['Soak the porcini, strain the liquid', 'Up to 2 days', 'Liquid and chopped porcini covered in the fridge'],
        ['Brown the mushrooms, cook the vegetables', 'Up to 2 days', 'Covered in the fridge; no need to reheat'],
        ['Combine with eggs and liquid', 'On the day', 'Rest 10 minutes, then into the dish'],
        ['Bake', 'On the day, or fully baked 1 day ahead', 'Reheat covered at 350°F; uncover for the last 10 minutes']
      ] } }
    ],
    faqs: [
      { question: 'Can you make mushroom stuffing ahead of time?', answer: 'Yes. Dry the bread up to 3 days ahead and cook the mushroom mixture up to 2 days ahead, then combine with the eggs and liquid on the day. Or bake it completely a day ahead and reheat covered at 350°F, uncovering for the last 10 minutes.' },
      { question: 'Can you freeze mushroom stuffing?', answer: 'Freeze it baked, not raw. Cool it, cover tightly, and freeze up to 1 month. Thaw overnight in the fridge and reheat covered at 350°F (175°C) until the center reaches **165°F (74°C)**, then uncover to crisp the top.' },
      { question: 'Can you cook this stuffing inside the turkey?', answer: 'You can, but a dish is safer and better. Stuffing inside the bird has to reach **165°F (74°C)** in the center, and by the time it does the breast is usually overcooked. The USDA recommends cooking stuffing outside the bird for that reason — and in a dish you get the crisp top as well.' },
      { question: 'What is the difference between stuffing and dressing?', answer: 'Only where it cooks. Stuffing traditionally goes inside the bird; dressing is the same mixture baked in a dish. In much of the US the two words are used interchangeably, and this recipe, baked in a dish, is either one.' },
      { question: 'How do you make mushroom stuffing vegetarian or vegan?', answer: 'It is vegetarian as written if you use vegetable stock. For vegan, swap the butter for olive oil and the two eggs for an extra 1/2 cup of stock. Without eggs the stuffing sets more loosely, so give it the full uncovered time to crisp.' },
      { question: 'Why is my stuffing soggy on the bottom?', answer: 'Either the mushrooms went in wet or there was too much liquid for the bread. Brown the mushrooms until the pan is dry, dry the bread cubes in the oven, and squeeze a cube before baking: **moist through, nothing pooling in the bowl**.' },
      { question: 'Why is my stuffing dry?', answer: 'There was not enough liquid for how dry the bread was, or it spent too long uncovered. Check a cube before baking and add stock if the center is dry, and keep the first 25 minutes covered so the inside heats through before the top crisps.' },
      { question: 'Can you use cornbread?', answer: 'For up to half the bread. All-cornbread stuffing crumbles into a soft mass; mixed with sourdough or white bread it keeps some structure. Fold gently, and go by the squeeze check rather than the stock measurement.' }
    ]
  }
];
