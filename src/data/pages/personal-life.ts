// Bilingual content for the Personal Life page.
// Shape: { en: {...}, th: {...} } with identical keys.

import type { Lang } from '../../i18n';

type QuickFact = { label: string; val: string };

type EducationEntry = {
  period: string;
  institution: string;
  location: string;
  note: string;
};

type RelType = 'confirmed' | 'rumor' | 'private';
type RelEntry = {
  period: string;
  type: RelType;
  name: string;
  detail: string;
};

type FriendGroup = {
  group: string;
  note: string;
  names: string[];
};

type Hobby = {
  category: string;
  detail: string;
};

type Stance = 'vocal' | 'silent' | 'cautious';
type ValueItem = {
  topic: string;
  stance: Stance;
  detail: string;
};

type Severity = 'low' | 'medium' | 'high';
type Incident = {
  period: string;
  title: string;
  severity: Severity;
  body: string;
};

const en = {
  ui: {
    label: 'Biography',
    title: 'Personal Life',
    subtitle: 'Family · Education · Relationships · Values · Social Media · Incidents',
    quickFactsHeading: 'Quick Facts',
    propertiesHeading: 'Properties & Residences',
    primaryBadge: 'Primary (2026–)',
    baseBadge: 'Base (–2026)',
    workspaceBadge: 'Workspace',
    laCity: 'Los Angeles, USA',
    seoulCity: 'Seoul, South Korea',
    hqTitle: 'JH Company HQ + Studio',
    laParagraphHtml:
      'Relocated to the United States as his primary residence in late 2026 — coinciding with the relationship announcement with Ashley Liao and the expansion of the MCU trilogy conclusion. <strong style="color:var(--text)">1 house · 1 personal car</strong> — company vehicles (vans, staff) are managed separately.',
    seoulParagraphHtml:
      'A luxury residence in central Seoul, in the Gangnam district — <strong style="color:var(--text)">1 house · 1 personal car</strong>. South Korea\'s high property and wealth taxes make holding multiple personal assets tax-inefficient. Company vehicles (vans, staff vehicles) are managed separately under JH Company.',
    hqParagraph: 'Headquarters and recording studio — located in Seoul, used for both company administration and personal music production.',
    noPropertyNote: 'No property in Thailand — consistent with his continuous absence from the country since 2025.',
    familyHeading: 'Family Background',
    familyP1Html:
      'His father, <strong>Hwang Chia-ming</strong>, is a Thai-Chinese businessman based in Bangkok. His mother, <strong>Park Soo-yeon</strong>, is a Korean writer and poet who splits her schedule between Seoul and Bangkok. The two met while studying in the United States.',
    familyP2:
      'The two separated when James was in upper primary school (around 2008–2009) — at ages 10–11. Custody wasn\'t a single fixed arrangement: after the divorce he lived primarily with his father in Bangkok through the rest of his schooling, then shifted to living primarily with his mother in Seoul once SM training began in earnest in late 2013. Between his father\'s Thai-Chinese household, his mother\'s Korean side of the family, and an English-medium school in Bangkok, he grew up across four home languages from birth — Thai, Chinese, English, and Korean.',
    familyP3:
      'James rarely discusses his parents\' divorce publicly, but often references "a life split between two cities" as the source of his language ability and adaptability.',
    educationHeading: 'Education',
    relationshipsHeading: 'Relationships',
    relTypeConfirmed: 'Confirmed',
    relTypePrivate: 'Private / Unconfirmed',
    relTypeRumor: 'Rumor',
    relFootnote: '* Entries marked "Private / Unconfirmed" are based on anonymous sources close to the parties involved. There is no official confirmation from the JH Company team.',
    friendsHeading: 'Friendships & Inner Circle',
    hobbiesHeading: 'Hobbies & Interests',
    valuesHeading: 'Values & Public Positions',
    stanceVocal: 'Vocal',
    stanceSilent: 'Silent',
    stanceCautious: 'Cautious',
    incidentsHeading: 'Key Incidents',
    severityLow: 'low',
    severityMedium: 'medium',
    severityHigh: 'high',
  },
  quickFacts: [
    { label: 'Born', val: 'June 22, 1998 · Bangkok, Thailand' },
    { label: 'Heritage', val: 'Thai-Chinese (paternal) · Korean (maternal)' },
    { label: 'Parents', val: 'Hwang Chia-ming (father) · Park Soo-yeon (mother)' },
    { label: 'Status', val: 'Divorced (parents, c. 2008–2009)' },
    { label: 'Citizenship', val: 'Thai · U.S. residency filing (2027–)' },
    { label: 'Residences', val: 'Los Angeles, USA (primary, from late 2026) · Seoul, South Korea (base until 2026)' },
    { label: 'Workspaces', val: 'JH Company HQ + recording studio, Seoul · no property in Thailand' },
    { label: 'Partner', val: 'Ashley Liao (confirmed September 2026)' },
  ] as QuickFact[],
  education: [
    {
      period: '2004–2011',
      institution: 'Primary School (Bangkok)',
      location: 'Bangkok, Thailand',
      note: 'Attended primary school in Bangkok from grade 1 to grade 6, living with his father after his parents separated in 2008–2009. Between his father\'s Thai-Chinese household, his mother\'s Korean side of the family, and English-medium schooling, he spoke four languages from birth — Thai, Chinese, English, and Korean. He traveled to Seoul during summers and long holidays, following his mother\'s schedule as a writer.',
    },
    {
      period: '2011–2013',
      institution: 'Secondary School — Lower (Bangkok)',
      location: 'Bangkok, Thailand',
      note: 'Completed lower secondary school (Mattayom 3) in Thailand in February 2013, just days before the SM Entertainment audition later that same month. He finished lower secondary school in full before relocating to Seoul, with no equivalency exam.',
    },
    {
      period: '2013',
      institution: 'Transition Period',
      location: 'Bangkok → Seoul',
      note: 'In late 2013, he officially moved to Seoul as an SM Rookies trainee, and shifted to living primarily with his mother for the first time since his parents\' separation. During this period he studied Korean intensively and prepared before starting at SOPA.',
    },
    {
      period: '2014–2017',
      institution: 'School of Performing Arts Seoul (SOPA)',
      location: 'Seoul, South Korea',
      note: 'Attended grades 10–12 at SOPA, in the same class as Jeon Jungkook (BTS), alongside several close companions among SM and JYP trainees of the same generation. Graduated on February 7, 2017, five months before the NCT 127 debut.',
    },
  ] as EducationEntry[],
  relationships: [
    {
      period: '2021',
      type: 'rumor',
      name: 'Winter (aespa)',
      detail: 'A fansite-level rumor with no evidence, believed to stem from the two being labelmates and both having distinctive personalities.',
    },
    {
      period: '2023',
      type: 'private',
      name: 'Karina (aespa)',
      detail: 'Sources close to both parties indicate a brief real relationship — both sides and SM\'s team systematically kept it out of the press. There was no official confirmation; public rumors were dismissed with the "labelmates" explanation, the same as with Winter (2021).',
    },
    {
      period: 'Late 2025',
      type: 'rumor',
      name: 'Ashley Liao',
      detail: 'Relationship rumors originating from the Last of the Ten Rings additional-photography block (Oct–Nov 2025), unconfirmed at the time. Later revealed to have been the start of an actual relationship.',
    },
    {
      period: '2024–2025',
      type: 'private',
      name: 'Hanni (NewJeans)',
      detail: 'Sources close to both parties indicate a brief relationship during this period — both sides chose not to disclose it publicly. Buzz that surfaced on social media during the CAN\'T LEAVE ALONE era (2025) was attributed to ordinary social media interaction, but industry sources view that framing as a cover story.',
    },
    {
      period: '2024',
      type: 'rumor',
      name: 'Olivia Rodrigo · Sabrina Carpenter · Hunter Schafer',
      detail: 'Tabloid-level rumors during his US breakthrough period — no evidence from official sources, arising while James was appearing frequently in the American entertainment scene.',
    },
    {
      period: 'Sep 2026',
      type: 'confirmed',
      name: 'Ashley Liao',
      detail: 'Announced via a joint statement from both parties, the same month Shang-Chi and the Last of the Ten Rings was released in theaters. Most fans responded positively, as it was a relationship that had shown signs for a long time.',
    },
  ] as RelEntry[],
  friends: [
    {
      group: 'SOPA (School of Performing Arts Seoul)',
      note: 'His closest group of friends in life — formed during grades 10–12 together. Many are now in the Korean entertainment industry in different roles. These relationships carried him through the hardest period of trainee life and remain the foundation of his personal circle to this day.',
      names: [],
    },
    {
      group: 'NCT 127 — Inner Circle',
      note: 'Within NCT 127, he is closest with Mark Lee, Jung Woo (Jungwoo), and Lee Donghyuck (Haechan) — three members close in age. The bond with Jungwoo runs deepest, as they were born the same year (1998) and carry similar roles within the group.',
      names: ['Mark Lee (1999)', 'Jung Woo / Jungwoo (1998)', 'Lee Donghyuck / Haechan (2000)'],
    },
    {
      group: 'NCT 127 — Lee Taeyong',
      note: 'A different kind of bond from the inner circle above — professional and genuinely warm rather than close-friend intimate. The two go back furthest of anyone in the lineup, paired together in a 2014 pre-debut chemistry showcase, and Taeyong is the member who spoke up publicly during the 2023 contract dispute. That history shows up as mutual respect and reliable support at big moments rather than the day-to-day closeness he has with Mark, Jungwoo, and Haechan.',
      names: ['Lee Taeyong (1995)'],
    },
    {
      group: 'Thailand — Old Friends',
      note: 'His relationships with friends in Thailand are not particularly close today — relocating to Seoul at age 15 and his continuous absence from Thailand since 2025 have steadily widened both physical and emotional distance.',
      names: [],
    },
  ] as FriendGroup[],
  hobbies: [
    {
      category: 'Public Transportation',
      detail: 'Regularly uses public transportation even as an A-lister — trains, buses, the subway (MRT), in both Seoul and Bangkok during periods when he still visited Thailand. It\'s well known among staff that he avoids chartered flights entirely, whether on tour or a press run. He addressed this in 2022–2023, linking it to carbon footprint and climate concerns — always flying commercial, even on tours requiring 30+ flights.',
    },
    {
      category: 'Exercise & Movement',
      detail: 'Exercises every day — including strength training, functional fitness, and tricking, which he has practiced since childhood. The visible physique change between the LIKE I DO era and PULSE era has been read as the result of an intensified training regimen.',
    },
    {
      category: 'Cooking',
      detail: 'Cooks for himself at home regularly — mentioned in several interviews as a "decompression routine" after touring or filming. Frequently mentioned dishes include Thai food, home-style Korean food, and pasta.',
    },
    {
      category: 'Housework & Domestic Routines',
      detail: 'Has spoken positively about housework on several occasions, including on You Quiz on the Block (2022), where he said cleaning helps clear his head. He has no personal staff handling housework and lives alone.',
    },
    {
      category: 'Therapy & Mental Health',
      detail: 'James has an acknowledged workaholic tendency within his close circle — since 2023 he has worked regularly with a therapist, partly linked to leaving SM, the stress of founding his company, and a tendency to overcommit to every project at once. He referenced this indirectly in Esquire Korea (2026), saying "someone helps me recognize when enough is enough — I never knew that on my own." He has never announced it officially, but has not denied it when asked.',
    },
    {
      category: 'Writing',
      detail: 'Has written lyrics and treatments for his own projects since the PULSE era — writing credits have grown steadily from CAN\'T LEAVE ALONE through Shang-Chi and DECADE. He currently holds a co-screenwriting credit on the MCU trilogy.',
    },
  ] as Hobby[],
  values: [
    {
      topic: 'Anti-War / Peace Advocacy — Core Position',
      stance: 'vocal',
      detail: 'A core position he has held throughout his career: he does not support resolving conflict through military force in any context, regardless of who the parties are, and consistently calls for dialogue and peace. This stance was the root cause of his clash with Thai nationalist sentiment (2025) and has periodically created friction with his Hollywood contracts.',
    },
    {
      topic: 'Ukraine–Russia War',
      stance: 'vocal',
      detail: 'Issued a statement calling for an immediate ceasefire in 2022, while still at SM — one of the few times James took a political position outside Thailand during his SM era. The wording was careful and did not name an aggressor, but was clearly anti-war. After leaving SM (2023), his statements became more direct, including condemning attacks on civilians.',
    },
    {
      topic: 'Israel–Gaza / US Military Involvement',
      stance: 'vocal',
      detail: 'One of his highest career-risk positions — issued statements calling for a ceasefire and humanitarian access starting in late 2023, condemning civilian deaths on both sides. His wording avoided the term "genocide" or aligning with either political side, but openly criticized US military support. This created tension with Disney/Marvel, which has a policy of avoiding actors\' political stances. JH Company reportedly had to negotiate with Marvel\'s legal team over this at least once.',
    },
    {
      topic: 'US–Iran Conflict',
      stance: 'vocal',
      detail: 'Responded to escalating US–Iran tensions with a statement calling for de-escalation — emphasizing that military force is not the answer. This stance came while he was already living in the US, drawing criticism from some in America that he was "ungrateful to the country that gave him opportunity."',
    },
    {
      topic: 'Black Lives Matter',
      stance: 'vocal',
      detail: 'Publicly supported BLM starting in 2020 — one of the first K-pop artists to issue a direct statement (not just a repost). This later connected him to a strong African-American fanbase.',
    },
    {
      topic: 'Asian Lives Matter',
      stance: 'vocal',
      detail: 'Responded directly to the anti-Asian hate wave (2021) through a statement and donations, speaking from his position as an Asian person residing in the US during his US promotional period.',
    },
    {
      topic: 'Thai Democracy',
      stance: 'vocal',
      detail: 'Supported the pro-democracy movement in Thailand, with a public record of donations to Thai youth groups in 2020–2021. He said he "feels ideologically close to the Pheu Thai Party" but does not directly endorse any political party.',
    },
    {
      topic: 'One China Policy',
      stance: 'silent',
      detail: 'Has never publicly commented on Taiwan/Tibet/Hong Kong — a conscious silence that critics link to his MCU contracts and the Chinese market. Some fans see this as choosing pragmatism over consistency.',
    },
  ] as ValueItem[],
  incidents: [
    {
      period: 'Feb 2024',
      title: 'Post-PULSE Exhaustion Statement',
      severity: 'low',
      body: 'Immediately after the PULSE World Tour ended (May 2024), which had run for nearly a year (July 28, 2023 – May 30, 2024), James posted a statement via Weverse that he was "utterly exhausted from nonstop travel and performing" and would "take a month to rest" before beginning filming for Shang-Chi 2 in July 2024. The statement was met with concern from fans, but also relief that he spoke candidly about his mental and physical state — something rare in the industry. Not long after, the Grammy campaign for ARE U STILL began.',
    },
    {
      period: '2025',
      title: 'Thai–Cambodia Conflict Fallout',
      severity: 'high',
      body: 'When Thai–Cambodia border tensions flared up in 2025, James issued a statement calling for peace and a negotiated resolution — a position directly at odds with the Thai nationalist sentiment of the time. The result was a severe backlash from Thai social media, including symbolic lightstick-cutting and merchandise burning. Following this incident, James halted all activity in Thailand — no tours, no promotion, no mention of Thailand in the media. His Thai fanbase shrank significantly, though it remains sizable enough for an international pop star.',
    },
    {
      period: '2024–present',
      title: 'NCT 127 Fan Divide',
      severity: 'medium',
      body: 'His first appearance with NCT 127 (as an external artist) in 2024 (the group\'s 8th anniversary) — returning to active group participation from December 2024, then in full for the 2026 10th anniversary — sent shockwaves through the fandom. SM Entertainment\'s strategy of managing both sides — pushing James back into the group while also building tension around it — split the fanbase into roughly two equal camps: those welcoming James back and those opposed. A side effect is that all content featuring James, both within and outside NCT, generates unusually high engagement — both positive and negative — making James a "controversy magnet" that SM has yet to systematically resolve.',
    },
  ] as Incident[],
};

const th: typeof en = {
  ui: {
    label: 'ชีวประวัติ',
    title: 'ชีวิตส่วนตัว',
    subtitle: 'ครอบครัว · การศึกษา · ความสัมพันธ์ · ค่านิยม · โซเชียลมีเดีย · เหตุการณ์สำคัญ',
    quickFactsHeading: 'ข้อมูลโดยย่อ',
    propertiesHeading: 'อสังหาริมทรัพย์และที่พักอาศัย',
    primaryBadge: 'หลัก (2026–)',
    baseBadge: 'ฐาน (–2026)',
    workspaceBadge: 'พื้นที่ทำงาน',
    laCity: 'Los Angeles, USA',
    seoulCity: 'Seoul, South Korea',
    hqTitle: 'JH Company HQ + Studio',
    laParagraphHtml:
      'ย้ายมาอยู่อเมริกาเป็นหลักในช่วงปลายปี 2026 — ตรงกับช่วงที่ประกาศความสัมพันธ์กับ Ashley Liao และขยายงาน MCU trilogy conclusion <strong style="color:var(--text)">1 house · 1 personal car</strong> — รถบริษัท (vans, staff) แยกต่างหาก',
    seoulParagraphHtml:
      'บ้านหรูใจกลางเมือง ย่าน Gangnam — <strong style="color:var(--text)">1 house · 1 personal car</strong> ภาษีทรัพย์สินและภาษีความมั่งคั่งของเกาหลีที่สูงมากทำให้การถือครองสินทรัพย์ส่วนตัวหลายชิ้นไม่คุ้มค่าในทางภาษี รถบริษัท (vans, staff vehicles) บริหารแยกภายใต้ JH Company',
    hqParagraph: 'สำนักงานใหญ่และสตูดิโอบันทึกเสียง — ตั้งอยู่ในโซล ใช้ทั้งงานบริหารและงานผลิตเพลงส่วนตัว',
    noPropertyNote: 'ไม่มีอสังหาริมทรัพย์ในประเทศไทย — สอดคล้องกับการไม่กลับไทยอย่างต่อเนื่องตั้งแต่ปี 2025',
    familyHeading: 'ภูมิหลังครอบครัว',
    familyP1Html:
      'บิดา <strong>Hwang Chia-ming</strong> เป็นนักธุรกิจไทย-จีนที่มีฐานธุรกิจในกรุงเทพฯ มารดา <strong>Park Soo-yeon</strong> เป็นนักเขียนและกวีชาวเกาหลีที่มีตารางงานระหว่างโซลและกรุงเทพฯ ทั้งสองพบกันในช่วงศึกษาต่อที่สหรัฐอเมริกา',
    familyP2:
      'ทั้งสองแยกทางกันในช่วงที่ James อยู่ชั้นประถมปลาย (ประมาณปี 2008–2009) — ในช่วงอายุ 10–11 ขวบ การดูแลไม่ได้ตายตัวแบบเดียว — หลังหย่า เขาอยู่กับบิดาที่กรุงเทพฯ เป็นหลักตลอดช่วงที่เหลือของการเรียน แล้วย้ายไปอยู่กับมารดาที่โซลเป็นหลักตอนเริ่มฝึกกับ SM อย่างจริงจังช่วงปลายปี 2013 ระหว่างครอบครัวฝั่งบิดาที่เป็นไทย-จีน ญาติฝั่งมารดาที่เป็นเกาหลี และโรงเรียนสายอินเตอร์ที่กรุงเทพฯ เขาเติบโตมาพร้อมสี่ภาษาตั้งแต่เกิด — ไทย จีน อังกฤษ และเกาหลี',
    familyP3:
      'James ไม่ค่อยพูดถึงการหย่าร้างของบิดามารดาในที่สาธารณะ แต่อ้างถึง "ชีวิตระหว่างสองเมือง" บ่อยครั้งในฐานะที่มาของความสามารถด้านภาษาและการปรับตัว',
    educationHeading: 'การศึกษา',
    relationshipsHeading: 'ความสัมพันธ์',
    relTypeConfirmed: 'ยืนยันแล้ว',
    relTypePrivate: 'ส่วนตัว / ไม่ยืนยัน',
    relTypeRumor: 'ข่าวลือ',
    relFootnote: '* รายการที่ระบุว่า "ส่วนตัว / ไม่ยืนยัน" อ้างอิงจากแหล่งข่าวใกล้ชิดที่ไม่เปิดเผยชื่อ ไม่มีการยืนยันอย่างเป็นทางการจากทีมงาน JH Company',
    friendsHeading: 'มิตรภาพและคนใกล้ตัว',
    hobbiesHeading: 'งานอดิเรกและความสนใจ',
    valuesHeading: 'ค่านิยมและจุดยืนสาธารณะ',
    stanceVocal: 'แสดงจุดยืน',
    stanceSilent: 'เงียบ',
    stanceCautious: 'ระมัดระวัง',
    incidentsHeading: 'เหตุการณ์สำคัญ',
    severityLow: 'ต่ำ',
    severityMedium: 'ปานกลาง',
    severityHigh: 'สูง',
  },
  quickFacts: [
    { label: 'เกิด', val: '22 มิถุนายน 1998 · กรุงเทพฯ ประเทศไทย' },
    { label: 'เชื้อสาย', val: 'ไทย-จีน (ฝ่ายพ่อ) · เกาหลี (ฝ่ายแม่)' },
    { label: 'บิดามารดา', val: 'Hwang Chia-ming (บิดา) · Park Soo-yeon (มารดา)' },
    { label: 'สถานะ', val: 'หย่าร้าง (บิดามารดา, ราวปี 2008–2009)' },
    { label: 'สัญชาติ', val: 'ไทย · ยื่นขอถิ่นที่อยู่สหรัฐ (2027–)' },
    { label: 'ที่พักอาศัย', val: 'ลอสแอนเจลิส สหรัฐอเมริกา (หลัก ตั้งแต่ปลายปี 2026) · โซล เกาหลีใต้ (ฐานจนถึงปี 2026)' },
    { label: 'พื้นที่ทำงาน', val: 'สำนักงานใหญ่ JH Company + สตูดิโอบันทึกเสียง โซล · ไม่มีอสังหาริมทรัพย์ในไทย' },
    { label: 'คู่รัก', val: 'Ashley Liao (ยืนยันความสัมพันธ์กันยายน 2026)' },
  ] as QuickFact[],
  education: [
    {
      period: '2004–2011',
      institution: 'โรงเรียนประถมศึกษา (กรุงเทพฯ)',
      location: 'กรุงเทพฯ ประเทศไทย',
      note: 'เรียนที่กรุงเทพฯ ช่วง ป.1–ป.6 อยู่กับบิดาเป็นหลักหลังพ่อแม่แยกทางกันในปี 2008–2009 ระหว่างครอบครัวฝั่งบิดาที่เป็นไทย-จีน ญาติฝั่งมารดาที่เป็นเกาหลี และโรงเรียนสายอินเตอร์ เขาพูดได้สี่ภาษาตั้งแต่เกิด — ไทย จีน อังกฤษ และเกาหลี เดินทางไปโซลช่วงซัมเมอร์และวันหยุดยาวตามตารางงานของมารดา ซึ่งเป็นนักเขียน',
    },
    {
      period: '2011–2013',
      institution: 'มัธยมศึกษาตอนต้น (กรุงเทพฯ)',
      location: 'กรุงเทพฯ ประเทศไทย',
      note: 'จบ ม.3 ในไทย กุมภาพันธ์ 2013 ห่างจากวัน audition ของ SM Entertainment ไม่กี่วันในเดือนเดียวกัน เขาจบมัธยมต้นครบก่อนย้ายโซล ไม่มีการสอบเทียบ',
    },
    {
      period: '2013',
      institution: 'ช่วงเปลี่ยนผ่าน',
      location: 'กรุงเทพฯ → โซล',
      note: 'ช่วงปลายปี 2013 ย้ายเข้ากรุงโซลอย่างเป็นทางการในฐานะ SM Rookies trainee และย้ายไปอยู่กับมารดาเป็นหลักเป็นครั้งแรกนับตั้งแต่พ่อแม่แยกทางกัน ช่วงนี้เรียนภาษาเกาหลีแบบเข้มข้นและเตรียมตัวก่อนเริ่มเรียน SOPA',
    },
    {
      period: '2014–2017',
      institution: 'School of Performing Arts Seoul (SOPA)',
      location: 'โซล เกาหลีใต้',
      note: 'เรียน ม.4–ม.6 ที่ SOPA ร่วมชั้นกับ Jeon Jungkook (BTS), เพื่อนร่วมทางที่สนิทหลายคนจาก SM และ JYP trainees รุ่นเดียวกัน สำเร็จการศึกษาวันที่ 7 กุมภาพันธ์ 2017 ก่อน debut NCT 127 ห้าเดือน',
    },
  ] as EducationEntry[],
  relationships: [
    {
      period: '2021',
      type: 'rumor',
      name: 'Winter (aespa)',
      detail: 'ข่าวลือระดับ fansite — ไม่มีหลักฐาน ถูกมองว่าเกิดจากการเป็นศิลปินร่วมสังกัดและบุคลิกที่โดดเด่นทั้งสองฝ่าย',
    },
    {
      period: '2023',
      type: 'private',
      name: 'Karina (aespa)',
      detail: 'แหล่งข่าวใกล้ชิดระบุว่ามีความสัมพันธ์จริงในช่วงสั้น — ทั้งสองฝ่ายและทีมงาน SM เลือกปิดข่าวอย่างเป็นระบบ ไม่มีการยืนยันอย่างเป็นทางการ ข่าวลือในสาธารณะถูก dismiss ด้วย "ร่วมสังกัด" เช่นเดียวกับ Winter (2021)',
    },
    {
      period: 'ปลายปี 2025',
      type: 'rumor',
      name: 'Ashley Liao',
      detail: 'ข่าวลือเรื่องความสัมพันธ์จากช่วงถ่ายเพิ่มเติมของ Last of the Ten Rings (ต.ค.–พ.ย. 2025) ไม่มีการยืนยัน ณ เวลานั้น ต่อมาเปิดเผยว่าเป็นการเริ่มต้นของความสัมพันธ์จริง',
    },
    {
      period: '2024–2025',
      type: 'private',
      name: 'Hanni (NewJeans)',
      detail: 'แหล่งข่าวใกล้ชิดระบุว่ามีความสัมพันธ์ระยะสั้นในช่วงนี้ — ทั้งสองฝ่ายเลือกไม่เปิดเผยสาธารณะ ข่าวที่ปรากฏบนโซเชียลช่วง CAN\'T LEAVE ALONE (2025) ถูกอ้างถึงว่ามาจาก social media interaction แต่แหล่งในวงการมองว่าเป็น cover story',
    },
    {
      period: '2024',
      type: 'rumor',
      name: 'Olivia Rodrigo · Sabrina Carpenter · Hunter Schafer',
      detail: 'ข่าวลือระดับ tabloid ช่วง US breakthrough — ไม่มีหลักฐานยืนยันจากแหล่งทางการ เกิดขึ้นช่วงที่ James ปรากฏตัวบ่อยในวงการบันเทิงอเมริกัน',
    },
    {
      period: 'Sep 2026',
      type: 'confirmed',
      name: 'Ashley Liao',
      detail: 'ประกาศผ่าน joint statement พร้อมกันทั้งสองฝ่าย หลังจาก Shang-Chi and the Last of the Ten Rings เข้าฉายในเดือนเดียวกัน แฟนคลับส่วนใหญ่ตอบรับเชิงบวก เนื่องจากเป็นความสัมพันธ์ที่มีสัญญาณมายาวนาน',
    },
  ] as RelEntry[],
  friends: [
    {
      group: 'SOPA (School of Performing Arts Seoul)',
      note: 'กลุ่มเพื่อนสนิทที่สุดในชีวิต — เกิดจากช่วงเรียน ม.4–ม.6 ร่วมกัน หลายคนอยู่ในวงการบันเทิงเกาหลีในตำแหน่งที่แตกต่างกัน ความสัมพันธ์เหล่านี้ผ่านช่วงที่ยากที่สุดในชีวิต trainee และเป็นฐานของ personal circle ที่ยังคงอยู่ถึงปัจจุบัน',
      names: [],
    },
    {
      group: 'NCT 127 — วงในสุด',
      note: 'ในวง NCT 127 สนิทที่สุดกับ Mark Lee, Jung Woo (Jungwoo), และ Lee Donghyuck (Haechan) — สามคนที่มีอายุใกล้เคียงกัน ความสัมพันธ์กับ Jungwoo ลึกที่สุดเพราะเกิดปีเดียวกัน (1998) และแบกรับบทบาทคล้ายกันในวง',
      names: ['Mark Lee (1999)', 'Jung Woo / Jungwoo (1998)', 'Lee Donghyuck / Haechan (2000)'],
    },
    {
      group: 'NCT 127 — Lee Taeyong',
      note: 'ความสัมพันธ์คนละแบบกับวงในสุดข้างบน — เป็นมืออาชีพและอบอุ่นจริงใจ แต่ไม่ใช่ระดับเพื่อนสนิท ทั้งสองรู้จักกันมายาวนานที่สุดในไลน์อัพ เคยจับคู่ใน showcase ทดสอบ chemistry ก่อนเดบิวต์เมื่อปี 2014 และ Taeyong คือสมาชิกที่ออกมาพูดต่อสาธารณะช่วงข้อพิพาทสัญญาปี 2023 ประวัติศาสตร์ร่วมกันนั้นออกมาในรูปของความเคารพซึ่งกันและกันและการซัพพอร์ตที่วางใจได้ในโมเมนต์สำคัญ มากกว่าความสนิทแบบวันต่อวันที่มีกับ Mark, Jungwoo และ Haechan',
      names: ['Lee Taeyong (1995)'],
    },
    {
      group: 'ไทย — เพื่อนเก่า',
      note: 'ความสัมพันธ์กับเพื่อนในไทยไม่สนิทมากในปัจจุบัน — การย้ายโซลตั้งแต่อายุ 15 และการไม่กลับไทยอย่างต่อเนื่องตั้งแต่ปี 2025 ทำให้ระยะห่างทางกายภาพและทางอารมณ์เพิ่มขึ้นเรื่อยๆ',
      names: [],
    },
  ] as FriendGroup[],
  hobbies: [
    {
      category: 'ขนส่งสาธารณะ',
      detail: 'ใช้ขนส่งสาธารณะเป็นประจำแม้ในสถานะ A-list — รถไฟ, รถเมล์, MRT ทั้งในโซลและกรุงเทพฯ ในช่วงที่ยังไปไทย เป็นที่รู้กันในทีมงานว่าเขาหลีกเลี่ยงเครื่องบินเช่าเหมาลำโดยสิ้นเชิง ไม่ว่าจะเป็นทัวร์หรือ press run เขากล่าวถึงเรื่องนี้ในช่วงปี 2022–2023 ว่าเชื่อมโยงกับประเด็น carbon footprint และ climate — ใช้ commercial flights เสมอ แม้แต่ในทัวร์ที่ต้องบินมากถึง 30+ เที่ยว',
    },
    {
      category: 'ออกกำลังกายและการเคลื่อนไหวร่างกาย',
      detail: 'ออกกำลังกายเป็นประจำทุกวัน — รวม strength training, functional fitness, และ tricking ที่ฝึกมาตั้งแต่วัยเด็ก รูปร่างที่เปลี่ยนแปลงชัดเจนระหว่างยุค LIKE I DO กับ PULSE ถูกตีความว่าเป็นผลของ training regiment ที่เข้มข้นขึ้น',
    },
    {
      category: 'ทำอาหาร',
      detail: 'ทำอาหารเองที่บ้านสม่ำเสมอ — กล่าวถึงในหลาย interview ว่าเป็น "decompression routine" หลังทัวร์หรือกองถ่าย เมนูที่พูดถึงบ่อยได้แก่อาหารไทย อาหารเกาหลีบ้านๆ และ pasta',
    },
    {
      category: 'งานบ้านและกิจวัตรในบ้าน',
      detail: 'พูดถึงการทำงานบ้านในเชิงบวกหลายครั้ง รวมถึง You Quiz on the Block (2022) ที่กล่าวว่าการทำความสะอาดช่วยให้ head clear ไม่มีทีมงานส่วนตัวจัดการงานบ้าน อาศัยอยู่คนเดียว',
    },
    {
      category: 'การบำบัดและสุขภาพจิต',
      detail: 'James มีภาวะ workaholic ที่ได้รับการยอมรับในวงใกล้ชิด — ตั้งแต่ปี 2023 เป็นต้นมาเขาทำงานกับนักบำบัดเป็นประจำ ส่วนหนึ่งเชื่อมโยงกับการออกจาก SM, ความเครียดจากการก่อตั้งบริษัท, และแนวโน้มที่จะ overcommit กับทุก project พร้อมกัน กล่าวถึงเรื่องนี้อ้อมๆ ใน Esquire Korea (2026) ว่า "มีคนช่วยให้ผมรู้ว่าเมื่อไหรถึงจะเรียกว่าพอ — ผมไม่เคยรู้เรื่องนั้นมาก่อน" ไม่เคยประกาศอย่างเป็นทางการ แต่ไม่ได้ปฏิเสธเมื่อถูกถาม',
    },
    {
      category: 'การเขียน',
      detail: 'เขียน lyrics และ treatment สำหรับโปรเจกต์ของตัวเองมาตั้งแต่ยุค PULSE — credit เขียนบทเพิ่มขึ้นเรื่อยๆ ตั้งแต่ CAN\'T LEAVE ALONE จนถึง Shang-Chi และ DECADE ปัจจุบันมี co-screenwriting credit ใน MCU trilogy',
    },
  ] as Hobby[],
  values: [
    {
      topic: 'การต่อต้านสงคราม / รณรงค์สันติภาพ — จุดยืนหลัก',
      stance: 'vocal',
      detail: 'จุดยืนหลักที่ยืนหยัดมาตลอดอาชีพ: ไม่สนับสนุนการแก้ปัญหาด้วยกำลังทหารในทุกบริบท ไม่ว่าคู่กรณีจะเป็นใคร เรียกร้องการเจรจาและสันติภาพเสมอ จุดยืนนี้เป็นต้นเหตุของความขัดแย้งกับกระแสชาตินิยมไทย (2025) และสร้างแรงเสียดทานกับสัญญา Hollywood ของเขาเป็นระยะ',
    },
    {
      topic: 'สงครามยูเครน–รัสเซีย',
      stance: 'vocal',
      detail: 'ออก statement เรียกร้องหยุดยิงทันทีในปี 2022 ขณะยังอยู่ใน SM — เป็นหนึ่งในไม่กี่ครั้งที่ James แสดงจุดยืนการเมืองนอกประเทศไทยในช่วง SM era ถ้อยคำระมัดระวังและไม่ระบุฝ่ายผู้รุกราน แต่ชัดเจนในแง่ anti-war หลังออกจาก SM (2023) แสดงจุดยืนตรงกว่า รวมการประณามการโจมตีพลเรือน',
    },
    {
      topic: 'อิสราเอล–กาซา / การเกี่ยวข้องทางทหารของสหรัฐฯ',
      stance: 'vocal',
      detail: 'หนึ่งในจุดยืนที่สร้าง career risk สูงที่สุด — ออก statement เรียกร้องหยุดยิงและ humanitarian access ตั้งแต่ปลายปี 2023 ประณามการสูญเสียชีวิตพลเรือนทั้งสองฝ่าย ถ้อยคำไม่ระบุ "genocide" หรือยืนข้างการเมืองใด แต่วิพากษ์วิจารณ์การสนับสนุนทางทหารของสหรัฐฯ อย่างเปิดเผย สร้างความตึงเครียดกับ Disney/Marvel ที่มีนโยบายหลีกเลี่ยงจุดยืนการเมืองของนักแสดง มีรายงานว่า JH Company ต้องเจรจากับ Marvel legal team เรื่องนี้อย่างน้อยหนึ่งครั้ง',
    },
    {
      topic: 'ความขัดแย้งสหรัฐฯ–อิหร่าน',
      stance: 'vocal',
      detail: 'ตอบสนองต่อการทวีความรุนแรงระหว่างสหรัฐฯ และอิหร่านด้วย statement เรียกร้องการ de-escalation — เน้นย้ำว่าการใช้กำลังทางทหารไม่ใช่คำตอบ จุดยืนนี้เกิดขึ้นในช่วงที่เขาอาศัยอยู่ในสหรัฐฯ แล้ว ทำให้ถูกวิจารณ์จากบางฝ่ายในอเมริกาว่า "ไม่รู้จักบุญคุณประเทศที่ให้โอกาสเขา"',
    },
    {
      topic: 'Black Lives Matter',
      stance: 'vocal',
      detail: 'แสดงจุดยืนสนับสนุน BLM อย่างเปิดเผยตั้งแต่ปี 2020 — หนึ่งในศิลปิน K-pop กลุ่มแรกที่ออกแถลงการณ์โดยตรง (ไม่ใช่แค่ repost) ต่อมาเชื่อมโยงกับฐานแฟนคลับชาวแอฟริกัน-อเมริกัน',
    },
    {
      topic: 'Asian Lives Matter',
      stance: 'vocal',
      detail: 'ตอบสนองต่อกระแส anti-Asian hate (2021) โดยตรง ผ่าน statement และ donation แสดงจุดยืนในฐานะคนเอเชียที่อาศัยอยู่ในสหรัฐฯ ช่วง US promotion',
    },
    {
      topic: 'ประชาธิปไตยไทย',
      stance: 'vocal',
      detail: 'สนับสนุนการเคลื่อนไหวประชาธิปไตยในไทย มีบันทึกการบริจาคสาธารณะให้กลุ่มเยาวชนไทยช่วง 2020–2021 กล่าวว่า "มีความใกล้ชิดแนวคิดกับพรรคเพื่อไทย" แต่ไม่แสดงจุดยืนพรรคการเมืองโดยตรง',
    },
    {
      topic: 'นโยบายจีนเดียว',
      stance: 'silent',
      detail: 'ไม่เคยแสดงความคิดเห็นเรื่อง Taiwan/Tibet/Hong Kong อย่างเปิดเผย — เป็น conscious silence ที่นักวิจารณ์ระบุว่าเชื่อมโยงกับสัญญา MCU และตลาดจีน แฟนคลับส่วนหนึ่งมองว่าเป็นการเลือก pragmatism เหนือ consistency',
    },
  ] as ValueItem[],
  incidents: [
    {
      period: 'Feb 2024',
      title: 'แถลงการณ์ความเหนื่อยล้าหลัง PULSE',
      severity: 'low',
      body: 'ทันทีหลังจาก PULSE World Tour จบ (พฤษภาคม 2024) ซึ่งยาวนานเกือบหนึ่งปี (July 28, 2023 – May 30, 2024) James โพสต์ statement ผ่าน Weverse ว่าเขา "เหนื่อยล้าอย่างที่สุดจากการเดินทางและการแสดงที่ไม่หยุด" และจะ "ใช้เวลาพักให้ตัวเองก่อน 1 เดือน" ก่อนจะเริ่มถ่ายทำ Shang-Chi 2 ในเดือนกรกฎาคม 2024 แถลงการณ์นี้ถูกรับด้วยความเป็นห่วงจากแฟนคลับ แต่ก็สร้างความโล่งใจว่าเขาพูดตรงๆ เรื่อง mental และ physical state ซึ่งหาได้ยากในวงการ ไม่นานหลังจากนั้น Grammy campaign ก็เริ่มต้นขึ้นสำหรับ ARE U STILL',
    },
    {
      period: '2025',
      title: 'ผลกระทบจากความขัดแย้งไทย-กัมพูชา',
      severity: 'high',
      body: 'เมื่อความตึงเครียดชายแดนไทย-กัมพูชาปะทุขึ้นในปี 2025 James ออกแถลงการณ์เรียกร้องสันติภาพและการแก้ปัญหาด้วยการเจรจา — จุดยืนที่ขัดกับกระแสชาตินิยมไทยในช่วงนั้นโดยตรง ผลคือ backlash รุนแรงจากชาวไทยบนโซเชียล มีการตัด lightstick และเผา merchandise เชิงสัญลักษณ์ หลังจากเหตุการณ์นี้ James หยุดกิจกรรมทุกประเภทในไทย — ไม่มีทัวร์, ไม่มีโปรโมท, ไม่กล่าวถึงประเทศไทยในสื่อ ฐานแฟนคลับไทยลดลงอย่างมีนัยสำคัญ แต่ยังคงใหญ่พอสำหรับ pop star ระดับนานาชาติ',
    },
    {
      period: '2024–ปัจจุบัน',
      title: 'ความแตกแยกในแฟนด้อม NCT 127',
      severity: 'medium',
      body: 'การปรากฏตัวกับ NCT 127 ครั้งแรกในปี 2024 (ครบรอบ 8 ปีวง ในฐานะ external artist) — โดยกลับมา active อย่างเป็นทางการตั้งแต่ธันวาคม 2024 และอย่างเต็มรูปแบบในปี 2026 (ครบรอบ 10 ปี) สร้างแรงสั่นสะเทือนในแฟนด้อม กลยุทธ์ SM Entertainment ในการ manage สองฝั่ง — ทั้ง push James กลับเข้าวง และ build กระแส tension — ส่งผลให้แฟนคลับแตกออกเป็นสองกลุ่มพอๆ กัน: ฝ่ายที่ยินดีกับ James และฝ่ายที่ต่อต้าน ผลพลอยได้คือทุก content ที่มี James ทั้งใน NCT และนอก NCT ล้วนมี engagement สูงผิดปกติ — ทั้งแง่บวกและแง่ลบ ทำให้ James กลายเป็น "controversy magnet" ที่ SM ยังไม่ได้แก้อย่างเป็นระบบ',
    },
  ] as Incident[],
};

export const personalLife = { en, th };
export function getPersonalLife(lang: Lang) {
  return personalLife[lang];
}
