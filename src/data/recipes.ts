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
      { href: '/sauteed-mushrooms-for-steak/', label: 'Mushrooms for steak, with a 5-minute pan sauce' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-cook-cremini-mushrooms/', label: 'How to cook cremini mushrooms' },
      { href: '/how-to-cook-mushrooms-in-a-pan/', label: 'How to cook mushrooms in a pan' },
      { href: '/how-to-roast-mushrooms-in-oven/', label: 'How to roast mushrooms in the oven' },
      { href: '/mushroom-stuffing/', label: 'Mushroom stuffing with porcini and sage' }
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
      { href: '/how-to-cook-porcini-mushrooms/', label: 'How to cook porcini mushrooms' },
      { href: '/how-to-use-truffles/', label: 'How to use truffles at the table' }
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
      { href: '/how-to-store-mushrooms/', label: 'How to store mushrooms before the holiday' },
      { href: '/stuffed-mushrooms/', label: 'Stuffed mushrooms for the appetizer tray' }
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
  },
  {
    // Calendar month 4, second pick after /mushroom-stuffing/ (reorder accepted
    // 2026-09-27). Ubersuggest US, 2026-09-27: `air fryer stuffed mushrooms`
    // 1,300/mo, SD 20, Dec 1,900, SERP DA 22–34 — the winnable slice.
    // `stuffed mushrooms` 49,500/mo (Nov–Dec 110,000) but SD 50. Covers both the
    // air fryer (small batch) and the oven (party batch).
    // Hero shipped 2026-10-11 (3f89b03); brief in docs/image-briefs/october-2026-heroes-2.md.
    slug: 'stuffed-mushrooms',
    title: 'Air Fryer Stuffed Mushrooms (Plus an Oven Party Batch)',
    description: 'Air fry the empty caps 4 minutes, fill them with a browned-stem and cream cheese filling, then 6 to 8 minutes more at 375°F. Oven: 400°F for a party tray.',
    updated: '2026-10-10',
    minutes: '50 min',
    image: '/images/cookmushroom-stuffed-mushrooms-hero.webp',
    imageAlt: 'Stuffed cremini mushrooms with a golden, crisp Parmesan and breadcrumb topping and chopped parsley on a white platter',
    recipeName: 'Air Fryer Stuffed Mushrooms with Garlic and Parmesan',
    keywords: ['stuffed mushrooms', 'air fryer stuffed mushrooms', 'cream cheese stuffed mushrooms', 'baked stuffed mushrooms', 'party appetizer', 'make-ahead appetizer'],
    cardMushroom: 'Cremini',
    cardGuide: 'how-to-cook-mushrooms-in-air-fryer',
    yieldText: '24 stuffed mushrooms (6 to 8 appetizer servings)',
    prepIsoTime: 'PT25M',
    cookIsoTime: 'PT25M',
    totalIsoTime: 'PT50M',
    recipeCategory: 'Appetizer', cookingMethod: 'Air frying', recipeCuisine: 'American',
    ingredients: [
      '24 medium cremini mushrooms (about 1 1/2 lb / 680 g), caps 1 1/2 to 2 inches across',
      '3 tbsp (45 ml) olive oil, divided',
      '1 tbsp (14 g) unsalted butter',
      '1 small shallot (about 1/4 cup / 40 g), minced',
      '3 garlic cloves, minced',
      '1 tsp fresh thyme leaves',
      '2 tbsp (30 ml) dry white wine or dry sherry (optional)',
      '4 oz (113 g) cream cheese, softened',
      '1/2 cup (40 g) finely grated Parmesan, divided',
      '1/3 cup (25 g) panko breadcrumbs, divided',
      '2 tbsp chopped flat-leaf parsley',
      '1/2 tsp kosher salt, divided',
      '1/4 tsp black pepper'
    ],
    steps: [
      'Wipe the mushrooms clean. Twist out the stems, then use a small spoon to scrape a little more room in each cap without breaking the rim. Chop the stems and scrapings finely.',
      'Heat 1 tbsp oil and the butter in a skillet over medium-high. Add the chopped stems, shallot, and 1/4 tsp salt and cook 6 to 8 minutes, stirring now and then, until the liquid has cooked away, **the pan looks dry**, and the bits are browned.',
      'Add the garlic and thyme and cook 1 minute, until fragrant. Pour in the wine, if using, and let it bubble away, about 30 seconds. Scrape into a bowl and cool 5 minutes.',
      'Stir in the cream cheese, 1/4 cup Parmesan, 2 tbsp panko, the parsley, and the pepper until smooth. In a small bowl, mix the remaining Parmesan and panko with 1 tbsp oil for the topping.',
      'Preheat the air fryer to 375°F (190°C) for 3 minutes. Brush the outside of the caps with the remaining 1 tbsp oil and season the cavities with the remaining 1/4 tsp salt.',
      'Air fry half the caps (about 12), **gill side down** in a single layer, for 4 minutes. They shrink slightly and release liquid.',
      'Turn the caps over with tongs and tip out any liquid pooled inside. Fill each with a heaping tablespoon of filling, mounded, and press on a pinch of the topping.',
      'Air fry 6 to 8 minutes more, until the topping is deep golden and the tip of a knife slides easily into the side of a cap. Repeat with the second batch. Rest 3 minutes before serving — the filling is very hot.'
    ],
    tips: [
      'Cook the empty caps first. It drives off the water that would otherwise pool around the filling and turn it loose and gray.',
      'Brown the stems until the pan is dry. Wet filling is the other half of the watery-mushroom problem.',
      'Pick caps of the same size so every one finishes at the same time.',
      'Air fryers run hot or cool by model. Check the first batch at 6 minutes and adjust the second.',
      'Taste the Parmesan before salting: a very salty cheese means you can halve the salt in the filling.'
    ],
    pairings: ['a holiday appetizer board', 'roast beef or steak', 'a green salad with lemon dressing', 'crostini', 'sparkling wine'],
    storage: [
      'Refrigerate leftovers in a covered container within 2 hours, for up to **3 to 4 days**.',
      'Reheat in the air fryer at 350°F (175°C) for 3 to 4 minutes, or in a 375°F (190°C) oven for about 8 minutes, until hot in the middle. The microwave makes the caps rubbery and the topping soft.',
      'Freeze baked, cooled mushrooms in one layer, then bag them, for up to 1 month. Reheat from frozen in a 375°F (190°C) oven for 15 to 20 minutes, until hot through. The caps soften a little after freezing.'
    ],
    relatedLinks: [
      { href: '/marinated-mushrooms/', label: 'Marinated mushrooms, a make-ahead appetizer' },
      { href: '/how-to-cook-mushrooms-in-air-fryer/', label: 'How to cook mushrooms in an air fryer' },
      { href: '/how-to-cook-cremini-mushrooms/', label: 'How to cook cremini mushrooms' },
      { href: '/how-to-clean-mushrooms/', label: 'How to clean mushrooms before cooking' },
      { href: '/how-to-roast-mushrooms-in-oven/', label: 'How to roast mushrooms in the oven' },
      { href: '/how-to-cook-portobello-mushrooms/', label: 'How to cook portobello mushrooms' },
      { href: '/mushroom-stuffing/', label: 'Mushroom stuffing for the holiday table' },
      { href: '/how-to-cook-button-mushrooms/', label: 'How to cook button mushrooms' }
    ],
    sections: [
      { heading: 'Why stuffed mushrooms turn watery', text: [
        'Mushrooms are about **92 percent water**, and a whole cap holds onto it until heat forces it out. Stuff a raw cap and bake it, and that water collects in the cavity, under the filling. You get a gray puddle on the plate and a filling that slumps instead of setting.',
        'Two steps stop it. **Cook the empty caps gill side down first**, so the first rush of liquid runs out of the cap instead of into the filling. And brown the chopped stems until the pan is dry, so the filling itself goes in without water to give up. Both take minutes, and they are the difference between a crisp, set top and a soggy one.'
      ] },
      { heading: 'Air fryer or oven?', text: [
        'The air fryer is the better tool for a small batch: the moving air crisps the topping fast and the caps cook through in about 12 minutes. A basket only holds one layer, though, so for a party tray of two dozen or more, the oven does it in one go.',
        'The filling and the two-stage method are the same either way. Only the temperature, the times, and the batch size change.'
      ], table: { headings: ['', 'Air fryer', 'Oven'], rows: [
        ['Batch size', 'About 10 to 12 medium caps in a 5- to 6-quart basket', '24 or more on a rimmed sheet pan'],
        ['Temperature', '375°F (190°C)', '400°F (200°C)'],
        ['Empty caps, gill side down', '4 minutes', '10 minutes'],
        ['After filling', '6 to 8 minutes', '12 to 15 minutes'],
        ['Best for', 'A snack for 2 to 4, or two quick batches', 'A party tray, all hot at once']
      ] } },
      { heading: 'The oven method for a party tray', text: 'Make the filling and topping exactly as in the recipe card below, then:', ordered: [
        'Heat the oven to 400°F (200°C). Line a rimmed sheet pan with foil and set a wire rack on it if you have one.',
        'Brush the caps with oil and lay them **gill side down** on the rack or pan. Roast 10 minutes.',
        'Turn them over and pour off any liquid in the caps and on the pan. Fill each cap and press on the topping.',
        'Bake 12 to 15 minutes, until the topping is deep golden and a knife slides easily into the side of a cap. Rest 3 minutes before serving.'
      ] },
      { heading: 'Which mushrooms to stuff', text: 'Cremini (sold as baby bella) are the best choice: firm enough to hold their shape, deep enough to take a real spoonful of filling, and more flavorful than white button mushrooms. Look for caps of one size, closed or barely open underneath.', table: { headings: ['Mushroom', 'Good for stuffing?', 'Notes'], rows: [
        ['Cremini, 1 1/2 to 2 in', 'Best', 'The size this recipe is timed for.'],
        ['White button', 'Yes', 'Milder and a little softer; check 1 minute early.'],
        ['Portobello', 'As a main course', 'Scrape out the dark gills first, and expect roughly double the times. One cap is a serving.'],
        ['Shiitake', 'Only large caps', 'Shallow caps hold little filling. Remove the stems — they stay woody — and chop them for the broth pot, not the filling.']
      ] } },
      { heading: 'Make them ahead', text: [
        'For a party, do the slow parts the day before and leave only the filling and the final bake for the day. Filled, unbaked caps hold in the fridge for a few hours, but not overnight: the filling softens and the caps keep weeping.',
        'If they go into the oven or air fryer straight from the fridge, add 2 to 3 minutes and **go by the knife test, not the clock**.'
      ], table: { headings: ['Step', 'How far ahead', 'Keep it'], rows: [
        ['Make the filling and topping', 'Up to 2 days', 'Separately, covered in the fridge'],
        ['Pre-cook the empty caps', 'Up to 1 day', 'Drained, gill side down on a paper towel, covered in the fridge'],
        ['Fill the caps', 'Up to 4 hours', 'Covered in the fridge'],
        ['Final bake', 'Just before serving', 'Add 2 to 3 minutes if cold from the fridge']
      ] } },
      { heading: 'How to tell they are done', text: 'Three cues, all visible: the topping is **deep golden** rather than pale, the caps have darkened and shrunk slightly, and the tip of a knife slides into the side of a cap with no resistance. If the topping is browning before the caps are tender, lay a piece of foil loosely over them for the last few minutes.' }
    ],
    faqs: [
      { question: 'How long do stuffed mushrooms take in the air fryer?', answer: 'About 12 minutes at 375°F (190°C): 4 minutes for the empty caps gill side down, then 6 to 8 minutes after filling, until the topping is deep golden and a knife slides easily into a cap.' },
      { question: 'What temperature do you bake stuffed mushrooms at?', answer: 'Use 400°F (200°C). Roast the empty caps gill side down for 10 minutes, then fill them and bake 12 to 15 minutes more.' },
      { question: 'Do you have to pre-cook mushrooms before stuffing them?', answer: 'It is the step that stops them going watery. Cooking the empty caps gill side down lets the first rush of liquid run out of the cap instead of pooling under the filling. It adds 4 minutes in the air fryer or 10 in the oven.' },
      { question: 'Why are my stuffed mushrooms watery?', answer: 'Either the caps went in raw or the filling went in wet. Pre-cook the empty caps and tip out the liquid, and brown the chopped stems until **the pan looks dry** before mixing the filling.' },
      { question: 'Can you make stuffed mushrooms ahead of time?', answer: 'Yes. Make the filling and pre-cook the caps up to a day ahead, then fill them up to 4 hours before baking. Add 2 to 3 minutes to the final bake if they come straight from the fridge.' },
      { question: 'Can you freeze stuffed mushrooms?', answer: 'Freeze them baked, not raw. Cool them, freeze in one layer, then bag them for up to 1 month. Reheat from frozen in a 375°F (190°C) oven for 15 to 20 minutes. They are best fresh: the caps soften a little after freezing.' },
      { question: 'What are the best mushrooms for stuffing?', answer: 'Cremini with caps 1 1/2 to 2 inches across. They hold their shape, take a good spoonful of filling, and taste more of mushroom than white button caps. Large portobellos work as a main course.' },
      { question: 'Can you add sausage to stuffed mushrooms?', answer: 'Yes. Brown 4 oz (113 g) bulk sausage until **no pink remains** and it reaches 160°F (71°C), drain it well, and fold it into the filling in place of half the cream cheese. Cut the salt in the filling to a pinch, since sausage is already salted.' }
    ]
  },
  {
    // Calendar 5.1 (Christmas). Ubersuggest: 'mushroom duxelles' near-zero US volume, so the title, H1 and intro target the Beef Wellington angle. Hero brief: docs/image-briefs/november-2026-heroes.md.
    "slug": "mushroom-duxelles",
    "title": "Mushroom Duxelles for Beef Wellington (Make-Ahead)",
    "description": "Cook finely chopped cremini and shallot in butter for 20 to 25 minutes, until a dry paste holds a line in the pan. Cool it fully before it goes on the beef.",
    "updated": "2026-11-03",
    "minutes": "40 min",
    "image": "/images/cookmushroom-duxelles-hero.webp",
    "imageAlt": "Dark brown mushroom duxelles with thyme in a stainless skillet, a wooden spoon drawing a clean line through the paste",
    "recipeName": "Classic Mushroom Duxelles for Beef Wellington",
    "recipeCategory": "Condiment",
    "cookingMethod": "Sautéing",
    "recipeCuisine": "French",
    "keywords": [
      "mushroom duxelles",
      "duxelles for beef wellington",
      "beef wellington mushroom layer",
      "make-ahead duxelles",
      "christmas dinner prep"
    ],
    "cardMushroom": "Cremini",
    "cardGuide": "how-to-cook-cremini-mushrooms",
    "yieldText": "About 1 1/2 cups (enough for one 2 1/2 to 3 lb Wellington)",
    "prepIsoTime": "PT15M",
    "cookIsoTime": "PT25M",
    "totalIsoTime": "PT40M",
    "ingredients": [
      "1 1/2 lb (680 g) cremini mushrooms, wiped clean",
      "2 medium shallots (about 1/2 cup / 80 g), finely minced",
      "2 garlic cloves, finely minced",
      "3 tbsp (42 g) unsalted butter",
      "1 tbsp (15 ml) olive oil",
      "2 tsp fresh thyme leaves, chopped",
      "3/4 tsp kosher salt",
      "1/4 tsp black pepper",
      "3 tbsp (45 ml) dry sherry, Madeira, or dry white wine (optional)",
      "1 tbsp chopped flat-leaf parsley"
    ],
    "steps": [
      "Trim the dry ends of the stems. Chop the mushrooms in a food processor in 3 batches, pulsing 8 to 10 times, until the pieces are about the size of rice grains. Scrape the bowl between pulses; do not run it to a purée.",
      "Heat the butter and oil in your widest skillet over medium heat until the butter foams. Add the shallots and cook 2 to 3 minutes, until soft and translucent but not browned.",
      "Add all the mushrooms and the salt and stir. Raise the heat to medium-high. They will look wet within 3 minutes as they release their water.",
      "Cook, stirring every minute or so, for 15 to 20 minutes. The liquid boils off, the hiss in the pan goes quiet, and the mixture darkens from tan to deep brown.",
      "Add the garlic, thyme and pepper and cook 1 minute, until fragrant. Pour in the sherry, if using, and stir until it is gone, about 1 minute.",
      "Keep cooking until **a spoon drawn across the pan leaves a clean line** that does not fill with liquid and the paste clumps on the spoon. Stir in the parsley and taste for salt.",
      "Spread the duxelles on a plate in a thin layer to cool, then refrigerate until cold, at least 30 minutes, before spreading it on pastry, crêpes or beef."
    ],
    "tips": [
      "Dry is the whole point. Wet duxelles is what makes the pastry under a Wellington soggy, so cook past the point where you think it is done.",
      "Use the widest pan you own. A 12-inch skillet steams 1 1/2 lb of chopped mushrooms off in about 20 minutes; a small pan can take twice as long.",
      "Pulse, do not blend. Rice-sized pieces cook dry and spread evenly; a purée holds water and turns pasty.",
      "Salt early. It draws the water out of the mushrooms faster, which shortens the cook.",
      "Hand-chopping works: slice, then rock a chef’s knife through the pile until the pieces are fine. Budget 15 minutes for 1 1/2 lb."
    ],
    "pairings": [
      "beef Wellington",
      "mushroom Wellington",
      "omelets",
      "toast with ricotta",
      "pan sauces and gravy"
    ],
    "storage": [
      "Refrigerate in a covered container for up to **4 days**.",
      "Freeze flat in a zip-top bag for up to 3 months. Thaw overnight in the fridge, then stir in a dry skillet for 1 to 2 minutes if any liquid has separated.",
      "Use it cold for a Wellington. Warm duxelles melts the butter in puff pastry before it reaches the oven."
    ],
    "relatedLinks": [
      {
        "href": "/sauteed-mushrooms-for-steak/",
        "label": "Sautéed mushrooms for steak, with a pan sauce"
      },
      {
        "href": "/how-to-clean-mushrooms/",
        "label": "How to clean mushrooms before chopping"
      },
      {
        "href": "/how-to-cook-cremini-mushrooms/",
        "label": "How to cook cremini mushrooms"
      },
      {
        "href": "/how-to-cut-mushrooms/",
        "label": "How to cut mushrooms: slices, quarters and fine dice"
      },
      {
        "href": "/how-to-freeze-mushrooms/",
        "label": "How to freeze mushrooms"
      },
      {
        "href": "/how-to-cook-dried-mushrooms/",
        "label": "How to cook dried mushrooms (porcini for extra depth)"
      },
      {
        "href": "/mushroom-stuffing/",
        "label": "Mushroom stuffing for the holiday table"
      }
    ],
    "sections": [
      {
        "heading": "What duxelles is",
        "text": [
          "Duxelles is a French preparation of very finely chopped mushrooms and shallots, cooked in butter until nearly all their water is gone. What is left is a dark, concentrated paste that tastes intensely of mushroom and spreads like a thick jam.",
          "It is best known as the layer between the beef and the pastry in a **beef Wellington**, but it is a base ingredient, not a finished dish. A spoonful stirs into gravy, fills an omelet, tops toast, or stuffs a chicken breast. Making a double batch at Christmas is worth it."
        ]
      },
      {
        "heading": "Why the Wellington needs it dry",
        "text": [
          "A Wellington cooks the beef inside sealed pastry, so any water in the filling has nowhere to go. It turns to steam against the underside of the pastry, and you cut into a pale, gummy base instead of a crisp one.",
          "Fresh mushrooms are about **92 percent water**. A pound and a half of them gives up close to a cup of liquid as it cooks. Duxelles exists to drive that water off before the mushrooms go anywhere near the pastry. The spoon-line test in step 6 is the check: if liquid seeps back into the line, keep cooking."
        ]
      },
      {
        "heading": "How it looks at each stage",
        "table": {
          "headings": [
            "Time in the pan",
            "What you see",
            "What to do"
          ],
          "rows": [
            [
              "0 to 3 min",
              "Pale, fluffy chopped mushrooms; the pan sizzles",
              "Stir once a minute"
            ],
            [
              "3 to 10 min",
              "Wet and glossy, liquid pooling around the edges",
              "Keep the heat at medium-high; do not cover"
            ],
            [
              "10 to 18 min",
              "Liquid gone, sizzle returns, color turns tan to brown",
              "Stir more often so the bottom does not catch"
            ],
            [
              "18 to 25 min",
              "Dark brown, clumping paste; a spoon leaves a clean line",
              "Add garlic and wine, cook off, then cool"
            ]
          ]
        }
      },
      {
        "heading": "Using it in a beef Wellington",
        "text": "For a 2 1/2 to 3 lb (1.1 to 1.4 kg) center-cut beef tenderloin, this batch is the right amount. The mushroom part of the job:",
        "ordered": [
          "Make the duxelles up to 2 days ahead and chill it. Cold paste spreads in an even layer and will not melt the pastry.",
          "Lay overlapping slices of prosciutto or crêpes on plastic wrap, then spread the duxelles over them about **1/4 inch (6 mm) thick**, edge to edge.",
          "Set the seared, cooled beef on top and roll it up tight in the wrap. Chill 20 to 30 minutes so it holds its shape before it goes into the pastry.",
          "Bake as your Wellington recipe directs. The beef is the thing to time: take it out when a thermometer in the center reads 120 to 125°F (49 to 52°C) for medium-rare; it rises as it rests."
        ]
      },
      {
        "heading": "Which mushrooms to use",
        "text": "Cremini are the standard: more flavor than white button mushrooms and cheap enough to buy in bulk. A small share of something stronger makes it taste richer.",
        "table": {
          "headings": [
            "Mushroom",
            "Use it?",
            "Notes"
          ],
          "rows": [
            [
              "Cremini (baby bella)",
              "Best",
              "The base of this recipe. Firm, brown and full-flavored."
            ],
            [
              "White button",
              "Yes",
              "Milder and paler; the paste ends up lighter brown."
            ],
            [
              "Dried porcini",
              "As a booster",
              "Soak 1/2 oz (15 g), chop fine and add with the fresh mushrooms. Reduce the strained soaking liquid with the wine."
            ],
            [
              "Shiitake",
              "Up to a quarter",
              "Caps only; the stems stay woody. Adds a deeper, savory note."
            ],
            [
              "Portobello",
              "Yes, gills scraped",
              "Scrape out the dark gills first or the duxelles turns black and muddy."
            ]
          ]
        }
      },
      {
        "heading": "Make it ahead for Christmas",
        "text": [
          "Duxelles is the easiest part of a holiday Wellington to get out of the way. Make it on the weekend before, refrigerate it for up to 4 days, or freeze it flat for up to 3 months.",
          "Frozen duxelles may weep a little as it thaws. Stir it in a dry skillet over medium heat for a minute or two until **the pan looks dry again**, then chill it before use."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is duxelles used for in beef Wellington?",
        "answer": "It is the mushroom layer wrapped around the beef under the pastry. It adds deep mushroom flavor and, if cooked dry, acts as a barrier that keeps juices from soaking the pastry."
      },
      {
        "question": "How do you keep beef Wellington from getting soggy?",
        "answer": "Cook the duxelles until a spoon leaves a clean line in the pan, chill it completely, and wrap it in prosciutto or crêpes. The meat should also be seared and cooled before it is wrapped."
      },
      {
        "question": "How long does it take to cook duxelles?",
        "answer": "About 20 to 25 minutes in a 12-inch skillet for 1 1/2 lb of mushrooms. Go by the look, not the clock: **dark brown, clumping, and no liquid** when you drag a spoon through it."
      },
      {
        "question": "Can I make duxelles ahead?",
        "answer": "Yes. It keeps for up to 4 days in the fridge or 3 months in the freezer. Many cooks make it first, since a cold paste spreads more cleanly anyway."
      },
      {
        "question": "Do I need a food processor?",
        "answer": "No. A sharp chef’s knife gets the same result; it just takes longer. Aim for pieces about the size of a grain of rice."
      },
      {
        "question": "Can I make duxelles without alcohol?",
        "answer": "Yes. Leave the wine out, or deglaze with 1 tbsp of water and 1 tsp of lemon juice for brightness. Cook it off the same way."
      },
      {
        "question": "What else can I do with leftover duxelles?",
        "answer": "Stir it into gravy or a cream sauce, fold it into scrambled eggs or an omelet, spread it on toast under melted cheese, or use it in a mushroom Wellington with a whole roasted portobello in place of the beef."
      }
    ]
  },
  {
    // Calendar 5.2 (December steak dinners). Ubersuggest: 'mushroom side dish with steak' SD 8; 'mushroom sauce recipe steak' 1.6K, SD 7. Kept serving-focused to stay distinct from the pan guide and mushrooms-and-onions. Hero brief: docs/image-briefs/november-2026-heroes.md.
    "slug": "sauteed-mushrooms-for-steak",
    "title": "Sautéed Mushrooms for Steak, with a 5-Minute Pan Sauce",
    "description": "Brown cremini hard in a hot skillet, then make a quick shallot, brandy and cream sauce in the same pan while the steak rests. On the plate in 20 minutes.",
    "updated": "2026-11-03",
    "minutes": "20 min",
    "image": "/images/cookmushroom-mushrooms-for-steak-hero.webp",
    "imageAlt": "Browned cremini mushrooms in a glossy cream pan sauce with thyme in a cast-iron skillet",
    "recipeName": "Sautéed Mushrooms and Pan Sauce for Steak",
    "recipeCategory": "Side dish",
    "cookingMethod": "Sautéing",
    "recipeCuisine": "American",
    "keywords": [
      "mushrooms for steak",
      "mushroom side dish with steak",
      "mushroom sauce for steak",
      "steak topping",
      "holiday steak dinner"
    ],
    "cardMushroom": "Cremini",
    "cardGuide": "how-to-cook-mushrooms-in-a-pan",
    "yieldText": "4 servings (for 4 steaks)",
    "prepIsoTime": "PT5M",
    "cookIsoTime": "PT15M",
    "totalIsoTime": "PT20M",
    "ingredients": [
      "12 oz (340 g) cremini mushrooms, wiped clean, halved or quartered (thick-sliced if large)",
      "1 tbsp (15 ml) neutral oil, or the fat left in the steak pan",
      "2 tbsp (28 g) unsalted butter, divided",
      "1 medium shallot (about 1/4 cup / 40 g), minced",
      "2 garlic cloves, minced",
      "1 tsp fresh thyme leaves",
      "1/2 tsp kosher salt, divided",
      "1/4 tsp coarsely ground black pepper",
      "3 tbsp (45 ml) brandy, cognac or dry red wine",
      "1/2 cup (120 ml) beef or mushroom stock",
      "1/3 cup (80 ml) heavy cream (optional, for the creamy sauce)",
      "1 tsp Dijon mustard",
      "1 tsp Worcestershire sauce, or soy sauce",
      "1 tbsp chopped parsley or chives"
    ],
    "steps": [
      "Cook the steaks first if you are using one pan, and move them to a board to rest. Pour off all but about 1 tbsp of fat. Otherwise heat the oil in a 12-inch skillet over medium-high heat until it shimmers.",
      "Add the mushrooms in a single layer, cut side down, and **leave them alone for 3 minutes**, until the undersides are deep golden. Season with 1/4 tsp salt, toss, and cook 3 to 4 minutes more, until browned all over and the pan is dry.",
      "Lower the heat to medium. Add 1 tbsp butter, the shallot, garlic and thyme and cook 1 minute, stirring, until the shallot softens.",
      "Take the pan off the heat and add the brandy or wine (off the heat, so it cannot flare). Return it to the heat and scrape up the browned bits until the liquid is almost gone, about 30 seconds.",
      "Add the stock and simmer 2 minutes, until reduced by about half. Stir in the cream, if using, the mustard and the Worcestershire, and simmer 1 to 2 minutes more, until **the sauce coats the back of a spoon**.",
      "Off the heat, swirl in the last 1 tbsp butter, the pepper and any juices from the resting steaks. Taste for salt, add the parsley, and spoon over the sliced steak."
    ],
    "tips": [
      "Dry pan first, sauce second. If the mushrooms are still wet when the liquid goes in, they stew and the sauce turns thin and gray.",
      "Do not salt until after the first sear: salt draws water out early and stops the browning.",
      "Pour the resting juices from the steak board into the sauce at the end. It is the best seasoning in the kitchen.",
      "Leave out the cream and stock for a plain steak topping: stop after step 3, deglaze with 1 tbsp brandy or a squeeze of lemon, and finish with the butter.",
      "Doubling for a holiday table? Brown the mushrooms in two batches, then combine them for the sauce."
    ],
    "pairings": [
      "ribeye or strip steak",
      "beef tenderloin",
      "mashed potatoes",
      "roast potatoes",
      "green beans"
    ],
    "storage": [
      "Refrigerate leftovers in a covered container for up to **3 days**.",
      "Reheat gently in a small pan over low heat, stirring, with 1 to 2 tbsp of stock or water if the sauce has thickened. A hard boil can split the cream.",
      "Not a good freezer candidate with cream; the sauce turns grainy when thawed. The plain version freezes for up to 2 months."
    ],
    "relatedLinks": [
      {
        "href": "/how-to-cook-mushrooms-in-a-pan/",
        "label": "How to cook mushrooms in a pan"
      },
      {
        "href": "/how-to-cook-cremini-mushrooms/",
        "label": "How to cook cremini mushrooms"
      },
      {
        "href": "/sauteed-mushrooms-and-onions/",
        "label": "Sautéed mushrooms and onions"
      },
      {
        "href": "/how-to-grill-mushrooms/",
        "label": "How to grill mushrooms"
      },
      {
        "href": "/how-to-cook-king-oyster-mushrooms/",
        "label": "How to cook king oyster mushrooms"
      },
      {
        "href": "/mushroom-duxelles/",
        "label": "Mushroom duxelles for beef Wellington"
      },
      {
        "href": "/how-to-clean-mushrooms/",
        "label": "How to clean mushrooms"
      }
    ],
    "sections": [
      {
        "heading": "Mushrooms that belong next to a steak",
        "text": [
          "A steak plate needs mushrooms that can stand up to it: **deeply browned, a little crisp at the edges**, and glossy with a sauce that ties them to the meat. Pale, soft, boiled-looking mushrooms do the opposite.",
          "This recipe is built around the steak dinner. The mushrooms brown while the steak rests, the sauce is made in the same pan from the browned bits, and the steak’s own juices go in at the end. If you want a general lesson in pan-cooking mushrooms, the pan guide covers that; this page is about getting them onto a steak plate."
        ]
      },
      {
        "heading": "Two ways to serve them",
        "table": {
          "headings": [
            "",
            "Buttery topping",
            "Creamy pan sauce"
          ],
          "rows": [
            [
              "Stop after",
              "Step 3, plus a splash of brandy or lemon",
              "Step 6"
            ],
            [
              "Time",
              "About 10 minutes",
              "About 15 minutes"
            ],
            [
              "Texture",
              "Browned mushrooms, butter-glazed",
              "Mushrooms in a sauce that coats a spoon"
            ],
            [
              "Best with",
              "Grilled steak, burgers",
              "Pan-seared steak, tenderloin, a holiday roast"
            ]
          ]
        }
      },
      {
        "heading": "Which mushrooms to use",
        "text": "Cremini are the everyday choice: firm, savory and easy to find. For a special dinner, mix in something with more texture.",
        "bullets": [
          "**Cremini (baby bella):** the default. Halve small ones and quarter large ones so they stay juicy inside.",
          "**White button:** milder, and a little more water to cook off; give them 2 extra minutes.",
          "**King oyster:** cut the stems into thick coins and score them. They sear like scallops and stay meaty.",
          "**Shiitake:** caps only, sliced. Very savory with soy in place of Worcestershire.",
          "**Wild mushrooms** such as chanterelles or morels: lovely with steak, but skip the cream so their flavor leads."
        ]
      },
      {
        "heading": "Timing it with the steak",
        "text": [
          "Steaks need 5 to 10 minutes of rest, and that is exactly how long the mushrooms and sauce take. Cook the steak, move it to a board, and make everything in the same pan while it rests.",
          "For a crowd or a big roast, make the sauce up to step 5 an hour ahead, keep it off the heat, and warm it gently just before serving, finishing with the butter and the resting juices."
        ]
      },
      {
        "heading": "How to tell they are done",
        "text": "The mushrooms are ready for the sauce when they are **brown on at least two sides**, have shrunk by about a third, and the pan sizzles instead of bubbling. The sauce is ready when you can draw a finger through it on the back of a spoon and the line holds."
      }
    ],
    "faqs": [
      {
        "question": "What mushrooms go best with steak?",
        "answer": "Cremini are the most reliable: firm, savory and quick to brown. King oyster and shiitake add more texture and depth for a special dinner."
      },
      {
        "question": "How do you make a mushroom sauce for steak?",
        "answer": "Brown the mushrooms, soften a shallot and garlic in butter, deglaze with brandy or red wine, then reduce stock with a little cream, Dijon and Worcestershire until it coats a spoon. Finish with butter and the steak’s resting juices."
      },
      {
        "question": "Can I make it without alcohol?",
        "answer": "Yes. Deglaze with an extra 3 tbsp of stock and add 1 tsp of red wine vinegar or lemon juice at the end for the acidity the wine would give."
      },
      {
        "question": "Should I cook the mushrooms before or after the steak?",
        "answer": "After. Cook the steak, let it rest, and use the same pan for the mushrooms and sauce. They pick up the browned bits, and the timing matches the rest."
      },
      {
        "question": "How do I keep the mushrooms from going soggy?",
        "answer": "Use a hot, wide pan, keep them in one layer, and do not salt or stir for the first 3 minutes. Add liquid only once **the pan is dry**."
      },
      {
        "question": "Can I make it ahead?",
        "answer": "The sauce holds for up to an hour off the heat, or 3 days in the fridge. Rewarm it gently over low heat with a splash of stock; do not let a cream sauce boil hard."
      }
    ]
  },
  {
    // Calendar 5.3 (December appetizers). Ubersuggest: 'marinated mushrooms' 5.4K, SD 36 — above the SD floor, so holiday/make-ahead long-tails are the realistic target. Hero brief: docs/image-briefs/november-2026-heroes.md.
    "slug": "marinated-mushrooms",
    "title": "Marinated Mushrooms (Easy Make-Ahead Antipasto)",
    "description": "Blanch small button mushrooms for 3 minutes, then marinate them in olive oil, red wine vinegar, garlic and herbs. Ready in 4 hours; keeps 4 days in the fridge.",
    "updated": "2026-11-03",
    "minutes": "20 min + marinating",
    "image": "/images/cookmushroom-marinated-mushrooms-hero.webp",
    "imageAlt": "Marinated button mushrooms with garlic, herbs, red pepper flakes and olive oil in a glass jar and a small bowl",
    "recipeName": "Italian-Style Marinated Mushrooms",
    "recipeCategory": "Appetizer",
    "cookingMethod": "Blanching",
    "recipeCuisine": "Italian",
    "keywords": [
      "marinated mushrooms",
      "antipasto mushrooms",
      "make-ahead appetizer",
      "holiday appetizer",
      "marinated button mushrooms"
    ],
    "cardMushroom": "White button or cremini",
    "cardGuide": "how-to-cook-button-mushrooms",
    "yieldText": "About 3 cups (8 appetizer servings)",
    "prepIsoTime": "PT15M",
    "cookIsoTime": "PT5M",
    "totalIsoTime": "PT4H20M",
    "ingredients": [
      "1 1/2 lb (680 g) small white button or cremini mushrooms, about 1 inch across, wiped clean",
      "2 tbsp kosher salt, for the blanching water",
      "1/3 cup (80 ml) red wine vinegar",
      "1/2 cup (120 ml) extra-virgin olive oil",
      "2 tbsp (30 ml) fresh lemon juice",
      "3 garlic cloves, thinly sliced",
      "1 tsp dried oregano",
      "1/2 tsp red pepper flakes",
      "1 tsp sugar or honey",
      "3/4 tsp kosher salt, for the marinade",
      "1/4 tsp black pepper",
      "1 bay leaf",
      "2 tbsp chopped flat-leaf parsley",
      "1/4 cup (35 g) jarred roasted red pepper, diced (optional)"
    ],
    "steps": [
      "Trim the dry stem ends. Leave mushrooms about 1 inch across whole; halve any larger ones so all the pieces are the same size.",
      "Bring 3 quarts (about 3 liters) of water and the 2 tbsp salt to a boil. Add the mushrooms and boil **3 minutes**, until they are just tender and have darkened slightly. They will float; push them under once or twice.",
      "Drain well and spread on a towel for 5 minutes so surface water does not dilute the marinade.",
      "While they drain, whisk the vinegar, olive oil, lemon juice, garlic, oregano, red pepper flakes, sugar, salt, pepper and bay leaf in a bowl.",
      "Add the warm mushrooms (warm mushrooms soak up the marinade faster), the parsley and the roasted pepper, if using. Toss to coat.",
      "Transfer to a clean jar or container, cool to room temperature, then cover and **refrigerate at least 4 hours**, or overnight. Shake or stir once or twice.",
      "Take them out 20 minutes before serving so the oil turns liquid again, toss, and serve with toothpicks or on an antipasto board."
    ],
    "tips": [
      "Pick small, firm, closed caps of one size. They stay plump, and every piece seasons at the same rate.",
      "Blanch, do not simmer them soft. Three minutes keeps a little bite; five makes them slippery.",
      "Taste after 4 hours and adjust: more salt if flat, more vinegar if heavy, more pepper flakes for heat.",
      "The olive oil firms up in the fridge. That is normal; it melts back at room temperature.",
      "Use the leftover marinade as a salad dressing within the same 4 days."
    ],
    "pairings": [
      "an antipasto board",
      "cured meats and cheese",
      "crusty bread",
      "a green salad",
      "grain bowls"
    ],
    "storage": [
      "Keep covered in the refrigerator and eat within **4 days**. Garlic and herbs in oil must stay cold; do not store marinated mushrooms at room temperature.",
      "On a buffet, return them to the fridge within **2 hours**.",
      "Do not freeze; thawed mushrooms turn spongy and weep.",
      "This is a fridge recipe, not a canning recipe. It is not safe for shelf storage."
    ],
    "relatedLinks": [
      {
        "href": "/how-to-cook-button-mushrooms/",
        "label": "How to cook button mushrooms"
      },
      {
        "href": "/how-to-clean-mushrooms/",
        "label": "How to clean mushrooms"
      },
      {
        "href": "/how-to-store-mushrooms/",
        "label": "How to store mushrooms"
      },
      {
        "href": "/how-to-cook-cremini-mushrooms/",
        "label": "How to cook cremini mushrooms"
      },
      {
        "href": "/stuffed-mushrooms/",
        "label": "Stuffed mushrooms for a party tray"
      },
      {
        "href": "/how-to-grill-mushrooms/",
        "label": "How to grill mushrooms"
      },
      {
        "href": "/how-to-tell-if-mushrooms-are-bad/",
        "label": "How to tell if mushrooms are bad"
      }
    ],
    "sections": [
      {
        "heading": "Why blanch before marinating",
        "text": [
          "Raw mushrooms are spongy and closed; they take a marinade slowly and unevenly, and they stay squeaky. A short boil in salted water opens them up, seasons them through, and gives them the tender, juicy bite you expect from deli antipasto.",
          "Once blanched, there is **no more cooking**: the marinade does the rest in the fridge. That makes this the easiest make-ahead appetizer on a holiday menu — one pot of water, one bowl, and a jar."
        ]
      },
      {
        "heading": "Which mushrooms to use",
        "table": {
          "headings": [
            "Mushroom",
            "Use it?",
            "Notes"
          ],
          "rows": [
            [
              "Small white button, about 1 in",
              "Best",
              "Classic antipasto look; mild, so they take the marinade well."
            ],
            [
              "Small cremini",
              "Yes",
              "A little firmer and more savory; same times."
            ],
            [
              "Larger button or cremini",
              "Halve or quarter",
              "Cut to about 1-inch pieces so they season evenly."
            ],
            [
              "Shiitake",
              "Caps only",
              "Slice thick; blanch 2 minutes. Good with a splash of soy in the marinade."
            ],
            [
              "Oyster or king oyster",
              "Yes, torn or sliced",
              "Blanch 1 to 2 minutes; they turn soft quickly."
            ]
          ]
        }
      },
      {
        "heading": "Marinade variations",
        "bullets": [
          "**Lemon and thyme:** swap the oregano for 1 tsp fresh thyme and add the zest of 1 lemon.",
          "**Balsamic:** replace half the red wine vinegar with balsamic and add a pinch more sugar for a darker, sweeter jar.",
          "**Spicy:** double the red pepper flakes and add a sliced Calabrian or Fresno chili.",
          "**Herby green:** stir in 2 tbsp chopped basil and 1 tbsp chopped dill just before serving."
        ]
      },
      {
        "heading": "Make them ahead for the holidays",
        "text": [
          "They improve overnight, which makes them ideal party food. Make them 1 or 2 days before the event and keep them refrigerated.",
          "Plan the 4-day window from the day you blanch them, not the day of the party. If they are going on a board that sits out, set out only what you need and top it up from the fridge."
        ]
      },
      {
        "heading": "How to tell they are ready",
        "text": "After at least 4 hours, a halved mushroom should be **seasoned to the center** and tinted by the marinade, not white inside. They should be tender with a little bite. If the center still tastes plain, give them a few more hours."
      }
    ],
    "faqs": [
      {
        "question": "Do you have to cook mushrooms before marinating them?",
        "answer": "For this style, yes. A 3-minute blanch in salted water makes them tender, seasons them through, and lets them absorb the marinade. Raw mushrooms stay spongy and take much longer to flavor."
      },
      {
        "question": "How long do marinated mushrooms last?",
        "answer": "Up to **4 days** in the refrigerator in a covered container. Keep them cold the whole time, and do not leave them out for more than 2 hours."
      },
      {
        "question": "How long should mushrooms marinate?",
        "answer": "At least 4 hours, and overnight is better. Stir or shake the jar once or twice so every mushroom stays coated."
      },
      {
        "question": "Why did my olive oil turn solid?",
        "answer": "Olive oil thickens and clouds in the fridge. It is not spoiled. Let the jar stand 20 minutes at room temperature, then stir."
      },
      {
        "question": "Can I can marinated mushrooms for the shelf?",
        "answer": "Not with this recipe. It is designed for the fridge only. Shelf-stable canned mushrooms need a tested pressure-canning recipe."
      },
      {
        "question": "What do you serve marinated mushrooms with?",
        "answer": "An antipasto board with cheese, olives and cured meats, a slice of crusty bread, or tossed into a green salad or grain bowl with a little of the marinade as dressing."
      }
    ]
  }
];
