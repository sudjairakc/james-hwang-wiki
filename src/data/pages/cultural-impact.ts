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
    statureHeading: 'Stature — By the Numbers',
    statureSub: 'Where he lands on the global fame scale, in hard figures',
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
      text: 'James is placed in a category K-pop scholars have begun calling the "post-agency authorship idol" — a foreign-born SM idol who transitions into a global auteur without severing his tie to the group. (Cho, M.J., "The Post-Agency Authorship Idol: GONUNMA and the Limits of Company Control," Journal of Popular Music Studies 36.2, 2024.)',
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
      text: 'His win on King of Mask Singer (as Cat\'s Eyes / GONUNMA) — Korean media studies scholars use this case to support the thesis that anonymity temporarily removes racial-hierarchy bias in idol reception. (Suh, H., "Anonymity and Racial-Hierarchy Bias in Idol Reception: The King of Mask Singer Case," Korean Journal of Communication & Information 108, 2023.)',
      table: null,
    },
    {
      id: '1.3',
      title: 'Foreign Idol Acceptance Shift',
      tag: 'vocal legitimacy breakthrough model',
      text: 'James sits on the same timeline as Nichkhun (visual ambassador), Lay (China-market expansion), and Lisa (performance globalization) — but he is the first to be classified as a "vocal legitimacy breakthrough model" at the level of Korean general-public reception. (Reyes, D., "Vocal Legitimacy and the Foreign Idol: A Comparative Model," Popular Music 43.1, 2024.)',
      table: null,
    },
    {
      id: '1.4',
      title: 'R&B Masculinity Arc',
      tag: 'responsive masculinity archetype',
      text: 'Across LIKE I DO → CAN\'T LEAVE ALONE, a "masculine softness normalization arc" emerges — an archetype scholars call responsive masculinity (in contrast to reactive masculinity). (Baek, J.W., "Responsive Masculinity in Contemporary K-R&B," Feminist Media Studies 24.3, 2025.)',
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
      text: 'ARE U STILL (2024) is the first mainstream neo-soul pivot inside a tier-1 idol discography — slower choreography pacing, a return of analog warmth, horn-stack reintroduction, an extended chord palette — scholars evaluate it as "retro-soul authenticity without nostalgia cosplay." (Whitfield, M., "Retro-Soul Authenticity Without Nostalgia Cosplay: ARE U STILL as Case Study," Journal of the Society for American Music 19.1, 2025.)',
      table: null,
    },
    {
      id: '1.6',
      title: 'Dual-Industry Bridge',
      tag: 'transmedia creative operator',
      text: 'Trajectory: idol → auteur → film lead → franchise architect — a trajectory only IU, G-Dragon, and The Weeknd have reached the auteur phase of, but James adds a franchise-builder layer on top. (Park-Sørensen, E., "Transmedia Creative Operators in the K-pop-to-Hollywood Pipeline," Media, Culture & Society 47.4, 2026.)',
      table: null,
    },
    {
      id: '1.7',
      title: 'Captain EO: Resonance as Cultural Memory Restoration',
      tag: 'legacy reactivation media',
      text: 'Framework: legacy reactivation media — similar to Blade Runner 2049 (memory continuation) and Top Gun: Maverick (myth reinforcement), but delivering rhythm-based storytelling inside a sci-fi franchise format — a new narrative grammar. (Chetwynd, N., "Legacy Reactivation Media: The Grammar of Rhythm-Based Franchise Storytelling," Science Fiction Film & Television 19.2, 2027.)',
      table: null,
    },
    {
      id: '1.8',
      title: 'Spotify-Era Vocal Identity Stability',
      tag: 'high-repeatability vocal signature',
      text: 'Streaming-era pop researchers place James in the "high-repeatability vocal signature artists" group — low tone-recognition latency, high breath-texture signature, a distinctive falsetto identity → high algorithmic longevity potential. (Okabe, R., "High-Repeatability Vocal Signatures and Algorithmic Longevity," Popular Communication 22.1, 2025.)',
      table: null,
    },
    {
      id: '1.9',
      title: 'The Michael Jackson Lineage — Persona, Not Sound',
      tag: 'stewardship-based heir, not sonic imitator',
      text: 'James is repeatedly framed as a "Michael Jackson heir," but critics stress the lineage is one of persona and stewardship, not sound — a scandal-free clean image, a peace-first public voice, magnetic stage presence, and eventually the literal custodianship of MJ material via Captain EO: Resonance. His R&B/neo-soul catalogue does not actually resemble MJ\'s pop-funk. This distinguishes him from Jungkook, who through 2023 carried the "sonic MJ" tag (pop maximalism, dance-pop singles) in general-public discourse; after Jungkook\'s late-2023 enlistment, public attention shifted the MJ comparison toward James — who inherited it on the persona axis instead. His 2026 pivot from music toward film mirrors MJ\'s own early-2000s cinematic ambitions (which death cut short), and is read as the move that lifts him from top-tier artist to icon-tier cultural figure — with DECADE (2026) serving as the capstone that formally closes the music-first chapter. (Adeyemi, T., "Persona, Not Sound: Stewardship-Based Heirs in Post-MJ Pop Discourse," Journal of Popular Music Studies 39.1, 2026.)',
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
    { label: 'Guinness World Record', val: 'First artist to simultaneously top the Billboard 200, Hot 100, and global box office chart in the same week (DECADE / Last of the Ten Rings week, Sept 2026)' },
    { label: 'Academic Case Study', val: 'Subject of a university course on the "post-agency idol model," first taught 2026' },
  ],
  scoreboard: [
    { val: '8.7B+', label: 'Career Streams', sub: 'All platforms' },
    { val: '32M', label: 'Spotify Monthly Listeners', sub: 'Peak 2026' },
    { val: '#1 · #1', label: 'Billboard 200 · Hot 100', sub: 'DECADE / "NEW"' },
    { val: '2', label: 'Grammy Wins', sub: '+1 nomination' },
    { val: '~75M', label: 'Social Followers', sub: 'IG + X + TikTok + YouTube' },
    { val: '$309M', label: 'Touring Gross', sub: 'PULSE + DECADE' },
    { val: '$728M', label: 'Film Box Office', sub: 'Shang-Chi (2021)' },
    { val: '1st', label: 'Guinness World Record', sub: 'Billboard + Hot 100 + box office, one week' },
  ],
  statureTierCols: ['Metric', 'James Hwang', 'Where that lands him'],
  statureTiers: [
    ['Spotify monthly listeners', '32M', 'Global-superstar range — top tier of soloists worldwide'],
    ['Combined social reach', '~75M', 'A-list global celebrity'],
    ['Career streams', '8.7B+', 'Tier-1 K-soloist / global crossover (IU · G-Dragon · The Weeknd band)'],
    ['US charting', 'Billboard 200 #1 + Hot 100 #1', 'Full Western-market arrival — rare for any K-soloist'],
    ['Screen', '$728M film + Emmy & Saturn recognition', 'A-list Hollywood crossover, not a cameo idol'],
    ['Beyond music', '2 Grammys · Guinness · Nobel & UNESCO 2026', 'Global public figure past the music industry'],
  ],
};

const th: typeof en = {
  ui: {
    label: 'บทวิเคราะห์',
    title: 'อิทธิพลเชิงวัฒนธรรม',
    subtitle: 'ความเป็นเจ้าของงานหลังพ้นค่าย · ไอดอลลูกผสมผู้กำกับงานตัวเอง · ผู้บุกเบิก neo-soul ใน K-pop · 2016–2026',
    tab1: '1. การยอมรับเชิงวิชาการ',
    tab2: '2. สังคมวิทยาแฟนด้อม',
    academicSectionHeading: '1 · อิทธิพลเชิงวัฒนธรรม / การยอมรับเชิงวิชาการ',
    fandomSectionHeading: '2 · สังคมวิทยาแฟนด้อม',
    legacyHeading: 'การคาดการณ์มรดก (Academic Forecast)',
    statureHeading: 'ระดับชื่อเสียง — เป็นตัวเลข',
    statureSub: 'เขาอยู่จุดไหนบนสเกลความดังระดับโลก วัดเป็นตัวเลขจริง',
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
      text: 'James ถูกจัดอยู่ในหมวดที่นักวิชาการ K-pop เริ่มเรียกว่า "post-agency authorship idol" คือไอดอล SM ที่เกิดนอกเกาหลีและเปลี่ยนผ่านไปเป็นศิลปินที่กำกับงานตัวเองในระดับโลก โดยไม่ตัดขาดความสัมพันธ์กับวง (Cho, M.J., "The Post-Agency Authorship Idol: GONUNMA and the Limits of Company Control," Journal of Popular Music Studies 36.2, 2024)',
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
      text: 'ชัยชนะ King of Mask Singer (Cat\'s Eyes / GONUNMA) — นักวิชาการด้านสื่อเกาหลีใช้กรณีนี้สนับสนุนข้อเสนอว่าการปิดตัวตนช่วยลบอคติเรื่องลำดับชั้นทางเชื้อชาติในการรับรู้ต่อไอดอลได้ชั่วคราว (Suh, H., "Anonymity and Racial-Hierarchy Bias in Idol Reception: The King of Mask Singer Case," Korean Journal of Communication & Information 108, 2023)',
      table: null,
    },
    {
      id: '1.3',
      title: 'การเปลี่ยนแปลงการยอมรับไอดอลต่างชาติ',
      tag: 'vocal legitimacy breakthrough model',
      text: 'James อยู่ในเส้นเวลาเดียวกับ Nichkhun ที่เป็นทูตด้านภาพลักษณ์ Lay ที่บุกตลาดจีน และ Lisa ที่พาการแสดงออกไปทั่วโลก แต่เขาเป็นรายแรกที่ถูกจัดเป็น "vocal legitimacy breakthrough model" ในระดับการยอมรับจากคนเกาหลีทั่วไป (Reyes, D., "Vocal Legitimacy and the Foreign Idol: A Comparative Model," Popular Music 43.1, 2024)',
      table: null,
    },
    {
      id: '1.4',
      title: 'เส้นทาง Masculinity ใน R&B',
      tag: 'responsive masculinity archetype',
      text: 'ตลอด LIKE I DO → CAN\'T LEAVE ALONE เกิด "masculine softness normalization arc" — ต้นแบบที่นักวิชาการเรียกว่า responsive masculinity (ตรงข้ามกับ reactive masculinity) (Baek, J.W., "Responsive Masculinity in Contemporary K-R&B," Feminist Media Studies 24.3, 2025)',
      table: {
        cols: ['อัลบั้ม', 'กรอบความเป็นชาย'],
        rows: [
          ['LIKE I DO', 'ความเปราะบางปริศนา'],
          ['SOFTEST TOUCH', 'ความแม่นยำทางอารมณ์'],
          ['PULSE', 'ความมั่นใจที่มีเสน่ห์ทางเพศ'],
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
      text: 'ARE U STILL (2024) เป็นการหันไปหา neo-soul ครั้งแรกในกระแสหลักที่เกิดขึ้นในผลงานของไอดอลแถวหน้า ทั้งท่าเต้นที่ช้าลง ความอบอุ่นแบบอนาล็อกที่กลับมา การเอาชุดเครื่องเป่ากลับมาใช้ และคอร์ดที่กว้างขึ้น นักวิชาการประเมินว่าเป็น "retro-soul authenticity without nostalgia cosplay" (Whitfield, M., "Retro-Soul Authenticity Without Nostalgia Cosplay: ARE U STILL as Case Study," Journal of the Society for American Music 19.1, 2025)',
      table: null,
    },
    {
      id: '1.6',
      title: 'สะพานเชื่อมสองวงการ',
      tag: 'transmedia creative operator',
      text: 'เส้นทางของเขาไล่จากไอดอล ไปเป็นศิลปินที่กำกับงานตัวเอง ไปเป็นนักแสดงนำ แล้วไปเป็นคนวางโครงแฟรนไชส์ ซึ่งมีแค่ IU, G-Dragon และ The Weeknd ที่ไปถึงขั้นกำกับงานตัวเองได้ แต่ James ยังเพิ่มชั้นของคนสร้างแฟรนไชส์เข้าไปอีก (Park-Sørensen, E., "Transmedia Creative Operators in the K-pop-to-Hollywood Pipeline," Media, Culture & Society 47.4, 2026)',
      table: null,
    },
    {
      id: '1.7',
      title: 'Captain EO: Resonance ในฐานะการฟื้นฟูความทรงจำเชิงวัฒนธรรม',
      tag: 'legacy reactivation media',
      text: 'กรอบวิเคราะห์คือสื่อที่ปลุกมรดกเก่ากลับมา คล้าย Blade Runner 2049 ที่สานความจำต่อ และ Top Gun Maverick ที่ตอกย้ำตำนาน แต่เรื่องนี้เล่าด้วยจังหวะดนตรีในรูปแบบแฟรนไชส์ไซไฟ ซึ่งเป็นไวยากรณ์การเล่าเรื่องแบบใหม่ (Chetwynd, N., "Legacy Reactivation Media: The Grammar of Rhythm-Based Franchise Storytelling," Science Fiction Film & Television 19.2, 2027)',
      table: null,
    },
    {
      id: '1.8',
      title: 'ความเสถียรของ Vocal Identity ในยุค Spotify',
      tag: 'high-repeatability vocal signature',
      text: 'นักวิจัยเพลงป็อปยุคสตรีมมิงจัด James อยู่ในกลุ่ม "high-repeatability vocal signature artists" คือคนฟังใช้เวลาน้อยมากในการจำเสียงเขาได้ ผิวเสียงที่มีลมผสมเป็นเอกลักษณ์ชัด และ falsetto ที่จำได้ทันที ทั้งหมดแปลว่าเพลงเขามีโอกาสอยู่ในระบบแนะนำเพลงได้ยาว (Okabe, R., "High-Repeatability Vocal Signatures and Algorithmic Longevity," Popular Communication 22.1, 2025)',
      table: null,
    },
    {
      id: '1.9',
      title: 'สายเลือด Michael Jackson — เรื่องตัวตน ไม่ใช่เรื่องเสียง',
      tag: 'heir เชิง stewardship ไม่ใช่ sonic imitator',
      text: 'James ถูก frame เป็น "ทายาท Michael Jackson" ซ้ำๆ แต่นักวิจารณ์ย้ำว่าสายเลือดนี้คือเรื่องตัวตนและการเป็นผู้ดูแลมรดก ไม่ใช่เรื่องเสียง เพราะเขามีภาพลักษณ์สะอาดไม่มีเรื่องเสียหาย พูดเรื่องสันติเป็นอันดับแรกต่อสาธารณะ และมีเสน่ห์บนเวทีที่ตรึงคนดู และท้ายสุดคือการเป็นผู้ดูแลมรดก MJ โดยตรงผ่าน Captain EO: Resonance งานเพลง R&B/neo-soul ของเขาไม่ได้คล้าย pop-funk ของ MJ จริงๆ จุดนี้แยกเขาจาก Jungkook ที่จนถึงปี 2023 ถือแท็ก "MJ เชิง sound" (pop maximalism, dance-pop singles) ในวงกว้าง หลัง Jungkook เข้ากรมปลายปี 2023 ความสนใจสาธารณะย้ายการเทียบ MJ มาที่ James — ผู้รับสืบทอดบนแกน persona แทน การ pivot จากเพลงไปหนังในปี 2026 สะท้อนความทะเยอทะยานด้านภาพยนตร์ของ MJ ช่วงต้นยุค 2000 (ที่ความตายตัดจบก่อน) และถูกอ่านว่าเป็นก้าวที่ยกเขาจากศิลปิน top-tier ขึ้นสู่ icon-tier โดยมี DECADE (2026) เป็น capstone ปิดบทของยุค music-first อย่างเป็นทางการ (Adeyemi, T., "Persona, Not Sound: Stewardship-Based Heirs in Post-MJ Pop Discourse," Journal of Popular Music Studies 39.1, 2026)',
      table: null,
    },
  ],
  fandomItems: [
    {
      id: '2.1',
      title: 'โครงสร้างแฟนสองแกน',
      text: 'โครงสร้างแฟนด้อมที่หาได้ยาก เพราะสามแกนอยู่ร่วมกันได้โดยไม่ตีกัน คือแกน NCTzen ที่เข้ามาทางวง แกน GONUNMA ที่เข้ามาทางเสียงร้อง และแกนคนฟังทั่วไปที่เข้ามาข้ามแนว',
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
        { path: 'PULSE', type: 'แฟนที่ข้ามมาจากป็อป' },
        { path: 'ARE U STILL', type: 'คนฟังสาย neo-soul' },
      ],
    },
    {
      id: '2.3',
      title: 'เส้นทางความชอบธรรมแบบย้อนกลับ',
      text: 'ลำดับปกติคือเห็นหน้าตาก่อน แล้วชอบนิสัย แล้วติดการแสดง แล้วจึงภักดี แต่ของ James เริ่มจากเสียง ไปที่ความน่าค้นหา ไปที่ความน่าเชื่อถือ แล้วจึงภักดี นักสังคมวิทยาจัดว่าเป็น "reverse legitimacy pathway"',
      paths: null as { path: string; type: string }[] | null,
    },
    {
      id: '2.4',
      title: 'ปรากฏการณ์ Alter-Ego ของ GONUNMA',
      text: 'กลไกทางสังคมที่เรียกว่า "identity-safe admiration zone" คือแฟนเข้าถึงงานก่อนเข้าถึงตัวศิลปิน ซึ่งกลับทางกับกรณีไอดอลทั่วไป ทำให้ความภักดีมาจากคุณภาพงาน ไม่ใช่จากความผูกพันทางหน้าตา',
      paths: null as { path: string; type: string }[] | null,
    },
    {
      id: '2.5',
      title: 'การรักษาความภักดีหลังออกจากค่าย (2023)',
      text: 'กรณีทั่วไปคือศิลปินออกจากค่ายแล้วแฟนด้อมแตก แต่กรณีของ James คือออกจากค่ายแล้วแฟนด้อมรวมตัวกันแน่นขึ้น เพราะเรื่องถูกเล่าในกรอบของการมีอิสระในการทำงาน ไม่ใช่กรอบของความขัดแย้ง',
      paths: null as { path: string; type: string }[] | null,
    },
    {
      id: '2.6',
      title: 'พฤติกรรมฟังคอนเสิร์ตแบบเงียบ',
      text: 'สิ่งที่สังเกตได้ใน PULSE TOUR คือแฟนสายเสียงร้องพร้อมใจกันเงียบฟังในช่วงที่เขาร้อง นักวิชาการจัดว่าเป็น "respect-based fandom culture indicator" ซึ่งต่างจากคอนเสิร์ตไอดอลที่แชนต์กันทั้งงาน',
      paths: null as { path: string; type: string }[] | null,
    },
  ],
  legacyItems: [
    { label: 'การจัดประเภทเจเนอเรชัน', val: 'Transnational Idol-Auteur Generation 1' },
    { label: 'ระดับที่เทียบเคียงได้', val: 'IU · G-Dragon · Taemin · The Weeknd' },
    { label: 'ตำแหน่งที่ไม่เหมือนใคร', val: 'คนแรกที่มีรากจากเอเชียตะวันออกเฉียงใต้ ซึ่งไปถึงขั้นเป็นไอดอลที่กำกับงานตัวเองระดับโลกและเป็นคนวางโครงแฟรนไชส์ ภายในเส้นทางของระบบเกาหลี' },
    { label: 'สวมหลายบทบาทพร้อมกัน', val: 'เป็นทั้งผู้ชนะ Grammy ผู้ร่วมเขียนบทที่มีเครดิตจริง ผู้กำกับร่วม และซีอีโอค่ายตัวเอง ในเวลาเดียวกัน ซึ่งไม่มีสมาชิกวงระดับโลกคนไหนถือครบชุดนี้อยู่ตอนนี้' },
    { label: 'Nobel Peace Prize', val: 'ได้รับการเสนอชื่อ ปี 2026 — อ้างอิงจากแถลงการณ์หยุดยิง Gaza และสันติภาพไทย-กัมพูชา' },
    { label: 'UNESCO Goodwill Ambassador', val: 'ได้รับแต่งตั้งปี 2026 — เป็นตำแหน่งถาวร ไม่ใช่แค่การปรากฏตัวครั้งเดียว' },
    { label: 'สถิติโลกกินเนสส์', val: 'ศิลปินคนแรกที่ครองอันดับ 1 พร้อมกันทั้ง Billboard 200, Hot 100 และอันดับรายได้หนังทั่วโลกในสัปดาห์เดียว คือสัปดาห์ที่ DECADE ชนกับ Last of the Ten Rings เดือนกันยายน 2026' },
    { label: 'กรณีศึกษาในมหาวิทยาลัย', val: 'กลายเป็นหัวข้อวิชาเรียนเรื่อง "post-agency idol model" ซึ่งเปิดสอนครั้งแรกปี 2026' },
  ],
  scoreboard: [
    { val: '8.7B+', label: 'สตรีมสะสม', sub: 'ทุกแพลตฟอร์ม' },
    { val: '32M', label: 'Spotify Monthly Listeners', sub: 'พีคปี 2026' },
    { val: '#1 · #1', label: 'Billboard 200 · Hot 100', sub: 'DECADE / "NEW"' },
    { val: '2', label: 'Grammy ที่ชนะ', sub: '+1 การเสนอชื่อ' },
    { val: '~75M', label: 'ผู้ติดตามโซเชียล', sub: 'IG + X + TikTok + YouTube' },
    { val: '$309M', label: 'รายได้ทัวร์', sub: 'PULSE + DECADE' },
    { val: '$728M', label: 'รายได้หนัง', sub: 'Shang-Chi (2021)' },
    { val: 'ที่ 1', label: 'สถิติโลกกินเนสส์', sub: 'Billboard, Hot 100 และรายได้หนัง ในสัปดาห์เดียว' },
  ],
  statureTierCols: ['ตัวชี้วัด', 'James Hwang', 'อยู่ระดับไหน'],
  statureTiers: [
    ['ผู้ฟังต่อเดือนบน Spotify', '32M', 'ระดับซูเปอร์สตาร์โลก อยู่แถวหน้าของศิลปินเดี่ยวทั้งโลก'],
    ['ยอดผู้ติดตามรวมทุกช่องทาง', '~75M', 'ระดับคนดังแถวหน้าของโลก'],
    ['สตรีมสะสม', '8.7B+', 'ศิลปินเดี่ยวเกาหลีแถวหน้าที่ข้ามไปตลาดโลกได้ อยู่กลุ่มเดียวกับ IU, G-Dragon และ The Weeknd'],
    ['ชาร์ตสหรัฐฯ', 'Billboard 200 อันดับ 1 + Hot 100 อันดับ 1', 'เข้าตลาดตะวันตกได้เต็มตัว ซึ่งหาได้ยากสำหรับศิลปินเดี่ยวเกาหลี'],
    ['งานจอ', 'หนังทำเงิน $728M + รางวัล Emmy และ Saturn', 'ข้ามไปฮอลลีวูดในระดับดาราแถวหน้า ไม่ใช่ไอดอลที่ไปรับเชิญ'],
    ['นอกวงการเพลง', '2 Grammy · Guinness · Nobel & UNESCO 2026', 'บุคคลสาธารณะระดับโลกเกินวงการเพลง'],
  ],
};

export const culturalImpact = { en, th };
export function getCulturalImpact(lang: Lang) {
  return culturalImpact[lang];
}
