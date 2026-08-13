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
      outcome: 'Settled on April 27, 2023 — the contract was terminated, both sides dropped their lawsuits, and SM issued an apology and pledged policy changes. James retained full catalog rights for post-SM work and kept the rights to the name GONUNMA. It became a landmark case for artist rights in K-pop — see below for the industry-wide fallout it triggered.',
    },
    {
      period: '2023',
      title: 'Industry Reform Wave — the "Hwang Clause"',
      category: 'industry',
      severity: 'high',
      status: 'resolved',
      body: 'What began as a single artist\'s contract dispute widened over the following year. SM shares fell noticeably in the sessions after the leak and settlement; Korea\'s Fair Trade Commission opened a sector-wide inquiry into idol contract practices, citing the case directly; artists at several other major agencies were reported to be quietly citing it in their own renewal negotiations; and a documentary on the dispute crossed over into general entertainment coverage well outside K-pop circles.',
      outcome: 'In November 2023, the National Assembly cited the case while passing an amendment to the Popular Culture and Arts Industry Development Act tightening contract-extension and disclosure rules — press nicknamed it the "Hwang Clause," though that carries no official status. That December, James became a founding backer of an idol-rights advocacy body, converting a personal legal win into an organized industry push.',
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
      body: 'His return to NCT 127 in 2024 — as an external artist, under a negotiated agreement without real precedent in K-pop — and his full-scale participation in the group\'s 2026 10th anniversary created a structural divide in the fandom — SM ran a strategy where both "James is back" and "James is absent" generated comparably high engagement. Fans split into roughly two camps: those who welcomed James back and framed the 2024 deal as vindication of his 2023 stand, and those who felt he pulled the spotlight away from the group regardless of the terms.',
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
      body: 'When Thai-Cambodia border tensions flared up, James issued a statement calling for peace and negotiation — directly at odds with the nationalist sentiment in Thailand at the time. It was the most severe fallout of his career: heavy social media backlash, symbolic lightstick-breaking and merchandise burning. His Thai fanbase shrank significantly, and James halted all activity in Thailand — no tours, no promotion, no mentions of Thailand in the media. He has pointedly refused to apologize: he treats his anti-war stance as a non-negotiable principle and restates it at every opportunity, even as it costs him his home market. When NCT 127\'s 2026 REDLINE tour reached Bangkok (Oct 31 – Nov 1, 2026), James sat the dates out — his first absence from a show in his own country, and the starkest symbol of a self-chosen estrangement he will not buy back with a walk-back. For a peace-first artist otherwise free of personal scandal, this remains the one genuine, ongoing wound in the record.',
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
    'ดราม่ารอบตัว James Hwang แบ่งได้สองกลุ่มใหญ่ กลุ่มที่มาจาก <em>ตัวตนและโครงสร้างของวงการ</em> อย่างข้อพิพาทกับ SM และความแตกแยกในแฟนด้อม NCT และกลุ่มที่มาจาก <em>จุดยืนทางการเมือง</em> อย่างประชาธิปไตยไทยและการต้านสงคราม ทั้งสองกลุ่มเชื่อมกันด้วยแบบแผนเดียว คือเขาเลือกความจริงใจก่อนความปลอดภัยของอาชีพเสมอ ไม่ว่าคู่กรณีจะเป็น SM, Disney หรือกระแสชาตินิยมไทย',
  incidents: [
    {
      period: '2016',
      title: 'กระแสตีกลับ Solo Spotlight ของ LIKE I DO',
      category: 'fandom',
      severity: 'low',
      status: 'faded',
      body: 'การที่ SM ปล่อย GONUNMA: LIKE I DO เพียงสามสัปดาห์หลัง NCT 127 เดบิวต์ ทำให้แฟนวงส่วนหนึ่งไม่พอใจ เพราะมองว่าเป็นการดันสมาชิกคนเดียวเร็วเกินไปและอาจทำให้สมดุลในวงเสีย ขณะที่แฟนอีกฝั่งมองว่าเขาสมควรได้การยอมรับนี้',
      outcome: 'เงียบไปเองหลังวงออกผลงานต่อเนื่อง กลายเป็นแค่เชิงอรรถในประวัติ NCT 127 ไม่ใช่ดราม่าที่ค้างยาว',
    },
    {
      period: '2021',
      title: 'ข่าวลือความสัมพันธ์ — Winter & Karina (aespa)',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'ข่าวลือระดับแฟนไซต์เรื่องความสัมพันธ์กับ Winter และ Karina จาก aespa มาจากการไปงานภายในของ SM ด้วยกันและการกดไลก์กดตอบกันบนโซเชียลช่วงนั้น กรณี Winter ถูกมองว่าเป็นข่าวลือล้วนๆ ส่วน Karina ภายหลังมีการเปิดเผยว่าคบกันจริงแต่ถูกจัดการข่าวอย่างเป็นระบบ ตอนนั้นทุกฝ่ายใช้คำว่า "อยู่ค่ายเดียวกัน" เป็นคำอธิบายบังหน้า',
      outcome: 'ไม่มีการยืนยันอย่างเป็นทางการทั้งสองกรณีในช่วงนั้น เรื่อง Karina ถูกยืนยันโดยอ้อมผ่านแหล่งข่าวใกล้ชิดในเวลาต่อมา',
    },
    {
      period: 'ต้น 2022',
      title: 'แถลงการณ์ Ukraine–Russia ขณะอยู่ใน SM',
      category: 'political',
      severity: 'low',
      status: 'faded',
      body: 'James ออกแถลงการณ์เรียกร้องให้หยุดยิงไม่กี่วันหลังรัสเซียบุกยูเครน ตอนที่ศิลปิน K-pop ส่วนใหญ่เลือกเงียบ SM ไม่ได้ห้ามอย่างเป็นทางการ แต่ถ้อยคำระวังตัวมาก ไม่ชี้ว่าใครเป็นฝ่ายรุกราน เน้นแค่ "ขอให้ทุกคนปลอดภัย" แฟนบางส่วนติว่าเบาเกินไป บางส่วนชมว่ากล้าพูดแล้วในฐานะไอดอล K-pop',
      outcome: 'ผ่านไปเร็ว ไม่กระทบอาชีพในช่วงนั้น หลังออกจาก SM ในปี 2023 เขาพูดตรงขึ้นและประณามการโจมตีพลเรือนอย่างชัดเจน',
    },
    {
      period: '2022–2023',
      title: 'ข้อพิพาทสัญญา SM & การรั่วไหลของ Dispatch',
      category: 'industry',
      severity: 'high',
      status: 'resolved',
      body: 'James ยื่นคำร้องต่อศาลเพื่อระงับสัญญากับ SM โดยอ้างว่าค่ายดองโปรเจกต์เพื่อยืดสัญญา อ้างสิทธิ์ในเพลงที่เขาแต่งว่าเป็น "ทรัพย์สินบริษัท" และมีถ้อยคำกดทับศิลปินต่างชาติในการประชุมภายใน Dispatch เผยแพร่บันทึกเสียงการประชุมบางส่วน รวมถึงประโยค "foreign members should be mindful of their position" SM ฟ้องกลับโดยอ้างความเสียหายต่อชื่อเสียง และการไกล่เกลี่ยรอบแรกล้มเหลว',
      outcome: 'ตกลงกันได้วันที่ 27 เมษายน 2023 คือยุติสัญญา ถอนฟ้องทั้งสองฝ่าย SM ออกแถลงการณ์ขอโทษและรับปากปรับนโยบาย James ได้สิทธิ์ในผลงานหลังยุค SM เต็มรูปแบบและยังถือสิทธิ์ชื่อ GONUNMA ไว้ คดีนี้กลายเป็นคดีตัวอย่างเรื่องสิทธิ์ศิลปินใน K-pop ผลกระทบทั้งวงการดูได้ด้านล่าง',
    },
    {
      period: '2023',
      title: 'กระแสปฏิรูปวงการ — "Hwang Clause"',
      category: 'industry',
      severity: 'high',
      status: 'resolved',
      body: 'จากข้อพิพาทสัญญาของศิลปินคนเดียว เรื่องขยายวงตลอดปีถัดมา หุ้น SM ร่วงชัดเจนในช่วงซื้อขายหลังเทปหลุดและหลังตกลงกันได้ Fair Trade Commission ของเกาหลีเปิดสอบสวนแนวปฏิบัติสัญญาไอดอลทั้งวงการโดยอ้างคดีนี้ตรงๆ มีรายงานว่าศิลปินจากค่ายใหญ่อื่นเอาคดีนี้ไปอ้างเงียบๆ ตอนต่อรองสัญญาของตัวเอง และสารคดีเรื่องนี้ก็ข้ามไปสู่สื่อบันเทิงทั่วไปนอกวงการ K-pop',
      outcome: 'พฤศจิกายน 2023 สภาเกาหลีอ้างถึงคดีนี้ระหว่างผ่านร่างแก้ Popular Culture and Arts Industry Development Act ที่เข้มขึ้นเรื่องการยืดสัญญาและการเปิดเผยข้อมูล สื่อตั้งชื่อเล่นให้ว่า "Hwang Clause" แม้ไม่ใช่ชื่อทางการ ธันวาคมปีเดียวกัน James เป็นหนึ่งในผู้ร่วมก่อตั้งองค์กรด้านสิทธิไอดอล เปลี่ยนชัยชนะทางกฎหมายของคนคนเดียวให้เป็นแรงผลักดันทั้งวงการ',
    },
    {
      period: '2023',
      title: 'กระแสคู่แข่งจากสื่อ — Jungkook (BTS)',
      category: 'fandom',
      severity: 'medium',
      status: 'faded',
      body: 'สื่อบันเทิงทั้งเกาหลีและอเมริกาหลายสำนักปั้นเรื่อง "เส้นทางอาชีพที่วิ่งขนานกัน" ของ James กับ Jungkook ในช่วงที่ทั้งคู่ออกงานเดี่ยวเต็มตัวพร้อมกัน สองคนเคยเรียน SOPA ด้วยกัน อยู่ในวงเรือธงของ SM และ HYBE ตามลำดับ และตั้งใจจะข้ามไปตลาดอเมริกาเหมือนกัน กระแสนี้ทำให้แฟนสองฝั่งตึงเครียด และถูกจับมาชนกันเรื่องชาร์ต ยอดสตรีม และรางวัลอยู่เรื่อยๆ',
      outcome: 'ซาลงมากหลัง Jungkook เข้ารับราชการทหารเดือนธันวาคม 2023 เรื่องการเป็นคู่แข่งหายจากสื่อกระแสหลักไปเกือบหมด',
    },
    {
      period: '2023',
      title: 'Karina (aespa) — ความสัมพันธ์ที่จัดการอย่างเงียบๆ',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'แหล่งข่าวใกล้ชิดยืนยันว่า James กับ Karina คบกันช่วงสั้นๆ ทั้ง JH Company และ SM จัดการข่าวอย่างเป็นระบบ ไม่มีการยืนยันต่อสาธารณะ ข่าวลือช่วงนั้นถูกปัดด้วยคำอธิบายว่า "เคยอยู่ค่ายเดียวกัน" ซึ่งเป็นคำอธิบายเดิมจากปี 2021',
      outcome: 'ไม่มีการยืนยันอย่างเป็นทางการ ไม่กระทบอาชีพของทั้งสองฝ่าย และจบลงก่อนที่ James จะประกาศความสัมพันธ์กับ Ashley Liao ในปี 2026',
    },
    {
      period: '2023–ปัจจุบัน',
      title: 'แถลงการณ์ Israel–Gaza กับสัญญา Disney/Marvel',
      category: 'political',
      severity: 'high',
      status: 'ongoing',
      body: 'James ออกแถลงการณ์เรียกร้องให้หยุดยิงและเปิดทางให้ความช่วยเหลือด้านมนุษยธรรมในความขัดแย้งอิสราเอล–กาซาตั้งแต่ปลายปี 2023 พร้อมวิจารณ์การสนับสนุนทางทหารของสหรัฐฯ ซึ่งชนกับนโยบายเลี่ยงการเมืองของ Disney และ Marvel ตรงๆ มีรายงานว่า JH Company ต้องคุยกับทีมกฎหมายของ Marvel อย่างน้อยหนึ่งครั้ง เป็นความตึงเครียดที่ทั้งสองฝ่ายไม่ยืนยันต่อสาธารณะ',
      outcome: 'ยังไม่จบ James ไม่ถอนแถลงการณ์ แต่ปรับถ้อยคำให้ระวังขึ้นช่วงเดินสายโปรโมต Shang-Chi 3 สัญญากับ MCU ยังอยู่ แสดงว่า Disney เลือกจำกัดวงเรื่องนี้ ไม่ใช่ปะทะ',
    },
    {
      period: '2024',
      title: 'ข้อกล่าวหา Cultural Appropriation — ยุค ARE U STILL',
      category: 'social',
      severity: 'medium',
      status: 'faded',
      body: 'มีกระแสวิจารณ์ว่า ARE U STILL หยิบวัฒนธรรมแอฟริกัน-อเมริกันมาใช้มากเกินไป เกิดขึ้นบน Twitter/X ช่วงแคมเปญ Grammy โดยพุ่งไปที่อิทธิพล neo-soul สไตล์การร้อง และภาพใน MV ทั้งที่ไม่มีหลักฐานว่าเขาหยิบสัญลักษณ์ทางวัฒนธรรมมาใช้โดยตรง และแฟนชาวแอฟริกัน-อเมริกันหลายคนก็ออกมาสนับสนุนเขาและปฏิเสธข้อกล่าวหานั้น',
      outcome: 'เงียบไปเองหลังคว้า Grammy ชัยชนะทำให้สื่อส่วนใหญ่เปลี่ยนจากการมองว่าเขาขยิบวัฒนธรรมมาใช้ เป็นการมองว่าเขาร่วมสร้างมัน',
    },
    {
      period: '2024',
      title: 'ข่าวลือความสัมพันธ์ช่วง US Breakthrough',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'ช่วงที่เขาเริ่มแตกในอเมริกา ชื่อ James ถูกจับไปโยงกับ Olivia Rodrigo, Sabrina Carpenter และ Hunter Schafer ในระดับข่าวซุบซิบ ทั้งหมดมาจากการไปงานเดียวกันหรือความเคลื่อนไหวบนโซเชียลทั่วไป ไม่มีหลักฐานยืนยันอะไรเลย',
      outcome: 'ไม่มีผลกระทบ ผ่านไปตามวงจรข่าวซุบซิบดาราปกติ',
    },
    {
      period: '2024–ปัจจุบัน',
      title: 'ความแตกแยกแฟนคลับ NCT 127 — ฝ่ายหนุนกับฝ่ายต้าน',
      category: 'fandom',
      severity: 'medium',
      status: 'ongoing',
      body: 'การกลับเข้าร่วม NCT 127 ในปี 2024 — ในฐานะ external artist ภายใต้ข้อตกลงที่แทบไม่มี precedent มาก่อนในวงการ K-pop — และการเข้าร่วมงานครบรอบ 10 ปีปี 2026 แบบเต็มตัว สร้าง structural divide ในแฟนด้อม — SM ใช้กลยุทธ์ที่ทำให้ทั้ง "James กลับมา" และ "James ไม่อยู่" ต่างก็สร้าง engagement สูงพอกัน แฟนคลับแบ่งเป็นสองกลุ่มพอๆ กัน: ฝ่ายที่ต้อนรับ James และมองดีลปี 2024 เป็นการพิสูจน์ว่าจุดยืนปี 2023 ของเขาถูกต้อง กับฝ่ายที่มองว่า James ดึง spotlight ออกจากวงอยู่ดีไม่ว่าเงื่อนไขจะเป็นแบบไหน',
      outcome: 'ยังคง ongoing และเป็น chronic tension ทุก NCT 127 release ที่มีหรือไม่มี James จะมีกระแสสูงผิดปกติเสมอ SM ยังไม่มีท่าทีแก้ปัญหาอย่างเป็นระบบ',
    },
    {
      period: '2024–2025',
      title: 'Hanni (NewJeans) — ความลับที่รู้กันทั่ว',
      category: 'personal',
      severity: 'low',
      status: 'faded',
      body: 'แหล่งข่าวใกล้ชิดยืนยันว่า James กับ Hanni คบกันช่วงสั้นๆ ทั้งสองฝ่ายเลือกไม่เปิดเผย ข่าวลือที่โผล่บนโซเชียลช่วง CAN\'T LEAVE ALONE ปี 2025 ถูกอธิบายว่าเป็นแค่การกดไลก์กดตอบกันตามปกติ แต่คนในวงการมองว่าเป็นคำอธิบายบังหน้า และมีการถกเรื่องช่วงอายุในแฟนด้อมอยู่พักหนึ่ง',
      outcome: 'สิ้นสุดก่อน James ประกาศความสัมพันธ์กับ Ashley Liao ไม่มีการยืนยันอย่างเป็นทางการจากทุกฝ่าย',
    },
    {
      period: '2025',
      title: 'ความขัดแย้งไทย–กัมพูชา & กระแสตีกลับชาตินิยม',
      category: 'political',
      severity: 'high',
      status: 'ongoing',
      body: 'เมื่อความตึงเครียดชายแดนไทย-กัมพูชาปะทุขึ้น James ออกแถลงการณ์เรียกร้องสันติภาพและการเจรจา — ขัดกับกระแสชาตินิยมไทยในช่วงนั้นโดยตรง ผลลัพธ์รุนแรงที่สุดในอาชีพ: backlash หนักบนโซเชียล มีการตัด lightstick และเผา merchandise เชิงสัญลักษณ์ แฟนคลับไทยลดลงอย่างมีนัยสำคัญ James หยุดกิจกรรมทุกประเภทในไทย — ไม่มีทัวร์, ไม่มีโปรโมท, ไม่กล่าวถึงประเทศไทยในสื่อ และเขา**ปฏิเสธที่จะขอโทษ**: ถือว่าจุดยืนไม่เอาสงครามเป็นหลักการที่ต่อรองไม่ได้ และพูดย้ำทุกครั้งที่มีโอกาส แม้จะแลกด้วยตลาดบ้านเกิด เมื่อทัวร์ REDLINE ของ NCT 127 ปี 2026 มาถึงกรุงเทพ (31 ต.ค. – 1 พ.ย. 2026) James ไม่ร่วมโชว์ — เป็นครั้งแรกที่เขาขาดการแสดงในประเทศตัวเอง และเป็นสัญลักษณ์ชัดที่สุดของการเหินห่างที่เขาเลือกเอง ไม่ยอมซื้อคืนด้วยการกลับคำ สำหรับศิลปินสาย peace-first ที่ไม่มี scandal ส่วนตัวเลย นี่คือแผลจริงแผลเดียวที่ยังค้างอยู่',
      outcome: 'ยังไม่จบ James ไม่กลับไทยตั้งแต่นั้น และไม่มีสัญญาณคืนดี ฐานแฟนไทยหายไปอย่างถาวร แต่ยังใหญ่พอสำหรับป็อปสตาร์ระดับโลก',
    },
    {
      period: '2025–ปัจจุบัน',
      title: 'แถลงการณ์ US–Iran & กระแสตีกลับจากผู้ชมอเมริกัน',
      category: 'political',
      severity: 'medium',
      status: 'ongoing',
      body: 'James ออกแถลงการณ์เรียกร้องให้ลดระดับความขัดแย้งระหว่างสหรัฐฯ กับอิหร่าน ในช่วงที่เขาย้ายไปอยู่อเมริกาแล้ว จึงถูกคนดูอเมริกันบางส่วนด่าว่า "ไม่รู้จักบุญคุณประเทศที่ให้โอกาส" และ "ศิลปินต่างชาติไม่ควรมาออกความเห็นเรื่องนโยบายต่างประเทศของสหรัฐฯ" สื่ออนุรักษนิยมบางสำนักหยิบไปเป็นกรณีตัวอย่าง',
      outcome: 'ยังไม่จบ James ไม่ถอนแถลงการณ์ ฐานแฟนสายก้าวหน้าในอเมริกาตอบรับดี ขณะที่กระแสหลักส่วนหนึ่งยังวิจารณ์อยู่',
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
