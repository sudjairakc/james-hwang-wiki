// Bilingual content for the Filmography index page.
import type { Lang } from '../../i18n';

// Shared — franchise identity + entries (proper nouns / dates / status flags).
export const franchises = [
  {
    slug: 'filmography/shang-chi',
    franchise: 'Shang-Chi Trilogy',
    universe: 'Marvel Cinematic Universe',
    color: '#7c5a3a',
    entries: [
      { title: 'Shang-Chi and the Legend of the Ten Rings', date: '3 ก.ย. 2021', dateEn: 'Sep 3, 2021', status: 'Released' },
      { title: 'Shang-Chi and the Legacy of the Ten Rings', date: '25 ก.ค. 2025', dateEn: 'Jul 25, 2025', status: 'Released' },
      { title: 'Shang-Chi and the Deadly Hands', date: '18 ก.ย. 2026', dateEn: 'Sep 18, 2026', status: 'Upcoming' },
    ],
  },
  {
    slug: 'filmography/resonance',
    franchise: 'Captain EO: RESONANCE Saga',
    universe: 'Disney · Original Franchise',
    color: '#3a5a7c',
    entries: [
      { title: 'Captain EO: RESONANCE', date: 'December 4, 2026', dateEn: 'December 4, 2026', status: 'Upcoming' },
      { title: 'RESONANCE: The Missing Chord', date: 'November 2, 2028', dateEn: 'November 2, 2028', status: 'Upcoming' },
      { title: 'RESONANCE II: The Silent Orchestra', date: 'December 2030 TBA', dateEn: 'December 2030 TBA', status: 'Upcoming' },
      { title: 'RESONANCE III', date: 'December 2031 TBA', dateEn: 'December 2031 TBA', status: 'Upcoming' },
    ],
  },
];

const en = {
  ui: {
    label: 'Film & Screen',
    title: 'Filmography',
    subtitle: 'MCU + Disney franchise · 6 films · 1 series · 2 universes',
    statusReleased: 'Released',
    statusUpcoming: 'Upcoming',
  },
  notes: [
    [
      'MCU Phase 4 · James Hwang as Shang-Chi',
      'MCU Phase 5 · co-writer',
      'MCU Phase 6 · franchise conclusion',
    ],
    [
      'Disney+ Original Series · EP1: Dead Frequency',
      'Film I · The beginning of the saga',
      'Film II · When the music dies, the universe follows',
      'Film III · The final movement',
    ],
  ],
  related: [
    { label: 'Shang-Chi Trilogy', slug: 'filmography/shang-chi' },
    { label: 'RESONANCE Franchise', slug: 'filmography/resonance' },
    { label: 'Awards', slug: 'awards' },
    { label: 'Career Timeline', slug: 'timeline' },
    { label: 'Public Image', slug: 'public-image' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'Film & Screen',
    title: 'ผลงานภาพยนตร์',
    subtitle: 'แฟรนไชส์ MCU + Disney · 6 เรื่อง · 1 ซีรีส์ · 2 จักรวาล',
    statusReleased: 'เข้าฉายแล้ว',
    statusUpcoming: 'เร็วๆ นี้',
  },
  notes: [
    [
      'MCU Phase 4 · James Hwang รับบท Shang-Chi',
      'MCU Phase 5 · ร่วมเขียนบท',
      'MCU Phase 6 · บทสรุปแฟรนไชส์',
    ],
    [
      'Disney+ Original Series · EP1: Dead Frequency',
      'Film I · จุดเริ่มต้นของ saga',
      'Film II · เมื่อเสียงดนตรีดับ จักรวาลก็ดับตาม',
      'Film III · บทเพลงสุดท้าย',
    ],
  ],
  related: [
    { label: 'ไตรภาค Shang-Chi', slug: 'filmography/shang-chi' },
    { label: 'แฟรนไชส์ RESONANCE', slug: 'filmography/resonance' },
    { label: 'รางวัล', slug: 'awards' },
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
    { label: 'ภาพลักษณ์สาธารณะ', slug: 'public-image' },
  ],
};

export const filmographyIndex = { en, th };
export function getFilmographyIndex(lang: Lang) {
  return filmographyIndex[lang];
}
