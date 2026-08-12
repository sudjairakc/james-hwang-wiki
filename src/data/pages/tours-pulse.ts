// Bilingual content for the PULSE World Tour page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Non-translatable values (era-color hex, tour dates, venues, cities, show
// counts, gross figures, song/act titles, setlist structure) are extracted
// as shared consts, keyed/ordered to match the translated arrays below.

import type { Lang } from '../../i18n';

// Era colors — shared, referenced by markup (not language-specific).
export const eraColors: Record<string, string> = {
  'LIKE I DO': '#c9a84c',
  'SOFTEST TOUCH': '#9b7fc8',
  'PULSE': '#5a7c6a',
  'ARE U STILL': '#5a7aaa',
  "CAN\'T LEAVE ALONE": '#c06080',
};

// Show format — numeric/time values, aligned by index with `formatVersions` below.
export const formats = [
  { songs: 23, runtime: '1h 09m', vcrs: 6, ments: 5, total: '1h 42m' },
  { songs: 33, runtime: '1h 41m', vcrs: 8, ments: 7, total: '2h 26m' },
];

// Tour dates — cities, countries, venues, dates are proper nouns/structural values.
export const legs = [
  {
    name: 'Leg 1 — East Asia',
    period: 'July 28 – October 29, 2023',
    shows: [
      { date: 'Jul 28–30', city: 'Seoul', country: 'South Korea', venue: 'Gocheok Sky Dome', nights: 3 },
      { date: 'Aug 5', city: 'Fukuoka', country: 'Japan', venue: 'Marine Messe Fukuoka', nights: 1 },
      { date: 'Aug 12–13', city: 'Osaka', country: 'Japan', venue: 'Osaka Dome', nights: 2 },
      { date: 'Aug 19', city: 'Nagoya', country: 'Japan', venue: 'Vantelin Dome Nagoya', nights: 1 },
      { date: 'Aug 26', city: 'Shizuoka', country: 'Japan', venue: 'Ecopa Arena', nights: 1 },
      { date: 'Sep 2', city: 'Saitama', country: 'Japan', venue: 'Saitama Super Arena', nights: 1 },
      { date: 'Sep 9', city: 'Yokohama', country: 'Japan', venue: 'Yokohama Arena', nights: 1 },
      { date: 'Sep 16–17', city: 'Tokyo', country: 'Japan', venue: 'Tokyo Dome', nights: 2 },
      { date: 'Sep 23', city: 'Miyagi', country: 'Japan', venue: 'Sekisui Heim Super Arena', nights: 1 },
      { date: 'Oct 1', city: 'Beijing', country: 'China', venue: 'Cadillac Arena', nights: 1 },
      { date: 'Oct 7–8', city: 'Hong Kong', country: 'Hong Kong', venue: 'AsiaWorld-Arena', nights: 2 },
      { date: 'Oct 14–15', city: 'Shanghai', country: 'China', venue: 'Mercedes-Benz Arena', nights: 2 },
      { date: 'Oct 21', city: 'Macau', country: 'Macau', venue: 'Cotai Arena', nights: 1 },
      { date: 'Oct 27', city: 'Taoyuan', country: 'Taiwan', venue: 'Taoyuan International Baseball Stadium', nights: 1 },
      { date: 'Oct 29', city: 'Taipei', country: 'Taiwan', venue: 'Taipei Arena', nights: 1 },
    ],
  },
  {
    name: 'Leg 2 — Southeast Asia, Oceania & Middle East',
    period: 'January 13 – March 16, 2024',
    shows: [
      { date: 'Jan 13', city: 'Kuala Lumpur', country: 'Malaysia', venue: 'Bukit Jalil National Stadium', nights: 1 },
      { date: 'Jan 18–21', city: 'Bangkok', country: 'Thailand', venue: 'Impact Arena', nights: 4 },
      { date: 'Jan 27–28', city: 'Jakarta', country: 'Indonesia', venue: 'Gelora Bung Karno Stadium', nights: 2 },
      { date: 'Feb 3–4', city: 'Pasay', country: 'Philippines', venue: 'SM Mall of Asia Arena', nights: 2 },
      { date: 'Feb 17–18', city: 'Auckland', country: 'New Zealand', venue: 'Spark Arena', nights: 2 },
      { date: 'Feb 24–25', city: 'Sydney', country: 'Australia', venue: 'Qudos Bank Arena', nights: 2 },
      { date: 'Mar 2', city: 'Hanoi', country: 'Vietnam', venue: 'Mỹ Đình National Stadium', nights: 1 },
      { date: 'Mar 9', city: 'Riyadh', country: 'Saudi Arabia', venue: 'King Fahd International Stadium', nights: 1 },
      { date: 'Mar 16', city: 'Abu Dhabi', country: 'UAE', venue: 'Etihad Park', nights: 1 },
    ],
  },
  {
    name: 'Leg 3 — Americas',
    period: 'March 18 – May 14, 2024',
    shows: [
      { date: 'Mar 18', city: 'Oakland', country: 'USA', venue: 'Oakland Arena', nights: 1 },
      { date: 'Mar 21–22', city: 'Los Angeles', country: 'USA', venue: 'Crypto.com Arena', nights: 2 },
      { date: 'Mar 25–26', city: 'Las Vegas', country: 'USA', venue: 'T-Mobile Arena', nights: 2 },
      { date: 'Mar 29', city: 'Denver', country: 'USA', venue: 'Ball Arena', nights: 1 },
      { date: 'Apr 1', city: 'Dallas', country: 'USA', venue: 'American Airlines Center', nights: 1 },
      { date: 'Apr 3', city: 'Houston', country: 'USA', venue: 'Toyota Center', nights: 1 },
      { date: 'Apr 6–7', city: 'Chicago', country: 'USA', venue: 'United Center', nights: 2 },
      { date: 'Apr 10', city: 'Atlanta', country: 'USA', venue: 'State Farm Arena', nights: 1 },
      { date: 'Apr 18', city: 'Miami', country: 'USA', venue: 'Kaseya Center', nights: 1 },
      { date: 'Apr 21', city: 'Washington D.C.', country: 'USA', venue: 'Capital One Arena', nights: 1 },
      { date: 'Apr 24', city: 'Boston', country: 'USA', venue: 'TD Garden', nights: 1 },
      { date: 'Apr 27–28', city: 'New York City', country: 'USA', venue: 'Madison Square Garden', nights: 2 },
      { date: 'May 1–2', city: 'Toronto', country: 'Canada', venue: 'Scotiabank Arena', nights: 2 },
      { date: 'May 5', city: 'Vancouver', country: 'Canada', venue: 'Rogers Arena', nights: 1 },
      { date: 'May 8', city: 'São Paulo', country: 'Brazil', venue: 'Estádio do Morumbi', nights: 1 },
      { date: 'May 11', city: 'Santiago', country: 'Chile', venue: 'Estadio Nacional de Chile', nights: 1 },
      { date: 'May 14', city: 'Mexico City', country: 'Mexico', venue: 'Foro Sol', nights: 1 },
    ],
  },
  {
    name: 'Leg 4 — Europe',
    period: 'May 18 – May 30, 2024',
    shows: [
      { date: 'May 18', city: 'Barcelona', country: 'Spain', venue: 'Palau Sant Jordi', nights: 1 },
      { date: 'May 21', city: 'London', country: 'England', venue: 'The O2 Arena', nights: 1 },
      { date: 'May 24', city: 'Berlin', country: 'Germany', venue: 'Mercedes-Benz Arena', nights: 1 },
      { date: 'May 27', city: 'Paris', country: 'France', venue: 'Accor Arena', nights: 1 },
      { date: 'May 30', city: 'Bologna', country: 'Italy', venue: 'Unipol Arena', nights: 1 },
    ],
  },
];

// Setlist structure — leg identifier, act tags/titles, song titles/eras/notes
// are all structural/proper-noun values kept identical across languages.
// Localized leg description + act subtitle prose lives in `setlistText` below,
// aligned by index (leg index → act index).
export const setlistData = [
  {
    leg: 'Leg 1 (2023)',
    acts: [
      {
        tag: 'ACT 1', short: 'A1', title: 'IGNITION ⚡',
        songs: [
          { n: 1, title: 'HOW DOES IT FEEL?', era: 'PULSE' },
          { n: 2, title: 'CRUSH', era: 'SOFTEST TOUCH' },
          { n: 3, title: 'ALL FOR YOU', era: 'PULSE' },
        ],
      },
      {
        tag: 'ACT 2', short: 'A2', title: 'PULL ✦',
        songs: [
          { n: 4, title: 'LIKE I DO', era: 'LIKE I DO' },
          { n: 5, title: 'SOFTEST TOUCH', era: 'SOFTEST TOUCH' },
          { n: 6, title: 'TALK TO ME', era: 'PULSE' },
          { n: 7, title: 'YOU KNOW', era: 'LIKE I DO' },
        ],
      },
      {
        tag: 'ACT 3', short: 'A3', title: 'TENDER 🤍',
        songs: [
          { n: 8, title: 'CHEEKY', era: 'PULSE' },
          { n: 9, title: "YOU AIN'T GOTTA", era: 'SOFTEST TOUCH' },
          { n: 10, title: 'OVERSIZED JACKET', era: 'SOFTEST TOUCH' },
          { n: 11, title: 'IF', era: 'PULSE' },
        ],
      },
      {
        tag: 'ACT 4', short: 'A4', title: 'DRIFT 🌊',
        songs: [
          { n: 12, title: 'BESTFRIEND', era: 'LIKE I DO' },
          { n: 13, title: 'AWKWARD MAYBE', era: 'PULSE' },
          { n: 14, title: 'SAVE ME', era: 'PULSE' },
          { n: 15, title: 'CAN YOU LOVE ME TONIGHT?', era: 'LIKE I DO' },
          { n: 16, title: 'CALL ME', era: 'LIKE I DO' },
        ],
      },
      {
        tag: 'ACT 5', short: 'A5', title: 'LIVE SET 🎸',
        songs: [
          { n: 17, title: 'RIGHT ABOUT LOVE', era: 'SOFTEST TOUCH', note: 'Live Band' },
          { n: 18, title: 'IDK WHAT YOU DO', era: 'SOFTEST TOUCH' },
        ],
      },
      {
        tag: 'BEFORE ENCORE', short: 'BE', title: 'IF I KNEW 🌙',
        songs: [
          { n: 19, title: 'SAY', era: 'PULSE' },
          { n: 20, title: 'IF I KNEW', era: 'ARE U STILL', note: 'pre-release' },
        ],
      },
      {
        tag: 'ENCORE', short: 'EN', title: 'AFTERGLOW ✨',
        songs: [
          { n: 21, title: 'EVERLASTING', era: 'LIKE I DO' },
          { n: 22, title: 'NO RESERVATIONS', era: 'SOFTEST TOUCH', note: 'Live band jam' },
          { n: 23, title: 'OUTRO: GIRLFRIEND', era: 'PULSE', note: 'Instrumental fade out' },
        ],
      },
    ],
  },
  {
    leg: 'Leg 2 (2024)',
    acts: [
      {
        tag: 'ACT 1', short: 'A1', title: 'IGNITION ⚡',
        songs: [
          { n: 1, title: 'HOW DOES IT FEEL?', era: 'PULSE' },
          { n: 2, title: 'CRUSH', era: 'SOFTEST TOUCH' },
          { n: 3, title: 'TALK TO ME', era: 'PULSE' },
          { n: 4, title: 'YOU KNOW', era: 'LIKE I DO' },
        ],
      },
      {
        tag: 'ACT 2', short: 'A2', title: 'STEADY GROOVE 🎷',
        songs: [
          { n: 5, title: 'TEARS ON A PRETTY FACE', era: 'ARE U STILL' },
          { n: 6, title: "ANOTHER MAN'S LIFE", era: 'ARE U STILL' },
          { n: 7, title: 'SLEEPWALKING', era: 'ARE U STILL' },
          { n: 8, title: 'ALL FOR YOU', era: 'PULSE' },
          { n: 9, title: 'SOFTEST TOUCH', era: 'SOFTEST TOUCH' },
        ],
      },
      {
        tag: 'ACT 3', short: 'A3', title: 'FLUTTER 💓',
        songs: [
          { n: 10, title: 'CHEEKY', era: 'PULSE' },
          { n: 11, title: 'LIKE I DO', era: 'LIKE I DO' },
          { n: 12, title: 'BESTFRIEND', era: 'LIKE I DO' },
          { n: 13, title: 'IF', era: 'PULSE' },
          { n: 14, title: 'IDK WHAT YOU DO', era: 'SOFTEST TOUCH' },
        ],
      },
      {
        tag: 'ACT 4', short: 'A4', title: 'SELFISH DROP 🖤',
        songs: [
          { n: 15, title: 'PURPOSE', era: 'ARE U STILL' },
          { n: 16, title: 'OUT HERE', era: 'ARE U STILL' },
          { n: 17, title: 'SELFISH', era: 'ARE U STILL', note: 'SURPRISE DROP' },
        ],
      },
      {
        tag: 'ACT 5', short: 'A5', title: 'REVIVE 🫀',
        songs: [
          { n: 18, title: 'CALL ME', era: 'LIKE I DO' },
          { n: 19, title: 'CAN YOU LOVE ME TONIGHT?', era: 'LIKE I DO', note: 'Stripped' },
          { n: 20, title: 'ORDINARY FEELINGS', era: 'ARE U STILL' },
          { n: 21, title: 'JUST A DREAM', era: 'ARE U STILL' },
          { n: 22, title: 'BREATHE!', era: 'ARE U STILL' },
          { n: 23, title: "YOU AIN'T GOTTA", era: 'SOFTEST TOUCH' },
          { n: 24, title: 'OVERSIZED JACKET', era: 'SOFTEST TOUCH' },
        ],
      },
      {
        tag: 'ACT 6', short: 'A6', title: 'ADRENALINE 🔥',
        songs: [
          { n: 25, title: 'AWKWARD MAYBE', era: 'PULSE' },
          { n: 26, title: 'SAVE ME', era: 'PULSE' },
          { n: 27, title: 'SOMEWHERE SOMEHOW', era: 'ARE U STILL' },
          { n: 28, title: 'RIGHT ABOUT LOVE', era: 'SOFTEST TOUCH', note: 'Live Band' },
        ],
      },
      {
        tag: 'BEFORE ENCORE', short: 'BE', title: 'IF I KNEW 🌙',
        songs: [
          { n: 29, title: 'SAY', era: 'PULSE' },
          { n: 30, title: 'IF I KNEW', era: 'ARE U STILL' },
        ],
      },
      {
        tag: 'ENCORE', short: 'EN', title: 'AFTERGLOW ✨',
        songs: [
          { n: 31, title: 'EVERLASTING', era: 'LIKE I DO' },
          { n: 32, title: 'NO RESERVATIONS', era: 'SOFTEST TOUCH', note: 'Live band jam' },
          { n: 33, title: 'OUTRO: GIRLFRIEND', era: 'PULSE', note: 'Instrumental fade out' },
        ],
      },
    ],
  },
];

// Critical reception — outlet/score/quote are direct citations from
// English-language publications, kept verbatim in both languages.
export const reviews = [
  { outlet: 'Pitchfork', score: null as string | null, quote: '"The PULSE Tour is a masterclass in restraint — James Hwang strips the live R&B show down to its structural bones and lets the performance fill every inch of the space. The black-and-white staging isn\'t minimalism for its own sake; it\'s a frame that makes the body unmissable. Best live show of 2023."' },
  { outlet: 'Rolling Stone', score: null as string | null, quote: '"Few artists at this stage of a career — second year of independence, first world tour — arrive with this level of visual and musical coherence. The PULSE Tour feels like the work of someone who\'s been planning this show for a decade, because they have."' },
  { outlet: 'The Guardian', score: '★★★★★', quote: '"James Hwang\'s O2 show is the most fully realized live R&B experience to come out of the K-adjacent world. The dance crew is used architecturally rather than decoratively; the sound design is immaculate; and Hwang himself commands the stage with a physicality that\'s closer to contemporary dance than pop performance."' },
  { outlet: 'Billboard', score: null as string | null, quote: '"PULSE 2024\'s SNL moment was the cultural crossover event of the year. The April MSG nights cemented Hwang as a stadium artist in the American market — not K-adjacent, just arena-scale. The tour gross of $235M across 64 shows is the story, but the critical consensus is just as unanimous."' },
  { outlet: 'Consequence of Sound', score: 'A', quote: '"The second version of the setlist — 33 songs, 2h 26m — should not work. It does. Every act has purpose; the VCR transitions earn their runtime; and the encore feels like genuine emotional resolution rather than obligation. PULSE is the benchmark for what a K-adjacent world tour can be."' },
];

const en = {
  ui: {
    title: 'PULSE World Tour',
    badgeLabel: '1st World Tour',
    backLabel: '← Back to Tours',
    quote: '"LIKE I DO, you feel the fire, / SOFTEST TOUCH, my heart\'s desire. / Let your PULSE rise, come fly with me."',
    datesLine: 'July 2023 – May 2024 · 64 shows · $235M gross',
    statTotalShows: 'Total Shows',
    statTicketGross: 'Ticket Gross',
    statSponsorRevenue: 'Sponsor Revenue',
    statProfitPool: 'Profit Pool',
    formatHeading: 'Show Format',
    statSongs: 'Songs',
    statMusic: 'Music',
    statVcrs: 'VCRs',
    statMents: 'Ments',
    statTotal: 'Total',
    tourDatesHeading: 'Tour Dates',
    setlistEraLabel: 'Setlist Era Breakdown',
    setlistEraSubtitle: 'Era composition per Act · Leg 2 (2024, 33 songs)',
    criticalReceptionHeading: 'Critical Reception',
    consensusLabel: 'Consensus —',
    consensusText:
      'The PULSE Tour is unanimously hailed as the best live K-adjacent show of 2023–2024. The points critics return to most: stage visual identity, physical performance quality, and setlist coherence across both versions.',
    setlistHeading: 'Setlist (Official)',
  },
  formatVersions: ['2023 Version', '2024 Version'],
  reviewContexts: [
    'Live review, Seoul night 1 · July 2023',
    'Concert review, Madison Square Garden · April 2024',
    'London O2 Arena review · May 2024',
    'Year-end live music wrap · December 2024',
    'PULSE 2024 World Tour review · April 2024',
  ],
  setlistText: [
    {
      desc: '23 songs + GIRLFRIEND (outro) · 5 Acts + Before Encore + Encore · Songs from PULSE, SOFTEST TOUCH, LIKE I DO + IF I KNEW (pre-release)',
      actSubtitles: [
        'A full-confidence opener — an artist who knows exactly who he is',
        'Pulling the audience in close — love without an answer yet',
        'The softest stretch of the show — love found in simplicity',
        'A fading pulse — relationships that are complicated and painful',
        'Full live band — right before the climax',
        'A hard cut to total blackout after this song',
        'Encore — emotional resolution',
      ],
    },
    {
      desc: '33 songs + GIRLFRIEND (outro) · 6 Acts + Before Encore + Encore · Every album (ARE U STILL released Jan 8, 2024)',
      actSubtitles: [
        'A full-confidence opener again — but fiercer this time than Leg 1',
        'A steady but powerful pulse — showing off real R&B',
        'A racing heartbeat — the cute, flirty stretch',
        "Already grooving... then the lyrics slowly hit — ending in a long silence, no words",
        'Resuscitation — slowly reviving with the live band',
        'Pulse surging toward the climax',
        'A hard cut to total blackout — the crowd shouting for an encore',
        'Encore — emotional resolution',
      ],
    },
  ],
  production: {
    heading: 'Production and staging',
    blocks: [
      {
        title: 'Concept origin',
        body: [
          'The tour title came before the album did. James has said the word PULSE was on the whiteboard of the Hannam-dong apartment through most of 2022 — a heartbeat as the smallest unit of a live show, and the thing an audience and a performer share involuntarily in a room. Every act on the setlist is named from that vocabulary: IGNITION, PULL, TENDER, DRIFT, and on the 2024 legs FLUTTER, SELFISH DROP, REVIVE, ADRENALINE, closing on AFTERGLOW.',
          'The staging followed the same logic. Black-and-white only, no era colour, no video wall imagery beyond the VCR transitions — a deliberate refusal of the multi-screen K-pop tour format. The dance crew was blocked architecturally rather than decoratively, used to build shapes around the performer instead of mirroring him.',
        ],
      },
      {
        title: 'Setlist construction',
        body: [
          'The setlist existed before the album was finished. During the February to May 2023 restructuring, James drafted a hypothetical 20-song running order and cut the album to feed it — which is why PULSE carries two title tracks and why the album order and the Leg 1 setlist share their opening.',
          'Leg 1 ran 23 songs drawn from PULSE, SOFTEST TOUCH and LIKE I DO, plus IF I KNEW as a pre-release. ARE U STILL landed on 08/01/2024, five days before the Leg 2 opener in Kuala Lumpur, and the setlist was rebuilt to 33 songs across a single ten-day rehearsal block. SELFISH was held out of the announced running order entirely and dropped live as an unannounced act — the only song on either leg that was never on a printed setlist.',
        ],
      },
      {
        title: 'Market and venue selection',
        body: [
          'Routing was decided on financing, not on prestige. James was an unproven solo touring artist three months out of a public contract dispute, and no Western promoter would underwrite a first leg. East Asia was the only market with a demonstrable base, so Leg 1 was routed entirely through Korea, Japan, China and Taiwan with Dream Maker as promoter, and its receipts financed the guarantees for everything that followed.',
          'Leg 2 through Leg 4 moved to Live Nation for the Americas and Europe and AEG for selected Asian and Middle Eastern dates. Venue scale was set per market rather than uniformly — stadium in Kuala Lumpur, Jakarta, Hanoi and São Paulo where the base supported it, arena everywhere else. Bangkok was given four nights, the longest single-city run of the tour, and remains the only market where he played four.',
        ],
      },
      {
        title: 'Rehearsal',
        body: [
          'Choreography creation ran 26/06 – 05/07/2023 at 1MILLION Dance Studio in Seongsu-dong, with Bang Hyun-woo leading, then moved to the eight-dancer performance unit at CJ Rehearsal Studio in Sangam-dong from 06/07.',
          'Band rehearsals ran in parallel at Vibe Studio in Cheongdam-dong through early July. Full production rehearsals — staging, lighting, VCR timing and playback — occupied Gocheok Sky Dome for six days from 21/07/2023, immediately after the album release and directly before the opening night in the same building on 28/07.',
          'The Leg 2 rebuild was compressed into 02/01 – 11/01/2024 at CJ Rehearsal Studio, running alongside the ARE U STILL promotion cycle in the same complex.',
        ],
      },
    ],
  },
};

const th: typeof en = {
  ui: {
    title: 'PULSE World Tour',
    badgeLabel: 'ทัวร์โลกครั้งที่ 1',
    backLabel: '← กลับไปหน้าทัวร์คอนเสิร์ต',
    quote: '"LIKE I DO เธอรู้สึกถึงไฟ, / SOFTEST TOUCH คือสิ่งที่หัวใจฉันปรารถนา. / ปล่อยให้ PULSE ในตัวคุณพุ่งขึ้น มาบินไปกับฉัน."',
    datesLine: 'July 2023 – May 2024 · 64 โชว์ · รายได้รวม $235M',
    statTotalShows: 'โชว์ทั้งหมด',
    statTicketGross: 'รายได้บัตร',
    statSponsorRevenue: 'รายได้สปอนเซอร์',
    statProfitPool: 'กำไรสุทธิ',
    formatHeading: 'รูปแบบการแสดง',
    statSongs: 'เพลง',
    statMusic: 'ดนตรี',
    statVcrs: 'VCRs',
    statMents: 'Ments',
    statTotal: 'รวม',
    tourDatesHeading: 'วันที่ทัวร์',
    setlistEraLabel: 'สัดส่วน Era ใน Setlist',
    setlistEraSubtitle: 'สัดส่วน Era ต่อ Act · เลก 2 (2024, 33 เพลง)',
    criticalReceptionHeading: 'เสียงวิจารณ์',
    consensusLabel: 'Consensus —',
    consensusText:
      'PULSE Tour ได้รับการยกย่องเป็นเอกฉันท์ว่าเป็น best live K-adjacent show ของปี 2023–2024 จุดที่นักวิจารณ์พูดถึงมากที่สุด: stage visual identity, physical performance quality, และ setlist coherence ทั้งสอง version',
    setlistHeading: 'Setlist (ทางการ)',
  },
  formatVersions: ['เวอร์ชัน 2023', 'เวอร์ชัน 2024'],
  reviewContexts: [
    'บทวิจารณ์การแสดงสด โซล คืนที่ 1 · July 2023',
    'บทวิจารณ์คอนเสิร์ต Madison Square Garden · April 2024',
    'บทวิจารณ์ O2 Arena ลอนดอน · May 2024',
    'สรุปวงการดนตรีสดส่งท้ายปี · December 2024',
    'บทวิจารณ์ PULSE 2024 World Tour · April 2024',
  ],
  setlistText: [
    {
      desc: '23 เพลง + GIRLFRIEND (outro) · 5 Act + Before Encore + Encore · เพลงจาก PULSE, SOFTEST TOUCH, LIKE I DO + IF I KNEW (pre-release)',
      actSubtitles: [
        'เปิดด้วย confidence เต็มๆ — ศิลปินที่รู้ว่าตัวเองคือใคร',
        'ดึงคนดูเข้ามาใกล้ — ความรักที่ยังไม่มีคำตอบ',
        'ช่วงนุ่มที่สุดของโชว์ — ความรักในความเรียบง่าย',
        'ชีพจรแผ่ว — ความสัมพันธ์ที่ซับซ้อนและเจ็บปวด',
        'วงสดเต็มตัว — ก่อนไคลแม็กซ์',
        'ตัดดับมืดสนิทหลังเพลงนี้',
        'Encore — emotional resolution',
      ],
    },
    {
      desc: '33 เพลง + GIRLFRIEND (outro) · 6 Act + Before Encore + Encore · ทุกอัลบั้ม (ARE U STILL ออก 8 Jan 2024)',
      actSubtitles: [
        'เปิดด้วย confidence เต็มๆ — แต่คราวนี้ดุกว่า Leg 1',
        'ชีพจรนิ่งแต่หนักแน่น — โชว์ความเป็น R&B ตัวจริง',
        'ใจเต้นรัว — ช่วงจีบ น่ารัก',
        'โยกอยู่แล้ว... แล้วเนื้อเพลงค่อยๆ กระแทก — จบเพลงหยุดยาว ไม่พูดอะไร',
        'กู้ชีพ — ค่อยๆ ฟื้นกลับมาด้วยวงสด',
        'ชีพจรพุ่งสู่ไคลแม็กซ์',
        'ตัดดับมืดสนิท — คนดูตะโกนเรียก encore',
        'Encore — emotional resolution',
      ],
    },
  ],
  production: {
    heading: 'Production and staging',
    blocks: [
      {
        title: 'ที่มาของคอนเซปต์',
        body: [
          'ชื่อทัวร์มาก่อนอัลบั้ม James บอกว่าคำว่า PULSE อยู่บนไวต์บอร์ดของอพาร์ตเมนต์ฮันนัมดงเกือบตลอดปี 2022 — ชีพจรในฐานะหน่วยเล็กที่สุดของการแสดงสด และเป็นสิ่งที่คนดูกับคนแสดงแบ่งกันโดยไม่ได้ตั้งใจเมื่ออยู่ในห้องเดียวกัน ทุก act ใน setlist ตั้งชื่อจากคลังคำชุดนั้น — IGNITION, PULL, TENDER, DRIFT และในขาปี 2024 มี FLUTTER, SELFISH DROP, REVIVE, ADRENALINE ปิดที่ AFTERGLOW',
          'การวางเวทีเดินตามตรรกะเดียวกัน ขาวดำล้วน ไม่มีสีประจำ era ไม่มีภาพบนจอวิดีโอนอกเหนือจากช่วง VCR — เป็นการปฏิเสธรูปแบบทัวร์ K-pop หลายจออย่างตั้งใจ ทีมนักเต้นถูกบล็อกแบบสถาปัตยกรรม ไม่ใช่แบบประดับ ใช้สร้างรูปทรงรอบตัวนักแสดงแทนที่จะเต้นตามเขา',
        ],
      },
      {
        title: 'การประกอบ setlist',
        body: [
          'setlist มีอยู่ก่อนอัลบั้มจะเสร็จ ระหว่างการรื้อโครงเดือนกุมภาพันธ์ถึงพฤษภาคม 2023 James ร่างลำดับเพลงสมมุติ 20 เพลงขึ้นมาแล้วตัดอัลบั้มให้ป้อนลำดับนั้น ซึ่งเป็นเหตุผลว่าทำไม PULSE ถึงมีไตเติลสองเพลง และทำไมลำดับอัลบั้มกับ setlist ขาแรกถึงเปิดเหมือนกัน',
          'ขาแรกเล่น 23 เพลงจาก PULSE, SOFTEST TOUCH และ LIKE I DO บวก IF I KNEW ในฐานะเพลงพรีรีลีส ARE U STILL ออกเมื่อ 08/01/2024 ห้าวันก่อนเปิดขาสองที่กัวลาลัมเปอร์ setlist จึงถูกรื้อใหม่เป็น 33 เพลงภายในบล็อกซ้อมสิบวันเดียว ส่วน SELFISH ถูกกันออกจากลำดับที่ประกาศทั้งหมดแล้วดรอปสดแบบไม่บอกล่วงหน้า — เป็นเพลงเดียวในทั้งสองขาที่ไม่เคยอยู่บน setlist ที่พิมพ์ออกมา',
        ],
      },
      {
        title: 'การเลือกตลาดและสถานที่',
        body: [
          'เส้นทางทัวร์ถูกตัดสินด้วยการเงิน ไม่ใช่ศักดิ์ศรี James เป็นศิลปินเดี่ยวที่ยังไม่พิสูจน์ตัวในการทัวร์ และเพิ่งออกจากข้อพิพาทสัญญาที่เป็นข่าวมาสามเดือน ไม่มีโปรโมเตอร์ฝั่งตะวันตกรายไหนยอมรับประกันขาแรก เอเชียตะวันออกเป็นตลาดเดียวที่มีฐานพิสูจน์ได้ ขาแรกจึงวิ่งผ่านเกาหลี ญี่ปุ่น จีน และไต้หวันล้วน โดยมี Dream Maker เป็นโปรโมเตอร์ และรายรับจากขานี้เป็นตัวจ่าย guarantee ให้ทุกอย่างที่ตามมา',
          'ขาสองถึงขาสี่ย้ายไป Live Nation สำหรับอเมริกาและยุโรป และ AEG สำหรับบางงานในเอเชียกับตะวันออกกลาง ขนาดสถานที่ถูกตั้งรายตลาด ไม่ได้ตั้งเท่ากันหมด — สนามกีฬาที่กัวลาลัมเปอร์ จาการ์ตา ฮานอย และเซาเปาโล ที่ฐานผู้ฟังรองรับได้ ที่เหลือเป็นอารีนา ส่วนกรุงเทพฯ ได้สี่คืน เป็นการเล่นเมืองเดียวยาวที่สุดของทัวร์ และยังเป็นตลาดเดียวที่เขาเคยเล่นถึงสี่คืน',
        ],
      },
      {
        title: 'การซ้อม',
        body: [
          'การสร้างท่าเต้นเดินช่วง 26/06 – 05/07/2023 ที่ 1MILLION Dance Studio ซองซูดง โดยมี Bang Hyun-woo นำ แล้วย้ายไปซ้อมกับยูนิตนักเต้นแปดคนที่ CJ Rehearsal Studio ซังอัมดง ตั้งแต่ 06/07',
          'การซ้อมวงดนตรีเดินคู่ขนานที่ Vibe Studio ชองดัมดง ตลอดต้นเดือนกรกฎาคม ส่วนการซ้อมโปรดักชันเต็มรูปแบบ — เวที แสง จังหวะ VCR และระบบเล่นกลับ — ใช้ Gocheok Sky Dome หกวันตั้งแต่ 21/07/2023 ทันทีหลังปล่อยอัลบั้มและก่อนคืนเปิดทัวร์ในอาคารเดียวกันเมื่อ 28/07',
          'การรื้อ setlist ขาสองถูกอัดลงในช่วง 02/01 – 11/01/2024 ที่ CJ Rehearsal Studio เดินคู่ไปกับรอบโปรโมต ARE U STILL ในคอมเพล็กซ์เดียวกัน',
        ],
      },
    ],
  },
};

export const toursPulse = { en, th };
export function getToursPulse(lang: Lang) {
  return toursPulse[lang];
}
