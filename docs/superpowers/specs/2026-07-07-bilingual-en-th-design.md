# Bilingual EN/TH System — Design

**Date:** 2026-07-07
**Status:** Approved (pilot phase)

## Goal

Turn the James Hwang Wiki (Astro 6) into a full bilingual EN/TH site. Content is
currently mixed — some pages all-English (`index.astro`), some Thai-heavy
(`artistry.astro`). Target: every page has complete EN **and** TH versions with a
language toggle.

## Decisions (locked)

| # | Decision | Choice |
|---|----------|--------|
| 1 | i18n mechanism | Astro native routing `/en/` `/th/` |
| 2 | Content storage | Extract data out of `.astro` → per-page data file `{ en, th }`; markup single copy in `[lang]/<page>.astro` reading `data[lang]` |
| 3 | Default lang | EN default; root `/james-hwang-wiki/` redirects → `/en/` |
| 4 | Execution | Pilot 1 page (artistry) end-to-end → approve pattern → fan-out with sonnet5 subagents |
| 5 | Nav | Bilingual — translate nav labels too |

## Content inventory

- **`.astro` pages** (~11k lines): primary visible content, hardcoded typed JS in
  frontmatter. 30 pages. Language mixed per-page.
- **Rendered `.md`** (must get TH versions):
  - `timeline.md` (`?raw`)
  - `lyrics.md`, `discography/08-summary.md` (`?raw`)
  - `discography/*.md` (glob)
  - `filmography/resonance/*.md` (glob)
  - `filmography/shang-chi/*.md` (glob)
- **Reference-only `.md`** (referenced only in `.astro` comments, NOT rendered):
  `analysis.md`, `awards.md`, `canon.md`, `company.md`, `cultural-impact.md`,
  `ecosystem.md` + `ecosystem/*`, `public-image.md`, `discography.md`,
  `filmography/index.md`, `tours/*`. → **Out of scope** (their content already lives
  translated inside the `.astro` pages).

## Target structure

```
src/pages/
  index.astro              → redirect → ${base}en/
  [lang]/
    index.astro            home
    artistry.astro         markup only, reads data[lang]
    biography.astro ...    (all 30 pages)
    discography/index.astro + [slug].astro
    filmography/... tours/...
src/data/pages/<page>.ts   → export const <page> = { en:{...}, th:{...} }
src/i18n/index.ts          → LANGS=['en','th'], langStaticPaths(), otherLang()
src/content/wiki/**/       → rendered md gains per-lang: <dir>/en/ + <dir>/th/
```

## Data extraction pattern (core)

1. Lift the JS object/array from a page's frontmatter into `src/data/pages/<page>.ts`.
2. Shape as `{ en: {...}, th: {...} }` — **identical key structure** both languages.
3. Fill the missing side by translation (Thai page → add `en`; English page → add `th`).
4. Preserve verbatim: numbers, proper nouns, dates, era-color hex, slugs, image paths.
5. `[lang]/<page>.astro` keeps markup only: `const d = data[lang]`.

## Shared infra (main thread builds during pilot)

- `src/i18n/index.ts`:
  - `LANGS = ['en','th']`
  - `langStaticPaths()` → `[{params:{lang:'en'}},{params:{lang:'th'}}]`
  - `otherLang(lang)` + helper to build the toggle target URL (same path, other lang)
- `WikiLayout.astro`:
  - `nav` labels become `{ en, th }`; links prefixed `${base}${lang}/`
  - `<html lang={lang}>`
  - **EN|TH toggle** button beside theme toggle → links to same page in other lang
  - `title`/`section` props accept the resolved-language string
- root `src/pages/index.astro` → redirect to `${base}en/`
- Rendered md: glob / `?raw` reads from `<dir>/<lang>/` keyed by `lang` param.

## Subagent fan-out workflow (after pilot approved)

- One subagent per page (files disjoint → parallel-safe). Each receives: page name +
  this pattern spec. Task: extract data → translate missing side → write `[lang]` page
  → `npm run build` passes.
- Batch ~5–6 subagents per round to bound context.
- md-rendered groups handled as their own batches (discography set, filmography set).

## Pilot scope + success criteria

- **Pilot page:** `artistry.astro` (Thai-heavy + data arrays + scoped styles = hardest;
  exercises TH→EN translation, data extraction, scoped-style migration).
- **Success:**
  - `/en/artistry/` and `/th/artistry/` both render correctly
  - EN|TH toggle switches between them preserving the page
  - root redirects to `/en/`
  - `npm run build` passes; page count sane
- Pilot establishes the reusable pattern spec that subagents follow.

## Out of scope

- Reference-only md translation.
- Auto-detecting browser language (EN is the fixed default).
- Any content rewrite beyond EN↔TH parity.
