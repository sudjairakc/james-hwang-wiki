# CLAUDE.md — James Hwang Wiki

Guidelines for Claude Code when working in this repository.

## Project Overview

Static wiki site for the fictional artist **James Hwang** built with Astro 6 + Tailwind CSS v4. Deployed to GitHub Pages under the base path `/james-hwang-wiki/`. All pages are fully visual — no raw markdown dumps.

The site is **bilingual EN/TH**. Every page is served under `/en/*` and `/th/*` (Astro native i18n routing). Root `/` and every old single-language path redirect to the `/en/` equivalent (see `redirects` in `astro.config.mjs`). Default language is EN. See the **Internationalization (i18n)** section below.

## Behavioral Guidelines

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## Key Conventions

### Base Path
All internal `href` and `src` values must be prefixed with `import.meta.env.BASE_URL`. Never hardcode `/james-hwang-wiki/`. Internal page links must also carry the language segment — build them from `` const L = `${base}${lang}/` `` and use `` `${L}discography` ``.

```astro
const base = import.meta.env.BASE_URL;
const L = `${base}${lang}/`;
<a href={`${L}discography`}>Discography</a>
```

### Internationalization (i18n)
- Pages live under `src/pages/[lang]/**`. `lang` is `'en' | 'th'` (see `src/i18n/index.ts`: `LANGS`, `langStaticPaths()`, `swapLangInPath()`).
- **Content is not hardcoded in the page.** Each page's translatable text lives in `src/data/pages/<page>.ts`, shaped `{ en, th }` with **identical keys** both sides, plus `export function getX(lang)`. Non-translatable structural data (hex colors, numbers, proper nouns, image paths, chart data) is exported as separate shared consts and merged in the page. The `.astro` page is markup only: `const d = getX(lang)`.
- Prose strings that contain internal `<a href>` use the token `%L%` in the data file, replaced in the page with `` str.replaceAll('%L%', L) `` before `set:html`.
- Markdown-rendered content (timeline, discography, filmography) is stored per-language under `content/wiki/**/{en,th}/`; pages import/glob by `lang`. `lyrics.md` is shared (English songs), imported once.
- Static getStaticPaths pages: `export function getStaticPaths(){ return langStaticPaths(); }`. Dynamic `[slug]` pages: `return LANGS.flatMap(lang => slugs.map(slug => ({ params: { lang, slug } })))`.
- `WikiLayout` renders the EN|TH toggle, bilingual nav, and `<html lang>` from the `lang` prop; it also translates the `section` prop for the sidebar header. Always pass `lang={lang}`.

### Layout
Every page wraps content in `src/layouts/WikiLayout.astro`. Pass `title`, `lang`, and optionally `section` props.

```astro
---
import WikiLayout from '../../layouts/WikiLayout.astro';
import { langStaticPaths, type Lang } from '../../i18n';
import { getAwards } from '../../data/pages/awards';
export function getStaticPaths() { return langStaticPaths(); }
const lang = Astro.params.lang as Lang;
const d = getAwards(lang);
---
<WikiLayout title={d.ui.title} section="Music" lang={lang}>
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
Slug-based pages are `src/pages/[lang]/**/[slug].astro` and must combine language × slug in `getStaticPaths()`:

```astro
export function getStaticPaths() {
  return LANGS.flatMap(lang => slugs.map(slug => ({ params: { lang, slug } })));
}
```

Import depth follows nesting: flat `[lang]/x.astro` → `../../`; `[lang]/tours/x.astro` → `../../../`; `[lang]/filmography/resonance/[slug].astro` → `../../../../`.

### Page architecture
- Translatable content lives in `src/data/pages/<page>.ts` as `{ en, th }`; the `.astro` page is markup only and reads `getX(lang)`. Shared non-translatable data is a separate exported const. (See i18n section above.)
- Pages use structured stat grids, card lists, and tables — not prose dumps.
- Scoped `<style>` blocks used for page-specific overrides (e.g. `.film-prose`, `.album-prose`).
- Client-side interactivity uses `<script is:inline define:vars={{ ... }}>` — data passed from frontmatter via JSON serialization.

### Adding a new page
1. Create `src/data/pages/your-page.ts` exporting `{ en, th }` (identical keys) + `getYourPage(lang)`.
2. Create `src/pages/[lang]/your-page.astro` — markup only, `getStaticPaths(){ return langStaticPaths(); }`, pass `lang={lang}` to `WikiLayout`.
3. Add a nav entry in `src/layouts/WikiLayout.astro` (`nav` array — bilingual `label: { en, th }` + `slug`).
4. If old single-language URLs should resolve, add a `/your-page → /james-hwang-wiki/en/your-page` entry to `redirects` in `astro.config.mjs`.

## Development Workflow

```bash
npm run dev      # dev server at localhost:4321/james-hwang-wiki/
npm run build    # production build → ./dist/  (bilingual EN/TH + redirects)
npm run preview  # preview dist/ locally
```

Node >= 22.12.0 required (see `engines` in `package.json`).

## What to Avoid

- Do not add `tailwind.config.js/ts`.
- Do not use `<a href="/discography/">` — always prepend `BASE_URL` **and** the `lang` segment (`${base}${lang}/…`).
- Do not use hardcoded hex colors like `#3a3a3a` or `#111` in JS — they break light mode.
- Do not hardcode page content in `.astro` frontmatter — put it in `src/data/pages/*.ts` as `{ en, th }`.
- Do not create pages outside `src/pages/[lang]/` (except the root redirect `index.astro` and `404.astro`).
- Do not create new top-level pages without adding a nav link in `WikiLayout.astro`.
- Do not install additional UI frameworks (React, Vue, etc.) unless explicitly requested.
- Do not render raw `<Content />` without a styled wrapper — all pages should have visual structure.
