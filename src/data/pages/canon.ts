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
    label: 'Reference',
    title: 'Artist Canon',
    subtitle: 'โปรไฟล์เสียงร้อง · สไตล์การเต้น · Production DNA · เครือข่ายเพื่อน',
    vocalHeading: 'Vocal Profile',
    keyFeaturesLabel: 'Key Features',
    styleAdjustLabel: 'Vocal Style Adjustments',
    rangeComparisonLabel: 'Vocal Range Comparison',
    rangeComparisonIntro: 'เทียบ chest voice · falsetto · power core กับ K-male idol และนักร้องชายทั่วโลก',
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
    vsContemporariesLabel: 'vs. เพื่อนร่วมรุ่น NCT 127',
    compareHeaderAspect: 'ด้าน',
    timingWeightLabel: 'Timing & Weight',
    spatialTransitionLabel: 'Spatial & Transition',
    timingDiagramHeading: 'Hit Timing — Pocket Position',
    musicalityMappingLabel: 'Musicality Mapping',
    performanceContextLabel: 'Performance Context',
    skillRadarHeading: 'Skill Radar',
    skillRadarIntro: 'ภาพรวม skill ของ James Hwang — scores จาก vocal profile, dance style, และ production DNA',
    skillBreakdownHeading: 'Skill Breakdown',
    skillBreakdownIntro: 'แต่ละ skill หลักแตกออกเป็น sub-skill ย่อย',
    artistProfileHeading: 'Artist Profile',
    physicalBaselineLabel: 'Physical Baseline',
    industryPositioningLabel: 'Industry Positioning',
    personalityRadarLabel: 'Personality Radar — vs K-Idol Average',
    personalityNote1:
      'Work Ethic และ Consistency สูงผิดปกติแม้แต่ในกลุ่ม idol — สะท้อนทั้งใน career trajectory และ lifestyle ส่วนตัว',
    personalityNote2:
      'Expressiveness ต่ำกว่า idol average อย่างเด่นชัด — สอดคล้องกับ variety persona ที่เงียบและ measured communication style',
    personalityBaselineLabel: 'Personality Baseline',
    stagePersonaLabel: 'Stage & Public Persona',
    friendsHeading: 'Friends & Network',
    sopaLabel: 'SOPA Classmates (Graduated 2017)',
    liner98Label: '98-Liner Friends',
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
    { feat: 'Falsetto', desc: 'นุ่มเบา — ค่อยๆ พัฒนา breathy airiness' },
    { feat: 'Tone', desc: 'นุ่มและ polished พร้อม texture เพิ่ม ไม่ clean จนเกินไป' },
    { feat: 'Control', desc: 'Breath control ยอดเยี่ยม + rhythmic timing play ที่มากขึ้น' },
    { feat: 'Mid-range', desc: 'Power core G3–E4 เสริมด้วย groove และ accent' },
    { feat: 'Versatility', desc: 'Soft → rhythmic → percussive vocal ในการแสดงเดียว' },
  ],
  vocalTechniques: [
    { tech: 'Rhythmic Phrasing', desc: 'วางเนื้อร้องแบบ groove-based — ไม่ยึดติด melody grid' },
    { tech: 'Vocal Accents', desc: 'Percussive articulation สั้นๆ: "uh", "ha", "tch"' },
    { tech: 'Controlled Breathiness', desc: 'Airflow texture ที่ตั้งใจ — ให้ความรู้สึก sexy/floating' },
    { tech: 'Push-Pull Timing', desc: 'Micro timing delay/advance — เหมือนเต้นไปกับจังหวะ' },
    { tech: 'Emotional Sharpness', desc: 'Projection แบบเลือกจุดบนคำเฉพาะ แทนที่จะ soft สม่ำเสมอ' },
  ],
  vocalRefs: [
    { artist: 'Michael Jackson', area: 'Rhythmic phrasing · vocal accents · breath control' },
    { artist: 'Baekhyun', area: 'Control + falsetto technique' },
    { artist: 'Dean', area: 'R&B phrasing + groove' },
    { artist: 'Crush', area: 'Tone warmth + musicality' },
  ],
  productionDNA: [
    { elem: 'Core Genre', desc: 'Pop & R&B — เข้าถึงง่ายแต่ production quality สูง' },
    { elem: 'Rhythm Design', desc: 'จังหวะ smooth พร้อม melodic layering ที่ rich' },
    { elem: 'Arrangement', desc: 'Groove-centric — rhythm section (drums/bass) เป็นตัวขับเคลื่อน' },
    { elem: 'Drum Philosophy', desc: 'MJ-inspired: กลอง funk-pop ที่ bouncy, defined, isolated' },
    { elem: 'Bass Role', desc: 'Composition แบบ bass-driven — bassline เป็น secondary hook' },
    { elem: 'Structure', desc: 'Call-and-response: main vocal ↔ ad-lib/chorus' },
    { elem: 'Layering', desc: 'Minimal แต่ impactful — เลือกเพื่อความคมและจดจำง่าย' },
    { elem: 'Percussive Vocal', desc: 'Breath / hit / ad-lib ใช้เป็น rhythmic instrument' },
  ],
  productionRefs: [
    { producer: 'Michael Jackson', area: 'Groove · rhythm design · vocal-driven production' },
    { producer: 'Quincy Jones', area: 'Arrangement balancing groove + musicality' },
    { producer: 'Teddy Riley', area: 'Rhythm + swing + R&B fusion' },
  ],
  danceStyle: [
    { cat: 'สไตล์หลัก', val: 'Animation / Robot / Popping / Waving' },
    { cat: 'สไตล์รอง', val: 'Lite Breaking + Tricking (จังหวะ impact)' },
    { cat: 'โหมด Freestyle', val: 'Conceptual / Musical precision' },
    { cat: 'Signature Control', val: 'Micro-isolation + glitch/stop-time + delayed hit' },
    { cat: 'Footwork', val: 'เทคนิค glide / slide / pivot ที่ clean' },
    { cat: 'จุดแข็งหลัก', val: 'Body control + illusion movement + footwork คม' },
    { cat: 'ข้อจำกัด', val: 'ไม่เน้น power-move หรือ battle-dance หนักๆ' },
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
    { attr: 'การใช้งาน', val: 'Selective — ใช้เฉพาะ note ยาวที่ต้องการ emotional weight' },
    { attr: 'ประเภท', val: 'Narrow & controlled — ไม่กว้างแบบ classical ไม่เร็วแบบ pop' },
    { attr: 'ความเร็ว', val: 'Moderate — ประมาณ 5–5.5 Hz' },
    { attr: 'ความลึก', val: 'Shallow — pitch deviation ≤ ±30 cents' },
    { attr: 'จุดเริ่ม', val: 'Delayed — เริ่มตรงแล้วค่อย roll เข้า vibrato ช่วงท้าย note' },
    { attr: 'บุคลิกเสียง', val: '"Still but alive" — ไม่ technique-forward' },
  ],
  resonanceRegister: [
    { attr: 'Resonance หลัก', val: 'Mixed voice เป็นหลัก — ไม่ full chest ไม่ pure head' },
    { attr: 'Chest Voice', val: 'Warm + สว่างเล็กน้อย — ไม่ dark/operatic ไม่ nasal' },
    { attr: 'Head Voice / Falsetto', val: 'Light, airy — ตั้งใจแยกจาก chest ชัดเจน ไม่ blend ตลอด' },
    { attr: 'Passaggio Zone', val: 'ประมาณ E4–G4 — smooth มี thinning เล็กน้อยที่ยอมรับได้' },
    { attr: 'Register Break', val: 'ไม่ปิดบังตลอด — flip ไป falsetto อย่างตั้งใจเพื่อ texture' },
    { attr: 'Nasal Quality', val: 'Low — placement ไปข้างหน้า nasal cavity engagement น้อย' },
  ],
  onsetArticulation: [
    { attr: 'Onset ปกติ', val: 'Soft / semi-glottal — เริ่ม smooth ไม่ hard-cut' },
    { attr: 'Onset เน้นเสียง', val: 'Hard glottal บนคำที่เลือกเพื่อเน้นหรือ rhythmic punch' },
    { attr: 'แนวโน้มสระ', val: 'Forward — /a/ และ /e/ เปิดชัดเจน ไม่กลืนเสียง' },
    { attr: 'สไตล์พยัญชนะ', val: 'ชัดแต่นุ่ม — ไม่ overpronounce แบบ musical theatre' },
    { attr: 'สำเนียงติดตัว', val: 'สำเนียงไทยเพิ่ม vowel widening เล็กน้อยในภาษาอังกฤษ — /ɛ/ กว้างกว่ามาตรฐาน' },
  ],
  dynamicSustain: [
    { attr: 'Dynamic Range', val: 'Moderate — สบายตัวที่ mp ถึง mf ไม่ใช่นักร้องสาย power-heavy' },
    { attr: 'ช่วงเบา', val: 'Breathy + intimate — support ลดลง ให้ความรู้สึก floating' },
    { attr: 'ช่วงดัง', val: 'เพิ่ม edge และความสว่าง — projection โดยไม่ตะโกน' },
    { attr: 'คุณภาพ Sustain', val: 'Hold ตรง → swell เบาๆ → vibrato หรือ fade ท้ายวลี' },
    { attr: 'ท้ายวลี', val: 'เลือก diminuendo — ค่อยๆ เบาลง ไม่ตัดหนัก' },
  ],
  danceTimingWeight: [
    { attr: 'Hit Timing', val: 'ช้ากว่า beat เล็กน้อย (pocket) — ให้ความรู้สึกหนักแน่น' },
    { attr: 'การตอบสนอง Beat', val: 'หนักที่ downbeat; upbeat ใช้ micro-movement หรือ hold' },
    { attr: 'น้ำหนักตัว', val: 'Medium-light — ไม่หนักแบบ B-boy ไม่ลอยแบบ waacking' },
    { attr: 'จุดศูนย์ถ่วง', val: 'Mid-low — stance ต่ำกว่าค่าเฉลี่ยเล็กน้อยเพื่อความมั่นคง' },
    { attr: 'Grounded vs Float', val: 'ฐานล่าง grounded; ช่วงบนลอยได้อิสระ' },
  ],
  danceSpatial: [
    { attr: 'การใช้พื้นที่', val: 'Minimal-to-moderate — เน้น in-place control มากกว่า traveling' },
    { attr: 'การเปลี่ยนระดับ', val: 'ใช้เป็น punctuation — ไม่บ่อยแต่ impact สูงเมื่อใช้' },
    { attr: 'ช่วงแนวตั้ง', val: 'ส่วนใหญ่ mid-level — low เป็น accent, high น้อยครั้ง' },
    { attr: 'สไตล์ Transition', val: 'Sharp cut มากกว่า flow — reset ระหว่างวลี' },
    { attr: 'สไตล์ Recovery', val: 'กลับสู่ body ที่ neutral — ไม่ hold pose นาน' },
  ],
  danceMusicality: [
    { elem: 'Kick / Snare', resp: 'Body pop หรือ stop-motion hit' },
    { elem: 'Bass Line', resp: 'Groove step หรือ waving ตาม bass melodic contour' },
    { elem: 'Silence / Break', resp: 'Full stop หรือ slow isolation — ใช้ silence เป็น dramatic tool' },
    { elem: 'Melody', resp: 'ไม่ tracked ตรงๆ — ใช้เป็น backdrop สำหรับ freestyle phrasing' },
    { elem: 'Build-up', resp: 'Slow isolation สร้าง tension → ระเบิดที่ drop' },
  ],
  dancePerformanceCtx: [
    { ctx: 'Solo', val: 'Conceptual + experimental — พื้นที่น้อยแต่ body detail เยอะ' },
    { ctx: 'Group Sync', val: 'ปรับตาม timing กลุ่ม — blend ก่อน โดดเด่นในช่วง solo' },
    { ctx: 'Tempo Sweet Spot', val: '85–110 BPM — ช้าพอให้ isolation อ่านออก เร็วพอให้มี groove' },
    { ctx: 'Performance Face', val: 'Neutral-to-focused — ตรงกับ dynamic ของท่า ไม่ overact' },
    { ctx: 'Freestyle vs Choreo', val: 'Freestyle โชว์ personality มากกว่า — choreography อาจดู safe' },
  ],
  physicalBaseline: [
    { attr: 'ส่วนสูง', val: '181 cm' },
    { attr: 'รูปร่าง', val: 'Athletic — lean + functional muscle; เห็นพัฒนาการชัดตั้งแต่ยุค LIKE I DO → PULSE' },
    { attr: 'หน้าตา', val: 'Jaw เข้ม + ตาผ่อนคลาย — resting face อ่านว่า "นิ่งแล้วคิด" ไม่ใช่เย็นชา' },
    { attr: 'สีหน้าปกติ', val: 'Neutral-to-focused — ไม่ยิ้มง่ายๆ แต่ disarming เมื่อยิ้ม' },
    { attr: 'On-camera vs Off', val: 'On-camera ดู composed กว่า; behind-the-scenes เห็นพลัง playful' },
  ],
  personalityBaseline: [
    { trait: 'รูปแบบหลัก', val: 'Workaholic — overcommit กับหลายโปรเจ็กต์; รับรู้ตัวเองตั้งแต่ 2023 แก้ผ่าน therapy' },
    { trait: 'Introvert / Extrovert', val: 'Ambivert — ชาร์จพลังคนเดียว (ทำอาหาร ทำความสะอาด) แต่ perform แบบ extrovert' },
    { trait: 'ภายใต้ความกดดัน', val: 'Withdraw ก่อนแล้วทำงานหนักขึ้น — ไม่แสดงอารมณ์ต่อสาธารณะ' },
    { trait: 'สไตล์การสื่อสาร', val: 'Measured — ระวังตัวในสัมภาษณ์ ตรงไปตรงมาเมื่อถูกกดดัน ไม่หลบด้วยความคลุมเครือ' },
    { trait: 'ประเภทอารมณ์ขัน', val: 'Dry + understated — แทบไม่เล่นมุกตลก แต่โดนเมื่อเล่น' },
    { trait: 'ความสม่ำเสมอ', val: 'ค่านิยมสาธารณะตรงกับพฤติกรรมส่วนตัว — การเดินทาง lifestyle activism ไปด้วยกัน' },
    { trait: 'ความเรียบง่ายในบ้าน', val: 'อยู่คนเดียว ทำอาหารและทำความสะอาดเอง ไม่มี staff ส่วนตัวสำหรับชีวิตประจำวัน' },
  ],
  stagePersona: [
    { ctx: 'การแสดงสด', val: 'Controlled + precise — พลังงานสูงแต่ไม่วุ่นวาย อ่านว่า professional มากกว่า spontaneous' },
    { ctx: 'ปฏิสัมพันธ์กับแฟน', val: 'อบอุ่นแต่ไม่ over-familiar — ยิ้มจริง ตอบสนองจริง ไม่ fan service แบบฝืน' },
    { ctx: 'Variety / MC', val: 'เงียบกว่าเพื่อนร่วมวง — มักถูกแกล้งเบาๆ เรื่อง reaction ช้า แต่ comeback หนักมาก' },
    { ctx: 'โหมดสัมภาษณ์', val: 'สบายใจกับคำถามจริงจัง — รับมือกับความลึกได้ดีกว่าคำถามเบาๆ' },
    { ctx: 'โซเชียลมีเดีย', val: 'ติดต่อต่อเนื่องผ่าน Weverse — เน้นส่วนตัวมากกว่าโปรโมท' },
    { ctx: 'นโยบายอีเวนต์แฟน', val: 'เลิก fan sign แบบซื้ออัลบั้มหลังออกจาก SM เปลี่ยนไปใช้ Weverse — บอกว่าไม่รู้ภาระค่าใช้จ่ายที่ตกกับแฟน' },
  ],
  industryPositioning: [
    { attr: 'บทบาทในวง', val: 'Vocal line (main) + Dance line (top tier) + de facto center ในช่วง solo showcase' },
    { attr: 'ตำแหน่งงานเดี่ยว', val: 'ระดับ Artist — ไม่ใช่ entertainer idol ล้วนๆ; creative credit ชัดเจนและเพิ่มขึ้นเรื่อยๆ' },
    { attr: 'กลุ่มเป้าหมายตลาด', val: 'Crossover — ฐาน K-pop + คนฟัง R&B/soul + ผู้ชม MCU ทั่วไป' },
    { attr: 'ชื่อเสียงในวงการ', val: 'ได้รับความเคารพเรื่อง work ethic และความละเอียด — ไม่ใช่คนสนุกสนานที่สุด แต่เป็นที่ต้องการในฐานะ collaborator' },
    { attr: 'ความสัมพันธ์กับค่าย', val: 'อิสระ (JH Company, 2023) — กลับมาที่ NCT 127 ในฐานะ external artist ปี 2024 (ร่วมเต็มตัวในงานครบรอบ 10 ปี ปี 2026)' },
  ],
  radarSkills: [
    { name: 'Vocal Control', james: 9.5, idol: 7.5, global: 4.0, note: 'Breath, dynamics, precision' },
    { name: 'Falsetto', james: 8.5, idol: 7.0, global: 3.5, note: 'Tone นุ่มโปร่งถึง E5' },
    { name: 'Rhythm / Groove', james: 9.5, idol: 7.0, global: 3.5, note: 'Phrasing & timing ระดับ MJ' },
    { name: 'Dance Precision', james: 9.0, idol: 7.5, global: 2.5, note: 'Isolation, glitch, stop-time' },
    { name: 'Versatility', james: 8.0, idol: 6.5, global: 3.0, note: 'Soft → percussive ในเทคเดียว' },
    { name: 'Musicality', james: 9.0, idol: 6.0, global: 2.5, note: 'สัญชาตญาณ production + arrangement' },
    { name: 'Stage Presence', james: 8.5, idol: 7.5, global: 4.0, note: 'Conceptual + emotional sharpness' },
    { name: 'Technique Depth', james: 9.0, idol: 7.0, global: 2.5, note: 'พื้นฐาน multi-style' },
  ],
};

export const canon = { en, th };
export function getCanon(lang: Lang) {
  return canon[lang];
}
