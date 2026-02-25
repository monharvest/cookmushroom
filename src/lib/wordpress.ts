/**
 * WordPress REST API Client
 * Connects to WordPress backend with anti-bot challenge solver
 * for Hostinger free hosting (cookmushroom.page.gd)
 */
import crypto from 'node:crypto';

const WP_API_URL = import.meta.env.WP_API_URL || 'https://cookmushroom.page.gd/wp-json/wp/v2';

interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  featured_media: number;
}

interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<string, {
      source_url: string;
      width: number;
      height: number;
    }>;
  };
}

/** Cached anti-bot cookie (valid for 6 hours per challenge) */
let cachedCookie: string | null = null;

/**
 * Solve Hostinger's anti-bot AES challenge.
 * The challenge page returns HTML with an AES-128-CBC encrypted token.
 * We decrypt it, set the __test cookie, and re-fetch to get real content.
 */
function solveAntiBot(html: string): string | null {
  const match = html.match(
    /toNumbers\("([a-f0-9]+)"\),\s*b\s*=\s*toNumbers\("([a-f0-9]+)"\),\s*c\s*=\s*toNumbers\("([a-f0-9]+)"\)/
  );
  if (!match) return null;

  const [, keyHex, ivHex, cipherHex] = match;
  const key = Buffer.from(keyHex, 'hex');
  const iv = Buffer.from(ivHex, 'hex');
  const ct = Buffer.from(cipherHex, 'hex');

  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  decipher.setAutoPadding(false);
  let decrypted = decipher.update(ct, undefined, 'hex');
  decrypted += decipher.final('hex');

  return '__test=' + decrypted;
}

/**
 * Fetch with anti-bot challenge handling.
 * 1. Try with cached cookie first
 * 2. If we get a challenge page, solve it and retry
 */
async function fetchWithChallenge(url: string): Promise<Response> {
  const headers: Record<string, string> = {
    'User-Agent': 'Mozilla/5.0 (compatible; AstroBuild/1.0)',
    'Accept': 'application/json, text/html',
  };

  // Use cached cookie if available
  if (cachedCookie) {
    headers['Cookie'] = cachedCookie;
  }

  let response = await fetch(url, { headers });
  const contentType = response.headers.get('content-type') || '';

  // If we got JSON, we're good
  if (contentType.includes('application/json')) {
    return response;
  }

  // Check if this is an anti-bot challenge page
  const body = await response.text();
  if (body.includes('slowAES.decrypt')) {
    console.log('[WP] Anti-bot challenge detected, solving...');
    const cookie = solveAntiBot(body);
    if (!cookie) {
      throw new Error('Failed to solve anti-bot challenge');
    }

    cachedCookie = cookie;

    // Retry with the solved cookie — append &i=1 as the challenge expects
    const retryUrl = url + (url.includes('?') ? '&' : '?') + 'i=1';
    response = await fetch(retryUrl, {
      headers: { ...headers, Cookie: cookie },
    });

    const retryType = response.headers.get('content-type') || '';
    if (!retryType.includes('application/json')) {
      const retryBody = await response.text();
      throw new Error(`Anti-bot solved but still got non-JSON (${retryType}): ${retryBody.substring(0, 200)}`);
    }

    console.log('[WP] Anti-bot challenge solved successfully');
    return response;
  }

  // Some other HTML error page
  throw new Error(`Expected JSON but got ${contentType}: ${body.substring(0, 200)}`);
}

/**
 * Fetch data from WordPress API with anti-bot handling
 */
async function fetchWP<T>(endpoint: string, params: Record<string, string | number> = {}): Promise<T> {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  );

  const url = `${WP_API_URL}${endpoint}?${queryParams}`;

  try {
    const response = await fetchWithChallenge(url);

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`[WP] Error fetching: ${url}`, error);

    // Return empty data structure to prevent build crashes
    if (endpoint.includes('/posts')) {
      return [] as unknown as T;
    } else if (endpoint.includes('/categories') || endpoint.includes('/tags')) {
      return [] as unknown as T;
    } else if (endpoint.includes('/pages')) {
      return [] as unknown as T;
    }

    throw error;
  }
}

/**
 * Get all posts with pagination
 */
export async function getPosts(page = 1, perPage = 10) {
  return fetchWP<WPPost[]>('/posts', {
    page,
    per_page: perPage,
    _embed: 'wp:featuredmedia,wp:term'
  });
}

/**
 * Get single post by slug
 */
export async function getPostBySlug(slug: string) {
  const posts = await fetchWP<WPPost[]>('/posts', {
    slug,
    _embed: 'wp:featuredmedia,wp:term'
  });
  
  return posts[0] || null;
}

/**
 * Get all pages
 */
export async function getPages() {
  return fetchWP<WPPage[]>('/pages', {
    per_page: 100,
    _embed: 'wp:featuredmedia'
  });
}

/**
 * Get single page by slug
 */
export async function getPageBySlug(slug: string) {
  const pages = await fetchWP<WPPage[]>('/pages', {
    slug,
    _embed: 'wp:featuredmedia'
  });
  
  return pages[0] || null;
}

/**
 * Get all categories (only those with posts)
 */
export async function getCategories() {
  const categories = await fetchWP<WPCategory[]>('/categories', {
    per_page: 100,
    hide_empty: 1
  });
  return categories.filter(cat => cat.count > 0);
}

/**
 * Get all tags
 */
export async function getTags() {
  const tags = await fetchWP<WPCategory[]>('/tags', {
    per_page: 100,
    hide_empty: 1
  });
  return tags.filter(tag => tag.count > 0);
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(categoryId: number, page = 1, perPage = 10) {
  return fetchWP<WPPost[]>('/posts', {
    categories: categoryId,
    page,
    per_page: perPage,
    _embed: 'wp:featuredmedia,wp:term'
  });
}

/**
 * Get media by ID
 */
export async function getMedia(mediaId: number) {
  return fetchWP<WPMedia>(`/media/${mediaId}`, {});
}

/**
 * Get total number of posts (for pagination)
 */
export async function getTotalPosts(): Promise<number> {
  try {
    const response = await fetchWithChallenge(`${WP_API_URL}/posts?per_page=1`);
    const total = response.headers.get('X-WP-Total');
    return total ? parseInt(total, 10) : 0;
  } catch (error) {
    console.error('[WP] Error fetching total posts:', error);
    return 0;
  }
}

/**
 * Search posts
 */
export async function searchPosts(query: string, page = 1, perPage = 10) {
  return fetchWP<WPPost[]>('/posts', {
    search: query,
    page,
    per_page: perPage,
    _embed: 'wp:featuredmedia,wp:term'
  });
}

/**
 * Get all slugs for static path generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await fetchWP<WPPost[]>('/posts', {
    per_page: 100,
    _fields: 'slug'
  });
  
  // Filter out slugs with URL-encoded characters (emojis, special chars)
  return posts
    .map(post => post.slug)
    .filter(slug => {
      // Only allow slugs with alphanumeric, hyphens, and underscores
      return /^[a-z0-9-_]+$/i.test(slug);
    });
}

/**
 * Get all page slugs for static path generation
 */
export async function getAllPageSlugs(): Promise<string[]> {
  const pages = await fetchWP<WPPage[]>('/pages', {
    per_page: 100,
    _fields: 'slug'
  });
  
  return pages.map(page => page.slug);
}
