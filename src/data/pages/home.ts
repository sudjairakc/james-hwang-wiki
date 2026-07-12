// Bilingual content for the home / Overview page.
// Shape: { en: {...}, th: {...} } with identical keys.
// In prose HTML, the token %L% is replaced by `${base}${lang}/` at render time.

import type { Lang } from '../../i18n';

// Shared (non-translatable) — album cards.
export const albums = [
  { slug: 'like-i-do',      cover: 'like_i_do.png',     title: 'LIKE I DO',      year: '2016', type: 'Mini Album',       streams: '210M+', color: '#c9a84c' },
  { slug: 'softest-touch',  cover: 'softest_touch.png', title: 'SOFTEST TOUCH',  year: '2022', type: '1st Mini Album',   streams: '500M+', color: '#9b7fc8' },
  { slug: 'pulse-era',      cover: 'pulse.png',         title: 'PULSE',          year: '2023', type: '1st Studio Album', streams: '1.4B+', color: '#5a7c6a' },
  { slug: 'are-u-still',    cover: 'are_you_still.png', title: 'ARE U STILL',    year: '2024', type: '2nd Studio Album', streams: '2.2B+', color: '#5a7aaa' },
  { slug: 'sour-honey',     cover: 'sour_honey.png',    title: "CAN\'T LEAVE ALONE", year: '2025', type: '3rd Studio Album', streams: '1.9B+', color: '#c06080' },
  { slug: 'decade',         cover: 'decade.png',        title: 'DECADE',         year: '2026', type: 'Anthology',         streams: '2.5B+', color: '#6e5a7c' },
];

// Shared — role badge colors (labels are translated below).
const badgeColors = ['#c9a84c', '#7c5a3a', '#5a7aaa', '#22c55e', '#ef4444', '#9b7fc8'];
// Shared — section group meta (group label + title + desc translated below).
const groupMeta = [
  { color: '#c9a84c', slugs: ['biography', 'personal-life', 'timeline'], icons: ['◎', '◎', '◷'] },
  { color: '#5a7c6a', slugs: ['discography', 'music-videos', 'tours', 'collaborations', 'production-credits'], icons: ['◉', '▶', '◆', '♫', '◎'] },
  { color: '#7c5a3a', slugs: ['filmography'], icons: ['▷'] },
  { color: '#5a7aaa', slugs: ['company', 'ecosystem', 'legal'], icons: ['◇', '◐', '⚖'] },
  { color: '#9b7fc8', slugs: ['public-image', 'fashion', 'awards', 'interviews', 'cultural-impact'], icons: ['◑', '◇', '★', '◎', '◑'] },
  { color: '#c06080', slugs: ['canon', 'fandom', 'controversies', 'rivalries'], icons: ['◈', '♡', '◈', '⚔'] },
];

const en = {
  ui: {
    heroLabel: 'JamesHwangVerse · The Definitive Wiki',
    title: 'Overview',
    name: 'James Hwang',
    milestonesHeading: 'Key Milestones',
    fullTimeline: 'Full timeline →',
    discographyHeading: 'Discography',
    viewAll: 'View all →',
    wikiSectionsHeading: 'Wiki Sections',
  },
  identityChips: [
    '黃志南 · 황지남',
    'ชัยชนะ อึ้งวณิชกุล',
    'b. June 22, 1998',
    'Thai-Chinese-Korean',
    'Fandom: Gemzen (Gemz)',
  ],
  roleBadges: ['Singer-Songwriter', 'Actor', 'CEO · JH Company', '2× Grammy Winner', 'MCU Actor', 'Independent Artist'],
  bioHtml:
    'James Hwang debuted under SM Entertainment as a member of <strong style="color:var(--text)">NCT 127</strong> (2016), before departing via contract settlement in 2023 to found <a href="%L%company" style="color:var(--gold);font-weight:600">JH Company</a>. Recognized as a pioneer of <em>post-agency authorship</em> within K-pop, he has built a <a href="%L%discography" style="color:var(--text);font-weight:600;text-decoration:underline;text-decoration-color:var(--border)">discography</a> spanning contemporary R&B, neo-soul, and funk — earning <a href="%L%awards" style="color:var(--gold);font-weight:600">2 Grammy Awards</a> in 2025. Simultaneously, he established himself in Hollywood through the <a href="%L%filmography/shang-chi" style="color:var(--text);font-weight:600;text-decoration:underline;text-decoration-color:var(--border)">Shang-Chi</a> trilogy (MCU) and the original <a href="%L%filmography/resonance" style="color:var(--text);font-weight:600;text-decoration:underline;text-decoration-color:var(--border)">RESONANCE</a> franchise (Disney), for which he serves as creator, co-director, composer, and lead actor.',
  stats: [
    { label: 'Career Span', value: '2013–', sub: 'SM Rookies → Independent' },
    { label: 'Total Streams', value: '8.7B+', sub: 'All platforms combined' },
    { label: 'Grammy Awards', value: '2', sub: 'Best Prog. R&B + Best R&B Perf.' },
    { label: 'Tour Gross', value: '$309M', sub: 'PULSE + DECADE tours' },
    { label: 'Endorsements', value: '$22M/yr', sub: 'Saint Laurent, Cartier, Sony…' },
    { label: 'Films + Series', value: '6+1', sub: 'MCU + RESONANCE franchise' },
  ],
  milestones: [
    { year: '2013', label: 'SM Rookies', note: 'Debuted as SM Rookies trainee · SOPA enrollment' },
    { year: '2016', label: 'NCT 127', note: '"Fire Truck" · "LIKE I DO" GONUNMA mini album' },
    { year: '2019', label: 'MCU', note: 'Shang-Chi casting announced at Comic-Con' },
    { year: '2021', label: 'Hollywood', note: 'Shang-Chi and the Legend of the Ten Rings · $432M box office' },
    { year: '2022', label: 'Solo', note: '"SOFTEST TOUCH" — official solo identity launch' },
    { year: '2023', label: 'Independent', note: 'SM departure · JH Company founded · PULSE World Tour' },
    { year: '2024', label: 'Grammy', note: 'Best Progressive R&B + Best R&B Performance' },
    { year: '2026', label: 'RESONANCE', note: 'Disney+ Captain EO: RESONANCE series · DECADE anthology' },
  ],
  groups: [
    { group: 'Artist', items: [
      { title: 'Biography', desc: 'Bangkok → SM Rookies → NCT 127 → independence' },
      { title: 'Personal Life', desc: 'Family · education · relationships · values' },
      { title: 'Timeline', desc: '1998–present · every major event in sequence' },
    ]},
    { group: 'Music', items: [
      { title: 'Discography', desc: '6 projects · 8.7B+ streams · 2016–2026' },
      { title: 'Music Videos', desc: '10 MVs · LIKE I DO through DECADE' },
      { title: 'Tours', desc: 'PULSE (2023–24) + DECADE (2027) · $309M+ gross' },
      { title: 'Collaborations', desc: 'Anderson .Paak · Janet Jackson · Pharrell Williams · more' },
      { title: 'Production Credits', desc: 'L.I.N.A. · NCT 127 · aespa · WayV · Ten · Jaehyun' },
    ]},
    { group: 'Film', items: [
      { title: 'Filmography', desc: 'Shang-Chi trilogy (MCU) + RESONANCE franchise (Disney+)' },
    ]},
    { group: 'Business', items: [
      { title: 'JH Company', desc: 'Founded Apr 2023 · distribution via Warner Music Korea' },
      { title: 'Endorsements', desc: 'Saint Laurent · Cartier · Sony · Nike · Gentle Monster' },
      { title: 'Legal', desc: 'SM dispute 2022–2023 · settlement · IP ownership' },
    ]},
    { group: 'Image', items: [
      { title: 'Public Image', desc: 'Reputation · Weverse · pictorials · variety · persona' },
      { title: 'Fashion & Style', desc: 'Era-by-era wardrobe · Saint Laurent · Nike · tour staging' },
      { title: 'Awards', desc: '2× Grammy · Melon · AAA · Seoul Music Awards' },
      { title: 'Interviews & Quotes', desc: 'Signature quotes · GQ · Rolling Stone · Pitchfork · more' },
      { title: 'Cultural Impact', desc: 'Post-agency authorship · neo-soul K-pop pioneer' },
    ]},
    { group: 'Community', items: [
      { title: 'Canon', desc: 'Vocal · dance · production DNA · artistic identity' },
      { title: 'Gemzen Fandom', desc: 'Official fandom · merch · demographics · fan projects' },
      { title: 'Controversies', desc: 'Chronological incident log · 2016–present' },
      { title: 'Rivalries & Tensions', desc: 'Industry tensions · fan wars · SM institutional conflict' },
    ]},
  ],
  related: [
    { label: 'Career Timeline', slug: 'timeline' },
    { label: 'Discography', slug: 'discography' },
    { label: 'Filmography', slug: 'filmography' },
    { label: 'Awards', slug: 'awards' },
    { label: 'JH Company', slug: 'company' },
  ],
};

const th: typeof en = {
  ui: {
    heroLabel: 'JamesHwangVerse · วิกิฉบับสมบูรณ์',
    title: 'ภาพรวม',
    name: 'James Hwang',
    milestonesHeading: 'หมุดหมายสำคัญ',
    fullTimeline: 'ดูไทม์ไลน์ทั้งหมด →',
    discographyHeading: 'ผลงานเพลง',
    viewAll: 'ดูทั้งหมด →',
    wikiSectionsHeading: 'หมวดในวิกิ',
  },
  identityChips: [
    '黃志南 · 황지남',
    'ชัยชนะ อึ้งวณิชกุล',
    'เกิด 22 มิ.ย. 1998',
    'ไทย-จีน-เกาหลี',
    'แฟนด้อม: Gemzen (Gemz)',
  ],
  roleBadges: ['นักร้อง-นักแต่งเพลง', 'นักแสดง', 'CEO · JH Company', 'เจ้าของ Grammy 2 รางวัล', 'นักแสดง MCU', 'ศิลปินอิสระ'],
  bioHtml:
    'James Hwang เดบิวต์กับ SM Entertainment ในฐานะสมาชิก <strong style="color:var(--text)">NCT 127</strong> (2016) ก่อนแยกทางผ่านการ settle สัญญาในปี 2023 เพื่อก่อตั้ง <a href="%L%company" style="color:var(--gold);font-weight:600">JH Company</a> ได้รับการยกย่องเป็นผู้บุกเบิก <em>post-agency authorship</em> ใน K-pop เขาสร้าง <a href="%L%discography" style="color:var(--text);font-weight:600;text-decoration:underline;text-decoration-color:var(--border)">discography</a> ที่ครอบคลุม contemporary R&B, neo-soul และ funk — คว้า <a href="%L%awards" style="color:var(--gold);font-weight:600">Grammy 2 รางวัล</a> ในปี 2025 พร้อมกันนั้นก็ปักหลักในฮอลลีวูดผ่านไตรภาค <a href="%L%filmography/shang-chi" style="color:var(--text);font-weight:600;text-decoration:underline;text-decoration-color:var(--border)">Shang-Chi</a> (MCU) และแฟรนไชส์ออริจินอล <a href="%L%filmography/resonance" style="color:var(--text);font-weight:600;text-decoration:underline;text-decoration-color:var(--border)">RESONANCE</a> (Disney) ที่เขารับหน้าที่ผู้สร้าง ผู้กำกับร่วม ผู้ประพันธ์ดนตรี และนักแสดงนำ',
  stats: [
    { label: 'ช่วงอาชีพ', value: '2013–', sub: 'SM Rookies → อิสระ' },
    { label: 'ยอดสตรีมรวม', value: '8.7B+', sub: 'รวมทุกแพลตฟอร์ม' },
    { label: 'รางวัล Grammy', value: '2', sub: 'Best Prog. R&B + Best R&B Perf.' },
    { label: 'รายได้ทัวร์', value: '$309M', sub: 'ทัวร์ PULSE + DECADE' },
    { label: 'ดีลพรีเซ็นเตอร์', value: '$22M/ปี', sub: 'Saint Laurent, Cartier, Sony…' },
    { label: 'หนัง + ซีรีส์', value: '6+1', sub: 'MCU + แฟรนไชส์ RESONANCE' },
  ],
  milestones: [
    { year: '2013', label: 'SM Rookies', note: 'เดบิวต์เป็นเทรนนีในทีม SM Rookies · เข้าเรียน SOPA' },
    { year: '2016', label: 'NCT 127', note: '"Fire Truck" · มินิอัลบั้ม "LIKE I DO" ในนาม GONUNMA' },
    { year: '2019', label: 'MCU', note: 'ประกาศแคสต์ Shang-Chi ที่งาน Comic-Con' },
    { year: '2021', label: 'ฮอลลีวูด', note: 'Shang-Chi and the Legend of the Ten Rings · บ็อกซ์ออฟฟิศ $432M' },
    { year: '2022', label: 'เดี่ยว', note: '"SOFTEST TOUCH" — เปิดตัวตัวตนเดี่ยวอย่างเป็นทางการ' },
    { year: '2023', label: 'อิสระ', note: 'ออกจาก SM · ก่อตั้ง JH Company · ทัวร์ PULSE World Tour' },
    { year: '2024', label: 'Grammy', note: 'Best Progressive R&B + Best R&B Performance' },
    { year: '2026', label: 'RESONANCE', note: 'ซีรีส์ Disney+ Captain EO: RESONANCE · อัลบั้มรวม DECADE' },
  ],
  groups: [
    { group: 'ศิลปิน', items: [
      { title: 'ชีวประวัติ', desc: 'กรุงเทพ → SM Rookies → NCT 127 → อิสระ' },
      { title: 'ชีวิตส่วนตัว', desc: 'ครอบครัว · การศึกษา · ความสัมพันธ์ · ค่านิยม' },
      { title: 'ไทม์ไลน์', desc: '1998–ปัจจุบัน · ทุกเหตุการณ์สำคัญเรียงลำดับ' },
    ]},
    { group: 'ดนตรี', items: [
      { title: 'ผลงานเพลง', desc: '6 โปรเจ็กต์ · สตรีม 8.7B+ · 2016–2026' },
      { title: 'มิวสิกวิดีโอ', desc: '10 MV · LIKE I DO ถึง DECADE' },
      { title: 'ทัวร์คอนเสิร์ต', desc: 'PULSE (2023–24) + DECADE (2027) · รายได้ $309M+' },
      { title: 'คอลแลบ', desc: 'Anderson .Paak · Janet Jackson · Pharrell Williams · อื่นๆ' },
      { title: 'เครดิตโปรดักชัน', desc: 'L.I.N.A. · NCT 127 · aespa · WayV · Ten · Jaehyun' },
    ]},
    { group: 'ภาพยนตร์', items: [
      { title: 'ผลงานภาพยนตร์', desc: 'ไตรภาค Shang-Chi (MCU) + แฟรนไชส์ RESONANCE (Disney+)' },
    ]},
    { group: 'ธุรกิจ', items: [
      { title: 'JH Company', desc: 'ก่อตั้ง เม.ย. 2023 · จัดจำหน่ายผ่าน Warner Music Korea' },
      { title: 'พรีเซ็นเตอร์ & ดีล', desc: 'Saint Laurent · Cartier · Sony · Nike · Gentle Monster' },
      { title: 'กฎหมาย', desc: 'ข้อพิพาท SM 2022–2023 · การ settle · สิทธิ์ IP' },
    ]},
    { group: 'ภาพลักษณ์', items: [
      { title: 'ภาพลักษณ์สาธารณะ', desc: 'ชื่อเสียง · Weverse · พิคทอเรียล · วาไรตี้ · เพอร์โซนา' },
      { title: 'แฟชั่น & สไตล์', desc: 'เสื้อผ้าแต่ละยุค · Saint Laurent · Nike · การจัดสเตจทัวร์' },
      { title: 'รางวัล', desc: '2× Grammy · Melon · AAA · Seoul Music Awards' },
      { title: 'สัมภาษณ์ & คำพูด', desc: 'คำพูดเด่น · GQ · Rolling Stone · Pitchfork · อื่นๆ' },
      { title: 'อิทธิพลเชิงวัฒนธรรม', desc: 'post-agency authorship · ผู้บุกเบิก neo-soul K-pop' },
    ]},
    { group: 'คอมมูนิตี้', items: [
      { title: 'แคนอน', desc: 'เสียงร้อง · การเต้น · DNA โปรดักชัน · ตัวตนทางศิลปะ' },
      { title: 'แฟนด้อม Gemzen', desc: 'แฟนด้อมทางการ · merch · ประชากรแฟน · โปรเจ็กต์แฟน' },
      { title: 'ประเด็นดราม่า', desc: 'บันทึกเหตุการณ์เรียงเวลา · 2016–ปัจจุบัน' },
      { title: 'คู่แข่ง & ความตึงเครียด', desc: 'ความตึงในวงการ · fan war · ความขัดแย้งเชิงสถาบันกับ SM' },
    ]},
  ],
  related: [
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
    { label: 'ผลงานเพลง', slug: 'discography' },
    { label: 'ผลงานภาพยนตร์', slug: 'filmography' },
    { label: 'รางวัล', slug: 'awards' },
    { label: 'JH Company', slug: 'company' },
  ],
};

export const home = { en, th };
export function getHome(lang: Lang) {
  return home[lang];
}
export { badgeColors, groupMeta };
