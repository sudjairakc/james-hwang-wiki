// Bilingual content for the Tours index page.
// Shape: { en, th } with identical keys.
// Non-translatable values (dates, hex colors, numeric metrics, percentage
// ranges) are extracted as shared consts keyed/ordered to match the
// translated label arrays below.

import type { Lang } from '../../i18n';

// Shared — per-tour metrics (dates, counts, gross figures, color), keyed by slug.
export const tourMeta: Record<
  string,
  {
    period: string;
    legs: number;
    shows: number;
    cities: number;
    songsPerNight: string;
    runtime: string;
    ticketGross: string;
    sponsorRev: string;
    profitPool: string;
    color: string;
  }
> = {
  pulse: {
    period: 'July 28, 2023 – May 30, 2024',
    legs: 4,
    shows: 64,
    cities: 34,
    songsPerNight: '23–33',
    runtime: '1h 42m – 2h 26m',
    ticketGross: '$235M',
    sponsorRev: '$26M',
    profitPool: '$105M',
    color: '#5a7c6a',
  },
  decade: {
    period: 'January 15 – February 18, 2027',
    legs: 2,
    shows: 18,
    cities: 10,
    songsPerNight: '29',
    runtime: '2h 00m',
    ticketGross: '$74M',
    sponsorRev: '$14M',
    profitPool: '$40M',
    color: '#6e5a7c',
  },
};

// Shared — chart numeric series, aligned by index with toursChartMetrics /
// toursChartCosts label arrays below (order: pulse, decade / same 7 cost rows).
export const toursChartValues = {
  metricSeries: [
    [235, 74], // Ticket Gross ($M)
    [105, 40], // Profit Pool ($M)
    [64, 18],  // Shows
  ],
  costMids: [20, 15, 12, 10, 7, 3, 2.5],
};

// Shared — combined top-of-page stat values, aligned by index with combinedStats labels.
export const combinedStatVals = ['$309M', '$40M', '~$145M', '~$61M'];

// Shared — production cost % ranges, aligned by index with productionCosts labels.
export const productionCostPct = ['18–22%', '12–18%', '10–14%', '8–12%', '6–8%', '2–4%', '2–3%'];

const en = {
  ui: {
    label: 'Live',
    title: 'Tours',
    subtitle: '$309M combined gross · 82 shows · 44 cities · 2 world tours',
    tourStatShows: 'Shows',
    tourStatCities: 'Cities',
    tourStatLegs: 'Legs',
    tourStatTicketGross: 'Ticket Gross',
    tourStatSponsors: 'Sponsors',
    tourStatProfitPool: 'Profit Pool',
    comparisonHeading: 'Tour Comparison',
    comparisonSubtitle: 'PULSE vs DECADE — metrics & production cost breakdown',
    keyMetricsLabel: 'Key Metrics',
    prodCostHeading: 'Production Cost Breakdown',
    prodCostChartSub: '% of gross',
    prodCostOpsSub: '~55–65% of gross',
    partnersHeading: 'Regional Partners',
  },
  combinedStats: [
    { label: 'Combined Ticket Gross' },
    { label: 'Combined Sponsor Revenue' },
    { label: 'Combined Profit Pool' },
    { label: "James' Personal Income" },
  ],
  tours: [
    {
      slug: 'pulse',
      name: 'PULSE World Tour',
      order: '1st World Tour',
      tagline: 'Let your PULSE rise, come fly with me.',
      regions: ['East Asia', 'Southeast Asia', 'Oceania', 'Middle East', 'Americas', 'Europe'],
    },
    {
      slug: 'decade',
      name: 'DECADE Tour',
      order: '2nd Tour · Anthology',
      tagline: 'A DECADE lives in songs we made.',
      regions: ['Asia', 'Americas', 'Europe'],
    },
  ],
  toursChartMetrics: ['Ticket Gross ($M)', 'Profit Pool ($M)', 'Shows'],
  toursChartCosts: ['Staging / LED', 'Venue', 'Freight', 'Crew payroll', 'Travel', 'Insurance', 'Rehearsals'],
  partners: [
    { region: 'Korea', name: 'Dream Maker' },
    { region: 'Japan', name: 'Kyodo' },
    { region: 'Southeast Asia', name: 'Live Nation Asia' },
    { region: 'North America', name: 'Live Nation' },
    { region: 'Europe', name: 'AEG Presents' },
  ],
  productionCosts: [
    { item: 'Staging / LED / automation' },
    { item: 'Venue cost' },
    { item: 'Freight & logistics' },
    { item: 'Crew payroll' },
    { item: 'Travel & accommodation' },
    { item: 'Insurance' },
    { item: 'Rehearsals' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'Live',
    title: 'ทัวร์คอนเสิร์ต',
    subtitle: 'รายได้รวม $309M · 82 โชว์ · 44 เมือง · 2 ทัวร์โลก',
    tourStatShows: 'โชว์',
    tourStatCities: 'เมือง',
    tourStatLegs: 'เลก',
    tourStatTicketGross: 'รายได้ตั๋ว',
    tourStatSponsors: 'สปอนเซอร์',
    tourStatProfitPool: 'กำไร',
    comparisonHeading: 'เปรียบเทียบทัวร์',
    comparisonSubtitle: 'PULSE vs DECADE — เปรียบเทียบตัวเลขและโครงสร้างต้นทุนโปรดักชัน',
    keyMetricsLabel: 'ตัวเลขสำคัญ',
    prodCostHeading: 'โครงสร้างต้นทุนโปรดักชัน',
    prodCostChartSub: '% ของรายได้รวม',
    prodCostOpsSub: '~55–65% ของรายได้รวม',
    partnersHeading: 'พาร์ทเนอร์ประจำภูมิภาค',
  },
  combinedStats: [
    { label: 'รายได้ตั๋วรวม' },
    { label: 'รายได้สปอนเซอร์รวม' },
    { label: 'กำไรรวม' },
    { label: 'รายได้ส่วนตัวของ James' },
  ],
  tours: [
    {
      slug: 'pulse',
      name: 'PULSE World Tour',
      order: 'ทัวร์โลกครั้งที่ 1',
      tagline: 'ปล่อยให้ PULSE ในตัวคุณพุ่งขึ้น มาบินไปกับฉัน',
      regions: ['เอเชียตะวันออก', 'เอเชียตะวันออกเฉียงใต้', 'โอเชียเนีย', 'ตะวันออกกลาง', 'อเมริกา', 'ยุโรป'],
    },
    {
      slug: 'decade',
      name: 'DECADE Tour',
      order: 'ทัวร์ครั้งที่ 2 · Anthology',
      tagline: 'DECADE มีชีวิตอยู่ในเพลงที่เราสร้างร่วมกัน',
      regions: ['เอเชีย', 'อเมริกา', 'ยุโรป'],
    },
  ],
  toursChartMetrics: ['รายได้ตั๋ว ($M)', 'กำไร ($M)', 'โชว์'],
  toursChartCosts: ['สเตจ / LED', 'ค่าสถานที่', 'ค่าขนส่ง', 'เงินเดือนทีมงาน', 'ค่าเดินทาง', 'ประกันภัย', 'ซ้อม'],
  partners: [
    { region: 'เกาหลี', name: 'Dream Maker' },
    { region: 'ญี่ปุ่น', name: 'Kyodo' },
    { region: 'เอเชียตะวันออกเฉียงใต้', name: 'Live Nation Asia' },
    { region: 'อเมริกาเหนือ', name: 'Live Nation' },
    { region: 'ยุโรป', name: 'AEG Presents' },
  ],
  productionCosts: [
    { item: 'สเตจ / LED / automation' },
    { item: 'ค่าสถานที่' },
    { item: 'ค่าขนส่งและโลจิสติกส์' },
    { item: 'เงินเดือนทีมงาน' },
    { item: 'ค่าเดินทางและที่พัก' },
    { item: 'ประกันภัย' },
    { item: 'ซ้อม' },
  ],
};

export const toursIndex = { en, th };
export function getToursIndex(lang: Lang) {
  return toursIndex[lang];
}
