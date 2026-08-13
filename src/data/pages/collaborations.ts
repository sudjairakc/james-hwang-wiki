// Bilingual content for the Collaborations & Featured Tracks page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Song/album titles, artist names, genres, platform names, years, streams, and
// era-color hex are proper nouns / structural values — kept identical across
// both languages on purpose (matches the convention set by home.ts / artistry.ts).
// Short credit-role tags (artistRole) also stay identical in English, matching
// the "role" field convention in artistry.ts's authorshipByEra.

import type { Lang } from '../../i18n';

// Chart data — shared across languages (song titles / featured-artist tags are proper nouns).
export const collabChart = [
  { title: 'CRUSH',              artist: 'feat. Jungkook',       spotify: 260, youtube: null, color: '#9b7fc8', year: '2022' },
  { title: 'SAY',                artist: 'feat. keshi',          spotify: 210, youtube: 120,  color: '#5a7c6a', year: '2023' },
  { title: 'JUST A DREAM',       artist: 'feat. Janet Jackson',  spotify: 130, youtube: 95,   color: '#5a7aaa', year: '2024' },
  { title: "CAN\'T LEAVE ALONE",  artist: 'feat. Pharrell',       spotify: 260, youtube: 175,  color: '#c06080', year: '2025' },
];

// Shared, unused in the original page — preserved verbatim.
const uniqueCollabArtists = 6;
const countrySpread = ['USA', 'Korea', 'Thailand'];

// Shared numeric constant referenced by both language stat arrays.
const totalFeaturedStreams = '860M+';

const en = {
  ui: {
    label: 'Music · Collaborations',
    title: 'Collaborations & Featured Tracks',
    intro:
      "A comprehensive record of James Hwang's collaborative works — featured tracks across solo albums, pre-debut SM Station singles, and guest appearances. Each collaboration reflects a deliberate artistic and strategic choice rather than a commercial pairing.",
    chartHeading: 'Featured Track Streams',
    chartSub: 'Spotify + YouTube streams per collaboration (M)',
    legendSpotify: 'Spotify',
    legendYoutube: 'YouTube',
    featuredHeading: 'Featured Tracks',
    featuredSub: 'As lead artist',
    labelFeaturedArtist: 'Featured Artist',
    labelRole: 'Role',
    labelAlbum: 'Album',
    labelStreams: 'Streams',
    stationHeading: 'SM Station Co-Releases',
    stationSub: 'Pre-solo debut · 2018–2019',
    stationCallout:
      "Both SM Station singles were later folded into SOFTEST TOUCH (2022) as part of the official solo catalog — signaling James's intent to reclaim and recontextualize his pre-independence work.",
    philosophyHeading: 'Collaboration Philosophy',
    philosophySelectionTitle: 'Artist Selection',
    philosophySelectionBody:
      'Every collaboration involves an artist James has publicly cited as an influence or peer. No purely commercial pairings — each feature has a traceable artistic rationale.',
    philosophyTermsTitle: 'Creative Terms',
    philosophyTermsBody:
      'From PULSE onward, James retains final say on arrangement and production direction. Features are invited into a frame he defines — not co-equal productions.',
    philosophyPacingTitle: 'Pacing',
    philosophyPacingBody:
      "One major feature per album, escalating in scale: Jungkook (K-pop peer) → keshi (alt-R&B) → Janet Jackson (legacy R&B) → Pharrell Williams (legacy production). Each step was deliberate positioning.",
  },
  stats: [
    { val: '5', label: 'Unique collaborators' },
    { val: totalFeaturedStreams, label: 'Featured track streams' },
    { val: '4', label: 'Solo album features' },
    { val: '2', label: 'SM Station co-releases' },
  ],
  featuredTracks: [
    {
      title: 'CRUSH (feat. Jungkook)',
      artist: 'Jungkook (BTS)',
      artistRole: 'Featured vocalist',
      album: 'SOFTEST TOUCH',
      albumSlug: 'softest-touch',
      year: '2022',
      genre: 'Contemporary R&B / Pop',
      spotify: '260M+',
      youtube: undefined,
      eraColor: '#9b7fc8',
      note: 'Breakout crossover track — biggest single from SOFTEST TOUCH era. Dual vocal dynamic between K-R&B and BTS pop phrasing became a reference point for cross-fandom collaboration.',
    },
    {
      title: 'SAY (feat. keshi)',
      artist: 'keshi',
      artistRole: 'Featured vocalist & co-writer',
      album: 'PULSE',
      albumSlug: 'pulse-era',
      year: '2023',
      genre: 'Contemporary R&B / Alternative R&B',
      spotify: '210M+',
      youtube: '120M+',
      eraColor: '#5a7c6a',
      note: 'Named "Best K-pop Crossover Collaboration of 2023" by Billboard Korea. keshi co-wrote the track, making this a full creative partnership rather than a guest appearance.',
    },
    {
      title: 'JUST A DREAM (feat. Janet Jackson)',
      artist: 'Janet Jackson',
      artistRole: 'Featured vocalist',
      album: 'ARE U STILL',
      albumSlug: 'are-u-still',
      year: '2024',
      genre: 'Soul / R&B / Funk-Disco',
      spotify: '130M+',
      youtube: '95M+',
      eraColor: '#5a7aaa',
      note: 'Described by Rolling Stone as "a conversation between two eras." Jackson\'s involvement was initiated through CAA introduction. Track received Grammy committee consideration in Best R&B Song category.',
    },
    {
      title: "CAN\'T LEAVE ALONE (feat. Pharrell Williams)",
      artist: 'Pharrell Williams',
      artistRole: 'Featured vocalist & co-producer',
      album: "CAN\'T LEAVE ALONE",
      albumSlug: 'sour-honey',
      year: '2025',
      genre: 'Contemporary R&B / Neo-Soul',
      spotify: '260M+',
      youtube: '175M+',
      eraColor: '#c06080',
      note: "First entry into Spotify Global Top 50. Pharrell served as both featured artist and co-producer — the first time James shared production credit with an external name. Consequence of Sound: \"Pharrell knew to step back and let GONUNMA lead.\"",
    },
  ],
  stationSingles: [
    {
      title: "YOU AIN'T GOTTA",
      partner: 'Taeyong',
      partnerGroup: 'NCT 127',
      year: '2018',
      platform: 'SM STATION 2',
      eraColor: '#c9a84c',
      note: "Released as James's 1st SM Station single ahead of his solo debut. Later folded into SOFTEST TOUCH (2022) as part of the album's acoustic-soul core.",
    },
    {
      title: 'CRUSH',
      partner: 'Solo release',
      partnerGroup: '—',
      year: '2019',
      platform: 'SM STATION 3',
      eraColor: '#c9a84c',
      note: "Released as James's 2nd SM Station single (solo) ahead of his solo debut. Re-released on SOFTEST TOUCH (2022) with an added Jungkook (BTS) feature — that cross-agency version became the album's biggest crossover moment — and a solo version appears on DECADE (2026).",
    },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ดนตรี · คอลแลบ',
    title: 'คอลแลบและเพลงที่มีศิลปินรับเชิญ',
    intro:
      'บันทึกครบถ้วนของงานคอลแลบของ James Hwang ทั้งเพลงที่มีศิลปินรับเชิญในอัลบั้มเดี่ยว ซิงเกิล SM Station ก่อนเดบิวต์เดี่ยว และงานที่เขาไปร้องรับเชิญให้คนอื่น แต่ละคอลแลบสะท้อนการตัดสินใจเชิงศิลปะและกลยุทธ์อย่างตั้งใจ ไม่ใช่การจับคู่เชิงพาณิชย์',
    chartHeading: 'ยอดสตรีมเพลงคอลแลบ',
    chartSub: 'ยอดสตรีม Spotify + YouTube ต่อคอลแลบ (ล้าน)',
    legendSpotify: 'Spotify',
    legendYoutube: 'YouTube',
    featuredHeading: 'เพลงที่มีศิลปินรับเชิญ',
    featuredSub: 'ในฐานะศิลปินหลัก',
    labelFeaturedArtist: 'ศิลปินรับเชิญ',
    labelRole: 'บทบาท',
    labelAlbum: 'อัลบั้ม',
    labelStreams: 'ยอดสตรีม',
    stationHeading: 'ผลงานร่วม SM Station',
    stationSub: 'ก่อนเดบิวต์เดี่ยว · 2018–2019',
    stationCallout:
      'ทั้งสองเพลง SM Station ถูกนำไปรวมใน SOFTEST TOUCH (2022) ในฐานะส่วนหนึ่งของผลงานเดี่ยวอย่างเป็นทางการ สื่อถึงความตั้งใจของ James ที่จะทวงคืนและตีความผลงานช่วงก่อนเป็นอิสระของตัวเองใหม่',
    philosophyHeading: 'ปรัชญาการคอลแลบ',
    philosophySelectionTitle: 'การเลือก Artist',
    philosophySelectionBody:
      'ทุกคอลแลบเป็นศิลปินที่ James พูดต่อสาธารณะว่าเป็นแรงบันดาลใจหรือคนระดับเดียวกัน ไม่มีการจับคู่เพื่อการค้าล้วนๆ ทุกเพลงมีเหตุผลทางศิลปะที่ตามรอยได้',
    philosophyTermsTitle: 'เงื่อนไขด้าน Creative',
    philosophyTermsBody:
      'ตั้งแต่ PULSE เป็นต้นมา James เป็นคนตัดสินใจสุดท้ายเรื่องการเรียบเรียงและทิศทางโปรดักชัน ศิลปินรับเชิญถูกเชิญเข้ามาในกรอบที่เขาวางไว้แล้ว ไม่ใช่การร่วมโปรดิวซ์แบบเท่าเทียมกัน',
    philosophyPacingTitle: 'จังหวะการปล่อยผลงาน',
    philosophyPacingBody:
      'หนึ่งอัลบั้มมีศิลปินรับเชิญคนสำคัญหนึ่งคน และไล่ระดับขึ้นเรื่อยๆ จาก Jungkook ที่เป็นเพื่อนร่วมวงการ K-pop ไป keshi สาย alt-R&B ไป Janet Jackson ที่เป็นตำนาน R&B แล้วไป Pharrell Williams ที่เป็นตำนานด้านโปรดักชัน แต่ละก้าวคือการวางตำแหน่งตัวเองอย่างตั้งใจ',
  },
  stats: [
    { val: '6', label: 'ศิลปินที่ร่วมงาน' },
    { val: totalFeaturedStreams, label: 'ยอดสตรีม Featured Track' },
    { val: '4', label: 'Feature ในอัลบั้มเดี่ยว' },
    { val: '2', label: 'ซิงเกิลร่วม SM Station' },
  ],
  featuredTracks: [
    {
      title: 'CRUSH (feat. Jungkook)',
      artist: 'Jungkook (BTS)',
      artistRole: 'Featured vocalist',
      album: 'SOFTEST TOUCH',
      albumSlug: 'softest-touch',
      year: '2022',
      genre: 'Contemporary R&B / Pop',
      spotify: '260M+',
      youtube: undefined,
      eraColor: '#9b7fc8',
      note: 'เพลงที่พาเขาข้ามไปตลาดใหม่ และเป็นซิงเกิลที่ใหญ่ที่สุดของยุค SOFTEST TOUCH การร้องคู่ระหว่าง K-R&B กับการวางคำแบบป็อปของ BTS กลายเป็นจุดอ้างอิงของงานคอลแลบข้ามแฟนด้อม',
    },
    {
      title: 'SAY (feat. keshi)',
      artist: 'keshi',
      artistRole: 'Featured vocalist & co-writer',
      album: 'PULSE',
      albumSlug: 'pulse-era',
      year: '2023',
      genre: 'Contemporary R&B / Alternative R&B',
      spotify: '210M+',
      youtube: '120M+',
      eraColor: '#5a7c6a',
      note: 'ได้รับการเสนอชื่อเป็น "Best K-pop Crossover Collaboration of 2023" โดย Billboard Korea keshi ร่วมแต่งเพลงนี้ด้วย ทำให้เป็นการร่วมงานสร้างสรรค์เต็มรูปแบบ ไม่ใช่แค่มาร้องรับเชิญ',
    },
    {
      title: 'JUST A DREAM (feat. Janet Jackson)',
      artist: 'Janet Jackson',
      artistRole: 'Featured vocalist',
      album: 'ARE U STILL',
      albumSlug: 'are-u-still',
      year: '2024',
      genre: 'Soul / R&B / Funk-Disco',
      spotify: '130M+',
      youtube: '95M+',
      eraColor: '#5a7aaa',
      note: 'ถูกอธิบายโดย Rolling Stone ว่าเป็น "a conversation between two eras" การมาร่วมงานของ Jackson เริ่มจากการแนะนำผ่าน CAA เพลงนี้ได้รับการพิจารณาจากคณะกรรมการ Grammy ในสาขา Best R&B Song',
    },
    {
      title: "CAN\'T LEAVE ALONE (feat. Pharrell Williams)",
      artist: 'Pharrell Williams',
      artistRole: 'Featured vocalist & co-producer',
      album: "CAN\'T LEAVE ALONE",
      albumSlug: 'sour-honey',
      year: '2025',
      genre: 'Contemporary R&B / Neo-Soul',
      spotify: '260M+',
      youtube: '175M+',
      eraColor: '#c06080',
      note: 'เพลงแรกที่ขึ้น Spotify Global Top 50 Pharrell รับทั้งบทศิลปินรับเชิญและผู้ร่วมโปรดิวซ์ เป็นครั้งแรกที่ James แบ่งเครดิตโปรดักชันให้คนนอก Consequence of Sound เขียนว่า "Pharrell knew to step back and let GONUNMA lead."',
    },
  ],
  stationSingles: [
    {
      title: "YOU AIN'T GOTTA",
      partner: 'Taeyong',
      partnerGroup: 'NCT 127',
      year: '2018',
      platform: 'SM STATION 2',
      eraColor: '#c9a84c',
      note: 'ปล่อยเป็นซิงเกิล SM Station แรกของ James ก่อนเดบิวต์เดี่ยว ภายหลังถูกรวมเข้า SOFTEST TOUCH (2022) เป็นส่วนหนึ่งของแกนโซลกีตาร์โปร่งของอัลบั้ม',
    },
    {
      title: 'CRUSH',
      partner: 'Solo release',
      partnerGroup: '—',
      year: '2019',
      platform: 'SM STATION 3',
      eraColor: '#c9a84c',
      note: 'ปล่อยเป็นซิงเกิล SM Station ที่สองของ James (เดี่ยว) ก่อนเดบิวต์เดี่ยว ภายหลังถูกปล่อยใหม่ใน SOFTEST TOUCH (2022) โดยเพิ่ม Jungkook จาก BTS มาร้องรับเชิญ เวอร์ชันข้ามค่ายนี้กลายเป็นจุดที่อัลบั้มไปได้ไกลที่สุด — และทำเวอร์ชันเดี่ยวในอัลบั้ม DECADE (2026)',
    },
  ],
};

export const collaborations = { en, th };
export function getCollaborations(lang: Lang) {
  return collaborations[lang];
}
