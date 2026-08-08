// Bilingual content for the DECADE Tour page.
// Shape: { en, th } with identical keys.
// Non-translatable values (dates, hex colors, numeric metrics, city/venue
// names, gross figures, setlist) are extracted as shared consts, aligned by
// index/key with the translated label arrays below.

import type { Lang } from '../../i18n';

// Shared — page accent color.
export const color = '#6e5a7c';

// Shared — era colors (also used by the inline setlist chart script).
export const eraColors: Record<string, string> = {
  'LIKE I DO': '#c9a84c',
  'SOFTEST TOUCH': '#9b7fc8',
  'PULSE': '#5a7c6a',
  'ARE U STILL': '#5a7aaa',
  "CAN\'T LEAVE ALONE": '#c06080',
  'DECADE': '#6e5a7c',
};

// Shared — tour leg / show dates (cities, countries, venues, nights).
export const legs = [
  {
    name: 'Leg 1 — Asia',
    period: 'January 22 – February 5, 2027',
    shows: [
      { date: 'Jan 22–24', city: 'Seoul', country: 'South Korea', venue: 'KSPO Dome', nights: 3 },
      { date: 'Jan 27–28', city: 'Singapore', country: 'Singapore', venue: 'Singapore Indoor Stadium', nights: 2 },
      { date: 'Jan 31 – Feb 1', city: 'Tokyo', country: 'Japan', venue: 'Tokyo Dome', nights: 2 },
      { date: 'Feb 3', city: 'Osaka', country: 'Japan', venue: 'Kyocera Dome', nights: 1 },
      { date: 'Feb 4–5', city: 'Jakarta', country: 'Indonesia', venue: 'Indonesia Arena', nights: 2 },
    ],
  },
  {
    name: 'Leg 2 — Americas & Europe',
    period: 'February 10 – February 25, 2027',
    shows: [
      { date: 'Feb 10–11', city: 'Los Angeles', country: 'USA', venue: 'Crypto.com Arena', nights: 2 },
      { date: 'Feb 14–15', city: 'New York', country: 'USA', venue: 'Madison Square Garden', nights: 2 },
      { date: 'Feb 19', city: 'Paris', country: 'France', venue: 'Accor Arena', nights: 1 },
      { date: 'Feb 21', city: 'London', country: 'England', venue: 'The O2 Arena', nights: 1 },
      { date: 'Feb 24–25', city: 'Berlin', country: 'Germany', venue: 'Mercedes-Benz Arena', nights: 2 },
    ],
  },
];

// Shared — full setlist (song titles, eras, VCR blocks).
export const setlist = [
  {
    vcr: 1, title: 'NEXT TEN', subtitle: '2026 · Mauve — the next decade, first',
    songs: [
      { n: 1, title: 'I LOVE YOUR BODY', era: 'DECADE' },
      { n: 2, title: 'ANYWHERE WITH YOU', era: 'DECADE' },
      { n: 3, title: 'PROUD', era: 'DECADE' },
      { n: 4, title: 'BABY BLUE', era: 'DECADE' },
    ],
  },
  {
    vcr: 2, title: 'BREAKAWAY', subtitle: '2022–2023 · Black & white — independence',
    songs: [
      { n: 5, title: 'HOW DOES IT FEEL?', era: 'PULSE' },
      { n: 6, title: 'ALL FOR YOU', era: 'PULSE' },
      { n: 7, title: 'SAVE ME', era: 'PULSE' },
      { n: 8, title: 'TALK TO ME', era: 'PULSE' },
      { n: 9, title: 'SAY', era: 'PULSE' },
    ],
  },
  {
    vcr: 3, title: 'ANALOG', subtitle: '2024 · Groove and soul lineage',
    songs: [
      { n: 10, title: 'TEARS ON A PRETTY FACE', era: 'ARE U STILL' },
      { n: 11, title: 'IF I KNEW', era: 'ARE U STILL' },
      { n: 12, title: 'BREATHE', era: 'ARE U STILL' },
      { n: 13, title: 'SOMEWHERE, SOMEHOW', era: 'ARE U STILL' },
    ],
  },
  {
    vcr: 4, title: 'SWEET', subtitle: '2025 · Desire',
    songs: [
      { n: 14, title: 'HONEY', era: "CAN\'T LEAVE ALONE" },
      { n: 15, title: 'SOMETHING REAL', era: "CAN\'T LEAVE ALONE" },
      { n: 16, title: 'TAKE YOU TONIGHT', era: "CAN\'T LEAVE ALONE" },
      { n: 17, title: 'COME BACK TO ME', era: "CAN\'T LEAVE ALONE" },
      { n: 18, title: "CAN\'T LEAVE ALONE", era: "CAN\'T LEAVE ALONE" },
    ],
  },
  {
    vcr: 5, title: 'SOUR', subtitle: '2025 · The cost',
    songs: [
      { n: 19, title: "HE\'S NOT ME", era: "CAN\'T LEAVE ALONE" },
      { n: 20, title: 'MYSTERY LADY', era: "CAN\'T LEAVE ALONE" },
      { n: 21, title: 'LOVE THIS PAIN AWAY', era: "CAN\'T LEAVE ALONE" },
      { n: 22, title: 'SOUR', era: "CAN\'T LEAVE ALONE" },
    ],
  },
  {
    vcr: 6, title: 'ARCHIVE', subtitle: 'Stripped — voices from the tape',
    songs: [
      { n: 23, title: "YOU AIN'T GOTTA", era: 'SOFTEST TOUCH' },
      { n: 24, title: 'CALL ME', era: 'LIKE I DO' },
      { n: 25, title: 'EVERLASTING (Solo Version)', era: 'LIKE I DO' },
    ],
  },
  {
    vcr: 7, title: 'YEAR ONE', subtitle: 'Encore · 2016–2019 · Gold — where it began',
    songs: [
      { n: 26, title: 'LIKE I DO (Solo Version)', era: 'LIKE I DO' },
      { n: 27, title: 'CRUSH (Solo Version)', era: 'SOFTEST TOUCH' },
      { n: 28, title: 'SOFTEST TOUCH', era: 'SOFTEST TOUCH' },
      { n: 29, title: 'NO RESERVATIONS', era: 'SOFTEST TOUCH' },
    ],
  },
];

// Shared — era song-count breakdown (era names are proper nouns, not translated).
export const eraBreakdown: Record<string, number> = {
  'LIKE I DO': 3, 'SOFTEST TOUCH': 4, 'PULSE': 5,
  'ARE U STILL': 4, "CAN\'T LEAVE ALONE": 9, 'DECADE': 4,
};

// Shared — KPI card values, aligned by index with ui.kpiLabels below.
export const kpiValues = ['18', '$74M', '$14M', '~$40M'];

// Shared — show-format grid values, aligned by index with ui.showFormatLabels below.
export const showFormatValues = ['29', '1h 27m', '7', '5', '2h 00m'];

const en = {
  ui: {
    eraLabel: '2nd Tour · Anthology',
    title: 'DECADE Tour',
    quote:
      "LIKE I DO, I gave it all, / A SOFTEST TOUCH, before the fall. / Feel my PULSE, it's running wild, / A DECADE lives in songs we made.",
    dateInfo: 'January 22 – February 25, 2027 · 18 shows · $74M gross',
    backLink: '← Back to Tours',
    kpiLabels: ['Total Shows', 'Ticket Gross', 'Sponsor Revenue', 'Profit Pool'],
    showFormatHeading: 'Show Format',
    anthologyFormatLabel: 'Anthology Format',
    showFormatLabels: ['Songs', 'Music', 'VCRs', 'Ments', 'Total'],
    tourDatesHeading: 'Tour Dates',
    eraBreakdownHeading: 'Era Breakdown (29 songs)',
    criticalReceptionHeading: 'Critical Reception',
    consensusLabel: 'Consensus —',
    consensusText:
      'The DECADE Tour is widely regarded as a career peak as a live performer — surpassing PULSE in both production scale and narrative ambition. The multi-era wardrobe design and the use of staging as autobiography are what critics discuss most.',
    setlistEraBreakdownLabel: 'Setlist Era Breakdown',
    setlistEraBreakdownSub: 'Era composition per VCR section',
    setlistHeading: 'Setlist',
  },
  reviews: [
    {
      outlet: 'Pitchfork',
      score: null as string | null,
      quote:
        '"The DECADE Tour answers a question no one knew they were asking: what does a career look like when you\'re generous enough to show all of it? Each era section is staged with its own palette and vocabulary, yet the show reads as a single unbroken arc. The mauve-to-gold journey isn\'t nostalgia — it\'s argument."',
      context: 'Live review, Seoul opening night · January 2027',
    },
    {
      outlet: 'Rolling Stone',
      score: null as string | null,
      quote:
        '"If PULSE was a manifesto, DECADE is a monument. The multi-era wardrobe design alone earns a feature — watching James Hwang move from deep mauve to black-and-white to gold across 29 songs is the most ambitious visual storytelling a solo tour has attempted this decade."',
      context: 'Concert review, Los Angeles · February 2027',
    },
    {
      outlet: 'NME',
      score: '★★★★★' as string | null,
      quote:
        '"DECADE is the rare retrospective tour that earns every second of its runtime. The staging doesn\'t just recall the past — it recontextualises it. Songs from the SM era hit differently when they\'re framed by everything James Hwang built after leaving. Best arena show of 2027."',
      context: 'London review · 2027',
    },
    {
      outlet: 'The New York Times',
      score: null as string | null,
      quote:
        '"James Hwang\'s DECADE Tour is the most sophisticated argument for the concert as autobiography. The production is enormous — the largest of his career — but the scale never overwhelms the material. Each section feels curated rather than assembled. This is what a decade of earned creative control looks like."',
      context: 'Arts & Leisure concert review · 2027',
    },
  ],
};

const th: typeof en = {
  ui: {
    eraLabel: 'ทัวร์ครั้งที่ 2 · Anthology',
    title: 'DECADE Tour',
    quote:
      'LIKE I DO ฉันทุ่มเทหมดใจ / SOFTEST TOUCH ก่อนที่มันจะร่วงหล่น / รู้สึกถึง PULSE ที่พุ่งทะยานไม่หยุด / DECADE มีชีวิตอยู่ในเพลงที่เราสร้างร่วมกัน',
    dateInfo: 'January 22 – February 25, 2027 · 18 โชว์ · รายได้ $74M',
    backLink: '← กลับไปหน้าทัวร์คอนเสิร์ต',
    kpiLabels: ['โชว์ทั้งหมด', 'รายได้ตั๋ว', 'รายได้สปอนเซอร์', 'กำไรสุทธิ'],
    showFormatHeading: 'รูปแบบโชว์',
    anthologyFormatLabel: 'รูปแบบ Anthology',
    showFormatLabels: ['เพลง', 'ดนตรี', 'VCRs', 'Ments', 'รวม'],
    tourDatesHeading: 'วันที่ทัวร์',
    eraBreakdownHeading: 'สัดส่วน Era (29 เพลง)',
    criticalReceptionHeading: 'เสียงวิจารณ์',
    consensusLabel: 'Consensus —',
    consensusText:
      'DECADE Tour ถูกมองว่าเป็น career peak ในฐานะ live performer — สูงกว่า PULSE ทั้งในแง่ production scale และ narrative ambition โดย multi-era wardrobe design และการใช้ staging เป็น autobiography คือจุดที่นักวิจารณ์พูดถึงมากที่สุด',
    setlistEraBreakdownLabel: 'สัดส่วน Era ใน Setlist',
    setlistEraBreakdownSub: 'สัดส่วน Era ในแต่ละ VCR',
    setlistHeading: 'Setlist',
  },
  reviews: [
    {
      outlet: 'Pitchfork',
      score: null as string | null,
      quote:
        '"The DECADE Tour answers a question no one knew they were asking: what does a career look like when you\'re generous enough to show all of it? Each era section is staged with its own palette and vocabulary, yet the show reads as a single unbroken arc. The mauve-to-gold journey isn\'t nostalgia — it\'s argument."',
      context: 'รีวิวการแสดงสด คืนเปิดทัวร์ที่ Seoul · January 2027',
    },
    {
      outlet: 'Rolling Stone',
      score: null as string | null,
      quote:
        '"If PULSE was a manifesto, DECADE is a monument. The multi-era wardrobe design alone earns a feature — watching James Hwang move from deep mauve to black-and-white to gold across 29 songs is the most ambitious visual storytelling a solo tour has attempted this decade."',
      context: 'รีวิวคอนเสิร์ต ที่ Los Angeles · February 2027',
    },
    {
      outlet: 'NME',
      score: '★★★★★' as string | null,
      quote:
        '"DECADE is the rare retrospective tour that earns every second of its runtime. The staging doesn\'t just recall the past — it recontextualises it. Songs from the SM era hit differently when they\'re framed by everything James Hwang built after leaving. Best arena show of 2027."',
      context: 'รีวิวจาก London · 2027',
    },
    {
      outlet: 'The New York Times',
      score: null as string | null,
      quote:
        '"James Hwang\'s DECADE Tour is the most sophisticated argument for the concert as autobiography. The production is enormous — the largest of his career — but the scale never overwhelms the material. Each section feels curated rather than assembled. This is what a decade of earned creative control looks like."',
      context: 'รีวิวคอนเสิร์ตในคอลัมน์ Arts & Leisure · 2027',
    },
  ],
};

export const toursDecade = { en, th };
export function getToursDecade(lang: Lang) {
  return toursDecade[lang];
}
