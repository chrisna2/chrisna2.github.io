/* OPIc 연습 데이터 (data.js) — 문장·뼈대 내용은 여기서만 수정 */
/* ===== 데이터 =====
 묶음: {t 제목, tag 문제번호, q:[영어 문제, 한글 문제], s:[[영어({}=내가 채울 부분), 한글, 키워드]]} */
const TOPICS = [
  {
    name: "기억에 남는 경험",
    secs: [
      {
        t: "① 노을 (좋은 경험)",
        tag: "4·7·10",
        q: [
          "Tell me about a memorable experience you had outdoors. What happened?",
          "야외에서 겪은 기억에 남는 경험을 말해 주세요. 무슨 일이 있었나요?",
        ],
        s: [
          [
            "One of my most memorable experiences was {watching a beautiful sunset}.",
            "가장 기억에 남는 경험 중 하나는 아름다운 노을을 본 거예요.",
            "노을 본 경험",
          ],
          [
            "{Two weeks ago}, I was {jogging in Boramae Park} when I saw {a stunning sunset}.",
            "2주 전에 보라매공원에서 조깅하다가 멋진 노을을 봤어요.",
            "2주 전 · 보라매 조깅",
          ],
          [
            "The sky turned {orange and red}, so I {stopped running for a moment}.",
            "하늘이 주황색과 붉은색으로 물들어서 잠깐 달리기를 멈췄어요.",
            "하늘 색 · 잠깐 멈춤",
          ],
          [
            "I was so {amazed} to see the {beautiful colors}.",
            "아름다운 색을 보고 정말 놀랐어요.",
            "감탄",
          ],
          [
            "The moment made me feel {peaceful and happy}.",
            "그 순간 마음이 평온하고 행복했어요.",
            "평온 · 행복",
          ],
        ],
      },
      {
        t: "② 갑자기 비 (예상 밖 상황)",
        tag: "4·7·10",
        q: [
          "Tell me about an unexpected situation that turned out well.",
          "예상 못 한 상황이 좋게 끝난 경험을 말해 주세요.",
        ],
        s: [
          [
            "One of my memorable experiences was when {it suddenly started raining}.",
            "기억에 남는 경험 중 하나는 갑자기 비가 내리기 시작했을 때예요.",
            "갑자기 비",
          ],
          [
            "I was {riding my bike in Boramae Park}, and I {didn't have an umbrella}.",
            "보라매공원에서 자전거를 타고 있었는데 우산이 없었어요.",
            "자전거 · 우산 없음",
          ],
          [
            "I ran to {a nearby Starbucks} and waited there {until the rain stopped}.",
            "근처 스타벅스로 뛰어가서 비가 그칠 때까지 기다렸어요.",
            "스타벅스로 피함",
          ],
          [
            "Surprisingly, that time wasn't bad at all. I enjoyed {a warm coffee} and relaxed.",
            "놀랍게도 그 시간은 전혀 나쁘지 않았어요. 따뜻한 커피를 마시며 쉬었어요.",
            "따뜻한 커피 · 여유",
          ],
          [
            "I realized that {not everything is bad, even in unexpected situations}.",
            "예상 밖의 상황에서도 모든 게 나쁘지만은 않다는 걸 깨달았어요.",
            "깨달음",
          ],
        ],
      },
      {
        t: "③ 지갑 분실 (나쁜 경험)",
        tag: "4·7·10",
        q: [
          "Tell me about a bad experience you remember well. What happened and how did you feel?",
          "잘 기억나는 안 좋은 경험을 말해 주세요. 무슨 일이 있었고 기분이 어땠나요?",
        ],
        s: [
          [
            "One of my most memorable experiences was {losing my wallet on the subway}.",
            "가장 기억에 남는 경험 중 하나는 지하철에서 지갑을 잃어버린 거예요.",
            "지하철 지갑 분실",
          ],
          [
            "One day, I was on the subway, and I realized later that I {left my wallet on the seat}.",
            "어느 날 지하철에서 나중에야 지갑을 좌석에 두고 내린 걸 알았어요.",
            "좌석에 두고 내림",
          ],
          [
            "I felt very {stressed} because {my cards were in it}.",
            "카드가 들어 있어서 스트레스를 많이 받았어요.",
            "스트레스 · 카드",
          ],
          [
            "The experience taught me to be {more careful with my belongings}.",
            "그 경험으로 소지품을 더 조심해야 한다는 걸 배웠어요.",
            "교훈",
          ],
          [
            "Luckily, I got it back from the {lost and found}.",
            "다행히 분실물 센터에서 되찾았어요. (결말은 가정)",
            "결말: 되찾음",
          ],
        ],
      },
      {
        t: "첫 문장에 장소만 갈아끼우기",
        tag: "공통",
        s: [
          [
            "One of my most memorable experiences happened {when I was jogging}.",
            "가장 기억에 남는 경험은 조깅하던 때 있었어요.",
            "조깅",
          ],
          [
            "One of my most memorable experiences happened {at Starbucks}.",
            "가장 기억에 남는 경험은 스타벅스에서 있었어요.",
            "스타벅스",
          ],
          [
            "One of my most memorable experiences happened {when I went to the movie theater}.",
            "가장 기억에 남는 경험은 영화관에 갔을 때 있었어요.",
            "영화관",
          ],
          [
            "One of my most memorable experiences happened {when I went to a concert}.",
            "가장 기억에 남는 경험은 콘서트에 갔을 때 있었어요.",
            "콘서트",
          ],
          [
            "One of my most memorable experiences happened {when I was traveling in Jeju}.",
            "가장 기억에 남는 경험은 제주를 여행하던 때 있었어요.",
            "제주 여행",
          ],
          [
            "One of my most memorable experiences happened {when I was listening to music}.",
            "가장 기억에 남는 경험은 음악을 듣던 때 있었어요.",
            "음악 감상",
          ],
          [
            "One of my most memorable experiences happened {at home}.",
            "가장 기억에 남는 경험은 집에서 있었어요.",
            "집",
          ],
        ],
      },
    ],
  },
  {
    name: "집",
    secs: [
      {
        t: "① 집 묘사",
        tag: "2·5·8",
        q: [
          "Tell me about the house or apartment you live in. Describe it in detail.",
          "당신이 사는 집을 자세히 설명해 주세요.",
        ],
        s: [
          [
            "I live in {Seoul}. I live {alone} in an apartment on the {15th floor}.",
            "저는 서울에 살아요. 15층 아파트에서 혼자 살아요.",
            "서울 · 15층 · 혼자",
          ],
          [
            "There is {one bedroom, one living room, one kitchen, one bathroom}, and a {balcony}.",
            "침실, 거실, 부엌, 화장실이 하나씩 있고 베란다도 있어요.",
            "방 구조",
          ],
          [
            "My favorite place is the {living room}.",
            "제가 제일 좋아하는 곳은 거실이에요.",
            "좋아하는 곳: 거실",
          ],
          [
            "I {play computer games} there most of the time.",
            "대부분 거기서 컴퓨터 게임을 해요.",
            "거실에서 게임",
          ],
          ["It is {bright, clean, and comfortable}.", "밝고 깨끗하고 편안해요.", "특징"],
        ],
      },
      {
        t: "② 집에서 하는 일",
        tag: "3",
        q: ["What do you usually do at home?", "집에서 보통 무엇을 하나요?"],
        s: [
          [
            "I do many things alone at home. I'm busy on weekdays, so I mostly {play games} on the weekends.",
            "집에서 혼자 많은 걸 해요. 평일엔 바빠서 주로 주말에 게임을 해요.",
            "혼자 · 주말 게임",
          ],
          [
            "I try to play {alone} because I can {focus better}.",
            "더 집중할 수 있어서 혼자 하려고 해요.",
            "혼자 집중",
          ],
          [
            "I {listen to rock music} while I play.",
            "게임하면서 록 음악을 들어요.",
            "록 음악 들으며",
          ],
          [
            "Sometimes I play {online with my friends}, but not always.",
            "가끔 친구들과 온라인으로 하지만 항상 그런 건 아니에요.",
            "가끔 친구와",
          ],
        ],
      },
      {
        t: "③ 어릴 적 집 비교",
        tag: "6·9",
        q: [
          "How is your home different from the home you lived in when you were young?",
          "지금 집은 어릴 때 살던 집과 어떻게 다른가요?",
        ],
        s: [
          [
            "When I was young, I lived in {an apartment with my family}.",
            "어릴 때는 가족과 아파트에 살았어요.",
            "어릴 적 가족과 아파트",
          ],
          ["It was {bigger} than my place now.", "지금 집보다 더 넓었어요.", "더 넓었음"],
          [
            "Now I live {alone} in a {smaller apartment}, and I enjoy my {freedom}.",
            "지금은 더 작은 아파트에서 혼자 살며 자유를 즐겨요.",
            "지금 혼자 · 자유",
          ],
          ["But sometimes I {miss my family}.", "하지만 가끔 가족이 그리워요.", "가족 그리움"],
          [
            "In conclusion, my old home was {bigger}, but my home now is {comfortable} for me.",
            "결론적으로 예전 집이 더 컸지만 지금 집이 저한테는 편해요.",
            "결론 비교",
          ],
        ],
      },
      {
        t: "④ 인터넷 끊김",
        tag: "4·7·10",
        q: [
          "Tell me about a problem you had at home. What happened and how did you solve it?",
          "집에서 겪은 문제를 말해 주세요. 무슨 일이 있었고 어떻게 해결했나요?",
        ],
        s: [
          [
            "One time, my {internet suddenly went down} at home.",
            "한번은 집에서 인터넷이 갑자기 끊겼어요.",
            "인터넷 끊김",
          ],
          [
            "I was {playing an online game}, so I was really {frustrated}.",
            "온라인 게임을 하던 중이라 정말 답답했어요.",
            "게임 중 · 답답",
          ],
          [
            "I {restarted the router}, but it didn't work.",
            "공유기를 다시 켜 봤지만 소용없었어요.",
            "공유기 재시작",
          ],
          [
            "So I called {the internet company}, and a technician came {the next day}.",
            "그래서 인터넷 회사에 전화했고 다음 날 기사님이 왔어요.",
            "업체 전화 · 다음 날 기사",
          ],
          [
            "He fixed it, and I felt {relieved}. It taught me to {prepare for unexpected problems}.",
            "기사님이 고쳐 주셔서 안심했어요. 예상 못 한 문제에 대비해야 한다는 걸 배웠어요.",
            "해결 · 교훈",
          ],
        ],
      },
    ],
  },
  {
    name: "영화",
    secs: [
      {
        t: "① 자주 가는 극장",
        tag: "2·5·8",
        q: [
          "Tell me about the movie theater you usually go to. Where is it and what is it like?",
          "자주 가는 영화관에 대해 말해 주세요. 어디에 있고 어떤 곳인가요?",
        ],
        s: [
          [
            "There's a {movie theater} near my house. It's not that far.",
            "집 근처에 영화관이 있어요. 그렇게 멀지 않아요.",
            "집 근처 극장",
          ],
          [
            "I {ride my bike} there, and it takes about {10 minutes}.",
            "자전거로 가는데 10분쯤 걸려요.",
            "자전거 10분",
          ],
          [
            "The theater is {clean and well-maintained}, and the seats are {comfortable}.",
            "영화관은 깨끗하게 관리되고 좌석도 편해요.",
            "깨끗 · 좌석",
          ],
          ["I usually go to the movies {alone}.", "보통 영화는 혼자 보러 가요.", "혼자"],
          [
            "I like {action movies} because they're {exciting and full of energy}. I go whenever I have free time.",
            "액션 영화는 짜릿하고 에너지가 넘쳐서 좋아해요. 시간 날 때마다 가요.",
            "액션 · 이유",
          ],
        ],
      },
      {
        t: "② 좋아하는 영화인",
        tag: "질문 대응",
        q: [
          "Who is your favorite actor or director? Tell me about that person.",
          "가장 좋아하는 배우나 감독은 누구인가요? 그 사람에 대해 말해 주세요.",
        ],
        s: [
          [
            "My favorite movie person is {Quentin Tarantino}. He's a {director}, not an actor.",
            "제가 좋아하는 영화인은 쿠엔틴 타란티노예요. 배우가 아니라 감독이에요.",
            "타란티노 감독",
          ],
          [
            "He made {“Pulp Fiction” and “Kill Bill.”}",
            "그는 '펄프 픽션'과 '킬 빌'을 만들었어요.",
            "대표작",
          ],
          [
            "His movies are {stylish}, and they have {great dialogue and action}.",
            "그의 영화는 스타일리시하고 대사와 액션이 훌륭해요.",
            "특징",
          ],
          [
            "I've watched them {many times}, and I never get bored.",
            "여러 번 봤는데 질리지 않아요.",
            "여러 번 봄",
          ],
          ["I think he is a {legendary director}.", "그는 전설적인 감독이라고 생각해요.", "평가"],
        ],
      },
      {
        t: "③ 어릴 적 vs 지금",
        tag: "6·9",
        q: [
          "How have your movie preferences changed since you were young?",
          "어릴 때부터 지금까지 영화 취향은 어떻게 변했나요?",
        ],
        s: [
          [
            "When I was young, I liked {“Titanic.”}",
            "어릴 때 '타이타닉'을 좋아했어요.",
            "어릴 적 타이타닉",
          ],
          ["I watched it with {my parents}.", "부모님과 같이 봤어요.", "부모님과"],
          [
            "I didn't know much about movies then, but I {really liked it}.",
            "그땐 영화를 잘 몰랐지만 정말 좋아했어요.",
            "당시 느낌",
          ],
          [
            "Now I like {action movies}, especially {Tarantino's}.",
            "지금은 액션 영화, 특히 타란티노 영화를 좋아해요.",
            "지금 액션",
          ],
          [
            "You can say my taste has {changed a little}. My favorite movies are {more intense} than before.",
            "취향이 조금 바뀌었다고 할 수 있어요. 좋아하는 영화가 예전보다 더 강렬해졌어요.",
            "변화 결론",
          ],
        ],
      },
      {
        t: "④ 최근 경험",
        tag: "6·9",
        q: [
          "Tell me about the last movie you saw. What was it like?",
          "마지막으로 본 영화에 대해 말해 주세요. 어땠나요?",
        ],
        s: [
          [
            "Recently, I went to the theater {alone} and watched {“The Odyssey.”}",
            "최근에 혼자 극장에 가서 '오디세이'를 봤어요.",
            "최근 오디세이 혼자",
          ],
          [
            "The {scenes} were amazing, and I was really {impressed}.",
            "장면들이 놀라웠고 정말 감명받았어요.",
            "감상",
          ],
          ["While watching, I ate some {popcorn}.", "보는 동안 팝콘을 먹었어요.", "팝콘"],
          [
            "After the movie, I {wrote a review} about it.",
            "영화가 끝난 뒤 리뷰를 썼어요.",
            "리뷰 작성",
          ],
          [
            "Watching movies is really {fun}, and I want to go again.",
            "영화 보는 건 정말 재밌어서 또 가고 싶어요.",
            "마무리",
          ],
        ],
      },
    ],
  },
  {
    name: "콘서트·공연",
    secs: [
      {
        t: "① 콘서트홀 묘사",
        tag: "2·5·8",
        q: [
          "Tell me about the place where you go to see concerts. What is it like?",
          "콘서트를 보러 가는 곳에 대해 말해 주세요. 어떤 곳인가요?",
        ],
        s: [
          [
            "I go to concerts in {Seoul}. The hall is a bit far from my house, so I take {the subway}.",
            "서울에서 콘서트를 봐요. 공연장이 집에서 좀 멀어서 지하철을 타요.",
            "서울 · 지하철",
          ],
          [
            "The hall is {big and well-organized}, and the {sound} is great.",
            "공연장은 크고 잘 정돈돼 있고 음향이 훌륭해요.",
            "공연장 특징",
          ],
          ["I usually go {alone}.", "보통 혼자 가요.", "혼자"],
          [
            "I like {rock concerts} because they're {full of energy}. I go whenever I have time.",
            "록 콘서트는 에너지가 넘쳐서 좋아해요. 시간 될 때마다 가요.",
            "록 · 이유",
          ],
        ],
      },
      {
        t: "② 콘서트 전후 활동",
        tag: "3",
        q: [
          "What do you usually do before and after a concert?",
          "콘서트 전후에 보통 무엇을 하나요?",
        ],
        s: [
          [
            "Before a concert, I {buy a ticket online}. It's not that expensive.",
            "콘서트 전에 온라인으로 표를 사요. 그렇게 비싸지 않아요.",
            "온라인 예매",
          ],
          [
            "I go {alone}, so I can {focus on the music}.",
            "혼자 가서 음악에 집중할 수 있어요.",
            "혼자 집중",
          ],
          [
            "Sometimes I go with {my friends}, but not always.",
            "가끔 친구들과 가지만 항상은 아니에요.",
            "가끔 친구와",
          ],
          [
            "After the concert, I often {stop by a cafe for a coffee}.",
            "콘서트 후에 종종 카페에 들러 커피를 마셔요.",
            "공연 후 카페",
          ],
        ],
      },
      {
        t: "③ 어릴 적 vs 지금",
        tag: "6·9",
        q: [
          "How have your music tastes changed since you were young?",
          "어릴 때부터 지금까지 음악 취향은 어떻게 변했나요?",
        ],
        s: [
          [
            "When I was young, I liked listening to {Toy and Roller Coaster}.",
            "어릴 때 토이와 롤러코스터를 즐겨 들었어요.",
            "어릴 적 토이·롤러코스터",
          ],
          ["I {still like them} now.", "지금도 좋아해요.", "지금도 좋아함"],
          [
            "Now I also enjoy {rock bands like Silica Gel}, and I go to their concerts.",
            "지금은 실리카겔 같은 록 밴드도 즐기고 콘서트에도 가요.",
            "지금 실리카겔",
          ],
          [
            "You can say my taste has become {wider} than before.",
            "취향이 예전보다 넓어졌다고 할 수 있어요.",
            "변화 결론",
          ],
        ],
      },
      {
        t: "④ 최근: 실리카겔 콘서트",
        tag: "6·9",
        q: [
          "Tell me about the last concert you went to.",
          "마지막으로 간 콘서트에 대해 말해 주세요.",
        ],
        s: [
          [
            "Recently, I went to a {Silica Gel concert} {alone}.",
            "최근에 혼자 실리카겔 콘서트에 갔어요.",
            "최근 실리카겔 혼자",
          ],
          [
            "The {atmosphere} was cool, and the {performance} was powerful.",
            "분위기가 멋졌고 공연이 강렬했어요.",
            "분위기 · 공연",
          ],
          [
            "Even though I went alone, I {enjoyed it a lot}.",
            "혼자 갔지만 정말 즐거웠어요.",
            "혼자여도 즐거움",
          ],
          [
            "On my way home, I kept {humming their songs}.",
            "집에 오는 길에 계속 그들의 노래를 흥얼거렸어요.",
            "귀갓길 흥얼",
          ],
          [
            "Thinking about it now, I really want to go to {another concert}.",
            "지금 생각하니 또 콘서트에 정말 가고 싶어요.",
            "마무리",
          ],
        ],
      },
    ],
  },
  {
    name: "카페·술집",
    secs: [
      {
        t: "① 단골 카페 묘사",
        tag: "2·5·8",
        q: [
          "Tell me about a cafe you often visit. Where is it and what is it like?",
          "자주 가는 카페에 대해 말해 주세요. 어디에 있고 어떤 곳인가요?",
        ],
        s: [
          [
            "There's a {Starbucks} near my house. It's not that far.",
            "집 근처에 스타벅스가 있어요. 그리 멀지 않아요.",
            "집 근처 스타벅스",
          ],
          [
            "I {ride my bike} there, and it takes about {5 minutes}.",
            "자전거로 5분쯤 걸려요.",
            "자전거 5분",
          ],
          [
            "It's {quiet and clean}, and the seats are {comfortable}.",
            "조용하고 깨끗하고 좌석이 편해요.",
            "조용 · 좌석",
          ],
          [
            "I usually go there {alone}, mostly when I'm {bored}.",
            "보통 혼자 가요. 주로 심심할 때요.",
            "혼자 · 심심할 때",
          ],
          [
            "I {work or study} there because it's a good place to {focus}.",
            "집중하기 좋은 곳이라 거기서 일하거나 공부해요.",
            "작업 · 공부",
          ],
        ],
      },
      {
        t: "② 카페에서 하는 일",
        tag: "3",
        q: ["What do you usually do at a cafe?", "카페에서 보통 무엇을 하나요?"],
        s: [
          [
            "I usually go to a cafe {alone}. It's not special to others.",
            "보통 카페에 혼자 가요. 다른 사람들에게도 특별한 건 아니에요.",
            "혼자 · 평범",
          ],
          [
            "I get {a coffee} and work on my {laptop}.",
            "커피를 사서 노트북으로 작업해요.",
            "커피 · 노트북",
          ],
          [
            "I prefer doing it {alone} because I can {concentrate better}.",
            "더 집중할 수 있어서 혼자가 좋아요.",
            "혼자 집중",
          ],
          ["I do it when I have time on {weekends}.", "주말에 시간 있을 때 해요.", "주말"],
        ],
      },
      {
        t: "③ 어릴 적 vs 지금",
        tag: "6·9",
        q: [
          "How is going to cafes different now from when you were young?",
          "지금 카페에 가는 건 어릴 때와 어떻게 다른가요?",
        ],
        s: [
          [
            "When I was young, I {didn't go to cafes often}.",
            "어릴 때는 카페에 자주 안 갔어요.",
            "어릴 적 거의 안 감",
          ],
          [
            "But sometimes I went to one with {my parents}.",
            "하지만 가끔 부모님과 갔어요.",
            "가끔 부모님과",
          ],
          [
            "Nowadays, I go to {Starbucks} once in a while {by myself}.",
            "요즘은 가끔 혼자 스타벅스에 가요.",
            "요즘 혼자",
          ],
          [
            "For me, going to a cafe is {refreshing} and always an {energy booster}.",
            "저에게 카페는 상쾌하고 늘 활력소예요.",
            "의미",
          ],
        ],
      },
      {
        t: "④ 최근 경험",
        tag: "6·9",
        q: [
          "Tell me about the last time you went to a cafe.",
          "마지막으로 카페에 갔던 때를 말해 주세요.",
        ],
        s: [
          [
            "Recently, I went to {Starbucks} after {riding my bike}.",
            "최근에 자전거를 탄 뒤 스타벅스에 갔어요.",
            "자전거 후 스타벅스",
          ],
          [
            "I had {an iced coffee} and {relaxed for a while}.",
            "아이스 커피를 마시며 잠시 쉬었어요.",
            "아이스커피 · 휴식",
          ],
          [
            "Then I opened my laptop and {studied English}.",
            "그다음 노트북을 열고 영어를 공부했어요.",
            "영어 공부",
          ],
          [
            "Thinking about it now, I really like {going to cafes}.",
            "지금 생각해 보니 카페 가는 걸 정말 좋아해요.",
            "마무리",
          ],
        ],
      },
      {
        t: "⑤ 술집이 나오면",
        tag: "질문 대응",
        q: ["Do you go to bars? Tell me about it.", "술집에 자주 가나요? 이야기해 주세요."],
        s: [
          ["I {rarely} go to bars.", "술집은 거의 안 가요.", "거의 안 감"],
          [
            "But when I do, I go with {a friend}, and we just {have a drink and talk}.",
            "가게 되면 친구와 가서 한잔하며 이야기만 해요.",
            "가면 친구와 한잔",
          ],
          [
            "I prefer {cafes} because they're {quieter}.",
            "더 조용해서 카페가 좋아요.",
            "카페 선호",
          ],
        ],
      },
    ],
  },
  {
    name: "음악",
    secs: [
      {
        t: "① 좋아하는 음악",
        tag: "2·5·8",
        q: [
          "What kind of music do you like? Tell me about it.",
          "어떤 음악을 좋아하나요? 이야기해 주세요.",
        ],
        s: [
          ["I like {rock music} the most.", "록 음악을 가장 좋아해요.", "록"],
          ["My favorite band is {Silica Gel}.", "가장 좋아하는 밴드는 실리카겔이에요.", "실리카겔"],
          [
            "Their music has a {cool atmosphere}, and I like that.",
            "그들의 음악은 분위기가 멋져서 좋아요.",
            "분위기",
          ],
          [
            "I've been to their {concert}, and I want to go again.",
            "콘서트에 가 봤고 또 가고 싶어요.",
            "콘서트 경험",
          ],
        ],
      },
      {
        t: "② 음악 듣는 방법",
        tag: "3",
        q: ["How do you usually listen to music?", "음악을 보통 어떻게 듣나요?"],
        s: [
          [
            "I listen to music when I'm on {my computer}.",
            "컴퓨터를 쓸 때 음악을 들어요.",
            "컴퓨터 쓸 때",
          ],
          [
            "I usually listen {at home} with my {headphones}.",
            "보통 집에서 헤드폰으로 들어요.",
            "집 · 헤드폰",
          ],
          [
            "How I listen to music is {not special}. It's similar to how others do.",
            "음악 듣는 방식은 특별하지 않아요. 다른 사람들과 비슷해요.",
            "평범",
          ],
          [
            "Listening to music is {refreshing} and a great {stress reliever}.",
            "음악을 들으면 상쾌하고 스트레스가 잘 풀려요.",
            "의미",
          ],
        ],
      },
      {
        t: "③ 어릴 적 vs 지금",
        tag: "6·9",
        q: [
          "How has your taste in music changed since you were young?",
          "어릴 때부터 지금까지 음악 취향은 어떻게 변했나요?",
        ],
        s: [
          [
            "When I was young, I listened to {Toy and Roller Coaster}.",
            "어릴 때 토이와 롤러코스터를 들었어요.",
            "어릴 적",
          ],
          [
            "I {still like them} now, and they are my {favorite artists}.",
            "지금도 좋아하고 가장 좋아하는 아티스트예요.",
            "지금도",
          ],
          [
            "Now I also like {rock bands like Silica Gel}.",
            "지금은 실리카겔 같은 록 밴드도 좋아해요.",
            "지금 록",
          ],
          [
            "You can say my taste has {changed a little}. My favorite music is {more varied} than before.",
            "취향이 조금 바뀌었어요. 좋아하는 음악이 예전보다 다양해졌어요.",
            "변화 결론",
          ],
        ],
      },
      {
        t: "④ 라이브 경험",
        tag: "4·7·10",
        q: [
          "Tell me about a memorable experience you had with music.",
          "음악과 관련해 기억에 남는 경험을 말해 주세요.",
        ],
        s: [
          [
            "One of my memorable experiences was {a Silica Gel concert}.",
            "기억에 남는 경험 중 하나는 실리카겔 콘서트예요.",
            "실리카겔 콘서트",
          ],
          [
            "I went {alone}, and the {energy of the live performance} was incredible.",
            "혼자 갔는데 라이브 공연의 에너지가 엄청났어요.",
            "혼자 · 라이브 에너지",
          ],
          [
            "I felt {connected to the music and the crowd}.",
            "음악과 관객들과 하나가 된 느낌이었어요.",
            "연결감",
          ],
          [
            "I really liked that concert because of the {vibrant atmosphere}.",
            "활기찬 분위기 덕분에 그 콘서트가 정말 좋았어요.",
            "이유",
          ],
        ],
      },
    ],
  },
  {
    name: "조깅·걷기",
    secs: [
      {
        t: "① 보라매공원 묘사",
        tag: "2·5·8",
        q: [
          "Tell me about the place where you usually jog or walk.",
          "주로 조깅이나 산책을 하는 장소에 대해 말해 주세요.",
        ],
        s: [
          [
            "There's a park near my house called {Boramae Park}.",
            "집 근처에 보라매공원이라는 공원이 있어요.",
            "보라매공원",
          ],
          [
            "I {ride my bike} there, and it takes about {10 minutes}.",
            "자전거로 10분쯤 걸려요.",
            "자전거 10분",
          ],
          [
            "The park is {big and well-maintained}, and there are many people {jogging}.",
            "공원은 크고 잘 관리되어 있고 조깅하는 사람이 많아요.",
            "공원 특징",
          ],
          [
            "I usually go {alone}, mostly when I'm {bored}.",
            "보통 혼자 가요. 주로 심심할 때요.",
            "혼자 · 심심할 때",
          ],
          [
            "I like jogging there because it's {refreshing}, and I can enjoy the {greenery}.",
            "상쾌하고 초록을 즐길 수 있어서 거기서 조깅하는 게 좋아요.",
            "이유",
          ],
        ],
      },
      {
        t: "② 조깅을 시작한 계기",
        tag: "6·9",
        q: [
          "How did you start exercising? Tell me about it.",
          "운동을 어떻게 시작하게 됐나요? 이야기해 주세요.",
        ],
        s: [
          [
            "I started jogging {a few years ago} because of {a health problem}.",
            "몇 년 전 건강 문제 때문에 조깅을 시작했어요.",
            "몇 년 전 건강 문제",
          ],
          [
            "At first, it was {hard to run even for 10 minutes}.",
            "처음엔 10분 달리기도 힘들었어요.",
            "처음엔 힘듦",
          ],
          [
            "But I {kept going}, and I {got stronger}.",
            "하지만 계속했고 더 튼튼해졌어요.",
            "꾸준히 → 튼튼",
          ],
          [
            "Now jogging has become {a part of my daily life}.",
            "이제 조깅은 일상의 일부가 되었어요.",
            "지금 일상",
          ],
        ],
      },
      {
        t: "③ 어릴 적 vs 지금",
        tag: "6·9",
        q: [
          "How has the way you spend time outdoors changed since you were young?",
          "어릴 때부터 야외에서 시간을 보내는 방식은 어떻게 변했나요?",
        ],
        s: [
          [
            "When I was young, I often went to {Seoul Grand Park} with {my parents}.",
            "어릴 때 부모님과 서울대공원에 자주 갔어요.",
            "서울대공원 부모님과",
          ],
          ["We {walked around} and enjoyed nature.", "돌아다니며 자연을 즐겼어요.", "산책"],
          [
            "Nowadays, I go to {Boramae Park} by myself to {jog or ride my bike}.",
            "요즘은 혼자 보라매공원에 가서 조깅하거나 자전거를 타요.",
            "요즘 보라매 혼자",
          ],
          [
            "For me, being outdoors is {refreshing} and always an {energy booster}.",
            "저에게 야외 활동은 상쾌하고 늘 활력소예요.",
            "의미",
          ],
        ],
      },
      {
        t: "④ 최근: 한강공원 자전거",
        tag: "6·9",
        q: [
          "Tell me about the last time you exercised outdoors.",
          "마지막으로 야외에서 운동한 때를 말해 주세요.",
        ],
        s: [
          [
            "Recently, I rode my bike along the {Han River Park}.",
            "최근에 한강공원을 따라 자전거를 탔어요.",
            "한강공원 자전거",
          ],
          [
            "It was a {nice day}, and the {river view} was beautiful.",
            "날씨가 좋았고 강 풍경이 아름다웠어요.",
            "날씨 · 풍경",
          ],
          [
            "I rode for about {an hour} and took a {short break}.",
            "한 시간쯤 타고 잠깐 쉬었어요.",
            "한 시간 · 휴식",
          ],
          ["I felt {energetic and happy} afterward.", "타고 나서 활기차고 행복했어요.", "기분"],
          [
            "Thinking about it now, I want to go there {again soon}.",
            "지금 생각하니 곧 또 가고 싶어요.",
            "마무리",
          ],
        ],
      },
    ],
  },
  {
    name: "여행",
    secs: [
      {
        t: "① 여행 소개",
        tag: "2·5·8",
        q: [
          "Tell me about your travel habits. What kind of trips do you like?",
          "여행 습관에 대해 말해 주세요. 어떤 여행을 좋아하나요?",
        ],
        s: [
          [
            "I like traveling, especially {alone}.",
            "여행을 좋아해요, 특히 혼자 하는 여행이요.",
            "혼자 여행",
          ],
          [
            "I have been to {Jeju Island} in Korea and to {Japan}.",
            "한국의 제주도와 일본에 가 봤어요.",
            "제주 · 일본",
          ],
          [
            "My favorite place in Korea is {Jeju} because of its {beautiful nature}.",
            "한국에서 제일 좋아하는 곳은 아름다운 자연 때문에 제주예요.",
            "제주 · 자연",
          ],
          [
            "I prefer {free travel} because I can {plan my own schedule} and go at my own pace.",
            "일정을 직접 짜고 제 속도로 다닐 수 있어서 자유여행이 좋아요.",
            "자유여행 이유",
          ],
          [
            "Traveling brings me {joy and a sense of freedom}. That's why I like traveling.",
            "여행은 기쁨과 자유로움을 줘요. 그래서 여행이 좋아요.",
            "의미",
          ],
        ],
      },
      {
        t: "② 어릴 적 vs 지금",
        tag: "6·9",
        q: [
          "Tell me about a trip you took when you were young. How is it different from your trips now?",
          "어릴 때 갔던 여행을 말해 주세요. 지금의 여행과 어떻게 다른가요?",
        ],
        s: [
          [
            "When I was young, I went to {Jeju Island} with {my family}.",
            "어릴 때 가족과 제주도에 갔어요.",
            "어릴 적 제주 가족과",
          ],
          [
            "I can't remember everything, but I remember {the sea and the beautiful views}.",
            "다 기억나진 않지만 바다와 아름다운 경치는 기억나요.",
            "기억나는 것",
          ],
          [
            "Nowadays, I travel {by myself}, to {Jeju or Japan}.",
            "요즘은 혼자 제주나 일본으로 여행해요.",
            "요즘 혼자",
          ],
          [
            "For me, traveling is {refreshing} and always an {energy booster}.",
            "저에게 여행은 상쾌하고 늘 활력소예요.",
            "의미",
          ],
        ],
      },
      {
        t: "③ 최근 여행 (장소·시기 가정)",
        tag: "6·9",
        q: ["Tell me about the last trip you took.", "마지막으로 다녀온 여행에 대해 말해 주세요."],
        s: [
          [
            "A few months ago, I traveled to {Jeju} {alone}.",
            "몇 달 전에 혼자 제주로 여행을 갔어요.",
            "몇 달 전 제주 혼자",
          ],
          [
            "I {planned everything by myself}, and I enjoyed {my own pace}.",
            "모든 걸 직접 계획했고 제 속도로 즐겼어요.",
            "직접 계획",
          ],
          [
            "I {walked around}, ate {local food}, and took a lot of {pictures}.",
            "걸어 다니고 현지 음식을 먹고 사진을 많이 찍었어요.",
            "활동",
          ],
          [
            "Thinking about it now, I really want to {travel again}.",
            "지금 생각하니 또 여행하고 싶어요.",
            "마무리",
          ],
        ],
      },
      {
        t: "④ 길을 잃음",
        tag: "4·7·10",
        q: [
          "Tell me about a memorable or unexpected experience you had while traveling.",
          "여행 중 기억에 남거나 예상 못 한 경험을 말해 주세요.",
        ],
        s: [
          [
            "One of my memorable experiences was {getting lost} while traveling.",
            "기억에 남는 경험 중 하나는 여행 중 길을 잃은 거예요.",
            "길 잃음",
          ],
          [
            "I was traveling alone in {Japan}, and I was looking for {a restaurant}.",
            "일본에서 혼자 여행하며 식당을 찾고 있었어요.",
            "일본 · 식당 찾는 중",
          ],
          [
            "I was using {Google Maps}, but I {took the wrong way}.",
            "구글 지도를 쓰고 있었는데 길을 잘못 들었어요.",
            "지도 · 잘못 든 길",
          ],
          [
            "It took a lot of time to get there, and I was a bit {nervous}.",
            "도착까지 시간이 오래 걸려서 조금 긴장했어요.",
            "오래 걸림 · 긴장",
          ],
          [
            "But in the end, I {found it}. Getting lost is {part of the trip}, and it became a good memory.",
            "하지만 결국 찾았어요. 길을 잃는 것도 여행의 일부고 좋은 추억이 됐어요.",
            "결말 · 교훈",
          ],
        ],
      },
    ],
  },
  {
    name: "롤플레이 12·13",
    rp: true,
    secs: [
      {
        t: "12번 친구: 콘서트에 못 감",
        tag: "RP12",
        q: [
          "You planned to go to a concert with your friend today, but you are very sick. Call your friend, explain the situation, and suggest two or three alternatives.",
          "오늘 친구와 콘서트에 가기로 했는데 많이 아픕니다. 친구에게 전화해 상황을 설명하고 대안 두세 가지를 제안하세요.",
        ],
        s: [
          [
            "Hello, I'm calling to let you know I have a problem.",
            "안녕, 문제가 생겨서 알려 주려고 전화했어.",
            "인사",
          ],
          ["I'm so {sick} today. I have a {high fever}.", "오늘 많이 아파. 열이 높아.", "상황"],
          [
            "I'm afraid I can't go to the {concert} with you.",
            "미안한데 너랑 콘서트에 못 갈 것 같아.",
            "못 감",
          ],
          ["I don't know what to do.", "어떻게 해야 할지 모르겠어.", "당황"],
          [
            "Would you like to go {next weekend} instead?",
            "대신 다음 주말에 가는 건 어때?",
            "대안1 일정 변경",
          ],
          [
            "Or would you like to go with {someone else}?",
            "아니면 다른 사람이랑 갈래?",
            "대안2 다른 사람",
          ],
          ["Please let me know what you think.", "어떻게 생각하는지 알려 줘.", "마무리"],
        ],
      },
      {
        t: "12번 업체: 잘못된 영화표",
        tag: "RP12",
        q: [
          "You bought movie tickets, but the clerk gave you the wrong ones. Call the theater, explain the problem, and suggest two or three solutions.",
          "영화표를 샀는데 직원이 잘못된 표를 줬습니다. 영화관에 전화해 문제를 설명하고 해결책 두세 가지를 제안하세요.",
        ],
        s: [
          [
            "Hello, I'm calling to let you know I have a problem.",
            "안녕하세요, 문제가 있어서 전화드렸어요.",
            "인사",
          ],
          [
            "I bought {two tickets} for a movie yesterday, but they were for the {wrong movie}.",
            "어제 영화표 두 장을 샀는데 다른 영화 표였어요.",
            "상황",
          ],
          [
            "I'm not sure what to do. Can you tell me what to do?",
            "어떻게 해야 할지 모르겠어요. 알려 주실 수 있나요?",
            "당황",
          ],
          [
            "I was wondering if it's possible to {exchange} these tickets for a different movie.",
            "이 표를 다른 영화로 교환할 수 있을까요?",
            "교환",
          ],
          ["If not, could I get a {refund}?", "안 된다면 환불받을 수 있나요?", "환불"],
          [
            "Do you have any other solutions? Please let me know.",
            "다른 해결책이 있을까요? 알려 주세요.",
            "만능",
          ],
          [
            "Thank you for your understanding. Have a nice day.",
            "이해해 주셔서 감사합니다. 좋은 하루 보내세요.",
            "마무리",
          ],
        ],
      },
      {
        t: "13번 경험: 아파서 약속 취소",
        tag: "RP13",
        q: [
          "Have you ever had to cancel or break a plan because you were sick or had an urgent problem? When did it happen, and how did you solve it?",
          "아프거나 급한 일 때문에 약속을 취소한 적이 있나요? 언제였고 어떻게 해결했나요?",
        ],
        s: [
          [
            "I have experienced a situation like this before.",
            "이런 상황을 겪은 적이 있어요.",
            "도입",
          ],
          [
            "{Last year}, I was supposed to go to {a concert} with my friend, but I was {sick} when I woke up.",
            "작년에 친구와 콘서트에 가기로 했는데 일어나 보니 아팠어요.",
            "상황",
          ],
          [
            "I immediately called {my friend} to let {him} know what happened.",
            "바로 친구에게 전화해서 일어난 일을 알렸어요.",
            "전화",
          ],
          [
            "I explained that I {wasn't feeling well} and offered to {go another day}.",
            "몸이 안 좋다고 설명하고 다른 날 가자고 제안했어요.",
            "설명 · 제안",
          ],
          [
            "My friend was very understanding, and we managed to {go the following week}.",
            "친구가 이해해 줘서 다음 주에 갈 수 있었어요.",
            "해결",
          ],
          ["In the end, everything worked out fine.", "결국 모든 게 잘 풀렸어요.", "결론"],
          [
            "I realized how lucky I was to have {a friend like him}.",
            "그런 친구가 있어서 얼마나 운이 좋은지 깨달았어요.",
            "느낀 점",
          ],
        ],
      },
      {
        t: "13번 경험: 표 교환",
        tag: "RP13",
        q: [
          "Have you ever bought something wrong and had to exchange or return it? What happened and how did you handle it?",
          "잘못 산 물건을 교환하거나 반품한 적이 있나요? 무슨 일이 있었고 어떻게 처리했나요?",
        ],
        s: [
          [
            "I have experienced a situation like this before.",
            "이런 상황을 겪은 적이 있어요.",
            "도입",
          ],
          [
            "I found out that I had bought the {wrong tickets}.",
            "표를 잘못 샀다는 걸 알게 됐어요.",
            "구매 실수",
          ],
          [
            "I immediately called {the theater} to let them know what happened.",
            "바로 영화관에 전화해서 상황을 알렸어요.",
            "전화",
          ],
          [
            "I explained that I {didn't do anything wrong} and asked for {an exchange}.",
            "제가 잘못한 게 없다고 설명하고 교환을 요청했어요.",
            "설명 · 요청",
          ],
          [
            "The staff was very understanding, and we managed to handle it.",
            "직원이 이해해 줘서 잘 해결했어요.",
            "해결",
          ],
          ["In the end, everything worked out fine.", "결국 모든 게 잘 풀렸어요.", "결론"],
          [
            "I realized how lucky I was to {get an exchange}.",
            "교환받을 수 있어서 운이 좋았다고 느꼈어요.",
            "느낀 점",
          ],
        ],
      },
      {
        t: "13번 경험: 지갑 분실",
        tag: "RP13",
        q: [
          "Have you ever lost something? What did you lose, and how did you handle it?",
          "무언가를 잃어버린 적이 있나요? 무엇을 잃어버렸고 어떻게 처리했나요?",
        ],
        s: [
          [
            "I have experienced a situation like this before.",
            "이런 상황을 겪은 적이 있어요.",
            "도입",
          ],
          [
            "I found out that I lost my {wallet} on {the subway}.",
            "지하철에서 지갑을 잃어버렸다는 걸 알게 됐어요.",
            "분실 발견",
          ],
          [
            "I immediately called {the lost and found} to let them know what happened.",
            "바로 분실물 센터에 전화해서 상황을 알렸어요.",
            "전화",
          ],
          [
            "I explained that I {left it on the seat} by accident.",
            "실수로 좌석에 두고 내렸다고 설명했어요.",
            "설명",
          ],
          [
            "The staff was very understanding, and we managed to handle it {on the following day}.",
            "직원이 이해해 줘서 다음 날 해결했어요.",
            "해결",
          ],
          ["In the end, everything worked out fine.", "결국 모든 게 잘 풀렸어요.", "결론"],
          [
            "I realized how lucky I was to {get it back}.",
            "되찾아서 정말 운이 좋았다고 느꼈어요.",
            "느낀 점",
          ],
        ],
      },
    ],
  },
];

const SK_NAMES = {
  jog: "조깅·걷기",
  cafe: "카페·술집",
  concert: "콘서트·공연",
  movie: "영화",
  trip: "여행",
  home: "집",
  music: "음악",
  subway: "지하철",
};
const SKEY = {
  "조깅·걷기": "jog",
  "카페·술집": "cafe",
  "콘서트·공연": "concert",
  영화: "movie",
  여행: "trip",
  집: "home",
  음악: "music",
};
const SK_Q = {
  jog: ["while jogging or walking", "조깅이나 걷기를 하면서"],
  cafe: ["at a cafe", "카페에서"],
  concert: ["at a concert", "콘서트에서"],
  movie: ["at the movie theater", "영화관에서"],
  trip: ["while traveling", "여행하면서"],
  home: ["at home", "집에서"],
  music: ["while listening to music", "음악을 들으면서"],
  subway: ["on the subway", "지하철에서"],
};
const SK_LABEL = {
  DOING: "그때 하던 일",
  REACT: "그때 한 행동",
  SHELTER: "비를 피한 곳",
  ENJOY: "그 시간에 한 일",
  WHERE: "분실 장소",
  SPOT: "둔 곳",
  BACK: "되찾은 방법",
};
const SKELS = [
  {
    id: "A",
    name: "노을",
    desc: "좋은 경험",
    parts: [
      [
        "One of my most memorable experiences was watching a beautiful sunset.",
        "가장 기억에 남는 경험 중 하나는 아름다운 노을을 본 거예요.",
        "노을 본 경험",
      ],
      [
        "Two weeks ago, I was <DOING> when I saw a stunning sunset.",
        "2주 전에 <DOING> 멋진 노을을 봤어요.",
        "2주 전 · 하던 일",
      ],
      [
        "The sky turned orange and red, so I <REACT>.",
        "하늘이 주황색과 붉은색으로 물들어서 <REACT>.",
        "하늘 색 · 반응",
      ],
      ["I was so amazed to see the beautiful colors.", "아름다운 색을 보고 정말 놀랐어요.", "감탄"],
      [
        "The moment made me feel peaceful and happy.",
        "그 순간 마음이 평온하고 행복했어요.",
        "평온 · 행복",
      ],
    ],
    slots: {
      jog: {
        DOING: ["jogging in Boramae Park", "보라매공원에서 조깅하다가"],
        REACT: ["stopped running for a moment", "잠깐 달리기를 멈췄어요"],
      },
      cafe: {
        DOING: ["having a coffee at Starbucks", "스타벅스에서 커피를 마시다가"],
        REACT: ["stopped working for a moment", "잠깐 하던 일을 멈췄어요"],
      },
      concert: {
        DOING: ["walking out of the concert hall", "공연장에서 나오다가"],
        REACT: ["stood still for a moment", "잠깐 가만히 서 있었어요"],
      },
      movie: {
        DOING: ["coming out of the movie theater", "영화관에서 나오다가"],
        REACT: ["stopped walking for a moment", "잠깐 걸음을 멈췄어요"],
      },
      trip: {
        DOING: ["traveling in Jeju", "제주를 여행하다가"],
        REACT: ["sat down on the beach for a moment", "잠깐 해변에 앉았어요"],
      },
      home: {
        DOING: ["standing on the balcony of my apartment", "아파트 베란다에 서 있다가"],
        REACT: ["stayed there for a moment", "잠깐 그곳에 서 있었어요"],
      },
      music: {
        DOING: ["listening to music on my way home", "집에 가는 길에 음악을 듣다가"],
        REACT: ["stopped for a moment and took off my headphones", "잠깐 멈춰서 헤드폰을 벗었어요"],
      },
    },
  },
  {
    id: "B",
    name: "갑자기 비",
    desc: "예상 밖 상황",
    parts: [
      [
        "One of my memorable experiences was when it suddenly started raining.",
        "기억에 남는 경험 중 하나는 갑자기 비가 내리기 시작했을 때예요.",
        "갑자기 비",
      ],
      [
        "I was <DOING>, and I didn't have an umbrella.",
        "<DOING> 우산이 없었어요.",
        "하던 일 · 우산 없음",
      ],
      [
        "I ran to <SHELTER> and waited there until the rain stopped.",
        "<SHELTER> 뛰어가서 비가 그칠 때까지 기다렸어요.",
        "비 피한 곳",
      ],
      [
        "Surprisingly, that time wasn't bad at all. I <ENJOY>.",
        "놀랍게도 그 시간은 전혀 나쁘지 않았어요. <ENJOY>.",
        "뜻밖의 여유",
      ],
      [
        "I realized that not everything is bad, even in unexpected situations.",
        "예상 밖의 상황에서도 모든 게 나쁘지만은 않다는 걸 깨달았어요.",
        "깨달음",
      ],
    ],
    slots: {
      jog: {
        DOING: ["riding my bike in Boramae Park", "보라매공원에서 자전거를 타고 있었는데"],
        SHELTER: ["a nearby Starbucks", "근처 스타벅스로"],
        ENJOY: ["enjoyed a warm coffee and relaxed", "따뜻한 커피를 마시며 쉬었어요"],
      },
      cafe: {
        DOING: ["riding my bike to Starbucks", "스타벅스에 자전거를 타고 가는 중이었는데"],
        SHELTER: ["the Starbucks near my house", "집 근처 스타벅스로"],
        ENJOY: ["enjoyed a warm coffee and relaxed", "따뜻한 커피를 마시며 쉬었어요"],
      },
      concert: {
        DOING: ["waiting in line outside the concert hall", "공연장 밖에서 줄을 서 있었는데"],
        SHELTER: ["a nearby cafe", "근처 카페로"],
        ENJOY: [
          "had a warm coffee and listened to the band's songs",
          "따뜻한 커피를 마시며 그 밴드의 노래를 들었어요",
        ],
      },
      movie: {
        DOING: ["walking to the movie theater", "영화관에 걸어가고 있었는데"],
        SHELTER: ["the theater", "영화관으로"],
        ENJOY: ["enjoyed some popcorn and relaxed", "팝콘을 먹으며 쉬었어요"],
      },
      trip: {
        DOING: ["walking around Jeju", "제주를 걸어 다니고 있었는데"],
        SHELTER: ["a small cafe", "작은 카페로"],
        ENJOY: [
          "enjoyed a warm coffee and watched the rain",
          "따뜻한 커피를 마시며 비 오는 풍경을 봤어요",
        ],
      },
      music: {
        DOING: ["walking home with my headphones on", "헤드폰을 낀 채 집에 걸어가고 있었는데"],
        SHELTER: ["a nearby convenience store", "근처 편의점으로"],
        ENJOY: ["listened to my favorite songs and relaxed", "좋아하는 노래를 들으며 쉬었어요"],
      },
    },
  },
  {
    id: "C",
    name: "지갑 분실",
    desc: "나쁜 경험",
    parts: [
      [
        "One of my most memorable experiences was losing my wallet <WHERE>.",
        "가장 기억에 남는 경험 중 하나는 <WHERE> 지갑을 잃어버린 거예요.",
        "지갑 분실 · 장소",
      ],
      [
        "One day, I <DOING>, and I realized later that I left my wallet <SPOT>.",
        "어느 날 <DOING> 나중에야 지갑을 <SPOT> 두고 온 걸 알았어요.",
        "하던 일 · 둔 곳",
      ],
      [
        "I felt very stressed because my cards were in it.",
        "카드가 들어 있어서 스트레스를 많이 받았어요.",
        "스트레스 · 카드",
      ],
      [
        "The experience taught me to be more careful with my belongings.",
        "그 경험으로 소지품을 더 조심해야 한다는 걸 배웠어요.",
        "교훈",
      ],
      ["Luckily, I got it back <BACK>.", "다행히 <BACK> 되찾았어요.", "결말: 되찾음"],
    ],
    slots: {
      subway: {
        WHERE: ["on the subway", "지하철에서"],
        DOING: ["was on the subway", "지하철을 타고 있었는데"],
        SPOT: ["on the seat", "좌석에"],
        BACK: ["from the lost and found", "분실물 센터에서"],
      },
      jog: {
        WHERE: ["in Boramae Park", "보라매공원에서"],
        DOING: ["was resting in Boramae Park", "보라매공원에서 쉬고 있었는데"],
        SPOT: ["on a bench", "벤치에"],
        BACK: ["when I went back to look for it", "다시 가서 찾아보니"],
      },
      cafe: {
        WHERE: ["at Starbucks", "스타벅스에서"],
        DOING: ["was working at Starbucks", "스타벅스에서 작업하고 있었는데"],
        SPOT: ["on the table", "테이블 위에"],
        BACK: ["after I called the store", "매장에 전화한 뒤"],
      },
      concert: {
        WHERE: ["at a concert", "콘서트에서"],
        DOING: ["went to a concert", "콘서트에 갔는데"],
        SPOT: ["under my seat", "좌석 밑에"],
        BACK: ["from the staff at the hall", "공연장 직원에게서"],
      },
      movie: {
        WHERE: ["at the movie theater", "영화관에서"],
        DOING: ["watched a movie at the theater", "영화관에서 영화를 봤는데"],
        SPOT: ["under my seat", "좌석 밑에"],
        BACK: ["from the theater staff", "영화관 직원에게서"],
      },
      trip: {
        WHERE: ["while traveling in Japan", "일본을 여행하다가"],
        DOING: ["was traveling in Japan", "일본을 여행하고 있었는데"],
        SPOT: ["at a restaurant", "식당에"],
        BACK: ["after I called the restaurant", "식당에 전화한 뒤"],
      },
    },
  },
];
SKELS.forEach((s) => {
  s.tag = "4·7·10";
  s.grp = "기억에 남는 경험 · 4·7·10";
});
Object.assign(SK_LABEL, {
  PLACE: "장소",
  HOW: "방법",
  TIME: "걸리는 시간",
  FEATURE: "특징",
  WITH: "누구와",
  WHEN: "언제",
  WHY: "이유",
  CONTEXT: "상황",
  ACT1: "먼저",
  ACT2: "그다음",
  MEANING: "의미",
  PAST: "어릴 적",
  FEEL: "그때 느낌",
  NOW: "지금",
  CHANGE: "변화",
  CONCL: "결론",
  WHAT: "최근에 한 일",
  ADJ: "분위기",
  DO1: "있는 동안",
  DO2: "그 뒤",
  AGAIN: "다시 하고 싶은 것",
  PROBLEM: "문제 상황",
  CANT: "못 하게 된 일",
  ALT1: "대안 1",
  ALT2: "대안 2",
  SITUATION: "상황",
  REQ1: "요청 1",
  REQ2: "요청 2",
  SIT: "상황",
  WHO: "연락한 곳",
  EXPL: "설명",
  ASK: "요청",
  WHO2: "상대",
  LESSON: "느낀 점",
});
SKELS.push(
  {
    id: "D",
    name: "장소 묘사",
    desc: "자주 가는 곳",
    grp: "묘사 · 2·5·8",
    tag: "2·5·8",
    qs: {
      jog: [
        "Tell me about the place where you usually jog or walk. Where is it and what is it like?",
        "주로 조깅이나 산책을 하는 장소에 대해 말해 주세요. 어디에 있고 어떤 곳인가요?",
      ],
      cafe: [
        "Tell me about a cafe you often visit. Where is it and what is it like?",
        "자주 가는 카페에 대해 말해 주세요. 어디에 있고 어떤 곳인가요?",
      ],
      concert: [
        "Tell me about the place where you go to see concerts. Where is it and what is it like?",
        "콘서트를 보러 가는 곳에 대해 말해 주세요. 어디에 있고 어떤 곳인가요?",
      ],
      movie: [
        "Tell me about the movie theater you usually go to. Where is it and what is it like?",
        "자주 가는 영화관에 대해 말해 주세요. 어디에 있고 어떤 곳인가요?",
      ],
      trip: [
        "Tell me about a place you like to travel to. Where is it and what is it like?",
        "여행 가기 좋아하는 곳에 대해 말해 주세요. 어디에 있고 어떤 곳인가요?",
      ],
    },
    parts: [
      ["I usually go to <PLACE>.", "저는 보통 <PLACE> 가요.", "자주 가는 곳"],
      [
        "I go there <HOW>, and it takes about <TIME>.",
        "<HOW> 가는데 약 <TIME> 걸려요.",
        "이동 · 시간",
      ],
      ["It's <FEATURE>.", "그곳은 <FEATURE>.", "특징"],
      ["I usually go <WITH>, <WHEN>.", "보통 <WITH> <WHEN> 가요.", "누구와 · 언제"],
      ["I like it because <WHY>.", "<WHY> 그곳이 좋아요.", "이유"],
    ],
    slots: {
      jog: {
        PLACE: ["Boramae Park", "보라매공원에"],
        HOW: ["by bike", "자전거로"],
        TIME: ["10 minutes", "10분"],
        FEATURE: [
          "big and well-maintained, and there are many people jogging",
          "크고 잘 관리되어 있고 조깅하는 사람이 많아요",
        ],
        WITH: ["alone", "혼자"],
        WHEN: ["mostly when I'm bored", "주로 심심할 때"],
        WHY: ["it's refreshing, and I can enjoy the greenery", "상쾌하고 초록을 즐길 수 있어서"],
      },
      cafe: {
        PLACE: ["the Starbucks near my house", "집 근처 스타벅스에"],
        HOW: ["by bike", "자전거로"],
        TIME: ["5 minutes", "5분"],
        FEATURE: [
          "quiet and clean, and the seats are comfortable",
          "조용하고 깨끗하고 좌석이 편해요",
        ],
        WITH: ["alone", "혼자"],
        WHEN: ["mostly when I'm bored", "주로 심심할 때"],
        WHY: ["it's a good place to focus on my work", "작업에 집중하기 좋은 곳이라서"],
      },
      concert: {
        PLACE: ["a concert hall in Seoul", "서울의 공연장에"],
        HOW: ["by subway", "지하철로"],
        TIME: ["40 minutes", "40분"],
        FEATURE: [
          "big and well-organized, and the sound is great",
          "크고 잘 정돈돼 있고 음향이 훌륭해요",
        ],
        WITH: ["alone", "혼자"],
        WHEN: ["whenever I have time", "시간 날 때마다"],
        WHY: ["the live music is full of energy", "라이브 음악은 에너지가 넘쳐서"],
      },
      movie: {
        PLACE: ["the movie theater near my house", "집 근처 영화관에"],
        HOW: ["by bike", "자전거로"],
        TIME: ["10 minutes", "10분"],
        FEATURE: [
          "clean and well-maintained, and the seats are comfortable",
          "깨끗하게 관리되고 좌석이 편해요",
        ],
        WITH: ["alone", "혼자"],
        WHEN: ["whenever I have free time", "시간 날 때마다"],
        WHY: [
          "action movies are exciting and full of energy",
          "액션 영화는 짜릿하고 에너지가 넘쳐서",
        ],
      },
      trip: {
        PLACE: ["Jeju Island", "제주도에"],
        HOW: ["by plane", "비행기로"],
        TIME: ["an hour", "1시간"],
        FEATURE: [
          "full of beautiful nature, and the sea is amazing",
          "아름다운 자연으로 가득하고 바다가 멋져요",
        ],
        WITH: ["alone", "혼자"],
        WHEN: ["once or twice a year", "1년에 한두 번"],
        WHY: [
          "I can plan my own schedule and go at my own pace",
          "제 일정대로 제 속도로 다닐 수 있어서",
        ],
      },
    },
  },
  {
    id: "E",
    name: "습관·활동",
    desc: "보통 무엇을 하나",
    grp: "습관 · 3",
    tag: "3",
    qs: {
      jog: ["What do you usually do when you exercise?", "운동할 때 보통 무엇을 하나요?"],
      cafe: ["What do you usually do at a cafe?", "카페에서 보통 무엇을 하나요?"],
      concert: [
        "What do you usually do when you go to a concert?",
        "콘서트에 갈 때 보통 무엇을 하나요?",
      ],
      movie: [
        "What do you usually do when you go to the movies?",
        "영화를 보러 갈 때 보통 무엇을 하나요?",
      ],
      music: ["How do you usually listen to music?", "음악을 보통 어떻게 듣나요?"],
      home: ["What do you usually do at home?", "집에서 보통 무엇을 하나요?"],
      trip: ["What do you usually do when you travel?", "여행할 때 보통 무엇을 하나요?"],
    },
    parts: [
      [
        "How I spend my time <CONTEXT> is not special.",
        "<CONTEXT> 시간을 보내는 방식은 특별하지 않아요.",
        "평범한 습관",
      ],
      ["I usually <ACT1>, and then I <ACT2>.", "보통 <ACT1> 그다음 <ACT2>.", "먼저 → 그다음"],
      [
        "I prefer doing it <WITH> because <WHY>.",
        "<WHY> <WITH> 하는 걸 선호해요.",
        "누구와 · 이유",
      ],
      ["I do it <WHEN>.", "<WHEN> 해요.", "언제"],
      ["For me, it's <MEANING>.", "저에게는 <MEANING>.", "의미"],
    ],
    slots: {
      jog: {
        CONTEXT: ["when I exercise", "운동하면서"],
        ACT1: ["warm up near the entrance of the park", "공원 입구 근처에서 몸을 풀고"],
        ACT2: ["jog around the park for about 30 minutes", "공원을 30분쯤 달려요"],
        WITH: ["alone", "혼자"],
        WHY: ["I can set my own pace", "제 속도대로 달릴 수 있어서"],
        WHEN: ["a few times a week", "일주일에 몇 번"],
        MEANING: [
          "refreshing and a great stress reliever",
          "상쾌하고 스트레스가 잘 풀리는 시간이에요",
        ],
      },
      cafe: {
        CONTEXT: ["at a cafe", "카페에서"],
        ACT1: ["get a coffee", "커피를 사고"],
        ACT2: ["work on my laptop", "노트북으로 작업해요"],
        WITH: ["alone", "혼자"],
        WHY: ["I can concentrate better", "더 집중할 수 있어서"],
        WHEN: ["when I have time on weekends", "주말에 시간 있을 때"],
        MEANING: ["a refreshing break", "상쾌한 휴식이에요"],
      },
      concert: {
        CONTEXT: ["around a concert", "콘서트 전후로"],
        ACT1: ["buy a ticket online", "온라인으로 표를 사고"],
        ACT2: ["take the subway to the hall", "지하철을 타고 공연장에 가요"],
        WITH: ["alone", "혼자"],
        WHY: ["I can focus on the music", "음악에 집중할 수 있어서"],
        WHEN: ["whenever a band I like holds a concert", "좋아하는 밴드가 콘서트를 열 때마다"],
        MEANING: ["an energy booster", "활력소예요"],
      },
      movie: {
        CONTEXT: ["when I go to the movies", "영화를 보러 갈 때"],
        ACT1: ["buy some popcorn", "팝콘을 사고"],
        ACT2: ["write a short review after the movie", "영화가 끝난 뒤 짧은 리뷰를 써요"],
        WITH: ["alone", "혼자"],
        WHY: ["I can focus on the movie", "영화에 집중할 수 있어서"],
        WHEN: ["whenever I have free time", "시간 날 때마다"],
        MEANING: ["a great way to relax", "긴장을 푸는 좋은 방법이에요"],
      },
      music: {
        CONTEXT: ["with music", "음악과 함께"],
        ACT1: ["put on my headphones", "헤드폰을 끼고"],
        ACT2: ["play my favorite rock songs", "좋아하는 록 음악을 틀어요"],
        WITH: ["alone", "혼자"],
        WHY: ["I can enjoy the sound better", "소리를 더 잘 즐길 수 있어서"],
        WHEN: ["when I'm on my computer", "컴퓨터를 쓸 때"],
        MEANING: ["a great stress reliever", "스트레스를 풀어 주는 시간이에요"],
      },
      home: {
        CONTEXT: ["at home", "집에서"],
        ACT1: ["turn on my computer", "컴퓨터를 켜고"],
        ACT2: ["play online games", "온라인 게임을 해요"],
        WITH: ["alone", "혼자"],
        WHY: ["I can focus better", "더 집중할 수 있어서"],
        WHEN: ["on the weekends", "주말에"],
        MEANING: ["my way to recharge", "충전하는 방법이에요"],
      },
      trip: {
        CONTEXT: ["when I travel", "여행할 때"],
        ACT1: ["plan everything by myself", "모든 걸 직접 계획하고"],
        ACT2: ["walk around and try local food", "걸어 다니며 현지 음식을 먹어 봐요"],
        WITH: ["alone", "혼자"],
        WHY: ["I can go at my own pace", "제 속도로 다닐 수 있어서"],
        WHEN: ["once or twice a year", "1년에 한두 번"],
        MEANING: ["a source of joy and freedom", "기쁨과 자유의 원천이에요"],
      },
    },
  },
  {
    id: "F",
    name: "어릴 적 vs 지금",
    desc: "변화 비교",
    grp: "비교·최근 · 6·9",
    tag: "6·9",
    qs: {
      movie: [
        "How have your movie preferences changed since you were young?",
        "어릴 때부터 지금까지 영화 취향은 어떻게 변했나요?",
      ],
      music: [
        "How has your taste in music changed since you were young?",
        "어릴 때부터 지금까지 음악 취향은 어떻게 변했나요?",
      ],
      concert: [
        "How have your concert-going habits and music tastes changed since you were young?",
        "어릴 때부터 지금까지 콘서트와 음악 취향은 어떻게 변했나요?",
      ],
      cafe: [
        "How is going to cafes different now from when you were young?",
        "지금 카페에 가는 건 어릴 때와 어떻게 다른가요?",
      ],
      jog: [
        "How has the way you spend time outdoors changed since you were young?",
        "어릴 때부터 야외에서 시간을 보내는 방식은 어떻게 변했나요?",
      ],
      trip: [
        "How are your trips now different from the trips you took when you were young?",
        "지금의 여행은 어릴 때 갔던 여행과 어떻게 다른가요?",
      ],
      home: [
        "How is your home different from the home you lived in when you were young?",
        "지금 집은 어릴 때 살던 집과 어떻게 다른가요?",
      ],
    },
    parts: [
      ["When I was young, I <PAST>.", "어릴 때 저는 <PAST>.", "어릴 적"],
      ["<FEEL>.", "<FEEL>.", "그때 느낌"],
      ["Now I <NOW>.", "지금은 <NOW>.", "지금"],
      ["You can say things have <CHANGE> since then.", "그때부터 <CHANGE> 할 수 있어요.", "변화"],
      ["In conclusion, <CONCL>.", "결론적으로 <CONCL>.", "결론"],
    ],
    slots: {
      movie: {
        PAST: [
          "liked “Titanic” and watched it with my parents",
          "'타이타닉'을 좋아했고 부모님과 같이 봤어요",
        ],
        FEEL: [
          "I didn't know much about movies then, but I really liked it",
          "그땐 영화를 잘 몰랐지만 정말 좋아했어요",
        ],
        NOW: [
          "like action movies, especially Tarantino's",
          "액션 영화, 특히 타란티노 영화를 좋아해요",
        ],
        CHANGE: ["changed a little", "조금 달라졌다고"],
        CONCL: [
          "my favorite movies are more intense than before",
          "좋아하는 영화가 예전보다 더 강렬해졌어요",
        ],
      },
      music: {
        PAST: ["listened to Toy and Roller Coaster", "토이와 롤러코스터를 들었어요"],
        FEEL: [
          "I still like them now, and they are my favorite artists",
          "지금도 좋아하고 가장 좋아하는 아티스트예요",
        ],
        NOW: ["also like rock bands like Silica Gel", "실리카겔 같은 록 밴드도 좋아해요"],
        CHANGE: ["changed a little", "조금 달라졌다고"],
        CONCL: [
          "my favorite music is more varied than before",
          "좋아하는 음악이 예전보다 다양해졌어요",
        ],
      },
      concert: {
        PAST: ["liked listening to Toy and Roller Coaster", "토이와 롤러코스터를 즐겨 들었어요"],
        FEEL: ["I still like them now", "지금도 좋아해요"],
        NOW: [
          "also enjoy rock bands like Silica Gel, and I go to their concerts",
          "실리카겔 같은 록 밴드도 즐기고 콘서트에도 가요",
        ],
        CHANGE: ["changed a little", "조금 달라졌다고"],
        CONCL: ["my taste has become wider than before", "취향이 예전보다 넓어졌어요"],
      },
      cafe: {
        PAST: ["didn't go to cafes often", "카페에 자주 안 갔어요"],
        FEEL: ["But sometimes I went to one with my parents", "하지만 가끔 부모님과 갔어요"],
        NOW: ["go to Starbucks once in a while by myself", "가끔 혼자 스타벅스에 가요"],
        CHANGE: ["changed a little", "조금 달라졌다고"],
        CONCL: [
          "going to a cafe is refreshing and always an energy booster for me",
          "저에게 카페는 상쾌하고 늘 활력소예요",
        ],
      },
      jog: {
        PAST: [
          "often went to Seoul Grand Park with my parents",
          "부모님과 서울대공원에 자주 갔어요",
        ],
        FEEL: ["We walked around and enjoyed nature", "돌아다니며 자연을 즐겼어요"],
        NOW: [
          "go to Boramae Park by myself to jog or ride my bike",
          "혼자 보라매공원에 가서 조깅하거나 자전거를 타요",
        ],
        CHANGE: ["changed a lot", "많이 달라졌다고"],
        CONCL: [
          "being outdoors is refreshing and always an energy booster for me",
          "저에게 야외 활동은 상쾌하고 늘 활력소예요",
        ],
      },
      trip: {
        PAST: ["went to Jeju Island with my family", "가족과 제주도에 갔어요"],
        FEEL: [
          "I can't remember everything, but I remember the sea and the beautiful views",
          "다 기억나진 않지만 바다와 아름다운 경치는 기억나요",
        ],
        NOW: ["travel by myself, to Jeju or Japan", "혼자 제주나 일본으로 여행해요"],
        CHANGE: ["changed a lot", "많이 달라졌다고"],
        CONCL: [
          "traveling is refreshing and always an energy booster for me",
          "저에게 여행은 상쾌하고 늘 활력소예요",
        ],
      },
      home: {
        PAST: [
          "lived in an apartment with my family, and it was bigger than my place now",
          "가족과 아파트에 살았고 지금 집보다 더 넓었어요",
        ],
        FEEL: ["I really enjoyed living with my family", "가족과 함께 사는 게 정말 좋았어요"],
        NOW: [
          "live alone in a smaller apartment, and I enjoy my freedom",
          "더 작은 아파트에서 혼자 살며 자유를 즐겨요",
        ],
        CHANGE: ["changed a lot", "많이 달라졌다고"],
        CONCL: [
          "my old home was bigger, but my home now is comfortable for me",
          "예전 집이 더 컸지만 지금 집이 저한테는 편해요",
        ],
      },
    },
  },
  {
    id: "G",
    name: "최근 경험",
    desc: "마지막으로 한 일",
    grp: "비교·최근 · 6·9",
    tag: "6·9",
    qs: {
      movie: [
        "Tell me about the last movie you saw. What was it like?",
        "마지막으로 본 영화에 대해 말해 주세요. 어땠나요?",
      ],
      concert: [
        "Tell me about the last concert you went to.",
        "마지막으로 간 콘서트에 대해 말해 주세요.",
      ],
      cafe: [
        "Tell me about the last time you went to a cafe.",
        "마지막으로 카페에 갔던 때를 말해 주세요.",
      ],
      jog: [
        "Tell me about the last time you exercised outdoors.",
        "마지막으로 야외에서 운동한 때를 말해 주세요.",
      ],
      trip: ["Tell me about the last trip you took.", "마지막으로 다녀온 여행에 대해 말해 주세요."],
      music: [
        "Tell me about the last time you really enjoyed music.",
        "음악을 마음껏 즐겼던 마지막 때를 말해 주세요.",
      ],
      home: [
        "Tell me about the last time you spent a weekend at home.",
        "마지막으로 주말을 집에서 보낸 때를 말해 주세요.",
      ],
    },
    parts: [
      ["Recently, I <WHAT>.", "최근에 저는 <WHAT>.", "최근에 한 일"],
      ["It was <ADJ>, and I was really <FEEL>.", "<ADJ> 정말 <FEEL>.", "분위기 · 느낌"],
      ["While I was there, I <DO1>.", "거기 있는 동안 <DO1>.", "있는 동안"],
      ["After that, I <DO2>.", "그 뒤에는 <DO2>.", "그 뒤"],
      [
        "Thinking about it now, I really want to <AGAIN>.",
        "지금 생각하니 정말 <AGAIN> 싶어요.",
        "마무리",
      ],
    ],
    slots: {
      movie: {
        WHAT: [
          "went to the theater alone and watched “The Odyssey”",
          "혼자 극장에 가서 '오디세이'를 봤어요",
        ],
        ADJ: ["amazing", "놀라웠고"],
        FEEL: ["impressed", "감명받았어요"],
        DO1: ["ate some popcorn", "팝콘을 먹었어요"],
        DO2: ["wrote a review about it", "리뷰를 썼어요"],
        AGAIN: ["go to the movies again", "또 영화를 보러 가고"],
      },
      concert: {
        WHAT: ["went to a Silica Gel concert alone", "혼자 실리카겔 콘서트에 갔어요"],
        ADJ: ["powerful", "강렬했고"],
        FEEL: ["excited", "신났어요"],
        DO1: ["enjoyed the music with the crowd", "관객들과 함께 음악을 즐겼어요"],
        DO2: ["hummed their songs on my way home", "집에 오는 길에 그들의 노래를 흥얼거렸어요"],
        AGAIN: ["go to another concert", "또 콘서트에 가고"],
      },
      cafe: {
        WHAT: ["went to Starbucks after riding my bike", "자전거를 탄 뒤 스타벅스에 갔어요"],
        ADJ: ["quiet", "조용했고"],
        FEEL: ["relaxed", "편안했어요"],
        DO1: ["had an iced coffee", "아이스 커피를 마셨어요"],
        DO2: ["opened my laptop and studied English", "노트북을 열고 영어를 공부했어요"],
        AGAIN: ["spend more time at cafes", "카페에서 더 시간을 보내고"],
      },
      jog: {
        WHAT: ["rode my bike along the Han River Park", "한강공원을 따라 자전거를 탔어요"],
        ADJ: ["a nice day", "좋은 날씨였고"],
        FEEL: ["energetic", "활기찼어요"],
        DO1: ["took a short break by the river", "강가에서 잠깐 쉬었어요"],
        DO2: ["rode back home slowly", "천천히 자전거를 타고 집에 왔어요"],
        AGAIN: ["go there again soon", "곧 또 거기에 가고"],
      },
      trip: {
        WHAT: ["traveled to Jeju alone", "혼자 제주로 여행을 갔어요"],
        ADJ: ["beautiful", "아름다웠고"],
        FEEL: ["relaxed", "편안했어요"],
        DO1: ["walked around and ate local food", "걸어 다니며 현지 음식을 먹었어요"],
        DO2: ["took a lot of pictures", "사진을 많이 찍었어요"],
        AGAIN: ["travel again", "또 여행을 가고"],
      },
      music: {
        WHAT: [
          "listened to Silica Gel's songs for a long time",
          "실리카겔 노래를 오랫동안 들었어요",
        ],
        ADJ: ["cool", "멋졌고"],
        FEEL: ["happy", "행복했어요"],
        DO1: ["played their songs on my computer", "컴퓨터로 그들의 노래를 틀었어요"],
        DO2: ["looked up their next concert", "다음 콘서트를 찾아봤어요"],
        AGAIN: ["go to their next concert", "다음 콘서트에 가고"],
      },
      home: {
        WHAT: [
          "stayed home and played online games on the weekend",
          "주말에 집에서 온라인 게임을 했어요",
        ],
        ADJ: ["relaxing", "편안했고"],
        FEEL: ["refreshed", "개운했어요"],
        DO1: ["played with my friends online", "친구들과 온라인으로 같이 했어요"],
        DO2: ["listened to rock music", "록 음악을 들었어요"],
        AGAIN: ["have another quiet weekend", "또 조용한 주말을 보내고"],
      },
    },
  },
  {
    id: "H",
    name: "친구에게 전화",
    desc: "약속 못 지킴 → 대안",
    grp: "롤플레이 12",
    tag: "RP12",
    kn: { concert: "콘서트", movie: "영화", jog: "조깅", trip: "여행", cafe: "카페" },
    qs: {
      concert: [
        "You planned to go to a concert with your friend today, but something went wrong. Call your friend, explain the situation, and suggest two or three alternatives.",
        "오늘 친구와 콘서트에 가기로 했는데 문제가 생겼습니다. 친구에게 전화해 상황을 설명하고 대안 두세 가지를 제안하세요.",
      ],
      movie: [
        "You planned to see a movie with your friend today, but something went wrong. Call your friend, explain the situation, and suggest two or three alternatives.",
        "오늘 친구와 영화를 보기로 했는데 문제가 생겼습니다. 친구에게 전화해 상황을 설명하고 대안 두세 가지를 제안하세요.",
      ],
      jog: [
        "You planned to go jogging with your friend today, but something went wrong. Call your friend, explain the situation, and suggest two or three alternatives.",
        "오늘 친구와 조깅하기로 했는데 문제가 생겼습니다. 친구에게 전화해 상황을 설명하고 대안 두세 가지를 제안하세요.",
      ],
      trip: [
        "You planned to go on a trip with your friend today, but something went wrong. Call your friend, explain the situation, and suggest two or three alternatives.",
        "오늘 친구와 여행을 떠나기로 했는데 문제가 생겼습니다. 친구에게 전화해 상황을 설명하고 대안 두세 가지를 제안하세요.",
      ],
      cafe: [
        "You planned to meet your friend at a cafe today, but something went wrong. Call your friend, explain the situation, and suggest two or three alternatives.",
        "오늘 친구와 카페에서 만나기로 했는데 문제가 생겼습니다. 친구에게 전화해 상황을 설명하고 대안 두세 가지를 제안하세요.",
      ],
    },
    parts: [
      [
        "Hello, I'm calling to let you know I have a problem.",
        "안녕, 문제가 생겨서 알려 주려고 전화했어.",
        "인사",
      ],
      ["<PROBLEM>.", "<PROBLEM>.", "상황"],
      ["I'm afraid <CANT>.", "미안한데 <CANT> 것 같아.", "못 하게 됨"],
      ["I don't know what to do.", "어떻게 해야 할지 모르겠어.", "당황"],
      ["Would you like to <ALT1> instead?", "대신 <ALT1> 어때?", "대안 1"],
      ["Or would you like to <ALT2>?", "아니면 <ALT2> 어때?", "대안 2"],
      ["Please let me know what you think.", "어떻게 생각하는지 알려 줘.", "마무리"],
    ],
    slots: {
      concert: {
        PROBLEM: ["I'm so sick today. I have a high fever", "오늘 많이 아파. 열이 높아"],
        CANT: ["I can't go to the concert with you", "너랑 콘서트에 갈 수 없을"],
        ALT1: ["go next weekend", "다음 주말에 가는 건"],
        ALT2: ["go with someone else", "다른 사람이랑 가는 건"],
      },
      movie: {
        PROBLEM: [
          "My bike has a flat tire, and I can't get there in time",
          "자전거 바퀴가 펑크 나서 제시간에 갈 수가 없어",
        ],
        CANT: ["I can't see the movie with you", "너랑 영화를 볼 수 없을"],
        ALT1: ["watch it next Saturday", "다음 토요일에 보는 건"],
        ALT2: ["see a later show today", "오늘 늦은 시간 상영을 보는 건"],
      },
      jog: {
        PROBLEM: [
          "I hurt my ankle yesterday, and it still hurts",
          "어제 발목을 다쳤는데 아직도 아파",
        ],
        CANT: ["I can't go jogging with you", "너랑 조깅하러 갈 수 없을"],
        ALT1: ["go jogging tomorrow", "내일 조깅하는 건"],
        ALT2: ["take a slow walk in the park", "공원에서 천천히 걷는 건"],
      },
      trip: {
        PROBLEM: ["My flight was canceled because of the weather", "날씨 때문에 비행기가 취소됐어"],
        CANT: ["I can't go on the trip with you today", "오늘 너랑 여행을 갈 수 없을"],
        ALT1: ["leave next weekend", "다음 주말에 출발하는 건"],
        ALT2: ["visit a closer place first", "가까운 곳부터 가 보는 건"],
      },
      cafe: {
        PROBLEM: [
          "I have a bad cold, and I'm coughing a lot",
          "감기가 심하게 걸려서 기침을 많이 해",
        ],
        CANT: ["I can't meet you at the cafe", "카페에서 널 만날 수 없을"],
        ALT1: ["meet tomorrow", "내일 만나는 건"],
        ALT2: ["talk on the phone for now", "일단 전화로 이야기하는 건"],
      },
    },
  },
  {
    id: "I",
    name: "업체에 전화",
    desc: "교환 → 환불 → 대안",
    grp: "롤플레이 12",
    tag: "RP12",
    kn: { movie: "영화표", concert: "콘서트 표", trip: "호텔 예약" },
    qs: {
      movie: [
        "You bought movie tickets, but the clerk gave you the wrong ones. Call the theater, explain the problem, and suggest two or three solutions.",
        "영화표를 샀는데 직원이 잘못된 표를 줬습니다. 영화관에 전화해 문제를 설명하고 해결책 두세 가지를 제안하세요.",
      ],
      concert: [
        "You bought a concert ticket, but you cannot go on that day. Call the ticket office, explain the situation, and suggest two or three solutions.",
        "콘서트 표를 샀는데 그날 갈 수 없게 됐습니다. 예매처에 전화해 상황을 설명하고 해결책 두세 가지를 제안하세요.",
      ],
      trip: [
        "You booked a hotel room, but you have to cancel your trip. Call the hotel, explain the problem, and suggest two or three solutions.",
        "호텔 방을 예약했는데 여행을 취소해야 합니다. 호텔에 전화해 문제를 설명하고 해결책 두세 가지를 제안하세요.",
      ],
    },
    parts: [
      [
        "Hello, I'm calling to let you know I have a problem.",
        "안녕하세요, 문제가 있어서 전화드렸어요.",
        "인사",
      ],
      ["<SITUATION>.", "<SITUATION>.", "상황"],
      [
        "I'm not sure what to do. Can you tell me what to do?",
        "어떻게 해야 할지 모르겠어요. 알려 주실 수 있나요?",
        "당황",
      ],
      [
        "I was wondering if it's possible to <REQ1>.",
        "<REQ1> 수 있는지 궁금해서요.",
        "요청 1: 교환·변경",
      ],
      ["If not, could I <REQ2>?", "안 된다면 <REQ2> 수 있을까요?", "요청 2: 환불·취소"],
      [
        "Do you have any other solutions? Please let me know.",
        "다른 해결책이 있을까요? 알려 주세요.",
        "만능",
      ],
      [
        "Thank you for your understanding. Have a nice day.",
        "이해해 주셔서 감사합니다. 좋은 하루 보내세요.",
        "마무리",
      ],
    ],
    slots: {
      movie: {
        SITUATION: [
          "I bought two tickets for a movie yesterday, but they were for the wrong movie",
          "어제 영화표를 두 장 샀는데 다른 영화 표였어요",
        ],
        REQ1: ["exchange these tickets for a different movie", "이 표를 다른 영화로 교환할"],
        REQ2: ["get a refund", "환불받을"],
      },
      concert: {
        SITUATION: [
          "I bought a ticket for Saturday's concert, but I can't make it that day",
          "토요일 콘서트 표를 샀는데 그날 갈 수가 없어요",
        ],
        REQ1: ["change my ticket to another day", "표를 다른 날로 바꿀"],
        REQ2: ["get a refund", "환불받을"],
      },
      trip: {
        SITUATION: [
          "I booked a hotel room for this weekend, but I have to cancel my trip",
          "이번 주말 호텔 방을 예약했는데 여행을 취소해야 해요",
        ],
        REQ1: ["change my reservation to next weekend", "예약을 다음 주말로 변경할"],
        REQ2: ["cancel it without a fee", "수수료 없이 취소할"],
      },
    },
  },
  {
    id: "J",
    name: "비슷한 경험",
    desc: "문제 → 전화 → 해결",
    grp: "롤플레이 13",
    tag: "RP13",
    kn: {
      concert: "약속 취소 (콘서트)",
      movie: "표 교환 (영화)",
      subway: "분실 (지하철)",
      trip: "예약 문제 (여행)",
    },
    qs: {
      concert: [
        "Have you ever had to cancel or break a plan because you were sick or had an urgent problem? When did it happen, and how did you solve it?",
        "아프거나 급한 일 때문에 약속을 취소한 적이 있나요? 언제였고 어떻게 해결했나요?",
      ],
      movie: [
        "Have you ever bought something wrong and had to exchange or return it? What happened and how did you handle it?",
        "잘못 산 물건을 교환하거나 반품한 적이 있나요? 무슨 일이 있었고 어떻게 처리했나요?",
      ],
      subway: [
        "Have you ever lost something? What did you lose, and how did you handle it?",
        "무언가를 잃어버린 적이 있나요? 무엇을 잃어버렸고 어떻게 처리했나요?",
      ],
      trip: [
        "Have you ever had a problem with a reservation or a trip? What happened and how did you handle it?",
        "예약이나 여행에서 문제가 생긴 적이 있나요? 무슨 일이 있었고 어떻게 처리했나요?",
      ],
    },
    parts: [
      ["I have experienced a situation like this before.", "이런 상황을 겪은 적이 있어요.", "도입"],
      ["I found out that <SIT>.", "<SIT> 알게 됐어요.", "상황"],
      [
        "I immediately called <WHO> to let them know what happened.",
        "바로 <WHO> 전화해서 상황을 알렸어요.",
        "전화",
      ],
      [
        "I explained that <EXPL> and asked for <ASK>.",
        "<EXPL> 설명하고 <ASK> 요청했어요.",
        "설명 · 요청",
      ],
      [
        "<WHO2> was very understanding, and we managed to <HOW>.",
        "<WHO2> 이해해 줘서 <HOW>.",
        "해결",
      ],
      ["In the end, everything worked out fine.", "결국 모든 게 잘 풀렸어요.", "결론"],
      ["I realized how lucky I was to <LESSON>.", "<LESSON> 운이 좋았다고 느꼈어요.", "느낀 점"],
    ],
    slots: {
      concert: {
        SIT: [
          "I couldn't go to a concert with my friend because I was sick",
          "몸이 아파서 친구와 콘서트에 갈 수 없다는 걸",
        ],
        WHO: ["my friend", "친구에게"],
        EXPL: ["I wasn't feeling well", "몸이 안 좋다고"],
        ASK: ["another day", "다른 날로 미루는 걸"],
        WHO2: ["My friend", "친구가"],
        HOW: ["go the following week", "다음 주에 갈 수 있었어요"],
        LESSON: ["have a friend like him", "그런 친구가 있어서"],
      },
      movie: {
        SIT: ["I had bought the wrong tickets", "표를 잘못 샀다는 걸"],
        WHO: ["the theater", "영화관에"],
        EXPL: ["I didn't do anything wrong", "제가 잘못한 게 없다고"],
        ASK: ["an exchange", "교환을"],
        WHO2: ["The staff", "직원이"],
        HOW: ["handle it", "잘 해결했어요"],
        LESSON: ["get an exchange", "교환받을 수 있어서"],
      },
      subway: {
        SIT: ["I lost my wallet on the subway", "지하철에서 지갑을 잃어버렸다는 걸"],
        WHO: ["the lost and found", "분실물 센터에"],
        EXPL: ["I left it on the seat by accident", "실수로 좌석에 두고 내렸다고"],
        ASK: ["help finding it", "찾는 데 도움을"],
        WHO2: ["The staff", "직원이"],
        HOW: ["handle it on the following day", "다음 날 해결했어요"],
        LESSON: ["get it back", "되찾아서"],
      },
      trip: {
        SIT: [
          "I had booked the wrong dates for my hotel in Japan",
          "일본 호텔 날짜를 잘못 예약했다는 걸",
        ],
        WHO: ["the hotel", "호텔에"],
        EXPL: ["I made a mistake with the dates", "제가 날짜를 착각했다고"],
        ASK: ["a change", "변경을"],
        WHO2: ["The staff", "직원이"],
        HOW: ["fix it", "바로잡았어요"],
        LESSON: ["have such kind staff", "친절한 직원분들을 만나서"],
      },
    },
  },
);
