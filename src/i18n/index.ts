export const LANGS = ['en', 'th'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

/** getStaticPaths() for any `[lang]` route. */
export function langStaticPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

export function isLang(v: unknown): v is Lang {
  return typeof v === 'string' && (LANGS as readonly string[]).includes(v);
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'th' : 'en';
}

/**
 * Swap the language segment of a full pathname.
 * `/james-hwang-wiki/en/artistry/` + base `/james-hwang-wiki/` + `th`
 *   → `/james-hwang-wiki/th/artistry/`
 */
export function swapLangInPath(pathname: string, base: string, target: Lang): string {
  const rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, '');
  const segs = rest.split('/');
  if (isLang(segs[0])) {
    segs[0] = target;
  } else {
    segs.unshift(target);
  }
  return base + segs.join('/');
}
