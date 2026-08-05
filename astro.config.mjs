// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sudjairakc.github.io',
  base: '/james-hwang-wiki/',
  // Old single-language routes → default-language (/en/) equivalents.
  redirects: Object.fromEntries(
    [
      'biography', 'personal-life', 'timeline', 'artistry', 'music-videos',
      'collaborations', 'production-credits', 'company', 'ecosystem', 'legal',
      'public-image', 'fashion', 'awards', 'interviews', 'reception',
      'cultural-impact', 'canon', 'fandom', 'controversies', 'rivalries',
      'discography', 'filmography',
      'tours', 'tours/decade', 'tours/pulse',
      'filmography/resonance', 'filmography/shang-chi',
      'discography/like-i-do', 'discography/softest-touch', 'discography/pulse-era',
      'discography/are-u-still', 'discography/sour-honey', 'discography/decade',
      'filmography/resonance/series-captain-eo-resonance', 'filmography/resonance/i-missing-chord',
      'filmography/resonance/ii-silent-orchestra', 'filmography/resonance/iii-resonance',
      'filmography/resonance/canon',
      'filmography/shang-chi/legend-of-the-ten-rings', 'filmography/shang-chi/legacy-of-the-ten-rings',
      'filmography/shang-chi/last-of-the-ten-rings', 'filmography/shang-chi/trilogy-analysis',
    ].map((p) => [`/${p}`, `/james-hwang-wiki/en/${p}`]),
  ),
  vite: {
    plugins: [tailwindcss()],
  },
});
