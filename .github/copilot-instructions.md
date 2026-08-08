# CookMushroom AI Coding Instructions

**Read [`AGENTS.md`](../AGENTS.md) first.** It is the authoritative brief for this repo — publication gate, editorial rules, architecture. This file is a summary; where the two disagree, `AGENTS.md` wins.

## What this is

cookmushroom.com — a **static Astro 7 site** about cooking mushrooms. Static output, **no adapter, no server runtime, no CMS, no database**. Deployed by Cloudflare Pages on push to `origin/main`.

There is no WordPress. Do not add an API client, a headless CMS, or `@astrojs/node` — the adapter was removed as unused and must not come back.

## Where content lives

All content is TypeScript, rendered at build time:

- `src/data/guides.ts` — `GuideArticle[]`
- `src/data/recipes.ts` — `RecipeArticle[]`

`src/pages/[slug].astro` is a thin router over **both** collections — guides and recipes share the root URL space (`/<slug>/`) — dispatching to `src/components/GuidePage.astro` or `RecipePage.astro`. Body markup belongs in those components, never in the route.

Adding a recipe is one entry in `recipes.ts`. Adding a guide is one entry in `guides.ts`. Give new recipes `sections` and `faqs`, or the page lands as a bare card at ~750 words.

Derived data also lives in `guides.ts`: `recipeCards` (which recipe shows on which guide, via each recipe's `cardGuide`) and `cookTimes` (chart rows). Never hardcode these in a component.

Schema follows shape: `ingredients` present → **Recipe**, absent → **Article**.

## Commands

```bash
npm run dev        # localhost:4321
npm run build      # astro check && astro build — type errors fail the build
npm run preview
```

Requires **Node ≥22.12.0**; `.nvmrc` pins 22. Generate lockfiles with **npm 10.9.2**, the version on the Pages build image — a lockfile from npm 11 prunes optional wasm transitives that npm 10's `npm ci` requires, and the deploy fails.

## Images

`public/images/`, WebP only. Hero trio per page: 1200×800 (≤110 KB) plus `-900` and `-600` for srcset. Build them with `./scripts/make-hero.sh <source> <hero-name>`.

Claude writes image briefs into `docs/image-briefs/`; the user generates the actual images. Do not delegate image generation.

## Non-negotiable editorial rules

- **Cooking only.** No identification or foraging guides. Wild-species wording never confirms a find is safe — use "market-purchased or expert-verified" framing.
- **No health, medical, or supplement claims.** This applies especially to chaga, reishi, and lion's mane. Culinary preparation only.
- Voice is concise and practical, built on observable cues ("pan looks dry", "edges turn golden"). No filler.

## Before shipping a page

The full gate is in `AGENTS.md`. In short: hero image exists and is species-accurate; title ≤65 chars and meta description 120–160; at least 4 outbound internal links and 3 existing pages edited to link back; check for cannibalization against existing slugs; `npm run build` passes with 0 diagnostics. Never ship a partial page or a broken image reference.
