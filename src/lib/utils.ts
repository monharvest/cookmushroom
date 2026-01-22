/**
 * Helper utilities for WordPress content
 */

/**
 * Strip HTML tags from content
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Decode HTML entities
 */
export function decodeHtml(html: string): string {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

/**
 * Format date from WordPress
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Get excerpt from content
 */
export function getExcerpt(content: string, length = 150): string {
  const stripped = stripHtml(content);
  if (stripped.length <= length) return stripped;
  return stripped.substring(0, length).trim() + '...';
}

/**
 * Get featured image URL with fallback
 */
export function getFeaturedImage(post: any, size = 'large'): string | null {
  if (!post._embedded?.['wp:featuredmedia']?.[0]) {
    return null;
  }
  
  const media = post._embedded['wp:featuredmedia'][0];
  
  // Try to get specific size, fall back to source_url
  return media.media_details?.sizes?.[size]?.source_url || media.source_url;
}

/**
 * Get categories from embedded data
 */
export function getCategories(post: any): Array<{ id: number; name: string; slug: string }> {
  if (!post._embedded?.['wp:term']?.[0]) {
    return [];
  }
  
  return post._embedded['wp:term'][0];
}

/**
 * Calculate reading time
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = stripHtml(content);
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Fix WordPress media URLs (ensure they point to correct domain)
 */
export function fixMediaUrl(url: string, domain = 'cookmushroom.com'): string {
  if (!url) return '';
  
  // If URL is relative, make it absolute
  if (url.startsWith('/wp-content/')) {
    return `https://${domain}${url}`;
  }
  
  return url;
}

/**
 * Clean WordPress content (remove unwanted shortcodes, fix URLs)
 */
export function cleanContent(content: string): string {
  let cleaned = content;
  
  // Remove WordPress shortcodes that won't render
  cleaned = cleaned.replace(/\[.*?\]/g, '');
  
  // Fix self-closing tags
  cleaned = cleaned.replace(/<img([^>]*?)\/>/g, '<img$1 />');
  
  return cleaned;
}
