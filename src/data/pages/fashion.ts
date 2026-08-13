// Bilingual content for the Fashion & Style Evolution page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Non-translatable values (era-color hex, periods, proper nouns, key-piece/designer
// credits that are already English) are kept identical across both languages on purpose.

import type { Lang } from '../../i18n';

const en = {
  ui: {
    label: 'Biography',
    title: 'Fashion & Style Evolution',
    subtitle: 'Album Aesthetics · Stage Wardrobe · Designer Relationships · 2016–present',
    intro:
      'James Hwang\'s fashion evolved in parallel with his career arc — from SM-controlled idol wardrobe to an independence that built its own visual identity. The pivotal turning point was the PULSE Tour (2023), whose stage aesthetic drew Saint Laurent in directly, shifting James\'s status from "a K-pop artist chosen by brands" to "a creative identity that brands come to."',
    albumAestheticLabel: 'Album Visual Aesthetic',
    stageWardrobeLabel: 'Stage & Tour Wardrobe',
    keyPiecesLabel: 'Key Pieces',
    collaboratingLabel: 'Collaborating',
    designersHeading: 'Key Designer Relationships',
    originLabel: 'Origin',
    workTogetherLabel: 'Work Together',
    significanceLabel: 'Significance — ',
    tourHeading: 'Tour Staging as Fashion Statement',
  },
  eras: [
    {
      era: 'LIKE I DO',
      period: '2016–2021',
      color: '#c9a84c',
      label: 'SM-Controlled · Idol Formation',
      albumAesthetic:
        'Gold-tone, structured warmth — SM released it with no broadcast promotion and deliberately no music show appearances, so the release\'s visuals were limited to album packaging and the MV alone. There was no dedicated editorial or press campaign in 2016. The MV itself was shot in 2022–2023, after the song resurged via TikTok — meaning it received full visual treatment 6–7 years after release.',
      stageWardrobe:
        'None — LIKE I DO had no promotion or stage performances of any kind in 2016. James appeared on stage as an NCT 127 member, but there was no solo stage for this era. LIKE I DO had no associated tour or showcase.',
      keyPieces: ['LIKE I DO MV (shot 2022–2023 · released after the resurgence)', 'Gold-tone Mask Singer mask "Cat\'s Eyes" — origin of the GONUNMA name'],
      designers: [],
      context:
        'LIKE I DO had no visual identity of its own at the time of release — it received full treatment retroactively once the TikTok resurgence pushed streaming back up in 2022–2023, making it a case where the visual direction was built after the cultural moment, not before it.',
    },
    {
      era: 'SOFTEST TOUCH',
      period: '2022',
      color: '#9b7fc8',
      label: 'SM Solo Debut · First Visual Voice',
      albumAesthetic:
        'Purple-lavender palette — the first time James had a meaningful hand in the visual direction. Still under SM approval, but the direction sharpened: darker skin tones, oversized tailoring, clean architecture.',
      stageWardrobe:
        'No full-scale tour during this era — music show performances used editorial tailoring that began reflecting more personal taste: structured jackets, monochrome palettes, minimal accessories.',
      keyPieces: ['Oversized white tailoring (W Korea Feb 2022 cover)', 'Architectural sharp suiting (Vogue Korea Apr 2022)', 'Minimal black editorial (Oscars appearance)', 'Calvin Klein global campaign (Jul 2022)'],
      designers: ['W Korea — Hong Jang-hyun (photographer)', 'Vogue Korea editorial team', 'Calvin Klein (SM-brokered ambassadorship)'],
      context:
        'The W Korea cover (February 2022) was a turning point — several fashion critics noted it as the first time James displayed a visual identity clearly distinct from the K-pop idol format. That July, SM\'s licensing arm landed his first global brand ambassadorship, fronting a Calvin Klein campaign — a deal negotiated by the agency, not by James, and pitched to press as "an idol chosen by a brand." It stands as the clearest before-picture against the Saint Laurent relationship a year later, where the brand came to him instead.',
    },
    {
      era: 'PULSE',
      period: '2023–2024',
      color: '#5a7c6a',
      label: 'Independence · Monochrome Architecture',
      albumAesthetic:
        'Black, white, and deep forest green — a visual identity James defined entirely on his own after leaving SM. No color saturation, no maximalism; sharp light and shadow, heavily geometric. The GQ Korea cover (Aug 2023) served as the visual manifesto of this era.',
      stageWardrobe:
        'The PULSE Tour is the most significant milestone — an entirely black-and-white stage palette, no other colors. The clothing was designed to clearly emphasize movement, with no unnecessary embellishment. Anthony Vaccarello of Saint Laurent saw the PULSE Tour\'s stage visual identity and reached out to James directly, leading to the SL ambassadorship — custom stage wardrobe and campaigns as the core of it, plus a single limited 3-piece capsule in 2024, the one retail exception in an otherwise non-commercial relationship.',
      keyPieces: ['All-black stage outfits (PULSE 2023)', 'GONUNMA × Nike Capsule Vol.1 (2023)', 'Saint Laurent stage wardrobe (PULSE 2024)'],
      designers: ['Saint Laurent — Anthony Vaccarello', 'Nike Sportswear (co-design)'],
      context:
        'The PULSE Tour\'s visual identity became the calling card that brought luxury fashion to James, rather than James approaching the brands. This shift represented a repositioning from K-pop fashion into the global fashion sphere.',
    },
    {
      era: 'ARE U STILL',
      period: '2024',
      color: '#5a7aaa',
      label: 'Grammy Era · Fluid Movement',
      albumAesthetic:
        'Deep blue, slate, and warm soul undertones — a neo-soul visual language that clearly reflects the genre shift. The photography style moved from architectural to organic, movement-based. The i-D Magazine cover (Spring 2024) was an editorial shot with fluid silhouettes designed to move.',
      stageWardrobe:
        'PULSE 2024 World Tour Leg 2 (ARE U STILL era shows) — the wardrobe expanded from Leg 1\'s strict monochrome into deep blues and earth tones. The dance crew\'s outfits were designed to complement, not compete with, James; the cut became more fluid to support the neo-soul choreography.',
      keyPieces: ['i-D abstract movement editorial looks (Spring 2024)', 'Dazed Korea deconstructed formalwear (Mar 2024 — Grammy winner issue)', 'SNL performance wardrobe (Apr 2024)'],
      designers: ['Saint Laurent (continuing)', 'i-D Magazine styling team', 'Nike (PULSE tour ongoing)'],
      context:
        'The Dazed Korea Grammy issue (March 2024) — shot the week after the Grammy ceremony with deconstructed formalwear and industrial sets — is frequently cited in the fashion industry as the "moment that repositioned James from K-pop idol to global fashion subject."',
    },
    {
      era: "CAN\'T LEAVE ALONE",
      period: '2025',
      color: '#c06080',
      label: 'Duality · Two-Register Visual Language',
      albumAesthetic:
        'A duality concept splitting the visual identity into two poles: SOUR (cold-tone — steel blue, ash, clinical white) and HONEY (warm-tone — amber, cream, gold). Harper\'s Bazaar Korea (Jan 2025) shot two separate 8-page spreads following this concept — one of the most elaborate editorials of his career.',
      stageWardrobe:
        'No dedicated CAN\'T LEAVE ALONE tour — the wardrobe concept was translated into award show appearances and the US promotion circuit. Two main looks for the Grammy performance (Feb 2025): warm-tone for the entrance, cold-tone for the closing performance.',
      keyPieces: ['HONEY palette editorial (Harper\'s Bazaar Korea Jan 2025)', 'SOUR palette editorial (same issue, separate spread)', 'Grammy 2025 performance wardrobe'],
      designers: ['Harper\'s Bazaar Korea styling team', 'GONUNMA × Nike Capsule Vol.2 — CAN\'T LEAVE ALONE duality concept'],
      context:
        'Nike Capsule Vol.2 (2025) marked the first time Nike released a capsule across two simultaneous colorway stories (Vol.2A SOUR and Vol.2B HONEY) — James carried the album concept directly into the structure of a commercial product.',
    },
    {
      era: 'DECADE',
      period: '2026',
      color: '#6e5a7c',
      label: 'Legacy · Retrospective Synthesis',
      albumAesthetic:
        'Deep mauve-purple — an anthology era gathering every prior visual language. Esquire Korea (Oct 2026) mixed archival pieces from the JH Company vault with new studio work in a single spread — a visual statement that James sees himself as the curator of his own decade.',
      stageWardrobe:
        'The DECADE Tour (Jan 2027–) — the most elaborate staging of his career. Each era section has its own wardrobe palette: gold (LIKE I DO section), purple (SOFTEST TOUCH), black/white (PULSE), blue (ARE U STILL), duality (CAN\'T LEAVE ALONE), mauve (DECADE new tracks). It\'s the first tour where James uses wardrobe to narrate his own history.',
      keyPieces: ['Esquire Korea retrospective editorial (Oct 2026 cover)', 'GMA performance wardrobe (Sep 2026)', 'DECADE Tour multi-era stage costumes'],
      designers: ['Esquire Korea archival feature', 'JH Company in-house creative team (DECADE Tour staging)'],
      context:
        'The DECADE Tour is the ultimate synthesis of the entire fashion evolution — using a visual language built over 10 years to tell the career narrative through wardrobe. It\'s the first time fashion isn\'t just complementing the music but becomes a storytelling medium in its own right.',
    },
  ],
  designers: [
    {
      name: 'Saint Laurent',
      rep: 'Anthony Vaccarello',
      period: '2023–present',
      origin: 'Vaccarello reached out to James directly after seeing the PULSE Tour visual identity — bypassing the usual pitch or negotiation process.',
      work: 'PULSE Tour stage wardrobe · SL × GONUNMA 3-piece capsule (2024, sold out in 4 hours) · ongoing styling relationship',
      significance: 'A luxury fashion alignment that came from performance identity rather than celebrity status — rare for a K-adjacent artist.',
    },
    {
      name: 'Nike',
      rep: 'Nike Sportswear (co-design)',
      period: '2023–present',
      origin: 'Nike first came in by supplying the PULSE Tour wardrobe — the relationship evolved into a co-design capsule because James\'s dance background made the sportswear alignment credible.',
      work: 'GONUNMA × Nike Capsule Vol.1 (2023, sold out in 3 hours) · Vol.2 CAN\'T LEAVE ALONE duality (2025) · ongoing tour wardrobe',
      significance: 'The capsule uses a royalty-share structure rather than a flat endorsement fee — a commercial partnership in which James is a creative co-owner.',
    },
  ],
  tourNotes: [
    {
      tour: 'PULSE Tour (2023–2024)',
      color: '#5a7c6a',
      note: 'An entirely black-and-white stage palette; clothing designed to emphasize movement, with no unnecessary embellishment. A visual statement of independence from the SM-era maximalism — and the thing that drew Saint Laurent in.',
    },
    {
      tour: 'DECADE Tour (2027–)',
      color: '#6e5a7c',
      note: 'Multi-era wardrobe design — each section of the setlist has its own palette matching the original era. The first time James uses wardrobe to systematically narrate his career history; the highest-production tour of his career.',
    },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ชีวประวัติ',
    title: 'แฟชั่นและพัฒนาการด้านสไตล์',
    subtitle: 'ภาพลักษณ์แต่ละอัลบั้ม · เสื้อผ้าบนเวที · ความสัมพันธ์กับดีไซเนอร์ · 2016–ปัจจุบัน',
    intro:
      'แฟชั่นของ James Hwang เดินขนานไปกับเส้นทางอาชีพ จากเสื้อผ้าไอดอลที่ SM คุมทุกอย่าง มาสู่ความเป็นอิสระที่เขาสร้างภาพลักษณ์ของตัวเองขึ้นมาเอง จุดเปลี่ยนคือ PULSE Tour ปี 2023 ที่ภาพบนเวทีดึง Saint Laurent เข้ามาหาเขาโดยตรง จากไอดอลที่แบรนด์เลือก เขากลายเป็นคนที่แบรนด์เดินเข้ามาหา',
    albumAestheticLabel: 'ภาพลักษณ์ของอัลบั้ม',
    stageWardrobeLabel: 'เสื้อผ้าบนเวทีและทัวร์',
    keyPiecesLabel: 'ชิ้นสำคัญ',
    collaboratingLabel: 'ร่วมงานกับ',
    designersHeading: 'ความสัมพันธ์กับดีไซเนอร์คนสำคัญ',
    originLabel: 'จุดเริ่ม',
    workTogetherLabel: 'งานที่ทำร่วมกัน',
    significanceLabel: 'ความสำคัญ — ',
    tourHeading: 'การจัดเวทีทัวร์ในฐานะคำแถลงทางแฟชั่น',
  },
  eras: [
    {
      era: 'LIKE I DO',
      period: '2016–2021',
      color: '#c9a84c',
      label: 'SM คุมทุกอย่าง · ยุคก่อร่างความเป็นไอดอล',
      albumAesthetic:
        'โทนทอง อบอุ่นแบบมีโครง SM ตั้งใจปล่อยแบบไม่โปรโมตทางออกอากาศและไม่ขึ้นเวทีมิวสิกโชว์ ภาพของอัลบั้มจึงมีแค่ปกกับ MV ไม่มีการถ่ายแฟชั่นหรือแคมเปญสื่อใดๆ ในปี 2016 MV ถ่ายกันในปี 2022–2023 หลังเพลงกลับมาดังใน TikTok เท่ากับได้รับการทำภาพเต็มรูปแบบหลังปล่อยเพลงไปแล้วหกเจ็ดปี',
      stageWardrobe:
        'ไม่มี LIKE I DO ไม่มีการโปรโมตหรือขึ้นเวทีเลยในปี 2016 James ขึ้นเวทีในฐานะสมาชิก NCT 127 แต่ไม่มีเวทีเดี่ยวของยุคนี้ และไม่มีทัวร์หรือโชว์เคสใดๆ รองรับ',
      keyPieces: ['MV เพลง LIKE I DO (ถ่ายปี 2022–2023 · ปล่อยหลังเพลงกลับมาดัง)', 'หน้ากากโทนทอง "Cat\'s Eyes" จาก Mask Singer — ต้นทางของชื่อ GONUNMA'],
      designers: [],
      context:
        'LIKE I DO ไม่มีภาพลักษณ์ของตัวเองตอนปล่อย แต่ได้รับการทำภาพย้อนหลังเมื่อกระแส TikTok ดันยอดสตรีมกลับมาในปี 2022–2023 กลายเป็นกรณีที่ทิศทางภาพถูกสร้างขึ้นหลังเพลงดัง ไม่ใช่ก่อน',
    },
    {
      era: 'SOFTEST TOUCH',
      period: '2022',
      color: '#9b7fc8',
      label: 'เดบิวต์เดี่ยวใต้ SM · เสียงทางภาพครั้งแรก',
      albumAesthetic:
        'โทนม่วงลาเวนเดอร์ เป็นครั้งแรกที่ James เข้าไปมีส่วนกำหนดทิศทางภาพจริงจัง ยังต้องผ่านการอนุมัติของ SM แต่ทิศทางเริ่มชัด คือโทนเข้ม เสื้อทรงหลวมแต่มีโครง และเส้นสายเรียบสะอาดแบบงานสถาปัตยกรรม',
      stageWardrobe:
        'ช่วงนี้ยังไม่มีทัวร์เต็มรูปแบบ เวทีมิวสิกโชว์ใช้เสื้อผ้าทรงเนี้ยบแบบงานถ่ายแฟชั่นที่เริ่มสะท้อนรสนิยมของเขาเองมากขึ้น เสื้อนอกมีโครง โทนสีเดียว เครื่องประดับน้อยชิ้น',
      keyPieces: ['สูททรงหลวมสีขาว (ปก W Korea ก.พ. 2022)', 'สูททรงคมแบบงานสถาปัตยกรรม (Vogue Korea เม.ย. 2022)', 'ชุดดำเรียบในงาน Oscars', 'แคมเปญ Calvin Klein ระดับโลก (ก.ค. 2022)'],
      designers: ['W Korea — Hong Jang-hyun (ช่างภาพ)', 'ทีมกองบรรณาธิการ Vogue Korea', 'Calvin Klein (ดีลที่ SM จัดการ)'],
      context:
        'ปก W Korea เดือนกุมภาพันธ์ 2022 เป็นจุดเปลี่ยน นักวิจารณ์แฟชั่นหลายคนบอกว่าเป็นครั้งแรกที่ James แสดงภาพลักษณ์ที่แยกออกจากกรอบไอดอล K-pop ได้ชัด เดือนกรกฎาคมปีเดียวกัน ฝ่าย licensing ของ SM ปิดดีลพรีเซนเตอร์ระดับโลกตัวแรกให้เขาคือ Calvin Klein ซึ่งค่ายเป็นคนเจรจา ไม่ใช่ตัวเขา สื่อตอนนั้นเล่นมุมไอดอลที่ถูกแบรนด์เลือก นี่คือภาพ "ก่อน" ที่ชัดที่สุด เทียบกับ Saint Laurent อีกปีต่อมาที่แบรนด์เดินเข้ามาหาเขาเอง',
    },
    {
      era: 'PULSE',
      period: '2023–2024',
      color: '#5a7c6a',
      label: 'ยุคอิสระ · สถาปัตยกรรมโทนเดียว',
      albumAesthetic:
        'ดำ ขาว และเขียวป่าเข้ม เป็นภาพลักษณ์ที่ James กำหนดเองทั้งหมดหลังออกจาก SM ไม่มีสีจัด ไม่มีการใส่อะไรเกินจำเป็น แสงเงาคม เส้นสายเป็นเรขาคณิตชัด ปก GQ Korea เดือนสิงหาคม 2023 คือคำแถลงทางภาพของยุคนี้',
      stageWardrobe:
        'PULSE Tour เป็นหมุดหมายสำคัญที่สุด เวทีใช้แค่ขาวกับดำ ไม่มีสีอื่น เสื้อผ้าออกแบบให้ขับการเคลื่อนไหวออกมา ไม่มีของประดับที่ไม่จำเป็น Anthony Vaccarello จาก Saint Laurent เห็นภาพบนเวทีของทัวร์นี้แล้วติดต่อ James โดยตรง จนกลายเป็นพรีเซนเตอร์ของแบรนด์ แกนหลักคือเสื้อผ้าเวทีที่ตัดเฉพาะและงานแคมเปญ บวกคอลเลกชันจำกัดสามชิ้นในปี 2024 ซึ่งเป็นการขายปลีกครั้งเดียวในความสัมพันธ์ที่ไม่ได้ตั้งอยู่บนการค้า',
      keyPieces: ['ชุดเวทีดำล้วน (PULSE 2023)', 'GONUNMA × Nike Capsule Vol.1 (2023)', 'เสื้อผ้าเวที Saint Laurent (PULSE 2024)'],
      designers: ['Saint Laurent — Anthony Vaccarello', 'Nike Sportswear (ออกแบบร่วม)'],
      context:
        'ภาพบนเวทีของ PULSE Tour กลายเป็นนามบัตรที่ทำให้แบรนด์หรูเดินเข้ามาหา James เอง ไม่ใช่เขาเข้าไปหาแบรนด์ นี่คือการย้ายตำแหน่งตัวเองจากแฟชั่นสาย K-pop เข้าสู่วงแฟชั่นระดับโลก',
    },
    {
      era: 'ARE U STILL',
      period: '2024',
      color: '#5a7aaa',
      label: 'ยุค Grammy · การเคลื่อนไหวที่ลื่นไหล',
      albumAesthetic:
        'น้ำเงินเข้ม เทาหิน และโทนอบอุ่นแบบโซล เป็นภาษาภาพสาย neo-soul ที่สะท้อนการเปลี่ยนแนวเพลงอย่างชัดเจน สไตล์ภาพถ่ายเปลี่ยนจากเน้นเส้นสายมาเป็นการจับความเคลื่อนไหว ปก i-D Magazine ฤดูใบไม้ผลิ 2024 ถ่ายด้วยเสื้อผ้าทรงลื่นไหลที่ออกแบบมาให้ขยับได้',
      stageWardrobe:
        'PULSE 2024 World Tour ขาสอง ซึ่งเป็นโชว์ยุค ARE U STILL ขยายเสื้อผ้าจากขาว-ดำเคร่งครัดของขาแรกไปเป็นน้ำเงินเข้มและโทนดิน ชุดของทีมแดนเซอร์ออกแบบให้เสริม James ไม่ให้แข่งกับเขา และตัวชุดตัดทรงลื่นกว่าเดิมเพื่อรองรับท่าเต้นสาย neo-soul',
      keyPieces: ['ลุคจากงานถ่าย i-D ที่เน้นการเคลื่อนไหว (ฤดูใบไม้ผลิ 2024)', 'ชุดทางการที่ถูกรื้อโครงจาก Dazed Korea (มี.ค. 2024 ฉบับผู้ชนะ Grammy)', 'ชุดแสดงในรายการ SNL (เม.ย. 2024)'],
      designers: ['Saint Laurent (ต่อเนื่อง)', 'ทีมสไตลิสต์ i-D Magazine', 'Nike (ต่อเนื่องจากทัวร์ PULSE)'],
      context:
        'Dazed Korea ฉบับ Grammy เดือนมีนาคม 2024 ออกแบบในสัปดาห์หลังงานประกาศรางวัล ใช้ชุดทางการที่ถูกรื้อโครงกับฉากแบบโรงงาน คนในวงการแฟชั่นอ้างถึงบ่อยมากในฐานะจังหวะที่ย้าย James จากไอดอล K-pop มาเป็นตัวละครในโลกแฟชั่นระดับโลก',
    },
    {
      era: "CAN\'T LEAVE ALONE",
      period: '2025',
      color: '#c06080',
      label: 'สองด้าน · ภาษาภาพสองระดับ',
      albumAesthetic:
        'คอนเซปต์สองด้านที่แยกภาพลักษณ์เป็นสองขั้ว SOUR ใช้โทนเย็น น้ำเงินเหล็ก เทาขี้เถ้า ขาวแบบห้องผ่าตัด ส่วน HONEY ใช้โทนอุ่น อำพัน ครีม ทอง Harper\'s Bazaar Korea เดือนมกราคม 2025 ถ่ายสองชุดแยกกัน แปดหน้าตามคอนเซปต์นี้ เป็นงานถ่ายที่ลงทุนมากที่สุดชุดหนึ่งในอาชีพเขา',
      stageWardrobe:
        'อัลบั้ม CAN\'T LEAVE ALONE ไม่มีทัวร์ของตัวเอง คอนเซปต์เสื้อผ้าจึงถูกถ่ายทอดผ่านงานประกาศรางวัลและการเดินสายโปรโมตในอเมริกา ชุดหลักสองชุดสำหรับการแสดงในงาน Grammy เดือนกุมภาพันธ์ 2025 คือโทนอุ่นสำหรับช่วงเปิดตัว และโทนเย็นสำหรับการแสดงปิด',
      keyPieces: ['งานถ่ายโทน HONEY (Harper\'s Bazaar Korea ม.ค. 2025)', 'งานถ่ายโทน SOUR (ฉบับเดียวกัน แยกชุด)', 'ชุดแสดงในงาน Grammy 2025'],
      designers: ['ทีมสไตลิสต์ Harper\'s Bazaar Korea', 'GONUNMA × Nike Capsule Vol.2 — คอนเซปต์สองด้านของ CAN\'T LEAVE ALONE'],
      context:
        'Nike Capsule Vol.2 ปี 2025 เป็นครั้งแรกที่ Nike ออกคอลเลกชันเป็นสองชุดสีพร้อมกัน (Vol.2A SOUR และ Vol.2B HONEY) James เอาคอนเซปต์อัลบั้มเข้าไปอยู่ในโครงสร้างของสินค้าโดยตรง',
    },
    {
      era: 'DECADE',
      period: '2026',
      color: '#6e5a7c',
      label: 'มรดก · การรวบยอดย้อนหลัง',
      albumAesthetic:
        'ม่วงหม่นเข้ม เป็นยุคอัลบั้มรวมที่ดึงภาษาภาพของทุกยุคก่อนหน้ามารวมกัน Esquire Korea เดือนตุลาคม 2026 หยิบเสื้อผ้าเก่าจากคลังของ JH Company มาผสมกับงานถ่ายใหม่ในชุดเดียว เป็นการบอกว่า James มองตัวเองเป็นคนคัดสรรทศวรรษของตัวเอง',
      stageWardrobe:
        'DECADE Tour ที่เริ่มมกราคม 2027 มีการจัดเวทีอลังการที่สุดในอาชีพ แต่ละช่วงของยุคมีโทนเสื้อผ้าของตัวเอง ทองสำหรับช่วง LIKE I DO ม่วงสำหรับ SOFTEST TOUCH ขาวดำสำหรับ PULSE น้ำเงินสำหรับ ARE U STILL สองด้านสำหรับ CAN\'T LEAVE ALONE และม่วงหม่นสำหรับเพลงใหม่ใน DECADE เป็นครั้งแรกที่ James ใช้เสื้อผ้าเล่าประวัติของตัวเอง',
      keyPieces: ['งานถ่ายย้อนอดีตของ Esquire Korea (ปก ต.ค. 2026)', 'ชุดแสดงในรายการ GMA (ก.ย. 2026)', 'ชุดเวที DECADE Tour ที่แยกตามยุค'],
      designers: ['Esquire Korea (สกู๊ปย้อนคลัง)', 'ทีมครีเอทีฟภายในของ JH Company (จัดเวที DECADE Tour)'],
      context:
        'DECADE Tour คือการรวบยอดพัฒนาการด้านแฟชั่นทั้งหมด ใช้ภาษาภาพที่สร้างมาสิบปีเล่าเส้นทางอาชีพผ่านเสื้อผ้า เป็นครั้งแรกที่แฟชั่นไม่ได้ทำหน้าที่แค่เสริมเพลง แต่กลายเป็นเครื่องมือเล่าเรื่องเอง',
    },
  ],
  designers: [
    {
      name: 'Saint Laurent',
      rep: 'Anthony Vaccarello',
      period: '2023–ปัจจุบัน',
      origin: 'Vaccarello ติดต่อ James เองหลังเห็นภาพบนเวที PULSE Tour ไม่ผ่านการเสนอตัวหรือการเจรจาตามขั้นตอนปกติ',
      work: 'เสื้อผ้าเวที PULSE Tour · คอลเลกชันสามชิ้น SL × GONUNMA (2024 ขายหมดใน 4 ชั่วโมง) · ทำงานด้านสไตล์ร่วมกันต่อเนื่อง',
      significance: 'เป็นการจับมือกับแบรนด์หรูที่มาจากตัวงานบนเวที ไม่ใช่จากความดัง ซึ่งหาไม่ได้บ่อยสำหรับศิลปินสาย K-pop',
    },
    {
      name: 'Nike',
      rep: 'Nike Sportswear (ออกแบบร่วม)',
      period: '2023–ปัจจุบัน',
      origin: 'Nike เข้ามาจากการขอส่งเสื้อผ้าให้ทัวร์ PULSE ก่อน แล้วความสัมพันธ์ค่อยขยับเป็นการออกแบบร่วม เพราะพื้นเพด้านการเต้นของ James ทำให้การจับมือกับแบรนด์กีฬาดูมีเหตุผล',
      work: 'GONUNMA × Nike Capsule Vol.1 (2023 ขายหมดใน 3 ชั่วโมง) · Vol.2 คอนเซปต์สองด้านของ CAN\'T LEAVE ALONE (2025) · เสื้อผ้าทัวร์ต่อเนื่อง',
      significance: 'คอลเลกชันนี้มีการแบ่งส่วนแบ่งรายได้ ไม่ใช่แค่ค่าตัวพรีเซนเตอร์ เป็นความร่วมมือทางธุรกิจที่ James ร่วมเป็นเจ้าของงานออกแบบ',
    },
  ],
  tourNotes: [
    {
      tour: 'PULSE Tour (2023–2024)',
      color: '#5a7c6a',
      note: 'เวทีใช้แค่ขาวกับดำ เสื้อผ้าออกแบบให้ขับการเคลื่อนไหว ไม่มีของประดับที่ไม่จำเป็น เป็นคำแถลงทางภาพว่าเขาหลุดจากความรุงรังของยุค SM แล้ว และเป็นสิ่งที่ดึง Saint Laurent เข้ามา',
    },
    {
      tour: 'DECADE Tour (2027–)',
      color: '#6e5a7c',
      note: 'ออกแบบเสื้อผ้าแยกตามยุค แต่ละช่วงของเซ็ตลิสต์มีโทนสีของตัวเองตามยุคต้นฉบับ เป็นครั้งแรกที่ James ใช้เสื้อผ้าเล่าประวัติอาชีพอย่างเป็นระบบ และเป็นงานโปรดักชันที่ใหญ่ที่สุดในอาชีพ',
    },
  ],
};

export const fashion = { en, th };
export function getFashion(lang: Lang) {
  return fashion[lang];
}
