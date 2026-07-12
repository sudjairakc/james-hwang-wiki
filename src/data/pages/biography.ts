// Bilingual content for the Biography page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Dates, numbers, and proper nouns (names, places, companies, titles) are
// kept identical across both languages on purpose.

import type { Lang } from '../../i18n';

const en = {
  ui: {
    label: 'Overview',
    title: 'Biography',
    intro:
      "James Hwang is a Thai-Korean singer, songwriter, record producer, actor, and creative director. Born in Bangkok in 1998, he debuted with NCT 127 in 2016 following two and a half years as an SM Rookies trainee, before establishing full artistic independence in 2023. His career spans K-pop, Grammy-winning R&B, Hollywood franchise acting, and original IP development.",
    quickFactsHeading: 'Quick Facts',
    legalLinkLabel: '→ Full Legal Documentation',
    discographyLinkLabel: '→ Discography',
    filmographyLinkLabel: '→ Filmography',
    awardsLinkLabel: '→ Awards',
    timelineLinkLabel: '→ Full Timeline',
  },
  quickFacts: [
    { label: 'Full Name', val: 'Hwang Ji-nam (황지남) · Huáng Zhìnán (黃志南) · James Hwang' },
    { label: 'Born', val: 'June 22, 1998 · Bangkok, Thailand' },
    { label: 'Heritage', val: 'Thai-Chinese (paternal) · Korean (maternal)' },
    { label: 'Citizenship', val: 'Thai (single nationality)' },
    { label: 'Languages', val: 'Thai · Chinese · Korean · English · Japanese (fluent)' },
    { label: 'Education', val: 'School of Performing Arts Seoul (SOPA) · enrolled 2014 · graduated Feb 7, 2017' },
    { label: 'Stage Name', val: 'GONUNMA (고눈마) — producer/songwriting credit + SNS handles (2016–present) · public/promotion name is James Hwang (from 2023 independence)' },
    { label: 'Height', val: '181 cm' },
    { label: 'Occupation', val: 'Singer · Songwriter · Record producer · Actor · Creative director · CEO' },
  ],
  chapters: [
    {
      id: '01',
      period: '1998–2012',
      title: 'Early Life — Bangkok',
      body: [
        "James Hwang was born on June 22, 1998, in Thailand. His father is a Thai-Chinese businessman; his mother is a Korean author and poet. The household moved regularly between Bangkok and Seoul depending on his mother's publishing schedule, and James grew up bilingual from birth — Thai at home, Korean through extended family and school stays in Seoul.",
        "From childhood he was drawn to American soul and R&B, Korean pop, and 80s pop from his parents' record collections. He taught himself piano by ear and was writing melody sketches by age 10. At nine he began formal vocal training in Bangkok after a school music teacher noticed his pitch accuracy. His parents supported the training on the condition that his academics stayed strong.",
        "He also developed a parallel interest in martial arts and acrobatic movement — tricking, flips, and hip-hop freestyle dance — which would become a defining element of his trainee audition and later his MCU casting.",
      ],
    },
    {
      id: '02',
      period: '2013–2015',
      title: 'SM Rookies — Bangkok Audition to Seoul Stage',
      body: [
        "In February 2013, after finishing middle school, James auditioned for SM Entertainment at an open call in Thailand. His set included \"I'll Never Break Your Heart\" by Backstreet Boys and \"Sherlock\" by SHINee, paired with a hip-hop freestyle incorporating tricking flips. His fluent Korean in a Thai audition room was the detail that stood out most to the Korean evaluators present.",
        "Following the audition, his name circulated in online fan communities as one of \"two Thai kids who passed SM\" — described as \"the tall one who does flips.\" On December 16, 2013, he was officially introduced as an SM Rookies member: a pre-debut trainee in the performance and vocal track, immediately regarded as one of the lineup's standout prospects.",
        "In 2014, enrolled at the School of Performing Arts Seoul (SOPA), James developed rapidly in a real performance environment. His Korean, English, and Japanese expanded through daily immersion, and he built connections with the trainee generation that would eventually form NCT. On August 24, 2014, he performed \"Super Moon\" alongside Lee Tae-yong in one of SM's internal chemistry-testing showcases.",
        "In 2015, his positioning within the Rookies lineup crystallized. A March performance of \"Bassbot\" established his physical performance identity — high-physicality movement rooted in his martial arts background. On July 30, 2015, he participated in the SM Rookies Show in Seoul, one of the final major stages before the lineup was finalized for what would become NCT 127.",
      ],
    },
    {
      id: '03',
      period: '2016–2019',
      title: 'NCT 127 — Debut and the System',
      body: [
        "James debuted with NCT 127 on July 7, 2016, with \"Fire Truck.\" He was positioned as main vocalist alongside Moon Tae-il in the group's early vocal structure, and as part of the performance core with Taeyong and Mark Lee. Three weeks later, he competed on King of Mask Singer under the mask \"Cat's Eyes (고눈마)\" — winning the program between July 24 and August 10, and becoming known to the Korean general public in a way his group debut alone had not achieved. The nickname became the origin of his GONUNMA stage name.",
        "On November 11, 2016, SM released GONUNMA: LIKE I DO — a mini album project issued with no broadcast promotion and no music show appearances, deliberately low-profile to preserve group balance. Fan response split immediately between those who recognized a distinct solo identity and those concerned about the spotlight dynamics within the team.",
        "Through 2017, the internal vocal architecture of NCT 127 shifted from a Taeil–James axis toward a Taeil–Doyoung–Jaehyun structure. James was repositioned as a lead vocal support layer. He graduated from SOPA on February 7, 2017. In June 2017, he released the live track \"Everlasting,\" which fans began to cite as the space where James was most audibly himself — more than the title tracks.",
        "By late 2018, following Jungwoo's full integration into the group, visible overlap in mid-range vocal and soft-center positioning caused James's line distribution to be redistributed in a pattern that continued through the following years. In July 2019, he auditioned for the role of Shang-Chi; his martial arts background and multilingual range made him a direct match for what Marvel was casting. On July 20, 2019, his casting was confirmed at Comic-Con — the first turning point of a different kind.",
      ],
    },
    {
      id: '04',
      period: '2020–2022',
      title: 'Shang-Chi Era — Hollywood and the Parallel Track',
      body: [
        "Principal photography on Shang-Chi and the Legend of the Ten Rings began in February 2020, then halted in March due to COVID-19. James returned to Korea and rejoined NCT 127 promotions for \"Kick It\" during the pause — his vocal distribution rose in that window. Filming resumed in Australia in June 2020 under quarantine protocols, wrapped October 24, 2020, and the film premiered at Hollywood on August 16, 2021, going on to gross $432M worldwide. A press-tour interview clip went viral days later, introducing him to Western audiences outside the K-pop context for the first time, and that September Entertainment Weekly's Shang-Chi cast cover story featured him — captioned throughout as \"NCT 127's James Hwang.\"",
        "On January 11, 2022, James released SOFTEST TOUCH — his first fully framed solo single. Fan reception framed it as the release of potential that had been contained for six years. It reached number one on M Countdown, Music Bank, Show! Music Core, and Inkigayo in the same week, while the 2016 LIKE I DO title track was simultaneously re-promoted, establishing GONUNMA as a coherent solo identity. On March 27, 2022, he performed \"Fire in the Sky\" with Anderson .Paak at the 94th Academy Awards. That July, SM's licensing arm arranged his first international brand ambassadorship, naming him the face of a Calvin Klein global campaign — press at the time framed it as \"an idol chosen by a brand,\" a contrast later drawn against the deals that came directly to him after independence.",
        "By mid-2022, internal SM discussions about foreign member contract renewals were underway. James moved out of the group's shared residence. In September 2022 he rejoined the \"2 Baddies\" comeback in an upper-mid distribution slot, then participated selectively in the Neo City: The Link tour through year-end — the last extended group activity before the legal dispute became formal.",
      ],
    },
    {
      id: '05',
      period: '2023',
      title: 'Departure — Legal Resolution and Independence',
      body: [
        "James participated in the Neo City: The Link tour's North and Latin America dates in January 2023 — the final major group activity before the dispute escalated. The January 30 repackage \"Ay-Yo\" showed a marked reduction in his line distribution compared to the Sticker and Favorite eras, generating visible fan discussion about internal tension. It was the last SM Entertainment release to include his participation.",
        "In early February 2023, James began consulting a legal team over contract structure, creative control, and discriminatory treatment. By late February he had filed an injunction suspending contractual obligations and opening formal negotiations. In mid-March, the dispute became public via Dispatch. He attended the 95th Academy Awards on March 12 — Everything Everywhere All at Once swept the major categories — appearing with the cast at the after-parties and using the platform to reinforce his global-artist positioning during the dispute.",
        "Negotiations concluded in April 2023. James terminated his SM contract by mutual agreement, both parties withdrew legal filings, and an informal non-blacklisting arrangement was reached. On April 30, 2023, he founded J.H Company and signed a distribution partnership with Warner Music Korea. All original compositions developed during the contract period were confirmed as his intellectual property — the foundation of his subsequent solo catalog.",
        "The case didn't end at settlement. SM shares fell noticeably in the following trading sessions, and by May 2023 Korea's Fair Trade Commission had opened a sector-wide inquiry into idol contract practices, citing the case directly. Through the rest of the year, artists at several other major agencies were reported to be quietly citing it in their own renewal negotiations, and a documentary on the dispute crossed over into general entertainment coverage well outside K-pop circles. In November 2023, the National Assembly cited the case while amending the Popular Culture and Arts Industry Development Act — press nicknamed it the \"Hwang Clause.\" That December, James became a founding backer of an idol-rights advocacy body, turning a personal legal win into an organized industry push.",
      ],
    },
    {
      id: '06',
      period: '2023–2025',
      title: 'PULSE and ARE U STILL — Solo Establishment',
      body: [
        "On June 22, 2023, James announced his debut full-length album PULSE and a concert tour. The album released July 21 with two title tracks; selective Korean broadcast promotion was possible due to the non-blacklisting arrangement. The PULSE 2023 tour (Leg 1) opened July 28, running through Korea, Japan, China, and Taiwan. In October, \"If I Knew\" released the same week as an NCT 127 comeback with no interaction between the two campaigns — observed as \"separate but not adversarial.\"",
        "In November 2023, James announced the ARE U STILL album (January 8, 2024) and the global PULSE tour expansion. At the December 2023 Melon Music Awards he won Top 10 Artist, Millions Top 10 Artist, and Best Male Solo — and received producer credit on a special collaboration stage, earning the platform's designation of \"Golden Producer.\" ARE U STILL released January 8, 2024. The PULSE 2024 World Tour (Leg 2) ran through May, covering Southeast Asia, Oceania, North America (Madison Square Garden, Intuit Dome), and Europe, closing May 30. Total PULSE tour gross: $235M across 64 shows.",
        "On August 26, 2024, Jaehyun's album \"J\" released with the title track \"SMOKE\" produced by James — the first official creative collaboration with an SM artist since the departure. Aespa's October release \"Flowers\" was also produced by James. The Grammy nominations for ARE U STILL arrived late in the year. On February 2, 2025, James won Best Progressive R&B Album and Best R&B Performance (\"Tears On A Pretty Face\") at the Grammy Awards.",
        "From the 2023 independence onward, JH Company positioned \"James Hwang\" as the public-facing promotion name — US press, late-night appearances, and official releases used it as the primary name, a shift that deepened through the 2025 Grammy campaign. GONUNMA — which had originated from his 2016 King of Mask Singer nickname and became publicly known then, though SM never officially pushed it — was retained as his production/songwriting credit and as his SNS handles (@gonunma). The decision reflected a practical reality: in the American market, GONUNMA required explanation and carried no recognition, while \"James Hwang\" was already the name audiences knew from the Shang-Chi franchise. JH Company noted that SM Entertainment had no legal claim to the GONUNMA name — the name predated its use on SM-released material and had originated from a public broadcast program — but the consolidation was driven by clarity, not dispute.",
      ],
    },
    {
      id: '07',
      period: '2025–2026',
      title: 'POPSTAR Era — CAN\'T LEAVE ALONE, Shang-Chi II, and the Return',
      body: [
        "CAN\'T LEAVE ALONE — the CAN\'T LEAVE ALONE dual-concept album — released February 10, 2025, with no Korean broadcast promotion — a deliberate business and personal positioning choice focused entirely on US and global platforms. In June 2025, James announced a pause on NCT 127 group activity through July 2026 to focus on solo work and the Shang-Chi trilogy's conclusion. Shang-Chi and the Legacy of the Ten Rings premiered July 25, 2025; James carried a co-screenwriting credit — his first formal writing credit on a studio production.",
        "In July–August 2025, political events in Thailand created a brief moment of public division around James. He issued a measured, peace-oriented response, reduced his use of Thai in public appearances, and paused Thailand-based activities through the remainder of the year.",
        "Ahead of the pause's July 2026 end date, JH Company and SM negotiated the terms of a return — an arrangement without real precedent in K-pop, where artists who fully depart an agency after a legal dispute don't come back to group activity. SM agreed because losing him permanently, now that he carried a global name the group could no longer generate on its own, cost more than sharing control. The terms gave James full ownership of JH Company and his post-2023 catalog, his own choice of which dates and releases to join, and no renewed exclusive contract. In June–July 2026, under that agreement, James returned to NCT 127 for the group's 10th anniversary activities, participating in full across all dates outside Thailand.",
        "In September 2026, two major releases converged: DECADE — his first anthology album, marking ten years from his NCT 127 debut, with four new tracks — and Shang-Chi and the Deadly Hands, directed by Isaiah Saxon and co-written by James, closing the trilogy. In the same month, his relationship with co-star Ashley Liao was publicly confirmed through a joint statement.",
        "CAPTAIN EO: RESONANCE, the Disney+ franchise he developed as creator, co-director, composer, and lead actor, premiered as a holiday flagship series in December 2026. The DECADE tour opened January 2027. A decade had elapsed from SM Rookies trainee to Grammy-winning, MCU-lead, IP-owning independent artist.",
      ],
    },
  ],
  related: [
    { label: 'Career Timeline', slug: 'timeline' },
    { label: 'Public Image', slug: 'public-image' },
    { label: 'Legal', slug: 'legal' },
    { label: 'Discography', slug: 'discography' },
    { label: 'Filmography', slug: 'filmography' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ภาพรวม',
    title: 'ชีวประวัติ',
    intro:
      'James Hwang เป็นนักร้อง นักแต่งเพลง โปรดิวเซอร์เพลง นักแสดง และครีเอทีฟไดเรกเตอร์ชาวไทย-เกาหลี เกิดที่ Bangkok ในปี 1998 เขาเดบิวต์กับ NCT 127 ในปี 2016 หลังเป็นเทรนนี SM Rookies มาสองปีครึ่ง ก่อนจะสถาปนาความเป็นอิสระทางศิลปะอย่างเต็มตัวในปี 2023 อาชีพของเขาครอบคลุมทั้ง K-pop, R&B ระดับ Grammy, การแสดงในแฟรนไชส์ Hollywood และการพัฒนา IP ต้นฉบับของตัวเอง',
    quickFactsHeading: 'ข้อมูลเบื้องต้น',
    legalLinkLabel: '→ เอกสารกฎหมายฉบับเต็ม',
    discographyLinkLabel: '→ ผลงานเพลง',
    filmographyLinkLabel: '→ ผลงานภาพยนตร์',
    awardsLinkLabel: '→ รางวัล',
    timelineLinkLabel: '→ ไทม์ไลน์ฉบับเต็ม',
  },
  quickFacts: [
    { label: 'ชื่อเต็ม', val: 'Hwang Ji-nam (황지남) · Huáng Zhìnán (黃志南) · James Hwang' },
    { label: 'เกิด', val: 'June 22, 1998 · Bangkok, Thailand' },
    { label: 'เชื้อสาย', val: 'ไทย-จีน (ฝ่ายพ่อ) · เกาหลี (ฝ่ายแม่)' },
    { label: 'สัญชาติ', val: 'ไทย (สัญชาติเดียว)' },
    { label: 'ภาษา', val: 'ไทย · จีน · เกาหลี · อังกฤษ · ญี่ปุ่น (คล่องแคล่ว)' },
    { label: 'การศึกษา', val: 'School of Performing Arts Seoul (SOPA) · เข้าเรียนปี 2014 · จบการศึกษา Feb 7, 2017' },
    { label: 'ชื่อในวงการ', val: 'GONUNMA (고눈마) — เครดิต producer/แต่งเพลง + ชื่อแอคเคานต์ SNS (2016–ปัจจุบัน) · ชื่อโปรโมท/สาธารณะคือ James Hwang (ตั้งแต่เป็นอิสระปี 2023)' },
    { label: 'ส่วนสูง', val: '181 cm' },
    { label: 'อาชีพ', val: 'นักร้อง · นักแต่งเพลง · โปรดิวเซอร์เพลง · นักแสดง · ครีเอทีฟไดเรกเตอร์ · CEO' },
  ],
  chapters: [
    {
      id: '01',
      period: '1998–2012',
      title: 'ชีวิตวัยเด็ก — Bangkok',
      body: [
        'James Hwang เกิดวันที่ June 22, 1998 ที่ Thailand พ่อของเขาเป็นนักธุรกิจไทย-จีน ส่วนแม่เป็นนักเขียนและกวีชาวเกาหลี ครอบครัวย้ายไปมาระหว่าง Bangkok กับ Seoul เป็นประจำตามตารางงานตีพิมพ์ของแม่ James จึงเติบโตมาแบบสองภาษาตั้งแต่เกิด — พูดไทยที่บ้าน และเรียนรู้เกาหลีผ่านญาติฝั่งแม่และช่วงที่ไปอยู่โรงเรียนที่ Seoul',
        'ตั้งแต่เด็กเขาหลงใหลใน American soul และ R&B, เพลงป๊อปเกาหลี และเพลงป๊อปยุค 80s จากคอลเลกชันแผ่นเสียงของพ่อแม่ เขาหัดเล่นเปียโนด้วยหูตัวเองและเริ่มร่างทำนองเพลงตั้งแต่อายุ 10 ขวบ พออายุ 9 ขวบก็เริ่มฝึกร้องเพลงอย่างจริงจังที่ Bangkok หลังจากครูดนตรีที่โรงเรียนสังเกตเห็นว่าเขาจับ pitch ได้แม่นยำ พ่อแม่สนับสนุนการฝึกนี้โดยมีเงื่อนไขว่าผลการเรียนต้องยังดีอยู่',
        'ขนานกันไปเขายังสนใจ martial arts และการเคลื่อนไหวแบบ acrobatic — tricking, flips และ hip-hop freestyle dance — ซึ่งภายหลังกลายเป็นองค์ประกอบสำคัญของการออดิชันเป็นเทรนนี และต่อมาคือการถูกแคสต์ในหนัง MCU',
      ],
    },
    {
      id: '02',
      period: '2013–2015',
      title: 'SM Rookies — จากออดิชันที่ Bangkok สู่เวทีที่ Seoul',
      body: [
        'ในเดือน February 2013 หลังเรียนจบมัธยมต้น James ไปออดิชันกับ SM Entertainment ในรอบ open call ที่ Thailand เซตที่เขาเลือกมีเพลง "I\'ll Never Break Your Heart" ของ Backstreet Boys และ "Sherlock" ของ SHINee ผสมกับ hip-hop freestyle ที่มี tricking flips แทรกอยู่ สิ่งที่กรรมการชาวเกาหลีในห้องออดิชันประทับใจที่สุดคือภาษาเกาหลีที่เขาพูดคล่องในห้องออดิชันที่ Thailand',
        'หลังออดิชัน ชื่อของเขาแพร่ในคอมมูนิตี้แฟนออนไลน์ในฐานะหนึ่งใน "เด็กไทยสองคนที่ผ่าน SM" — ถูกบรรยายว่าเป็น "คนตัวสูงที่เล่น flips" วันที่ December 16, 2013 เขาถูกแนะนำตัวอย่างเป็นทางการในฐานะสมาชิก SM Rookies เทรนนีก่อนเดบิวต์ในสาย performance และ vocal และถูกมองว่าเป็นหนึ่งใน prospect ที่โดดเด่นที่สุดของรุ่นทันที',
        'ปี 2014 หลังเข้าเรียนที่ School of Performing Arts Seoul (SOPA) James พัฒนาตัวเองอย่างรวดเร็วในสภาพแวดล้อม performance จริง ภาษาเกาหลี อังกฤษ และญี่ปุ่นของเขาพัฒนาขึ้นจากการซึมซับในชีวิตประจำวัน และเขาสร้างความสัมพันธ์กับรุ่นเทรนนีที่ภายหลังจะรวมตัวกันเป็น NCT วันที่ August 24, 2014 เขาแสดงเพลง "Super Moon" ร่วมกับ Lee Tae-yong ใน showcase ทดสอบ chemistry ภายในของ SM',
        'ปี 2015 ตำแหน่งของเขาในไลน์อัป Rookies เริ่มชัดเจนขึ้น การแสดงเพลง "Bassbot" ในเดือนมีนาคมตอกย้ำตัวตนด้าน physical performance ของเขา — การเคลื่อนไหวที่เน้น physicality สูงซึ่งมีรากจาก background ด้าน martial arts วันที่ July 30, 2015 เขาร่วมแสดงใน SM Rookies Show ที่ Seoul ซึ่งเป็นหนึ่งในเวทีใหญ่รอบสุดท้ายก่อนไลน์อัปจะถูกสรุปเป็น NCT 127',
      ],
    },
    {
      id: '03',
      period: '2016–2019',
      title: 'NCT 127 — การเดบิวต์และระบบวง',
      body: [
        'James เดบิวต์กับ NCT 127 วันที่ July 7, 2016 ด้วยเพลง "Fire Truck" เขาถูกวางตำแหน่งเป็น main vocalist คู่กับ Moon Tae-il ใน vocal structure ช่วงแรกของวง และเป็นส่วนหนึ่งของ performance core ร่วมกับ Taeyong และ Mark Lee สามสัปดาห์ต่อมาเขาไปแข่งในรายการ King of Mask Singer ภายใต้หน้ากาก "Cat\'s Eyes (고눈마)" — คว้าชัยในรายการช่วง July 24 ถึง August 10 และเป็นที่รู้จักในวงกว้างของคนเกาหลีทั่วไปในแบบที่การเดบิวต์กับวงเพียงอย่างเดียวยังทำไม่ได้ ชื่อเล่นนี้กลายเป็นที่มาของชื่อในวงการ GONUNMA ของเขา',
        'วันที่ November 11, 2016 SM ปล่อย GONUNMA: LIKE I DO — โปรเจกต์มินิอัลบั้มที่ออกโดยไม่มีการโปรโมตทางออกอากาศและไม่ขึ้นเวทีมิวสิกโชว์ใดๆ ตั้งใจให้ low-profile เพื่อรักษาสมดุลภายในวง ปฏิกิริยาของแฟนแบ่งออกเป็นสองฝ่ายทันที ฝ่ายหนึ่งมองเห็นตัวตนโซโล่ที่ชัดเจน อีกฝ่ายกังวลเรื่อง dynamics ของ spotlight ภายในทีม',
        'ตลอดปี 2017 โครงสร้าง vocal ภายในของ NCT 127 เปลี่ยนจากแกน Taeil–James ไปเป็นโครงสร้าง Taeil–Doyoung–Jaehyun James ถูกจัดตำแหน่งใหม่เป็น lead vocal support layer เขาจบการศึกษาจาก SOPA วันที่ February 7, 2017 เดือน June 2017 เขาปล่อยเพลง live "Everlasting" ซึ่งแฟนๆ เริ่มพูดถึงว่าเป็นพื้นที่ที่ได้ยินความเป็น James มากที่สุด — มากกว่าเพลงไตเติ้ลด้วยซ้ำ',
        'ช่วงปลายปี 2018 หลังจาก Jungwoo เข้าร่วมวงอย่างเต็มตัว การซ้อนทับที่เห็นได้ชัดใน mid-range vocal และตำแหน่ง soft-center ทำให้ line distribution ของ James ถูกจัดสรรใหม่ในรูปแบบที่ต่อเนื่องไปอีกหลายปีถัดมา เดือน July 2019 เขาไปออดิชันบทบาท Shang-Chi background ด้าน martial arts และความสามารถหลายภาษาของเขาตรงกับสิ่งที่ Marvel กำลังมองหาพอดี วันที่ July 20, 2019 การแคสต์ของเขาถูกยืนยันที่งาน Comic-Con — จุดเปลี่ยนแรกในทิศทางที่ต่างออกไป',
      ],
    },
    {
      id: '04',
      period: '2020–2022',
      title: 'ยุค Shang-Chi — Hollywood และสายงานคู่ขนาน',
      body: [
        'การถ่ายทำหลักของ Shang-Chi and the Legend of the Ten Rings เริ่มเดือน February 2020 แล้วหยุดชะงักในเดือนมีนาคมเพราะ COVID-19 James กลับมาเกาหลีและกลับไปโปรโมต NCT 127 ในเพลง "Kick It" ระหว่างช่วงพักกองถ่าย — line distribution ของเขาเพิ่มขึ้นในช่วงนั้น การถ่ายทำกลับมาดำเนินต่อที่ Australia ในเดือน June 2020 ภายใต้มาตรการกักตัว ถ่ายเสร็จวันที่ October 24, 2020 และหนังฉายรอบปฐมทัศน์ที่ Hollywood วันที่ August 16, 2021 ทำรายได้ทั่วโลกรวม $432M ไม่กี่วันต่อมาคลิปสัมภาษณ์จาก press tour กลายเป็นไวรัล ทำให้ผู้ชมฝั่งตะวันตกรู้จักเขานอกบริบท K-pop เป็นครั้งแรก และในเดือนกันยายนปีเดียวกัน ปกนิตยสาร Entertainment Weekly ในสกู๊ป Shang-Chi cast ก็มีเขาร่วมด้วย โดยระบุชื่อกำกับตลอดสกู๊ปว่า "James Hwang จาก NCT 127"',
        'วันที่ January 11, 2022 James ปล่อย SOFTEST TOUCH — ซิงเกิลโซโล่แรกที่ถูกวางกรอบอย่างเต็มตัว แฟนๆ มองว่าเป็นการปลดปล่อยศักยภาพที่ถูกเก็บไว้นานถึงหกปี เพลงนี้ขึ้นอันดับ 1 บน M Countdown, Music Bank, Show! Music Core และ Inkigayo ในสัปดาห์เดียวกัน พร้อมกับที่เพลงไตเติ้ล LIKE I DO ปี 2016 ถูกนำกลับมาโปรโมตซ้ำ สร้างตัวตน GONUNMA ให้เป็น solo identity ที่เป็นเนื้อเดียวกัน วันที่ March 27, 2022 เขาแสดงเพลง "Fire in the Sky" ร่วมกับ Anderson .Paak ในงาน 94th Academy Awards เดือนกรกฎาคมปีเดียวกัน ฝ่าย licensing ของ SM จัดดีลพรีเซนเตอร์แบรนด์ต่างประเทศครั้งแรกให้เขา คือแคมเปญระดับโลกของ Calvin Klein — สื่อตอนนั้นนำเสนอในมุม "idol ที่ถูกแบรนด์เลือก" ต่างจากดีลที่แบรนด์เข้าหาเขาเองโดยตรงหลัง independence',
        'กลางปี 2022 SM เริ่มมีการหารือภายในเรื่องการต่อสัญญาสมาชิกต่างชาติ James ย้ายออกจากที่พักรวมของวง เดือน September 2022 เขากลับมาร่วมคัมแบ็ก "2 Baddies" ในตำแหน่ง distribution ระดับ upper-mid จากนั้นเข้าร่วมทัวร์ Neo City: The Link แบบเลือกกิจกรรมไปจนถึงปลายปี — เป็นกิจกรรมกลุ่มระยะยาวครั้งสุดท้ายก่อนข้อพิพาททางกฎหมายจะกลายเป็นเรื่องทางการ',
      ],
    },
    {
      id: '05',
      period: '2023',
      title: 'การแยกทาง — การคลี่คลายทางกฎหมายและความเป็นอิสระ',
      body: [
        'James ร่วมทัวร์ Neo City: The Link รอบ North และ Latin America ในเดือน January 2023 — กิจกรรมกลุ่มใหญ่ครั้งสุดท้ายก่อนข้อพิพาทจะบานปลาย อัลบั้ม repackage "Ay-Yo" ที่ออกวันที่ January 30 แสดงให้เห็น line distribution ของเขาที่ลดลงอย่างชัดเจนเมื่อเทียบกับยุค Sticker และ Favorite จนแฟนๆ เริ่มพูดถึง tension ภายในวงอย่างเห็นได้ชัด นี่คือผลงานสุดท้ายภายใต้ SM Entertainment ที่มีเขาร่วมแสดง',
        'ต้นเดือน February 2023 James เริ่มปรึกษาทีมกฎหมายเรื่องโครงสร้างสัญญา creative control และการปฏิบัติที่ไม่เป็นธรรม ปลายเดือนกุมภาพันธ์เขายื่นคำร้อง injunction ระงับข้อผูกพันตามสัญญาและเปิดการเจรจาอย่างเป็นทางการ กลางเดือนมีนาคมข้อพิพาทถูกเปิดเผยต่อสาธารณะผ่าน Dispatch เขาเข้าร่วมงาน 95th Academy Awards วันที่ March 12 — ปีที่ Everything Everywhere All at Once กวาดรางวัลสายหลักไปเกือบหมด — ปรากฏตัวร่วมกับทีมนักแสดงในงานหลังงานประกาศผล และใช้เวทีนี้ตอกย้ำสถานะ global-artist ของตัวเองระหว่างที่ข้อพิพาทยังดำเนินอยู่',
        'การเจรจาสิ้นสุดในเดือน April 2023 James ยุติสัญญากับ SM แบบตกลงร่วมกันทั้งสองฝ่าย ทั้งสองฝ่ายถอนคำร้องทางกฎหมาย และมีข้อตกลงแบบไม่เป็นทางการเรื่อง non-blacklisting เกิดขึ้น วันที่ April 30, 2023 เขาก่อตั้ง J.H Company และเซ็นสัญญาพาร์ตเนอร์ด้าน distribution กับ Warner Music Korea งานแต่งเพลงต้นฉบับทั้งหมดที่ทำขึ้นระหว่างช่วงสัญญาถูกยืนยันให้เป็น intellectual property ของเขาเอง — รากฐานของ catalog โซโล่ที่ตามมา',
        'เรื่องไม่จบแค่การ settle หุ้น SM ร่วงชัดเจนในช่วงซื้อขายถัดมา และภายในเดือนพฤษภาคม 2023 Fair Trade Commission ของเกาหลีเปิดสอบสวนแนวปฏิบัติสัญญา idol ทั้งวงการ โดยอ้างคดีนี้โดยตรง ตลอดปีที่เหลือ ศิลปินจากค่ายใหญ่อื่นถูกรายงานว่าอ้างอิงคดีนี้เงียบๆ ระหว่างเจรจาต่อสัญญาของตัวเอง และสารคดีเกี่ยวกับคดีนี้ข้ามไปสู่สื่อบันเทิงทั่วไปนอกวงการ K-pop พฤศจิกายน 2023 National Assembly อ้างอิงคดีนี้ระหว่างแก้ไข Popular Culture and Arts Industry Development Act — สื่อเรียกเล่นๆ ว่า "Hwang Clause" ธันวาคมปีเดียวกัน James กลายเป็นผู้ร่วมก่อตั้งองค์กร advocacy สิทธิ idol เปลี่ยนจากชัยชนะทางกฎหมายส่วนตัว เป็นแรงผลักดันการปฏิรูปทั้งวงการ',
      ],
    },
    {
      id: '06',
      period: '2023–2025',
      title: 'PULSE และ ARE U STILL — การปักหลักในฐานะศิลปินเดี่ยว',
      body: [
        'วันที่ June 22, 2023 James ประกาศอัลบั้มเต็มชุดแรก PULSE พร้อมทัวร์คอนเสิร์ต อัลบั้มปล่อยวันที่ July 21 พร้อมเพลงไตเติ้ลสองเพลง การโปรโมตทางออกอากาศในเกาหลีทำได้แบบเลือกช่องทางเพราะข้อตกลง non-blacklisting ทัวร์ PULSE 2023 (Leg 1) เปิดตัววันที่ July 28 ผ่าน Korea, Japan, China และ Taiwan เดือนตุลาคม เพลง "If I Knew" ปล่อยในสัปดาห์เดียวกับคัมแบ็กของ NCT 127 โดยไม่มีปฏิสัมพันธ์ระหว่างสองแคมเปญเลย — ถูกมองว่าเป็น "แยกกันแต่ไม่เป็นปฏิปักษ์กัน"',
        'เดือน November 2023 James ประกาศอัลบั้ม ARE U STILL (January 8, 2024) พร้อมการขยายทัวร์ PULSE ไปทั่วโลก ในงาน Melon Music Awards เดือนธันวาคม 2023 เขาคว้ารางวัล Top 10 Artist, Millions Top 10 Artist และ Best Male Solo — พร้อมได้เครดิต producer บนเวที collaboration พิเศษ จนได้รับการยกให้เป็น "Golden Producer" จากเวทีนั้น ARE U STILL ปล่อยวันที่ January 8, 2024 ทัวร์ PULSE 2024 World Tour (Leg 2) ดำเนินไปจนถึงเดือนพฤษภาคม ครอบคลุม Southeast Asia, Oceania, North America (Madison Square Garden, Intuit Dome) และ Europe ปิดทัวร์วันที่ May 30 รายได้รวมทัวร์ PULSE ทั้งหมด: $235M จาก 64 โชว์',
        'วันที่ August 26, 2024 อัลบั้ม "J" ของ Jaehyun ปล่อยออกมาพร้อมเพลงไตเติ้ล "SMOKE" ที่ James เป็นโปรดิวเซอร์ — การร่วมงานเชิงสร้างสรรค์อย่างเป็นทางการครั้งแรกกับศิลปิน SM นับตั้งแต่แยกทาง เพลง "Flowers" ของ aespa ที่ปล่อยเดือนตุลาคมก็มี James เป็นโปรดิวเซอร์เช่นกัน การเสนอชื่อเข้าชิง Grammy สำหรับ ARE U STILL มาถึงช่วงปลายปี วันที่ February 2, 2025 James คว้ารางวัล Best Progressive R&B Album และ Best R&B Performance ("Tears On A Pretty Face") ในงาน Grammy Awards',
        'ตั้งแต่เป็นอิสระในปี 2023 JH Company วางชื่อ "James Hwang" เป็นชื่อโปรโมทสาธารณะหลัก — สื่อสหรัฐฯ รายการทอล์กโชว์ดึกๆ และผลงานที่ปล่อยอย่างเป็นทางการใช้เป็นชื่อหลัก และการปรับนี้ชัดเจนขึ้นเรื่อยๆ จนถึงแคมเปญ Grammy ปี 2025 GONUNMA — ที่มีที่มาจากชื่อเล่นในรายการ King of Mask Singer ปี 2016 และเป็นที่รู้จักในวงกว้างตั้งแต่ตอนนั้น แม้ SM จะไม่ได้ผลักดันอย่างเป็นทางการ — ถูกเก็บไว้เป็นเครดิต production/แต่งเพลง และเป็นชื่อแอคเคานต์ SNS (@gonunma) การตัดสินใจนี้สะท้อนความจริงเชิงปฏิบัติ: ในตลาดอเมริกา GONUNMA ต้องอธิบายเพิ่มและไม่มีใครรู้จัก ในขณะที่ "James Hwang" เป็นชื่อที่ผู้ชมรู้จักอยู่แล้วจากแฟรนไชส์ Shang-Chi JH Company ระบุว่า SM Entertainment ไม่มีสิทธิ์ทางกฎหมายเหนือชื่อ GONUNMA — เพราะชื่อนี้มีมาก่อนที่จะถูกใช้ในผลงานที่ปล่อยผ่าน SM และมีที่มาจากรายการโทรทัศน์สาธารณะ — แต่การรวมชื่อครั้งนี้เกิดจากความต้องการความชัดเจน ไม่ใช่ข้อพิพาท',
      ],
    },
    {
      id: '07',
      period: '2025–2026',
      title: 'ยุค POPSTAR — CAN\'T LEAVE ALONE, Shang-Chi II และการกลับมา',
      body: [
        'CAN\'T LEAVE ALONE — อัลบั้ม dual-concept CAN\'T LEAVE ALONE — ปล่อยวันที่ February 10, 2025 โดยไม่มีการโปรโมตทางออกอากาศในเกาหลี — เป็นการตัดสินใจเชิงธุรกิจและตำแหน่งส่วนตัวที่ตั้งใจโฟกัสไปที่แพลตฟอร์มสหรัฐฯ และระดับโลกเท่านั้น เดือน June 2025 James ประกาศพักกิจกรรมกลุ่มกับ NCT 127 ไปจนถึง July 2026 เพื่อโฟกัสงานเดี่ยวและปิดไตรภาค Shang-Chi Shang-Chi and the Legacy of the Ten Rings ฉายรอบปฐมทัศน์วันที่ July 25, 2025 James มีเครดิตร่วมเขียนบท — เครดิตการเขียนบทอย่างเป็นทางการครั้งแรกของเขาในงาน studio production',
        'ช่วง July–August 2025 เหตุการณ์ทางการเมืองใน Thailand สร้างความแตกแยกในการรับรู้สาธารณะรอบตัว James ช่วงสั้นๆ เขาออกแถลงการณ์ที่ระมัดระวังและเน้นสันติภาพ ลดการใช้ภาษาไทยในที่สาธารณะ และพักกิจกรรมที่เกี่ยวกับ Thailand ไปตลอดช่วงที่เหลือของปี',
        'ก่อนช่วงพักกิจกรรมจะสิ้นสุดในเดือน July 2026 JH Company และ SM เจรจาเงื่อนไขการกลับวง — ข้อตกลงที่แทบไม่มี precedent มาก่อนในวงการ K-pop เพราะ artist ที่ออกจากค่ายหลังข้อพิพาททางกฎหมายเต็มรูปแบบมักไม่กลับมาร่วมกิจกรรมกลุ่มอีกเลย SM ยอมเจรจาเพราะการเสียเขาไปแบบถาวรอีกครั้ง — ตอนนี้ในฐานะชื่อระดับโลกที่วงเองสร้างไม่ได้แล้ว — สร้างความเสียหายมากกว่าการยอมแบ่งอำนาจควบคุมบางส่วน เงื่อนไขที่ได้คือ James คุมความเป็นเจ้าของ JH Company และ catalog หลังปี 2023 ไว้เต็มร้อย เลือกเองได้ว่าจะร่วมวันไหนหรือผลงานไหน และไม่ต้องเซ็นสัญญาผูกขาดใหม่ ช่วง June–July 2026 ภายใต้ข้อตกลงนี้ James กลับมาร่วมกิจกรรมฉลองครบรอบ 10 ปีของ NCT 127 โดยเข้าร่วมเต็มที่ในทุกวันที่จัดนอก Thailand',
        'เดือน September 2026 มีสองผลงานใหญ่มาบรรจบกัน: DECADE — อัลบั้ม anthology ชุดแรกของเขา ฉลองครบสิบปีนับจากเดบิวต์กับ NCT 127 พร้อมเพลงใหม่สี่เพลง — และ Shang-Chi and the Deadly Hands กำกับโดย Isaiah Saxon และร่วมเขียนบทโดย James ปิดไตรภาคอย่างสมบูรณ์ ในเดือนเดียวกัน ความสัมพันธ์ของเขากับนักแสดงร่วม Ashley Liao ก็ถูกยืนยันต่อสาธารณะผ่านแถลงการณ์ร่วม',
        'CAPTAIN EO: RESONANCE แฟรนไชส์ Disney+ ที่เขาพัฒนาขึ้นในฐานะผู้สร้าง ผู้กำกับร่วม ผู้ประพันธ์ดนตรี และนักแสดงนำ ฉายรอบปฐมทัศน์เป็นซีรีส์เรือธงช่วงเทศกาลในเดือน December 2026 ทัวร์ DECADE เปิดตัวเดือน January 2027 หนึ่งทศวรรษผ่านไปนับจากเทรนนี SM Rookies สู่การเป็นศิลปินอิสระที่คว้า Grammy เป็นนักแสดงนำ MCU และเป็นเจ้าของ IP ด้วยตัวเอง',
      ],
    },
  ],
  related: [
    { label: 'ไทม์ไลน์อาชีพ', slug: 'timeline' },
    { label: 'ภาพลักษณ์สาธารณะ', slug: 'public-image' },
    { label: 'กฎหมาย', slug: 'legal' },
    { label: 'ผลงานเพลง', slug: 'discography' },
    { label: 'ผลงานภาพยนตร์', slug: 'filmography' },
  ],
};

export const biography = { en, th };
export function getBiography(lang: Lang) {
  return biography[lang];
}
