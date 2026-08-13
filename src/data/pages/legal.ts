// Bilingual content for the Legal (Contract Dispute & Departure) page.
// Shape: { en: {...}, th: {...} } with identical keys.
// In prose HTML, the token %L% is replaced by `${base}${lang}/` at render time.
// Non-translatable values (severity flags, timeline status flags, slugs) are
// kept identical across both languages on purpose.

import type { Lang } from '../../i18n';

const en = {
  ui: {
    label: 'History',
    title: 'Legal',
    heading: 'Contract Dispute & Departure',
    subtitle: 'SM Entertainment · 2022–2023 · Settled April 27, 2023 · Cited in 2023 industry-wide reform',
    introHtml:
      'The dispute with SM Entertainment took shape in late 2022 over creative rights and financial transparency; James Hwang moved it into court in February 2023 with an injunction against his exclusive contract. It ended in a settlement that confirmed every song he had written as his own intellectual property — SM keeps the master rights to the SM-era recordings — and enabled the founding of <a href="%L%company" style="color:var(--gold)">JH Company</a>. What began as an individual contract dispute grew into the reference case for a broader reckoning — triggering a Fair Trade Commission inquiry, a domino of quiet renegotiations at other agencies, and a National Assembly amendment press nicknamed the "Hwang Clause." See the <a href="%L%timeline" style="color:var(--gold)">career timeline</a> for the full chronology of events.',
    outcomeHeading: 'Resolved via mutual settlement',
    issuesHeading: 'Core Issues',
    timelineHeading: 'Timeline',
    aftermathHeading: 'Aftermath',
    structureHeading: 'Cross-Border Legal Structure',
    severityLabels: { high: 'High', medium: 'Medium' } as Record<string, string>,
  },
  outcome: [
    { label: 'Contract Status', val: 'Terminated April 27, 2023' },
    { label: 'Lawsuits', val: 'Both sides withdrawn' },
    { label: 'Damages', val: 'None claimed' },
    { label: 'SM Statement', val: 'Apology issued · Policy revision promised' },
    { label: 'NCT 127 Status', val: 'Departed 2023 · returned as external artist Dec 2024' },
    { label: 'GONUNMA Name', val: 'Full rights retained by James Hwang' },
    { label: 'Future Activity', val: 'SM confirmed no interference' },
  ],
  issues: [
    {
      title: 'Album Quota Loophole',
      desc: 'The contract stipulated that if the album quota wasn\'t met, the company could extend the term — his legal team viewed the project delay as a deliberate use of this loophole.',
      severity: 'high',
    },
    {
      title: 'Creative Ownership Dispute',
      desc: 'SM claimed that songs James had written were "company property" and could be used for NCT LAB or other projects.',
      severity: 'high',
    },
    {
      title: 'GONUNMA Name Rights',
      desc: 'SM claimed that the name GONUNMA, used on its 2016 release, belonged to the company. James\'s legal team successfully argued the name originated from King of Mask Singer (MBC), a public broadcast — not SM branding — predating SM\'s use of it for GONUNMA: LIKE I DO. SM withdrew the claim as part of the settlement.',
      severity: 'medium',
    },
    {
      title: 'Discriminatory Language',
      desc: 'Internal meeting recordings contained discriminatory remarks, including "foreign members should be mindful of their position" and "the Korean market responds differently to certain images."',
      severity: 'high',
    },
    {
      title: 'Promotional Inequality',
      desc: "Kim Doyoung's vocal role increased steadily from the Regular era onward, while James's share of vocal lines declined — though there is no evidence of personal conflict.",
      severity: 'medium',
    },
  ],
  timeline: [
    {
      period: '2016–2018',
      label: 'Pre-dispute era',
      text: 'James debuted in NCT 127, contributing vocals, dance, and songwriting, but was not promoted as a soloist to the same degree as other core members.',
      status: 'neutral',
    },
    {
      period: '2022',
      label: 'Solo debut — project delayed',
      text: 'Released a well-received solo mini album, with a second mini album planned for later that year. Following a leadership restructuring at SM, the project was postponed indefinitely.',
      status: 'warning',
    },
    {
      period: 'Early 2023',
      label: 'Ownership dispute',
      text: 'SM stated that songs James contributed to were "company property," usable for NCT LAB or held in queue behind other members. His legal team viewed this as potentially "stalling to extend the contract" under the album quota clause.',
      status: 'warning',
    },
    {
      period: 'February 2023',
      label: 'Legal action filed',
      text: 'James compiled evidence, including internal meeting recordings containing discriminatory remarks such as "foreign members should be mindful of their position," and filed a court petition for an injunction against the exclusive contract.',
      status: 'alert',
    },
    {
      period: 'Mid-March 2023',
      label: 'SM counter-sues · Dispatch leak',
      text: 'SM Entertainment countersued, citing reputational damage. Simultaneously, Dispatch published excerpts of the recordings, and public discourse began questioning the treatment of foreign artists at the company.',
      status: 'alert',
    },
    {
      period: 'Late March 2023',
      label: 'Mediation round 1 — failed',
      text: 'The first round of mediation failed.',
      status: 'alert',
    },
    {
      period: 'Mid-to-late April 2023',
      label: 'Final mediation — successful',
      text: 'A further round of mediation produced the terms both sides could sign, clearing the way for the settlement at the end of the month.',
      status: 'neutral',
    },
    {
      period: 'April 27, 2023',
      label: 'Settlement reached',
      text: 'Both parties reached a settlement, terminating the contract and withdrawing all lawsuits. SM expressed regret over the inappropriate remarks and stated it would revise its contract policies. James officially ended his membership status in NCT 127.',
      status: 'resolved',
    },
    {
      period: 'Late April 2023',
      label: 'SM share price falls',
      text: 'In the trading sessions following the settlement and the earlier Dispatch leak, SM Entertainment (KOSDAQ: 041510) shares fell noticeably as institutional investors questioned internal governance — moving the story from entertainment pages into business coverage.',
      status: 'alert',
    },
    {
      period: 'May 2023',
      label: 'Fair Trade Commission inquiry opens',
      text: "Korea's Fair Trade Commission opened a sector-wide inquiry into standard idol contract practices, citing the James Hwang case as the immediate trigger — expanding the matter from a single artist's dispute into an industry-wide review.",
      status: 'alert',
    },
    {
      period: 'Mid-2023',
      label: 'Quiet renegotiations elsewhere',
      text: 'Trade press reported that artists at several other major agencies began privately citing the case while renegotiating their own renewal terms. None went public, and no agency confirmed it, but the pattern was widely enough reported to be described as a "domino effect."',
      status: 'neutral',
    },
    {
      period: 'Late 2023',
      label: 'Documentary crossover',
      text: 'A documentary covering the dispute crossed over from K-pop trade press into general entertainment coverage, introducing the case — and James — to audiences outside the K-pop fandom for the first time.',
      status: 'neutral',
    },
    {
      period: 'November 2023',
      label: 'National Assembly cites the case',
      text: 'While passing an amendment to the Popular Culture and Arts Industry Development Act tightening rules on contract-extension loopholes and mandatory disclosure of internal communications during disputes, lawmakers referenced the case directly; press nicknamed the amendment the "Hwang Clause," though it carries no such official name.',
      status: 'resolved',
    },
    {
      period: 'December 2023',
      label: 'Idol-rights advocacy body founded',
      text: 'James became a founding backer of an advocacy body formed by affected artists and entertainment-law advocates to support idols navigating contract disputes — a shift from individual precedent to an organized push for reform.',
      status: 'resolved',
    },
    {
      period: 'December 2024',
      label: 'Return to NCT 127 — negotiated, no new exclusive contract',
      text: 'SM announced that James would resume activity with NCT 127 as an external artist. Legally the settlement stood untouched: no exclusive contract was renewed, JH Company and the post-2023 catalog stayed wholly his, and he chose which dates and releases to join. The two companies co-signed their first rights document since 2023 in April 2026, clearing the DECADE solo re-recordings, and extended the same framework in May 2026 for the group\'s 10th anniversary.',
      status: 'resolved',
    },
  ],
  aftermath: [
    {
      title: 'Lee Taeyong Response',
      text: 'Posted a statement via social media expressing regret at being unable to help more, without commenting on case details. No other members issued an official statement.',
    },
    {
      title: 'Fan Communication Shift',
      text: "After leaving the agency, ended traditional album-linked fan-signs in favor of continuous Weverse engagement, citing that fans' prior costs had gone unaccounted for.",
    },
    {
      title: 'Industry Impact',
      text: 'The case reflects contract structures and management power dynamics in K-pop, particularly for large multi-unit groups. By pairing legal channels with media disclosure, he was able to exit the contract without disadvantage, becoming a closely watched precedent in the industry.',
    },
    {
      title: 'Regulatory and Legislative Fallout',
      text: 'Beyond his own settlement, the case triggered a Fair Trade Commission sector inquiry and a National Assembly contract-law amendment — a rare instance of an individual K-pop artist dispute reshaping industry-wide regulation rather than just resolving privately.',
    },
    {
      title: 'Documentary and Public Awareness',
      text: 'A documentary on the dispute reached audiences well outside the K-pop fandom, making the case — and by extension James himself — known to a general entertainment-news audience for the first time, ahead of his later Grammy-era crossover.',
    },
  ],
  structure: [
    {
      title: 'Immigration Status',
      text: 'James entered Korea on an E-6 (arts & entertainment) visa at debut, moved to an F-2 long-term resident visa over his NCT 127 years, and held F-5 permanent residency by the time of the dispute. That residency — not the SM contract — is what let him keep living and working in Korea independently after the 2023 settlement.',
    },
    {
      title: 'Company Incorporation',
      text: 'JH Company is registered in Seoul as a Korean 주식회사 (jusik-hoesa, a stock corporation). Korean law lets a foreign national wholly own a domestic company, and his F-5 status removed the usual foreign-investment visa hurdle; James holds an 82% controlling stake.',
    },
    {
      title: 'Standing as a Foreign Claimant',
      text: 'Korean courts and the Fair Trade Commission grant standing regardless of nationality, so his single Thai citizenship never limited his right to file the injunction or to benefit from the FTC inquiry. Foreignness featured in the case as a discrimination issue, not as any limit on his legal capacity.',
    },
    {
      title: 'US Entity & Visa',
      text: 'His MCU work and the Disney / Lucasfilm RESONANCE IP run through a US entity and an O-1 "extraordinary ability" visa. The late-2026 relocation moved his primary residence — and the center of his film-side business — to the United States.',
    },
    {
      title: 'Tax Residency',
      text: "He was Korea tax-resident through the SM and solo years — exposed to Korea's high wealth and property taxes, which is why he kept few personal holdings and no property in Thailand — and shifted toward US tax residency after the 2026 move. As a Thai citizen taxed only on income remitted to Thailand, living abroad leaves him limited ongoing Thai exposure.",
    },
    {
      title: 'Path to U.S. Citizenship',
      text: 'After relocating his primary residence to the United States in late 2026, James filed for permanent residency in 2027 — an EB-1 "extraordinary ability" petition backed by his Grammy wins, MCU lead status, and Guinness record. A green card puts naturalization within reach around the early 2030s (or three years out if married to a U.S. citizen). Because the U.S. permits dual nationality he would add American citizenship without renouncing his Thai one — the trade-off being U.S. worldwide-income taxation for life. He carries no U.S. military obligation: the draft is inactive, and he was a non-resident abroad through the Selective Service ages.',
    },
  ],
  related: [
    { label: 'JH Company', slug: 'company' },
    { label: 'Career Timeline', slug: 'timeline' },
    { label: 'Public Image', slug: 'public-image' },
    { label: 'Discography', slug: 'discography' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ประวัติ',
    title: 'กฎหมาย',
    heading: 'ข้อพิพาทสัญญาและการแยกทาง',
    subtitle: 'SM Entertainment · 2022–2023 · ตกลงกันได้เมื่อ 27 เมษายน 2023 · ถูกอ้างอิงในการปฏิรูปทั้งวงการปี 2023',
    introHtml:
      'ข้อพิพาทกับ SM Entertainment เริ่มก่อตัวปลายปี 2022 เรื่องสิทธิ์ในงานที่เขาเขียนและความโปร่งใสทางการเงิน James Hwang นำเรื่องขึ้นศาลในเดือนกุมภาพันธ์ 2023 ด้วยการยื่น injunction ต่อสัญญาผูกขาด และจบลงด้วยการ settle ที่ยืนยันว่าเพลงทุกเพลงที่เขาแต่งเป็นทรัพย์สินทางปัญญาของเขา ส่วน master ของงานที่อัดไว้ยุค SM ยังอยู่กับ SM ข้อตกลงนี้เปิดทางให้เขาตั้ง <a href="%L%company" style="color:var(--gold)">JH Company</a> คดีของคนคนเดียวลงเอยด้วยการเปลี่ยนวงการ: Fair Trade Commission เปิดสอบสวน ค่ายอื่นเจรจาสัญญากันเงียบๆ ตามมาเป็นโดมิโน และมีการแก้กฎหมายที่สื่อตั้งชื่อเล่นให้ว่า "Hwang Clause" ลำดับเหตุการณ์ฉบับเต็มดูได้ที่ <a href="%L%timeline" style="color:var(--gold)">ไทม์ไลน์อาชีพ</a>',
    outcomeHeading: 'ยุติด้วยการ settle ร่วมกัน',
    issuesHeading: 'ประเด็นหลัก',
    timelineHeading: 'ไทม์ไลน์',
    aftermathHeading: 'ผลที่ตามมา',
    structureHeading: 'โครงสร้างกฎหมายข้ามพรมแดน',
    severityLabels: { high: 'สูง', medium: 'ปานกลาง' } as Record<string, string>,
  },
  outcome: [
    { label: 'สถานะสัญญา', val: 'ยุติสัญญาเมื่อ 27 เมษายน 2023' },
    { label: 'คดีความ', val: 'ถอนฟ้องทั้งสองฝ่าย' },
    { label: 'ค่าเสียหาย', val: 'ไม่มีการเรียกร้อง' },
    { label: 'แถลงการณ์ SM', val: 'ออกคำขอโทษ · สัญญาปรับปรุงนโยบาย' },
    { label: 'สถานะใน NCT 127', val: 'ออกจากวงปี 2023 · กลับมาในฐานะ external artist ธ.ค. 2024' },
    { label: 'ชื่อ GONUNMA', val: 'James Hwang ถือสิทธิ์เต็มจำนวน' },
    { label: 'กิจกรรมในอนาคต', val: 'SM ยืนยันไม่แทรกแซง' },
  ],
  issues: [
    {
      title: 'ช่องโหว่ Album Quota',
      desc: 'สัญญาเขียนไว้ว่าถ้ายอดอัลบั้มตามโควตายังไม่ครบ บริษัทต่อสัญญาออกไปได้ ทีมกฎหมายของเขามองว่าการดองโปรเจกต์คือการใช้ช่องนี้โดยเจตนา',
      severity: 'high',
    },
    {
      title: 'ข้อพิพาทความเป็นเจ้าของงานสร้างสรรค์',
      desc: 'SM อ้างว่าเพลงที่ James เขียนเป็น "ทรัพย์สินบริษัท" และสามารถนำไปใช้กับ NCT LAB หรือโปรเจกต์อื่นได้',
      severity: 'high',
    },
    {
      title: 'สิทธิ์ในชื่อ GONUNMA',
      desc: 'SM อ้างสิทธิ์ว่าชื่อ GONUNMA ที่ใช้ในผลงานปี 2016 เป็นทรัพย์สินของบริษัท ทีมกฎหมายของ James โต้แย้งได้ว่าชื่อนี้มาจากรายการ King of Mask Singer ของ MBC ซึ่งออกอากาศเป็นสาธารณะ ไม่ใช่แบรนดิ้งที่ SM คิดขึ้น และมีมาก่อนที่ SM จะเอาไปใช้กับ GONUNMA: LIKE I DO ท้ายที่สุด SM ถอนข้ออ้างนี้ในข้อตกลง',
      severity: 'medium',
    },
    {
      title: 'ถ้อยคำเลือกปฏิบัติ',
      desc: 'บันทึกเสียงการประชุมมีถ้อยคำลักษณะกดทับ: "foreign members should be mindful of their position" และ "ตลาดเกาหลีตอบสนองต่างออกไปกับภาพลักษณ์บางแบบ"',
      severity: 'high',
    },
    {
      title: 'ความไม่เท่าเทียมด้านการโปรโมต',
      desc: 'ไลน์ร้องของ Kim Doyoung เพิ่มขึ้นเรื่อยๆ ตั้งแต่ยุค Regular ขณะที่สัดส่วนของ James ลดลงสวนทาง ทั้งนี้ไม่มีหลักฐานว่ามีความขัดแย้งส่วนตัวระหว่างสองคน',
      severity: 'medium',
    },
  ],
  timeline: [
    {
      period: '2016–2018',
      label: 'Pre-dispute era',
      text: 'James เดบิวต์ใน NCT 127 มีบทบาทด้านร้อง เต้น และแต่งเพลง แต่ไม่ได้รับการโปรโมตเดี่ยวในระดับเดียวกับสมาชิกหลักคนอื่น',
      status: 'neutral',
    },
    {
      period: '2022',
      label: 'Solo debut — project delayed',
      text: 'ปล่อยมินิอัลบั้มเดี่ยวได้รับการตอบรับดี มีแผนมินิอัลบั้มที่ 2 ปลายปี หลังการปรับโครงสร้างผู้บริหาร SM โปรเจกต์ถูกเลื่อนแบบไม่มีกำหนด',
      status: 'warning',
    },
    {
      period: 'ต้นปี 2023',
      label: 'Ownership dispute',
      text: 'SM แจ้งว่าเพลงที่ James มีส่วนร่วมเป็น "ทรัพย์สินของบริษัท" สามารถนำไปใช้ใน NCT LAB ได้ หรือรอคิวหลังสมาชิกอื่น ทีมกฎหมายมองว่าอาจเข้าข่ายการ "ถ่วงเวลาเพื่อยืดสัญญา" ตามเงื่อนไข album quota',
      status: 'warning',
    },
    {
      period: 'กุมภาพันธ์ 2023',
      label: 'Legal action filed',
      text: 'James รวบรวมหลักฐานรวมถึงบันทึกเสียงการประชุมภายใน ซึ่งมีถ้อยคำลักษณะกดทับ เช่น "foreign members should be mindful of their position" ยื่นคำร้องต่อศาลเพื่อระงับสัญญาผูกขาด (injunction)',
      status: 'alert',
    },
    {
      period: 'กลางมีนาคม 2023',
      label: 'SM counter-sues · Dispatch leak',
      text: 'SM Entertainment ฟ้องกลับโดยอ้างความเสียหายต่อชื่อเสียง ขณะเดียวกัน Dispatch เผยแพร่บางส่วนของบันทึกเสียง กระแสสังคมเริ่มตั้งคำถามต่อการปฏิบัติต่อศิลปินต่างชาติ',
      status: 'alert',
    },
    {
      period: 'ปลายเดือนมีนาคม 2023',
      label: 'Mediation round 1 — failed',
      text: 'ไกล่เกลี่ยรอบแรกไม่สำเร็จ',
      status: 'alert',
    },
    {
      period: 'กลาง–ปลายเมษายน 2023',
      label: 'Final mediation — successful',
      text: 'การไกล่เกลี่ยรอบต่อมาได้เงื่อนไขที่ทั้งสองฝ่ายเซ็นได้ เปิดทางไปสู่การ settle ปลายเดือนเดียวกัน',
      status: 'neutral',
    },
    {
      period: '27 เมษายน 2023',
      label: 'Settlement reached',
      text: 'ทั้งสองฝ่ายบรรลุข้อตกลง ยุติสัญญา ถอนฟ้องทั้งหมด SM แสดงความเสียใจต่อถ้อยคำที่ไม่เหมาะสมและระบุว่าจะปรับปรุงนโยบายสัญญา James สิ้นสุดสถานะสมาชิก NCT 127',
      status: 'resolved',
    },
    {
      period: 'ปลายเมษายน 2023',
      label: 'หุ้น SM ร่วง',
      text: 'ในช่วงซื้อขายหลังการ settle และหลัง Dispatch leak ก่อนหน้านี้ หุ้น SM Entertainment (KOSDAQ: 041510) ร่วงลงชัดเจน นักลงทุนสถาบันเริ่มตั้งคำถามเรื่อง governance ภายใน — ทำให้เรื่องนี้ย้ายจากหน้าบันเทิงไปอยู่หน้าธุรกิจ',
      status: 'alert',
    },
    {
      period: 'พฤษภาคม 2023',
      label: 'Fair Trade Commission เปิดสอบสวน',
      text: 'คณะกรรมการการค้าที่เป็นธรรมของเกาหลี (Fair Trade Commission) เปิดการสอบสวนแนวปฏิบัติสัญญา idol ทั้งวงการ โดยอ้างคดีของ James Hwang เป็นจุดเริ่มต้นโดยตรง — ขยายเรื่องจากข้อพิพาทศิลปินคนเดียวเป็นการทบทวนทั้งอุตสาหกรรม',
      status: 'alert',
    },
    {
      period: 'กลางปี 2023',
      label: 'การเจรจาเงียบๆ ในค่ายอื่น',
      text: 'สื่อวงการรายงานว่าศิลปินจากหลายค่ายใหญ่เริ่มอ้างอิงคดีนี้ระหว่างเจรจาสัญญาต่อของตัวเองแบบเงียบๆ ไม่มีใครออกมาพูดเปิดเผย ไม่มีค่ายไหนยืนยัน แต่กระแสนี้ถูกรายงานมากพอจะถูกเรียกว่า "domino effect"',
      status: 'neutral',
    },
    {
      period: 'ปลายปี 2023',
      label: 'สารคดีข้ามวงการ',
      text: 'สารคดีที่พูดถึงคดีนี้ข้ามจากสื่อวงการ K-pop ไปสู่สื่อบันเทิงทั่วไป ทำให้คดีนี้ — และตัว James — เป็นที่รู้จักในกลุ่มผู้ชมนอกวง K-pop เป็นครั้งแรก',
      status: 'neutral',
    },
    {
      period: 'พฤศจิกายน 2023',
      label: 'National Assembly อ้างอิงคดีนี้',
      text: 'ระหว่างผ่านร่างแก้ไข Popular Culture and Arts Industry Development Act ที่เข้มงวดขึ้นเรื่องช่องโหว่การขยายสัญญาและการเปิดเผยบันทึกการสื่อสารภายในระหว่างข้อพิพาท สมาชิกสภาอ้างอิงคดีนี้โดยตรง สื่อเรียกร่างแก้ไขนี้เล่นๆ ว่า "Hwang Clause" แม้จะไม่ใช่ชื่อทางการก็ตาม',
      status: 'resolved',
    },
    {
      period: 'ธันวาคม 2023',
      label: 'ก่อตั้งองค์กรด้านสิทธิไอดอล',
      text: 'James เป็นหนึ่งในผู้ร่วมก่อตั้งองค์กรที่รวมศิลปินซึ่งเคยเจอเรื่องเดียวกันกับนักกฎหมายสายบันเทิง เพื่อช่วยไอดอลที่ติดปัญหาสัญญา จากคดีตัวอย่างของคนคนเดียว กลายเป็นการผลักดันการปฏิรูปที่มีองค์กรหนุนหลัง',
      status: 'resolved',
    },
    {
      period: 'ธันวาคม 2024',
      label: 'กลับวง NCT 127 — เจรจา ไม่มีสัญญาผูกขาดใหม่',
      text: 'SM ประกาศให้ James กลับมาร่วมกิจกรรม NCT 127 ในฐานะ external artist ในทางกฎหมาย settlement เดิมไม่ถูกแตะต้อง: ไม่มีการต่อสัญญาผูกขาด JH Company และ catalog หลังปี 2023 ยังเป็นของเขาทั้งหมด และเขาเลือกเองว่าจะร่วมวันไหนหรือผลงานไหน สองบริษัทร่วมเซ็นเอกสารสิทธิ์ฉบับแรกนับจากปี 2023 ในเดือนเมษายน 2026 เพื่อเคลียร์ solo re-recording ของ DECADE และต่อยอดกรอบเดิมในเดือนพฤษภาคม 2026 สำหรับงานครบรอบ 10 ปีของวง',
      status: 'resolved',
    },
  ],
  aftermath: [
    {
      title: 'การตอบสนองของ Lee Taeyong',
      text: 'โพสต์ข้อความในโซเชียลมีเดียบอกว่าเสียใจที่ช่วยอะไรได้ไม่มากกว่านี้ โดยไม่พูดถึงรายละเอียดคดีเลย สมาชิกคนอื่นไม่ออกความเห็นอย่างเป็นทางการ',
    },
    {
      title: 'การเปลี่ยนช่องทางสื่อสารกับแฟน',
      text: 'หลังออกจากสังกัด เขาเลิกจัดแฟนไซน์แบบผูกกับยอดซื้ออัลบั้ม เปลี่ยนไปคุยกับแฟนผ่าน Weverse แบบต่อเนื่องแทน โดยให้เหตุผลว่าก่อนหน้านี้เขาไม่รู้เลยว่าแฟนต้องแบกค่าใช้จ่ายกันเท่าไหร่',
    },
    {
      title: 'ผลกระทบต่อวงการ',
      text: 'คดีนี้เปิดให้เห็นโครงสร้างสัญญาและอำนาจการบริหารใน K-pop โดยเฉพาะวงใหญ่ที่แตกเป็นหลายยูนิต การเดินสองทางพร้อมกัน — ฟ้องในศาลและเปิดข้อมูลผ่านสื่อ — ทำให้เขายุติสัญญาได้โดยไม่เสียเปรียบ และกลายเป็นกรณีศึกษาที่คนในวงการจับตา',
    },
    {
      title: 'ผลกระทบด้านกฎหมายและกฎระเบียบ',
      text: 'นอกจากจบคดีของตัวเองแล้ว เรื่องนี้ยังทำให้ Fair Trade Commission เปิดสอบสวนทั้งวงการ และสภาเกาหลีแก้กฎหมายเรื่องสัญญา เป็นของหายากที่ข้อพิพาทของศิลปิน K-pop คนเดียวจะเปลี่ยนกฎของทั้งอุตสาหกรรม ไม่ได้จบลงแค่ในระดับส่วนตัว',
    },
    {
      title: 'สารคดีและการรับรู้ในวงกว้าง',
      text: 'สารคดีเรื่องนี้ไปถึงคนดูนอกวง K-pop ทำให้ทั้งคดีและตัว James เป็นที่รู้จักในกลุ่มคนดูข่าวบันเทิงทั่วไปเป็นครั้งแรก ก่อนที่กระแสยุค Grammy จะพาเขาข้ามไปอีกขั้น',
    },
  ],
  structure: [
    {
      title: 'สถานะการเข้าเมือง',
      text: 'James เข้าเกาหลีด้วย visa E-6 (ศิลปะและบันเทิง) ตอนเดบิวต์ เปลี่ยนเป็น F-2 (พำนักระยะยาว) ระหว่างช่วง NCT 127 และถือ F-5 (ถิ่นที่อยู่ถาวร) แล้วตอนเกิดข้อพิพาท สถานะ residency นี้เอง — ไม่ใช่สัญญา SM — ที่ทำให้เขายังอยู่และทำงานในเกาหลีได้อย่างอิสระหลัง settle ปี 2023',
    },
    {
      title: 'การจดทะเบียนบริษัท',
      text: 'JH Company จดทะเบียนที่ Seoul เป็น 주식회사 (jusik-hoesa บริษัทจำกัดแบบเกาหลี) กฎหมายเกาหลีให้คนต่างชาติถือครองบริษัทในประเทศได้ 100% และสถานะ F-5 ตัดเงื่อนไข visa การลงทุนต่างชาติที่ปกติต้องมี James ถือหุ้นควบคุม 82%',
    },
    {
      title: 'สิทธิ์ในฐานะผู้ฟ้องต่างชาติ',
      text: 'ศาลเกาหลีและ Fair Trade Commission ให้สิทธิ์ยื่นฟ้องโดยไม่ขึ้นกับสัญชาติ สัญชาติไทยเดี่ยวของเขาจึงไม่เคยจำกัดสิทธิ์ในการยื่น injunction หรือได้ประโยชน์จากการสอบสวนของ FTC ความเป็นต่างชาติปรากฏในคดีในฐานะประเด็นการเลือกปฏิบัติ ไม่ใช่ข้อจำกัดความสามารถทางกฎหมาย',
    },
    {
      title: 'นิติบุคคลและ visa ฝั่งสหรัฐ',
      text: 'งาน MCU และ IP ของ RESONANCE (Disney / Lucasfilm) ดำเนินผ่านนิติบุคคลในสหรัฐและ visa O-1 ("ความสามารถพิเศษ") การย้ายถิ่นปลายปี 2026 ย้ายที่พำนักหลัก — และศูนย์กลางธุรกิจฝั่งภาพยนตร์ — ไปอยู่ที่สหรัฐ',
    },
    {
      title: 'ถิ่นที่อยู่ทางภาษี',
      text: 'เขาเป็น tax resident เกาหลีตลอดช่วง SM และช่วงเดี่ยว — เจอภาษีความมั่งคั่งและภาษีทรัพย์สินสูงของเกาหลี จึงถือทรัพย์สินส่วนตัวไว้น้อยและไม่มีอสังหาฯ ในไทย — และเลื่อนไปเป็น tax resident สหรัฐหลังย้ายปี 2026 ในฐานะพลเมืองไทยที่ถูกเก็บภาษีเฉพาะเงินที่นำเข้าประเทศไทย การใช้ชีวิตในต่างแดนทำให้ภาระภาษีไทยต่อเนื่องมีจำกัด',
    },
    {
      title: 'เส้นทางสู่สัญชาติสหรัฐ',
      text: 'หลังย้ายที่พำนักหลักไปสหรัฐปลายปี 2026 James ยื่นขอ permanent residency ในปี 2027 — คำร้อง EB-1 "extraordinary ability" โดยอ้าง Grammy, สถานะนำใน MCU และสถิติ Guinness เมื่อได้ green card การขอสัญชาติจะอยู่ในระยะเอื้อมราวต้นทศวรรษ 2030 (หรือ 3 ปีถ้าแต่งกับพลเมืองสหรัฐ) เพราะสหรัฐอนุญาต dual nationality เขาจึงเพิ่มสัญชาติอเมริกันได้โดยไม่ต้องสละสัญชาติไทย แลกกับการถูกเก็บภาษีรายได้ทั่วโลกตลอดชีพ และไม่มีภาระทหารสหรัฐ — ไม่มีการเกณฑ์ และเขาเป็น non-resident อยู่ต่างแดนช่วงอายุ Selective Service',
    },
  ],
  related: [
    { label: 'JH Company', slug: 'company' },
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
    { label: 'ภาพลักษณ์สาธารณะ', slug: 'public-image' },
    { label: 'ผลงานเพลง', slug: 'discography' },
  ],
};

export const legal = { en, th };
export function getLegal(lang: Lang) {
  return legal[lang];
}
