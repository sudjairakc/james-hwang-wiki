# CLAUDE.md — James Hwang Wiki

Guidelines for Claude Code when working in this repository.

## Project Overview

Static wiki site for the fictional artist **James Hwang** built with Astro 6 + Tailwind CSS v4. Deployed to GitHub Pages under the base path `/james-hwang-wiki/`. All 30 pages are fully visual — no raw markdown dumps.

## Key Conventions

### Base Path
All internal `href` and `src` values must be prefixed with `import.meta.env.BASE_URL`. Never hardcode `/james-hwang-wiki/`.

```astro
const base = import.meta.env.BASE_URL;
<a href={`${base}discography/`}>Discography</a>
```

### Layout
Every page wraps content in `src/layouts/WikiLayout.astro`. Pass `title` and optionally `section` props.

```astro
---
import WikiLayout from '../layouts/WikiLayout.astro';
---
<WikiLayout title="Awards" section="Music">
  <!-- content -->
</WikiLayout>
```

### Styling
- Tailwind CSS v4 via `@tailwindcss/vite` — **no `tailwind.config.*` file**.
- Global styles in `src/styles/global.css` (imported by WikiLayout).
- CSS custom properties for theming — always use these instead of hardcoded hex:
  - `var(--bg)`, `var(--bg-surface)`, `var(--bg-muted)` — backgrounds
  - `var(--border)` — borders
  - `var(--text)`, `var(--text-muted)`, `var(--text-faint)` — text
  - `var(--gold)` — accent (`#c9a84c` dark / `#a07828` light)
- Use `color-mix(in srgb, var(--gold) 10%, transparent)` for tinted backgrounds.
- Avoid hardcoded `text-gray-*` classes — they don't respond to light/dark mode. Use `style="color:var(--text-muted)"` instead.
- **Never hardcode hex colors for interactive states in JS** — use CSS classes that reference CSS vars.

### Helper CSS classes (defined in global.css)
- `.stat-card` / `.stat-val` / `.stat-label` — KPI cards
- `.badge-win` / `.badge-nom` — green/gray award result pills
- `.prose h2` — gold left-border heading accent
- `.prose table` — gold-header styled tables

### Era color system
Discography era colors used consistently across pages:
```
LIKE I DO     #c9a84c
SOFTEST TOUCH #9b7fc8
PULSE         #5a7c6a
ARE U STILL   #5a7aaa
SOUR | HONEY  #c06080
DECADE        #6e5a7c
```
Franchise colors: Shang-Chi `#7c5a3a` · RESONANCE `#3a5a7c`

### Dynamic Routes
Slug-based pages use `getStaticPaths()`. Always export this function for any `[slug].astro` page.

```astro
export function getStaticPaths() {
  return ['slug-one', 'slug-two'].map(slug => ({ params: { slug } }));
}
```

### Page architecture
- All content is hardcoded directly in `.astro` frontmatter as typed JS arrays/objects — no CMS.
- Pages use structured stat grids, card lists, and tables — not prose dumps.
- Scoped `<style>` blocks used for page-specific overrides (e.g. `.film-prose`, `.album-prose`).
- Client-side interactivity uses `<script is:inline define:vars={{ ... }}>` — data passed from frontmatter via JSON serialization.

### Adding a new page
1. Create `src/pages/your-page.astro`
2. Add a nav entry in `src/layouts/WikiLayout.astro` (`nav` array)
3. Use `const base = import.meta.env.BASE_URL;` for all internal links

## Development Workflow

```bash
npm run dev      # dev server at localhost:4321/james-hwang-wiki/
npm run build    # production build → ./dist/  (30 pages)
npm run preview  # preview dist/ locally
```

Node >= 22.12.0 required (see `engines` in `package.json`).

## What to Avoid

- Do not add `tailwind.config.js/ts`.
- Do not use `<a href="/discography/">` — always prepend `BASE_URL`.
- Do not use hardcoded hex colors like `#3a3a3a` or `#111` in JS — they break light mode.
- Do not create new top-level pages without adding a nav link in `WikiLayout.astro`.
- Do not install additional UI frameworks (React, Vue, etc.) unless explicitly requested.
- Do not render raw `<Content />` without a styled wrapper — all pages should have visual structure.
