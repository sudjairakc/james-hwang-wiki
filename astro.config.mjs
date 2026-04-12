// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sudjairakc.github.io',
  base: '/james-hwang-wiki',
  vite: {
    plugins: [tailwindcss()],
  },
});
