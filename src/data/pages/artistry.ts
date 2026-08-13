// Bilingual content for the Artistry & Analysis page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Non-translatable values (era-color hex, song names, years, status flags) are
// kept identical across both languages on purpose.

import type { Lang } from '../../i18n';

// Era colors — shared, referenced by markup (not language-specific).
export const eraColors: Record<string, string> = {
  'LIKE I DO': '#c9a84c',
  'SOFTEST TOUCH': '#9b7fc8',
  'PULSE': '#5a7c6a',
  'ARE U STILL': '#5a7aaa',
  "CAN\'T LEAVE ALONE": '#c06080',
  'DECADE': '#6e5a7c',
};

const en = {
  ui: {
    label: 'Music',
    title: 'Artistry & Analysis',
    subtitle:
      'The Architecture of Restraint — an artist who spent 10 years proving that restraint is power, not weakness',
    liminalHeading: 'Signature Songwriting — Liminal Space',
    liminalIntro:
      'What sets James Hwang apart from his R&B contemporaries is that <strong style="color:var(--text)">he never says everything in a single song</strong> — his songs sit in the "before or after" of a relationship milestone, never the moment itself. No song shouts "I love you" or "we\'re over" outright; everything lives in the liminal space of feeling.',
    tensionHeading: 'Thematic Tension — Confidence vs Vulnerability',
    evolutionHeading: 'Production Evolution',
    motifsHeading: 'Lyrical Motifs That Recur Across Eras',
    criticHeading: 'Critic Assessment',
    counterpointsHeading: 'Counterpoints',
    counterpointsIntro:
      'Critical perspectives that genuinely linger around James — not everyone fully accepts him',
    realismHeading: 'Lyrics, Authorship & Production — Realism Check',
    realismIntro:
      'In the real world this material comes from a very wide range of artists (see the reference vocalist under each song on the discography page), but in this canon most of it is credited as <strong style="color:var(--text)">written/produced by GONUNMA</strong> — the question is whether the lyrical language and production claims are <strong style="color:var(--text)">believable</strong>.',
    authorshipSubhead: 'The reality of the credits — graduated authorship',
    stressTestsSubhead: 'Stress tests',
    productionSubhead: 'Instrument & production',
    mjHeading: 'The Michael Jackson Question',
    mjIntro:
      'James references Michael Jackson heavily — it shows up simultaneously in vocals, production, an album era (ARE U STILL) and a film franchise (RESONANCE, which extends MJ\'s Captain EO). The unavoidable question: <strong style="color:var(--text)">does he lean on MJ so hard that it buries his own identity?</strong>',
    stayHeading: 'Why He Stays — NCT 127',
    constructionHeading: 'How the Character Is Built',
    constructionIntro:
      'Read the whole catalog together — vocal profile, dance language, persona, discography arc — and you see James Hwang built as a character from a single principle running through every layer: <strong style="color:var(--text)">restraint</strong>',
    entryHeading: 'Where to Start',
    entryPrefix: 'If you like',
    verdictLabel: 'Verdict —',
    holds: 'HOLDS',
    seam: 'SEAM',
  },
  liminalExamples: [
    { song: 'LIKE I DO', state: "haven't said it", detail: 'just says "no one can love you like I do"' },
    { song: 'EVERLASTING', state: 'about to confess', detail: 'but hasn\'t said it yet' },
    { song: 'SAY', state: 'waiting', detail: 'waiting for the other person to speak first' },
    { song: 'IF I KNEW', state: 'after the loss', detail: 'after already letting her go' },
    { song: 'PURPOSE', state: 'trapped', detail: 'stuck in the cycle, knows it\'s wrong, still can\'t leave' },
    { song: 'LOVE THIS PAIN AWAY', state: "can't let go", detail: 'knows it\'s over but still can\'t put it down' },
  ],
  modes: [
    {
      label: 'Confident mode',
      color: '#c9a84c',
      songs: ['HOW DOES IT FEEL?', 'CRUSH', "HE'S NOT ME", 'BESTFRIEND'],
      desc: 'Songs where he takes the lead — self-assured, knows what he wants — yet never sounds arrogant',
    },
    {
      label: 'Vulnerable mode',
      color: '#5a7aaa',
      songs: ['SAVE ME', 'IF I KNEW', 'CAN YOU LOVE ME TONIGHT?', 'LOVE THIS PAIN AWAY'],
      desc: 'Songs where he asks, waits, hopes — yet never sounds weak. Both poles always stay human',
    },
  ],
  evolution: [
    { era: 'LIKE I DO', year: '2016', sound: 'Atmospheric R&B · minimal arrangement', meaning: 'The voice of someone still searching for identity — under the constraints of the idol system' },
    { era: 'SOFTEST TOUCH', year: '2022', sound: 'Synth funk + indie soul', meaning: 'Growing more confident, but still carrying bedroom-session intimacy' },
    { era: 'PULSE', year: '2023', sound: 'Fully self-produced for the first time · groove-first design', meaning: 'The falsetto hook becomes a signature · every song built for live performance' },
    { era: 'ARE U STILL', year: '2024', sound: 'Live-influenced groove · analog texture', meaning: 'Leaving PULSE\'s precision for humanized rhythm, deliberately referencing the MJ/Prince era' },
    { era: "CAN\'T LEAVE ALONE", year: '2025', sound: 'Contemporary R&B core', meaning: 'The maturity of someone past the Grammy era — accessible but not shallow' },
  ],
  motifs: [
    { motif: 'Waiting for the other person to decide first', songs: 'SAY · EVERLASTING · CAN YOU LOVE ME TONIGHT?' },
    { motif: 'Knowing it\'s wrong but staying anyway', songs: 'PURPOSE · SAVE ME · LOVE THIS PAIN AWAY' },
    { motif: 'You have someone else, but I\'m still here', songs: 'SOFTEST TOUCH · TALK TO ME · SOMETHING REAL' },
    { motif: 'The ordinary is what\'s special', songs: "YOU AIN'T GOTTA · OVERSIZED JACKET · IDK WHAT YOU DO" },
    { motif: 'The hours after midnight', songs: 'NO RESERVATIONS · AT THE END OF THE NIGHT · JUST A DREAM' },
  ],
  ratings: [
    { era: 'LIKE I DO', stars: '★★★½', epithet: 'Seed planted in the wrong season', note: 'Too mature for an SM idol project of that era, but the system wasn\'t ready — later rediscovered as an early blueprint' },
    { era: 'SOFTEST TOUCH', stars: '★★★★', epithet: 'The permission slip he wrote himself', note: 'Proof of a songwriter with a distinct voice — OVERSIZED JACKET / NO RESERVATIONS show an emotional specificity the K-pop system rarely permits' },
    { era: 'PULSE', stars: '★★★★½', epithet: 'The statement album', note: 'The most coherent album in the discography — every decision has intention · TALK TO ME is where dark alt-R&B works best in the catalog' },
    { era: 'ARE U STILL', stars: '★★★★★', epithet: 'The apex', note: 'SELFISH is a masterstroke of sequencing · the Grammy for Best Progressive R&B is well-earned — if PULSE announced the identity, this proves it was no fluke' },
    { era: "CAN\'T LEAVE ALONE", stars: '★★★★', epithet: 'The graceful recalibration', note: 'A deliberate cooldown after the peak — the Pharrell collab is the highlight, but the HONEY side loses momentum toward the end' },
  ],
  perspectives: [
    {
      title: '"He\'s Good, But..." — the semi-anti view',
      color: '#a05070',
      points: [
        'Gets critical acclaim more than cultural ownership — US praise often carries a qualifier: "for an Asian artist", "surprisingly mature for K-pop"',
        '"Good in a non-challenging R&B way" — a backhanded compliment: if a Black artist made the same music, they\'d be called "effortlessly smooth", not "accessible"',
        'NME put it most bluntly: "the moment K-R&B stopped being a genre qualifier and became just R&B" — but the mainstream Western market still sorts R&B by passport more than by craft',
      ],
    },
    {
      title: '"Just Pick a Lane" — the old fans who wanted him to stay with one sound longer',
      color: '#9b7fc8',
      points: [
        'The sound changes almost every album — fans who fell for one sound always feel lost on the next',
        'The defense: Prince, D\'Angelo, Frank Ocean never made the same album twice — change is artistic growth',
        'But those artists survived on an instantly recognizable vocal identity — James\'s falsetto is distinctive, but in the Western market it isn\'t yet at the level where his name alone is a genre guarantee',
      ],
    },
    {
      title: '"Slow Down" — the output-pace problem',
      color: '#5a7c6a',
      points: [
        '4 projects in 4 years (2022–2026) + a multi-leg world tour + overlapping NCT 127 activity — a heavy load for someone holding all creative control himself',
        "CAN\'T LEAVE ALONE sounds under-baked in places and was under-promoted because of scheduling conflicts, not quality",
        'DECADE (2026) arrived too fast for an anthology — it feels like a label/commercial decision · contrast with Frank Ocean, who waited 4 years between albums until anticipation itself became weight',
      ],
    },
  ],
  mjTouchpoints: [
    { layer: 'Vocal & production', detail: 'canon.md lists MJ as the primary reference for both vocals (rhythmic phrasing, vocal accents, breath control) and production (groove, vocal-driven design) — the drum philosophy is written plainly as "MJ-inspired rhythm design"' },
    { layer: 'ARE U STILL (2024)', detail: 'The whole era pivots toward a neo-soul / funk / disco lineage that deliberately references the MJ/Prince era — TEARS ON A PRETTY FACE is described with the words Bad-era groove + The Way You Make Me Feel staging' },
    { layer: 'RESONANCE franchise', detail: 'Captain EO: RESONANCE extends directly from Michael Jackson\'s Captain EO (1986) — the MJ Estate co-holds the music and likeness rights in the IP, tying himself to the MJ legacy at the franchise level, not just as influence' },
  ],
  mjDebate: [
    {
      side: 'The concern — "leaning on MJ too hard"',
      color: '#c06080',
      points: [
        'When the reference appears at once across vocals, production, an album era and a film franchise, it gets hard to tell what is "James" and what is "MJ homage" — a casual listener might read it as a tribute act rather than an original voice',
        'Building a franchise on Captain EO makes MJ\'s legacy a load-bearing pillar of the company\'s value — if MJ discourse (his controversies) turns negative again, JH Company takes the exposure directly',
        'Semi-anti critics use this to reinforce the argument that he still "doesn\'t stand fully on his own name" in the Western market — leaning on a legend that market already owns',
      ],
    },
    {
      side: 'The defense — lineage is not imitation',
      color: '#5a7c6a',
      points: [
        'MJ is a shared reference for nearly every R&B/funk artist (Bruno Mars, The Weeknd, Usher) — openly declaring lineage is different from copying. James lays his own liminal-space songwriting and falsetto identity over the borrowed groove',
        'ARE U STILL is the only MJ-forward era, while PULSE (precision synth-funk) and CAN\'T LEAVE ALONE (Neptunes-leaning) go different ways — if he were really clinging to MJ he wouldn\'t change sound every album',
        'RESONANCE is a new sci-fi universe James co-creates, not a biopic or cover project — it uses Captain EO as a launch point then builds its own mythology, closer to legacy-extension than dependence',
      ],
    },
  ],
  mjVerdict:
    'The balance point: MJ-reliance is a real perception risk, especially when vocals + era + franchise stack up — but the evidence in the catalog (a sound that changes every album + a recognizable songwriting identity) shows a lineage he chooses to use, not an identity borrowed wholesale. The open question: will RESONANCE prove he can extend MJ without being swallowed, or become the point where his identity is permanently overshadowed by MJ?',
  stayContext:
    'Normally, in both the Korean and Western markets, artists who outgrow their group or stay long enough that the creative room runs out tend to leave — Beyoncé left Destiny\'s Child, Harry Styles left One Direction, and in April 2026 Mark Lee himself left NCT 127 to focus on solo work. But James — someone whose dispute with SM was severe enough that he had to start his own company, who is Grammy- and MCU-level famous, and who has every business reason to cut ties — chose to stay with NCT 127 as an external artist. That is an anomaly that needs explaining.',
  stayReasons: [
    {
      lens: 'Psychology — an identity built before the fame',
      color: '#5a7aaa',
      body: 'GONUNMA was born from "going out to find an inner voice", while James is the membership that gives belonging — canon.md describes a workaholic who withdraws under pressure and recharges as an introvert. Having a group where his identity was forged from age 17 functions as a secure base that solo work (where everything rests on him alone) cannot provide. Staying isn\'t a career matter but an emotional anchor — he could leave the company because the company was a contract, but he couldn\'t leave the group because the group is people',
    },
    {
      lens: 'Growth — successfully separating "the company" from "the group"',
      color: '#c9a84c',
      body: 'What makes this case possible is that James distinguishes the institution (SM, the contract system) from the relationship (his bandmates) — the dispute was with the "company", not the "people". The 2023 settlement + returning as an external artist (not a contracted idol) shows he was mature enough to retain the relationship without accepting a structure that once disadvantaged him — a rare maturity: most people choose all-or-nothing',
    },
    {
      lens: 'Culture — 정 (jeong) and the debt of belonging',
      color: '#9b7fc8',
      body: 'In the Korean context, abandoning the group that shaped you is easily read as 배신 (betrayal). The concept of 정 — accumulated, unbreakable attachment — gives staying high social weight. For James, a Thai person in the K-pop system, honoring the group that took him in also secures legitimacy in the Korean market he still depends on. This differs from Mark (Korean-Canadian, with a more secure core-member status), for whom the cost of leaving was lower',
    },
    {
      lens: 'Strategy — the downside of cutting ties outweighs the upside',
      color: '#5a7c6a',
      body: 'Practically, staying has almost no cost: NCT 127 uses a system where members can run solo work in parallel. Keeping the membership = retaining the Korean fanbase + SM distribution channel + insurance if the solo/film cycle stalls. Mark\'s exit signals "closing a door" that James has no reason to close — he gets both freedom (JH Company) and a safety net (the group) at once. The 2024 return agreement made the arithmetic explicit: SM negotiated, not dictated, terms — full JH Company ownership retained, activity chosen by James, no renewed exclusive contract — because losing him a second time cost the company more than sharing control did.',
    },
  ],
  stayVerdict:
    'In short: James isn\'t "clinging" to NCT out of dependence — he reframed the relationship from an idol contract into a chosen affiliation. That Mark left while James stayed isn\'t because James is less brave, but because the equation is different: Mark cut ties to grow, James kept them because they are the anchor that lets him take risks in every other domain — a mirror of the thesis of the whole catalog: restraint and the choice to hold back are power, not weakness.',
  authorshipByEra: [
    { era: 'LIKE I DO', year: '2016', role: 'Topliner + co-writer', detail: 'Full SM production (Kenzie, Ryan S. Jhun, Yoo Young-jin, DEEZ, IMLAY…) — James wrote topline/lyrics and never claimed to produce' },
    { era: 'SOFTEST TOUCH', year: '2022', role: 'Co-write + co-production', detail: 'Still relying on the SM producer network, but creative control begins to rise' },
    { era: 'PULSE', year: '2023', role: 'Sole producer (first time)', detail: 'Produced & arranged the whole album alone — the point where the authorship claim is heaviest' },
    { era: 'ARE U STILL', year: '2024', role: 'Lead producer + collaborators', detail: 'Composed with Kyle Dion, Leven Kali · arranged with Sam Wills, Mack Keane' },
    { era: "CAN\'T LEAVE ALONE", year: '2025', role: 'Co-produce / co-write', detail: 'With Pino, JUNNY · track 1 with Pharrell Williams' },
  ],
  realismTests: [
    {
      q: 'Is the stylistic range too wide for one person to write?',
      finding: 'It spans bedroom R&B → synth-funk → neo-soul → Neptunes groove — but each era\'s credits carry a different set of co-writers/arrangers, not a one-man band. The breadth is explained by a collaborator network',
      status: 'holds',
    },
    {
      q: 'Are the bilingual (KR/EN) lyrics believable?',
      finding: 'SOUR weaves Korean lines (또 하나의 another trip · 모른 척하는 너 · 뭐가 됐든 너면 돼) into English R&B — this kind of code-switching is what K-R&B actually does, and matches the character\'s Korean-Thai-English background',
      status: 'holds',
    },
    {
      q: 'A lyric persona swinging from cocky ↔ fragile in one hand',
      finding: 'More a strength than a weakness — the confidence/vulnerability oscillation is the through-line binding every era, making a single voice believable across different registers',
      status: 'holds',
    },
    {
      q: 'A different reference vocalist per song = a different voice/idiom each time',
      finding: 'lyrics.md lists a different cover artist per track (Chikoruss, J.Tajor, Khalid, keshi, Kyle Dion, Pharrell…). In-story these are other artists covering James\'s songs — but the wildly different stylistic fingerprints are the seam that reveals the real source is many hands',
      status: 'seam',
    },
  ],
  productionRealism: [
    { aspect: 'Self-production arc', text: 'Climbing from topliner (SM era) → sole producer (PULSE) → lead producer + collaborators (ARE U STILL, CAN\'T LEAVE ALONE) is a trajectory real producer-artists follow (compare The-Dream, Frank Ocean), not a sudden leap to auteur' },
    { aspect: 'Production signature across genres', text: 'canon.md lists groove-centric + bass-driven + MJ drum philosophy + minimal layering + percussive vocal — this signature set is consistent enough to make synth-funk (PULSE) and neo-soul (ARE U STILL) sound like one person, even with a different instrument palette' },
    { aspect: 'Genre breadth in a short time', text: 'Producing Nu-disco → 90s R&B → Neptunes funk in 3 years is genuinely a heavy load (see the Pace Problem) — bringing in Pino/JUNNY/Sam Wills/Mack Keane to help arrange keeps the scope reasonable, not a one-man miracle' },
  ],
  authorshipVerdict:
    'Mostly it makes sense, because the doc never literally claims James wrote/produced everything — the credits show graduated authorship (topliner → co-producer → lead producer-with-collaborators) that matches a real producer-artist\'s career arc. The one clear seam is the reference-vocalist device: the wildly different voices and idioms per song reveal that the real material comes from many artists — but within the in-universe frame (others covering James\'s songs), that variety is reframed as evidence the songs are strong enough for others to reinterpret.',
  constructionPillars: [
    {
      title: 'Liminal space is the character\'s home',
      body: 'His songs are never at the milestone itself — no song shouts "I love you" or "we broke up" outright. Every song sits before or after the event, so the James character is automatically read as someone who "thinks more than he speaks" — the listener is the one filling in the blanks',
    },
    {
      title: 'Restraint is the one design principle running through every layer',
      body: 'Vocal: vibrato used only on notes that need emotional weight, dynamics kept mp–mf, not power-heavy · Dance: in-place precision, no traveling, silence used as a dramatic tool · Personality: measured, dry humor, withdraws first under pressure — every system of the character is set from the same principle: "hold it back, then release only where it counts"',
    },
    {
      title: 'Dual persona: James Hwang / GONUNMA',
      body: 'GONUNMA began as the songwriter-side alter ego in the SM era (2016) — a channel to give the inner voice a place inside an idol system that didn\'t allow it. Once independent (2023) the two personas gradually merge: the name on the credits is still GONUNMA but the public identity is James — this structure makes "growth" a tangible narrative within the discography itself',
    },
    {
      title: 'A two-pole balance that never breaks',
      body: 'Confident mode is never arrogant, vulnerable mode is never weak — the character is written to oscillate between the two poles with humanity as the anchor, so it can switch from HOW DOES IT FEEL? to SAVE ME without feeling inconsistent',
    },
    {
      title: 'Deliberately built-in imperfection',
      body: 'The character isn\'t perfect in his own catalog: SAVE ME is someone stuck on an ex, PURPOSE is someone returning to a toxic relationship every night — not hero moments, but that\'s the mechanism that makes the listener feel they are "really hearing this from someone". Down to ordinary details like dirty Adidas, grocery lines, a tattoo on your back',
    },
    {
      title: 'A growth arc you can actually hear',
      body: 'Idol-system songwriter (hiding his voice inside SM) → independent producer-artist (controlling everything from melody to arrangement) → Grammy-winning artist hailed as "just R&B", not "K-R&B" — each album is evidence of a phase, not just a collection of good songs',
    },
    {
      title: 'Friction left in on purpose',
      body: 'The character isn\'t written as hagiography — real tension is left hanging: a Western reception still stuck on qualifiers, old fans who feel abandoned when the sound changes, an output pace so fast the catalog never gets to breathe. The open question: if he slowed down — where would the ceiling be?',
    },
  ],
  entryPoints: [
    { mood: 'smooth, groovy R&B', songs: 'LIKE I DO · CRUSH · TEARS ON A PRETTY FACE' },
    { mood: 'feel-good songs, nothing heavy', songs: "HOW DOES IT FEEL? · CAN\'T LEAVE ALONE · BESTFRIEND" },
    { mood: 'beautiful sad songs', songs: 'IF I KNEW · OVERSIZED JACKET · SOMEWHERE SOMEHOW' },
    { mood: 'songs that make you feel seen', songs: 'PURPOSE · SAVE ME · AWKWARD MAYBE' },
    { mood: 'starting from the very best', songs: 'SAY · SOFTEST TOUCH · SELFISH' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ดนตรี',
    title: 'ศิลปะและการวิเคราะห์',
    subtitle:
      'สถาปัตยกรรมของการกลั้นไว้ — ศิลปินที่ใช้เวลาสิบปีพิสูจน์ว่าการกลั้นคือพลัง ไม่ใช่ความอ่อนแอ',
    liminalHeading: 'ลายเซ็นการเขียนเพลง — ช่วงคาบเกี่ยว',
    liminalIntro:
      'สิ่งที่ทำให้ James Hwang ต่างจากศิลปิน R&B รุ่นเดียวกันคือ <strong style="color:var(--text)">เขาไม่เคยบอกทุกอย่างจบในเพลงเดียว</strong> เพลงของเขาอยู่ตรงช่วงก่อนหรือหลังเหตุการณ์ ไม่ใช่ตัวเหตุการณ์ ไม่มีเพลงไหนตะโกนว่า "ฉันรักเธอ" หรือ "เราเลิกกันแล้ว" ตรงๆ ทุกอย่างค้างอยู่ในช่วงคาบเกี่ยวของความรู้สึก',
    tensionHeading: 'แรงตึงของธีม — ความมั่นใจปะทะความเปราะบาง',
    evolutionHeading: 'พัฒนาการด้านโปรดักชัน',
    motifsHeading: 'ภาพซ้ำในเนื้อเพลงที่วนข้ามยุค',
    criticHeading: 'บทประเมินจากนักวิจารณ์',
    counterpointsHeading: 'เสียงค้าน',
    counterpointsIntro: 'ข้อวิจารณ์ที่ยังค้างอยู่จริงรอบตัว James — ไม่ใช่ทุกคนที่ซื้อเขาหมด',
    realismHeading: 'เนื้อเพลง เครดิต และโปรดักชัน — เช็กความสมจริง',
    realismIntro:
      'ในโลกจริง เพลงชุดนี้มาจากศิลปินหลากหลายมาก (ดู reference vocalist ใต้แต่ละเพลงในหน้าผลงานเพลง) แต่ในเรื่องนี้ส่วนใหญ่ระบุว่า <strong style="color:var(--text)">GONUNMA แต่งและโปรดิวซ์เอง</strong> คำถามคือภาษาในเนื้อเพลงและการอ้างเครดิตโปรดักชัน <strong style="color:var(--text)">สมจริงแค่ไหน</strong>',
    authorshipSubhead: 'ความจริงเรื่องเครดิต — ความเป็นเจ้าของแบบไล่ระดับ',
    stressTestsSubhead: 'ข้อทดสอบ',
    productionSubhead: 'เครื่องดนตรีและโปรดักชัน',
    mjHeading: 'คำถามเรื่อง Michael Jackson',
    mjIntro:
      'James อ้างอิง Michael Jackson หนักมาก ทั้งในเสียงร้อง โปรดักชัน ในยุคอัลบั้มหนึ่ง (ARE U STILL) และในแฟรนไชส์หนัง (RESONANCE ที่ต่อยอด Captain EO ของ MJ) คำถามที่เลี่ยงไม่ได้คือ <strong style="color:var(--text)">เกาะ MJ แน่นเกินไปจนกลบตัวเองหรือเปล่า</strong>',
    stayHeading: 'ทำไมเขาไม่ออกจาก NCT 127',
    constructionHeading: 'ตัวละครนี้ถูกสร้างขึ้นมาอย่างไร',
    constructionIntro:
      'อ่าน catalog ทั้งก้อนรวมกัน — เสียงร้อง ภาษาการเต้น บุคลิก และเส้นเรื่องของผลงาน — จะเห็นว่า James Hwang ถูกสร้างจากหลักเดียวที่ไหลผ่านทุกชั้น: <strong style="color:var(--text)">การกลั้นไว้</strong>',
    entryHeading: 'เริ่มฟังจากไหนดี',
    entryPrefix: 'ถ้าชอบ',
    verdictLabel: 'สรุป —',
    holds: 'ผ่าน',
    seam: 'รอยต่อ',
  },
  liminalExamples: [
    { song: 'LIKE I DO', state: 'ยังไม่ได้บอก', detail: 'แค่บอกว่า "ไม่มีใครรักได้เหมือนฉัน"' },
    { song: 'EVERLASTING', state: 'กำลังจะสารภาพ', detail: 'แต่ยังไม่ได้พูด' },
    { song: 'SAY', state: 'รอ', detail: 'รอให้อีกฝ่ายพูดก่อน' },
    { song: 'IF I KNEW', state: 'หลังสูญเสีย', detail: 'หลังจากปล่อยเธอไปแล้ว' },
    { song: 'PURPOSE', state: 'ติดกับ', detail: 'อยู่ในวงจรแต่รู้ว่ามันผิด แต่ยังออกไม่ได้' },
    { song: 'LOVE THIS PAIN AWAY', state: 'วางไม่ลง', detail: 'รู้ว่าจบแล้ว แต่ยังวางไม่ได้' },
  ],
  modes: [
    {
      label: 'Confident mode',
      color: '#c9a84c',
      songs: ['HOW DOES IT FEEL?', 'CRUSH', "HE'S NOT ME", 'BESTFRIEND'],
      desc: 'เพลงที่เขาเป็นคนรุก มั่นใจ รู้ว่าตัวเองต้องการอะไร แต่ไม่เคยฟังดูอวดตัว',
    },
    {
      label: 'Vulnerable mode',
      color: '#5a7aaa',
      songs: ['SAVE ME', 'IF I KNEW', 'CAN YOU LOVE ME TONIGHT?', 'LOVE THIS PAIN AWAY'],
      desc: 'เพลงที่เขาขอ รอ หวัง แต่ไม่เคยฟังดูอ่อนแอ ทั้งสองขั้วยังเป็นคนเสมอ',
    },
  ],
  evolution: [
    { era: 'LIKE I DO', year: '2016', sound: 'Atmospheric R&B · minimal arrangement', meaning: 'เสียงของคนที่ยังหาตัวเองอยู่ ใต้ข้อจำกัดของระบบไอดอล' },
    { era: 'SOFTEST TOUCH', year: '2022', sound: 'Synth funk + indie soul', meaning: 'มั่นใจขึ้น แต่ยังเก็บความใกล้ชิดแบบอัดในห้องนอนไว้' },
    { era: 'PULSE', year: '2023', sound: 'Self-produced ครบทุกเพลงครั้งแรก · groove-first design', meaning: 'falsetto hook กลายเป็นลายเซ็น ทุกเพลงถูกสร้างมาเพื่อเวทีสด' },
    { era: 'ARE U STILL', year: '2024', sound: 'Live-influenced groove · analog texture', meaning: 'ทิ้งความเป๊ะของ PULSE ไปหาจังหวะที่มีมนุษย์อยู่ในนั้น อ้างอิงยุค MJ/Prince อย่างตั้งใจ' },
    { era: "CAN\'T LEAVE ALONE", year: '2025', sound: 'Contemporary R&B core', meaning: 'ความนิ่งของคนที่ผ่านยุค Grammy มาแล้ว ฟังง่ายแต่ไม่ตื้น' },
  ],
  motifs: [
    { motif: 'รอให้อีกฝ่ายตัดสินใจก่อน', songs: 'SAY · EVERLASTING · CAN YOU LOVE ME TONIGHT?' },
    { motif: 'รู้ว่าผิดแต่ยังอยู่', songs: 'PURPOSE · SAVE ME · LOVE THIS PAIN AWAY' },
    { motif: 'เธอมีคนอื่น แต่ฉันก็ยังอยู่', songs: 'SOFTEST TOUCH · TALK TO ME · SOMETHING REAL' },
    { motif: 'ความธรรมดาคือความพิเศษ', songs: "YOU AIN'T GOTTA · OVERSIZED JACKET · IDK WHAT YOU DO" },
    { motif: 'เวลาหลังเที่ยงคืน', songs: 'NO RESERVATIONS · AT THE END OF THE NIGHT · JUST A DREAM' },
  ],
  ratings: [
    { era: 'LIKE I DO', stars: '★★★½', epithet: 'เมล็ดที่หย่อนผิดฤดู', note: 'สุกเกินกว่าโปรเจกต์ไอดอลของ SM ยุคนั้น แต่ระบบยังไม่พร้อม คนกลับมาขุดเจอทีหลังในฐานะพิมพ์เขียนตั้งต้น' },
    { era: 'SOFTEST TOUCH', stars: '★★★★', epithet: 'ใบอนุญาตที่เขาเขียนให้ตัวเอง', note: 'พิสูจน์ว่าเป็นคนแต่งเพลงที่มีเสียงของตัวเอง OVERSIZED JACKET กับ NO RESERVATIONS ลงรายละเอียดอารมณ์ในระดับที่ระบบ K-pop ไม่ค่อยยอมให้ทำ' },
    { era: 'PULSE', stars: '★★★★½', epithet: 'อัลบั้มประกาศตัว', note: 'อัลบั้มที่เป็นเนื้อเดียวที่สุดในผลงานทั้งหมด ทุกการตัดสินใจมีเหตุผลรองรับ TALK TO ME คือจุดที่ dark alt-R&B ทำงานได้ดีที่สุด' },
    { era: 'ARE U STILL', stars: '★★★★★', epithet: 'จุดสูงสุด', note: 'SELFISH คือหมัดเด็ดของการเรียงเพลง Grammy สาขา Best Progressive R&B ไม่เกินตัว ถ้า PULSE คือการประกาศตัว อัลบั้มนี้คือการพิสูจน์ว่าไม่ได้ฟลุก' },
    { era: "CAN\'T LEAVE ALONE", stars: '★★★★', epithet: 'การถอยอย่างมีชั้นเชิง', note: 'ตั้งใจผ่อนหลังขึ้นถึงจุดสูงสุด เพลงที่ทำกับ Pharrell คือของดี แต่ฝั่ง HONEY ปล่อยจังหวะหลุดมือช่วงท้าย' },
  ],
  perspectives: [
    {
      title: '"เก่งนะ แต่..." — มุมมองฝ่ายที่ไม่ค่อยซื้อ',
      color: '#a05070',
      points: [
        'เขาได้การยอมรับจากนักวิจารณ์มากกว่าได้เป็นเจ้าของพื้นที่จริง คำชมจากฝั่งอเมริกามักพ่วงเงื่อนไข: "สำหรับศิลปินเอเชีย" หรือ "สุกเกินคาดสำหรับ K-pop"',
        '"ดีในแบบ R&B ที่ไม่ท้าทายใคร" เป็นคำชมที่แฝงการดูถูก ถ้าศิลปินผิวดำทำเพลงเดียวกัน คนคงเรียกว่า "ลื่นไหลอย่างไม่ต้องออกแรง" ไม่ใช่ "ฟังง่าย"',
        'NME พูดตรงที่สุดว่านี่คือจุดที่ K-R&B เลิกเป็นแค่คำขยายแนวเพลงและกลายเป็น R&B เต็มตัว แต่ตลาดกระแสหลักฝั่งตะวันตกยังแบ่ง R&B ด้วยพาสปอร์ตมากกว่าฝีมือ',
      ],
    },
    {
      title: '"เลือกทางเดียวเถอะ" — แฟนเก่าที่อยากให้อยู่กับซาวด์เดิมนานกว่านี้',
      color: '#9b7fc8',
      points: [
        'ซาวด์เปลี่ยนแทบทุกอัลบั้ม คนที่ตกหลุมรักซาวด์ไหนจะหลงทางในอัลบั้มถัดไปทุกครั้ง',
        'ฝ่ายแก้ต่างบอกว่า Prince, D\'Angelo, Frank Ocean ก็ไม่เคยทำอัลบั้มเดิมสองรอบ การเปลี่ยนคือการโต',
        'แต่คนพวกนั้นรอดเพราะมีเสียงที่จำได้ทันที falsetto ของ James เด่นจริง แต่ในตลาดตะวันตกยังไม่ถึงขั้นที่ชื่อเขาการันตีแนวเพลงได้เอง',
      ],
    },
    {
      title: '"ช้าลงหน่อย" — ปัญหาเรื่องความถี่ของงาน',
      color: '#5a7c6a',
      points: [
        'สี่โปรเจกต์ในสี่ปี (2022–2026) บวกทัวร์โลกหลายขา และกิจกรรม NCT 127 ที่ทับกัน หนักมากสำหรับคนที่กุมการตัดสินใจทุกอย่างไว้เองคนเดียว',
        "CAN\'T LEAVE ALONE ฟังเหมือนยังไม่สุกบางจุด และโปรโมตน้อยเพราะตารางชนกัน ไม่ใช่เพราะเพลงไม่ดี",
        'DECADE (2026) ออกเร็วเกินไปสำหรับอัลบั้มรวมฉลองสิบปี ฟังดูเหมือนการตัดสินใจเชิงการค้า ต่างจาก Frank Ocean ที่ปล่อยให้เวลาสี่ปีสะสมความคาดหวังจนกลายเป็นน้ำหนักของงาน',
      ],
    },
  ],
  mjTouchpoints: [
    { layer: 'เสียงร้องและโปรดักชัน', detail: 'เอกสาร canon ระบุ MJ เป็นต้นแบบอันดับแรกทั้งด้านเสียงร้อง (การวางจังหวะคำ การเน้นเสียง การคุมลมหายใจ) และโปรดักชัน (groove งานที่ให้เสียงร้องนำ) ส่วนแนวคิดเรื่องกลองก็เขียนตรงๆ ว่าออกแบบจังหวะโดยได้แรงจาก MJ' },
    { layer: 'ARE U STILL (2024)', detail: 'ทั้งยุคหันไปหาสาย neo-soul / funk / disco ที่อ้างอิงยุค MJ กับ Prince อย่างตั้งใจ TEARS ON A PRETTY FACE ถูกอธิบายว่าเป็น groove ยุค Bad บวกการจัดเวทีแบบ The Way You Make Me Feel' },
    { layer: 'แฟรนไชส์ RESONANCE', detail: 'Captain EO: RESONANCE ต่อยอดตรงจาก Captain EO (1986) ของ Michael Jackson และ MJ Estate ถือสิทธิ์เพลงกับภาพลักษณ์ร่วมใน IP นี้ เท่ากับผูกตัวเองกับมรดกของ MJ ในระดับแฟรนไชส์ ไม่ใช่แค่ระดับแรงบันดาลใจ' },
  ],
  mjDebate: [
    {
      side: 'ข้อกังวล — "เกาะ MJ แน่นเกินไป"',
      color: '#c06080',
      points: [
        'เมื่อการอ้างอิงโผล่พร้อมกันทั้งในเสียงร้อง โปรดักชัน ยุคอัลบั้ม และแฟรนไชส์หนัง มันเริ่มแยกยากว่าอะไรคือ James อะไรคือการคารวะ MJ คนที่ฟังผ่านๆ อาจอ่านเป็นวงคัฟเวอร์เชิดชูมากกว่าเสียงของตัวเอง',
        'การสร้างแฟรนไชส์บน Captain EO ทำให้มรดกของ MJ กลายเป็นเสาค้ำมูลค่าบริษัท ถ้าเรื่องด่างพร้อยของ MJ กลับมาเป็นกระแสลบ JH Company รับแรงกระเทือนตรงๆ',
        'นักวิจารณ์ฝ่ายที่ไม่ค่อยซื้อใช้จุดนี้ตอกว่าเขายังไม่ได้ยืนด้วยชื่อตัวเองเต็มตัวในตลาดตะวันตก แต่ยังพิงไหล่ตำนานที่ตลาดนั้นเป็นเจ้าของอยู่แล้ว',
      ],
    },
    {
      side: 'ข้อแก้ต่าง — สืบสาย ไม่ใช่ลอก',
      color: '#5a7c6a',
      points: [
        'MJ เป็นต้นแบบร่วมของคนทำ R&B กับ funk แทบทุกคน ทั้ง Bruno Mars, The Weeknd, Usher การประกาศว่าสืบสายมาจากใครไม่เหมือนการลอก และ James ก็ใส่การเขียนเพลงแบบช่วงคาบเกี่ยวกับ falsetto ของตัวเองทับ groove ที่ยืมมา',
        'ARE U STILL เป็นยุคเดียวที่ชู MJ ขึ้นหน้า ส่วน PULSE เดินสาย synth-funk ที่เป๊ะกริบ และ CAN\'T LEAVE ALONE เอียงไปทาง Neptunes ถ้าเกาะ MJ จริงคงไม่เปลี่ยนซาวด์ทุกอัลบั้ม',
        'RESONANCE เป็นจักรวาลไซไฟใหม่ที่ James ร่วมสร้าง ไม่ใช่หนังชีวประวัติหรืองานคัฟเวอร์ เขาใช้ Captain EO เป็นจุดตั้งต้นแล้วสร้างตำนานของตัวเองต่อ ใกล้กับการต่อยอดมรดกมากกว่าการพึ่งพา',
      ],
    },
  ],
  mjVerdict:
    'จุดสมดุลคือ การพึ่ง MJ เป็นความเสี่ยงเรื่องภาพลักษณ์จริง ยิ่งเมื่อเสียงร้อง ยุคอัลบั้ม และแฟรนไชส์วางซ้อนกัน แต่หลักฐานในผลงาน — ซาวด์ที่เปลี่ยนทุกอัลบั้มบวกลายมือการเขียนเพลงที่จำได้ — ชี้ว่านี่คือสายที่เขาเลือกใช้ ไม่ใช่ตัวตนที่ยืมมาทั้งก้อน คำถามที่ยังไม่มีคำตอบคือ RESONANCE จะพิสูจน์ว่าเขาต่อยอด MJ ได้โดยไม่ถูกกลืน หรือจะเป็นจุดที่ตัวตนของเขาถูก MJ กลบไปตลอด',
  stayContext:
    'ตามปกติ ทั้งตลาดเกาหลีและตะวันตก ศิลปินที่ดังเกินวงหรืออยู่นานจนอึดอัดมักออก Beyoncé ออกจาก Destiny\'s Child, Harry Styles ออกจาก One Direction และเมษายน 2026 Mark Lee ก็ออกจาก NCT 127 ไปทำงานเดี่ยว แต่ James ที่มีข้อพิพาทกับ SM หนักถึงขั้นต้องตั้งค่ายเอง ดังถึงระดับ Grammy กับ MCU และมีเหตุผลทางธุรกิจทุกข้อที่จะตัดขาด กลับเลือกอยู่กับ NCT 127 ต่อในฐานะ external artist นี่คือข้อยกเว้นที่ต้องอธิบาย',
  stayReasons: [
    {
      lens: 'จิตวิทยา — ตัวตนที่ก่อขึ้นก่อนชื่อเสียง',
      color: '#5a7aaa',
      body: 'GONUNMA เกิดจากการออกไปหาเสียงข้างในตัวเอง ขณะที่การเป็นสมาชิกวงให้ความรู้สึกว่ามีที่ยืน เอกสาร canon ระบุว่าเขาเป็นคนเสพติดงาน ถอยเมื่อโดนกดดัน และชาร์จพลังแบบคนเก็บตัว การมีกลุ่มที่หล่อหลอมตัวตนเขามาตั้งแต่อายุ 17 จึงเป็นฐานที่มั่นคงซึ่งงานเดี่ยว — ที่ทุกอย่างพึ่งเขาคนเดียว — ให้ไม่ได้ การอยู่ต่อไม่ใช่เรื่องอาชีพ แต่เป็นหลักยึดทางใจ เขาออกจากค่ายได้เพราะค่ายคือสัญญา แต่ออกจากวงไม่ได้เพราะวงคือคน',
    },
    {
      lens: 'การเติบโต — แยก "ค่าย" ออกจาก "วง" ได้',
      color: '#c9a84c',
      body: 'สิ่งที่ทำให้กรณีนี้เป็นไปได้คือ James แยกองค์กร (SM และระบบสัญญา) ออกจากความสัมพันธ์ (เพื่อนร่วมวง) ได้ ข้อพิพาทของเขาคือกับค่าย ไม่ใช่กับคน settlement ปี 2023 บวกการกลับมาในฐานะ external artist ไม่ใช่ไอดอลใต้สัญญา แสดงว่าเขาโตพอจะเก็บความสัมพันธ์ไว้โดยไม่ต้องยอมโครงสร้างที่เคยเสียเปรียบ ซึ่งหาได้ยาก เพราะคนส่วนใหญ่เลือกแบบเอาหมดหรือไม่เอาเลย',
    },
    {
      lens: 'วัฒนธรรม — 정 (jeong) และหนี้บุญคุณของการเป็นพวกเดียวกัน',
      color: '#9b7fc8',
      body: 'ในเกาหลี การทิ้งกลุ่มที่ปั้นเรามาถูกอ่านเป็น 배신 หรือการทรยศได้ง่าย แนวคิด 정 คือความผูกพันที่สะสมจนตัดไม่ขาด ทำให้การอยู่ต่อมีน้ำหนักทางสังคมสูง สำหรับ James ที่เป็นคนไทยในระบบ K-pop การให้เกียรติวงที่รับเขาเข้ามายังช่วยรักษาที่ยืนในตลาดเกาหลีที่เขายังต้องพึ่ง ต่างจาก Mark ที่เป็นเกาหลี-แคนาดาและมีสถานะสมาชิกหลักมั่นคงกว่า ต้นทุนการออกของเขาจึงต่ำกว่า',
    },
    {
      lens: 'กลยุทธ์ — ตัดขาดแล้วเสียมากกว่าได้',
      color: '#5a7c6a',
      body: 'ในทางปฏิบัติ การอยู่ต่อแทบไม่มีต้นทุน NCT 127 ใช้ระบบที่สมาชิกทำงานเดี่ยวคู่ขนานได้ การคงสถานะสมาชิกจึงเท่ากับรักษาฐานแฟนเกาหลี ช่องทางจัดจำหน่ายของ SM และกันชนไว้เผื่องานเดี่ยวหรืองานหนังสะดุด ขณะที่การออกแบบ Mark คือการปิดประตู ซึ่ง James ไม่มีเหตุผลต้องปิด เขาได้ทั้งอิสระจาก JH Company และตาข่ายรองรับจากวงไปพร้อมกัน ข้อตกลงกลับวงปี 2024 ทำให้สมการนี้เป็นรูปธรรม — SM มาเจรจา ไม่ใช่มาสั่ง เงื่อนไขคือ James ถือ JH Company ไว้เต็มร้อย เลือกงานเอง ไม่ต้องเซ็นสัญญาผูกขาดใหม่ เพราะการเสียเขาไปอีกครั้งแพงกว่าการยอมแบ่งอำนาจควบคุม',
    },
  ],
  stayVerdict:
    'สรุปคือ James ไม่ได้ยึดติดกับ NCT แบบพึ่งพา เขาเปลี่ยนกรอบความสัมพันธ์จากสัญญาไอดอลให้กลายเป็นการเลือกอยู่ด้วยกันเอง การที่ Mark ออกแต่ James อยู่ ไม่ใช่เพราะ James กล้าน้อยกว่า แต่เพราะสมการต่างกัน Mark ตัดเพื่อโต ส่วน James เก็บไว้เพราะมันเป็นหลักยึดที่ทำให้เขากล้าเสี่ยงในเรื่องอื่นทุกเรื่อง ซึ่งก็เป็นสิ่งเดียวกับใจความของผลงานทั้งหมด: การกลั้นไว้และการเลือกไม่ตัดทิ้ง คือพลัง ไม่ใช่ความอ่อนแอ',
  authorshipByEra: [
    { era: 'LIKE I DO', year: '2016', role: 'Topliner + co-writer', detail: 'โปรดิวเซอร์ของ SM คุมเต็มตัว (Kenzie, Ryan S. Jhun, Yoo Young-jin, DEEZ, IMLAY…) James เขียน topline กับเนื้อร้อง ไม่ได้อ้างว่าโปรดิวซ์เอง' },
    { era: 'SOFTEST TOUCH', year: '2022', role: 'Co-write + co-production', detail: 'ยังพึ่งเครือข่ายโปรดิวเซอร์ของ SM แต่เริ่มมีอำนาจตัดสินใจมากขึ้น' },
    { era: 'PULSE', year: '2023', role: 'Sole producer (ครั้งแรก)', detail: 'โปรดิวซ์และเรียบเรียงทั้งอัลบั้มคนเดียว เป็นจุดที่อ้างความเป็นเจ้าของหนักที่สุด' },
    { era: 'ARE U STILL', year: '2024', role: 'Lead producer + collaborators', detail: 'แต่งร่วมกับ Kyle Dion, Leven Kali · เรียบเรียงร่วมกับ Sam Wills, Mack Keane' },
    { era: "CAN\'T LEAVE ALONE", year: '2025', role: 'Co-produce / co-write', detail: 'ทำร่วมกับ Pino และ JUNNY · เพลงแรกทำร่วมกับ Pharrell Williams' },
  ],
  realismTests: [
    {
      q: 'สไตล์กว้างเกินกว่าที่คนเดียวจะเขียนหมดหรือเปล่า',
      finding: 'กินตั้งแต่ bedroom R&B ไป synth-funk ไป neo-soul ไปจนถึง groove สาย Neptunes แต่เครดิตแต่ละยุคมีคนแต่งร่วมและคนเรียบเรียงคนละชุด ไม่ใช่ทำคนเดียวทั้งหมด ความกว้างจึงอธิบายได้ด้วยเครือข่ายคนร่วมงาน',
      status: 'holds',
    },
    {
      q: 'เนื้อสองภาษา เกาหลีสลับอังกฤษ สมจริงไหม',
      finding: 'SOUR แทรกท่อนเกาหลี (또 하나의 another trip · 모른 척하는 너 · 뭐가 됐든 너면 돼) เข้ากับ R&B ภาษาอังกฤษ การสลับภาษาแบบนี้คือสิ่งที่ K-R&B ทำจริง และตรงกับพื้นเพเกาหลี-ไทย-อังกฤษของตัวละคร',
      status: 'holds',
    },
    {
      q: 'ตัวตนในเนื้อเพลงเหวี่ยงจากหยิ่งไปเปราะบางในมือคนเดียว',
      finding: 'นี่เป็นจุดแข็งมากกว่าจุดอ่อน การแกว่งระหว่างความมั่นใจกับความเปราะบางคือเส้นที่ร้อยทุกยุคเข้าด้วยกัน ทำให้เชื่อได้ว่าเป็นเสียงคนเดียวแม้จะพูดคนละโทน',
      status: 'holds',
    },
    {
      q: 'reference vocalist เปลี่ยนคนทุกเพลง เท่ากับเสียงและสำนวนคนละแบบ',
      finding: 'ไฟล์เนื้อเพลงระบุคนคัฟเวอร์ต่างกันทุกแทร็ก (Chikoruss, J.Tajor, Khalid, keshi, Kyle Dion, Pharrell…) ในกรอบเรื่องคือศิลปินอื่นมาคัฟเวอร์เพลงของเจมส์ แต่ลายมือที่ต่างกันสุดขั้วคือรอยต่อที่เผยว่าของจริงมาจากหลายมือ',
      status: 'seam',
    },
  ],
  productionRealism: [
    { aspect: 'เส้นทางสู่การโปรดิวซ์เอง', text: 'ไต่จาก topliner ในยุค SM ไปเป็นคนโปรดิวซ์คนเดียวใน PULSE แล้วมาเป็นโปรดิวเซอร์หลักที่มีคนช่วยใน ARE U STILL และ CAN\'T LEAVE ALONE เป็นเส้นทางที่คนทำเพลงจริงเดินกัน (เทียบกับ The-Dream หรือ Frank Ocean) ไม่ใช่กระโดดมาเป็นผู้กำกับงานทั้งหมดในวันเดียว' },
    { aspect: 'ลายเซ็นโปรดักชันที่ข้ามแนวได้', text: 'เอกสาร canon ระบุว่างานของเขาเน้น groove ขับด้วยเบส ใช้แนวคิดกลองแบบ MJ ซ้อนชั้นน้อย และใช้เสียงร้องเป็นเครื่องเคาะ ลายเซ็นชุดนี้คงเส้นคงวาพอจะทำให้ synth-funk ใน PULSE กับ neo-soul ใน ARE U STILL ฟังออกว่าเป็นคนเดียวกัน แม้เครื่องดนตรีคนละชุด' },
    { aspect: 'ทำหลายแนวในเวลาสั้น', text: 'การโปรดิวซ์ตั้งแต่ nu-disco ไป R&B ยุค 90s ไปจนถึง funk สาย Neptunes ในสามปีเป็นภาระหนักจริง (ดูหัวข้อเรื่องความถี่ของงาน) การดึง Pino, JUNNY, Sam Wills และ Mack Keane มาช่วยเรียบเรียงทำให้ขอบเขตงานสมเหตุสมผล ไม่ใช่ปาฏิหาริย์ของคนคนเดียว' },
  ],
  authorshipVerdict:
    'ส่วนใหญ่ฟังขึ้น เพราะเอกสารไม่เคยอ้างตรงๆ ว่า James เขียนและโปรดิวซ์เองทั้งหมด เครดิตแสดงความเป็นเจ้าของแบบไล่ระดับ จาก topliner ไปเป็นคนโปรดิวซ์ร่วม ไปเป็นโปรดิวเซอร์หลักที่มีคนช่วย ซึ่งตรงกับเส้นทางของคนทำเพลงจริง รอยต่อเดียวที่เห็นชัดคือกลไก reference vocalist เสียงและสำนวนที่ต่างกันสุดขั้วทุกเพลงเผยว่าของจริงมาจากศิลปินหลายคน แต่ในกรอบของเรื่อง ที่บอกว่าคนอื่นมาคัฟเวอร์เพลงของเจมส์ ความหลากหลายนั้นถูกพลิกเป็นหลักฐานว่าเพลงแข็งพอให้คนอื่นหยิบไปตีความใหม่ได้',
  constructionPillars: [
    {
      title: 'ช่วงคาบเกี่ยวคือบ้านของตัวละคร',
      body: 'เพลงของเขาไม่เคยอยู่ที่ตัวเหตุการณ์ ไม่มีเพลงไหนตะโกนว่า "ฉันรักเธอ" หรือ "เราเลิกกันแล้ว" ตรงๆ ทุกเพลงอยู่ช่วงก่อนหรือหลัง ตัวละคร James จึงถูกอ่านเป็นคนที่คิดมากกว่าพูดโดยอัตโนมัติ และคนฟังเป็นฝ่ายเติมช่องว่างเอง',
    },
    {
      title: 'การกลั้นไว้คือหลักออกแบบเดียวที่ไหลผ่านทุกชั้น',
      body: 'เสียงร้อง: ใช้ vibrato เฉพาะโน้ตที่ต้องการน้ำหนักทางอารมณ์ ความดังอยู่ช่วง mp–mf ไม่อัดพลัง · การเต้น: เป๊ะอยู่กับที่ ไม่เคลื่อนไปไหน ใช้ความนิ่งเป็นเครื่องมือสร้างดราม่า · บุคลิก: นิ่ง อารมณ์ขันแบบแห้งๆ ถอยก่อนเมื่อโดนกดดัน ทุกส่วนของตัวละครถูกตั้งจากหลักเดียวกัน คือกลั้นไว้ แล้วปล่อยเฉพาะจุด',
    },
    {
      title: 'สองตัวตน: James Hwang กับ GONUNMA',
      body: 'GONUNMA เริ่มจากเป็นตัวตนอีกด้านในฐานะคนแต่งเพลงยุค SM ปี 2016 เป็นช่องให้เสียงข้างในมีที่อยู่ในระบบไอดอลที่ไม่เปิดให้ พอเป็นอิสระในปี 2023 สองตัวตนก็ค่อยๆ รวมกัน ชื่อบนเครดิตยังเป็น GONUNMA แต่ตัวตนที่คนเห็นคือ James โครงนี้ทำให้การเติบโตเป็นเรื่องที่จับต้องได้ในผลงานเอง',
    },
    {
      title: 'สมดุลสองขั้วที่ไม่หัก',
      body: 'ด้านมั่นใจไม่เคยอวดตัว ด้านเปราะบางไม่เคยอ่อนแอ ตัวละครถูกเขียนให้แกว่งระหว่างสองขั้วโดยมีความเป็นคนเป็นตัวยึด จึงสลับจาก HOW DOES IT FEEL? ไป SAVE ME ได้โดยไม่รู้สึกว่าเป็นคนละคน',
    },
    {
      title: 'ความไม่สมบูรณ์ที่ตั้งใจใส่',
      body: 'ตัวละครไม่ได้สมบูรณ์แบบในผลงานของตัวเอง SAVE ME คือคนที่ยังติดอยู่กับแฟนเก่า PURPOSE คือคนที่กลับไปหาความสัมพันธ์ที่ทำร้ายตัวเองทุกคืน ไม่ใช่ช่วงเวลาของพระเอก แต่นั่นคือกลไกที่ทำให้คนฟังรู้สึกว่าได้ยินเรื่องนี้จากคนจริงๆ รวมถึงรายละเอียดธรรมดาอย่างรองเท้า Adidas เปื้อนๆ แถวจ่ายเงินในซูเปอร์ หรือรอยสักบนหลัง',
    },
    {
      title: 'เส้นการเติบโตที่ฟังออกจริง',
      body: 'จากคนแต่งเพลงในระบบไอดอลที่ต้องซ่อนเสียงตัวเองไว้ใน SM มาเป็นศิลปินอิสระที่คุมทุกอย่างตั้งแต่ทำนองถึงการเรียบเรียง จนมาเป็นเจ้าของ Grammy ที่คนเรียกงานเขาว่า R&B เฉยๆ ไม่ต้องพ่วงคำว่า K-R&B แต่ละอัลบั้มคือหลักฐานของช่วงหนึ่ง ไม่ใช่แค่กองเพลงดีมารวมกัน',
    },
    {
      title: 'รอยขัดที่ตั้งใจปล่อยทิ้งไว้',
      body: 'ตัวละครไม่ได้ถูกเขียนเป็นบทสรรเสริญ ยังมีเรื่องค้างอยู่จริง: การตอบรับจากฝั่งตะวันตกที่ยังพ่วงเงื่อนไข แฟนเก่าที่รู้สึกถูกทิ้งเวลาซาวด์เปลี่ยน และความถี่ของงานที่เร็วจนผลงานไม่ได้หายใจ คำถามที่เปิดทิ้งไว้คือ ถ้าเขาช้าลง เพดานจะอยู่ที่ไหน',
    },
  ],
  entryPoints: [
    { mood: 'R&B smooth โยกๆ', songs: 'LIKE I DO · CRUSH · TEARS ON A PRETTY FACE' },
    { mood: 'เพลงฟีลดีๆ ไม่ต้องคิดมาก', songs: "HOW DOES IT FEEL? · CAN\'T LEAVE ALONE · BESTFRIEND" },
    { mood: 'เพลงเศร้าสวยๆ', songs: 'IF I KNEW · OVERSIZED JACKET · SOMEWHERE SOMEHOW' },
    { mood: 'เพลงที่ฟังแล้วรู้สึก seen', songs: 'PURPOSE · SAVE ME · AWKWARD MAYBE' },
    { mood: 'เริ่มจากจุดที่ดีที่สุด', songs: 'SAY · SOFTEST TOUCH · SELFISH' },
  ],
};

export const artistry = { en, th };
export function getArtistry(lang: Lang) {
  return artistry[lang];
}
