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
    ipHeading: 'IP Portfolio',
    merchHeading: 'Merchandise & Product Lines',
    cultureHeading: 'Company Culture & Work Environment',
    valuationHeading: 'Valuation Roadmap',
    rosterHeading: 'Artist Roster',
    partnersHeading: 'Strategic Partners',
    tableShareholder: 'Shareholder',
    tableOwnership: 'Ownership',
    tableRole: 'Role',
    tablePartner: 'Partner',
    tableLayer: 'Layer',
    rosterNote:
      'JH Company is a single-artist studio by design — it has never signed or accepted any other artist. Every roster-expansion proposal (including from former bandmates) has been turned down by the founder.',
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
        'Captain EO: RESONANCE draws its rights from the original Captain EO (1986), which is held by multiple parties — Disney is the majority rights holder and distributor, Lucasfilm as producer of the original, the MJ Estate holds the music and likeness rights to Michael Jackson, and JH Company holds creative ownership as creator of the new universe. JH Company\'s stake is smaller than Disney\'s, but it retains creative control and co-direction rights — making this the highest-value franchise asset in the portfolio. The deal closed because every party benefited: the MJ Estate trusted a documented MJ-lineage artist to reactivate a dormant property on favorable royalty + strict likeness-guardrail terms; a franchise-fatigued Lucasfilm gained a low-risk new tentpole it did not have to originate; and Disney — already backing James after Shang-Chi — kept majority + distribution while he carried the creative risk and funded development.',
    },
    {
      asset: 'Music Catalog (2022–present)',
      type: 'Recorded Music IP',
      ownership: '100% (JH Company) · Distributed via Warner Music Korea',
      detail:
        'SOFTEST TOUCH, PULSE, ARE U STILL, CAN\'T LEAVE ALONE, DECADE — all master recordings have belonged to JH Company from the start, unlike the SM-era recordings (LIKE I DO), which remain under the SM catalog.',
    },
    {
      asset: 'SM-Era Catalog (2016–2023)',
      type: 'Recorded Music IP',
      ownership: 'SM Entertainment (master) · James Hwang (publishing share)',
      detail:
        'GONUNMA: LIKE I DO and NCT 127 recordings — the masters remain with SM, but James\'s publishing royalty share was reviewed and adjusted under the 2023 settlement agreement.',
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
    { name: 'SM Entertainment', layer: 'Group Activity', role: 'Legacy group-layer coordination' },
    { name: 'Warner Music Korea', layer: 'Global Distribution', role: 'Music distribution infrastructure' },
    { name: 'Avex Group', layer: 'Japan', role: 'Territory execution partner' },
    { name: 'Creative Artists Agency', layer: 'US', role: 'Representation + packaging' },
    { name: 'The Walt Disney Company', layer: 'Film / IP', role: 'Cinematic IP platform — RESONANCE' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'Business',
    title: 'JH Company',
    subtitle: 'ก่อตั้ง 2023 · สำนักงานใหญ่กรุงโซล · ครีเอทีฟสตูดิโอศิลปินเดี่ยว & IP house',
    introHtml:
      'JH Company ก่อตั้งโดย <strong style="color:var(--text)">James Hwang</strong> เมื่อวันที่ 30 เมษายน 2023 ทันทีหลังจาก' +
      '<a href="%L%legal" style="color:var(--gold)">การ settle ข้อพิพาทสัญญากับ SM Entertainment</a> ' +
      'บริษัทดูแล<a href="%L%discography" style="color:var(--gold)">คลังเพลง</a>, ' +
      '<a href="%L%tours" style="color:var(--gold)">การดำเนินงานทัวร์</a>, ' +
      '<a href="%L%ecosystem" style="color:var(--gold)">พาร์ทเนอร์แบรนด์</a> ' +
      'และทำหน้าที่เป็นหน่วยงานผลิตเบื้องหลังแฟรนไชส์ <a href="%L%filmography/resonance" style="color:var(--gold)">RESONANCE</a> ' +
      'ตามเจตนารมณ์ของผู้ก่อตั้ง บริษัท<strong style="color:var(--text)">ไม่เซ็นศิลปินคนอื่นเลย</strong> — มีอยู่เพื่อเป็น creative vehicle และ IP house ของ James Hwang เท่านั้น ไม่ใช่ label ที่ขยาย roster',
    ownershipHeading: 'โครงสร้างผู้ถือหุ้น',
    divisionsHeading: 'หน่วยงานหลัก',
    revenueHeading: 'โครงสร้างรายได้',
    ipHeading: 'พอร์ตโฟลิโอ IP',
    merchHeading: 'สินค้าและผลิตภัณฑ์',
    cultureHeading: 'วัฒนธรรมองค์กร & สภาพแวดล้อมการทำงาน',
    valuationHeading: 'แผนมูลค่าบริษัท',
    rosterHeading: 'ศิลปินในสังกัด',
    partnersHeading: 'พาร์ทเนอร์เชิงกลยุทธ์',
    tableShareholder: 'ผู้ถือหุ้น',
    tableOwnership: 'สัดส่วนหุ้น',
    tableRole: 'บทบาท',
    tablePartner: 'พาร์ทเนอร์',
    tableLayer: 'ขอบเขต',
    rosterNote:
      'JH Company เป็น single-artist studio โดยเจตนา — ไม่เคยเซ็นและไม่รับศิลปินคนอื่นเข้าสังกัด ข้อเสนอ roster expansion ทั้งหมด (รวมถึงเพื่อนร่วมวงเก่า) ถูกปฏิเสธโดย founder',
  },
  kpis: [
    { val: '82%', label: 'สัดส่วนหุ้นของ James', sub: 'ผู้ถือหุ้นใหญ่' },
    { val: '$95–160M', label: 'รายได้ต่อปี', sub: 'ประมาณการหลังปี 2026' },
    { val: '$420–650M', label: 'มูลค่าสูงสุด', sub: 'สถานการณ์หลัง RESONANCE' },
    { val: '1', label: 'ศิลปินในสังกัด', sub: 'ตั้งใจให้เป็น single-artist' },
  ],
  ownershipRows: [
    { who: 'James Hwang', pct: '82%', role: 'ผู้ถือหุ้นใหญ่', w: 82 },
    { who: 'พาร์ทเนอร์ผู้บริหาร', pct: '8%', role: 'ชั้นผู้บริหารระดับปฏิบัติการ', w: 8 },
    { who: 'นักลงทุนเชิงกลยุทธ์', pct: '10%', role: 'ทุนสนับสนุนการเติบโต', w: 10 },
  ],
  divisions: [
    { name: 'ดนตรี', icon: '♪', desc: 'การปล่อยผลงาน · เครือข่ายโปรดิวเซอร์ · เอกลักษณ์เสียง' },
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
    { segment: 'การเผยแพร่ (Publishing)', share: '5–8%', role: 'โครงสร้างค่าลิขสิทธิ์ระยะยาว (long-tail)', pct: 6 },
    { segment: 'สินค้าที่ระลึก', share: '6–9%', role: 'การสร้างรายได้จากอัตลักษณ์แบรนด์', pct: 7 },
  ],
  ipPortfolio: [
    {
      asset: 'RESONANCE Universe',
      type: 'ทรัพย์สินทางปัญญาแฟรนไชส์ (Franchise IP)',
      ownership: 'ถือร่วมกัน — The Walt Disney Company · Lucasfilm · MJ Estate · JH Company',
      detail:
        'Captain EO: RESONANCE ต้องอิงสิทธิ์จาก original Captain EO (1986) ซึ่งมีหลายฝ่ายถือ — Disney เป็น majority rights holder และ distributor, Lucasfilm ในฐานะ producer ของต้นฉบับ, MJ Estate ถือสิทธิ์เพลงและ likeness ของ Michael Jackson, JH Company ถือ creative ownership ในฐานะผู้สร้าง new universe JH Company มีสัดส่วนน้อยกว่า Disney แต่ retain สิทธิ์ creative control และ co-direction ถือเป็น franchise asset ที่มีมูลค่าสูงที่สุดในพอร์ตโฟลิโอ ดีลปิดได้เพราะทุกฝ่ายได้ประโยชน์: MJ Estate เชื่อใจศิลปินสาย MJ-lineage ให้ revive IP ที่หลับอยู่บนเงื่อนไข royalty ที่ดี + guardrail เรื่อง likeness ที่เข้มงวด · Lucasfilm ที่แฟรนไชส์หลักกำลังล้าได้ tentpole ใหม่ความเสี่ยงต่ำที่ไม่ต้องริเริ่มเอง · Disney ที่หนุน James อยู่แล้วหลัง Shang-Chi เก็บ majority + distribution ไว้ ขณะที่ James แบก creative risk และลงทุนพัฒนา',
    },
    {
      asset: 'คลังเพลง (2022–ปัจจุบัน)',
      type: 'ทรัพย์สินทางปัญญาเพลงบันทึกเสียง (Recorded Music IP)',
      ownership: '100% (JH Company) · จัดจำหน่ายผ่าน Warner Music Korea',
      detail:
        "SOFTEST TOUCH, PULSE, ARE U STILL, CAN\'T LEAVE ALONE, DECADE — master recordings ทั้งหมดเป็นของ JH Company ตั้งแต่ต้น ต่างจาก SM-era recordings (LIKE I DO) ที่ยังอยู่ภายใต้ SM catalog",
    },
    {
      asset: 'คลังเพลงยุค SM (2016–2023)',
      type: 'ทรัพย์สินทางปัญญาเพลงบันทึกเสียง (Recorded Music IP)',
      ownership: 'SM Entertainment (มาสเตอร์) · James Hwang (ส่วนแบ่งด้าน publishing)',
      detail:
        'GONUNMA: LIKE I DO และ NCT 127 recordings — master อยู่กับ SM แต่ publishing royalty share ของ James ได้รับการตรวจสอบและปรับในข้อตกลง settlement 2023',
    },
    {
      asset: 'คลังลิขสิทธิ์การเผยแพร่',
      type: 'ลิขสิทธิ์การเผยแพร่เพลง (Music Publishing)',
      ownership: 'JH Company Publishing · บริหารร่วมกัน',
      detail:
        'รวม songwriting credits บน releases ของตัวเอง, tracks ที่เขียนให้ศิลปินอื่น (Jaehyun "SMOKE", aespa "Flowers"), และ sync licensing deals — long-tail revenue stream ที่เติบโตต่อเนื่อง',
    },
    {
      asset: 'ชื่อและเครื่องหมายการค้า GONUNMA',
      type: 'เครื่องหมายการค้า / IP แบรนด์',
      ownership: '100% James Hwang — ยืนยันใน settlement กับ SM ปี 2023',
      detail:
        'สิทธิ์ในชื่อและเครื่องหมายการค้า GONUNMA ได้รับการยืนยันในข้อตกลงกับ SM เกษียณจากการใช้เป็น performing/artist name แล้ว แต่ยัง retain ไว้เป็น producer credit และเป็น product/capsule brand line',
    },
  ],
  merchandise: [
    {
      line: 'JH Company Official Store',
      category: 'สินค้าสำหรับแฟน',
      scale: 'ต่อเนื่อง',
      detail:
        'Photobooks, tour goods, album packages — จัดจำหน่ายผ่าน Weverse Store และ JH Company online store ตรงถึงผู้บริโภค ไม่ผ่าน third-party retailer รายได้อยู่ใน Merchandising segment (6–9% ของ revenue รวม)',
    },
    {
      line: 'GONUNMA × Nike Capsule Series',
      category: 'คอลแลบแฟชั่น',
      scale: 'Vol.1 (2023) · Vol.2 (2025)',
      detail:
        'Co-designed capsule collections จำหน่ายผ่าน SNKRS app และ Nike flagship ทั่วโลก Vol.1 sold out ภายใน 3 ชั่วโมง — จัดเป็น commercial fashion revenue ไม่ใช่แค่ endorsement fee เพราะ James มี royalty share จากยอดขาย',
    },
    {
      line: 'PULSE Tour Merchandise',
      category: 'สินค้าคอนเสิร์ต',
      scale: '2023–2024 · 64 shows',
      detail:
        'Concert-exclusive merchandise วางขายในทุก venue ของ PULSE tour — รายได้ประมาณการว่าอยู่ที่ $18–28M ตลอด run ไม่รวมใน touring gross $235M ที่รายงานแยก',
    },
  ],
  companyCulture: [
    {
      label: 'Benefits & Welfare',
      color: '#5a7c6a',
      text:
        'สวัสดิการของ JH Company อยู่ในระดับสูงที่สุดในวงการบันเทิงเกาหลี — ประกันสุขภาพเต็มรูปแบบ, ค่าตอบแทนแข่งขันได้กับ agency ใหญ่, นโยบาย work-life balance ที่เป็นทางการ, และวัฒนธรรมองค์กรที่ไม่มีระบบลำดับชั้นแบบ idol-agency แบบดั้งเดิม ชื่อเสียงด้านนี้แพร่กระจายในวงการและทำให้มีใบสมัครงานเข้ามาต่อเนื่อง แม้ไม่ได้ประกาศรับสมัครเสมอไป',
    },
    {
      label: 'Single-Artist Mandate',
      color: '#5a7aaa',
      text:
        'JH Company ไม่เซ็นศิลปินคนอื่นเลย — เป็น single-artist studio โดยเจตนาของ James ตั้งแต่ก่อตั้ง แม้จะมีศิลปินและ trainee จำนวนมากติดต่อเข้ามา (รวมถึงเพื่อนร่วมวงเก่า) James ปฏิเสธทุกครั้ง โดยให้เหตุผลว่าไม่ต้องการสร้างความสัมพันธ์แบบ agency–artist ที่เขาเคยเป็นฝ่ายเสียเปรียบ และไม่ต้องการให้ใครต้องแบกภาระ creative control ของเขา บริษัทจึงทำหน้าที่เป็น personal creative vehicle + IP house ไม่ใช่ label ที่ขยาย roster',
    },
    {
      label: 'Workload Reality',
      color: '#facc15',
      text:
        'สวัสดิการดีไม่ได้แปลว่างานเบา — James ทำงานในทุก project อย่างเข้มข้น (composition, lyrics, arrangement, production, ภาพยนตร์) และ RESONANCE franchise ต้องการ production pipeline ตลอดเวลา งานหนักมากสำหรับทีมที่ตั้งใจให้เล็ก เพราะไม่มี roster อื่นมาช่วยกระจาย output แต่ทุกอย่างยังหมุนรอบศิลปินคนเดียว turnover ต่ำเพราะค่าตอบแทนดี แต่ burnout เป็นประเด็นที่รับรู้ภายในองค์กร',
    },
    {
      label: 'Revenue Ceiling Effect',
      color: '#c06080',
      text:
        'การเป็น single-artist company เพดานรายได้ผูกกับ output ของ James คนเดียว — ไม่มี roster diversification มาช่วยกระจายความเสี่ยงหรือเพิ่ม revenue stream แบบ label ทั่วไป นักวิเคราะห์อุตสาหกรรมมองว่า JH Company "ทิ้งเงินบนโต๊ะ" ด้วยการไม่ขยาย roster ทั้งที่มี infrastructure และ reputation พร้อม แต่ James ยืนยันว่า scale ไม่ใช่เป้าหมาย และยอมรับ ceiling นี้เป็น trade-off ของการคุมทุกอย่างได้เต็มที่',
    },
  ],
  valPhases: [
    { phase: 'หลัง DECADE', range: '$180M–320M', trigger: 'การพิสูจน์ scale จากทัวร์' },
    { phase: 'หลัง RESONANCE', range: '$420M–650M', trigger: 'การเปิดใช้งาน Franchise IP' },
    { phase: 'อัปไซด์แบบรุกหนัก', range: '$800M+', trigger: 'การก้าวสู่ระดับ global studio' },
  ],
  roster: [
    { name: 'James Hwang', since: '2023', role: 'ผู้ก่อตั้ง · ศิลปินเพียงหนึ่งเดียว' },
  ],
  partners: [
    { name: 'SM Entertainment', layer: 'กิจกรรมกลุ่ม', role: 'ประสานงานระดับกลุ่มเดิม' },
    { name: 'Warner Music Korea', layer: 'จัดจำหน่ายทั่วโลก', role: 'โครงสร้างพื้นฐานจัดจำหน่ายเพลง' },
    { name: 'Avex Group', layer: 'ญี่ปุ่น', role: 'พาร์ทเนอร์ดำเนินงานในพื้นที่' },
    { name: 'Creative Artists Agency', layer: 'สหรัฐฯ', role: 'ตัวแทน + packaging' },
    { name: 'The Walt Disney Company', layer: 'ภาพยนตร์ / IP', role: 'แพลตฟอร์ม IP ภาพยนตร์ — RESONANCE' },
  ],
};

export const company = { en, th };
export function getCompany(lang: Lang) {
  return company[lang];
}
