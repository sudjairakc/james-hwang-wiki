// Bilingual UI + per-album metadata for the discography detail ([slug]) pages.
// Album prose comes from content/wiki/discography/<lang>/*.md (parsed in the page).
// Lyrics are shared (English songs) — imported once, not per-language.

import type { Lang } from '../../i18n';

// Shared — album identity (non-translatable).
export const slugMeta: Record<string, { file: string; cover: string; title: string; year: string; date: string; color: string }> = {
  'like-i-do':     { file: '01-like-i-do',      cover: 'like_i_do.png',     title: 'LIKE I DO',        year: '2016', date: 'Nov 11, 2016', color: '#c9a84c' },
  'softest-touch': { file: '03-softest-touch',  cover: 'softest_touch.png', title: 'SOFTEST TOUCH',    year: '2022', date: 'Jan 11, 2022', color: '#9b7fc8' },
  'pulse-era':     { file: '04-pulse-era',      cover: 'pulse.png',         title: 'PULSE',            year: '2023', date: 'Jul 21, 2023', color: '#5a7c6a' },
  'are-u-still':   { file: '05-are-u-still',    cover: 'are_you_still.png', title: 'ARE U STILL',      year: '2024', date: 'Jan 8, 2024',  color: '#5a7aaa' },
  'sour-honey':    { file: '06-sour-honey',     cover: 'sour_honey.png',    title: "CAN'T LEAVE ALONE", year: '2025', date: 'Feb 10, 2025', color: '#c06080' },
  'decade':        { file: '07-decade',         cover: 'decade.png',        title: 'DECADE',           year: '2026', date: 'Sep 9, 2026',  color: '#6e5a7c' },
};

export const slugs = Object.keys(slugMeta);

type TrackStat = { title: string; spotify?: string; youtube?: string };
export type AlbumMetrics = {
  albumStreams: string;
  spotifyPeak?: string;
  chartPeak: string;
  titleTrack: TrackStat;
  crossover?: TrackStat;
  keyTracks: { title: string; streams: string }[];
};

// Shared — commercial metrics (numbers / proper nouns, non-translatable).
export const metrics: Record<string, AlbumMetrics> = {
  'like-i-do': {
    albumStreams: '210M+',
    chartPeak: 'Melon Top 40 (resurgence 2022)',
    titleTrack: { title: 'LIKE I DO', spotify: '120M+', youtube: '85M+' },
    keyTracks: [
      { title: 'CALL ME', streams: '42M+' },
      { title: 'EVERLASTING', streams: '35M+' },
    ],
  },
  'softest-touch': {
    albumStreams: '450M+',
    chartPeak: 'Melon #18 · Circle Album Top 5',
    titleTrack: { title: 'SOFTEST TOUCH', spotify: '95M+', youtube: '82M+' },
    keyTracks: [
      { title: 'NO RESERVATION', streams: '48M+' },
      { title: 'CRUSH feat. Jungkook', streams: '260M+' },
    ],
  },
  'pulse-era': {
    albumStreams: '650M+',
    chartPeak: 'Melon #7 · Circle Digital Top 15',
    titleTrack: { title: 'HOW DOES IT FEEL', spotify: '155M+', youtube: '140M+' },
    crossover: { title: 'SAY feat. keshi', spotify: '210M+', youtube: '120M+' },
    keyTracks: [
      { title: 'ALL FOR YOU', streams: '95M+' },
      { title: 'SAVE ME', streams: '78M+' },
      { title: 'TALK TO ME', streams: '61M+' },
    ],
  },
  'are-u-still': {
    albumStreams: '820M+',
    chartPeak: 'Melon #2 · Circle Digital Top 5',
    titleTrack: { title: 'TEARS ON A PRETTY FACE', spotify: '285M+', youtube: '240M+' },
    crossover: { title: 'JUST A DREAM feat. Janet Jackson', spotify: '130M+', youtube: '95M+' },
    keyTracks: [
      { title: 'BREATHE', streams: '82M+' },
      { title: 'SOMEWHERE, SOMEHOW', streams: '54M+' },
      { title: 'IF I KNEW', streams: '47M+' },
    ],
  },
  'sour-honey': {
    albumStreams: '640M+',
    chartPeak: 'Melon #8 · Circle Digital Top 20',
    titleTrack: { title: 'SOUR', spotify: '145M+', youtube: '120M+' },
    crossover: { title: "CAN'T LEAVE ALONE feat. Pharrell Williams", spotify: '260M+', youtube: '175M+' },
    keyTracks: [
      { title: 'MYSTERY LADY', streams: '92M+' },
      { title: 'SHOOK', streams: '58M+' },
      { title: 'TAKE YOU TONIGHT', streams: '41M+' },
    ],
  },
  'decade': {
    albumStreams: '480M+',
    spotifyPeak: '32M monthly listeners (peak 2026)',
    chartPeak: 'Melon #9 · Circle Digital Top 25 · US R&B Albums Top 20',
    titleTrack: { title: 'NEW (Lead Single)', spotify: '95M+', youtube: '78M+' },
    keyTracks: [
      { title: 'RIGHT ABOUT LOVE (Extended)', streams: '52M+' },
      { title: 'NO RESERVATION (Extended)', streams: '47M+' },
    ],
  },
};

// Shared — critic aggregate (score/stars/tag kept identical, mirrors reception).
export const critic: Record<string, { score: number; stars: string; tag: string }> = {
  'like-i-do':     { score: 71, stars: '★★★½',  tag: 'Seed planted in the wrong season' },
  'softest-touch': { score: 80, stars: '★★★★',  tag: 'The permission slip he wrote himself' },
  'pulse-era':     { score: 85, stars: '★★★★½', tag: 'The statement album' },
  'are-u-still':   { score: 88, stars: '★★★★★', tag: 'The apex · Grammy winner' },
  'sour-honey':    { score: 79, stars: '★★★★',  tag: 'The graceful recalibration' },
  'decade':        { score: 76, stars: '★★★★',  tag: 'The early anthology' },
};

const en = {
  ui: {
    section: 'Discography',
    back: '← Back to Discography',
    commercialMetrics: 'Commercial Metrics',
    albumStreamsLabel: 'Album streams (lifetime)',
    chartPeakLabel: 'Chart peak',
    spotifyLabel: 'Spotify listeners',
    titleTrackLabel: 'Title Track',
    crossoverLabel: 'Crossover Single',
    keyTracksLabel: 'Key Tracks',
    tracklist: 'Tracklist',
    refStreams: 'ref · streams',
    albumArc: 'Album Arc',
    titleBadge: 'Title',
    bonusBadge: 'Bonus',
    hookPrefix: 'Hook theme',
    lyricsToggle: 'Lyrics',
    referenceVocal: 'Reference vocal',
    trackListing: 'Track Listing',
    newBadge: 'New',
    albumNotes: 'Album Notes',
    criticScoreArrow: 'Critic score →',
  },
  subtitle: {
    'like-i-do': 'GONUNMA · Mini Album',
    'softest-touch': '1st Mini Album',
    'pulse-era': '1st Studio Album',
    'are-u-still': '2nd Studio Album',
    'sour-honey': '3rd Studio Album · SOUR | HONEY era',
    'decade': 'Anthology Album',
  } as Record<string, string>,
  note: {
    'like-i-do': 'TikTok resurgence wave 2023–2024',
    'decade': 'Catalog resurgence +22–41% YoY across all eras',
  } as Record<string, string>,
  related: [
    { label: 'Discography', slug: 'discography' },
    { label: 'Awards', slug: 'awards' },
    { label: 'Tours', slug: 'tours' },
    { label: 'Career Timeline', slug: 'timeline' },
  ],
};

const th: typeof en = {
  ui: {
    section: 'Discography',
    back: '← กลับไปหน้าผลงานเพลง',
    commercialMetrics: 'ตัวเลขเชิงพาณิชย์',
    albumStreamsLabel: 'ยอดสตรีมอัลบั้ม (ตลอดชีพ)',
    chartPeakLabel: 'อันดับชาร์ตสูงสุด',
    spotifyLabel: 'ผู้ฟัง Spotify',
    titleTrackLabel: 'เพลงไตเติล',
    crossoverLabel: 'ซิงเกิล Crossover',
    keyTracksLabel: 'เพลงเด่น',
    tracklist: 'Tracklist',
    refStreams: 'ref · streams',
    albumArc: 'Album Arc',
    titleBadge: 'ไตเติล',
    bonusBadge: 'โบนัส',
    hookPrefix: 'ธีมฮุค',
    lyricsToggle: 'เนื้อเพลง',
    referenceVocal: 'Reference vocal',
    trackListing: 'รายชื่อเพลง',
    newBadge: 'ใหม่',
    albumNotes: 'บันทึกอัลบั้ม',
    criticScoreArrow: 'คะแนนนักวิจารณ์ →',
  },
  subtitle: {
    'like-i-do': 'GONUNMA · Mini Album',
    'softest-touch': 'Mini Album ชุดที่ 1',
    'pulse-era': 'สตูดิโออัลบั้มชุดที่ 1',
    'are-u-still': 'สตูดิโออัลบั้มชุดที่ 2',
    'sour-honey': 'สตูดิโออัลบั้มชุดที่ 3 · ยุค SOUR | HONEY',
    'decade': 'อัลบั้มรวมเพลง (Anthology)',
  } as Record<string, string>,
  note: {
    'like-i-do': 'กระแสฟื้นตัวจาก TikTok ช่วง 2023–2024',
    'decade': 'catalog ฟื้นตัว +22–41% YoY ทุกยุค',
  } as Record<string, string>,
  related: [
    { label: 'ผลงานเพลง', slug: 'discography' },
    { label: 'รางวัล', slug: 'awards' },
    { label: 'ทัวร์คอนเสิร์ต', slug: 'tours' },
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
  ],
};

export const discographyDetail = { en, th };
export function getDiscographyDetail(lang: Lang) {
  return discographyDetail[lang];
}
