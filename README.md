# James Hwang Wiki

A fan/reference wiki site for the fictional artist **James Hwang**, built with [Astro 6](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). Deployed to GitHub Pages.

**Live site:** `https://sudjairakc.github.io/james-hwang-wiki/`

## Pages (30 total)

| Section | Pages |
| :------ | :---- |
| **Overview** | `index` — hero, stats, milestones, discography quick view |
| **Biography** | `timeline` — interactive year/month navigator with vertical event timeline |
| **Music** | `discography/index` · `discography/[slug]` × 6 albums |
| **Live** | `tours/index` · `tours/pulse` · `tours/decade` |
| **Filmography** | `filmography/index` · `shang-chi` (index + 3 slugs) · `resonance` (index + 5 slugs) |
| **Business** | `company` · `ecosystem` (endorsements) · `legal` |
| **Identity** | `awards` · `cultural-impact` · `public-image` · `canon` |

## Project Structure

```
/
├── public/
├── src/
│   ├── content/wiki/          # Markdown source (plot summaries, tracklists, timeline)
│   │   ├── filmography/
│   │   │   ├── shang-chi/     # legend-of-the-ten-rings.md, legacy-*.md, legion-*.md
│   │   │   └── resonance/     # series-*.md, i-missing-chord.md, ii-*.md, iii-*.md, canon.md
│   │   └── timeline.md        # Parsed at build time into interactive JS data
│   ├── layouts/
│   │   └── WikiLayout.astro   # Shared shell: sidebar nav, header, theme toggle
│   ├── pages/
│   │   ├── index.astro
│   │   ├── timeline.astro
│   │   ├── awards.astro
│   │   ├── canon.astro
│   │   ├── company.astro
│   │   ├── cultural-impact.astro
│   │   ├── ecosystem.astro
│   │   ├── legal.astro
│   │   ├── public-image.astro
│   │   ├── discography/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── filmography/
│   │   │   ├── index.astro
│   │   │   ├── shang-chi.astro
│   │   │   ├── resonance.astro
│   │   │   ├── shang-chi/[slug].astro
│   │   │   └── resonance/[slug].astro
│   │   └── tours/
│   │       ├── index.astro
│   │       ├── pulse.astro
│   │       └── decade.astro
│   └── styles/
│       └── global.css         # Tailwind v4 + CSS vars + shared component classes
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Commands

| Command           | Action |
| :---------------- | :----- |
| `npm install`     | Install dependencies |
| `npm run dev`     | Dev server → `http://localhost:4321/james-hwang-wiki/` |
| `npm run build`   | Production build → `./dist/` (30 pages) |
| `npm run preview` | Preview build locally |

## Tech Stack

- **Astro 6** — static site generator, file-based routing
- **Tailwind CSS v4** — utility-first via `@tailwindcss/vite` (no config file)
- **TypeScript** — strict mode
- **Dark/light theme** — CSS custom properties toggled via `html.light` class

## Design System

All pages use a consistent set of CSS variables and helper classes:

- **Colors:** `--bg`, `--bg-surface`, `--bg-muted`, `--border`, `--text`, `--text-muted`, `--gold`
- **Components:** `.stat-card`, `.badge-win`, `.badge-nom` (defined in `global.css`)
- **Era colors:** LIKE I DO `#c9a84c` · SOFTEST TOUCH `#9b7fc8` · PULSE `#5a7c6a` · ARE U STILL `#5a7aaa` · SOUR\|HONEY `#c06080` · DECADE `#6e5a7c`

## Deployment

Configured for GitHub Pages:
- `site`: `https://sudjairakc.github.io`
- `base`: `/james-hwang-wiki/`

Push to `main` to trigger the GitHub Actions Pages workflow, or run `npm run build` and deploy `./dist/` manually.
