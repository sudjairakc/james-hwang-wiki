// Bilingual content for the Music Videos & Visual Works page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Video metadata (title, type, date, era, era color, director, palette, views)
// is shared/non-translatable — proper nouns, hex colors, and technical
// palette/genre-style tags, matching the convention set by collaborations.ts
// (genre field) and artistry.ts (eraColors). Only `concept` and `notes`
// (narrative prose) are translated per language, index-aligned with mvMeta.

import type { Lang } from '../../i18n';

export type MVType = 'MV' | 'Dance' | 'Concept' | 'Performance' | 'Teaser' | 'Live';

// Shared per-video metadata — index-aligned with en.mvList / th.mvList.
export const mvMeta: Array<{
  title: string;
  type: MVType;
  date: string;
  era: string;
  eraColor: string;
  director?: string;
  palette: string;
  views?: string;
}> = [
  // LIKE I DO era (retroactive MV 2022)
  { title: 'LIKE I DO (feat. Mark Lee)', type: 'MV', date: '2022.01.22', era: 'LIKE I DO', eraColor: '#c9a84c', director: 'Lumpens', palette: 'Stark white · Concrete grey · Hard shadow black', views: '85M+' },

  // SOFTEST TOUCH era
  { title: 'SOFTEST TOUCH', type: 'MV', date: '2022.01.11', era: 'SOFTEST TOUCH', eraColor: '#9b7fc8', director: 'Director Oh Sung-jin', palette: 'Blush pink · Soft lilac · Cream white', views: '82M+' },

  // PULSE era
  { title: 'HOW DOES IT FEEL?', type: 'MV', date: '2023.07.21', era: 'PULSE', eraColor: '#5a7c6a', director: 'Lumpens', palette: 'Deep charcoal · Warm amber · Low candlelight gold', views: '140M+' },
  { title: 'SAY (feat. keshi)', type: 'MV', date: '2023.07.28', era: 'PULSE', eraColor: '#5a7c6a', director: 'Warren Fu', palette: 'Natural daylight · Muted beige · Urban grey', views: '120M+' },
  { title: 'ALL FOR YOU', type: 'Dance', date: '2023.08.04', era: 'PULSE', eraColor: '#5a7c6a', director: 'JH Company Visual Team', palette: 'Golden hour amber · Cream · Concrete', views: '42M+' },
  { title: 'TALK TO ME', type: 'Dance', date: '2023.08.11', era: 'PULSE', eraColor: '#5a7c6a', director: 'JH Company Visual Team', palette: 'Cool grey · Blue-black · Dim white', views: '38M+' },

  // ARE U STILL era
  { title: 'IF I KNEW', type: 'MV', date: '2023.10.06', era: 'ARE U STILL', eraColor: '#5a7aaa', director: 'JH Company Visual Team', palette: 'Concert warm white · Arena dark · Crowd gold', views: '47M+' },
  { title: 'SLEEPWALKING', type: 'Concept', date: '2024.01.01', era: 'ARE U STILL', eraColor: '#5a7aaa', director: 'Park Hong-yeol', palette: 'Warm amber · Soft cream · Velvet shadow', views: '28M+' },
  { title: 'TEARS ON A PRETTY FACE', type: 'MV', date: '2024.01.08', era: 'ARE U STILL', eraColor: '#5a7aaa', director: 'Jenn Nkiru', palette: 'Night street black · Electric accent · Chrome flash', views: '240M+' },
  { title: 'BREATHE', type: 'Performance', date: '2024.02.04', era: 'ARE U STILL', eraColor: '#5a7aaa', director: 'JH Company Visual Team', palette: 'Pure white · Hard shadow · Gold light', views: '62M+' },

  // CAN\'T LEAVE ALONE era
  { title: "CAN\'T LEAVE ALONE (feat. Pharrell Williams)", type: 'MV', date: '2025.02.03', era: "CAN\'T LEAVE ALONE", eraColor: '#c06080', director: 'Dave Meyers', palette: 'Saturated primary colors · White sneakers · Bold pattern', views: '175M+' },
  { title: 'SOUR', type: 'MV', date: '2025.02.10', era: "CAN\'T LEAVE ALONE", eraColor: '#c06080', director: 'Lumpens', palette: 'Desaturated blue-white · Steel grey · Deep shadow', views: '120M+' },
  { title: 'HONEY', type: 'MV', date: '2025.02.10', era: "CAN\'T LEAVE ALONE", eraColor: '#c06080', director: 'Lumpens', palette: 'Warm daylight · Honey gold · Natural ivory', views: '108M+' },

  // DECADE era
  { title: 'I LOVE YOUR BODY', type: 'MV', date: '2026.07.07', era: 'DECADE', eraColor: '#6e5a7c', director: 'Kogonada', palette: 'Muted purple · Ash grey · Warm black', views: '78M+' },
];

// Era grouping order + colors — shared.
export const eraOrder: Array<{ era: string; color: string }> = [
  { era: 'LIKE I DO', color: '#c9a84c' },
  { era: 'SOFTEST TOUCH', color: '#9b7fc8' },
  { era: 'PULSE', color: '#5a7c6a' },
  { era: 'ARE U STILL', color: '#5a7aaa' },
  { era: "CAN\'T LEAVE ALONE", color: '#c06080' },
  { era: 'DECADE', color: '#6e5a7c' },
];

// Type badge colors — shared; type labels (MV/Dance/Concept/…) are technical
// tags kept identical in both languages (matches the `genre` field convention
// in collaborations.ts).
export const typeBadge: Record<string, string> = {
  MV: 'var(--gold)',
  Dance: '#5a7c6a',
  Concept: '#9b7fc8',
  Performance: '#5a7aaa',
  Teaser: '#c06080',
  Live: '#6e5a7c',
};

const en = {
  ui: {
    label: 'Discography',
    title: 'Music Videos & Visual Works',
    intro:
      "Complete index of James Hwang's official visual releases — music videos, dance sessions, concept films, and performance videos. Each entry includes director, visual concept, and color palette notes.",
    chartHeading: 'View Count by Video',
    chartSub: 'YouTube views · sorted high → low · colored by era',
    statTotal: 'Total visual works',
    statMVs: 'Official MVs',
    statDancePerf: 'Dance / Performance',
    statEras: 'Eras covered',
    directorLabel: 'Director',
    paletteLabel: 'Color Palette',
    conceptLabel: 'Visual Concept',
    viewsSuffix: 'views',
    workSingular: 'work',
    workPlural: 'works',
  },
  mvList: [
    {
      concept:
        'Retroactive MV released 6 years after the original track. All-white set concept — clean, high-key lighting with hard shadows that emphasize footwork. The choreography is heavily foot-driven: intricate floor patterns, weight-shifting, and mirror-floor sequences that reflect the dancers\' feet upward into the frame. Hip-hop energy translated through precision footwork rather than full-body flash. Mark Lee appears in intercut performance segments.',
      notes: 'Mirror-floor technique used to frame footwork from below — a visual signature of the MV. First official video for any LIKE I DO era track.',
    },
    {
      concept:
        'Dance MV with a soft, tactile aesthetic — pink-toned pastel sets, plush textures, fluffy props, and gentle lighting that blurs hard edges. The choreography prioritizes smoothness and closeness: slow weight-transfers, reaching gestures, movements that feel like touch rather than performance. Visually draws comparison to the NCT 127 "Touch" era aesthetic — intimate, warm, and deliberately delicate.',
      notes: 'Dance-forward debut solo MV. The softness of the set and choreography contrasts with the crisp white of LIKE I DO — intentional era reset.',
    },
    {
      concept:
        'Narrative MV set in a dimly lit private club — the visual register of Justin Timberlake\'s "Suit & Tie" filtered through an intimate late-night atmosphere. James, dressed in a sharp suit, notices a woman at the party who spends the entire evening staring at her phone. The MV follows his attempts to pull her attention away from the screen and onto the moment — building through conversation, eye contact, and eventually a dance floor sequence in which he finally convinces her to put the phone down and join him. Light choreography closes the MV.',
      notes: 'Narrative-driven MV with a resolved arc — the woman joins him on the floor in the final sequence.',
    },
    {
      concept:
        'Wide-lens, people-watching MV — the primary visual language is crowds in motion. Strangers cross frame constantly: busy intersections, transit corridors, market spaces. The camera holds wide, letting figures drift in and out of focus. James and keshi appear at ground level within these flows, not elevated above them — the MV treats both artists as part of the world rather than separate from it. Unhurried pacing; the edit breathes with the song rather than cutting against it.',
      notes: "keshi's aesthetic influence is visible throughout — minimal staging, wide compositions, emotional understatement.",
    },
    {
      concept:
        'Dance session format. Single-take rooftop shoot at golden hour, Seoul skyline visible. 6-member ensemble choreography featuring James as anchor. Outfit: oversized cream suit. No edits, no cuts — full performance in one shot.',
      notes: undefined,
    },
    {
      concept:
        'Indoor dance session. Low-key dark studio, blue-grey light. Solo freestyle session — less structured choreography, more improvisational movement. Intended to contrast with the polish of HOW DOES IT FEEL?.',
      notes: undefined,
    },
    {
      concept:
        'Concert-documentary hybrid MV compiled from PULSE tour footage. The emotional core is the crowd — wide shots of fan reactions, sing-along moments, faces in tears or awe — intercut with tight performance close-ups of James at the microphone. The MV is less about choreography than about the space between the performer and the audience: what the song means to the people in the room. Ends on a held note, the arena lights up, and the camera slowly pulls back.',
      notes: 'Compiled from PULSE 2023 tour footage. No studio scenes — entirely live-environment material.',
    },
    {
      concept:
        'New Year concept video channeling the smooth, effortless cool of Michael Jackson\'s Off the Wall and Rock with You era. James moves through softly lit spaces — corridors, open rooms, an empty floor — with the unhurried, gliding quality of someone who is technically awake but moving through a dream. No hard cuts, no performance staging. The choreography, when it appears, is fluid and internal rather than outward-facing. The overall feeling is 1979 reimagined in a contemporary key.',
      notes: 'Visual and tonal reference: MJ Off the Wall era aesthetic — warmth, movement, effortless cool rather than spectacle.',
    },
    {
      concept:
        'Full street performance MV with a female-only dance crew. The choreography takes place outdoors — an entire city block, filmed wide, all-women ensemble filling the street and owning every inch of it. The visual references are dense: Michael Jackson\'s "Bad" and "Body" by The Jacksons for the street-power energy; Prince\'s 80s aesthetic for the androgynous edge and ironic glamour. James performs at the center of the crew but the women carry the spectacle. The edit is tight and funk-driven throughout.',
      notes: 'Most-viewed MV in James Hwang solo catalog. All-female dance crew, full outdoor street shoot. References: Bad, Body (The Jacksons), Prince 80s visual language.',
    },
    {
      concept:
        'Stage performance video — full choreography in a single white void set, heavy use of dramatic shadow lighting. Disco-funk energy translated visually through continuous camera movement. One of the most shared performance videos in the catalog.',
      notes: undefined,
    },
    {
      concept:
        'Full 2000s aesthetic — the visual world of early-Pharrell-era music videos: bright saturated color, expressive fashion, loose storytelling, and a general feeling of being extremely well-dressed and slightly chaotic. James and Pharrell appear together throughout, sharing the same frame and the same energy. The edit is fast and playful, cutting on the beat. The MV feels like something that would have aired on TRL in 2003 — which is precisely the point.',
      notes: 'Visual reference: early-2000s Pharrell / N.E.R.D. / The Neptunes era aesthetic.',
    },
    {
      concept:
        'Early-2000s boyband MV aesthetic — the kind of video NSYNC or Westlife would have released between 2000 and 2004: a single location shoot with dramatic lighting, synchronized group movement, and a moodboard that sits between emotional and cool. Slightly desaturated, high-contrast look. The choreography has the precision and angularity typical of that era. SOUR is the colder half of the dual-concept: restrained, sharp, a little bitter.',
      notes: 'Released simultaneously with HONEY MV. Reference: early-2000s Western boyband visual language — SOUR carries the cold register.',
    },
    {
      concept:
        'Same director, same production week as SOUR — but shot as the companion and contrast piece. HONEY moves into a 2010s boyband register: warmer palette, more natural lighting, looser choreography, the visual grammar of One Direction or Bruno Mars circa 2012–2015. The feeling is easy and open rather than sharp and contained. Where SOUR is cold precision, HONEY is warm momentum.',
      notes: 'Companion piece to SOUR. Reference: 2010s Western boyband / soft-pop MV aesthetic — the warm half of the dual-concept.',
    },
    {
      concept:
        'Anniversary lead single MV directed by Kogonada (Columbus, After Yang). Long-take meditative style — James walks through spaces that represent different eras of his career (a practice room, a stadium corridor, a recording studio, a traditional Korean courtyard). No performance, no choreography. Pure presence and time.',
      notes: "Kogonada also directed RESONANCE series episodes 3–4. The MV functions as both music video and proof-of-concept for James's directorial aesthetic.",
    },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ผลงานเพลง',
    title: 'มิวสิกวิดีโอ & Visual Works',
    intro:
      'ดัชนีครบถ้วนของผลงานภาพที่เป็นทางการของ James Hwang — มิวสิกวิดีโอ, dance session, concept film และ performance video แต่ละรายการมีข้อมูลผู้กำกับ, visual concept และโน้ต color palette',
    chartHeading: 'ยอดวิวแยกตามวิดีโอ',
    chartSub: 'ยอดวิว YouTube · เรียงจากมากไปน้อย · สีตาม era',
    statTotal: 'ผลงานภาพทั้งหมด',
    statMVs: 'MV อย่างเป็นทางการ',
    statDancePerf: 'Dance / Performance',
    statEras: 'Era ที่ครอบคลุม',
    directorLabel: 'ผู้กำกับ',
    paletteLabel: 'โทนสี',
    conceptLabel: 'แนวคิดภาพ',
    viewsSuffix: 'วิว',
    workSingular: 'ชิ้นงาน',
    workPlural: 'ชิ้นงาน',
  },
  mvList: [
    {
      concept:
        'MV แบบ retroactive ที่ปล่อยหลังเพลงต้นฉบับ 6 ปี คอนเซปต์เซ็ตสีขาวล้วน — high-key lighting สะอาดตา พร้อม hard shadow ที่เน้นการเคลื่อนไหวของเท้า ท่าเต้นขับเคลื่อนด้วยเท้าเป็นหลัก: ลวดลายบนพื้นที่ซับซ้อน, การถ่ายน้ำหนักตัว และซีเควนซ์ mirror-floor ที่สะท้อนเท้านักเต้นขึ้นมาในเฟรม พลังงานฮิปฮอปถูกถ่ายทอดผ่านความแม่นยำของฟุตเวิร์กมากกว่าการโชว์ full-body Mark Lee ปรากฏตัวใน performance segment ที่ intercut สลับเข้ามา',
      notes: 'เทคนิค mirror-floor ถูกใช้เพื่อจับภาพฟุตเวิร์กจากด้านล่าง — เป็นลายเซ็นภาพของ MV นี้ เป็นวิดีโออย่างเป็นทางการตัวแรกของเพลงในยุค LIKE I DO',
    },
    {
      concept:
        'Dance MV ที่มีความ soft และ tactile — เซ็ตโทนพาสเทลสีชมพู พื้นผิวนุ่มฟู พร็อพขนปุย และแสงนุ่มที่ทำให้ hard edge เบลอ ท่าเต้นเน้นความ smooth และความใกล้ชิด: การถ่ายน้ำหนักตัวช้าๆ ท่ายื่นมือ การเคลื่อนไหวที่รู้สึกเหมือน touch มากกว่า performance ในเชิงภาพเทียบได้กับ aesthetic ยุค "Touch" ของ NCT 127 — intimate, warm และ delicate อย่างตั้งใจ',
      notes: 'MV เดี่ยวเปิดตัวที่เน้น dance-forward ความนุ่มนวลของเซ็ตและท่าเต้น contrast กับสีขาวคมชัดของ LIKE I DO — เป็นการ reset era อย่างตั้งใจ',
    },
    {
      concept:
        'Narrative MV ที่ตั้งอยู่ใน private club แสงสลัว — visual register แบบ "Suit & Tie" ของ Justin Timberlake กรองผ่านบรรยากาศดึกๆ ที่ intimate เจมส์ในสูทเรียบหรู สังเกตเห็นผู้หญิงคนหนึ่งในปาร์ตี้ที่ใช้เวลาทั้งคืนจ้องมือถือ MV ตามความพยายามของเขาที่จะดึงความสนใจเธอออกจากหน้าจอมาสู่ moment ตรงหน้า — ค่อยๆ สร้างผ่านบทสนทนา eye contact และสุดท้ายซีเควนซ์ฟลอร์เต้นที่เขาชักชวนเธอวางมือถือลงมาร่วมด้วยสำเร็จ ปิดท้าย MV ด้วยท่าเต้นเบาๆ',
      notes: 'MV แบบ narrative-driven ที่มี arc คลี่คลาย — ผู้หญิงมาร่วมเต้นกับเขาในซีเควนซ์สุดท้าย',
    },
    {
      concept:
        'MV แบบ wide-lens ที่เน้น people-watching — visual language หลักคือฝูงชนที่เคลื่อนไหว คนแปลกหน้าตัดผ่านเฟรมตลอดเวลา: สี่แยกพลุกพล่าน ทางเดินขนส่ง พื้นที่ตลาด กล้องถ่ายมุมกว้างตลอด ปล่อยให้ตัวละครลอยเข้าออกโฟกัส เจมส์และ keshi ปรากฏตัวในระดับพื้นดินท่ามกลางกระแสเหล่านี้ ไม่ได้ถูกยกให้อยู่เหนือมัน — MV นี้ปฏิบัติต่อศิลปินทั้งสองในฐานะส่วนหนึ่งของโลก ไม่ใช่แยกออกจากมัน จังหวะไม่รีบร้อน การตัดต่อหายใจไปพร้อมกับเพลงมากกว่าจะตัดสวนกับมัน',
      notes: 'อิทธิพลด้าน aesthetic ของ keshi ปรากฏชัดตลอดทั้ง MV — staging แบบ minimal, composition กว้าง, emotional understatement',
    },
    {
      concept:
        'รูปแบบ dance session ถ่ายแบบ single-take บนดาดฟ้าช่วง golden hour มองเห็นสกายไลน์โซล ท่าเต้นแบบ ensemble 6 คนโดยมีเจมส์เป็น anchor เอาต์ฟิต: สูทครีมทรงโอเวอร์ไซส์ ไม่มีการตัดต่อ ไม่มี cut — perform เต็มรูปแบบในช็อตเดียว',
      notes: undefined,
    },
    {
      concept:
        'Dance session แบบ indoor สตูดิโอมืดโทน low-key แสงสีฟ้าเทา เป็น solo freestyle session — ท่าเต้น structured น้อยลง เน้นการเคลื่อนไหวแบบ improvisation ตั้งใจให้ contrast กับความ polish ของ HOW DOES IT FEEL?',
      notes: undefined,
    },
    {
      concept:
        'MV แบบ concert-documentary hybrid ที่ compile จากฟุตเทจทัวร์ PULSE แก่นทางอารมณ์คือฝูงคนดู — ช็อตกว้างของปฏิกิริยาแฟน โมเมนต์ sing-along ใบหน้าที่ร้องไห้หรือทึ่ง — intercut กับ close-up perform ของเจมส์ที่ไมโครโฟน MV นี้ไม่ได้เน้นท่าเต้นเท่ากับพื้นที่ระหว่างผู้แสดงกับผู้ชม: เพลงนี้มีความหมายอะไรกับคนในห้องนั้น จบด้วยโน้ตที่ค้างไว้ อารีนาสว่างขึ้น และกล้องค่อยๆ pull back',
      notes: 'Compile จากฟุตเทจทัวร์ PULSE ปี 2023 ไม่มีฉากสตูดิโอเลย — เป็นวัสดุจาก live-environment ทั้งหมด',
    },
    {
      concept:
        'concept video ต้อนรับปีใหม่ที่ถ่ายทอดความ smooth เท่แบบไม่ต้องพยายามของยุค Off the Wall และ Rock with You ของ Michael Jackson เจมส์เคลื่อนไหวผ่านพื้นที่แสงนุ่ม — ทางเดิน ห้องโล่ง พื้นที่ว่าง — ด้วยคุณภาพการเคลื่อนไหวแบบไม่รีบร้อน ล่องลอย เหมือนคนที่ตื่นอยู่ทางเทคนิคแต่กำลังเดินอยู่ในความฝัน ไม่มี hard cut ไม่มี performance staging ท่าเต้น เมื่อปรากฏขึ้น จะลื่นไหลและ internal มากกว่า outward-facing ความรู้สึกโดยรวมคือปี 1979 ที่ถูก reimagine ในคีย์ร่วมสมัย',
      notes: 'Reference ด้านภาพและโทน: aesthetic ยุค Off the Wall ของ MJ — ความอบอุ่น การเคลื่อนไหว ความเท่แบบไม่ต้องพยายาม มากกว่า spectacle',
    },
    {
      concept:
        'MV street performance เต็มรูปแบบกับ dance crew หญิงล้วน ท่าเต้นเกิดขึ้นกลางแจ้ง — ทั้งบล็อกเมือง ถ่ายแบบ wide, ensemble หญิงล้วนเต็มพื้นที่ถนนและครองทุกตารางนิ้ว visual reference มีความหนาแน่น: "Bad" ของ Michael Jackson และ "Body" ของ The Jacksons สำหรับพลัง street-power; aesthetic ยุค 80s ของ Prince สำหรับความ androgynous edge และ ironic glamour เจมส์ perform อยู่ตรงกลางของ crew แต่ผู้หญิงเป็นคนแบก spectacle การตัดต่อ tight และ funk-driven ตลอดทั้งเรื่อง',
      notes: 'MV ที่มียอดวิวสูงสุดใน solo catalog ของ James Hwang dance crew หญิงล้วน ถ่ายกลางแจ้งบนถนนเต็มรูปแบบ Reference: Bad, Body (The Jacksons), visual language ยุค 80s ของ Prince',
    },
    {
      concept:
        'วิดีโอ stage performance — ท่าเต้นเต็มรูปแบบในเซ็ต white void เดี่ยว ใช้ dramatic shadow lighting หนักมือ พลังงาน disco-funk ถูกถ่ายทอดผ่านการเคลื่อนกล้องต่อเนื่อง เป็นหนึ่งใน performance video ที่ถูกแชร์มากที่สุดใน catalog',
      notes: undefined,
    },
    {
      concept:
        'aesthetic ยุค 2000s เต็มรูปแบบ — โลกภาพของ music video ยุค early-Pharrell: สีสด saturated แฟชั่นจัดจ้าน storytelling หลวมๆ และความรู้สึกโดยรวมของการแต่งตัวดีมากแต่ chaotic นิดๆ เจมส์และ Pharrell ปรากฏตัวด้วยกันตลอดเรื่อง อยู่ในเฟรมและพลังงานเดียวกัน การตัดต่อไวและสนุก ตัดตามจังหวะเพลง MV นี้ให้ความรู้สึกเหมือนสิ่งที่เคยออกอากาศทาง TRL ปี 2003 — ซึ่งนั่นคือจุดประสงค์ที่แท้จริง',
      notes: 'Reference ด้านภาพ: aesthetic ยุค early-2000s ของ Pharrell / N.E.R.D. / The Neptunes',
    },
    {
      concept:
        'aesthetic MV boyband ยุค early-2000s — แบบที่ NSYNC หรือ Westlife น่าจะปล่อยระหว่างปี 2000–2004: ถ่ายโลเคชันเดียวด้วย dramatic lighting การเคลื่อนไหวกลุ่มแบบ synchronized และ moodboard ที่อยู่ระหว่าง emotional กับ cool ภาพโทน desaturated เล็กน้อย high-contrast ท่าเต้นมีความ precision และ angularity แบบยุคนั้น SOUR คือครึ่งที่เย็นกว่าของ dual-concept นี้: restrained, sharp, ขมนิดๆ',
      notes: 'ปล่อยพร้อมกับ MV HONEY Reference: visual language ของ Western boyband ยุค early-2000s — SOUR แบก register ที่เย็นกว่า',
    },
    {
      concept:
        'ผู้กำกับคนเดียวกัน สัปดาห์การโปรดักชันเดียวกันกับ SOUR — แต่ถ่ายเป็น companion piece ที่ contrast กัน HONEY ขยับไปสู่ register boyband ยุค 2010s: palette อุ่นกว่า แสงธรรมชาติมากขึ้น ท่าเต้นหลวมขึ้น visual grammar แบบ One Direction หรือ Bruno Mars ช่วงปี 2012–2015 ความรู้สึกคือ easy และ open มากกว่า sharp และ contained ในขณะที่ SOUR คือ cold precision, HONEY คือ warm momentum',
      notes: 'Companion piece ของ SOUR Reference: aesthetic MV แบบ Western boyband / soft-pop ยุค 2010s — ครึ่งที่อุ่นกว่าของ dual-concept',
    },
    {
      concept:
        'MV lead single ฉลองครบรอบ กำกับโดย Kogonada (Columbus, After Yang) สไตล์ long-take แบบ meditative — เจมส์เดินผ่านพื้นที่ที่แทนแต่ละยุคในอาชีพของเขา (ห้องซ้อม, ทางเดินสเตเดียม, ห้องอัด, ลานบ้านเกาหลีดั้งเดิม) ไม่มี performance ไม่มีท่าเต้น มีแค่ presence และเวลาล้วนๆ',
      notes: 'Kogonada ยังกำกับตอน 3–4 ของซีรีส์ RESONANCE ด้วย MV นี้ทำหน้าที่ทั้งเป็น music video และ proof-of-concept สำหรับ directorial aesthetic ของเจมส์',
    },
  ],
};

export const musicVideos = { en, th };
export function getMusicVideos(lang: Lang) {
  return musicVideos[lang];
}
