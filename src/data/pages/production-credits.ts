// Bilingual content for the Production Credits page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Non-translatable values (dates, artist/group names, streams, platform names,
// image filenames) are kept identical across both languages on purpose.

import type { Lang } from '../../i18n';

type Credit = {
  year: string;
  title: string;
  artist: string;
  artistGroup: string;
  composed: string[];
  arranged: string[];
  remark: string;
};

type LinaTrack = {
  num: number;
  title: string;
  feat: string[];
  performer: string;
  released: string;
  streams: string;
  platform: string;
};

// Shared — L.I.N.A. project metadata & tracklist. No translatable strings:
// all values are proper nouns, dates, or numbers.
export const linaProject = {
  title: 'L.I.N.A.',
  released: 'December 3, 2023 (rollout through 2025)',
  producedBy: 'GONUNMA, Kenzie',
  musicBy: 'GONUNMA, Kenzie',
  lyricBy: 'GONUNMA, Kenzie',
  arrangedBy: 'GONUNMA, Kenzie',
  platform: 'Melon',
  tracks: [
    {
      num: 1,
      title: 'CHECK [TITLE]',
      feat: ['Karina (aespa)', 'Haerin (NewJeans)', 'Chaewon (Le Sserafim)', 'Kazuha (Le Sserafim)', 'Gaeul (IVE)', 'Liz (IVE)', 'Wonyoung (IVE)'],
      performer: 'TEAM A (Aurea)',
      released: 'Feb 8, 2024',
      streams: '56,473,655',
      platform: 'FLO',
    },
    {
      num: 2,
      title: 'TAKE IT SLOW',
      feat: ['Ningning (aespa)', 'Hyein (NewJeans)', 'Leeseo (IVE)', 'Eunchae (Le Sserafim)'],
      performer: 'TEAM L (Lumina)',
      released: 'Jul 18, 2025',
      streams: '33,722,601',
      platform: 'Sofia Ly',
    },
    {
      num: 3,
      title: 'EASY',
      feat: ['Winter (aespa)', 'Danielle (NewJeans)', 'Sakura (Le Sserafim)', 'Rei (Le Sserafim)'],
      performer: 'TEAM N (Noiré)',
      released: 'Jul 19, 2024',
      streams: '34,031,862',
      platform: 'Haven',
    },
    {
      num: 4,
      title: 'TWIN FLAMES',
      feat: ['Giselle (aespa)', 'Minji (NewJeans)', 'Hanni (NewJeans)', 'Yunjin (Le Sserafim)', 'Yujin (IVE)'],
      performer: 'TEAM I (Ignis)',
      released: 'Jul 26, 2024',
      streams: '32,152,302',
      platform: 'Denise Julia / thuy',
    },
    {
      num: 5,
      title: 'SWEET NOTHINGS',
      feat: ['Winter (aespa)', 'Hanni (NewJeans)', 'Chaewon (Le Sserafim)', 'Gaeul (IVE)'],
      performer: '',
      released: 'Nov 8, 2024',
      streams: '22,262,321',
      platform: 'Denise Julia / Jay R',
    },
  ] as LinaTrack[],
};

const en = {
  ui: {
    label: 'Discography',
    title: 'Production Credits',
    introHtml:
      'External production and songwriting credits by James Hwang (GONUNMA) for other artists. Includes the <strong style="color:var(--text)">L.I.N.A.</strong> Melon collaboration project (2023) and songs placed with SM Entertainment artists post-departure — arms-length <strong style="color:var(--text)">JH Company Publishing</strong> licensing rather than a direct label hire, a channel kept open by the non-blacklisting terms of the 2023 settlement.',
    linaHeading: 'L.I.N.A. — Melon Year-End Special (Cross-Agency)',
    linaConcept:
      'A one-off Melon (Kakao Entertainment) year-end / anniversary special — not a JH Company release, and never repeated. The single factor that made a cross-agency line-up possible was co-production by SM in-house hitmaker Kenzie alongside GONUNMA: with SM\'s own composer anchoring the project on a neutral platform, aespa, NewJeans, Le Sserafim, and IVE could each lend rotating members across five sub-units without it reading as a rival artist\'s vehicle. Digital singles + Melon-exclusive stages only — no music videos, no ongoing group.',
    projectCreditsHeader: 'Project Credits (all tracks)',
    producedByLabel: 'Produced By',
    musicByLabel: 'Music By',
    lyricsByLabel: 'Lyrics By',
    arrangedByLabel: 'Arranged By',
    platformLabel: 'Platform',
    featuredLabel: 'Featured',
    performedByPrefix: 'performed by',
    streamsLabel: 'streams',
    externalHeading: 'External Production Credits',
    tableTitleArtist: 'Title · Artist',
    tableGroup: 'Group',
    tableComposed: 'Composed',
    tableArranged: 'Arranged',
    tableNote: 'Note',
  },
  credits: [
    {
      year: '2024',
      title: "Can't Help Myself",
      artist: 'NCT 127',
      artistGroup: 'SM',
      composed: ['Kenzie', 'James Hwang'],
      arranged: ['Kenzie', 'James Hwang'],
      remark: '',
    },
    {
      year: '2024',
      title: 'Smoke (English Ver.)',
      artist: 'Jaehyun',
      artistGroup: 'SM',
      composed: ['James Hwang', 'Jaehyun'],
      arranged: ['James Hwang'],
      remark: 'Written English lyrics',
    },
    {
      year: '2024',
      title: 'Supercute',
      artist: 'NCT WISH',
      artistGroup: 'SM',
      composed: ['James Hwang'],
      arranged: ['James Hwang'],
      remark: '',
    },
    {
      year: '2024',
      title: 'Flowers',
      artist: 'aespa',
      artistGroup: 'SM',
      composed: ['James Hwang'],
      arranged: ['James Hwang'],
      remark: '',
    },
    {
      year: '2024',
      title: "When I'm With You",
      artist: 'NCT DREAM',
      artistGroup: 'SM',
      composed: ['James Hwang', 'Imlay', 'Mark'],
      arranged: ['James Hwang', 'Imlay'],
      remark: '',
    },
    {
      year: '2024',
      title: 'Call Me',
      artist: 'WayV',
      artistGroup: 'SM',
      composed: ['James Hwang'],
      arranged: ['James Hwang'],
      remark: 'Written English lyrics',
    },
    {
      year: '2025',
      title: 'Stunner',
      artist: 'Ten',
      artistGroup: 'SM',
      composed: ['James Hwang'],
      arranged: ['James Hwang'],
      remark: 'Written English lyrics',
    },
  ] as Credit[],
};

const th: typeof en = {
  ui: {
    label: 'ผลงานเพลง',
    title: 'เครดิตโปรดักชัน',
    introHtml:
      'เครดิตโปรดักชันและการแต่งเพลงภายนอกของ James Hwang (GONUNMA) ให้ศิลปินคนอื่น ครอบคลุมโปรเจกต์คอลแลบ Melon อย่าง <strong style="color:var(--text)">L.I.N.A.</strong> (2023) และเพลงที่วางให้ศิลปินสังกัด SM Entertainment หลังออกจากค่าย — เป็นการ license ผ่าน <strong style="color:var(--text)">JH Company Publishing</strong> แบบ arms-length ไม่ใช่การจ้างตรงจากค่าย ช่องทางที่เปิดไว้จากเงื่อนไข non-blacklisting ในการ settle ปี 2023',
    linaHeading: 'L.I.N.A. — สเปเชียลส่งท้ายปีของ Melon แบบข้ามค่าย',
    linaConcept:
      'งานพิเศษส่งท้ายปีและฉลองครบรอบของ Melon ในเครือ Kakao Entertainment แบบทำครั้งเดียวจบ ไม่ใช่ผลงานของ JH Company และไม่มีการทำซ้ำ สิ่งเดียวที่ทำให้รวมศิลปินข้ามค่ายได้คือการที่ Kenzie นักแต่งเพลงมือหนึ่งประจำ SM ร่วมโปรดิวซ์กับ GONUNMA: เมื่อมีคอมโพสเซอร์ของ SM เองยึดโปรเจกต์ไว้บน platform กลาง aespa, NewJeans, Le Sserafim และ IVE จึงส่งสมาชิกหมุนเวียนมาร่วมได้ใน 5 ยูนิตย่อย โดยไม่ถูกมองว่าเป็นงานของศิลปินคู่แข่ง · มีแค่ digital single + สเตจ Melon exclusive — ไม่มี MV ไม่มีวงต่อเนื่อง',
    projectCreditsHeader: 'เครดิตโปรเจกต์ (ทุกเพลง)',
    producedByLabel: 'โปรดิวซ์โดย',
    musicByLabel: 'ทำนองโดย',
    lyricsByLabel: 'เนื้อร้องโดย',
    arrangedByLabel: 'เรียบเรียงโดย',
    platformLabel: 'แพลตฟอร์ม',
    featuredLabel: 'ศิลปินรับเชิญ',
    performedByPrefix: 'ขับร้องโดย',
    streamsLabel: 'สตรีม',
    externalHeading: 'เครดิตโปรดักชันภายนอก',
    tableTitleArtist: 'ชื่อเพลง · ศิลปิน',
    tableGroup: 'สังกัด',
    tableComposed: 'ทำนอง',
    tableArranged: 'เรียบเรียง',
    tableNote: 'หมายเหตุ',
  },
  credits: [
    {
      year: '2024',
      title: "Can't Help Myself",
      artist: 'NCT 127',
      artistGroup: 'SM',
      composed: ['Kenzie', 'James Hwang'],
      arranged: ['Kenzie', 'James Hwang'],
      remark: '',
    },
    {
      year: '2024',
      title: 'Smoke (English Ver.)',
      artist: 'Jaehyun',
      artistGroup: 'SM',
      composed: ['James Hwang', 'Jaehyun'],
      arranged: ['James Hwang'],
      remark: 'เขียนเนื้อร้องภาษาอังกฤษ',
    },
    {
      year: '2024',
      title: 'Supercute',
      artist: 'NCT WISH',
      artistGroup: 'SM',
      composed: ['James Hwang'],
      arranged: ['James Hwang'],
      remark: '',
    },
    {
      year: '2024',
      title: 'Flowers',
      artist: 'aespa',
      artistGroup: 'SM',
      composed: ['James Hwang'],
      arranged: ['James Hwang'],
      remark: '',
    },
    {
      year: '2024',
      title: "When I'm With You",
      artist: 'NCT DREAM',
      artistGroup: 'SM',
      composed: ['James Hwang', 'Imlay', 'Mark'],
      arranged: ['James Hwang', 'Imlay'],
      remark: '',
    },
    {
      year: '2024',
      title: 'Call Me',
      artist: 'WayV',
      artistGroup: 'SM',
      composed: ['James Hwang'],
      arranged: ['James Hwang'],
      remark: 'เขียนเนื้อร้องภาษาอังกฤษ',
    },
    {
      year: '2025',
      title: 'Stunner',
      artist: 'Ten',
      artistGroup: 'SM',
      composed: ['James Hwang'],
      arranged: ['James Hwang'],
      remark: 'เขียนเนื้อร้องภาษาอังกฤษ',
    },
  ],
};

export const productionCredits = { en, th };
export function getProductionCredits(lang: Lang) {
  return productionCredits[lang];
}
