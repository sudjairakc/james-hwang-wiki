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
    'Normally, in both the Korean and Western markets, artists who outgrow their group or stay long enough that the creative room runs out tend to leave — Beyoncé left Destiny\'s Child, Harry Styles left One Direction, and in 2026 Mark Lee himself left NCT 127 to focus on solo work. But James — someone whose dispute with SM was severe enough that he had to start his own company, who is Grammy- and MCU-level famous, and who has every business reason to cut ties — chose to stay with NCT 127 as an external artist. That is an anomaly that needs explaining.',
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
      body: 'Practically, staying has almost no cost: NCT 127 uses a system where members can run solo work in parallel. Keeping the membership = retaining the Korean fanbase + SM distribution channel + insurance if the solo/film cycle stalls. Mark\'s exit signals "closing a door" that James has no reason to close — he gets both freedom (JH Company) and a safety net (the group) at once. The 2026 return agreement made the arithmetic explicit: SM negotiated, not dictated, terms — full JH Company ownership retained, activity chosen by James, no renewed exclusive contract — because losing him a second time cost the company more than sharing control did.',
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
    label: 'Music',
    title: 'Artistry & Analysis',
    subtitle:
      'The Architecture of Restraint — เขาคือ artist ที่ใช้เวลา 10 ปีพิสูจน์ว่า restraint คือ power ไม่ใช่ weakness',
    liminalHeading: 'Signature Songwriting — Liminal Space',
    liminalIntro:
      'สิ่งที่ทำให้ James Hwang แตกต่างจาก R&B artist ร่วมยุคคือ <strong style="color:var(--text)">เขาไม่เคยบอกทุกอย่างในเพลงเดียว</strong> — เพลงของเขาวางอยู่ใน "ช่วงก่อนหรือหลัง" ของ relationship milestone ไม่ใช่ตัว moment เอง ไม่มีเพลงไหนตะโกน "ฉันรักเธอ" หรือ "เราเลิกกันแล้ว" แบบตรงๆ ทุกอย่างอยู่ใน liminal space ของความรู้สึก',
    tensionHeading: 'Thematic Tension — Confidence vs Vulnerability',
    evolutionHeading: 'Production Evolution',
    motifsHeading: 'Lyrical Motifs ที่วนซ้ำข้าม Era',
    criticHeading: 'Critic Assessment',
    counterpointsHeading: 'Counterpoints',
    counterpointsIntro: 'มุมมองวิจารณ์ที่ค้างอยู่จริงรอบตัว James — ไม่ใช่ทุกคนที่ fully accept',
    realismHeading: 'Lyrics, Authorship & Production — Realism Check',
    realismIntro:
      'ในโลกจริง material พวกนี้มาจากศิลปินหลากหลายมาก (ดู reference vocalist ใต้แต่ละเพลงในหน้า discography) แต่ใน canon นี้ส่วนใหญ่ระบุว่า <strong style="color:var(--text)">GONUNMA แต่ง/โปรดิวซ์</strong> — คำถามคือ การใช้ภาษา lyrics และ production claim มัน <strong style="color:var(--text)">สมจริงมั้ย?</strong>',
    authorshipSubhead: 'ความจริงของ credits — authorship แบบไล่ระดับ',
    stressTestsSubhead: 'Stress tests',
    productionSubhead: 'Instrument & production',
    mjHeading: 'The Michael Jackson Question',
    mjIntro:
      'James อ้างอิง Michael Jackson หนักมาก — ปรากฏพร้อมกันทั้งใน vocal, production, ทั้ง album era (ARE U STILL) และ film franchise (RESONANCE = ต่อยอด Captain EO ของ MJ) คำถามที่หลีกเลี่ยงไม่ได้: <strong style="color:var(--text)">มันเกาะ MJ ดังเกินไปจนกลบตัวตนตัวเองมั้ย?</strong>',
    stayHeading: 'Why He Stays — NCT 127',
    constructionHeading: 'How the Character Is Built',
    constructionIntro:
      'อ่าน catalog ทั้งหมดรวมกัน — vocal profile, dance language, persona, discography arc — จะเห็นว่า James Hwang ถูกสร้างเป็นตัวละครจากหลักการเดียวที่ไหลผ่านทุกชั้น: <strong style="color:var(--text)">restraint</strong>',
    entryHeading: 'Where to Start',
    entryPrefix: 'ถ้าชอบ',
    verdictLabel: 'Verdict —',
    holds: 'HOLDS',
    seam: 'SEAM',
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
      desc: 'เพลงที่เขาเป็นคนรุก มั่นใจ รู้ว่าตัวเองต้องการอะไร — แต่ไม่เคยฟังดู arrogant',
    },
    {
      label: 'Vulnerable mode',
      color: '#5a7aaa',
      songs: ['SAVE ME', 'IF I KNEW', 'CAN YOU LOVE ME TONIGHT?', 'LOVE THIS PAIN AWAY'],
      desc: 'เพลงที่เขาขอ รอ หวัง — แต่ไม่เคยฟังดู weak ทั้งสองขั้วมีความ human เสมอ',
    },
  ],
  evolution: [
    { era: 'LIKE I DO', year: '2016', sound: 'Atmospheric R&B · minimal arrangement', meaning: 'เสียงของคนที่กำลังหาตัวตน — ภายใต้ข้อจำกัดของ idol system' },
    { era: 'SOFTEST TOUCH', year: '2022', sound: 'Synth funk + indie soul', meaning: 'เริ่ม confident ขึ้น แต่ยังมี intimacy แบบ bedroom session' },
    { era: 'PULSE', year: '2023', sound: 'Self-produced ครบทุกเพลงครั้งแรก · groove-first design', meaning: 'Falsetto hook กลายเป็น signature · ทุกเพลงถูก build เพื่อ live performance' },
    { era: 'ARE U STILL', year: '2024', sound: 'Live-influenced groove · analog texture', meaning: 'ออกจาก precision ของ PULSE สู่ humanized rhythm อ้างอิง MJ/Prince era อย่างตั้งใจ' },
    { era: "CAN\'T LEAVE ALONE", year: '2025', sound: 'Contemporary R&B core', meaning: 'Maturity ของคนที่ผ่าน Grammy era แล้ว — accessible แต่ไม่ shallow' },
  ],
  motifs: [
    { motif: 'รอให้อีกฝ่ายตัดสินใจก่อน', songs: 'SAY · EVERLASTING · CAN YOU LOVE ME TONIGHT?' },
    { motif: 'รู้ว่าผิดแต่ยังอยู่', songs: 'PURPOSE · SAVE ME · LOVE THIS PAIN AWAY' },
    { motif: 'เธอมีคนอื่น แต่ฉันก็ยังอยู่', songs: 'SOFTEST TOUCH · TALK TO ME · SOMETHING REAL' },
    { motif: 'ความธรรมดาคือความพิเศษ', songs: "YOU AIN'T GOTTA · OVERSIZED JACKET · IDK WHAT YOU DO" },
    { motif: 'เวลาหลังเที่ยงคืน', songs: 'NO RESERVATIONS · AT THE END OF THE NIGHT · JUST A DREAM' },
  ],
  ratings: [
    { era: 'LIKE I DO', stars: '★★★½', epithet: 'Seed planted in the wrong season', note: 'Mature เกินกว่า SM idol project ยุคนั้น แต่ระบบยังไม่พร้อม — ถูก rediscover ภายหลังในฐานะ early blueprint' },
    { era: 'SOFTEST TOUCH', stars: '★★★★', epithet: 'The permission slip he wrote himself', note: 'พิสูจน์ว่าเป็น songwriter ที่มี distinct voice — OVERSIZED JACKET / NO RESERVATIONS แสดง emotional specificity ที่ K-pop system ไม่ค่อยอนุญาต' },
    { era: 'PULSE', stars: '★★★★½', epithet: 'The statement album', note: 'อัลบั้มที่ coherent ที่สุดใน discography — ทุกการตัดสินใจมี intention · TALK TO ME คือจุดที่ dark alt-R&B ทำงานดีที่สุดใน catalog' },
    { era: 'ARE U STILL', stars: '★★★★★', epithet: 'The apex', note: 'SELFISH คือ masterstroke ของ sequencing · Grammy Best Progressive R&B สมศักดิ์ศรี — ถ้า PULSE คือการประกาศตัวตน นี่คือการพิสูจน์ว่าไม่ใช่ fluke' },
    { era: "CAN\'T LEAVE ALONE", stars: '★★★★', epithet: 'The graceful recalibration', note: 'Deliberate cooldown หลัง peak — Pharrell collab คือ highlight แต่ HONEY side มี momentum หลุดมือช่วงท้าย' },
  ],
  perspectives: [
    {
      title: '"He\'s Good, But..." — มุมมอง semi-anti',
      color: '#a05070',
      points: [
        'ได้รับการยอมรับระดับ critical มากกว่า cultural ownership — คำชมฝั่ง US มักมี qualifier: "for an Asian artist", "surprisingly mature for K-pop"',
        '"ดีในแบบ R&B ที่ไม่ challenging" — backhanded compliment: ถ้าเป็น artist ผิวดำทำเพลงเดียวกัน คงถูกเรียกว่า "effortlessly smooth" ไม่ใช่ "accessible"',
        'NME พูดตรงสุด: "the moment K-R&B stopped being a genre qualifier and became just R&B" — แต่ตลาด mainstream Western ยังแบ่ง R&B ตาม passport มากกว่า craft',
      ],
    },
    {
      title: '"Just Pick a Lane" — แฟนเก่าที่อยากให้อยู่กับ sound นานกว่านี้',
      color: '#9b7fc8',
      points: [
        'Sound เปลี่ยนแทบทุกอัลบั้ม — แฟนที่ตกหลุมรัก sound หนึ่งจะรู้สึก lost ในอัลบั้มถัดไปเสมอ',
        'ฝ่ายแก้ต่าง: Prince, D\'Angelo, Frank Ocean ก็ไม่เคยทำอัลบั้มเดิมสองรอบ — การเปลี่ยนคือ artistic growth',
        'แต่ artist เหล่านั้นรอดเพราะ vocal identity ที่จำได้ทันที — falsetto ของ James distinctive แต่ในตลาด Western ยังไม่ถึงระดับที่ชื่อเขาเป็น genre guarantee เอง',
      ],
    },
    {
      title: '"Slow Down" — ปัญหา pace ของ output',
      color: '#5a7c6a',
      points: [
        '4 projects ใน 4 ปี (2022–2026) + world tour ข้าม leg + กิจกรรม NCT 127 overlap — หนักมากสำหรับคนที่ถือ creative control ทุกอย่างเอง',
        "CAN\'T LEAVE ALONE ฟังดู under-baked บางจุด และถูก under-promote เพราะ scheduling conflict ไม่ใช่ quality",
        'DECADE (2026) ออกเร็วเกินไปสำหรับ anthology — รู้สึกเหมือน label/commercial decision · contrast กับ Frank Ocean ที่รอ 4 ปีระหว่างอัลบั้มจน anticipation สะสมเป็น weight',
      ],
    },
  ],
  mjTouchpoints: [
    { layer: 'Vocal & production', detail: 'canon.md ระบุ MJ เป็น reference อันดับแรกทั้ง vocal (rhythmic phrasing, vocal accents, breath control) และ production (groove, vocal-driven design) — drum philosophy ก็เขียนตรงๆ ว่า "MJ-inspired rhythm design"' },
    { layer: 'ARE U STILL (2024)', detail: 'ทั้ง era pivot ไปหา neo-soul / funk / disco lineage ที่อ้างอิง MJ/Prince era อย่างตั้งใจ — TEARS ON A PRETTY FACE ถูกอธิบายด้วยคำว่า Bad-era groove + The Way You Make Me Feel staging' },
    { layer: 'RESONANCE franchise', detail: 'Captain EO: RESONANCE ต่อยอดโดยตรงจาก Captain EO (1986) ของ Michael Jackson — MJ Estate ถือสิทธิ์เพลงและ likeness ร่วมใน IP เป็นการผูกตัวเองกับมรดก MJ ในระดับ franchise ไม่ใช่แค่ influence' },
  ],
  mjDebate: [
    {
      side: 'ข้อกังวล — "เกาะ MJ ดังเกินไป"',
      color: '#c06080',
      points: [
        'เมื่อ reference ปรากฏพร้อมกันทั้ง vocal, production, ทั้ง album era และ film franchise — เริ่มยากที่จะแยกว่าอะไรคือ "James" อะไรคือ "MJ homage" สำหรับ casual listener อาจอ่านเป็น tribute act มากกว่า original voice',
        'การ build franchise บน Captain EO ทำให้ legacy ของ MJ กลายเป็น load-bearing pillar ของมูลค่าบริษัท — ถ้า MJ discourse (controversies) กลับมาเป็นกระแสลบ JH Company รับ exposure โดยตรง',
        'นักวิจารณ์สาย semi-anti ใช้จุดนี้เสริม argument ว่าเขายัง "ไม่ได้ยืนด้วยชื่อตัวเองเต็มตัว" ในตลาด Western — พิงไหล่ legend ที่ตลาดนั้นเป็นเจ้าของอยู่แล้ว',
      ],
    },
    {
      side: 'ข้อแก้ต่าง — lineage ไม่ใช่ imitation',
      color: '#5a7c6a',
      points: [
        'MJ เป็น reference ร่วมของ R&B/funk แทบทุกคน (Bruno Mars, The Weeknd, Usher) — การประกาศ lineage อย่างเปิดเผยต่างจากการลอก James ใส่ liminal-space songwriting และ falsetto identity ของตัวเองทับ groove ที่ยืมมา',
        'ARE U STILL เป็น era เดียวที่ MJ-forward ส่วน PULSE (precision synth-funk) และ CAN\'T LEAVE ALONE (Neptunes-leaning) เดินคนละทาง — ถ้าเกาะ MJ จริงคงไม่เปลี่ยน sound ทุกอัลบั้ม',
        'RESONANCE เป็น sci-fi universe ใหม่ที่ James เป็น co-creator ไม่ใช่ biopic หรือ cover project — ใช้ Captain EO เป็น launch point แล้วสร้าง mythology ของตัวเอง คล้าย legacy-extension มากกว่า dependence',
      ],
    },
  ],
  mjVerdict:
    'จุดสมดุล: MJ-reliance เป็นความเสี่ยงเชิง perception จริง โดยเฉพาะเมื่อ vocal + era + franchise วางซ้อนกัน — แต่หลักฐานใน catalog (sound ที่เปลี่ยนทุกอัลบั้ม + songwriting identity ที่จำได้) ชี้ว่าเป็น lineage ที่เลือกใช้ ไม่ใช่ตัวตนที่ยืมมาทั้งก้อน คำถามที่ยังเปิด: RESONANCE จะพิสูจน์ว่าเขาต่อยอด MJ ได้โดยไม่ถูกกลืน หรือจะกลายเป็นจุดที่ identity ของเขาถูก MJ overshadow ถาวร',
  stayContext:
    'ปกติทั้งตลาดเกาหลีและตะวันตก ศิลปินที่ดังเกินวง หรืออยู่ในวงนานจน creative ไม่พอ มักออก — Beyoncé ออกจาก Destiny\'s Child, Harry Styles ออกจาก One Direction และในปี 2026 Mark Lee เองก็ออกจาก NCT 127 เพื่อโฟกัสงานเดี่ยว แต่ James — คนที่มีข้อพิพาทกับ SM หนักจนต้องตั้งค่ายเอง, ดังระดับ Grammy + MCU, และมีเหตุผลทางธุรกิจทุกข้อที่จะตัดขาด — กลับเลือกอยู่กับ NCT 127 ต่อในฐานะ external artist นี่คือ anomaly ที่ต้องอธิบาย',
  stayReasons: [
    {
      lens: 'จิตวิทยา — identity ที่สร้างก่อนชื่อเสียง',
      color: '#5a7aaa',
      body: 'GONUNMA เกิดจากการ "ออกไปหา inner voice" ขณะที่ James คือ membership ที่ให้ belonging — canon.md ระบุ workaholic ที่ withdraw เมื่อกดดัน และชาร์จพลังแบบ introvert การมีกลุ่มที่ identity ถูกหล่อหลอมมาตั้งแต่อายุ 17 ทำหน้าที่เป็น secure base ที่งานเดี่ยว (ซึ่งทุกอย่างพึ่งตัวเขาคนเดียว) ให้ไม่ได้ การอยู่ต่อจึงไม่ใช่เรื่องอาชีพ แต่เป็น emotional anchor — ออกจากค่ายได้เพราะค่ายคือสัญญา แต่ออกจากวงไม่ได้เพราะวงคือคน',
    },
    {
      lens: 'การเติบโต — แยก "ค่าย" ออกจาก "วง" ได้สำเร็จ',
      color: '#c9a84c',
      body: 'สิ่งที่ทำให้ case นี้เป็นไปได้คือ James แยกแยะ institution (SM, ระบบสัญญา) ออกจาก relationship (เพื่อนร่วมวง) ได้ — ข้อพิพาทคือกับ "ค่าย" ไม่ใช่ "คน" settlement 2023 + การกลับมาในฐานะ external artist (ไม่ใช่ contracted idol) แสดงว่าเขาโตพอจะ retain ความสัมพันธ์โดยไม่ต้องยอม structure ที่เคยเสียเปรียบ — เป็น maturity ที่หาได้ยาก: ส่วนใหญ่เลือก all-or-nothing',
    },
    {
      lens: 'วัฒนธรรม — 정 (jeong) และ debt of belonging',
      color: '#9b7fc8',
      body: 'ในบริบทเกาหลี การละทิ้งกลุ่มที่ปั้นเรามาถูกอ่านเป็น 배신 (การทรยศ) ได้ง่าย แนวคิด 정 — ความผูกพันสะสมที่ตัดไม่ขาด — ทำให้การอยู่ต่อมีน้ำหนักทางสังคมสูง สำหรับ James ที่เป็นคนไทยใน K-pop system การ honor วงที่รับเขาเข้ามายังเป็นการ secure legitimacy ในตลาดเกาหลีที่เขายังต้องพึ่ง ต่างจาก Mark (Korean-Canadian, สถานะ core member มั่นคงกว่า) ที่ต้นทุนการออกต่ำกว่า',
    },
    {
      lens: 'กลยุทธ์ — downside ของการตัดขาดสูงกว่า upside',
      color: '#5a7c6a',
      body: 'เชิงปฏิบัติ การอยู่ต่อแทบไม่มี cost: NCT 127 ใช้ระบบที่สมาชิกทำงานเดี่ยวคู่ขนานได้ การคง membership = retain Korean fanbase + SM distribution channel + insurance หาก solo/film cycle สะดุด ขณะที่การออกแบบ Mark สื่อถึง "ปิดประตู" ที่ James ไม่มีเหตุผลต้องปิด — เขาได้ทั้งอิสระ (JH Company) และ safety net (วง) พร้อมกัน ข้อตกลงการกลับวงปี 2026 ทำให้สมการนี้ชัดเจนเป็นรูปธรรม — SM เจรจา ไม่ใช่สั่ง เงื่อนไข: James คุมความเป็นเจ้าของ JH Company ไว้เต็มร้อย เลือกกิจกรรมเอง ไม่ต้องเซ็นสัญญาผูกขาดใหม่ — เพราะการเสียเขาไปอีกครั้งสร้างความเสียหายให้บริษัทมากกว่าการยอมแบ่งอำนาจควบคุม',
    },
  ],
  stayVerdict:
    'สรุป: James ไม่ได้ "ยึดติด" NCT แบบ dependence — เขา reframe ความสัมพันธ์จาก idol-contract เป็น chosen affiliation การที่ Mark ออกแต่ James อยู่ ไม่ใช่เพราะ James กล้าน้อยกว่า แต่เพราะสมการต่างกัน: Mark ตัดเพื่อโต, James เก็บไว้เพราะมันคือ anchor ที่ทำให้เขากล้าเสี่ยงในทุก domain อื่น — เป็นภาพสะท้อนเดียวกับ thesis ของทั้ง catalog: restraint และการเลือกเก็บไว้ คือ power ไม่ใช่ weakness',
  authorshipByEra: [
    { era: 'LIKE I DO', year: '2016', role: 'Topliner + co-writer', detail: 'โปรดิวเซอร์ SM เต็มตัว (Kenzie, Ryan S. Jhun, Yoo Young-jin, DEEZ, IMLAY…) — James เขียน topline/lyrics ไม่ได้อ้างว่าโปรเอง' },
    { era: 'SOFTEST TOUCH', year: '2022', role: 'Co-write + co-production', detail: 'ยังพึ่ง SM producer network แต่ creative control เริ่มสูงขึ้น' },
    { era: 'PULSE', year: '2023', role: 'Sole producer (ครั้งแรก)', detail: 'Produced & arranged ทั้งอัลบั้มคนเดียว — จุดที่ authorship claim หนักสุด' },
    { era: 'ARE U STILL', year: '2024', role: 'Lead producer + collaborators', detail: 'Composed ร่วม Kyle Dion, Leven Kali · arranged ร่วม Sam Wills, Mack Keane' },
    { era: "CAN\'T LEAVE ALONE", year: '2025', role: 'Co-produce / co-write', detail: 'ร่วม Pino, JUNNY · track 1 ร่วม Pharrell Williams' },
  ],
  realismTests: [
    {
      q: 'ช่วงสไตล์กว้างเกินกว่าคนเดียวจะเขียนมั้ย?',
      finding: 'ครอบคลุม bedroom R&B → synth-funk → neo-soul → Neptunes groove — แต่ credits แต่ละ era มี co-writer/arranger คนละชุด ไม่ใช่ one-man-band ความกว้างจึงอธิบายได้ด้วย collaborator network',
      status: 'holds',
    },
    {
      q: 'เนื้อสองภาษา (KR/EN) สมจริงมั้ย?',
      finding: 'SOUR แทรกท่อนเกาหลี (또 하나의 another trip · 모른 척하는 너 · 뭐가 됐든 너면 돼) เข้ากับ English R&B — code-switching แบบนี้คือสิ่งที่ K-R&B ทำจริง และตรงกับ background เกาหลี-ไทย-อังกฤษของตัวละคร',
      status: 'holds',
    },
    {
      q: 'lyric persona สวิงจาก cocky ↔ fragile ในมือคนเดียว',
      finding: 'เป็นจุดแข็งมากกว่าจุดอ่อน — confidence/vulnerability oscillation คือ through-line ที่ผูกทุก era เข้าด้วยกัน ทำให้ voice เดียวน่าเชื่อแม้ register ต่าง',
      status: 'holds',
    },
    {
      q: 'reference vocalist ต่างศิลปินทุกเพลง = เสียง/สำนวนคนละแบบ',
      finding: 'lyrics.md ระบุ cover ต่างคนทุก track (Chikoruss, J.Tajor, Khalid, keshi, Kyle Dion, Pharrell…) ในกรอบเรื่องคือศิลปินอื่นมา cover เพลงเจมส์ — แต่ stylistic fingerprint ที่ต่างกันสุดขั้วคือรอยต่อที่เผยว่า source จริงมาจากหลายมือ',
      status: 'seam',
    },
  ],
  productionRealism: [
    { aspect: 'Self-production arc', text: 'ไต่จาก topliner (SM era) → sole producer (PULSE) → lead producer + collaborators (ARE U STILL, CAN\'T LEAVE ALONE) เป็น trajectory ที่ producer-artist จริงเดินกัน (เทียบ The-Dream, Frank Ocean) ไม่ใช่กระโดดมาเป็น auteur ทันที' },
    { aspect: 'Production signature ข้าม genre', text: 'canon.md ระบุ groove-centric + bass-driven + MJ drum philosophy + minimal layering + percussive vocal — signature ชุดนี้ consistent พอจะทำให้ synth-funk (PULSE) กับ neo-soul (ARE U STILL) ฟังเป็นคนเดียวได้ แม้ instrument palette ต่าง' },
    { aspect: 'Genre breadth ในเวลาสั้น', text: 'การโปร Nu-disco → 90s R&B → Neptunes funk ใน 3 ปีเป็นภาระหนักจริง (ดู Pace Problem) — การดึง Pino/JUNNY/Sam Wills/Mack Keane มาช่วย arrange ทำให้ scope สมเหตุสมผล ไม่ใช่ปาฏิหาริย์คนเดียว' },
  ],
  authorshipVerdict:
    'ส่วนใหญ่ make sense เพราะ doc ไม่เคยอ้างแบบ literal ว่า James เขียน/โปรเองทั้งหมด — credits แสดง graduated authorship (topliner → co-producer → lead producer-with-collaborators) ที่ตรงกับ career arc ของ producer-artist จริง seam เดียวที่เห็นชัดคือ reference-vocalist device: เสียงและสำนวนที่ต่างกันสุดขั้วทุกเพลงเผยว่า material จริงมาจากหลายศิลปิน แต่ในกรอบ in-universe (คนอื่น cover เพลงเจมส์) ความหลากหลายนั้นถูก reframe เป็นหลักฐานว่าเพลงแข็งแรงพอให้คนอื่นหยิบไปตีความ',
  constructionPillars: [
    {
      title: 'Liminal space เป็นบ้านของตัวละคร',
      body: 'เพลงของเขาไม่เคยอยู่ที่ตัว milestone — ไม่มีเพลงไหนตะโกน "ฉันรักเธอ" หรือ "เราเลิกกันแล้ว" ตรงๆ ทุกเพลงอยู่ช่วงก่อนหรือหลังเหตุการณ์ ตัวละคร James จึงถูกอ่านเป็นคนที่ "คิดมากกว่าพูด" โดยอัตโนมัติ — ผู้ฟังเป็นฝ่ายเติมช่องว่างเอง',
    },
    {
      title: 'Restraint คือ design principle เดียวที่ไหลผ่านทุก layer',
      body: 'Vocal: vibrato ใช้เฉพาะ note ที่ต้องการ emotional weight, dynamic อยู่ mp–mf ไม่ power-heavy · Dance: in-place precision ไม่ traveling, ใช้ silence เป็น dramatic tool · บุคลิก: measured, dry humor, withdraw ก่อนเมื่อกดดัน — ทุกระบบของตัวละครถูกตั้งค่าจากหลักเดียวกัน: "ยับยั้งไว้ แล้วปล่อยเฉพาะจุด"',
    },
    {
      title: 'Dual persona: James Hwang / GONUNMA',
      body: 'GONUNMA เริ่มจาก alter ego ฝั่ง songwriter ในยุค SM (2016) — ช่องทางให้ inner voice มีที่อยู่ในระบบ idol ที่ไม่อนุญาต พอเป็นอิสระ (2023) สอง persona ค่อยๆ merge: ชื่อบนปก credit ยังเป็น GONUNMA แต่ตัวตนสาธารณะคือ James — โครงสร้างนี้ทำให้ "การเติบโต" เป็น narrative ที่จับต้องได้ใน discography เอง',
    },
    {
      title: 'สมดุลสองขั้วที่ไม่หัก',
      body: 'Confident mode ไม่เคย arrogant, vulnerable mode ไม่เคย weak — ตัวละครถูกเขียนให้ oscillate ระหว่างสองขั้วโดยมี humanity เป็นตัวยึด จึงสลับ HOW DOES IT FEEL? ไป SAVE ME ได้โดยไม่รู้สึก inconsistent',
    },
    {
      title: 'Imperfection ที่ตั้งใจใส่',
      body: 'ตัวละครไม่ perfect ใน catalog ตัวเอง: SAVE ME คือคนติดอยู่กับแฟนเก่า, PURPOSE คือคนกลับไปหาความสัมพันธ์ toxic ทุกคืน — ไม่ใช่ hero moment แต่นั่นคือกลไกที่ทำให้ผู้ฟังรู้สึก "ได้ยินเรื่องนี้จากใครบางคนจริงๆ" รวมถึง detail ธรรมดาอย่าง dirty Adidas, grocery lines, tattoo on your back',
    },
    {
      title: 'Growth arc ที่ฟังออกได้จริง',
      body: 'Idol-system songwriter (ซ่อน voice ใน SM) → independent producer-artist (คุมทุกอย่างตั้งแต่ melody ถึง arrangement) → Grammy-winning artist ที่ถูกยกว่าเป็น "just R&B" ไม่ใช่ "K-R&B" — แต่ละอัลบั้มคือหลักฐานของ phase ไม่ใช่แค่ collection ของเพลงดี',
    },
    {
      title: 'Friction ที่ถูกทิ้งไว้โดยเจตนา',
      body: 'ตัวละครไม่ได้ถูกเขียนเป็น hagiography — มี tension จริงค้างอยู่: Western reception ที่ยังติด qualifier, แฟนเก่าที่รู้สึกถูกทิ้งเมื่อ sound เปลี่ยน, output pace ที่เร็วจน catalog ไม่ได้ breathe คำถามที่เปิดทิ้งไว้: ถ้าเขา slow down — ceiling จะอยู่ที่ไหน',
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
