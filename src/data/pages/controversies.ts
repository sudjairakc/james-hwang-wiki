// Bilingual content for the Controversies & Incidents page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Non-translatable values (category/severity/status enum keys, hex colors) are
// kept identical across both languages on purpose.

import type { Lang } from '../../i18n';

type Category = 'political' | 'industry' | 'personal' | 'fandom' | 'social';
type Severity = 'high' | 'medium' | 'low';
type Status = 'resolved' | 'ongoing' | 'faded';

type Incident = {
  period: string;
  title: string;
  category: Category;
  severity: Severity;
  status: Status;
  body: string;
  outcome: string;
};

// Category/severity/status colors — shared, referenced by markup (not language-specific).
export const catColors: Record<Category | 'social', string> = {
  political: '#5a7aaa',
  industry: '#c9a84c',
  personal: '#c06080',
  fandom: '#9b7fc8',
  social: '#5a9c7c',
};

export const sevColors: Record<Severity, string> = {
  high: '#f87171',
  medium: '#facc15',
  low: 'var(--text-muted)',
};

export const statusColors: Record<Status, { color: string; bg: string }> = {
  resolved: { color: '#4ade80', bg: 'color-mix(in srgb,#4ade80 12%,transparent)' },
  ongoing: { color: '#fb923c', bg: 'color-mix(in srgb,#fb923c 12%,transparent)' },
  faded: { color: 'var(--text-muted)', bg: 'var(--bg-muted)' },
};

const en = {
  ui: {
    label: 'Biography',
    title: 'Controversies & Incidents',
    subtitle: 'Political · Industry · Personal · Fandom · 2016–present',
    kpiTotalLabel: 'Total Incidents',
    kpiTotalSub: 'across all categories',
    kpiHighLabel: 'High Severity',
    kpiHighSub: 'significant career impact',
    kpiOngoingLabel: 'Ongoing',
    kpiOngoingSub: 'unresolved as of 2026',
    kpiResolvedLabel: 'Resolved',
    kpiResolvedSub: 'concluded with outcome',
    catLabels: {
      political: 'Political',
      industry: 'Industry',
      personal: 'Personal',
      fandom: 'Fandom',
      social: 'Social',
    } as Record<Category | 'social', string>,
    sevLegend: {
      high: 'High severity',
      medium: 'Medium severity',
      low: 'Low severity',
    } as Record<Severity, string>,
    sevLabels: {
      high: 'High',
      medium: 'Medium',
      low: 'Low',
    } as Record<Severity, string>,
    statusLabels: {
      resolved: 'Resolved',
      ongoing: 'Ongoing',
      faded: 'Faded',
    } as Record<Status, string>,
    outcomeLabel: 'Outcome — ',
    patternNoteLabel: 'Pattern note —',
  },
  closingNoteHtml:
    'James Hwang\'s controversies fall into two main groups: those rooted in <em>identity and industry structure</em> (the SM dispute, the NCT fan divide) and those rooted in <em>political stances</em> (Thai democracy, anti-war statements). The two groups connect through a single pattern — James consistently chooses authenticity over career safety, whether the counterpart is SM, Disney, or Thai nationalist backlash.',
  incidents: [
    {
      period: '2016',
      title: 'LIKE I DO Solo Spotlight Backlash',
      category: 'fandom',
      severity: 'low',
      status: 'faded',
      body: 'SM releasing GONUNMA: LIKE I DO just three weeks after the NCT 127 debut sparked discontent among a portion of the group\'s fandom — seen by some as spotlighting one member too soon, risking group balance, while another faction viewed it as recognition he rightfully earned.',
      outcome: 'Faded naturally as the group kept releasing new work — became a footnote in NCT 127\'s history rather than a lasting controversy.',
    },
    {
      period: '2021',
      title: 'Dating Rumors — Winter & Karina (aespa)',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'Fansite-level rumors linked him to Winter and Karina of aespa — fueled by joint appearances at SM internal events and social media interaction during that period. The Winter rumor was dismissed as speculation, while the Karina connection later turned out to be a real relationship that was systematically managed by PR at the time — both sides used "same label" as cover.',
      outcome: 'No official confirmation for either case at the time. The Karina relationship was later confirmed indirectly through sources close to the parties.',
    },
    {
      period: 'Early 2022',
      title: 'Ukraine–Russia Statement While at SM',
      category: 'political',
      severity: 'low',
      status: 'faded',
      body: 'James issued a statement calling for a ceasefire just days after Russia\'s invasion of Ukraine — while most K-pop artists chose silence. SM didn\'t officially block it, but the wording was extremely cautious, never naming the aggressor and sticking to "hoping everyone stays safe." Some fans criticized it as too soft; others praised him for speaking up at all as a K-pop idol.',
      outcome: 'Blew over quickly with no career impact at the time. After leaving SM (2023), James took a more direct stance, explicitly condemning attacks on civilians.',
    },
    {
      period: '2022–2023',
      title: 'SM Contract Dispute & Dispatch Leak',
      category: 'industry',
      severity: 'high',
      status: 'resolved',
      body: 'James filed an injunction to suspend his SM contract, alleging deliberate project delays to extend the contract term, the company claiming songs he wrote as "corporate property," and internal meeting language that pressured foreign artists. Dispatch published excerpts of a leaked meeting recording — including the line "foreign members should be mindful of their position." SM countersued, alleging reputational damage. The first round of mediation failed.',
      outcome: 'Settled on April 27, 2023 — the contract was terminated, both sides dropped their lawsuits, and SM issued an apology and pledged policy changes. James retained full catalog rights for post-SM work and kept the rights to the name GONUNMA. It became a landmark case for artist rights in K-pop.',
    },
    {
      period: '2023',
      title: 'Media Rivalry Narrative — Jungkook (BTS)',
      category: 'fandom',
      severity: 'medium',
      status: 'faded',
      body: 'Multiple Korean and US entertainment outlets framed James and Jungkook as having a "parallel career trajectory" during the period both launched full solo eras simultaneously — the two had attended SOPA together, fronted the flagship K-pop groups of SM and HYBE respectively, and shared an obvious ambition for US crossover success. The narrative created tension across both fandoms, with continuous pitting over charts, streaming, and awards.',
      outcome: 'Faded significantly after Jungkook entered mandatory military service in December 2023 — the rivalry narrative largely disappeared from mainstream media.',
    },
    {
      period: '2023',
      title: 'Karina (aespa) — Relationship Managed Under Wraps',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'A short relationship between James and Karina was confirmed by sources close to the parties — systematically managed by PR from both JH Company and SM, with no public confirmation. Rumors at the time were dismissed with the "former labelmates" explanation, the same narrative used back in 2021.',
      outcome: 'No official confirmation, no career impact for either party. It ended before James announced his relationship with Ashley Liao in 2026.',
    },
    {
      period: '2023–Present',
      title: 'Israel–Gaza Statement vs. Disney/Marvel Contract',
      category: 'political',
      severity: 'high',
      status: 'ongoing',
      body: 'James issued statements calling for a ceasefire and humanitarian access in the Israel–Gaza conflict starting in late 2023, including criticism of US military support — a stance that directly clashed with Disney/Marvel\'s policy of avoiding politics. Reports indicate JH Company had to negotiate with Marvel\'s legal team on at least one occasion — a tension neither side has publicly confirmed.',
      outcome: 'Still ongoing — James hasn\'t retracted his statements but grew more careful with his wording during the Shang-Chi 3 press tour. His MCU contract remains intact, suggesting Disney chose to contain the issue rather than confront it.',
    },
    {
      period: '2024',
      title: 'Cultural Appropriation Allegations — ARE U STILL Era',
      category: 'social',
      severity: 'medium',
      status: 'faded',
      body: 'Criticism circulated that ARE U STILL leaned too heavily on African-American cultural influence — arising on Twitter/X during the Grammy campaign, focused on neo-soul influences, vocal style, and music video aesthetics. There was no direct evidence of appropriating cultural symbols, while many African-American fans spoke up in support and rejected the label.',
      outcome: 'Faded on its own after the Grammy wins — the victories shifted the narrative from "appropriation" to "contribution" across most media.',
    },
    {
      period: '2024',
      title: 'US Breakthrough Dating Rumors',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'During his US breakthrough, James\'s name was linked to Olivia Rodrigo, Sabrina Carpenter, and Hunter Schafer at the tabloid speculation level — all stemming from appearing at the same events or general social media activity, with no confirming evidence whatsoever.',
      outcome: 'No impact — passed through the normal celebrity gossip cycle.',
    },
    {
      period: '2024–Present',
      title: 'NCT 127 Fan Divide — Pro vs. Anti',
      category: 'fandom',
      severity: 'medium',
      status: 'ongoing',
      body: 'His first partial return to NCT 127 in 2024, and full return in 2026, created a structural divide in the fandom — SM ran a strategy where both "James is back" and "James is absent" generated comparably high engagement. Fans split into roughly two camps: those who welcomed James back and those who felt he pulled the spotlight away from the group.',
      outcome: 'Still ongoing and a chronic tension — every NCT 127 release, whether James is on it or not, generates unusually high buzz. SM has yet to show any systematic approach to resolving it.',
    },
    {
      period: '2024–2025',
      title: 'Hanni (NewJeans) — Open Secret',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'A short relationship between James and Hanni was confirmed by sources close to the parties, though both chose not to go public. Rumors circulating on social media during the CAN\'T LEAVE ALONE era (2025) cited social media interaction as the surface reason, though insiders viewed that as a cover story. A brief age-gap debate flared up in the fandom.',
      outcome: 'Ended before James announced his relationship with Ashley Liao. No official confirmation was ever given by either side.',
    },
    {
      period: '2025',
      title: 'Thai–Cambodia Conflict & Nationalist Backlash',
      category: 'political',
      severity: 'high',
      status: 'ongoing',
      body: 'When Thai-Cambodia border tensions flared up, James issued a statement calling for peace and negotiation — directly at odds with the nationalist sentiment in Thailand at the time. It was the most severe fallout of his career: heavy social media backlash, symbolic lightstick-breaking and merchandise burning. His Thai fanbase shrank significantly, and James halted all activity in Thailand — no tours, no promotion, no mentions of Thailand in the media.',
      outcome: 'Ongoing — James hasn\'t returned to Thailand since. There\'s no sign of reconciliation. His Thai fanbase has permanently shrunk but remains sizable enough for an international pop star.',
    },
    {
      period: '2025–Present',
      title: 'US–Iran Statement & American Audience Backlash',
      category: 'political',
      severity: 'medium',
      status: 'ongoing',
      body: 'James issued a statement calling for de-escalation of the US–Iran conflict during the period he was already living in the US. He was criticized by parts of the American audience as "ungrateful to the country that gave him opportunity" and that "foreign artists shouldn\'t comment on US foreign policy." Some conservative outlets held him up as an example.',
      outcome: 'Ongoing — James hasn\'t retracted his statement. His progressive-leaning US fanbase responded positively, while part of the mainstream continues to criticize him.',
    },
  ] as Incident[],
  related: [
    { label: 'Personal Life', slug: 'personal-life' },
    { label: 'Public Image', slug: 'public-image' },
    { label: 'Legal', slug: 'legal' },
    { label: 'Fandom', slug: 'fandom' },
    { label: 'Cultural Impact', slug: 'cultural-impact' },
    { label: 'Rivalries & Tensions', slug: 'rivalries' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ชีวประวัติ',
    title: 'ประเด็นดราม่าและเหตุการณ์',
    subtitle: 'การเมือง · อุตสาหกรรม · ส่วนตัว · แฟนด้อม · 2016–ปัจจุบัน',
    kpiTotalLabel: 'เหตุการณ์ทั้งหมด',
    kpiTotalSub: 'ครอบคลุมทุกหมวดหมู่',
    kpiHighLabel: 'ความรุนแรงสูง',
    kpiHighSub: 'ส่งผลกระทบต่ออาชีพอย่างมีนัยสำคัญ',
    kpiOngoingLabel: 'ยังดำเนินอยู่',
    kpiOngoingSub: 'ยังไม่คลี่คลาย ณ ปี 2026',
    kpiResolvedLabel: 'คลี่คลายแล้ว',
    kpiResolvedSub: 'สิ้นสุดพร้อมผลลัพธ์',
    catLabels: {
      political: 'การเมือง',
      industry: 'อุตสาหกรรม',
      personal: 'ส่วนตัว',
      fandom: 'แฟนด้อม',
      social: 'สังคม',
    } as Record<Category | 'social', string>,
    sevLegend: {
      high: 'ความรุนแรงสูง',
      medium: 'ความรุนแรงปานกลาง',
      low: 'ความรุนแรงต่ำ',
    } as Record<Severity, string>,
    sevLabels: {
      high: 'สูง',
      medium: 'ปานกลาง',
      low: 'ต่ำ',
    } as Record<Severity, string>,
    statusLabels: {
      resolved: 'คลี่คลายแล้ว',
      ongoing: 'ยังดำเนินอยู่',
      faded: 'จางหายไป',
    } as Record<Status, string>,
    outcomeLabel: 'ผลลัพธ์ — ',
    patternNoteLabel: 'ข้อสังเกตเชิงรูปแบบ —',
  },
  closingNoteHtml:
    'Controversies ของ James Hwang แบ่งได้เป็นสองกลุ่มหลัก: กลุ่มที่เกิดจาก <em>identity และ industry structure</em> (SM dispute, NCT fan divide) และกลุ่มที่เกิดจาก <em>จุดยืนทางการเมือง</em> (Thai democracy, anti-war statements) สองกลุ่มนี้เชื่อมกันผ่าน pattern เดียว คือ James เลือก authenticity เหนือ career safety อย่างสม่ำเสมอ — ไม่ว่าจะกับ SM, Disney, หรือกระแสชาตินิยมไทย',
  incidents: [
    {
      period: '2016',
      title: 'กระแสตีกลับ Solo Spotlight ของ LIKE I DO',
      category: 'fandom',
      severity: 'low',
      status: 'faded',
      body: 'การที่ SM ปล่อย GONUNMA: LIKE I DO เพียงสามสัปดาห์หลัง NCT 127 debut สร้างความไม่พอใจในกลุ่มแฟนคลับวงบางส่วน — มองว่าเป็นการให้ spotlight กับสมาชิกคนหนึ่งเร็วเกินไปและอาจกระทบ group balance ขณะที่แฟนคลับอีกฝั่งมองว่าเป็น recognition ที่สมควรได้รับ',
      outcome: 'ลดลงตามธรรมชาติหลังวงออกผลงานต่อเนื่อง กลายเป็น footnote ในประวัติ NCT 127 มากกว่าจะเป็น lasting controversy',
    },
    {
      period: '2021',
      title: 'ข่าวลือความสัมพันธ์ — Winter & Karina (aespa)',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'ข่าวลือระดับ fansite เกี่ยวกับความสัมพันธ์กับ Winter และ Karina จาก aespa — เกิดจากการปรากฏตัวร่วมกันในงาน SM internal events และ social media interaction ในช่วงนั้น Winter ถูกมองว่าเป็นแค่ข่าวลือ ขณะที่ Karina ต่อมาเปิดเผยว่ามีความสัมพันธ์จริงแต่ถูกจัดการ PR อย่างเป็นระบบ ณ เวลานั้น ทุกฝ่ายใช้ "ร่วมสังกัด" เป็น cover',
      outcome: 'ไม่มีการยืนยันอย่างเป็นทางการทั้งสองกรณีในช่วงนั้น Karina relationship ถูกยืนยันโดยอ้อมผ่านแหล่งข่าวใกล้ชิดในเวลาต่อมา',
    },
    {
      period: 'ต้น 2022',
      title: 'แถลงการณ์ Ukraine–Russia ขณะอยู่ใน SM',
      category: 'political',
      severity: 'low',
      status: 'faded',
      body: 'James ออก statement เรียกร้องหยุดยิงไม่กี่วันหลังรัสเซียบุกยูเครน — ขณะที่ศิลปิน K-pop ส่วนใหญ่เลือกเงียบ SM ไม่ได้ห้ามอย่างเป็นทางการแต่ถ้อยคำระมัดระวังมาก ไม่ระบุฝ่ายผู้รุกราน เน้นแค่ "ขอให้ทุกคนปลอดภัย" แฟนคลับบางส่วนวิจารณ์ว่าเบาเกินไป บางส่วนยกย่องว่ากล้าพูดในฐานะ K-pop idol',
      outcome: 'ผ่านไปเร็ว ไม่มีผลกระทบต่อ career ในช่วงนั้น หลังออก SM (2023) James แสดงจุดยืนตรงกว่าและประณามการโจมตีพลเรือนอย่างชัดเจน',
    },
    {
      period: '2022–2023',
      title: 'ข้อพิพาทสัญญา SM & การรั่วไหลของ Dispatch',
      category: 'industry',
      severity: 'high',
      status: 'resolved',
      body: 'James ยื่นคำร้องต่อศาลเพื่อระงับสัญญา SM อ้างการ delay โปรเจกต์ตั้งใจเพื่อยืดสัญญา, การ claim เพลงที่เขาเขียนเป็น "ทรัพย์สินบริษัท", และถ้อยคำในการประชุมภายในที่กดทับศิลปินต่างชาติ Dispatch เผยแพร่บางส่วนของบันทึกเสียงการประชุม — รวมถึงประโยค "foreign members should be mindful of their position" SM ฟ้องกลับอ้างความเสียหายต่อชื่อเสียง การไกล่เกลี่ยรอบแรกล้มเหลว',
      outcome: 'Settlement 27 เมษายน 2023 — ยุติสัญญา, ถอนฟ้องทั้งสองฝ่าย, SM ออกแถลงการณ์ขอโทษและสัญญาปรับนโยบาย James ได้สิทธิ์ catalog เต็มรูปแบบสำหรับงานหลัง SM และ retain สิทธิ์ชื่อ GONUNMA กลายเป็น landmark case เรื่องสิทธิ์ศิลปินใน K-pop',
    },
    {
      period: '2023',
      title: 'กระแสคู่แข่งจากสื่อ — Jungkook (BTS)',
      category: 'fandom',
      severity: 'medium',
      status: 'faded',
      body: 'สื่อบันเทิงเกาหลีและ US หลายสำนักนำเสนอ "parallel career trajectory" ของ James และ Jungkook ในช่วงที่ทั้งคู่ออก solo เต็มรูปแบบพร้อมกัน — ทั้งสองเคยเรียนที่ SOPA ร่วมกัน, อยู่ในวง K-pop flagship ของ SM และ HYBE ตามลำดับ, และมี US crossover ambition ชัดเจน กระแสนี้สร้างความตึงเครียดในแฟนด้อมทั้งสองฝั่ง มีการ pit กันเรื่อง chart, streaming, และ award ต่อเนื่อง',
      outcome: 'ลดลงมากหลัง Jungkook เข้ารับราชการทหาร ธันวาคม 2023 rivalry narrative หายจากสื่อกระแสหลักเกือบหมด',
    },
    {
      period: '2023',
      title: 'Karina (aespa) — ความสัมพันธ์ที่จัดการอย่างเงียบๆ',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'ความสัมพันธ์ระยะสั้นระหว่าง James และ Karina ถูกยืนยันโดยแหล่งข่าวใกล้ชิด — จัดการ PR อย่างเป็นระบบโดยทั้ง JH Company และ SM ไม่มีการยืนยันสาธารณะ กระแสข่าวลือในช่วงนั้นถูก dismiss ด้วยคำอธิบาย "เคยร่วมสังกัด" ซึ่งเป็น narrative เดิมจากปี 2021',
      outcome: 'ไม่มีการยืนยันอย่างเป็นทางการ ไม่มีผลต่อ career ทั้งสองฝ่าย สิ้นสุดลงก่อนที่ James จะประกาศความสัมพันธ์กับ Ashley Liao ในปี 2026',
    },
    {
      period: '2023–ปัจจุบัน',
      title: 'แถลงการณ์ Israel–Gaza กับสัญญา Disney/Marvel',
      category: 'political',
      severity: 'high',
      status: 'ongoing',
      body: 'James ออก statement เรียกร้องหยุดยิงและ humanitarian access ในความขัดแย้ง Israel–Gaza ตั้งแต่ปลายปี 2023 รวมถึงวิพากษ์วิจารณ์การสนับสนุนทางทหารของสหรัฐฯ — จุดยืนที่ขัดกับนโยบายหลีกเลี่ยงการเมืองของ Disney/Marvel โดยตรง มีรายงานว่า JH Company ต้องเจรจากับ Marvel legal team ไม่น้อยกว่าหนึ่งครั้ง เป็น tension ที่ทั้งสองฝ่ายไม่ยืนยันสาธารณะ',
      outcome: 'ยังคง ongoing — James ไม่ถอน statement แต่ปรับถ้อยคำระมัดระวังขึ้นในช่วง Shang-Chi 3 press tour MCU contract ยังคงอยู่ แสดงว่า Disney เลือก contain มากกว่า confront',
    },
    {
      period: '2024',
      title: 'ข้อกล่าวหา Cultural Appropriation — ยุค ARE U STILL',
      category: 'social',
      severity: 'medium',
      status: 'faded',
      body: 'กระแสวิจารณ์ว่า ARE U STILL ได้รับอิทธิพลจากวัฒนธรรมแอฟริกัน-อเมริกันมากเกินไป — เกิดใน Twitter/X ช่วง Grammy campaign เน้นที่ neo-soul influences, vocal style, และ music video aesthetic ไม่มีหลักฐานการ appropriate สัญลักษณ์ทางวัฒนธรรมโดยตรง ขณะที่แฟนคลับชาวแอฟริกัน-อเมริกันหลายคนออกมาแสดงความเห็นสนับสนุนและปฏิเสธการ label ดังกล่าว',
      outcome: 'ลดลงเองหลัง Grammy wins — ชัยชนะทำให้ narrative เปลี่ยนจาก "appropriation" เป็น "contribution" ในสื่อส่วนใหญ่',
    },
    {
      period: '2024',
      title: 'ข่าวลือความสัมพันธ์ช่วง US Breakthrough',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'ช่วง US breakthrough — ชื่อ James ถูกเชื่อมกับ Olivia Rodrigo, Sabrina Carpenter, และ Hunter Schafer ในระดับ tabloid speculation ทั้งหมดเกิดจากการปรากฏตัวในงานเดียวกัน หรือ social media activity ทั่วไป ไม่มีหลักฐานยืนยันใดๆ',
      outcome: 'ไม่มีผลกระทบ ผ่านไปตามวัฏจักร celebrity gossip ปกติ',
    },
    {
      period: '2024–ปัจจุบัน',
      title: 'ความแตกแยกแฟนคลับ NCT 127 — ฝ่ายหนุนกับฝ่ายต้าน',
      category: 'fandom',
      severity: 'medium',
      status: 'ongoing',
      body: 'การกลับเข้าร่วม NCT 127 ครั้งแรกในปี 2024 และเต็มรูปแบบในปี 2026 สร้าง structural divide ในแฟนด้อม — SM ใช้กลยุทธ์ที่ทำให้ทั้ง "James กลับมา" และ "James ไม่อยู่" ต่างก็สร้าง engagement สูงพอกัน แฟนคลับแบ่งเป็นสองกลุ่มพอๆ กัน: ฝ่ายที่ต้อนรับ James และฝ่ายที่มองว่า James ดึง spotlight ออกจากวง',
      outcome: 'ยังคง ongoing และเป็น chronic tension ทุก NCT 127 release ที่มีหรือไม่มี James จะมีกระแสสูงผิดปกติเสมอ SM ยังไม่มีท่าทีแก้ปัญหาอย่างเป็นระบบ',
    },
    {
      period: '2024–2025',
      title: 'Hanni (NewJeans) — ความลับที่รู้กันทั่ว',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'ความสัมพันธ์ระยะสั้นระหว่าง James และ Hanni ถูกยืนยันโดยแหล่งข่าวใกล้ชิด ทั้งสองฝ่ายเลือกไม่เปิดเผยสาธารณะ ข่าวลือที่ปรากฏบนโซเชียลช่วง CAN\'T LEAVE ALONE (2025) อ้างถึง social media interaction เป็น surface reason แต่วงในมองว่าเป็น cover story กระแสถกเถียงเรื่องช่วงอายุเกิดขึ้นในแฟนด้อมสั้นๆ',
      outcome: 'สิ้นสุดก่อน James ประกาศความสัมพันธ์กับ Ashley Liao ไม่มีการยืนยันอย่างเป็นทางการจากทุกฝ่าย',
    },
    {
      period: '2025',
      title: 'ความขัดแย้งไทย–กัมพูชา & กระแสตีกลับชาตินิยม',
      category: 'political',
      severity: 'high',
      status: 'ongoing',
      body: 'เมื่อความตึงเครียดชายแดนไทย-กัมพูชาปะทุขึ้น James ออกแถลงการณ์เรียกร้องสันติภาพและการเจรจา — ขัดกับกระแสชาตินิยมไทยในช่วงนั้นโดยตรง ผลลัพธ์รุนแรงที่สุดในอาชีพ: backlash หนักบนโซเชียล มีการตัด lightstick และเผา merchandise เชิงสัญลักษณ์ แฟนคลับไทยลดลงอย่างมีนัยสำคัญ James หยุดกิจกรรมทุกประเภทในไทย — ไม่มีทัวร์, ไม่มีโปรโมท, ไม่กล่าวถึงประเทศไทยในสื่อ',
      outcome: 'Ongoing — James ไม่กลับไทยนับตั้งแต่นั้น ไม่มีสัญญาณ reconciliation ฐานแฟนคลับไทยลดลงถาวร แต่ยังใหญ่พอสำหรับ pop star ระดับ international',
    },
    {
      period: '2025–ปัจจุบัน',
      title: 'แถลงการณ์ US–Iran & กระแสตีกลับจากผู้ชมอเมริกัน',
      category: 'political',
      severity: 'medium',
      status: 'ongoing',
      body: 'James ออก statement เรียกร้อง de-escalation ความขัดแย้ง US–Iran ในช่วงที่เขาอาศัยอยู่ในสหรัฐฯ แล้ว ถูกวิจารณ์จากบางส่วนของผู้ชมอเมริกันว่า "ไม่รู้จักบุญคุณประเทศที่ให้โอกาส" และ "ศิลปินต่างชาติไม่ควรแสดงความคิดเห็นนโยบายต่างประเทศสหรัฐฯ" บางสำนักข่าวอนุรักษนิยมหยิบยกเป็นกรณีตัวอย่าง',
      outcome: 'Ongoing — James ไม่ถอน statement ฐานแฟนคลับสายโปรเกรสซีฟในสหรัฐฯ ตอบรับบวก ขณะที่ส่วนหนึ่งของกระแสหลักยังคงวิจารณ์',
    },
  ] as Incident[],
  related: [
    { label: 'ชีวิตส่วนตัว', slug: 'personal-life' },
    { label: 'ภาพลักษณ์สาธารณะ', slug: 'public-image' },
    { label: 'กฎหมาย', slug: 'legal' },
    { label: 'แฟนด้อม', slug: 'fandom' },
    { label: 'อิทธิพลเชิงวัฒนธรรม', slug: 'cultural-impact' },
    { label: 'คู่แข่ง & ความตึงเครียด', slug: 'rivalries' },
  ],
};

export const controversies = { en, th };
export function getControversies(lang: Lang) {
  return controversies[lang];
}
