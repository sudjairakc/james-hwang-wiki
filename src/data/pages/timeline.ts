// Bilingual UI strings + shared helpers for the Career Timeline page.
// Event content itself comes from the parsed markdown (content/wiki/timeline/<lang>.md).

import type { Lang } from '../../i18n';

// Shared (non-translatable) era colors.
export const ERA_COLORS: Record<string, string> = {
  'pre-debut': '#6b7280',
  'rookies': '#3b82f6',
  'nct127': '#ef4444',
  'shangchi': '#a855f7',
  'solo': '#c9a84c',
  'other': '#888888',
};

// Month short-label localization. Keys are 2-digit month numbers.
const MONTHS: Record<Lang, Record<string, string>> = {
  th: {
    '01': 'ม.ค.', '02': 'ก.พ.', '03': 'มี.ค.', '04': 'เม.ย.',
    '05': 'พ.ค.', '06': 'มิ.ย.', '07': 'ก.ค.', '08': 'ส.ค.',
    '09': 'ก.ย.', '10': 'ต.ค.', '11': 'พ.ย.', '12': 'ธ.ค.',
  },
  en: {
    '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr',
    '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug',
    '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec',
  },
};

export function monthName(shortLabel: string, lang: Lang) {
  const map = MONTHS[lang];
  const rangeMatch = shortLabel.match(/^(\d{2})[–\-](\d{2})$/);
  if (rangeMatch) {
    return (map[rangeMatch[1]] || rangeMatch[1]) + '–' + (map[rangeMatch[2]] || rangeMatch[2]);
  }
  return map[shortLabel] || shortLabel;
}

const en = {
  label: 'Biography',
  title: 'Career Timeline',
  subtitle: '1998–present · SM Rookies → NCT 127 → Independent artist',
  statYears: 'Years Covered',
  statEvents: 'Events',
  statEras: 'Career Eras',
  statSpan: 'Span',
  erasHeading: 'Career Eras',
  filterAll: 'All',
  back: 'Back',
  selectMonth: 'Select a month to view events',
  noEvents: 'No events in this period',
  evSuffix: 'ev.',
  eventSingular: 'event',
  eventPlural: 'events',
  related: [
    { label: 'Overview', slug: '' },
    { label: 'Discography', slug: 'discography' },
    { label: 'Filmography', slug: 'filmography' },
    { label: 'Awards', slug: 'awards' },
    { label: 'Tours', slug: 'tours' },
  ],
};

const th: typeof en = {
  label: 'ชีวประวัติ',
  title: 'ไทม์ไลน์อาชีพ',
  subtitle: '1998–ปัจจุบัน · SM Rookies → NCT 127 → ศิลปินอิสระ',
  statYears: 'ปีที่ครอบคลุม',
  statEvents: 'เหตุการณ์',
  statEras: 'ยุคในอาชีพ',
  statSpan: 'ช่วงเวลา',
  erasHeading: 'ยุคในอาชีพ',
  filterAll: 'ทั้งหมด',
  back: 'ย้อนกลับ',
  selectMonth: 'เลือกเดือนเพื่อดูเหตุการณ์',
  noEvents: 'ไม่มีข้อมูลในช่วงนี้',
  evSuffix: 'ครั้ง',
  eventSingular: 'เหตุการณ์',
  eventPlural: 'เหตุการณ์',
  related: [
    { label: 'ภาพรวม', slug: '' },
    { label: 'ผลงานเพลง', slug: 'discography' },
    { label: 'ผลงานภาพยนตร์', slug: 'filmography' },
    { label: 'รางวัล', slug: 'awards' },
    { label: 'ทัวร์คอนเสิร์ต', slug: 'tours' },
  ],
};

export const timeline = { en, th };
export function getTimeline(lang: Lang) {
  return timeline[lang];
}
