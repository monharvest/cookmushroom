// Minimal inline markup for body copy.
//
// Content strings in guides.ts / recipes.ts are plain text, which Astro escapes.
// This lets an author write **bold** in that plain text and get <strong>, without
// opening the data files up to arbitrary HTML: the string is escaped FIRST, so a
// stray "<" in a recipe stays a literal "<", and only the ** pairs we add
// afterwards become markup.
//
// Bold is the only thing supported, deliberately. It exists so a reader scanning a
// long passage can find the decisive phrase — the doneness cue, the discard signal,
// the measurement. One emphasis per paragraph is the intent; bolding everything
// emphasises nothing.
const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export const inlineMarkup = (text: string): string =>
  escapeHtml(text).replace(/\*\*(?=\S)([^*]+?)(?<=\S)\*\*/g, '<strong>$1</strong>');
