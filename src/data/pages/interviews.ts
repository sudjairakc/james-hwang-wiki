// Bilingual content for the Interviews & Quotes page.
// Shape: { en, th } with identical keys.
// Direct quotes (theme quotes + interview notable quotes) are kept verbatim in
// their original language in BOTH en and th — only surrounding narrative
// (theme labels, topic labels, interview context) is translated.
// Non-translatable values (hex colors, years, outlet/platform/type proper nouns)
// are kept identical across both languages on purpose.

import type { Lang } from '../../i18n';

const en = {
  ui: {
    label: 'Biography',
    title: 'Interviews & Quotes',
    subtitle: 'Notable press moments · Signature quotes by theme · 2022–present',
    signatureQuotesHeading: 'Signature Quotes',
    keyInterviewsHeading: 'Key Interviews',
  },
  related: [
    { label: 'Biography', slug: 'biography' },
    { label: 'Personal Life', slug: 'personal-life' },
    { label: 'Public Image', slug: 'public-image' },
    { label: 'Cultural Impact', slug: 'cultural-impact' },
  ],
  themes: [
    {
      theme: 'On Identity & Origin',
      color: '#c9a84c',
      quotes: [
        {
          quote: "I grew up between two cities that don't know each other very well. Bangkok and Seoul are both in Asia but they're different planets. I think that's why I can move between worlds — I've been doing it since I was six.",
          source: 'You Quiz on the Block', year: '2022',
        },
        {
          quote: "People ask which culture I belong to. I've stopped trying to answer that cleanly. I belong to the music. The music doesn't care where I'm from.",
          source: 'Rolling Stone US', year: '2023',
        },
        {
          quote: "My mother gave me poetry. My father gave me business. I think I turned both of those into a career.",
          source: 'Esquire Korea', year: '2026',
        },
      ],
    },
    {
      theme: 'On Leaving SM & Independence',
      color: '#5a7c6a',
      quotes: [
        {
          quote: "I wasn't angry when I left. I was relieved. The anger came earlier — the relief came the moment I signed the settlement. I remember thinking: now I can make the record I've been hearing in my head for three years.",
          source: 'GQ Korea', year: '2023',
        },
        {
          quote: "The hardest part wasn't the legal process. It was watching people I respected choose the institution over the person. That takes longer to process.",
          source: 'GQ Korea', year: '2023',
        },
        {
          quote: "Ownership isn't just about money. When you own your masters, you own the relationship between your music and your audience. Nobody can alter that without your permission.",
          source: 'Pitchfork', year: '2024',
        },
      ],
    },
    {
      theme: 'On Music & Craft',
      color: '#9b7fc8',
      quotes: [
        {
          quote: "A song that only works in one language is a song that's still afraid of itself.",
          source: 'The Late Show with Stephen Colbert', year: '2023',
        },
        {
          quote: "I produce because I don't trust anyone else to understand what a song needs at 3am. That's not arrogance — that's just what producing is.",
          source: 'Rolling Stone US', year: '2023',
        },
        {
          quote: "ARE U STILL is the first album I made where I stopped trying to explain myself. I just made it. If you hear it, you hear it.",
          source: 'Pitchfork', year: '2024',
        },
        {
          quote: "Pharrell told me something I think about a lot: 'The song already exists. You're just the one digging.' I don't know if that's true, but it makes the bad days easier.",
          source: 'Allure US', year: '2025',
        },
      ],
    },
    {
      theme: 'On Peace & Politics',
      color: '#5a7aaa',
      quotes: [
        {
          quote: "I understand why people want their country to win. I just think winning a war isn't the same thing as winning.",
          source: 'X (Twitter)', year: '2025',
        },
        {
          quote: "There's a version of silence that's neutral. And there's a version that's complicit. I can't always tell them apart. But when I'm sure, I say something.",
          source: 'Knowing Bros', year: '2025',
        },
        {
          quote: "I've been told I'm not Thai enough to speak for Thailand, and not Korean enough to speak for Korea. That used to bother me. Now I think: I speak for myself. That's the only thing I was ever qualified to do.",
          source: 'Esquire Korea', year: '2026',
        },
      ],
    },
    {
      theme: 'On the Stage & Performance',
      color: '#c06080',
      quotes: [
        {
          quote: "The black-and-white staging on PULSE — people thought it was minimalism. It was actually maximum. Everything you see, you see completely. There's nowhere to hide. That's the point.",
          source: 'The Guardian', year: '2024',
        },
        {
          quote: "I've been dancing since before I could sing properly. Movement is the first language. Lyrics are a translation.",
          source: 'SNL backstage press', year: '2024',
        },
        {
          quote: "DECADE Tour is the first time I designed a show that I would want to watch. Every other tour I designed for other people. This one I designed for the version of me who was seventeen at SOPA wondering if any of this was going to work.",
          source: 'The New York Times', year: '2027',
        },
      ],
    },
    {
      theme: 'On James Hwang vs. GONUNMA',
      color: '#6e5a7c',
      quotes: [
        {
          quote: "GONUNMA was always me. It's just a version of me that Korea named first. James Hwang is the name I was born with. At some point it made sense to let the world call me by my name.",
          source: 'Allure US', year: '2025',
        },
        {
          quote: "When people in the US ask me who GONUNMA is, I say: he's the producer. He's in the credits. He doesn't do press.",
          source: 'Jimmy Fallon', year: '2025',
        },
      ],
    },
  ],
  interviews: [
    {
      year: '2022',
      outlet: 'You Quiz on the Block',
      platform: 'tvN',
      type: 'TV',
      color: '#9b7fc8',
      context: 'First major Korean variety appearance as solo artist. Discussed the SOFTEST TOUCH debut, the King of Mask Singer origin of GONUNMA, early life in Bangkok, and housework as a decompression routine.',
      notable: [
        { topic: 'On Bangkok childhood', quote: "Bangkok was where I learned to be patient. Seoul was where I learned to be fast. I still use both." },
        { topic: 'On cleaning as routine', quote: "After every tour I clean my own apartment. From floor to ceiling. People think that's strange. I think coming home to a clean place you made clean is one of the better feelings in the world." },
        { topic: 'On the Mask Singer origin', quote: "고눈마 was given to me by the audience. I didn't choose it. That's why I kept it. The things other people see in you first are usually the most honest." },
      ],
    },
    {
      year: '2022',
      outlet: 'The Tonight Show Starring Jimmy Fallon',
      platform: 'NBC',
      type: 'TV',
      color: '#9b7fc8',
      context: 'US late-night debut, timed to the 94th Academy Awards performance with Anderson .Paak. First time James spoke at length to a US general audience about his dual career.',
      notable: [
        { topic: 'On the Oscars performance', quote: "Anderson called me two days before and said 'trust me, acoustic.' I didn't argue. I should never argue with Anderson .Paak about anything." },
        { topic: 'On being in K-pop and Hollywood', quote: "I've spent a lot of my life being two things at once. I've stopped trying to separate them." },
      ],
    },
    {
      year: '2023',
      outlet: 'GQ Korea',
      platform: 'Print',
      type: 'Magazine',
      color: '#5a7c6a',
      context: 'First major long-form interview post-SM departure. Cover story for the August issue. Most cited interview of 2023 by Korean media — discussed the dispute, independence, and what JH Company is for.',
      notable: [
        { topic: 'On why he filed', quote: "I didn't file because I was unhappy. I filed because I could see exactly how the next five years would go if I didn't. I wasn't going to let someone else write that part of my life." },
        { topic: 'On the recordings', quote: "I kept those recordings for two years before I did anything with them. I wasn't saving them as a weapon. I was saving them so I could remember, accurately, what happened." },
        { topic: 'On founding JH Company', quote: "A label is just infrastructure. What I was really building was a room where the answer to 'why not?' is always 'let's find out.'" },
      ],
    },
    {
      year: '2023',
      outlet: 'Rolling Stone US',
      platform: 'Print',
      type: 'Magazine',
      color: '#5a7c6a',
      context: 'First major US magazine profile. Published November 2023. Covered the Grammy trajectory, R&B crossover positioning, and the creative approach behind PULSE.',
      notable: [
        { topic: 'On the Grammy ambition', quote: "I don't need the Grammy to know the album is good. I want it because I want the conversation it starts. A Grammy makes people listen to things they wouldn't otherwise touch." },
        { topic: 'On making PULSE', quote: "I had three years of work that SM slowed down. PULSE is all of that at once. It's not a debut album — it's a backlog." },
      ],
    },
    {
      year: '2024',
      outlet: 'Pitchfork',
      platform: 'Online',
      type: 'Press',
      color: '#5a7aaa',
      context: 'Grammy campaign feature, published ahead of the ceremony. One of the most in-depth conversations about ARE U STILL and his production process.',
      notable: [
        { topic: 'On neo-soul influence', quote: "I grew up on Stevie Wonder records that my mom had in Seoul. I didn't know they were 'neo-soul.' I just knew they made me feel like the floor was rising." },
        { topic: 'On Tears On A Pretty Face', quote: "That song was finished in forty minutes. I don't know what to tell you. Some of them arrive like that. You just have to be in the room when they do." },
      ],
    },
    {
      year: '2025',
      outlet: 'Knowing Bros (아는 형님)',
      platform: 'JTBC',
      type: 'TV',
      color: '#c06080',
      context: 'Guest appearance ahead of Shang-Chi 2 release. First idol-adjacent variety since leaving SM. Notable for candid discussion of the NCT 127 years — cast visibly surprised by his directness.',
      notable: [
        { topic: 'On NCT 127 group dynamics', quote: "We were seven people in the same building for years. Some of that goes well. Some of it you work through later, alone, in a different city. I think we're all still working through some of it." },
        { topic: 'On returning to the group', quote: "It's not comfortable. I don't think it's supposed to be. But I think uncomfortable things done honestly are worth more than comfortable things done for appearance." },
      ],
    },
    {
      year: '2025',
      outlet: 'Allure US',
      platform: 'Print',
      type: 'Magazine',
      color: '#c06080',
      context: 'Shang-Chi 2 press feature, published June 2025. Interview-driven shoot in LA. Discussed co-screenwriting credit and creative approach to franchise filmmaking.',
      notable: [
        { topic: 'On co-writing Shang-Chi 2', quote: "When they let me into the writers room I was the least experienced person there by twenty years. I just kept asking: 'what does this character need, not what does the plot need?' Eventually they started asking the same question." },
        { topic: 'On Ashley Liao as co-star', quote: "I can't tell you about the film without telling you about her performance. I won't try." },
      ],
    },
    {
      year: '2026',
      outlet: 'Esquire Korea',
      platform: 'Print',
      type: 'Magazine',
      color: '#6e5a7c',
      context: 'DECADE anniversary cover story. October 2026. Retrospective shoot using archival pieces from JH Company vault. Most reflective interview of his career — discussed the full decade, not just the recent work.',
      notable: [
        { topic: 'On the decade overall', quote: "I was seventeen when I arrived in Seoul with a suitcase and enough Korean to buy food and ask where the bathroom was. I'm twenty-eight now. I'm not sure I understand yet what happened in between. That's what DECADE is — me trying to understand it." },
        { topic: 'On Thailand', quote: "I miss Bangkok in a way I don't know how to describe without it sounding like grief. Maybe it is grief. I'm not sure I know how to go back yet." },
        { topic: 'On learning to stop', quote: "There's someone who helps me figure out when enough is enough. I never knew how to do that on my own. I'm still not sure I do — but I'm getting better at asking." },
        { topic: 'On Ashley', quote: "She's the first person I've been with who doesn't need me to explain the job. That sounds like a small thing. It isn't." },
      ],
    },
  ],
};

const th: typeof en = {
  ui: {
    label: 'ชีวประวัติ',
    title: 'บทสัมภาษณ์ & คำคม',
    subtitle: 'ช่วงเวลาสื่อที่น่าจดจำ · คำคมประจำแต่ละธีม · 2022–ปัจจุบัน',
    signatureQuotesHeading: 'คำคมประจำตัว',
    keyInterviewsHeading: 'บทสัมภาษณ์สำคัญ',
  },
  related: [
    { label: 'ชีวประวัติ', slug: 'biography' },
    { label: 'ชีวิตส่วนตัว', slug: 'personal-life' },
    { label: 'ภาพลักษณ์สาธารณะ', slug: 'public-image' },
    { label: 'อิทธิพลเชิงวัฒนธรรม', slug: 'cultural-impact' },
  ],
  themes: [
    {
      theme: 'เรื่องตัวตนและต้นกำเนิด',
      color: '#c9a84c',
      quotes: [
        {
          quote: "I grew up between two cities that don't know each other very well. Bangkok and Seoul are both in Asia but they're different planets. I think that's why I can move between worlds — I've been doing it since I was six.",
          source: 'You Quiz on the Block', year: '2022',
        },
        {
          quote: "People ask which culture I belong to. I've stopped trying to answer that cleanly. I belong to the music. The music doesn't care where I'm from.",
          source: 'Rolling Stone US', year: '2023',
        },
        {
          quote: "My mother gave me poetry. My father gave me business. I think I turned both of those into a career.",
          source: 'Esquire Korea', year: '2026',
        },
      ],
    },
    {
      theme: 'เรื่องการออกจาก SM และความเป็นอิสระ',
      color: '#5a7c6a',
      quotes: [
        {
          quote: "I wasn't angry when I left. I was relieved. The anger came earlier — the relief came the moment I signed the settlement. I remember thinking: now I can make the record I've been hearing in my head for three years.",
          source: 'GQ Korea', year: '2023',
        },
        {
          quote: "The hardest part wasn't the legal process. It was watching people I respected choose the institution over the person. That takes longer to process.",
          source: 'GQ Korea', year: '2023',
        },
        {
          quote: "Ownership isn't just about money. When you own your masters, you own the relationship between your music and your audience. Nobody can alter that without your permission.",
          source: 'Pitchfork', year: '2024',
        },
      ],
    },
    {
      theme: 'เรื่องดนตรีและงานฝีมือ',
      color: '#9b7fc8',
      quotes: [
        {
          quote: "A song that only works in one language is a song that's still afraid of itself.",
          source: 'The Late Show with Stephen Colbert', year: '2023',
        },
        {
          quote: "I produce because I don't trust anyone else to understand what a song needs at 3am. That's not arrogance — that's just what producing is.",
          source: 'Rolling Stone US', year: '2023',
        },
        {
          quote: "ARE U STILL is the first album I made where I stopped trying to explain myself. I just made it. If you hear it, you hear it.",
          source: 'Pitchfork', year: '2024',
        },
        {
          quote: "Pharrell told me something I think about a lot: 'The song already exists. You're just the one digging.' I don't know if that's true, but it makes the bad days easier.",
          source: 'Allure US', year: '2025',
        },
      ],
    },
    {
      theme: 'เรื่องสันติภาพและการเมือง',
      color: '#5a7aaa',
      quotes: [
        {
          quote: "I understand why people want their country to win. I just think winning a war isn't the same thing as winning.",
          source: 'X (Twitter)', year: '2025',
        },
        {
          quote: "There's a version of silence that's neutral. And there's a version that's complicit. I can't always tell them apart. But when I'm sure, I say something.",
          source: 'Knowing Bros', year: '2025',
        },
        {
          quote: "I've been told I'm not Thai enough to speak for Thailand, and not Korean enough to speak for Korea. That used to bother me. Now I think: I speak for myself. That's the only thing I was ever qualified to do.",
          source: 'Esquire Korea', year: '2026',
        },
      ],
    },
    {
      theme: 'เรื่องเวทีและการแสดง',
      color: '#c06080',
      quotes: [
        {
          quote: "The black-and-white staging on PULSE — people thought it was minimalism. It was actually maximum. Everything you see, you see completely. There's nowhere to hide. That's the point.",
          source: 'The Guardian', year: '2024',
        },
        {
          quote: "I've been dancing since before I could sing properly. Movement is the first language. Lyrics are a translation.",
          source: 'SNL backstage press', year: '2024',
        },
        {
          quote: "DECADE Tour is the first time I designed a show that I would want to watch. Every other tour I designed for other people. This one I designed for the version of me who was seventeen at SOPA wondering if any of this was going to work.",
          source: 'The New York Times', year: '2027',
        },
      ],
    },
    {
      theme: 'เรื่อง James Hwang vs. GONUNMA',
      color: '#6e5a7c',
      quotes: [
        {
          quote: "GONUNMA was always me. It's just a version of me that Korea named first. James Hwang is the name I was born with. At some point it made sense to let the world call me by my name.",
          source: 'Allure US', year: '2025',
        },
        {
          quote: "When people in the US ask me who GONUNMA is, I say: he's the producer. He's in the credits. He doesn't do press.",
          source: 'Jimmy Fallon', year: '2025',
        },
      ],
    },
  ],
  interviews: [
    {
      year: '2022',
      outlet: 'You Quiz on the Block',
      platform: 'tvN',
      type: 'TV',
      color: '#9b7fc8',
      context: 'รายการวาไรตี้เกาหลีรายการใหญ่รายการแรกในฐานะศิลปินเดี่ยว คุยเรื่องการเดบิวต์ด้วย SOFTEST TOUCH ที่มาของชื่อ GONUNMA จาก King of Mask Singer ชีวิตวัยเด็กที่กรุงเทพฯ และการทำงานบ้านเป็นวิธีผ่อนคลาย',
      notable: [
        { topic: 'เรื่องวัยเด็กที่กรุงเทพฯ', quote: "Bangkok was where I learned to be patient. Seoul was where I learned to be fast. I still use both." },
        { topic: 'เรื่องการทำความสะอาดเป็นกิจวัตร', quote: "After every tour I clean my own apartment. From floor to ceiling. People think that's strange. I think coming home to a clean place you made clean is one of the better feelings in the world." },
        { topic: 'เรื่องที่มาจาก Mask Singer', quote: "고눈마 was given to me by the audience. I didn't choose it. That's why I kept it. The things other people see in you first are usually the most honest." },
      ],
    },
    {
      year: '2022',
      outlet: 'The Tonight Show Starring Jimmy Fallon',
      platform: 'NBC',
      type: 'TV',
      color: '#9b7fc8',
      context: 'ออกรายการดึกในอเมริกาครั้งแรก จับจังหวะกับการขึ้นแสดงในงาน Academy Awards ครั้งที่ 94 คู่กับ Anderson .Paak เป็นครั้งแรกที่เขาได้คุยยาวๆ กับคนดูอเมริกันทั่วไปเรื่องการทำสองอาชีพพร้อมกัน',
      notable: [
        { topic: 'เรื่องการแสดงในงาน Oscars', quote: "Anderson called me two days before and said 'trust me, acoustic.' I didn't argue. I should never argue with Anderson .Paak about anything." },
        { topic: 'เรื่องการอยู่ทั้งใน K-pop และ Hollywood', quote: "I've spent a lot of my life being two things at once. I've stopped trying to separate them." },
      ],
    },
    {
      year: '2023',
      outlet: 'GQ Korea',
      platform: 'Print',
      type: 'Magazine',
      color: '#5a7c6a',
      context: 'บทสัมภาษณ์ยาวชิ้นใหญ่ชิ้นแรกหลังออกจาก SM ขึ้นเป็นเรื่องปกฉบับเดือนสิงหาคม และเป็นบทสัมภาษณ์ที่สื่อเกาหลีอ้างถึงมากที่สุดของปี 2023 พูดถึงข้อพิพาท ความเป็นอิสระ และเป้าหมายของ JH Company',
      notable: [
        { topic: 'เรื่องเหตุผลที่ยื่นฟ้อง', quote: "I didn't file because I was unhappy. I filed because I could see exactly how the next five years would go if I didn't. I wasn't going to let someone else write that part of my life." },
        { topic: 'เรื่องบันทึกเสียง', quote: "I kept those recordings for two years before I did anything with them. I wasn't saving them as a weapon. I was saving them so I could remember, accurately, what happened." },
        { topic: 'เรื่องการก่อตั้ง JH Company', quote: "A label is just infrastructure. What I was really building was a room where the answer to 'why not?' is always 'let's find out.'" },
      ],
    },
    {
      year: '2023',
      outlet: 'Rolling Stone US',
      platform: 'Print',
      type: 'Magazine',
      color: '#5a7c6a',
      context: 'บทความเจาะตัวบุคคลในนิตยสารอเมริกันชิ้นใหญ่ชิ้นแรก ตีพิมพ์เดือนพฤศจิกายน 2023 ครอบคลุมเส้นทางสู่ Grammy การวางตัวเพื่อข้ามไปตลาด R&B และแนวคิดเบื้องหลัง PULSE',
      notable: [
        { topic: 'เรื่องความทะเยอทะยานด้าน Grammy', quote: "I don't need the Grammy to know the album is good. I want it because I want the conversation it starts. A Grammy makes people listen to things they wouldn't otherwise touch." },
        { topic: 'เรื่องการทำอัลบั้ม PULSE', quote: "I had three years of work that SM slowed down. PULSE is all of that at once. It's not a debut album — it's a backlog." },
      ],
    },
    {
      year: '2024',
      outlet: 'Pitchfork',
      platform: 'Online',
      type: 'Press',
      color: '#5a7aaa',
      context: 'บทความช่วงแคมเปญ Grammy ตีพิมพ์ก่อนงานประกาศรางวัล เป็นบทสนทนาที่ลงลึกที่สุดชิ้นหนึ่งเรื่อง ARE U STILL และวิธีทำงานโปรดักชันของเขา',
      notable: [
        { topic: 'เรื่องอิทธิพล neo-soul', quote: "I grew up on Stevie Wonder records that my mom had in Seoul. I didn't know they were 'neo-soul.' I just knew they made me feel like the floor was rising." },
        { topic: 'เรื่องเพลง Tears On A Pretty Face', quote: "That song was finished in forty minutes. I don't know what to tell you. Some of them arrive like that. You just have to be in the room when they do." },
      ],
    },
    {
      year: '2025',
      outlet: 'Knowing Bros (아는 형님)',
      platform: 'JTBC',
      type: 'TV',
      color: '#c06080',
      context: 'ไปออกเป็นแขกรับเชิญก่อน Shang-Chi 2 เข้าฉาย เป็นรายการวาไรตี้สายไอดอลรายการแรกหลังออกจาก SM ที่จำได้คือเขาพูดถึงช่วงปีที่อยู่ NCT 127 อย่างตรงไปตรงมา จนพิธีกรในรายการอึ้งไปเห็นๆ',
      notable: [
        { topic: 'เรื่องพลวัตภายในวง NCT 127', quote: "We were seven people in the same building for years. Some of that goes well. Some of it you work through later, alone, in a different city. I think we're all still working through some of it." },
        { topic: 'เรื่องการกลับมาที่วง', quote: "It's not comfortable. I don't think it's supposed to be. But I think uncomfortable things done honestly are worth more than comfortable things done for appearance." },
      ],
    },
    {
      year: '2025',
      outlet: 'Allure US',
      platform: 'Print',
      type: 'Magazine',
      color: '#c06080',
      context: 'บทความช่วงโปรโมต Shang-Chi 2 ตีพิมพ์เดือนมิถุนายน 2025 เป็นงานถ่ายภาพที่มีบทสัมภาษณ์เป็นแกน ถ่ายที่ LA พูดถึงเครดิตร่วมเขียนบทและวิธีคิดงานสร้างสรรค์กับหนังแฟรนไชส์',
      notable: [
        { topic: 'เรื่องการร่วมเขียนบท Shang-Chi 2', quote: "When they let me into the writers room I was the least experienced person there by twenty years. I just kept asking: 'what does this character need, not what does the plot need?' Eventually they started asking the same question." },
        { topic: 'เรื่อง Ashley Liao ในฐานะนักแสดงร่วม', quote: "I can't tell you about the film without telling you about her performance. I won't try." },
      ],
    },
    {
      year: '2026',
      outlet: 'Esquire Korea',
      platform: 'Print',
      type: 'Magazine',
      color: '#6e5a7c',
      context: 'เรื่องปกฉลองครบรอบ DECADE เดือนตุลาคม 2026 ถ่ายภาพย้อนอดีตโดยหยิบเสื้อผ้าจากคลังของ JH Company มาใช้ เป็นบทสัมภาษณ์ที่ครุ่นคิดที่สุดในอาชีพเขา เพราะพูดถึงทั้งทศวรรษ ไม่ใช่แค่ผลงานชิ้นล่าสุด',
      notable: [
        { topic: 'เรื่องภาพรวมทั้งทศวรรษ', quote: "I was seventeen when I arrived in Seoul with a suitcase and enough Korean to buy food and ask where the bathroom was. I'm twenty-eight now. I'm not sure I understand yet what happened in between. That's what DECADE is — me trying to understand it." },
        { topic: 'เรื่องประเทศไทย', quote: "I miss Bangkok in a way I don't know how to describe without it sounding like grief. Maybe it is grief. I'm not sure I know how to go back yet." },
        { topic: 'เรื่องการเรียนรู้ที่จะหยุด', quote: "There's someone who helps me figure out when enough is enough. I never knew how to do that on my own. I'm still not sure I do — but I'm getting better at asking." },
        { topic: 'เรื่อง Ashley', quote: "She's the first person I've been with who doesn't need me to explain the job. That sounds like a small thing. It isn't." },
      ],
    },
  ],
};

export const interviews = { en, th };
export function getInterviews(lang: Lang) {
  return interviews[lang];
}
