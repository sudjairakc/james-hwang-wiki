// Bilingual content for the Critical Reception & Media page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Purely non-translatable data (proper nouns, dates, numeric scores) is kept
// as shared top-level constants, mirroring the pattern in data/pages/artistry.ts.

import type { Lang } from '../../i18n';

// Shared — publication names referenced by the scorecard header row.
export const publications = ['Pitchfork', 'Rolling Stone', 'NME', 'AllMusic', 'Consequence', 'IZM (KR)'];

// Shared — per-outlet numeric scores (fully non-translatable).
export const scoreMatrix = [
  { album: 'LIKE I DO',         color: '#c9a84c', scores: ['—',   '3.0/5', '6/10', '3.5/5', '—',     '3.0/5'] },
  { album: 'SOFTEST TOUCH',     color: '#9b7fc8', scores: ['7.6', '3.5/5', '7/10', '4/5',   'B',     '4.0/5'] },
  { album: 'PULSE',             color: '#5a7c6a', scores: ['8.0', '4/5',   '8/10', '4/5',   'A−',    '4.0/5'] },
  { album: 'ARE U STILL',       color: '#5a7aaa', scores: ['8.4', '4.5/5', '9/10', '4.5/5', 'A',     '4.5/5'], highlight: true },
  { album: "CAN\'T LEAVE ALONE", color: '#c06080', scores: ['7.5', '3.5/5', '7/10', '4/5',   'B+',    '3.5/5'] },
  { album: 'DECADE',            color: '#6e5a7c', scores: ['7.2', '3.5/5', '7/10', '3.5/5', 'B',     '3.5/5'] },
];

// Shared — year-end / best-of placements (fully non-translatable).
export const yearEnd = [
  { pub: 'Pitchfork', list: 'Best Albums of 2024', rank: '#19', work: 'ARE U STILL', color: '#5a7aaa' },
  { pub: 'Rolling Stone', list: '50 Best Albums of 2024', rank: '#23', work: 'ARE U STILL', color: '#5a7aaa' },
  { pub: 'NME', list: 'Albums of the Year 2024', rank: '#8', work: 'ARE U STILL', color: '#5a7aaa' },
  { pub: 'Consequence', list: 'Top R&B Albums 2024', rank: '#4', work: 'ARE U STILL', color: '#5a7aaa' },
  { pub: 'Billboard', list: 'Best K-Adjacent Crossovers', rank: 'Featured', work: 'PULSE', color: '#5a7c6a' },
  { pub: 'The Needle Drop', list: 'Year-End Honorable Mentions', rank: 'Strong 7', work: 'ARE U STILL', color: '#5a7aaa' },
];

const en = {
  ui: {
    label: 'Image',
    metaTitle: 'Critical Reception',
    heading: 'Critical Reception & Media',
    subtitle: 'Critical reception · video essay culture · industry voices · 2016–2026',
    aggregateHeading: 'Aggregate Critic Scores',
    aggregateIntro: 'Metascore-style aggregate score per album (from critic assessment) · /100',
    reviewsHeading: 'In-Depth Album Reviews',
    reviewsIntro: 'Full-length reviews per album — arranged along the 2016–2026 timeline',
    scorecardHeading: 'Publication Scorecard',
    scorecardIntro: 'Score per outlet · "—" = not reviewed (mostly pre-debut)',
    scorecardAlbumCol: 'Album',
    yearEndHeading: 'Year-End & Best-Of Placements',
    yearEndIntro: 'Mostly concentrated on ARE U STILL — 2024 cycle',
    consensusHeading: 'Critical Consensus Evolution',
    consensusIntro: 'The path from underrated → acknowledged → "just R&B"',
    videoHeading: 'Video Essays & Deep Dives',
    videoIntro: 'YouTube long-form analysis culture — a key part of K-R&B fandom discourse',
    discourseHeading: 'Reaction & Discourse Culture',
    discourseIntro: 'Viral moments on social platforms that define perception of each era',
    industryHeading: 'Industry Voices',
    industryIntro: 'Words from executives, producers, and critics in the industry',
    peerHeading: 'Peer Positioning',
    peerIntro: 'Positioning compared with tier-1 K-soloists and Western R&B auteurs',
    essaysHeading: 'Long-Form Critical Essays',
    essaysIntro: "In-depth critical perspectives — including voices that aren't all praise, for a realistic picture",
    influenceHeading: 'Influence on the Next Generation',
    influenceIntro: 'Legacy in trajectory — the "James Hwang pathway"',
  },
  summaryStats: [
    { val: '88', label: 'Peak Metascore', sub: 'ARE U STILL (2024)' },
    { val: '8.4', label: 'Highest Pitchfork', sub: 'ARE U STILL' },
    { val: '2', label: 'Grammy Wins', sub: 'Best Progressive R&B + Best R&B Performance' },
    { val: '6', label: 'Year-End Lists', sub: '2024 cycle' },
  ],
  albumScores: [
    { album: 'LIKE I DO', year: 2016, color: '#c9a84c', score: 71, stars: '★★★½', tag: '"Seed planted in the wrong season"', note: 'A pre-debut mini album later rediscovered as an early blueprint — overlooked by critics on release because it was filed under the idol-project frame' },
    { album: 'SOFTEST TOUCH', year: 2022, color: '#9b7fc8', score: 80, stars: '★★★★', tag: '"The permission slip he wrote himself"', note: 'The solo debut critics point to as proof James is a songwriter with a distinct voice, not just an idol doing R&B' },
    { album: 'PULSE', year: 2023, color: '#5a7c6a', score: 85, stars: '★★★★½', tag: '"The statement album"', note: 'The album critics call the most coherent — self-produced in full for the first time, with performance-single design ahead of its time' },
    { album: 'ARE U STILL', year: 2024, color: '#5a7aaa', score: 88, stars: '★★★★★', tag: '"The apex"', note: 'Career peak · aggregator 88/100 · Grammy Best Progressive R&B Album — the consensus pick critics agree is a masterwork', highlight: true },
    { album: "CAN\'T LEAVE ALONE", year: 2025, color: '#c06080', score: 79, stars: '★★★★', tag: '"The graceful recalibration"', note: 'A deliberate cooldown after ARE U STILL — the Pharrell collab is the highlight, but the HONEY side loses momentum toward the end' },
    { album: 'DECADE', year: 2026, color: '#6e5a7c', score: 76, stars: '★★★★', tag: '"The early anthology"', note: 'An anthology critics praise on craft but question on timing — arriving too soon for the career to have enough distance to look back' },
  ],
  albumReviews: [
    {
      album: 'LIKE I DO', year: 2016, color: '#c9a84c', stars: '★★★½', score: 71,
      pull: 'Seed planted in the wrong season',
      body: [
        "A debut mini album under the name GONUNMA that performed far better than its position in the system should have allowed. In 2016, atmospheric R&B at this level was more mature than the typical SM idol-adjacent project of that era — it's the sound of someone who hadn't yet found his identity, but who already knew exactly where to place emotional phrasing to make it hurt the most.",
        "AT THE END OF THE NIGHT is the first piece of evidence that restraint is instinct for James, not a technique he learned later. He doesn't shout, doesn't oversell — he lets the space between lines do the work instead. But the idol system's constraints at the time meant the sonic direction never got full freedom, so the album never truly got its moment in the year it was released.",
        'Score-wise, Korean critics gave it around 3 stars on release, while the Western market barely registered its existence. What pushes LIKE I DO up to ★★★½ is retrospective evaluation — heard in 2024, after knowing who he became, the album reads immediately as an "early blueprint." Its value is entirely retroactive, not something anyone saw at the time.',
      ],
    },
    {
      album: 'SOFTEST TOUCH', year: 2022, color: '#9b7fc8', stars: '★★★★', score: 80,
      pull: 'The permission slip he wrote himself',
      body: [
        "A solo debut with one job, done clearly — proving James isn't an idol who happens to do R&B well, but a songwriter with a genuinely distinct voice. After years inside a group system, this is the first time he wrote himself a permission slip to speak the way he actually wanted to.",
        'OVERSIZED JACKET and NO RESERVATIONS are the highlights, showing an emotional specificity the K-pop system rarely permits — details like dirty Adidas, grocery lines, a tattoo on your back aren\'t images typical idol songs reach for. It\'s love told through ordinary things so specific that you believe it actually happened.',
        "CRUSH (feat. Jungkook) closes the album as an odd but functional bonus track — an unexpected energy shift after six intimate songs. It doesn't quite blend with the album's main tone, but it hints that James was already ready to move past the bedroom-soul comfort zone — something PULSE would confirm a year later.",
      ],
    },
    {
      album: 'PULSE', year: 2023, color: '#5a7c6a', stars: '★★★★½', score: 85,
      pull: 'The statement album',
      body: [
        'The most coherent album in the whole discography — every decision carries clear intention. This is the first time James self-produced the entire album, and it shows in every choice, from opening with the club-confident HOW DOES IT FEEL? to the pure love poem of IF, closing with the instrumental GIRLFRIEND.',
        "TALK TO ME is where dark alt-R&B atmosphere works best across his entire catalog, while HOW DOES IT FEEL? remains James's most ahead-of-its-time performance single to date — every track was built directly for live performance, groove leading and lyrics following, with the falsetto hook becoming an instantly recognizable signature.",
        'If there\'s a knock, it\'s that PULSE is perfect in a way that\'s entirely calculated — there\'s no moment that slips outside the plan, which for some is completeness and for others a lack of risk. But as a "statement" of who he is after leaving the old system, it works on every level.',
      ],
    },
    {
      album: 'ARE U STILL', year: 2024, color: '#5a7aaa', stars: '★★★★★', score: 88,
      pull: 'The apex',
      body: [
        'A career peak that makes sense on every level, and the point where critical consensus agrees the most. TEARS ON A PRETTY FACE is a synth-funk nu-disco track bolder than most artists of this era would dare attempt — it references the MJ/Prince era deliberately without falling into nostalgia cosplay.',
        "SELFISH is a masterstroke of sequencing — an easy, swaying sound carrying the album's heaviest lyrics. Listeners get hit while still moving to it. Placing it at the end leaves the whole album ending on a lingering feeling rather than a resolution — an emotional-arc design most artists don't attempt.",
        'The Grammy win for Best Progressive R&B Album is well-earned recognition, and the aggregator score of 88/100 beats several nominees in the main categories that same year. If PULSE was the announcement of identity, ARE U STILL is the proof it wasn\'t a fluke — the point where NME declared he\'d stopped being a "K-R&B artist" and simply became an R&B artist.',
      ],
    },
    {
      album: "CAN\'T LEAVE ALONE", year: 2025, color: '#c06080', stars: '★★★★', score: 79,
      pull: 'The graceful recalibration',
      body: [
        'After ARE U STILL, this album sounds like a deliberate cooldown rather than a forward leap — a return to a contemporary R&B core with the maturity of someone who\'s already been through a Grammy-winning era: more accessible, but not quite shallow.',
        "The Pharrell collaboration on CAN\'T LEAVE ALONE (feat. Pharrell) is a highlight nothing else on the album comes close to. The dual CAN\'T LEAVE ALONE concept works well structurally — two moods, two sides of a relationship placed side by side — but in practice the HONEY side gradually loses momentum after HE'S NOT ME, leaving the album's back half feeling lighter than the front.",
        'Still a very good album by ordinary standards, but sitting right after ARE U STILL makes it feel more modest than it should. That\'s the price of following an apex — some critics read it as "playing it safe after the Grammy" rather than a step forward.',
      ],
    },
    {
      album: 'DECADE', year: 2026, color: '#6e5a7c', stars: '★★★★', score: 76,
      pull: 'The early anthology',
      body: [
        "An anthology album celebrating 10 years of the catalog — archive material plus 4 new songs. On craft, critics praise the curation and remastering for making an artist's growth arc across every era clearly visible; NEW as the lead single confirms the vocal identity remains steady and recognizable.",
        "But the main question critics raise is timing — anthologies usually arrive once a career has enough distance to look back with real weight, but DECADE lands while James is still at his peak and CAN\'T LEAVE ALONE only came out the year before. It ends up feeling more like a commercial milestone than an organic artistic statement.",
        "The 76 score reflects that feeling — no one disputes the quality of the songs, but plenty question whether it needed to exist right now. It's a good album that arrived at the wrong time — the mirror opposite of LIKE I DO, a good album that arrived ahead of its time.",
      ],
    },
  ],
  consensusArc: [
    { phase: 'Underrated', period: '2016 — 2022', desc: 'The idol-era + solo-debut stretch — Western critics barely noticed, while Korean critics read him as "an idol who does R&B better than expected"; praise nearly always came with an idol qualifier attached' },
    { phase: 'Acknowledged', period: '2023 — 2024', desc: 'PULSE → ARE U STILL shifted the narrative — a Pitchfork 8.4 and the Grammy win got him talked about as a genuine R&B auteur, though still inside a "for a K-pop artist" frame' },
    { phase: '"Just R&B"', period: '2024 — present', desc: 'NME declared it "the moment K-R&B stopped being a genre qualifier and became just R&B" — the critical ceiling lifted out of the national/ethnic category', highlight: true },
  ],
  videoEssays: [
    { channel: 'The Sonic Lens', views: '2.4M', runtime: '28:14', title: 'How James Hwang Made Restraint Sound Powerful', thesis: 'An analysis of liminal-space songwriting — why his songs always sit "before/after" the moment, never inside it', tag: 'Songwriting analysis' },
    { channel: 'Pitch & Pocket', views: '1.1M', runtime: '19:42', title: 'The PULSE Effect: When an Idol Self-Produced an Entire Album', thesis: "A track-by-track breakdown of PULSE's production — groove-first design + falsetto hook as a live-performance blueprint", tag: 'Production breakdown' },
    { channel: 'RANThology', views: '880K', runtime: '24:08', title: 'ARE U STILL Is the K-R&B Album That Refused the Label', thesis: 'Explains why the neo-soul/nu-disco pivot got critics to drop the term K-R&B — and why the Grammy committee caught up', tag: 'Genre / culture' },
    { channel: 'voiceprint', views: '1.6M', runtime: '15:30', title: "The Falsetto That Built a Fandom — GONUNMA's Vocal Identity", thesis: 'A spectrogram analysis of the vocal signature — breath texture plus an unusually low tone-recognition latency', tag: 'Vocal technique' },
    { channel: 'Half-Step', views: '640K', runtime: '32:55', title: 'The Pace Problem: Is James Hwang Releasing Too Fast?', thesis: 'An artist-first angle questioning the output of 4 projects in 4 years — shrinking catalog residence time, and a DECADE that arrived too soon', tag: 'Critique / discourse' },
    { channel: 'Crate Diggers TH', views: '420K', runtime: '21:17', title: 'เจมส์ ฮวาง: ทำไมคนไทยถึงเคลมเป็นศิลปินบ้านเรา', thesis: 'Explores the Thai-heritage angle and the LINE fandom base — the largest outside Korea — and the line between national pride and artistic merit', tag: 'Regional / fandom' },
  ],
  discourse: [
    { platform: 'Reddit · r/popheads', title: 'SELFISH sequencing discourse', desc: "A thread arguing SELFISH was placed at the end of the album (track 9) as a deliberate gut-punch — it became the subreddit's top post that week with 14K upvotes", metric: '14K upvotes' },
    { platform: 'X / Twitter', title: '"just R&B not K-R&B" quote tweet', desc: 'The NME pull-quote was quote-tweeted over 38K times — sparking debate over genre labeling by passport vs. craft', metric: '38K QRTs' },
    { platform: 'YouTube reactions', title: 'TEARS ON A PRETTY FACE first-listen wave', desc: 'Reaction channels seized on the bridge\'s key change as "the gasp moment" — compilation videos combined for over 9M views', metric: '9M+ combined' },
    { platform: 'TikTok', title: 'OVERSIZED JACKET lyric trend', desc: '"dirty Adidas, grocery lines" became the sound people used to narrate their own mundane romances — 210K video creations', metric: '210K creations' },
  ],
  industryQuotes: [
    { quote: 'เขาเขียนเพลงเหมือนคนที่รู้ว่า silence ก็เป็น instrument หนึ่ง — นั่นคือสิ่งที่ producer ส่วนใหญ่ใช้เวลาทั้งชีวิตกว่าจะเข้าใจ', who: 'A&R executive, major US label', context: 'Said on an industry podcast, after ARE U STILL' },
    { quote: "I came in as a feature, but that song was already his. People assume I produced it — I didn't. He did.", who: 'Pharrell Williams', context: "On CAN\'T LEAVE ALONE (feat. Pharrell) — correcting the misconception about who the primary composer was" },
    { quote: 'The K-R&B tag was always a marketing convenience. ARE U STILL made it indefensible.', who: 'NME senior critic', context: 'From a review that became the consensus-defining piece' },
    { quote: 'ในฐานะ producer เกาหลี ผมเคยคิดว่า falsetto-led R&B ขายยากในตลาดหลัก เขาพิสูจน์ว่าผมคิดผิด', who: 'Veteran SM-era producer', context: 'From an interview with a Korean music outlet' },
  ],
  peerTier: {
    cols: ['Dimension', 'Tier-1 K-soloist', 'Western R&B auteur', 'James Hwang'],
    rows: [
      ['Critical ceiling', 'National press', 'Global press', 'Global press (post-2024)'],
      ['Genre framing', '"K-R&B"', '"R&B"', 'Transitioned K-R&B → R&B'],
      ['Production authorship', 'Collaborative', 'Self / co-produced', 'Self-produced (PULSE+)'],
      ['Awards reach', 'Domestic', 'Grammy field', 'Grammy winner'],
      ['Cultural ownership', 'Owned', 'Owned', 'Still contested in West'],
    ],
  },
  essays: [
    {
      kicker: 'Semi-Anti View',
      title: "He's Good, But…",
      subtitle: "A perspective from people who don't dislike him, but haven't fully accepted him either",
      body: [
        { text: 'The most interesting thing about James Hwang in the Western market is that he gets more critical acclaim than cultural ownership. US critics praise him politely — Pitchfork gave him an 8.4, Rolling Stone named it a Best R&B Album — but the language used almost always comes with a qualifier attached.' },
        { text: '"for an Asian artist", "surprisingly mature for K-pop", "competes with Western R&B" — every one of these phrases carries a buried assumption that Asian artists belong in a separate category, and stepping outside it counts as a special achievement rather than a normal baseline.' },
        { lead: "\"He's good in a non-challenging R&B way\"", text: 'is an interestingly backhanded compliment, because if a Black artist made the exact same music, they\'d be described as "effortlessly smooth", not "accessible" — same substance, same meaning, but a word choice that quietly diminishes it.' },
        { lead: '"Pharrell made it and just had James sing it"', text: 'this claim ignores the fact that James is the primary composer of that song, and Pharrell is a featured artist, not the producer — Pharrell himself later came out to correct this misconception.' },
        { lead: '"The Grammy is a diversity-quota consolation prize"', text: "this argument completely ignores that ARE U STILL scored an aggregator 88/100, higher than several nominees in the same year's main categories. Reducing the award to a \"quota\" denies craft that's measurably real." },
        { text: 'What\'s notable is that these biases are rarely stated outright — they mostly show up through framing him as a "K-R&B artist," even though ARE U STILL made it clear he works within the same global R&B tradition the genre comes from. NME put it most bluntly: "the moment K-R&B stopped being a genre qualifier and became just R&B" — but the mainstream market hasn\'t read that piece yet.' },
        { text: "In short: he gets respect, but not the same space that a Black American R&B artist of equal stature would get — and that isn't James's problem. It's a problem with a system that still sorts R&B by passport more than by craft." },
      ],
    },
    {
      kicker: 'The Restless Catalog',
      title: 'Just Pick a Lane',
      subtitle: 'A perspective from old fans who wish he\'d "stayed with one sound" a little longer',
      body: [
        { text: "If you're a fan who came in during SOFTEST TOUCH through NO RESERVATIONS or OVERSIZED JACKET — that album felt like James was clearly defining his own sound: acoustic soul, intimate, unhurried. Then PULSE arrived with HOW DOES IT FEEL?, a synth-funk club track that doesn't resemble SOFTEST TOUCH in the slightest." },
        { text: "Then ARE U STILL pivoted toward a neo-soul/disco lineage inspired by the MJ era, and then CAN\'T LEAVE ALONE came back around to contemporary R&B again. Four albums, four directions." },
        { lead: '"I don\'t know which song of his to recommend"', text: 'is a legitimate concern for a casual listener trying to recommend him, because each album sounds like a different person. Anyone who fell for one album\'s sound tends to feel lost on the next.' },
        { lead: '"He just abandoned the SOFTEST TOUCH fans"', text: "the sound changes on almost every album, which means the fan base attached to any one album's texture never gets a sequel to the thing they loved." },
        { text: "The defense says changing sound every album is evidence of artistic growth, not inconsistency — Prince, D'Angelo, and Frank Ocean never made the same album twice either. But it has to be said that what let those artists survive the changes was an instantly recognizable vocal identity." },
        { text: "James does have a distinctive falsetto, but in the Western market it hasn't yet reached the point where his name alone guarantees the genre — meaning changing sound carries more risk for him than for artists already established in that market. He can switch lanes, but doesn't yet have brand recognition thick enough to cushion every switch." },
      ],
    },
    {
      kicker: 'The Pace Problem',
      title: "Slow Down, You're Losing Yourself",
      subtitle: 'A perspective from artist-first listeners who feel the output comes too fast',
      body: [
        { text: 'Look at the release timeline: 2022 SOFTEST TOUCH · 2023 PULSE + tour begins · 2024 ARE U STILL + tour continuing through May · 2025 CAN\'T LEAVE ALONE · 2026 DECADE — four projects in four years, plus a continuous multi-leg world tour, plus overlapping NCT 127 activity in some stretches.' },
        { text: 'For an artist holding every piece of creative control himself — composition, lyrics, arrangement, production — this is a genuinely heavy output, and some cracks have already started to show in the catalog.' },
        { lead: "CAN\'T LEAVE ALONE sounds under-baked in places", text: "the HONEY side, especially the stretch from HE'S NOT ME to LOVE THIS PAIN AWAY, has tonal momentum that gradually slips — unlike PULSE, where every track feels carefully considered. Given another 6 months to gestate, that album might have been tighter." },
        { lead: 'A promotion cycle that got sacrificed', text: "CAN\'T LEAVE ALONE was under-promoted because of overlapping NCT 127 activity — an album that could have hit bigger was capped by a scheduling conflict, not by quality." },
        { lead: 'DECADE in 2026 arrived too soon', text: "anthologies normally come out once a career has enough distance to look back, but DECADE dropped while James is still young in his career and CAN\'T LEAVE ALONE had only come out the year before. It ends up feeling like a commercial decision more than an organic statement, even though the album itself is good." },
        { text: 'The counterargument: James is working within a narrow window — momentum from the SM era has to be used fully before the cultural cycle turns, and ARE U STILL already proved that even at a fast pace the quality can still be Grammy-winning. But the open question remains — if he slowed down and let each album breathe more, where would his ceiling actually be?' },
      ],
    },
  ],
  influence: [
    { artist: '4th-gen K-R&B soloists', desc: 'Cite James as proof-of-concept that an idol can pivot into a self-produced auteur without losing the group' },
    { artist: 'SEA-origin idols', desc: 'The "James Hwang pathway" is used as a term for the trajectory of foreign-born idols who build solo credibility through craft rather than visuals' },
    { artist: 'Independent producer-artists', desc: 'The JH Company single-artist model is cited as a case study of a creator-owned label that never expands into a full roster' },
    { artist: 'Vocal-technique creators', desc: 'Falsetto-led restraint gets reverse-engineered in vocal coaching content — "the GONUNMA approach" has become industry shorthand' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ภาพลักษณ์',
    metaTitle: 'เสียงวิจารณ์',
    heading: 'เสียงวิจารณ์และสื่อ',
    subtitle: 'เสียงวิจารณ์ · วัฒนธรรมคลิปวิเคราะห์ · เสียงจากคนในวงการ · 2016–2026',
    aggregateHeading: 'คะแนนวิจารณ์รวม',
    aggregateIntro: 'คะแนนรวมแบบ Metascore รายอัลบั้ม คิดจากบทวิจารณ์ · เต็ม 100',
    reviewsHeading: 'บทวิจารณ์อัลบั้มเชิงลึก',
    reviewsIntro: 'บทวิจารณ์เต็มรายอัลบั้ม เรียงตามเวลา 2016–2026',
    scorecardHeading: 'ตารางคะแนนรายสำนัก',
    scorecardIntro: 'คะแนนรายสำนัก · "—" คือไม่ได้รีวิว ส่วนใหญ่เป็นช่วงก่อนเดบิวต์',
    scorecardAlbumCol: 'อัลบั้ม',
    yearEndHeading: 'อันดับส่งท้ายปีและรายชื่อที่ดีที่สุด',
    yearEndIntro: 'ส่วนใหญ่กระจุกอยู่ที่ ARE U STILL ในรอบปี 2024',
    consensusHeading: 'ความเห็นของนักวิจารณ์ที่เปลี่ยนไปตามเวลา',
    consensusIntro: 'จากถูกมองข้าม มาเป็นได้รับการยอมรับ จนกลายเป็น "R&B เฉยๆ"',
    videoHeading: 'คลิปวิเคราะห์และบทวิจารณ์เจาะลึก',
    videoIntro: 'วัฒนธรรมคลิปวิเคราะห์ยาวบน YouTube ที่เป็นส่วนสำคัญของบทสนทนาในแฟนด้อม K-R&B',
    discourseHeading: 'วัฒนธรรมปฏิกิริยาและบทสนทนาออนไลน์',
    discourseIntro: 'จังหวะที่ไวรัลบนโซเชียลจนกำหนดภาพจำของแต่ละยุค',
    industryHeading: 'เสียงจากคนในวงการ',
    industryIntro: 'คำพูดจากผู้บริหาร โปรดิวเซอร์ และนักวิจารณ์',
    peerHeading: 'ตำแหน่งเทียบคู่แข่ง',
    peerIntro: 'เทียบกับศิลปินเดี่ยวเกาหลีแถวหน้าและศิลปิน R&B ฝั่งตะวันตกที่คุมงานตัวเอง',
    essaysHeading: 'บทความวิจารณ์เชิงลึก',
    essaysIntro: 'มุมมองวิจารณ์เชิงลึก รวมเสียงที่ไม่ได้ชมล้วน เพื่อให้เห็นภาพจริง',
    influenceHeading: 'อิทธิพลต่อคนรุ่นถัดไป',
    influenceIntro: 'มรดกในแง่เส้นทาง — สิ่งที่คนเรียกว่า "ทางของ James Hwang"',
  },
  summaryStats: [
    { val: '88', label: 'Metascore สูงสุด', sub: 'ARE U STILL (2024)' },
    { val: '8.4', label: 'Pitchfork สูงสุด', sub: 'ARE U STILL' },
    { val: '2', label: 'รางวัล Grammy', sub: 'Best Progressive R&B + Best R&B Performance' },
    { val: '6', label: 'ติด Year-End List', sub: '2024 cycle' },
  ],
  albumScores: [
    { album: 'LIKE I DO', year: 2016, color: '#c9a84c', score: 71, stars: '★★★½', tag: '"เมล็ดที่หย่อนผิดฤดู"', note: 'มินิอัลบั้มก่อนเดบิวต์ที่คนกลับมาขุดเจอทีหลังในฐานะพิมพ์เขียนตั้งต้น ตอนปล่อยนักวิจารณ์มองข้ามเพราะถูกจัดอยู่ในกรอบโปรเจกต์ไอดอล' },
    { album: 'SOFTEST TOUCH', year: 2022, color: '#9b7fc8', score: 80, stars: '★★★★', tag: '"ใบอนุญาตที่เขาเขียนให้ตัวเอง"', note: 'เดบิวต์เดี่ยวที่นักวิจารณ์ใช้ยืนยันว่า James เป็นคนแต่งเพลงที่มีเสียงของตัวเอง ไม่ใช่ไอดอลที่มาทำ R&B' },
    { album: 'PULSE', year: 2023, color: '#5a7c6a', score: 85, stars: '★★★★½', tag: '"อัลบั้มประกาศตัว"', note: 'อัลบั้มที่นักวิจารณ์ยกว่าเป็นเนื้อเดียวที่สุด โปรดิวซ์เองครบทุกเพลงครั้งแรก และออกแบบเพลงเพื่อเวทีอย่างล้ำยุค' },
    { album: 'ARE U STILL', year: 2024, color: '#5a7aaa', score: 88, stars: '★★★★★', tag: '"จุดสูงสุด"', note: 'จุดสูงสุดของอาชีพ คะแนนรวม 88 เต็ม 100 คว้า Grammy สาขา Best Progressive R&B Album เป็นอัลบั้มที่นักวิจารณ์เห็นพ้องกันมากที่สุดว่าเป็นงานชิ้นเอก', highlight: true },
    { album: "CAN\'T LEAVE ALONE", year: 2025, color: '#c06080', score: 79, stars: '★★★★', tag: '"การถอยอย่างมีชั้นเชิง"', note: 'ตั้งใจผ่อนลงหลัง ARE U STILL เพลงที่ทำกับ Pharrell เป็นของดี แต่ฝั่ง HONEY เสียแรงส่งช่วงท้าย' },
    { album: 'DECADE', year: 2026, color: '#6e5a7c', score: 76, stars: '★★★★', tag: '"อัลบั้มรวมที่มาเร็วไป"', note: 'นักวิจารณ์ชมตัวงานแต่ตั้งคำถามเรื่องจังหวะเวลา ออกเร็วเกินกว่าที่อาชีพเขาจะมีระยะห่างพอให้มองย้อนกลับไปได้' },
  ],
  albumReviews: [
    {
      album: 'LIKE I DO', year: 2016, color: '#c9a84c', stars: '★★★½', score: 71,
      pull: 'เมล็ดที่หย่อนผิดฤดู',
      body: [
        'มินิอัลบั้มเปิดตัวในนาม GONUNMA ที่ทำได้ดีเกินกว่าที่ตำแหน่งของมันในระบบจะอนุญาต ในปี 2016 ซาวด์ atmospheric R&B ระดับนี้ถือว่าสุกเกินกว่าโปรเจกต์สายไอดอลของ SM ในยุคนั้น มันคือเสียงของคนที่ยังหาตัวเองไม่เจอ แต่รู้แล้วว่าต้องวางคำตรงไหนให้เจ็บที่สุด',
        'AT THE END OF THE NIGHT คือหลักฐานชิ้นแรกว่าการกลั้นไว้เป็นสัญชาตญาณของ James ไม่ใช่เทคนิคที่มาเรียนทีหลัง เขาไม่ตะโกน ไม่ขยี้ ปล่อยให้ช่องว่างระหว่างประโยคทำงานแทน แต่ข้อจำกัดของระบบไอดอลตอนนั้นทำให้ทิศทางเสียงไม่ได้อิสระเต็มที่ อัลบั้มจึงไม่เคยได้จังหวะของตัวเองจริงๆ ในปีที่ปล่อย',
        'ด้านคะแนน นักวิจารณ์เกาหลีให้ราวสามดาวตอนปล่อย ส่วนตลาดตะวันตกแทบไม่รู้ว่ามีอัลบั้มนี้อยู่ สิ่งที่ดัน LIKE I DO ขึ้นมาถึง ★★★½ คือการประเมินย้อนหลัง เมื่อฟังในปี 2024 หลังรู้แล้วว่าเขากลายเป็นใคร อัลบั้มนี้อ่านออกทันทีว่าเป็นพิมพ์เขียนตั้งต้น คุณค่าของมันมาจากการมองย้อนล้วนๆ ไม่ใช่สิ่งที่คนตอนนั้นเห็น',
      ],
    },
    {
      album: 'SOFTEST TOUCH', year: 2022, color: '#9b7fc8', stars: '★★★★', score: 80,
      pull: 'ใบอนุญาตที่เขาเขียนให้ตัวเอง',
      body: [
        'เดบิวต์เดี่ยวที่มีหน้าที่เดียวชัดเจน คือพิสูจน์ว่า James ไม่ใช่ไอดอลที่บังเอิญทำ R&B ได้ แต่เป็นคนแต่งเพลงที่มีเสียงของตัวเอง หลังอยู่ในระบบวงมาหลายปี นี่คือครั้งแรกที่เขาเขียนใบอนุญาตให้ตัวเองพูดในแบบที่อยากพูด',
        'OVERSIZED JACKET กับ NO RESERVATIONS คือของดีที่ลงรายละเอียดอารมณ์ในระดับที่ระบบ K-pop ไม่ค่อยยอมให้ทำ ของอย่างรองเท้า Adidas เปื้อนๆ แถวจ่ายเงินในซูเปอร์ หรือรอยสักบนหลัง ไม่ใช่ภาพที่เพลงไอดอลทั่วไปใช้ มันคือการเล่าความรักผ่านของธรรมดาที่เฉพาะเจาะจงจนฟังแล้วเชื่อว่าเกิดขึ้นจริง',
        'CRUSH (feat. Jungkook) ปิดอัลบั้มในฐานะเพลงแถมที่แปลกแต่ได้ผล เป็นการเปลี่ยนพลังงานที่ไม่มีใครคาดหลังฟังเพลงใกล้ชิดมาหกเพลง มันไม่กลืนกับโทนหลักของอัลบั้ม แต่กลับใบ้ว่า James พร้อมขยับออกจากมุมปลอดภัยแบบโซลอัดในห้องนอนแล้ว ซึ่งอีกปีต่อมา PULSE ก็ยืนยันเรื่องนั้น',
      ],
    },
    {
      album: 'PULSE', year: 2023, color: '#5a7c6a', stars: '★★★★½', score: 85,
      pull: 'อัลบั้มประกาศตัว',
      body: [
        'อัลบั้มที่เป็นเนื้อเดียวที่สุดในผลงานทั้งหมด ทุกการตัดสินใจมีเจตนาชัดเจน นี่เป็นครั้งแรกที่ James โปรดิวซ์เองครบทุกเพลง และได้ยินออกในทุกทางเลือก ตั้งแต่การเปิดด้วย HOW DOES IT FEEL? ที่มั่นใจแบบเพลงคลับ ไปถึง IF ที่เป็นบทกวีรักล้วนๆ แล้วปิดด้วย GIRLFRIEND ที่เป็นเพลงบรรเลง',
        'TALK TO ME คือจุดที่บรรยากาศ dark alt-R&B ทำงานได้ดีที่สุดในผลงานทั้งหมดของเขา ส่วน HOW DOES IT FEEL? ยังเป็นซิงเกิลสำหรับเวทีที่ล้ำที่สุดของเขาจนถึงวันนี้ ทุกเพลงถูกสร้างมาเพื่อการแสดงสดโดยตรง groove มาก่อน เนื้อร้องตามมา และ falsetto hook ก็กลายเป็นลายเซ็นที่จำได้ทันที',
        'ถ้าจะติ ก็คือ PULSE สมบูรณ์แบบในแบบที่คำนวณไว้หมดแล้ว ไม่มีจังหวะไหนหลุดออกนอกแผน สำหรับบางคนนั่นคือความสมบูรณ์ สำหรับบางคนคือการไม่กล้าเสี่ยง แต่ในฐานะคำประกาศว่าเขาเป็นใครหลังออกจากระบบเดิม มันทำงานครบทุกด้าน',
      ],
    },
    {
      album: 'ARE U STILL', year: 2024, color: '#5a7aaa', stars: '★★★★★', score: 88,
      pull: 'จุดสูงสุด',
      body: [
        'จุดสูงสุดของอาชีพที่สมเหตุสมผลทุกทาง และเป็นจุดที่นักวิจารณ์เห็นพ้องกันมากที่สุด TEARS ON A PRETTY FACE เป็น synth-funk สาย nu-disco ที่กล้ากว่าที่ศิลปินยุคนี้ส่วนใหญ่จะกล้าทำ อ้างอิงยุค MJ กับ Prince อย่างตั้งใจโดยไม่ตกหลุมการแต่งตัวเลียนแบบอดีต',
        'SELFISH คือหมัดเด็ดของการเรียงเพลง ซาวด์โยกสบายแต่เนื้อหนักที่สุดในอัลบั้ม คนฟังโดนกระแทกทั้งที่กำลังขยับตัวตาม การวางไว้ท้ายเล่มทำให้อัลบั้มจบลงด้วยความรู้สึกที่ยังค้างอยู่ ไม่ใช่การคลี่คลาย เป็นการออกแบบเส้นอารมณ์ในระดับที่ศิลปินส่วนใหญ่ไม่ทำกัน',
        'การคว้า Grammy สาขา Best Progressive R&B Album เป็นการยอมรับที่ไม่เกินตัว และคะแนนรวม 88 เต็ม 100 ก็สูงกว่าผู้เข้าชิงหลายรายในสาขาใหญ่ปีเดียวกัน ถ้า PULSE คือการประกาศตัว ARE U STILL คือการพิสูจน์ว่าไม่ได้ฟลุก และเป็นจุดที่ NME ประกาศว่าเขาเลิกเป็นศิลปิน K-R&B แล้ว กลายเป็นศิลปิน R&B เฉยๆ',
      ],
    },
    {
      album: "CAN\'T LEAVE ALONE", year: 2025, color: '#c06080', stars: '★★★★', score: 79,
      pull: 'การถอยอย่างมีชั้นเชิง',
      body: [
        'หลัง ARE U STILL อัลบั้มนี้ฟังเหมือนการตั้งใจผ่อนมากกว่าการก้าวไปข้างหน้า เป็นการกลับมาที่แกน Contemporary R&B ด้วยความนิ่งของคนที่ผ่านยุค Grammy มาแล้ว ฟังง่ายขึ้นแต่ไม่ถึงกับตื้น',
        'เพลงที่ทำกับ Pharrell คือของดีที่ไม่มีเพลงไหนในอัลบั้มเข้าใกล้ได้ ส่วนคอนเซปต์สองด้านของ CAN\'T LEAVE ALONE ทำงานได้ดีในแง่โครงสร้าง คืออารมณ์สองแบบของความสัมพันธ์วางคู่กัน แต่ในทางปฏิบัติ ฝั่ง HONEY ค่อยๆ เสียแรงส่งไปหลังเพลง HE\'S NOT ME ทำให้ครึ่งหลังเบากว่าครึ่งแรก',
        'ยังเป็นอัลบั้มที่ดีมากตามมาตรฐานทั่วไป แต่การมาต่อจาก ARE U STILL ทำให้ดูเจียมตัวกว่าที่ควรเป็น นี่คือราคาที่ต้องจ่ายเมื่ออัลบั้มก่อนหน้าคือจุดสูงสุด นักวิจารณ์บางส่วนจึงอ่านมันว่าเป็นการเล่นเซฟหลัง Grammy มากกว่าการก้าวต่อ',
      ],
    },
    {
      album: 'DECADE', year: 2026, color: '#6e5a7c', stars: '★★★★', score: 76,
      pull: 'อัลบั้มรวมที่มาเร็วไป',
      body: [
        'อัลบั้มรวมที่ฉลองสิบปีของผลงาน รวมของจากคลังพร้อมเพลงใหม่สี่เพลง ในแง่ตัวงาน นักวิจารณ์ชมการคัดและการรีมาสเตอร์ว่าทำให้เห็นเส้นการเติบโตของศิลปินคนหนึ่งผ่านทุกยุคได้ชัด ส่วน NEW ในฐานะซิงเกิลนำก็ยืนยันว่าเสียงของเขายังนิ่งและจำได้',
        'แต่สิ่งที่นักวิจารณ์ตั้งคำถามคือจังหวะเวลา อัลบั้มรวมมักออกหลังอาชีพมีระยะห่างมากพอจะมองย้อนได้อย่างมีน้ำหนัก แต่ DECADE ออกตอน James ยังอยู่ในจุดสูงสุด และ CAN\'T LEAVE ALONE เพิ่งออกปีก่อน มันจึงรู้สึกเหมือนหมุดหมายเชิงการค้ามากกว่าคำแถลงที่เกิดขึ้นเองตามธรรมชาติ',
        'คะแนน 76 สะท้อนความรู้สึกนั้น ไม่มีใครเถียงคุณภาพเพลง แต่หลายคนถามว่าจำเป็นต้องมีตอนนี้ไหม นี่คืออัลบั้มดีที่มาผิดเวลา ตรงข้ามกับ LIKE I DO ที่เป็นอัลบั้มดีที่มาก่อนเวลาของมัน',
      ],
    },
  ],
  consensusArc: [
    { phase: 'ถูกมองข้าม', period: '2016 — 2022', desc: 'ช่วงเป็นไอดอลและเดบิวต์เดี่ยว นักวิจารณ์ฝั่งตะวันตกแทบไม่จับ ส่วนนักวิจารณ์เกาหลีมองว่าเป็นไอดอลที่ทำ R&B ได้ดีเกินคาด คำชมมักพ่วงคำว่าไอดอลไว้ตลอด' },
    { phase: 'เริ่มถูกยอมรับ', period: '2023 — 2024', desc: 'PULSE ต่อ ARE U STILL เปลี่ยนวิธีที่คนเล่าถึงเขา Pitchfork ให้ 8.4 และการคว้า Grammy ทำให้ถูกพูดถึงในฐานะศิลปิน R&B ที่คุมงานตัวเองจริง แต่ยังติดกรอบ "สำหรับศิลปิน K-pop"' },
    { phase: '"R&B เฉยๆ"', period: '2024 — ปัจจุบัน', desc: 'NME ประกาศว่านี่คือจุดที่ K-R&B เลิกเป็นคำขยายแนวเพลงและกลายเป็น R&B เต็มตัว เพดานทางการวิจารณ์ถูกยกออกจากกรอบสัญชาติและชาติพันธุ์', highlight: true },
  ],
  videoEssays: [
    { channel: 'The Sonic Lens', views: '2.4M', runtime: '28:14', title: 'How James Hwang Made Restraint Sound Powerful', thesis: 'แกะการเขียนเพลงแบบช่วงคาบเกี่ยว ว่าทำไมเพลงเขาอยู่ก่อนหรือหลังเหตุการณ์เสมอ ไม่เคยอยู่ตรงเหตุการณ์เอง', tag: 'วิเคราะห์การแต่งเพลง' },
    { channel: 'Pitch & Pocket', views: '1.1M', runtime: '19:42', title: 'The PULSE Effect: When an Idol Self-Produced an Entire Album', thesis: 'แกะงานโปรดักชันของ PULSE ทีละเพลง ทั้งการวาง groove มาก่อนและ falsetto hook ที่เป็นแบบแผนสำหรับเวทีสด', tag: 'วิเคราะห์โปรดักชัน' },
    { channel: 'RANThology', views: '880K', runtime: '24:08', title: 'ARE U STILL Is the K-R&B Album That Refused the Label', thesis: 'อธิบายว่าทำไมการหันไปหา neo-soul กับ nu-disco ทำให้นักวิจารณ์เลิกใช้คำว่า K-R&B และทำไมกรรมการ Grammy ตามทัน', tag: 'แนวเพลง / วัฒนธรรม' },
    { channel: 'voiceprint', views: '1.6M', runtime: '15:30', title: "The Falsetto That Built a Fandom — GONUNMA's Vocal Identity", thesis: 'วิเคราะห์ลายเสียงด้วยภาพสเปกตรัม ทั้งผิวเสียงที่มีลมผสมและระยะเวลาที่คนใช้จำเสียงเขาได้ ซึ่งสั้นผิดปกติ', tag: 'เทคนิคการร้อง' },
    { channel: 'Half-Step', views: '640K', runtime: '32:55', title: 'The Pace Problem: Is James Hwang Releasing Too Fast?', thesis: 'มองจากฝั่งตัวศิลปิน ตั้งคำถามกับการปล่อยสี่โปรเจกต์ในสี่ปี เวลาที่แต่ละอัลบั้มได้อยู่กับคนฟังสั้นลง และ DECADE ที่มาเร็วเกิน', tag: 'วิจารณ์ / บทสนทนา' },
    { channel: 'Crate Diggers TH', views: '420K', runtime: '21:17', title: 'เจมส์ ฮวาง: ทำไมคนไทยถึงเคลมเป็นศิลปินบ้านเรา', thesis: 'สำรวจมุมเชื้อสายไทยและแฟนด้อมใน LINE ที่ใหญ่ที่สุดนอกเกาหลี พร้อมเส้นแบ่งระหว่างความภูมิใจในชาติกับคุณภาพของงาน', tag: 'ภูมิภาค / แฟนด้อม' },
  ],
  discourse: [
    { platform: 'Reddit · r/popheads', title: 'ถกกันเรื่องการวางเพลง SELFISH', desc: 'กระทู้วิเคราะห์ว่า SELFISH ถูกวางเป็นเพลงที่ 9 ท้ายอัลบั้มเพื่อกระแทกคนฟัง กลายเป็นโพสต์อันดับหนึ่งของซับเรดดิตในสัปดาห์นั้นด้วย 14,000 upvote', metric: '14K upvotes' },
    { platform: 'X / Twitter', title: 'ทวีตประโยค "R&B เฉยๆ ไม่ใช่ K-R&B"', desc: 'ประโยคเด็ดจาก NME ถูกยกไปทวีตต่อกว่า 38,000 ครั้ง จุดเถียงกันว่าการจัดหมวดแนวเพลงควรดูพาสปอร์ตหรือดูฝีมือ', metric: '38K QRTs' },
    { platform: 'คลิปรีแอ็กชันบน YouTube', title: 'คลื่นรีแอ็กชันตอนฟัง TEARS ON A PRETTY FACE ครั้งแรก', desc: 'ช่องรีแอ็กชันจับจังหวะเปลี่ยนคีย์ในท่อนบริดจ์เป็น "จังหวะที่ทุกคนอ้าปาก" คลิปรวมยอดวิวเกิน 9 ล้าน', metric: '9M+ combined' },
    { platform: 'TikTok', title: 'เทรนด์เนื้อเพลง OVERSIZED JACKET', desc: 'ท่อน "dirty Adidas, grocery lines" กลายเป็นเสียงที่คนใช้เล่าความรักในชีวิตธรรมดาของตัวเอง มีคนทำคลิป 210,000 คลิป', metric: '210K creations' },
  ],
  industryQuotes: [
    { quote: 'เขาเขียนเพลงเหมือนคนที่รู้ว่าความเงียบก็เป็นเครื่องดนตรีชิ้นหนึ่ง ซึ่งเป็นสิ่งที่โปรดิวเซอร์ส่วนใหญ่ใช้เวลาทั้งชีวิตกว่าจะเข้าใจ', who: 'ผู้บริหารฝ่าย A&R ค่ายใหญ่ในสหรัฐฯ', context: 'พูดในพอดแคสต์ของวงการ หลัง ARE U STILL ออก' },
    { quote: "I came in as a feature, but that song was already his. People assume I produced it — I didn't. He did.", who: 'Pharrell Williams', context: "พูดถึงเพลง CAN\'T LEAVE ALONE (feat. Pharrell) เพื่อแก้ความเข้าใจผิดว่าใครเป็นคนแต่งหลัก" },
    { quote: 'The K-R&B tag was always a marketing convenience. ARE U STILL made it indefensible.', who: 'นักวิจารณ์อาวุโสของ NME', context: 'บทวิจารณ์ที่กลายเป็นชิ้นกำหนดความเห็นของทั้งวงการ' },
    { quote: 'ในฐานะโปรดิวเซอร์เกาหลี ผมเคยคิดว่า R&B ที่นำด้วย falsetto ขายยากในตลาดหลัก เขาพิสูจน์ว่าผมคิดผิด', who: 'โปรดิวเซอร์รุ่นเก๋าจากยุค SM', context: 'ให้สัมภาษณ์กับสื่อเพลงเกาหลี' },
  ],
  peerTier: {
    cols: ['มิติ', 'Tier-1 K-soloist', 'Western R&B auteur', 'James Hwang'],
    rows: [
      ['เพดานเชิงวิจารณ์', 'สื่อในประเทศ', 'สื่อระดับโลก', 'สื่อระดับโลก (หลัง 2024)'],
      ['การจัดหมวดแนวเพลง', '"K-R&B"', '"R&B"', 'เปลี่ยนผ่านจาก K-R&B → R&B'],
      ['ความเป็นเจ้าของงานโปรดักชัน', 'ทำงานร่วมกัน', 'โปรดิวซ์เอง/ร่วมโปรดิวซ์', 'โปรดิวซ์เองล้วน (ตั้งแต่ PULSE)'],
      ['ขอบเขตรางวัล', 'ในประเทศ', 'สายเวที Grammy', 'ผู้ชนะ Grammy'],
      ['ความเป็นเจ้าของเชิงวัฒนธรรม', 'เป็นเจ้าของเต็มตัว', 'เป็นเจ้าของเต็มตัว', 'ยังถูกโต้แย้งในตะวันตก'],
    ],
  },
  essays: [
    {
      kicker: 'มุมของฝ่ายที่ไม่ค่อยซื้อ',
      title: 'เก่งนะ แต่…',
      subtitle: 'มุมมองจากคนที่ไม่ได้เกลียด แต่ก็ยังไม่ซื้อเต็มตัว',
      body: [
        { text: 'สิ่งที่น่าสนใจที่สุดเรื่อง James Hwang ในตลาดตะวันตกคือ เขาได้การยอมรับจากนักวิจารณ์มากกว่าได้ที่ยืนจริงในวัฒนธรรมนั้น นักวิจารณ์อเมริกันชมเขาอย่างสุภาพ Pitchfork ให้ 8.4 Rolling Stone ยกเป็นอัลบั้ม R&B ที่ดีที่สุด แต่ภาษาที่ใช้มักพ่วงเงื่อนไขมาด้วยตลอด' },
        { text: '"สำหรับศิลปินเอเชีย" "สุกเกินคาดสำหรับ K-pop" "สู้กับ R&B ฝั่งตะวันตกได้" ทุกวลีมีข้อสมมติฝังอยู่ว่าศิลปินเอเชียควรอยู่ในหมวดแยก และการหลุดออกจากหมวดนั้นถือเป็นความสำเร็จพิเศษ ไม่ใช่มาตรฐานปกติ' },
        { lead: '"เขาดีในแบบ R&B ที่ไม่ท้าทายใคร"', text: 'เป็นคำชมที่แฝงการดูถูกอย่างน่าสนใจ เพราะถ้าศิลปินผิวดำทำเพลงเดียวกัน คนคงบรรยายว่า "ลื่นไหลอย่างไม่ต้องออกแรง" ไม่ใช่ "ฟังง่าย" ความหมายเดียวกัน แต่เลือกคำที่ลดน้ำหนักลง' },
        { lead: '"Pharrell ทำเองแล้วให้ James ร้อง"', text: 'ข้อกล่าวหานี้มองข้ามความจริงว่า James เป็นคนแต่งหลักของเพลงนั้น และ Pharrell มาในฐานะศิลปินรับเชิญ ไม่ใช่โปรดิวเซอร์ ตัว Pharrell เองก็ออกมาแก้ความเข้าใจผิดนี้ในเวลาต่อมา' },
        { lead: '"Grammy เป็นรางวัลปลอบใจจากโควตาความหลากหลาย"', text: 'ข้ออ้างนี้มองข้ามไปเลยว่า ARE U STILL ได้คะแนนรวม 88 เต็ม 100 ซึ่งสูงกว่าผู้เข้าชิงหลายรายในสาขาใหญ่ปีเดียวกัน การลดรางวัลให้เหลือแค่คำว่าโควตาคือการปฏิเสธฝีมือที่วัดได้จริง' },
        { text: 'ที่น่าสังเกตคืออคติเหล่านี้แทบไม่มีใครพูดตรงๆ แต่ออกมาในรูปของการเรียกเขาว่าศิลปิน K-R&B แม้หลัง ARE U STILL จะชัดแล้วว่าเขาทำงานอยู่ในสายเดียวกับที่แนวเพลงนี้ถือกำเนิดมา NME พูดตรงที่สุดว่านี่คือจุดที่ K-R&B เลิกเป็นคำขยายและกลายเป็น R&B เต็มตัว แต่ตลาดกระแสหลักก็ยังไม่ได้อ่านบทความนั้นอยู่ดี' },
        { text: 'สรุปคือเขาได้รับความนับถือ แต่ยังไม่ได้พื้นที่เท่าที่ศิลปิน R&B ผิวดำในระดับเดียวกันได้ และนั่นไม่ใช่ปัญหาของ James มันคือปัญหาของระบบที่ยังแบ่ง R&B ด้วยพาสปอร์ตมากกว่าฝีมือ' },
      ],
    },
    {
      kicker: 'ผลงานที่อยู่ไม่นิ่ง',
      title: 'เลือกทางเดียวเถอะ',
      subtitle: 'มุมมองจากแฟนเก่าที่อยากให้เขาอยู่กับซาวด์เดิมนานกว่านี้',
      body: [
        { text: 'ถ้าคุณเข้ามาเป็นแฟนตอน SOFTEST TOUCH ด้วยเพลง NO RESERVATIONS หรือ OVERSIZED JACKET อัลบั้มนั้นให้ความรู้สึกว่า James กำลังจะปักหมุดซาวด์ของตัวเองชัดๆ คือโซลกีตาร์โปร่ง ใกล้ชิด ไม่รีบร้อน แล้ว PULSE ก็ออกมาพร้อม HOW DOES IT FEEL? ที่เป็นเพลงคลับสาย synth funk ซึ่งไม่เหมือน SOFTEST TOUCH เลยแม้แต่นิดเดียว' },
        { text: 'แล้ว ARE U STILL ก็หันไปหาสาย neo-soul กับ disco ที่ได้แรงจากยุค MJ แล้ว CAN\'T LEAVE ALONE ก็กลับมาที่ Contemporary R&B อีก สี่อัลบั้ม สี่ทิศทาง' },
        { lead: '"ไม่รู้จะแนะนำเพลงเขาเพลงไหน"', text: 'นี่เป็นข้อกังวลที่มีเหตุผลสำหรับคนที่อยากชวนเพื่อนมาฟัง เพราะแต่ละอัลบั้มฟังเหมือนคนละคน คนที่ตกหลุมรักซาวด์ของอัลบั้มหนึ่งมักหลงทางในอัลบั้มถัดไปทุกครั้ง' },
        { lead: '"เขาทิ้งแฟนของ SOFTEST TOUCH ไปเลย"', text: 'ซาวด์เปลี่ยนแทบทุกอัลบั้ม แปลว่าคนที่ผูกใจกับผิวเสียงของอัลบั้มใดอัลบั้มหนึ่งไม่เคยได้ภาคต่อของสิ่งที่ตัวเองรัก' },
        { text: 'ฝ่ายแก้ต่างจะบอกว่าการเปลี่ยนซาวด์ทุกอัลบั้มคือหลักฐานของการโต ไม่ใช่ความไม่แน่นอน Prince, D\'Angelo, Frank Ocean ก็ไม่เคยทำอัลบั้มเดิมสองรอบ แต่ก็ต้องยอมรับว่าสิ่งที่ทำให้คนพวกนั้นรอดทุกครั้งที่เปลี่ยนคือเสียงที่คนจำได้ทันที' },
        { text: 'James มี falsetto ที่เด่นจริง แต่ในตลาดตะวันตกยังไม่ถึงขั้นที่ชื่อเขาการันตีแนวเพลงได้เอง แปลว่าการเปลี่ยนซาวด์แต่ละครั้งยังเสี่ยงกว่าศิลปินที่ปักหลักในตลาดนั้นได้แล้ว เขาเปลี่ยนเลนได้ แต่ยังไม่มีชื่อที่หนาพอจะรองรับทุกครั้งที่เปลี่ยน' },
      ],
    },
    {
      kicker: 'ปัญหาเรื่องความถี่',
      title: 'ช้าลงหน่อย เดี๋ยวหาตัวเองไม่เจอ',
      subtitle: 'มุมมองจากคนฟังที่ห่วงตัวศิลปิน และมองว่าปล่อยงานรัวเกินไป',
      body: [
        { text: 'ดูไทม์ไลน์การปล่อยงาน: 2022 SOFTEST TOUCH · 2023 PULSE พร้อมเริ่มทัวร์ · 2024 ARE U STILL ทัวร์ต่อถึงเดือนพฤษภาคม · 2025 CAN\'T LEAVE ALONE · 2026 DECADE รวมสี่โปรเจกต์ในสี่ปี บวกทัวร์โลกหลายขาต่อเนื่อง บวกกิจกรรม NCT 127 ที่ทับกันบางช่วง' },
        { text: 'สำหรับคนที่กุมการตัดสินใจทุกอย่างไว้เองทั้งการแต่ง เนื้อร้อง การเรียบเรียง และโปรดักชัน นี่คือปริมาณงานที่หนักมาก และร่องรอยบางอย่างก็เริ่มโผล่ในผลงานแล้ว' },
        { lead: "CAN\'T LEAVE ALONE ฟังเหมือนยังไม่สุกบางจุด", text: 'ฝั่ง HONEY โดยเฉพาะช่วง HE\'S NOT ME ถึง LOVE THIS PAIN AWAY ค่อยๆ เสียแรงส่งไป ต่างจาก PULSE ที่ทุกเพลงรู้สึกว่าผ่านการคิดมาแล้วอย่างละเอียด ถ้าได้เวลาบ่มอีกหกเดือน อัลบั้มนั้นอาจแน่นกว่านี้' },
        { lead: 'รอบโปรโมตที่ถูกเสียสละ', text: "CAN\'T LEAVE ALONE ถูกโปรโมตน้อยเพราะกิจกรรม NCT 127 ทับกัน อัลบั้มที่น่าจะไปได้ไกลกว่านี้ถูกจำกัดด้วยตารางที่ชนกัน ไม่ใช่ด้วยคุณภาพ" },
        { lead: 'DECADE ในปี 2026 มาเร็วเกินไป', text: "อัลบั้มรวมมักออกหลังอาชีพมีระยะห่างพอจะมองย้อนได้ แต่ DECADE ออกตอน James ยังอายุน้อยและ CAN\'T LEAVE ALONE เพิ่งออกปีก่อน มันจึงรู้สึกเหมือนการตัดสินใจเชิงการค้ามากกว่าคำแถลงที่เกิดขึ้นเอง แม้ตัวอัลบั้มจะดี" },
        { text: 'ข้อแก้ต่างคือ James อยู่ในหน้าต่างเวลาที่แคบ แรงส่งจากยุค SM ต้องถูกใช้ให้เต็มที่ก่อนกระแสจะเปลี่ยน และ ARE U STILL ก็พิสูจน์แล้วว่าถึงปล่อยเร็ว คุณภาพก็ยังคว้า Grammy ได้ แต่คำถามที่ค้างอยู่คือ ถ้าเขาช้าลงและให้แต่ละอัลบั้มมีเวลาหายใจมากกว่านี้ เพดานของเขาจะอยู่ที่ไหน' },
      ],
    },
  ],
  influence: [
    { artist: 'ศิลปินเดี่ยวสาย K-R&B รุ่นสี่', desc: 'ยก James เป็นตัวอย่างว่าไอดอลเปลี่ยนมาเป็นศิลปินที่โปรดิวซ์งานตัวเองได้ โดยไม่ต้องเสียวงไป' },
    { artist: 'ไอดอลจากเอเชียตะวันออกเฉียงใต้', desc: '"ทางของ James Hwang" กลายเป็นคำเรียกเส้นทางของไอดอลที่เกิดนอกเกาหลี ซึ่งสร้างความน่าเชื่อถือในงานเดี่ยวด้วยฝีมือ ไม่ใช่ด้วยหน้าตา' },
    { artist: 'ศิลปินอิสระที่โปรดิวซ์เอง', desc: 'โมเดลค่ายศิลปินเดียวของ JH Company ถูกยกเป็นกรณีศึกษาของค่ายที่ศิลปินเป็นเจ้าของเองและไม่ขยายเป็นสังกัดหลายคน' },
    { artist: 'ครูสอนร้องบนโลกออนไลน์', desc: 'การกลั้นเสียงโดยนำด้วย falsetto ถูกแกะไปสอนในคลิปสอนร้อง จนคำว่า "วิธีแบบ GONUNMA" กลายเป็นศัพท์ในวงการ' },
  ],
};

export const reception = { en, th };
export function getReception(lang: Lang) {
  return reception[lang];
}
