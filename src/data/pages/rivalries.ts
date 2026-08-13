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
  fandom:        '#9b7fc8',
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
      origin: '2025 — Grammy Season',
      body: 'Rivers made a podcast comment that never named James directly: "When a K-pop act wins Best R&B Album, I think we need to have an honest conversation about what that category is for." It landed right before the 2025 Grammy results, and everyone in the industry knew exactly who he meant. James never responded — the silence became a story of its own. After James won, Rivers never once acknowledged it, which fans saw as worse than a direct attack.',
      dynamic: 'Asymmetric — Rivers is the one initiating, James never engages at all, which makes Rivers look petty on his own. The longer it drags on, the worse it looks for Rivers.',
      impact: "A short but intense Grammy backlash wave from Rivers stans hit Gemzen, but James's win flipped the narrative fast. Several outlets cited Rivers's comment as a textbook example of gatekeeping in the R&B industry.",
    },
    {
      type: 'industry' as RivalryType,
      name: 'Kamau Wright',
      role: 'R&B Artist (Gen-Z) · Grammy Nominee',
      status: 'cold' as Status,
      origin: '2025 — Best Progressive R&B Album nomination',
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
      body: 'The 2023 settlement ended the legal case, but it didn\'t end the institutional friction — SM has shown a recurring pattern fans have picked up on:\n\n① Release Clash — a scandal story tends to drop around every major James release (noticed and tracked by fans)\n\n② Broadcast Gatekeeping — the settlement ruled out a formal blacklist, and PULSE did get Korean broadcast, but only selectively: a handful of music shows passed on it without explanation\n\n③ Fandom Asymmetry — SM doesn\'t restrain Anti-James content on official NCT channels, but removes Anti-NCT content from Gemzen immediately\n\n④ Roster Speculation — there\'s been speculation that JH Company might poach NCT members as their contracts near expiry, but James has flatly denied it, stating JH Company is a single-artist studio that signs no one else — Mark left NCT 127 in April 2026 but did not move to JH Company',
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
      origin: '2025 — ฤดูกาล Grammy',
      body: 'Rivers ออก podcast comment ที่ไม่เอ่ยชื่อ James โดยตรง: "When a K-pop act wins Best R&B Album, I think we need to have an honest conversation about what that category is for." ก่อนประกาศผล Grammy ปี 2025 ทุกคนในวงการรู้ว่าหมายถึงใคร James ไม่ตอบสักคำ และความเงียบนั้นกลายเป็นข่าวในตัวเอง หลัง James ชนะ Rivers ก็ไม่เคยเอ่ยถึงเลยแม้ครั้งเดียว ซึ่งแฟนด้อมมองว่าแย่กว่าการโจมตีตรงๆ',
      dynamic: 'ไม่สมมาตร Rivers เป็นฝ่ายเริ่ม ส่วน James ไม่รับมุกเลย ทำให้ Rivers ดูใจแคบอยู่ฝ่ายเดียว และยิ่งเวลาผ่านไป Rivers ก็ยิ่งเสียเปรียบ',
      impact: 'แฟน Rivers ถล่ม Gemzen หนักช่วงประกาศ Grammy แต่ชัยชนะของ James ทำให้เรื่องพลิกเร็ว นักวิจารณ์หลายสำนักหยิบคำพูดของ Rivers ไปเป็นตัวอย่างของการกันคนนอกออกจากวงการ R&B',
    },
    {
      type: 'industry' as RivalryType,
      name: 'Kamau Wright',
      role: 'ศิลปิน R&B (Gen-Z) · ผู้เข้าชิง Grammy',
      status: 'cold' as Status,
      origin: '2025 — เข้าชิง Best Progressive R&B Album',
      body: 'Wright เข้าชิง Grammy สาขาเดียวกับ James แล้วแพ้ หลังจากนั้นก็มีประวัติพูดเปรยๆ ดูแคลนในบทสัมภาษณ์ ไม่เคยเอ่ยชื่อ James ตรงๆ แต่ใช้คำที่แฟนด้อมเก็บหลักฐานไว้หมด เช่น "authentic R&B artists who came up the hard way" และ "I don\'t think viral moments should replace real careers" ในช่วงที่ James กำลังครองยอดสตรีม',
      dynamic: 'เป็นการแข่งกันในวงการที่เดินผ่านคำพูดอ้อมๆ ไม่มีใครปะทะกันตรงๆ แต่ทั้งสองฝ่ายรู้กันดี และแฟนของทั้งคู่รู้ดียิ่งกว่า',
      impact: 'ทำให้สื่ออเมริกันหยิบประเด็นเดิมขึ้นมาซ้ำๆ ว่าศิลปินสาย K-pop เข้ามาแย่งที่ของศิลปินผิวดำรุ่นใหม่ เป็นบทสนทนาที่ James ไม่เคยเข้าร่วมเองแต่ถูกพาดพิงตลอด',
    },
    {
      type: 'political' as RivalryType,
      name: 'Tyler Briggs',
      role: 'ศิลปิน Country/Rock · เสียงชาตินิยมสหรัฐฯ',
      status: 'periodic' as Status,
      origin: '2025–2026 — สถานการณ์ตึงเครียดสหรัฐฯ-อิหร่าน',
      body: 'Briggs ปล่อยคอนเทนต์ปลุกใจรักชาติช่วงสหรัฐฯ กับอิหร่านตึงเครียด ชุด "Support our troops 🇺🇸" ที่ไวรัลในกลุ่มอนุรักษนิยมของเขา วันถัดมา James โพสต์แถลงการณ์ต้านสงครามโดยไม่แท็กหรือเอ่ยถึงใคร แต่ทุกคนอ่านออก แฟนของ Briggs ระดมกันรีพอร์ตบัญชีของ James และปั่นแฮชแท็กโจมตีว่าเป็นศิลปินต่างชาติที่ไม่รู้จักบุญคุณ ขึ้นเทรนด์ในอเมริกา ส่วน Briggs เองไม่เคยตอบ James ตรงๆ เลยแม้ครั้งเดียว',
      dynamic: 'James ย้ายไปอยู่อเมริกาแล้วและมีสัญญา MCU กับ Disney ตำแหน่งของเขาจึงลำบากมาก แต่เขาก็ยังยืนจุดยืนเดิม ทำให้แฟนของ Briggs เร่งเรื่องกันเอง โดยไม่มี James เป็นเชื้อไฟให้',
      impact: 'ทำให้สื่อสายก้าวหน้าในอเมริกาจำเขาในฐานะศิลปินต่างชาติที่ไม่ยอมเงียบ แต่ก็ทำให้เสียแฟนบางส่วนในกลุ่มอนุรักษนิยมกระแสหลัก',
    },
    {
      type: 'celebrity' as RivalryType,
      name: 'ดัง พันกร',
      role: 'นักแสดง/นักร้องไทย · เสียงชาตินิยม 2025',
      status: 'cold' as Status,
      origin: '2025 — ไทย-กัมพูชา',
      body: 'ช่วงที่กระแสชาตินิยมไทยพุ่งสูงสุด ดังโพสต์ว่า "ศิลปินที่ไม่ยืนเคียงประเทศในยามวิกฤตก็ไม่ต้องเรียกตัวเองว่าคนไทย" ไม่ได้แท็ก James แต่ทุกคนรู้ทันที โพสต์ถูกแชร์ในกลุ่มชาตินิยมหลักแสนครั้ง ดังกลายเป็นหน้าตาของกระแสนี้ในวงการบันเทิง และเป็นคนที่ถูกอ้างถึงบ่อยที่สุดเวลาพูดถึงคนบันเทิงไทยที่ยืนตรงข้ามกับ James',
      dynamic: 'ในระยะยาว James ยังมีฐานแฟนระดับโลกที่ใหญ่กว่ามาก ดังมีน้ำหนักในไทยสูงแต่ฐานนอกประเทศเล็กกว่า ความตึงเครียดนี้ไม่กระทบอาชีพหลักของ James แต่ปิดประตูไทยของเขาอย่างถาวร',
      impact: 'James ไม่เคยตอบดังเลย ทำให้ในสายตาสื่อต่างประเทศ ดังดูเหมือนคนที่เอาแต่ตีคนที่ไม่มองมา ส่วนในไทย ดังกลายเป็นฮีโร่ของฝ่ายชาตินิยม และแฟนไทยของ James ก็แตกแยกอย่างถาวรจากเหตุการณ์นี้',
    },
    {
      type: 'institutional' as RivalryType,
      name: 'SM Entertainment',
      role: 'Former Label · ยังคงมีแรงเสียดทานเชิงสถาบัน',
      status: 'ongoing' as Status,
      origin: '2023–ปัจจุบัน (post-settlement)',
      body: 'Settlement 2023 ยุติคดีความ แต่ไม่ได้ยุติ institutional friction — SM แสดงรูปแบบซ้ำที่สังเกตได้:\n\n① Release Clash — ทุก major James release มีข่าวฉาวถูกปล่อยออกมา (ถูกสังเกตจากแฟนด้อม)\n\n② Broadcast Gatekeeping — settlement ตัดเรื่อง blacklist ทางการออกไป และ PULSE ได้ออกอากาศในเกาหลีจริง แต่แบบเลือกช่อง — บาง music shows ไม่รับโดยไม่มีคำอธิบาย\n\n③ Fandom Asymmetry — SM ไม่ยับยั้ง Anti-James content ใน NCT official channels แต่ลบ Anti-NCT content จาก Gemzen ทันที\n\n④ Roster Speculation — มีกระแสคาดเดาว่า JH Company อาจดึงสมาชิก NCT เข้าสังกัดเมื่อสัญญาใกล้หมด แต่ James ปฏิเสธชัดเจนว่า JH Company เป็น single-artist studio ไม่รับใครเข้าเลย — Mark ออกจาก NCT 127 ในเดือนเมษายน 2026 แต่ไม่ได้ย้ายมา JH Company',
      dynamic: 'SM ไม่มีเหตุผลที่จะอยากให้ James ล้มเหลว เพราะยังได้ส่วนแบ่ง publishing จากผลงานยุค SM แต่ก็ไม่มีเหตุผลที่จะอยากให้เขาดังจนกลบ NCT เป็นจุดสมดุลที่ไม่มั่นคง',
      impact: 'เป็นเสียงรบกวนพื้นหลังที่ James และ JH Company ต้องคิดถึงในทุกการตัดสินใจที่เกี่ยวกับเกาหลี แต่ยังไม่เคยลุกลามกลับไปเป็นคดีความ',
    },
  ],
  fanwars: [
    {
      name: 'Gemzen vs. ARMY',
      sides: 'James fans ↔ BTS fans',
      trigger: 'สื่อปั้นให้เป็นคู่แข่งกับ Jungkook',
      period: '2023',
      severity: 'high' as Severity,
      status: 'cold' as Status,
      body: 'สื่อบันเทิงทั้งเกาหลีและอเมริกาปั้นเรื่องเส้นทางอาชีพที่วิ่งขนานกันของ James กับ Jungkook ที่ออกงานเดี่ยวพร้อมกัน ทั้งคู่เคยเรียน SOPA ด้วยกัน อยู่วงเรือธงของค่ายคนละค่าย และตั้งใจข้ามไปตลาดอเมริกาเหมือนกัน สื่อจับมาเป็นคู่แข่งกันเองโดยที่แฟนไม่ได้ขอ Gemzen กับ ARMY ขึ้นเทรนด์ชนกันหลายรอบ ทั้งศึกชาร์ต ศึกยอดสตรีม และศึกรางวัล ทุกอย่างซาลงชัดเจนหลัง Jungkook เข้ารับราชการทหารเดือนธันวาคม 2023',
    },
    {
      name: 'Gemzen Internal: NCT Return Split',
      sides: 'Pro-James NCTzen ↔ Anti-James NCTzen',
      trigger: 'James กลับร่วม NCT 127 ปี 2024',
      period: '2024–ปัจจุบัน',
      severity: 'high' as Severity,
      status: 'ongoing' as Status,
      body: 'การกลับมาของ James ใน NCT 127 ไม่ใช่แค่ข่าวดี มันแบ่งแฟนด้อมออกเป็นสองฝ่ายเกือบครึ่งต่อครึ่ง ฝ่ายต้อนรับมองว่าเป็นการกลับมาไถ่คืน ฝ่ายต่อต้านมองว่าเขามาดึงสปอตไลต์ออกจากสมาชิกที่อยู่มาตลอด SM ก็ใช้ความตึงเครียดนี้ปั่นกระแส คอนเทนต์ทุกชิ้นไม่ว่าจะมีหรือไม่มี James ก็มีคนพูดถึงเยอะพอกัน เป็นสงครามเรื้อรังที่ยังไม่มีแนวโน้มจบ',
    },
    {
      name: 'Grammy Backlash Coalition',
      sides: 'Gemzen ↔ US R&B Twitter + DeShawn Rivers stans',
      trigger: 'James ชนะ Best Progressive R&B Album',
      period: '2024',
      severity: 'medium' as Severity,
      status: 'cold' as Status,
      body: 'หลังประกาศผล Grammy คลื่นแรกมาจากข้อกล่าวหาว่าเขาแย่งรางวัลไปจากศิลปินผิวดำ ซึ่ง Gemzen สวนกลับด้วยการตรวจข้อเท็จจริงและยกคำพูดของศิลปินผิวดำที่ชื่นชม James กลุ่มหลักที่ถล่มคือแฟนของ DeShawn Rivers กระแสร้อนอยู่ราว 72 ชั่วโมงแล้วจางลง เมื่อ James ขึ้นรับรางวัลด้วยสุนทรพจน์ที่ให้เกียรติรากของ R&B อย่างตรงไปตรงมา',
    },
    {
      name: 'Thai Fandom Civil War',
      sides: 'Gemzen ไทย pro-James ↔ Gemzen ไทย nationalist',
      trigger: 'ไทย-กัมพูชา 2025 กับแถลงการณ์เรียกร้องสันติของ James',
      period: '2025–ปัจจุบัน',
      severity: 'high' as Severity,
      status: 'ongoing' as Status,
      body: 'ก่อนปี 2025 ฐานแฟนไทยของ James ใหญ่มาก หลังแถลงการณ์เรียกร้องสันติ ส่วนหนึ่งออกมาปกป้องเขาและแยกตัวจากกระแสชาตินิยม อีกส่วนหนึ่งเลิกตามพร้อมประกาศให้คนอื่นรู้ สองกลุ่มนี้ยังปะทะกันบนทวิตเตอร์ไทยเป็นระยะ ฝ่ายที่หนุนมักถูกด่าว่าขายชาติ ฝ่ายที่ต้านมักถูกสวนว่าตามกระแสเกลียด สงครามนี้เลยเรื่อง James ไปแล้ว กลายเป็นเรื่องการเมืองไทยตรงๆ',
    },
    {
      name: 'Gemzen Internal: Delulu vs. Rational',
      sides: '"Solo stans" / Wife stans ↔ Supportive Gemzen',
      trigger: 'ข่าวความสัมพันธ์ของ James กับผู้หญิงหลายคน',
      period: '2023–ปัจจุบัน',
      severity: 'medium' as Severity,
      status: 'periodic' as Status,
      body: 'James มีข่าวกับผู้หญิงบ่อยกว่าป็อปสตาร์ระดับเดียวกันส่วนใหญ่ ทั้งที่เป็นข่าวลือและที่เป็นเรื่องจริงแต่ถูกปิดไว้ ฝ่ายที่ผูกพันเกินจริงรู้สึกเหมือนถูกทรยศทุกครั้งที่มีข่าว บางคนไปถึงขั้นแฉข้อมูลส่วนตัวหรือคุกคามคนที่ถูกลือ ส่วนฝ่ายที่เชียร์ทั้งงานเพลงและชีวิตส่วนตัวของเขาก็ต้องออกมาสวนซ้ำๆ\n\nTimeline ที่รุนแรง:\n• 2023 (Karina rumors) — Delulu faction โจมตี Karina fansite, เกิด in-fight ครั้งแรก\n• 2024 (Hanni connection) — รุนแรงขึ้น บางคนรู้ว่ามีมากกว่าข่าวลือ ทำให้สองฝั่งตีกันเรื่อง "เชื่อได้แค่ไหน"\n• 2026 (Ashley Liao confirm) — trigger ใหญ่สุด Delulu บางส่วน unstan พร้อมดราม่า\n• Pattern ปัจจุบัน — ทุกรูปที่ James ถ่ายกับผู้หญิงคนไหน แม้เป็น press หรือ red carpet จะมี Delulu สร้าง narrative ใหม่ และ Rational ต้อง counter เป็น cycle ไม่จบ',
    },
  ],
};

export const rivalries = { en, th };
export function getRivalries(lang: Lang) {
  return rivalries[lang];
}
