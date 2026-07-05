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
  { mushroom: 'Portobello', mushroomSlug: 'portobello', method: 'Oven roast', methodSlug: 'oven', time: '15–20 min', heat: '425°F / 220°C', fat: 'Brush with oil', done: 'Tender center, browned rim.' }
];

export const guideArticles = [
  {
    slug: 'how-to-cook-mushrooms',
    title: 'How to Cook Mushrooms So They Brown, Not Steam',
    description: 'The basic mushroom cooking method: high enough heat, enough room, salt at the right time, and no soggy pan.',
    minutes: '5 min',
    steps: [
      'Trim dry ends and brush off grit. Rinse only if dirty, then dry well.',
      'Heat a wide pan before adding oil. Crowding is the usual reason mushrooms steam.',
      'Cook mushrooms undisturbed for the first 2–3 minutes so moisture escapes and edges brown.',
      'Salt after the first browning, then finish with butter, garlic, herbs, soy sauce, or lemon.'
    ],
    tips: ['Use store-bought or positively identified edible mushrooms only.', 'If the pan floods, keep cooking until the water evaporates before adding butter.', 'Brown first, sauce second. Wet sauces too early stop browning.'],
    pairings: ['pasta', 'eggs', 'rice bowls', 'toast', 'steak', 'lentils']
  },
  {
    slug: 'how-to-cook-mushrooms-in-a-pan',
    title: 'How to Cook Mushrooms in a Pan',
    description: 'A simple pan method for browned mushrooms with crisp edges and a savory finish.',
    minutes: '4 min',
    steps: [
      'Slice mushrooms 1/4 inch thick or tear delicate varieties into bite-size pieces.',
      'Heat a skillet over medium-high heat. Add oil, then mushrooms in one layer.',
      'Leave them alone for 2–3 minutes, stir, then cook 5–7 minutes more.',
      'Salt, add butter and garlic for the last minute, then finish with parsley or lemon.'
    ],
    tips: ['Cast iron or stainless steel browns best.', 'Cook in batches if the pan looks full.', 'Butter burns early; add it near the end.'],
    pairings: ['omelets', 'burgers', 'risotto', 'ramen', 'grain bowls']
  },
  {
    slug: 'how-to-cook-mushrooms-in-air-fryer',
    title: 'How to Cook Mushrooms in an Air Fryer',
    description: 'Fast air-fryer mushrooms with browned edges and almost no cleanup.',
    minutes: '4 min',
    steps: [
      'Cut mushrooms evenly and toss with a little oil, salt, and pepper.',
      'Spread in a single layer. Airflow matters more than a heavy coating.',
      'Cook at 375–390°F / 190–200°C, shaking halfway.',
      'Finish with soy sauce, lemon, chili crisp, or grated parmesan after cooking.'
    ],
    tips: ['Wet mushrooms go rubbery; dry them first.', 'Small enoki bundles cook fast, so check early.', 'Use parchment only if it does not block airflow.'],
    pairings: ['salads', 'bowls', 'tacos', 'rice', 'snack plates']
  },
  {
    slug: 'how-to-cook-oyster-mushrooms',
    title: 'How to Cook Oyster Mushrooms',
    description: 'Oyster mushrooms cook quickly and shine when torn, seared, and seasoned simply.',
    minutes: '4 min',
    steps: [
      'Tear clusters into strips. Trim tough base pieces.',
      'Sear in a wide pan with oil over medium-high heat for 7–9 minutes.',
      'Let the frilly edges brown before stirring too much.',
      'Season with salt, garlic, smoked paprika, soy sauce, or a squeeze of lemon.'
    ],
    tips: ['Tearing gives better texture than slicing.', 'For tacos, press them lightly while searing.', 'They shrink a lot; start with more than you think.'],
    pairings: ['tacos', 'noodles', 'polenta', 'toast', 'fried rice']
  },
  {
    slug: 'how-to-cook-lions-mane-mushrooms',
    title: "How to Cook Lion's Mane Mushrooms",
    description: "Lion's mane is best sliced thick, pressed, and browned like a cutlet.",
    minutes: '5 min',
    steps: [
      'Slice into 1/2 inch slabs or pull into thick pieces.',
      'Sear with oil over medium heat and press gently to drive off moisture.',
      'Cook 5–7 minutes per side until deeply golden.',
      'Finish with butter, garlic, lemon, Old Bay, or a light pan sauce.'
    ],
    tips: ['Do not mince it first; keep texture meaty.', 'Press, but do not crush.', 'Great as a crab-cake base after pre-searing.'],
    pairings: ['sandwiches', 'crabless cakes', 'steak plates', 'rice bowls']
  },
  {
    slug: 'how-to-cook-enoki-mushrooms',
    title: 'How to Cook Enoki Mushrooms',
    description: 'Enoki mushrooms need quick heat: wilt them, brown the tips, and stop before they turn stringy.',
    minutes: '3 min',
    steps: [
      'Cut off the dense root end and split into small bundles.',
      'Pan cook with a teaspoon of oil for 2–4 minutes or broil sauced bundles for 3–5 minutes.',
      'Use high heat briefly; long cooking makes them limp.',
      'Finish with gochujang, soy-garlic butter, sesame oil, or scallions.'
    ],
    tips: ['Separate bundles so seasoning gets inside.', 'Check early under a broiler.', 'They are excellent in soup but only need the final minutes.'],
    pairings: ['ramen', 'hot pot', 'rice', 'lettuce wraps']
  },
  {
    slug: 'how-to-cook-shiitake-mushrooms',
    title: 'How to Cook Shiitake Mushrooms',
    description: 'Shiitake caps bring deep savory flavor; remove tough stems and brown the caps.',
    minutes: '4 min',
    steps: [
      'Remove stems unless they are very tender. Slice caps evenly.',
      'Sauté in oil over medium-high heat for 6–8 minutes.',
      'Salt after browning, then add garlic, ginger, soy sauce, or mirin.',
      'For soups, simmer sliced caps 10–15 minutes.'
    ],
    tips: ['Save tough stems for stock.', 'Dry shiitakes need soaking; use the soaking liquid after straining.', 'They pair well with umami-heavy sauces.'],
    pairings: ['miso soup', 'noodles', 'dumplings', 'fried rice']
  },
  {
    slug: 'how-to-cook-portobello-mushrooms',
    title: 'How to Cook Portobello Mushrooms',
    description: 'Portobellos need strong heat and room for moisture to escape.',
    minutes: '4 min',
    steps: [
      'Remove the stem. Scrape dark gills only if you want a cleaner-looking dish.',
      'Brush with oil, salt, pepper, and a small splash of balsamic or soy sauce.',
      'Grill or pan sear 4–6 minutes per side, or roast at 425°F / 220°C for 15–20 minutes.',
      'Rest 2 minutes before slicing so juices settle.'
    ],
    tips: ['Do not over-marinate; portobellos soak up liquid fast.', 'Cook cap side down first for a flatter sear.', 'Use as a burger only after cooking off moisture.'],
    pairings: ['burgers', 'sandwiches', 'salads', 'polenta']
  }
];

export const recipes = [
  { group: 'Weeknight mains', items: ['Garlic mushroom pasta', 'Mushroom fried rice', 'Creamy mushroom toast', 'Oyster mushroom tacos'] },
  { group: 'Meatless favorites', items: ["Lion's mane cutlets", 'Portobello burgers', 'Shiitake miso noodles', 'Mushroom lentil ragu'] },
  { group: 'Sides', items: ['Pan-browned cremini', 'Air-fryer mushrooms', 'Soy-garlic enoki', 'Roasted portobello slices'] },
  { group: 'Breakfast', items: ['Mushroom eggs', 'Mushroom omelet filling', 'Shiitake breakfast rice', 'Mushroom hash'] }
];
