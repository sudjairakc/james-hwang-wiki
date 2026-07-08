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
    { artist: '4th-gen K-R&B soloists', desc: 'Cite James as proof-of-concept that an idol can pivot into a self-produced auteur without leaving the group' },
    { artist: 'SEA-origin idols', desc: 'The "James Hwang pathway" is used as a term for the trajectory of foreign-born idols who build solo credibility through craft rather than visuals' },
    { artist: 'Independent producer-artists', desc: 'The JH Company single-artist model is cited as a case study of a creator-owned label that never expands into a full roster' },
    { artist: 'Vocal-technique creators', desc: 'Falsetto-led restraint gets reverse-engineered in vocal coaching content — "the GONUNMA approach" has become industry shorthand' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'Image',
    metaTitle: 'เสียงวิจารณ์',
    heading: 'เสียงวิจารณ์ & สื่อ',
    subtitle: 'เสียงวิจารณ์ · วัฒนธรรม video essay · เสียงจากวงการ · 2016–2026',
    aggregateHeading: 'คะแนนวิจารณ์แบบ Aggregate',
    aggregateIntro: 'Metascore-style aggregate ต่ออัลบั้ม (จาก critic assessment) · /100',
    reviewsHeading: 'บทวิจารณ์อัลบั้มเชิงลึก',
    reviewsIntro: 'บทวิจารณ์เต็มต่ออัลบั้ม — เรียงตามไทม์ไลน์ 2016–2026',
    scorecardHeading: 'ตารางคะแนนรายสำนัก',
    scorecardIntro: 'คะแนนรายสำนัก · "—" = ไม่ได้รีวิว (ส่วนใหญ่ pre-debut)',
    scorecardAlbumCol: 'อัลบั้ม',
    yearEndHeading: 'อันดับส่งท้ายปี & Best-Of',
    yearEndIntro: 'ส่วนใหญ่กระจุกที่ ARE U STILL — 2024 cycle',
    consensusHeading: 'วิวัฒนาการฉันทามติเชิงวิจารณ์',
    consensusIntro: 'เส้นทางจาก underrated → acknowledged → "just R&B"',
    videoHeading: 'Video Essay & การวิเคราะห์เจาะลึก',
    videoIntro: 'YouTube long-form analysis culture — ส่วนสำคัญของ K-R&B fandom discourse',
    discourseHeading: 'วัฒนธรรมปฏิกิริยา & บทสนทนาออนไลน์',
    discourseIntro: 'Viral moments บน social platforms ที่ define การรับรู้ของแต่ละ era',
    industryHeading: 'เสียงจากคนในวงการ',
    industryIntro: 'คำพูดจาก exec · producer · critic ในวงการ',
    peerHeading: 'ตำแหน่งเทียบคู่แข่ง',
    peerIntro: 'เทียบตำแหน่งกับ tier-1 K-soloist และ Western R&B auteur',
    essaysHeading: 'บทความวิจารณ์เชิงลึก',
    essaysIntro: 'มุมมองวิจารณ์เชิงลึก — รวมเสียงที่ไม่ได้ชมล้วน เพื่อภาพที่สมจริง',
    influenceHeading: 'อิทธิพลต่อคนรุ่นถัดไป',
    influenceIntro: 'มรดกเชิง trajectory — "James Hwang pathway"',
  },
  summaryStats: [
    { val: '88', label: 'Metascore สูงสุด', sub: 'ARE U STILL (2024)' },
    { val: '8.4', label: 'Pitchfork สูงสุด', sub: 'ARE U STILL' },
    { val: '2', label: 'รางวัล Grammy', sub: 'Best Progressive R&B + Best R&B Performance' },
    { val: '6', label: 'ติด Year-End List', sub: '2024 cycle' },
  ],
  albumScores: [
    { album: 'LIKE I DO', year: 2016, color: '#c9a84c', score: 71, stars: '★★★½', tag: '"Seed planted in the wrong season"', note: 'Pre-debut mini ถูก rediscover ภายหลังในฐานะ early blueprint — ตอนปล่อยถูก critic มองข้ามเพราะอยู่ใน idol-project frame' },
    { album: 'SOFTEST TOUCH', year: 2022, color: '#9b7fc8', score: 80, stars: '★★★★', tag: '"The permission slip he wrote himself"', note: 'Solo debut ที่ critic ใช้ยืนยันว่า James เป็น songwriter ที่มี distinct voice ไม่ใช่ idol ที่ทำ R&B' },
    { album: 'PULSE', year: 2023, color: '#5a7c6a', score: 85, stars: '★★★★½', tag: '"The statement album"', note: 'อัลบั้มที่ critic ยกว่า coherent ที่สุด — self-produced ทุกเพลงครั้งแรก, performance-single design ล้ำยุค' },
    { album: 'ARE U STILL', year: 2024, color: '#5a7aaa', score: 88, stars: '★★★★★', tag: '"The apex"', note: 'Career peak · aggregator 88/100 · Grammy Best Progressive R&B Album — ตัว consensus ที่ critic เห็นพ้องว่าเป็น masterwork', highlight: true },
    { album: "CAN\'T LEAVE ALONE", year: 2025, color: '#c06080', score: 79, stars: '★★★★', tag: '"The graceful recalibration"', note: 'Deliberate cooldown หลัง ARE U STILL — Pharrell collab เป็น highlight แต่ HONEY side เสีย momentum ช่วงปลาย' },
    { album: 'DECADE', year: 2026, color: '#6e5a7c', score: 76, stars: '★★★★', tag: '"The early anthology"', note: 'Anthology ที่ critic ชมตัวงานแต่ตั้งคำถามเรื่อง timing — ออกเร็วเกินกว่าที่ career จะมี distance พอจะ look back' },
  ],
  albumReviews: [
    {
      album: 'LIKE I DO', year: 2016, color: '#c9a84c', stars: '★★★½', score: 71,
      pull: 'Seed planted in the wrong season',
      body: [
        'มินิอัลบั้มเปิดตัวในนาม GONUNMA ที่ทำหน้าที่ได้ดีเกินกว่าตำแหน่งของมันในระบบจะอนุญาต ในปี 2016 ซาวด์ atmospheric R&B ระดับนี้ถือว่า mature เกินกว่า SM idol-adjacent project ทั่วไปในยุคนั้น — มันคือเสียงของคนที่ยังหาตัวตนไม่เจอ แต่รู้แล้วว่าจะวาง emotional phrasing ตรงไหนให้มันเจ็บที่สุด',
        'AT THE END OF THE NIGHT คือหลักฐานชิ้นแรกว่า restraint เป็น instinct ของ James ไม่ใช่ technique ที่มาเรียนรู้ทีหลัง เขาไม่ตะโกน ไม่ขยี้ ปล่อยให้ช่องว่างระหว่างประโยคทำงานแทน แต่ข้อจำกัดของ idol system ในตอนนั้นทำให้ sonic direction ไม่ได้รับอิสระเต็มที่ อัลบั้มจึงไม่เคยได้ moment ของมันจริง ๆ ในปีที่ปล่อย',
        'ในเชิงคะแนน critic เกาหลีให้ราว 3 ดาวตอนปล่อย ส่วนตลาด Western แทบไม่รับรู้ว่ามีอยู่ สิ่งที่ดัน LIKE I DO ขึ้นมาที่ ★★★½ คือการประเมินย้อนหลัง — เมื่อฟังในปี 2024 หลังรู้ว่าเขากลายเป็นใคร อัลบั้มนี้อ่านออกได้ทันทีในฐานะ "early blueprint" คุณค่าของมันเป็น retroactive ล้วน ๆ ไม่ใช่สิ่งที่เวลานั้นมองเห็น',
      ],
    },
    {
      album: 'SOFTEST TOUCH', year: 2022, color: '#9b7fc8', stars: '★★★★', score: 80,
      pull: 'The permission slip he wrote himself',
      body: [
        'Solo debut ที่ทำหน้าที่เดียวอย่างชัดเจน — พิสูจน์ว่า James ไม่ใช่ idol ที่บังเอิญทำ R&B ได้ แต่เป็น songwriter ที่มี distinct voice ของตัวเอง หลังหลายปีในระบบกลุ่ม นี่คือครั้งแรกที่เขาเขียนใบอนุญาตให้ตัวเองออกมาพูดในแบบที่อยากพูด',
        'OVERSIZED JACKET และ NO RESERVATIONS คือไฮไลต์ที่แสดง emotional specificity ในระดับที่ K-pop system ไม่ค่อยอนุญาต — รายละเอียดอย่าง dirty Adidas, grocery lines, รอยสักบนหลัง ไม่ใช่ภาพที่เพลงไอดอลทั่วไปใช้ มันคือการเล่าความรักผ่านของธรรมดาที่เฉพาะเจาะจงจนฟังแล้วเชื่อว่าเกิดขึ้นจริง',
        'CRUSH (feat. Jungkook) ปิดอัลบั้มในฐานะ bonus closer ที่แปลกแต่ทำงานได้ — energy shift ที่ไม่คาดคิดหลัง 6 เพลง intimate มันไม่ได้กลมกลืนกับ tone หลักของอัลบั้มทั้งหมด แต่กลับเป็นการบอกใบ้ว่า James พร้อมจะขยับออกจาก bedroom-soul comfort zone แล้ว ซึ่งอีกหนึ่งปีถัดมา PULSE ก็ยืนยันเรื่องนั้น',
      ],
    },
    {
      album: 'PULSE', year: 2023, color: '#5a7c6a', stars: '★★★★½', score: 85,
      pull: 'The statement album',
      body: [
        'อัลบั้มที่ coherent ที่สุดในทั้ง discography — ทุกการตัดสินใจมี intention ชัดเจน นี่เป็นครั้งแรกที่ James self-produced ครบทุกเพลง และมันได้ยินออกในทุกการเลือก ตั้งแต่การเปิดด้วย HOW DOES IT FEEL? ที่เป็น club-confident จนถึง IF ที่เป็น pure love poem และจบด้วย GIRLFRIEND ที่เป็น instrumental',
        'TALK TO ME คือจุดที่ dark alt-R&B atmosphere ทำงานดีที่สุดใน catalog ทั้งหมดของเขา ส่วน HOW DOES IT FEEL? ยังคงเป็น performance single ที่ล้ำยุคที่สุดของ James จนถึงปัจจุบัน — ทุก track ถูก build มาเพื่อ live performance โดยตรง groove มาก่อน เนื้อร้องตามมา และ falsetto hook กลายเป็น signature ที่จำได้ทันที',
        'ถ้ามีข้อติ ก็คือ PULSE สมบูรณ์แบบในแบบที่คำนวณไว้หมดแล้ว — มันไม่มี moment ที่หลุดออกนอกแผน ซึ่งสำหรับบางคนคือความสมบูรณ์ สำหรับบางคนคือการขาดความเสี่ยง แต่ในฐานะ "statement" ว่าเขาคือใครหลังออกจากระบบเดิม มันทำงานได้ครบทุกมิติ',
      ],
    },
    {
      album: 'ARE U STILL', year: 2024, color: '#5a7aaa', stars: '★★★★★', score: 88,
      pull: 'The apex',
      body: [
        'Career peak ที่สมเหตุสมผลในทุกมิติ และเป็นจุดที่ critical consensus เห็นพ้องกันมากที่สุด TEARS ON A PRETTY FACE เป็น synth-funk nu-disco ที่กล้าเกินกว่าที่ artist ส่วนใหญ่ในยุคนี้จะกล้าทำ — มันอ้างอิง MJ/Prince era อย่างตั้งใจโดยไม่ตกหลุม nostalgia cosplay',
        'SELFISH คือ masterstroke ของ sequencing — ซาวด์โยกสบาย แต่เนื้อหนักที่สุดในอัลบั้ม คนฟังโดนกระแทกทั้งที่กำลังขยับตัวตาม การวางมันไว้ท้ายเล่มทำให้ทั้งอัลบั้มจบลงด้วยความรู้สึกที่ค้างอยู่ ไม่ใช่ resolution นี่คือการออกแบบ emotional arc ระดับที่ artist ส่วนใหญ่ไม่ทำกัน',
        'Grammy win สาขา Best Progressive R&B Album เป็น recognition ที่สมศักดิ์ศรี และ aggregator 88/100 สูงกว่าหลาย nominee ในสาขาหลักของปีเดียวกัน ถ้า PULSE คือการประกาศตัวตน ARE U STILL คือการพิสูจน์ว่ามันไม่ใช่ fluke — และเป็นจุดที่ NME ประกาศว่าเขาเลิกเป็น "K-R&B artist" กลายเป็น R&B artist เฉย ๆ',
      ],
    },
    {
      album: "CAN\'T LEAVE ALONE", year: 2025, color: '#c06080', stars: '★★★★', score: 79,
      pull: 'The graceful recalibration',
      body: [
        'หลัง ARE U STILL อัลบั้มนี้ฟังดูเป็น deliberate cooldown มากกว่า forward leap — เป็นการกลับสู่ Contemporary R&B core ด้วย maturity ของคนที่ผ่าน Grammy-winning era มาแล้ว accessible ขึ้นแต่ไม่ถึงกับ shallow',
        'Pharrell collaboration ใน CAN\'T LEAVE ALONE (feat. Pharrell) คือ highlight ที่ไม่มีเพลงไหนในอัลบั้มเข้าใกล้ได้ ส่วน dual concept CAN\'T LEAVE ALONE ทำงานได้ดีในแง่ structure — สอง mood สองด้านของความสัมพันธ์ที่วางคู่กัน แต่ในทางปฏิบัติ HONEY side มี momentum ที่ค่อย ๆ หลุดมือหลัง HE\'S NOT ME ทำให้ครึ่งหลังของอัลบั้มรู้สึกเบากว่าครึ่งแรก',
        'ยังคงเป็นอัลบั้มที่ดีมากในมาตรฐานทั่วไป แต่การวางอยู่ถัดจาก ARE U STILL ทำให้มันรู้สึก modest กว่าที่ควร — นี่คือราคาที่ต้องจ่ายเมื่ออัลบั้มก่อนหน้าคือ apex บางส่วนของ critic จึงอ่านมันเป็น "play it safe หลัง Grammy" มากกว่าก้าวต่อ',
      ],
    },
    {
      album: 'DECADE', year: 2026, color: '#6e5a7c', stars: '★★★★', score: 76,
      pull: 'The early anthology',
      body: [
        'Anthology album ที่ฉลอง 10 ปีของ catalog — รวม archive material พร้อม 4 เพลงใหม่ ในแง่ตัวงาน critic ชมการ curate และ remaster ว่าทำให้เห็น arc ของศิลปินคนหนึ่งที่เติบโตผ่านทุก era ได้ชัดเจน NEW ในฐานะ lead single ก็ยืนยันว่า vocal identity ยังนิ่งและจำได้',
        'แต่ข้อตั้งคำถามหลักของ critic คือ timing — anthology ปกติจะออกหลังจาก career มี distance มากพอที่จะ look back อย่างมีน้ำหนัก แต่ DECADE ออกมาตอนที่ James ยังอยู่ใน peak และ CAN\'T LEAVE ALONE เพิ่งออกปีก่อนหน้า มันจึงรู้สึกเหมือน commercial milestone มากกว่า organic artistic statement',
        'คะแนน 76 สะท้อนความรู้สึกนั้น — ไม่มีใครเถียงคุณภาพของเพลง แต่หลายคนตั้งคำถามว่าจำเป็นต้องมีตอนนี้ไหม นี่คืออัลบั้มที่ดีที่มาถูกเวลาผิด ตรงข้ามกับ LIKE I DO ที่เป็นอัลบั้มดีที่มาก่อนเวลาของมัน',
      ],
    },
  ],
  consensusArc: [
    { phase: 'Underrated', period: '2016 — 2022', desc: 'ช่วง idol-era + solo debut — critic ฝั่ง Western แทบไม่จับ ส่วน critic เกาหลีมองเป็น "idol ที่ทำ R&B ได้ดีเกินคาด" คำชมมักมาพร้อม idol qualifier' },
    { phase: 'Acknowledged', period: '2023 — 2024', desc: 'PULSE → ARE U STILL เปลี่ยน narrative — Pitchfork 8.4, Grammy win ทำให้ถูกพูดถึงในฐานะ R&B auteur จริง แต่ยังติด "for a K-pop artist" frame' },
    { phase: '"Just R&B"', period: '2024 — present', desc: 'NME ประกาศว่าเป็น "the moment K-R&B stopped being a genre qualifier and became just R&B" — critical ceiling ถูกยกออกจากหมวด national/ethnic', highlight: true },
  ],
  videoEssays: [
    { channel: 'The Sonic Lens', views: '2.4M', runtime: '28:14', title: 'How James Hwang Made Restraint Sound Powerful', thesis: 'วิเคราะห์ liminal-space songwriting — ทำไมเพลงเขาอยู่ "ก่อน/หลัง" moment เสมอ ไม่เคยอยู่ตรง moment เอง', tag: 'วิเคราะห์การแต่งเพลง' },
    { channel: 'Pitch & Pocket', views: '1.1M', runtime: '19:42', title: 'The PULSE Effect: When an Idol Self-Produced an Entire Album', thesis: 'Break down production ของ PULSE ทีละ track — groove-first design + falsetto hook ในฐานะ live-performance blueprint', tag: 'วิเคราะห์โปรดักชัน' },
    { channel: 'RANThology', views: '880K', runtime: '24:08', title: 'ARE U STILL Is the K-R&B Album That Refused the Label', thesis: 'อธิบายว่าทำไม neo-soul/nu-disco pivot ถึงทำให้ critic เลิกใช้คำว่า K-R&B — และทำไม Grammy committee ถึงตามทัน', tag: 'แนวเพลง / วัฒนธรรม' },
    { channel: 'voiceprint', views: '1.6M', runtime: '15:30', title: "The Falsetto That Built a Fandom — GONUNMA's Vocal Identity", thesis: 'Spectrogram analysis ของ vocal signature — breath texture + tone-recognition latency ที่ต่ำผิดปกติ', tag: 'เทคนิคการร้อง' },
    { channel: 'Half-Step', views: '640K', runtime: '32:55', title: 'The Pace Problem: Is James Hwang Releasing Too Fast?', thesis: 'มุม artist-first ที่ตั้งคำถามกับ output 4 projects/4 ปี — catalog residence time ที่หดลง และ DECADE ที่มาเร็วเกิน', tag: 'วิจารณ์ / บทสนทนา' },
    { channel: 'Crate Diggers TH', views: '420K', runtime: '21:17', title: 'เจมส์ ฮวาง: ทำไมคนไทยถึงเคลมเป็นศิลปินบ้านเรา', thesis: 'สำรวจ Thai-heritage angle + LINE fandom ที่ใหญ่สุดนอกเกาหลี — เส้นแบ่งระหว่าง national pride กับ artistic merit', tag: 'ภูมิภาค / แฟนด้อม' },
  ],
  discourse: [
    { platform: 'Reddit · r/popheads', title: 'SELFISH sequencing discourse', desc: 'Thread วิเคราะห์ว่า SELFISH ถูกวางท้ายอัลบั้ม (track 9) เพื่อ gut-punch — กลายเป็น top post ของ subreddit ในสัปดาห์นั้น 14K upvotes', metric: '14K upvotes' },
    { platform: 'X / Twitter', title: '"just R&B not K-R&B" quote tweet', desc: 'NME pull-quote ถูก quote-tweet กว่า 38K ครั้ง — จุดถกเถียงเรื่อง genre labeling ตาม passport vs craft', metric: '38K QRTs' },
    { platform: 'YouTube reactions', title: 'TEARS ON A PRETTY FACE first-listen wave', desc: 'Reaction channels จับ moment เปลี่ยน key ใน bridge เป็น "the gasp moment" — compilation videos รวมยอดเกิน 9M views', metric: '9M+ combined' },
    { platform: 'TikTok', title: 'OVERSIZED JACKET lyric trend', desc: '"dirty Adidas, grocery lines" กลายเป็น sound ที่คนใช้เล่า mundane-romance ของตัวเอง — 210K video creations', metric: '210K creations' },
  ],
  industryQuotes: [
    { quote: 'เขาเขียนเพลงเหมือนคนที่รู้ว่า silence ก็เป็น instrument หนึ่ง — นั่นคือสิ่งที่ producer ส่วนใหญ่ใช้เวลาทั้งชีวิตกว่าจะเข้าใจ', who: 'A&R executive, major US label', context: 'พูดในพอดแคสต์อุตสาหกรรม หลัง ARE U STILL' },
    { quote: "I came in as a feature, but that song was already his. People assume I produced it — I didn't. He did.", who: 'Pharrell Williams', context: "ว่าด้วย CAN\'T LEAVE ALONE (feat. Pharrell) — แก้ misconception ว่าใครเป็น primary composer" },
    { quote: 'The K-R&B tag was always a marketing convenience. ARE U STILL made it indefensible.', who: 'NME senior critic', context: 'บทวิจารณ์ที่กลายเป็น consensus-defining piece' },
    { quote: 'ในฐานะ producer เกาหลี ผมเคยคิดว่า falsetto-led R&B ขายยากในตลาดหลัก เขาพิสูจน์ว่าผมคิดผิด', who: 'Veteran SM-era producer', context: 'สัมภาษณ์ใน Korean music outlet' },
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
      kicker: 'Semi-Anti View',
      title: "He's Good, But…",
      subtitle: 'มุมมองจากคนที่ไม่ได้ dislike แต่ยังไม่ fully accept',
      body: [
        { text: 'สิ่งที่น่าสนใจที่สุดเกี่ยวกับ James Hwang ในตลาด Western คือ เขาได้รับการยอมรับในระดับ critical มากกว่าที่เขาได้รับในแง่ cultural ownership นักวิจารณ์ฝั่ง US ชมเขาอย่างสุภาพ — Pitchfork ให้ 8.4, Rolling Stone ยกเป็น Best R&B Album — แต่ภาษาที่ใช้มักมี qualifier แนบมาเสมอ' },
        { text: '"for an Asian artist", "surprisingly mature for K-pop", "competes with Western R&B" — ทุก phrase เหล่านี้มี assumption ฝังอยู่ว่า Asian artist ควรอยู่ในหมวดแยกต่างหาก และการออกมาจากหมวดนั้นถือเป็น achievement พิเศษ ไม่ใช่ baseline ปกติ' },
        { lead: '"เขาดีในแบบ R&B ที่ไม่ challenging"', text: 'คือคำชมที่ backhanded อย่างน่าสนใจ เพราะถ้าเป็น artist ผิวดำทำเพลงแบบเดียวกัน คงถูก describe ว่า "effortlessly smooth" ไม่ใช่ "accessible" — คำเดียวกัน ความหมายเดียวกัน แต่เลือกใช้คำที่ลดทอนน้ำหนักลง' },
        { lead: '"Pharrell ทำเองแล้วให้ James ร้อง"', text: 'ข้อกล่าวหานี้มองข้ามความจริงที่ว่า James เป็น primary composer ของเพลงนั้น และ Pharrell เป็น featured artist ไม่ใช่ producer — Pharrell เองก็ออกมาแก้ misconception นี้ในภายหลัง' },
        { lead: '"Grammy คือ consolation จาก diversity quota"', text: 'argument นี้ ignore ไปเลยว่า ARE U STILL ได้ aggregator 88/100 ซึ่งสูงกว่าหลาย nominee ในสาขาหลักในปีเดียวกัน การลดทอนรางวัลให้เหลือแค่ "quota" คือการปฏิเสธ craft ที่วัดได้จริง' },
        { text: 'สิ่งที่น่าสังเกตคือ bias เหล่านี้ไม่ค่อยถูกพูดตรง ๆ แต่มักแสดงออกผ่านการ frame ว่าเขาเป็น "K-R&B artist" แม้หลัง ARE U STILL จะชัดเจนแล้วว่าเขาทำงานใน global R&B tradition เดียวกับที่ genre นี้มาจาก NME พูดได้ตรงที่สุดว่า "the moment K-R&B stopped being a genre qualifier and became just R&B" — แต่ตลาด mainstream ยังไม่ได้อ่านบทความนั้นอยู่ดี' },
        { text: 'สรุปคือ เขาได้รับการ respect แต่ยังไม่ได้รับ space เดียวกับที่ Black American R&B artist ระดับเดียวกันได้รับ และนั่นไม่ใช่ปัญหาของ James — มันคือปัญหาของระบบที่ยังแบ่ง R&B ตาม passport มากกว่า craft' },
      ],
    },
    {
      kicker: 'The Restless Catalog',
      title: 'Just Pick a Lane',
      subtitle: 'มุมมองจากแฟนเก่าที่อยากให้เขา "อยู่กับมัน" นานกว่านี้',
      body: [
        { text: 'ถ้าคุณเป็นแฟนที่เข้ามาตอน SOFTEST TOUCH ด้วย NO RESERVATIONS หรือ OVERSIZED JACKET — อัลบั้มนั้นให้ความรู้สึกว่า James กำลังจะ define sound ของตัวเองอย่างชัดเจน: acoustic soul, intimate, unhurried แล้ว PULSE ก็ออกมาพร้อม HOW DOES IT FEEL? ที่เป็น synth funk club track ที่ไม่มีอะไรเหมือน SOFTEST TOUCH เลยแม้แต่นิดเดียว' },
        { text: 'แล้ว ARE U STILL ก็ pivot ไปหา neo-soul / disco lineage ที่ได้แรงบันดาลใจจาก MJ era แล้ว CAN\'T LEAVE ALONE ก็กลับมา Contemporary R&B อีกครั้ง สี่อัลบั้ม สี่ทิศทาง' },
        { lead: '"ไม่รู้จะแนะนำเพลงเขาเพลงไหน"', text: 'นี่คือ legitimate concern สำหรับ casual listener ที่อยาก recommend เขา เพราะแต่ละอัลบั้มฟังเหมือนคนละคน คนที่ตกหลุมรัก sound ของอัลบั้มหนึ่งมักรู้สึก lost ในอัลบั้มถัดไปเสมอ' },
        { lead: '"เขาทิ้งแฟนของ SOFTEST TOUCH ไปเลย"', text: 'sound เปลี่ยนแทบทุกอัลบั้ม ซึ่งหมายความว่าฐานแฟนที่ผูกกับ texture ใดอัลบั้มหนึ่งไม่เคยได้ภาคต่อของสิ่งที่ตัวเองรัก' },
        { text: 'ฝ่ายที่แก้ต่างจะบอกว่า การเปลี่ยน sound ทุกอัลบั้มคือ evidence ของ artistic growth ไม่ใช่ inconsistency — Prince, D\'Angelo, Frank Ocean ก็ไม่เคยทำอัลบั้มเดิมสองรอบ แต่ก็ต้องยอมรับว่าสิ่งที่ทำให้ artist เหล่านั้น survive การเปลี่ยนแปลงได้คือ vocal identity ที่จำได้ทันที' },
        { text: 'James มี falsetto ที่ distinctive จริง แต่ในตลาด Western ยังไม่ถึงระดับที่ชื่อเขาเป็น genre guarantee ในตัวเอง — ซึ่งหมายความว่าการเปลี่ยน sound ยังมี risk มากกว่า artist ที่ established กว่าในตลาดนั้น เขาเปลี่ยนเลนได้ แต่ยังไม่มี brand recognition หนาพอจะรองรับทุกครั้งที่เปลี่ยน' },
      ],
    },
    {
      kicker: 'The Pace Problem',
      title: "Slow Down, You're Losing Yourself",
      subtitle: 'มุมมองจาก artist-first listener ที่มองว่า output รัวเกินไป',
      body: [
        { text: 'ดู release timeline: 2022 SOFTEST TOUCH · 2023 PULSE + ทัวร์เริ่ม · 2024 ARE U STILL + ทัวร์ต่อเนื่องถึง May · 2025 CAN\'T LEAVE ALONE · 2026 DECADE — สี่ projects ใน สี่ ปี บวก world tour ข้าม leg ต่อเนื่อง บวกกิจกรรม NCT 127 ที่ overlap บางช่วง' },
        { text: 'สำหรับ artist ที่ถือ creative control ทุกอย่างด้วยตัวเอง — composition, lyrics, arrangement, production — นี่คือ output ที่หนักมาก และร่องรอยบางอย่างก็เริ่มปรากฏใน catalog แล้ว' },
        { lead: "CAN\'T LEAVE ALONE ฟังดู under-baked บางจุด", text: 'HONEY side โดยเฉพาะช่วง HE\'S NOT ME ถึง LOVE THIS PAIN AWAY มี tonal momentum ที่ค่อย ๆ หลุดมือ ต่างจาก PULSE ที่ทุก track รู้สึกว่าถูก considered อย่างละเอียด ถ้ามีเวลา gestate อีก 6 เดือน อัลบั้มนั้นอาจ tighter กว่านี้' },
        { lead: 'Promotion cycle ที่ถูก sacrifice', text: "CAN\'T LEAVE ALONE ถูก under-promote เพราะ NCT 127 activity overlap — อัลบั้มที่อาจดังได้มากกว่านี้ถูก cap ด้วย scheduling conflict ไม่ใช่ quality" },
        { lead: 'DECADE ในปี 2026 มาเร็วเกินไป', text: "anthology ปกติออกหลัง career มี distance พอจะ look back แต่ DECADE ออกตอน James ยังอายุน้อยและ CAN\'T LEAVE ALONE เพิ่งออกปีก่อน มันเลยรู้สึกเหมือน commercial decision มากกว่า organic statement แม้ตัวอัลบั้มจะดี" },
        { text: 'ข้อแก้ต่าง: James อยู่ใน window ที่แคบ — momentum จาก SM era ต้องถูกใช้ให้เต็มที่ก่อน cultural cycle เปลี่ยน และ ARE U STILL ก็พิสูจน์แล้วว่าแม้ pace เร็ว quality ก็ยัง Grammy-winning ได้ แต่คำถามที่ค้างอยู่คือ — ถ้าเขา slow down และให้แต่ละอัลบั้มมีเวลา breathe มากกว่านี้ ceiling ของเขาจะอยู่ที่ไหน' },
      ],
    },
  ],
  influence: [
    { artist: '4th-gen K-R&B soloists', desc: 'อ้าง James เป็น proof-of-concept ว่า idol สามารถ pivot เป็น self-produced auteur ได้โดยไม่ต้องออกจากกลุ่ม' },
    { artist: 'SEA-origin idols', desc: '"James Hwang pathway" ถูกใช้เป็นคำเรียก trajectory ของ foreign-born idol ที่ build solo credibility ผ่าน craft ไม่ใช่ visual' },
    { artist: 'Independent producer-artists', desc: 'JH Company single-artist model ถูกยกเป็น case study ของ creator-owned label ที่ไม่ขยายเป็น roster' },
    { artist: 'Vocal-technique creators', desc: 'Falsetto-led restraint ถูก reverse-engineer ใน vocal coaching content — "the GONUNMA approach" กลายเป็นคำในวงการ' },
  ],
};

export const reception = { en, th };
export function getReception(lang: Lang) {
  return reception[lang];
}
