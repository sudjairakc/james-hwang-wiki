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
    subtitle: 'SM Entertainment · 2022–2023 · Settled April 27, 2023',
    introHtml:
      'In late 2022, James Hwang initiated legal proceedings against SM Entertainment over creative rights and financial transparency, culminating in a settlement that granted full IP ownership and enabled the founding of <a href="%L%company" style="color:var(--gold)">JH Company</a>. The case became a landmark reference point for artist rights in K-pop. See the <a href="%L%timeline" style="color:var(--gold)">career timeline</a> for the full chronology of events.',
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
      period: 'Late February 2023',
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
    subtitle: 'SM Entertainment · 2022–2023 · ตกลงกันได้เมื่อ 27 เมษายน 2023',
    introHtml:
      'ปลายปี 2022 James Hwang ยื่นดำเนินคดีทางกฎหมายต่อ SM Entertainment ในประเด็นสิทธิ์ความคิดสร้างสรรค์และความโปร่งใสทางการเงิน จนนำไปสู่การ settle ที่มอบกรรมสิทธิ์ IP เต็มรูปแบบและเปิดทางให้ก่อตั้ง <a href="%L%company" style="color:var(--gold)">JH Company</a> คดีนี้กลายเป็นจุดอ้างอิงสำคัญด้านสิทธิ์ศิลปินใน K-pop ดู <a href="%L%timeline" style="color:var(--gold)">ไทม์ไลน์อาชีพ</a> สำหรับลำดับเหตุการณ์ฉบับเต็ม',
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
      period: 'ปลายกุมภาพันธ์ 2023',
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
