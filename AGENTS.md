# CookMushroom — agent instructions

Read this first. It is the persistent memory for any agent (Hermes, Claude, or other) working on this repo.

## What this project is

cookmushroom.com — an Astro static site about cooking mushrooms, deployed automatically by Cloudflare on push to `origin/main`. 34 guides + 3 recipes. Public author byline: **Ana** (Person schema); CookMushroom is the publisher Organization.

## Where the plan lives

- **`docs/content-calendar-2026-h2.md`** — the 6-month content roadmap (July 2026 → Jan 2027). Check the current month's table for what to build next. Its "Standing rules" section is binding. GSC data overrides the calendar at monthly checkpoints (the Search Console property exists and collects data).
- **`docs/briefs/next-four-guides.md`** — completed batch (all four shipped); useful as the reference example of brief quality and structure.
- **`docs/image-briefs/`** — one file per hero batch. Claude writes the brief (exact filename, prompt, reject criteria); the user generates the image and runs `./scripts/make-hero.sh`. **Do not delegate image generation to Hermes** (user instruction, 2026-08-07).
- **`docs/drafts/remaining-recipe-upgrades.md`** — fully applied, historical only.

## Architecture

- Guides: `src/data/guides.ts` (`GuideArticle[]`), rendered by `src/pages/[slug].astro`. `ingredients` present → Recipe schema; absent → Article schema. `quickFacts` overrides the default Heat/Cut/Time/Finish grid (see `how-to-clean-mushrooms` for the pattern). A `GuideSection` may carry an optional `table: { headings, rows }` — see the shelf-life table in `how-to-store-mushrooms`.
- Engagement furniture, on every guide and recipe: `src/components/ShareRow.astro` (Pinterest / Facebook / email links, plus JS-enhanced native share, copy-link and print; each action fires a GA `share` event) and `src/components/RelatedCards.astro`, which renders `relatedLinks` as thumbnail cards by resolving each href against `guideArticles` + `recipeArticles`. A link to a page in neither collection (e.g. the cook-time chart) degrades to a tinted tile — fine, but prefer linking guides and recipes. `src/styles/global.css` carries an `@media print` block so a reader can cook from paper; ShareRow's `beforeprint` handler opens collapsed FAQs so nothing is lost.
- Recipes: `src/data/recipes.ts` (`RecipeArticle[]`) + `src/components/RecipePage.astro`. Adding a recipe = one entry in `recipes.ts`, nothing else. Recipes accept optional `sections` and `faqs` (same shapes as guides): sections render above the recipe card, FAQs below storage. **Use them on every new recipe** — without them a recipe page is a bare card and lands ~750 words.
- Routing: `src/pages/[slug].astro` is a thin router over BOTH collections — guides and recipes share the root URL space (`/<slug>/`). It dispatches to `GuidePage.astro` or `RecipePage.astro`. Guide body markup lives in `src/components/GuidePage.astro`, not in the route.
- Recipe cards on guide pages come from `recipeCards` in `guides.ts`, which derives from `recipeArticles`; each recipe's `cardGuide` decides which guide's "Use it in" section shows it, and `keywords`/`cardMushroom` are per-recipe (never hardcode these in the component).
- Cook-time chart rows: `cookTimes` in `guides.ts`. Recipe cards: `recipeCards` in `guides.ts`.
- Images: `public/images/`, WebP for everything on-page, 1200×800 hero + `-600`/`-900` variants for srcset. Hero ≤110 KB. Each full-size hero also needs a `-og.jpg` social card (1200×630) from `./scripts/make-og-cards.sh` — run it after `make-hero.sh`; it only writes missing cards unless passed `--force`. JPEG because `og:image` is fetched by link unfurlers, not browsers, and several still won't render WebP.
- Toolchain: Astro 7, static output, no adapter — do not re-add `@astrojs/node`, it was removed as unused. Requires **Node >=22.12.0**; `.nvmrc` pins 22 and Cloudflare Pages needs `NODE_VERSION=22` or the build fails.

## Publication gate (every page, no exceptions)

0. **Ubersuggest pre-write:** load `ubersuggest-seo-triage` and record a phrase that can rank (volume + SD) before drafting. No draft without that pass. Project `83915692f374ff209d58caf6ce6b633a94a8af723f8ed908d3d3da7c668e7b99`, en/US. Calendar topic that fails the floor → pick another calendar item.
1. Hero image exists, subject/species-accurate, WebP trio + `-og.jpg` social card, no text/watermark.
2. Title ≤65 chars; meta description 120–160 chars, answer-first.
3. ≥4 outbound internal links AND ≥3 existing pages edited to link back.
4. Cannibalization check against existing slugs — improve an existing page rather than duplicating intent.
5. `npm run build` passes with 0 diagnostics.
6. Never publish partial pages or broken image references.

## Editorial rules (permanent)

- `cm/*` is live. Theme ≠ content.
- Deploy: `bin/deploy.sh` after SSH-agent + rendered-page check. No manual ZIP.
- Hero images: verified monthly batches. Do not generate heroes in Hermes.
- NO health, medical, or supplement claims — especially chaga, reishi, lion's mane. Culinary preparation only.
- Voice: concise, practical, observable cues ("pan looks dry", "edges turn golden"). No filler.
- Body copy: keep paragraphs under ~100 words. `GuideSection.text` takes a string **or an array of strings**, one paragraph each — use the array rather than writing a wall. List-shaped content (discard cues, comparisons) belongs in `bullets` or `ordered`, not in prose.
- `**bold**` works in section text, bullets, ordered lists, tips, storage, variations and FAQ answers (`src/lib/richtext.ts` — bold only, everything else is escaped). Use it for the phrase a scanner needs: the doneness cue, the discard signal, the measurement. Roughly one per paragraph; bolding everything emphasises nothing.
- Seasonal pages publish 3–4 weeks before their peak.
- 3–4 gated pages/month max. Quality over volume.

## Workflow

- Commit style: short imperative subject (recent history uses both plain and `feat:`/`perf:` prefixes — either is fine), body bullets for multi-part changes. Author: monharvest <monharvest@gmail.com>.
- Push to `origin/main` deploys via Cloudflare. After deploy, verify a live URL; old URLs may serve stale edge-cached HTML until a Cloudflare cache purge (dashboard action, user-only).
- User-only actions (dashboard logins): Cloudflare purge/deploy logs, Google Search Console, image generation approval. Ask, don't block silently.
- If blocked on an asset (e.g., hero image), say exactly what's needed and do not ship partial work.

## Update this file

When architecture, rules, or major state changes (new page types, template changes, calendar replaced), update this file in the same commit.
