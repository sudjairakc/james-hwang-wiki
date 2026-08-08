// Bilingual content for the Shang-Chi trilogy landing page.
import type { Lang } from '../../i18n';

export const color = '#7c5a3a';
export const totalBO = '$2.46B';

// Shared — film data (proper nouns / numbers / flags).
export const films = [
  { slug: 'legend-of-the-ten-rings', num: 1, title: 'Shang-Chi and the Legend of the Ten Rings', year: '2021', date: '3 ก.ย. 2021', dateEn: 'Sep 3, 2021', phase: 'Phase 4', director: 'Destin Daniel Cretton', status: 'released', boxOffice: '$728M', rtScore: '91%' },
  { slug: 'legacy-of-the-ten-rings', num: 2, title: 'Shang-Chi and the Legacy of the Ten Rings', year: '2025', date: '25 ก.ค. 2025', dateEn: 'Jul 25, 2025', phase: 'Phase 5', director: 'Destin Daniel Cretton', status: 'released', boxOffice: '$1.02B', rtScore: '88%' },
  { slug: 'last-of-the-ten-rings', num: 3, title: 'Shang-Chi and the Last of the Ten Rings', year: '2026', date: '18 ก.ย. 2026', dateEn: 'Sep 18, 2026', phase: 'Phase 6', director: 'Destin Daniel Cretton', status: 'released', boxOffice: '$1.01B', rtScore: '85%' },
];

// Shared — main cast (proper nouns).
export const cast = [
  { actor: 'James Hwang', role: 'Shang-Chi (Xu Shang-Chi)' },
  { actor: 'Tony Leung', role: 'Mandarin (Xu Wenwu)' },
  { actor: 'Ashley Liao', role: 'Katy (Ruiwen)' },
  { actor: 'Michelle Yeoh', role: 'Ying Nan' },
  { actor: 'Fala Chen', role: 'Ying Li' },
  { actor: 'Ben Kingsley', role: 'Trevor Slattery' },
];

const en = {
  ui: {
    back: '← Back to Filmography',
    eyebrow: 'MCU Trilogy · Marvel Studios',
    title: 'Shang-Chi Trilogy',
    subtitle: `Marvel Cinematic Universe · 2021–2026 · 3 films · combined box office ${totalBO}`,
    statFilms: 'Films', statBoxOffice: 'Combined box office', statTimeline: 'Timeline', statPhase: 'MCU Phases',
    statusReleased: 'Released', statusUpcoming: 'Upcoming',
    colDate: 'Release date', colDirector: 'Director', colContribution: "James's role", colBoxOffice: 'Box office', colRt: 'Rotten Tomatoes',
    creativeHeading: "James's Creative Role", castHeading: 'Main Cast (Film 1)',
  },
  perFilm: {
    'legend-of-the-ten-rings': { sub: '', role: 'James Hwang as Shang-Chi (Xu Shang-Chi)', contribution: 'Actor', highlight: 'MCU debut · Asian superhero lead · first MCU film led by an Asian actor' },
    'legacy-of-the-ten-rings': { sub: '', role: 'James Hwang as Shang-Chi + co-writer', contribution: 'Actor + writer', highlight: 'Co-writer · expands his solo identity within the MCU' },
    'last-of-the-ten-rings': { sub: '', role: 'James Hwang as Shang-Chi + co-writer', contribution: 'Actor + writer', highlight: 'Trilogy conclusion · co-writer · closing role of Phase 6' },
  } as Record<string, { sub: string; role: string; contribution: string; highlight: string }>,
  creativeRoles: [
    { film: 'Film 1', role: 'Actor only', detail: 'First MCU performance — establishes Shang-Chi as an Asian-American protagonist' },
    { film: 'Film 2', role: 'Actor + co-writer', detail: 'Joins the writers room — shapes the character arc and dialogue' },
    { film: 'Film 3', role: 'Actor + co-writer', detail: 'Full creative partner in the trilogy conclusion' },
  ],
  analysisCard: {
    label: 'Article',
    title: 'Shang-Chi Trilogy — In-Depth Analysis',
    desc: 'Legend of the Ten Rings · Legacy of the Ten Rings · Last of the Ten Rings — thematic unity, character arcs, and the architecture of letting go',
  },
  related: [
    { label: 'Trilogy Analysis', slug: 'filmography/shang-chi/trilogy-analysis' },
    { label: 'RESONANCE Franchise', slug: 'filmography/resonance' },
    { label: 'Filmography', slug: 'filmography' },
    { label: 'Awards', slug: 'awards' },
    { label: 'Career Timeline', slug: 'timeline' },
    { label: 'JH Company', slug: 'company' },
  ],
};

const th: typeof en = {
  ui: {
    back: '← กลับไปผลงานภาพยนตร์',
    eyebrow: 'MCU Trilogy · Marvel Studios',
    title: 'Shang-Chi Trilogy',
    subtitle: `Marvel Cinematic Universe · 2021–2026 · 3 ภาค · บ็อกซ์ออฟฟิศรวม ${totalBO}`,
    statFilms: 'ภาค', statBoxOffice: 'บ็อกซ์ออฟฟิศรวม', statTimeline: 'ช่วงเวลา', statPhase: 'ยุค MCU',
    statusReleased: 'เข้าฉายแล้ว', statusUpcoming: 'เร็วๆ นี้',
    colDate: 'วันเข้าฉาย', colDirector: 'ผู้กำกับ', colContribution: 'บทบาทของเจมส์', colBoxOffice: 'บ็อกซ์ออฟฟิศ', colRt: 'Rotten Tomatoes',
    creativeHeading: 'บทบาทสร้างสรรค์ของเจมส์', castHeading: 'นักแสดงหลัก (ภาค 1)',
  },
  perFilm: {
    'legend-of-the-ten-rings': { sub: 'ชาง-ชี กับตำนานลับเท็นริงส์', role: 'James Hwang รับบท Shang-Chi (Xu Shang-Chi)', contribution: 'นักแสดง', highlight: 'เปิดตัวใน MCU · ซูเปอร์ฮีโร่เอเชียนนำ · หนัง MCU เรื่องแรกที่นักแสดงนำเป็นคนเอเชีย' },
    'legacy-of-the-ten-rings': { sub: 'ชาง-ชี กับมรดกแห่งเท็นริงส์', role: 'James Hwang รับบท Shang-Chi + ผู้ร่วมเขียนบท', contribution: 'นักแสดง + นักเขียน', highlight: 'ร่วมเขียนบท · ขยายตัวตนเดี่ยวภายใน MCU' },
    'last-of-the-ten-rings': { sub: 'ชาง-ชี กับคนสุดท้ายแห่งเท็นริงส์', role: 'James Hwang รับบท Shang-Chi + ผู้ร่วมเขียนบท', contribution: 'นักแสดง + นักเขียน', highlight: 'บทสรุปไตรภาค · ร่วมเขียนบท · บทบาทปิดท้าย Phase 6' },
  } as Record<string, { sub: string; role: string; contribution: string; highlight: string }>,
  creativeRoles: [
    { film: 'ภาค 1', role: 'นักแสดงอย่างเดียว', detail: 'การแสดงใน MCU ครั้งแรก — สร้าง Shang-Chi ในฐานะตัวเอกเอเชียน-อเมริกัน' },
    { film: 'ภาค 2', role: 'นักแสดง + ผู้ร่วมเขียนบท', detail: 'เข้าร่วมทีมเขียนบท — หล่อหลอมอาร์คตัวละครและบทสนทนา' },
    { film: 'ภาค 3', role: 'นักแสดง + ผู้ร่วมเขียนบท', detail: 'พันธมิตรสร้างสรรค์เต็มตัวในบทสรุปไตรภาค' },
  ],
  analysisCard: {
    label: 'บทความ',
    title: 'Shang-Chi Trilogy — บทวิเคราะห์เชิงลึก',
    desc: 'Legend of the Ten Rings · Legacy of the Ten Rings · Last of the Ten Rings — เอกภาพเชิงธีม อาร์คตัวละคร และสถาปัตยกรรมของการปล่อยมือ',
  },
  related: [
    { label: 'บทวิเคราะห์ไตรภาค', slug: 'filmography/shang-chi/trilogy-analysis' },
    { label: 'แฟรนไชส์ RESONANCE', slug: 'filmography/resonance' },
    { label: 'ผลงานภาพยนตร์', slug: 'filmography' },
    { label: 'รางวัล', slug: 'awards' },
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
    { label: 'JH Company', slug: 'company' },
  ],
};

export const shangchiLanding = { en, th };
export function getShangchiLanding(lang: Lang) {
  return shangchiLanding[lang];
}
