// Minimal inline markup for body copy.
//
// Content strings in guides.ts / recipes.ts are plain text, which Astro escapes.
// This lets an author write **bold** in that plain text and get <strong>, without
// opening the data files up to arbitrary HTML: the string is escaped FIRST, so a
// stray "<" in a recipe stays a literal "<", and only the ** pairs we add
// afterwards become markup.
//
// Two things are supported: **bold**, and [links](/to-internal-pages/).
//
// Bold exists so a reader scanning a long passage can find the decisive phrase —
// the doneness cue, the discard signal, the measurement. One emphasis per
// paragraph is the intent; bolding everything emphasises nothing.
//
// Links are restricted to site-internal paths by the pattern below: a href must
// start with "/" and contain only lowercase, digits, slashes and hyphens. That
// rules out protocols entirely, so no javascript: or data: URL can be written
// into a data file, and external links stay a deliberate act via `sources` or
// `relatedLinks` rather than something that can appear mid-sentence.
const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const INTERNAL_HREF = /^\/[a-z0-9/-]*$/;

export const inlineMarkup = (text: string): string =>
  escapeHtml(text)
    .replace(/\*\*(?=\S)([^*]+?)(?<=\S)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (whole, label: string, href: string) =>
      INTERNAL_HREF.test(href) ? `<a href="${href}">${label}</a>` : whole);
