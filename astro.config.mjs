// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    format: 'file',
  },
  prefetch: true,
  image: {
    domains: ['cdn.dicebear.com', 'ui-avatars.com', 'avatars.githubusercontent.com'],
  },
  base: '/',
});