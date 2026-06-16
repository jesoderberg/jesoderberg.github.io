import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jesoderberg.github.io',
  integrations: [tailwind()],
  output: 'static',
});
