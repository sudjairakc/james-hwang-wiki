// Bilingual content for the Cultural Impact page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Academic/coined quoted terms (item.tag) are kept identical across languages —
// same convention as the `epithet` field in artistry.ts / reception.astro.
// Proper nouns (people, groups, album/franchise titles, award-tier names) and
// numbers/years are kept identical across both languages on purpose.

import type { Lang } from '../../i18n';

const en = {
  ui: {
    label: 'Analysis',
    title: 'Cultural Impact',
    subtitle: 'Post-agency authorship · Idol-auteur hybrid · Neo-soul K-pop pioneer · 2016–2026',
    tab1: '1. Academic Reception',
    tab2: '2. Fandom Sociology',
    academicSectionHeading: '1 · Cultural Impact / Academic Reception',
    fandomSectionHeading: '2 · Fandom Sociology',
    legacyHeading: 'Legacy Projection (Academic Forecast)',
  },
  related: [
    { label: 'Public Image', slug: 'public-image' },
    { label: 'Artist Canon', slug: 'canon' },
    { label: 'Career Timeline', slug: 'timeline' },
    { label: 'Discography', slug: 'discography' },
    { label: 'Filmography', slug: 'filmography' },
  ],
  academicItems: [
    {
      id: '1.1',
      title: 'Idol-Auteur Hybrid Model',
      tag: 'post-agency authorship idol',
      text: 'James is placed in a category K-pop scholars have begun calling the "post-agency authorship idol" — a foreign-born SM idol who transitions into a global auteur without ever leaving the group.',
      table: {
        cols: ['Dimension', 'Traditional Idol', 'Auteur Pop Artist', 'James Model'],
        rows: [
          ['Creative control', 'Low', 'High', 'High (post-2022)'],
          ['Choreography authorship', 'Partial', 'Medium', 'High'],
          ['Concept authorship', 'Agency-led', 'Artist-led', 'Hybrid'],
          ['Label structure', 'Agency system', 'Independent', 'JH Company'],
        ],
      },
    },
    {
      id: '1.2',
      title: 'Masked Identity Cultural Turning Point (2016)',
      tag: 'post-visual legitimacy validation',
      text: 'His win on King of Mask Singer (as Cat\'s Eyes / GONUNMA) — Korean media studies scholars use this case to support the thesis that anonymity temporarily removes racial-hierarchy bias in idol reception.',
      table: null,
    },
    {
      id: '1.3',
      title: 'Foreign Idol Acceptance Shift',
      tag: 'vocal legitimacy breakthrough model',
      text: 'James sits on the same timeline as Nichkhun (visual ambassador), Lay (China-market expansion), and Lisa (performance globalization) — but he is the first to be classified as a "vocal legitimacy breakthrough model" at the level of Korean general-public reception.',
      table: null,
    },
    {
      id: '1.4',
      title: 'R&B Masculinity Arc',
      tag: 'responsive masculinity archetype',
      text: 'Across LIKE I DO → CAN\'T LEAVE ALONE, a "masculine softness normalization arc" emerges — an archetype scholars call responsive masculinity (in contrast to reactive masculinity).',
      table: {
        cols: ['Album', 'Masculinity Frame'],
        rows: [
          ['LIKE I DO', 'Mystery vulnerability'],
          ['SOFTEST TOUCH', 'Emotional precision'],
          ['PULSE', 'Sensual confidence'],
          ['ARE U STILL', 'Nostalgia intimacy'],
          ['SOUR', 'Fragility'],
          ['HONEY', 'Desire without aggression'],
        ],
      },
    },
    {
      id: '1.5',
      title: 'Neo-Soul Revival Inside Idol System',
      tag: 'first mainstream neo-soul pivot in tier-1 idol discography',
      text: 'ARE U STILL (2024) is the first mainstream neo-soul pivot inside a tier-1 idol discography — slower choreography pacing, a return of analog warmth, horn-stack reintroduction, an extended chord palette — scholars evaluate it as "retro-soul authenticity without nostalgia cosplay."',
      table: null,
    },
    {
      id: '1.6',
      title: 'Dual-Industry Bridge',
      tag: 'transmedia creative operator',
      text: 'Trajectory: idol → auteur → film lead → franchise architect — a trajectory only IU, G-Dragon, and The Weeknd have reached the auteur phase of, but James adds a franchise-builder layer on top.',
      table: null,
    },
    {
      id: '1.7',
      title: 'Captain EO: Resonance as Cultural Memory Restoration',
      tag: 'legacy reactivation media',
      text: 'Framework: legacy reactivation media — similar to Blade Runner 2049 (memory continuation) and Top Gun: Maverick (myth reinforcement), but delivering rhythm-based storytelling inside a sci-fi franchise format — a new narrative grammar.',
      table: null,
    },
    {
      id: '1.8',
      title: 'Spotify-Era Vocal Identity Stability',
      tag: 'high-repeatability vocal signature',
      text: 'Streaming-era pop researchers place James in the "high-repeatability vocal signature artists" group — low tone-recognition latency, high breath-texture signature, a distinctive falsetto identity → high algorithmic longevity potential.',
      table: null,
    },
    {
      id: '1.9',
      title: 'The Michael Jackson Lineage — Persona, Not Sound',
      tag: 'stewardship-based heir, not sonic imitator',
      text: 'James is repeatedly framed as a "Michael Jackson heir," but critics stress the lineage is one of persona and stewardship, not sound — a scandal-free clean image, a peace-first public voice, magnetic stage presence, and eventually the literal custodianship of MJ material via Captain EO: Resonance. His R&B/neo-soul catalogue does not actually resemble MJ\'s pop-funk. This distinguishes him from Jungkook, who through 2023 carried the "sonic MJ" tag (pop maximalism, dance-pop singles) in general-public discourse; after Jungkook\'s late-2023 enlistment, public attention shifted the MJ comparison toward James — who inherited it on the persona axis instead. His 2026 pivot from music toward film mirrors MJ\'s own early-2000s cinematic ambitions (which death cut short), and is read as the move that lifts him from top-tier artist to icon-tier cultural figure — with DECADE (2026) serving as the capstone that formally closes the music-first chapter.',
      table: null,
    },
  ],
  fandomItems: [
    {
      id: '2.1',
      title: 'Dual-Axis Fan Structure',
      text: 'A rare fandom architecture — the NCTzen axis (group-layer), the GONUNMA axis (vocal-entry), and the General listener axis (crossover) coexist without conflict.',
      paths: null as { path: string; type: string }[] | null,
    },
    {
      id: '2.2',
      title: '5 Identity-Based Entry Paths',
      text: null as string | null,
      paths: [
        { path: 'Masked Singer', type: 'Vocal-first fans' },
        { path: 'NCT 127', type: 'Group fans' },
        { path: 'SOFTEST TOUCH', type: 'R&B fans' },
        { path: 'PULSE', type: 'Pop crossover fans' },
        { path: 'ARE U STILL', type: 'Neo-soul listeners' },
      ],
    },
    {
      id: '2.3',
      title: 'Reverse Legitimacy Pathway',
      text: 'The typical pipeline: visual → personality → performance → loyalty. But James\'s pipeline: voice → mystery → credibility → loyalty — sociologically classified as a "reverse legitimacy pathway."',
      paths: null as { path: string; type: string }[] | null,
    },
    {
      id: '2.4',
      title: 'GONUNMA Alter-Ego Effect',
      text: 'The sociological mechanism: an "identity-safe admiration zone" — fans access the art before the artist (the reverse of the typical idol case), which makes loyalty stem from artistic merit rather than visual bonding.',
      paths: null as { path: string; type: string }[] | null,
    },
    {
      id: '2.5',
      title: 'Post-Agency Loyalty Retention (2023)',
      text: 'Typical case: agency exit → fandom split. James\'s case: agency exit → fandom consolidation, because the narrative framing was "artist autonomy," not "conflict."',
      paths: null as { path: string; type: string }[] | null,
    },
    {
      id: '2.6',
      title: 'Silent-Listening Concert Behavior',
      text: 'PULSE TOUR observation: vocal-focused fans create silent-listening segments during vocal sections — scholars classify this as a "respect-based fandom culture indicator," distinct from chant-heavy idol concerts.',
      paths: null as { path: string; type: string }[] | null,
    },
  ],
  legacyItems: [
    { label: 'Generation Classification', val: 'Transnational Idol-Auteur Generation 1' },
    { label: 'Comparable Tier', val: 'IU · G-Dragon · Taemin · The Weeknd' },
    { label: 'Unique Position', val: 'First Southeast Asian-origin global idol-auteur franchise architect inside Korean system trajectory' },
    { label: 'Multi-Hyphenate Stack', val: 'Grammy-winning artist + credited co-screenwriter + co-director + label CEO simultaneously — a combination no member of any comparable global group currently holds' },
    { label: 'Nobel Peace Prize', val: 'Nominated, 2026 — cited for the Gaza ceasefire and Thai-Cambodia peace statements' },
    { label: 'UNESCO Goodwill Ambassador', val: 'Appointed 2026 — a standing title, not a one-off appearance' },
    { label: 'Guinness World Record', val: 'First artist to simultaneously top the Billboard 200, Hot 100, and global box office chart in the same week (DECADE / Deadly Hands week, Sept 2026)' },
    { label: 'Academic Case Study', val: 'Subject of a university course on the "post-agency idol model," first taught 2026' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'บทวิเคราะห์',
    title: 'อิทธิพลเชิงวัฒนธรรม',
    subtitle: 'Post-agency authorship · Idol-auteur hybrid · ผู้บุกเบิก neo-soul K-pop · 2016–2026',
    tab1: '1. การยอมรับเชิงวิชาการ',
    tab2: '2. สังคมวิทยาแฟนด้อม',
    academicSectionHeading: '1 · อิทธิพลเชิงวัฒนธรรม / การยอมรับเชิงวิชาการ',
    fandomSectionHeading: '2 · สังคมวิทยาแฟนด้อม',
    legacyHeading: 'การคาดการณ์มรดก (Academic Forecast)',
  },
  related: [
    { label: 'ภาพลักษณ์สาธารณะ', slug: 'public-image' },
    { label: 'แคนอนศิลปิน', slug: 'canon' },
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
    { label: 'ผลงานเพลง', slug: 'discography' },
    { label: 'ผลงานภาพยนตร์', slug: 'filmography' },
  ],
  academicItems: [
    {
      id: '1.1',
      title: 'โมเดลผสม Idol-Auteur',
      tag: 'post-agency authorship idol',
      text: 'James ถูกจัดอยู่ในหมวดที่นักวิชาการ K-pop เริ่มเรียกว่า "post-agency authorship idol" — foreign-born SM idol ที่เปลี่ยนผ่านไปสู่ global auteur โดยไม่ต้องออกจากกลุ่ม',
      table: {
        cols: ['มิติ', 'ไอดอลแบบดั้งเดิม', 'ศิลปินป็อปสาย Auteur', 'โมเดลของ James'],
        rows: [
          ['การควบคุมความคิดสร้างสรรค์', 'ต่ำ', 'สูง', 'สูง (หลัง 2022)'],
          ['ความเป็นเจ้าของงานออกแบบท่าเต้น', 'บางส่วน', 'ปานกลาง', 'สูง'],
          ['ความเป็นเจ้าของคอนเซปต์', 'นำโดยค่าย', 'นำโดยศิลปิน', 'ผสมผสาน'],
          ['โครงสร้างค่าย', 'ระบบค่าย', 'อิสระ', 'JH Company'],
        ],
      },
    },
    {
      id: '1.2',
      title: 'จุดเปลี่ยนทางวัฒนธรรมของตัวตนใต้หน้ากาก (2016)',
      tag: 'post-visual legitimacy validation',
      text: 'ชัยชนะ King of Mask Singer (Cat\'s Eyes / GONUNMA) — นักวิชาการ Korean media studies ใช้ case นี้ support thesis ว่า anonymity temporarily removes racial hierarchy bias ใน idol reception',
      table: null,
    },
    {
      id: '1.3',
      title: 'การเปลี่ยนแปลงการยอมรับไอดอลต่างชาติ',
      tag: 'vocal legitimacy breakthrough model',
      text: 'James อยู่ใน timeline เดียวกับ Nichkhun (visual ambassador), Lay (China-market expansion), Lisa (performance globalization) แต่เป็นรายแรกที่ถูก classify ว่า "vocal legitimacy breakthrough model" ในระดับ Korean GP reception',
      table: null,
    },
    {
      id: '1.4',
      title: 'เส้นทาง Masculinity ใน R&B',
      tag: 'responsive masculinity archetype',
      text: 'ตลอด LIKE I DO → CAN\'T LEAVE ALONE เกิด "masculine softness normalization arc" — archetype ที่นักวิชาการเรียกว่า responsive masculinity (contrast กับ reactive masculinity)',
      table: {
        cols: ['อัลบั้ม', 'กรอบความเป็นชาย'],
        rows: [
          ['LIKE I DO', 'ความเปราะบางปริศนา'],
          ['SOFTEST TOUCH', 'ความแม่นยำทางอารมณ์'],
          ['PULSE', 'ความมั่นใจแบบ sensual'],
          ['ARE U STILL', 'ความใกล้ชิดแบบคิดถึงอดีต'],
          ['SOUR', 'ความเปราะบาง'],
          ['HONEY', 'ความปรารถนาที่ไม่ก้าวร้าว'],
        ],
      },
    },
    {
      id: '1.5',
      title: 'การฟื้นคืนของ Neo-Soul ในระบบไอดอล',
      tag: 'first mainstream neo-soul pivot in tier-1 idol discography',
      text: 'ARE U STILL (2024) เป็น first mainstream neo-soul pivot inside tier-1 idol discography — slower choreography pacing, analog warmth return, horn stack reintroduction, extended chord palette — นักวิชาการ evaluate ว่าเป็น "retro-soul authenticity without nostalgia cosplay"',
      table: null,
    },
    {
      id: '1.6',
      title: 'สะพานเชื่อมสองวงการ',
      tag: 'transmedia creative operator',
      text: 'Trajectory: idol → auteur → film lead → franchise architect — เป็น trajectory ที่มีเพียง IU, G-Dragon, The Weeknd ที่ผ่านถึงระดับ auteur phase แต่ James ยังเพิ่ม franchise builder layer ด้วย',
      table: null,
    },
    {
      id: '1.7',
      title: 'Captain EO: Resonance ในฐานะการฟื้นฟูความทรงจำเชิงวัฒนธรรม',
      tag: 'legacy reactivation media',
      text: 'Framework: legacy reactivation media — คล้าย Blade Runner 2049 (memory continuation), Top Gun Maverick (myth reinforcement) แต่นำเสนอ rhythm-based storytelling inside sci-fi franchise format ซึ่งเป็น narrative grammar ใหม่',
      table: null,
    },
    {
      id: '1.8',
      title: 'ความเสถียรของ Vocal Identity ในยุค Spotify',
      tag: 'high-repeatability vocal signature',
      text: 'นักวิจัย streaming-era pop จัด James ในกลุ่ม "high-repeatability vocal signature artists" — tone recognition latency ต่ำ, breath texture signature สูง, falsetto identity distinctive → high algorithmic longevity potential',
      table: null,
    },
    {
      id: '1.9',
      title: 'สายเลือด Michael Jackson — persona ไม่ใช่ sound',
      tag: 'heir เชิง stewardship ไม่ใช่ sonic imitator',
      text: 'James ถูก frame เป็น "ทายาท Michael Jackson" ซ้ำๆ แต่นักวิจารณ์เน้นว่าสายเลือดนี้คือเรื่อง persona และ stewardship ไม่ใช่ sound — ภาพลักษณ์สะอาดไร้ scandal, เสียง peace-first ต่อสาธารณะ, presence บนเวทีที่ดึงดูด และท้ายสุดคือการเป็นผู้ดูแลมรดก MJ โดยตรงผ่าน Captain EO: Resonance งานเพลง R&B/neo-soul ของเขาไม่ได้คล้าย pop-funk ของ MJ จริงๆ จุดนี้แยกเขาจาก Jungkook ที่จนถึงปี 2023 ถือแท็ก "MJ เชิง sound" (pop maximalism, dance-pop singles) ในวงกว้าง หลัง Jungkook เข้ากรมปลายปี 2023 ความสนใจสาธารณะย้ายการเทียบ MJ มาที่ James — ผู้รับสืบทอดบนแกน persona แทน การ pivot จากเพลงไปหนังในปี 2026 สะท้อนความทะเยอทะยานด้านภาพยนตร์ของ MJ ช่วงต้นยุค 2000 (ที่ความตายตัดจบก่อน) และถูกอ่านว่าเป็นก้าวที่ยกเขาจากศิลปิน top-tier ขึ้นสู่ icon-tier โดยมี DECADE (2026) เป็น capstone ปิดบทของยุค music-first อย่างเป็นทางการ',
      table: null,
    },
  ],
  fandomItems: [
    {
      id: '2.1',
      title: 'โครงสร้างแฟนสองแกน',
      text: 'สถาปัตยกรรมแฟนด้อมที่หายาก — NCTzen axis (group-layer) + GONUNMA axis (vocal-entry) + General listener axis (crossover) อยู่ร่วมกันได้โดยไม่ขัดแย้ง',
      paths: null as { path: string; type: string }[] | null,
    },
    {
      id: '2.2',
      title: '5 เส้นทางเข้าถึงตามตัวตน',
      text: null as string | null,
      paths: [
        { path: 'Masked Singer', type: 'แฟนสายเสียงร้องมาก่อน' },
        { path: 'NCT 127', type: 'แฟนวง' },
        { path: 'SOFTEST TOUCH', type: 'แฟน R&B' },
        { path: 'PULSE', type: 'แฟนสาย pop crossover' },
        { path: 'ARE U STILL', type: 'คนฟัง neo-soul' },
      ],
    },
    {
      id: '2.3',
      title: 'เส้นทางความชอบธรรมแบบย้อนกลับ',
      text: 'Pipeline ปกติ: visual → personality → performance → loyalty แต่ James pipeline: voice → mystery → credibility → loyalty — sociologically classified เป็น "reverse legitimacy pathway"',
      paths: null as { path: string; type: string }[] | null,
    },
    {
      id: '2.4',
      title: 'ปรากฏการณ์ Alter-Ego ของ GONUNMA',
      text: 'กลไก sociological: "identity-safe admiration zone" — แฟนเข้าถึง art ก่อน artist (กลับกันจาก typical idol case) ทำให้ loyalty มาจาก artistic merit ไม่ใช่ visual bonding',
      paths: null as { path: string; type: string }[] | null,
    },
    {
      id: '2.5',
      title: 'การรักษาความภักดีหลังออกจากค่าย (2023)',
      text: 'Typical case: agency exit → fandom split — James case: agency exit → fandom consolidation เพราะ narrative framing เป็น "artist autonomy" ไม่ใช่ "conflict"',
      paths: null as { path: string; type: string }[] | null,
    },
    {
      id: '2.6',
      title: 'พฤติกรรมฟังคอนเสิร์ตแบบเงียบ',
      text: 'PULSE TOUR observation: แฟนสาย vocal สร้าง silent-listening segments ระหว่างช่วงร้อง — นักวิชาการ classify เป็น "respect-based fandom culture indicator" ต่างจาก chant-heavy idol concerts',
      paths: null as { path: string; type: string }[] | null,
    },
  ],
  legacyItems: [
    { label: 'การจัดประเภทเจเนอเรชัน', val: 'Transnational Idol-Auteur Generation 1' },
    { label: 'ระดับที่เทียบเคียงได้', val: 'IU · G-Dragon · Taemin · The Weeknd' },
    { label: 'ตำแหน่งที่ไม่เหมือนใคร', val: 'ผู้บุกเบิกคนแรกที่มีต้นกำเนิดจากเอเชียตะวันออกเฉียงใต้ ในฐานะ global idol-auteur และ franchise architect ภายใน trajectory ของระบบเกาหลี' },
    { label: 'Multi-Hyphenate Stack', val: 'Grammy winner + co-screenwriter ที่มีเครดิต + co-director + CEO ค่ายตัวเอง พร้อมกัน — combination ที่ไม่มีสมาชิกจากกลุ่มระดับโลกใดถืออยู่ตอนนี้' },
    { label: 'Nobel Peace Prize', val: 'ได้รับการเสนอชื่อ ปี 2026 — อ้างอิงจากแถลงการณ์หยุดยิง Gaza และสันติภาพไทย-กัมพูชา' },
    { label: 'UNESCO Goodwill Ambassador', val: 'ได้รับแต่งตั้งปี 2026 — เป็นตำแหน่งถาวร ไม่ใช่แค่การปรากฏตัวครั้งเดียว' },
    { label: 'Guinness World Record', val: 'ศิลปินคนแรกที่ครองอันดับ 1 พร้อมกันทั้ง Billboard 200, Hot 100 และ box office chart ระดับโลกในสัปดาห์เดียวกัน (สัปดาห์ DECADE / Deadly Hands, ก.ย. 2026)' },
    { label: 'Academic Case Study', val: 'เป็นหัวข้อวิชาเรียนในมหาวิทยาลัยเรื่อง "post-agency idol model" เปิดสอนครั้งแรกปี 2026' },
  ],
};

export const culturalImpact = { en, th };
export function getCulturalImpact(lang: Lang) {
  return culturalImpact[lang];
}
