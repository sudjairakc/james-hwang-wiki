// Bilingual content for the JH Company page.
// Shape: { en: {...}, th: {...} } with identical keys.
// In prose HTML, the token %L% is replaced by `${base}${lang}/` at render time.

import type { Lang } from '../../i18n';

const en = {
  ui: {
    label: 'Business',
    title: 'JH Company',
    subtitle: 'Founded 2023 · Seoul HQ · Single-artist creative studio & IP house',
    introHtml:
      'JH Company was established by <strong style="color:var(--text)">James Hwang</strong> on April 30, 2023, immediately following the ' +
      '<a href="%L%legal" style="color:var(--gold)">settlement of his contract dispute with SM Entertainment</a>. ' +
      'The company manages his <a href="%L%discography" style="color:var(--gold)">music catalog</a>, ' +
      '<a href="%L%tours" style="color:var(--gold)">touring operations</a>, ' +
      '<a href="%L%ecosystem" style="color:var(--gold)">brand partnerships</a>, ' +
      'and serves as the production entity behind the <a href="%L%filmography/resonance" style="color:var(--gold)">RESONANCE franchise</a>. ' +
      'By founder mandate the company signs <strong style="color:var(--text)">no other artists</strong> — it exists solely as James Hwang\'s creative vehicle and IP house, not a roster label.',
    ownershipHeading: 'Ownership Structure',
    divisionsHeading: 'Core Divisions',
    revenueHeading: 'Revenue Structure',
    revenueNote: 'The touring share above is a steady-state annual mix, not a single year\'s actual number — it swings hard with the tour calendar. Across the two tours James has run, ticket sales alone total $309M ($235M for PULSE, $74M for DECADE), landing almost entirely in the specific years each tour was on the road rather than spread evenly.',
    ipHeading: 'IP Portfolio',
    merchHeading: 'Merchandise & Product Lines',
    cultureHeading: 'Company Culture & Work Environment',
    valuationHeading: 'Valuation Roadmap',
    rosterHeading: 'Artist Roster',
    partnersHeading: 'Partners & Counterparties',
    tableShareholder: 'Shareholder',
    tableOwnership: 'Ownership',
    tableRole: 'Role',
    tablePartner: 'Partner',
    tableLayer: 'Layer',
    rosterNote:
      'JH Company is a single-artist studio by design — it has never signed or accepted any other artist. Every roster-expansion proposal (including from former bandmates) has been turned down by the founder.',
    brandHeading: 'Brand Identity',
    brandNameLabel: 'Name',
    brandTaglineLabel: 'Tagline',
    brandPlatformLabel: 'Creative Platform',
    brandPositioningLabel: 'Positioning',
    brandPillarsLabel: 'Brand Pillars',
    brandPersonalityLabel: 'Personality',
    brandArchetypeLabel: 'Archetype',
    brandBoardLabel: 'Corporate Identity Board',
  },
  brand: {
    meaning: 'JH — James Hwang · Just Horizons',
    tagline: 'One Vision. Many Horizons.',
    platform: 'Framing the Horizon',
    positioning: 'A creator-led entertainment house built entirely around James Hwang\'s own work — turning one artistic vision into music, performance, stories, and screen. Creative and production stay in-house, and by founder mandate the company represents no other artists.',
    image: 'jh_company_ci.png',
    imageCaption: 'JH Company corporate identity board — logo system, monogram, sub-brand marks, colour palette, typography, and real-world application mockups, developed under the "Framing the Horizon" creative platform.',
    pillars: [
      { name: 'Authorship', desc: 'Every output carries James\'s authorship and point of view — never creative-by-committee.' },
      { name: 'Expansion', desc: 'One vision extended across formats — sound, story, screen, stage — not across a roster of artists.' },
      { name: 'Craft', desc: 'Detail, quality, and finish prioritized over sheer volume of output.' },
      { name: 'Integration', desc: 'Creative and production sit under one roof so vision and execution stay aligned.' },
      { name: 'Originality', desc: 'Every project starts from an original idea and a distinct voice.' },
    ],
    personality: ['Visionary', 'Cinematic', 'Refined', 'Multi-Dimensional', 'Quietly Confident', 'Author-Led'],
    archetype: ['Creator', 'Visionary', 'Performer', 'Producer'],
  },
  kpis: [
    { val: '82%', label: 'James Ownership', sub: 'Controlling shareholder' },
    { val: '$95–160M', label: 'Annual Revenue', sub: 'Post-2026 projection' },
    { val: '$420–650M', label: 'Peak Valuation', sub: 'Post-RESONANCE scenario' },
    { val: '1', label: 'Artists Signed', sub: 'Single-artist by design' },
  ],
  ownershipRows: [
    { who: 'James Hwang', pct: '82%', role: 'Controlling shareholder', w: 82 },
    { who: 'Executive Partners', pct: '8%', role: 'Operational leadership layer', w: 8 },
    { who: 'Strategic Investors', pct: '10%', role: 'Growth capital support', w: 10 },
  ],
  divisions: [
    { name: 'Music', icon: '♪', desc: 'Catalog rollout · Producers network · Sonic identity' },
    { name: 'JH Studio', icon: '▣', desc: 'In-house recording and post facility, Seongsu-dong · opened Oct 2023, funded by PULSE Tour leg 1' },
    { name: 'Touring', icon: '◎', desc: 'Primary revenue engine · Dream Maker / Live Nation / AEG' },
    { name: 'Publishing & Songwriting', icon: '◇', desc: 'Self-catalog publishing + tracks written for other artists' },
    { name: 'Brand Partnerships', icon: '◆', desc: '≈ $16M–22M annual endorsement throughput' },
    { name: 'Film & Franchise', icon: '▶', desc: 'RESONANCE universe · Disney+ / Trilogy films' },
  ],
  revenue: [
    { segment: 'Touring', share: '38–45%', role: 'Primary revenue engine', pct: 40 },
    { segment: 'Endorsements', share: '22–28%', role: 'High-margin celebrity leverage', pct: 24 },
    { segment: 'Film / Franchise IP', share: '12–18%', role: 'Valuation multiplier pillar', pct: 14 },
    { segment: 'Recorded Music', share: '8–12%', role: 'Catalog growth layer', pct: 9 },
    { segment: 'Publishing', share: '5–8%', role: 'Long-tail royalty structure', pct: 6 },
    { segment: 'Merchandising', share: '6–9%', role: 'Brand identity monetization', pct: 7 },
  ],
  ipPortfolio: [
    {
      asset: 'RESONANCE Universe',
      type: 'Franchise IP',
      ownership: 'Co-owned — The Walt Disney Company · Lucasfilm · MJ Estate · JH Company',
      detail:
        'Captain EO: RESONANCE draws its rights from the original Captain EO (1986), which is held by multiple parties — Disney is the majority rights holder and distributor, Lucasfilm as producer of the original, the MJ Estate holds the music and likeness rights to Michael Jackson, and JH Company holds creative ownership as creator of the new universe. JH Company\'s stake is smaller than Disney\'s, but it retains creative control and co-direction rights — making this the highest-value franchise asset in the portfolio. The deal closed because every party benefited: the MJ Estate trusted a documented MJ-lineage artist to reactivate a dormant property on favorable royalty + strict likeness-guardrail terms; a franchise-fatigued Lucasfilm gained a low-risk new tentpole it did not have to originate; and Disney — already backing James after Shang-Chi — kept majority + distribution while he carried the creative risk and funded development. A Captain EO: RESONANCE dark-ride attraction, announced for Disney parks in 2027 and slated to open in 2028, extends the IP from screen into physical park real estate — a monetization layer no comparable global pop act has access to.',
    },
    {
      asset: 'Music Catalog (2023–present)',
      type: 'Recorded Music IP',
      ownership: '100% (JH Company) · Distributed via Warner Music Korea',
      detail:
        'PULSE, ARE U STILL, CAN\'T LEAVE ALONE, DECADE — every master recorded after the 2023 settlement has belonged to JH Company from the start, unlike the SM-era recordings, which remain under the SM catalog.',
    },
    {
      asset: 'SM-Era Catalog (2016–2023)',
      type: 'Recorded Music IP',
      ownership: 'SM Entertainment (master) · James Hwang (publishing share)',
      detail:
        'GONUNMA: LIKE I DO, SOFTEST TOUCH, the two SM STATION singles, and the NCT 127 recordings — the masters remain with SM, but James\'s publishing royalty share was reviewed and adjusted under the 2023 settlement agreement. This is why DECADE carries re-recorded solo versions of the older songs rather than the originals.',
    },
    {
      asset: 'Publishing Catalog',
      type: 'Music Publishing',
      ownership: 'JH Company Publishing · Co-administered',
      detail:
        'Covers songwriting credits on his own releases, tracks written for other artists (Jaehyun\'s "SMOKE", aespa\'s "Flowers"), and sync licensing deals — a long-tail revenue stream that keeps growing.',
    },
    {
      asset: 'GONUNMA Name & Trademark',
      type: 'Trademark / Brand IP',
      ownership: '100% James Hwang — confirmed in SM settlement 2023',
      detail:
        'Rights to the GONUNMA name and trademark were confirmed in the settlement with SM. It\'s retired as a performing/artist name but retained as a producer credit and as a product/capsule brand line.',
    },
  ],
  merchandise: [
    {
      line: 'JH Company Official Store',
      category: 'Fan Merchandise',
      scale: 'Ongoing',
      detail:
        'Photobooks, tour goods, album packages — sold direct-to-consumer through the Weverse Store and the JH Company online store, with no third-party retailer involved. Revenue falls under the Merchandising segment (6–9% of total revenue).',
    },
    {
      line: 'GONUNMA × Nike Capsule Series',
      category: 'Fashion Collaboration',
      scale: 'Vol.1 (2023) · Vol.2 (2025)',
      detail:
        'Co-designed capsule collections sold through the SNKRS app and Nike flagship stores worldwide. Vol.1 sold out within 3 hours — classified as commercial fashion revenue rather than just an endorsement fee, since James holds a royalty share on sales.',
    },
    {
      line: 'PULSE Tour Merchandise',
      category: 'Concert Goods',
      scale: '2023–2024 · 64 shows',
      detail:
        'Concert-exclusive merchandise sold at every venue on the PULSE tour — estimated revenue of $18–28M across the run, reported separately from the $235M touring gross.',
    },
  ],
  companyCulture: [
    {
      label: 'Benefits & Welfare',
      color: '#5a7c6a',
      text:
        'JH Company\'s benefits are among the highest in the Korean entertainment industry — full health insurance, compensation competitive with major agencies, a formal work-life balance policy, and a corporate culture without the traditional idol-agency hierarchy. This reputation has spread across the industry and keeps job applications coming in, even when the company isn\'t actively hiring.',
    },
    {
      label: 'Single-Artist Mandate',
      color: '#5a7aaa',
      text:
        'JH Company has never signed another artist — it has been a single-artist studio by James\'s intent since founding. Despite numerous artists and trainees reaching out (including former bandmates), James has turned down every one, citing his refusal to recreate the agency–artist relationship he was once disadvantaged by, and his unwillingness to make anyone else carry the weight of his creative control. The company functions as a personal creative vehicle and IP house, not a label built to expand its roster.',
    },
    {
      label: 'Workload Reality',
      color: '#facc15',
      text:
        'Good benefits don\'t mean light workloads — James works intensively across every project (composition, lyrics, arrangement, production, film), and the RESONANCE franchise demands a constant production pipeline. That\'s a heavy load for a team that\'s deliberately kept small, since there\'s no other roster to help spread the output — everything still revolves around one artist. Turnover is low thanks to good pay, but burnout is a recognized issue within the organization.',
    },
    {
      label: 'Revenue Ceiling Effect',
      color: '#c06080',
      text:
        'As a single-artist company, the revenue ceiling is tied entirely to James\'s own output — there\'s no roster diversification to spread risk or add revenue streams the way a typical label would. Industry analysts see JH Company as "leaving money on the table" by not expanding its roster despite having the infrastructure and reputation to do so, but James maintains that scale isn\'t the goal, and accepts this ceiling as the trade-off for retaining full control.',
    },
    {
      label: '2024 Return Agreement',
      color: '#9b7fc8',
      text:
        'When James returned to NCT 127 as an external artist in December 2024, the deal that made it possible was itself the story. K-pop precedent is unambiguous — idols who fully depart an agency after a legal dispute don\'t come back to group activity; the industry pattern going back to the earliest big-agency exits is a clean, permanent break. SM negotiated instead, because losing him permanently — after he\'d become a Grammy-nominated global name the group could no longer generate on its own — was worse for the company than sharing control. The terms JH Company secured were unprecedented for a returning idol: James kept full ownership of JH Company and his post-2023 catalog, chose which dates and releases to participate in, and answered to no renewed exclusive contract. It was under that same framework that he later resumed full activity for the group\'s 10th anniversary in 2026 — and it was framed internally, and later in press coverage, as the moment the "Hwang Clause" era of leverage went from legal precedent to commercial practice.',
    },
  ],
  valPhases: [
    { phase: 'Post-DECADE', range: '$180M–320M', trigger: 'Touring-scale validation' },
    { phase: 'Post-RESONANCE', range: '$420M–650M', trigger: 'Franchise IP activation' },
    { phase: 'Aggressive upside', range: '$800M+', trigger: 'Global studio-tier transition' },
  ],
  roster: [
    { name: 'James Hwang', since: '2023', role: 'Founder · Sole Artist' },
  ],
  partners: [
    { name: 'SM Entertainment', layer: 'Former label · counterparty — 2024 Return Agreement', role: 'Not a partner in the ordinary sense: the relationship runs through an adversarial 2023 settlement and the residual friction that followed. What binds them now is the first negotiated return-to-group deal of its kind in K-pop (Dec 2024) — James retains full JH Company ownership, activity choice, and revenue independence while participating in select NCT 127 dates' },
    { name: 'Warner Music Korea', layer: 'Global Distribution', role: 'Music distribution infrastructure' },
    { name: 'Avex Group', layer: 'Japan', role: 'Territory execution partner' },
    { name: 'Creative Artists Agency', layer: 'US', role: 'Representation + packaging' },
    { name: 'The Walt Disney Company', layer: 'Film / IP', role: 'Cinematic IP platform — RESONANCE' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ธุรกิจ',
    title: 'JH Company',
    subtitle: 'ก่อตั้ง 2023 · สำนักงานใหญ่กรุงโซล · สตูดิโอสร้างสรรค์ของศิลปินคนเดียวและบ้านที่ถือ IP',
    introHtml:
      'JH Company ก่อตั้งโดย <strong style="color:var(--text)">James Hwang</strong> เมื่อวันที่ 30 เมษายน 2023 ทันทีหลังจาก' +
      '<a href="%L%legal" style="color:var(--gold)">การ settle ข้อพิพาทสัญญากับ SM Entertainment</a> ' +
      'บริษัทดูแล<a href="%L%discography" style="color:var(--gold)">คลังเพลง</a>, ' +
      '<a href="%L%tours" style="color:var(--gold)">การดำเนินงานทัวร์</a>, ' +
      '<a href="%L%ecosystem" style="color:var(--gold)">พาร์ทเนอร์แบรนด์</a> ' +
      'และทำหน้าที่เป็นหน่วยงานผลิตเบื้องหลังแฟรนไชส์ <a href="%L%filmography/resonance" style="color:var(--gold)">RESONANCE</a> ' +
      'ตามเจตนาของผู้ก่อตั้ง บริษัท<strong style="color:var(--text)">ไม่เซ็นศิลปินคนอื่นเลย</strong> เพราะตั้งขึ้นเพื่อเป็นเครื่องมือทำงานสร้างสรรค์และเป็นที่เก็บ IP ของ James Hwang เท่านั้น ไม่ใช่ค่ายที่จะขยายสังกัด',
    ownershipHeading: 'โครงสร้างผู้ถือหุ้น',
    divisionsHeading: 'หน่วยงานหลัก',
    revenueHeading: 'โครงสร้างรายได้',
    revenueNote: 'สัดส่วนทัวร์ด้านบนคือค่าเฉลี่ยรายปีในภาวะปกติ ไม่ใช่ตัวเลขจริงของปีใดปีหนึ่ง — มันแกว่งแรงตามปฏิทินทัวร์ ตลอดสองทัวร์ที่ James เคยเล่น ยอดขายตั๋วรวมอยู่ที่ $309M ($235M จาก PULSE, $74M จาก DECADE) ซึ่งตกอยู่ในปีที่แต่ละทัวร์เดินสายจริงเกือบทั้งหมด ไม่ได้กระจายเท่ากันทุกปี',
    ipHeading: 'พอร์ตโฟลิโอ IP',
    merchHeading: 'สินค้าและผลิตภัณฑ์',
    cultureHeading: 'วัฒนธรรมองค์กร & สภาพแวดล้อมการทำงาน',
    valuationHeading: 'แผนมูลค่าบริษัท',
    rosterHeading: 'ศิลปินในสังกัด',
    partnersHeading: 'พาร์ทเนอร์และคู่สัญญา',
    tableShareholder: 'ผู้ถือหุ้น',
    tableOwnership: 'สัดส่วนหุ้น',
    tableRole: 'บทบาท',
    tablePartner: 'พาร์ทเนอร์',
    tableLayer: 'ขอบเขต',
    rosterNote:
      'JH Company เป็นสตูดิโอศิลปินคนเดียวโดยเจตนา ไม่เคยเซ็นและไม่รับศิลปินคนอื่นเข้าสังกัด ข้อเสนอให้ขยายสังกัดทุกครั้ง รวมถึงจากเพื่อนร่วมวงเก่า ถูกผู้ก่อตั้งปฏิเสธหมด',
    brandHeading: 'อัตลักษณ์แบรนด์',
    brandNameLabel: 'ชื่อ',
    brandTaglineLabel: 'สโลแกน',
    brandPlatformLabel: 'แนวคิดหลักด้านงานสร้างสรรค์',
    brandPositioningLabel: 'การวางตำแหน่ง',
    brandPillarsLabel: 'เสาหลักแบรนด์',
    brandPersonalityLabel: 'บุคลิก',
    brandArchetypeLabel: 'ต้นแบบบุคลิก',
    brandBoardLabel: 'บอร์ดอัตลักษณ์องค์กร',
  },
  brand: {
    meaning: 'JH — James Hwang · Just Horizons',
    tagline: 'One Vision. Many Horizons.',
    platform: 'Framing the Horizon',
    positioning: 'บริษัทบันเทิงที่ตัวผู้สร้างงานเป็นคนนำ ตั้งขึ้นรอบงานของ James Hwang ล้วนๆ เพื่อแปลงวิสัยทัศน์ของศิลปินคนเดียวให้เป็นเพลง การแสดง เรื่องเล่า และภาพยนตร์ งานสร้างสรรค์และงานผลิตทำในบริษัทเอง และตามเจตนาของผู้ก่อตั้ง บริษัทไม่รับดูแลศิลปินคนอื่น',
    image: 'jh_company_ci.png',
    imageCaption: 'บอร์ดอัตลักษณ์องค์กรของ JH Company ประกอบด้วยระบบโลโก้แบบอักษรไล่ซ้อน มาร์กของแบรนด์ย่อย ชุดสี ชุดตัวอักษร และตัวอย่างการใช้งานจริง พัฒนาขึ้นภายใต้แนวคิด "Framing the Horizon"',
    pillars: [
      { name: 'ความเป็นเจ้าของงาน', desc: 'ทุกผลงานมีลายมือและมุมมองของ James ไม่ใช่งานที่ตัดสินกันในที่ประชุม' },
      { name: 'การขยายตัว', desc: 'ขยายวิสัยทัศน์เดียวข้ามสื่อ ทั้งเสียง เรื่องเล่า จอ และเวที ไม่ใช่ขยายด้วยการเพิ่มศิลปินในสังกัด' },
      { name: 'Craft', desc: 'ให้ความสำคัญกับรายละเอียด คุณภาพ และความเนี้ยบ มากกว่าปริมาณงาน' },
      { name: 'การรวมงานไว้ที่เดียว', desc: 'งานสร้างสรรค์และงานผลิตอยู่ใต้ชายคาเดียวกัน ความคิดกับการลงมือทำจึงไม่หลุดจากกัน' },
      { name: 'Originality', desc: 'ทุกโปรเจกต์เริ่มจากไอเดียออริจินัลและเสียงที่เป็นเอกลักษณ์' },
    ],
    personality: ['Visionary', 'Cinematic', 'Refined', 'Multi-Dimensional', 'Quietly Confident', 'Author-Led'],
    archetype: ['Creator', 'Visionary', 'Performer', 'Producer'],
  },
  kpis: [
    { val: '82%', label: 'สัดส่วนหุ้นของ James', sub: 'ผู้ถือหุ้นใหญ่' },
    { val: '$95–160M', label: 'รายได้ต่อปี', sub: 'ประมาณการหลังปี 2026' },
    { val: '$420–650M', label: 'มูลค่าสูงสุด', sub: 'สถานการณ์หลัง RESONANCE' },
    { val: '1', label: 'ศิลปินในสังกัด', sub: 'ตั้งใจให้มีคนเดียว' },
  ],
  ownershipRows: [
    { who: 'James Hwang', pct: '82%', role: 'ผู้ถือหุ้นใหญ่', w: 82 },
    { who: 'พาร์ทเนอร์ผู้บริหาร', pct: '8%', role: 'ชั้นผู้บริหารระดับปฏิบัติการ', w: 8 },
    { who: 'นักลงทุนเชิงกลยุทธ์', pct: '10%', role: 'ทุนสนับสนุนการเติบโต', w: 10 },
  ],
  divisions: [
    { name: 'ดนตรี', icon: '♪', desc: 'การปล่อยผลงาน · เครือข่ายโปรดิวเซอร์ · เอกลักษณ์เสียง' },
    { name: 'JH Studio', icon: '▣', desc: 'ห้องอัดและห้องตัดต่อของบริษัทเอง ย่านซองซูดง · เปิดตุลาคม 2023 สร้างด้วยรายรับจาก PULSE Tour ขาแรก' },
    { name: 'ทัวร์คอนเสิร์ต', icon: '◎', desc: 'เครื่องยนต์รายได้หลัก · Dream Maker / Live Nation / AEG' },
    { name: 'งานเผยแพร่ & แต่งเพลง', icon: '◇', desc: 'ลิขสิทธิ์เพลงของตัวเอง + เพลงที่แต่งให้ศิลปินอื่น' },
    { name: 'พาร์ทเนอร์แบรนด์', icon: '◆', desc: '≈ $16M–22M รายได้พรีเซ็นเตอร์ต่อปี' },
    { name: 'ภาพยนตร์ & แฟรนไชส์', icon: '▶', desc: 'จักรวาล RESONANCE · Disney+ / ไตรภาคภาพยนตร์' },
  ],
  revenue: [
    { segment: 'ทัวร์คอนเสิร์ต', share: '38–45%', role: 'เครื่องยนต์รายได้หลัก', pct: 40 },
    { segment: 'พรีเซ็นเตอร์', share: '22–28%', role: 'มาร์จิ้นสูงจากพลังคนดัง', pct: 24 },
    { segment: 'ภาพยนตร์ / Franchise IP', share: '12–18%', role: 'เสาหลักตัวคูณมูลค่าบริษัท', pct: 14 },
    { segment: 'เพลงที่บันทึกเสียง', share: '8–12%', role: 'ชั้นการเติบโตของคลังเพลง', pct: 9 },
    { segment: 'การเผยแพร่ (Publishing)', share: '5–8%', role: 'ค่าลิขสิทธิ์ที่ทยอยเข้ามาในระยะยาว', pct: 6 },
    { segment: 'สินค้าที่ระลึก', share: '6–9%', role: 'การสร้างรายได้จากอัตลักษณ์แบรนด์', pct: 7 },
  ],
  ipPortfolio: [
    {
      asset: 'RESONANCE Universe',
      type: 'ทรัพย์สินทางปัญญาแฟรนไชส์ (Franchise IP)',
      ownership: 'ถือร่วมกัน — The Walt Disney Company · Lucasfilm · MJ Estate · JH Company',
      detail:
        'Captain EO: RESONANCE ต้องอิงสิทธิ์จาก original Captain EO (1986) ซึ่งมีหลายฝ่ายถือ — Disney เป็น majority rights holder และ distributor, Lucasfilm ในฐานะ producer ของต้นฉบับ, MJ Estate ถือสิทธิ์เพลงและ likeness ของ Michael Jackson, JH Company ถือ creative ownership ในฐานะผู้สร้าง new universe JH Company มีสัดส่วนน้อยกว่า Disney แต่ retain สิทธิ์ creative control และ co-direction ถือเป็น franchise asset ที่มีมูลค่าสูงที่สุดในพอร์ตโฟลิโอ ดีลปิดได้เพราะทุกฝ่ายได้ประโยชน์: MJ Estate เชื่อใจศิลปินสาย MJ-lineage ให้ revive IP ที่หลับอยู่บนเงื่อนไข royalty ที่ดี + guardrail เรื่อง likeness ที่เข้มงวด · Lucasfilm ที่แฟรนไชส์หลักกำลังล้าได้ tentpole ใหม่ความเสี่ยงต่ำที่ไม่ต้องริเริ่มเอง · Disney ที่หนุน James อยู่แล้วหลัง Shang-Chi เก็บ majority + distribution ไว้ ขณะที่ James แบก creative risk และลงทุนพัฒนา dark-ride attraction ของ Captain EO: RESONANCE ที่ประกาศสำหรับ Disney park ปี 2027 และกำหนดเปิดปี 2028 ขยาย IP จากจอไปสู่ physical park จริง — ชั้นรายได้ที่ pop act ระดับโลกคนอื่นไม่มีทางเข้าถึง',
    },
    {
      asset: 'คลังเพลง (2023–ปัจจุบัน)',
      type: 'ทรัพย์สินทางปัญญาเพลงบันทึกเสียง (Recorded Music IP)',
      ownership: '100% (JH Company) · จัดจำหน่ายผ่าน Warner Music Korea',
      detail:
        "PULSE, ARE U STILL, CAN\'T LEAVE ALONE, DECADE — master ทุกชิ้นที่บันทึกหลัง settlement ปี 2023 เป็นของ JH Company ตั้งแต่ต้น ต่างจาก SM-era recordings ที่ยังอยู่ภายใต้ SM catalog",
    },
    {
      asset: 'คลังเพลงยุค SM (2016–2023)',
      type: 'ทรัพย์สินทางปัญญาเพลงบันทึกเสียง (Recorded Music IP)',
      ownership: 'SM Entertainment (มาสเตอร์) · James Hwang (ส่วนแบ่งด้าน publishing)',
      detail:
        'GONUNMA: LIKE I DO, SOFTEST TOUCH, ซิงเกิล SM STATION สองเพลง และ NCT 127 recordings — master อยู่กับ SM แต่ publishing royalty share ของ James ได้รับการตรวจสอบและปรับในข้อตกลง settlement 2023 นี่คือเหตุผลที่ DECADE ใช้ solo version ที่อัดใหม่ของเพลงยุคก่อน ไม่ใช่ต้นฉบับ',
    },
    {
      asset: 'คลังลิขสิทธิ์การเผยแพร่',
      type: 'ลิขสิทธิ์การเผยแพร่เพลง (Music Publishing)',
      ownership: 'JH Company Publishing · บริหารร่วมกัน',
      detail:
        'รวมเครดิตแต่งเพลงในผลงานของตัวเอง เพลงที่เขียนให้ศิลปินอื่นอย่าง "SMOKE" ของ Jaehyun และ "Flowers" ของ aespa และดีลอนุญาตใช้เพลงในสื่อ เป็นรายได้ที่ทยอยเข้ามาเรื่อยๆ และโตต่อเนื่อง',
    },
    {
      asset: 'ชื่อและเครื่องหมายการค้า GONUNMA',
      type: 'เครื่องหมายการค้า / IP แบรนด์',
      ownership: '100% James Hwang — ยืนยันใน settlement กับ SM ปี 2023',
      detail:
        'สิทธิ์ในชื่อและเครื่องหมายการค้า GONUNMA ได้รับการยืนยันในข้อตกลงกับ SM เขาเลิกใช้เป็นชื่อในการแสดงแล้ว แต่ยังเก็บไว้เป็นเครดิตโปรดิวเซอร์และเป็นชื่อไลน์สินค้า',
    },
  ],
  merchandise: [
    {
      line: 'JH Company Official Store',
      category: 'สินค้าสำหรับแฟน',
      scale: 'ต่อเนื่อง',
      detail:
        'โฟโต้บุ๊ก ของที่ระลึกจากทัวร์ และแพ็กเกจอัลบั้ม ขายผ่าน Weverse Store และร้านออนไลน์ของ JH Company ถึงผู้ซื้อโดยตรง ไม่ผ่านคนกลาง รายได้ส่วนนี้อยู่ในหมวดสินค้าที่ระลึก คิดเป็น 6–9% ของรายได้รวม',
    },
    {
      line: 'GONUNMA × Nike Capsule Series',
      category: 'คอลแลบแฟชั่น',
      scale: 'Vol.1 (2023) · Vol.2 (2025)',
      detail:
        'คอลเลกชันจำกัดที่ออกแบบร่วมกัน ขายผ่านแอป SNKRS และร้านเรือธงของ Nike ทั่วโลก ชุดแรกหมดใน 3 ชั่วโมง นับเป็นรายได้จากธุรกิจแฟชั่น ไม่ใช่แค่ค่าตัวพรีเซนเตอร์ เพราะ James ได้ส่วนแบ่งจากยอดขายด้วย',
    },
    {
      line: 'PULSE Tour Merchandise',
      category: 'สินค้าคอนเสิร์ต',
      scale: '2023–2024 · 64 shows',
      detail:
        'สินค้าที่ขายเฉพาะในคอนเสิร์ต วางขายทุกสถานที่ของทัวร์ PULSE ประมาณการรายได้ $18–28M ตลอดทัวร์ ไม่รวมอยู่ในรายได้ทัวร์ $235M ที่รายงานแยกไว้',
    },
  ],
  companyCulture: [
    {
      label: 'Benefits & Welfare',
      color: '#5a7c6a',
      text:
        'สวัสดิการของ JH Company อยู่ในระดับสูงสุดของวงการบันเทิงเกาหลี มีประกันสุขภาพเต็มรูปแบบ ค่าตอบแทนสู้กับค่ายใหญ่ได้ นโยบายเรื่องสมดุลชีวิตกับงานที่เขียนไว้เป็นทางการ และวัฒนธรรมองค์กรที่ไม่มีลำดับชั้นแบบค่ายไอดอลดั้งเดิม ชื่อเสียงด้านนี้แพร่ในวงการจนมีใบสมัครส่งเข้ามาเรื่อยๆ แม้บริษัทไม่ได้ประกาศรับสมัคร',
    },
    {
      label: 'Single-Artist Mandate',
      color: '#5a7aaa',
      text:
        'JH Company ไม่เซ็นศิลปินคนอื่นเลย เป็นสตูดิโอศิลปินคนเดียวตามเจตนาของ James ตั้งแต่วันก่อตั้ง แม้มีศิลปินและเด็กฝึกจำนวนมากติดต่อเข้ามา รวมถึงเพื่อนร่วมวงเก่า เขาก็ปฏิเสธทุกครั้ง โดยให้เหตุผลว่าไม่อยากสร้างความสัมพันธ์แบบค่ายกับศิลปินที่ตัวเองเคยเป็นฝ่ายเสียเปรียบ และไม่อยากให้ใครต้องมาแบกภาระเรื่องอำนาจตัดสินใจของเขา บริษัทจึงเป็นเครื่องมือทำงานสร้างสรรค์ส่วนตัวและเป็นที่เก็บ IP ไม่ใช่ค่ายที่ขยายสังกัด',
    },
    {
      label: 'Workload Reality',
      color: '#facc15',
      text:
        'สวัสดิการดีไม่ได้แปลว่างานเบา James ลงมือหนักในทุกโปรเจกต์ ทั้งแต่งเพลง เขียนเนื้อ เรียบเรียง โปรดิวซ์ และงานหนัง ส่วนแฟรนไชส์ RESONANCE ก็ต้องเดินสายการผลิตตลอด งานจึงหนักมากสำหรับทีมที่ตั้งใจให้เล็ก เพราะไม่มีศิลปินคนอื่นมาช่วยกระจายภาระ ทุกอย่างยังหมุนรอบคนเดียว คนลาออกน้อยเพราะค่าตอบแทนดี แต่ภาวะหมดไฟเป็นเรื่องที่คนในบริษัทรู้กันอยู่',
    },
    {
      label: 'Revenue Ceiling Effect',
      color: '#c06080',
      text:
        'การเป็นบริษัทศิลปินคนเดียวทำให้เพดานรายได้ผูกอยู่กับงานของ James คนเดียว ไม่มีศิลปินคนอื่นมาช่วยกระจายความเสี่ยงหรือเพิ่มช่องทางรายได้แบบค่ายทั่วไป นักวิเคราะห์ในวงการมองว่า JH Company "ทิ้งเงินไว้บนโต๊ะ" เพราะไม่ขยายสังกัดทั้งที่มีทั้งโครงสร้างและชื่อเสียงพร้อมอยู่แล้ว แต่ James ยืนยันว่าการโตไม่ใช่เป้าหมาย และยอมรับเพดานนี้เป็นราคาที่ต้องจ่ายเพื่อคุมทุกอย่างได้เต็มที่',
    },
    {
      label: 'ข้อตกลงการกลับวงปี 2024',
      color: '#9b7fc8',
      text:
        'ตอนที่ James กลับมาร่วมกิจกรรม NCT 127 ในฐานะ external artist เมื่อธันวาคม 2024 ตัวดีลที่ทำให้เรื่องนี้เกิดขึ้นได้กลายเป็นข่าวเสียเอง เพราะบรรทัดฐานของวงการ K-pop ชัดมาตลอดว่าไอดอลที่ออกจากค่ายหลังฟ้องร้องกันเต็มรูปแบบไม่เคยได้กลับมาร่วมกิจกรรมกลุ่มอีก แบบแผนของวงการย้อนไปถึงกรณีออกจากค่ายใหญ่ยุคแรกๆ คือตัดขาดถาวรแบบเด็ดขาด SM เลือกเจรจาแทน เพราะการเสียเขาไปแบบถาวร หลังเขากลายเป็นชื่อระดับโลกที่เข้าชิง Grammy ที่วงเองไม่สามารถสร้างได้แล้ว สร้างความเสียหายให้บริษัทมากกว่าการแบ่งอำนาจควบคุมบางส่วน เงื่อนไขที่ JH Company ได้มาไม่เคยมีมาก่อนสำหรับ idol ที่กลับวง — James คุมความเป็นเจ้าของ JH Company และ catalog หลังปี 2023 ไว้เต็มร้อย เลือกเองได้ว่าจะร่วมกิจกรรมหรือปล่อยเพลงไหน และไม่ต้องเซ็นสัญญาผูกขาดใหม่ และภายใต้กรอบเดียวกันนี้เองที่เขากลับมา active เต็มตัวอีกครั้งในงานครบรอบ 10 ปีปี 2026 ทั้งภายในบริษัทและสื่อในเวลาต่อมามองเรื่องนี้เป็นจุดที่ "Hwang Clause" เปลี่ยนจาก legal precedent เป็น commercial practice จริงๆ',
    },
  ],
  valPhases: [
    { phase: 'หลัง DECADE', range: '$180M–320M', trigger: 'พิสูจน์ขนาดตลาดได้จากทัวร์' },
    { phase: 'หลัง RESONANCE', range: '$420M–650M', trigger: 'การเปิดใช้งาน Franchise IP' },
    { phase: 'กรณีมองบวกเต็มที่', range: '$800M+', trigger: 'ก้าวขึ้นเป็นสตูดิโอระดับโลก' },
  ],
  roster: [
    { name: 'James Hwang', since: '2023', role: 'ผู้ก่อตั้ง · ศิลปินเพียงหนึ่งเดียว' },
  ],
  partners: [
    { name: 'SM Entertainment', layer: 'อดีตค่าย · คู่สัญญา — ข้อตกลงการกลับวงปี 2024', role: 'ไม่ใช่พาร์ทเนอร์ในความหมายทั่วไป ความสัมพันธ์นี้ตั้งอยู่บน settlement ที่เป็นปฏิปักษ์กันเมื่อปี 2023 และแรงเสียดทานที่ยังเหลืออยู่หลังจากนั้น สิ่งที่ผูกสองฝ่ายไว้ตอนนี้คือดีลกลับวงแบบเจรจาครั้งแรกในลักษณะนี้ของวงการ K-pop (ธ.ค. 2024) — James คุมความเป็นเจ้าของ JH Company, เลือกกิจกรรมเอง, และคุมรายได้อิสระไว้เต็มที่ ระหว่างเข้าร่วมบางวันของ NCT 127' },
    { name: 'Warner Music Korea', layer: 'จัดจำหน่ายทั่วโลก', role: 'โครงสร้างพื้นฐานจัดจำหน่ายเพลง' },
    { name: 'Avex Group', layer: 'ญี่ปุ่น', role: 'พาร์ทเนอร์ดำเนินงานในพื้นที่' },
    { name: 'Creative Artists Agency', layer: 'สหรัฐฯ', role: 'เป็นตัวแทนและจัดดีลรวมงาน' },
    { name: 'The Walt Disney Company', layer: 'ภาพยนตร์ / IP', role: 'แพลตฟอร์ม IP ภาพยนตร์ — RESONANCE' },
  ],
};

export const company = { en, th };
export function getCompany(lang: Lang) {
  return company[lang];
}
