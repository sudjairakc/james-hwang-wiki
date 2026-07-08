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
    chantHeading: 'Fan Chant — HOW DOES IT FEEL',
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
    { date: 'Aug 2023', title: 'HOW DOES IT FEEL — 100M club', desc: 'The MV hit 100M views — the first song to do so as an independent artist after founding JH Company.', metric: '100M views' },
    { date: 'Mar 2024', title: 'TEARS ON A PRETTY FACE billboard takeover', desc: 'Gemzen crowdfunded billboards across 14 cities in 6 countries to celebrate the MV release — including Times Square and Siam in central Bangkok.', metric: '14 cities · 6 countries' },
    { date: 'Feb 2025', title: 'Grammy night stream surge', desc: 'On Grammy night, ARE U STILL surged onto the Spotify Global Daily Top 10 — catalog streams up +340% within a single day.', metric: '+340% catalog' },
    { date: 'Jul 2025', title: 'Three 100M-view MVs', desc: "CAN'T LEAVE ALONE (feat. Pharrell) became the third MV to hit 100M — confirming a solid global MV audience base.", metric: '3× 100M MV' },
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
      era: 'SOUR|HONEY',
      year: '2025',
      color: '#c06080',
      items: [
        { name: 'SOUR|HONEY Dual Package', type: 'Album Package', desc: 'Two separate physical editions (SOUR ver. / HONEY ver.) each with distinct photography, color palette, and packaging material. Designed to be displayed together — the spines form a single continuous image.' },
        { name: "SOUR|HONEY Season's Greetings 2025", type: 'Annual Goods', desc: "Calendar (desk + wall) · planner · photo card advent set (24 cards) · year-end letter from James. JH Company's first Season's Greetings release." },
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
    { region: 'Europe', share: '11%', note: 'UK-led; grew through PULSE and SOUR|HONEY arena tours and Harry Styles-adjacent press coverage' },
    { region: 'China & Taiwan', share: '9%', note: 'Weibo-based, strong streaming support culture' },
    { region: 'Japan', share: '4%', note: 'Older demographic, physical-focused' },
    { region: 'Rest of World', share: '4%', note: 'Latin America, Middle East, Oceania' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'Community',
    title: 'Gemzen — Official Fandom',
    introHtml:
      '<strong style="color:var(--text)">Gemzen</strong> (젬즌) คือชื่อแฟนด้อมอย่างเป็นทางการของ James Hwang (GONUNMA) ก่อตั้งอย่างเป็นทางการเมื่อ April 30, 2023 — วันเดียวกับที่ JH Company ก่อตั้งขึ้น — จุดเริ่มต้นอาชีพของ James ในฐานะศิลปินอิสระเต็มตัว ชื่อย่ออย่างไม่เป็นทางการ: <strong style="color:var(--text)">Gemz</strong> แฟนด้อมยังใช้ <strong style="color:var(--text)">Chamois (ชามัวร์)</strong> เป็นชื่อเล่นประจำภูมิภาคด้วย ก่อนเป็นอิสระ แฟนที่ติดตามผลงานเดี่ยวของ James ในนาม GONUNMA รวมตัวกันแบบไม่เป็นทางการ ไม่มีโครงสร้างแฟนด้อมชัดเจน',
    colorsLabel: 'Official Colors',
    goldAshName: 'Gold Ash',
    onyxName: 'Onyx',
    profileLabel: 'Fandom Profile',
    chantHeading: 'Fan Chant — HOW DOES IT FEEL',
    chantIntro: 'รูปแบบแชนต์มาตรฐานที่ใช้ระหว่างการแสดงสด แต่ละ cue คือจุดที่แฟนตอบรับ',
    chantNoteHtml:
      'หมายเหตุ: รูปแบบแชนต์แตกต่างกันไปตามเพลงและช่วงคอนเสิร์ต ช่วง silent-listening (ไม่มีแชนต์) พบได้ระหว่างการแสดงเพลงบัลลาดและ deep-cut — เป็น cultural marker ของ Gemzen ที่มีการบันทึกไว้ ดู <a href="%L%cultural-impact" style="color:var(--gold)">อิทธิพลเชิงวัฒนธรรม §2.6</a>',
    platformsHeading: 'Community Platforms',
    projectsHeading: 'Major Fan Projects',
    milestonesHeading: 'Community Milestones',
    milestonesIntro: 'บันทึกความเคลื่อนไหวระดับ fandom — trending, MV clubs, billboard takeovers, streaming records.',
    merchHeading: 'Official Merchandise',
    overviewLabel: 'Fandom Overview',
    overviewSubtitle: 'การกระจายตามภูมิภาค · ขนาด Platform',
    geoSplitLabel: 'Geographic Split',
    platSizesLabel: 'Platform Sizes',
    geoDistHeading: 'Geographic Distribution',
  },
  basics: [
    { label: 'ชื่อแฟนด้อม', val: 'Gemzen' },
    { label: 'ชื่อแฟน (เอกพจน์ / พหูพจน์)', val: 'Gemzen · Gemz (ไม่เป็นทางการ)' },
    { label: 'สีประจำ', val: 'Gold Ash + Onyx' },
    { label: 'รหัสสี', val: '#C9A84C · #1A1A1A' },
    { label: 'ไลท์สติ๊กทางการ', val: 'The Hooked Horns (gen.1 — เปิดตัว June 2023)' },
    { label: 'แฟนคาเฟ่', val: 'Gemzen Official (Daum · เปิดตัว April 2023)' },
    { label: 'ก่อตั้ง', val: 'April 30, 2023 — ก่อตั้งอย่างเป็นทางการพร้อมการก่อตั้ง JH Company' },
    { label: 'สหภาพแฟน', val: 'Global Gemzen Union (GGU) — สภานานาชาติแบบไม่เป็นทางการ ก่อตั้ง June 2023' },
  ],
  platforms: [
    { name: 'Daum Fan Cafe', region: 'เกาหลี', focus: 'ฮับทางการ, ปล่อยคอนเทนต์รอบแรก, exclusive ที่ fan-certified', size: '420K+ members' },
    { name: 'Twitter / X @Gemzenuniverse', region: 'ทั่วโลก', focus: 'อัปเดตเรียลไทม์, ประสานงานโหวต, แคมเปญ trend', size: '1.2M+ followers' },
    { name: 'Instagram @gonunma_gemzen', region: 'ทั่วโลก', focus: 'อาร์ไคฟ์ภาพ, ไฮไลต์ fan art, คัฟเวอร์อีเวนต์', size: '890K+ followers' },
    { name: 'Weibo GONUNMA超话', region: 'จีน', focus: 'ซัพพอร์ตสตรีมมิง, โหวตชาร์ต, คอมมูนิตี้จีนแผ่นดินใหญ่', size: '560K+ followers' },
    { name: 'LINE Gemzen TH Official', region: 'ไทย', focus: 'แฟนด้อมต่างประเทศที่ใหญ่ที่สุดของ James — 380K+ members, ดำเนินโปรเจกต์การกุศลอิสระเอง', size: '380K+ members' },
    { name: 'Reddit r/GONUNMAofficial', region: 'นานาชาติ', focus: 'วิเคราะห์เชิงลึก, ทีมแปล, ร่วมเขียน wiki', size: '95K+ members' },
  ],
  chant: [
    { cue: '"Cause if you came here to party"', who: 'James', text: 'Cause if you came here to party' },
    { cue: '(หลังท่อนนี้)', who: 'Fans', text: 'JAMES HWANG!' },
    { cue: 'ท้ายท่อนคอรัส', who: 'Fans', text: 'GEMZEN! (echo)' },
  ],
  projects: [
    {
      name: 'PULSE Launch Streaming Campaign',
      year: '2023',
      desc: 'แคมเปญสตรีมมิงที่ประสานงานกันครั้งแรกของ Gemzen ในฐานะแฟนด้อมทางการ — จัดโดย Global Gemzen Union ที่เพิ่งก่อตั้งใหม่ ครอบคลุม 18 time zone สำหรับการปล่อยอัลบั้ม PULSE วันที่ July 21, 2023 ทำได้ 18M streams ใน 24 ชั่วโมงแรก ดัน PULSE ขึ้น Circle Album Chart #1 ในสัปดาห์แรก',
      result: 'Circle Album Chart #1 · สัปดาห์แรก',
    },
    {
      name: 'Gemzen Thailand Flood Relief',
      year: '2023',
      desc: 'Gemzen ชาวไทยระดมทุน ฿4.2M (ประมาณ $120K USD) ให้ผู้ประสบอุทกภัยปี 2023 ที่เชียงราย ในนามของ James James รับรู้โปรเจกต์นี้เป็นการส่วนตัวผ่านโพสต์ Weverse — เป็นครั้งแรกที่เขายอมรับความพยายามด้านการกุศลของแฟนคลับภายใต้ชื่อ Gemzen อย่างเปิดเผย',
      result: 'James รับรู้เป็นการส่วนตัวผ่าน Weverse',
    },
    {
      name: 'ARE U STILL Grammy Campaign',
      year: '2024',
      desc: 'แคมเปญสตรีมมิงที่ประสานงานกัน, การส่ง playlist, และการเข้าถึงสื่อ เป้าหมายคือสร้าง exposure ต่อคณะกรรมการ Grammy ให้ ARE U STILL ทีมอาสาสมัคร 160 คนจาก 24 ประเทศ ดำเนินการนาน 8 เดือน',
      result: 'เข้าชิง Grammy (Best Progressive R&B Album)',
    },
    {
      name: 'DECADE 10th Anniversary Fan Book',
      year: '2026',
      desc: 'แอนโธโลจี 420 หน้าที่รวบรวมโดยแฟนคลับ ครอบคลุม 10 ปีอาชีพของ James Hwang — แฟน 1,200 คนร่วมเขียนจาก 34 ประเทศ 8 ภาษา ผลิต physical edition จำนวนจำกัด 5,000 เล่ม จำหน่ายผ่าน fan pre-order',
      result: '5,000 เล่ม sold out ใน 6 ชั่วโมง',
    },
  ],
  milestones: [
    { date: 'Jun 2023', title: 'First global trend #1', desc: 'PULSE release ดัน #JamesHwang ขึ้น worldwide trending #1 บน X ครั้งแรก — 1.4M tweets ใน 24 ชม.', metric: '#1 WW · 1.4M tweets' },
    { date: 'Aug 2023', title: 'HOW DOES IT FEEL — 100M club', desc: 'MV แตะ 100M views เป็นเพลงแรกในฐานะ independent artist หลังตั้ง JH Company', metric: '100M views' },
    { date: 'Mar 2024', title: 'TEARS ON A PRETTY FACE billboard takeover', desc: 'Gemzen ระดมทุนซื้อ billboard 14 เมือง 6 ประเทศ ฉลอง MV release — รวมถึง Times Square และ Siam ใจกลางกรุงเทพ', metric: '14 cities · 6 countries' },
    { date: 'Feb 2025', title: 'Grammy night stream surge', desc: 'คืนประกาศ Grammy ARE U STILL พุ่งขึ้น Spotify Global Daily Top 10 — catalog streams +340% ภายในวันเดียว', metric: '+340% catalog' },
    { date: 'Jul 2025', title: 'Three 100M-view MVs', desc: "CAN'T LEAVE ALONE (feat. Pharrell) เป็น MV ตัวที่สามที่แตะ 100M — confirm ฐาน global MV audience", metric: '3× 100M MV' },
    { date: 'Jan 2026', title: 'DECADE anniversary fan project record', desc: 'Fan book 5,000 เล่ม sold out ใน 6 ชม. + global streaming relay 34 ประเทศ ฉลอง 10 ปี', metric: '34 countries' },
  ],
  merch: [
    {
      era: 'SOFTEST TOUCH · PULSE (Launch)',
      year: '2023',
      color: '#9b7fc8',
      items: [
        { name: 'GONUNMA Debut Fan Kit', type: 'แพ็กเกจเปิดตัว', desc: 'สินค้าทางการชุดแรกที่ออกภายใต้ JH Company — วางจำหน่าย April 2023 พร้อมการเปิดตัว Weverse store โฟโต้บุ๊ก (80p) · ชุดมินิโปสเตอร์ · ชุดโฟโต้การ์ด · สติกเกอร์แพ็ก · การ์ดเนื้อเพลง' },
        { name: 'Hooked Horns Light Stick Gen.1', type: 'ไลท์สติ๊กทางการ', desc: 'ไลท์สติ๊กคอนเสิร์ตทางการของ Gemzen — ทรงเงาเขาโค้งสีทองและดำ วางจำหน่าย June 2023 ก่อนทัวร์ PULSE เครื่องมือแฟนด้อมทางการที่ใช้ในทุกโชว์ทัวร์ PULSE 2023 และ 2024' },
      ],
    },
    {
      era: 'PULSE',
      year: '2023',
      color: '#5a7c6a',
      items: [
        { name: 'PULSE Album Merch Set', type: 'แพ็กเกจอัลบั้ม', desc: 'โฟโต้บุ๊กดีลักซ์ (120p) · โปสเตอร์ · ชุดโฟโต้การ์ด (12 ใบ) · เล่มเนื้อเพลง · มินิบุ๊ก behind-the-scenes' },
        { name: 'PULSE Tour Merch', type: 'สินค้าคอนเสิร์ต', desc: 'ฮู้ดดี้ทัวร์ · กระเป๋าผ้า · โปสเตอร์ทัวร์ (foil edition) · ชุดภาพถ่าย (concert exclusive) · ริสแบนด์ วางจำหน่ายในทุกโชว์ PULSE 2023 และ PULSE 2024 World Tour' },
        { name: 'GONUNMA Studio Series Vol.1', type: 'สินค้า Fan Shop', desc: 'สินค้า exclusive จาก JH Company fan shop — ชุดภาพถ่ายสตูดิโอ สมุดโน้ต พวงกุญแจ จำกัด 3,000 ชิ้น sold out ใน 90 นาที' },
      ],
    },
    {
      era: 'ARE U STILL',
      year: '2024',
      color: '#5a7aaa',
      items: [
        { name: 'ARE U STILL Album Package', type: 'แพ็กเกจอัลบั้ม', desc: 'โฟโต้บุ๊ก (140p, สองปกให้เลือก) · โปสเตอร์ · ชุดโฟโต้การ์ด · เล่ม concept film · insert เนื้อเพลง Grammy nominee edition ถูก re-press หลังคว้า Grammy พร้อมตราปั๊มทอง "Grammy Winner"' },
        { name: 'TEARS Concept Merch', type: 'สินค้า Special Drop', desc: 'สินค้า capsule ที่เชื่อมกับ aesthetic ของ MV TEARS ON A PRETTY FACE — เสื้อยืดโอเวอร์ไซส์ ชุดเข็มกลัดอีนาเมล (ลาย dance crew) ชุดโปสการ์ด จำหน่ายผ่าน JH Company online store' },
      ],
    },
    {
      era: 'SOUR|HONEY',
      year: '2025',
      color: '#c06080',
      items: [
        { name: 'SOUR|HONEY Dual Package', type: 'แพ็กเกจอัลบั้ม', desc: 'สองอัลบั้มจริงแยกกัน (SOUR ver. / HONEY ver.) แต่ละเวอร์ชันมีภาพถ่าย โทนสี และวัสดุแพ็กเกจต่างกัน ออกแบบให้วางคู่กัน — สันหนังสือประกอบกันเป็นภาพเดียวต่อเนื่อง' },
        { name: "SOUR|HONEY Season's Greetings 2025", type: 'สินค้าประจำปี', desc: 'ปฏิทิน (ตั้งโต๊ะ + แขวนผนัง) · แพลนเนอร์ · ชุดโฟโต้การ์ด advent (24 ใบ) · จดหมายท้ายปีจาก James Season\'s Greetings ชุดแรกของ JH Company' },
      ],
    },
    {
      era: 'DECADE',
      year: '2026',
      color: '#6e5a7c',
      items: [
        { name: 'DECADE Anthology Box', type: 'ชุดสะสม', desc: 'กล่องลักชัวรี่ครบรอบ 10 ปี — โฟโต้บุ๊ก 200 หน้าครอบคลุมปี 2016–2026, แผ่นเสียงไวนิล (4 เพลงใหม่), โปสเตอร์อาร์ไคฟ์ (10 ยุค), ใบรับรองเลขกำกับมือ จำกัด 10,000 ชิ้น' },
        { name: 'DECADE Tour Goods', type: 'สินค้าคอนเสิร์ต', desc: 'ฮู้ดดี้ทัวร์ครบรอบ · หมวก · เล่มภาพถ่าย (tour-exclusive) · ไลท์สติ๊ก Hooked Horns Gen.2 (อัปเกรด LED, wireless sync)' },
      ],
    },
  ],
  demographics: [
    { region: 'อเมริกาเหนือ', share: '24%', note: 'ฐานภูมิภาคใหญ่ที่สุด — R&B crossover ยุค Grammy และแฟรนไชส์ RESONANCE ผลักดันการรับรู้ในวงกว้าง แข็งแกร่งใน US, Canada' },
    { region: 'เกาหลี', share: '18%', note: 'ฐานในประเทศหลัก — มีกิจกรรมโหวตชาร์ตและการมีส่วนร่วมในแฟนคาเฟ่หนักที่สุด' },
    { region: 'ไทย', share: '17%', note: 'แฟนด้อมประเทศเดียวที่ใหญ่ที่สุด — ขับเคลื่อนโดยเชื้อสายไทยของ James และกิจกรรมคอมมูนิตี้ LINE' },
    { region: 'เอเชียตะวันออกเฉียงใต้ (ไม่รวมไทย)', share: '13%', note: 'ฟิลิปปินส์, อินโดนีเซีย, เวียดนาม, มาเลเซีย — กลุ่มผู้ชม K-pop crossover' },
    { region: 'ยุโรป', share: '11%', note: 'นำโดย UK; เติบโตผ่านทัวร์ arena ของ PULSE และ SOUR|HONEY และข่าวสารที่ใกล้เคียงกับ Harry Styles' },
    { region: 'จีนและไต้หวัน', share: '9%', note: 'ฐานหลักบน Weibo วัฒนธรรมซัพพอร์ตสตรีมมิงเข้มแข็ง' },
    { region: 'ญี่ปุ่น', share: '4%', note: 'กลุ่มอายุมากกว่า เน้นสินค้า physical' },
    { region: 'ส่วนที่เหลือของโลก', share: '4%', note: 'ละตินอเมริกา, ตะวันออกกลาง, โอเชียเนีย' },
  ],
};

export const fandom = { en, th };
export function getFandom(lang: Lang) {
  return fandom[lang];
}
