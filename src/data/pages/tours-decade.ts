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
  production: {
    heading: 'Production and staging',
    blocks: [
      {
        title: 'Concept origin',
        body: [
          'Where PULSE staged a feeling, DECADE stages a chronology. The premise James brought to the design team in October 2026 was that a ten-year anthology tour should be watchable as autobiography — that a person who had never heard the records should be able to follow the arc of the career from the stage alone.',
          'That produced the wardrobe system the reviews single out: each VCR chapter carries its own palette, and the show walks from the mauve of the new material through black-and-white for the independence years to the gold of the debut era in the encore. The colour tells the audience where in the decade they are without a word of explanation.',
        ],
      },
      {
        title: 'Setlist construction',
        body: [
          'The setlist was built backwards from the anthology. Its seven VCR chapters are era chapters — NEXT TEN, BREAKAWAY, ANALOG, SWEET, SOUR, ARCHIVE, YEAR ONE — and the SWEET and SOUR split reuses the duality the album\'s own ARCHIVE V interlude names.',
          'Two structural decisions were argued at length. The first was opening on the four new songs rather than a hit: standard practice would put the newest material mid-show, but the tour follows the anthology\'s logic of declaring the next chapter first. The second was the ARCHIVE chapter — three songs performed stripped, immediately before an encore of debut-era material — which exists so the show returns to the beginning rather than ending on the future.',
        ],
      },
      {
        title: 'Market and venue selection',
        body: [
          'The DECADE Tour was scoped as a limited run from the outset, and the constraint was the film slate rather than demand. James had committed to Captain EO: Resonance principal photography in March 2027 and to clearing all film work before mid-year, so the tour had a hard ceiling of six weeks.',
          'Eighteen shows across ten cities were selected on a pure demand-per-market basis using DECADE streaming and PULSE Tour ticketing data — Seoul, Singapore, Tokyo, Osaka, Jakarta, Los Angeles, New York, Paris, London, Berlin. Every date is an arena; no stadiums were routed despite the PULSE Tour having played several, because a show designed around wardrobe detail and palette does not read at stadium distance. Promotion was deliberately minimal and ticketing was demand-driven rather than campaign-driven.',
          'Routing also had to clear NEO CITY : THE REDLINE, which ran through 16/01/2027 in Macau. The Seoul opening was set for 22/01, six days later.',
        ],
      },
      {
        title: 'Rehearsal',
        body: [
          'Choreography creation ran 08/06 – 20/06/2026 at 1MILLION Dance Studio in Seongsu-dong for the new material, with Bang Hyun-woo returning from the PULSE cycle. Because the setlist spans six eras, the older material was re-taught from PULSE Tour and music show archive footage rather than re-choreographed, then adjusted to a single physical vocabulary so the show does not read as a medley of old stagings.',
          'Full production rehearsals ran 05/01 – 20/01/2027 at KSPO Dome — the longest pre-tour block of his career, driven by the wardrobe changes rather than the music. Seven chapter looks with quick-change requirements between VCRs meant the transitions were rehearsed as their own performance element.',
        ],
      },
    ],
  },
};

const th: typeof en = {
  ui: {
    eraLabel: 'ทัวร์ครั้งที่ 2 · Anthology',
    title: 'ทัวร์ DECADE',
    quote:
      'LIKE I DO ฉันทุ่มเทหมดใจ / SOFTEST TOUCH ก่อนที่มันจะร่วงหล่น / รู้สึกถึง PULSE ที่พุ่งทะยานไม่หยุด / DECADE มีชีวิตอยู่ในเพลงที่เราสร้างร่วมกัน',
    dateInfo: 'January 22 – February 25, 2027 · 18 โชว์ · รายได้ $74M',
    backLink: '← กลับไปหน้าทัวร์คอนเสิร์ต',
    kpiLabels: ['โชว์ทั้งหมด', 'รายได้ตั๋ว', 'รายได้สปอนเซอร์', 'กำไรสุทธิ'],
    showFormatHeading: 'รูปแบบโชว์',
    anthologyFormatLabel: 'รูปแบบ Anthology',
    showFormatLabels: ['เพลง', 'ดนตรี', 'VCRs', 'Ments', 'รวม'],
    tourDatesHeading: 'วันที่ทัวร์',
    eraBreakdownHeading: 'สัดส่วนแต่ละยุค (29 เพลง)',
    criticalReceptionHeading: 'เสียงวิจารณ์',
    consensusLabel: 'ความเห็นร่วม —',
    consensusText:
      'DECADE Tour ถูกมองว่าเป็นจุดสูงสุดของเขาในฐานะนักแสดงสด เพราะใหญ่กว่า PULSE ทั้งขนาดงานโปรดักชันและความทะเยอทะยานในการเล่าเรื่อง จุดที่นักวิจารณ์พูดถึงมากที่สุดคือการออกแบบเสื้อผ้าแยกตามยุค และการใช้เวทีเล่าอัตชีวประวัติ',
    setlistEraBreakdownLabel: 'สัดส่วน Era ใน Setlist',
    setlistEraBreakdownSub: 'สัดส่วน Era ในแต่ละ VCR',
    setlistHeading: 'เซ็ตลิสต์',
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
  production: {
    heading: 'Production and staging',
    blocks: [
      {
        title: 'ที่มาของคอนเซปต์',
        body: [
          'ถ้า PULSE จัดแสดงความรู้สึก DECADE จัดแสดงลำดับเวลา โจทย์ที่ James เอาไปให้ทีมออกแบบเมื่อตุลาคม 2026 คือทัวร์รวมผลงานสิบปีควรดูได้แบบเป็นอัตชีวประวัติ — คนที่ไม่เคยฟังอัลบั้มไหนเลยควรตามเส้นทางอาชีพได้จากเวทีอย่างเดียว',
          'จากโจทย์นั้นจึงเกิดระบบเครื่องแต่งกายที่รีวิวพูดถึง — แต่ละบทของ VCR มีชุดสีของตัวเอง และโชว์เดินจากสีม่วง mauve ของงานใหม่ ผ่านขาวดำของยุคเป็นอิสระ ไปจบที่สีทองของยุคเดบิวต์ในช่วง encore สีบอกคนดูว่าตอนนี้อยู่ตรงไหนของทศวรรษโดยไม่ต้องอธิบายสักคำ',
        ],
      },
      {
        title: 'การประกอบเซ็ตลิสต์',
        body: [
          'เซ็ตลิสต์ถูกสร้างย้อนกลับจากตัวอัลบั้มรวม บททั้งเจ็ดของ VCR คือบทที่แบ่งตามยุค — NEXT TEN, BREAKAWAY, ANALOG, SWEET, SOUR, ARCHIVE, YEAR ONE — และการแยก SWEET กับ SOUR ก็หยิบความเป็นสองด้านที่ interlude ARCHIVE V ของอัลบั้มตั้งชื่อไว้มาใช้ซ้ำ',
          'มีสองการตัดสินใจเชิงโครงสร้างที่ถกกันยาว ข้อแรกคือการเปิดด้วยเพลงใหม่สี่เพลงแทนเพลงฮิต — ตำราปกติจะวางงานใหม่สุดไว้กลางโชว์ แต่ทัวร์นี้เดินตามตรรกะของอัลบั้มรวมที่ประกาศบทถัดไปก่อน ข้อที่สองคือบท ARCHIVE — สามเพลงเล่นแบบ stripped ก่อนเข้า encore ที่เป็นงานยุคเดบิวต์ — ซึ่งมีอยู่เพื่อให้โชว์ย้อนกลับไปจุดเริ่มต้น แทนที่จะจบที่อนาคต',
        ],
      },
      {
        title: 'การเลือกตลาดและสถานที่',
        body: [
          'DECADE Tour ถูกวางให้เป็นทัวร์รอบจำกัดตั้งแต่ต้น และข้อจำกัดมาจากคิวถ่ายหนัง ไม่ใช่จากดีมานด์ James รับปากถ่าย Captain EO: Resonance ในเดือนมีนาคม 2027 และรับปากปิดงานหนังทั้งหมดก่อนกลางปี ทัวร์จึงมีเพดานตายตัวที่หกสัปดาห์',
          'สิบแปดโชว์ในสิบเมืองถูกเลือกจากดีมานด์รายตลาดล้วน ๆ โดยใช้ข้อมูลสตรีมของ DECADE กับข้อมูลการขายตั๋วของ PULSE Tour — โซล สิงคโปร์ โตเกียว โอซากา จาการ์ตา ลอสแอนเจลิส นิวยอร์ก ปารีส ลอนดอน เบอร์ลิน ทุกงานเป็นอารีนา ไม่มีสนามกีฬาเลยแม้ PULSE Tour จะเคยเล่นหลายแห่ง เพราะโชว์ที่ออกแบบรอบรายละเอียดเครื่องแต่งกายและจานสีอ่านไม่ออกในระยะสนามกีฬา การโปรโมตถูกทำให้น้อยอย่างตั้งใจ และการขายตั๋วขับด้วยดีมานด์ ไม่ใช่ขับด้วยแคมเปญ',
          'เส้นทางยังต้องเลี่ยง NEO CITY : THE REDLINE ที่เดินถึง 16/01/2027 ที่มาเก๊า คืนเปิดที่โซลจึงถูกตั้งไว้วันที่ 22/01 หลังจากนั้นหกวัน',
        ],
      },
      {
        title: 'การซ้อม',
        body: [
          'การสร้างท่าเต้นสำหรับงานใหม่เดินช่วง 08/06 – 20/06/2026 ที่ 1MILLION Dance Studio ซองซูดง โดย Bang Hyun-woo กลับมาจากรอบ PULSE เพราะเซ็ตลิสต์พาดผ่านหกยุค งานเก่าจึงถูกสอนใหม่จากฟุตเทจในคลังของ PULSE Tour และรายการเพลง แทนที่จะทำท่าใหม่ แล้วปรับให้อยู่ในภาษากายชุดเดียว เพื่อไม่ให้โชว์อ่านออกมาเป็นเมดเลย์ของการจัดเวทีเก่า ๆ',
          'การซ้อมโปรดักชันเต็มรูปแบบเดินช่วง 05/01 – 20/01/2027 ที่ KSPO Dome — เป็นบล็อกซ้อมก่อนทัวร์ที่ยาวที่สุดในอาชีพเขา โดยตัวขับคือการเปลี่ยนเครื่องแต่งกาย ไม่ใช่ดนตรี ลุคเจ็ดบทที่ต้องเปลี่ยนเร็วระหว่าง VCR ทำให้ช่วงเปลี่ยนผ่านถูกซ้อมในฐานะองค์ประกอบการแสดงของตัวเอง',
        ],
      },
    ],
  },
};

export const toursDecade = { en, th };
export function getToursDecade(lang: Lang) {
  return toursDecade[lang];
}
