# 🍄 CookMushroom

[cookmushroom.com](https://cookmushroom.com) — a static Astro site about cooking mushrooms. 31 guides and a growing recipe collection, 42 pages in all.

There is no CMS and no database. All content lives in two TypeScript files and is rendered at build time.

## Architecture

```
src/
├── data/
│   ├── guides.ts              # GuideArticle[]  — every guide page
│   └── recipes.ts             # RecipeArticle[] — every recipe page
├── pages/
│   ├── [slug].astro           # router over BOTH collections
│   ├── index.astro
│   ├── guides.astro
│   ├── mushroom-cook-time-chart.astro
│   ├── mushroom-recipe-index.astro
│   └── about | contact | privacy | 404
├── components/
│   ├── GuidePage.astro        # guide body markup
│   └── RecipePage.astro       # recipe body markup
├── layouts/Layout.astro
└── styles/global.css
```

Guides and recipes **share the root URL space** (`/<slug>/`). `[slug].astro` is a thin router that dispatches to `GuidePage` or `RecipePage`; the body markup lives in the components, not the route.

Adding a recipe is one entry in `recipes.ts` — nothing else. Adding a guide is one entry in `guides.ts`.

Schema is chosen by shape: a guide with `ingredients` emits **Recipe** schema, without it emits **Article**. Byline is Ana (Person); CookMushroom is the publisher Organization.

### Images

`public/images/`, WebP only. Each hero is a trio — `name.webp` (1200×800, ≤110 KB) plus `-900` and `-600` variants for srcset:

```bash
./scripts/make-hero.sh ~/Downloads/photo.png cookmushroom-garlic-mushroom-pasta-hero
```

## Local development

Requires **Node ≥22.12.0** (`.nvmrc` pins 22).

```bash
nvm use && npm ci
```

```bash
npm run dev
```

Then visit http://localhost:4321.

## Build

```bash
npm run build
```

This runs `astro check && astro build` — type errors fail the build. Output is static HTML in `dist/`, no adapter and no server runtime.

```bash
npm run preview
```

## Deployment

Push to `origin/main`. Cloudflare Pages builds and deploys automatically; there is no manual upload step.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Build system | v3 (Node 22.16.0, npm 10.9.2) |
| Node version | ≥22.12.0 — do not set `NODE_VERSION` below 22 |

Generate the lockfile with the **npm version the build image uses** (10.9.2). A lockfile written by npm 11 prunes optional wasm transitives that npm 10's `npm ci` demands, and the deploy fails.

After a deploy, verify a live URL. Old URLs may serve stale edge-cached HTML until a Cloudflare cache purge, which is a dashboard action.

## Content workflow

The roadmap lives in [`docs/content-calendar-2026-h2.md`](docs/content-calendar-2026-h2.md); its standing rules are binding, and Search Console data overrides the calendar at monthly checkpoints.

Every page must clear the publication gate in [`AGENTS.md`](AGENTS.md) before shipping — hero image, title and meta length, internal links in both directions, a cannibalization check, and a clean build.

Two editorial rules are permanent: this is a **cooking-only** site with no identification or foraging guidance, and it makes **no health, medical, or supplement claims**.

```bash
npm run grok    # duplicate-guard block for the recipe prompt
```

## Agent instructions

[`AGENTS.md`](AGENTS.md) is the persistent brief for any agent working in this repo, and `CLAUDE.md` is a symlink to it. Read it before making changes — it carries the publication gate, the editorial rules, and the architecture notes that are easy to violate by accident.

## Built with

- [Astro 7](https://astro.build) — static output, no adapter
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- Cloudflare Pages
