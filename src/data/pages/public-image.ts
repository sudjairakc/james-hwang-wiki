// Bilingual content for the Public Image & Personal Background page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Dates, numbers, and proper nouns (names, places, companies, titles) are
// kept identical across both languages on purpose. Severity/stance enum
// values ('low' | 'medium' | 'neutral') drive badge colors and are kept
// identical across languages — their display labels are translated
// separately under ui.severityLow / ui.severityMedium / ui.severityNeutral.

import type { Lang } from '../../i18n';

type Severity = 'low' | 'medium' | 'neutral';

type BioFact = { label: string; val: string };
type NctDynamic = { topic: string; severity: Severity; text: string };
type Controversy = { era: string; type: string; severity: Severity; names: string[]; note: string };
type Pictorial = { year: string; pub: string; issue: string; concept: string; cover: boolean };
type VarietyItem = { year: string; show: string; platform: string; context: string };
type SocialEvolutionItem = { period: string; label: string; color: string; detail: string };
type SocialPlatform = { platform: string; handle: string; followers: string; notable: string };
type PoliticalItem = { period: string; event: string; text: string };
type ReputationItem = { label: string; color: string; text: string };

const en = {
  ui: {
    label: 'Biography',
    title: 'Public Image & Personal Background',
    subtitle: 'Thai-Chinese father · Korean mother · Born June 22, 1998 · Thai citizenship',
    bioHeading: 'Personal Background',
    familyNote:
      'His father and mother met while studying in the United States. They separated in 2008–2009, while he was still in elementary school; custody shifted by phase rather than staying fixed — Bangkok with his father through the rest of his schooling, then Seoul with his mother once SM training began in late 2013. Both parents remained involved in raising him throughout. Between his father\'s Thai-Chinese household, his mother\'s Korean side of the family, and English-medium schooling, he grew up across four languages from birth — Thai, Chinese, English, and Korean. This internationally rooted upbringing has led critics to view his mother\'s academic influence and his father\'s business background as shaping Hwang\'s artist-meets-executive approach.',
    groupDynamicsHeading: 'Group Dynamics — NCT 127',
    politicalHeading: 'Thailand Political Engagement',
    politicalFootnote: 'Unlike most K-pop artists, who tend to avoid expressing political opinions about their home country.',
    pictorialsHeading: 'Magazine Pictorials',
    coverBadge: 'Cover',
    varietyHeading: 'Variety & Talk Show Appearances',
    reputationHeading: 'Interpersonal Reputation & Personal Ethics',
    socialHeading: 'Social Media & Online Presence',
    controversiesHeading: 'Controversies & Rumors',
    sasaengLabel: 'Sasaeng Sources',
    severityLow: 'low',
    severityMedium: 'medium',
    severityNeutral: 'neutral',
  },
  bioFacts: [
    { label: 'Born', val: 'June 22, 1998' },
    { label: 'Heritage', val: 'Thai-Chinese (paternal) · Korean (maternal)' },
    { label: 'Father', val: 'Thai-Chinese · Bangkok businessman' },
    { label: 'Mother', val: 'Korean · Feminist author' },
    { label: 'Citizenship', val: 'Thai · U.S. residency filing (2027–)' },
    { label: 'Languages', val: 'Thai · Chinese · Korean · English · Japanese (fluent)' },
    { label: 'Education', val: 'SOPA (School of Performing Arts Seoul)' },
  ] as BioFact[],
  nctDynamics: [
    {
      topic: 'Vocal Line Distribution',
      severity: 'medium',
      text: 'Since the Regular era, Kim Doyoung\'s vocal role has grown steadily while Hwang\'s line share has declined — creating ongoing fandom-level tension between the two camps.',
    },
    {
      topic: 'Dance Line Status',
      severity: 'neutral',
      text: 'Regarded as one of the group\'s frontline dancers alongside Lee Taeyong and Mark Lee — a core part of his "performance-centered idol" image.',
    },
    {
      topic: 'Age Hierarchy Ambiguity',
      severity: 'low',
      text: 'Despite being the same age as Kim Jung-woo, Mark Lee often calls Hwang "hyung," while Jungwoo treats Mark as a peer — a point of ongoing debate among fans.',
    },
    {
      topic: 'Contract Dispute Era Rumors',
      severity: 'low',
      text: 'Rumors circulated that the contract dispute was tied to internal group relationships — unconfirmed, and later viewed as part of the general speculation during the period when the situation was still unclear.',
    },
  ] as NctDynamic[],
  controversies: [
    {
      era: 'SM-era (2021)',
      type: 'Dating Rumors',
      severity: 'low',
      names: ['Winter (aespa)', 'Karina (aespa)'],
      note: 'Unconfirmed — generally viewed as a byproduct of being labelmates.',
    },
    {
      era: '2022–2023',
      type: 'Co-Star Rumor',
      severity: 'low',
      names: ['Ashley Liao'],
      note: 'Co-starred in a film project — no evidence confirming a romantic relationship at the time.',
    },
    {
      era: '2023',
      type: 'Media Rivalry Narrative',
      severity: 'medium',
      names: ['Jeon Jungkook (BTS)'],
      note: 'Media framed a "parallel career trajectory" narrative around the two, who had attended SOPA together — creating fandom tension that eased after Jungkook entered mandatory military service.',
    },
    {
      era: '2024',
      type: 'U.S. Breakthrough-era Rumors',
      severity: 'low',
      names: ['Olivia Rodrigo', 'Sabrina Carpenter', 'Hunter Schafer'],
      note: 'All tabloid-level speculation — no confirmation from official sources.',
    },
    {
      era: '2024',
      type: 'Cultural Appropriation Allegations',
      severity: 'medium',
      names: [],
      note: 'Criticized for leaning too heavily on African-American cultural influence during the ARE U STILL era — no evidence found in styling or cultural symbolism, and some African-American fans responded positively instead.',
    },
    {
      era: '2025',
      type: 'Dating Rumor — HYBE sphere',
      severity: 'low',
      names: ['Hanni (NewJeans)'],
      note: 'Surfaced during CAN\'T LEAVE ALONE promotion, sparking age-gap debate within the fandom — unconfirmed.',
    },
  ] as Controversy[],
  pictorials: [
    { year: '2022', pub: 'W Korea', issue: 'February 2022', concept: 'Solo debut feature — minimal white studio set, oversized tailoring. First major magazine cover as GONUNMA solo artist. Shot by Hong Jang-hyun.', cover: true },
    { year: '2022', pub: 'Vogue Korea', issue: 'April 2022', concept: 'Post-Oscars editorial — sharp suiting, architectural environments. Positioned James in the global-actor register following the "Fire in the Sky" Academy Awards performance.', cover: false },
    { year: '2023', pub: 'GQ Korea', issue: 'August 2023', concept: 'PULSE era cover story — outdoor urban locations, monochrome palette. Interview focuses on the SM departure and the founding of JH Company.', cover: true },
    { year: '2023', pub: 'Rolling Stone US', issue: 'November 2023', concept: 'First major US magazine feature. Studio portrait series with minimal props. Profile text covers Grammy trajectory and R&B crossover positioning.', cover: false },
    { year: '2024', pub: 'i-D Magazine', issue: 'Spring 2024', concept: 'ARE U STILL era editorial — abstract movement photography, fluid styling. One of the more fashion-forward shoots in the catalog; referenced frequently in idol fashion discourse.', cover: true },
    { year: '2025', pub: 'Dazed Korea', issue: 'March 2025', concept: 'Grammy winner special — deconstructed formalwear, industrial sets. Shot in the week following the Grammy ceremony.', cover: false },
    { year: '2025', pub: 'Harper\'s Bazaar Korea', issue: 'January 2025', concept: "CAN\'T LEAVE ALONE pre-release — dual concept shoot mirroring the album\'s two-register visual language. Two separate 8-page spreads: one cold-tone, one warm-tone.", cover: true },
    { year: '2025', pub: 'Allure US', issue: 'June 2025', concept: 'Shang-Chi 2 press feature — interview-driven shoot in LA. Profile discusses the co-screenwriting credit and his approach to character development in franchise filmmaking.', cover: false },
    { year: '2026', pub: 'Esquire Korea', issue: 'October 2026', concept: 'DECADE anniversary editorial — retrospective photography spanning all six album eras. Archival pieces from JH Company vault incorporated alongside new studio images.', cover: true },
  ] as Pictorial[],
  variety: [
    { year: '2022', show: 'You Quiz on the Block', platform: 'tvN', context: 'First major Korean variety appearance as solo artist — aired February 2022. Discussed the SOFTEST TOUCH debut, the King of Mask Singer origin of GONUNMA, and his early life in Bangkok. Episode was one of the season\'s highest-rated.' },
    { year: '2022', show: 'The Tonight Show Starring Jimmy Fallon', platform: 'NBC', context: 'US late-night debut — March 2022, timed to the Oscars performance. Performed "Fire in the Sky" (acoustic arrangement) and gave a short interview segment covering his dual career in music and film.' },
    { year: '2023', show: 'Running Man (guest)', platform: 'SBS', context: 'One-episode guest appearance — August 2023, during the Korea leg of the PULSE tour. Noted for being more relaxed and humorous on camera than his public persona typically suggests. Clipped segments went widely viral on YouTube.' },
    { year: '2023', show: 'The Late Show with Stephen Colbert', platform: 'CBS', context: 'PULSE promotion — July 2023. Performed "HOW DOES IT FEEL?" with a live band arrangement. Interview covered the Grammy ambition and the PULSE sound.' },
    { year: '2024', show: 'Saturday Night Live (musical guest)', platform: 'NBC', context: 'SNL musical guest — April 2024, during the North America leg of the PULSE World Tour. Performed "Tears On A Pretty Face" (full dance crew) and "If I Knew" (stripped-back). One of the most-watched SNL musical performances of the season; became a cultural reference point for K-adjacent artists crossing into US television.' },
    { year: '2024', show: 'The Graham Norton Show', platform: 'BBC One', context: 'UK appearance during PULSE 2024 World Tour Europe leg — May 2024. Appeared alongside other guests; discussed the Shang-Chi franchise. UK fandom growth credited partly to this appearance.' },
    { year: '2025', show: 'The Tonight Show Starring Jimmy Fallon', platform: 'NBC', context: 'Grammy win celebration appearance — February 2025. Performed "Tears On A Pretty Face" the week after the Grammy ceremony. Thank-you message to US audience widely shared across social platforms.' },
    { year: '2025', show: 'Knowing Bros (아는 형님)', platform: 'JTBC', context: 'Guest appearance — June 2025, ahead of Shang-Chi 2 release. First time on a Korean idol-adjacent variety format since departing SM. Notable for the cast\'s reaction to James discussing his NCT 127 years with candor.' },
    { year: '2026', show: 'Good Morning America', platform: 'ABC', context: 'Shang-Chi 3 and DECADE promotional appearance — September 2026. Live performance of "NEW" (DECADE lead single) in the GMA outdoor plaza. One of the rare occasions James performed at a US morning broadcast format.' },
  ] as VarietyItem[],
  socialEvolution: [
    {
      period: '2016–2022',
      label: 'SM-Controlled Era',
      color: '#6e5a7c',
      detail: 'Content was dictated by SM Entertainment — posting scheduled around the PR plan, images passed through approval, no clear personal voice. Twitter was used for scripted fan interaction more than authentic self-expression.',
    },
    {
      period: '2023–2024',
      label: 'Independence Burst',
      color: '#5a7c6a',
      detail: 'After leaving SM and founding JH Company — the most he has ever posted in his career, across Instagram, Twitter, and TikTok, to repay waiting fans and build momentum for the new label. Some periods included behind-the-scenes and personal moments never shown before.',
    },
    {
      period: '2025 (post-Grammy)',
      label: 'Transition',
      color: '#facc15',
      detail: 'After winning the Grammy in February 2025 — posting frequency began to steadily decline, captions grew shorter, Stories nearly disappeared, and engagement with fan comments dropped to zero. JH Company\'s team described it as "repositioning," not "withdrawal." During the same period, official releases and US press appearances began using "James Hwang" as the primary name instead of GONUNMA — reflecting a consolidation toward a single name for the global market.',
    },
    {
      period: '2025–present',
      label: 'Mystique Era',
      color: '#c9a84c',
      detail: 'Posting now happens only around era rollouts, film press, and major statements — no day-to-day content, no vlogs, no regular Stories. Each post is anticipated and generates unusually high engagement precisely because of its scarcity — a model that runs directly opposite the parasocial-first K-pop template.',
    },
  ] as SocialEvolutionItem[],
  socialPlatforms: [
    {
      platform: 'Instagram',
      handle: '@gonunma',
      followers: '28.4M',
      notable: 'DECADE announcement (Jun 2026) — 4.2M likes in 24h · Ashley Liao relationship post totaled 6.1M likes combined',
    },
    {
      platform: 'X (Twitter)',
      handle: '@gonunma',
      followers: '19.7M',
      notable: 'Thai–Cambodia peace statement (2025) — simultaneously the most ratio\'d and most shared tweet of his career, driven by two opposing camps',
    },
    {
      platform: 'YouTube',
      handle: 'James Hwang Official',
      followers: '12.1M subs',
      notable: '"Tears On A Pretty Face" MV — 500M views (Feb 2026) · no vlog or daily-content channel',
    },
    {
      platform: 'TikTok',
      handle: '@gonunma',
      followers: '15.2M',
      notable: 'ARE U STILL dance challenge (2024) — 2.1B user-created views · presence driven mostly by fan edits rather than official content',
    },
  ] as SocialPlatform[],
  reputationItems: [
    {
      label: 'Approachability',
      color: '#5a7c6a',
      text: 'His "approachable" image has remained consistent throughout his career — JH Company staff, film crews, journalists, and members of the public who have met him all report, consistently, that Hwang shows no two-faced behavior and is no different on camera than off it. Even after 2024, when the company significantly scaled back his public profile, his day-to-day personality did not change to match.',
    },
    {
      label: 'Weverse Presence',
      color: '#5a7aaa',
      text: 'Even as posting frequency on Instagram, X, and TikTok dropped to near zero during the Mystique Era, Weverse has been the exception. Hwang has never abandoned this channel — he still replies to fans, posts thoughts during work, and consistently uses it as the most direct space with Gemzen. Fandom analysts point to Weverse loyalty as the main factor behind the unusually strong cohesion of his core fanbase compared to other mystique-model artists.',
    },
    {
      label: 'No Bad-Personality News',
      color: '#c9a84c',
      text: 'Throughout his career, no negative reports about his personal character have surfaced from any source — no former staff, no collaborating artists, no journalists. All the negative-press moments trace back to his political positions and to a fandom large enough to generate drama on its own, not to his own behavior.',
    },
    {
      label: 'Free Speech Philosophy',
      color: '#6e5a7c',
      text: 'Hwang holds the position that hate speech falls under free speech — JH Company almost never sues people who post negative or insulting content, except in cases of clear defamation that causes tangible financial harm (such as false reports that impact the value of an endorsement contract). JH Company\'s legal team has officially clarified this policy more than once.',
    },
  ] as ReputationItem[],
  politicalItems: [
    {
      period: '2020–2021',
      event: 'Political Donations',
      text: 'Public donation records revealed that Hwang financially supported Thai youth political movements during the reform protests.',
    },
    {
      period: '2021',
      event: 'Interview Position',
      text: 'Gave a carefully worded interview saying he felt ideologically close to the Pheu Thai Party, while avoiding an explicit endorsement, citing possible impact on his international music activities.',
    },
    {
      period: '2022',
      event: 'Ukraine–Russia Statement',
      text: 'Issued a statement calling for an immediate ceasefire while still at SM — carefully worded, not naming an aggressor, but clearly anti-military. After leaving SM, he condemned attacks on civilians more directly.',
    },
    {
      period: '2023–present',
      event: 'Israel–Gaza / US Military Aid',
      text: 'Called for a ceasefire and humanitarian access starting in late 2023, openly criticizing US military support — creating tension with Disney/Marvel. JH Company reportedly had to negotiate with Marvel\'s legal team over this at least once.',
    },
    {
      period: '2025–present',
      event: 'US–Iran De-escalation',
      text: 'Issued a statement calling for de-escalation as US–Iran tensions rose — criticized by some in America as inappropriate for someone living and working in the US.',
    },
    {
      period: '2025–present',
      event: 'Estrangement from Thailand',
      text: 'After his anti-war stance on the Thai–Cambodia conflict drew heavy nationalist backlash, James stopped appearing or promoting in his home country entirely. He has refused to apologize — restating the peace position at every opportunity rather than walking it back — and in 2026 skipped the Bangkok dates of NCT 127\'s REDLINE tour, his first-ever absence from a show in Thailand. It is the clearest personal cost of his politics: a self-chosen estrangement from home he will not trade away for market access.',
    },
    {
      period: '2026',
      event: 'UNESCO Goodwill Ambassador · Nobel Peace Prize Nomination',
      text: 'Appointed a UNESCO Goodwill Ambassador and, separately, confirmed among that year\'s Nobel Peace Prize nominees — both citing the same body of public statements: the Gaza ceasefire calls from 2023 onward and the Thai–Cambodia peace position that had just cost him his home market. Commentary around both honors returned to the same irony: international recognition arriving in the same year his own stance made him unwelcome in his own country.',
    },
  ] as PoliticalItem[],
  sasaengNote:
    'Sasaeng fan groups who tracked him closely have reported that nearly all the relationship rumors are true — that Hwang dated several industry figures on a short-term basis throughout 2021–2025 before starting a serious relationship with Ashley Liao. However, because the source is sasaeng activity, which carries no public credibility, these reports are widely dismissed — even though many fans believe the information is highly accurate.',
};

const th: typeof en = {
  ui: {
    label: 'ชีวประวัติ',
    title: 'ภาพลักษณ์สาธารณะและภูมิหลังส่วนตัว',
    subtitle: 'พ่อไทย-จีน · แม่เกาหลี · เกิด June 22, 1998 · สัญชาติไทย',
    bioHeading: 'ภูมิหลังส่วนตัว',
    familyNote:
      'บิดาและมารดาพบกันระหว่างศึกษาอยู่ในสหรัฐอเมริกา ทั้งสองแยกทางกันในปี 2008–2009 ตอนที่เขายังเรียนระดับประถมศึกษา การดูแลไม่ได้ตายตัว เปลี่ยนไปตามช่วงชีวิต — อยู่กรุงเทพฯ กับบิดาตลอดช่วงที่เหลือของการเรียน แล้วย้ายไปโซลกับมารดาตอนเริ่มฝึกกับ SM อย่างจริงจังช่วงปลายปี 2013 ทั้งสองฝ่ายยังคงมีบทบาทร่วมในการเลี้ยงดูบุตรตลอดมา ระหว่างครอบครัวฝั่งบิดาที่เป็นไทย-จีน ญาติฝั่งมารดาที่เป็นเกาหลี และการเรียนสายอินเตอร์ เขาเติบโตมาพร้อมสี่ภาษาตั้งแต่เกิด — ไทย จีน อังกฤษ และเกาหลี พื้นฐานครอบครัวที่เป็นสากลส่งผลให้นักวิจารณ์มองว่าอิทธิพลสายวิชาการของมารดาและสายธุรกิจของบิดามีผลต่อแนวทาง artist-meets-executive ของ Hwang',
    groupDynamicsHeading: 'พลวัตในวง — NCT 127',
    politicalHeading: 'การมีส่วนร่วมทางการเมืองในประเทศไทย',
    politicalFootnote: 'แตกต่างจากแนวปฏิบัติของศิลปิน K-pop ส่วนใหญ่ที่มักหลีกเลี่ยงการแสดงความคิดเห็นทางการเมืองในประเทศบ้านเกิด',
    pictorialsHeading: 'พิคทอเรียลนิตยสาร',
    coverBadge: 'ปก',
    varietyHeading: 'การออกรายการวาไรตี้และทอล์กโชว์',
    reputationHeading: 'ชื่อเสียงด้านมนุษยสัมพันธ์และจริยธรรมส่วนตัว',
    socialHeading: 'โซเชียลมีเดียและตัวตนออนไลน์',
    controversiesHeading: 'ประเด็นดราม่าและข่าวลือ',
    sasaengLabel: 'แหล่งข่าว Sasaeng',
    severityLow: 'ต่ำ',
    severityMedium: 'ปานกลาง',
    severityNeutral: 'ปกติ',
  },
  bioFacts: [
    { label: 'เกิด', val: 'June 22, 1998' },
    { label: 'เชื้อสาย', val: 'ไทย-จีน (พ่อ) · เกาหลี (แม่)' },
    { label: 'บิดา', val: 'ไทย-จีน · นักธุรกิจกรุงเทพฯ' },
    { label: 'มารดา', val: 'เกาหลี · นักเขียนแนวเฟมินิสต์' },
    { label: 'สัญชาติ', val: 'ไทย · ยื่นขอถิ่นที่อยู่สหรัฐ (2027–)' },
    { label: 'ภาษา', val: 'ไทย · จีน · เกาหลี · อังกฤษ · ญี่ปุ่น (คล่องแคล่ว)' },
    { label: 'การศึกษา', val: 'SOPA (School of Performing Arts Seoul)' },
  ] as BioFact[],
  nctDynamics: [
    {
      topic: 'การกระจายบทร้อง',
      severity: 'medium',
      text: 'ตั้งแต่ยุค Regular เป็นต้นมา บทบาทด้านเสียงร้องของ Kim Doyoung เพิ่มขึ้นต่อเนื่อง ขณะที่ส่วนแบ่งท่อนร้องของ Hwang ลดลง ก่อให้เกิดความตึงเครียดในระดับแฟนด้อมระหว่างทั้งสองฝ่าย',
    },
    {
      topic: 'สถานะสายเต้น',
      severity: 'neutral',
      text: 'จัดอยู่ในกลุ่มนักเต้นระดับแนวหน้าของวงร่วมกับ Lee Taeyong และ Mark Lee เป็นองค์ประกอบหลักของภาพลักษณ์ไอดอลที่ขายการแสดงเป็นหลัก',
    },
    {
      topic: 'ความคลุมเครือเรื่องลำดับอาวุโส',
      severity: 'low',
      text: 'แม้จะมีอายุเท่ากับ Kim Jung-woo แต่ Mark Lee มักเรียก Hwang ว่า "พี่" ขณะที่ Jungwoo ใช้รูปแบบความสัมพันธ์แบบเพื่อนกับ Mark กลายเป็นประเด็นถกเถียงในหมู่แฟนคลับ',
    },
    {
      topic: 'ข่าวลือช่วงข้อพิพาทสัญญา',
      severity: 'low',
      text: 'มีข่าวลือว่าความขัดแย้งด้านสัญญาเกี่ยวข้องกับความสัมพันธ์ภายในวง ไม่มีหลักฐานยืนยัน ภายหลังถูกมองว่าเป็นส่วนหนึ่งของกระแสคาดการณ์ในช่วงที่สถานการณ์ยังไม่ชัดเจน',
    },
  ] as NctDynamic[],
  controversies: [
    {
      era: 'SM-era (2021)',
      type: 'ข่าวลือเดตติ้ง',
      severity: 'low',
      names: ['Winter (aespa)', 'Karina (aespa)'],
      note: 'ไม่มีการยืนยัน โดยทั่วไปถูกมองว่าเป็นผลจากการเป็นศิลปินร่วมสังกัดเดียวกัน',
    },
    {
      era: '2022–2023',
      type: 'ข่าวลือคู่จิ้นจากกองถ่าย',
      severity: 'low',
      names: ['Ashley Liao'],
      note: 'ร่วมงานในโปรเจกต์ภาพยนตร์ ไม่มีหลักฐานยืนยันความสัมพันธ์เชิงโรแมนติก',
    },
    {
      era: '2023',
      type: 'กระแสคู่แข่งจากสื่อ',
      severity: 'medium',
      names: ['Jeon Jungkook (BTS)'],
      note: 'สื่อปั้นเรื่องเส้นทางอาชีพที่วิ่งขนานกันของทั้งสองคนที่เคยเรียนที่ SOPA ร่วมกัน ก่อให้เกิดความตึงเครียดในแฟนด้อม ลดลงหลัง Jungkook เข้ารับราชการทหาร',
    },
    {
      era: '2024',
      type: 'ข่าวลือช่วง US Breakthrough',
      severity: 'low',
      names: ['Olivia Rodrigo', 'Sabrina Carpenter', 'Hunter Schafer'],
      note: 'เป็นการคาดเดาระดับข่าวซุบซิบทั้งหมด ไม่มีการยืนยันจากแหล่งข้อมูลทางการ',
    },
    {
      era: '2024',
      type: 'ข้อกล่าวหา Cultural Appropriation',
      severity: 'medium',
      names: [],
      note: 'ถูกวิจารณ์ว่าได้รับอิทธิพลจากวัฒนธรรมแอฟริกัน-อเมริกันมากเกินไปในช่วง ARE U STILL ไม่มีหลักฐานด้านการแต่งกายหรือสัญลักษณ์ทางวัฒนธรรม แฟนคลับชาวแอฟริกัน-อเมริกันบางส่วนกลับแสดงความเห็นบวก',
    },
    {
      era: '2025',
      type: 'ข่าวลือเดตติ้ง — วง HYBE',
      severity: 'low',
      names: ['Hanni (NewJeans)'],
      note: 'ช่วงโปรโมต CAN\'T LEAVE ALONE ก่อให้เกิดข้อถกเถียงเรื่องช่วงอายุในแฟนด้อม ไม่มีหลักฐานยืนยัน',
    },
  ] as Controversy[],
  pictorials: [
    { year: '2022', pub: 'W Korea', issue: 'February 2022', concept: 'ฟีเจอร์เดบิวต์โซโล่ — สตูดิโอสีขาวมินิมอล, เสื้อผ้าทรงหลวม เป็นปกนิตยสารใหญ่ครั้งแรกในฐานะศิลปินเดี่ยว GONUNMA ถ่ายโดย Hong Jang-hyun', cover: true },
    { year: '2022', pub: 'Vogue Korea', issue: 'April 2022', concept: 'เอดิทอเรียลหลังงาน Oscars — สูทเนี้ยบ, ฉากสไตล์สถาปัตยกรรม วางตำแหน่งให้เขาเป็นนักแสดงระดับโลก หลังขึ้นแสดงเพลง "Fire in the Sky" ที่ Academy Awards', cover: false },
    { year: '2023', pub: 'GQ Korea', issue: 'August 2023', concept: 'คัฟเวอร์สตอรี่ยุค PULSE — โลเคชันเมืองกลางแจ้ง, โทนสีโมโนโครม บทสัมภาษณ์เน้นเรื่องการออกจาก SM และการก่อตั้ง JH Company', cover: true },
    { year: '2023', pub: 'Rolling Stone US', issue: 'November 2023', concept: 'ฟีเจอร์นิตยสารใหญ่สหรัฐฯ ครั้งแรก ชุดภาพพอร์เทรตในสตูดิโอแบบใช้พร็อพน้อย บทความเน้นเส้นทางสู่ Grammy และการข้ามไปสู่ตลาด R&B', cover: false },
    { year: '2024', pub: 'i-D Magazine', issue: 'Spring 2024', concept: 'เอดิทอเรียลยุค ARE U STILL — ภาพถ่ายที่เน้นการเคลื่อนไหวแบบนามธรรม จัดชุดทรงลื่นไหล เป็นงานที่ล้ำแฟชั่นที่สุดชุดหนึ่งของเขา และถูกอ้างถึงบ่อยในวงสนทนาแฟชั่นไอดอล', cover: true },
    { year: '2025', pub: 'Dazed Korea', issue: 'March 2025', concept: 'สเปเชียลฉลอง Grammy winner — ชุดทางการที่ถูกรื้อโครง ฉากสไตล์โรงงาน ถ่ายในสัปดาห์ถัดจากพิธี Grammy', cover: false },
    { year: '2025', pub: 'Harper\'s Bazaar Korea', issue: 'January 2025', concept: 'ก่อนปล่อย CAN\'T LEAVE ALONE — ถ่ายสองคอนเซปต์ สะท้อนภาษาภาพสองโทนของอัลบั้ม สเปรด 8 หน้าสองชุดแยกกัน: โทนเย็นหนึ่งชุด โทนอุ่นหนึ่งชุด', cover: true },
    { year: '2025', pub: 'Allure US', issue: 'June 2025', concept: 'ฟีเจอร์สื่อ Shang-Chi 2 — ถ่ายที่ LA เน้นบทสัมภาษณ์ บทความพูดถึงเครดิตร่วมเขียนบทและแนวทางการพัฒนาตัวละครในหนังแฟรนไชส์', cover: false },
    { year: '2026', pub: 'Esquire Korea', issue: 'October 2026', concept: 'เอดิทอเรียลฉลอง DECADE — ภาพย้อนอดีตครอบคลุมทั้งหกยุคอัลบั้ม นำชิ้นงานจากคลังของ JH Company มาผสมกับภาพสตูดิโอใหม่', cover: true },
  ] as Pictorial[],
  variety: [
    { year: '2022', show: 'You Quiz on the Block', platform: 'tvN', context: 'ออกรายการวาไรตี้เกาหลีใหญ่ครั้งแรกในฐานะศิลปินเดี่ยว — ออกอากาศกุมภาพันธ์ 2022 พูดถึงการเดบิวต์ SOFTEST TOUCH, ที่มาของชื่อ GONUNMA จาก King of Mask Singer และชีวิตวัยเด็กที่กรุงเทพฯ เป็นตอนที่เรตติ้งสูงที่สุดตอนหนึ่งของซีซั่น' },
    { year: '2022', show: 'The Tonight Show Starring Jimmy Fallon', platform: 'NBC', context: 'เดบิวต์รายการดึกสหรัฐฯ ครั้งแรก — มีนาคม 2022 จัดให้ตรงกับช่วงแสดงในงาน Oscars แสดงเพลง "Fire in the Sky" เวอร์ชันอะคูสติก และให้สัมภาษณ์สั้นๆ เกี่ยวกับอาชีพคู่ขนานด้านดนตรีและภาพยนตร์' },
    { year: '2023', show: 'Running Man (guest)', platform: 'SBS', context: 'รับเชิญหนึ่งตอน — สิงหาคม 2023 ช่วงทัวร์ PULSE เลกเกาหลี เป็นที่จดจำเพราะดูผ่อนคลายและตลกกว่าภาพลักษณ์สาธารณะปกติของเขา คลิปที่ตัดมาไวรัลหนักบน YouTube' },
    { year: '2023', show: 'The Late Show with Stephen Colbert', platform: 'CBS', context: 'โปรโมต PULSE — กรกฎาคม 2023 แสดงเพลง "HOW DOES IT FEEL?" พร้อมวงดนตรีสด บทสัมภาษณ์พูดถึงความทะเยอทะยานด้าน Grammy และซาวด์ของ PULSE' },
    { year: '2024', show: 'Saturday Night Live (musical guest)', platform: 'NBC', context: 'รับเชิญนักดนตรีใน SNL — เมษายน 2024 ช่วงทัวร์ PULSE World Tour เลกอเมริกาเหนือ แสดงเพลง "Tears On A Pretty Face" (พร้อมทีมเต้นเต็มวง) และ "If I Knew" เวอร์ชันตัดเครื่องดนตรีออกเกือบหมด หนึ่งในการแสดงดนตรี SNL ที่มีผู้ชมสูงสุดของซีซั่น กลายเป็นจุดอ้างอิงทางวัฒนธรรมสำหรับศิลปินสาย K ที่ข้ามไปออกทีวีสหรัฐฯ' },
    { year: '2024', show: 'The Graham Norton Show', platform: 'BBC One', context: 'ออกรายการที่ UK ช่วงทัวร์ PULSE 2024 World Tour เลกยุโรป — พฤษภาคม 2024 ออกรายการพร้อมแขกรับเชิญคนอื่น พูดถึงแฟรนไชส์ Shang-Chi การเติบโตของแฟนด้อม UK ส่วนหนึ่งมาจากการออกรายการนี้' },
    { year: '2025', show: 'The Tonight Show Starring Jimmy Fallon', platform: 'NBC', context: 'ออกรายการฉลองชัย Grammy — กุมภาพันธ์ 2025 แสดงเพลง "Tears On A Pretty Face" สัปดาห์ถัดจากพิธี Grammy ข้อความขอบคุณผู้ชมสหรัฐฯ ถูกแชร์กว้างขวางบนโซเชียล' },
    { year: '2025', show: 'Knowing Bros (아는 형님)', platform: 'JTBC', context: 'รับเชิญ — มิถุนายน 2025 ก่อนหนัง Shang-Chi 2 ฉาย ครั้งแรกที่ออกรายการวาไรตี้สายไอดอลเกาหลีนับตั้งแต่ออกจาก SM เป็นที่จดจำจากปฏิกิริยาของนักแสดงประจำรายการต่อการที่ James พูดถึงช่วงเวลาใน NCT 127 อย่างตรงไปตรงมา' },
    { year: '2026', show: 'Good Morning America', platform: 'ABC', context: 'ออกรายการโปรโมต Shang-Chi 3 และ DECADE — กันยายน 2026 แสดงสดเพลง "NEW" (ซิงเกิลนำของ DECADE) ที่ลานกลางแจ้งของ GMA หนึ่งในไม่กี่ครั้งที่ James แสดงในรายการเช้าทางทีวีสหรัฐฯ' },
  ] as VarietyItem[],
  socialEvolution: [
    {
      period: '2016–2022',
      label: 'ยุคที่ SM ควบคุม',
      color: '#6e5a7c',
      detail: 'คอนเทนต์ถูกกำหนดโดย SM Entertainment ทั้งตารางโพสต์ที่เดินตามแผนประชาสัมพันธ์ และภาพที่ต้องผ่านการอนุมัติ ไม่มีเสียงของตัวเองชัดเจน ส่วน Twitter ใช้คุยกับแฟนแบบมีสคริปต์มากกว่าจะเป็นตัวเขาจริงๆ',
    },
    {
      period: '2023–2024',
      label: 'ช่วงระเบิดความเป็นอิสระ',
      color: '#5a7c6a',
      detail: 'หลังออกจาก SM และก่อตั้ง JH Company — เป็นช่วงที่โพสต์เยอะที่สุดในอาชีพ ทั้ง Instagram, Twitter และ TikTok เพื่อตอบแทนแฟนที่รอมานานและสร้างแรงส่งให้ค่ายใหม่ บางช่วงมีภาพเบื้องหลังและช่วงเวลาส่วนตัวที่ไม่เคยเปิดให้เห็นมาก่อน',
    },
    {
      period: '2025 (post-Grammy)',
      label: 'ช่วงเปลี่ยนผ่าน',
      color: '#facc15',
      detail: 'หลังได้ Grammy ในเดือนกุมภาพันธ์ 2025 — ความถี่โพสต์เริ่มลดลงเรื่อยๆ แคปชันสั้นลง Stories หายไปแทบหมด และการตอบคอมเมนต์แฟนลดเหลือศูนย์ ทีม JH Company อธิบายว่าเป็นการปรับตำแหน่งใหม่ ไม่ใช่การถอนตัว ในช่วงเดียวกัน ผลงานที่ปล่อยอย่างเป็นทางการและการออกสื่ออเมริกันเริ่มใช้ "James Hwang" เป็นชื่อหลักแทน GONUNMA — สะท้อนการ consolidate สู่ชื่อเดียวสำหรับตลาด global',
    },
    {
      period: '2025–ปัจจุบัน',
      label: 'ยุคแห่งความลึกลับ',
      color: '#c9a84c',
      detail: 'โพสต์เฉพาะตอนเปิดยุคใหม่ ตอนโปรโมตหนัง และตอนออกแถลงการณ์สำคัญ ไม่มีโพสต์รายวัน ไม่มีวล็อก ไม่มี Stories ประจำ แต่ละโพสต์จึงมีคนรอ และได้ยอดปฏิสัมพันธ์สูงผิดปกติเพราะความหายากของมันเอง เป็นรูปแบบที่ตรงข้ามกับโมเดล K-pop ที่เอาความใกล้ชิดเทียมมาก่อนทุกอย่าง',
    },
  ] as SocialEvolutionItem[],
  socialPlatforms: [
    {
      platform: 'Instagram',
      handle: '@gonunma',
      followers: '28.4M',
      notable: 'โพสต์ประกาศ DECADE เดือนมิถุนายน 2026 ได้ 4.2 ล้านไลก์ใน 24 ชั่วโมง · โพสต์ประกาศความสัมพันธ์กับ Ashley Liao รวม 6.1 ล้านไลก์',
    },
    {
      platform: 'X (Twitter)',
      handle: '@gonunma',
      followers: '19.7M',
      notable: 'แถลงการณ์เรียกร้องสันติเรื่องไทย–กัมพูชาปี 2025 เป็นทวีตที่ถูกสวนกลับมากที่สุดและถูกแชร์มากที่สุดในอาชีพพร้อมกัน เพราะคนสองฝ่ายช่วยกันดันคนละทาง',
    },
    {
      platform: 'YouTube',
      handle: 'James Hwang Official',
      followers: '12.1M subs',
      notable: 'MV "Tears On A Pretty Face" แตะ 500 ล้านวิวเดือนกุมภาพันธ์ 2026 · ไม่มีช่องวล็อกหรือคอนเทนต์รายวัน',
    },
    {
      platform: 'TikTok',
      handle: '@gonunma',
      followers: '15.2M',
      notable: 'แดนซ์ชาลเลนจ์เพลงจาก ARE U STILL ปี 2024 มียอดวิวจากคลิปที่คนทำเอง 2.1 พันล้าน · การมีตัวตนบนแพลตฟอร์มนี้มาจากคลิปตัดต่อของแฟน ไม่ใช่คอนเทนต์ทางการ',
    },
  ] as SocialPlatform[],
  reputationItems: [
    {
      label: 'Approachability',
      color: '#5a7c6a',
      text: 'ภาพลักษณ์ "เป็นกันเอง" เป็นสิ่งที่คงเส้นคงวาตลอดอาชีพ — พนักงาน JH Company, ทีมงานถ่ายทำ, นักข่าว และผู้คนทั่วไปที่เคยพบต่างรายงานสอดคล้องกันว่า Hwang ไม่มีพฤติกรรมสองหน้า และไม่ต่างกันระหว่างหน้ากล้องกับหลังกล้อง แม้ช่วงหลังปี 2024 ที่บริษัทลดการปรากฏตัวต่อสาธารณะลงมาก บุคลิกในชีวิตประจำวันไม่ได้เปลี่ยนไปตาม',
    },
    {
      label: 'Weverse Presence',
      color: '#5a7aaa',
      text: 'แม้ความถี่ในการโพสบน Instagram, X และ TikTok จะลดลงเกือบเป็นศูนย์ใน Mystique Era — Weverse เป็นข้อยกเว้น Hwang ไม่เคยทิ้งช่องทางนี้ เขายังตอบแฟน โพสต์ความคิดระหว่างทำงาน และใช้เป็นพื้นที่คุยกับ Gemzen ตรงที่สุดอย่างสม่ำเสมอ นักวิเคราะห์แฟนด้อมบอกว่าการไม่ทิ้ง Weverse คือเหตุผลหลักที่ฐานแฟนแกนกลางยังเหนียวแน่นผิดปกติเมื่อเทียบกับศิลปิน mystique-model คนอื่นๆ',
    },
    {
      label: 'No Bad-Personality News',
      color: '#c9a84c',
      text: 'ตลอดอาชีพ ไม่มีรายงานข่าวแย่เกี่ยวกับนิสัยส่วนตัวจากแหล่งใดเลย — ไม่มีอดีตพนักงาน, ไม่มีศิลปินร่วมงาน, ไม่มีนักข่าว ประเด็นที่สร้างกระแสลบทั้งหมดมาจากจุดยืนทางการเมือง และจากขนาดแฟนด้อมที่ใหญ่พอจะสร้างดราม่าขึ้นมาเอง ไม่ใช่จากพฤติกรรมของตัวเขา',
    },
    {
      label: 'Free Speech Philosophy',
      color: '#6e5a7c',
      text: 'Hwang ถือว่าคำพูดเกลียดชังก็เป็นส่วนหนึ่งของเสรีภาพในการพูด JH Company จึงแทบไม่เคยฟ้องคนที่โพสต์ด่าหรือดูถูกเขา ยกเว้นกรณีที่เข้าข่ายหมิ่นประมาทชัดเจนจนเกิดความเสียหายทางทรัพย์สิน เช่นข่าวปลอมที่ทำให้มูลค่าสัญญาพรีเซนเตอร์เสียหาย ทีมกฎหมายของ JH Company เคยออกมาชี้แจงแนวทางนี้อย่างเป็นทางการมากกว่าหนึ่งครั้ง',
    },
  ] as ReputationItem[],
  politicalItems: [
    {
      period: '2020–2021',
      event: 'การบริจาคทางการเมือง',
      text: 'ข้อมูลการบริจาคสาธารณะเปิดเผยว่า Hwang สนับสนุนทางการเงินต่อการเคลื่อนไหวทางการเมืองของเยาวชนไทยในช่วงชุมนุมเรียกร้องการปฏิรูป',
    },
    {
      period: '2021',
      event: 'จุดยืนในการให้สัมภาษณ์',
      text: 'ให้สัมภาษณ์ระมัดระวังว่ามีความใกล้เคียงทางแนวคิดกับพรรคเพื่อไทย แต่หลีกเลี่ยงการแสดงจุดยืนอย่างชัดเจน อ้างว่าอาจส่งผลต่อกิจกรรมทางดนตรีระดับนานาชาติ',
    },
    {
      period: '2022',
      event: 'แถลงการณ์ยูเครน–รัสเซีย',
      text: 'ออกแถลงการณ์เรียกร้องให้หยุดยิงทันทีตอนที่ยังอยู่ SM ถ้อยคำระวังตัว ไม่ชี้ว่าใครเป็นฝ่ายรุกราน แต่ชัดเจนว่าไม่เอาการใช้กำลังทหาร หลังออกจาก SM เขาประณามการโจมตีพลเรือนตรงขึ้นมาก',
    },
    {
      period: '2023–ปัจจุบัน',
      event: 'อิสราเอล–กาซา / ความช่วยเหลือทางทหารสหรัฐฯ',
      text: 'เรียกร้องให้หยุดยิงและเปิดทางให้ความช่วยเหลือด้านมนุษยธรรมตั้งแต่ปลายปี 2023 พร้อมวิจารณ์การสนับสนุนทางทหารของสหรัฐฯ อย่างเปิดเผย จนเกิดความตึงเครียดกับ Disney และ Marvel มีรายงานว่า JH Company ต้องคุยกับทีมกฎหมายของ Marvel เรื่องนี้อย่างน้อยหนึ่งครั้ง',
    },
    {
      period: '2025–ปัจจุบัน',
      event: 'การลดความตึงเครียดสหรัฐฯ–อิหร่าน',
      text: 'ออกแถลงการณ์เรียกร้องให้ลดระดับความขัดแย้ง ในช่วงที่สหรัฐฯ กับอิหร่านตึงเครียดขึ้น — ถูกวิจารณ์จากบางฝ่ายในอเมริกาว่าไม่เหมาะสมสำหรับผู้ที่อาศัยและทำงานในสหรัฐฯ',
    },
    {
      period: '2025–ปัจจุบัน',
      event: 'การเหินห่างจากประเทศไทย',
      text: 'หลังจุดยืนไม่เอาสงครามต่อความขัดแย้งไทย–กัมพูชาโดนกระแสชาตินิยมถล่มหนัก James หยุดปรากฏตัวและโปรโมตในบ้านเกิดทั้งหมด เขาปฏิเสธที่จะขอโทษ — ย้ำจุดยืนเรื่องสันติทุกครั้งแทนที่จะกลับคำ — และในปี 2026 ไม่ร่วมโชว์ที่กรุงเทพในทัวร์ REDLINE ของ NCT 127 เป็นครั้งแรกที่ขาดการแสดงในไทย เป็นราคาส่วนตัวที่ชัดที่สุดที่เขาจ่ายให้จุดยืนทางการเมือง: การเหินห่างจากบ้านที่เลือกเอง ไม่ยอมแลกกับการเข้าถึงตลาด',
    },
    {
      period: '2026',
      event: 'UNESCO Goodwill Ambassador · การเสนอชื่อ Nobel Peace Prize',
      text: 'ได้รับแต่งตั้งเป็น UNESCO Goodwill Ambassador และแยกกันไป ได้รับการยืนยันว่าอยู่ในรายชื่อผู้ถูกเสนอชิง Nobel Peace Prize ของปีนั้น — ทั้งสองอ้างอิงชุดแถลงการณ์เดียวกัน: การเรียกร้องหยุดยิง Gaza ตั้งแต่ปี 2023 และจุดยืนสันติภาพไทย–กัมพูชาที่เพิ่งทำให้เขาเสียตลาดบ้านเกิดไป บทวิเคราะห์รอบรางวัลทั้งสองวนกลับไปที่ความย้อนแย้งเดียวกัน: การยอมรับระดับโลกมาถึงในปีเดียวกับที่จุดยืนของเขาทำให้ตัวเองไม่เป็นที่ต้อนรับในประเทศตัวเอง',
    },
  ] as PoliticalItem[],
  sasaengNote:
    'กลุ่มแฟนซาแซงที่ตามติดชีวิตเขารายงานว่าข่าวลือเกี่ยวกับความสัมพันธ์แทบทุกเรื่องเป็นความจริง — Hwang คบคนในวงการหลายคนแบบสั้นๆ ตลอดช่วงปี 2021–2025 ก่อนจะเริ่มความสัมพันธ์กับ Ashley Liao อย่างจริงจัง อย่างไรก็ตาม เพราะข้อมูลมาจากซาแซงที่สาธารณะไม่ให้ความเชื่อถือ รายงานเหล่านี้จึงถูกปัดทิ้งในวงกว้าง แม้แฟนคลับจำนวนมากจะเชื่อว่าข้อมูลมีความแม่นยำสูง',
};

export const publicImage = { en, th };
export function getPublicImage(lang: Lang) {
  return publicImage[lang];
}
