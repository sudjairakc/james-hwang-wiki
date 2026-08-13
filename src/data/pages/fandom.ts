// Bilingual content for the Gemzen Fandom page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Section headings / short chart-and-group labels are kept identical across
// languages (matching the canon.ts / artistry.ts precedent); data-row field
// labels (basics, chant cues, platform regions, merch item types) and prose
// (intro, notes, descriptions, results) are translated. Proper nouns, hex
// colors, dates, and numeric metrics are preserved verbatim in both langs.
// In prose HTML, the token %L% is replaced by `${base}${lang}/` at render time.

import type { Lang } from '../../i18n';

const en = {
  ui: {
    label: 'Community',
    title: 'Gemzen — Official Fandom',
    introHtml:
      '<strong style="color:var(--text)">Gemzen</strong> (젬즌) is the official fandom name of James Hwang (GONUNMA), formally established April 30, 2023 — the day JH Company was founded — marking the beginning of James\'s career as a fully independent artist. Informal short form: <strong style="color:var(--text)">Gemz</strong>. Fanbase also uses <strong style="color:var(--text)">Chamois (ชามัวร์)</strong> as a regional nickname. Prior to independence, fans who followed James\'s solo work as GONUNMA operated informally without an official fandom structure.',
    colorsLabel: 'Official Colors',
    goldAshName: 'Gold Ash',
    onyxName: 'Onyx',
    profileLabel: 'Fandom Profile',
    chantHeading: 'Fan Chant — HOW DOES IT FEEL?',
    chantIntro: 'Standard chant pattern used during live performances. Each cue marks the moment fans respond.',
    chantNoteHtml:
      'Note: Fan chant pattern varies by song and concert segment. Silent-listening sections (no chant) are observed during ballad and deep-cut performances — a documented Gemzen cultural marker. See <a href="%L%cultural-impact" style="color:var(--gold)">Cultural Impact §2.6</a>.',
    platformsHeading: 'Community Platforms',
    projectsHeading: 'Major Fan Projects',
    milestonesHeading: 'Community Milestones',
    milestonesIntro: 'A record of fandom-level movements — trending moments, MV clubs, billboard takeovers, streaming records.',
    merchHeading: 'Official Merchandise',
    overviewLabel: 'Fandom Overview',
    overviewSubtitle: 'Geographic distribution · Platform sizes',
    geoSplitLabel: 'Geographic Split',
    platSizesLabel: 'Platform Sizes',
    geoDistHeading: 'Geographic Distribution',
  },
  basics: [
    { label: 'Fandom Name', val: 'Gemzen' },
    { label: 'Fan Name (Singular / Plural)', val: 'Gemzen · Gemz (informal)' },
    { label: 'Official Color', val: 'Gold Ash + Onyx' },
    { label: 'Color Codes', val: '#C9A84C · #1A1A1A' },
    { label: 'Official Light Stick', val: 'The Hooked Horns (gen.1 — released June 2023)' },
    { label: 'Fan Cafe', val: 'Gemzen Official (Daum · launched April 2023)' },
    { label: 'Established', val: 'April 30, 2023 — formally established upon JH Company founding' },
    { label: 'Fan Union', val: 'Global Gemzen Union (GGU) — unofficial international council, formed June 2023' },
  ],
  platforms: [
    { name: 'Daum Fan Cafe', region: 'Korea', focus: 'Official hub, early content drops, fan-certified exclusives', size: '420K+ members' },
    { name: 'Twitter / X @Gemzenuniverse', region: 'Global', focus: 'Real-time updates, voting coordination, trend campaigns', size: '1.2M+ followers' },
    { name: 'Instagram @gonunma_gemzen', region: 'Global', focus: 'Photo archives, fan art highlights, event coverage', size: '890K+ followers' },
    { name: 'Weibo GONUNMA超话', region: 'China', focus: 'Streaming support, chart voting, mainland China community', size: '560K+ followers' },
    { name: 'LINE Gemzen TH Official', region: 'Thailand', focus: "James's largest overseas fanbase — 380K+ members, runs independent charity projects", size: '380K+ members' },
    { name: 'Reddit r/GONUNMAofficial', region: 'International', focus: 'Deep-dive analysis, translation teams, wiki contribution', size: '95K+ members' },
  ],
  chant: [
    { cue: '"Cause if you came here to party"', who: 'James', text: 'Cause if you came here to party' },
    { cue: '(after line)', who: 'Fans', text: 'JAMES HWANG!' },
    { cue: 'Chorus end', who: 'Fans', text: 'GEMZEN! (echo)' },
  ],
  projects: [
    {
      name: 'PULSE Launch Streaming Campaign',
      year: '2023',
      desc: "Gemzen's first coordinated streaming campaign as an official fandom — organized by the newly formed Global Gemzen Union across 18 time zones for the July 21, 2023 PULSE album release. Achieved 18M streams in the first 24 hours, pushing PULSE to Circle Album Chart #1 in week one.",
      result: 'Circle Album Chart #1 · week 1',
    },
    {
      name: 'Gemzen Thailand Flood Relief',
      year: '2023',
      desc: "Thai Gemzens raised ฿4.2M (approx. $120K USD) for 2023 flooding victims in Chiang Rai, in James's name. James personally acknowledged the project in a Weverse post — his first public recognition of a fan charity effort under the Gemzen name.",
      result: 'James personal acknowledgment via Weverse',
    },
    {
      name: 'ARE U STILL Grammy Campaign',
      year: '2024',
      desc: 'Coordinated streaming, playlist submission, and press outreach campaign targeting Grammy committee exposure for ARE U STILL. 160-member volunteer team across 24 countries. Ran for 8 months.',
      result: 'Grammy nomination (Best Progressive R&B Album)',
    },
    {
      name: 'DECADE 10th Anniversary Fan Book',
      year: '2026',
      desc: '420-page fan-compiled anthology covering 10 years of James Hwang career — 1,200 fan contributors, 34 countries, 8 languages. Physical edition produced in limited run of 5,000 copies, sold through fan pre-order.',
      result: '5,000 copies sold out in 6 hours',
    },
  ],
  milestones: [
    { date: 'Jun 2023', title: 'First global trend #1', desc: 'The PULSE release pushed #JamesHwang to worldwide trending #1 on X for the first time — 1.4M tweets within 24 hours.', metric: '#1 WW · 1.4M tweets' },
    { date: 'Aug 2023', title: 'HOW DOES IT FEEL? — 100M club', desc: 'The MV hit 100M views — the first song to do so as an independent artist after founding JH Company.', metric: '100M views' },
    { date: 'Mar 2024', title: 'TEARS ON A PRETTY FACE billboard takeover', desc: 'Gemzen crowdfunded billboards across 14 cities in 6 countries to celebrate the MV release — including Times Square and Siam in central Bangkok.', metric: '14 cities · 6 countries' },
    { date: 'Feb 2025', title: 'Grammy night stream surge', desc: 'On Grammy night, ARE U STILL surged onto the Spotify Global Daily Top 10 — catalog streams up +340% within a single day.', metric: '+340% catalog' },
    { date: 'Jul 2025', title: 'Three 100M-view MVs', desc: "CAN\'T LEAVE ALONE (feat. Pharrell) became the third MV to hit 100M — confirming a solid global MV audience base.", metric: '3× 100M MV' },
    { date: 'Jan 2026', title: 'DECADE anniversary fan project record', desc: 'The 5,000-copy fan book sold out in 6 hours + a global streaming relay across 34 countries celebrated the 10th anniversary.', metric: '34 countries' },
  ],
  merch: [
    {
      era: 'SOFTEST TOUCH · PULSE (Launch)',
      year: '2023',
      color: '#9b7fc8',
      items: [
        { name: 'GONUNMA Debut Fan Kit', type: 'Launch Package', desc: 'First official merchandise issued under JH Company — released April 2023 alongside the Weverse store launch. Photobook (80p) · mini poster set · photo card set · sticker pack · lyric card.' },
        { name: 'Hooked Horns Light Stick Gen.1', type: 'Official Light Stick', desc: 'Official Gemzen concert light stick — hooked horns silhouette in gold and black. Released June 2023 ahead of the PULSE tour. Official fandom tool across all PULSE 2023 and 2024 tour venues.' },
      ],
    },
    {
      era: 'PULSE',
      year: '2023',
      color: '#5a7c6a',
      items: [
        { name: 'PULSE Album Merch Set', type: 'Album Package', desc: 'Deluxe photobook (120p) · poster · photo card set (12 cards) · lyric booklet · behind-the-scenes mini film booklet.' },
        { name: 'PULSE Tour Merch', type: 'Concert Goods', desc: 'Tour hoodie · tote bag · tour poster (foil edition) · photo set (concert exclusive) · wristband. Available at all PULSE 2023 and PULSE 2024 World Tour venues.' },
        { name: 'GONUNMA Studio Series Vol.1', type: 'Fan Shop Drop', desc: 'Exclusive JH Company fan shop drop — studio photography set, notebook, keychain. Limited to 3,000 units. Sold out in 90 minutes.' },
      ],
    },
    {
      era: 'ARE U STILL',
      year: '2024',
      color: '#5a7aaa',
      items: [
        { name: 'ARE U STILL Album Package', type: 'Album Package', desc: 'Photobook (140p, two cover versions) · poster · photo card set · concept film booklet · lyric insert. Grammy nominee edition re-pressed after Grammy wins with gold "Grammy Winner" stamp.' },
        { name: 'TEARS Concept Merch', type: 'Special Drop', desc: 'Capsule merch tied to the TEARS ON A PRETTY FACE MV aesthetic — oversized tee, enamel pin set (dance crew motif), postcard set. Sold via JH Company online store.' },
      ],
    },
    {
      era: "CAN\'T LEAVE ALONE",
      year: '2025',
      color: '#c06080',
      items: [
        { name: "CAN\'T LEAVE ALONE Dual Package", type: 'Album Package', desc: 'Two separate physical editions (SOUR ver. / HONEY ver.) each with distinct photography, color palette, and packaging material. Designed to be displayed together — the spines form a single continuous image.' },
        { name: "CAN\'T LEAVE ALONE Season's Greetings 2025", type: 'Annual Goods', desc: "Calendar (desk + wall) · planner · photo card advent set (24 cards) · year-end letter from James. JH Company's first Season's Greetings release." },
      ],
    },
    {
      era: 'DECADE',
      year: '2026',
      color: '#6e5a7c',
      items: [
        { name: 'DECADE Anthology Box', type: "Collector's Edition", desc: '10th anniversary luxury box — 200p photobook spanning 2016–2026, vinyl record (4 new tracks), archival poster prints (10 era prints), hand-numbered certificate. Limited to 10,000 units.' },
        { name: 'DECADE Tour Goods', type: 'Concert Goods', desc: 'Anniversary tour hoodie · cap · photo booklet (tour-exclusive photography) · Hooked Horns Gen.2 light stick (upgraded LED, wireless sync).' },
      ],
    },
  ],
  demographics: [
    { region: 'North America', share: '24%', note: 'Largest regional base — Grammy-era R&B crossover and RESONANCE franchise drove mass adoption; strong in US, Canada' },
    { region: 'Korea', share: '18%', note: 'Core domestic base — heaviest chart voting activity and fan cafe participation' },
    { region: 'Thailand', share: '17%', note: "Largest single-country fandom — driven by James's Thai heritage and LINE community activity" },
    { region: 'Southeast Asia (ex-TH)', share: '13%', note: 'Philippines, Indonesia, Vietnam, Malaysia — K-pop crossover audience' },
    { region: 'Europe', share: '11%', note: 'UK-led; grew through PULSE and CAN\'T LEAVE ALONE arena tours and Harry Styles-adjacent press coverage' },
    { region: 'China & Taiwan', share: '9%', note: 'Weibo-based, strong streaming support culture' },
    { region: 'Japan', share: '4%', note: 'Older demographic, physical-focused' },
    { region: 'Rest of World', share: '4%', note: 'Latin America, Middle East, Oceania' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'คอมมูนิตี้',
    title: 'Gemzen — แฟนด้อมทางการ',
    introHtml:
      '<strong style="color:var(--text)">Gemzen</strong> (젬즌) คือชื่อแฟนด้อมทางการของ James Hwang (GONUNMA) ตั้งขึ้นอย่างเป็นทางการวันที่ 30 เมษายน 2023 วันเดียวกับที่ JH Company ก่อตั้ง ซึ่งเป็นจุดเริ่มต้นของเขาในฐานะศิลปินอิสระเต็มตัว ชื่อเรียกสั้นๆ แบบไม่เป็นทางการคือ <strong style="color:var(--text)">Gemz</strong> และแฟนบางกลุ่มยังใช้ <strong style="color:var(--text)">Chamois (ชามัวร์)</strong> เป็นชื่อเล่นประจำภูมิภาค ก่อนหน้านั้น คนที่ตามผลงานเดี่ยวของเขาในนาม GONUNMA รวมตัวกันแบบไม่มีโครงสร้างชัดเจน',
    colorsLabel: 'สีประจำแฟนด้อม',
    goldAshName: 'Gold Ash',
    onyxName: 'Onyx',
    profileLabel: 'ข้อมูลแฟนด้อม',
    chantHeading: 'แฟนแชนต์ — HOW DOES IT FEEL?',
    chantIntro: 'รูปแบบแชนต์มาตรฐานที่ใช้ในการแสดงสด แต่ละจุดคือจังหวะที่แฟนตอบรับ',
    chantNoteHtml:
      'หมายเหตุ: รูปแบบแชนต์ต่างกันไปตามเพลงและช่วงของคอนเสิร์ต ช่วงที่แฟนเลือกฟังเงียบๆ ไม่แชนต์เลย มักเกิดตอนร้องเพลงบัลลาดหรือเพลงลึกๆ ในอัลบั้ม ซึ่งเป็นเอกลักษณ์ของ Gemzen ที่มีคนบันทึกไว้ ดู <a href="%L%cultural-impact" style="color:var(--gold)">อิทธิพลเชิงวัฒนธรรม §2.6</a>',
    platformsHeading: 'ช่องทางของคอมมูนิตี้',
    projectsHeading: 'โปรเจกต์แฟนคลับครั้งสำคัญ',
    milestonesHeading: 'หมุดหมายของคอมมูนิตี้',
    milestonesIntro: 'บันทึกความเคลื่อนไหวระดับแฟนด้อม ทั้งการติดเทรนด์ ยอดวิว MV การเหมาป้ายบิลบอร์ด และสถิติสตรีมมิง',
    merchHeading: 'สินค้าทางการ',
    overviewLabel: 'ภาพรวมแฟนด้อม',
    overviewSubtitle: 'การกระจายตามภูมิภาค · ขนาดแต่ละช่องทาง',
    geoSplitLabel: 'สัดส่วนตามภูมิภาค',
    platSizesLabel: 'ขนาดแต่ละช่องทาง',
    geoDistHeading: 'การกระจายตามภูมิภาค',
  },
  basics: [
    { label: 'ชื่อแฟนด้อม', val: 'Gemzen' },
    { label: 'ชื่อแฟน (เอกพจน์ / พหูพจน์)', val: 'Gemzen · Gemz (ไม่เป็นทางการ)' },
    { label: 'สีประจำ', val: 'Gold Ash + Onyx' },
    { label: 'รหัสสี', val: '#C9A84C · #1A1A1A' },
    { label: 'ไลท์สติ๊กทางการ', val: 'The Hooked Horns (รุ่นที่ 1 — เปิดตัว มิถุนายน 2023)' },
    { label: 'แฟนคาเฟ่', val: 'Gemzen Official (Daum · เปิด เมษายน 2023)' },
    { label: 'ก่อตั้ง', val: '30 เมษายน 2023 — ตั้งขึ้นพร้อมกับ JH Company' },
    { label: 'สหภาพแฟน', val: 'Global Gemzen Union (GGU) — สภานานาชาติแบบไม่เป็นทางการ ตั้งเมื่อ มิถุนายน 2023' },
  ],
  platforms: [
    { name: 'Daum Fan Cafe', region: 'เกาหลี', focus: 'ศูนย์กลางทางการ ปล่อยคอนเทนต์รอบแรก และของพิเศษเฉพาะแฟนที่ยืนยันตัวตนแล้ว', size: 'สมาชิก 420,000+' },
    { name: 'Twitter / X @Gemzenuniverse', region: 'ทั่วโลก', focus: 'อัปเดตสด นัดกันโหวต และทำแคมเปญดันเทรนด์', size: 'ผู้ติดตาม 1.2 ล้าน+' },
    { name: 'Instagram @gonunma_gemzen', region: 'ทั่วโลก', focus: 'เก็บคลังภาพ รวมแฟนอาร์ตเด่นๆ และตามเก็บงานอีเวนต์', size: 'ผู้ติดตาม 890,000+' },
    { name: 'Weibo GONUNMA超话', region: 'จีน', focus: 'ดันยอดสตรีม โหวตชาร์ต และเป็นบ้านของแฟนจีนแผ่นดินใหญ่', size: 'ผู้ติดตาม 560,000+' },
    { name: 'LINE Gemzen TH Official', region: 'ไทย', focus: 'แฟนด้อมนอกเกาหลีที่ใหญ่ที่สุดของเขา สมาชิก 380,000+ และทำโปรเจกต์การกุศลกันเอง', size: 'สมาชิก 380,000+' },
    { name: 'Reddit r/GONUNMAofficial', region: 'นานาชาติ', focus: 'วิเคราะห์เจาะลึก ทีมแปล และช่วยกันเขียนวิกิ', size: 'สมาชิก 95,000+' },
  ],
  chant: [
    { cue: '"Cause if you came here to party"', who: 'James', text: 'Cause if you came here to party' },
    { cue: '(หลังท่อนนี้)', who: 'Fans', text: 'JAMES HWANG!' },
    { cue: 'ท้ายท่อนคอรัส', who: 'Fans', text: 'GEMZEN! (echo)' },
  ],
  projects: [
    {
      name: 'แคมเปญดันยอดสตรีมตอนปล่อย PULSE',
      year: '2023',
      desc: 'แคมเปญสตรีมที่นัดกันทำครั้งแรกของ Gemzen ในฐานะแฟนด้อมทางการ Global Gemzen Union ที่เพิ่งตั้งเป็นคนจัด ครอบคลุม 18 เขตเวลา สำหรับการปล่อย PULSE วันที่ 21 กรกฎาคม 2023 ทำได้ 18 ล้านสตรีมใน 24 ชั่วโมงแรก และดัน PULSE ขึ้นอันดับ 1 Circle Album Chart ในสัปดาห์แรก',
      result: 'อันดับ 1 Circle Album Chart · สัปดาห์แรก',
    },
    {
      name: 'Gemzen ไทยช่วยผู้ประสบภัยน้ำท่วม',
      year: '2023',
      desc: 'Gemzen ชาวไทยระดมทุน 4.2 ล้านบาท (ราว 120,000 ดอลลาร์) ช่วยผู้ประสบอุทกภัยปี 2023 ที่เชียงราย ในชื่อของ James และเขาก็โพสต์ขอบคุณเองใน Weverse เป็นครั้งแรกที่เขาพูดถึงงานการกุศลของแฟนในชื่อ Gemzen อย่างเปิดเผย',
      result: 'James ขอบคุณเองผ่าน Weverse',
    },
    {
      name: 'แคมเปญดัน ARE U STILL เข้า Grammy',
      year: '2024',
      desc: 'นัดกันดันยอดสตรีม ส่งเพลงเข้าเพลย์ลิสต์ และติดต่อสื่อ เพื่อให้กรรมการ Grammy เห็น ARE U STILL ให้มากที่สุด อาสาสมัคร 160 คนจาก 24 ประเทศ ทำต่อเนื่องแปดเดือน',
      result: 'เข้าชิง Grammy สาขา Best Progressive R&B Album',
    },
    {
      name: 'หนังสือแฟนฉลองครบ 10 ปี DECADE',
      year: '2026',
      desc: 'หนังสือรวมเรื่อง 420 หน้าที่แฟนช่วยกันทำ ครอบคลุมสิบปีในอาชีพของ James Hwang มีแฟน 1,200 คนจาก 34 ประเทศร่วมเขียนใน 8 ภาษา พิมพ์เป็นเล่มจริงจำนวนจำกัด 5,000 เล่ม ขายผ่านการสั่งจองล่วงหน้า',
      result: '5,000 เล่มหมดใน 6 ชั่วโมง',
    },
  ],
  milestones: [
    { date: 'มิ.ย. 2023', title: 'ติดเทรนด์อันดับ 1 โลกครั้งแรก', desc: 'การปล่อย PULSE ดัน #JamesHwang ขึ้นเทรนด์อันดับ 1 ของโลกบน X เป็นครั้งแรก มีทวีต 1.4 ล้านครั้งใน 24 ชั่วโมง', metric: 'อันดับ 1 โลก · 1.4 ล้านทวีต' },
    { date: 'ส.ค. 2023', title: 'HOW DOES IT FEEL? แตะ 100 ล้านวิว', desc: 'MV แรกที่แตะ 100 ล้านวิวในฐานะศิลปินอิสระ หลังตั้ง JH Company', metric: '100 ล้านวิว' },
    { date: 'มี.ค. 2024', title: 'เหมาป้ายบิลบอร์ดฉลอง TEARS ON A PRETTY FACE', desc: 'Gemzen ระดมทุนซื้อป้ายบิลบอร์ด 14 เมืองใน 6 ประเทศ ฉลอง MV ออก รวมถึงไทม์สแควร์และสยามใจกลางกรุงเทพฯ', metric: '14 เมือง · 6 ประเทศ' },
    { date: 'ก.พ. 2025', title: 'ยอดสตรีมพุ่งคืนประกาศ Grammy', desc: 'คืนประกาศรางวัล ARE U STILL พุ่งขึ้น Spotify Global Daily Top 10 และยอดสตรีมทั้งคลังเพิ่มขึ้น 340% ในวันเดียว', metric: 'ทั้งคลัง +340%' },
    { date: 'ก.ค. 2025', title: 'MV แตะ 100 ล้านวิวครบสามเพลง', desc: "CAN\'T LEAVE ALONE (feat. Pharrell) เป็น MV ตัวที่สามที่แตะ 100 ล้านวิว ยืนยันว่าเขามีฐานคนดู MV ระดับโลกแล้ว", metric: 'MV 100 ล้านวิว 3 ตัว' },
    { date: 'ม.ค. 2026', title: 'สถิติโปรเจกต์แฟนฉลองครบสิบปี', desc: 'หนังสือแฟน 5,000 เล่มหมดใน 6 ชั่วโมง พร้อมการนัดสตรีมต่อเนื่องกัน 34 ประเทศเพื่อฉลองครบสิบปี', metric: '34 ประเทศ' },
  ],
  merch: [
    {
      era: 'SOFTEST TOUCH · PULSE (Launch)',
      year: '2023',
      color: '#9b7fc8',
      items: [
        { name: 'GONUNMA Debut Fan Kit', type: 'แพ็กเกจเปิดตัว', desc: 'สินค้าทางการชุดแรกที่ออกภายใต้ JH Company — วางจำหน่ายเมษายน 2023 พร้อมการเปิดร้านบน Weverse โฟโต้บุ๊ก (80p) · ชุดมินิโปสเตอร์ · ชุดโฟโต้การ์ด · สติกเกอร์แพ็ก · การ์ดเนื้อเพลง' },
        { name: 'Hooked Horns Light Stick Gen.1', type: 'ไลท์สติ๊กทางการ', desc: 'ไลท์สติ๊กคอนเสิร์ตทางการของ Gemzen — ทรงเงาเขาโค้งสีทองและดำ วางจำหน่ายมิถุนายน 2023 ก่อนทัวร์ PULSE เครื่องมือแฟนด้อมทางการที่ใช้ในทุกโชว์ทัวร์ PULSE 2023 และ 2024' },
      ],
    },
    {
      era: 'PULSE',
      year: '2023',
      color: '#5a7c6a',
      items: [
        { name: 'PULSE Album Merch Set', type: 'แพ็กเกจอัลบั้ม', desc: 'โฟโต้บุ๊กดีลักซ์ (120p) · โปสเตอร์ · ชุดโฟโต้การ์ด (12 ใบ) · เล่มเนื้อเพลง · มินิบุ๊กภาพเบื้องหลัง' },
        { name: 'PULSE Tour Merch', type: 'สินค้าคอนเสิร์ต', desc: 'ฮู้ดดี้ทัวร์ · กระเป๋าผ้า · โปสเตอร์ทัวร์ (รุ่นปั๊มฟอยล์) · ชุดภาพถ่าย (ขายเฉพาะในคอนเสิร์ต) · ริสแบนด์ วางจำหน่ายในทุกโชว์ PULSE 2023 และ PULSE 2024 World Tour' },
        { name: 'GONUNMA Studio Series Vol.1', type: 'สินค้า Fan Shop', desc: 'สินค้าที่ขายเฉพาะในร้านแฟนชอปของ JH Company — ชุดภาพถ่ายสตูดิโอ สมุดโน้ต พวงกุญแจ จำกัด 3,000 ชิ้น ขายหมดใน 90 นาที' },
      ],
    },
    {
      era: 'ARE U STILL',
      year: '2024',
      color: '#5a7aaa',
      items: [
        { name: 'ARE U STILL Album Package', type: 'แพ็กเกจอัลบั้ม', desc: 'โฟโต้บุ๊ก (140p, สองปกให้เลือก) · โปสเตอร์ · ชุดโฟโต้การ์ด · เล่มภาพจาก concept film · แผ่นสอดเนื้อเพลง รุ่นผู้เข้าชิง Grammy ถูกพิมพ์ซ้ำหลังคว้ารางวัล พร้อมตราปั๊มทอง "Grammy Winner"' },
        { name: 'TEARS Concept Merch', type: 'สินค้า Special Drop', desc: 'คอลเลกชันเล็กที่อิงภาพลักษณ์ของ MV TEARS ON A PRETTY FACE — เสื้อยืดโอเวอร์ไซส์ ชุดเข็มกลัดอีนาเมล (ลายทีมแดนเซอร์) ชุดโปสการ์ด ขายผ่านร้านออนไลน์ของ JH Company' },
      ],
    },
    {
      era: "CAN\'T LEAVE ALONE",
      year: '2025',
      color: '#c06080',
      items: [
        { name: "CAN\'T LEAVE ALONE Dual Package", type: 'แพ็กเกจอัลบั้ม', desc: 'สองอัลบั้มจริงแยกกัน (SOUR ver. / HONEY ver.) แต่ละเวอร์ชันมีภาพถ่าย โทนสี และวัสดุแพ็กเกจต่างกัน ออกแบบให้วางคู่กัน — สันหนังสือประกอบกันเป็นภาพเดียวต่อเนื่อง' },
        { name: "CAN\'T LEAVE ALONE Season's Greetings 2025", type: 'สินค้าประจำปี', desc: 'ปฏิทิน (ตั้งโต๊ะ + แขวนผนัง) · แพลนเนอร์ · ชุดโฟโต้การ์ดนับถอยหลัง 24 ใบ · จดหมายท้ายปีจาก James Season\'s Greetings ชุดแรกของ JH Company' },
      ],
    },
    {
      era: 'DECADE',
      year: '2026',
      color: '#6e5a7c',
      items: [
        { name: 'DECADE Anthology Box', type: 'ชุดสะสม', desc: 'กล่องลักชัวรี่ครบรอบ 10 ปี — โฟโต้บุ๊ก 200 หน้าครอบคลุมปี 2016–2026, แผ่นเสียงไวนิล (4 เพลงใหม่), โปสเตอร์อาร์ไคฟ์ (10 ยุค), ใบรับรองเลขกำกับมือ จำกัด 10,000 ชิ้น' },
        { name: 'DECADE Tour Goods', type: 'สินค้าคอนเสิร์ต', desc: 'ฮู้ดดี้ทัวร์ครบรอบ · หมวก · เล่มภาพถ่าย (ขายเฉพาะในทัวร์) · ไลท์สติ๊ก Hooked Horns Gen.2 (อัปเกรดไฟ LED และซิงก์ไร้สาย)' },
      ],
    },
  ],
  demographics: [
    { region: 'อเมริกาเหนือ', share: '24%', note: 'ฐานภูมิภาคใหญ่ที่สุด — การข้ามไปตลาด R&B ในยุค Grammy และแฟรนไชส์ RESONANCE ผลักดันการรับรู้ในวงกว้าง แข็งแกร่งใน US, Canada' },
    { region: 'เกาหลี', share: '18%', note: 'ฐานในประเทศหลัก — มีกิจกรรมโหวตชาร์ตและการมีส่วนร่วมในแฟนคาเฟ่หนักที่สุด' },
    { region: 'ไทย', share: '17%', note: 'แฟนด้อมประเทศเดียวที่ใหญ่ที่สุด — ขับเคลื่อนโดยเชื้อสายไทยของ James และกิจกรรมคอมมูนิตี้ LINE' },
    { region: 'เอเชียตะวันออกเฉียงใต้ (ไม่รวมไทย)', share: '13%', note: 'ฟิลิปปินส์, อินโดนีเซีย, เวียดนาม, มาเลเซีย — กลุ่มคนดูที่ข้ามมาจาก K-pop' },
    { region: 'ยุโรป', share: '11%', note: 'นำโดย UK; เติบโตผ่านทัวร์อารีนาของ PULSE และ CAN\'T LEAVE ALONE และข่าวสารที่ใกล้เคียงกับ Harry Styles' },
    { region: 'จีนและไต้หวัน', share: '9%', note: 'ฐานหลักบน Weibo วัฒนธรรมซัพพอร์ตสตรีมมิงเข้มแข็ง' },
    { region: 'ญี่ปุ่น', share: '4%', note: 'กลุ่มอายุมากกว่า เน้นซื้อของเป็นชิ้นจริง' },
    { region: 'ส่วนที่เหลือของโลก', share: '4%', note: 'ละตินอเมริกา, ตะวันออกกลาง, โอเชียเนีย' },
  ],
};

export const fandom = { en, th };
export function getFandom(lang: Lang) {
  return fandom[lang];
}
