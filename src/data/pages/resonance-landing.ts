// Bilingual content for the RESONANCE franchise landing page.
import type { Lang } from '../../i18n';

export const color = '#3a5a7c';

// Shared — entry identity/data (proper nouns / dates / flags).
export const entries = [
  { slug: 'series-captain-eo-resonance', label: 'Series', badgeText: 'S', title: 'Captain EO: RESONANCE', year: '2026', date: 'Dec 4, 2026', status: 'upcoming', episodes: 6, platform: 'Disney+' },
  { slug: 'i-missing-chord', label: 'Film I', badgeText: 'I', title: 'RESONANCE: The Missing Chord', year: '2028', date: 'Nov 2, 2028', status: 'upcoming', episodes: null, platform: 'Theatrical' },
  { slug: 'ii-silent-orchestra', label: 'Film II', badgeText: 'II', title: 'RESONANCE II: The Silent Orchestra', year: '2030', date: 'December 2030 TBA', status: 'upcoming', episodes: null, platform: 'Theatrical' },
  { slug: 'iii-resonance', label: 'Film III', badgeText: 'III', title: 'RESONANCE III', year: '2031', date: 'December 2031 TBA', status: 'upcoming', episodes: null, platform: 'Theatrical' },
  { slug: 'canon', label: 'Canon', badgeText: '★', title: 'World Canon & Characters', year: '', date: null, status: 'reference', episodes: null, platform: null },
];

const en = {
  ui: {
    back: '← Back to Filmography',
    eyebrow: 'Disney Partnership · Original Universe',
    title: 'Captain EO: RESONANCE',
    subtitle: '4-film saga + Disney+ series · 2026–2030 · Created by James Hwang',
    statFilms: 'Films', statSeries: 'Disney+ Series', statTimeline: 'Timeline', statDistributor: 'Distributor',
    colRelease: 'Release', colPlatform: 'Platform', colFormat: 'Format', colYear: 'Year',
    reference: 'Reference', upcoming: 'Upcoming',
    featureFilm: 'Feature Film', episodesSuffix: 'Episodes',
    creativeRoleHeading: "James's Creative Role",
    universeHeading: 'Melodia Universe',
  },
  perEntry: {
    'series-captain-eo-resonance': { subtitle: 'Disney+ Original Series', role: 'Creator · Showrunner · Lead (Captain EO)', highlight: 'EP1: Dead Frequency · Introduces the Starwave Crew and Melodia Universe' },
    'i-missing-chord': { subtitle: 'Film I of the RESONANCE Saga', role: 'Creator · Co-Director · Lead (Captain EO)', highlight: 'Feature film debut as director · Saga origin story · ACT 0–III structure' },
    'ii-silent-orchestra': { subtitle: 'Film II of the RESONANCE Saga', role: 'Creator · Co-Director · Lead (Captain EO)', highlight: 'When the music dies, the universe follows · Central conflict escalation' },
    'iii-resonance': { subtitle: 'Film III of the RESONANCE Saga', role: 'Creator · Co-Director · Lead (Captain EO)', highlight: 'The final movement · Saga conclusion' },
    'canon': { subtitle: 'RESONANCE Universe Reference', role: 'World-building documentation', highlight: 'The Starwave Crew · Melodia Universe · Character bios · Lore' },
  } as Record<string, { subtitle: string; role: string; highlight: string }>,
  creativeRoles: [
    { role: 'Creator', detail: 'Conceived the Melodia Universe and all major characters' },
    { role: 'Showrunner', detail: 'Leads writers room for the Disney+ series' },
    { role: 'Co-Director', detail: 'Co-directs all three feature films' },
    { role: 'Lead Actor', detail: 'Plays Captain EO across series + films' },
    { role: 'Composer', detail: 'All original music and score' },
  ],
  universeRows: [
    { item: 'Setting', val: 'Intergalactic · Melodia Universe' },
    { item: 'Crew', val: 'Starwave Crew (5 members)' },
    { item: 'Antagonist', val: 'The Silent Orchestra' },
    { item: 'Themes', val: 'Music, identity, cosmic harmony' },
    { item: 'IP Ownership', val: 'The Walt Disney Company · Lucasfilm · MJ Estate · JH Company' },
    { item: 'Rights Structure', val: 'Disney (majority + distribution) · Lucasfilm (original Captain EO legacy) · MJ Estate (music + likeness) · JH Company (creative ownership + new universe)' },
  ],
  related: [
    { label: 'Shang-Chi Trilogy', slug: 'filmography/shang-chi' },
    { label: 'Filmography', slug: 'filmography' },
    { label: 'Awards', slug: 'awards' },
    { label: 'Career Timeline', slug: 'timeline' },
    { label: 'JH Company', slug: 'company' },
  ],
};

const th: typeof en = {
  ui: {
    back: '← กลับไปผลงานภาพยนตร์',
    eyebrow: 'พาร์ทเนอร์ Disney · จักรวาลออริจินอล',
    title: 'Captain EO: RESONANCE',
    subtitle: 'saga 4 ภาค + ซีรีส์ Disney+ · 2026–2030 · สร้างโดย James Hwang',
    statFilms: 'ภาพยนตร์', statSeries: 'ซีรีส์ Disney+', statTimeline: 'ช่วงเวลา', statDistributor: 'ผู้จัดจำหน่าย',
    colRelease: 'เข้าฉาย', colPlatform: 'แพลตฟอร์ม', colFormat: 'รูปแบบ', colYear: 'ปี',
    reference: 'อ้างอิง', upcoming: 'เร็วๆ นี้',
    featureFilm: 'ภาพยนตร์', episodesSuffix: 'ตอน',
    creativeRoleHeading: 'บทบาทเชิงสร้างสรรค์ของ James',
    universeHeading: 'จักรวาล Melodia',
  },
  perEntry: {
    'series-captain-eo-resonance': { subtitle: 'ซีรีส์ออริจินอล Disney+', role: 'Creator · Showrunner · Lead (Captain EO)', highlight: 'EP1: Dead Frequency · แนะนำทีม Starwave และจักรวาล Melodia' },
    'i-missing-chord': { subtitle: 'ภาพยนตร์ภาค I ของ RESONANCE Saga', role: 'Creator · Co-Director · Lead (Captain EO)', highlight: 'เดบิวต์กำกับภาพยนตร์ · เรื่องกำเนิดของ saga · โครงสร้าง ACT 0–III' },
    'ii-silent-orchestra': { subtitle: 'ภาพยนตร์ภาค II ของ RESONANCE Saga', role: 'Creator · Co-Director · Lead (Captain EO)', highlight: 'เมื่อเสียงดนตรีดับ จักรวาลก็ดับตาม · ความขัดแย้งกลางทวีความรุนแรง' },
    'iii-resonance': { subtitle: 'ภาพยนตร์ภาค III ของ RESONANCE Saga', role: 'Creator · Co-Director · Lead (Captain EO)', highlight: 'บทเพลงสุดท้าย · บทสรุปของ saga' },
    'canon': { subtitle: 'เอกสารอ้างอิงจักรวาล RESONANCE', role: 'เอกสาร world-building', highlight: 'ทีม Starwave · จักรวาล Melodia · ประวัติตัวละคร · lore' },
  } as Record<string, { subtitle: string; role: string; highlight: string }>,
  creativeRoles: [
    { role: 'Creator', detail: 'คิดค้นจักรวาล Melodia และตัวละครหลักทั้งหมด' },
    { role: 'Showrunner', detail: 'นำ writers room ของซีรีส์ Disney+' },
    { role: 'Co-Director', detail: 'กำกับร่วมภาพยนตร์ทั้งสามภาค' },
    { role: 'Lead Actor', detail: 'รับบท Captain EO ทั้งซีรีส์และภาพยนตร์' },
    { role: 'Composer', detail: 'ดนตรีและสกอร์ออริจินอลทั้งหมด' },
  ],
  universeRows: [
    { item: 'ฉาก', val: 'ระหว่างกาแล็กซี · จักรวาล Melodia' },
    { item: 'ทีม', val: 'Starwave Crew (5 คน)' },
    { item: 'ตัวร้าย', val: 'The Silent Orchestra' },
    { item: 'ธีม', val: 'ดนตรี, ตัวตน, ความกลมกลืนของจักรวาล' },
    { item: 'เจ้าของ IP', val: 'The Walt Disney Company · Lucasfilm · MJ Estate · JH Company' },
    { item: 'โครงสร้างสิทธิ์', val: 'Disney (ส่วนใหญ่ + จัดจำหน่าย) · Lucasfilm (มรดก Captain EO เดิม) · MJ Estate (เพลง + likeness) · JH Company (creative ownership + จักรวาลใหม่)' },
  ],
  related: [
    { label: 'ไตรภาค Shang-Chi', slug: 'filmography/shang-chi' },
    { label: 'ผลงานภาพยนตร์', slug: 'filmography' },
    { label: 'รางวัล', slug: 'awards' },
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
    { label: 'JH Company', slug: 'company' },
  ],
};

export const resonanceLanding = { en, th };
export function getResonanceLanding(lang: Lang) {
  return resonanceLanding[lang];
}
