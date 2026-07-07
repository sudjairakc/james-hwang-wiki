// Bilingual content for the Rivalries & Tensions page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Names, companies, dates, hex colors, and enum values (type/status/severity
// keys) are kept identical across both languages on purpose. Direct quotes
// are kept verbatim in their original language in both en and th.

import type { Lang } from '../../i18n';

export type RivalryType = 'industry' | 'political' | 'celebrity' | 'institutional' | 'fandom';
export type Status = 'ongoing' | 'cold' | 'resolved' | 'periodic';
export type Severity = 'high' | 'medium' | 'low';

// Shared — colors, referenced by markup (not language-specific).
export const typeColors: Record<RivalryType, string> = {
  industry:      '#c9a84c',
  political:     '#5a7aaa',
  celebrity:     '#c06080',
  institutional: '#9b7fc8',
  fandom:        '#5a7c6a',
};

export const statusColors: Record<Status, string> = {
  ongoing:  '#fb923c',
  cold:     'var(--text-muted)',
  resolved: '#4ade80',
  periodic: '#facc15',
};

const en = {
  ui: {
    label: 'Biography',
    title: 'Rivalries & Tensions',
    subtitle: 'Industry · Political · Celebrity · Institutional · Fanwars · 2023–present',
    tensionsHeading: 'Individual & Institutional Tensions',
    fanwarsHeading: 'Fan Wars',
    originLabel: 'Origin',
    dynamicLabel: 'Dynamic',
    impactLabel: 'Career Impact',
    sidesLabel: 'Sides:',
    triggerLabel: 'Trigger:',
    typeLabels: {
      industry: 'Industry',
      political: 'Political',
      celebrity: 'Celebrity',
      institutional: 'Institutional',
      fandom: 'Fandom',
    } as Record<RivalryType, string>,
    statusLabels: {
      ongoing: 'Ongoing',
      cold: 'Cold',
      resolved: 'Resolved',
      periodic: 'Periodic',
    } as Record<Status, string>,
    severityLabels: {
      high: 'high',
      medium: 'medium',
      low: 'low',
    } as Record<Severity, string>,
  },
  related: [
    { label: 'Controversies', slug: 'controversies' },
    { label: 'Fandom', slug: 'fandom' },
    { label: 'Personal Life', slug: 'personal-life' },
    { label: 'Legal', slug: 'legal' },
    { label: 'Public Image', slug: 'public-image' },
  ],
  rivalries: [
    {
      type: 'industry' as RivalryType,
      name: 'DeShawn Rivers',
      role: 'Veteran R&B Artist · Grammy Winner (multiple)',
      status: 'cold' as Status,
      origin: '2024 — Grammy Season',
      body: 'Rivers made a podcast comment that never named James directly: "When a K-pop act wins Best R&B Album, I think we need to have an honest conversation about what that category is for." It landed right before the 2024 Grammy results, and everyone in the industry knew exactly who he meant. James never responded — the silence became a story of its own. After James won, Rivers never once acknowledged it, which fans saw as worse than a direct attack.',
      dynamic: 'Asymmetric — Rivers is the one initiating, James never engages at all, which makes Rivers look petty on his own. The longer it drags on, the worse it looks for Rivers.',
      impact: "A short but intense Grammy backlash wave from Rivers stans hit Gemzen, but James's win flipped the narrative fast. Several outlets cited Rivers's comment as a textbook example of gatekeeping in the R&B industry.",
    },
    {
      type: 'industry' as RivalryType,
      name: 'Kamau Wright',
      role: 'R&B Artist (Gen-Z) · Grammy Nominee',
      status: 'cold' as Status,
      origin: '2024 — Best Progressive R&B Album nomination',
      body: 'Wright was nominated for the same Grammy category as James and lost. Since then he\'s had a pattern of subtly dismissive remarks in interviews — never mentioning James by name, but using lines fans consider "the receipts": phrases like "authentic R&B artists who came up the hard way" and "I don\'t think viral moments should replace real careers," dropped right as James was dominating streaming.',
      dynamic: "An industry rivalry conducted entirely through indirect language — there's never a direct confrontation, but both sides know exactly what's going on, and their fan bases know even better.",
      impact: 'It created a recurring sub-narrative in US media around "K-adjacent artists taking space from emerging Black artists" — a conversation James has never joined directly but keeps getting dragged back into.',
    },
    {
      type: 'political' as RivalryType,
      name: 'Tyler Briggs',
      role: 'Country/Rock Artist · US Nationalist Voice',
      status: 'periodic' as Status,
      origin: '2025–2026 — US–Iran Escalation',
      body: 'Briggs put out flag-waving content during the US–Iran escalation — a "Support our troops 🇺🇸" post that went viral with his conservative base. James posted an anti-war statement the next day, tagging or naming no one, but everyone read it as a response. Briggs fans mass-reported James\'s account and pushed an "ungrateful foreign artist" hashtag onto US trending — Briggs himself has never responded to James directly, not even once.',
      dynamic: "James is already based in the US with an MCU contract at Disney — a genuinely difficult position — but he held his ground anyway, which let Briggs's fans escalate on their own without James supplying any fuel.",
      impact: 'It raised James\'s profile as a "foreign artist who doesn\'t stay quiet" in progressive US media, while costing him some fans in the mainstream conservative bracket.',
    },
    {
      type: 'celebrity' as RivalryType,
      name: 'ดัง พันกร',
      role: 'Thai Actor/Singer · Nationalist Voice, 2025',
      status: 'cold' as Status,
      origin: '2025 — Thailand–Cambodia',
      body: 'At the peak of Thai nationalist sentiment, Dang posted: "An artist who doesn\'t stand with the country in a crisis shouldn\'t call themselves Thai" — no tag on James, but everyone knew instantly. The post was shared hundreds of thousands of times in nationalist groups. Dang became the face of that wave in the entertainment sphere, and the most-cited example of a Thai celebrity positioned directly against James.',
      dynamic: "In the long run James still has a far larger international base; Dang has high local credibility but a much smaller global footprint — this tension hasn't hurt James's main career, but it permanently closed a door in Thailand.",
      impact: 'James never responded to Dang, which made Dang look, to international media, like someone "punching at a person who isn\'t even looking his way." In Thailand, Dang became a hero to the nationalist camp. James\'s Thai fanbase split permanently over this event.',
    },
    {
      type: 'institutional' as RivalryType,
      name: 'SM Entertainment',
      role: 'Former Label · Institutional Friction Persists',
      status: 'ongoing' as Status,
      origin: '2023–present (post-settlement)',
      body: 'The 2023 settlement ended the legal case, but it didn\'t end the institutional friction — SM has shown a recurring pattern fans have picked up on:\n\n① Release Clash — a scandal story tends to drop around every major James release (noticed and tracked by fans)\n\n② Broadcast Gatekeeping — PULSE got limited Korean broadcast; some music shows blocked it with no explanation\n\n③ Fandom Asymmetry — SM doesn\'t restrain Anti-James content on official NCT channels, but removes Anti-NCT content from Gemzen immediately\n\n④ Roster Speculation — there\'s been speculation that JH Company might poach NCT members as their contracts near expiry, but James has flatly denied it, stating JH Company is a single-artist studio that signs no one else — Mark left NCT 127 in 2026 but did not move to JH Company',
      dynamic: "SM has no incentive for James to fail — they still hold a publishing share of the SM-era catalog — but they also have no incentive for him to succeed so much that he overshadows NCT. An unstable equilibrium.",
      impact: "It's background noise that James and JH Company have to factor into every Korea-facing decision. It hasn't escalated back into litigation.",
    },
  ],
  fanwars: [
    {
      name: 'Gemzen vs. ARMY',
      sides: 'James fans ↔ BTS fans',
      trigger: 'Media-driven rivalry narrative with Jungkook',
      period: '2023',
      severity: 'high' as Severity,
      status: 'cold' as Status,
      body: 'Korean and US entertainment media built up a "parallel career trajectory" narrative around James and Jungkook, who went solo around the same time. Both attended SOPA together, both anchor flagship labels, both carry US crossover ambitions — media framed it as a rivalry that neither fanbase asked for. Gemzen vs ARMY trended repeatedly with chart wars, streaming wars, and award-season wars, before clearly cooling off once Jungkook entered mandatory military service in December 2023.',
    },
    {
      name: 'Gemzen Internal: NCT Return Split',
      sides: 'Pro-James NCTzen ↔ Anti-James NCTzen',
      trigger: 'James rejoining NCT 127 in 2024',
      period: '2024–present',
      severity: 'high' as Severity,
      status: 'ongoing' as Status,
      body: 'James\'s return to NCT 127 wasn\'t just good news — it split the fandom into two roughly even camps. Those who welcomed it read it as a redemption arc; those against it felt James "pulled the spotlight away from the members who\'d stayed the whole time." SM leans on this tension for engagement — content with or without James generates comparably high buzz. A chronic war with no sign of ending.',
    },
    {
      name: 'Grammy Backlash Coalition',
      sides: 'Gemzen ↔ US R&B Twitter + DeShawn Rivers stans',
      trigger: 'James winning Best Progressive R&B Album',
      period: '2024',
      severity: 'medium' as Severity,
      status: 'cold' as Status,
      body: 'Right after the Grammy results, the first wave came from a "he took a Grammy from a Black artist" narrative. Gemzen countered with fact-checking and quotes from Black artists praising James. DeShawn Rivers stans were the core of the wave, which ran hot for about 72 hours before fading once James took the stage with an acceptance speech that acknowledged R&B\'s roots directly and honestly.',
    },
    {
      name: 'Thai Fandom Civil War',
      sides: 'Thai Gemzen pro-James ↔ Thai Gemzen nationalist',
      trigger: "Thailand–Cambodia 2025 + James's peace statement",
      period: '2025–present',
      severity: 'high' as Severity,
      status: 'ongoing' as Status,
      body: 'Before 2025, James\'s Thai fanbase was huge. After his peace statement, one faction came out to defend him and broke away from the nationalist wave, while another publicly un-stanned him. The two camps still clash on Thai Twitter periodically — the pro side is regularly attacked as "ขายชาติ" (a national sellout), the anti side is regularly hit back with "ตามกระแสเกลียด" (just riding the hate wave) — a war that has long since outgrown James and become Thai politics in its own right.',
    },
    {
      name: 'Gemzen Internal: Delulu vs. Rational',
      sides: '"Solo stans" / Wife stans ↔ Supportive Gemzen',
      trigger: 'News and relationships involving James and multiple women',
      period: '2023–present',
      severity: 'medium' as Severity,
      status: 'periodic' as Status,
      body: 'James gets linked to women in the news more often than most pop stars at his level — some of it rumor, some of it real but kept quiet. The Delulu faction has a high degree of parasocial attachment and feels "betrayed" every time a story breaks; some have gone as far as doxxing or harassing the women involved. The Rational faction, who support both the music and his personal life, has to keep countering, over and over.\n\nThe flashpoints:\n• 2023 (Karina rumors) — the Delulu faction attacked Karina\'s fansite, sparking the first in-fight\n• 2024 (Hanni connection) — escalated further; some realized it went beyond rumor, and the two sides fought over "how much can we believe"\n• 2026 (Ashley Liao confirmed) — the biggest trigger yet; part of the Delulu faction publicly un-stanned amid the drama\n• The current pattern — any photo of James with any woman, even press or red-carpet shots, sets off a new Delulu narrative and a Rational counter-response — a cycle with no end in sight',
    },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ชีวประวัติ',
    title: 'คู่แข่ง & ความตึงเครียด',
    subtitle: 'อุตสาหกรรม · การเมือง · คนดัง · สถาบัน · Fanwars · 2023–ปัจจุบัน',
    tensionsHeading: 'ความตึงเครียดระดับบุคคล & สถาบัน',
    fanwarsHeading: 'สงครามแฟนด้อม',
    originLabel: 'จุดเริ่มต้น',
    dynamicLabel: 'พลวัต',
    impactLabel: 'ผลกระทบต่ออาชีพ',
    sidesLabel: 'ฝ่าย:',
    triggerLabel: 'ชนวนเหตุ:',
    typeLabels: {
      industry: 'อุตสาหกรรม',
      political: 'การเมือง',
      celebrity: 'คนดัง',
      institutional: 'สถาบัน',
      fandom: 'แฟนด้อม',
    } as Record<RivalryType, string>,
    statusLabels: {
      ongoing: 'ดำเนินอยู่',
      cold: 'สงบ',
      resolved: 'คลี่คลายแล้ว',
      periodic: 'เป็นระยะ',
    } as Record<Status, string>,
    severityLabels: {
      high: 'สูง',
      medium: 'กลาง',
      low: 'ต่ำ',
    } as Record<Severity, string>,
  },
  related: [
    { label: 'ประเด็นดราม่า', slug: 'controversies' },
    { label: 'แฟนด้อม', slug: 'fandom' },
    { label: 'ชีวิตส่วนตัว', slug: 'personal-life' },
    { label: 'กฎหมาย', slug: 'legal' },
    { label: 'ภาพลักษณ์สาธารณะ', slug: 'public-image' },
  ],
  rivalries: [
    {
      type: 'industry' as RivalryType,
      name: 'DeShawn Rivers',
      role: 'ศิลปิน R&B รุ่นใหญ่ · เจ้าของรางวัล Grammy (หลายสมัย)',
      status: 'cold' as Status,
      origin: '2024 — ฤดูกาล Grammy',
      body: 'Rivers ออก podcast comment ที่ไม่เอ่ยชื่อ James โดยตรง: "When a K-pop act wins Best R&B Album, I think we need to have an honest conversation about what that category is for." ก่อนประกาศผล Grammy ปี 2024 ทุกคนในวงการรู้ว่าหมายถึงใคร James ไม่ตอบสักคำ — ความเงียบกลายเป็น story ของตัวเอง หลัง James ชนะ Rivers ไม่ acknowledge สักครั้ง ซึ่งแฟนด้อมมองว่าแย่กว่าการ attack โดยตรง',
      dynamic: 'Asymmetric — Rivers เป็นฝ่าย initiate, James ไม่ engage เลย ทำให้ Rivers ดู petty ฝ่ายเดียว ยิ่งเวลาผ่านยิ่งเสียเปรียบ Rivers เอง',
      impact: 'Grammy backlash wave จาก Rivers stans ต่อ Gemzen รุนแรงช่วงสั้น แต่ชัยชนะของ James ทำให้ narrative พลิกเร็ว นักวิจารณ์หลายสำนักใช้ Rivers comment เป็นตัวอย่างของ gatekeeping ใน R&B industry',
    },
    {
      type: 'industry' as RivalryType,
      name: 'Kamau Wright',
      role: 'ศิลปิน R&B (Gen-Z) · ผู้เข้าชิง Grammy',
      status: 'cold' as Status,
      origin: '2024 — เข้าชิง Best Progressive R&B Album',
      body: 'Wright ถูก nominate Grammy สาขาเดียวกับ James และแพ้ หลังจากนั้นมีประวัติ subtly dismissive ใน interviews — ไม่เคย mention James by name แต่ใช้ถ้อยคำที่ "the receipts exist" ในแฟนด้อม เช่น "authentic R&B artists who came up the hard way" และ "I don\'t think viral moments should replace real careers" ในช่วงที่ James กำลัง dominate streaming',
      dynamic: 'Industry rivalry ที่ดำเนินผ่านถ้อยคำ indirect — ไม่มีการ confront โดยตรง แต่ทั้งสองฝ่ายรู้ดีและ fan bases รู้ดียิ่งกว่า',
      impact: 'สร้าง recurring sub-narrative ในสื่อ US เรื่อง "K-adjacent artists taking space from emerging Black artists" — เป็น conversation ที่ James ไม่เคยเข้าร่วมโดยตรงแต่ถูกพาดพิงซ้ำ',
    },
    {
      type: 'political' as RivalryType,
      name: 'Tyler Briggs',
      role: 'ศิลปิน Country/Rock · เสียงชาตินิยมสหรัฐฯ',
      status: 'periodic' as Status,
      origin: '2025–2026 — สถานการณ์ตึงเครียดสหรัฐฯ-อิหร่าน',
      body: 'Briggs ออก flag-waving content ระหว่าง US–Iran escalation ชุด "Support our troops 🇺🇸" ที่ viral ในฐาน conservative ของเขา James post anti-war statement วันถัดมาโดยไม่ tag หรือ mention ใคร แต่ทุกคนอ่านออก Briggs fans mass-report account ของ James และสร้าง hashtag โจมตีว่า "ungrateful foreign artist" ใน trending US — Briggs เองไม่เคย respond James โดยตรงแม้แต่ครั้งเดียว',
      dynamic: 'James อยู่ในสหรัฐฯ แล้ว มี MCU contract กับ Disney — position ยากมาก แต่เขายังคงจุดยืน ทำให้ Briggs fans escalate เอง โดยไม่มีตัว James เป็นเชื้อเพลิง',
      impact: 'เพิ่ม profile ของ James ในฐานะ "foreign artist who doesn\'t stay quiet" ในสื่อ progressive US ในขณะที่ทำให้ lost fans บางส่วนในกลุ่ม mainstream conservative',
    },
    {
      type: 'celebrity' as RivalryType,
      name: 'ดัง พันกร',
      role: 'นักแสดง/นักร้องไทย · เสียงชาตินิยม 2025',
      status: 'cold' as Status,
      origin: '2025 — ไทย-กัมพูชา',
      body: 'ในช่วงที่กระแสชาตินิยมไทยสูงสุด ดังโพสต์ว่า "ศิลปินที่ไม่ยืนเคียงประเทศในยามวิกฤตก็ไม่ต้องเรียกตัวเองว่าคนไทย" — ไม่ tag James แต่ทุกคนรู้ทันที โพสต์ถูก share ในกลุ่ม nationalist หลักแสนครั้ง ดังเป็น face ของกระแสนี้ใน entertainment sphere กลายเป็นบุคคลที่ถูก cite บ่อยที่สุดเมื่อพูดถึง Thai celebrity ที่ขัดกับ James โดยตรง',
      dynamic: 'ในระยะยาว James ยังคงมีฐานระดับ international ที่ใหญ่กว่ามาก ดังมี local credibility สูงแต่ global footprint เล็กกว่า — tension นี้ไม่ได้ hurt James ใน career หลัก แต่ปิดประตูไทยอย่างถาวร',
      impact: 'James ไม่เคย respond ต่อดัง ทำให้ดังดูเป็นฝ่าย "ตีคนที่ไม่มองมา" ในสายตาสื่อต่างประเทศ ส่วนในไทย ดังกลายเป็น hero ของฝ่ายชาตินิยม แฟนคลับไทยของ James แตกแยกถาวรจาก event นี้',
    },
    {
      type: 'institutional' as RivalryType,
      name: 'SM Entertainment',
      role: 'Former Label · ยังคงมีแรงเสียดทานเชิงสถาบัน',
      status: 'ongoing' as Status,
      origin: '2023–ปัจจุบัน (post-settlement)',
      body: 'Settlement 2023 ยุติคดีความ แต่ไม่ได้ยุติ institutional friction — SM แสดงรูปแบบซ้ำที่สังเกตได้:\n\n① Release Clash — ทุก major James release มีข่าวฉาวถูกปล่อยออกมา (ถูกสังเกตจากแฟนด้อม)\n\n② Broadcast Gatekeeping — PULSE ได้ limited Korean broadcast แต่บาง music shows ถูก block โดยไม่มีคำอธิบาย\n\n③ Fandom Asymmetry — SM ไม่ยับยั้ง Anti-James content ใน NCT official channels แต่ลบ Anti-NCT content จาก Gemzen ทันที\n\n④ Roster Speculation — มีกระแสคาดเดาว่า JH Company อาจดึงสมาชิก NCT เข้าสังกัดเมื่อสัญญาใกล้หมด แต่ James ปฏิเสธชัดเจนว่า JH Company เป็น single-artist studio ไม่รับใครเข้าเลย — Mark ออกจาก NCT 127 ในปี 2026 แต่ไม่ได้ย้ายมา JH Company',
      dynamic: 'SM ไม่มีแรงจูงใจให้ James ล้มเหลว (ยังได้ publishing share จาก SM-era catalog) แต่ก็ไม่มีแรงจูงใจให้สำเร็จมากเกินไปจน overshadow NCT — equilibrium ที่ไม่เสถียร',
      impact: 'เป็น background noise ที่ James และ JH Company ต้องคำนึงถึงในทุก Korea-facing decision ยังไม่มีการ escalate กลับเป็นคดีความ',
    },
  ],
  fanwars: [
    {
      name: 'Gemzen vs. ARMY',
      sides: 'James fans ↔ BTS fans',
      trigger: 'Media rivalry narrative กับ Jungkook',
      period: '2023',
      severity: 'high' as Severity,
      status: 'cold' as Status,
      body: 'สื่อบันเทิงเกาหลีและ US ปั้น "parallel career trajectory" ของ James และ Jungkook ที่ out solo พร้อมกัน ทั้งคู่เคยเรียน SOPA ด้วยกัน, อยู่ flagship label คนละค่าย, มี US crossover ambition — สื่อทำให้เป็น rivalry โดย fan bases ไม่ได้ขอ Gemzen vs ARMY trend หลายรอบ chart war, streaming war, award war ลดลงชัดเจนหลัง Jungkook เข้ารับราชการทหาร ธันวาคม 2023',
    },
    {
      name: 'Gemzen Internal: NCT Return Split',
      sides: 'Pro-James NCTzen ↔ Anti-James NCTzen',
      trigger: 'James กลับร่วม NCT 127 ปี 2024',
      period: '2024–ปัจจุบัน',
      severity: 'high' as Severity,
      status: 'ongoing' as Status,
      body: 'การกลับมาของ James ใน NCT 127 ไม่ใช่แค่ข่าวดี — มันแบ่ง fandom ออกเป็นสองกลุ่มพอๆ กัน ฝ่ายต้อนรับมองว่าเป็น redemption arc, ฝ่ายต่อต้านมองว่า James "ดึง spotlight ออกจากสมาชิกที่อยู่มาตลอด" SM ใช้ tension นี้สร้าง engagement ทุก content ที่มีหรือไม่มี James จะมีกระแสสูงพอกัน เป็น chronic war ที่ไม่มีแนวโน้มจบ',
    },
    {
      name: 'Grammy Backlash Coalition',
      sides: 'Gemzen ↔ US R&B Twitter + DeShawn Rivers stans',
      trigger: 'James ชนะ Best Progressive R&B Album',
      period: '2024',
      severity: 'medium' as Severity,
      status: 'cold' as Status,
      body: 'หลังประกาศผล Grammy wave แรกมาจาก "he took a Grammy from a Black artist" narrative ซึ่ง Gemzen counter ด้วย fact-checking และ quote จากศิลปิน Black ที่ยกย่อง James DeShawn Rivers stans เป็นกลุ่มหลัก wave ร้อนแรงประมาณ 72 ชั่วโมง แล้ว fade เมื่อ James ขึ้นรับรางวัลด้วย speech ที่ acknowledge R&B roots อย่างตรงไปตรงมา',
    },
    {
      name: 'Thai Fandom Civil War',
      sides: 'Gemzen ไทย pro-James ↔ Gemzen ไทย nationalist',
      trigger: 'ไทย-กัมพูชา 2025 + James peace statement',
      period: '2025–ปัจจุบัน',
      severity: 'high' as Severity,
      status: 'ongoing' as Status,
      body: 'ก่อนปี 2025 ฐานแฟนคลับไทยของ James ใหญ่มาก — หลัง peace statement ส่วนหนึ่งออกมา defend James และแยกตัวจาก nationalist wave อีกส่วนหนึ่ง unstan พร้อมประกาศต่อสาธารณะ สองกลุ่มนี้ยังปะทะกันใน Thai Twitter เป็นระยะ ฝ่าย pro มักถูกโจมตีว่า "ขายชาติ" ฝ่าย anti มักถูกตอบโต้ว่า "ตามกระแสเกลียด" — เป็น war ที่เกินเรื่อง James ไปแล้ว กลายเป็นเรื่องการเมืองไทยโดยตรง',
    },
    {
      name: 'Gemzen Internal: Delulu vs. Rational',
      sides: '"Solo stans" / Wife stans ↔ Supportive Gemzen',
      trigger: 'ข่าวและ relationship ของ James กับผู้หญิงหลายคน',
      period: '2023–ปัจจุบัน',
      severity: 'medium' as Severity,
      status: 'periodic' as Status,
      body: 'James มีข่าวกับผู้หญิงบ่อยกว่า pop star ส่วนใหญ่ในระดับเดียวกัน ทั้งที่เป็นข่าวลือและที่เป็นเรื่องจริงแต่ถูกปิด กลุ่ม Delulu faction มี parasocial attachment สูง รู้สึก "ทรยศ" ทุกครั้งที่มีข่าว บางคนไปถึงขั้น doxx หรือ harass บุคคลที่ถูกลือ กลุ่ม Rational faction ที่เชียร์ทั้งดนตรีและชีวิตส่วนตัวต้องออกมา counter ซ้ำๆ\n\nTimeline ที่รุนแรง:\n• 2023 (Karina rumors) — Delulu faction โจมตี Karina fansite, เกิด in-fight ครั้งแรก\n• 2024 (Hanni connection) — รุนแรงขึ้น บางคนรู้ว่ามีมากกว่าข่าวลือ ทำให้สองฝั่งตีกันเรื่อง "เชื่อได้แค่ไหน"\n• 2026 (Ashley Liao confirm) — trigger ใหญ่สุด Delulu บางส่วน unstan พร้อมดราม่า\n• Pattern ปัจจุบัน — ทุกรูปที่ James ถ่ายกับผู้หญิงคนไหน แม้เป็น press หรือ red carpet จะมี Delulu สร้าง narrative ใหม่ และ Rational ต้อง counter เป็น cycle ไม่จบ',
    },
  ],
};

export const rivalries = { en, th };
export function getRivalries(lang: Lang) {
  return rivalries[lang];
}
