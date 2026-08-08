import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cookmushroom.com',
  output: 'static',
  integrations: [sitemap()],
  vite: { build: { cssTarget: ['safari15','chrome100','firefox100'] } }
});
