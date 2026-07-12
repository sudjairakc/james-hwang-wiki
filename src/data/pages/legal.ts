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
      'In late 2022, James Hwang initiated legal proceedings against SM Entertainment over creative rights and financial transparency, culminating in a settlement that granted full IP ownership and enabled the founding of <a href="%L%company" style="color:var(--gold)">JH Company</a>. What began as an individual contract dispute grew into the reference case for a broader reckoning — triggering a Fair Trade Commission inquiry, a domino of quiet renegotiations at other agencies, and a National Assembly amendment press nicknamed the "Hwang Clause." See the <a href="%L%timeline" style="color:var(--gold)">career timeline</a> for the full chronology of events.',
    outcomeHeading: 'Resolved via mutual settlement',
    issuesHeading: 'Core Issues',
    timelineHeading: 'Timeline',
    aftermathHeading: 'Aftermath',
    severityLabels: { high: 'High', medium: 'Medium' } as Record<string, string>,
  },
  outcome: [
    { label: 'Contract Status', val: 'Terminated April 27, 2023' },
    { label: 'Lawsuits', val: 'Both sides withdrawn' },
    { label: 'Damages', val: 'None claimed' },
    { label: 'SM Statement', val: 'Apology issued · Policy revision promised' },
    { label: 'NCT 127 Status', val: 'Officially departed' },
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
      period: 'March 14, 2023',
      label: 'Mediation round 1 — failed',
      text: 'The first round of mediation failed.',
      status: 'alert',
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
      'ปลายปี 2022 James Hwang ยื่นดำเนินคดีทางกฎหมายต่อ SM Entertainment ในประเด็นสิทธิ์ความคิดสร้างสรรค์และความโปร่งใสทางการเงิน จนนำไปสู่การ settle ที่มอบกรรมสิทธิ์ IP เต็มรูปแบบและเปิดทางให้ก่อตั้ง <a href="%L%company" style="color:var(--gold)">JH Company</a> จากคดีข้อพิพาทส่วนตัวคดีเดียว กลายเป็นจุดเปลี่ยนที่ใหญ่กว่านั้น — ทำให้ Fair Trade Commission เปิดสอบสวน เกิด domino การเจรจาสัญญาเงียบๆ ในค่ายอื่น และมีการแก้กฎหมายที่สื่อเรียกเล่นๆ ว่า "Hwang Clause" ดู <a href="%L%timeline" style="color:var(--gold)">ไทม์ไลน์อาชีพ</a> สำหรับลำดับเหตุการณ์ฉบับเต็ม',
    outcomeHeading: 'ยุติด้วยการ settle ร่วมกัน',
    issuesHeading: 'ประเด็นหลัก',
    timelineHeading: 'ไทม์ไลน์',
    aftermathHeading: 'ผลที่ตามมา',
    severityLabels: { high: 'สูง', medium: 'ปานกลาง' } as Record<string, string>,
  },
  outcome: [
    { label: 'สถานะสัญญา', val: 'ยุติสัญญาเมื่อ 27 เมษายน 2023' },
    { label: 'คดีความ', val: 'ถอนฟ้องทั้งสองฝ่าย' },
    { label: 'ค่าเสียหาย', val: 'ไม่มีการเรียกร้อง' },
    { label: 'แถลงการณ์ SM', val: 'ออกคำขอโทษ · สัญญาปรับปรุงนโยบาย' },
    { label: 'สถานะใน NCT 127', val: 'ออกจากวงอย่างเป็นทางการ' },
    { label: 'ชื่อ GONUNMA', val: 'James Hwang ถือสิทธิ์เต็มจำนวน' },
    { label: 'กิจกรรมในอนาคต', val: 'SM ยืนยันไม่แทรกแซง' },
  ],
  issues: [
    {
      title: 'ช่องโหว่ Album Quota',
      desc: 'เงื่อนไขสัญญาระบุว่าหากจำนวน album quota ไม่ครบ บริษัทสามารถขยายสัญญาได้ ทีมกฎหมายมองว่าการ delay โปรเจกต์ตั้งใจใช้ช่องนี้',
      severity: 'high',
    },
    {
      title: 'ข้อพิพาทความเป็นเจ้าของงานสร้างสรรค์',
      desc: 'SM อ้างว่าเพลงที่ James เขียนเป็น "ทรัพย์สินบริษัท" และสามารถนำไปใช้กับ NCT LAB หรือโปรเจกต์อื่นได้',
      severity: 'high',
    },
    {
      title: 'สิทธิ์ในชื่อ GONUNMA',
      desc: 'SM ยื่น claim ว่าชื่อ GONUNMA ที่ถูกใช้ใน SM release ปี 2016 ตกเป็นทรัพย์สินของบริษัท ทีมกฎหมายของ James โต้แย้งสำเร็จว่าชื่อดังกล่าวมีต้นกำเนิดจากรายการ King of Mask Singer (MBC) ซึ่งเป็น public broadcast — ไม่ใช่ SM branding — ก่อนที่ SM จะนำชื่อนี้มาใช้ใน GONUNMA: LIKE I DO การ claim ของ SM ถูกถอนในข้อตกลง',
      severity: 'medium',
    },
    {
      title: 'ถ้อยคำเลือกปฏิบัติ',
      desc: 'บันทึกเสียงการประชุมมีถ้อยคำลักษณะกดทับ: "foreign members should be mindful of their position" และ "ตลาดเกาหลีตอบสนองต่างออกไปกับภาพลักษณ์บางแบบ"',
      severity: 'high',
    },
    {
      title: 'ความไม่เท่าเทียมด้านการโปรโมต',
      desc: 'บทบาทด้านร้องของ Kim Doyoung เพิ่มขึ้นต่อเนื่องตั้งแต่ยุค Regular ขณะที่ส่วนแบ่งท่อนร้องของ James ลดลง แม้ไม่มีหลักฐานความขัดแย้งส่วนตัว',
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
      period: '14 มีนาคม 2023',
      label: 'Mediation round 1 — failed',
      text: 'ไกล่เกลี่ยรอบแรกไม่สำเร็จ',
      status: 'alert',
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
      label: 'ก่อตั้งองค์กรสิทธิ idol',
      text: 'James กลายเป็นผู้ร่วมก่อตั้งองค์กร advocacy ที่รวมศิลปินที่ได้รับผลกระทบและนักกฎหมายด้าน entertainment เพื่อสนับสนุน idol ที่เจอข้อพิพาทสัญญา — เปลี่ยนจากการเป็น precedent รายบุคคล เป็นแรงผลักดันการปฏิรูปแบบมีองค์กรรองรับ',
      status: 'resolved',
    },
  ],
  aftermath: [
    {
      title: 'การตอบสนองของ Lee Taeyong',
      text: 'โพสต์ข้อความผ่านโซเชียลมีเดียแสดงความเสียใจที่ไม่สามารถช่วยเหลือได้มากพอ โดยไม่มีการกล่าวถึงรายละเอียดคดี สมาชิกคนอื่นไม่ออกความเห็นอย่างเป็นทางการ',
    },
    {
      title: 'การเปลี่ยนช่องทางสื่อสารกับแฟน',
      text: 'หลังออกจากสังกัด ยุติแฟนไซน์แบบดั้งเดิม (album-linked) เปลี่ยนเป็น Weverse ต่อเนื่องแทน อ้างว่าไม่ทราบภาระค่าใช้จ่ายของแฟนคลับก่อนหน้านี้',
    },
    {
      title: 'ผลกระทบต่อวงการ',
      text: 'กรณีนี้สะท้อนโครงสร้างสัญญาและอำนาจการบริหารใน K-pop โดยเฉพาะวงขนาดใหญ่ที่มีหลายยูนิต การใช้ช่องทางกฎหมายควบคู่กับการเปิดเผยข้อมูลผ่านสื่อทำให้เขาสามารถยุติสัญญาได้โดยไม่เสียเปรียบ และกลายเป็นกรณีศึกษาที่ถูกจับตาในวงการ',
    },
    {
      title: 'ผลกระทบด้านกฎหมายและกฎระเบียบ',
      text: 'นอกเหนือจากการ settle ของตัวเอง คดีนี้ทำให้ Fair Trade Commission เปิดสอบสวนทั้งวงการ และ National Assembly แก้กฎหมายสัญญา — เป็นกรณีหายากที่ข้อพิพาทของศิลปิน K-pop คนเดียวเปลี่ยนกฎระเบียบทั้งอุตสาหกรรม ไม่ใช่แค่จบแบบส่วนตัว',
    },
    {
      title: 'สารคดีและการรับรู้ในวงกว้าง',
      text: 'สารคดีเกี่ยวกับคดีนี้ไปถึงผู้ชมนอกวง K-pop ทำให้คดีนี้ — และตัว James เอง — เป็นที่รู้จักในกลุ่มผู้ชมข่าวบันเทิงทั่วไปเป็นครั้งแรก ก่อนกระแส crossover ยุค Grammy ที่ตามมา',
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
