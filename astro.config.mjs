import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cookmushroom.com',
  output: 'static',
  // /search/ is a noindex utility page; keep it out of the sitemap too.
  integrations: [sitemap({ filter: (page) => !page.endsWith('/search/') })],
  vite: { build: { cssTarget: ['safari15','chrome100','firefox100'] } }
});
