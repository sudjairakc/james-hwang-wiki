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
        'The PULSE Tour is the most significant milestone — an entirely black-and-white stage palette, no other colors. The clothing was designed to clearly emphasize movement, with no unnecessary embellishment. Anthony Vaccarello of Saint Laurent saw the PULSE Tour\'s stage visual identity and reached out to James directly, leading to the SL ambassadorship (custom stage wardrobe & campaigns, not a retail capsule).',
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
    label: 'Biography',
    title: 'Fashion & Style Evolution',
    subtitle: 'Album Aesthetics · Stage Wardrobe · ความสัมพันธ์กับดีไซเนอร์ · 2016–ปัจจุบัน',
    intro:
      'Fashion ของ James Hwang พัฒนาคู่ขนานกับ career arc — จาก SM-controlled idol wardrobe สู่ independence ที่สร้าง visual identity เป็นของตัวเอง จุดเปลี่ยนสำคัญคือ PULSE Tour (2023) ที่ stage aesthetic ดึงดูด Saint Laurent โดยตรง ทำให้ James เปลี่ยนสถานะจาก "K-pop artist ที่แบรนด์เลือก" เป็น "creative identity ที่แบรนด์เข้ามาหา"',
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
        'Gold-tone, structured warmth — SM ปล่อยโดยไม่มี broadcast promotion และไม่มี music show appearances โดยตั้งใจ visual ของ release จึงจำกัดอยู่ที่ album packaging และ MV เท่านั้น ไม่มี dedicated editorial หรือ press campaign ในปี 2016 MV ถ่ายทำในปี 2022–2023 หลังเพลงกลับมาเป็นกระแสผ่าน TikTok resurgence — เป็น MV ที่ได้รับ full visual treatment หลังจากเพลงปล่อยไปแล้ว 6–7 ปี',
      stageWardrobe:
        'ไม่มี — LIKE I DO ไม่มีการโปรโมทหรือ stage performance ใดๆ ในปี 2016 James ปรากฏตัวเป็น NCT 127 member บน stage แต่ไม่มี solo stage สำหรับ era นี้ LIKE I DO ไม่มี tour หรือ showcase ที่เกี่ยวข้อง',
      keyPieces: ['LIKE I DO MV (ถ่ายทำ 2022–2023 · ปล่อยหลัง resurgence)', 'Gold-tone Mask Singer mask "Cat\'s Eyes" — origin ของ GONUNMA name'],
      designers: [],
      context:
        'LIKE I DO ไม่ได้มี visual identity ของตัวเองในเวลาที่ปล่อย — ได้รับ full treatment ย้อนหลังเมื่อ TikTok resurgence ผลักดัน streaming ให้กลับมาใน 2022–2023 กลายเป็นกรณีที่ visual direction ถูกสร้างหลัง cultural moment ไม่ใช่ก่อน',
    },
    {
      era: 'SOFTEST TOUCH',
      period: '2022',
      color: '#9b7fc8',
      label: 'SM Solo Debut · First Visual Voice',
      albumAesthetic:
        'Purple-lavender palette — ครั้งแรกที่ James มีส่วนร่วมใน visual direction อย่างมีนัยสำคัญ ยังอยู่ภายใต้ SM approval แต่ทิศทางชัดเจนขึ้น: ผิวสีเข้ม, oversized tailoring, สถาปัตยกรรมสะอาด',
      stageWardrobe:
        'ไม่มี full-scale tour ในช่วงนี้ — music show performances ใช้ editorial tailoring ที่เริ่มสะท้อน personal taste มากขึ้น: structured jackets, monochrome palettes, minimal accessories',
      keyPieces: ['Oversized white tailoring (W Korea Feb 2022 cover)', 'Sharp suiting เชิงสถาปัตยกรรม (Vogue Korea Apr 2022)', 'Minimal black editorial (Oscars appearance)', 'Calvin Klein global campaign (Jul 2022)'],
      designers: ['W Korea — Hong Jang-hyun (photographer)', 'Vogue Korea editorial team', 'Calvin Klein (ดีลที่ SM เป็นคนจัดการ)'],
      context:
        'W Korea cover (February 2022) เป็นจุดเปลี่ยน — นักวิจารณ์แฟชั่นหลายคนระบุว่าเป็นครั้งแรกที่ James แสดง visual identity ที่แยกออกจาก K-pop idol format ชัดเจน เดือนกรกฎาคมปีเดียวกัน ฝ่าย licensing ของ SM ปิดดีล global ambassadorship แรกให้เขา คือแคมเปญ Calvin Klein — ดีลที่ค่ายเป็นคนเจรจา ไม่ใช่ James เอง สื่อตอนนั้นนำเสนอในมุม "idol ที่ถูกแบรนด์เลือก" ถือเป็นภาพ before-picture ที่ชัดสุด เทียบกับความสัมพันธ์กับ Saint Laurent อีกหนึ่งปีต่อมาที่แบรนด์เข้าหาเขาเองแทน',
    },
    {
      era: 'PULSE',
      period: '2023–2024',
      color: '#5a7c6a',
      label: 'Independence · Monochrome Architecture',
      albumAesthetic:
        'Black, white, และ deep forest green — visual identity ที่ James กำหนดเองทั้งหมดหลังออก SM ไม่มี color saturation, ไม่มี maximalism แสงเงาชัดเจน geometric มาก GQ Korea cover (Aug 2023) เป็น visual manifesto ของ era นี้',
      stageWardrobe:
        'PULSE Tour เป็นหมุดหมายสำคัญที่สุด — stage palette ขาว-ดำทั้งหมด ไม่มีสีอื่น เสื้อผ้าออกแบบให้ขับการเคลื่อนไหวออกมาชัดเจน ไม่มี embellishment ที่ไม่จำเป็น Anthony Vaccarello แห่ง Saint Laurent เห็น stage visual identity ของ PULSE Tour แล้วติดต่อ James โดยตรง นำไปสู่การเป็น SL ambassador (custom stage wardrobe & campaign ไม่ใช่ retail capsule)',
      keyPieces: ['All-black stage outfits (PULSE 2023)', 'GONUNMA × Nike Capsule Vol.1 (2023)', 'Saint Laurent stage wardrobe (PULSE 2024)'],
      designers: ['Saint Laurent — Anthony Vaccarello', 'Nike Sportswear (co-design)'],
      context:
        'PULSE Tour visual identity กลายเป็น calling card ที่ทำให้ luxury fashion เข้ามาหา James แทนที่จะเป็นฝ่าย James เข้าหา brand แนวทางนี้ถือเป็น repositioning จาก K-pop fashion สู่ global fashion sphere',
    },
    {
      era: 'ARE U STILL',
      period: '2024',
      color: '#5a7aaa',
      label: 'Grammy Era · Fluid Movement',
      albumAesthetic:
        'Deep blue, slate, และ warm soul undertones — neo-soul visual language สะท้อนการเปลี่ยน genre อย่างชัดเจน photography style เปลี่ยนจาก architectural เป็น organic movement-based i-D Magazine cover (Spring 2024) เป็น editorial ที่ถ่ายด้วย fluid silhouettes ที่ออกแบบให้เคลื่อนไหวได้',
      stageWardrobe:
        'PULSE 2024 World Tour Leg 2 (ARE U STILL era shows) — wardrobe ขยายจาก strict monochrome ของ Leg 1 เป็น deep blues และ earth tones ชุดของ dance crew ได้รับการออกแบบให้ complement แต่ไม่ compete กับ James ตัวชุดมี more fluid cut เพื่อรองรับ neo-soul choreography',
      keyPieces: ['i-D abstract movement editorial looks (Spring 2024)', 'Dazed Korea deconstructed formalwear (Mar 2024 — Grammy winner issue)', 'SNL performance wardrobe (Apr 2024)'],
      designers: ['Saint Laurent (continuing)', 'i-D Magazine styling team', 'Nike (PULSE tour ongoing)'],
      context:
        'Dazed Korea Grammy issue (March 2024) — ออกแบบในสัปดาห์หลัง Grammy ceremony ด้วย deconstructed formalwear และ industrial sets ถูกอ้างถึงบ่อยมากในวงการ fashion ในฐานะ "moment that repositioned James from K-pop idol to global fashion subject"',
    },
    {
      era: "CAN\'T LEAVE ALONE",
      period: '2025',
      color: '#c06080',
      label: 'Duality · Two-Register Visual Language',
      albumAesthetic:
        'Duality concept ที่แยก visual identity เป็นสองขั้ว: SOUR (cold-tone — steel blue, ash, clinical white) และ HONEY (warm-tone — amber, cream, gold) Harper\'s Bazaar Korea (Jan 2025) ถ่ายสองชุด 8 หน้าแยกกันตาม concept นี้ — หนึ่งใน editorial ที่ elaborate ที่สุดในอาชีพ',
      stageWardrobe:
        'ไม่มี dedicated CAN\'T LEAVE ALONE tour — wardrobe concept ถูก translate เป็น award show appearances และ US promotion circuit สองชุดหลักสำหรับ Grammy performance (Feb 2025): warm-tone สำหรับ entrance, cold-tone สำหรับ closing performance',
      keyPieces: ['HONEY palette editorial (Harper\'s Bazaar Korea Jan 2025)', 'SOUR palette editorial (same issue, separate spread)', 'Grammy 2025 performance wardrobe'],
      designers: ['Harper\'s Bazaar Korea styling team', 'GONUNMA × Nike Capsule Vol.2 — CAN\'T LEAVE ALONE duality concept'],
      context:
        'Nike Capsule Vol.2 (2025) เป็นครั้งแรกที่ Nike ออก capsule ในสอง simultaneous colorway stories (Vol.2A SOUR และ Vol.2B HONEY) — James นำ album concept เข้าไปในโครงสร้าง commercial product โดยตรง',
    },
    {
      era: 'DECADE',
      period: '2026',
      color: '#6e5a7c',
      label: 'Legacy · Retrospective Synthesis',
      albumAesthetic:
        'Deep mauve-purple — anthology era ที่รวบรวมทุก visual language ก่อนหน้า Esquire Korea (Oct 2026) ใช้ archival pieces จาก JH Company vault ผสมกับงาน studio ใหม่ในชุดเดียว — visual statement ว่า James มองตัวเองเป็น curator ของ decade ของตัวเอง',
      stageWardrobe:
        'DECADE Tour (Jan 2027–) — elaborate staging สูงที่สุดในอาชีพ แต่ละ era section มี wardrobe palette ของตัวเอง: gold (LIKE I DO section), purple (SOFTEST TOUCH), black/white (PULSE), blue (ARE U STILL), duality (CAN\'T LEAVE ALONE), mauve (DECADE new tracks) tour เป็นครั้งแรกที่ James ใช้ wardrobe เพื่อ narrate ประวัติศาสตร์ของตัวเอง',
      keyPieces: ['Esquire Korea retrospective editorial (Oct 2026 cover)', 'GMA performance wardrobe (Sep 2026)', 'DECADE Tour multi-era stage costumes'],
      designers: ['Esquire Korea archival feature', 'JH Company in-house creative team (DECADE Tour staging)'],
      context:
        'DECADE Tour คือ synthesis สูงสุดของ fashion evolution ทั้งหมด — ใช้ visual language ที่พัฒนามา 10 ปีเพื่อบอกเล่า career narrative ผ่าน wardrobe เป็นครั้งแรกที่ fashion ไม่ใช่แค่ complement music แต่กลายเป็น medium ของ storytelling เอง',
    },
  ],
  designers: [
    {
      name: 'Saint Laurent',
      rep: 'Anthony Vaccarello',
      period: '2023–ปัจจุบัน',
      origin: 'Vaccarello ติดต่อ James โดยตรงหลังเห็น PULSE Tour visual identity — ไม่ผ่าน pitch หรือ negotiation ปกติ',
      work: 'PULSE Tour stage wardrobe · SL × GONUNMA 3-piece capsule (2024, sold out 4h) · ongoing styling relationship',
      significance: 'เป็น luxury fashion alignment ที่มาจาก performance identity ไม่ใช่จาก celebrity status — rare สำหรับ K-adjacent artist',
    },
    {
      name: 'Nike',
      rep: 'Nike Sportswear (co-design)',
      period: '2023–ปัจจุบัน',
      origin: 'Nike เข้ามาจากการขอ supply PULSE Tour wardrobe ก่อน — ความสัมพันธ์ evolve เป็น co-design capsule เพราะ dance background ของ James ทำให้ sportswear alignment credible',
      work: 'GONUNMA × Nike Capsule Vol.1 (2023, sold out 3h) · Vol.2 CAN\'T LEAVE ALONE duality (2025) · ongoing tour wardrobe',
      significance: 'Capsule มี royalty share structure ไม่ใช่แค่ endorsement fee — เป็น commercial partnership ที่ James เป็น creative co-owner',
    },
  ],
  tourNotes: [
    {
      tour: 'PULSE Tour (2023–2024)',
      color: '#5a7c6a',
      note: 'Stage palette ขาว-ดำทั้งหมด เสื้อผ้าออกแบบให้ขับการเคลื่อนไหว ไม่มี embellishment ไม่จำเป็น เป็น visual statement ของ independence จาก SM era maximalism — และเป็นสิ่งที่ดึง Saint Laurent เข้ามา',
    },
    {
      tour: 'DECADE Tour (2027–)',
      color: '#6e5a7c',
      note: 'Multi-era wardrobe design — แต่ละ section ของ setlist มี palette ของตัวเอง ตาม era ต้นฉบับ เป็นครั้งแรกที่ James ใช้ wardrobe เพื่อ narrate career history อย่างเป็นระบบ production สูงที่สุดในอาชีพ',
    },
  ],
};

export const fashion = { en, th };
export function getFashion(lang: Lang) {
  return fashion[lang];
}
