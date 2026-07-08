// Bilingual content for the Endorsements & Touring (ecosystem) page.
// Shared (non-translatable) identity + money figures are exported separately and
// merged with the localized fields in the page; charts consume the shared arrays.

import type { Lang } from '../../i18n';

// Shared — brand identity + deal value (non-translatable). Index-aligned with en/th solodeals.
export const deals = [
  { brand: 'Saint Laurent', value: '$4–7M/yr', since: '2023' },
  { brand: 'Cartier', value: '$2–4M/yr', since: '2023' },
  { brand: 'Sony', value: '$3–5M/yr', since: '2022' },
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
    groupHeading: 'Group Deals (via SM / NCT 127)',
    smHeading: 'SM Contract Constraints',
    smRestricted: 'Restricted while active in NCT 127',
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
  },
  incomeSummary: [
    { val: '$16–22M', label: 'Solo Endorsements/yr', sub: 'Controlled via JH Company' },
    { val: '$1–2M', label: 'Group Endorsements/yr', sub: 'SM / NCT 127 contract layer' },
    { val: '$309M', label: 'Touring Gross (2 tours)', sub: 'Ticket sales combined' },
    { val: '$95–120M', label: 'James Net Worth (post-DECADE)', sub: 'Global crossover creator tier' },
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
        { name: 'Capsule Club', year: '2025', desc: 'Limited-edition GONUNMA × Saint Laurent capsule — 3 pieces. Sold exclusively through SL Paris flagship and one Seoul pop-up. Sold out in 4 hours.' },
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
      'บริหารทั้งหมดผ่าน <a href="%L%company" style="color:var(--gold)">JH Company</a> ตั้งแต่ปี 2023 พอร์ตแบรนด์ของ James Hwang ครอบคลุม luxury fashion, electronics และ sportswear — สร้างรอบ <a href="%L%public-image" style="color:var(--gold)">public image</a> ในฐานะ dark R&B auteur ตัวเลขรายได้ทัวร์รวม <a href="%L%tours/pulse" style="color:var(--gold)">PULSE World Tour</a> และ <a href="%L%tours/decade" style="color:var(--gold)">DECADE Tour</a>',
    revenueOverview: 'ภาพรวมรายได้',
    revenueOverviewSub: 'มูลค่าดีลพรีเซ็นเตอร์ · เศรษฐศาสตร์ทัวร์',
    brandChartTitle: 'มูลค่าดีลแบรนด์ ($/ปี)',
    tourChartTitle: 'เศรษฐศาสตร์ทัวร์ ($M)',
    soloHeading: 'ดีลแบรนด์เดี่ยว',
    deliverables: 'สิ่งที่ต้องส่งมอบ',
    campaignHistory: 'ประวัติแคมเปญ',
    since: 'ตั้งแต่',
    brandFitLabel: 'ความเข้ากับแบรนด์:',
    groupHeading: 'ดีลแบบกลุ่ม (ผ่าน SM / NCT 127)',
    smHeading: 'ข้อจำกัดสัญญา SM',
    smRestricted: 'ถูกจำกัดขณะยัง active ใน NCT 127',
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
    capitalNote: 'การเปลี่ยนผ่าน: ค่ายศิลปิน boutique → creator + franchise IP house สำหรับศิลปินเดี่ยว',
    warnerHeading: 'Warner Music Korea — บทบาทจัดจำหน่าย',
    revShareLabel: 'ส่วนแบ่งรายได้:',
  },
  incomeSummary: [
    { val: '$16–22M', label: 'ดีลเดี่ยว/ปี', sub: 'ควบคุมผ่าน JH Company' },
    { val: '$1–2M', label: 'ดีลกลุ่ม/ปี', sub: 'ชั้นสัญญา SM / NCT 127' },
    { val: '$309M', label: 'รายได้ทัวร์ (2 ทัวร์)', sub: 'ยอดขายบัตรรวม' },
    { val: '$95–120M', label: 'มูลค่าทรัพย์สิน James (หลัง DECADE)', sub: 'ระดับ creator crossover ระดับโลก' },
  ],
  solodeals: [
    {
      sector: 'Global Fashion',
      status: 'Active · Global',
      concept: 'Dark Quiet Luxury — Shadow of the Stage',
      deliverables: ['ถ่ายแคมเปญระดับโลก 3–4 ครั้ง/ปี', 'front row รันเวย์เอกสิทธิ์ (Paris Fashion Week)', 'คอนเทนต์โซเชียล (ไม่สคริปต์)', 'ออกงานอีเวนต์ (2 ครั้ง/ปี)'],
      campaigns: [
        { name: 'Shadow Series', year: '2023', desc: 'ถ่ายโดย Collier Schorr ที่โซลและปารีส ซีรีส์ editorial ขาว-ดำ — James ในบรรยากาศ post-show staging ไม่มี copy ไม่มี product placement เน้นภาพล้วน' },
        { name: 'SL Homme FW24', year: '2024', desc: 'ปรากฏในแคมเปญ Saint Laurent Fall/Winter 2024 ทั้งสิ่งพิมพ์และดิจิทัลระดับโลก ร่วมกับ talent ยุโรปและญี่ปุ่น เป็นศิลปินสาย K-pop คนแรกที่เป็นแกนแคมเปญ seasonal ระดับโลกของ SL' },
        { name: 'Capsule Club', year: '2025', desc: 'แคปซูล GONUNMA × Saint Laurent รุ่นลิมิเต็ด — 3 ชิ้น ขายเฉพาะที่ SL Paris flagship และ pop-up โซลแห่งเดียว ขายหมดใน 4 ชั่วโมง' },
      ],
      brandFit: 'Anthony Vaccarello ติดต่อ James โดยตรงหลังเห็น visual identity ของ PULSE Tour — โทนเวทีขาว-ดำของโชว์ตรงกับ design language ปัจจุบันของ SL เป๊ะ ไม่ต้องมีความสัมพันธ์มาก่อน',
    },
    {
      sector: 'Watch / Jewelry',
      status: 'Active · Asia-Pacific → Global',
      concept: 'Asian Masculine Elegance — Timepiece as Inheritance',
      deliverables: ['ถ่ายแคมเปญระดับภูมิภาค 2 ครั้ง/ปี (Asia-Pacific)', 'touchpoint ระดับโลกบางส่วน', 'อีเวนต์ VIP boutique (โซล, กรุงเทพ, โตเกียว)', 'product seeding แบบส่วนตัว'],
      campaigns: [
        { name: 'Santos de Cartier Asia Campaign', year: '2023', desc: 'เป็นหน้าของไลน์ Santos de Cartier สำหรับผู้ชายในตลาดเกาหลี ไทย และญี่ปุ่น กรอบแคมเปญ: นาฬิกาเป็นเพื่อนคู่งานฝีมือ ไม่ใช่สัญลักษณ์สถานะ — สอดคล้องกับตัวตน producer-artist ของ James' },
        { name: 'Love Bracelet Holiday Edit', year: '2024', desc: 'แคมเปญเทศกาลระดับภูมิภาคของคอลเลกชัน Love วิดีโอสั้นผลิตโดยทีม in-house ของ JH Company ถ่ายที่สตูดิโอโซลของ James วางเป็น endorsement ส่วนตัวมากกว่าโฆษณาทั่วไป' },
        { name: 'Panthère Campaign – Global Expansion', year: '2025', desc: 'เข้าสู่แคมเปญระดับโลกของ Cartier ครั้งแรกกับไลน์ Panthère de Cartier เป็นจุดเปลี่ยนจากดีลเฉพาะเอเชียสู่ touchpoint ทั่วโลก — ส่วนหนึ่งของกลยุทธ์ Cartier ในการขยายฐานผู้บริโภค luxury ชายชาวเอเชียทั่วโลก' },
      ],
      brandFit: 'กลยุทธ์ขยายเอเชียของ Cartier ต้องการหน้าที่มีความน่าเชื่อถือในหลายตลาดพร้อมกัน background ไทย-จีน-เกาหลีของ James ให้แบรนด์เข้าถึงหลายฝ่ายได้จริงโดยไม่ต้องใช้ ambassador แยก',
    },
    {
      sector: 'Tech / Audio',
      status: 'Active · Global',
      concept: 'Creator Authenticity — Sound Before Everything',
      deliverables: ['integrate สินค้าในคอนเทนต์สตูดิโอ', 'ปรากฏใน WH-1000XM / MDR-Z1R', 'คอนเทนต์สารคดีสาย creator (2 ครั้ง/ปี)', 'ออกงาน Sony Music ระดับโลก'],
      campaigns: [
        { name: 'Sound Shapes', year: '2022', desc: 'แคมเปญเปิดตัวหูฟัง WH-1000XM5 James ถ่ายในเซสชันอัดจริง ไม่ใช่ฉากจัด copy: "Between the track and the silence — I choose what stays." ฉายทั่วโลกผ่าน YouTube pre-roll และ editorial' },
        { name: 'Studio Sessions Series', year: '2023', desc: 'ซีรีส์คอนเทนต์ creator ของ Sony — สารคดี 6 ตอนของกระบวนการผลิตอัลบั้ม PULSE James ใช้ monitor อ้างอิง MDR-Z1R ของ Sony ตลอด ยอดชม 28M ทั่ว YouTube และช่องโซเชียลระดับโลกของ Sony' },
        { name: 'MDR Creator Line', year: '2024', desc: 'เป็น ambassador ไลน์หูฟังอ้างอิงระดับมืออาชีพ MDR ของ Sony ใช้ในเซสชันมิกซ์ ARE U STILL จริง ไม่ใช่วางทีหลัง ซีรีส์รวมมินิสารคดี 12 นาทีว่าคุณภาพ monitoring ส่งผลต่อการตัดสินใจด้าน vocal อย่างไร' },
      ],
      brandFit: 'Sony ติดต่อ James ครั้งแรกปี 2022 เพราะรู้ว่าเขาใช้ monitor อ้างอิงของ Sony ในการผลิตอยู่แล้ว — ทำให้ endorsement เป็นการต่อยอดพฤติกรรมเดิมมากกว่าการรับแบรนด์ใหม่ ดีลถูกทำอย่างเป็นทางการภายใต้ JH Company หลังก่อตั้งปี 2023 เลี่ยงความขัดแย้งกับ Samsung electronics จากยุค NCT 127',
    },
    {
      sector: 'Sneaker / Streetwear',
      status: 'Active · Global',
      concept: 'Movement as Language — Athleisure Meets Stage',
      deliverables: ['คอลเลกชันแคปซูล 1 ชุด/ปี (มีส่วนออกแบบ)', 'integrate wardrobe ทัวร์', 'แคมเปญตามฤดูกาล (1–2 ครั้ง/ปี)', 'ปรากฏตัวเอกสิทธิ์ NikeLab'],
      campaigns: [
        { name: 'GONUNMA × Nike Capsule Vol.1', year: '2023', desc: 'คอลเลกชันแคปซูลออกแบบร่วมกับทีม Nike Sportswear: เซ็ต 5 ชิ้น (coach jacket, cargo pants, tank, Air Force 1 2 สี) คอนเซ็ปต์: wardrobe เวทีเจอ utility ประจำวัน วางขายทั่วโลกผ่าน SNKRS app ขายหมดในไม่ถึง 3 ชั่วโมง' },
        { name: 'PULSE Tour Integration', year: '2023-24', desc: 'James ใส่ Nike ครบทั้ง 64 รอบ PULSE Tour — คอนเทนต์ backstage ดัน 40M+ impressions Nike ใส่ colorway เฉพาะทัวร์ที่ไม่มีขายในร้าน สร้างดีมานด์ตลาดรอง' },
        { name: 'GONUNMA × Nike Capsule Vol.2', year: '2025', desc: 'ดรอปยุค CAN\'T LEAVE ALONE คอนเซ็ปต์ duality: Vol.2A (SOUR — โทนดำมินิมอล) และ Vol.2B (HONEY — ครีม/ทองอุ่น) เป็นครั้งแรกที่แคปซูล Nike ออก 2 เรื่องราว colorway พร้อมกัน ดิวิชัน streetwear เอเชียของ Nike รายงานผลแคมเปญสาย K-pop สูงสุดเท่าที่เคยมี' },
      ],
      brandFit: 'การชวนของ Nike เริ่มจากการคุยเรื่อง wardrobe ทัวร์ — แบรนด์เสนอ supply ลุค PULSE Tour แล้วความสัมพันธ์พัฒนาเป็น co-design พื้นฐานการเต้นของ James ทำให้ความเข้ากับ sportswear น่าเชื่อถือจริงในสายตาคน sneaker culture',
    },
    {
      sector: 'Grooming (Asia-Pacific)',
      status: 'Active · Asia-Pacific',
      concept: 'New Asian Masculine Beauty — Precision Without Performance',
      deliverables: ['ถ่ายแคมเปญระดับภูมิภาค 2 ครั้ง/ปี', 'product seeding น้ำหอมและ skincare', 'อีเวนต์ VIP โซลและกรุงเทพ', 'คอนเทนต์ดิจิทัล (Weibo, Instagram, LINE)'],
      campaigns: [
        { name: 'Dior Homme Intense Campaign Asia', year: '2024', desc: 'เป็นหน้าระดับภูมิภาคของน้ำหอม Dior Homme Intense ในเกาหลี ไทย ญี่ปุ่น และไต้หวัน art direction: สตูดิโอแสงน้อย ไม่มีลูกเล่น — James ในท่ากำลังฟัง ไม่ใช่กำลังแสดง ถ่ายโดยช่างภาพฐานฮ่องกง Leslie Zhang' },
        { name: 'Sauvage Elixir Korea Launch', year: '2024', desc: 'อีเวนต์เปิดตัว co-branded ที่ Dior flagship เชิงดัมโซล James จัดเซสชันฟังเพลง CAN\'T LEAVE ALONE ที่ยังไม่ปล่อยเป็น backdrop บรรยากาศ — แขกสื่อ/VIP 200 คน วางการเปิดตัวน้ำหอมเป็นอีเวนต์เชิงศิลปะมากกว่า retail activation' },
        { name: 'Dior Beauty Men Asia Digital Series', year: '2025', desc: 'ซีรีส์คอนเทนต์ skincare 6 ตอนทั่วช่องภูมิภาคของ Dior Beauty James เล่ารูทีนก่อนโชว์โดยใช้สินค้า skincare ของ Dior ผลิตทั้งหมด in-house โดย JH Company — ครั้งแรกที่ Dior Beauty Asia ให้ ambassador ระดับภูมิภาคคุม creative เต็มที่' },
      ],
      brandFit: 'Dior Beauty ตามหา ambassador ชายสาย K โดยเฉพาะที่ไม่เอนไปทาง idol aesthetic แบบเดิม public image สาย art-house และการต้านการตลาดความงามแบบทั่วไปของ James ทำให้เขาหายากในหมวดนี้ — หน้า grooming ชายที่ไม่นิยามตัวเองเป็น beauty influencer',
    },
  ],
  groupNotes: [
    { sector: 'Telecom Asia', note: 'ดีลแบบกลุ่มผ่าน SM/NCT 127' },
    { sector: 'Beverage', note: 'ดีลแบบกลุ่มผ่าน SM/NCT 127' },
  ],
  smConstraints: ['Samsung (ขัดแย้ง electronics)', 'คู่แข่ง SK Telecom', 'คู่แข่ง Coca-Cola'],
  tourScale: ['ศิลปินทัวร์เดี่ยวระดับใหญ่ระดับโลก', 'ทัวร์ฟอร์แมต prestige แบบ anthology'],
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
