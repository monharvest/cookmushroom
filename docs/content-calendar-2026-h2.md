# CookMushroom content calendar — July 2026 to January 2027

**Purpose:** a self-contained execution plan. Any model (Hermes, Claude, or other) picking up a month's work should be able to ship it from this document plus the existing conventions in the repo.

**Site state when written (2026-07-11):** 28 guides (all full Recipe/Article schema), 1 recipe (`/sauteed-mushrooms-and-onions/`), responsive WebP heroes with preload, Ana as Person author, cook-time chart, recipe index. Live audit grade B/84, structured data 100.

---

## Standing rules (apply to every item below)

1. **Follow the established patterns.** Guides go in `src/data/guides.ts` (GuideArticle shape). Recipes go in `src/data/recipes.ts` + `RecipePage.astro`. Reference pages use `quickFacts` label overrides and Article schema (no `ingredients` field).
2. **Publication gate per page:** hero image exists (1200×800 WebP ≤110 KB + 600/900 variants), subject-accurate, no text/watermark; title ≤65 chars; meta description 120–160 chars, answer-first; ≥4 outbound internal links; ≥3 existing pages edited to link back; `npm run build` passes; no medical/supplement claims; wild-species wording never confirms a find is safe.
3. **Cannibalization check before writing:** search the existing 28 slugs. If the new query's intent is already served, improve that page instead of creating a URL. When in doubt, the new page must state in its first screen why it exists next to its nearest neighbor.
4. **Seasonal pages publish 3–4 weeks before their peak** so Google indexes and ranks them in time.
5. **Data overrides calendar.** At each monthly checkpoint, GSC data (once the property exists) reorders the queue. A page already getting impressions for a query we planned to target = improve that page, cancel the new one.
6. **Cadence: 3–4 pages per month.** Quality gate over volume. Slipping an item to next month is fine; shipping a page without its hero or links is not.
7. **Hero prompts:** follow the style of existing prompts (landscape 3:2 editorial food photography, natural light, realistic texture, "no people, no text, no labels, no watermark"). Species accuracy instructions required for any wild species.

---

## Month 1 — mid-July → mid-August 2026: finish phase 2, catch grilling season

| # | URL | Type | Why now |
|---|---|---|---|
| 1.1 | `/garlic-mushroom-pasta/` | Recipe | Audit priority #8; "how to cook mushrooms for pasta" is live autocomplete. **Prerequisite: refactor recipes to a dynamic route** (`getStaticPaths` over `recipeArticles`) so every later recipe is just a data entry. |
| 1.2 | `/how-to-grill-mushrooms/` | Guide (method) | Audit priority #6, and it is peak grilling season — this cannot wait for its calendar-neutral slot. Covers caps, skewers, foil packets; links to portobello and king oyster guides without duplicating them. |
| 1.3 | `/shiitake-mushroom-ramen/` | Recipe | Audit priority #9. Long-tail, reinforces the shiitake guide and the dried-mushroom hub (broth section links both ways). |
| 1.4 | `/how-to-cook-frozen-mushrooms/` | Guide (method) | Audit priority #5. Practical constraint query; short page; naturally reuses the "brown, don't steam" thesis. |

**Improvements this month:** dynamic recipe route (1.1 prerequisite) · user adds GSC property + submits sitemap (blocking all future data checkpoints) · Cloudflare cache purge if still pending.

**Checkpoint (mid-Aug):** GSC property live? Any page with impressions >100? Note top 10 queries.

---

## Month 2 — mid-August → mid-September 2026: the storage cluster

Storage/shelf-life queries are huge, evergreen, and the site answers them only in per-guide fragments. This month builds the cluster that every guide's storage section links into.

| # | URL | Type | Why now |
|---|---|---|---|
| 2.1 | `/how-to-store-mushrooms/` | Reference (Article + quickFacts) | **Shipped 2026-08-07** — 1,900 words, 12-row shelf-life table, backlinks from 5 pages. Canonical answer for paper bag vs plastic, fridge placement, shelf life by variety. |
| 2.2 | `/how-to-tell-if-mushrooms-are-bad/` | Reference | **Shipped 2026-08-14** — 2,350 words, 11-row symptom table, backlinks from 4 pages, 3 external food-safety citations. 2.1's "signs they are going" section trimmed to a pointer at the same time. |
| 2.3 | `/how-to-freeze-mushrooms/` | Guide (method) | **Shipped 2026-08-17** (hero generated 2026-08-17) — 2,020 words, 5-row method comparison table, backlinks from 5 pages. The frozen-mushrooms guide's "Freezing mushrooms yourself" section trimmed to a pointer at the same time. |
| 2.4 | `/how-to-dry-mushrooms/` | Guide (method) | **Shipped 2026-08-17** (hero pending — same brief) — 2,090 words, 12-row dries-well/dries-badly table, backlinks from 6 pages, NCHFP citations. Note: the chanterelle guide did **not** already carry a drying caveat as this row assumed — one was added to its storage list in the same commit. |

**Improvements this month:** add a "Storage & prep" section to the guides index page grouping cleaning/storage/freezing/drying references (do this once 2.3 and 2.4 exist) · per-page og:image (use each page's hero instead of the sitewide og-image.png; generate JPG og variants if scraper compatibility is a concern).

**Done 2026-08-07:** recipe template gained `sections` + `faqs` (recipe pages were the thinnest content on the site at 750–980 words); all three existing recipes deepened to 1,330–1,550 words.

**Done 2026-08-14:** 2.1's "signs they are going" section trimmed from a five-bullet list to a one-paragraph pointer, so it no longer competes with 2.2.

**Done 2026-08-17:** 2.3 and 2.4 shipped, completing the preservation cluster (store → spoilage → freeze → dry → cook dried). Both improvements for this month are now unblocked: the guides-index "Storage & prep" grouping and per-page `og:image`.

**Checkpoint (mid-Sep):** first meaningful GSC data expected. Which of the four July pages rank? Do storage pages get impressions within 2 weeks (fast-index signal)?

---

## Month 3 — mid-September → mid-October 2026: fall foraging surge + the pillar

Wild-mushroom searches spike September–November. The site is positioned as the *cooking* destination for foragers' finds (with strict identification disclaimers — that stance is a differentiator, keep it).

| # | URL | Type | Why now |
|---|---|---|---|
| 3.1 | `/types-of-mushrooms/` | Pillar (Article) | The missing hub. One page describing every variety the site covers (culinary character, not identification), linking to all 28+ guides. Strongest internal-linking asset the site can build; publish before peak season traffic. |
| 3.2 | `/how-to-cook-chicken-of-the-woods/` | Guide (species) | **Shipped 2026-08-22** (hero pending — see `docs/image-briefs/september-2026-heroes.md`) — 2,080 words, cut/method comparison table, backlinks from 4 pages, 2 new cook-time-chart rows. Pulled forward from its Month 3 slot under rule 4: Ubersuggest shows the query peaking at 6,600/mo in September against 1,600 now. The maitake guide gained a "Hen of the woods is not chicken of the woods" section in the same commit (`chicken of the woods vs hen of the woods` is 1,000/mo). |
| 3.3 | `/how-to-cook-puffball-mushrooms/` | Guide (species) | Second-tier fall species with clear cooking intent and low competition. Safety angle: slice to confirm pure white solid interior (mirrors the morel hollow-check pattern). |
| 3.4 | `/how-to-cook-hedgehog-mushrooms/` | Guide (species) | Rounds out the fall foraging set; low competition; behaves like chanterelles in the pan (link the dry-sauté method). |

**Keyword data pulled 2026-08-22 (Ubersuggest, US):** `how to cook chicken of the woods` 1,600/mo, SD 31, September peak **6,600**. `how to cook puffball mushroom` 720/mo, SD 30, peaks **later** — 2,400 in September, 2,900 in October, so 3.3 should ship early September. `types of mushrooms` 33,100/mo but **SD 65** — at DA 8 the pillar will not rank on that head term for a long time; build it for the internal-linking value the row already claims, not for the traffic. `how to cook hedgehog mushrooms` is **70/mo** — see the note below.

**Rule 5 flag on 3.4 (hedgehog):** 70/mo at SD 24. That is an order of magnitude below the other fall species and the lowest-volume target anywhere in this calendar. Data overrides the calendar, so 3.4 is a candidate to drop in favour of a higher-value item — the strongest replacement found is `/how-to-flute-mushrooms/` (`fluting mushrooms` + `flute a mushroom`, ~210/mo each, a knife/garnish technique with no identification exposure and no existing page). **User decision, not taken unilaterally.**

**Improvements this month:** re-run the full site audit (same methodology as July) and compare scores · review Core Web Vitals in CrUX/GSC now that srcset+preload have been live for two months.

**Checkpoint (mid-Oct):** does the pillar page get internal-link-driven crawl boosts (GSC crawl stats)? Which fall species page indexes fastest?

---

## Month 4 — mid-October → mid-November 2026: comfort food + Thanksgiving prep

US Thanksgiving (Nov 26, 2026) drives massive recipe search volume. Publish holiday pages by early November at the latest (rule 4).

| # | URL | Type | Why now |
|---|---|---|---|
| 4.1 | `/mushroom-gravy/` | Recipe | The single biggest seasonal opportunity for this site. Publish by Oct 25. Links: dried-mushroom hub (broth!), pan guide, button/cremini. Vegetarian by default with a drippings variation. |
| 4.2 | `/creamy-mushroom-soup/` | Recipe | Peak soup season; "cream of mushroom soup from scratch" intent. Uses mixed mushrooms → links 5+ species guides. |
| 4.3 | `/stuffed-mushrooms/` | Recipe | Thanksgiving + holiday party appetizer; enormous November–December query. Cremini/button base → links both guides. Publish by Nov 5. |
| 4.4 | `/mushroom-risotto/` | Recipe | Evergreen with a fall peak; the natural showcase for the porcini guide and the dried-mushroom broth method. |

**Improvements this month:** rework `/mushroom-recipe-index/` into a real recipe hub now that 6+ recipes exist (cards → actual recipe URLs, grouped by use: sides, mains, holiday) · add a "Recipes" nav item if the index warrants it.

**Checkpoint (mid-Nov):** holiday pages ranking? If gravy/stuffed mushrooms get traction, fast-follow with one more holiday page (green-bean-adjacent mushroom side or make-ahead notes added to existing pages) instead of item 5.4.

---

## Month 5 — mid-November → mid-December 2026: holiday mains + link equity

| # | URL | Type | Why now |
|---|---|---|---|
| 5.1 | `/mushroom-duxelles/` | Recipe | Beef Wellington season (Christmas). Classic technique page with low competition and strong culinary-authority signal. Links: cleaning guide (fine chop needs clean mushrooms), cremini. |
| 5.2 | `/sauteed-mushrooms-for-steak/` | Recipe (short) | "Mushrooms for steak" is a distinct high-intent query cluster; holiday steak dinners peak in December. Keep it short and clearly differentiated from the pan guide (it's a serving-focused recipe, not a method lesson). |
| 5.3 | `/marinated-mushrooms/` | Recipe | Holiday appetizer/antipasto query with a December peak; no-cook-after-blanch method adds variety to the recipe set. |
| 5.4 | Flex slot | — | Filled by whatever the Month 4 checkpoint indicated: a holiday fast-follow, a GSC-discovered opportunity, or pulled forward from Month 6. |

**Improvements this month:** year-end refresh pass — update `updated` dates ONLY on pages that get substantive improvements; add "make it for a crowd" scaling notes to gravy/stuffed/soup pages · verify all Recipe pages pass Rich Results Test in bulk.

**Checkpoint (mid-Dec):** traffic assessment. If sessions are trending toward ad-network thresholds (e.g., ~10k+/mo), start the monetization decision doc (ads vs affiliate vs neither) — do not add ads before the content base and traffic justify it.

---

## Month 6 — mid-December 2026 → mid-January 2027: Veganuary + meat-substitute angle

January = health/vegan resolution season. Mushrooms-as-meat is the site's natural angle, and the existing lion's mane and king oyster guides already gesture at it.

| # | URL | Type | Why now |
|---|---|---|---|
| 6.1 | `/portobello-mushroom-burger/` | Recipe | Big evergreen query with a January (Veganuary) and summer double peak. The portobello guide explicitly defers burger technique — this page completes it. Publish by Jan 1. |
| 6.2 | `/lions-mane-crab-cakes/` | Recipe | The lion's mane guide mentions crab-style cakes as a variation; this gives the recipe its own URL for the distinct query. Two-way links. |
| 6.3 | `/air-fryer-portobello-mushrooms/` | Recipe (short) | Audit priority #10, deliberately deferred until the generic pages matured. Clean appliance+species query. |
| 6.4 | `/mushroom-tacos/` | Recipe | Weeknight vegan main with steady demand; uses oyster/king oyster shreds → links both guides. |

**Improvements this month:** H1-2027 planning doc driven by 6 months of real GSC data (replace this file's speculation with query evidence) · audit re-run #3 · evaluate whether species coverage has gaps GSC reveals (queries landing on wrong pages).

---

## Continuous improvement track (not month-bound)

Work these in whenever a content slot frees up, in this order:

1. **GSC monthly review ritual** (once property exists): top queries per page, pages with impressions but CTR <1% (title/description rewrites), queries landing on the wrong page (new-page or redirect candidates). This ritual is the calendar's steering wheel.
2. **Internal link hygiene:** every new page triggers edits to ≥3 old pages. Quarterly, crawl for orphan pages and guides whose "related" blocks have fallen behind.
3. **E-E-A-T accumulation:** add one first-person testing note per month to an existing guide ("we tested 375°F vs 400°F...") — real experience signals, cheap to add with each refresh.
4. **Image pipeline:** keep the 600/900/1200 WebP discipline; never let a >150 KB hero ship. If a batch of heroes gets regenerated, re-verify species accuracy against each guide's imageAlt.
5. **Schema watch:** re-validate Recipe pages after any template change; watch GSC's enhancement reports for regressions.
6. **Deferred until data justifies:** llms.txt, FAQPage schema (Google restricts its rich results), newsletter/email capture, video, and ads. Revisit each at the Month 5 checkpoint.

## What NOT to do

- No second generic pan/stovetop/sauté URL — improve `/how-to-cook-mushrooms-in-a-pan/`.
- No identification/foraging guides. Cooking-only with safety disclaimers is the established legal-safe lane.
- No health-benefit posts (chaga/reishi/lion's mane supplement angle). Permanent editorial rule, not just caution.
- No thin species variants (e.g., "baby bella mushrooms" — it's cremini; the cleaning page FAQ already handles the synonym).
- No AI-volume blitz. 3–4 gated pages/month outperforms 20 ungated ones on this domain profile.
