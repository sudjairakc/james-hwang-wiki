// Bilingual data for Shang-Chi trilogy detail ([slug]) pages.
// Prose comes from content/wiki/filmography/shang-chi/<lang>/<slug>.md.

import type { Lang } from '../../i18n';

// Shared — non-translatable film data.
export const slugMeta: Record<string, {
  phase: string; year: string; color: string;
  director: string; screenwriters: string; producers: string; starring: string;
  boxOffice: string | null; rtScore: string | null; showCredits: boolean;
}> = {
  'legend-of-the-ten-rings': {
    phase: 'MCU Phase 4', year: '2021', color: '#7c5a3a',
    director: 'Destin Daniel Cretton',
    screenwriters: 'Dave Callaham · Destin Daniel Cretton · Andrew Lanham',
    producers: 'Kevin Feige · Jonathan Schwartz',
    starring: 'James Hwang, Ashley Liao, Tony Leung, Fala Chen, Florian Munteanu, Michelle Yeoh, Ben Kingsley, Benedict Wong, Brie Larson, Mark Ruffalo',
    boxOffice: '$432M', rtScore: '91%', showCredits: true,
  },
  'legacy-of-the-ten-rings': {
    phase: 'MCU Phase 5', year: '2025', color: '#7c5a3a',
    director: 'Destin Daniel Cretton',
    screenwriters: 'Dave Callaham · Destin Daniel Cretton · Andrew Lanham · James Hwang',
    producers: 'Kevin Feige · Jonathan Schwartz',
    starring: 'James Hwang, Ashley Liao, Michelle Yeoh, Chow Yun-fat, Brie Larson, Anthony Mackie, Paul Rudd, Florian Munteanu',
    boxOffice: '$610M', rtScore: '88%', showCredits: true,
  },
  'deadly-hands': {
    phase: 'MCU Phase 6', year: '2026', color: '#7c5a3a',
    director: 'Isaiah Saxon',
    screenwriters: 'Isaiah Saxon · Jonathan Wang · James Hwang',
    producers: 'Kevin Feige · Jonathan Schwartz',
    starring: 'James Hwang, Ashley Liao, Benedict Wong, Florian Munteanu',
    boxOffice: null, rtScore: null, showCredits: true,
  },
  'trilogy-analysis': {
    phase: 'MCU Trilogy', year: '2021–2026', color: '#7c5a3a',
    director: '', screenwriters: '', producers: '', starring: '',
    boxOffice: null, rtScore: null, showCredits: false,
  },
};

export const slugs = Object.keys(slugMeta);

const en = {
  ui: {
    section: 'Filmography',
    back: '← Back to Shang-Chi Trilogy',
    trilogyPrefix: 'Shang-Chi Trilogy',
    released: 'Released',
    upcoming: 'Upcoming',
    creditsHeading: 'Credits',
    kpiDate: 'Release date',
    kpiDirector: 'Director',
    kpiBoxOffice: 'Box office',
    kpiRt: 'Rotten Tomatoes',
    crDirector: 'Director',
    crScreenplay: 'Screenplay',
    crProducers: 'Producers',
    crStarring: 'Starring',
    crReleaseDate: 'Release date',
    crReleaseSched: 'Release schedule',
    crJamesRole: "James's role",
  },
  perSlug: {
    'legend-of-the-ten-rings': { title: 'Shang-Chi and the Legend of the Ten Rings', date: 'September 3, 2021', role: 'James Hwang as Shang-Chi (Xu Shang-Chi)' },
    'legacy-of-the-ten-rings': { title: 'Shang-Chi and the Legacy of the Ten Rings', date: 'July 25, 2025', role: 'James Hwang as Shang-Chi · co-writer' },
    'deadly-hands': { title: 'Shang-Chi and the Deadly Hands', date: 'September 18, 2026', role: 'James Hwang as Shang-Chi · co-writer' },
    'trilogy-analysis': { title: 'Shang-Chi Trilogy — In-Depth Analysis', date: '', role: '' },
  } as Record<string, { title: string; date: string; role: string }>,
  related: [
    { label: 'Shang-Chi Trilogy', slug: 'filmography/shang-chi' },
    { label: 'Trilogy Analysis', slug: 'filmography/shang-chi/trilogy-analysis' },
    { label: 'Filmography', slug: 'filmography' },
    { label: 'RESONANCE Franchise', slug: 'filmography/resonance' },
    { label: 'Awards', slug: 'awards' },
    { label: 'Career Timeline', slug: 'timeline' },
  ],
};

const th: typeof en = {
  ui: {
    section: 'Filmography',
    back: '← กลับไปไตรภาค Shang-Chi',
    trilogyPrefix: 'Shang-Chi Trilogy',
    released: 'เข้าฉายแล้ว',
    upcoming: 'เร็วๆ นี้',
    creditsHeading: 'เครดิต',
    kpiDate: 'วันเข้าฉาย',
    kpiDirector: 'ผู้กำกับ',
    kpiBoxOffice: 'บ็อกซ์ออฟฟิศ',
    kpiRt: 'Rotten Tomatoes',
    crDirector: 'ผู้กำกับ',
    crScreenplay: 'บทภาพยนตร์',
    crProducers: 'โปรดิวเซอร์',
    crStarring: 'นักแสดงนำ',
    crReleaseDate: 'วันเข้าฉาย',
    crReleaseSched: 'กำหนดเข้าฉาย',
    crJamesRole: 'บทบาทของเจมส์',
  },
  perSlug: {
    'legend-of-the-ten-rings': { title: 'Shang-Chi and the Legend of the Ten Rings', date: '3 กันยายน 2021', role: 'James Hwang รับบท Shang-Chi (Xu Shang-Chi)' },
    'legacy-of-the-ten-rings': { title: 'Shang-Chi and the Legacy of the Ten Rings', date: '25 กรกฎาคม 2025', role: 'James Hwang รับบท Shang-Chi · ผู้ร่วมเขียนบท' },
    'deadly-hands': { title: 'Shang-Chi and the Deadly Hands', date: '18 กันยายน 2026', role: 'James Hwang รับบท Shang-Chi · ผู้ร่วมเขียนบท' },
    'trilogy-analysis': { title: 'Shang-Chi Trilogy — บทวิเคราะห์เชิงลึก', date: '', role: '' },
  } as Record<string, { title: string; date: string; role: string }>,
  related: [
    { label: 'ไตรภาค Shang-Chi', slug: 'filmography/shang-chi' },
    { label: 'บทวิเคราะห์ไตรภาค', slug: 'filmography/shang-chi/trilogy-analysis' },
    { label: 'ผลงานภาพยนตร์', slug: 'filmography' },
    { label: 'แฟรนไชส์ RESONANCE', slug: 'filmography/resonance' },
    { label: 'รางวัล', slug: 'awards' },
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
  ],
};

export const shangchiDetail = { en, th };
export function getShangchiDetail(lang: Lang) {
  return shangchiDetail[lang];
}
