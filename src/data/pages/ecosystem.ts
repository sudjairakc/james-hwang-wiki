// Bilingual content for the Endorsements & Touring (ecosystem) page.
// Shared (non-translatable) identity + money figures are exported separately and
// merged with the localized fields in the page; charts consume the shared arrays.

import type { Lang } from '../../i18n';

// Shared — brand identity + deal value (non-translatable). Index-aligned with en/th solodeals.
export const deals = [
  { brand: 'Saint Laurent', value: '$4–7M/yr', since: '2023' },
  { brand: 'Cartier', value: '$2–4M/yr', since: '2023' },
  { brand: 'Sony', value: '$3–5M/yr', since: '2023' },
  { brand: 'Nike', value: '$1.5–3M/yr', since: '2023' },
  { brand: 'Dior Beauty', value: '$1–2M/yr', since: '2024' },
];

// Shared — group deal identity + value. Index-aligned with en/th groupNotes.
export const groupDeals = [
  { brand: 'SK Telecom', value: '$0.5–1M/yr' },
  { brand: 'Coca-Cola', value: '$0.4–0.9M/yr' },
];

// Shared — tour numeric stats (non-translatable). Index-aligned with en/th tourScale.
export const tourStats = [
  {
    name: 'PULSE TOUR', years: '2023–24', shows: 64,
    ticketGross: '$235M', sponsorRev: '$26M', combinedGross: '$261M',
    productionCost: '$156M', profitPool: '$105M', personalIncome: '$40–48M',
  },
  {
    name: 'DECADE TOUR', years: '2027', shows: 18,
    ticketGross: '$74M', sponsorRev: '$14M', combinedGross: '$88M',
    productionCost: '$48M', profitPool: '$40M', personalIncome: '$15–19M',
  },
];

const en = {
  ui: {
    label: 'Business',
    title: 'Endorsements & Touring',
    subtitle: '$16M–22M/yr endorsements · $309M+ combined touring gross',
    introHtml:
      'Managed entirely through <a href="%L%company" style="color:var(--gold)">JH Company</a> since 2023, James Hwang\'s brand portfolio spans luxury fashion, electronics, and sportswear — built around his <a href="%L%public-image" style="color:var(--gold)">public image</a> as a dark R&B auteur. Touring revenue figures include the <a href="%L%tours/pulse" style="color:var(--gold)">PULSE World Tour</a> and the <a href="%L%tours/decade" style="color:var(--gold)">DECADE Tour</a>.',
    revenueOverview: 'Revenue Overview',
    revenueOverviewSub: 'Endorsement deal values · tour economics',
    brandChartTitle: 'Brand Deal Values ($/yr)',
    tourChartTitle: 'Tour Economics ($M)',
    soloHeading: 'Solo Brand Deals',
    deliverables: 'Deliverables',
    campaignHistory: 'Campaign History',
    since: 'Since',
    brandFitLabel: 'Brand fit:',
    groupHeading: 'Group Deals (NCT 127 activity cycles only)',
    smHeading: 'Group-Deal Category Conflicts',
    smRestricted: 'Off-limits during NCT 127 activity cycles',
    tourHeading: 'Tour Economics',
    showsSuffix: 'shows',
    rowTicket: 'Ticket Gross',
    rowSponsor: 'Sponsor Revenue',
    rowCombined: 'Combined Gross',
    rowProduction: 'Production Cost (~60%)',
    rowProfit: 'Profit Pool',
    rowIncome: "James' Personal Income",
    capitalHeading: 'JH Company — Retained Capital from Touring',
    capitalLabel: 'Retained Capital (PULSE + DECADE)',
    capitalNote: 'Transition: boutique artist label → single-artist creator + franchise IP house',
    warnerHeading: 'Warner Music Korea — Distribution Role',
    revShareLabel: 'Revenue share:',
    wealthHeading: 'Estimated Wealth',
    wealthSub: 'How the fortune is built — and how much of it is actually liquid',
    wealthAssetsTitle: 'Net-Worth Composition',
    wealthIncomeTitle: 'Where the Money Comes From',
    wealthTotalLabel: 'Estimated Total Net Worth',
  },
  incomeSummary: [
    { val: '$16–22M', label: 'Solo Endorsements/yr', sub: 'Controlled via JH Company' },
    { val: '$1–2M', label: 'Group Endorsements/yr', sub: 'Only during NCT 127 activity cycles' },
    { val: '$309M', label: 'Touring Gross (2 tours)', sub: 'Ticket sales combined' },
    { val: '$440–650M', label: 'Est. Total Net Worth', sub: 'Incl. ~82% JH Company equity · see breakdown below' },
  ],
  wealthTotal: '$440–650M',
  wealthAssets: [
    { source: 'Liquid personal assets', detail: 'Cash, securities, and Seoul + Los Angeles residences', value: '$95–120M' },
    { source: 'JH Company equity (82%)', detail: 'Founder stake in a $420–650M enterprise — illiquid paper value, not cash on hand', value: '$345–530M' },
  ],
  wealthIncome: [
    { source: 'Touring (personal take)', detail: 'PULSE $40–48M + DECADE $15–19M, net of production cost', value: '$55–67M' },
    { source: 'Endorsements', detail: 'Saint Laurent · Cartier · Sony · Nike · Dior, all booked through JH Company', value: '$16–22M/yr' },
    { source: 'Film fees (MCU)', detail: 'Shang-Chi lead scale in 2021 rising to star-tier by Last of the Ten Rings (2026); RESONANCE pays JH Company an IP backend, not a personal fee', value: '$3–5M → $12–18M/film' },
    { source: 'Recorded music & publishing', detail: '8.7B+ career streams plus tracks written for SM artists (Jaehyun, aespa)', value: '8–20% royalty share' },
    { source: 'Merchandise', detail: 'Concert merch and capsule drops (e.g. Nike SNKRS)', value: '$18–28M/tour' },
  ],
  solodeals: [
    {
      sector: 'Global Fashion',
      status: 'Active · Global',
      concept: 'Dark Quiet Luxury — Shadow of the Stage',
      deliverables: ['3–4 global campaign shoots/yr', 'Exclusive runway front row (Paris Fashion Week)', 'Social media content (non-scripted)', 'Event appearances (2/yr)'],
      campaigns: [
        { name: 'Shadow Series', year: '2023', desc: 'Shot by Collier Schorr in Seoul and Paris. Black-and-white editorial series — James in post-show staging environments. No copy, no product placement. Image-only.' },
        { name: 'SL Homme FW24', year: '2024', desc: 'Featured in Saint Laurent Fall/Winter 2024 global print and digital campaign alongside European and Japanese talent. First K-pop adjacent artist to anchor a SL global seasonal campaign.' },
        { name: 'Custom Stage & Red Carpet', year: '2025', desc: 'As a house ambassador, James is dressed by Saint Laurent for key moments — the Grammy performance, tour staging, and press-tour appearances — through custom looks and archive-piece loans by the atelier. The one retail exception is the limited SL × GONUNMA 3-piece capsule (2024) — otherwise the relationship stays non-commercial, the maison dressing him directly rather than co-branding product on an ongoing basis.' },
      ],
      brandFit: "Anthony Vaccarello approached James directly after seeing the PULSE Tour visual identity — the show's black-and-white stage palette aligned precisely with SL's current design language. No prior relationship required.",
    },
    {
      sector: 'Watch / Jewelry',
      status: 'Active · Asia-Pacific → Global',
      concept: 'Asian Masculine Elegance — Timepiece as Inheritance',
      deliverables: ['2 regional campaign shoots/yr (Asia-Pacific)', 'Select global touchpoints', 'VIP boutique events (Seoul, Bangkok, Tokyo)', 'Private product seeding'],
      campaigns: [
        { name: 'Santos de Cartier Asia Campaign', year: '2023', desc: "Face of the Santos de Cartier men's line across Korea, Thailand, and Japan markets. Campaign framing: watch as companion to craft, not status symbol — aligned with James's producer-artist identity." },
        { name: 'Love Bracelet Holiday Edit', year: '2024', desc: "Regional holiday campaign for the Love collection. Short-form video produced by JH Company's in-house team, shot at James's Seoul studio. Positioned as personal endorsement rather than traditional advertising." },
        { name: 'Panthère Campaign – Global Expansion', year: '2025', desc: "First entry into Cartier global-tier campaign for the Panthère de Cartier line. Marks the transition from Asia-only deal to worldwide touchpoints — part of Cartier's strategy to grow Asian male luxury consumer base globally." },
      ],
      brandFit: "Cartier's Asia expansion strategy required a face with credibility across multiple markets simultaneously. James's Thai-Chinese-Korean background gave the brand genuine multilateral reach without separate ambassadors.",
    },
    {
      sector: 'Tech / Audio',
      status: 'Active · Global',
      concept: 'Creator Authenticity — Sound Before Everything',
      deliverables: ['Product integration in studio content', 'WH-1000XM / MDR-Z1R feature appearances', 'Creator-focused documentary content (2/yr)', 'Global Sony Music event appearances'],
      campaigns: [
        { name: 'Sound Shapes', year: '2022', desc: 'Launch campaign for the WH-1000XM5 headphones. James filmed in actual recording sessions, not staged environments. Copy: "Between the track and the silence — I choose what stays." Ran globally across YouTube pre-roll and editorial.' },
        { name: 'Studio Sessions Series', year: '2023', desc: "Ongoing Sony creator content series — 6-episode documentary of PULSE album production process. James used Sony's MDR-Z1R reference monitors throughout. Reached 28M views across YouTube and Sony's global social channels." },
        { name: 'MDR Creator Line', year: '2024', desc: "Product ambassador for Sony's MDR professional reference headphone line. Used in actual ARE U STILL mixing sessions — not retroactively placed. Series included a 12-minute mini-documentary on how monitoring quality affects vocal performance decisions." },
      ],
      brandFit: "Sony first approached James in 2022 specifically because he was known to use Sony reference monitors in production — making the endorsement extension of existing behavior rather than brand adoption. The deal was formalized under JH Company after its 2023 founding. Avoids Samsung electronics conflict from NCT 127 era.",
    },
    {
      sector: 'Sneaker / Streetwear',
      status: 'Active · Global',
      concept: 'Movement as Language — Athleisure Meets Stage',
      deliverables: ['1 capsule collection/yr (design input)', 'Tour wardrobe integration', 'Seasonal campaign (1–2/yr)', 'NikeLab exclusive appearances'],
      campaigns: [
        { name: 'GONUNMA × Nike Capsule Vol.1', year: '2023', desc: 'Co-designed capsule collection with Nike Sportswear team: 5-piece set (coach jacket, cargo pants, tank, 2 colorway Air Force 1s). Design concept: stage wardrobe meets daily utility. Dropped globally via SNKRS app. Sold out in under 3 hours.' },
        { name: 'PULSE Tour Integration', year: '2023-24', desc: 'James wore Nike across all 64 PULSE Tour dates — backstage content pushed 40M+ impressions. Nike integrated tour-exclusive colorways not available in retail, creating secondary market demand.' },
        { name: 'GONUNMA × Nike Capsule Vol.2', year: '2025', desc: "CAN\'T LEAVE ALONE era drop. Duality concept: Vol.2A (SOUR — minimal black palette) and Vol.2B (HONEY — warm cream/gold). First time a Nike capsule was released in two simultaneous colorway stories. Nike's Asia streetwear division reported highest K-pop adjacent campaign performance to date." },
      ],
      brandFit: "Nike's recruitment was driven by tour wardrobe discussions — the brand offered to supply PULSE Tour looks and the relationship evolved into co-design. James's dance background made the sportswear alignment genuinely credible to sneaker culture audiences.",
    },
    {
      sector: 'Grooming (Asia-Pacific)',
      status: 'Active · Asia-Pacific',
      concept: 'New Asian Masculine Beauty — Precision Without Performance',
      deliverables: ['2 regional campaign shoots/yr', 'Fragrance and skincare product seeding', 'Seoul and Bangkok VIP events', 'Digital content (Weibo, Instagram, LINE)'],
      campaigns: [
        { name: 'Dior Homme Intense Campaign Asia', year: '2024', desc: 'Regional face of Dior Homme Intense fragrance across Korea, Thailand, Japan, and Taiwan. Campaign art direction: low-light studio environment, no gimmick — James in the act of listening, not performing. Shot by Hong Kong-based photographer Leslie Zhang.' },
        { name: 'Sauvage Elixir Korea Launch', year: '2024', desc: "Co-branded launch event at Dior's Seoul Cheongdam flagship. James hosted a closed listening session of unreleased CAN\'T LEAVE ALONE tracks as ambient backdrop — 200 press/VIP guests. Positioned fragrance launch as artistic event rather than retail activation." },
        { name: 'Dior Beauty Men Asia Digital Series', year: '2025', desc: "6-part skincare content series across Dior Beauty's regional channels. James narrates his pre-show routine using Dior skincare products. Series was produced entirely in-house by JH Company — first time Dior Beauty Asia allowed full creative control to a regional ambassador." },
      ],
      brandFit: "Dior Beauty specifically sought a K-adjacent male ambassador who would not lean into traditional idol aesthetics. James's art-house public image and resistance to conventional beauty marketing made him rare in this category — a male grooming face who does not self-describe as a beauty influencer.",
    },
  ],
  groupNotes: [
    { sector: 'Telecom Asia', note: 'Group endorsement via SM/NCT 127' },
    { sector: 'Beverage', note: 'Group endorsement via SM/NCT 127' },
  ],
  smConstraints: ['Samsung (electronics conflict)', 'SK Telecom competitors', 'Coca-Cola competitors'],
  tourScale: ['Global major solo touring act', 'Anthology prestige-format tour'],
  capitalValue: '~$84M',
  capitalTags: ['Touring + Studio Infrastructure', 'IP Pipeline', 'Production Scaling', 'Liquidity Reserve', 'Strategic Partnerships'],
  warnerCols: [
    { title: 'Global Distribution', items: ['Spotify placement', 'Apple Music rollout', 'Territory licensing', 'Radio servicing'] },
    { title: 'Touring Infrastructure', items: ['Ticketing coordination', 'Promoter network', 'Routing negotiation'] },
    { title: 'Marketing Amplification', items: ['Playlisting', 'Sync placement', 'Press strategy', 'Retail bundling'] },
  ],
  revShare: '12–18%',
  related: [
    { label: 'JH Company', slug: 'company' },
    { label: 'Cultural Impact', slug: 'cultural-impact' },
    { label: 'Tours', slug: 'tours' },
    { label: 'Public Image', slug: 'public-image' },
    { label: 'Career Timeline', slug: 'timeline' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ธุรกิจ',
    title: 'Endorsements & Touring',
    subtitle: 'ดีลพรีเซ็นเตอร์ $16M–22M/ปี · รายได้ทัวร์รวม $309M+',
    introHtml:
      'บริหารทั้งหมดผ่าน <a href="%L%company" style="color:var(--gold)">JH Company</a> ตั้งแต่ปี 2023 พอร์ตแบรนด์ของ James Hwang ครอบคลุมแฟชั่นหรู เครื่องเสียง และชุดกีฬา ทั้งหมดสร้างรอบ <a href="%L%public-image" style="color:var(--gold)">ภาพลักษณ์สาธารณะ</a> ของเขาในฐานะศิลปิน R&B สายมืดที่คุมงานตัวเอง ตัวเลขรายได้ทัวร์รวม <a href="%L%tours/pulse" style="color:var(--gold)">PULSE World Tour</a> และ <a href="%L%tours/decade" style="color:var(--gold)">DECADE Tour</a>',
    revenueOverview: 'ภาพรวมรายได้',
    revenueOverviewSub: 'มูลค่าดีลพรีเซ็นเตอร์ · เศรษฐศาสตร์ทัวร์',
    brandChartTitle: 'มูลค่าดีลแบรนด์ ($/ปี)',
    tourChartTitle: 'เศรษฐศาสตร์ทัวร์ ($M)',
    soloHeading: 'ดีลแบรนด์เดี่ยว',
    deliverables: 'สิ่งที่ต้องส่งมอบ',
    campaignHistory: 'ประวัติแคมเปญ',
    since: 'ตั้งแต่',
    brandFitLabel: 'ความเข้ากับแบรนด์:',
    groupHeading: 'ดีลแบบกลุ่ม (เฉพาะช่วงกิจกรรม NCT 127)',
    smHeading: 'หมวดที่ชนกับดีลกลุ่ม',
    smRestricted: 'รับไม่ได้ในช่วงกิจกรรม NCT 127',
    tourHeading: 'เศรษฐศาสตร์ทัวร์',
    showsSuffix: 'รอบ',
    rowTicket: 'รายได้บัตร',
    rowSponsor: 'รายได้สปอนเซอร์',
    rowCombined: 'รายได้รวม',
    rowProduction: 'ต้นทุนโปรดักชัน (~60%)',
    rowProfit: 'กำไรสุทธิ',
    rowIncome: 'รายได้ส่วนตัวของ James',
    capitalHeading: 'JH Company — ทุนสะสมจากการทัวร์',
    capitalLabel: 'ทุนสะสม (PULSE + DECADE)',
    capitalNote: 'การเปลี่ยนผ่าน: จากค่ายเล็กของศิลปินคนเดียว ไปเป็นบ้านที่ถือทั้งงานสร้างสรรค์และ IP แฟรนไชส์',
    warnerHeading: 'Warner Music Korea — บทบาทจัดจำหน่าย',
    revShareLabel: 'ส่วนแบ่งรายได้:',
    wealthHeading: 'ประเมินความมั่งคั่ง',
    wealthSub: 'ทรัพย์สินมาจากไหน และเป็นเงินสดได้จริงเท่าไหร่',
    wealthAssetsTitle: 'องค์ประกอบมูลค่าทรัพย์สิน',
    wealthIncomeTitle: 'เงินมาจากไหน',
    wealthTotalLabel: 'มูลค่าทรัพย์สินสุทธิรวม (ประมาณ)',
  },
  incomeSummary: [
    { val: '$16–22M', label: 'ดีลเดี่ยว/ปี', sub: 'ควบคุมผ่าน JH Company' },
    { val: '$1–2M', label: 'ดีลกลุ่ม/ปี', sub: 'เฉพาะช่วงกิจกรรม NCT 127' },
    { val: '$309M', label: 'รายได้ทัวร์ (2 ทัวร์)', sub: 'ยอดขายบัตรรวม' },
    { val: '$440–650M', label: 'มูลค่าทรัพย์สินสุทธิรวม (ประมาณ)', sub: 'รวมหุ้น JH Company ~82% · ดูรายละเอียดด้านล่าง' },
  ],
  wealthTotal: '$440–650M',
  wealthAssets: [
    { source: 'ทรัพย์สินส่วนตัวที่เป็นสภาพคล่อง', detail: 'เงินสด หลักทรัพย์ และที่พักใน Seoul + Los Angeles', value: '$95–120M' },
    { source: 'หุ้น JH Company (82%)', detail: 'หุ้นผู้ก่อตั้งในกิจการมูลค่า $420–650M — เป็นมูลค่ากระดาษที่ยังไม่ใช่เงินสด', value: '$345–530M' },
  ],
  wealthIncome: [
    { source: 'ทัวร์ (ส่วนที่เข้ากระเป๋า)', detail: 'PULSE $40–48M + DECADE $15–19M หักต้นทุนการผลิตแล้ว', value: '$55–67M' },
    { source: 'Endorsement', detail: 'Saint Laurent · Cartier · Sony · Nike · Dior ทั้งหมดผ่าน JH Company', value: '$16–22M/ปี' },
    { source: 'ค่าตัวหนัง (MCU)', detail: 'ค่าตัวระดับนักแสดงนำใน Shang-Chi ปี 2021 ขยับขึ้นเป็นระดับดาราแถวหน้าตอน Last of the Ten Rings ปี 2026 ส่วน RESONANCE จ่ายเป็นส่วนแบ่งปลายทางจาก IP เข้า JH Company ไม่ใช่ค่าตัวส่วนตัว', value: '$3–5M → $12–18M/เรื่อง' },
    { source: 'เพลงบันทึกเสียง & publishing', detail: 'สตรีมสะสม 8.7B+ บวกเพลงที่เขียนให้ศิลปิน SM อย่าง Jaehyun และ aespa', value: 'ส่วนแบ่งค่าลิขสิทธิ์ 8–20%' },
    { source: 'สินค้าที่ระลึก', detail: 'ของขายในคอนเสิร์ตและคอลเลกชันจำกัด เช่นที่ปล่อยผ่าน Nike SNKRS', value: '$18–28M/ทัวร์' },
  ],
  solodeals: [
    {
      sector: 'Global Fashion',
      status: 'Active · Global',
      concept: 'Dark Quiet Luxury — Shadow of the Stage',
      deliverables: ['ถ่ายแคมเปญระดับโลก 3–4 ครั้ง/ปี', 'ที่นั่งแถวหน้ารันเวย์แบบเอกสิทธิ์ ที่ Paris Fashion Week', 'คอนเทนต์โซเชียล (ไม่สคริปต์)', 'ออกงานอีเวนต์ (2 ครั้ง/ปี)'],
      campaigns: [
        { name: 'Shadow Series', year: '2023', desc: 'ถ่ายโดย Collier Schorr ที่โซลและปารีส เป็นงานถ่ายแฟชั่นขาว-ดำ James อยู่ในบรรยากาศหลังจบโชว์ ไม่มีข้อความโฆษณา ไม่มีการวางสินค้าให้เห็น เน้นภาพล้วนๆ' },
        { name: 'SL Homme FW24', year: '2024', desc: 'อยู่ในแคมเปญ Saint Laurent Fall/Winter 2024 ทั้งสิ่งพิมพ์และดิจิทัลระดับโลก ร่วมกับนักแสดงและนายแบบจากยุโรปและญี่ปุ่น เป็นศิลปินสาย K-pop คนแรกที่เป็นแกนของแคมเปญประจำฤดูระดับโลกของ SL' },
        { name: 'Custom Stage & Red Carpet', year: '2025', desc: 'ในฐานะพรีเซนเตอร์ประจำแบรนด์ Saint Laurent จัดชุดให้ James ในทุกจังหวะสำคัญ ทั้งเวที Grammy การจัดเวทีทัวร์ และงานเดินสายโปรโมต ผ่านชุดที่ตัดเฉพาะและการยืมชิ้นเก่าจากคลังของห้องเสื้อ การขายปลีกมีข้อยกเว้นครั้งเดียวคือคอลเลกชันจำนวนจำกัด SL × GONUNMA สามชิ้นในปี 2024 นอกจากนั้นความสัมพันธ์นี้ยังไม่ใช่เชิงพาณิชย์ ห้องเสื้อแต่งตัวให้เขาโดยตรง มากกว่าจะออกสินค้าร่วมแบรนด์ต่อเนื่อง' },
      ],
      brandFit: 'Anthony Vaccarello ติดต่อ James เองหลังเห็นภาพบนเวที PULSE Tour เพราะโทนขาว-ดำของโชว์ตรงกับภาษาการออกแบบของ SL ในตอนนั้นเป๊ะ ไม่ต้องมีสายสัมพันธ์ใดมาก่อน',
    },
    {
      sector: 'Watch / Jewelry',
      status: 'Active · Asia-Pacific → Global',
      concept: 'Asian Masculine Elegance — Timepiece as Inheritance',
      deliverables: ['ถ่ายแคมเปญระดับภูมิภาค 2 ครั้ง/ปี (Asia-Pacific)', 'ปรากฏในสื่อระดับโลกบางจุด', 'งาน VIP ที่หน้าร้าน โซล กรุงเทพฯ โตเกียว', 'ส่งสินค้าให้ใช้แบบส่วนตัว'],
      campaigns: [
        { name: 'Santos de Cartier Asia Campaign', year: '2023', desc: 'เป็นหน้าของไลน์ Santos de Cartier สำหรับผู้ชายในตลาดเกาหลี ไทย และญี่ปุ่น แคมเปญวางกรอบว่านาฬิกาคือเพื่อนร่วมงานฝีมือ ไม่ใช่เครื่องบอกฐานะ ซึ่งเข้ากับตัวตนคนทำเพลงของ James' },
        { name: 'Love Bracelet Holiday Edit', year: '2024', desc: 'แคมเปญเทศกาลระดับภูมิภาคของคอลเลกชัน Love วิดีโอสั้นทำโดยทีมภายในของ JH Company ถ่ายที่สตูดิโอในโซลของ James วางให้ดูเป็นการแนะนำแบบส่วนตัวมากกว่าโฆษณาทั่วไป' },
        { name: 'Panthère Campaign – Global Expansion', year: '2025', desc: 'ก้าวเข้าแคมเปญระดับโลกของ Cartier ครั้งแรกกับไลน์ Panthère de Cartier เป็นจุดเปลี่ยนจากดีลเฉพาะเอเชียไปสู่การปรากฏตัวทั่วโลก ตามกลยุทธ์ของ Cartier ที่จะขยายฐานลูกค้าผู้ชายเอเชียในตลาดสินค้าหรู' },
      ],
      brandFit: 'กลยุทธ์ขยายเอเชียของ Cartier ต้องการคนที่ผู้บริโภคหลายตลาดเชื่อถือพร้อมกัน พื้นเพไทย-จีน-เกาหลีของ James ทำให้แบรนด์เข้าถึงหลายกลุ่มได้จริงโดยไม่ต้องจ้างพรีเซนเตอร์แยกรายตลาด',
    },
    {
      sector: 'Tech / Audio',
      status: 'Active · Global',
      concept: 'Creator Authenticity — Sound Before Everything',
      deliverables: ['ใช้สินค้าจริงในคอนเทนต์จากสตูดิโอ', 'ปรากฏในสื่อของ WH-1000XM และ MDR-Z1R', 'คอนเทนต์สารคดีสายคนทำงานสร้างสรรค์ ปีละ 2 ครั้ง', 'ออกงาน Sony Music ระดับโลก'],
      campaigns: [
        { name: 'Sound Shapes', year: '2022', desc: 'แคมเปญเปิดตัวหูฟัง WH-1000XM5 ถ่าย James ในเซสชันอัดเสียงจริง ไม่ใช่ฉากจัด ข้อความในแคมเปญคือ "Between the track and the silence — I choose what stays." ฉายทั่วโลกผ่านโฆษณาก่อนคลิป YouTube และบทความในสื่อ' },
        { name: 'Studio Sessions Series', year: '2023', desc: 'ซีรีส์คอนเทนต์สายคนทำงานสร้างสรรค์ของ Sony เป็นสารคดี 6 ตอนเรื่องการทำอัลบั้ม PULSE โดย James ใช้หูฟังอ้างอิง MDR-Z1R ของ Sony ตลอดทั้งเรื่อง ยอดชมรวม 28 ล้านทั้งบน YouTube และช่องโซเชียลระดับโลกของ Sony' },
        { name: 'MDR Creator Line', year: '2024', desc: 'เป็นพรีเซนเตอร์ไลน์หูฟังอ้างอิงระดับมืออาชีพ MDR ของ Sony โดยใช้ในเซสชันมิกซ์ ARE U STILL จริง ไม่ใช่เอามาวางทีหลัง แคมเปญมีมินิสารคดี 12 นาทีเล่าว่าคุณภาพการฟังตรวจงานส่งผลต่อการตัดสินใจเรื่องเสียงร้องอย่างไร' },
      ],
      brandFit: 'Sony ติดต่อ James ครั้งแรกในปี 2022 เพราะรู้ว่าเขาใช้หูฟังอ้างอิงของ Sony ทำงานอยู่แล้ว ดีลนี้จึงเป็นการต่อยอดสิ่งที่เขาทำอยู่ ไม่ใช่การรับแบรนด์ใหม่มาถือ และถูกทำเป็นทางการภายใต้ JH Company หลังก่อตั้งในปี 2023 ซึ่งเลี่ยงการชนกับ Samsung ในหมวดเครื่องใช้ไฟฟ้าจากยุค NCT 127',
    },
    {
      sector: 'Sneaker / Streetwear',
      status: 'Active · Global',
      concept: 'Movement as Language — Athleisure Meets Stage',
      deliverables: ['คอลเลกชันจำกัดปีละ 1 ชุด โดยเขาร่วมออกแบบ', 'ใช้เป็นเสื้อผ้าทัวร์จริง', 'แคมเปญตามฤดูกาล ปีละ 1–2 ครั้ง', 'ปรากฏตัวเฉพาะกิจกับ NikeLab'],
      campaigns: [
        { name: 'GONUNMA × Nike Capsule Vol.1', year: '2023', desc: 'คอลเลกชันจำกัดที่ออกแบบร่วมกับทีม Nike Sportswear เป็นเซ็ต 5 ชิ้น ได้แก่ coach jacket กางเกงคาร์โก เสื้อกล้าม และ Air Force 1 สองสี คอนเซปต์คือเสื้อผ้าเวทีมาเจอความใช้งานได้จริงในชีวิตประจำวัน ขายทั่วโลกผ่านแอป SNKRS และหมดในไม่ถึง 3 ชั่วโมง' },
        { name: 'PULSE Tour Integration', year: '2023-24', desc: 'James ใส่ Nike ครบทั้ง 64 รอบของ PULSE Tour คอนเทนต์หลังเวทีทำให้คนเห็นแบรนด์กว่า 40 ล้านครั้ง และ Nike ทำสีเฉพาะทัวร์ที่ไม่วางขายในร้าน จนเกิดดีมานด์ในตลาดมือสอง' },
        { name: 'GONUNMA × Nike Capsule Vol.2', year: '2025', desc: 'ดรอปยุค CAN\'T LEAVE ALONE คอนเซ็ปต์ duality: Vol.2A (SOUR — โทนดำมินิมอล) และ Vol.2B (HONEY — ครีม/ทองอุ่น) เป็นครั้งแรกที่แคปซูล Nike ออก 2 เรื่องราว colorway พร้อมกัน ดิวิชัน streetwear เอเชียของ Nike รายงานผลแคมเปญสาย K-pop สูงสุดเท่าที่เคยมี' },
      ],
      brandFit: 'การชวนของ Nike เริ่มจากการคุยเรื่อง wardrobe ทัวร์ — แบรนด์เสนอ supply ลุค PULSE Tour แล้วความสัมพันธ์พัฒนาเป็น co-design พื้นฐานการเต้นของ James ทำให้ความเข้ากับ sportswear น่าเชื่อถือจริงในสายตาคน sneaker culture',
    },
    {
      sector: 'Grooming (Asia-Pacific)',
      status: 'Active · Asia-Pacific',
      concept: 'New Asian Masculine Beauty — Precision Without Performance',
      deliverables: ['ถ่ายแคมเปญระดับภูมิภาค 2 ครั้ง/ปี', 'ส่งน้ำหอมและสกินแคร์ให้ใช้', 'อีเวนต์ VIP โซลและกรุงเทพ', 'คอนเทนต์ดิจิทัล (Weibo, Instagram, LINE)'],
      campaigns: [
        { name: 'Dior Homme Intense Campaign Asia', year: '2024', desc: 'เป็นหน้าระดับภูมิภาคของน้ำหอม Dior Homme Intense ในเกาหลี ไทย ญี่ปุ่น และไต้หวัน กำกับภาพเป็นสตูดิโอแสงน้อยไม่มีลูกเล่น จับ James ในท่ากำลังฟัง ไม่ใช่กำลังแสดง ถ่ายโดย Leslie Zhang ช่างภาพที่ทำงานอยู่ฮ่องกง' },
        { name: 'Sauvage Elixir Korea Launch', year: '2024', desc: 'อีเวนต์เปิดตัว co-branded ที่ Dior flagship เชิงดัมโซล James จัดเซสชันฟังเพลง CAN\'T LEAVE ALONE ที่ยังไม่ปล่อยเป็น backdrop บรรยากาศ — แขกสื่อ/VIP 200 คน วางการเปิดตัวน้ำหอมเป็นอีเวนต์เชิงศิลปะมากกว่า retail activation' },
        { name: 'Dior Beauty Men Asia Digital Series', year: '2025', desc: 'ซีรีส์คอนเทนต์ skincare 6 ตอนทั่วช่องภูมิภาคของ Dior Beauty James เล่ารูทีนก่อนโชว์โดยใช้สินค้า skincare ของ Dior ผลิตทั้งหมด in-house โดย JH Company — ครั้งแรกที่ Dior Beauty Asia ให้ ambassador ระดับภูมิภาคคุม creative เต็มที่' },
      ],
      brandFit: 'Dior Beauty มองหาพรีเซนเตอร์ชายสายเกาหลีที่ไม่เอนไปทางภาพไอดอลแบบเดิม ภาพลักษณ์สาย art-house ของ James บวกกับการที่เขาไม่เล่นการตลาดความงามแบบทั่วไป ทำให้เขาหาตัวแทนได้ยากในหมวดนี้ เป็นหน้าสินค้าดูแลตัวเองสำหรับผู้ชายที่ไม่เรียกตัวเองว่าอินฟลูฯ สายบิวตี้',
    },
  ],
  groupNotes: [
    { sector: 'Telecom Asia', note: 'ดีลแบบกลุ่มผ่าน SM/NCT 127' },
    { sector: 'Beverage', note: 'ดีลแบบกลุ่มผ่าน SM/NCT 127' },
  ],
  smConstraints: ['Samsung (ชนหมวดเครื่องใช้ไฟฟ้า)', 'คู่แข่งของ SK Telecom', 'คู่แข่งของ Coca-Cola'],
  tourScale: ['ศิลปินทัวร์เดี่ยวระดับโลก', 'ทัวร์รูปแบบอัลบั้มรวมที่เน้นความประณีต'],
  capitalValue: '~$84M',
  capitalTags: ['Touring + Studio Infrastructure', 'IP Pipeline', 'Production Scaling', 'Liquidity Reserve', 'Strategic Partnerships'],
  warnerCols: [
    { title: 'Global Distribution', items: ['Spotify placement', 'Apple Music rollout', 'Territory licensing', 'Radio servicing'] },
    { title: 'Touring Infrastructure', items: ['Ticketing coordination', 'Promoter network', 'Routing negotiation'] },
    { title: 'Marketing Amplification', items: ['Playlisting', 'Sync placement', 'Press strategy', 'Retail bundling'] },
  ],
  revShare: '12–18%',
  related: [
    { label: 'JH Company', slug: 'company' },
    { label: 'อิทธิพลเชิงวัฒนธรรม', slug: 'cultural-impact' },
    { label: 'ทัวร์คอนเสิร์ต', slug: 'tours' },
    { label: 'ภาพลักษณ์สาธารณะ', slug: 'public-image' },
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
  ],
};

export const ecosystem = { en, th };
export function getEcosystem(lang: Lang) {
  return ecosystem[lang];
}
