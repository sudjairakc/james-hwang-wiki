// Bilingual content for the Discography index page.
// Shape: { en, th } with identical keys.
// Non-translatable values (image filenames, dates, stream counts, chart
// peaks, hex colors, genre taxonomy terms) are extracted as shared consts
// keyed by slug, merged with the translated `albums` array at render time
// (same pattern as tourMeta in tours-index.ts).

import type { Lang } from '../../i18n';

// Shared — image filenames, dates, stream counts, chart peaks, era colors, keyed by slug.
export const albumMeta: Record<
  string,
  {
    cover: string;
    year: string;
    date: string;
    tracks: number;
    streams: number;
    streamLabel: string;
    peak: string;
    color: string;
    label: string;
    genres: string[];
    titleTrack: string;
  }
> = {
  'like-i-do': {
    cover: 'like_i_do.png',
    year: '2016',
    date: 'Nov 11, 2016',
    tracks: 7,
    streams: 210,
    streamLabel: '210M+',
    peak: 'Top 40 (resurgence 2022)',
    color: '#c9a84c',
    label: 'SM Entertainment',
    genres: ['R&B', 'Pop'],
    titleTrack: 'LIKE I DO (feat. Mark Lee)',
  },
  'softest-touch': {
    cover: 'softest_touch.png',
    year: '2022',
    date: 'Jan 11, 2022',
    tracks: 7,
    streams: 500,
    streamLabel: '500M+',
    peak: 'Melon #18 · Circle Top 5',
    color: '#9b7fc8',
    label: 'SM Entertainment',
    genres: ['R&B', 'Pop', 'Indie'],
    titleTrack: 'SOFTEST TOUCH',
  },
  'pulse-era': {
    cover: 'pulse.png',
    year: '2023',
    date: 'Jul 21, 2023',
    tracks: 10,
    streams: 1400,
    streamLabel: '1.4B+',
    peak: 'Melon #7 · Circle Top 15',
    color: '#5a7c6a',
    label: 'JH Company / Warner Music Korea',
    genres: ['R&B', 'Pop', 'Synth Funk', 'Nu-Disco'],
    titleTrack: 'HOW DOES IT FEEL?',
  },
  'are-u-still': {
    cover: 'are_you_still.png',
    year: '2024',
    date: 'Jan 8, 2024',
    tracks: 11,
    streams: 2200,
    streamLabel: '2.2B+',
    peak: 'Melon #2 · Circle Top 5',
    color: '#5a7aaa',
    label: 'JH Company / Warner Music Korea',
    genres: ['Neo-Soul', 'R&B', 'Alternative R&B', 'Funk', 'Soul'],
    titleTrack: 'TEARS ON A PRETTY FACE',
  },
  'sour-honey': {
    cover: 'sour_honey.png',
    year: '2025',
    date: 'Feb 10, 2025',
    tracks: 11,
    streams: 1900,
    streamLabel: '1.9B+',
    peak: 'Melon #8 · Circle Top 20',
    color: '#c06080',
    label: 'JH Company / Warner Music Korea',
    genres: ['R&B', 'Contemporary R&B', 'Soul'],
    titleTrack: 'SOUR',
  },
  decade: {
    cover: 'decade.png',
    year: '2026',
    date: 'Jul 7, 2026',
    tracks: 25,
    streams: 2500,
    streamLabel: '2.5B+',
    peak: 'Billboard 200 #1 · Hot 100 #1 (I LOVE YOUR BODY) · Melon #9',
    color: '#6e5a7c',
    label: 'JH Company / Warner Music Korea',
    genres: ['Multi-era', 'R&B', 'Soul'],
    titleTrack: 'I LOVE YOUR BODY',
  },
};

// Shared — genre map chart data. Genre taxonomy labels are technical music
// terms kept identical in English for both languages (per site convention).
export const genreMap = (() => {
  const rows = [
    { label: 'K-pop / Dance Pop', color: '#60a5fa', group: 'Pop' },
    { label: 'Pop', color: '#93c5fd', group: 'Pop' },
    { label: 'Indie / Alt Pop', color: '#7ca4a0', group: 'Pop' },
    { label: 'Pop R&B', color: '#c9a84c', group: 'R&B' },
    { label: 'R&B', color: '#d4a847', group: 'R&B' },
    { label: 'Contemporary R&B', color: '#c06080', group: 'R&B' },
    { label: 'Alternative R&B', color: '#a05070', group: 'R&B' },
    { label: 'Funk', color: '#8a6a3a', group: 'Funk' },
    { label: 'Synth Funk', color: '#5a7c6a', group: 'Funk' },
    { label: 'Nu-Disco', color: '#4a6a5a', group: 'Funk' },
    { label: 'Soul', color: '#9b8fc8', group: 'Soul' },
    { label: 'Neo-Soul', color: '#7b6fa8', group: 'Soul' },
  ];

  const albums = [
    { title: 'LIKE I DO', year: 2016, color: '#c9a84c', genres: ['Pop', 'Pop R&B', 'R&B'] },
    { title: 'SOFTEST TOUCH', year: 2022, color: '#9b7fc8', genres: ['Indie / Alt Pop', 'Pop R&B', 'R&B'] },
    { title: 'PULSE', year: 2023, color: '#5a7c6a', genres: ['Pop R&B', 'R&B', 'Synth Funk', 'Nu-Disco'] },
    { title: 'ARE U STILL', year: 2024, color: '#5a7aaa', genres: ['R&B', 'Alternative R&B', 'Funk', 'Soul', 'Neo-Soul'] },
    { title: "CAN\'T LEAVE ALONE", year: 2025, color: '#c06080', genres: ['R&B', 'Contemporary R&B', 'Soul'] },
    { title: 'DECADE', year: 2026, color: '#6e5a7c', genres: ['Pop R&B', 'R&B', 'Soul', 'Neo-Soul'] },
  ];

  const kpop = [
    { year: 2016, gi: 0.3 }, { year: 2018, gi: 0.5 }, { year: 2020, gi: 0.7 },
    { year: 2022, gi: 1.0 }, { year: 2023, gi: 1.2 }, { year: 2024, gi: 1.6 },
    { year: 2025, gi: 2.0 }, { year: 2026, gi: 2.4 },
  ];
  const global = [
    { year: 2016, gi: 3.5 }, { year: 2018, gi: 4.0 }, { year: 2020, gi: 4.5 },
    { year: 2022, gi: 5.2 }, { year: 2023, gi: 8.5 }, { year: 2024, gi: 9.5 },
    { year: 2025, gi: 8.8 }, { year: 2026, gi: 7.8 },
  ];

  return { rows, albums, kpop, global, yearMin: 2016, yearMax: 2026 };
})();

const en = {
  ui: {
    label: 'Music',
    title: 'Discography',
    subtitle: '6 projects · 2016–2026 · 8.7B+ cumulative streams',
    genreMapHeading: 'Genre Map',
    genreMapDesc: "Each album's genre position within the sonic landscape · plotted against K-pop and worldwide market direction by year",
    legendLabel: 'Legend',
    kpopMarketLabel: 'K-pop market',
    worldwideMarketLabel: 'Worldwide market',
    streamsByEraHeading: 'Streams by Era',
    streamsLabel: 'streams',
    titleTrackLabel: 'title track',
    singlesHeading: 'Singles & Station Releases',
  },
  related: {
    awards: 'Awards',
    tours: 'Tours',
    timeline: 'Career Timeline',
    culturalImpact: 'Cultural Impact',
    company: 'JH Company',
  },
  albums: [
    {
      slug: 'like-i-do',
      title: 'LIKE I DO',
      subtitle: 'GONUNMA',
      type: 'Mini Album',
      era: 'SM Era',
      highlight: 'Creative blueprint · GONUNMA alter ego debut · TikTok resurgence 2023–24',
    },
    {
      slug: 'softest-touch',
      title: 'SOFTEST TOUCH',
      subtitle: '1st Mini Album',
      type: '1st Mini Album',
      era: 'SM Solo',
      highlight: 'Official songwriter-led solo identity · SM era debut',
    },
    {
      slug: 'pulse-era',
      title: 'PULSE',
      subtitle: '1st Studio Album',
      type: '1st Studio Album',
      era: 'Independent',
      highlight: 'First independent release · Global R&B breakout · SAY feat. keshi 210M+',
    },
    {
      slug: 'are-u-still',
      title: 'ARE U STILL',
      subtitle: '2nd Studio Album',
      type: '2nd Studio Album',
      era: 'Grammy Era',
      highlight: 'Grammy wins: Best Progressive R&B + Best R&B Performance · Neo-soul pivot',
    },
    {
      slug: 'sour-honey',
      title: "CAN\'T LEAVE ALONE",
      subtitle: '3rd Studio Album · CAN\'T LEAVE ALONE era',
      type: '3rd Studio Album',
      era: 'Post-Grammy',
      highlight: "CAN\'T LEAVE ALONE dual narrative · CAN\'T LEAVE ALONE feat. Pharrell Williams 260M+",
    },
    {
      slug: 'decade',
      title: 'DECADE',
      subtitle: 'Anthology',
      type: 'Anthology Album',
      era: 'Legacy',
      highlight: '10-year retrospective · Extended arrangements · 32M monthly Spotify listeners',
    },
  ],
  singles: [
    { title: "YOU AIN'T GOTTA", sub: 'SM STATION 2', year: '2018', streams: 'Spotify 55M+', note: 'R&B positioning reinforcement' },
    { title: 'CRUSH', sub: 'SM STATION 3 (solo)', year: '2019', streams: 'Spotify 260M+', note: 'Jungkook (BTS) feature added on the 2022 SOFTEST TOUCH re-release — first major international crossover' },
    { title: 'IF I KNEW', sub: 'PULSE era single', year: '2023', streams: 'Spotify 47M+', note: 'Pre-release bridge to 2nd album' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ดนตรี',
    title: 'ผลงานเพลง',
    subtitle: '6 โปรเจกต์ · 2016–2026 · สตรีมสะสม 8.7B+',
    genreMapHeading: 'แผนที่แนวเพลง',
    genreMapDesc: 'ตำแหน่งแนวเพลงของแต่ละอัลบั้มบนแผนที่ดนตรี · เทียบกับทิศทางตลาด K-pop และตลาดโลกในปีนั้นๆ',
    legendLabel: 'คำอธิบายสัญลักษณ์',
    kpopMarketLabel: 'ตลาด K-pop',
    worldwideMarketLabel: 'ตลาดโลก',
    streamsByEraHeading: 'ยอดสตรีมตามยุค',
    streamsLabel: 'สตรีม',
    titleTrackLabel: 'เพลงไตเติ้ล',
    singlesHeading: 'ซิงเกิลและเพลงจาก SM STATION',
  },
  related: {
    awards: 'รางวัล',
    tours: 'ทัวร์คอนเสิร์ต',
    timeline: 'ไทม์ไลน์อาชีพ',
    culturalImpact: 'อิทธิพลเชิงวัฒนธรรม',
    company: 'JH Company',
  },
  albums: [
    {
      slug: 'like-i-do',
      title: 'LIKE I DO',
      subtitle: 'GONUNMA',
      type: 'มินิอัลบั้ม',
      era: 'ยุค SM',
      highlight: 'พิมพ์เขียวความคิดสร้างสรรค์ · เปิดตัวตัวตนอีกด้าน GONUNMA · กระแสฟื้นคืนชีพบน TikTok ปี 2023–24',
    },
    {
      slug: 'softest-touch',
      title: 'SOFTEST TOUCH',
      subtitle: 'มินิอัลบั้มที่ 1',
      type: 'มินิอัลบั้มที่ 1',
      era: 'เดี่ยวยุค SM',
      highlight: 'ตัวตนเดี่ยวที่นำโดยการแต่งเพลงอย่างเป็นทางการ · เดบิวต์เดี่ยวในยุค SM',
    },
    {
      slug: 'pulse-era',
      title: 'PULSE',
      subtitle: 'สตูดิโออัลบั้มที่ 1',
      type: 'สตูดิโออัลบั้มที่ 1',
      era: 'อิสระ',
      highlight: 'ผลงานอิสระชิ้นแรก · แจ้งเกิดในตลาด R&B ระดับโลก · SAY feat. keshi ทะลุ 210M+',
    },
    {
      slug: 'are-u-still',
      title: 'ARE U STILL',
      subtitle: 'สตูดิโออัลบั้มที่ 2',
      type: 'สตูดิโออัลบั้มที่ 2',
      era: 'ยุคแกรมมี่',
      highlight: 'คว้า Grammy สาขา Best Progressive R&B และ Best R&B Performance · หันทิศทางไปหา neo-soul',
    },
    {
      slug: 'sour-honey',
      title: "CAN\'T LEAVE ALONE",
      subtitle: 'สตูดิโออัลบั้มที่ 3 · ยุค CAN\'T LEAVE ALONE',
      type: 'สตูดิโออัลบั้มที่ 3',
      era: 'หลังแกรมมี่',
      highlight: "เรื่องราวคู่ขนาน CAN\'T LEAVE ALONE · CAN\'T LEAVE ALONE feat. Pharrell Williams ทะลุ 260M+",
    },
    {
      slug: 'decade',
      title: 'DECADE',
      subtitle: 'รวมผลงาน',
      type: 'อัลบั้มรวมผลงาน',
      era: 'มรดก',
      highlight: 'ย้อนมองผลงาน 10 ปี · เรียบเรียงเสียงประสานฉบับขยาย · ผู้ฟัง Spotify รายเดือน 32M',
    },
  ],
  singles: [
    { title: "YOU AIN'T GOTTA", sub: 'SM STATION 2', year: '2018', streams: 'Spotify 55M+', note: 'ตอกย้ำจุดยืนแนว R&B' },
    { title: 'CRUSH', sub: 'SM STATION 3 (เดี่ยว)', year: '2019', streams: 'Spotify 260M+', note: 'เพิ่ม Jungkook จาก BTS มาร้องรับเชิญในเวอร์ชันที่ปล่อยใหม่บน SOFTEST TOUCH ปี 2022 เป็นการก้าวสู่ตลาดสากลครั้งใหญ่ครั้งแรก' },
    { title: 'IF I KNEW', sub: 'ซิงเกิลจากยุค PULSE', year: '2023', streams: 'Spotify 47M+', note: 'เพลงเชื่อมก่อนอัลบั้มที่ 2' },
  ],
};

export const discographyIndex = { en, th };
export function getDiscographyIndex(lang: Lang) {
  return discographyIndex[lang];
}
