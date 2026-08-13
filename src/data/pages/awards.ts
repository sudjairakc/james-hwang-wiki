// Bilingual content for the Awards page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Award show names, categories, results, song/album titles, and counts are
// proper nouns / structural values — kept identical across both languages on
// purpose (matches the convention set by home.ts / artistry.ts).

import type { Lang } from '../../i18n';

const en = {
  ui: {
    label: 'Recognition',
    title: 'Awards',
    subtitle: 'Grammy, Melon, Asia Artist Awards, Seoul Music Awards · 2022–2030',
    statAwardWins: 'Award Wins',
    nominations: 'Nominations',
    musicShowWins: 'Music Show Wins',
    wins: 'Wins',
    trajectoryHeading: 'Award Trajectory',
    trajectorySubtitle: 'Wins · Nominations · Music Show Wins per year',
    tableAwardShow: 'Award Show',
    tableCategory: 'Category',
    tableResult: 'Result',
    winBadge: '★ WIN',
    nomBadge: 'NOM',
    winAbbr: 'W',
    nomAbbr: 'N',
    chartMilestonesHeading: 'Chart Milestones',
  },
  related: [
    { label: 'Discography', slug: 'discography' },
    { label: 'Filmography', slug: 'filmography' },
    { label: 'Shang-Chi Trilogy', slug: 'filmography/shang-chi' },
    { label: 'RESONANCE Franchise', slug: 'filmography/resonance' },
    { label: 'Career Timeline', slug: 'timeline' },
  ],
  years: [
    {
      year: '2022',
      album: 'SOFTEST TOUCH',
      albumSub: '1st Mini Album',
      wins: [
        { show: 'Global R&B Editorial Playlists', category: 'Circulation (Multi-market)', result: 'WIN' },
        { show: 'Melon', category: 'Catalog Streaming Uplift — LIKE I DO / CRUSH', result: 'WIN' },
      ],
      musicWins: [
        { title: 'SOFTEST TOUCH', show: 'M Countdown', count: 1 },
        { title: 'SOFTEST TOUCH', show: 'Music Bank', count: 1 },
        { title: 'SOFTEST TOUCH', show: 'Show! Music Core', count: 1 },
        { title: 'SOFTEST TOUCH', show: 'Inkigayo', count: 1 },
      ],
      charts: [
        'Global curated R&B playlists (Asia + North America)',
        'Catalog resurgence streaming uplift after official solo debut release',
      ],
    },
    {
      year: '2023',
      album: 'PULSE',
      albumSub: '1st Studio Album',
      wins: [
        { show: 'Melon Music Awards', category: 'Top 10 Artist (Bonsang)', result: 'WIN' },
        { show: 'Melon Music Awards', category: 'Millions Top 10 Artist', result: 'WIN' },
        { show: 'Melon Music Awards', category: 'Best Male Solo Artist', result: 'WIN' },
        { show: 'MAMA Awards', category: 'Best Male Solo Artist', result: 'NOM' },
        { show: 'Melon Collaboration Project', category: 'Golden Producer recognition', result: 'WIN' },
      ],
      musicWins: [
        { title: 'HOW DOES IT FEEL?', show: 'Music Bank', count: 1 },
        { title: 'HOW DOES IT FEEL?', show: 'Inkigayo', count: 1 },
      ],
      charts: [
        'Spotify Global editorial playlists ("SAY")',
        'iTunes Album Top 10 — 15+ countries',
        'Spotify Viral Charts — Southeast Asia / North America',
      ],
    },
    {
      year: '2024',
      album: 'ARE U STILL',
      albumSub: '2nd Studio Album',
      wins: [
        { show: 'Seoul Music Awards', category: 'Best R&B / Ballad Award', result: 'WIN' },
        { show: 'Golden Disc Awards', category: 'Digital Bonsang', result: 'WIN' },
        { show: 'Circle Chart Music Awards', category: 'Artist of the Year (Digital)', result: 'WIN' },
        { show: 'Korean Music Awards', category: 'Best R&B Album', result: 'WIN' },
        { show: 'The Fact Music Awards', category: 'Artist of the Year (Bonsang)', result: 'WIN' },
        { show: 'Asia Artist Awards', category: 'Best Artist (Male Solo)', result: 'WIN' },
        { show: 'Asia Artist Awards', category: 'Best Producer', result: 'WIN' },
        { show: 'Asia Artist Awards', category: 'AAA Asia Celebrity Award', result: 'WIN' },
        { show: 'MAMA Awards', category: 'Best Male Solo Artist', result: 'NOM' },
        { show: 'Grammy Awards 2025', category: 'Best Progressive R&B Album', result: 'WIN' },
        { show: 'Grammy Awards 2025', category: 'Best R&B Performance', result: 'WIN' },
        { show: 'Grammy Awards 2025', category: 'Best Traditional R&B Performance', result: 'NOM' },
        { show: 'Billboard Music Awards', category: 'Top Global (Excl. U.S.) Artist', result: 'NOM' },
        { show: 'Billboard Music Awards', category: 'Best R&B Performance — "Tears On A Pretty Face"', result: 'NOM' },
      ],
      musicWins: [
        { title: 'Tears On A Pretty Face', show: 'Music Bank', count: 2 },
        { title: 'Tears On A Pretty Face', show: 'Inkigayo', count: 2 },
        { title: 'Tears On A Pretty Face', show: 'Show Champion', count: 1 },
      ],
      charts: [
        'Circle Chart — Artist of the Year (Digital) indicator tier',
        'Apple Music Global R&B — Top 10 rotation presence',
        'Grammy Awards 2025 cycle breakthrough',
      ],
    },
    {
      year: '2025',
      album: "CAN\'T LEAVE ALONE",
      albumSub: '3rd Studio Album · CAN\'T LEAVE ALONE era',
      wins: [
        { show: 'Golden Disc Awards', category: 'Digital Bonsang', result: 'WIN' },
        { show: 'Circle Chart Music Awards', category: 'Global Digital Artist', result: 'WIN' },
        { show: 'Seoul Music Awards', category: 'R&B / Soul Album', result: 'WIN' },
        { show: 'Melon Music Awards', category: 'Top 10 Artist (Bonsang)', result: 'WIN' },
        { show: 'Asia Artist Awards', category: 'Best Artist (Male Solo)', result: 'WIN' },
        { show: 'Soul Train Music Awards', category: 'Best R&B / Soul Album', result: 'NOM' },
        { show: 'BET Awards', category: 'Best New International Act', result: 'NOM' },
        { show: 'American Music Awards', category: 'Favorite Male R&B Artist', result: 'NOM' },
        { show: 'Billboard Music Awards', category: 'Top Global (Excl. U.S.) Artist', result: 'NOM' },
      ],
      musicWins: [
        { title: 'SOUR', show: 'Inkigayo', count: 1 },
      ],
      charts: [
        'Spotify global R&B editorial playlists ("CAN\'T LEAVE ALONE")',
        'iTunes Album Top 10 — multiple Southeast Asian markets',
        'North America producer-community playlist circulation',
        'Post-Grammy global R&B stability phase',
      ],
    },
    {
      year: '2026',
      album: 'DECADE',
      albumSub: 'Anthology + Shang-Chi 3',
      wins: [
        { show: 'Korean Music Awards', category: 'Best R&B/Soul Song — "SOUR"', result: 'NOM' },
      ],
      musicWins: [] as { title: string; show: string; count: number }[],
      charts: [
        'DECADE anthology — catalog streaming surge across all eras',
        'Shang-Chi 3 OST contribution charted in multiple markets',
        'Guinness World Record — first artist to simultaneously lead the global box office chart and return both a single ("I LOVE YOUR BODY") and an album (DECADE) to the top of the Billboard Hot 100 and Billboard 200 in the same week, driven by the Last of the Ten Rings release wave (Sept 2026)',
        'Appointed UNESCO Goodwill Ambassador',
        'Nominated for the Nobel Peace Prize, cited for the Gaza ceasefire and Thai-Cambodia peace statements',
      ],
    },
    {
      year: '2028',
      album: 'Captain EO: RESONANCE',
      albumSub: 'Disney+ Series · Acting',
      wins: [
        { show: 'MTV Movie & TV Awards', category: 'Best Hero', result: 'WIN' },
        { show: 'Saturn Awards', category: 'Best Actor in a Streaming Television Series', result: 'WIN' },
        { show: 'Primetime Emmy Awards', category: 'Outstanding Lead Actor in a Drama Series', result: 'NOM' },
      ],
      musicWins: [] as { title: string; show: string; count: number }[],
      charts: [
        'Disney+ global launch — top streaming title week 1',
        'Captain EO: RESONANCE OST editorial playlist rotation',
      ],
    },
    {
      year: '2030',
      album: 'RESONANCE: THE MISSING CHORD',
      albumSub: 'Film I · RESONANCE Saga · Acting',
      wins: [
        { show: 'Golden Globe Awards', category: 'Best Actor in a Motion Picture – Drama', result: 'WIN' },
        { show: "Critics' Choice Movie Awards", category: 'Best Actor', result: 'NOM' },
        { show: 'SAG Awards', category: 'Outstanding Performance by a Male Actor in a Leading Role', result: 'NOM' },
        { show: 'Astra Film Awards', category: 'Best Actor in a Motion Picture – Drama', result: 'WIN' },
      ],
      musicWins: [] as { title: string; show: string; count: number }[],
      charts: [
        'RESONANCE: THE MISSING CHORD OST — global streaming on release week',
        'Ludwig Göransson score charted in multiple markets',
      ],
    },
  ],
};

const th: typeof en = {
  ui: {
    label: 'Recognition',
    title: 'รางวัล',
    subtitle: 'Grammy, Melon, Asia Artist Awards, Seoul Music Awards · 2022–2030',
    statAwardWins: 'รางวัลที่ชนะ',
    nominations: 'การเข้าชิง',
    musicShowWins: 'ชนะ Music Show',
    wins: 'ชนะ',
    trajectoryHeading: 'เส้นทางรางวัล',
    trajectorySubtitle: 'ชนะ · เข้าชิง · ชนะ Music Show ต่อปี',
    tableAwardShow: 'เวทีรางวัล',
    tableCategory: 'ประเภทรางวัล',
    tableResult: 'ผล',
    winBadge: '★ ชนะ',
    nomBadge: 'เข้าชิง',
    winAbbr: 'W',
    nomAbbr: 'N',
    chartMilestonesHeading: 'หมุดหมายชาร์ต',
  },
  related: [
    { label: 'ผลงานเพลง', slug: 'discography' },
    { label: 'ผลงานภาพยนตร์', slug: 'filmography' },
    { label: 'Shang-Chi Trilogy', slug: 'filmography/shang-chi' },
    { label: 'RESONANCE Franchise', slug: 'filmography/resonance' },
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
  ],
  years: [
    {
      year: '2022',
      album: 'SOFTEST TOUCH',
      albumSub: 'มินิอัลบั้มชุดที่ 1',
      wins: [
        { show: 'Global R&B Editorial Playlists', category: 'Circulation (Multi-market)', result: 'WIN' },
        { show: 'Melon', category: 'Catalog Streaming Uplift — LIKE I DO / CRUSH', result: 'WIN' },
      ],
      musicWins: [
        { title: 'SOFTEST TOUCH', show: 'M Countdown', count: 1 },
        { title: 'SOFTEST TOUCH', show: 'Music Bank', count: 1 },
        { title: 'SOFTEST TOUCH', show: 'Show! Music Core', count: 1 },
        { title: 'SOFTEST TOUCH', show: 'Inkigayo', count: 1 },
      ],
      charts: [
        'เพลย์ลิสต์ R&B ที่คัดสรรระดับโลก (เอเชีย + อเมริกาเหนือ)',
        'ยอดสตรีมผลงานเก่ากลับมาพุ่งหลังปล่อยงานเดี่ยวชุดแรกอย่างเป็นทางการ',
      ],
    },
    {
      year: '2023',
      album: 'PULSE',
      albumSub: 'อัลบั้มเต็มชุดที่ 1',
      wins: [
        { show: 'Melon Music Awards', category: 'Top 10 Artist (Bonsang)', result: 'WIN' },
        { show: 'Melon Music Awards', category: 'Millions Top 10 Artist', result: 'WIN' },
        { show: 'Melon Music Awards', category: 'Best Male Solo Artist', result: 'WIN' },
        { show: 'MAMA Awards', category: 'Best Male Solo Artist', result: 'NOM' },
        { show: 'Melon Collaboration Project', category: 'Golden Producer recognition', result: 'WIN' },
      ],
      musicWins: [
        { title: 'HOW DOES IT FEEL?', show: 'Music Bank', count: 1 },
        { title: 'HOW DOES IT FEEL?', show: 'Inkigayo', count: 1 },
      ],
      charts: [
        'เพลย์ลิสต์ที่ทีม Spotify คัดเองระดับโลก ("SAY")',
        'iTunes Album Top 10 — 15+ ประเทศ',
        'Spotify Viral Charts — เอเชียตะวันออกเฉียงใต้ / อเมริกาเหนือ',
      ],
    },
    {
      year: '2024',
      album: 'ARE U STILL',
      albumSub: 'อัลบั้มเต็มชุดที่ 2',
      wins: [
        { show: 'Seoul Music Awards', category: 'Best R&B / Ballad Award', result: 'WIN' },
        { show: 'Golden Disc Awards', category: 'Digital Bonsang', result: 'WIN' },
        { show: 'Circle Chart Music Awards', category: 'Artist of the Year (Digital)', result: 'WIN' },
        { show: 'Korean Music Awards', category: 'Best R&B Album', result: 'WIN' },
        { show: 'The Fact Music Awards', category: 'Artist of the Year (Bonsang)', result: 'WIN' },
        { show: 'Asia Artist Awards', category: 'Best Artist (Male Solo)', result: 'WIN' },
        { show: 'Asia Artist Awards', category: 'Best Producer', result: 'WIN' },
        { show: 'Asia Artist Awards', category: 'AAA Asia Celebrity Award', result: 'WIN' },
        { show: 'MAMA Awards', category: 'Best Male Solo Artist', result: 'NOM' },
        { show: 'Grammy Awards 2025', category: 'Best Progressive R&B Album', result: 'WIN' },
        { show: 'Grammy Awards 2025', category: 'Best R&B Performance', result: 'WIN' },
        { show: 'Grammy Awards 2025', category: 'Best Traditional R&B Performance', result: 'NOM' },
        { show: 'Billboard Music Awards', category: 'Top Global (Excl. U.S.) Artist', result: 'NOM' },
        { show: 'Billboard Music Awards', category: 'Best R&B Performance — "Tears On A Pretty Face"', result: 'NOM' },
      ],
      musicWins: [
        { title: 'Tears On A Pretty Face', show: 'Music Bank', count: 2 },
        { title: 'Tears On A Pretty Face', show: 'Inkigayo', count: 2 },
        { title: 'Tears On A Pretty Face', show: 'Show Champion', count: 1 },
      ],
      charts: [
        'Circle Chart — อยู่ในระดับที่ชี้ว่าลุ้น Artist of the Year สายดิจิทัล',
        'Apple Music Global R&B — ติดรอบเปิดใน 10 อันดับแรก',
        'จุดเปลี่ยนสำคัญในไซเคิล Grammy Awards 2025',
      ],
    },
    {
      year: '2025',
      album: "CAN\'T LEAVE ALONE",
      albumSub: 'อัลบั้มเต็มชุดที่ 3 · CAN\'T LEAVE ALONE era',
      wins: [
        { show: 'Golden Disc Awards', category: 'Digital Bonsang', result: 'WIN' },
        { show: 'Circle Chart Music Awards', category: 'Global Digital Artist', result: 'WIN' },
        { show: 'Seoul Music Awards', category: 'R&B / Soul Album', result: 'WIN' },
        { show: 'Melon Music Awards', category: 'Top 10 Artist (Bonsang)', result: 'WIN' },
        { show: 'Asia Artist Awards', category: 'Best Artist (Male Solo)', result: 'WIN' },
        { show: 'Soul Train Music Awards', category: 'Best R&B / Soul Album', result: 'NOM' },
        { show: 'BET Awards', category: 'Best New International Act', result: 'NOM' },
        { show: 'American Music Awards', category: 'Favorite Male R&B Artist', result: 'NOM' },
        { show: 'Billboard Music Awards', category: 'Top Global (Excl. U.S.) Artist', result: 'NOM' },
      ],
      musicWins: [
        { title: 'SOUR', show: 'Inkigayo', count: 1 },
      ],
      charts: [
        'เพลย์ลิสต์ R&B ที่ทีม Spotify คัดเองระดับโลก ("CAN\'T LEAVE ALONE")',
        'iTunes Album Top 10 — หลายตลาดในเอเชียตะวันออกเฉียงใต้',
        'แพร่ในเพลย์ลิสต์ของกลุ่มคนทำเพลงฝั่งอเมริกาเหนือ',
        'ช่วงที่ยอดนิ่งในตลาด R&B โลกหลังยุค Grammy',
      ],
    },
    {
      year: '2026',
      album: 'DECADE',
      albumSub: 'อัลบั้มรวม + Shang-Chi 3',
      wins: [
        { show: 'Korean Music Awards', category: 'Best R&B/Soul Song — "SOUR"', result: 'NOM' },
      ],
      musicWins: [] as { title: string; show: string; count: number }[],
      charts: [
        'อัลบั้มรวม DECADE — ยอดสตรีมพุ่งขึ้นทุกยุค',
        'เพลงที่ร่วมทำใน OST Shang-Chi 3 ขึ้นชาร์ตหลายตลาด',
        'สถิติโลกกินเนสส์ — ศิลปินคนแรกที่ครองอันดับหนึ่งรายได้หนังทั่วโลก พร้อมกับดันทั้งซิงเกิล ("I LOVE YOUR BODY") และอัลบั้ม (DECADE) กลับขึ้นอันดับ 1 ทั้ง Billboard Hot 100 และ Billboard 200 ในสัปดาห์เดียวกัน จากกระแส Last of the Ten Rings เดือนกันยายน 2026',
        'ได้รับแต่งตั้งเป็น UNESCO Goodwill Ambassador',
        'ได้รับการเสนอชื่อเข้าชิง Nobel Peace Prize จากแถลงการณ์หยุดยิง Gaza และสันติภาพไทย-กัมพูชา',
      ],
    },
    {
      year: '2028',
      album: 'Captain EO: RESONANCE',
      albumSub: 'ซีรีส์ Disney+ · การแสดง',
      wins: [
        { show: 'MTV Movie & TV Awards', category: 'Best Hero', result: 'WIN' },
        { show: 'Saturn Awards', category: 'Best Actor in a Streaming Television Series', result: 'WIN' },
        { show: 'Primetime Emmy Awards', category: 'Outstanding Lead Actor in a Drama Series', result: 'NOM' },
      ],
      musicWins: [] as { title: string; show: string; count: number }[],
      charts: [
        'เปิดตัวทั่วโลกบน Disney+ — ขึ้นเป็นเรื่องที่คนดูมากที่สุดในสัปดาห์แรก',
        'เพลงประกอบ Captain EO: RESONANCE ติดรอบเปิดในเพลย์ลิสต์ที่บรรณาธิการคัด',
      ],
    },
    {
      year: '2030',
      album: 'RESONANCE: THE MISSING CHORD',
      albumSub: 'Film I · RESONANCE Saga · การแสดง',
      wins: [
        { show: 'Golden Globe Awards', category: 'Best Actor in a Motion Picture – Drama', result: 'WIN' },
        { show: "Critics' Choice Movie Awards", category: 'Best Actor', result: 'NOM' },
        { show: 'SAG Awards', category: 'Outstanding Performance by a Male Actor in a Leading Role', result: 'NOM' },
        { show: 'Astra Film Awards', category: 'Best Actor in a Motion Picture – Drama', result: 'WIN' },
      ],
      musicWins: [] as { title: string; show: string; count: number }[],
      charts: [
        'OST ของ RESONANCE: THE MISSING CHORD — ติดสตรีมมิงระดับโลกในสัปดาห์ที่ปล่อย',
        'สกอร์ของ Ludwig Göransson ขึ้นชาร์ตหลายตลาด',
      ],
    },
  ],
};

export const awards = { en, th };
export function getAwards(lang: Lang) {
  return awards[lang];
}
