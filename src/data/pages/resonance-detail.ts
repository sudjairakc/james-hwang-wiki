// Bilingual data for RESONANCE franchise detail ([slug]) pages.
// Prose comes from content/wiki/filmography/resonance/<lang>/<slug>.md.

import type { Lang } from '../../i18n';

// Shared — title / year / date / color / credits (proper nouns, non-translatable).
export const slugMeta: Record<string, {
  title: string; year: string; date: string | null; color: string;
  credits: { label: string; val: string }[];
}> = {
  'series-captain-eo-resonance': {
    title: 'Captain EO: RESONANCE', year: '2027', date: 'Dec 4, 2027', color: '#3a5a7c',
    credits: [
      { label: 'Created by', val: 'James Hwang' },
      { label: 'Showrunner', val: 'Tony Gilroy' },
      { label: 'Directors', val: 'Dan Trachtenberg (EP1–2) · Kogonada (EP3–4) · Jennifer Phang (EP5–6)' },
      { label: 'DoP', val: 'Greig Fraser' },
      { label: 'Composer', val: 'Ludwig Göransson' },
      { label: 'VFX', val: 'Industrial Light & Magic · Framestore · DNEG · Wētā FX' },
      { label: 'Production', val: 'Lucasfilm Ltd. · JH Company' },
      { label: 'Distributor', val: 'Disney+' },
    ],
  },
  'i-missing-chord': {
    title: 'RESONANCE: The Missing Chord', year: '2029', date: 'Nov 2, 2029', color: '#3a5a7c',
    credits: [
      { label: 'Created by', val: 'James Hwang' },
      { label: 'Director', val: 'James Hwang (Co-Director)' },
      { label: 'Lead', val: 'James Hwang as Captain EO' },
      { label: 'Distributor', val: 'Walt Disney Pictures' },
    ],
  },
  'ii-silent-orchestra': {
    title: 'RESONANCE II: The Silent Orchestra', year: '2031', date: 'December 2031 TBA', color: '#3a5a7c',
    credits: [
      { label: 'Created by', val: 'James Hwang' },
      { label: 'Director', val: 'James Hwang (Co-Director)' },
      { label: 'Lead', val: 'James Hwang as Captain EO' },
      { label: 'Distributor', val: 'Walt Disney Pictures' },
    ],
  },
  'iii-resonance': {
    title: 'RESONANCE III', year: '2032', date: 'December 2032 TBA', color: '#3a5a7c',
    credits: [
      { label: 'Created by', val: 'James Hwang' },
      { label: 'Director', val: 'James Hwang (Co-Director)' },
      { label: 'Lead', val: 'James Hwang as Captain EO' },
      { label: 'Distributor', val: 'Walt Disney Pictures' },
    ],
  },
  'canon': {
    title: 'World Canon & Characters', year: '', date: null, color: '#3a5a7c',
    credits: [
      { label: 'Universe', val: 'Melodia Universe' },
      { label: 'Crew', val: 'Starwave Crew (5 members)' },
      { label: 'Created by', val: 'James Hwang' },
    ],
  },
};

export const slugs = Object.keys(slugMeta);

const en = {
  ui: {
    section: 'Filmography',
    back: '← Back to RESONANCE Franchise',
    franchisePrefix: 'Captain EO: RESONANCE',
    reference: 'Reference',
    upcoming: 'Upcoming',
  },
  perSlug: {
    'series-captain-eo-resonance': { subtitle: 'Disney+ Original Limited Series', label: 'Series', tagline: 'The Starwave crew begins their mission', format: '6 Episodes · Disney+ · Weekly rollout (EP1–2 premiere)' },
    'i-missing-chord': { subtitle: 'Film I of the RESONANCE Saga', label: 'Film I', tagline: 'The beginning of a cosmic journey', format: 'Feature Film · Theatrical' },
    'ii-silent-orchestra': { subtitle: 'Film II of the RESONANCE Saga', label: 'Film II', tagline: 'When the music dies, the universe follows', format: 'Feature Film · Theatrical' },
    'iii-resonance': { subtitle: 'Film III of the RESONANCE Saga · Final Movement', label: 'Film III', tagline: 'The final movement', format: 'Feature Film · Theatrical' },
    'canon': { subtitle: 'RESONANCE Universe Reference', label: 'Canon', tagline: 'The Starwave Crew · Melodia Universe · Character bios', format: 'Reference document' },
  } as Record<string, { subtitle: string; label: string; tagline: string; format: string }>,
  related: [
    { label: 'RESONANCE Franchise', slug: 'filmography/resonance' },
    { label: 'Filmography', slug: 'filmography' },
    { label: 'Shang-Chi Trilogy', slug: 'filmography/shang-chi' },
    { label: 'Awards', slug: 'awards' },
    { label: 'Career Timeline', slug: 'timeline' },
  ],
};

const th: typeof en = {
  ui: {
    section: 'Filmography',
    back: '← กลับไปแฟรนไชส์ RESONANCE',
    franchisePrefix: 'Captain EO: RESONANCE',
    reference: 'อ้างอิง',
    upcoming: 'เร็วๆ นี้',
  },
  perSlug: {
    'series-captain-eo-resonance': { subtitle: 'ซีรีส์ลิมิเต็ดออริจินอล Disney+', label: 'ซีรีส์', tagline: 'ทีม Starwave เริ่มภารกิจ', format: '6 ตอน · Disney+ · ปล่อยรายสัปดาห์ (EP1–2 พรีเมียร์)' },
    'i-missing-chord': { subtitle: 'ภาพยนตร์ภาค I ของ RESONANCE Saga', label: 'ภาค I', tagline: 'จุดเริ่มต้นของการเดินทางข้ามจักรวาล', format: 'ภาพยนตร์ · ฉายในโรง' },
    'ii-silent-orchestra': { subtitle: 'ภาพยนตร์ภาค II ของ RESONANCE Saga', label: 'ภาค II', tagline: 'เมื่อเสียงดนตรีดับ จักรวาลก็ดับตาม', format: 'ภาพยนตร์ · ฉายในโรง' },
    'iii-resonance': { subtitle: 'ภาพยนตร์ภาค III ของ RESONANCE Saga · บทสุดท้าย', label: 'ภาค III', tagline: 'บทเพลงสุดท้าย', format: 'ภาพยนตร์ · ฉายในโรง' },
    'canon': { subtitle: 'เอกสารอ้างอิงจักรวาล RESONANCE', label: 'Canon', tagline: 'ทีม Starwave · จักรวาล Melodia · ประวัติตัวละคร', format: 'เอกสารอ้างอิง' },
  } as Record<string, { subtitle: string; label: string; tagline: string; format: string }>,
  related: [
    { label: 'แฟรนไชส์ RESONANCE', slug: 'filmography/resonance' },
    { label: 'ผลงานภาพยนตร์', slug: 'filmography' },
    { label: 'ไตรภาค Shang-Chi', slug: 'filmography/shang-chi' },
    { label: 'รางวัล', slug: 'awards' },
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
  ],
};

export const resonanceDetail = { en, th };
export function getResonanceDetail(lang: Lang) {
  return resonanceDetail[lang];
}
