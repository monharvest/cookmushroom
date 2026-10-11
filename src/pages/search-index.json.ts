// Built once into dist/search-index.json and fetched only by /search/.
import type { APIRoute } from 'astro';
import { guideArticles } from '../data/guides';
import type { GuideFaq, GuideSection } from '../data/guides';
import { recipeArticles } from '../data/recipes';
import { normalize } from '../lib/search';
import type { SearchDoc } from '../lib/search';

// Drop the **bold** and [link](/href/) markup that richtext.ts renders.
const plain = (text: string): string => text.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1');

const sectionText = (sections: GuideSection[] = []): string[] =>
  sections.flatMap((section) => [
    ...(Array.isArray(section.text) ? section.text : section.text ? [section.text] : []),
    ...(section.bullets ?? []),
    ...(section.ordered ?? []),
    ...(section.quote ? [section.quote] : []),
    ...(section.table ? [...section.table.headings, ...section.table.rows.flat()] : []),
  ]);

const headings = (sections: GuideSection[] = [], faqs: GuideFaq[] = []): string[] => [
  ...sections.map((section) => section.heading),
  ...faqs.map((faq) => faq.question),
];

const field = (parts: (string | undefined)[]): string => normalize(plain(parts.filter(Boolean).join(' ')));

const buildSearchDocs = (): SearchDoc[] => [
  ...guideArticles.map((guide): SearchDoc => ({
    slug: guide.slug,
    type: 'guide',
    title: guide.title,
    t: field([guide.title]),
    k: field([guide.label, guide.mushroomSlug, guide.recipeName, ...guide.pairings]),
    d: field([guide.description]),
    h: field(headings(guide.sections, guide.faqs)),
    b: field([
      guide.heat, guide.cut, guide.finish,
      ...(guide.quickFacts ?? []).map((fact) => `${fact.label} ${fact.value}`),
      ...(guide.ingredients ?? []), ...guide.steps, ...guide.tips,
      ...sectionText(guide.sections),
      ...(guide.faqs ?? []).map((faq) => faq.answer),
      ...(guide.storage ?? []), ...(guide.variations ?? []),
    ]),
  })),
  ...recipeArticles.map((recipe): SearchDoc => ({
    slug: recipe.slug,
    type: 'recipe',
    title: recipe.title,
    t: field([recipe.title, recipe.recipeName]),
    k: field([recipe.cardMushroom, recipe.recipeCategory, recipe.cookingMethod, recipe.recipeCuisine, ...recipe.keywords, ...recipe.pairings]),
    d: field([recipe.description]),
    h: field(headings(recipe.sections, recipe.faqs)),
    b: field([
      ...recipe.ingredients, ...recipe.steps, ...recipe.tips,
      ...sectionText(recipe.sections),
      ...(recipe.faqs ?? []).map((faq) => faq.answer),
      ...recipe.storage,
    ]),
  })),
];

export const GET: APIRoute = () =>
  new Response(JSON.stringify(buildSearchDocs()), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
