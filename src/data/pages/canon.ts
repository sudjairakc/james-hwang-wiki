// Bilingual content for the Artist Canon page.
// Shape: { en: {...}, th: {...} } with identical keys.
// Chart-scaffolding constants (radar/range-chart configs: scores, colors, canvas ids,
// and short vocal/dance/production jargon labels that read the same in both languages)
// are kept as shared, non-translatable consts — matching the eraColors pattern in artistry.ts.

import type { Lang } from '../../i18n';

// ── Shared chart data (non-translatable: numbers, colors, canvas ids, jargon labels) ──

// MIDI note numbers for range chart (C2=36 … G5=79)
export const rangeChart = {
  scaleMin: 36, // C2
  scaleMax: 91, // G6 (gives breathing room)
  groups: [
    {
      label: 'James Hwang',
      color: '#c9a84c',
      rows: [
        { type: 'Chest', lo: 48, hi: 72 }, // C3–C5
        { type: 'Falsetto', lo: 72, hi: 76 }, // C5–E5
        { type: 'Power Core', lo: 55, hi: 64 }, // G3–E4 (highlight)
      ],
    },
    {
      label: 'K-Male Idol (avg)',
      color: '#60a5fa',
      rows: [
        { type: 'Chest', lo: 52, hi: 69 }, // E3–A4
        { type: 'Falsetto', lo: 69, hi: 77 }, // A4–F5
      ],
    },
    {
      label: 'Global Male Singer (avg)',
      color: '#6b7280',
      rows: [
        { type: 'Chest', lo: 48, hi: 65 }, // C3–F4
        { type: 'Falsetto', lo: 65, hi: 72 }, // F4–C5
      ],
    },
  ],
};

// Dance radar: 6 axes, 3 dancers
export const danceRadar = {
  axes: ['Energy', 'Expressiveness', 'Technique / Precision', 'Groove / Rhythm', 'Freestyle', 'Sync / Control'],
  dancers: [
    { name: 'Taeyong', color: '#f87171', scores: [9.5, 9.5, 8.5, 8.0, 9.0, 8.5] },
    { name: 'Mark', color: '#60a5fa', scores: [8.0, 8.5, 8.0, 9.0, 8.5, 8.0] },
    { name: 'James', color: '#c9a84c', scores: [7.5, 7.5, 9.5, 9.0, 8.0, 9.5] },
  ],
};

// Production DNA radar: James vs K-pop standard
export const prodRadar = {
  axes: ['Rhythm / Groove', 'Arrangement', 'Bass Design', 'Melody', 'Texture', 'Vocal Integration', 'Clarity'],
  datasets: [
    { name: 'K-pop Standard', color: '#60a5fa', scores: [6.5, 7.0, 6.0, 8.5, 8.0, 7.0, 8.5] },
    { name: 'James Hwang', color: '#c9a84c', scores: [9.5, 9.0, 9.0, 7.5, 8.0, 9.0, 8.5] },
  ],
};

export const personalityRadar = {
  axes: ['Work Ethic', 'Consistency', 'Ambition', 'Domesticity', 'Expressiveness', 'Dry Humor'],
  scores: [9.5, 9.5, 9.0, 8.5, 5.0, 6.0],
  idolAvg: [7.0, 6.5, 7.5, 4.0, 8.0, 7.0],
};

export const subRadars = [
  {
    id: 'radarVocal',
    label: 'Vocal',
    color: '#c9a84c',
    skills: [
      { name: 'Control', james: 9.5, idol: 7.5, global: 4.0 },
      { name: 'Falsetto', james: 8.5, idol: 7.0, global: 3.5 },
      { name: 'Tone', james: 9.0, idol: 7.5, global: 4.5 },
      { name: 'Timing', james: 9.5, idol: 7.0, global: 4.0 },
      { name: 'Dynamics', james: 8.5, idol: 7.0, global: 3.5 },
      { name: 'Versatility', james: 8.0, idol: 6.5, global: 3.0 },
    ],
  },
  {
    id: 'radarDance',
    label: 'Dance',
    color: '#9b7fc8',
    skills: [
      { name: 'Isolation', james: 9.5, idol: 7.5, global: 2.5 },
      { name: 'Footwork', james: 9.0, idol: 7.0, global: 3.0 },
      { name: 'Groove', james: 9.0, idol: 7.5, global: 3.5 },
      { name: 'Glitch/Stop', james: 9.0, idol: 6.0, global: 1.5 },
      { name: 'Waving', james: 8.5, idol: 5.5, global: 1.5 },
      { name: 'Power Move', james: 5.5, idol: 5.0, global: 2.0 },
    ],
  },
  {
    id: 'radarProd',
    label: 'Production',
    color: '#5a7aaa',
    skills: [
      { name: 'Rhythm', james: 9.5, idol: 6.5, global: 3.0 },
      { name: 'Arrangement', james: 9.0, idol: 6.0, global: 2.5 },
      { name: 'Bass Hook', james: 9.0, idol: 5.5, global: 2.0 },
      { name: 'Melody', james: 8.5, idol: 6.5, global: 3.5 },
      { name: 'Texture', james: 8.5, idol: 6.0, global: 2.5 },
      { name: 'Layering', james: 8.0, idol: 6.0, global: 3.0 },
    ],
  },
];

export const sopaFriends = [
  { name: 'Jungkook', group: 'BTS' },
  { name: 'Wooseok', group: 'PENTAGON' },
  { name: 'Yeeun', group: 'CLC' },
  { name: 'Eunseo', group: 'WJSN' },
  { name: 'Sinb', group: 'GFRIEND' },
  { name: 'Umji', group: 'GFRIEND' },
];

export const liner98 = [
  { name: 'Jungwoo', group: 'NCT 127' },
  { name: 'Seungkwan', group: 'SEVENTEEN' },
  { name: 'Hyunjin', group: 'Stray Kids' },
  { name: 'Lee Know', group: 'Stray Kids' },
  { name: 'Eunha', group: 'GFRIEND' },
  { name: 'Arin', group: 'OH MY GIRL' },
];

// ── Bilingual content ──

const en = {
  ui: {
    label: 'Reference',
    title: 'Artist Canon',
    subtitle: 'Vocal profile · Dance style · Production DNA · Friend network',
    vocalHeading: 'Vocal Profile',
    keyFeaturesLabel: 'Key Features',
    styleAdjustLabel: 'Vocal Style Adjustments',
    rangeComparisonLabel: 'Vocal Range Comparison',
    rangeComparisonIntro:
      'Comparing chest voice · falsetto · power core against the K-male idol and global male singer averages',
    referenceArtistsLabel: 'Reference Artists',
    vibratoProfileLabel: 'Vibrato Profile',
    resonanceRegisterLabel: 'Resonance & Register',
    onsetArticulationLabel: 'Onset & Articulation',
    dynamicSustainLabel: 'Dynamic & Sustain',
    vibratoWaveHeading: 'Vibrato — Delayed Onset Pattern',
    dynamicRangeHeading: 'Dynamic Range — Comfort Zone',
    productionHeading: 'Production DNA',
    producerRefsLabel: 'Producer References',
    danceHeading: 'Dance — Precision Street Hybrid',
    styleBreakdownLabel: 'Style Breakdown',
    vsContemporariesLabel: 'vs. NCT 127 Contemporaries',
    compareHeaderAspect: 'Aspect',
    timingWeightLabel: 'Timing & Weight',
    spatialTransitionLabel: 'Spatial & Transition',
    timingDiagramHeading: 'Hit Timing — Pocket Position',
    musicalityMappingLabel: 'Musicality Mapping',
    performanceContextLabel: 'Performance Context',
    skillRadarHeading: 'Skill Radar',
    skillRadarIntro:
      "An overview of James Hwang's skills — scores drawn from vocal profile, dance style, and production DNA",
    skillBreakdownHeading: 'Skill Breakdown',
    skillBreakdownIntro: 'Each core skill breaks down into smaller sub-skills',
    artistProfileHeading: 'Artist Profile',
    physicalBaselineLabel: 'Physical Baseline',
    industryPositioningLabel: 'Industry Positioning',
    personalityRadarLabel: 'Personality Radar — vs K-Idol Average',
    personalityNote1:
      'Work Ethic and Consistency run abnormally high even within the idol cohort — reflected in both his career trajectory and personal lifestyle',
    personalityNote2:
      'Expressiveness sits noticeably below the idol average — consistent with a quieter variety persona and a measured communication style',
    personalityBaselineLabel: 'Personality Baseline',
    stagePersonaLabel: 'Stage & Public Persona',
    friendsHeading: 'Friends & Network',
    sopaLabel: 'SOPA Classmates (Graduated 2017)',
    liner98Label: '98-Liner Friends',
  },
  identity: [
    { label: 'Chinese Name', val: '黃志南 (Huáng Zhìnán)' },
    { label: 'Korean Name', val: '황지남 (Hwang Ji-nam)' },
    { label: 'Thai Name', val: 'ชัยชนะ อึ้งวณิชกุล' },
    { label: 'Fandom', val: 'Gemzen (Gemz) · Chamois · ชามัวร์' },
  ],
  vocalStats: [
    { label: 'Voice Type', val: 'Tenor' },
    { label: 'Vocal Range', val: 'C3 – B4 / C5' },
    { label: 'Falsetto', val: 'Up to E5' },
  ],
  vocalFeatures: [
    { feat: 'Falsetto', desc: 'Smooth, light — gradually developing breathy airiness' },
    { feat: 'Tone', desc: 'Soft and polished with added texture; not overly clean' },
    { feat: 'Control', desc: 'Exceptional breath control + increased rhythmic timing play' },
    { feat: 'Mid-range', desc: 'G3–E4 power core, enhanced with groove and accent' },
    { feat: 'Versatility', desc: 'Soft → rhythmic → percussive vocal in a single performance' },
  ],
  vocalTechniques: [
    { tech: 'Rhythmic Phrasing', desc: 'Groove-based lyric placement — not locked to melody grid' },
    { tech: 'Vocal Accents', desc: 'Short percussive articulations: "uh", "ha", "tch"' },
    { tech: 'Controlled Breathiness', desc: 'Intentional airflow texture — sexy/floating quality' },
    { tech: 'Push-Pull Timing', desc: 'Micro timing delay/advance — like dancing with the beat' },
    { tech: 'Emotional Sharpness', desc: 'Selective projection on specific words instead of uniform softness' },
  ],
  vocalRefs: [
    { artist: 'Michael Jackson', area: 'Rhythmic phrasing · vocal accents · breath control' },
    { artist: 'Baekhyun', area: 'Control + falsetto technique' },
    { artist: 'Dean', area: 'R&B phrasing + groove' },
    { artist: 'Crush', area: 'Tone warmth + musicality' },
  ],
  productionDNA: [
    { elem: 'Core Genre', desc: 'Pop & R&B — accessible but high production quality' },
    { elem: 'Rhythm Design', desc: 'Smooth rhythms with rich melodic layering' },
    { elem: 'Arrangement', desc: 'Groove-centric — rhythm section (drums/bass) as the driver' },
    { elem: 'Drum Philosophy', desc: 'MJ-inspired: bouncy, defined, isolated funk-pop drum patterns' },
    { elem: 'Bass Role', desc: 'Bass-driven composition — bassline as secondary hook' },
    { elem: 'Structure', desc: 'Call-and-response: main vocal ↔ ad-lib/chorus' },
    { elem: 'Layering', desc: 'Minimal but impactful — chosen for sharpness and memorability' },
    { elem: 'Percussive Vocal', desc: 'Breath / hit / ad-lib used as rhythmic instrument' },
  ],
  productionRefs: [
    { producer: 'Michael Jackson', area: 'Groove · rhythm design · vocal-driven production' },
    { producer: 'Quincy Jones', area: 'Arrangement balancing groove + musicality' },
    { producer: 'Teddy Riley', area: 'Rhythm + swing + R&B fusion' },
  ],
  danceStyle: [
    { cat: 'Primary Style', val: 'Animation / Robot / Popping / Waving' },
    { cat: 'Secondary Style', val: 'Lite Breaking + Tricking (impact moments)' },
    { cat: 'Freestyle Mode', val: 'Conceptual / Musical precision' },
    { cat: 'Signature Control', val: 'Micro-isolation + glitch/stop-time + delayed hit' },
    { cat: 'Footwork', val: 'Clean glide / slide / pivot techniques' },
    { cat: 'Core Strength', val: 'Body control + illusion movement + sharp footwork' },
    { cat: 'Limitation', val: 'Not power-move or heavy battle-dance oriented' },
  ],
  danceRefs: [
    { artist: 'Michael Jackson', area: 'Footwork · groove · glide techniques' },
    { artist: 'Jabbawockeez', area: 'Illusion + precision + synchronization' },
    { artist: 'Les Twins', area: 'Groove + control + body illusion' },
    { artist: "Poppin' John", area: 'Popping + animation control' },
  ],
  danceCompare: [
    { aspect: 'Energy', taeyong: 'Explosive', mark: 'Groove', james: 'Controlled' },
    { aspect: 'Style', taeyong: 'Expressive', mark: 'Natural', james: 'Technical Illusion' },
    { aspect: 'Strength', taeyong: 'Facial + dynamics', mark: 'Rhythm', james: 'Precision + isolation' },
    { aspect: 'Freestyle', taeyong: 'Artistic', mark: 'Musical', james: 'Conceptual / Experimental' },
  ],
  vibratoProfile: [
    { attr: 'Usage', val: 'Selective — only on long notes requiring emotional weight' },
    { attr: 'Type', val: 'Narrow & controlled — not wide classical, not fast pop' },
    { attr: 'Speed', val: 'Moderate — approx. 5–5.5 Hz' },
    { attr: 'Depth', val: 'Shallow — pitch deviation ≤ ±30 cents' },
    { attr: 'Onset', val: 'Delayed — starts straight, rolls into vibrato at note end' },
    { attr: 'Character', val: '"Still but alive" — not technique-forward' },
  ],
  resonanceRegister: [
    { attr: 'Primary Resonance', val: 'Mixed voice dominant — not full chest, not pure head' },
    { attr: 'Chest Voice', val: 'Warm + slightly bright — not dark/operatic, not nasal' },
    { attr: 'Head Voice / Falsetto', val: 'Light, airy — intentionally distinct from chest; not always blended' },
    { attr: 'Passaggio Zone', val: 'Approx. E4–G4 — smooth with acceptable slight thinning' },
    { attr: 'Register Break', val: 'Not always concealed — intentional flip to falsetto for texture' },
    { attr: 'Nasal Quality', val: 'Low — forward placement, minimal nasal cavity engagement' },
  ],
  onsetArticulation: [
    { attr: 'Default Onset', val: 'Soft / semi-glottal — smooth start, not hard-cut' },
    { attr: 'Accented Onset', val: 'Hard glottal on select words for emphasis or rhythmic punch' },
    { attr: 'Vowel Tendency', val: 'Forward — /a/ and /e/ open clearly, not swallowed' },
    { attr: 'Consonant Style', val: 'Clear but soft — not overpronounced like musical theatre' },
    { attr: 'Language Coloring', val: 'Thai accent adds subtle vowel widening in English — /ɛ/ tends wider than standard' },
  ],
  dynamicSustain: [
    { attr: 'Dynamic Range', val: 'Moderate — comfortable at mp to mf; not a power-heavy singer' },
    { attr: 'Soft Passage', val: 'Breathy + intimate — reduced support, floating quality' },
    { attr: 'Loud Passage', val: 'Adds edge and brightness — projection without shouting' },
    { attr: 'Sustain Quality', val: 'Hold straight → subtle swell → vibrato or fade at phrase end' },
    { attr: 'Phrase Ending', val: 'Diminuendo preferred — gradual taper, not hard cut' },
  ],
  danceTimingWeight: [
    { attr: 'Hit Timing', val: 'Slightly behind the beat (pocket) — heavy, settled feel' },
    { attr: 'Beat Response', val: 'Heavy on downbeat; upbeat uses micro-movement or hold' },
    { attr: 'Body Weight', val: 'Medium-light — not B-boy heavy, not waacking floaty' },
    { attr: 'Center of Gravity', val: 'Mid-low — slightly lower stance than average for stability' },
    { attr: 'Grounded vs Float', val: 'Grounded base; upper body can float independently' },
  ],
  danceSpatial: [
    { attr: 'Space Usage', val: 'Minimal-to-moderate — in-place control over traveling' },
    { attr: 'Level Changes', val: 'Used as punctuation — infrequent but high impact when used' },
    { attr: 'Vertical Range', val: 'Mostly mid-level — low as accent, high rarely' },
    { attr: 'Transition Style', val: 'Sharp cut over flow — reset between phrases' },
    { attr: 'Recovery Style', val: 'Returns to neutral body — does not hold poses long' },
  ],
  danceMusicality: [
    { elem: 'Kick / Snare', resp: 'Body pop or stop-motion hit' },
    { elem: 'Bass Line', resp: 'Groove step or waving following bass melodic contour' },
    { elem: 'Silence / Break', resp: 'Full stop or slow isolation — silence used as dramatic tool' },
    { elem: 'Melody', resp: 'Not tracked directly — used as backdrop for freestyle phrasing' },
    { elem: 'Build-up', resp: 'Slow isolation builds tension → explodes at drop' },
  ],
  dancePerformanceCtx: [
    { ctx: 'Solo', val: 'Conceptual + experimental — minimal space, maximum body detail' },
    { ctx: 'Group Sync', val: 'Adapts to group timing — blends first, stands out in solo section' },
    { ctx: 'Tempo Sweet Spot', val: '85–110 BPM — slow enough for isolation to read, fast enough for groove' },
    { ctx: 'Performance Face', val: 'Neutral-to-focused — matches dynamic of move; not overacted' },
    { ctx: 'Freestyle vs Choreo', val: 'Freestyle shows more personality — choreography can read as safe' },
  ],
  physicalBaseline: [
    { attr: 'Height', val: '181 cm' },
    { attr: 'Build', val: 'Athletic — lean + functional muscle; visible development from LIKE I DO → PULSE era' },
    { attr: 'Face Reading', val: 'Strong jaw + relaxed eyes — resting face reads as "still and thinking," not cold' },
    { attr: 'Default Expression', val: 'Neutral-to-focused — not an easy smile, but disarming when it appears' },
    { attr: 'On-camera vs Off', val: 'More composed on-camera; playful energy visible in behind-the-scenes content' },
  ],
  personalityBaseline: [
    { trait: 'Core Pattern', val: 'Workaholic — overcommits to multiple projects; recognized since 2023, addressed in therapy' },
    { trait: 'Introvert / Extrovert', val: 'Ambivert — recharges alone (cooking, cleaning), performs like an extrovert' },
    { trait: 'Under Pressure', val: 'Withdraws then works harder — does not express emotion publicly' },
    { trait: 'Communication Style', val: "Measured — careful in interviews, direct when pressed; doesn't dodge with vagueness" },
    { trait: 'Humor Type', val: 'Dry + understated — rarely performs comedy but lands when he does' },
    { trait: 'Consistency', val: 'Public values match private behavior — transport, lifestyle, activism align' },
    { trait: 'Domestic Groundedness', val: 'Lives alone, cooks and cleans himself, no personal staff for daily life' },
  ],
  stagePersona: [
    { ctx: 'Live Performance', val: 'Controlled + precise — high energy without chaos; reads as professional over spontaneous' },
    { ctx: 'Fan Interaction', val: 'Warm but not over-familiar — genuine smile, real responses, no forced fan service' },
    { ctx: 'Variety / MC', val: 'Quieter than peers — often lightly bullied for slow reactions; comebacks hit hard' },
    { ctx: 'Interview Mode', val: 'Comfortable with serious questions — handles depth better than fluff' },
    { ctx: 'Social Media', val: 'Weverse-based continuous contact — personal over promotional' },
    { ctx: 'Fan Event Policy', val: "Ended album-purchase fan signs post-SM; shifted to Weverse — stated he didn't know the cost burden on fans" },
  ],
  industryPositioning: [
    { attr: 'Role in Group', val: 'Vocal line (main) + Dance line (top tier) + de facto center at solo showcase moments' },
    { attr: 'Solo Positioning', val: 'Artist-tier — not pure entertainer idol; clear and growing creative credit' },
    { attr: 'Market Target', val: 'Crossover — K-pop base + R&B/soul listeners + MCU general audience' },
    { attr: 'Peer Reputation', val: 'Respected for work ethic and precision — not the life of the party, but sought as collaborator' },
    { attr: 'Label Relationship', val: 'Independent (JH Company, 2023) — returned to NCT 127 as external artist in 2024 (full participation for the 2026 10th anniversary)' },
  ],
  radarSkills: [
    { name: 'Vocal Control', james: 9.5, idol: 7.5, global: 4.0, note: 'Breath, dynamics, precision' },
    { name: 'Falsetto', james: 8.5, idol: 7.0, global: 3.5, note: 'Smooth airy tone up to E5' },
    { name: 'Rhythm / Groove', james: 9.5, idol: 7.0, global: 3.5, note: 'MJ-level phrasing & timing' },
    { name: 'Dance Precision', james: 9.0, idol: 7.5, global: 2.5, note: 'Isolation, glitch, stop-time' },
    { name: 'Versatility', james: 8.0, idol: 6.5, global: 3.0, note: 'Soft → percussive in one take' },
    { name: 'Musicality', james: 9.0, idol: 6.0, global: 2.5, note: 'Production instinct + arrangement' },
    { name: 'Stage Presence', james: 8.5, idol: 7.5, global: 4.0, note: 'Conceptual + emotional sharpness' },
    { name: 'Technique Depth', james: 9.0, idol: 7.0, global: 2.5, note: 'Multi-style foundation' },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ข้อมูลอ้างอิง',
    title: 'ข้อมูลตัวศิลปิน',
    subtitle: 'โปรไฟล์เสียงร้อง · สไตล์การเต้น · ดีเอ็นเอด้านโปรดักชัน · เครือข่ายเพื่อน',
    vocalHeading: 'โปรไฟล์เสียงร้อง',
    keyFeaturesLabel: 'จุดเด่น',
    styleAdjustLabel: 'การปรับสไตล์การร้อง',
    rangeComparisonLabel: 'เทียบช่วงเสียง',
    rangeComparisonIntro: 'เทียบ chest voice · falsetto · ย่านที่ทรงพลังที่สุด กับไอดอลชายเกาหลีและนักร้องชายทั่วโลก',
    referenceArtistsLabel: 'ศิลปินต้นแบบ',
    vibratoProfileLabel: 'ลักษณะ vibrato',
    resonanceRegisterLabel: 'เสียงก้องและช่วงเสียง',
    onsetArticulationLabel: 'การเข้าเสียงและการออกเสียง',
    dynamicSustainLabel: 'ความดังเบาและการลากเสียง',
    vibratoWaveHeading: 'Vibrato — รูปแบบเข้าช้า',
    dynamicRangeHeading: 'ช่วงความดัง — โซนที่ถนัด',
    productionHeading: 'ดีเอ็นเอด้านโปรดักชัน',
    producerRefsLabel: 'โปรดิวเซอร์ต้นแบบ',
    danceHeading: 'การเต้น — สตรีทผสมความเป๊ะ',
    styleBreakdownLabel: 'แยกย่อยตามสไตล์',
    vsContemporariesLabel: 'เทียบกับเพื่อนร่วมวง NCT 127',
    compareHeaderAspect: 'ด้าน',
    timingWeightLabel: 'จังหวะและน้ำหนัก',
    spatialTransitionLabel: 'การใช้พื้นที่และการเปลี่ยนท่า',
    timingDiagramHeading: 'จังหวะลงท่า — ตำแหน่งใน pocket',
    musicalityMappingLabel: 'การอ่านดนตรี',
    performanceContextLabel: 'บริบทการแสดง',
    skillRadarHeading: 'แผนภาพทักษะ',
    skillRadarIntro: 'ภาพรวมทักษะของ James Hwang คะแนนประเมินจากโปรไฟล์เสียงร้อง สไตล์การเต้น และงานโปรดักชัน',
    skillBreakdownHeading: 'แยกย่อยแต่ละทักษะ',
    skillBreakdownIntro: 'ทักษะหลักแต่ละด้านแตกออกเป็นทักษะย่อย',
    artistProfileHeading: 'โปรไฟล์ตัวศิลปิน',
    physicalBaselineLabel: 'ข้อมูลทางกาย',
    industryPositioningLabel: 'ตำแหน่งในวงการ',
    personalityRadarLabel: 'แผนภาพบุคลิก — เทียบค่าเฉลี่ยไอดอลเกาหลี',
    personalityNote1:
      'ความมุ่งมั่นในการทำงานและความสม่ำเสมอสูงผิดปกติแม้เทียบกับไอดอลด้วยกัน เห็นได้ทั้งจากเส้นทางอาชีพและวิธีใช้ชีวิตส่วนตัว',
    personalityNote2:
      'การแสดงออกต่ำกว่าค่าเฉลี่ยไอดอลอย่างเห็นได้ชัด ตรงกับภาพในรายการวาไรตี้ที่เขาเงียบและพูดอย่างระมัดระวัง',
    personalityBaselineLabel: 'พื้นฐานบุคลิก',
    stagePersonaLabel: 'บุคลิกบนเวทีและต่อสาธารณะ',
    friendsHeading: 'เพื่อนและเครือข่าย',
    sopaLabel: 'เพื่อนร่วมชั้น SOPA (จบปี 2017)',
    liner98Label: 'เพื่อนรุ่นปี 98',
  },
  identity: [
    { label: 'ชื่อจีน', val: '黃志南 (Huáng Zhìnán)' },
    { label: 'ชื่อเกาหลี', val: '황지남 (Hwang Ji-nam)' },
    { label: 'ชื่อไทย', val: 'ชัยชนะ อึ้งวณิชกุล' },
    { label: 'แฟนด้อม', val: 'Gemzen (Gemz) · Chamois · ชามัวร์' },
  ],
  vocalStats: [
    { label: 'ประเภทเสียง', val: 'Tenor' },
    { label: 'ช่วงเสียง', val: 'C3 – B4 / C5' },
    { label: 'Falsetto', val: 'สูงถึง E5' },
  ],
  vocalFeatures: [
    { feat: 'Falsetto', desc: 'นุ่มเบา และค่อยๆ พัฒนาความโปร่งแบบมีลมผสมขึ้นเรื่อยๆ' },
    { feat: 'เนื้อเสียง', desc: 'นุ่มและเกลี้ยงเกลา แต่ยังมีผิวเสียงอยู่ ไม่ใสจนเกินไป' },
    { feat: 'การควบคุม', desc: 'คุมลมหายใจได้ดีมาก และเล่นกับจังหวะได้มากขึ้นเรื่อยๆ' },
    { feat: 'ย่านกลาง', desc: 'ย่านที่ทรงพลังที่สุดคือ G3–E4 เสริมด้วย groove และการเน้นเสียง' },
    { feat: 'ความหลากหลาย', desc: 'ไล่จากนุ่ม ไปเข้าจังหวะ ไปใช้เสียงเป็นเครื่องเคาะ ได้ในเพลงเดียว' },
  ],
  vocalTechniques: [
    { tech: 'Rhythmic Phrasing', desc: 'วางคำตาม groove ไม่ยึดติดกับกริดของทำนอง' },
    { tech: 'Vocal Accents', desc: 'เสียงสั้นๆ ที่ใช้แทนเครื่องเคาะ: "uh", "ha", "tch"' },
    { tech: 'Controlled Breathiness', desc: 'ปล่อยลมผสมเข้าไปอย่างตั้งใจ ให้ความรู้สึกลอยและเซ็กซี่' },
    { tech: 'Push-Pull Timing', desc: 'ขยับจังหวะเร็วช้าทีละเสี้ยว เหมือนเต้นไปกับบีต' },
    { tech: 'Emotional Sharpness', desc: 'ดันเสียงเฉพาะคำที่เลือก ไม่ปล่อยนุ่มไปเรื่อยทั้งเพลง' },
  ],
  vocalRefs: [
    { artist: 'Michael Jackson', area: 'Rhythmic phrasing · vocal accents · breath control' },
    { artist: 'Baekhyun', area: 'Control + falsetto technique' },
    { artist: 'Dean', area: 'R&B phrasing + groove' },
    { artist: 'Crush', area: 'Tone warmth + musicality' },
  ],
  productionDNA: [
    { elem: 'แนวหลัก', desc: 'ป็อปกับ R&B ฟังง่ายแต่งานโปรดักชันละเอียด' },
    { elem: 'การออกแบบจังหวะ', desc: 'จังหวะลื่น ซ้อนชั้นทำนองไว้แน่น' },
    { elem: 'การเรียบเรียง', desc: 'ยึด groove เป็นหลัก ให้กลองกับเบสเป็นตัวขับเพลง' },
    { elem: 'แนวคิดเรื่องกลอง', desc: 'ได้แรงจาก MJ กลอง funk-pop ที่เด้ง คม และแยกชิ้นชัด' },
    { elem: 'บทบาทของเบส', desc: 'แต่งโดยให้เบสนำ เส้นเบสทำหน้าที่เป็นท่อนติดหูที่สอง' },
    { elem: 'โครงเพลง', desc: 'ถาม-ตอบระหว่างเสียงร้องหลักกับ ad-lib หรือคอรัส' },
    { elem: 'การซ้อนชั้น', desc: 'ซ้อนน้อยแต่ได้ผล เลือกเฉพาะที่ทำให้คมและจำง่าย' },
    { elem: 'เสียงร้องเป็นเครื่องเคาะ', desc: 'ใช้เสียงลม เสียงกระแทก และ ad-lib เป็นเครื่องดนตรีจังหวะ' },
  ],
  productionRefs: [
    { producer: 'Michael Jackson', area: 'Groove · rhythm design · vocal-driven production' },
    { producer: 'Quincy Jones', area: 'Arrangement balancing groove + musicality' },
    { producer: 'Teddy Riley', area: 'Rhythm + swing + R&B fusion' },
  ],
  danceStyle: [
    { cat: 'สไตล์หลัก', val: 'Animation / Robot / Popping / Waving' },
    { cat: 'สไตล์รอง', val: 'Lite Breaking + Tricking (ใช้ตอนต้องการแรงกระแทก)' },
    { cat: 'แนวทาง Freestyle', val: 'เน้นคอนเซปต์และความแม่นตามดนตรี' },
    { cat: 'ลายเซ็นการควบคุม', val: 'Micro-isolation + glitch/stop-time + ลงท่าช้ากว่าบีต' },
    { cat: 'Footwork', val: 'เทคนิค glide / slide / pivot ที่สะอาด' },
    { cat: 'จุดแข็งหลัก', val: 'คุมร่างกายได้ดี ทำท่าลวงตาได้ และ footwork คม' },
    { cat: 'ข้อจำกัด', val: 'ไม่เน้นท่า power-move หรือการเต้นแบทเทิลหนักๆ' },
  ],
  danceRefs: [
    { artist: 'Michael Jackson', area: 'Footwork · groove · glide techniques' },
    { artist: 'Jabbawockeez', area: 'Illusion + precision + synchronization' },
    { artist: 'Les Twins', area: 'Groove + control + body illusion' },
    { artist: "Poppin' John", area: 'Popping + animation control' },
  ],
  danceCompare: [
    { aspect: 'พลังงาน', taeyong: 'Explosive', mark: 'Groove', james: 'Controlled' },
    { aspect: 'สไตล์', taeyong: 'Expressive', mark: 'Natural', james: 'Technical Illusion' },
    { aspect: 'จุดแข็ง', taeyong: 'Facial + dynamics', mark: 'Rhythm', james: 'Precision + isolation' },
    { aspect: 'Freestyle', taeyong: 'Artistic', mark: 'Musical', james: 'Conceptual / Experimental' },
  ],
  vibratoProfile: [
    { attr: 'การใช้งาน', val: 'เลือกใช้ เฉพาะโน้ตยาวที่ต้องการน้ำหนักทางอารมณ์' },
    { attr: 'ประเภท', val: 'แคบและคุมอยู่ ไม่กว้างแบบคลาสสิก ไม่เร็วแบบป็อป' },
    { attr: 'ความเร็ว', val: 'กลางๆ ประมาณ 5–5.5 Hz' },
    { attr: 'ความลึก', val: 'ตื้น เพี้ยนจากโน้ตไม่เกิน ±30 cents' },
    { attr: 'จุดเริ่ม', val: 'เข้าช้า ร้องตรงก่อนแล้วค่อยม้วนเข้า vibrato ช่วงท้ายโน้ต' },
    { attr: 'บุคลิกเสียง', val: 'นิ่งแต่ยังมีชีวิต ไม่โชว์เทคนิค' },
  ],
  resonanceRegister: [
    { attr: 'เสียงก้องหลัก', val: 'ใช้ mixed voice เป็นหลัก ไม่ใช่ chest เต็มและไม่ใช่ head ล้วน' },
    { attr: 'Chest Voice', val: 'อบอุ่นและสว่างเล็กน้อย ไม่ทึบแบบโอเปร่า ไม่ขึ้นจมูก' },
    { attr: 'Head Voice / Falsetto', val: 'เบาและโปร่ง ตั้งใจแยกจาก chest ให้ชัด ไม่กลืนกันตลอด' },
    { attr: 'ช่วง Passaggio', val: 'ราว E4–G4 ต่อได้เนียน มีเสียงบางลงเล็กน้อยแบบที่ยอมรับได้' },
    { attr: 'รอยต่อช่วงเสียง', val: 'ไม่กลบตลอด บางครั้งพลิกไป falsetto อย่างตั้งใจเพื่อเพิ่มผิวเสียง' },
    { attr: 'เสียงขึ้นจมูก', val: 'น้อย วางเสียงไปข้างหน้า ใช้โพรงจมูกน้อย' },
  ],
  onsetArticulation: [
    { attr: 'การเข้าเสียงปกติ', val: 'นุ่ม กึ่งใช้เส้นเสียง เริ่มเนียน ไม่ตัดเข้าแรง' },
    { attr: 'การเข้าเสียงตอนเน้น', val: 'กระแทกเส้นเสียงเฉพาะคำที่เลือก เพื่อเน้นหรือให้จังหวะกระชาก' },
    { attr: 'แนวโน้มสระ', val: 'ดันไปข้างหน้า /a/ และ /e/ เปิดชัด ไม่กลืน' },
    { attr: 'สไตล์พยัญชนะ', val: 'ชัดแต่นุ่ม ไม่ออกเสียงเกินจริงแบบละครเพลง' },
    { attr: 'สำเนียงติดตัว', val: 'สำเนียงไทยเพิ่ม vowel widening เล็กน้อยในภาษาอังกฤษ — /ɛ/ กว้างกว่ามาตรฐาน' },
  ],
  dynamicSustain: [
    { attr: 'ช่วงความดัง', val: 'กลางๆ ถนัดช่วง mp ถึง mf ไม่ใช่สายอัดพลัง' },
    { attr: 'ช่วงเบา', val: 'มีลมผสมและใกล้ชิด ลดแรงพยุงลง ให้ความรู้สึกลอย' },
    { attr: 'ช่วงดัง', val: 'เพิ่มความคมและความสว่าง ดันเสียงออกโดยไม่ตะโกน' },
    { attr: 'การลากเสียง', val: 'ลากตรงก่อน แล้วดันขึ้นเบาๆ ปิดด้วย vibrato หรือค่อยๆ จางท้ายวลี' },
    { attr: 'ท้ายวลี', val: 'เลือกค่อยๆ เบาลง ไม่ตัดจบแรง' },
  ],
  danceTimingWeight: [
    { attr: 'จังหวะลงท่า', val: 'ช้ากว่าบีตเล็กน้อย อยู่ใน pocket ให้ความรู้สึกหนักแน่น' },
    { attr: 'การตอบบีต', val: 'ลงหนักที่ downbeat ส่วน upbeat ใช้ขยับเล็กๆ หรือค้างไว้' },
    { attr: 'น้ำหนักตัว', val: 'กลางไปทางเบา ไม่หนักแบบ B-boy ไม่ลอยแบบ waacking' },
    { attr: 'จุดศูนย์ถ่วง', val: 'ต่ำกว่ากลางเล็กน้อย ย่อต่ำกว่าค่าเฉลี่ยเพื่อความมั่นคง' },
    { attr: 'ติดพื้นหรือลอย', val: 'ท่อนล่างติดพื้นแน่น ท่อนบนปล่อยลอยได้อิสระ' },
  ],
  danceSpatial: [
    { attr: 'การใช้พื้นที่', val: 'น้อยถึงปานกลาง เน้นคุมท่าอยู่กับที่มากกว่าเคลื่อนไปทั่วเวที' },
    { attr: 'การเปลี่ยนระดับ', val: 'ใช้เป็นเครื่องหมายวรรคตอน ไม่บ่อยแต่ได้ผลแรงเวลาใช้' },
    { attr: 'ช่วงแนวตั้ง', val: 'อยู่ระดับกลางเป็นหลัก ระดับต่ำใช้เน้น ระดับสูงใช้น้อย' },
    { attr: 'การเปลี่ยนท่า', val: 'ตัดคมกว่าไหลต่อ รีเซ็ตท่าระหว่างวลี' },
    { attr: 'การกลับเข้าท่า', val: 'กลับมาที่ท่ากลาง ไม่ค้างท่าไว้นาน' },
  ],
  danceMusicality: [
    { elem: 'Kick / Snare', resp: 'body pop หรือลงท่าแบบหยุดเป็นเฟรม' },
    { elem: 'เส้นเบส', resp: 'ก้าวตาม groove หรือทำ waving ตามเส้นทำนองของเบส' },
    { elem: 'ช่วงเงียบ / เบรก', resp: 'หยุดนิ่งทั้งตัว หรือทำ isolation ช้าๆ ใช้ความเงียบสร้างดราม่า' },
    { elem: 'ทำนอง', resp: 'ไม่เต้นตามตรงๆ ใช้เป็นฉากหลังให้ freestyle' },
    { elem: 'ช่วงไล่ขึ้น', resp: 'ทำ isolation ช้าๆ สะสมความอึด แล้วระเบิดที่ drop' },
  ],
  dancePerformanceCtx: [
    { ctx: 'เต้นเดี่ยว', val: 'เน้นคอนเซปต์และการทดลอง ใช้พื้นที่น้อยแต่รายละเอียดร่างกายเยอะ' },
    { ctx: 'เต้นพร้อมกลุ่ม', val: 'ปรับจังหวะตามกลุ่ม กลืนไปก่อน แล้วค่อยเด่นในช่วงเดี่ยว' },
    { ctx: 'จังหวะที่เข้าทางที่สุด', val: '85–110 BPM ช้าพอให้เห็น isolation เร็วพอให้มี groove' },
    { ctx: 'สีหน้าตอนแสดง', val: 'นิ่งไปจนถึงจริงจัง ตามน้ำหนักของท่า ไม่เล่นเกิน' },
    { ctx: 'freestyle เทียบท่าที่จัดไว้', val: 'freestyle โชว์ตัวตนได้มากกว่า ท่าที่จัดไว้บางทีดูเซฟไป' },
  ],
  physicalBaseline: [
    { attr: 'ส่วนสูง', val: '181 cm' },
    { attr: 'รูปร่าง', val: 'นักกีฬา ผอมแต่มีกล้ามที่ใช้งานได้ เห็นพัฒนาการชัดตั้งแต่ยุค LIKE I DO ถึง PULSE' },
    { attr: 'หน้าตา', val: 'กรามคม ตาผ่อนคลาย หน้านิ่งของเขาอ่านว่ากำลังคิด ไม่ใช่เย็นชา' },
    { attr: 'สีหน้าปกติ', val: 'นิ่งไปจนถึงจริงจัง ไม่ยิ้มง่าย แต่พอยิ้มแล้วละลายคน' },
    { attr: 'หน้ากล้องเทียบหลังกล้อง', val: 'หน้ากล้องดูสำรวมกว่า หลังกล้องเห็นด้านซนของเขา' },
  ],
  personalityBaseline: [
    { trait: 'นิสัยหลัก', val: 'เสพติดงาน รับงานพร้อมกันเกินตัว รู้ตัวตั้งแต่ปี 2023 และแก้ด้วยการพบนักบำบัด' },
    { trait: 'เก็บตัวหรือเข้าสังคม', val: 'อยู่กลางๆ ชาร์จพลังตอนอยู่คนเดียวด้วยการทำอาหารกับทำความสะอาด แต่เวลาขึ้นเวทีเปิดเต็มที่' },
    { trait: 'เวลาโดนกดดัน', val: 'ถอยก่อนแล้วไปทุ่มกับงานหนักขึ้น ไม่แสดงอารมณ์ต่อสาธารณะ' },
    { trait: 'วิธีพูด', val: 'ระวังคำ ระมัดระวังในบทสัมภาษณ์ แต่พูดตรงเวลาถูกจี้ ไม่เลี่ยงด้วยการตอบกำกวม' },
    { trait: 'อารมณ์ขัน', val: 'แห้งและไม่โฉ่งฉ่าง แทบไม่เล่นมุก แต่พอเล่นแล้วเข้าเป้า' },
    { trait: 'ความสม่ำเสมอ', val: 'สิ่งที่พูดต่อสาธารณะตรงกับวิธีใช้ชีวิตจริง ตั้งแต่เรื่องการเดินทางไปจนถึงการเคลื่อนไหวทางสังคม' },
    { trait: 'ชีวิตในบ้าน', val: 'อยู่คนเดียว ทำอาหารและทำความสะอาดเอง ไม่มีทีมงานมาดูแลชีวิตประจำวัน' },
  ],
  stagePersona: [
    { ctx: 'การแสดงสด', val: 'คุมอยู่และเป๊ะ พลังสูงแต่ไม่วุ่น อ่านออกว่าเป็นมืออาชีพมากกว่าเล่นสด' },
    { ctx: 'การรับมือแฟน', val: 'อบอุ่นแต่ไม่ตีสนิทเกินไป ยิ้มจริง ตอบจริง ไม่ฝืนเอาใจแฟน' },
    { ctx: 'รายการวาไรตี้', val: 'เงียบกว่าเพื่อนร่วมวง มักถูกแกล้งว่าตอบสนองช้า แต่พอสวนกลับแล้วหนัก' },
    { ctx: 'ตอนให้สัมภาษณ์', val: 'สบายใจกับคำถามจริงจัง รับมือเรื่องลึกได้ดีกว่าคำถามเบาๆ' },
    { ctx: 'โซเชียลมีเดีย', val: 'คุยกับแฟนต่อเนื่องผ่าน Weverse เน้นเรื่องส่วนตัวมากกว่าโปรโมตงาน' },
    { ctx: 'นโยบายอีเวนต์แฟน', val: 'เลิก fan sign แบบซื้ออัลบั้มหลังออกจาก SM เปลี่ยนไปใช้ Weverse — บอกว่าไม่รู้ภาระค่าใช้จ่ายที่ตกกับแฟน' },
  ],
  industryPositioning: [
    { attr: 'บทบาทในวง', val: 'main vocal บวกแถวหน้าของไลน์เต้น และเป็นเซ็นเตอร์โดยพฤตินัยในช่วงโชว์เดี่ยว' },
    { attr: 'ตำแหน่งงานเดี่ยว', val: 'อยู่ระดับศิลปิน ไม่ใช่ไอดอลสายบันเทิงล้วน เครดิตงานสร้างสรรค์ชัดและเพิ่มขึ้นเรื่อยๆ' },
    { attr: 'กลุ่มคนฟัง', val: 'ข้ามกลุ่ม ทั้งฐาน K-pop คนฟัง R&B กับโซล และคนดู MCU ทั่วไป' },
    { attr: 'ชื่อเสียงในวงการ', val: 'คนนับถือเรื่องความทุ่มเทและความละเอียด ไม่ใช่คนที่สนุกที่สุด แต่เป็นคนที่ใครก็อยากร่วมงาน' },
    { attr: 'ความสัมพันธ์กับค่าย', val: 'เป็นอิสระตั้งแต่ตั้ง JH Company ปี 2023 และกลับไปร่วม NCT 127 ในฐานะ external artist ปี 2024 (ร่วมเต็มตัวในงานครบรอบ 10 ปี ปี 2026)' },
  ],
  radarSkills: [
    { name: 'การคุมเสียง', james: 9.5, idol: 7.5, global: 4.0, note: 'ลมหายใจ ความดังเบา ความแม่น' },
    { name: 'Falsetto', james: 8.5, idol: 7.0, global: 3.5, note: 'เสียงนุ่มโปร่งขึ้นถึง E5' },
    { name: 'จังหวะและ groove', james: 9.5, idol: 7.0, global: 3.5, note: 'การวางคำและจังหวะระดับ MJ' },
    { name: 'ความเป๊ะในการเต้น', james: 9.0, idol: 7.5, global: 2.5, note: 'isolation, glitch, stop-time' },
    { name: 'ความหลากหลาย', james: 8.0, idol: 6.5, global: 3.0, note: 'ไล่จากนุ่มไปใช้เสียงเป็นเครื่องเคาะได้ในเทคเดียว' },
    { name: 'การอ่านดนตรี', james: 9.0, idol: 6.0, global: 2.5, note: 'สัญชาตญาณด้านโปรดักชันและการเรียบเรียง' },
    { name: 'พลังบนเวที', james: 8.5, idol: 7.5, global: 4.0, note: 'เล่นกับคอนเซปต์และเน้นอารมณ์เฉพาะจุด' },
    { name: 'ความลึกของเทคนิค', james: 9.0, idol: 7.0, global: 2.5, note: 'มีพื้นหลายสไตล์' },
  ],
};

export const canon = { en, th };
export function getCanon(lang: Lang) {
  return canon[lang];
}
