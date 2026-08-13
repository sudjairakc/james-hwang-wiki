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
    { label: 'Citizenship', val: 'Thai · U.S. residency filing (2027–)' },
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
        "James Hwang was born on June 22, 1998, in Bangkok, Thailand. His father is a Thai-Chinese businessman; his mother is a Korean author and poet. Between his father's Thai-Chinese household, his mother's Korean side of the family, and an English-medium school in Bangkok, James grew up across four languages from birth — Thai, Chinese, English, and Korean. His parents separated in 2008–2009, when he was in upper primary school; he stayed based in Bangkok with his father through the rest of his schooling, then shifted to living primarily with his mother in Seoul once SM training began in earnest in late 2013.",
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
        "Following the audition, his name circulated in online fan communities as one of \"two Thai kids who passed SM\" — described as \"the tall one who does flips.\" On December 16, 2013, he was officially introduced as an SM Rookies member: a pre-debut trainee in the performance and vocal track, immediately regarded as one of the lineup's standout prospects. The move to Seoul also meant living with his mother full-time for the first time since his parents' separation.",
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
        "Principal photography on Shang-Chi and the Legend of the Ten Rings began in February 2020, then halted in March due to COVID-19. James returned to Korea and rejoined NCT 127 promotions for \"Kick It\" during the pause — his vocal distribution rose in that window. Filming resumed in Australia in June 2020 under quarantine protocols, wrapped October 24, 2020, and the film premiered at Hollywood on August 16, 2021, going on to gross $728M worldwide. A press-tour interview clip went viral days later, introducing him to Western audiences outside the K-pop context for the first time, and that September Entertainment Weekly's Shang-Chi cast cover story featured him — captioned throughout as \"NCT 127's James Hwang.\"",
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
        "In early February 2023, James began consulting a legal team over contract structure, creative control, and discriminatory treatment. By late February he had filed an injunction suspending contractual obligations and opening formal negotiations. In mid-March, SM countersued for reputational damage and the dispute became public via Dispatch, which published excerpts of the internal meeting recordings. He attended the 95th Academy Awards on March 12 — Everything Everywhere All at Once swept the major categories — appearing with the cast at the after-parties and using the platform to reinforce his global-artist positioning during the dispute.",
        "A final round of mediation succeeded in mid-to-late April 2023, and the settlement was signed on April 27. James terminated his SM contract by mutual agreement, both parties withdrew legal filings, and an informal non-blacklisting arrangement was reached. On April 30, 2023, he founded JH Company and signed a distribution partnership with Warner Music Korea. All original compositions developed during the contract period were confirmed as his intellectual property — the foundation of his subsequent solo catalog. The master recordings made under SM stayed with SM, which is why the later DECADE anthology carries re-recorded solo versions of those songs.",
        "The case didn't end at settlement. SM shares fell noticeably in the following trading sessions, and by May 2023 Korea's Fair Trade Commission had opened a sector-wide inquiry into idol contract practices, citing the case directly. Through the rest of the year, artists at several other major agencies were reported to be quietly citing it in their own renewal negotiations, and a documentary on the dispute crossed over into general entertainment coverage well outside K-pop circles. In November 2023, the National Assembly cited the case while amending the Popular Culture and Arts Industry Development Act — press nicknamed it the \"Hwang Clause.\" That December, James became a founding backer of an idol-rights advocacy body, turning a personal legal win into an organized industry push.",
      ],
    },
    {
      id: '06',
      period: '2023–2025',
      title: 'PULSE and ARE U STILL — Solo Establishment',
      body: [
        "On June 22, 2023, James announced his debut full-length album PULSE and a concert tour. The album released July 21 with two title tracks; selective Korean broadcast promotion was possible due to the non-blacklisting arrangement. The PULSE 2023 tour (Leg 1) opened July 28, running through Korea, Japan, China, and Taiwan. In October, \"If I Knew\" released the same week as an NCT 127 comeback with no interaction between the two campaigns — observed as \"separate but not adversarial.\"",
        "In November 2023, James announced the ARE U STILL album (January 8, 2024) and the global PULSE tour expansion. At the December 2023 Melon Music Awards he won Top 10 Artist, Millions Top 10 Artist, and Best Male Solo — and received producer credit on a special collaboration stage, earning the platform's designation of \"Golden Producer.\" ARE U STILL released January 8, 2024. The PULSE 2024 World Tour (Leg 2) ran through May, covering Southeast Asia, Oceania, North America (Madison Square Garden, Crypto.com Arena), and Europe, closing May 30. Total PULSE tour gross: $235M across 64 shows.",
        "On August 26, 2024, Jaehyun's album \"J\" released with the title track \"SMOKE\" produced by James — the first official creative collaboration with an SM artist since the departure. Aespa's October release \"Flowers\" was also produced by James. The Grammy nominations for ARE U STILL arrived late in the year. On February 2, 2025, James won Best Progressive R&B Album and Best R&B Performance (\"Tears On A Pretty Face\") at the Grammy Awards.",
        "From the 2023 independence onward, JH Company positioned \"James Hwang\" as the public-facing promotion name — US press, late-night appearances, and official releases used it as the primary name, a shift that deepened through the 2025 Grammy campaign. GONUNMA — which had originated from his 2016 King of Mask Singer nickname and became publicly known then, though SM never officially pushed it — was retained as his production/songwriting credit and as his SNS handles (@gonunma). The decision reflected a practical reality: in the American market, GONUNMA required explanation and carried no recognition, while \"James Hwang\" was already the name audiences knew from the Shang-Chi franchise. SM had claimed the GONUNMA name during the dispute and withdrew that claim as part of the 2023 settlement, which confirmed the rights as entirely James's — the name predated its use on SM-released material and had originated from a public broadcast program. With ownership no longer in question, the 2025 consolidation was driven by clarity rather than by any live dispute.",
      ],
    },
    {
      id: '07',
      period: '2024–2026',
      title: 'POPSTAR Era — CAN\'T LEAVE ALONE, Shang-Chi II, and the Return',
      body: [
        "In December 2024, James returned to NCT 127 as an external artist, under an arrangement without real precedent in K-pop — where artists who fully depart an agency after a legal dispute don't come back to group activity. SM agreed because losing him permanently, now that he carried a global name the group could no longer generate on its own, cost more than sharing control. The terms gave James full ownership of JH Company and his post-2023 catalog, his own choice of which dates and releases to join, and no renewed exclusive contract. That agreement governed everything that followed: a hiatus through 2025, then full participation in the group's 10th anniversary in June–July 2026 across all dates outside Thailand.",
        "CAN\'T LEAVE ALONE — the CAN\'T LEAVE ALONE dual-concept album — released February 10, 2025, with no Korean broadcast promotion — a deliberate business and personal positioning choice focused entirely on US and global platforms. In June 2025, James announced a pause on NCT 127 group activity through July 2026 to focus on solo work and the Shang-Chi trilogy's conclusion. Shang-Chi and the Legacy of the Ten Rings premiered July 25, 2025; James carried a co-screenwriting credit — his first formal writing credit on a studio production.",
        "In July–August 2025, political events in Thailand created a brief moment of public division around James. He issued a measured, peace-oriented response, reduced his use of Thai in public appearances, and paused Thailand-based activities through the remainder of the year.",
        "In September 2026, two major releases converged: DECADE — his first anthology album, marking ten years from his NCT 127 debut, with four new tracks — and Shang-Chi and the Last of the Ten Rings, directed by Destin Daniel Cretton and co-written by James, closing the trilogy. In the same month, his relationship with co-star Ashley Liao was publicly confirmed through a joint statement.",
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
  gallery: {
    heading: 'Portraits & Photographs',
    portraits: [
      { src: 'jh_age_16.png', caption: 'Age 16 — pre-debut trainee years (c. 2014)' },
      { src: 'jh_age_20.png', caption: 'Age 20 — NCT 127 era (c. 2018)' },
      { src: 'jh_age_25.png', caption: 'Age 25 — post-independence, PULSE era (c. 2023)' },
    ],
    group: { src: 'nct127_regulate.png', caption: "NCT 127's Regulate (2018) — James Hwang pictured with the group during the Regular-Irregular repackage era." },
  },
};

const th: typeof en = {
  ui: {
    label: 'ภาพรวม',
    title: 'ชีวประวัติ',
    intro:
      'James Hwang เป็นนักร้อง นักแต่งเพลง โปรดิวเซอร์ นักแสดง และครีเอทีฟไดเรกเตอร์ลูกครึ่งไทย-เกาหลี เกิดที่กรุงเทพฯ ปี 1998 เป็นเทรนนี SM Rookies สองปีครึ่งก่อนเดบิวต์กับ NCT 127 ในปี 2016 แล้วออกมาเป็นศิลปินอิสระเต็มตัวในปี 2023 เส้นทางของเขาพาดผ่านทั้ง K-pop, R&B ที่คว้า Grammy, หนังแฟรนไชส์ฮอลลีวูด ไปจนถึงการปั้น IP ของตัวเองขึ้นมาใหม่',
    quickFactsHeading: 'ข้อมูลเบื้องต้น',
    legalLinkLabel: '→ เอกสารกฎหมายฉบับเต็ม',
    discographyLinkLabel: '→ ผลงานเพลง',
    filmographyLinkLabel: '→ ผลงานภาพยนตร์',
    awardsLinkLabel: '→ รางวัล',
    timelineLinkLabel: '→ ไทม์ไลน์ฉบับเต็ม',
  },
  quickFacts: [
    { label: 'ชื่อเต็ม', val: 'Hwang Ji-nam (황지남) · Huáng Zhìnán (黃志南) · James Hwang' },
    { label: 'เกิด', val: '22 มิถุนายน 1998 · กรุงเทพมหานคร' },
    { label: 'เชื้อสาย', val: 'ไทย-จีน (ฝ่ายพ่อ) · เกาหลี (ฝ่ายแม่)' },
    { label: 'สัญชาติ', val: 'ไทย · ยื่นขอถิ่นที่อยู่สหรัฐ (2027–)' },
    { label: 'ภาษา', val: 'ไทย · จีน · เกาหลี · อังกฤษ · ญี่ปุ่น (คล่องแคล่ว)' },
    { label: 'การศึกษา', val: 'School of Performing Arts Seoul (SOPA) · เข้าเรียนปี 2014 · จบ 7 กุมภาพันธ์ 2017' },
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
        'James Hwang เกิดวันที่ 22 มิถุนายน 1998 ที่กรุงเทพฯ พ่อเป็นนักธุรกิจไทย-จีน แม่เป็นนักเขียนและกวีชาวเกาหลี โตมาระหว่างครอบครัวไทย-จีนฝั่งพ่อ ญาติเกาหลีฝั่งแม่ และโรงเรียนอินเตอร์ในกรุงเทพฯ เขาจึงได้สี่ภาษาติดตัวมาตั้งแต่เด็ก — ไทย จีน อังกฤษ เกาหลี พ่อแม่แยกทางกันช่วงปี 2008–2009 ตอนเขาอยู่ประถมปลาย หลังจากนั้นเขาอยู่กรุงเทพฯ กับพ่อมาตลอดช่วงเรียน แล้วย้ายไปอยู่กับแม่ที่โซลเป็นหลักเมื่อเริ่มฝึกกับ SM จริงจังปลายปี 2013',
        'เขาโตมากับ American soul และ R&B, เพลงป๊อปเกาหลี และป๊อปยุค 80s จากกองแผ่นเสียงของพ่อแม่ ตอนอายุ 9 ครูดนตรีที่โรงเรียนสังเกตว่าเขาจับ pitch ได้แม่น เขาจึงเริ่มเรียนร้องเพลงจริงจังที่กรุงเทพฯ และพออายุ 10 ก็แกะเปียโนเล่นเองด้วยหู เริ่มร่างทำนองเพลงของตัวเอง พ่อแม่ยอมให้เรียนโดยมีข้อแม้ว่าผลการเรียนต้องไม่ตก',
        'อีกทางเขาเล่นศิลปะการต่อสู้และท่าผาดโผน — tricking, flips และเต้น hip-hop freestyle — ซึ่งกลายเป็นไม้ตายในรอบออดิชันเทรนนี และเป็นเหตุผลที่ทำให้เขาได้บทใน MCU ในเวลาต่อมา',
      ],
    },
    {
      id: '02',
      period: '2013–2015',
      title: 'SM Rookies — จากออดิชันที่ Bangkok สู่เวทีที่ Seoul',
      body: [
        'เดือนกุมภาพันธ์ 2013 พอเรียนจบมัธยมต้น James ไปออดิชัน open call ของ SM Entertainment ที่จัดในไทย เขาเลือกร้อง "I\'ll Never Break Your Heart" ของ Backstreet Boys กับ "Sherlock" ของ SHINee แล้วต่อด้วย hip-hop freestyle ที่แทรก tricking flips เข้าไป แต่สิ่งที่ทำให้กรรมการเกาหลีในห้องนั้นทึ่งที่สุดคือภาษาเกาหลีที่เขาพูดคล่องปร๋อทั้งที่ออดิชันอยู่ในไทย',
        'หลังออดิชัน ชื่อเขาเริ่มแพร่ในคอมมูนิตี้แฟนออนไลน์ในฐานะหนึ่งใน "เด็กไทยสองคนที่ผ่าน SM" โดยมีคนเรียกว่า "คนตัวสูงที่เล่น flips" วันที่ 16 ธันวาคม 2013 SM เปิดตัวเขาอย่างเป็นทางการในทีม SM Rookies ในฐานะเทรนนีก่อนเดบิวต์สาย performance และ vocal และเขาก็ถูกจับตาเป็นตัวเต็งของรุ่นแทบจะทันที การย้ายไปโซลครั้งนี้ยังทำให้เขาได้อยู่กับแม่เต็มเวลาเป็นครั้งแรกหลังพ่อแม่แยกทาง',
        'ปี 2014 เขาเข้าเรียนที่ School of Performing Arts Seoul (SOPA) แล้วพัฒนาเร็วขึ้นมากเพราะได้อยู่ในที่ที่ต้องขึ้นแสดงจริง ภาษาเกาหลี อังกฤษ และญี่ปุ่นดีขึ้นเองจากการใช้ทุกวัน และเขาเริ่มสนิทกับเทรนนีรุ่นเดียวกันที่ต่อมาจะกลายเป็น NCT วันที่ 24 สิงหาคม 2014 เขาขึ้นแสดงเพลง "Super Moon" คู่กับ Lee Tae-yong ในโชว์เคสที่ SM ใช้ทดสอบเคมีระหว่างเด็กในค่าย',
        'ปี 2015 ที่ทางของเขาในไลน์อัป Rookies เริ่มชัด เวที "Bassbot" เดือนมีนาคมตอกย้ำจุดแข็งด้านการแสดงที่ใช้ร่างกายหนัก ซึ่งมาจากพื้นศิลปะการต่อสู้ของเขาโดยตรง วันที่ 30 กรกฎาคม 2015 เขาขึ้น SM Rookies Show ที่โซล เป็นเวทีใหญ่รอบท้ายๆ ก่อนที่ค่ายจะเคาะไลน์อัปออกมาเป็น NCT 127',
      ],
    },
    {
      id: '03',
      period: '2016–2019',
      title: 'NCT 127 — การเดบิวต์และระบบวง',
      body: [
        'James เดบิวต์กับ NCT 127 วันที่ 7 กรกฎาคม 2016 ด้วยเพลง "Fire Truck" ค่ายวางเขาเป็น main vocalist คู่กับ Moon Tae-il ในโครงเสียงช่วงแรกของวง และให้อยู่ในแกน performance ร่วมกับ Taeyong และ Mark Lee สามสัปดาห์ต่อมาเขาไปแข่ง King of Mask Singer ใต้หน้ากาก "Cat\'s Eyes (고눈마)" คว้าชัยในรายการช่วง 24 กรกฎาคมถึง 10 สิงหาคม และทำให้คนเกาหลีทั่วไปรู้จักเขาในแบบที่การเดบิวต์กับวงอย่างเดียวยังทำไม่ได้ ชื่อเล่นจากหน้ากากนี้กลายเป็นที่มาของชื่อ GONUNMA ในเวลาต่อมา',
        'วันที่ 11 พฤศจิกายน 2016 SM ปล่อย GONUNMA: LIKE I DO เป็นมินิอัลบั้มที่ออกแบบเงียบๆ ไม่มีการโปรโมตทางออกอากาศและไม่ขึ้นเวทีมิวสิกโชว์เลย เพื่อไม่ให้กระทบสมดุลภายในวง แฟนแบ่งเป็นสองฝ่ายทันที ฝ่ายหนึ่งเห็นตัวตนศิลปินเดี่ยวที่ชัดเจนอยู่ในนั้น อีกฝ่ายเป็นห่วงว่าสปอตไลต์ในทีมจะเสียสมดุล',
        'ตลอดปี 2017 โครงเสียงของ NCT 127 ขยับจากแกน Taeil–James ไปเป็น Taeil–Doyoung–Jaehyun James ถูกย้ายไปอยู่ชั้น lead vocal support เขาเรียนจบ SOPA วันที่ 7 กุมภาพันธ์ 2017 เดือนมิถุนายนปีเดียวกันเขาปล่อยเพลงเวอร์ชันไลฟ์ "Everlasting" ซึ่งแฟนเริ่มพูดกันว่าเป็นที่ที่ได้ยินความเป็น James ชัดที่สุด ชัดกว่าเพลงไตเติ้ลของวงด้วยซ้ำ',
        'ปลายปี 2018 หลัง Jungwoo เข้าวงเต็มตัว เสียงย่านกลางและตำแหน่ง soft-center ที่ทับกันชัดเจนทำให้ไลน์ร้องของ James ถูกจัดสรรใหม่ และรูปแบบนั้นก็ลากยาวไปอีกหลายปี เดือนกรกฎาคม 2019 เขาไปออดิชันบท Shang-Chi พื้นศิลปะการต่อสู้บวกกับการพูดได้หลายภาษาตรงกับที่ Marvel กำลังหาอยู่พอดี วันที่ 20 กรกฎาคม 2019 การแคสต์ถูกยืนยันบนเวที Comic-Con เป็นจุดที่เส้นทางของเขาเริ่มแยกออกไปอีกทาง',
      ],
    },
    {
      id: '04',
      period: '2020–2022',
      title: 'ยุค Shang-Chi — Hollywood และสายงานคู่ขนาน',
      body: [
        'การถ่ายทำหลักของ Shang-Chi and the Legend of the Ten Rings เริ่มเดือนกุมภาพันธ์ 2020 แล้วต้องหยุดกลางทางในเดือนมีนาคมเพราะ COVID-19 James กลับเกาหลีและไปโปรโมต NCT 127 เพลง "Kick It" ระหว่างที่กองพัก ไลน์ร้องของเขาช่วงนั้นเพิ่มขึ้น กองกลับมาถ่ายต่อที่ออสเตรเลียเดือนมิถุนายน 2020 ภายใต้มาตรการกักตัว ปิดกล้องวันที่ 24 ตุลาคม 2020 หนังฉายรอบปฐมทัศน์ที่ฮอลลีวูดวันที่ 16 สิงหาคม 2021 ทำรายได้ทั่วโลก $728M ไม่กี่วันหลังจากนั้นคลิปสัมภาษณ์จาก press tour ก็ไวรัล ทำให้ผู้ชมฝั่งตะวันตกรู้จักเขาโดยไม่ต้องผ่านบริบท K-pop เป็นครั้งแรก และเดือนกันยายนปีเดียวกันเขาได้ขึ้นปก Entertainment Weekly ในสกู๊ปนักแสดง Shang-Chi ซึ่งเรียกเขาตลอดเล่มว่า "James Hwang จาก NCT 127"',
        'วันที่ 11 มกราคม 2022 James ปล่อย SOFTEST TOUCH ซิงเกิลเดี่ยวชุดแรกที่ค่ายวางกรอบให้เต็มรูปแบบ แฟนมองว่าเป็นการปล่อยของที่อั้นไว้หกปี เพลงขึ้นอันดับ 1 ทั้ง M Countdown, Music Bank, Show! Music Core และ Inkigayo ในสัปดาห์เดียว พร้อมกับที่เพลงไตเติ้ล LIKE I DO ปี 2016 ถูกดันกลับมาโปรโมตอีกรอบ ทำให้ตัวตน GONUNMA กลายเป็นเนื้อเดียวกัน วันที่ 27 มีนาคม 2022 เขาขึ้นแสดงเพลง "Fire in the Sky" กับ Anderson .Paak ในงาน Academy Awards ครั้งที่ 94 เดือนกรกฎาคมปีเดียวกัน ฝ่าย licensing ของ SM จัดดีลพรีเซนเตอร์แบรนด์ต่างประเทศตัวแรกให้เขา คือแคมเปญระดับโลกของ Calvin Klein ซึ่งสื่อตอนนั้นเล่นมุม "ไอดอลที่ถูกแบรนด์เลือก" ต่างจากดีลหลังเป็นอิสระที่แบรนด์เดินเข้าหาเขาเอง',
        'กลางปี 2022 SM เริ่มคุยกันภายในเรื่องการต่อสัญญาสมาชิกต่างชาติ James ย้ายออกจากหอพักรวมของวง เดือนกันยายน 2022 เขากลับมาร่วมคัมแบ็ก "2 Baddies" ด้วยสัดส่วนไลน์ระดับกลางบน แล้วเข้าร่วมทัวร์ Neo City: The Link แบบเลือกงานไปจนปลายปี นี่เป็นกิจกรรมกลุ่มระยะยาวครั้งสุดท้ายก่อนข้อพิพาททางกฎหมายจะกลายเป็นเรื่องทางการ',
      ],
    },
    {
      id: '05',
      period: '2023',
      title: 'การแยกทาง — การคลี่คลายทางกฎหมายและความเป็นอิสระ',
      body: [
        'James ร่วมทัวร์ Neo City: The Link รอบอเมริกาเหนือและลาตินอเมริกาเดือนมกราคม 2023 เป็นงานกลุ่มใหญ่ครั้งสุดท้ายก่อนข้อพิพาทจะบานปลาย อัลบั้ม repackage "Ay-Yo" ที่ออกวันที่ 30 มกราคมมีไลน์ร้องของเขาลดลงชัดเจนเมื่อเทียบกับยุค Sticker และ Favorite จนแฟนเริ่มพูดถึงความตึงเครียดในวงกันอย่างเปิดเผย นี่คือผลงานชิ้นสุดท้ายใต้ SM Entertainment ที่มีเขาอยู่ด้วย',
        'ต้นเดือนกุมภาพันธ์ 2023 James เริ่มปรึกษาทีมกฎหมายเรื่องโครงสร้างสัญญา อำนาจตัดสินใจในงานสร้างสรรค์ และการถูกปฏิบัติอย่างไม่เป็นธรรม ปลายเดือนเดียวกันเขายื่น injunction ระงับข้อผูกพันตามสัญญาและเปิดโต๊ะเจรจาอย่างเป็นทางการ กลางเดือนมีนาคม SM ฟ้องกลับโดยอ้างความเสียหายต่อชื่อเสียง และเรื่องก็แดงขึ้นเมื่อ Dispatch เผยแพร่บันทึกเสียงการประชุมภายในบางส่วน วันที่ 12 มีนาคมเขาไปงาน Academy Awards ครั้งที่ 95 ปีที่ Everything Everywhere All at Once กวาดรางวัลสายหลักไปเกือบหมด เขาปรากฏตัวกับทีมนักแสดงในงานหลังประกาศผล และใช้เวทีนั้นย้ำสถานะศิลปินระดับโลกของตัวเองในระหว่างที่คดียังไม่จบ',
        'การไกล่เกลี่ยรอบสุดท้ายสำเร็จช่วงกลางถึงปลายเดือนเมษายน 2023 และเซ็น settlement วันที่ 27 เมษายน James ยุติสัญญากับ SM แบบตกลงร่วมกัน ทั้งสองฝ่ายถอนคำร้องทางกฎหมาย และมีข้อตกลงแบบไม่เป็นทางการว่าจะไม่กีดกันเขาในวงการ วันที่ 30 เมษายน 2023 เขาตั้ง JH Company และเซ็นสัญญาจัดจำหน่ายกับ Warner Music Korea เพลงทุกเพลงที่เขาแต่งไว้ในช่วงที่ยังอยู่ใต้สัญญาถูกยืนยันว่าเป็นทรัพย์สินทางปัญญาของเขา กลายเป็นรากฐานของ catalog เดี่ยวที่ตามมา ส่วน master ของงานที่อัดไว้ใต้ SM ยังอยู่กับ SM ซึ่งเป็นเหตุผลที่อัลบั้ม DECADE ในเวลาต่อมาต้องใช้เวอร์ชันเดี่ยวที่อัดใหม่แทนต้นฉบับ',
        'เรื่องไม่จบที่การ settle หุ้น SM ร่วงชัดเจนในช่วงซื้อขายถัดมา และภายในเดือนพฤษภาคม 2023 Fair Trade Commission ของเกาหลีก็เปิดสอบสวนแนวปฏิบัติสัญญาไอดอลทั้งวงการ โดยอ้างคดีนี้เป็นจุดตั้งต้น ตลอดปีที่เหลือมีรายงานว่าศิลปินจากค่ายใหญ่อื่นเอาคดีนี้ไปอ้างเงียบๆ ตอนต่อรองสัญญาของตัวเอง และสารคดีเกี่ยวกับคดีนี้ก็ข้ามจากสื่อวงการไปสู่สื่อบันเทิงทั่วไป เดือนพฤศจิกายน 2023 สภาเกาหลีอ้างถึงคดีนี้ระหว่างแก้ Popular Culture and Arts Industry Development Act จนสื่อตั้งชื่อเล่นให้ว่า "Hwang Clause" ธันวาคมปีเดียวกัน James เป็นหนึ่งในผู้ร่วมก่อตั้งองค์กรด้านสิทธิไอดอล เปลี่ยนชัยชนะทางกฎหมายของคนคนเดียวให้เป็นแรงผลักดันทั้งวงการ',
      ],
    },
    {
      id: '06',
      period: '2023–2025',
      title: 'PULSE และ ARE U STILL — การปักหลักในฐานะศิลปินเดี่ยว',
      body: [
        'วันที่ 22 มิถุนายน 2023 James ประกาศอัลบั้มเต็มชุดแรก PULSE พร้อมทัวร์คอนเสิร์ต อัลบั้มออกวันที่ 21 กรกฎาคมพร้อมเพลงไตเติ้ลสองเพลง การโปรโมตในรายการเพลงเกาหลีทำได้แบบเลือกช่อง เพราะมีข้อตกลงว่าจะไม่กีดกันเขา ทัวร์ PULSE 2023 (Leg 1) เปิดวันที่ 28 กรกฎาคม วิ่งผ่านเกาหลี ญี่ปุ่น จีน และไต้หวัน เดือนตุลาคม เพลง "If I Knew" ออกสัปดาห์เดียวกับคัมแบ็กของ NCT 127 โดยสองแคมเปญไม่แตะกันเลย จนถูกมองว่า "แยกกันแต่ไม่ได้เป็นศัตรูกัน"',
        'เดือนพฤศจิกายน 2023 James ประกาศอัลบั้ม ARE U STILL (8 มกราคม 2024) พร้อมขยายทัวร์ PULSE ออกไปทั่วโลก ในงาน Melon Music Awards เดือนธันวาคม 2023 เขาคว้า Top 10 Artist, Millions Top 10 Artist และ Best Male Solo พร้อมได้เครดิตโปรดิวเซอร์บนเวที collaboration พิเศษ จนเวทีนั้นยกให้เขาเป็น "Golden Producer" ARE U STILL ออกวันที่ 8 มกราคม 2024 ทัวร์ PULSE 2024 World Tour (Leg 2) ลากไปถึงเดือนพฤษภาคม ครอบคลุมเอเชียตะวันออกเฉียงใต้ โอเชียเนีย อเมริกาเหนือ (Madison Square Garden, Crypto.com Arena) และยุโรป ปิดวันที่ 30 พฤษภาคม รายได้ทัวร์ PULSE รวมทั้งหมด $235M จาก 64 รอบ',
        'วันที่ 26 สิงหาคม 2024 อัลบั้ม "J" ของ Jaehyun ออกมาพร้อมเพลงไตเติ้ล "SMOKE" ที่ James เป็นโปรดิวเซอร์ เป็นการร่วมงานเชิงสร้างสรรค์อย่างเป็นทางการครั้งแรกกับศิลปิน SM หลังแยกทาง เพลง "Flowers" ของ aespa ที่ออกเดือนตุลาคมก็เป็นงานโปรดิวซ์ของเขาเช่นกัน การเข้าชิง Grammy ของ ARE U STILL มาถึงช่วงปลายปี และวันที่ 2 กุมภาพันธ์ 2025 เขาคว้า Best Progressive R&B Album กับ Best R&B Performance ("Tears On A Pretty Face") บนเวที Grammy',
        'ตั้งแต่เป็นอิสระในปี 2023 JH Company ดัน "James Hwang" ขึ้นเป็นชื่อหลักที่ใช้กับสาธารณะ ทั้งสื่อสหรัฐฯ รายการทอล์กโชว์ดึก และผลงานที่ปล่อยอย่างเป็นทางการ และชัดขึ้นเรื่อยๆ จนถึงแคมเปญ Grammy ปี 2025 ส่วน GONUNMA ที่มาจากชื่อเล่นในรายการ King of Mask Singer ปี 2016 และคนรู้จักมาตั้งแต่ตอนนั้นแม้ SM จะไม่เคยผลักดันอย่างเป็นทางการ ถูกเก็บไว้เป็นเครดิตโปรดิวเซอร์กับคนแต่งเพลง และเป็นชื่อบัญชี SNS (@gonunma) เหตุผลนั้นตรงไปตรงมา: ในตลาดอเมริกา GONUNMA ต้องอธิบายและไม่มีใครรู้จัก ขณะที่ "James Hwang" เป็นชื่อที่คนดูจำได้อยู่แล้วจากแฟรนไชส์ Shang-Chi ก่อนหน้านั้น SM เคยอ้างสิทธิ์ในชื่อ GONUNMA ระหว่างข้อพิพาท แล้วถอนข้ออ้างไปเป็นส่วนหนึ่งของ settlement ปี 2023 ซึ่งยืนยันว่าสิทธิ์เป็นของ James ทั้งหมด เพราะชื่อนี้มีมาก่อนที่จะถูกใช้กับผลงานที่ปล่อยผ่าน SM และมาจากรายการโทรทัศน์สาธารณะ เมื่อความเป็นเจ้าของไม่เป็นประเด็นอีก การรวมชื่อในปี 2025 จึงเป็นเรื่องของความชัดเจน ไม่ใช่ข้อพิพาทที่ยังค้างอยู่',
      ],
    },
    {
      id: '07',
      period: '2024–2026',
      title: 'ยุค POPSTAR — CAN\'T LEAVE ALONE, Shang-Chi II และการกลับมา',
      body: [
        'เดือนธันวาคม 2024 James กลับไปร่วมกิจกรรม NCT 127 ในฐานะ external artist ด้วยข้อตกลงที่แทบไม่มีใครทำได้ก่อนหน้านี้ในวงการ K-pop เพราะศิลปินที่ออกจากค่ายหลังฟ้องร้องกันเต็มรูปแบบมักไม่ได้กลับมาร่วมงานกับวงอีก SM ยอมเพราะการเสียเขาไปถาวร ตอนที่เขากลายเป็นชื่อระดับโลกที่วงเองสร้างขึ้นมาไม่ได้แล้ว แพงกว่าการยอมแบ่งอำนาจควบคุมบางส่วน เงื่อนไขที่ได้คือ James ถือ JH Company และ catalog หลังปี 2023 ไว้เต็มร้อย เลือกเองได้ว่าจะร่วมงานวันไหนหรือผลงานไหน และไม่ต้องเซ็นสัญญาผูกขาดใหม่ ข้อตกลงนี้คุมทุกอย่างที่ตามมา ตั้งแต่การพักวงตลอดปี 2025 ไปจนถึงการกลับมาร่วมงานครบรอบ 10 ปีเต็มตัวช่วงมิถุนายน–กรกฎาคม 2026 ในทุกวันที่จัดนอกประเทศไทย',
        'CAN\'T LEAVE ALONE อัลบั้มคอนเซปต์คู่ ออกวันที่ 10 กุมภาพันธ์ 2025 โดยไม่มีการโปรโมตทางออกอากาศในเกาหลีเลย เป็นการเลือกทั้งเชิงธุรกิจและเชิงส่วนตัวที่จะโฟกัสแพลตฟอร์มสหรัฐฯ และตลาดโลกเท่านั้น เดือนมิถุนายน 2025 James ประกาศพักกิจกรรมกลุ่มกับ NCT 127 ถึงเดือนกรกฎาคม 2026 เพื่อทุ่มให้งานเดี่ยวและการปิดไตรภาค Shang-Chi หนัง Shang-Chi and the Legacy of the Ten Rings ฉายรอบปฐมทัศน์วันที่ 25 กรกฎาคม 2025 โดยเขามีเครดิตร่วมเขียนบท เป็นเครดิตเขียนบทอย่างเป็นทางการครั้งแรกของเขาในงานสตูดิโอ',
        'ช่วงกรกฎาคมถึงสิงหาคม 2025 เหตุการณ์การเมืองในไทยทำให้คนแตกเป็นสองความเห็นรอบตัว James อยู่พักหนึ่ง เขาออกแถลงการณ์แบบระมัดระวังและเน้นสันติ ลดการใช้ภาษาไทยในที่สาธารณะ และพักกิจกรรมที่เกี่ยวกับไทยไปจนหมดปี',
        'เดือนกันยายน 2026 มีงานใหญ่สองชิ้นมาชนกัน: DECADE อัลบั้มรวมชุดแรกของเขาที่ฉลองครบสิบปีจากวันเดบิวต์กับ NCT 127 พร้อมเพลงใหม่สี่เพลง และ Shang-Chi and the Last of the Ten Rings กำกับโดย Destin Daniel Cretton ร่วมเขียนบทโดย James ปิดไตรภาคลงอย่างสมบูรณ์ เดือนเดียวกันนั้น ความสัมพันธ์ของเขากับ Ashley Liao นักแสดงร่วมเรื่องก็ถูกยืนยันต่อสาธารณะผ่านแถลงการณ์ร่วม',
        'CAPTAIN EO: RESONANCE แฟรนไชส์ Disney+ ที่เขาปั้นเองในฐานะผู้สร้าง ผู้กำกับร่วม คนทำดนตรี และนักแสดงนำ ฉายเป็นซีรีส์เรือธงช่วงเทศกาลเดือนธันวาคม 2026 ทัวร์ DECADE เปิดเดือนมกราคม 2027 สิบปีผ่านไปนับจากวันที่เป็นเทรนนี SM Rookies จนมาเป็นศิลปินอิสระที่คว้า Grammy เป็นนักแสดงนำ MCU และเป็นเจ้าของ IP ด้วยตัวเอง',
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
  gallery: {
    heading: 'ภาพพอร์เทรตและภาพถ่าย',
    portraits: [
      { src: 'jh_age_16.png', caption: 'อายุ 16 — ช่วงเป็นเทรนนีก่อนเดบิวต์ (ราวปี 2014)' },
      { src: 'jh_age_20.png', caption: 'อายุ 20 — ยุค NCT 127 (ราวปี 2018)' },
      { src: 'jh_age_25.png', caption: 'อายุ 25 — หลังแยกตัวเป็นอิสระ ยุค PULSE (ราวปี 2023)' },
    ],
    group: { src: 'nct127_regulate.png', caption: 'Regulate ของ NCT 127 (2018) — James Hwang อยู่ในภาพร่วมกับวงช่วง repackage Regular-Irregular' },
  },
};

export const biography = { en, th };
export function getBiography(lang: Lang) {
  return biography[lang];
}
