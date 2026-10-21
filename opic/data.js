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
    name: "롤플레이 11 · 질문하기",
    cat: "rp",
    rp: true,
    secs: [
      {
        t: "11번 친구: 영화 약속",
        tag: "RP11",
        s: [
          [
            "Hi, how are you? I want to {watch a movie} with you this weekend. {You're going to love it.}",
            "안녕, 잘 지내? 이번 주말에 너랑 영화 보고 싶어. 너도 분명 좋아할 거야.",
            "용건",
          ],
          [
            "Do you have time this weekend? What about {this Saturday}? What time is good for you?",
            "이번 주말에 시간 있어? 토요일은 어때? 몇 시가 괜찮아?",
            "시간",
          ],
          [
            "{Seven} p.m. would be great. Let's make it then.",
            "저녁 일곱 시면 좋겠어. 그럼 그때로 하자.",
            "시간 확정",
          ],
          [
            "Where do you want to meet? Let's meet at {the Gangnam Station exit number 4}. What do you think?",
            "어디서 만날까? 강남역 4번 출구에서 만나자. 어떻게 생각해?",
            "장소",
          ],
          [
            "After that, what do you want to do? Do you want to {eat something}, or do you want to {see something}? It's up to you.",
            "그 다음엔 뭐 하고 싶어? 뭘 먹거나 뭘 보거나 하고 싶어? 네가 정해.",
            "활동",
          ],
          [
            "Is there anything I should bring? Just think about it and let me know. See you then. Bye.",
            "내가 챙길 게 있을까? 생각해 보고 알려 줘. 그때 보자. 안녕.",
            "마무리",
          ],
        ],
        q: [
          "There is a situation I need you to act out. You want to go see a movie with your friend. Call your friend and ask three or four questions.",
          "상황을 연기해 주세요. 친구와 영화를 보러 가고 싶습니다. 친구에게 전화해서 세네 가지 질문을 하세요.",
        ],
      },
      {
        t: "11번 친구: MP3 플레이어 조언",
        tag: "RP11",
        s: [
          [
            "Hi, how are you? I heard that you bought an {MP3 player} recently.",
            "안녕, 잘 지내? 너 최근에 MP3 플레이어 샀다고 들었어.",
            "인사 · 용건",
          ],
          [
            "Where did you get it? How much was it? Was it good?",
            "어디서 샀어? 얼마였어? 좋았어?",
            "질문 3개",
          ],
          [
            "I want to buy one, too. Would you go with me?",
            "나도 하나 사고 싶어. 같이 가 줄래?",
            "부탁",
          ],
          [
            "Do you have time this weekend? What time is good for you?",
            "이번 주말에 시간 있어? 몇 시가 괜찮아?",
            "시간",
          ],
          [
            "Where do you want to meet? Let's meet at {the Gangnam Station exit number 4}.",
            "어디서 만날까? 강남역 4번 출구에서 만나자.",
            "장소",
          ],
          [
            "You can call me on my cell. See you then. Bye.",
            "내 휴대폰으로 전화해도 돼. 그때 보자. 안녕.",
            "마무리",
          ],
        ],
        q: [
          "You want to buy an MP3 player, and your friend bought one recently. Before you buy, call your friend and ask three or four questions about it.",
          "MP3 플레이어를 사고 싶은데 친구가 최근에 샀습니다. 사기 전에 친구에게 전화해서 그것에 대해 세네 가지 질문을 하세요.",
        ],
      },
      {
        t: "11번 업체: 영화표 문의",
        tag: "RP11",
        s: [
          [
            "Hello, how are you doing? I'm calling to ask you something. I would like to {buy two tickets for a movie that is newly released}.",
            "안녕하세요, 문의드릴 게 있어서 전화했어요. 새로 개봉한 영화 표 두 장을 사고 싶어요.",
            "도입 · 용건",
          ],
          [
            "What kinds of {movies} do you have? What kinds of {times} do you have?",
            "어떤 영화가 있나요? 어떤 시간대가 있나요?",
            "종류",
          ],
          [
            "I'd like to {sit in the middle row} if tickets are available. Do you have any recommendations?",
            "표가 있다면 가운데 줄에 앉고 싶어요. 추천해 주실 만한 게 있나요?",
            "선호 · 추천",
          ],
          [
            "How much are they? Can I receive a discount?",
            "얼마인가요? 할인도 받을 수 있나요?",
            "가격 · 할인",
          ],
          [
            "Can I use a credit card? I have a BC card. Can I use it?",
            "신용카드 되나요? 저는 BC카드가 있는데 사용할 수 있나요?",
            "결제",
          ],
          [
            "Where is the {theater} located? Can you tell me how to get there?",
            "영화관은 어디에 있나요? 어떻게 가는지 알려 주실 수 있나요?",
            "위치",
          ],
          [
            "I want to know about your operation hours. When do you open, and when do you close?",
            "영업시간을 알고 싶어요. 몇 시에 열고 몇 시에 닫나요?",
            "영업시간",
          ],
          [
            "Where is the parking area? Can I use it for free?",
            "주차장은 어디인가요? 무료로 쓸 수 있나요?",
            "주차장",
          ],
          ["Thank you. Thank you for your help.", "감사합니다. 도와주셔서 감사해요.", "감사"],
        ],
        q: [
          "There is a situation I need you to act out. You are supposed to watch a movie with your friend. Call the theater and ask three or four questions.",
          "상황을 연기해 주세요. 친구와 영화를 보기로 했습니다. 영화관에 전화해서 세네 가지 질문을 하세요.",
        ],
      },
      {
        t: "11번 업체: 렌터카 문의",
        tag: "RP11",
        s: [
          [
            "Hello, how are you doing? I'm calling to ask you something. I want to {rent a car for a week}.",
            "안녕하세요, 문의드릴 게 있어서 전화했어요. 일주일 동안 차를 빌리고 싶어요.",
            "도입 · 용건",
          ],
          [
            "What kinds of {cars} do you have? What kinds of {insurance} do you have?",
            "어떤 차량이 있나요? 어떤 보험이 있나요?",
            "종류",
          ],
          [
            "I'd like to rent {an SUV for my family}. Do you have any recommendations?",
            "가족이 탈 SUV를 빌리고 싶어요. 추천해 주실 만한 게 있나요?",
            "선호 · 추천",
          ],
          [
            "How much is it? Can I receive a discount?",
            "얼마인가요? 할인도 받을 수 있나요?",
            "가격 · 할인",
          ],
          [
            "Can I use a credit card? I have a BC card. Can I use it?",
            "신용카드 되나요? 저는 BC카드가 있는데 사용할 수 있나요?",
            "결제",
          ],
          [
            "Where is the {office} located? Can you tell me how to get there?",
            "사무실은 어디에 있나요? 어떻게 가는지 알려 주실 수 있나요?",
            "위치",
          ],
          [
            "I want to know about your operation hours. When do you open, and when do you close?",
            "영업시간을 알고 싶어요. 몇 시에 열고 몇 시에 닫나요?",
            "영업시간",
          ],
          ["Thank you. Thank you for your help.", "감사합니다. 도와주셔서 감사해요.", "감사"],
        ],
        q: [
          "You want to rent a car for a week. Call the rental agency and ask three or four questions about renting a car.",
          "일주일 동안 차를 빌리려 합니다. 렌터카 업체에 전화해서 차를 빌리는 것에 대해 세네 가지 질문을 하세요.",
        ],
      },
    ],
  },
  {
    name: "롤플레이 12 · 문제 해결",
    cat: "rp",
    rp: true,
    secs: [
      {
        t: "12번 친구: 길이 막힘",
        tag: "RP12",
        s: [
          [
            "Hello, I'm calling to let you know I have a problem.",
            "안녕, 문제가 생겨서 알려 주려고 전화했어.",
            "인사",
          ],
          [
            "I'm on my way there, but the {traffic} is really heavy.",
            "지금 가는 중인데 길이 너무 막혀.",
            "상황",
          ],
          [
            "I don't know what to do. What am I to do?",
            "어떻게 해야 할지 모르겠어. 어쩌지?",
            "당황",
          ],
          [
            "Would you like to {see a later show} instead?",
            "대신 더 늦은 상영을 보는 건 어때?",
            "대안 1",
          ],
          ["Can you wait about {thirty minutes}?", "30분쯤 기다려 줄 수 있어?", "대안 2"],
          ["Please let me know what you think.", "어떻게 생각하는지 알려 줘.", "마무리"],
        ],
        q: [
          "There is a problem I need you to resolve. You are supposed to watch a movie with your friend, but something unexpected happened. Call your friend, explain the situation, and suggest two or three alternatives.",
          "해결해야 할 문제가 있습니다. 친구와 영화를 보기로 했는데 예상치 못한 일이 생겼습니다. 친구에게 전화해 상황을 설명하고 대안 두세 가지를 제안하세요.",
        ],
      },
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
        t: "12번 친구: 빌린 MP3 파손",
        tag: "RP12",
        s: [
          [
            "Hello, I'm calling to let you know I have a problem.",
            "안녕, 문제가 생겨서 알려 주려고 전화했어.",
            "인사",
          ],
          [
            "I dropped the {MP3 player}. It is partially broken.",
            "MP3 플레이어를 떨어뜨렸어. 일부 고장 났어.",
            "상황",
          ],
          ["I don't know what to do.", "어떻게 해야 할지 모르겠어.", "당황"],
          ["Would you like me to {fix it} for you?", "내가 고쳐 줄까?", "대안 1"],
          [
            "I can {wire you the money}. Could you please provide me with the correct bank account details so that I can send you the money right away?",
            "내가 돈을 보내 줄 수 있어. 바로 보낼 수 있게 정확한 계좌 정보를 알려 줄래?",
            "대안 2 · 송금",
          ],
        ],
        q: [
          "You borrowed your friend's MP3 player, but you dropped it and it is partially broken. Call your friend, explain the situation, and suggest two or three solutions.",
          "친구의 MP3 플레이어를 빌렸는데 떨어뜨려서 일부 고장 났습니다. 친구에게 전화해 상황을 설명하고 해결책 두세 가지를 제안하세요.",
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
        t: "12번 업체: 교환 요청 표현 (5단계)",
        tag: "RP12",
        s: [
          ["I would like to get an {exchange}.", "교환하고 싶습니다.", "① 평서문"],
          ["Can I get an {exchange}?", "교환받을 수 있나요?", "② 간단한 질문"],
          ["Can I change it to {another one}?", "다른 걸로 바꿀 수 있나요?", "③ 원하는 질문"],
          [
            "Is it possible for me to request an {exchange}?",
            "교환을 요청하는 게 가능한가요?",
            "④ 복잡한 질문",
          ],
          [
            "I was wondering if I could get an {exchange}.",
            "교환받을 수 있을지 궁금해서요.",
            "⑤ 간접 의문문",
          ],
        ],
      },
      {
        t: "12번 업체: 환불·반품 요청 표현",
        tag: "RP12",
        s: [
          ["I would like to get a {refund}.", "환불받고 싶습니다.", "① 평서문"],
          [
            "Can I get a {refund}? Can I get a full refund?",
            "환불받을 수 있나요? 전액 환불되나요?",
            "② 질문",
          ],
          ["May I please request a {refund}?", "환불을 요청해도 될까요?", "③ 정중한 질문"],
          [
            "I was wondering if I could get a {refund}.",
            "환불받을 수 있을지 궁금해서요.",
            "④ 간접 의문문",
          ],
          [
            "I would like to return it. How can I do that? Can you explain the procedure?",
            "반품하고 싶어요. 어떻게 하면 되나요? 절차를 설명해 주실 수 있나요?",
            "반품 방법",
          ],
          [
            "Is there any shipping charge on me? Can you give me the exact address?",
            "배송료가 제게 부과되나요? 정확한 주소를 알려 주실 수 있나요?",
            "배송료 · 주소",
          ],
        ],
      },
    ],
  },
  {
    name: "롤플레이 13 · 비슷한 경험",
    cat: "rp",
    rp: true,
    secs: [
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
  { name: "시설 (7단계)", cat: "surprise", fromSkel: "N", secs: [] },
  { name: "돌발 기본 (22~25강)", cat: "surprise", fromSkel: "O", secs: [] },
  {
    name: "신경향 · 회사·직장",
    cat: "surprise",
    secs: [
      {
        t: "선호 회사 Q1 · 묘사",
        tag: "신경향",
        q: [
          "Describe a company you would like to work for. What does it look like?",
          "일하고 싶은 회사를 묘사해 주세요. 어떤 모습인가요?",
        ],
        s: [
          [
            "The company I want to work for is {a global IT company}.",
            "제가 일하고 싶은 회사는 글로벌 IT 회사예요.",
            "회사 소개",
          ],
          [
            "It's located in {Yeouido}, so {it's easy to get to by subway}.",
            "여의도에 있어서 지하철로 가기 쉬워요.",
            "위치",
          ],
          [
            "The office is {modern and bright}, and it has {many meeting rooms and a nice cafeteria}.",
            "사무실은 현대적이고 밝고, 회의실도 많고 구내식당도 좋아요.",
            "건물 · 시설",
          ],
          [
            "The people there are {friendly and professional}, and {they respect each other's ideas}.",
            "그곳 사람들은 친절하고 전문적이고, 서로의 의견을 존중해요.",
            "사람들",
          ],
          [
            "The reason I like it is that {it has good benefits and a flexible schedule}.",
            "제가 좋아하는 이유는 복지가 좋고 근무 시간이 유연하기 때문이에요.",
            "이유",
          ],
          [
            "That's why I think it would be a great place to work.",
            "그래서 일하기 정말 좋은 곳일 거라고 생각해요.",
            "마무리",
          ],
        ],
      },
      {
        t: "선호 회사 Q2 · 세부 묘사",
        tag: "신경향",
        q: [
          "Tell me more about that company. What do the employees do there, and what makes it special?",
          "그 회사에 대해 더 말해 주세요. 직원들은 거기서 무엇을 하고, 무엇이 특별한가요?",
        ],
        s: [
          [
            "First of all, the employees there {develop software for many clients}.",
            "우선, 그곳 직원들은 많은 고객사를 위한 소프트웨어를 개발해요.",
            "하는 일",
          ],
          [
            "Also, they work in {small teams}, so {everyone can share ideas easily}.",
            "또한 작은 팀으로 일해서 모두가 쉽게 아이디어를 나눌 수 있어요.",
            "일하는 방식",
          ],
          [
            "Plus, the company {offers training programs and pays for courses}.",
            "게다가 회사가 교육 프로그램을 제공하고 수강료도 지원해요.",
            "성장 · 복지",
          ],
          [
            "What makes it special is {the culture}. {People leave on time and respect personal time}.",
            "특별한 점은 문화예요. 정시에 퇴근하고 개인 시간을 존중해요.",
            "특별한 점",
          ],
          [
            "Overall, I would be proud to work there.",
            "전반적으로 그곳에서 일하면 자랑스러울 것 같아요.",
            "마무리",
          ],
        ],
      },
      {
        t: "선호 회사 Q3 · 하루 루틴",
        tag: "신경향",
        q: [
          "What would a typical day be like at that company? Describe your daily routine there.",
          "그 회사에서의 평범한 하루는 어떨까요? 그곳에서의 일과를 말해 주세요.",
        ],
        s: [
          [
            "I would start my day at {nine} by having {a cup of coffee} with my team.",
            "아홉 시에 팀원들과 커피 한 잔으로 하루를 시작할 거예요.",
            "아침",
          ],
          [
            "Then we would have {a short meeting} to share what each person is working on.",
            "그다음 짧은 회의로 각자 하는 일을 공유할 거예요.",
            "회의",
          ],
          [
            "After that, I would {focus on coding} until lunch.",
            "그 후 점심까지 코딩에 집중할 거예요.",
            "오전 업무",
          ],
          [
            "For lunch, I would {eat at the cafeteria with my coworkers} and {take a short walk}.",
            "점심은 동료들과 구내식당에서 먹고 잠깐 산책할 거예요.",
            "점심",
          ],
          [
            "In the afternoon, I would {review code and test the new features}.",
            "오후에는 코드를 검토하고 새 기능을 테스트할 거예요.",
            "오후 업무",
          ],
          [
            "I would leave at {six} and feel that it was a productive day.",
            "여섯 시에 퇴근하고 보람찬 하루였다고 느낄 거예요.",
            "퇴근 · 마무리",
          ],
        ],
      },
      {
        t: "직장 Q1 · 묘사",
        tag: "신경향",
        q: [
          "Describe the place where you work. What does it look like and who works there?",
          "당신이 일하는 곳을 묘사해 주세요. 어떻게 생겼고 누가 일하나요?",
        ],
        s: [
          [
            "I work at {an IT company} in {Yeouido}.",
            "저는 여의도에 있는 IT 회사에서 일해요.",
            "회사 · 위치",
          ],
          [
            "I have been working there for {about eight years} as {a developer}.",
            "그곳에서 개발자로 약 8년째 일하고 있어요.",
            "경력",
          ],
          [
            "The office is {on the tenth floor}, and it has {lots of desks, a few meeting rooms, and a small lounge}.",
            "사무실은 10층에 있고 책상이 많고 회의실이 몇 개, 작은 휴게 공간이 있어요.",
            "사무실",
          ],
          [
            "My coworkers are {helpful and hardworking}, and {we often have lunch together}.",
            "동료들은 잘 도와주고 성실하고, 점심도 자주 같이 먹어요.",
            "동료",
          ],
          [
            "What I like most about my workplace is {the good people}.",
            "제 직장에서 가장 좋은 점은 좋은 사람들이에요.",
            "좋은 점",
          ],
        ],
      },
      {
        t: "직장 Q2 · 비교 (예전 vs 지금)",
        tag: "신경향",
        q: [
          "How is your workplace different now compared to when you first started working there?",
          "처음 일을 시작했을 때와 비교해 지금 직장은 어떻게 다른가요?",
        ],
        s: [
          [
            "When I first started, {the office was smaller} and {we had fewer people}.",
            "처음 시작했을 때는 사무실이 더 작았고 사람도 적었어요.",
            "예전",
          ],
          [
            "Now, {the company has grown} and {we work on bigger projects}.",
            "지금은 회사가 커졌고 더 큰 프로젝트를 해요.",
            "지금",
          ],
          [
            "Another difference is {the way we work}. {We use more online tools and work from home sometimes}.",
            "또 다른 차이는 일하는 방식이에요. 온라인 도구를 더 많이 쓰고 가끔 재택근무도 해요.",
            "일하는 방식 비교",
          ],
          [
            "Compared to the past, I feel {more comfortable and more confident} at work.",
            "예전에 비해 일할 때 더 편하고 자신감이 있어요.",
            "나의 변화",
          ],
          [
            "Overall, I think the change has been {positive}.",
            "전반적으로 이 변화는 긍정적이라고 생각해요.",
            "마무리",
          ],
        ],
      },
      {
        t: "직장 Q3 · 첫 직장 경험",
        tag: "신경향",
        q: [
          "Tell me about your first job. What was it like, and what did you learn?",
          "첫 직장에 대해 말해 주세요. 어땠고 무엇을 배웠나요?",
        ],
        s: [
          [
            "My first job was {at a small software company}, about {eight years ago}.",
            "제 첫 직장은 약 8년 전 작은 소프트웨어 회사였어요.",
            "첫 직장",
          ],
          [
            "On my first day, I was {very nervous}, but {my senior coworker was kind and showed me around}.",
            "첫날은 많이 긴장했지만 선배가 친절하게 안내해 줬어요.",
            "첫날",
          ],
          [
            "At first, I {made many mistakes} because {everything was new to me}.",
            "처음엔 모든 게 새로워서 실수를 많이 했어요.",
            "어려움",
          ],
          [
            "But {my team helped me}, and I slowly {learned how to work as a team}.",
            "하지만 팀이 도와줘서 팀으로 일하는 법을 조금씩 배웠어요.",
            "극복",
          ],
          [
            "Looking back, that job {taught me a lot}, and I'm still grateful.",
            "돌아보면 그 직장에서 많이 배웠고 지금도 감사해요.",
            "마무리",
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
);

/* ===== K. 만능 묘사 — 교재 4강 "첫문제 258 만능답변" (장소·가족·친구·좋아하는 것) 4블록 =====
 어떤 묘사 문제가 나와도 이 4블록을 같은 순서로 말한다. 표현은 교재의 만능 문구를 바탕으로 한다. */
Object.assign(SK_LABEL, {
  DIST: "거리",
  GO: "가는 방법",
  FEAT: "장소 특징",
  FAMDO: "가족과 하는 일",
  NAME: "친구 이름",
  YEARS: "친구 햇수",
  ING: "푹 빠진 활동",
  GOOD: "찾아 다니는 것",
});
SKELS.push({
  id: "K",
  name: "K 만능 묘사 4블록",
  desc: "장소 → 가족 → 친구 → 좋아하는 것. 교재의 258번 만능답변",
  grp: "묘사 · 2·5·8",
  tag: "2·5·8",
  qs: SKELS.find((s) => s.id === "D").qs,
  parts: [
    [
      "I usually go to <PLACE>. It's <DIST>, so I <GO>.",
      "저는 보통 <PLACE> 가요. <DIST>라서 <GO> 가요.",
      "① 장소 · 거리",
    ],
    ["It's <FEAT>.", "그곳은 <FEAT>.", "① 장소 · 특징"],
    [
      "I usually go with my family. I'm too busy during the week, so I go on the weekends.",
      "보통 가족과 함께 가요. 주중에는 바빠서 주말에 가요.",
      "② 가족 · 주말",
    ],
    [
      "We enjoy <FAMDO> together, and my family is precious to me.",
      "우리는 같이 <FAMDO> 즐기고, 가족은 저에게 소중한 존재예요.",
      "② 가족 · 소중한 존재",
    ],
    [
      "Sometimes I go with my friend <NAME>. We get along well, and we have been friends for <YEARS> years.",
      "가끔은 친구 <NAME>와 같이 가요. 우리는 죽이 잘 맞고 <YEARS>년지기 친구예요.",
      "③ 친구 · 오래된 사이",
    ],
    [
      "I'm addicted to <ING>, so I go wherever there is <GOOD>. It really gives me energy.",
      "저는 <ING> 푹 빠져 있어서 <GOOD> 있으면 어디든 가요. 정말 에너지를 줘요.",
      "④ 좋아하는 것 · 에너지",
    ],
  ],
  slots: {
    jog: {
      PLACE: ["Boramae Park", "보라매공원에"],
      DIST: ["a 10-minute bike ride from my house", "집에서 자전거로 10분 거리"],
      GO: ["ride my bike there", "자전거를 타고"],
      FEAT: ["well-maintained, comfortable, and quiet", "관리가 잘 되어 있고 편안하고 조용해요"],
      FAMDO: ["taking a walk", "산책하는 걸"],
      ING: ["jogging", "조깅에"],
      GOOD: ["a nice park", "좋은 공원이"],
      NAME: ["Minsu", "민수"],
      YEARS: ["10", "10"],
    },
    cafe: {
      PLACE: ["the Starbucks near my house", "집 근처 스타벅스에"],
      DIST: ["a 5-minute walk from my house", "집에서 걸어서 5분 거리"],
      GO: ["walk there", "걸어서"],
      FEAT: ["well-maintained, comfortable, and quiet", "깔끔하고 편안하고 조용해요"],
      FAMDO: ["drinking coffee", "커피 마시는 걸"],
      ING: ["coffee", "커피에"],
      GOOD: ["delicious coffee", "맛있는 커피가"],
      NAME: ["Minsu", "민수"],
      YEARS: ["10", "10"],
    },
    concert: {
      PLACE: ["a concert hall in Seoul", "서울의 공연장에"],
      DIST: ["a 40-minute subway ride from my house", "집에서 지하철로 40분 거리"],
      GO: ["take the subway", "지하철을 타고"],
      FEAT: [
        "well-maintained, comfortable, and the sound is great",
        "관리가 잘 되어 있고 편안하고 음향이 훌륭해요",
      ],
      FAMDO: ["listening to music", "음악 듣는 걸"],
      ING: ["going to concerts", "콘서트 가는 데"],
      GOOD: ["a great live show", "멋진 라이브 공연이"],
      NAME: ["Minsu", "민수"],
      YEARS: ["10", "10"],
    },
    movie: {
      PLACE: ["the movie theater near my house", "집 근처 영화관에"],
      DIST: ["a 10-minute bike ride from my house", "집에서 자전거로 10분 거리"],
      GO: ["ride my bike there", "자전거를 타고"],
      FEAT: ["well-maintained, comfortable, and quiet", "관리가 잘 되어 있고 편안하고 조용해요"],
      FAMDO: ["watching movies", "영화 보는 걸"],
      ING: ["watching movies", "영화 보는 데"],
      GOOD: ["a great movie", "좋은 영화가"],
      NAME: ["Minsu", "민수"],
      YEARS: ["10", "10"],
    },
    trip: {
      PLACE: ["Jeju Island", "제주도에"],
      DIST: ["an hour away from my house by plane", "집에서 비행기로 1시간 거리"],
      GO: ["take a plane", "비행기를 타고"],
      FEAT: [
        "comfortable, quiet, and full of beautiful nature",
        "편안하고 조용하고 아름다운 자연이 가득해요",
      ],
      FAMDO: ["traveling", "여행하는 걸"],
      ING: ["traveling", "여행에"],
      GOOD: ["a beautiful place", "멋진 곳이"],
      NAME: ["Minsu", "민수"],
      YEARS: ["10", "10"],
    },
  },
});

/* ===== 롤플레이 뼈대 (교재 18~21강: 11번 질문하기 / 12번 문제 해결 / 13번 비슷한 경험) =====
 롤플레이는 서베이 주제가 아니라 "상황"으로 나뉜다: 약속 잡기 · 물건 구매 · 물건 빌리기 · 예약하기 · 조언 구하기 · 정보 묻기.
 각 뼈대의 키(key)는 그 상황이고, kn[key]가 화면에 표시되는 상황 이름이다. */
Object.assign(SK_LABEL, {
  OPEN: "용건 (첫 말)",
  REQ: "용건",
  KIND: "물어볼 종류",
  KIND2: "물어볼 종류 2",
  PREF: "원하는 조건",
});
SKELS.push(
  ...[
    {
      id: "L",
      name: "L 친구에게 질문",
      desc: "약속·빌리기·초대: 용건 → 시간 → 장소 → 활동",
      grp: "롤플레이 11 · 질문하기",
      tag: "RP11",
      kn: {
        movie: "영화 약속",
        concert: "콘서트 약속",
        jog: "조깅 약속",
        trip: "여행 약속",
        mp3: "MP3 조언",
        invite: "집 초대",
        housesit: "집 봐주기",
        party: "생일파티",
      },
      qs: {
        movie: [
          "You want to go to see a movie with your friend. Call your friend and ask three or four questions.",
          "친구와 영화를 보러 가고 싶습니다. 친구에게 전화해서 세네 가지 질문을 하세요.",
        ],
        concert: [
          "You want to go to a concert with your friend. Call your friend and ask three or four questions.",
          "친구와 콘서트에 가고 싶습니다. 친구에게 전화해서 세네 가지 질문을 하세요.",
        ],
        jog: [
          "You want to go jogging with your friend. Call your friend and ask three or four questions.",
          "친구와 조깅을 하고 싶습니다. 친구에게 전화해서 세네 가지 질문을 하세요.",
        ],
        trip: [
          "You want to go on a trip with your friend. Call your friend and ask three or four questions.",
          "친구와 여행을 가고 싶습니다. 친구에게 전화해서 세네 가지 질문을 하세요.",
        ],
        mp3: [
          "You want to buy an MP3 player, and your friend bought one recently. Before you buy, call your friend and ask three or four questions about it.",
          "MP3 플레이어를 사고 싶은데 친구가 최근에 샀습니다. 사기 전에 친구에게 전화해서 세네 가지 질문을 하세요.",
        ],
        invite: [
          "You want to invite your friend to your house. Call your friend and ask three or four questions.",
          "친구를 집에 초대하고 싶습니다. 친구에게 전화해서 세네 가지 질문을 하세요.",
        ],
        housesit: [
          "Your relative is going on vacation, and you agreed to take care of the house. Call your relative and ask three or four questions about what you have to do.",
          "친척이 휴가를 가서 집을 봐주기로 했습니다. 친척에게 전화해서 해야 할 일에 대해 세네 가지 질문을 하세요.",
        ],
        party: [
          "You want to go to your friend's birthday party, but you haven't been invited. Call your friend and ask three or four questions about the party.",
          "친구의 생일 파티에 가고 싶은데 초대받지 못했습니다. 친구에게 전화해서 파티에 대해 세네 가지 질문을 하세요.",
        ],
      },
      parts: [
        ["Hi, how are you? <OPEN>", "안녕, 잘 지내? <OPEN>", "① 용건"],
        [
          "Do you have time this weekend? What about this Saturday? What time is good for you?",
          "이번 주말에 시간 있어? 토요일은 어때? 몇 시가 괜찮아?",
          "② 시간",
        ],
        [
          "Let's make it then. Where do you want to meet? How about <PLACE>? What do you think?",
          "그럼 그때로 하자. 어디서 만날까? <PLACE> 어때? 어떻게 생각해?",
          "③ 장소",
        ],
        [
          "After that, what do you want to do? Do you want to <DO1>, or do you want to <DO2>? It's up to you.",
          "그 다음엔 뭐 하고 싶어? <DO1> <DO2> 하고 싶어? 네가 정해도 돼.",
          "④ 활동",
        ],
        [
          "Is there anything I should bring? Just think about it and let me know. See you then. Bye!",
          "내가 챙겨 갈 게 있을까? 생각해 보고 알려 줘. 그때 보자. 안녕!",
          "⑤ 마무리",
        ],
      ],
      slots: {
        movie: {
          OPEN: [
            "I want to watch a movie with you this weekend. I think you're going to love it. It's going to be a lot of fun.",
            "이번 주말에 너랑 영화를 보고 싶어. 너도 분명 좋아할 거야. 정말 재밌을 거야.",
          ],
          PLACE: ["the theater near my house", "우리 집 근처 영화관"],
          DO1: ["grab something to eat", "뭘 먹거나"],
          DO2: ["walk around for a while", "좀 걷거나"],
        },
        concert: {
          OPEN: [
            "I want to go to a concert with you this weekend. It's going to be a lot of fun.",
            "이번 주말에 너랑 콘서트에 가고 싶어. 정말 재밌을 거야.",
          ],
          PLACE: ["the entrance of the concert hall", "공연장 입구"],
          DO1: ["get some dinner", "저녁을 먹거나"],
          DO2: ["have a drink", "한잔하거나"],
        },
        jog: {
          OPEN: [
            "I want to go jogging with you this weekend. It's good for our health, and it's refreshing.",
            "이번 주말에 너랑 조깅하고 싶어. 건강에도 좋고 상쾌할 거야.",
          ],
          PLACE: ["the entrance of the park", "공원 입구"],
          DO1: ["grab a coffee", "커피를 마시거나"],
          DO2: ["have breakfast", "아침을 먹거나"],
        },
        trip: {
          OPEN: [
            "I want to go on a trip with you. I'm sure we'll make great memories.",
            "너랑 여행을 가고 싶어. 분명 좋은 추억이 될 거야.",
          ],
          PLACE: ["the train station", "기차역"],
          DO1: ["see the sights", "관광지를 구경하거나"],
          DO2: ["try the local food", "현지 음식을 먹어 보거나"],
        },
        mp3: {
          OPEN: [
            "I heard that you bought an MP3 player recently. Where did you get it? How much was it? Was it good? I want to buy one. Would you go with me?",
            "너 최근에 MP3 플레이어 샀다고 들었어. 어디서 샀어? 얼마였어? 좋았어? 나도 사고 싶은데 같이 가 줄래?",
          ],
          PLACE: ["the electronics store near the subway station", "지하철역 근처 전자제품 매장"],
          DO1: ["grab lunch", "점심을 먹거나"],
          DO2: ["look at other gadgets", "다른 기기도 구경하거나"],
        },
        invite: {
          OPEN: [
            "I'd like to invite you to my house this weekend. I'll cook dinner. It's going to be a lot of fun.",
            "이번 주말에 너를 우리 집에 초대하고 싶어. 내가 저녁을 만들게. 정말 재밌을 거야.",
          ],
          PLACE: ["the subway station near my house", "우리 집 근처 지하철역"],
          DO1: ["cook together", "같이 요리하거나"],
          DO2: ["watch a movie at home", "집에서 영화를 보거나"],
        },
        housesit: {
          OPEN: [
            "I heard you're going on vacation. I'd be happy to take care of your house while you're away. I want to get the key. Can I do that?",
            "휴가 간다고 들었어요. 안 계시는 동안 제가 집을 봐 드릴게요. 열쇠를 받고 싶은데 가능할까요?",
          ],
          PLACE: ["your house", "댁"],
          DO1: ["show me around the house", "집을 한 번 보여 주시거나"],
          DO2: ["tell me what to take care of", "제가 챙길 일을 알려 주시거나"],
        },
        party: {
          OPEN: [
            "I heard you're having a birthday party. I'd love to come. I want to buy you something nice. Would you like to go with me?",
            "생일 파티 한다고 들었어. 나도 가고 싶어. 좋은 선물을 사 주고 싶은데 같이 갈래?",
          ],
          PLACE: ["the shopping mall near the subway station", "지하철역 근처 쇼핑몰"],
          DO1: ["pick a gift together", "같이 선물을 고르거나"],
          DO2: ["get something to eat", "뭘 먹거나"],
        },
      },
    },
    {
      id: "M",
      name: "M 업체에 질문",
      desc: "구매·예약: 종류 → 가격 → 결제 → 위치 → 영업시간 (3~4개만 골라 물어요)",
      grp: "롤플레이 11 · 질문하기",
      tag: "RP11",
      kn: {
        movie: "영화표 구매",
        concert: "콘서트 표 구매",
        hotel: "호텔 예약",
        restaurant: "식당 예약",
        hospital: "병원 예약",
        rentcar: "렌터카 예약",
      },
      qs: {
        movie: [
          "You want to watch a movie. Call the theater and ask three or four questions.",
          "영화를 보고 싶습니다. 영화관에 전화해서 세네 가지 질문을 하세요.",
        ],
        concert: [
          "You want to see a concert. Call the concert hall and ask three or four questions.",
          "콘서트를 보고 싶습니다. 공연장에 전화해서 세네 가지 질문을 하세요.",
        ],
        hotel: [
          "You want to book a hotel for a trip. Call the hotel and ask three or four questions.",
          "여행을 위해 호텔을 예약하려 합니다. 호텔에 전화해서 세네 가지 질문을 하세요.",
        ],
        restaurant: [
          "You want to reserve a table for dinner with your friends. Call the restaurant and ask three or four questions.",
          "친구들과 저녁 식사를 하려고 자리를 예약합니다. 식당에 전화해서 세네 가지 질문을 하세요.",
        ],
        hospital: [
          "You are not feeling well and need to see a doctor. Call the hospital and ask three or four questions about making an appointment.",
          "몸이 안 좋아 진료를 받아야 합니다. 병원에 전화해서 예약에 대해 세네 가지 질문을 하세요.",
        ],
        rentcar: [
          "You want to rent a car for a week. Call the rental agency and ask three or four questions about renting a car.",
          "일주일 동안 차를 빌리려 합니다. 렌터카 업체에 전화해서 세네 가지 질문을 하세요.",
        ],
      },
      parts: [
        [
          "Hello, how are you doing? I'm calling to ask you something. I would like to <REQ>.",
          "안녕하세요, 문의드릴 게 있어요. <REQ> 전화했어요.",
          "① 도입 · 용건",
        ],
        [
          "What kinds of <KIND> do you have? And what <KIND2> are available?",
          "<KIND> 종류는 어떤 게 있나요? <KIND2>도 알려 주세요.",
          "② 종류",
        ],
        [
          "I'd like to <PREF>, if possible. Do you have any recommendations?",
          "가능하면 <PREF>. 추천해 주실 만한 게 있나요?",
          "③ 선호 · 추천",
        ],
        [
          "How much is it? Can I receive a discount?",
          "가격은 얼마인가요? 할인도 받을 수 있나요?",
          "④ 가격 · 할인",
        ],
        [
          "Can I use a credit card? I have a BC card. Can I use it?",
          "신용카드 되나요? 저는 BC카드가 있는데, 사용할 수 있나요?",
          "⑤ 결제",
        ],
        [
          "Where is the <PLACE> located? Can you tell me how to get there?",
          "<PLACE> 위치가 어디예요? 어떻게 가는지 알려 주실 수 있나요?",
          "⑥ 위치",
        ],
        [
          "When do you open, and when do you close? Where is the parking area? Is it free?",
          "몇 시에 열고 몇 시에 닫나요? 주차장은 어디 있나요? 무료인가요?",
          "⑦ 영업시간 · 주차",
        ],
        ["Thank you. Thank you for your help.", "감사합니다. 도와주셔서 감사해요.", "⑧ 감사"],
      ],
      slots: {
        movie: {
          REQ: [
            "buy two tickets for a movie that was just released",
            "새로 개봉한 영화 표 두 장을 사고 싶어서",
          ],
          KIND: ["movies", "영화"],
          KIND2: ["showtimes", "상영 시간"],
          PREF: ["sit in the middle row", "가운데 줄에 앉고 싶어요"],
          PLACE: ["theater", "영화관"],
        },
        concert: {
          REQ: ["buy two tickets for a concert", "콘서트 표 두 장을 사고 싶어서"],
          KIND: ["seats", "좌석"],
          KIND2: ["ticket types", "표 종류"],
          PREF: ["sit close to the stage", "무대 가까이 앉고 싶어요"],
          PLACE: ["concert hall", "공연장"],
        },
        hotel: {
          REQ: ["book a hotel room for two nights", "호텔 객실을 이틀 밤 예약하고 싶어서"],
          KIND: ["rooms", "객실"],
          KIND2: ["packages", "패키지"],
          PREF: ["have a room with an ocean view", "바다가 보이는 방이면 좋겠어요"],
          PLACE: ["hotel", "호텔"],
        },
        restaurant: {
          REQ: [
            "reserve a table for four people tonight",
            "오늘 저녁 네 명 자리를 예약하고 싶어서",
          ],
          KIND: ["set menus", "코스 메뉴"],
          KIND2: ["seating options", "좌석 종류"],
          PREF: ["sit by the window", "창가에 앉고 싶어요"],
          PLACE: ["restaurant", "식당"],
        },
        hospital: {
          REQ: ["make an appointment to see a doctor", "진료 예약을 하고 싶어서"],
          KIND: ["doctors", "진료 가능한 의사 선생님"],
          KIND2: ["appointment times", "예약 가능한 시간"],
          PREF: ["see a doctor as soon as possible", "가능한 한 빨리 진료받고 싶어요"],
          PLACE: ["hospital", "병원"],
        },
        rentcar: {
          REQ: ["rent a car for a week", "일주일 동안 차를 빌리고 싶어서"],
          KIND: ["cars", "차량"],
          KIND2: ["insurance options", "보험 종류"],
          PREF: ["rent an SUV for my family", "가족과 함께 탈 SUV를 빌리고 싶어요"],
          PLACE: ["rental office", "렌터카 사무실"],
        },
      },
    },
    {
      id: "H",
      name: "H 친구에게 전화",
      desc: "약속 못 지킴·물건 파손 → 대안 제시",
      grp: "롤플레이 12 · 문제 해결",
      tag: "RP12",
      kn: {
        late: "약속 · 길이 막힘",
        sick: "약속 · 아파서",
        work: "약속 · 급한 회사 일",
        rain: "약속 · 폭우",
        mp3: "빌린 MP3 파손",
      },
      qs: {
        late: [
          "There is a problem I need you to resolve. You are supposed to meet your friend today, but something unexpected happened. Call your friend, explain the situation, and suggest two or three alternatives.",
          "해결해야 할 문제가 있습니다. 오늘 친구와 만나기로 했는데 예상치 못한 일이 생겼습니다. 친구에게 전화해 상황을 설명하고 대안 두세 가지를 제안하세요.",
        ],
        sick: [
          "There is a problem I need you to resolve. You are supposed to meet your friend today, but something unexpected happened. Call your friend, explain the situation, and suggest two or three alternatives.",
          "해결해야 할 문제가 있습니다. 오늘 친구와 만나기로 했는데 예상치 못한 일이 생겼습니다. 친구에게 전화해 상황을 설명하고 대안 두세 가지를 제안하세요.",
        ],
        work: [
          "There is a problem I need you to resolve. You are supposed to meet your friend today, but something unexpected happened. Call your friend, explain the situation, and suggest two or three alternatives.",
          "해결해야 할 문제가 있습니다. 오늘 친구와 만나기로 했는데 예상치 못한 일이 생겼습니다. 친구에게 전화해 상황을 설명하고 대안 두세 가지를 제안하세요.",
        ],
        rain: [
          "There is a problem I need you to resolve. You are supposed to meet your friend today, but something unexpected happened. Call your friend, explain the situation, and suggest two or three alternatives.",
          "해결해야 할 문제가 있습니다. 오늘 친구와 만나기로 했는데 예상치 못한 일이 생겼습니다. 친구에게 전화해 상황을 설명하고 대안 두세 가지를 제안하세요.",
        ],
        mp3: [
          "You borrowed your friend's MP3 player, but you dropped it and it is partially broken. Call your friend, explain the situation, and suggest two or three solutions.",
          "친구의 MP3 플레이어를 빌렸는데 떨어뜨려서 일부 고장 났습니다. 친구에게 전화해 상황을 설명하고 해결책 두세 가지를 제안하세요.",
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
        ["Would you like <ALT1>?", "<ALT1> 어때?", "해결책 1"],
        ["Or would you like <ALT2>?", "아니면 <ALT2> 어때?", "해결책 2"],
        ["Please let me know what you think.", "어떻게 생각하는지 알려 줘.", "마무리"],
      ],
      slots: {
        late: {
          PROBLEM: [
            "I'm on my way there, but the traffic is really heavy",
            "가는 중인데 길이 너무 막혀",
          ],
          CANT: ["I can't make it on time", "제시간에 도착하지 못할"],
          ALT1: ["to wait for about thirty minutes", "30분쯤 기다려 주는 건"],
          ALT2: ["to see a later show", "더 늦은 시간 상영을 보는 건"],
        },
        sick: {
          PROBLEM: ["I'm so sick today. I have a high fever", "오늘 많이 아파. 열이 높아"],
          CANT: ["I can't go out today", "오늘 나갈 수 없을"],
          ALT1: ["to meet next weekend instead", "대신 다음 주말에 만나는 건"],
          ALT2: ["to go with someone else", "다른 사람이랑 가는 건"],
        },
        work: {
          PROBLEM: [
            "I have an urgent problem at work, and I have to stay at the office",
            "회사에 급한 일이 생겨서 사무실에 남아야 해",
          ],
          CANT: ["I can't meet you today", "오늘 널 만날 수 없을"],
          ALT1: ["to meet tomorrow evening", "내일 저녁에 만나는 건"],
          ALT2: ["to talk on the phone tonight", "오늘 밤 전화로 이야기하는 건"],
        },
        rain: {
          PROBLEM: [
            "It's pouring outside, and I can't get a taxi",
            "밖에 비가 쏟아지는데 택시도 안 잡혀",
          ],
          CANT: ["I can't get there today", "오늘 거기 갈 수 없을"],
          ALT1: ["to watch something at my place instead", "대신 우리 집에서 뭘 보는 건"],
          ALT2: ["to reschedule for the weekend", "주말로 일정을 바꾸는 건"],
        },
        mp3: {
          PROBLEM: [
            "I dropped your MP3 player, and it is partially broken",
            "네 MP3 플레이어를 떨어뜨려서 일부 고장 났어",
          ],
          CANT: ["I can't give it back in good condition", "온전한 상태로 돌려줄 수 없을"],
          ALT1: ["me to pay for the repair", "내가 수리비를 내는 건"],
          ALT2: ["me to buy you a new one", "내가 새 걸로 사 주는 건"],
        },
      },
    },
    {
      id: "I",
      name: "I 업체에 전화",
      desc: "교환 → 환불 → 대안",
      grp: "롤플레이 12 · 문제 해결",
      tag: "RP12",
      kn: {
        movie: "영화표 교환·환불",
        concert: "콘서트 표 변경",
        hotel: "호텔 예약 변경",
        shop: "잘못 온 물건 반품",
      },
      qs: {
        movie: [
          "You bought movie tickets, but the clerk gave you the wrong ones. Call the theater, explain the problem, and suggest two or three solutions.",
          "영화표를 샀는데 직원이 잘못된 표를 줬습니다. 영화관에 전화해 문제를 설명하고 해결책 두세 가지를 제안하세요.",
        ],
        concert: [
          "You bought a concert ticket, but you cannot go on that day. Call the ticket office, explain the situation, and suggest two or three solutions.",
          "콘서트 표를 샀는데 그날 갈 수 없게 됐습니다. 예매처에 전화해 상황을 설명하고 해결책 두세 가지를 제안하세요.",
        ],
        hotel: [
          "You booked a hotel room, but you have to cancel your trip. Call the hotel, explain the problem, and suggest two or three solutions.",
          "호텔 방을 예약했는데 여행을 취소해야 합니다. 호텔에 전화해 문제를 설명하고 해결책 두세 가지를 제안하세요.",
        ],
        shop: [
          "You bought an item online, but you received the wrong one. Call the store, explain the problem, and suggest two or three solutions.",
          "온라인으로 물건을 샀는데 잘못된 물건이 왔습니다. 가게에 전화해 문제를 설명하고 해결책 두세 가지를 제안하세요.",
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
        hotel: {
          SITUATION: [
            "I booked a hotel room for this weekend, but I have to cancel my trip",
            "이번 주말 호텔 방을 예약했는데 여행을 취소해야 해요",
          ],
          REQ1: ["change my reservation to next weekend", "예약을 다음 주말로 변경할"],
          REQ2: ["cancel it without a fee", "수수료 없이 취소할"],
        },
        shop: {
          SITUATION: [
            "I bought a jacket online, but I received the wrong size",
            "온라인으로 재킷을 샀는데 사이즈가 잘못 왔어요",
          ],
          REQ1: ["exchange it for a bigger size", "더 큰 사이즈로 교환할"],
          REQ2: ["return it and get a refund", "반품하고 환불받을"],
        },
      },
    },
    {
      id: "J",
      name: "J 비슷한 경험",
      desc: "문제 → 전화 → 해결",
      grp: "롤플레이 13 · 비슷한 경험",
      tag: "RP13",
      kn: {
        promise: "약속 취소 (아파서)",
        exchange: "잘못 산 물건 교환",
        lost: "분실 (지하철 지갑)",
        trip: "여행 중 예약 문제",
        lostphone: "분실 (식당 휴대폰)",
      },
      qs: {
        promise: [
          "Have you ever had to cancel or break a plan because you were sick or had an urgent problem? When did it happen, and how did you solve it?",
          "아프거나 급한 일 때문에 약속을 취소한 적이 있나요? 언제였고 어떻게 해결했나요?",
        ],
        exchange: [
          "Have you ever bought something wrong and had to exchange or return it? What happened and how did you handle it?",
          "잘못 산 물건을 교환하거나 반품한 적이 있나요? 무슨 일이 있었고 어떻게 처리했나요?",
        ],
        lost: [
          "Have you ever lost something? What did you lose, and how did you handle it?",
          "무언가를 잃어버린 적이 있나요? 무엇을 잃어버렸고 어떻게 처리했나요?",
        ],
        trip: [
          "Have you ever had a problem with a reservation or a trip? What happened and how did you handle it?",
          "예약이나 여행에서 문제가 생긴 적이 있나요? 무슨 일이 있었고 어떻게 처리했나요?",
        ],
        lostphone: [
          "Have you ever lost something at a restaurant or a hotel? What did you lose, and how did you handle it?",
          "식당이나 호텔에서 물건을 잃어버린 적이 있나요? 무엇을 잃어버렸고 어떻게 처리했나요?",
        ],
      },
      parts: [
        [
          "I have experienced a situation like this before.",
          "이런 상황을 겪은 적이 있어요.",
          "도입",
        ],
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
        promise: {
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
        exchange: {
          SIT: ["I had bought the wrong tickets", "표를 잘못 샀다는 걸"],
          WHO: ["the theater", "영화관에"],
          EXPL: ["I didn't do anything wrong", "제가 잘못한 게 없다고"],
          ASK: ["an exchange", "교환을"],
          WHO2: ["The staff", "직원이"],
          HOW: ["handle it", "잘 해결했어요"],
          LESSON: ["get an exchange", "교환받을 수 있어서"],
        },
        lost: {
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
        lostphone: {
          SIT: ["I left my phone at a restaurant", "식당에 휴대폰을 두고 왔다는 걸"],
          WHO: ["the restaurant", "식당에"],
          EXPL: ["I left it on the table by accident", "실수로 테이블에 두고 나왔다고"],
          ASK: ["help finding it", "찾는 데 도움을"],
          WHO2: ["The manager", "매니저님이"],
          HOW: ["find it that night", "그날 밤에 찾을 수 있었어요"],
          LESSON: ["get it back", "되찾아서"],
        },
      },
    },
  ],
);

SKELS.push(
  ...[
    {
      id: "N",
      name: "N 시설 7단계",
      desc: "어렵다 → 한국 → 나의 경험 → 묘사 → 외국인 반응 → 자부심",
      grp: "돌발 · 시설 7단계",
      tag: "SP",
      kn: {
        bank: "은행",
        pharmacy: "약국",
        salon: "미용실",
        hotel: "호텔",
        restaurant: "식당",
        library: "도서관",
        hospital: "병원",
        dental: "치과",
      },
      qs: {
        bank: [
          "Please tell me about the banks in your country. What do they look like, and what do people do there?",
          "당신 나라의 은행에 대해 말해 주세요. 어떤 모습이고 사람들은 그곳에서 무엇을 하나요?",
        ],
        pharmacy: [
          "Please tell me about the pharmacies in your country. What do they look like, and what do people do there?",
          "당신 나라의 약국에 대해 말해 주세요. 어떤 모습이고 사람들은 그곳에서 무엇을 하나요?",
        ],
        salon: [
          "Please tell me about the hair salons in your country. What do they look like, and what do people do there?",
          "당신 나라의 미용실에 대해 말해 주세요. 어떤 모습이고 사람들은 그곳에서 무엇을 하나요?",
        ],
        hotel: [
          "Please tell me about the hotels in your country. What do they look like, and what do people do there?",
          "당신 나라의 호텔에 대해 말해 주세요. 어떤 모습이고 사람들은 그곳에서 무엇을 하나요?",
        ],
        restaurant: [
          "Please tell me about the restaurants in your country. What do they look like, and what do people do there?",
          "당신 나라의 식당에 대해 말해 주세요. 어떤 모습이고 사람들은 그곳에서 무엇을 하나요?",
        ],
        library: [
          "Please tell me about the libraries in your country. What do they look like, and what do people do there?",
          "당신 나라의 도서관에 대해 말해 주세요. 어떤 모습이고 사람들은 그곳에서 무엇을 하나요?",
        ],
        hospital: [
          "Please tell me about the hospitals in your country. What do they look like, and what do people do there?",
          "당신 나라의 병원에 대해 말해 주세요. 어떤 모습이고 사람들은 그곳에서 무엇을 하나요?",
        ],
        dental: [
          "Please tell me about the dental clinics in your country. What do they look like, and what do people do there?",
          "당신 나라의 치과에 대해 말해 주세요. 어떤 모습이고 사람들은 그곳에서 무엇을 하나요?",
        ],
      },
      parts: [
        [
          "When I first get a question about <FAC>, I feel it's a bit difficult because <HARD>.",
          "처음 <FAC> 받으면, <HARD> 조금 어렵게 느껴져요.",
          "① 도입 · 어렵다",
        ],
        [
          "But Korea has <GOOD>, and <MINE>.",
          "하지만 한국에는 <GOOD> <MINE>.",
          "② 한국 상황 · 나의 경험",
        ],
        ["The place is <PLACE>, and <INT>.", "그곳은 <PLACE> <INT>.", "③ 장소 묘사"],
        ["The staff are <STAFF>.", "직원들은 <STAFF>.", "③ 직원"],
        ["The service is <SERV>, so <RES>.", "서비스가 <SERV> <RES>.", "④ 서비스"],
        ["I especially like <LIKE>.", "특히 <LIKE> 좋아요.", "④+ 구체적 디테일"],
        [
          "Foreign visitors are often impressed by <IMP>.",
          "외국인 방문객들은 종종 <IMP> 깊은 인상을 받아요.",
          "⑤ 외국인 반응",
        ],
        [
          "I feel proud of <PROUD>, and I really hope this positive trend continues in the future.",
          "저는 <PROUD> 자랑스럽고, 앞으로도 이런 긍정적인 흐름이 계속되기를 바라요.",
          "⑥⑦ 자부심 · 마무리",
        ],
      ],
      slots: {
        bank: {
          FAC: ["a bank", "은행에 대한 질문을"],
          HARD: ["I'm not sure what to say", "무슨 말을 해야 할지 몰라서"],
          GOOD: ["many well-organized banks", "잘 정비된 은행이 많고"],
          MINE: ["the one I usually go to is near my home", "제가 주로 가는 곳은 집 근처에 있어요"],
          PLACE: ["clean and well-maintained", "깨끗하고 관리가 잘 되어 있고"],
          INT: ["the interior design is modern and stylish", "인테리어가 현대적이고 세련됐어요"],
          STAFF: ["kind and polite, and very professional", "친절하고 공손하며 매우 전문적이에요"],
          SERV: ["well-organized and efficient", "체계적이고 효율적이어서"],
          RES: [
            "everything is systematic and easy to follow",
            "모든 절차가 조직적이고 따르기 쉬워요",
          ],
          LIKE: [
            "the mobile banking app and the number ticket system",
            "모바일 뱅킹 앱과 번호표 시스템이",
          ],
          IMP: [
            "the system, and they are surprised by how efficient it is",
            "그 시스템에, 그리고 효율성에 놀라곤 해요",
          ],
          PROUD: ["these facilities in Korea", "한국의 이런 시설들이"],
        },
        pharmacy: {
          FAC: ["a pharmacy", "약국에 대한 이야기가"],
          HARD: ["I don't know what details to focus on", "어디에 초점을 맞춰야 할지 몰라서"],
          GOOD: ["many modern pharmacies", "현대적인 약국이 많고"],
          MINE: ["there's one I visit regularly near my place", "집 근처에 자주 가는 곳이 있어요"],
          PLACE: ["neat, modern, and comfortable", "깔끔하고 현대적이며 편안하고"],
          INT: [
            "everyone there is knowledgeable and experienced",
            "모두 지식이 풍부하고 경험이 많아요",
          ],
          STAFF: ["friendly and helpful", "친절하고 도움이 돼요"],
          SERV: ["smooth and reliable", "매끄럽고 믿을 수 있어서"],
          RES: ["things are very convenient", "매우 편리해요"],
          LIKE: ["the pharmacist consultation and the quick dispensing", "약사 상담과 빠른 조제가"],
          IMP: [
            "how organized and efficient Korean pharmacies are",
            "한국 약국이 얼마나 체계적이고 효율적인지에",
          ],
          PROUD: ["this kind of environment", "이런 환경이"],
        },
        salon: {
          FAC: ["a hair salon", "미용실에 대한 질문을"],
          HARD: ["I'm not sure how to start", "어떻게 시작해야 할지 몰라서"],
          GOOD: ["many stylish hair salons", "세련된 미용실이 정말 많고"],
          MINE: [
            "the one I usually go to is close to my home",
            "제가 주로 가는 곳은 집 근처에 있어요",
          ],
          PLACE: ["sleek and minimalistic", "세련되고 미니멀하고"],
          INT: ["the atmosphere is calm", "분위기가 차분해요"],
          STAFF: [
            "welcoming and highly skilled at what they do",
            "환대해 주고 일에 매우 숙련돼 있어요",
          ],
          SERV: ["smooth and reliable", "원활하고 믿을 수 있어서"],
          RES: ["I always feel comfortable during my visit", "방문하는 동안 항상 편안해요"],
          LIKE: [
            "the hair consultation and the attention to detail",
            "스타일 상담과 세심한 마무리가",
          ],
          IMP: ["the quality of service here", "이곳의 서비스 품질에"],
          PROUD: ["this high standard", "이런 높은 수준이"],
        },
        hotel: {
          FAC: ["a hotel", "호텔에 대해 말하는 게"],
          HARD: ["there are so many things to talk about", "말할 거리가 너무 많아서"],
          GOOD: ["many well-managed hotels", "관리가 잘 된 호텔이 많고"],
          MINE: ["there's one I've stayed at several times", "제가 몇 번 머문 곳이 있어요"],
          PLACE: ["modern and stylish", "현대적이고 세련되고"],
          INT: ["the place feels spacious", "공간이 넓게 느껴져요"],
          STAFF: ["kind, polite, and professional", "친절하고 공손하며 전문적이에요"],
          SERV: ["well-organized and efficient", "체계적이고 효율적이어서"],
          RES: ["the stay is stress-free", "스트레스 없이 머물 수 있어요"],
          LIKE: [
            "the smooth check-in and the concierge service",
            "매끄러운 체크인과 컨시어지 서비스가",
          ],
          IMP: ["the system and the overall atmosphere", "그 시스템과 전반적인 분위기에"],
          PROUD: ["Korean hotels", "한국의 호텔들이"],
        },
        restaurant: {
          FAC: ["a restaurant", "식당에 대해 말하는 게"],
          HARD: ["it's hard to explain clearly", "명확하게 설명하기 어려워서"],
          GOOD: ["a lot of well-run restaurants", "운영이 잘 되는 식당이 정말 많고"],
          MINE: ["there's one I enjoy visiting regularly", "제가 즐겨 찾는 단골 식당이 있어요"],
          PLACE: ["clean and well-maintained", "깨끗하고 관리가 잘 되어 있고"],
          INT: ["the atmosphere is welcoming", "분위기가 따뜻해요"],
          STAFF: ["friendly and helpful", "친절하고 도움이 돼서 경험이 훨씬 좋아져요"],
          SERV: ["systematic and easy to follow", "체계적이고 따르기 쉬워서"],
          RES: ["it works well even during busy hours", "바쁜 시간대에도 잘 돌아가요"],
          LIKE: [
            "the kiosk ordering and the free refills of side dishes",
            "키오스크 주문과 반찬 리필이",
          ],
          IMP: [
            "how efficient and organized Korean restaurants are",
            "한국 식당이 얼마나 효율적이고 조직적인지에",
          ],
          PROUD: ["this dining culture", "이런 식문화가"],
        },
        library: {
          FAC: ["a library", "도서관을 설명하는 게"],
          HARD: ["it sounds so simple", "단순해 보여서"],
          GOOD: ["many modern libraries", "현대적인 도서관이 많고"],
          MINE: ["the one I go to is near my home", "제가 가는 곳은 집 근처에 있어요"],
          PLACE: ["neat and modern", "정돈되어 있고 현대적이고"],
          INT: ["the overall mood is calm", "전반적인 분위기가 차분해요"],
          STAFF: ["kind and knowledgeable", "친절하고 지식이 풍부해요"],
          SERV: ["comfortable, with a good reading area", "열람 공간이 편안해서"],
          RES: ["people can stay for a long time", "사람들이 오래 머물 수 있어요"],
          LIKE: [
            "the quiet reading area and the self-check machines",
            "조용한 열람 공간과 무인 대출기가",
          ],
          IMP: ["how clean and organized it is", "그곳이 얼마나 깨끗하고 질서정연한지에"],
          PROUD: ["these public facilities", "이런 공공시설이"],
        },
        hospital: {
          FAC: ["a hospital", "병원 관련 질문에"],
          HARD: ["it's not easy to answer", "답변하기 쉽지 않아서"],
          GOOD: ["many advanced hospitals", "수준 높은 병원이 많고"],
          MINE: ["the one I usually visit is nearby", "제가 주로 가는 곳은 근처에 있어요"],
          PLACE: ["clean and spacious", "깨끗하고 넓고"],
          INT: ["the atmosphere is calm and professional", "분위기가 차분하고 전문적이에요"],
          STAFF: ["well-trained and highly skilled", "잘 훈련되어 있고 기술이 뛰어나요"],
          SERV: ["well-organized", "체계적이어서"],
          RES: ["the whole process feels smooth and reliable", "전체 과정이 매끄럽고 믿음이 가요"],
          LIKE: [
            "the easy appointment scheduling and the short waiting time",
            "쉬운 진료 예약과 짧은 대기 시간이",
          ],
          IMP: [
            "how efficient the medical system is in Korea",
            "한국 의료 시스템이 얼마나 효율적인지에",
          ],
          PROUD: ["this system", "이 시스템이"],
        },
        dental: {
          FAC: ["a dental clinic", "치과에 대해 말하는 게"],
          HARD: ["it can be uncomfortable", "불편한 주제일 수 있어서"],
          GOOD: ["many modern dental clinics", "현대적인 치과가 많고"],
          MINE: ["I go to one near my home", "저는 집 근처에 있는 곳을 다녀요"],
          PLACE: ["modern and well-maintained", "현대적이고 관리가 잘 되어 있고"],
          INT: ["it feels less stressful", "덜 긴장돼요"],
          STAFF: ["friendly and approachable", "친절하고 다가가기 쉬워요"],
          SERV: ["systematic and easy to follow", "체계적이고 따르기 쉬워서"],
          RES: ["I feel at ease", "마음이 놓여요"],
          LIKE: [
            "the clear pricing and the hygienic tools",
            "명확한 비용 안내와 위생적인 도구 관리가",
          ],
          IMP: ["how clean and efficient it is", "그곳이 얼마나 깨끗하고 효율적인지에"],
          PROUD: ["this positive environment", "이런 긍정적인 환경이"],
        },
      },
    },
    {
      id: "O",
      name: "O 돌발 기본형",
      desc: "어렵다 → 많다·중요 → 필수답변 3개 → 자긍심 → 결론",
      grp: "돌발 · 기본형 (22~25강)",
      tag: "SP",
      kn: {
        industry: "한국의 산업",
        transport: "교통수단",
        recycling: "재활용",
        geography: "지형",
        warming: "지구온난화",
        weather: "날씨",
        holiday: "휴일",
        freetime: "자유시간",
        smartphone: "스마트폰",
      },
      qs: {
        industry: [
          "Please tell me about one of the major industries or companies in your country. What is this industry or the company like? Tell me everything in detail.",
          "당신 나라의 주요 산업이나 기업에 대해 말해 주세요. 어떤 곳인지 자세히 말해 주세요.",
        ],
        transport: [
          "Please tell me about the transportation in your country. How do people usually get around?",
          "당신 나라의 교통수단에 대해 말해 주세요. 사람들은 보통 어떻게 이동하나요?",
        ],
        recycling: [
          "I would like to know about how recycling is practiced in your country. What do people usually do? Tell me how things are recycled.",
          "당신 나라에서 재활용이 어떻게 이루어지는지 알고 싶습니다. 사람들은 보통 무엇을 하나요?",
        ],
        geography: [
          "Please tell me about the geography of your country. What is it like?",
          "당신 나라의 지형에 대해 말해 주세요. 어떤가요?",
        ],
        warming: [
          "Please tell me about global warming. What do you know about it, and what is happening?",
          "지구온난화에 대해 말해 주세요. 무엇을 알고 있고 어떤 일이 일어나고 있나요?",
        ],
        weather: [
          "Please tell me about the weather and seasons in your country. What are they like?",
          "당신 나라의 날씨와 계절에 대해 말해 주세요. 어떤가요?",
        ],
        holiday: [
          "What kinds of holidays do you have in your country? What do people usually do and what kinds of food do they eat for each holiday?",
          "당신 나라에는 어떤 휴일이 있나요? 휴일마다 사람들은 보통 무엇을 하고 어떤 음식을 먹나요?",
        ],
        freetime: [
          "What do people in your country usually do in their free time? Tell me about it in detail.",
          "당신 나라 사람들은 자유 시간에 보통 무엇을 하나요? 자세히 말해 주세요.",
        ],
        smartphone: [
          "Tell me about how people use smartphones in your country. How do you use yours?",
          "당신 나라 사람들이 스마트폰을 어떻게 쓰는지 말해 주세요. 당신은 어떻게 쓰나요?",
        ],
      },
      parts: [
        [
          "It's a tough question, and I don't know what to say. But I will do my best.",
          "무슨 말을 해야 할지 모르겠어요. 그래도 최선을 다하겠어요.",
          "① 어렵다",
        ],
        ["<LEAD>.", "<LEAD>.", "② 많다 · 중요하다"],
        [
          "Speaking of <TOPIC>, <FACT1>.",
          "<TOPIC> 이야기를 하자면, <FACT1>.",
          "③ 주제별 필수답변 1",
        ],
        ["Also, <FACT2>.", "또한 <FACT2>.", "③ 주제별 필수답변 2"],
        ["Plus, <FACT3>.", "게다가 <FACT3>.", "③ 주제별 필수답변 3"],
        ["<WRAP>.", "<WRAP>.", "④ 자긍심 · 가족과의 시간"],
        ["<CONCL>.", "<CONCL>.", "⑤ 결론 · 바람"],
      ],
      slots: {
        industry: {
          LEAD: [
            "There are so many kinds of industries here in Korea, such as the IT, food, battery, automobile, and pharmaceutical industries",
            "한국에는 IT, 식품, 배터리, 자동차, 제약처럼 정말 다양한 산업이 있어요",
          ],
          TOPIC: ["industry", "산업"],
          FACT1: [
            "if I had to choose one, it would be the smartphone industry, mainly led by Samsung Electronics",
            "하나를 고르라면 삼성전자가 이끄는 스마트폰 산업이에요",
          ],
          FACT2: [
            "its global market share is more than thirty percent, which is amazing",
            "세계 시장점유율이 30%가 넘는데 정말 대단해요",
          ],
          FACT3: [
            "Korean products are known for their high quality and great features",
            "한국 제품은 높은 품질과 좋은 기능으로 알려져 있어요",
          ],
          WRAP: [
            "A lot of foreign people come to Korea, and they're amazed by the high quality and the best features. I'm so proud of being Korean",
            "많은 외국인이 한국에 와서 높은 품질과 최고의 기능에 감탄해요. 한국인으로서 정말 자랑스러워요",
          ],
          CONCL: [
            "In conclusion, I think we're doing great, and I hope we continue to improve in the future",
            "결론적으로 우리는 잘하고 있고, 앞으로도 계속 발전하기를 바라요",
          ],
        },
        transport: {
          LEAD: [
            "There are numerous transportation options in Korea; wherever you go, you can easily find buses, subways, or taxis",
            "한국에는 교통수단이 정말 많아서 어디를 가든 버스, 지하철, 택시를 쉽게 찾을 수 있어요",
          ],
          TOPIC: ["transportation", "교통"],
          FACT1: [
            "people use it for various purposes, such as commuting to work, traveling, or moving around the city",
            "사람들은 출퇴근, 여행, 도시 이동 등 다양한 목적으로 이용해요",
          ],
          FACT2: [
            "people can move from one place to another efficiently",
            "사람들은 한 곳에서 다른 곳으로 효율적으로 이동할 수 있어요",
          ],
          FACT3: [
            "these days, many people use apps for online reservations or navigation without any hassle",
            "요즘은 많은 사람이 앱으로 예약과 길 찾기를 번거로움 없이 해요",
          ],
          WRAP: [
            "Foreigners are often amazed by the convenience and punctuality of our public transportation system. I'm proud of that as a Korean",
            "외국인들은 대중교통의 편리함과 정시성에 자주 놀라요. 한국인으로서 자랑스러워요",
          ],
          CONCL: [
            "In conclusion, I think we're doing great, and I hope we continue to improve it in the future",
            "결론적으로 우리는 잘하고 있고, 앞으로도 계속 개선되기를 바라요",
          ],
        },
        recycling: {
          LEAD: [
            "These days environmental issues are emerging, and one of them is recycling. We take it very seriously",
            "요즘 환경 문제가 대두되는데 그중 하나가 재활용이고, 우리는 매우 진지하게 받아들여요",
          ],
          TOPIC: ["recycling", "재활용"],
          FACT1: [
            "we recycle regularly, and it's a big topic for us",
            "우리는 정기적으로 재활용을 하고 큰 관심사예요",
          ],
          FACT2: [
            "we have a good system for materials like plastic, cans, and glass",
            "플라스틱, 캔, 유리 같은 재료를 위한 좋은 시스템이 있어요",
          ],
          FACT3: [
            "the government has strict rules, so if you don't recycle, you can get fined",
            "정부의 규정이 엄격해서 재활용하지 않으면 벌금을 물 수 있어요",
          ],
          WRAP: [
            "A lot of foreign people come to Korea, and they're amazed by our well-practiced recycling. I'm so proud of being Korean",
            "많은 외국인이 한국에 와서 잘 정착된 재활용에 감탄해요. 한국인으로서 정말 자랑스러워요",
          ],
          CONCL: [
            "In conclusion, I think we're doing great, and I hope this trend continues just like this forever",
            "결론적으로 우리는 잘하고 있고, 이런 추세가 계속되기를 바라요",
          ],
        },
        geography: {
          LEAD: [
            "There is so much to say about the geography here in Korea",
            "한국의 지형에 대해서는 할 말이 정말 많아요",
          ],
          TOPIC: ["geography", "지형"],
          FACT1: ["we have numerous mountains, rivers, and lakes", "수많은 산, 강, 호수가 있어요"],
          FACT2: [
            "Korea is on a peninsula surrounded by the sea on three sides, and we have thousands of islands along the coast",
            "한국은 삼면이 바다로 둘러싸인 반도에 있고 해안을 따라 수천 개의 섬이 있어요",
          ],
          FACT3: [
            "about seventy percent of our land is mountainous, and the tallest mountain is Baekdu Mountain",
            "국토의 약 70%가 산지이고 가장 높은 산은 백두산이에요",
          ],
          WRAP: [
            "Thanks to this, we are blessed with abundant seafood and marine resources, and I'm proud of that",
            "덕분에 풍부한 해산물과 수산자원을 누리고 있어서 자랑스러워요",
          ],
          CONCL: [
            "In conclusion, I think Korea has a beautiful and diverse landscape, and I hope we take good care of it",
            "결론적으로 한국은 아름답고 다양한 지형을 가졌고, 잘 가꾸어 가기를 바라요",
          ],
        },
        warming: {
          LEAD: [
            "Global warming is a serious issue these days, and it's important to understand it",
            "지구온난화는 요즘 심각한 문제이고 이해하는 게 중요해요",
          ],
          TOPIC: ["global warming", "지구온난화"],
          FACT1: [
            "the Earth is gradually warming year by year",
            "지구가 해마다 점차 따뜻해지고 있어요",
          ],
          FACT2: [
            "global temperatures keep rising, leading to the melting of icebergs and glaciers at the North and South Poles",
            "기온이 꾸준히 올라 남북극의 빙산과 빙하가 녹고 있어요",
          ],
          FACT3: [
            "as a result, sea levels are rising, causing changes in coastal areas",
            "그 결과 해수면이 상승해 해안 지역에 변화가 생겨요",
          ],
          WRAP: [
            "This phenomenon is known as global warming, and everyone needs to take it seriously",
            "이 현상을 지구온난화라고 하고, 모두가 심각하게 받아들여야 해요",
          ],
          CONCL: [
            "In conclusion, I hope we all do our part to slow it down in the future",
            "결론적으로 모두가 속도를 늦추기 위해 각자 역할을 하길 바라요",
          ],
        },
        weather: {
          LEAD: [
            "There is a lot to say about the weather and seasons in Korea",
            "한국의 날씨와 계절에 대해서는 할 말이 많아요",
          ],
          TOPIC: ["the weather", "날씨"],
          FACT1: [
            "we experience four distinct seasons: spring, summer, fall, and winter",
            "봄, 여름, 가을, 겨울의 뚜렷한 사계절이 있어요",
          ],
          FACT2: [
            "spring is nice and mild, and summer is hot and humid",
            "봄은 좋고 온화하며 여름은 덥고 습해요",
          ],
          FACT3: [
            "fall is considered the nicest time of the year, while winter is freezing cold and dry",
            "가을은 일 년 중 가장 좋은 때로 여겨지고 겨울은 매우 춥고 건조해요",
          ],
          WRAP: [
            "I think having four distinct seasons is a blessing, and I enjoy each of them",
            "사계절이 뚜렷한 건 축복이라고 생각하고 계절마다 즐겨요",
          ],
          CONCL: [
            "In conclusion, each season has its own charm, and I hope it stays that way",
            "결론적으로 계절마다 매력이 있고, 앞으로도 그렇기를 바라요",
          ],
        },
        holiday: {
          LEAD: [
            "There are so many kinds of holidays here in Korea, such as New Year's Day and Chuseok, which is like Thanksgiving",
            "한국에는 설날과 추석(한국판 추수감사절)처럼 정말 다양한 명절이 있어요",
          ],
          TOPIC: ["holidays", "휴일"],
          FACT1: [
            "one of the major holidays is Chuseok, when families come together to spend time with each other",
            "대표 명절 중 하나는 추석으로, 가족이 모여 시간을 보내요",
          ],
          FACT2: [
            "families set up special feasts and often wear traditional Hanbok, and there is an ancestral ritual to honor ancestors",
            "가족들은 특별한 상을 차리고 한복을 입으며 조상께 제사를 지내요",
          ],
          FACT3: [
            "people also make and share a special rice cake called songpyeon",
            "송편이라는 특별한 떡을 만들어 나눠 먹어요",
          ],
          WRAP: [
            "Chuseok is considered a valuable time for family harmony and gratitude",
            "추석은 가족 화합과 감사를 나누는 소중한 시간으로 여겨져요",
          ],
          CONCL: [
            "I've been very busy these days, so I hope I can spend more precious time with my family",
            "요즘 많이 바빠서 가족과 더 소중한 시간을 보낼 수 있으면 좋겠어요",
          ],
        },
        freetime: {
          LEAD: [
            "It's a tough topic to talk about because I've been incredibly busy these days",
            "요즘 엄청 바빠서 이야기하기 쉽지 않은 주제예요",
          ],
          TOPIC: ["free time", "자유시간"],
          FACT1: [
            "especially on weekdays, I have limited free time",
            "특히 평일에는 자유 시간이 제한돼 있어요",
          ],
          FACT2: [
            "however, I have a lot of free time on the weekend or holidays",
            "하지만 주말이나 명절에는 시간이 많이 남아요",
          ],
          FACT3: [
            "in my free time, I usually relax at home and enjoy my hobbies",
            "자유 시간에는 보통 집에서 쉬며 취미를 즐겨요",
          ],
          WRAP: [
            "Spending that time well is important to me",
            "그 시간을 잘 보내는 게 저에겐 중요해요",
          ],
          CONCL: [
            "In conclusion, I'd like to spend more quality time with my family",
            "결론적으로 가족과 더 질 좋은 시간을 보내고 싶어요",
          ],
        },
        smartphone: {
          LEAD: [
            "Most of the time, I use my smartphone for entertainment",
            "저는 대부분 스마트폰을 오락용으로 써요",
          ],
          TOPIC: ["my smartphone", "스마트폰"],
          FACT1: [
            "it's a great source for videos that I'm interested in, and the best part is that it's absolutely free",
            "관심 있는 영상을 보기 좋은 곳이고, 가장 좋은 점은 완전히 무료라는 거예요",
          ],
          FACT2: [
            "I can dive deep into my favorite subjects and have unlimited access to my interests",
            "좋아하는 주제를 깊이 파고들 수 있고 관심사를 무제한으로 접할 수 있어요",
          ],
          FACT3: [
            "the bad thing is that I've become somewhat addicted to it",
            "나쁜 점은 어느 정도 중독됐다는 거예요",
          ],
          WRAP: [
            "When I don't watch YouTube or don't have my smartphone with me, I get a strange feeling like something is missing in my life",
            "유튜브를 안 보거나 스마트폰이 없으면 삶에 뭔가 빠진 듯한 이상한 기분이 들어요",
          ],
          CONCL: [
            "I realize I need to cut back on this addiction soon, and I'd like to spend more quality time with my family",
            "곧 이 중독을 줄여야 한다는 걸 깨닫고, 가족과 더 좋은 시간을 보내고 싶어요",
          ],
        },
      },
    },
  ],
);

// 2026-10-15 실전 모의시험 복기: 그때 나온 15문제와 내 이야기 기반 모범답안
const REPLAY = {
  name: "10/15 모의시험 복기",
  qs: [
    {
      kind: "자기소개",
      t: "1 자기소개",
      tag: "복기",
      q: [
        "Let's start the interview. Tell me a little about yourself.",
        "인터뷰를 시작하겠습니다. 자기소개를 해 주세요.",
      ],
      s: [
        [
          "Hello, my name is {Hyun-gi}. It's nice to meet you.",
          "안녕하세요, 제 이름은 현기예요. 만나서 반갑습니다.",
          "인사",
        ],
        [
          "I'm a software developer, and I've been working in {the IT field for about eight years}.",
          "저는 소프트웨어 개발자이고 IT 분야에서 약 8년째 일하고 있어요.",
          "직업",
        ],
        [
          "I work in {Yeouido}, and I mostly {develop and maintain systems for clients}.",
          "여의도에서 일하고, 주로 고객사의 시스템을 개발하고 유지보수해요.",
          "하는 일",
        ],
        [
          "In my free time, I enjoy {playing online games} at home and {meeting my friends}.",
          "여가 시간에는 집에서 온라인 게임을 하고 친구들을 만나는 걸 즐겨요.",
          "취미",
        ],
        [
          "I live alone in {an apartment in Seoul}.",
          "저는 서울의 아파트에서 혼자 살아요.",
          "사는 곳",
        ],
        [
          "I'm taking this test because {my company wants me to reach a certain grade}, so I'll do my best.",
          "회사가 요구하는 등급이 있어서 이 시험을 보게 됐고, 최선을 다할게요.",
          "시험 이유",
        ],
      ],
    },
    {
      kind: "약속 · 습관",
      t: "2 약속 습관",
      tag: "복기",
      q: [
        "What kind of appointments do you usually make? Who do you make appointments with and how do you make them?",
        "주로 어떤 약속을 잡나요? 누구와, 어떻게 약속을 잡나요?",
      ],
      s: [
        [
          "I usually make appointments with {my close friends}, and we meet {about once a month}.",
          "저는 주로 친한 친구들과 약속을 잡고, 한 달에 한 번쯤 만나요.",
          "누구와",
        ],
        [
          "We make plans through {a group chat on our phones}, and we decide the date and place together.",
          "휴대폰 단체 채팅방으로 약속을 잡고, 날짜와 장소를 함께 정해요.",
          "방법",
        ],
        [
          "We often go to {a restaurant} and {have some soju and food}.",
          "우리는 자주 식당에 가서 소주와 음식을 먹어요.",
          "활동",
        ],
        [
          "While we eat, we talk about {our jobs, our future, and our favorite food}.",
          "먹으면서 일, 미래, 좋아하는 음식에 대해 이야기해요.",
          "대화",
        ],
        [
          "Sometimes it's hard to find a time because {everyone is busy}, but I always try to make it.",
          "다들 바빠서 시간을 맞추기 어려울 때도 있지만, 저는 항상 가려고 노력해요.",
          "어려움",
        ],
        [
          "I enjoy these appointments because {they help me relax after work}.",
          "이런 약속은 일하고 나서 쉬게 해 줘서 좋아요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "약속 · 어린 시절",
      t: "3 어릴 적 병원",
      tag: "복기",
      q: [
        "Tell me about an appointment you had when you were a child. What was the appointment for? Was it with a doctor or a dentist? How did it go?",
        "어린 시절 있었던 약속(예약)에 대해 말해 주세요. 무엇 때문이었나요? 의사나 치과였나요? 어떻게 진행됐나요?",
      ],
      s: [
        [
          "When I was young, I had an appointment at {the dental clinic} because {I had a toothache}.",
          "어릴 때 치통 때문에 치과 예약이 있었어요.",
          "배경",
        ],
        [
          "I loved sweets, so {I ate a lot of candy and cake}, and that made my teeth bad.",
          "단 걸 좋아해서 사탕과 케이크를 많이 먹었고, 그래서 이가 나빠졌어요.",
          "원인",
        ],
        [
          "My mother took me there, and I was {very scared}.",
          "어머니가 데려가 주셨고, 저는 많이 무서웠어요.",
          "감정",
        ],
        [
          "The dentist {checked my teeth and treated a cavity}, and it was {a little painful}.",
          "치과 의사 선생님이 이를 살펴보고 충치를 치료했는데 조금 아팠어요.",
          "진행",
        ],
        [
          "After that, the dentist told me to {brush my teeth carefully and eat fewer sweets}.",
          "그 후 선생님은 이를 꼼꼼히 닦고 단 걸 줄이라고 했어요.",
          "결과",
        ],
        [
          "Since then, I've been careful about my teeth, and I go to the dentist regularly.",
          "그 뒤로 이를 조심하고 정기적으로 치과에 가요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "약속 · 기억에 남는 경험",
      t: "4 기억에 남는 약속",
      tag: "복기",
      q: [
        "Tell me about a memorable experience you had during an appointment. Was it unexpected? What happened and how did you deal with the situation?",
        "약속 중에 있었던 기억에 남는 경험을 말해 주세요. 예상 밖의 일이었나요? 무슨 일이 있었고 어떻게 대처했나요?",
      ],
      s: [
        [
          "One of my most memorable experiences during an appointment happened {two years ago}.",
          "약속 중 가장 기억에 남는 경험은 2년 전에 있었어요.",
          "도입",
        ],
        [
          "I had dinner with {my friends} at {a restaurant}, and after that I went home.",
          "친구들과 식당에서 저녁을 먹고 집에 갔어요.",
          "상황",
        ],
        [
          "When I got home, I realized that {I had left my wallet at the restaurant}.",
          "집에 도착해서 식당에 지갑을 두고 온 걸 알았어요.",
          "문제",
        ],
        [
          "I was very embarrassed and stressed because {my cards and ID were in it}.",
          "카드와 신분증이 들어 있어서 매우 당황하고 스트레스를 받았어요.",
          "감정",
        ],
        [
          "So I immediately {went back to the restaurant}, and luckily {the staff had kept my wallet}.",
          "그래서 바로 식당으로 돌아갔고, 다행히 직원이 지갑을 보관하고 있었어요.",
          "해결",
        ],
        [
          "I was so relieved, and I learned to {always check my belongings before leaving}.",
          "정말 안도했고, 나갈 때 소지품을 꼭 확인하는 법을 배웠어요.",
          "교훈",
        ],
      ],
    },
    {
      kind: "집 · 방 묘사",
      t: "5 집 · 방",
      tag: "복기",
      q: [
        "I'd like to know about where you live. Tell me about the different rooms in your home. What's your favorite room? Describe it in detail.",
        "사는 곳에 대해 알고 싶어요. 집의 여러 방에 대해 말해 주세요. 가장 좋아하는 방은 어디인가요? 자세히 묘사해 주세요.",
      ],
      s: [
        [
          "I live alone in {an apartment on the 15th floor}.",
          "저는 15층 아파트에서 혼자 살아요.",
          "집",
        ],
        [
          "My home has {a living room, a bedroom, a kitchen, and a small balcony}.",
          "집에는 거실, 침실, 주방, 작은 발코니가 있어요.",
          "방 구성",
        ],
        [
          "My favorite room is {the living room}, because I spend most of my time there.",
          "가장 좋아하는 방은 거실인데, 대부분의 시간을 거기서 보내기 때문이에요.",
          "좋아하는 방",
        ],
        [
          "There's {a big TV and my computer}, and I enjoy {playing online games} there.",
          "큰 TV와 컴퓨터가 있고, 거기서 온라인 게임을 즐겨요.",
          "물건 · 활동",
        ],
        [
          "It's {clean, cozy, and comfortable}, so I can relax after work.",
          "깨끗하고 아늑하고 편안해서 퇴근 후에 쉴 수 있어요.",
          "분위기",
        ],
        [
          "That's why the living room is my favorite place in my home.",
          "그래서 거실이 우리 집에서 제일 좋아하는 곳이에요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "집 · 어린 시절",
      t: "6 자란 집",
      tag: "복기",
      q: [
        "Tell me about the house or apartment where you grew up. What did your home and the surrounding area look like when you were young, and how has it changed?",
        "자란 집이나 아파트에 대해 말해 주세요. 어렸을 때 집과 주변은 어땠고 어떻게 변했나요?",
      ],
      s: [
        [
          "I grew up in {an apartment}, and it was {bigger than my current home}.",
          "저는 아파트에서 자랐고, 지금 집보다 더 컸어요.",
          "집",
        ],
        [
          "There was {a small park} near my old house, and I often {walked around it}.",
          "옛집 근처에 작은 공원이 있었고, 자주 그 주변을 걸었어요.",
          "주변",
        ],
        [
          "I used to meet my friends there and {play after school}.",
          "거기서 친구들을 만나 방과 후에 놀곤 했어요.",
          "추억",
        ],
        ["The neighborhood was {quiet and friendly}.", "동네는 조용하고 정겨웠어요.", "분위기"],
        [
          "Now it has changed a lot, and there are {more buildings and shops}.",
          "지금은 많이 변해서 건물과 가게가 더 많아졌어요.",
          "변화",
        ],
        [
          "I don't remember everything, but I still miss that place.",
          "전부 기억나진 않지만 그곳이 여전히 그리워요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "집 · 가족 추억",
      t: "7 가족 추억",
      tag: "복기",
      q: [
        "Tell me about a special family memory that occurred at home. It could be something funny, surprising, or important. Describe a particular day or moment that stands out in your memory.",
        "집에서 있었던 특별한 가족 추억을 말해 주세요. 재미있거나 놀랍거나 중요한 일일 수 있어요. 기억에 남는 특정한 날이나 순간을 묘사해 주세요.",
      ],
      s: [
        [
          "My special family memory is {cooking together with my family}.",
          "제 특별한 가족 추억은 가족과 함께 요리한 거예요.",
          "도입",
        ],
        [
          "My family loves cooking, so we often made {kimchi stew, bulgogi, and spaghetti} together.",
          "가족이 요리를 좋아해서 김치찌개, 불고기, 스파게티를 자주 같이 만들었어요.",
          "메뉴",
        ],
        [
          "I remember one day when {we all made dinner in the kitchen}, and {we laughed a lot}.",
          "온 가족이 주방에서 저녁을 만들며 많이 웃었던 어느 날이 기억나요.",
          "특정한 날",
        ],
        [
          "My mother has {great recipes}, and she always cooked delicious food for me.",
          "어머니는 훌륭한 레시피가 있고 항상 맛있는 음식을 해 주셨어요.",
          "어머니",
        ],
        [
          "Now I live alone, so I often miss {my mother's cooking}.",
          "지금은 혼자 살아서 어머니 음식이 자주 그리워요.",
          "현재",
        ],
        [
          "That's why I visit my old house and {eat her food} whenever I can.",
          "그래서 시간이 될 때마다 본가에 가서 어머니 음식을 먹어요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "술집 · 묘사",
      t: "8 바 · 음료 만드는 곳",
      tag: "복기",
      q: [
        "Most bars and pubs have a special area to make drinks. Tell me what this area looks like in your favorite bar or pub.",
        "대부분의 바와 펍에는 음료를 만드는 특별한 공간이 있어요. 가장 좋아하는 바나 펍에서 그 공간이 어떻게 생겼는지 말해 주세요.",
      ],
      s: [
        [
          "I don't go to bars very often, but I'll describe the one I know best.",
          "바에 자주 가진 않지만, 가장 잘 아는 곳을 설명해 볼게요.",
          "도입",
        ],
        [
          "The drink area is {a long counter} where the bartender makes drinks.",
          "음료 공간은 바텐더가 음료를 만드는 긴 카운터예요.",
          "공간",
        ],
        [
          "Behind the counter, there are {shelves full of bottles} under {warm lights}.",
          "카운터 뒤에는 따뜻한 조명 아래 병이 가득한 선반이 있어요.",
          "뒤쪽",
        ],
        [
          "The bartender {shakes cocktails}, and the tools like {shakers and glasses} are neatly arranged.",
          "바텐더가 칵테일을 흔들어 만들고, 셰이커와 잔 같은 도구가 깔끔하게 놓여 있어요.",
          "도구",
        ],
        [
          "In front of the counter, there are {high stools}, so you can watch the bartender.",
          "카운터 앞에는 높은 의자가 있어서 바텐더를 구경할 수 있어요.",
          "좌석",
        ],
        [
          "It has {a cozy and relaxed atmosphere}, so I like sitting there.",
          "아늑하고 편안한 분위기라서 거기 앉는 걸 좋아해요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "술집 · 기억",
      t: "9 기억나는 바",
      tag: "복기",
      q: [
        "Tell me about one bar you remember going to. What did it look like? Give me as many details as you can.",
        "가 본 바 하나에 대해 말해 주세요. 어떻게 생겼나요? 최대한 자세히 말해 주세요.",
      ],
      s: [
        [
          "I remember {a bar near my house} that I visited {a few years ago}.",
          "몇 년 전에 갔던 집 근처 바가 기억나요.",
          "도입",
        ],
        [
          "It looked {fancy}, with {dark wood furniture and soft lighting}.",
          "어두운 원목 가구와 은은한 조명이 있어 고급스러워 보였어요.",
          "외관",
        ],
        [
          "The menu had {many expensive drinks}, but I usually only drink soju.",
          "메뉴에는 비싼 술이 많았지만 저는 보통 소주만 마셔요.",
          "메뉴",
        ],
        [
          "So I told the bartender, and he made me {a cocktail with soju}.",
          "그래서 바텐더에게 말했더니 소주로 칵테일을 만들어 줬어요.",
          "사건",
        ],
        [
          "It was my first cocktail, and it was {surprisingly delicious}.",
          "처음 마신 칵테일이었는데 놀랄 만큼 맛있었어요.",
          "느낌",
        ],
        [
          "That was a good memory, and now I enjoy trying new drinks.",
          "좋은 기억이었고, 지금은 새로운 술을 마셔 보는 걸 즐겨요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "술집 · 특별한 방문",
      t: "10 특별한 바 방문",
      tag: "복기",
      q: [
        "Tell me about a special visit to a bar or pub. Maybe you celebrated your birthday there or a friend's birthday. Tell me what you did before and after your bar visit and how you spent your time at the bar. Tell me the whole story.",
        "바나 펍에 특별히 방문한 경험을 말해 주세요. 생일 파티일 수도 있어요. 방문 전후에 무엇을 했고 바에서 어떻게 시간을 보냈는지 전체 이야기를 해 주세요.",
      ],
      s: [
        [
          "A special visit I remember was {a friend's birthday party} at {a pub}.",
          "기억나는 특별한 방문은 친구 생일 파티로 간 펍이에요.",
          "도입",
        ],
        [
          "Before the party, I {bought a gift and met other friends at the station}.",
          "파티 전에 선물을 사고 역에서 다른 친구들을 만났어요.",
          "방문 전",
        ],
        [
          "At the pub, we {ordered food and drinks and sang happy birthday}.",
          "펍에서 음식과 술을 시키고 생일 축하 노래를 불렀어요.",
          "바에서",
        ],
        [
          "We talked about {our jobs and old memories} for hours.",
          "일과 옛 추억에 대해 몇 시간 동안 이야기했어요.",
          "대화",
        ],
        [
          "After that, we {took a group photo and went home by taxi}.",
          "그 후 단체 사진을 찍고 택시로 집에 갔어요.",
          "방문 후",
        ],
        [
          "It was a fun night, and my friend was really happy.",
          "즐거운 밤이었고 친구도 정말 기뻐했어요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "롤플레이 11",
      t: "11 영화관에 질문",
      tag: "복기",
      q: [
        "I would like to give you a situation and ask you to act it out. You want to watch a movie with your friends. Call a theater and ask three or four questions about the movie tickets.",
        "상황을 연기해 주세요. 친구들과 영화를 보려고 합니다. 영화관에 전화해서 영화표에 대해 세네 가지 질문을 하세요.",
      ],
      s: [
        [
          "Hello, I'm calling to ask about {buying movie tickets}.",
          "안녕하세요, 영화표 구매에 대해 문의하려고 전화했어요.",
          "도입",
        ],
        [
          "What movies are showing {this weekend}, and what time do they start?",
          "이번 주말에 어떤 영화를 상영하고, 몇 시에 시작하나요?",
          "상영 정보",
        ],
        [
          "How much are the tickets? Is there {a discount for members}?",
          "표는 얼마인가요? 회원 할인이 있나요?",
          "가격 · 할인",
        ],
        [
          "Are there seats available for {Saturday evening}? I'd like {two seats together}.",
          "토요일 저녁에 자리가 있나요? 두 자리가 붙어 있으면 좋겠어요.",
          "좌석",
        ],
        [
          "Can I reserve them by phone or online?",
          "전화나 온라인으로 예매할 수 있나요?",
          "예매 방법",
        ],
        [
          "Thank you for your help. Have a nice day!",
          "도와주셔서 감사합니다. 좋은 하루 보내세요!",
          "마무리",
        ],
      ],
    },
    {
      kind: "롤플레이 12",
      t: "12 잘못된 표",
      tag: "복기",
      q: [
        "I'm sorry, but there is a problem I want you to resolve. You just found out you've been sold the wrong tickets. Ask someone at the movie theater for a solution, giving him or her two or three alternatives.",
        "문제가 생겼습니다. 잘못된 표를 팔았다는 걸 방금 알았습니다. 영화관 직원에게 해결책을 요청하며 대안 두세 가지를 제시하세요.",
      ],
      s: [
        [
          "Excuse me, I have a problem. I bought {these tickets} {two hours ago}, but they're for the wrong movie.",
          "실례합니다, 문제가 있어요. 두 시간 전에 이 표를 샀는데 다른 영화 표예요.",
          "문제 설명",
        ],
        [
          "I wanted to see {the sci-fi movie}, but these are for {a different one}.",
          "저는 SF 영화를 보고 싶었는데 이건 다른 영화예요.",
          "상세",
        ],
        [
          "I have a few suggestions. First, could you exchange them for the right movie?",
          "제안이 몇 가지 있어요. 첫째, 맞는 영화로 교환해 주시겠어요?",
          "대안 1",
        ],
        [
          "Second, if that's not possible, could I change to a different showtime?",
          "둘째, 그게 안 되면 다른 시간대로 바꿀 수 있을까요?",
          "대안 2",
        ],
        [
          "Third, if neither works, could I get a refund and buy new tickets?",
          "셋째, 둘 다 안 되면 환불받고 새 표를 살 수 있을까요?",
          "대안 3",
        ],
        [
          "I'd really appreciate your help. Thank you so much.",
          "도와주시면 정말 감사하겠습니다. 고맙습니다.",
          "마무리",
        ],
      ],
    },
    {
      kind: "롤플레이 13",
      t: "13 비슷한 경험 (예약 문제)",
      tag: "복기",
      q: [
        "Have you ever been in a situation where you had a problem with buying tickets or making reservations? What was the situation and how did you solve the problem?",
        "표를 사거나 예약할 때 문제가 생긴 적이 있나요? 어떤 상황이었고 어떻게 해결했나요?",
      ],
      s: [
        [
          "Two years ago, I had a problem when I booked a hotel in {Seogwipo, Jeju Island}.",
          "2년 전 제주도 서귀포의 호텔을 예약할 때 문제가 있었어요.",
          "도입",
        ],
        [
          "I reserved the room for {the wrong date}, and I only noticed after I booked it.",
          "날짜를 잘못 예약했고, 예약하고 나서야 알았어요.",
          "문제",
        ],
        [
          "I was worried, so I called the hotel and {asked to change my reservation}.",
          "걱정돼서 호텔에 전화해 예약 변경을 요청했어요.",
          "행동",
        ],
        [
          "Luckily, they had {one room left} for the right day, so I booked it again.",
          "다행히 맞는 날짜에 방이 하나 남아 있어서 다시 예약했어요.",
          "해결",
        ],
        [
          "It was a big relief, and the trip went well.",
          "정말 안도했고 여행도 잘 다녀왔어요.",
          "결과",
        ],
        [
          "Since then, I always {double-check the date before I confirm a reservation}.",
          "그 뒤로는 예약을 확정하기 전에 항상 날짜를 다시 확인해요.",
          "교훈",
        ],
      ],
    },
    {
      kind: "이슈 · 인접 국가의 변화",
      t: "14 이웃 나라의 변화",
      tag: "복기",
      q: [
        "Think about a country that is geographically close to your home country. In what ways has this country changed over the years? Has there been changes in its economy, politics, etc.? Describe this country and its changes in detail.",
        "한국과 지리적으로 가까운 나라를 떠올려 보세요. 이 나라는 수년간 어떻게 변했나요? 경제, 정치 등에 변화가 있었나요? 그 나라와 변화를 자세히 말해 주세요.",
      ],
      s: [
        ["A country close to Korea is {Japan}.", "한국과 가까운 나라는 일본이에요.", "도입"],
        [
          "When I was young, I felt that {Japan had a strong economy}, and it seemed {clean and polite}.",
          "어렸을 때 일본은 경제가 강하고 깨끗하고 예의 바른 나라로 보였어요.",
          "예전",
        ],
        [
          "In recent years, I've heard that {its economy has slowed down and the yen has been weak}.",
          "최근에는 경제가 둔화하고 엔화가 약세라고 들었어요.",
          "경제 변화",
        ],
        [
          "At the same time, {many Koreans travel to Japan}, because {it has become cheaper to visit}.",
          "동시에 방문하기 저렴해져서 많은 한국인이 일본을 여행해요.",
          "영향",
        ],
        [
          "I also see {more cultural exchange}, such as {music, food, and games}.",
          "음악, 음식, 게임 같은 문화 교류도 더 늘었어요.",
          "문화",
        ],
        [
          "Overall, both countries have changed, and I hope we keep a good relationship.",
          "전반적으로 두 나라 모두 변했고, 좋은 관계가 이어지길 바라요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "이슈 · 뉴스",
      t: "15 인접 국가 뉴스",
      tag: "복기",
      q: [
        "Tell me in detail about a news item you read or heard recently about a country near your country. What was the news story about? Tell me as much as you can about this report. Explain why the story is important.",
        "최근 읽거나 들은 이웃 나라 뉴스를 자세히 말해 주세요. 어떤 내용이었나요? 보도 내용을 최대한 말하고, 왜 중요한지 설명해 주세요.",
      ],
      s: [
        [
          "Recently, I read a news story about {the exchange rate between Korea and Japan}.",
          "최근 한국과 일본의 환율에 대한 뉴스를 읽었어요.",
          "도입",
        ],
        [
          "The report said that {the Japanese yen is weak compared to the Korean won}.",
          "보도는 엔화가 원화에 비해 약하다고 했어요.",
          "내용",
        ],
        [
          "Because of that, {more Korean tourists visit Japan}, and {prices feel cheaper to them}.",
          "그 때문에 일본을 찾는 한국인 관광객이 늘고 물가가 싸게 느껴진다고 해요.",
          "영향",
        ],
        [
          "It's important because {it affects the economy, travel, and shopping of both countries}.",
          "두 나라의 경제, 여행, 쇼핑에 영향을 주기 때문에 중요해요.",
          "중요한 이유",
        ],
        [
          "It also shows that {a country's economy changes over time}.",
          "또한 한 나라의 경제가 시간이 지나며 바뀐다는 걸 보여 줘요.",
          "의미",
        ],
        [
          "I think it's good to keep up with this kind of news, so I plan to follow it.",
          "이런 뉴스를 계속 챙겨 보는 게 좋다고 생각해서 앞으로도 따라가 볼 생각이에요.",
          "마무리",
        ],
      ],
    },
  ],
};
// 복기 문제의 분류: 1 자기소개(서베이 묶음), 2~4 약속(돌발), 5~10 집·바(서베이), 11~13 롤플레이, 14~15 이슈(돌발)
REPLAY.qs.forEach((q, i) => {
  q.cat = i < 1 ? "survey" : i < 4 ? "surprise" : i < 10 ? "survey" : i < 13 ? "rp" : "surprise";
});
/* 저장된 모의시험 세트 목록. 새 시험을 복기할 때마다 아래 배열에 세트를 추가하면
   모의고사 화면에 버튼이 자동으로 생긴다.
   세트 형식: {name, note?, qs:[{kind 문제 종류, t 제목, tag, q:[영어, 한글], s:[[영어({}=내 이야기), 한글, 키워드]], cat:'survey'|'surprise'|'rp'}]} */
const REPLAY2 = {
  name: "10/17 모의시험 2회차 복기",
  qs: [
    {
      kind: "자기소개",
      t: "1 자기소개",
      tag: "복기",
      q: [
        "Let's start the interview. Now tell me about yourself.",
        "인터뷰를 시작하겠습니다. 자기소개를 해 주세요.",
      ],
      s: [
        [
          "Hello, my name is {Hyun-gi}. It's nice to meet you.",
          "안녕하세요, 제 이름은 현기예요. 만나서 반갑습니다.",
          "인사",
        ],
        [
          "I'm a software developer, and I've been working in {the IT field for about eight years}.",
          "저는 소프트웨어 개발자이고 IT 분야에서 약 8년째 일하고 있어요.",
          "직업",
        ],
        [
          "I live alone in {an apartment in Seoul}, and in my free time I enjoy {playing online games and listening to music}.",
          "저는 서울의 아파트에서 혼자 살고, 여가 시간에는 온라인 게임과 음악 듣기를 즐겨요.",
          "집 · 취미",
        ],
        [
          "I'm taking this test because {my company requires a certain grade}.",
          "회사에서 요구하는 등급이 있어서 이 시험을 보게 됐어요.",
          "시험 이유",
        ],
        [
          "I'm a little nervous, but I studied a lot, so I'll do my best.",
          "조금 긴장되지만 많이 공부했으니 최선을 다할게요.",
          "각오 (등급 부탁은 금지)",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "미용실 · 위치와 모습",
      t: "2 미용실 위치·모습",
      tag: "복기",
      q: [
        "Tell me about the hair salon you usually go to. Where is it located and what is it like?",
        "자주 가는 미용실에 대해 말해 주세요. 어디에 있고 어떤 곳인가요?",
      ],
      s: [
        [
          "I usually go to {a hair salon near my house}, and it takes about {five minutes} on foot.",
          "저는 보통 집 근처 미용실에 가고, 걸어서 5분쯤 걸려요.",
          "위치",
        ],
        [
          "It's {a small and clean salon}, and there are {a big mirror, a few chairs, and a waiting sofa}.",
          "작고 깔끔한 곳이고, 큰 거울과 의자 몇 개, 대기용 소파가 있어요.",
          "모습",
        ],
        [
          "I go there because it's close, and I get my hair cut {quite often}.",
          "가까워서 가고, 머리를 꽤 자주 잘라요.",
          "가는 이유",
        ],
        [
          "The hair stylist is very skilled, so I trust her.",
          "미용사가 실력이 좋아서 믿고 맡겨요.",
          "미용사",
        ],
        ["That's why I like going there.", "그래서 그곳에 가는 게 좋아요.", "마무리"],
      ],
      cat: "survey",
    },
    {
      kind: "미용실 · 하는 일",
      t: "3 미용실에서 하는 일",
      tag: "복기",
      q: [
        "What do you usually do when you go to the hair salon? Do you get a haircut, dye your hair, or get other treatments?",
        "미용실에 가면 보통 무엇을 하나요? 커트, 염색, 다른 시술 중에서 자세히 말해 주세요.",
      ],
      s: [
        [
          "I usually get a haircut, and I ask for {a two-block cut}.",
          "저는 보통 커트를 하고, 투블럭으로 해 달라고 해요.",
          "하는 일",
        ],
        [
          "I don't dye my hair because {my hair is weak}, and strong chemicals can damage it.",
          "머리카락이 약해서 염색은 안 해요. 강한 약품이 머리를 상하게 할 수 있거든요.",
          "염색 안 하는 이유",
        ],
        [
          "First, I sit on the sofa and wait for my turn. Then the stylist washes and cuts my hair.",
          "먼저 소파에 앉아 차례를 기다리고, 그다음 미용사가 머리를 감기고 잘라요.",
          "순서",
        ],
        [
          "She is good at styling, so I'm usually satisfied with the result.",
          "스타일링을 잘해서 보통 결과에 만족해요.",
          "만족",
        ],
        [
          "After that, I check the style in the mirror and pay.",
          "그 뒤에 거울로 스타일을 확인하고 계산해요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "미용실 · 기억에 남는 경험",
      t: "4 미용실 기억에 남는 경험",
      tag: "복기",
      q: [
        "Tell me about a memorable experience you had at a hair salon. What happened and why was it unforgettable?",
        "미용실에서 기억에 남는 경험을 말해 주세요. 무슨 일이 있었고 왜 잊을 수 없나요?",
      ],
      s: [
        [
          "One of my most memorable experiences at a hair salon happened {when I was young}.",
          "미용실에서 가장 기억에 남는 경험은 어릴 때 있었어요.",
          "도입",
        ],
        [
          "My regular salon near my old house was closed, so I went to another one.",
          "옛집 근처 단골 미용실이 문을 닫아서 다른 곳에 갔어요.",
          "상황",
        ],
        [
          "I asked for {a two-block cut}, but the stylist wasn't good at it, and my hair looked terrible.",
          "투블럭으로 해 달라고 했는데 미용사가 서툴러서 머리가 엉망이 됐어요.",
          "문제",
        ],
        [
          "I didn't want to pay, but it was my choice to go there, so I paid.",
          "돈을 내기 싫었지만 제가 선택한 거라 계산했어요.",
          "결과",
        ],
        [
          "It was unforgettable because it was my worst haircut ever. Since then, I check reviews before I go to a new salon.",
          "최악의 머리였어서 잊을 수 없어요. 그 뒤로는 새 미용실에 가기 전에 후기를 확인해요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "집 · 위치와 방 묘사",
      t: "5 집 · 방",
      tag: "복기",
      q: [
        "Please tell me about your house. Where is it located and what does it look like? Which one is your favorite room?",
        "집에 대해 말해 주세요. 어디에 있고 어떻게 생겼나요? 가장 좋아하는 방은 어디인가요?",
      ],
      s: [
        [
          "I live alone in {an apartment on the 15th floor}.",
          "저는 15층 아파트에서 혼자 살아요.",
          "집",
        ],
        [
          "My home isn't big or small, and it's very cozy and comfortable.",
          "집은 크지도 작지도 않고, 아주 아늑하고 편해요.",
          "느낌",
        ],
        [
          "It has {one bedroom, a living room, a kitchen, and a bathroom}.",
          "침실 하나, 거실, 주방, 욕실이 있어요.",
          "방 구성",
        ],
        [
          "My favorite room is the living room, because it has {a big TV and my computer}.",
          "제일 좋아하는 방은 거실이에요. 큰 TV와 컴퓨터가 있거든요.",
          "좋아하는 방",
        ],
        [
          "I play online games there, and since I live alone, I really enjoy my freedom.",
          "거기서 온라인 게임을 하고, 혼자 살아서 자유를 정말 즐겨요.",
          "이유",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "집 · 최근 바꾼 점",
      t: "6 집 · 최근 변화",
      tag: "복기",
      q: [
        "Please tell me about the changes you have made to your house recently. Why did you make the changes? Are you satisfied with them?",
        "최근 집에 바꾼 점을 말해 주세요. 왜 바꿨고 만족하나요?",
      ],
      s: [
        [
          "Recently, I bought {a new audio system} because I love listening to music.",
          "최근에 음악 듣는 걸 좋아해서 새 오디오 시스템을 샀어요.",
          "바꾼 것 · 이유",
        ],
        [
          "It was big, so I changed {the layout of my living room}.",
          "크기가 커서 거실 배치를 바꿨어요.",
          "변화",
        ],
        [
          "The sound is great, and it makes me really happy and excited.",
          "소리가 훌륭하고 저를 정말 행복하고 신나게 해 줘요.",
          "좋은 점",
        ],
        ["I'm very satisfied with it.", "아주 만족해요.", "만족"],
        [
          "I think it was one of the best things I've ever bought.",
          "제가 산 것 중 가장 잘한 것 중 하나라고 생각해요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "집 · 문제와 해결",
      t: "7 집 · 문제 해결",
      tag: "복기",
      q: [
        "Have you had any problems at home? For instance, a piece of furniture or a home appliance could be broken or damaged. How did you handle the situation?",
        "집에서 문제가 있었나요? 가구나 가전이 고장 나거나 망가졌을 수 있어요. 어떻게 해결했나요?",
      ],
      s: [
        [
          "I haven't had many big problems at home, but once {my TV stopped working}.",
          "집에서 큰 문제는 많지 않았지만, 한 번은 TV가 멈춘 적이 있어요.",
          "도입",
        ],
        [
          "I checked {the power and the cable}, but it still didn't work.",
          "전원과 케이블을 확인했지만 그래도 안 됐어요.",
          "시도",
        ],
        [
          "So I contacted the manufacturer's service center, and they fixed it.",
          "그래서 제조사 서비스 센터에 연락했고 고쳐 줬어요.",
          "해결",
        ],
        ["Now it works well.", "지금은 잘 작동해요.", "결과"],
        [
          "The only other problem is that my home feels a little empty, because I live alone.",
          "그 밖의 문제라면 혼자 살아서 집이 조금 허전하다는 거예요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "카페 · 우리 동네 모습",
      t: "8 카페 묘사",
      tag: "복기",
      q: [
        "Tell me what cafes and coffee shops typically look like in your community.",
        "우리 동네의 카페와 커피숍은 보통 어떤 모습인지 말해 주세요.",
      ],
      s: [
        [
          "In my town, most cafes are {clean and modern}, with {comfortable seats and soft lighting}.",
          "우리 동네 카페는 대부분 깔끔하고 현대적이고, 편한 좌석과 은은한 조명이 있어요.",
          "전체 모습",
        ],
        [
          "There's a Starbucks near my house, and its interior is well maintained.",
          "집 근처에 스타벅스가 있는데 인테리어가 잘 관리돼 있어요.",
          "예시",
        ],
        [
          "Many people go there to {study, work, or chat with friends}.",
          "많은 사람들이 공부하거나 일하거나 친구와 수다를 떨러 가요.",
          "사람들",
        ],
        [
          "Some cafes also hold community events like {meetings or small celebrations}.",
          "어떤 카페는 모임이나 작은 축하 행사 같은 지역 행사도 열어요.",
          "행사",
        ],
        [
          "I'm not a big cafe person, but I like a quiet cafe where I can focus.",
          "카페를 아주 좋아하진 않지만 집중할 수 있는 조용한 카페는 좋아해요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "카페 · 처음 간 기억",
      t: "9 처음 간 카페",
      tag: "복기",
      q: [
        "Tell me about the one time you remember going to a cafe or coffee shop. Were you a child or were you older? What happened when you were there?",
        "카페에 갔던 기억을 하나 말해 주세요. 어릴 때였나요, 더 컸나요? 거기서 무슨 일이 있었나요?",
      ],
      s: [
        [
          "The first time I remember going to a cafe was when {I was a high school student}.",
          "제가 기억하는 첫 카페는 고등학생 때예요.",
          "도입",
        ],
        [
          "I couldn't focus on studying in my room at my old house.",
          "옛집 제 방에서는 공부에 집중이 안 됐어요.",
          "이유",
        ],
        ["So I went to a small cafe near my house.", "그래서 집 근처 작은 카페에 갔어요.", "행동"],
        [
          "It was quiet, and I could really focus on my studies.",
          "조용해서 공부에 정말 집중할 수 있었어요.",
          "분위기",
        ],
        [
          "I studied very well that day, so it was a good experience.",
          "그날 공부가 아주 잘 돼서 좋은 경험이었어요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "카페 · 특별한 경험",
      t: "10 카페 특별한 경험",
      tag: "복기",
      q: [
        "Tell me about a time you went to a cafe or coffee shop that was very memorable. Did something unusual or strange happen?",
        "아주 기억에 남는 카페 방문을 말해 주세요. 특이하거나 이상한 일이 있었나요?",
      ],
      s: [
        [
          "About {two years ago}, I lost my wallet at a cafe near {my college}.",
          "2년쯤 전에 대학 근처 카페에서 지갑을 잃어버렸어요.",
          "도입",
        ],
        [
          "I had been {studying there with a friend}, and I left it on the table.",
          "거기서 친구와 공부하다가 테이블에 두고 왔어요.",
          "상황",
        ],
        [
          "I didn't notice until I got home, and I felt very worried.",
          "집에 와서야 알았고 아주 걱정됐어요.",
          "깨달음",
        ],
        [
          "I went back to the cafe right away, but the wallet couldn't be found.",
          "바로 카페에 돌아갔지만 지갑은 찾을 수 없었어요.",
          "결과",
        ],
        [
          "It was so embarrassing, and since then I check my bag before I leave a cafe.",
          "너무 당황스러웠고, 그 뒤로는 카페를 나서기 전에 가방을 확인해요.",
          "교훈",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "롤플레이 11",
      t: "11 친구에게 MP3 질문",
      tag: "복기",
      q: [
        "You want to buy an MP3 player. Call a friend who knows a lot about it and ask 3 or 4 questions to get information about buying an MP3 player.",
        "MP3 플레이어를 사려고 합니다. 잘 아는 친구에게 전화해서 3~4가지 질문을 하세요.",
      ],
      s: [
        [
          "Hi, it's {Hyun-gi}. I'm thinking about buying an MP3 player, and I need your help.",
          "안녕, 나 현기야. MP3 플레이어를 사려는데 네 도움이 필요해.",
          "도입",
        ],
        [
          "What kind of MP3 player would you recommend?",
          "어떤 종류의 MP3 플레이어를 추천해?",
          "질문 1",
        ],
        [
          "How much memory do I need? And does it need Bluetooth?",
          "메모리는 얼마나 필요해? 블루투스도 있어야 할까?",
          "질문 2",
        ],
        [
          "Which brand has the best sound quality for around {$200}?",
          "200달러쯤이면 어느 브랜드가 음질이 제일 좋아?",
          "질문 3",
        ],
        [
          "Where can I buy it? Thank you so much!",
          "어디서 살 수 있어? 정말 고마워!",
          "질문 4 · 마무리",
        ],
      ],
      cat: "rp",
    },
    {
      kind: "롤플레이 12",
      t: "12 친구 MP3 고장",
      tag: "복기",
      q: [
        "You borrowed an MP3 player from a friend and broke it. Call your friend, explain what happened and the current condition, then suggest 2 or 3 solutions.",
        "친구에게 빌린 MP3 플레이어를 망가뜨렸습니다. 전화해서 상황과 현재 상태를 설명하고 해결책 2~3가지를 제안하세요.",
      ],
      s: [
        [
          "Hi, it's {Hyun-gi}. I have some bad news. I'm so sorry, but I broke your MP3 player.",
          "안녕, 나 현기야. 안 좋은 소식이 있어. 정말 미안한데 네 MP3 플레이어를 망가뜨렸어.",
          "도입 · 사과",
        ],
        [
          "I dropped it when {I had a small car accident}, and now it won't turn on.",
          "작은 교통사고가 났을 때 떨어뜨렸고, 지금은 켜지지 않아.",
          "상황 · 상태",
        ],
        [
          "I have three ideas. First, I can take it to a repair shop and pay for it.",
          "해결책이 세 가지 있어. 첫째, 수리점에 가져가서 내가 비용을 낼게.",
          "해결책 1",
        ],
        [
          "Second, if it can't be fixed, I'll buy you the same model.",
          "둘째, 고칠 수 없으면 같은 모델을 사 줄게.",
          "해결책 2",
        ],
        [
          "Third, I could buy you a newer one. Which one do you prefer?",
          "셋째, 더 새 제품을 사 줄 수도 있어. 어느 쪽이 좋아?",
          "해결책 3 · 질문",
        ],
      ],
      cat: "rp",
    },
    {
      kind: "롤플레이 13",
      t: "13 비슷한 경험 (기기 고장)",
      tag: "복기",
      q: [
        "Tell me about a time when some equipment or device broke down or didn't work properly. What was the situation, what happened, and how did you solve the problem?",
        "장비나 기기가 고장 났거나 제대로 작동하지 않았던 경험을 말해 주세요. 어떤 상황이었고 어떻게 해결했나요?",
      ],
      s: [
        [
          "Recently, my TV stopped working, and I didn't know why.",
          "최근에 TV가 멈췄는데 이유를 몰랐어요.",
          "도입",
        ],
        [
          "I had bought it {one year ago}, so it was still under warranty.",
          "1년 전에 산 거라 아직 보증 기간이었어요.",
          "배경",
        ],
        [
          "I contacted the manufacturer's service center, and they sent a technician.",
          "제조사 서비스 센터에 연락했고 기사님이 왔어요.",
          "해결 요청",
        ],
        ["He repaired it, and now it works well.", "수리해 줬고 지금은 잘 작동해요.", "결과"],
        [
          "I learned that I should keep my receipt and check the warranty.",
          "영수증을 보관하고 보증을 확인해야 한다는 걸 배웠어요.",
          "교훈",
        ],
      ],
      cat: "rp",
    },
    {
      kind: "이슈 · 인터넷 사용",
      t: "14 연령별 인터넷 사용",
      tag: "복기",
      q: [
        "How is the use of the Internet different among different age groups? What do younger people typically do on the Internet and how do older people use it?",
        "연령대별로 인터넷 사용은 어떻게 다른가요? 젊은 사람과 나이 든 사람은 각각 무엇을 하나요?",
      ],
      s: [
        [
          "There are two big differences in how younger and older people use the Internet.",
          "젊은 사람과 나이 든 사람의 인터넷 사용에는 큰 차이가 두 가지 있어요.",
          "도입",
        ],
        [
          "First, younger people mostly use it to connect with others, like {Instagram and KakaoTalk}.",
          "첫째, 젊은 사람들은 주로 인스타그램, 카카오톡처럼 사람들과 연결되는 데 써요.",
          "차이 1",
        ],
        [
          "Second, older people use it to get information, like {YouTube, Naver, and Wikipedia}.",
          "둘째, 나이 든 사람들은 유튜브, 네이버, 위키백과처럼 정보를 얻는 데 써요.",
          "차이 2",
        ],
        [
          "So young people use it for social networking, while older people use it for information.",
          "그래서 젊은 사람은 소셜 활동에, 나이 든 사람은 정보에 써요.",
          "정리",
        ],
        ["I think that's the main difference.", "그게 가장 큰 차이라고 생각해요.", "마무리"],
      ],
      cat: "surprise",
    },
    {
      kind: "이슈 · 인터넷 문제",
      t: "15 인터넷 이슈",
      tag: "복기",
      q: [
        "Tell me about some issues regarding the Internet these days, for example, security problems or personal information. How have these concerns changed over the years and how do they affect people in your country?",
        "요즘 인터넷의 문제(보안, 개인정보 등)를 말해 주세요. 해마다 우려가 어떻게 바뀌었고 우리나라 사람들에게 어떤 영향이 있나요?",
      ],
      s: [
        [
          "These days, one big issue is {hacking with AI and personal information leaks}.",
          "요즘 큰 문제 중 하나는 AI를 이용한 해킹과 개인정보 유출이에요.",
          "도입",
        ],
        [
          "I read a news story that {hackers used AI to attack a banking system}, and a lot of personal information was leaked.",
          "해커가 AI로 은행 시스템을 공격해 많은 개인정보가 유출됐다는 뉴스를 읽었어요.",
          "뉴스",
        ],
        [
          "Years ago, people mainly worried about {viruses and spam}, but now the problems are more serious.",
          "몇 년 전에는 주로 바이러스와 스팸을 걱정했지만, 지금은 문제가 더 심각해요.",
          "과거 vs 지금",
        ],
        [
          "In Korea, many people use online banking, so it affects almost everyone.",
          "한국에서는 많은 사람이 온라인 뱅킹을 써서 거의 모두에게 영향이 있어요.",
          "우리나라 영향",
        ],
        [
          "It's a hard problem, but I think it must be solved.",
          "어려운 문제지만 반드시 해결해야 한다고 생각해요.",
          "마무리",
        ],
      ],
      cat: "surprise",
    },
  ],
};
REPLAY2.qs.forEach((q, i) => {
  q.cat = i < 10 ? "survey" : i < 13 ? "rp" : "surprise";
});
const REPLAY3 = {
  name: "10/20 모의시험 3회차 복기",
  qs: [
    {
      kind: "자기소개",
      t: "1 자기소개",
      tag: "복기",
      q: [
        "Let's start the interview. Now tell me something about yourself.",
        "인터뷰를 시작하겠습니다. 자기소개를 해 주세요.",
      ],
      s: [
        [
          "Hi, my name is {Hyun-gi}. It's nice to meet you.",
          "안녕하세요, 제 이름은 현기예요. 만나서 반갑습니다.",
          "인사",
        ],
        [
          "I'm a software developer, and I've been working in {the IT field for about eight years}.",
          "저는 소프트웨어 개발자이고 IT 분야에서 약 8년째 일하고 있어요.",
          "직업",
        ],
        [
          "I live alone in {an apartment in Seoul}, and I enjoy {playing online games and listening to music}.",
          "저는 서울의 아파트에서 혼자 살고, 온라인 게임과 음악 듣기를 즐겨요.",
          "집 · 취미",
        ],
        [
          "I'm taking this test because {my company requires a certain grade}.",
          "회사에서 요구하는 등급이 있어서 이 시험을 보게 됐어요.",
          "시험 이유",
        ],
        [
          "I'm a little nervous, but I studied hard, so I'll do my best.",
          "조금 긴장되지만 열심히 공부했으니 최선을 다할게요.",
          "각오 (봐 달라는 부탁은 금지)",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "교통 · 우리나라",
      t: "2 교통수단",
      tag: "복기",
      q: [
        "Tell me about transportation in your country. What kind of transportation do people use?",
        "우리나라의 교통수단에 대해 말해 주세요. 사람들은 어떤 교통수단을 쓰나요?",
      ],
      s: [
        [
          "Korea has a very convenient public transportation system.",
          "한국은 대중교통이 아주 편리해요.",
          "도입",
        ],
        [
          "People mostly use {the subway and buses}, and many also use {public bicycles and electric kickboards}.",
          "사람들은 주로 지하철과 버스를 타고, 공공 자전거와 전동 킥보드도 많이 써요.",
          "종류",
        ],
        [
          "The subway is {fast and cheap}, and it's easy to transfer to a bus.",
          "지하철은 빠르고 싸고, 버스로 갈아타기도 쉬워요.",
          "지하철",
        ],
        [
          "In big cities, many people don't drive because {parking is expensive and traffic is heavy}.",
          "대도시에서는 주차비가 비싸고 교통이 막혀서 운전을 안 하는 사람이 많아요.",
          "자가용",
        ],
        [
          "Also, {ferries} are used to travel to islands like Jeju.",
          "또 섬에 갈 때는 배도 이용해요.",
          "그 밖에",
        ],
      ],
      cat: "surprise",
    },
    {
      kind: "교통 · 내가 쓰는 것",
      t: "3 내가 쓰는 교통수단",
      tag: "복기",
      q: [
        "What kind of transportation do you use to get around? Do you use public transportation or do you drive?",
        "이동할 때 어떤 교통수단을 쓰나요? 대중교통인가요, 운전인가요?",
      ],
      s: [
        ["I usually take the subway to work.", "저는 보통 지하철로 출근해요.", "수단"],
        [
          "I can't stand waiting, and the subway comes often.",
          "저는 기다리는 걸 못 참는데, 지하철은 자주 와요.",
          "이유 1",
        ],
        [
          "Korea's public transportation is well maintained, cheap, and comfortable.",
          "한국 대중교통은 잘 관리되고 싸고 편해요.",
          "이유 2",
        ],
        [
          "I don't drive to work because {parking is difficult and traffic is heavy}.",
          "주차가 어렵고 교통이 막혀서 운전해서 출근하진 않아요.",
          "운전",
        ],
        ["So I prefer public transportation.", "그래서 대중교통을 선호해요.", "마무리"],
      ],
      cat: "surprise",
    },
    {
      kind: "교통 · 불편한 경험",
      t: "4 대중교통 문제",
      tag: "복기",
      q: [
        "Sometimes riding the subway or bus can be uncomfortable. Have you ever had any problems while taking public transportation?",
        "지하철이나 버스는 불편할 때가 있어요. 대중교통에서 문제를 겪은 적이 있나요?",
      ],
      s: [
        [
          "Riding the subway during rush hour is the most uncomfortable thing for me.",
          "출퇴근 시간 지하철이 저한테는 가장 불편해요.",
          "도입",
        ],
        [
          "One morning, {the train was so crowded} that I couldn't even move.",
          "어느 날 아침 열차가 너무 붐벼서 움직일 수도 없었어요.",
          "상황",
        ],
        [
          "I had to stand for {thirty minutes}, and I felt very tired.",
          "30분 동안 서 있어야 했고 너무 피곤했어요.",
          "결과",
        ],
        [
          "Sometimes I get lucky and find a seat, and that makes my day.",
          "가끔 운 좋게 자리를 찾으면 하루가 좋아져요.",
          "좋은 점",
        ],
        [
          "I wish the trains were less crowded at that time.",
          "그 시간 열차가 덜 붐비면 좋겠어요.",
          "바람",
        ],
      ],
      cat: "surprise",
    },
    {
      kind: "집 · 묘사",
      t: "5 집 묘사",
      tag: "복기",
      q: [
        "Describe your house to me. What does it look like? What types of rooms does it have? Also tell me about your favorite room.",
        "집을 묘사해 주세요. 어떻게 생겼고 어떤 방들이 있나요? 가장 좋아하는 방도 말해 주세요.",
      ],
      s: [
        [
          "I live alone in {an apartment on the 15th floor}.",
          "저는 15층 아파트에서 혼자 살아요.",
          "집 (층수는 하나로 고정)",
        ],
        [
          "It has {one bedroom, a living room, a kitchen, a bathroom, and a small balcony}.",
          "침실, 거실, 주방, 욕실, 작은 발코니가 있어요.",
          "방 구성",
        ],
        [
          "My favorite room is the living room, because I have {a big TV, a computer, and an audio system}.",
          "제일 좋아하는 방은 거실이에요. 큰 TV, 컴퓨터, 오디오가 있거든요.",
          "좋아하는 방",
        ],
        [
          "After work, I take a shower and listen to music there.",
          "퇴근하고 샤워한 뒤 거기서 음악을 들어요.",
          "하는 일",
        ],
        [
          "That's why the living room is my favorite place.",
          "그래서 거실이 제일 좋아하는 곳이에요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "집 · 집에서 하는 활동",
      t: "6 집에서 하는 일",
      tag: "복기",
      q: [
        "What activities do you usually do when you are at home? What do you do on weekdays and what do you do on the weekends?",
        "집에서 보통 무엇을 하나요? 평일에는 무엇을 하고 주말에는 무엇을 하나요?",
      ],
      s: [
        [
          "Recently, I'm really into {playing online games}.",
          "최근에는 온라인 게임에 푹 빠져 있어요.",
          "도입",
        ],
        [
          "On weekdays, I'm busy, so I just take a shower, cook a simple meal, and go to bed early.",
          "평일에는 바빠서 샤워하고 간단히 요리해 먹고 일찍 자요.",
          "평일",
        ],
        [
          "On weekends, I have more time, so I play online games for {a few hours}.",
          "주말에는 시간이 많아서 몇 시간 동안 온라인 게임을 해요.",
          "주말",
        ],
        [
          "Since I live alone, I need to find my own fun at home.",
          "혼자 살아서 집에서 스스로 즐거움을 찾아야 해요.",
          "이유",
        ],
        ["That's what I usually do at home.", "그게 제가 집에서 보통 하는 일이에요.", "마무리"],
      ],
      cat: "survey",
    },
    {
      kind: "집 · 어릴 적 집",
      t: "7 어릴 적 집",
      tag: "복기",
      q: [
        "Tell me about the house you lived in when you were a child. How is it different from the house you live in now?",
        "어릴 때 살던 집에 대해 말해 주세요. 지금 사는 집과 어떻게 다른가요?",
      ],
      s: [
        [
          "When I was young, I lived in an apartment with my family.",
          "어릴 때는 가족과 아파트에 살았어요.",
          "도입",
        ],
        [
          "It was bigger than my current home, with {four rooms and a big living room}.",
          "지금 집보다 커서 방이 네 개에 큰 거실이 있었어요.",
          "차이 1: 크기",
        ],
        [
          "It also had {two bathrooms and a big TV}.",
          "화장실도 두 개, 큰 TV도 있었어요.",
          "차이 2: 시설",
        ],
        [
          "There was a small park near my old house, so I often walked there to refresh myself.",
          "옛집 근처에 작은 공원이 있어서 자주 산책하며 기분 전환을 했어요.",
          "주변",
        ],
        [
          "It's a good memory, and I sometimes miss that house.",
          "좋은 추억이고 가끔 그 집이 그리워요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "국내여행 · 좋아하는 곳",
      t: "8 좋아하는 국내 여행지",
      tag: "복기",
      q: [
        "You indicated in the survey that you enjoy traveling domestically. What is your favorite location and why do you like that place?",
        "설문에서 국내 여행을 즐긴다고 했어요. 가장 좋아하는 곳은 어디이고 왜 좋아하나요?",
      ],
      s: [
        [
          "My favorite place in Korea is {Jeju Island}.",
          "제가 한국에서 가장 좋아하는 곳은 제주도예요.",
          "도입",
        ],
        [
          "I went there {two years ago}, and it has beautiful nature and delicious food.",
          "2년 전에 갔는데 아름다운 자연과 맛있는 음식이 있어요.",
          "이유",
        ],
        [
          "I stayed at {a hotel in Seogwipo}, which was clean and comfortable.",
          "서귀포의 호텔에 묵었는데 깨끗하고 편했어요.",
          "숙소",
        ],
        [
          "During the day, I {walked along the coast and visited well-known spots}.",
          "낮에는 해안을 걷고 유명한 곳을 구경했어요.",
          "한 일",
        ],
        [
          "It was a great choice, so I recommend Jeju Island to everyone.",
          "좋은 선택이어서 모두에게 제주도를 추천해요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "국내여행 · 어릴 적 여행",
      t: "9 어릴 적 여행",
      tag: "복기",
      q: [
        "Tell me about a trip you took in your youth. Where did you go and who did you go with? What did you do there?",
        "어릴 때 갔던 여행을 말해 주세요. 어디에 누구와 갔고 무엇을 했나요?",
      ],
      s: [
        [
          "When I was young, I traveled to {Jeonju} with my family.",
          "어릴 때 가족과 전주로 여행을 갔어요.",
          "누구와 · 어디",
        ],
        [
          "We stayed in {a hanok}, which is a traditional Korean house.",
          "한옥이라는 전통 가옥에서 묵었어요.",
          "숙소",
        ],
        [
          "We tried {a cultural experience} and walked around the village.",
          "문화 체험도 하고 마을을 걸어 다녔어요.",
          "한 일",
        ],
        [
          "The most memorable thing was {Hanjeongsik}, a traditional Korean full-course meal.",
          "가장 기억에 남는 건 한국 전통 코스 요리인 한정식이에요.",
          "기억에 남는 것",
        ],
        [
          "I can't forget it because the food and the atmosphere were so good.",
          "음식과 분위기가 너무 좋아서 잊을 수 없어요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "국내여행 · 잊지 못할 경험",
      t: "10 국내 여행 기억",
      tag: "복기",
      q: [
        "Have you had any interesting or unforgettable experiences while traveling in your own country? Tell me about the experience in detail.",
        "국내 여행 중 흥미롭거나 잊지 못할 경험이 있나요? 자세히 말해 주세요.",
      ],
      s: [
        [
          "When I was a college student, I went to {Mt. Jiri} with {five college friends}.",
          "대학생 때 대학 친구 다섯 명과 지리산에 갔어요.",
          "도입",
        ],
        [
          "We brought {a lot of food} and climbed the mountain together.",
          "음식을 많이 챙겨서 함께 산을 올랐어요.",
          "행동",
        ],
        [
          "It was tiring, but we kept going and encouraged each other.",
          "힘들었지만 서로 격려하며 계속 올라갔어요.",
          "과정",
        ],
        [
          "At the top, we watched the sunrise, and it was beautiful and fantastic.",
          "정상에서 일출을 봤는데 아름답고 환상적이었어요.",
          "절정",
        ],
        [
          "It's my favorite memory of traveling in Korea.",
          "한국 여행 중 제일 좋아하는 추억이에요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "롤플레이 11",
      t: "11 생일 파티 질문",
      tag: "복기",
      q: [
        "Your friend is planning a birthday party and asks you to help prepare it. Call your friend and ask 3 or 4 questions about the party.",
        "친구가 생일 파티를 준비하며 도와 달라고 합니다. 전화해서 파티에 대해 3~4가지 질문을 하세요.",
      ],
      s: [
        [
          "Hi, it's {Hyun-gi}. I heard you're planning a birthday party, and I'd love to help.",
          "안녕, 나 현기야. 생일 파티를 준비한다고 들었는데 도와주고 싶어.",
          "도입",
        ],
        [
          "Where are you going to have the party, and what time does it start?",
          "파티는 어디서 하고 몇 시에 시작해?",
          "질문 1 · 2",
        ],
        ["How many people are coming?", "몇 명이 와?", "질문 3"],
        [
          "What kind of decorations do you want, and should I bring anything?",
          "어떤 장식을 원해? 내가 가져갈 게 있을까?",
          "질문 4",
        ],
        [
          "Also, what would the birthday person like for a present?",
          "그리고 생일인 사람은 어떤 선물을 좋아할까?",
          "질문 5 · 마무리",
        ],
      ],
      cat: "rp",
    },
    {
      kind: "롤플레이 12",
      t: "12 파티 못 감 · 대안",
      tag: "복기",
      q: [
        "You were planning to go to your friend's birthday party, but something came up. Call your friend, explain that you cannot go, and suggest 2 or 3 alternatives.",
        "친구 생일 파티에 가려 했는데 일이 생겼습니다. 전화해서 못 간다고 설명하고 대안 2~3가지를 제안하세요.",
      ],
      s: [
        [
          "Hi, it's {Hyun-gi}. I'm really sorry, but I can't come to your birthday party.",
          "안녕, 나 현기야. 정말 미안한데 네 생일 파티에 못 갈 것 같아.",
          "도입 · 사과",
        ],
        [
          "{Something urgent came up at work}, and I have to stay late.",
          "회사에 급한 일이 생겨서 늦게까지 남아야 해.",
          "이유",
        ],
        [
          "I have three ideas. First, I can come {late, after I finish}.",
          "세 가지 방법이 있어. 첫째, 일이 끝나면 늦게라도 갈게.",
          "대안 1",
        ],
        [
          "Second, I can send a gift and a message today.",
          "둘째, 오늘 선물과 메시지를 보낼게.",
          "대안 2",
        ],
        [
          "Third, how about having dinner together this weekend? Again, I'm really sorry.",
          "셋째, 이번 주말에 같이 저녁 먹는 건 어때? 다시 한번 미안해.",
          "대안 3 · 마무리",
        ],
      ],
      cat: "rp",
    },
    {
      kind: "롤플레이 13",
      t: "13 취소한 경험",
      tag: "복기",
      q: [
        "Have you ever been in a situation where you had to cancel something? Explain what happened.",
        "무언가를 취소해야 했던 적이 있나요? 무슨 일이 있었는지 설명해 주세요.",
      ],
      s: [
        [
          "Two years ago, I had to cancel a dinner reservation in Jeju.",
          "2년 전 제주에서 저녁 예약을 취소해야 했어요.",
          "도입",
        ],
        [
          "We were on our way, but the traffic was so bad that we couldn't arrive in time.",
          "이동 중이었는데 교통이 너무 막혀서 시간에 맞출 수 없었어요.",
          "문제",
        ],
        [
          "So we called the restaurant and asked to cancel.",
          "그래서 식당에 전화해 취소를 요청했어요.",
          "행동",
        ],
        [
          "Luckily, the owner understood and accepted it, and we paid only {a 30% cancellation fee}.",
          "다행히 사장님이 이해해 주셔서 취소 수수료만 냈어요.",
          "결과",
        ],
        [
          "We ate at another restaurant near our hotel, and I learned to leave earlier.",
          "호텔 근처 다른 식당에서 먹었고, 더 일찍 출발해야 한다는 걸 배웠어요.",
          "교훈",
        ],
      ],
      cat: "rp",
    },
    {
      kind: "카페 · 우리나라",
      t: "14 카페",
      tag: "복기",
      q: [
        "Tell me about the cafes or coffee shops in your country. Please tell me about them in as much detail as you can.",
        "우리나라의 카페나 커피숍에 대해 최대한 자세히 말해 주세요.",
      ],
      s: [
        [
          "In Korea, there are cafes everywhere, and most of them are {cozy and well maintained}.",
          "한국에는 카페가 어디에나 있고 대부분 아늑하고 관리가 잘돼 있어요.",
          "전체",
        ],
        [
          "There are big franchises, and there are also small local cafes.",
          "큰 프랜차이즈도 있고 작은 동네 카페도 있어요.",
          "종류",
        ],
        [
          "Many people go there to {study, work, or meet friends}.",
          "많은 사람이 공부하거나 일하거나 친구를 만나러 가요.",
          "사람들",
        ],
        [
          "I often go to {a small cafe near my house}, which is five minutes away on foot.",
          "저는 집에서 걸어서 5분 거리인 작은 카페에 자주 가요.",
          "내가 가는 곳",
        ],
        [
          "I love it because it's quiet and the coffee is cheap.",
          "조용하고 커피가 싸서 좋아해요.",
          "마무리",
        ],
      ],
      cat: "surprise",
    },
    {
      kind: "롤플레이 · 카페 직원 인터뷰",
      t: "15 카페 직원에게 질문",
      tag: "복기",
      q: [
        "I work at a cafe. Ask me 3 or 4 questions about the cafe and what I do there.",
        "저는 카페에서 일합니다. 카페와 제가 하는 일에 대해 3~4가지 질문을 해 보세요.",
      ],
      s: [
        [
          "Hi, nice to meet you. I'm {Hyun-gi}. I'd like to ask a few questions about your cafe.",
          "안녕하세요, 현기예요. 카페에 대해 몇 가지 여쭤보고 싶어요.",
          "도입",
        ],
        ["What do you do here every day?", "여기서 매일 어떤 일을 하세요?", "질문 1"],
        ["How long have you worked here?", "여기서 얼마나 일하셨어요?", "질문 2"],
        [
          "What's the most popular drink at this cafe?",
          "이 카페에서 가장 인기 있는 음료는 뭐예요?",
          "질문 3",
        ],
        [
          "What's the busiest time, and what do you like most about your job?",
          "가장 바쁜 시간은 언제고, 일에서 제일 좋은 점은 뭐예요?",
          "질문 4 · 마무리",
        ],
      ],
      cat: "rp",
    },
  ],
};
REPLAY3.qs.forEach((q, i) => {
  q.cat =
    i < 1
      ? "survey"
      : i < 4
        ? "surprise"
        : i < 10
          ? "survey"
          : i < 13
            ? "rp"
            : i === 13
              ? "surprise"
              : "rp";
});
const REPLAY4 = {
  name: "10/21 모의시험 4회차 복기",
  qs: [
    {
      kind: "자기소개",
      t: "1 자기소개",
      tag: "복기",
      q: [
        "Let's start the interview. Now tell me about yourself.",
        "인터뷰를 시작하겠습니다. 자기소개를 해 주세요.",
      ],
      s: [
        [
          "Hi, my name is {Hyun-gi}. It's nice to meet you.",
          "안녕하세요, 제 이름은 현기예요. 만나서 반갑습니다.",
          "인사",
        ],
        [
          "I'm a software developer, and I've been working in {the IT field for about eight years}.",
          "저는 소프트웨어 개발자이고 IT 분야에서 약 8년째 일하고 있어요.",
          "직업",
        ],
        [
          "I live alone in {an apartment in Seoul}, and I enjoy {playing online games and listening to music}.",
          "저는 서울의 아파트에서 혼자 살고, 온라인 게임과 음악 듣기를 즐겨요.",
          "집 · 취미",
        ],
        [
          "I'm taking this test because {my company requires a certain grade}.",
          "회사에서 요구하는 등급이 있어서 이 시험을 보게 됐어요.",
          "시험 이유",
        ],
        [
          "I'm a little nervous, but I studied hard, so I'll do my best.",
          "조금 긴장되지만 열심히 공부했으니 최선을 다할게요.",
          "각오 (봐 달라는 부탁은 금지)",
        ],
      ],
    },
    {
      kind: "집 · 겉모습과 내부",
      t: "2 집 겉모습·내부",
      tag: "복기",
      q: [
        "Can you describe your home for me? What does it look like from the outside and what's it like inside? How many rooms does it have? Which room is your favorite and why do you enjoy spending time there?",
        "집을 묘사해 주세요. 겉에서 보면 어떻고 안은 어떤가요? 방은 몇 개인가요? 가장 좋아하는 방과 이유도 말해 주세요.",
      ],
      s: [
        [
          "I live in {an apartment on the 15th floor}, so I can see {the landscape of my town} from my window.",
          "저는 15층 아파트에 살아서 창밖으로 동네 풍경이 보여요.",
          "집 · 전망",
        ],
        [
          "From the outside, it looks like {a tall, modern apartment building}.",
          "겉에서 보면 높고 현대적인 아파트 건물이에요.",
          "겉모습",
        ],
        [
          "Inside, it's modern, cozy, and simple, and it has {one bedroom, a living room, a bathroom, and a balcony}.",
          "안은 현대적이고 아늑하고 단순하며 침실, 거실, 욕실, 발코니가 있어요.",
          "내부 · 방 수",
        ],
        [
          "My favorite room is the living room, because I have {a big TV and a computer} there.",
          "제일 좋아하는 방은 거실이에요. 큰 TV와 컴퓨터가 있거든요.",
          "좋아하는 방 · 이유",
        ],
        [
          "I spend most of my free time playing games there, so it's a great place for me.",
          "여가 시간 대부분을 거기서 게임을 하며 보내서 저한테 아주 좋은 곳이에요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "집 · 일과",
      t: "3 집에서의 일과",
      tag: "복기",
      q: [
        "Tell me about your daily routine at home. What are the things you usually do on weekdays and on weekends?",
        "집에서의 일과를 말해 주세요. 평일과 주말에 보통 무엇을 하나요?",
      ],
      s: [
        [
          "On weekdays, I'm very busy, so I wake up at {six}, take a shower, and drink coffee before work.",
          "평일에는 바빠서 6시에 일어나 샤워하고 커피를 마신 뒤 출근해요.",
          "평일 아침",
        ],
        [
          "After work, I come home, cook a simple meal, and go to bed early.",
          "퇴근 후 집에 와서 간단히 요리해 먹고 일찍 자요.",
          "평일 저녁",
        ],
        [
          "On weekends, my routine isn't fixed, because it depends on my schedule and how I feel.",
          "주말은 일정과 기분에 따라 달라서 정해진 일과가 없어요.",
          "주말 특징",
        ],
        [
          "Usually, I sleep in, play online games, and meet {my friends} in the evening.",
          "보통 늦잠을 자고 온라인 게임을 하고 저녁에는 친구를 만나요.",
          "주말 활동",
        ],
        ["That's what my days at home look like.", "이게 제가 집에서 보내는 하루예요.", "마무리"],
      ],
    },
    {
      kind: "집 · 어릴 적 집",
      t: "4 어릴 적 집",
      tag: "복기",
      q: [
        "Can you describe the house you lived in when you were a kid? Where was it and what did it look like? In what ways was it different from the place you live in?",
        "어릴 때 살던 집을 묘사해 주세요. 어디에 있었고 어땠나요? 지금 사는 곳과 어떻게 다른가요?",
      ],
      s: [
        [
          "When I was young, I lived in an apartment with my family.",
          "어릴 때는 가족과 아파트에 살았어요.",
          "도입",
        ],
        [
          "It was bigger than my current home, with {five rooms and a big living room}.",
          "지금 집보다 커서 방이 다섯 개에 큰 거실이 있었어요.",
          "차이 1: 크기",
        ],
        [
          "My room is still there, but nobody uses it now.",
          "제 방은 아직 있지만 지금은 아무도 안 써요.",
          "현재 상태",
        ],
        [
          "There was a park near my old house, so I often went there to refresh myself.",
          "옛집 근처에 공원이 있어서 기분 전환하러 자주 갔어요.",
          "주변",
        ],
        [
          "I miss that house because it holds so many good memories.",
          "좋은 추억이 많아서 그 집이 그리워요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "휴대폰 · 지금 쓰는 폰",
      t: "5 내 휴대폰",
      tag: "복기",
      q: [
        "Describe your phone for me. What do you like the most about your phone? Why do you like that? Please give me all the details.",
        "휴대폰을 묘사해 주세요. 가장 좋은 점은 무엇이고 왜 좋은가요? 자세히 말해 주세요.",
      ],
      s: [
        [
          "I bought my phone {a year ago}, and it's a foldable phone.",
          "저는 1년 전에 폴더블 폰을 샀어요.",
          "도입",
        ],
        [
          "What I like most is that it's portable: when it's folded, it fits easily in my pocket.",
          "가장 좋은 점은 휴대하기 편한 거예요. 접으면 주머니에 쏙 들어가요.",
          "가장 좋은 점",
        ],
        [
          "I also use it for {watching videos while running on the treadmill}.",
          "러닝머신에서 달리면서 영상을 보는 데도 써요.",
          "쓰임 1",
        ],
        [
          "When it's unfolded, the screen is big, so I can watch movies and check my photos easily.",
          "펼치면 화면이 커서 영화를 보고 사진을 확인하기 쉬워요.",
          "쓰임 2",
        ],
        ["That's why I'm really satisfied with it.", "그래서 정말 만족해요.", "마무리"],
      ],
    },
    {
      kind: "휴대폰 · 첫 휴대폰",
      t: "6 첫 휴대폰",
      tag: "복기",
      q: [
        "Can you think back to the very first cell phone you ever owned? What did it look like and what kind of features did it have? How is that phone different from the one you use these days?",
        "처음 가졌던 휴대폰을 떠올려 보세요. 어떻게 생겼고 어떤 기능이 있었나요? 지금 쓰는 폰과 어떻게 다른가요?",
      ],
      s: [
        [
          "My first phone wasn't a smartphone; it was a basic cell phone.",
          "제 첫 휴대폰은 스마트폰이 아니라 일반 휴대폰이었어요.",
          "도입",
        ],
        [
          "It was very small and had {a simple, nice design}.",
          "아주 작고 단순하고 예쁜 디자인이었어요.",
          "외관",
        ],
        ["It could only make calls and take pictures.", "전화와 사진 촬영만 됐어요.", "기능"],
        [
          "It couldn't connect to the internet, YouTube, or social media.",
          "인터넷, 유튜브, SNS는 안 됐어요.",
          "차이",
        ],
        [
          "Compared to my phone now, it was less useful, but I loved how small it was.",
          "지금 폰보다 덜 유용했지만 작아서 좋았어요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "휴대폰 · 문제 경험",
      t: "7 휴대폰 문제",
      tag: "복기",
      q: [
        "Tell me about a time you had a problem with your phone, like a broken screen or a battery issue. What exactly happened and how did you get it fixed?",
        "휴대폰에 문제가 있었던 때를 말해 주세요. 화면이 깨지거나 배터리 문제 같은 거요. 무슨 일이 있었고 어떻게 고쳤나요?",
      ],
      s: [
        [
          "I haven't had many big problems with my phone, but one time {the screen cracked}.",
          "큰 문제는 많지 않았지만, 한 번은 화면이 깨졌어요.",
          "도입",
        ],
        [
          "I dropped it on {the street} on my way to work.",
          "출근길에 길에서 떨어뜨렸어요.",
          "상황",
        ],
        [
          "I was upset, so I searched for a service center and went there after work.",
          "속상해서 서비스센터를 찾아 퇴근 후에 갔어요.",
          "행동",
        ],
        [
          "They replaced the screen in {about an hour}, and it cost {about 150,000 won}.",
          "한 시간쯤 걸려 화면을 교체해 줬고 15만 원쯤 들었어요.",
          "결과",
        ],
        [
          "Since then, I use a case and a screen protector.",
          "그 뒤로는 케이스와 보호 필름을 써요.",
          "교훈",
        ],
      ],
    },
    {
      kind: "음악 · 좋아하는 음악",
      t: "8 좋아하는 음악",
      tag: "복기",
      q: [
        "In your background survey, you indicated that you like to listen to music. What kind of music do you like? Who is your favorite musician or composer?",
        "설문에서 음악 듣기를 좋아한다고 했어요. 어떤 음악을 좋아하나요? 가장 좋아하는 음악가나 작곡가는 누구인가요?",
      ],
      s: [
        [
          "I love listening to music, and I like many genres, such as {rock, jazz, and hip-hop}.",
          "저는 음악을 아주 좋아하고 록, 재즈, 힙합 같은 여러 장르를 들어요.",
          "장르",
        ],
        [
          "Recently, I've been listening to jazz, especially {Antonio Carlos Jobim}.",
          "최근에는 재즈, 특히 안토니우 카를루스 조빙을 많이 들어요.",
          "최근",
        ],
        [
          "I love his bossa nova, and I recently bought his album, {Tide}.",
          "그의 보사노바를 좋아하고 최근 앨범 Tide를 샀어요.",
          "좋아하는 음악가",
        ],
        [
          "Bossa nova makes me feel relaxed and comfortable.",
          "보사노바는 저를 편안하고 느긋하게 해 줘요.",
          "이유",
        ],
        ["That's why I love it.", "그래서 좋아해요.", "마무리"],
      ],
    },
    {
      kind: "음악 · 관심과 변화",
      t: "9 음악 취향 변화",
      tag: "복기",
      q: [
        "How did you first become interested in music? Has your taste in music changed over the years?",
        "음악에 처음 관심을 갖게 된 계기는 무엇인가요? 취향은 해마다 바뀌었나요?",
      ],
      s: [
        [
          "When I was a high school student, I needed to focus on studying for the college entrance exam.",
          "고등학생 때 대입 시험 공부에 집중해야 했어요.",
          "계기 1",
        ],
        [
          "I couldn't study in a noisy place, so I started listening to music to focus.",
          "시끄러운 곳에서는 공부를 못 해서 집중하려고 음악을 듣기 시작했어요.",
          "계기 2",
        ],
        [
          "At first, I listened to hip-hop because it's powerful and has strong messages.",
          "처음엔 힙합이 강렬하고 메시지가 있어서 들었어요.",
          "처음 취향",
        ],
        [
          "But it distracted me, so I changed to classical music and jazz.",
          "하지만 집중이 안 돼서 클래식과 재즈로 바꿨어요.",
          "변화",
        ],
        [
          "Now my taste is calmer, and I listen to jazz when I want to relax.",
          "지금은 취향이 차분해져서 쉬고 싶을 때 재즈를 들어요.",
          "지금",
        ],
      ],
    },
    {
      kind: "음악 · 라이브 공연",
      t: "10 라이브 공연",
      tag: "복기",
      q: [
        "Can you recall a memorable live music experience you've had? Please describe when it happened, where you were, who you were with, and what made the performance so special.",
        "기억에 남는 라이브 공연을 떠올려 보세요. 언제, 어디에서, 누구와 있었고 무엇이 특별했는지 말해 주세요.",
      ],
      s: [
        [
          "About {two years ago}, I went to a concert of {my favorite rock band}.",
          "2년쯤 전에 가장 좋아하는 록밴드의 콘서트에 갔어요.",
          "언제 · 누구",
        ],
        [
          "It was their first concert, and it was held in {a big concert hall in Goyang}.",
          "그들의 첫 콘서트였고 고양의 큰 공연장에서 열렸어요.",
          "어디서",
        ],
        [
          "I went alone, but I didn't feel lonely because everyone around me was a fan.",
          "혼자 갔지만 주변이 다 팬이라서 외롭지 않았어요.",
          "누구와",
        ],
        [
          "The performance was fantastic, and the sound system was perfect.",
          "공연이 환상적이었고 음향이 완벽했어요.",
          "특별한 점",
        ],
        [
          "I can't forget it, and I want to go to their concert again.",
          "잊을 수 없어서 다시 가고 싶어요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "롤플레이 11",
      t: "11 명절 모임 질문",
      tag: "복기",
      q: [
        "A friend has invited you to a holiday gathering. Call your friend and ask 3 or 4 questions about the holiday plan, such as what you should bring and when you should arrive.",
        "친구가 명절 모임에 초대했습니다. 전화해서 무엇을 가져갈지, 언제 도착할지 같은 질문을 3~4개 하세요.",
      ],
      s: [
        [
          "Hi, it's {Hyun-gi}. Thank you for inviting me to your holiday gathering.",
          "안녕, 나 현기야. 명절 모임에 초대해 줘서 고마워.",
          "도입",
        ],
        [
          "Where is it going to be, and what time should I arrive?",
          "어디서 하고 몇 시에 도착하면 돼?",
          "질문 1 · 2",
        ],
        [
          "What should I bring? Should I bring some food or a gift?",
          "뭘 가져가야 해? 음식이나 선물이 필요할까?",
          "질문 3",
        ],
        ["Is there a dress code?", "정해진 복장이 있어?", "질문 4"],
        [
          "Also, who else is coming? I'm looking forward to it!",
          "그리고 또 누가 와? 기대돼!",
          "질문 5 · 마무리",
        ],
      ],
    },
    {
      kind: "롤플레이 12",
      t: "12 늦게 도착 · 대안",
      tag: "복기",
      q: [
        "You are on your way to the holiday gathering, but something has happened. Perhaps your car broke down. Call your friend, explain the situation, and give 2 or 3 alternatives for when you will be able to get there.",
        "모임에 가는 길에 일이 생겼습니다. 차가 고장 났을 수 있어요. 전화해서 상황을 설명하고 도착 시간에 대한 대안 2~3가지를 제안하세요.",
      ],
      s: [
        [
          "Hi, it's {Hyun-gi}. I'm on my way, but my car broke down, so I'll be late.",
          "안녕, 나 현기야. 가는 중인데 차가 고장 나서 늦을 것 같아.",
          "도입 · 상황",
        ],
        [
          "I'm waiting for {a tow truck}, and I'm really sorry.",
          "견인차를 기다리고 있어. 정말 미안해.",
          "현재 상태",
        ],
        [
          "I have three options. First, I can take a taxi and arrive in about an hour.",
          "세 가지 방법이 있어. 첫째, 택시를 타면 한 시간쯤 뒤에 도착해.",
          "대안 1",
        ],
        [
          "Second, if that's too late, I can join you for dessert and drinks.",
          "둘째, 그게 너무 늦으면 디저트와 술자리에만 합류할게.",
          "대안 2",
        ],
        [
          "Third, I can come tomorrow with the gift. What works best for you?",
          "셋째, 내일 선물을 들고 갈 수도 있어. 어느 쪽이 좋아?",
          "대안 3 · 질문",
        ],
      ],
    },
    {
      kind: "롤플레이 13",
      t: "13 명절 계획 취소",
      tag: "복기",
      q: [
        "Have you ever had a holiday plan that was canceled or changed unexpectedly because of the weather or some other reason? Tell me exactly what happened and how you dealt with the situation.",
        "날씨나 다른 이유로 명절 계획이 갑자기 취소되거나 바뀐 적이 있나요? 무슨 일이 있었고 어떻게 대처했나요?",
      ],
      s: [
        [
          "Two years ago, our family plan for Chuseok was canceled.",
          "2년 전 추석 가족 계획이 취소됐어요.",
          "도입",
        ],
        [
          "We were going to visit my father's hometown, but I suddenly got sick.",
          "아버지 고향에 가기로 했는데 제가 갑자기 아팠어요.",
          "문제",
        ],
        [
          "I couldn't travel, so I stayed at home and rested.",
          "여행을 못 해서 집에서 쉬었어요.",
          "행동",
        ],
        [
          "I called my relatives and apologized, and they were very understanding.",
          "친척들에게 전화해 사과했고 모두 이해해 주셨어요.",
          "해결",
        ],
        [
          "I learned that plans can change, so it's good to be flexible.",
          "계획은 바뀔 수 있으니 유연해야 한다는 걸 배웠어요.",
          "교훈",
        ],
      ],
    },
    {
      kind: "돌발 · 공원 비교",
      t: "14 공원 두 곳 비교",
      tag: "복기",
      q: [
        "Pick 2 different parks that you know and tell me about the differences and similarities. What do you like better and why? Give me all the details.",
        "아는 공원 두 곳을 골라 차이점과 공통점을 말해 주세요. 어느 쪽을 더 좋아하고 왜인가요?",
      ],
      s: [
        [
          "I'll compare two parks I know: {the small park near my old house} and {Seoul Forest}.",
          "제가 아는 두 공원, 옛집 근처의 작은 공원과 서울숲을 비교할게요.",
          "도입 (아는 곳 두 개)",
        ],
        [
          "They're similar because both are good for walking and refreshing.",
          "둘 다 걷고 기분 전환하기 좋다는 점이 비슷해요.",
          "공통점",
        ],
        [
          "However, {the small park} is quiet and close to home, while {Seoul Forest} is bigger with more trees.",
          "하지만 작은 공원은 조용하고 집에서 가깝고, 서울숲은 더 크고 나무가 많아요.",
          "차이점",
        ],
        [
          "In {Seoul Forest}, you can walk for hours, but in {the small park}, you can just sit and relax.",
          "서울숲에서는 몇 시간씩 걸을 수 있고, 작은 공원에서는 그냥 앉아 쉴 수 있어요.",
          "차이점 2",
        ],
        [
          "I like {the small park} better because it holds good memories for me.",
          "좋은 추억이 있어서 작은 공원이 더 좋아요.",
          "선택 · 이유",
        ],
      ],
    },
    {
      kind: "돌발 · 공원 문제",
      t: "15 공원 문제와 해결",
      tag: "복기",
      q: [
        "I'd like to know the main issue related to public parks today. What is the biggest problem that users of public parks face? What needs to be done to preserve these parks and solve the problem?",
        "요즘 공원의 가장 큰 문제는 무엇인가요? 이용자들이 겪는 가장 큰 문제와 해결하려면 무엇이 필요한지 말해 주세요.",
      ],
      s: [
        [
          "The biggest problem with public parks in my town is the lack of parking.",
          "우리 동네 공원의 가장 큰 문제는 주차 공간이 부족하다는 거예요.",
          "문제",
        ],
        [
          "Many people drive, and there are too many cars for the small parking area.",
          "많은 사람이 운전해서 좁은 주차장에 비해 차가 너무 많아요.",
          "원인",
        ],
        [
          "Seoul is crowded, so it's hard to build new parking lots.",
          "서울은 복잡해서 새 주차장을 짓기 어려워요.",
          "제약",
        ],
        [
          "One solution is to build a parking building near the park.",
          "한 가지 해결책은 공원 근처에 주차 건물을 짓는 거예요.",
          "해결 1",
        ],
        [
          "Another is to encourage people to use public transportation, so there are fewer cars.",
          "또 다른 방법은 대중교통 이용을 권장해서 차를 줄이는 거예요.",
          "해결 2",
        ],
      ],
    },
  ],
};
REPLAY4.qs.forEach((q, i) => {
  q.cat = i < 10 ? "survey" : i < 13 ? "rp" : "surprise";
});
const REPLAY5 = {
  name: "10/21 모의시험 4회차 재시험 복기",
  qs: [
    {
      kind: "자기소개",
      t: "1 자기소개",
      tag: "복기",
      q: [
        "Let's start the interview. Now tell me about yourself.",
        "인터뷰를 시작하겠습니다. 자기소개를 해 주세요.",
      ],
      s: [
        [
          "Hi, my name is {Hyun-gi}. It's nice to meet you.",
          "안녕하세요, 제 이름은 현기예요. 만나서 반갑습니다.",
          "인사",
        ],
        [
          "I'm a software developer at {Hanna System}, and I've worked in the IT field for about eight years.",
          "저는 한나시스템의 소프트웨어 개발자이고 IT 분야에서 약 8년 일했어요.",
          "직업",
        ],
        [
          "I live alone in {an apartment on the 15th floor}, and I enjoy {playing games and taking landscape photos}.",
          "저는 15층 아파트에 혼자 살고, 게임과 풍경 사진 찍기를 즐겨요.",
          "집 · 취미",
        ],
        [
          "I'm taking this test because {my company requires a certain grade}.",
          "회사에서 요구하는 등급이 있어서 이 시험을 보게 됐어요.",
          "시험 이유",
        ],
        [
          "This is my first OPIc, so I'm a little nervous, but I'll do my best.",
          "첫 OPIc이라 조금 긴장되지만 최선을 다할게요.",
          "각오 (등급 부탁은 금지)",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "집 · 겉모습과 내부",
      t: "2 집 겉모습·내부",
      tag: "복기",
      q: [
        "Can you describe your home for me? What does it look like from the outside and what's it like inside? How many rooms does it have? Which room is your favorite and why do you enjoy spending time there?",
        "집을 묘사해 주세요. 겉에서 보면 어떻고 안은 어떤가요? 방은 몇 개인가요? 가장 좋아하는 방과 이유도 말해 주세요.",
      ],
      s: [
        [
          "I live in {an apartment on the 15th floor}, so I can see {the landscape of my town} from my window.",
          "저는 15층 아파트에 살아서 창밖으로 동네 풍경이 보여요.",
          "집 · 전망",
        ],
        [
          "From the outside, it looks like {a tall, modern apartment building}.",
          "겉에서 보면 높고 현대적인 아파트 건물이에요.",
          "겉모습",
        ],
        [
          "Inside, it's modern, cozy, and simple, and it has {one bedroom, a living room, a bathroom, and a balcony}.",
          "안은 현대적이고 아늑하고 단순하며 침실, 거실, 욕실, 발코니가 있어요.",
          "내부 · 방 수",
        ],
        [
          "My favorite room is the living room, because I have {a big TV and a computer} there.",
          "제일 좋아하는 방은 거실이에요. 큰 TV와 컴퓨터가 있거든요.",
          "좋아하는 방 · 이유",
        ],
        [
          "I spend most of my free time playing games there, so it's a great place for me.",
          "여가 시간 대부분을 거기서 게임을 하며 보내서 저한테 아주 좋은 곳이에요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "집 · 일과",
      t: "3 집에서의 일과",
      tag: "복기",
      q: [
        "Tell me about your daily routine at home. What are the things you usually do on weekdays and on weekends?",
        "집에서의 일과를 말해 주세요. 평일과 주말에 보통 무엇을 하나요?",
      ],
      s: [
        [
          "I live alone, so I spend most of my time at home by myself.",
          "혼자 살아서 집에서는 대부분 혼자 시간을 보내요.",
          "누구와",
        ],
        [
          "After work, I usually play online games in my living room, such as {Cyberpunk}.",
          "퇴근 후에는 보통 거실에서 사이버펑크 같은 온라인 게임을 해요.",
          "활동 1",
        ],
        [
          "On weekends, I also watch movies and sometimes edit the photos I took.",
          "주말에는 영화를 보거나 찍은 사진을 편집하기도 해요.",
          "활동 2",
        ],
        [
          "Sometimes I feel lonely, so I hope to meet a girlfriend and live with her someday.",
          "가끔 외로워서 언젠가 여자친구를 만나 함께 살고 싶어요.",
          "바람",
        ],
        [
          "That's why I want to share my time at home with someone special.",
          "그래서 집에서의 시간을 소중한 사람과 나누고 싶어요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "집 · 어릴 적 집",
      t: "4 어릴 적 집",
      tag: "복기",
      q: [
        "Can you describe the house you lived in when you were a kid? Where was it and what did it look like? In what ways was it different from the place you live in?",
        "어릴 때 살던 집을 묘사해 주세요. 어디에 있었고 어땠나요? 지금 사는 곳과 어떻게 다른가요?",
      ],
      s: [
        [
          "When I was young, I lived in an apartment with my family.",
          "어릴 때는 가족과 아파트에 살았어요.",
          "도입",
        ],
        [
          "It was bigger than my current home, with {five rooms and a big living room}.",
          "지금 집보다 커서 방이 다섯 개에 큰 거실이 있었어요.",
          "차이 1: 크기",
        ],
        [
          "My room is still there, but nobody uses it now.",
          "제 방은 아직 있지만 지금은 아무도 안 써요.",
          "현재 상태",
        ],
        [
          "There was a park near my old house, so I often went there to refresh myself.",
          "옛집 근처에 공원이 있어서 기분 전환하러 자주 갔어요.",
          "주변",
        ],
        [
          "I miss that house because it holds so many good memories.",
          "좋은 추억이 많아서 그 집이 그리워요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "휴대폰 · 지금 쓰는 폰",
      t: "5 내 휴대폰",
      tag: "복기",
      q: [
        "Describe your phone for me. What do you like the most about your phone? Why do you like that? Please give me all the details.",
        "휴대폰을 묘사해 주세요. 가장 좋은 점은 무엇이고 왜 좋은가요? 자세히 말해 주세요.",
      ],
      s: [
        [
          "My phone is a {Galaxy Z Fold 7}, and it's a foldable phone.",
          "제 휴대폰은 갤럭시 Z 폴드7이고 접는 폰이에요.",
          "도입",
        ],
        [
          "What I like most is the big screen, because I can use it like a small tablet.",
          "가장 좋은 점은 큰 화면이에요. 작은 태블릿처럼 쓸 수 있거든요.",
          "가장 좋은 점",
        ],
        [
          "For example, I study machine learning on it while I'm walking on the treadmill, and I watch movies.",
          "예를 들어 러닝머신에서 걸으며 머신러닝을 공부하고 영화도 봐요.",
          "쓰임 1",
        ],
        [
          "The camera is also great, so I take landscape photos, which is my new hobby.",
          "카메라도 좋아서 풍경 사진을 찍는데, 요즘 새로 생긴 취미예요.",
          "쓰임 2",
        ],
        [
          "That's why I'm really satisfied with my phone.",
          "그래서 제 휴대폰에 아주 만족해요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "휴대폰 · 첫 휴대폰",
      t: "6 첫 휴대폰",
      tag: "복기",
      q: [
        "Can you think back to the very first cell phone you ever owned? What did it look like and what kind of features did it have? How is that phone different from the one you use these days?",
        "처음 가졌던 휴대폰을 떠올려 보세요. 어떻게 생겼고 어떤 기능이 있었나요? 지금 쓰는 폰과 어떻게 다른가요?",
      ],
      s: [
        [
          "My first phone wasn't a smartphone; it was a basic cell phone.",
          "제 첫 휴대폰은 스마트폰이 아니라 일반 휴대폰이었어요.",
          "도입",
        ],
        [
          "It was very small and had {a simple, nice design}.",
          "아주 작고 단순하고 예쁜 디자인이었어요.",
          "외관",
        ],
        ["It could only make calls and take pictures.", "전화와 사진 촬영만 됐어요.", "기능"],
        [
          "It couldn't connect to the internet, YouTube, or social media.",
          "인터넷, 유튜브, SNS는 안 됐어요.",
          "차이",
        ],
        [
          "Compared to my phone now, it was less useful, but I loved how small it was.",
          "지금 폰보다 덜 유용했지만 작아서 좋았어요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "휴대폰 · 문제 경험",
      t: "7 휴대폰 문제",
      tag: "복기",
      q: [
        "Tell me about a time you had a problem with your phone, like a broken screen or a battery issue. What exactly happened and how did you get it fixed?",
        "휴대폰에 문제가 있었던 때를 말해 주세요. 화면이 깨지거나 배터리 문제 같은 거요. 무슨 일이 있었고 어떻게 고쳤나요?",
      ],
      s: [
        [
          "Two years ago, I dropped my phone on the street, and the screen was broken and scratched.",
          "2년 전 길에서 휴대폰을 떨어뜨려 화면이 깨지고 긁혔어요.",
          "상황",
        ],
        [
          "I couldn't use it properly, so I called the service center of the manufacturer.",
          "제대로 쓸 수 없어서 제조사 서비스센터에 전화했어요.",
          "행동",
        ],
        [
          "They picked up my phone, fixed it, and sent it back to my home.",
          "휴대폰을 가져가 수리해서 집으로 보내줬어요.",
          "결과 1",
        ],
        [
          "Luckily, it was still under warranty, so I didn't have to pay much.",
          "다행히 보증 기간이라 돈을 많이 내지 않았어요.",
          "결과 2",
        ],
        [
          "Since then, I've been more careful, and I use a case.",
          "그 후로 더 조심하고 케이스를 써요.",
          "교훈",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "음악 · 좋아하는 음악",
      t: "8 좋아하는 음악",
      tag: "복기",
      q: [
        "In your background survey, you indicated that you like to listen to music. What kind of music do you like? Who is your favorite musician or composer?",
        "설문에서 음악 듣기를 좋아한다고 했어요. 어떤 음악을 좋아하나요? 가장 좋아하는 음악가나 작곡가는 누구인가요?",
      ],
      s: [
        [
          "I love listening to music, and these days I'm really into a rock band called {Silica Gel}.",
          "음악 듣는 걸 좋아하고, 요즘은 실리카겔이라는 록밴드에 푹 빠져 있어요.",
          "도입",
        ],
        [
          "Their music is energetic and fun, and it makes me feel better when I'm tired.",
          "음악이 에너지 넘치고 재밌어서 피곤할 때 기분이 좋아져요.",
          "이유",
        ],
        [
          "I listen to their songs on my way to work and while I play games.",
          "출근길이나 게임할 때 그 노래를 들어요.",
          "언제",
        ],
        [
          "I'm a big fan of them, and I want to listen to more of their albums.",
          "열렬한 팬이고 앨범을 더 들어보고 싶어요.",
          "팬심",
        ],
        [
          "That's why Silica Gel is my favorite band.",
          "그래서 실리카겔이 제가 제일 좋아하는 밴드예요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "음악 · 관심과 변화",
      t: "9 음악 취향 변화",
      tag: "복기",
      q: [
        "How did you first become interested in music? Has your taste in music changed over the years?",
        "음악에 처음 관심을 갖게 된 계기는 무엇인가요? 취향은 해마다 바뀌었나요?",
      ],
      s: [
        [
          "When I was a high school student, I needed to focus on studying for the college entrance exam.",
          "고등학생 때 대입 시험 공부에 집중해야 했어요.",
          "계기 1",
        ],
        [
          "I couldn't study in a noisy place, so I started listening to music to focus.",
          "시끄러운 곳에서는 공부를 못 해서 집중하려고 음악을 듣기 시작했어요.",
          "계기 2",
        ],
        [
          "At first, I listened to hip-hop because it's powerful and has strong messages.",
          "처음엔 힙합이 강렬하고 메시지가 있어서 들었어요.",
          "처음 취향",
        ],
        [
          "But it distracted me, so I changed to classical music and jazz.",
          "하지만 집중이 안 돼서 클래식과 재즈로 바꿨어요.",
          "변화",
        ],
        [
          "Now my taste is calmer, and I listen to jazz when I want to relax.",
          "지금은 취향이 차분해져서 쉬고 싶을 때 재즈를 들어요.",
          "지금",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "음악 · 라이브 공연",
      t: "10 라이브 공연",
      tag: "복기",
      q: [
        "Can you recall a memorable live music experience you've had? Please describe when it happened, where you were, who you were with, and what made the performance so special.",
        "기억에 남는 라이브 공연을 떠올려 보세요. 언제, 어디에서, 누구와 있었고 무엇이 특별했는지 말해 주세요.",
      ],
      s: [
        [
          "About {one year ago}, I went to a concert of {Silica Gel}, a band I really like.",
          "약 1년 전 정말 좋아하는 실리카겔의 콘서트에 갔어요.",
          "언제 · 누구",
        ],
        [
          "I went alone, because my friends' schedules didn't match mine.",
          "친구들과 일정이 맞지 않아 혼자 갔어요.",
          "누구와",
        ],
        [
          "The concert hall was very big and the sound system was great.",
          "공연장이 아주 크고 음향이 좋았어요.",
          "어디서 · 특별한 점",
        ],
        [
          "The performance was so energetic that I sang along and jumped with the crowd.",
          "공연이 너무 에너지 넘쳐서 떼창하고 관객들과 뛰었어요.",
          "특별한 점",
        ],
        [
          "It was a great experience, and I want to go again.",
          "정말 좋은 경험이었고 또 가고 싶어요.",
          "마무리",
        ],
      ],
      cat: "survey",
    },
    {
      kind: "롤플레이 11",
      t: "11 명절 모임 질문",
      tag: "복기",
      q: [
        "A friend has invited you to a holiday gathering. Call your friend and ask 3 or 4 questions about the holiday plan, such as what you should bring and when you should arrive.",
        "친구가 명절 모임에 초대했습니다. 전화해서 무엇을 가져갈지, 언제 도착할지 같은 질문을 3~4개 하세요.",
      ],
      s: [
        [
          "Hi, it's {Hyun-gi}. Thank you for inviting me to your holiday gathering.",
          "안녕, 나 현기야. 명절 모임에 초대해 줘서 고마워.",
          "도입",
        ],
        [
          "Where is it going to be, and what time should I arrive?",
          "어디서 하고 몇 시에 도착하면 돼?",
          "질문 1 · 2",
        ],
        [
          "What should I bring? Should I bring some food or a gift?",
          "뭘 가져가야 해? 음식이나 선물이 필요할까?",
          "질문 3",
        ],
        ["Is there a dress code?", "정해진 복장이 있어?", "질문 4"],
        [
          "Also, who else is coming? I'm looking forward to it!",
          "그리고 또 누가 와? 기대돼!",
          "질문 5 · 마무리",
        ],
      ],
      cat: "rp",
    },
    {
      kind: "롤플레이 12",
      t: "12 늦게 도착 · 대안",
      tag: "복기",
      q: [
        "You are on your way to the holiday gathering, but something has happened. Perhaps your car broke down. Call your friend, explain the situation, and give 2 or 3 alternatives for when you will be able to get there.",
        "모임에 가는 길에 일이 생겼습니다. 차가 고장 났을 수 있어요. 전화해서 상황을 설명하고 도착 시간에 대한 대안 2~3가지를 제안하세요.",
      ],
      s: [
        [
          "Hi, it's {Hyun-gi}. I'm on my way, but my car broke down, so I'll be late.",
          "안녕, 현기야. 가는 중인데 차가 고장 나서 늦을 것 같아.",
          "도입 · 상황",
        ],
        [
          "I'm really sorry, and I'm waiting for a tow truck now.",
          "정말 미안해, 지금 견인차를 기다리고 있어.",
          "현재 상태",
        ],
        [
          "I have three options. First, I can take a taxi and arrive in about an hour.",
          "세 가지 방법이 있어. 첫째, 택시로 한 시간쯤 뒤에 도착할 수 있어.",
          "대안 1",
        ],
        [
          "Second, if that's too late, I can join you for dessert and drinks after dinner.",
          "둘째, 너무 늦으면 저녁 후 디저트와 술자리에 합류할게.",
          "대안 2",
        ],
        [
          "Third, I can come tomorrow with a gift. Which one is best for you?",
          "셋째, 내일 선물을 들고 갈게. 어느 쪽이 좋아?",
          "대안 3 · 질문",
        ],
      ],
      cat: "rp",
    },
    {
      kind: "롤플레이 13",
      t: "13 명절 계획 취소",
      tag: "복기",
      q: [
        "Have you ever had a holiday plan that was canceled or changed unexpectedly because of the weather or some other reason? Tell me exactly what happened and how you dealt with the situation.",
        "날씨나 다른 이유로 명절 계획이 갑자기 취소되거나 바뀐 적이 있나요? 무슨 일이 있었고 어떻게 대처했나요?",
      ],
      s: [
        [
          "Two years ago, our family plan for Chuseok was canceled.",
          "2년 전 추석 가족 계획이 취소됐어요.",
          "도입",
        ],
        [
          "We were going to visit my father's hometown, but I suddenly got sick.",
          "아버지 고향에 가기로 했는데 제가 갑자기 아팠어요.",
          "문제",
        ],
        [
          "I couldn't travel, so I stayed at home and rested.",
          "여행을 못 해서 집에서 쉬었어요.",
          "행동",
        ],
        [
          "I called my relatives and apologized, and they were very understanding.",
          "친척들에게 전화해 사과했고 모두 이해해 주셨어요.",
          "해결",
        ],
        [
          "I learned that plans can change, so it's good to be flexible.",
          "계획은 바뀔 수 있으니 유연해야 한다는 걸 배웠어요.",
          "교훈",
        ],
      ],
      cat: "rp",
    },
    {
      kind: "돌발 · 공원 비교",
      t: "14 공원 두 곳 비교",
      tag: "복기",
      q: [
        "Pick 2 different parks that you know and tell me about the differences and similarities. What do you like better and why? Give me all the details.",
        "아는 공원 두 곳을 골라 차이점과 공통점을 말해 주세요. 어느 쪽을 더 좋아하고 왜인가요?",
      ],
      s: [
        [
          "I'll compare two parks I know: {Braemar Park (the big park)} and {the small park near my house}.",
          "내가 아는 두 공원, 큰 공원과 집 근처 작은 공원을 비교할게요.",
          "도입 (아는 곳 두 개)",
        ],
        [
          "They're similar because both are good places to relax and get some fresh air.",
          "둘 다 쉬면서 바람 쐬기 좋다는 점이 비슷해요.",
          "공통점",
        ],
        [
          "However, the big park has a 100-meter track and beautiful scenery, while the small park is quiet and close to home.",
          "하지만 큰 공원은 100m 트랙과 경치가 좋고, 작은 공원은 조용하고 집에서 가까워요.",
          "차이점",
        ],
        [
          "I go to the small park for exercise, and I visit the big park to take photos.",
          "운동은 작은 공원에서 하고, 사진은 큰 공원에서 찍어요.",
          "차이점 2",
        ],
        [
          "I like the small park better, because I can go there anytime to refresh and lose weight.",
          "언제든 가서 기분 전환하고 살도 뺄 수 있어서 작은 공원이 더 좋아요.",
          "선택 · 이유",
        ],
      ],
      cat: "surprise",
    },
    {
      kind: "돌발 · 공원 문제",
      t: "15 공원 문제와 해결",
      tag: "복기",
      q: [
        "I'd like to know the main issue related to public parks today. What is the biggest problem that users of public parks face? What needs to be done to preserve these parks and solve the problem?",
        "요즘 공원의 가장 큰 문제는 무엇인가요? 이용자들이 겪는 가장 큰 문제와 해결하려면 무엇이 필요한지 말해 주세요.",
      ],
      s: [
        [
          "The biggest problem with public parks in my town is the lack of parking.",
          "우리 동네 공원의 가장 큰 문제는 주차 공간이 부족하다는 거예요.",
          "문제",
        ],
        [
          "Many people drive, and there are too many cars for the small parking area.",
          "많은 사람이 운전해서 좁은 주차장에 비해 차가 너무 많아요.",
          "원인",
        ],
        [
          "Seoul is crowded, so it's hard to build new parking lots.",
          "서울은 복잡해서 새 주차장을 짓기 어려워요.",
          "제약",
        ],
        [
          "One solution is to build a parking building near the park.",
          "한 가지 해결책은 공원 근처에 주차 건물을 짓는 거예요.",
          "해결 1",
        ],
        [
          "Another is to encourage people to use public transportation, so there are fewer cars.",
          "또 다른 방법은 대중교통 이용을 권장해서 차를 줄이는 거예요.",
          "해결 2",
        ],
      ],
      cat: "surprise",
    },
  ],
};
REPLAY5.qs.forEach((q, i) => {
  q.cat = i < 10 ? "survey" : i < 13 ? "rp" : "surprise";
});
const REPLAY6 = {
  name: "10/21 모의시험 5회차 복기",
  qs: [
    {
      kind: "자기소개",
      t: "1 자기소개",
      tag: "복기",
      q: [
        "Let's start the interview. Now tell me about yourself.",
        "인터뷰를 시작하겠습니다. 자기소개를 해 주세요.",
      ],
      s: [
        [
          "Hi, my name is {Hyun-gi}. Nice to meet you.",
          "안녕하세요, 제 이름은 현기예요. 만나서 반갑습니다.",
          "인사",
        ],
        [
          "I'm a software developer at {Hanna System}.",
          "저는 한나시스템의 소프트웨어 개발자예요.",
          "직업",
        ],
        [
          "I live alone in {an apartment}, and I like {games, music, and photos}.",
          "저는 아파트에 혼자 살고 게임, 음악, 사진을 좋아해요.",
          "집 · 취미",
        ],
        [
          "I'm taking this test because my company needs a grade.",
          "회사에서 등급이 필요해서 이 시험을 봐요.",
          "시험 이유",
        ],
        [
          "I studied for a long time, so I'll do my best.",
          "오래 공부했으니 최선을 다할게요.",
          "각오",
        ],
      ],
    },
    {
      kind: "음악 · 종류와 좋아하는 가수",
      t: "2 좋아하는 음악",
      tag: "복기",
      q: [
        "In your background survey, you indicated that you like to listen to music. What kind of music do you like? Who is your favorite musician or composer?",
        "설문에서 음악 듣기를 좋아한다고 하셨어요. 어떤 음악을 좋아하나요? 가장 좋아하는 음악가는 누구인가요?",
      ],
      s: [
        ["I like rock music.", "저는 록 음악을 좋아해요.", "장르"],
        ["My favorite band is {Silica Gel}.", "제일 좋아하는 밴드는 실리카겔이에요.", "가수"],
        ["Their music is energetic and fun.", "그들의 음악은 에너지 넘치고 재밌어요.", "이유 1"],
        [
          "When I feel sad or nervous, it makes me feel better.",
          "슬프거나 긴장될 때 기분이 나아져요.",
          "이유 2",
        ],
        ["That's why I love rock music.", "그래서 저는 록 음악을 좋아해요.", "마무리"],
      ],
    },
    {
      kind: "음악 · 즐기는 방법",
      t: "3 음악 즐기는 방법",
      tag: "복기",
      q: [
        "How do you enjoy listening to music? When and where do you listen to music? Do you listen to the radio or go to a concert? Please give me all the details.",
        "음악을 어떻게 즐기나요? 언제 어디서 듣나요? 라디오를 듣거나 콘서트에 가나요? 자세히 말해 주세요.",
      ],
      s: [
        [
          "I usually listen to music alone in my living room.",
          "저는 보통 거실에서 혼자 음악을 들어요.",
          "어디서",
        ],
        [
          "I have a good sound system, so I can listen anytime.",
          "음향 장비가 좋아서 언제든 들을 수 있어요.",
          "언제",
        ],
        [
          "Sometimes I go to concerts, and I've seen Silica Gel several times.",
          "가끔 콘서트에 가고 실리카겔은 여러 번 봤어요.",
          "콘서트",
        ],
        [
          "I also go to a jazz club, where I can enjoy music and have a drink.",
          "재즈 클럽에도 가는데, 음악을 즐기며 술도 마실 수 있어요.",
          "재즈 클럽",
        ],
        [
          "That's why I enjoy music in many ways.",
          "그래서 저는 음악을 여러 방법으로 즐겨요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "음악 · 계기와 취향 변화",
      t: "4 음악 계기·취향 변화",
      tag: "복기",
      q: [
        "How did you become interested in music? Has your taste in music changed over the years?",
        "음악에 어떻게 관심을 갖게 됐나요? 세월에 따라 취향이 바뀌었나요?",
      ],
      s: [
        [
          "I started listening to music in high school.",
          "고등학교 때 음악을 듣기 시작했어요.",
          "계기",
        ],
        [
          "I had to study hard for the college exam, so I needed to focus.",
          "대학 입시 때문에 열심히 공부해야 해서 집중이 필요했어요.",
          "이유",
        ],
        [
          "So I listened to calm music, such as jazz and classical music.",
          "그래서 재즈와 클래식 같은 잔잔한 음악을 들었어요.",
          "과거 취향",
        ],
        ["Now I listen to rock music for fun.", "지금은 재미로 록을 들어요.", "현재 취향"],
        ["That's how my taste has changed.", "그렇게 취향이 바뀌었어요.", "마무리"],
      ],
    },
    {
      kind: "건강 · 건강한 사람",
      t: "5 건강한 사람",
      tag: "복기",
      q: [
        "Tell me about healthy people. What kinds of food do they usually eat? In your opinion, what do you think good health is? Please provide as many details as possible.",
        "건강한 사람들에 대해 말해 주세요. 보통 어떤 음식을 먹나요? 좋은 건강이란 무엇이라고 생각하나요?",
      ],
      s: [
        [
          "Healthy people usually eat balanced food.",
          "건강한 사람들은 보통 균형 잡힌 음식을 먹어요.",
          "음식 1",
        ],
        ["They eat vegetables, meat, and fish.", "채소, 고기, 생선을 먹어요.", "음식 2"],
        ["They also exercise regularly.", "그리고 규칙적으로 운동해요.", "운동"],
        [
          "In my opinion, good health means a healthy body and a happy mind.",
          "제 생각에 좋은 건강은 건강한 몸과 행복한 마음이에요.",
          "의견",
        ],
        [
          "That's why food and exercise are both important.",
          "그래서 음식과 운동 둘 다 중요해요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "건강 · 생각 변화와 관리",
      t: "6 건강 생각 변화",
      tag: "복기",
      q: [
        "How has your idea of health changed since you were a child? What do you think about food and exercise? Now what do you do to maintain your health?",
        "어릴 때부터 건강에 대한 생각이 어떻게 바뀌었나요? 음식과 운동은 어떻게 생각하나요? 지금 건강을 위해 무엇을 하나요?",
      ],
      s: [
        [
          "When I was young, I loved sweets, so I gained weight.",
          "어릴 때 단 걸 좋아해서 살이 쪘어요.",
          "과거",
        ],
        ["I didn't think about health then.", "그땐 건강을 생각하지 않았어요.", "과거 생각"],
        [
          "Now I know that food and exercise are important, so I stopped eating sweets.",
          "지금은 음식과 운동이 중요하다는 걸 알아서 단 걸 끊었어요.",
          "변화",
        ],
        [
          "I exercise twice a week and eat a lot of protein.",
          "일주일에 두 번 운동하고 단백질을 많이 먹어요.",
          "지금 관리",
        ],
        ["That's how I stay healthy.", "그렇게 건강을 유지해요.", "마무리"],
      ],
    },
    {
      kind: "건강 · 기억에 남는 일",
      t: "7 건강 관련 사건",
      tag: "복기",
      q: [
        "Tell me about a memorable incident related to health. It could be a time when you were sick, tried to improve your health or help someone else with their health. What happened? And how did that experience change your thoughts about health?",
        "건강과 관련해 기억에 남는 일을 말해 주세요. 무슨 일이 있었고 건강에 대한 생각이 어떻게 바뀌었나요?",
      ],
      s: [
        ["Two years ago, I got COVID-19.", "2년 전에 코로나에 걸렸어요.", "언제 · 무슨 일"],
        [
          "I couldn't taste or eat anything, and I had to stay in my room alone.",
          "맛을 못 느끼고 먹지도 못해서 방에서 혼자 지내야 했어요.",
          "상황",
        ],
        [
          "It was lonely and boring, but I rested and drank a lot of water.",
          "외롭고 지루했지만 쉬고 물을 많이 마셨어요.",
          "행동",
        ],
        ["After a week, I got better.", "일주일 뒤에 나았어요.", "결과"],
        [
          "Since then, I think health is the most important thing.",
          "그 뒤로 건강이 가장 중요하다고 생각해요.",
          "교훈",
        ],
      ],
    },
    {
      kind: "여행 · 휴가지",
      t: "8 휴가로 간 곳",
      tag: "복기",
      q: [
        "Discuss a city or country that you have visited on vacation. What does this place look like? Where is it located? What are the people like and what else is unique about it?",
        "휴가로 다녀온 도시나 나라를 이야기해 주세요. 어떻게 생겼고, 어디에 있고, 사람들은 어떻고, 특별한 점은 무엇인가요?",
      ],
      s: [
        ["I visited Jeju Island two years ago.", "2년 전에 제주도에 갔어요.", "어디 · 언제"],
        ["It's an island in the south of Korea.", "한국 남쪽에 있는 섬이에요.", "위치"],
        [
          "It has beautiful nature, and there were many tourists.",
          "자연이 아름답고 관광객이 많았어요.",
          "모습 · 사람들",
        ],
        [
          "The food was delicious, and the roads were great for driving.",
          "음식이 맛있고 드라이브하기 좋은 도로가 있었어요.",
          "특별한 점",
        ],
        ["That's why I want to go there again.", "그래서 또 가고 싶어요.", "마무리"],
      ],
    },
    {
      kind: "여행 · 첫 해외여행",
      t: "9 첫 해외여행",
      tag: "복기",
      q: [
        "Do you remember your first trip abroad? When was it? Where did you go? Who did you go with? What did you do? Tell me the whole story in detail.",
        "첫 해외여행을 기억하나요? 언제, 어디로, 누구와 갔고 무엇을 했나요? 자세히 말해 주세요.",
      ],
      s: [
        [
          "My first trip abroad was when I was in elementary school.",
          "첫 해외여행은 초등학생 때였어요.",
          "언제",
        ],
        ["I went to Europe with my mother.", "어머니와 유럽에 갔어요.", "누구와 · 어디"],
        [
          "We visited Italy, France, and Switzerland.",
          "이탈리아, 프랑스, 스위스를 갔어요.",
          "여행지",
        ],
        [
          "I loved Italy because of the old buildings, pizza, and spaghetti.",
          "오래된 건물과 피자, 스파게티 때문에 이탈리아가 좋았어요.",
          "한 일",
        ],
        [
          "It was a long time ago, but it was a great memory.",
          "오래전이지만 좋은 추억이에요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "여행 · 가장 기억에 남는 경험",
      t: "10 가장 기억에 남는 해외 경험",
      tag: "복기",
      q: [
        "What is the most memorable experience you have had while traveling overseas? When and where did you go? What happened? Why was it memorable? Describe the experience in detail.",
        "해외여행에서 가장 기억에 남는 경험은 무엇인가요? 언제, 어디서, 무슨 일이 있었고 왜 기억에 남나요?",
      ],
      s: [
        [
          "Two years ago, I went to Japan to watch a beatbox contest.",
          "2년 전 비트박스 대회를 보러 일본에 갔어요.",
          "언제 · 어디",
        ],
        [
          "Teams from many countries joined, and a Korean team was there too.",
          "여러 나라 팀이 참가했고 한국 팀도 있었어요.",
          "무슨 일",
        ],
        [
          "I cheered for the Korean team with all my heart.",
          "한국 팀을 온 힘을 다해 응원했어요.",
          "한 일",
        ],
        [
          "Sadly, they didn't win, but the show was amazing.",
          "아쉽게도 우승은 못 했지만 공연은 대단했어요.",
          "결과",
        ],
        [
          "That's why it's my most memorable trip.",
          "그래서 가장 기억에 남는 여행이에요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "롤플레이 · 질문하기 (점심 초대)",
      t: "11 점심 초대 질문",
      tag: "복기",
      q: [
        "You want to have another family come to your house for lunch. Please ask the other members of your family several questions so that you can decide the best date and time for your acquaintances to visit.",
        "다른 가족을 집에 점심 초대하려고 해요. 가족들에게 질문을 여러 개 해서 방문하기 좋은 날짜와 시간을 정해 보세요.",
      ],
      s: [
        [
          "Hi, it's {Hyun-gi}. I'd like to invite your family to my house for lunch.",
          "안녕하세요, 현기예요. 가족분들을 집으로 점심에 초대하고 싶어요.",
          "도입",
        ],
        [
          "Which day is good for you, Saturday or Sunday?",
          "토요일과 일요일 중 어느 날이 좋으세요?",
          "질문 1 · 날짜",
        ],
        [
          "What time is good for you? How about twelve o'clock?",
          "몇 시가 좋으세요? 12시는 어때요?",
          "질문 2 · 시간",
        ],
        [
          "Is there any food you can't eat? Do you like Korean food or Italian food?",
          "못 드시는 음식이 있나요? 한식과 이탈리아 음식 중 뭘 좋아하세요?",
          "질문 3 · 음식",
        ],
        [
          "How many people are coming? Please let me know, and I'll prepare everything.",
          "몇 분이 오시나요? 알려 주시면 준비할게요.",
          "질문 4 · 인원",
        ],
      ],
    },
    {
      kind: "롤플레이 · 문제 + 대안 (가족이 아파서 취소)",
      t: "12 가족 병환 · 대안",
      tag: "복기",
      q: [
        "You were supposed to have lunch with your friend's family but someone in your family got sick that morning. Leave a message on your friend's voice mail to let them know and suggest some other ways to meet up in the future.",
        "친구 가족과 점심을 하기로 했는데 우리 가족 중 한 명이 아침에 아팠어요. 음성 메시지로 알리고 앞으로 만날 다른 방법을 제안하세요.",
      ],
      s: [
        [
          "Hi, it's {Hyun-gi}. I'm sorry, but I can't come to lunch today.",
          "안녕, 현기야. 미안하지만 오늘 점심에 못 가.",
          "도입 · 상황",
        ],
        [
          "My brother got sick this morning, and I need to take care of him.",
          "오늘 아침 동생이 아파서 내가 돌봐야 해.",
          "이유",
        ],
        [
          "I have two ideas. First, we can have lunch next Saturday.",
          "두 가지 제안이 있어. 첫째, 다음 주 토요일에 점심 먹자.",
          "대안 1",
        ],
        [
          "Second, we can have dinner at a restaurant near your house this weekend.",
          "둘째, 이번 주말에 너희 집 근처 식당에서 저녁을 먹자.",
          "대안 2",
        ],
        [
          "I'm really sorry. Please call me back and tell me what works for you.",
          "정말 미안해. 전화 주고 어느 쪽이 좋은지 알려 줘.",
          "마무리",
        ],
      ],
    },
    {
      kind: "돌발 · 가족이 아파서 취소한 경험",
      t: "13 가족 병환으로 취소",
      tag: "복기",
      q: [
        "Have you ever had to cancel plans because a family member got sick? Describe what happened. How did you handle the situation and how did you reschedule your plans with the people you had plans with?",
        "가족이 아파서 계획을 취소한 적이 있나요? 무슨 일이 있었고 어떻게 대처하고 일정을 다시 잡았나요?",
      ],
      s: [
        [
          "Two years ago, I went to Jeju Island with my family.",
          "2년 전 가족과 제주도에 갔어요.",
          "언제 · 어디",
        ],
        [
          "My brother had a stomachache, so we canceled our dinner reservation.",
          "동생이 배가 아파서 저녁 예약을 취소했어요.",
          "상황",
        ],
        ["I called the restaurant and said sorry.", "식당에 전화해서 사과했어요.", "대처"],
        [
          "Instead, we bought pork cutlets from a famous restaurant and ate them at the hotel.",
          "대신 유명한 식당에서 돈가스를 사서 호텔에서 먹었어요.",
          "대안",
        ],
        [
          "It was delicious, and it became a memorable trip.",
          "맛있었고 기억에 남는 여행이 됐어요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "돌발 · 작은 마을 vs 대도시 모임",
      t: "14 마을 vs 도시 모임",
      tag: "복기",
      q: [
        "How are gatherings or celebrations different in a small town compared to a big city? What are some common traditions or ways people celebrate in each place? Which do you prefer and why?",
        "작은 마을과 대도시의 모임이나 축하 방식은 어떻게 다른가요? 어느 쪽을 더 좋아하고 왜인가요?",
      ],
      s: [
        [
          "In a small town, everyone celebrates together.",
          "작은 마을에서는 모두 함께 축하해요.",
          "마을",
        ],
        [
          "In a big city, people are busy, so events are smaller.",
          "대도시에서는 사람들이 바빠서 행사가 더 작아요.",
          "도시",
        ],
        [
          "Both are similar because people want to enjoy time together.",
          "둘 다 함께 시간을 즐기고 싶어 한다는 점은 비슷해요.",
          "공통점",
        ],
        [
          "I prefer a small town because it feels warm and friendly.",
          "저는 따뜻하고 친근해서 작은 마을이 더 좋아요.",
          "선택",
        ],
        [
          "That's why I like small town celebrations.",
          "그래서 작은 마을의 축하가 좋아요.",
          "마무리",
        ],
      ],
    },
    {
      kind: "돌발 · 모임의 문제점",
      t: "15 모임 문제와 해결",
      tag: "복기",
      q: [
        "Do you think people have any concerns or issues related to gatherings or celebrations these days? What kinds of problems can come up and how do people usually deal with them?",
        "요즘 모임이나 축하와 관련해 사람들이 걱정하는 문제가 있나요? 어떤 문제가 생기고 보통 어떻게 해결하나요?",
      ],
      s: [
        ["Yes, I think there are some problems.", "네, 몇 가지 문제가 있다고 생각해요.", "도입"],
        [
          "First, it's hard to find a time when everyone is free.",
          "첫째, 모두가 시간이 되는 때를 찾기 어려워요.",
          "문제 1",
        ],
        ["Second, some gatherings are too expensive.", "둘째, 어떤 모임은 너무 비싸요.", "문제 2"],
        [
          "People usually use a group chat to decide the date and share the cost.",
          "사람들은 보통 단체 채팅으로 날짜를 정하고 비용을 나눠요.",
          "해결",
        ],
        ["That's how people solve these problems.", "그렇게 이런 문제를 해결해요.", "마무리"],
      ],
    },
  ],
};
REPLAY6.qs.forEach((q, i) => {
  q.cat = i < 10 ? "survey" : i < 13 ? "rp" : "surprise";
});
const MOCK_SETS = [REPLAY, REPLAY2, REPLAY3, REPLAY4, REPLAY5, REPLAY6];

/* 발화 노트(날짜별 복기 기록). 시험 후 평가를 여기에 추가하면 모의고사 화면의 발화 노트에 나타난다.
   형식: {date, title, set(MOCK_SETS 인덱스), grade 예상 등급, summary, good:[], problems:[{q 문제, cat, issue 문제점, fix 고칠 점}], actions:[우선순위 할 일]} */
const MOCK_REVIEWS = [
  {
    date: "2026-10-15",
    title: "첫 모의시험 (15문제)",
    set: 0,
    grade: "IL 후반 ~ IM1 (목표 IM2에는 아직)",
    summary:
      "내용은 있는데 전달 방식에서 점수가 깎임. 과제 미수행, 짧고 끊기는 문장, 시제 혼용, 약한 연결과 구성이 핵심. 녹취록 기준 평가라 발음·억양·침묵은 반영되지 않음.",
    good: [
      "경험 이야기가 있음: 지갑 분실(Q4), 제주 호텔 예약 실수(Q13), 어머니 음식(Q7)은 상황→문제→해결이 이어짐",
      "어려운 질문에도 끝까지 이어 가려 함. 12번에서 교환·환불·시간 변경 같은 대안을 냄",
      "집 묘사(Q5)는 방 구조와 좋아하는 이유까지 나옴",
    ],
    problems: [
      {
        q: "Q11 롤플레이",
        cat: "롤플레이",
        issue:
          "영화관에 전화해 질문하는 역할인데 친구에게 영화를 보자고 초대함. 표에 대한 질문이 0개",
        fix: "Hello, I'm calling to ask about... 로 시작해 상영 시간·가격·좌석·예매 방법을 묻기 (롤플레이 > 업체에 질문 M, 질문 3~4개 뽑기)",
      },
      {
        q: "Q12 롤플레이",
        cat: "롤플레이",
        issue: "문제 설명 후 대안이 First/Second/Third로 구분되지 않고 같은 말을 반복",
        fix: "문제 한 줄 → 대안 1·2·3을 번호 붙여 말하기 (롤플레이 > 업체에 전화 I)",
      },
      {
        q: "Q13 롤플레이",
        cat: "롤플레이",
        issue: "시제가 흔들리고 상황 설명이 불분명함 (예약 날짜를 잘못 잡았다는 핵심이 늦게 나옴)",
        fix: "경험 순서 표지(Two years ago → Then → Luckily → Since then)로 고정 (롤플레이 > 비슷한 경험 J)",
      },
      {
        q: "Q8·Q9·Q10 바",
        cat: "서베이",
        issue: "I don't like bars / I didn't go 로 시작해 질문에 답하지 못함, 내용이 얕음",
        fix: "I don't go often, but I remember one place. 후 만능 묘사(장소·사람·분위기)로 5~6문장 채우기 (서베이 K 만능 묘사)",
      },
      {
        q: "Q14·Q15 일본",
        cat: "돌발",
        issue: "I don't know about this topic 으로 시작, 같은 내용 반복, 중요한 이유 없음",
        fix: "돌발 기본형: 어렵다 → 많다·중요 → 필수 답변 3개 → 결론 틀로 답하기 (돌발 > 돌발 기본 O)",
      },
      {
        q: "Q2 약속 습관",
        cat: "돌발",
        issue: "한 문장 수준(I always accept their appointment)으로 끝남. 길이 부족",
        fix: "누구와 → 어떻게 → 뭘 하나 → 대화 주제 → 힘든 점 → 마무리 6문장 (복기 세트 Q2 모범답안)",
      },
      {
        q: "Q3 어린 시절 치과",
        cat: "돌발",
        issue: "I usually have 에서 멈춤. 과거 이야기에 always·현재형을 섞음",
        fix: "When I was young, I had... 로 과거 고정, 원인→감정→진행→결과",
      },
      {
        q: "Q4 기억에 남는 약속",
        cat: "돌발",
        issue: "forgot / forgotten 반복, 중간 침묵, 교훈과 마무리가 약함",
        fix: "순서 표지 + 마지막에 I learned to ... 한 문장",
      },
      {
        q: "Q5·Q6·Q7 집",
        cat: "서베이",
        issue: "live in alone 문법 오류, Q6은 흐름을 잃고 결론 없음, Q7은 always 반복",
        fix: "live alone. 묘사 뼈대(방 구성 → 좋아하는 방 → 이유)와 가족 추억 뼈대 사용",
      },
    ],
    actions: [
      "롤플레이 11번 역할 고정: 질문 3~4개만 던지는 연습을 하루 10분 (영화관·렌터카·호텔 번갈아)",
      "싫다·모른다로 시작하지 않기: I don't ... often, but ... 후 묘사 뼈대(K, 시설 7단계)로 5~6문장",
      "always 금지, 과거 이야기는 순서 표지(Last year → Then → After that → In the end)로 고정",
      "복기 세트를 영어 가리기 상태로 2~3회 반복, 막히면 결과 화면의 모범답안과 비교",
    ],
  },
  {
    date: "2026-10-17",
    title: "2회차 모의시험 (15문제)",
    set: 1,
    grade: "IM1 중후반 (목표 IM2까지 한 걸음, 1회차 IL 후반~IM1에서 상승)",
    summary:
      "1회차보다 길고 구조가 생겼음. 지갑 분실·TV 고장 경험이 이야기로 이어지고 14번은 '차이 두 가지' 틀이 잡힘. 점수를 깎는 것은 롤플레이 과제 수행(질문 개수, 해결책 개수), 질문을 피하거나 포기하는 답(Q7·Q8), 반복 문법 오류와 끝맺음. 녹취록 기준 평가라 발음·억양·침묵은 반영되지 않음. 'hair salon→healthur', 'wallet→warlead' 같은 STT 오인식은 감점하지 않음.",
    good: [
      "경험 이야기에 흐름이 있음: 미용실 최악의 머리(Q4), 고등학교 때 카페 공부(Q9), 지갑 분실(Q10), TV 고장→서비스 센터→교훈(Q13)",
      "자기 교정: 'I always go to No, I usually go there'처럼 always를 스스로 고침 (1회차 대비 개선)",
      "Q14는 'there are two differences'로 구조를 먼저 말하고 SNS 대 정보 검색으로 대비를 만듦",
      "Q15는 최근 뉴스(AI 해킹, 은행 개인정보)를 예로 들어 내용이 있음",
      "Q3에서 '머리카락이 약해서 염색 안 함'처럼 이유를 말함",
    ],
    problems: [
      {
        q: "Q1 자기소개",
        cat: "서베이",
        issue:
          "'Please give me a good grade'와 '시험이 처음이라 긴장된다'만 말함. 직업·집·취미 소개가 없음",
        fix: "직업 → 사는 곳 → 취미 → 각오 5문장 고정. 등급 부탁은 하지 않기 (복기 세트 Q1 모범답안)",
      },
      {
        q: "Q11 롤플레이",
        cat: "롤플레이",
        issue:
          "'Hi, nice to meet you'로 친구에게 인사하고, 질문 대신 'I want ~'로 원하는 것을 나열. 실제 질문은 'can you recommend' 두 번뿐",
        fix: "Hi, it's ... → What kind / How much / Which brand / Where can I 4개 질문 틀 (롤플레이 > 친구에게 질문 L, 표현 'Can I', 'Do you have')",
      },
      {
        q: "Q12 롤플레이",
        cat: "롤플레이",
        issue:
          "해결책이 '같은 걸 새로 사 주겠다' 하나뿐이고 사과가 반복됨. 'Can you call me?'로 역할이 뒤집힘",
        fix: "First / Second / Third로 수리·같은 모델·새 제품 3가지 번호 붙여 말하기 (롤플레이 > 문제 해결 H, I)",
      },
      {
        q: "Q7 집 문제",
        cat: "서베이",
        issue:
          "'문제가 없었다'로 시작해 과제(고장 경험과 해결)를 피함. 마지막에 '새 파트너가 필요하다'로 빠짐",
        fix: "없으면 Q13 소재(TV 고장)를 가져와 상황→시도→해결 3문장 (복기 세트 Q7)",
      },
      {
        q: "Q8 카페 묘사",
        cat: "서베이",
        issue:
          "'I don't have an interest of the cafe so I can't tell anymore'로 스스로 중단. 길이 부족",
        fix: "모르면 포기하지 말고 만능 묘사(인테리어·좌석·손님·분위기)로 5문장 (서베이 K 만능 묘사)",
      },
      {
        q: "Q10 카페 특별한 경험",
        cat: "서베이",
        issue:
          "지갑 분실 이야기가 'could be founded', 'my old house' 등 문법과 연결이 흔들리고 결말이 갑자기 끝남",
        fix: "순서 표지 About two years ago → Then → I realized → I went back → Since then 으로 고정 (서베이 C 지갑 분실)",
      },
      {
        q: "Q5·Q6 집",
        cat: "서베이",
        issue:
          "'live in alone', 'in apartment in 50 floor', 'very where buying statue' 등 어색한 표현. Q6은 끝에서 흐름이 무너짐",
        fix: "live alone. on the 15th floor. 마지막 문장을 'I think it was one of the best things I've ever bought'로 고정",
      },
      {
        q: "Q15 인터넷 이슈",
        cat: "돌발",
        issue:
          "질문의 '해마다 어떻게 변했나'와 '우리나라 영향'을 빠뜨리고 반복('it must be solved')으로 끝남",
        fix: "지금 문제 → 뉴스 예 → 과거에는 → 한국 영향 → 결론 5문장 (돌발 O 돌발 기본형)",
      },
      {
        q: "전체 문법·마무리",
        cat: "공통",
        issue:
          "'My home don't have', 'young people using'(be 동사 없음), 'a very big side of room', 'So yeah that's all' 반복, Frankly 남발",
        fix: "문법 3개만 고정(live alone, 3인칭 단수, -ing 앞 be). 마무리는 'That's why...' 또는 'In conclusion'으로",
      },
    ],
    actions: [
      "롤플레이 11·12: 11번은 질문 4개(What kind / How much / Which brand / Where can I), 12번은 해결책 3개(First/Second/Third)를 하루 10분씩. 인사는 'Hi, it's ...'",
      "포기·회피 금지: 'I don't care/can't tell' 대신 만능 묘사 5문장 (카페·집 문제는 TV 고장 소재 재사용)",
      "문법 3개 고정: live alone, My home doesn't have, Young people are using. 말하기 전에 속으로 한 번 체크",
      "자기소개 5문장(직업→집→취미→시험 이유→각오) 외우기. 등급 부탁은 하지 않기",
      "복기 세트를 영어 가리기로 2회 반복하고, 막히는 문장은 표현 화면의 'I realized', 'Can I', 'Because of that,'로 첫마디 연습",
    ],
  },
  {
    date: "2026-10-20",
    title: "3회차 모의시험 (15문제)",
    set: 2,
    grade: "IM1 후반 (IM2 경계, 롤플레이 질문하기·대안 제시를 고치면 IM2 가능)",
    summary:
      "서베이와 경험 이야기는 2회차보다 길고 안정적임. 포기하는 답이 없어졌고, 공부한 소재(제주 서귀포 호텔, 옛집 공원, 지리산, 예약 취소)와 표현(I'm really into, That's why)이 실제로 나옴. 반면 롤플레이는 3회 연속 과제 수행이 약함: 질문하기에서 질문 대신 진술을 하고(Q11), 역할을 잘못 잡고(Q15 손님 연기), 대안 제시에서 또 'call me'와 교통사고 변명을 씀(Q12). 녹취록 기준 평가라 발음·억양·침묵은 반영되지 않음. STT 오인식은 감점하지 않음.",
    good: [
      "포기 없이 끝까지 이어 감: 2회차 Q8처럼 '말 못 하겠다'가 사라지고 Q14 카페를 7문장으로 채움",
      "공부한 소재를 가져와 이야기로 이어짐: Q7 옛집 공원, Q8 서귀포 호텔, Q10 지리산 일출, Q13 제주 식당 예약 취소(문제→전화→결과→대안)",
      "Q6 평일과 주말을 구분해 답하고 'I'm really into'를 씀. Q5·Q6에서 live alone을 바르게 말함 (1·2회차 'live in alone' 교정됨)",
      "Q10 지리산은 누구와·무엇을·어땠는지가 이어진 가장 완성도 높은 이야기",
    ],
    problems: [
      {
        q: "Q11 롤플레이 (생일 파티)",
        cat: "롤플레이",
        issue:
          "'I don't know ~'로 모른다는 진술이 대부분이고 실제 질문은 거의 없음. 장소·선물·시간을 물어야 하는데 'please notice me'로 부탁함",
        fix: "Where / What time / How many / What kind 4개를 질문 문장으로 (표현 화면 'Where is', 'How do I', 'What do you think about')",
      },
      {
        q: "Q15 롤플레이 (카페 직원 인터뷰)",
        cat: "롤플레이",
        issue:
          "카페 직원에게 일에 대해 질문하는 과제인데 손님이 되어 커피·베이글을 주문함. 질문은 'How much is it?' 하나",
        fix: "역할 확인 한마디 후 What do you do / How long / most popular / busiest time 4개 질문 (복기 세트 Q15)",
      },
      {
        q: "Q12 롤플레이 (파티 못 감)",
        cat: "롤플레이",
        issue:
          "'Can you call me now?'(2회차 Q12에서도 반복)로 역할이 뒤집히고, 교통사고 변명을 다시 사용(2회차에도). 대안이 선물 보내기·축하뿐이고 번호가 없음",
        fix: "Hi, it's ... 로 시작. 이유는 회사 일처럼 가볍게, 대안은 First/Second/Third로 3개 (복기 세트 Q12)",
      },
      {
        q: "Q1 자기소개",
        cat: "서베이",
        issue:
          "3회 연속 'please give me an easy on me'로 봐 달라고 부탁하고 직업·집·취미 소개가 없음",
        fix: "직업 → 사는 곳 → 취미 → 시험 이유 → 각오 5문장 외우기. 부탁은 하지 않기",
      },
      {
        q: "Q2·Q3·Q4 교통",
        cat: "돌발",
        issue:
          "Q2는 교통수단을 나열만 하고 설명이 없음. Q3·Q6에서 'I used to take / I used to living alone'처럼 used to를 습관 표현으로 오용. Q4는 구체적 사건 없이 붐빈다는 말만 반복",
        fix: "나열 후 한 종류에 설명 1~2문장. 현재 습관은 I usually take. Q4는 '어느 날 아침 열차가 너무 붐볐다'를 한 가지 사건으로",
      },
      {
        q: "Q5 집",
        cat: "서베이",
        issue:
          "층수를 '50, 5, 15'로 바꿔 말해 혼란을 줌. 'That's why I love my living room'을 세 번 반복",
        fix: "층수는 하나로 고정(예: 15th floor). 같은 마무리 문장은 한 번만",
      },
      {
        q: "Q9·Q10 여행",
        cat: "서베이",
        issue:
          "Q9는 한 일이 'good cultural experience'로 모호하고, Q10은 'we climbing', 'we watching'처럼 be 동사가 빠지고 문장이 끊긴 채 끝남",
        fix: "과거 이야기는 We climbed / We watched로. 마지막 문장은 '가장 좋아하는 추억이에요'로 닫기",
      },
      {
        q: "Q14 카페",
        cat: "돌발",
        issue: "질문은 '우리나라 카페들'인데 집 근처 카페 한 곳만 말함",
        fix: "전체(어디에나 있다, 프랜차이즈와 동네 카페) → 사람들 → 내가 가는 곳 순서 (복기 세트 Q14)",
      },
      {
        q: "전체 문법",
        cat: "공통",
        issue:
          "'Our country have', 'It had a big TV'(현재 설명에 과거형), 'reservated', 'we climbing', 'a car accident in two hours ago'",
        fix: "3개만 고정: 3인칭 단수(has), -ing 앞 be 동사, 과거는 -ed(reserved). 현재 설명은 현재형",
      },
    ],
    actions: [
      "질문하기 롤플레이는 3회 연속 약점이므로 최우선: Where / What / How / When 4개를 질문 문장으로 말하는 연습을 하루 10분 (생일 파티·카페 직원·MP3 번갈아)",
      "역할 확인: 질문이 끝나면 '내가 누구에게 무엇을 하는지' 한 문장 생각 후 시작 (Q15처럼 손님이 되지 않기)",
      "문제 해결 롤플레이: 첫마디는 'Hi, it's ...'. 'call me' 금지. 변명은 교통사고 말고 가벼운 이유, 대안은 First/Second/Third 3개",
      "자기소개 5문장 고정(직업→집→취미→시험 이유→각오). 봐 달라는 부탁 금지",
      "used to 오용 고정: 지금 습관은 I usually ~, 과거 습관만 used to",
    ],
  },
  {
    date: "2026-10-21",
    title: "4회차 모의시험 (15문제)",
    set: 3,
    grade: "IM1 후반 (IM2 경계, 3회차와 비슷)",
    summary:
      "새 서베이 주제(휴대폰, 음악)에서 이야기가 나오고 음악 두 문제(Q8·Q9)는 지금까지 가장 좋은 답이었음. 롤플레이 11번에서 처음으로 진짜 질문을 여러 개 함. 반면 Q14 공원 비교에서 약 1분간 '설명 못 하겠다'로 포기했고, Q12는 '늦게 도착' 상황을 '못 간다'로 바꿔 도착 시간 대안이 없으며 'Can you call me now?'와 accident 변명이 3회 연속 반복됨. Q7은 '문제가 없었다'로 또 회피함. 녹취록 기준 평가라 발음·억양·침묵은 반영되지 않음. 가수·앨범·지명 같은 STT 오인식은 감점하지 않음.",
    good: [
      "Q8 음악: 장르 → 최근 듣는 가수 → 앨범 → 이유('편안해진다') → 마무리가 순서대로 이어짐. 지금까지 가장 안정적인 답",
      "Q9 음악 취향 변화: 고등학교 때 집중하려고 시작 → 힙합 → 방해돼서 클래식·재즈로 변화. 질문의 두 부분(계기, 변화)에 모두 답함",
      "Q11 롤플레이: Where / What should I bring / dress code / present 등 실제 질문을 여러 개 함 (3회차의 진술형에서 개선)",
      "Q13 추석 계획 취소: 상황 → 행동 → 사과 → 교훈('계획은 유연해야 한다')이 있는 이야기",
      "Q15: 문제(주차 부족) → 제약(서울은 복잡) → 해결(주차 건물, 차량 감소)로 문제·해결 구조를 지킴",
    ],
    problems: [
      {
        q: "Q14 공원 비교",
        cat: "돌발",
        issue:
          "'이 주제는 어려워서 설명할 수 없다'를 두 번 말하고 비교 자체를 시작하지 못함. 약 1분을 잃음",
        fix: "모르는 주제는 내가 아는 두 곳(옛집 근처 공원 + 서울숲)으로 정해 '공통점 → 차이점 → 더 좋은 쪽과 이유' 틀로 말하기 (복기 세트 Q14)",
      },
      {
        q: "Q12 롤플레이 (늦게 도착)",
        cat: "롤플레이",
        issue:
          "가는 길에 늦는 상황인데 '못 간다'고 취소하고 선물만 보내겠다고 함. 도착 시간 대안 없음. 'Can you call me now?'는 2·3회차에 이어 3회 연속, accident 변명도 3회 연속",
        fix: "Hi, it's ... 로 시작. 차 고장 → 늦음 → First(택시로 1시간 뒤) / Second(디저트부터 합류) / Third(내일) 3개 (복기 세트 Q12)",
      },
      {
        q: "Q7 휴대폰 문제",
        cat: "서베이",
        issue:
          "'문제가 없었다, 있다면 서비스센터에 맡겼을 것'이라는 가정으로 답함. 2회차 Q7(집 문제)과 같은 회피",
        fix: "문제 경험 질문에는 없다고 하지 않고 준비한 이야기 하나(화면 파손 → 서비스센터 → 교체 → 케이스 사용)로 답하기",
      },
      {
        q: "Q1 자기소개",
        cat: "서베이",
        issue: "4회 연속 'please easy on me'. 직업·집·취미 소개 없음",
        fix: "직업 → 사는 곳 → 취미 → 시험 이유 → 각오 5문장. 부탁은 하지 않기",
      },
      {
        q: "Q3 집에서의 일과",
        cat: "서베이",
        issue:
          "평일 아침 이후 평일 저녁과 주말 활동이 없고 '일정·건강·기분에 따라 다르다'로 모호하게 끝남. 마지막이 'I love we can I love we can but'으로 끊김",
        fix: "평일 아침 → 평일 저녁 → 주말 활동 순서로 한 문장씩 (복기 세트 Q3)",
      },
      {
        q: "Q5·Q6 휴대폰",
        cat: "서베이",
        issue:
          "Q5는 문장이 흩어지고 usable만 반복. Q6은 외관 설명 없이 'good design as a,'에서 끊김",
        fix: "가장 좋은 점 한 가지(휴대성)를 정하고 이유 → 쓰임 2개 → 마무리. Q6은 도입 → 외관 → 기능 → 차이",
      },
      {
        q: "Q11 롤플레이 (명절 모임)",
        cat: "롤플레이",
        issue:
          "질문은 나왔지만 시작이 'Oh I know okay Hey', '언제 도착할까' 질문이 빠짐, 'What should I gather', 'match dress code'는 어색, 마무리가 'a very big chance to meet people'로 엇나감",
        fix: "Hi, it's ... → Where / What time / What should I bring / Is there a dress code → 마무리 (복기 세트 Q11)",
      },
      {
        q: "Q2·Q4·Q10 사실 불일치",
        cat: "공통",
        issue:
          "층수('50'), 방 개수(3회차 4개 → 이번 5개), 공연 시기('two years ago → one year ago')가 말할 때마다 달라짐",
        fix: "자주 쓰는 사실은 하나로 고정(15th floor, 방 개수, 공연 시기)",
      },
      {
        q: "전체 마무리",
        cat: "공통",
        issue: "Q2, Q3, Q6, Q10, Q12 등 여러 답이 문장 중간에서 끊기거나 'So I, I like'로 끝남",
        fix: "모든 답의 마지막 문장을 'That's why ...' 한 줄로 정해 두고 거기까지 가서 끝내기",
      },
    ],
    actions: [
      "모르는 주제 대비: 비교 틀(Both ... However ... I prefer ... because)을 아는 장소 두 곳으로 3번 말해 보기. 'I can't explain' 금지",
      "롤플레이 12: 늦게 도착하는 상황은 취소가 아니라 도착 시간 대안 3개(First/Second/Third). 첫마디 'Hi, it's ...', 'call me'와 accident 금지(차 고장·택시)",
      "'문제 겪은 적 있나요' 질문용 준비 이야기 2개(휴대폰 화면 파손, TV 고장)를 외워 두고 없다고 말하지 않기",
      "자기소개 5문장(직업→집→취미→시험 이유→각오) 외우기. 4회 연속이었던 부탁은 하지 않기",
      "모든 답의 마지막 문장을 'That's why ...' 같은 닫는 문장으로 고정하고 끊기지 않게 끝내기",
    ],
  },
  {
    date: "2026-10-21",
    title: "4회차 재시험 (15문제, 같은 문제 세트)",
    set: 4,
    grade: "IM1 후반 ~ IM2 경계 (4회차보다 소폭 상승)",
    summary:
      "같은 문제를 다시 본 결과, 4회차에서 무너졌던 부분이 상당히 회복됐음. Q7은 회피 대신 휴대폰 파손 → 서비스센터 → 보증 수리 이야기를 했고, Q14는 포기하지 않고 두 공원을 비교했으며, Q11은 지금까지 가장 좋은 질문형 롤플레이였음. Q5는 폴드7, 러닝머신 공부, 풍경 사진 취미로 구체적이었고 Q8·Q9·Q10도 실리카겔 이야기로 한결같이 이어졌음. 남은 약점은 Q12(도착 시간 대안 없이 '못 간다'고 하며 accident 반복), Q1(등급 부탁, 소개 없음), 문장 중간에서 끊기는 마무리, 문법(live in alone, -ing 앞 be 누락, used to 오용)임. 녹취록 기준 평가라 발음·억양·침묵은 반영되지 않았고 밴드명·'50 floor' 같은 STT 오인식은 감점하지 않음.",
    good: [
      "Q7 휴대폰 문제: 상황(떨어뜨려 화면 파손) → 행동(서비스센터) → 결과(수리 후 배송, 보증) 구조로 회피 없이 답함. 4회차의 가장 큰 약점이 해결됨",
      "Q14 공원 비교: 포기하지 않고 큰 공원(100m 트랙, 경치)과 집 근처 작은 공원을 비교하고 더 좋아하는 쪽과 이유를 말함",
      "Q11 롤플레이: 위치·시간, 시작 시각, 선물, 행사 내용, 드레스 코드까지 실제 질문 5개 이상. 가장 좋은 질문형 답",
      "Q5·Q8·Q10: 폴드7, 러닝머신에서 머신러닝 공부, 풍경 사진, 실리카겔 콘서트처럼 내 이야기가 구체적이고 'That's why'로 마무리하려는 습관이 보임",
      "Q4: 옛집을 방·발코니·욕실 수까지 구체적으로 묘사하고 작은 공원 이야기까지 이어 감",
    ],
    problems: [
      {
        q: "Q12 롤플레이 (늦게 도착)",
        cat: "롤플레이",
        issue:
          "'가는 길'인 상황에서 '못 간다'고 하며 예약·영수증 이야기만 함. 도착 시간 대안 2~3개가 없음. accident 변명이 4회 연속이고 마무리도 'if I finish the happen I will call you'로 엇나감",
        fix: "Hi, it's ... → 차 고장 → 늦음 → First(택시로 1시간 뒤) / Second(디저트부터 합류) / Third(내일) 3개 → 어느 쪽이 좋은지 질문 (복기 세트 Q12)",
      },
      {
        q: "Q1 자기소개",
        cat: "서베이",
        issue:
          "5회 연속으로 등급을 높게 받고 싶다고 말하고 직업 외 소개가 없음. 'So that's all that's it that's it'로 끝남",
        fix: "인사 → 직업 → 집·취미 → 시험 이유 → 각오 5문장. 등급 부탁은 하지 않기 (복기 세트 Q1)",
      },
      {
        q: "Q3 집에서의 일과",
        cat: "서베이",
        issue:
          "'누구와 무엇을' 질문에 혼자 게임한다는 말만 반복하고 마지막이 'I want to living with her'로 끊김. 같이 하는 사람이 없을 때는 혼자 하는 활동 2~3개를 말해야 함",
        fix: "혼자 산다 → 활동 1(게임) → 활동 2(영화·사진 편집) → 바람 → 마무리 (복기 세트 Q3)",
      },
      {
        q: "Q6 첫 휴대폰",
        cat: "서베이",
        issue:
          "질문의 마지막 '지금 폰과 어떻게 다른가'에 'has a lot of functions' 한 줄만 말함. 문장이 'it was usable it'에서 끊김",
        fix: "도입 → 외관 → 기능 → 지금 폰과의 차이 → 마무리 순서로 한 문장씩 (복기 세트 Q6)",
      },
      {
        q: "Q13·Q15 마무리",
        cat: "돌발",
        issue:
          "Q13은 'We just be understood from them'로, Q15는 'P building can make people to parking and parking...'로 같은 말을 반복하며 끝남. Q15는 해결책이 한 가지뿐",
        fix: "해결책은 'One solution... Another is...' 두 개를 만들고 마지막은 'That's why ...' 한 줄로 닫기",
      },
      {
        q: "Q2·Q4·Q10 사실 불일치",
        cat: "공통",
        issue: "공연 시기가 4회차(two years ago)와 이번(one year ago)에 다름. 층수는 '50'으로 들림",
        fix: "공연은 '1년 전'으로 고정, 층수는 15th floor로 고정(fifteenth를 또박또박)",
      },
      {
        q: "문법 · 공통",
        cat: "공통",
        issue:
          "live in alone, I really into(be 누락), I used to spend(현재 습관에 used to), I enjoyed the playing game(관사·형태), I went to alone(전치사)가 반복됨",
        fix: "고정 문장 5개: I live alone / I'm really into ... / I usually ... / I enjoy playing ... / I went there alone",
      },
    ],
    actions: [
      "롤플레이 12: 차 고장으로 늦을 때는 취소가 아니라 도착 시간 대안 3개(First/Second/Third)로 말하기. 'accident'와 'Can you call me now?'는 금지",
      "자기소개 5문장(직업→집·취미→시험 이유→각오) 외우기. 등급이나 봐 달라는 부탁은 하지 않기",
      "모든 답의 마지막 문장을 'That's why ...'로 정해 두고 끊기지 않게 끝내기 (Q3, Q4, Q6, Q13, Q15가 중간에 끊김)",
      "문법 고정 문장 5개(live alone / really into / usually / enjoy playing / went there alone)를 하루 3번 소리 내어 말하기",
      "사실 고정: 15th floor, 공연은 1년 전 실리카겔, 폰은 폴드7. 매번 같은 사실로 말하기",
    ],
  },
  {
    date: "2026-10-21",
    title: "5회차 모의시험 (15문제, 음악·건강·여행)",
    set: 5,
    grade: "IM1 중반 (4회차보다 한 단계 낮음)",
    summary:
      "본인 말처럼 '쉬운 문장을 여러 번 말하면 되는데, 전하고 싶은 메시지가 영어 실력보다 어려운' 시험이었음. 'the wrong music make me more energetic and funny and fun and exciting', 'I realized that I was very fat and ugly' 같은 한 문장에 여러 생각을 넣으려다 문장이 무너지고 'I mean', 'that I, that I'로 재시작하는 곳이 많았음. 롤플레이 11은 질문 대신 '환영한다, 음식을 만들어 주겠다'고 말했고(질문 0개), 롤플레이 12는 '아픈 사람이 친구'라고 오해해서 대안도 말하지 못함. 반면 Q6(단 것을 좋아해 살쪘다가 운동), Q7(코로나), Q13(제주 가족여행에서 동생이 아파 돈가스를 포장)처럼 내 이야기가 있는 답은 이해 가능했음. 녹취록 기준 평가라 발음·억양·침묵은 반영되지 않았고 'Silica Gel'이 Philip Kuger 등으로 적힌 STT 오인식은 감점하지 않음.",
    good: [
      "Q13 가족 병환으로 취소한 경험: 제주, 동생 복통, 예약 취소, 포장한 돈가스를 호텔에서 먹음. 상황 → 대처 → 결과가 순서대로 이어진 가장 좋은 답",
      "Q6 건강 생각 변화: 어릴 때 단 걸 좋아해 살쪘고 → 단 걸 끊고 운동(주 2회)하며 단백질을 챙김. 과거와 현재가 대비됨",
      "Q7 코로나 경험: 맛을 못 느끼고 혼자 방에 있었던 이야기가 구체적임 (마무리는 약함)",
      "Q3 음악 즐기기: 거실, 음향 장비, 콘서트, 재즈 클럽까지 질문의 세 가지(어디서·콘서트·방법)에 모두 답함",
      "Q14: 작은 마을과 대도시를 비교하고 어느 쪽을 선호하는지까지 말함",
    ],
    problems: [
      {
        q: "전체: 어려운 메시지를 한 문장에 담으려 함",
        cat: "공통",
        issue:
          "'the wrong music make me more energetic and funny and fun and exciting', 'I realized that I was very fat and ugly', 'they always eat nutrition food and balanced food of all kinds of grocery'처럼 한 문장에 생각을 3~4개 넣다가 문법이 무너지고 'I mean', 'that I, that I'로 다시 시작함",
        fix: "한 문장에 생각 하나, 10단어 이내. 'Rock makes me energetic.' → 'It makes me feel better.' 처럼 쉬운 문장을 이어서 말하기 (복기 세트 전체가 이 방식)",
      },
      {
        q: "Q11 롤플레이 (점심 초대 질문)",
        cat: "롤플레이",
        issue:
          "질문하는 과제인데 'Welcome my house, I will make for you, I really want to eat your food'처럼 환영 인사만 함. 날짜·시간 질문이 0개",
        fix: "Which day is good? What time is good? Any food you can't eat? How many people? 4문장을 'wh-단어 + is/are'로 만들기 (복기 세트 Q11)",
      },
      {
        q: "Q12 롤플레이 (가족이 아파서 취소)",
        cat: "롤플레이",
        issue:
          "우리 가족이 아픈 상황인데 '친구가 아프다'로 이해하고 'I will send a doctor, juke or soup'이라고 함. 취소 사실을 말하지 않았고 앞으로 만날 대안도 없음",
        fix: "Hi, it's ... → 못 가는 이유(동생이 아프다) → First 다음 주 토요일 / Second 이번 주말 저녁 → 전화 부탁. 'someone in your family'는 내 가족임을 확인 (복기 세트 Q12)",
      },
      {
        q: "Q1 자기소개",
        cat: "서베이",
        issue:
          "이름이 'Hyun Kina'로 들림. 직업 외에 집·취미 소개가 없고 '시험이 첫 시험이라 긴장된다'만 말함. 이번에는 점수를 봐 달라는 부탁은 하지 않음(개선)",
        fix: "인사 → 직업 → 집·취미 → 시험 이유 → 각오 5문장 (복기 세트 Q1)",
      },
      {
        q: "Q9·Q10 해외여행",
        cat: "서베이",
        issue:
          "Q9는 'I can't remember the experience well'이라 하며 구체적 한 일이 없음. Q10은 'I really need to'에서 끊기고 대회 이야기가 몇 문장뿐임. 비슷한 단어(Vatican = Barkan city)도 틀림",
        fix: "기억이 흐릿해도 본 것·먹은 것·느낀 점 3개를 정해 두고 말하기. Q10은 언제·어디·무슨 일·왜 기억에 남나 4칸으로",
      },
      {
        q: "Q4·Q7·Q8 마무리",
        cat: "서베이",
        issue:
          "Q4는 고등학교 이야기만 하고 현재 취향이 빠짐. Q7은 'times made me a pure'로 끝남. Q8은 'there are many tourists'를 두 번 반복",
        fix: "각 답의 마지막은 'That's why ...' 또는 'Since then, ...' 한 줄로 닫기",
      },
      {
        q: "Q15 모임의 문제",
        cat: "돌발",
        issue:
          "'노인에게 해당하는 문제'로 시작해 big city events를 말하다 'I need to scheduling a lot of people. I.'로 끊김. 문제 → 해결 구조가 없음",
        fix: "'Yes, there are some problems. First... Second... People usually...' 틀로 말하기 (복기 세트 Q15)",
      },
      {
        q: "문법 · 공통",
        cat: "공통",
        issue:
          "I really into(be 누락), I used to listen(현재 습관), I went to concert(관사), I enjoyed the playing, I have eaten a switch(sweets), I needed to focusing(to + 동사원형) 등이 반복됨",
        fix: "고정 문장: I like ... / I'm really into ... / I usually ... / I went to a ... / I need to focus",
      },
    ],
    actions: [
      "가장 중요한 한 가지: 한 문장 = 한 생각, 10단어 이내. 어려운 단어를 찾다 멈추지 말고 아는 단어로 바꿔 말하기 (예: nutrition food → healthy food, contagious → I had to stay alone)",
      "롤플레이 11(질문하기)은 wh-질문 4개를 외우고, 12(문제+대안)는 '이유 → First → Second → 부탁' 틀을 외우기",
      "롤플레이 문제를 들으면 누구의 일인지부터 확인하기(내 가족이 아픈 것). 헷갈리면 'my brother' 같은 인물을 정해서 시작",
      "자기소개와 각 답의 마지막 문장 고정: 'That's why ...'. 끊기지 않게 짧게 끝내기",
      "내일 복습: 5회차 복기 세트의 Q2·Q6·Q13·Q11·Q12를 소리 내어 3번씩, 쉬운 문장으로",
    ],
  },
];

/* 필수 표현 (기본 25개 + 감정·의견·시간·이유·평가 20개): 문장을 시작하는 틀. 예시 문장은 내 상황에 맞춘 연습용 예문
   형식: {grp 묶음, items:[{en 표현, ko 쓰는 때, ex:[예문 영어, 예문 한글]}]} */
const PHRASES = [
  {
    grp: "일상 행동 · 선호도",
    items: [
      {
        en: "I usually go to",
        ko: "보통 어디에 가는지 말할 때",
        ex: [
          "I usually go to a cafe near my office after lunch.",
          "점심 후에 보통 회사 근처 카페에 가요.",
        ],
      },
      {
        en: "I'm really into",
        ko: "무엇에 빠져 있는지(취미 등) 말할 때",
        ex: [
          "I'm really into playing online games these days.",
          "요즘 온라인 게임에 푹 빠져 있어요.",
        ],
      },
      {
        en: "There is a",
        ko: "주변에 무엇이 있는지 설명할 때",
        ex: ["There is a small park near my house.", "우리 집 근처에는 작은 공원이 있어요."],
      },
      {
        en: "I wanna",
        ko: "무엇을 하고 싶은지 말할 때 (구어체, I want to와 같음)",
        ex: ["I wanna travel to Jeju Island again.", "제주도에 다시 여행 가고 싶어요."],
      },
      {
        en: "I have a",
        ko: "가지고 있는 것을 설명할 때",
        ex: [
          "I have a big TV and a computer in my living room.",
          "거실에 큰 TV와 컴퓨터가 있어요.",
        ],
      },
    ],
  },
  {
    grp: "경험 · 상태",
    items: [
      {
        en: "I went to",
        ko: "과거에 다녀온 곳을 말할 때",
        ex: ["I went to Jeju Island two years ago.", "2년 전에 제주도에 갔어요."],
      },
      {
        en: "It was",
        ko: "당시의 기분이나 상태를 설명할 때",
        ex: ["It was a really relaxing trip.", "정말 편안한 여행이었어요."],
      },
      {
        en: "I had to",
        ko: "무엇을 해야만 했는지 설명할 때",
        ex: [
          "I had to go back to the restaurant to get my wallet.",
          "지갑을 찾으러 식당에 돌아가야 했어요.",
        ],
      },
      {
        en: "I stayed at",
        ko: "머물렀던 장소를 말할 때",
        ex: ["I stayed at a hotel in Seogwipo.", "서귀포의 한 호텔에 머물렀어요."],
      },
      {
        en: "I'm planning to",
        ko: "계획 중인 일을 말할 때",
        ex: [
          "I'm planning to visit my parents this weekend.",
          "이번 주말에 부모님을 찾아뵐 계획이에요.",
        ],
      },
    ],
  },
  {
    grp: "습관 · 빈도",
    items: [
      {
        en: "I need to",
        ko: "해야 할 일을 말할 때",
        ex: ["I need to finish my work before the weekend.", "주말 전에 일을 끝내야 해요."],
      },
      {
        en: "I often",
        ko: "자주 하는 행동을 말할 때",
        ex: ["I often meet my friends for dinner.", "저는 친구들과 자주 저녁을 먹어요."],
      },
      {
        en: "I sometimes",
        ko: "가끔 하는 행동을 말할 때",
        ex: ["I sometimes cook with my mother.", "가끔 어머니와 같이 요리해요."],
      },
      {
        en: "It takes",
        ko: "시간이 얼마나 걸리는지 말할 때",
        ex: ["It takes about thirty minutes by subway.", "지하철로 30분쯤 걸려요."],
      },
      {
        en: "I was",
        ko: "과거의 감정 상태를 말할 때",
        ex: [
          "I was so embarrassed when I lost my wallet.",
          "지갑을 잃어버렸을 때 정말 당황했어요.",
        ],
      },
    ],
  },
  {
    grp: "기타 필수 표현",
    items: [
      {
        en: "I didn't",
        ko: "하지 않았던 일을 말할 때",
        ex: ["I didn't know that I had left my wallet.", "지갑을 두고 온 줄 몰랐어요."],
      },
      {
        en: "I always",
        ko: "항상 하는 행동을 말할 때 (남발하지 말기)",
        ex: ["I always check my reservation twice.", "저는 예약을 항상 두 번 확인해요."],
      },
      {
        en: "I get",
        ko: "상태가 어떻게 변하는지 말할 때",
        ex: ["I get tired after a long day of work.", "하루 종일 일하면 피곤해져요."],
      },
      {
        en: "I prefer",
        ko: "더 선호하는 것을 말할 때",
        ex: ["I prefer staying home to going out.", "외출보다 집에 있는 걸 더 좋아해요."],
      },
      {
        en: "I enjoyed",
        ko: "즐겼던 경험을 말할 때",
        ex: ["I enjoyed the cocktail a lot.", "그 칵테일이 정말 좋았어요."],
      },
      {
        en: "I take",
        ko: "교통수단을 이용할 때",
        ex: ["I take the subway to work every day.", "저는 매일 지하철로 출근해요."],
      },
      {
        en: "I visit",
        ko: "방문하는 곳을 말할 때",
        ex: ["I visit my parents' house once a month.", "한 달에 한 번 부모님 댁에 가요."],
      },
      {
        en: "It is",
        ko: "날씨나 상태를 설명할 때",
        ex: ["It is sunny and warm today.", "오늘은 맑고 따뜻해요."],
      },
      {
        en: "I'd like to",
        ko: "~하고 싶다고 정중하게 말할 때",
        ex: ["I'd like to buy two tickets, please.", "표 두 장을 사고 싶어요."],
      },
      {
        en: "And then I",
        ko: "순서를 이어갈 때",
        ex: ["And then I went back to the restaurant.", "그러고 나서 식당으로 돌아갔어요."],
      },
    ],
  },
  {
    grp: "감정 · 태도",
    items: [
      {
        en: "I get ... when...",
        ko: "~할 때 ~한 기분이 들어요",
        ex: [
          "I get nervous when I speak English in front of people.",
          "사람들 앞에서 영어로 말하면 긴장돼요.",
        ],
      },
      {
        en: "I can't stand",
        ko: "~하는 게 너무 싫어요",
        ex: ["I can't stand waiting in long lines.", "긴 줄에서 기다리는 게 너무 싫어요."],
      },
      {
        en: "I don't mind",
        ko: "~하는 거 괜찮아요 / 신경 안 써요",
        ex: ["I don't mind working late sometimes.", "가끔 늦게까지 일하는 건 괜찮아요."],
      },
      {
        en: "I'm used to",
        ko: "~에 익숙해요",
        ex: ["I'm used to waking up early for work.", "일 때문에 일찍 일어나는 데 익숙해요."],
      },
    ],
  },
  {
    grp: "솔직한 의견 · 습관",
    items: [
      {
        en: "To be honest,",
        ko: "솔직히 말하면",
        ex: [
          "To be honest, I'm not a big fan of crowded places.",
          "솔직히 말하면 사람 많은 곳은 별로 안 좋아해요.",
        ],
      },
      {
        en: "I try to",
        ko: "~하려고 노력해요",
        ex: [
          "I try to exercise at least twice a week.",
          "일주일에 적어도 두 번은 운동하려고 노력해요.",
        ],
      },
      {
        en: "It depends on",
        ko: "~에 따라 달라요",
        ex: ["It depends on my schedule.", "제 일정에 따라 달라요."],
      },
      {
        en: "Most of the time, I",
        ko: "대부분 저는 ~해요",
        ex: ["Most of the time, I eat dinner at home.", "대부분 저는 집에서 저녁을 먹어요."],
      },
    ],
  },
  {
    grp: "상황 · 시간",
    items: [
      {
        en: "Out of nowhere,",
        ko: "갑자기 / 뜬금없이",
        ex: [
          "Out of nowhere, it started to rain heavily.",
          "갑자기 비가 세차게 내리기 시작했어요.",
        ],
      },
      {
        en: "Make time for",
        ko: "~할 시간을 만들다",
        ex: [
          "I try to make time for my friends even when I'm busy.",
          "바빠도 친구들을 위한 시간을 만들려고 해요.",
        ],
      },
      {
        en: "After that,",
        ko: "그다음에",
        ex: ["After that, we went to a restaurant nearby.", "그다음에 우리는 근처 식당에 갔어요."],
      },
      {
        en: "As soon as I",
        ko: "~하자마자",
        ex: [
          "As soon as I got home, I realized I had lost my wallet.",
          "집에 오자마자 지갑을 잃어버린 걸 알았어요.",
        ],
      },
    ],
  },
  {
    grp: "이유 · 인과관계",
    items: [
      {
        en: "Whenever I ..., I ...",
        ko: "~할 때마다 ~해요",
        ex: [
          "Whenever I feel stressed, I play online games.",
          "스트레스를 받을 때마다 온라인 게임을 해요.",
        ],
      },
      {
        en: "That's why",
        ko: "그래서 ~한 거예요",
        ex: [
          "That's why I always double-check my reservations.",
          "그래서 저는 예약을 항상 다시 확인해요.",
        ],
      },
      {
        en: "It helps me",
        ko: "~하는 걸 도와줘요",
        ex: ["Music helps me relax after work.", "음악은 퇴근 후에 쉬는 데 도움이 돼요."],
      },
      {
        en: "Since I",
        ko: "~하기 때문에",
        ex: [
          "Since I live alone, I cook simple meals.",
          "혼자 살기 때문에 간단한 음식을 해 먹어요.",
        ],
      },
    ],
  },
  {
    grp: "선호 · 평가",
    items: [
      {
        en: "One of my favorite ... is ...",
        ko: "제가 가장 좋아하는 ~ 중 하나는 ~예요",
        ex: [
          "One of my favorite places is a small cafe near my house.",
          "제가 가장 좋아하는 곳 중 하나는 집 근처 작은 카페예요.",
        ],
      },
      {
        en: "The biggest reason is that",
        ko: "가장 큰 이유는 ~기 때문이에요",
        ex: [
          "The biggest reason is that it's quiet and comfortable.",
          "가장 큰 이유는 조용하고 편안하기 때문이에요.",
        ],
      },
      {
        en: "It seemed",
        ko: "~인 것 같았어요",
        ex: [
          "It seemed very expensive, so I just looked around.",
          "아주 비싸 보여서 그냥 구경만 했어요.",
        ],
      },
      {
        en: "It's one of the most ...",
        ko: "가장 ~한 ~ 중 하나예요",
        ex: [
          "It's one of the most beautiful places I've ever visited.",
          "제가 가 본 가장 아름다운 곳 중 하나예요.",
        ],
      },
    ],
  },
  {
    grp: "시작어 · I …",
    items: [
      {
        en: "I found",
        ko: "~을 발견했어요, ~을 알게 됐어요",
        ex: ["I found a nice cafe near my office.", "회사 근처에서 좋은 카페를 발견했어요."],
      },
      {
        en: "I realized",
        ko: "~을 깨달았어요",
        ex: ["I realized I left my wallet at home.", "지갑을 집에 두고 온 걸 깨달았어요."],
      },
      {
        en: "I called",
        ko: "~에게 전화했어요",
        ex: ["I called the hotel right away.", "바로 호텔에 전화했어요."],
      },
      {
        en: "I asked",
        ko: "~에게 물어봤어요, 요청했어요",
        ex: ["I asked for a new room.", "새 방을 요청했어요."],
      },
      {
        en: "I felt",
        ko: "~하게 느꼈어요",
        ex: ["I felt really nervous.", "정말 긴장됐어요."],
      },
      {
        en: "I think",
        ko: "~라고 생각해요",
        ex: ["I think it was a good choice.", "좋은 선택이었다고 생각해요."],
      },
      {
        en: "I love",
        ko: "~을 아주 좋아해요",
        ex: ["I love walking in the park.", "공원 걷는 걸 아주 좋아해요."],
      },
      {
        en: "I started",
        ko: "~을 시작했어요",
        ex: ["I started exercising last month.", "지난달부터 운동을 시작했어요."],
      },
      {
        en: "I decided",
        ko: "~하기로 했어요",
        ex: ["I decided to take a day off.", "하루 쉬기로 했어요."],
      },
      {
        en: "I remember",
        ko: "~이 기억나요",
        ex: ["I remember a bar near my house.", "집 근처 바가 기억나요."],
      },
      {
        en: "I used to",
        ko: "예전에는 ~하곤 했어요",
        ex: ["I used to play outside every day.", "예전에는 매일 밖에서 놀곤 했어요."],
      },
      {
        en: "I live",
        ko: "~에 살아요",
        ex: ["I live alone in an apartment.", "아파트에서 혼자 살아요."],
      },
      {
        en: "I work",
        ko: "~에서 일해요",
        ex: ["I work in Yeouido.", "여의도에서 일해요."],
      },
      {
        en: "I met",
        ko: "~를 만났어요",
        ex: ["I met my friends at the station.", "역에서 친구들을 만났어요."],
      },
      {
        en: "I bought",
        ko: "~을 샀어요",
        ex: ["I bought a gift for my friend.", "친구에게 줄 선물을 샀어요."],
      },
    ],
  },
  {
    grp: "시작어 · There / It / We / My",
    items: [
      {
        en: "There was",
        ko: "~가 있었어요",
        ex: ["There was a small park near my old house.", "옛집 근처에 작은 공원이 있었어요."],
      },
      {
        en: "There are",
        ko: "~가 있어요 (여러 개)",
        ex: ["There are many cafes around here.", "이 근처에는 카페가 많아요."],
      },
      {
        en: "It looked",
        ko: "~해 보였어요",
        ex: ["It looked fancy.", "고급스러워 보였어요."],
      },
      {
        en: "It's about",
        ko: "~쯤이에요 (거리·시간)",
        ex: ["It's about ten minutes away.", "10분쯤 거리예요."],
      },
      {
        en: "It made me",
        ko: "~하게 만들었어요",
        ex: ["It made me really happy.", "정말 행복하게 해 줬어요."],
      },
      {
        en: "It happened",
        ko: "~한 일이 있었어요",
        ex: ["It happened two years ago.", "2년 전에 있었던 일이에요."],
      },
      {
        en: "We usually",
        ko: "우리는 보통 ~해요",
        ex: ["We usually meet once a month.", "우리는 보통 한 달에 한 번 만나요."],
      },
      {
        en: "My favorite",
        ko: "제가 가장 좋아하는 ~는",
        ex: ["My favorite room is the living room.", "제일 좋아하는 방은 거실이에요."],
      },
      {
        en: "My friend",
        ko: "제 친구가 ~",
        ex: ["My friend invited me to a party.", "친구가 파티에 초대했어요."],
      },
      {
        en: "Now I",
        ko: "지금은 ~해요",
        ex: ["Now I usually stay at home.", "지금은 보통 집에 있어요."],
      },
    ],
  },
  {
    grp: "시작어 · 이야기 이어가기",
    items: [
      {
        en: "Recently,",
        ko: "최근에",
        ex: ["Recently, I went to a concert.", "최근에 콘서트에 갔어요."],
      },
      {
        en: "One day,",
        ko: "어느 날",
        ex: ["One day, it suddenly started raining.", "어느 날 갑자기 비가 오기 시작했어요."],
      },
      {
        en: "Last year,",
        ko: "작년에",
        ex: ["Last year, I traveled to Jeju Island.", "작년에 제주도로 여행을 갔어요."],
      },
      {
        en: "When I was young,",
        ko: "어릴 때",
        ex: ["When I was young, I loved sweets.", "어릴 때 단 걸 좋아했어요."],
      },
      {
        en: "In the end,",
        ko: "결국",
        ex: ["In the end, everything turned out fine.", "결국 모든 게 잘 해결됐어요."],
      },
      {
        en: "Also,",
        ko: "또한",
        ex: ["Also, it was very cheap.", "또한 아주 쌌어요."],
      },
      {
        en: "Because of that,",
        ko: "그 때문에",
        ex: ["Because of that, I was late.", "그 때문에 늦었어요."],
      },
      {
        en: "For example,",
        ko: "예를 들면",
        ex: ["For example, I go hiking on weekends.", "예를 들면 주말에 등산을 가요."],
      },
      {
        en: "Actually,",
        ko: "사실은",
        ex: ["Actually, I don't go there often.", "사실 그곳에 자주 가진 않아요."],
      },
      {
        en: "Overall,",
        ko: "전체적으로",
        ex: ["Overall, it was a great experience.", "전체적으로 좋은 경험이었어요."],
      },
    ],
  },
  {
    grp: "시작어 · 롤플레이·질문",
    items: [
      {
        en: "Can I",
        ko: "~해도 될까요?",
        ex: ["Can I change my reservation?", "예약을 변경해도 될까요?"],
      },
      {
        en: "Do you have",
        ko: "~있나요?",
        ex: ["Do you have any rooms left?", "남은 방이 있나요?"],
      },
      {
        en: "Would you",
        ko: "~해 주시겠어요? ~할래?",
        ex: ["Would you like to meet earlier?", "더 일찍 만날래?"],
      },
      {
        en: "Excuse me,",
        ko: "실례합니다",
        ex: ["Excuse me, I have a problem.", "실례합니다, 문제가 있어요."],
      },
      {
        en: "I was wondering",
        ko: "~인지 궁금해서요",
        ex: ["I was wondering if I can cancel.", "취소할 수 있는지 궁금해서요."],
      },
    ],
  },
  {
    grp: "새 표현 · 질문·요청",
    items: [
      {
        en: "Where is",
        ko: "~은 어디인가요?",
        ex: ["Where is the nearest station?", "가장 가까운 역이 어디인가요?"],
      },
      {
        en: "Do you know where",
        ko: "~이 어디인지 아시나요?",
        ex: ["Do you know where the restroom is?", "화장실이 어디인지 아시나요?"],
      },
      {
        en: "Could I get",
        ko: "~를 받을 수 있을까요?",
        ex: ["Could I get a receipt?", "영수증 주시겠어요?"],
      },
      {
        en: "Could you",
        ko: "~해주실 수 있나요?",
        ex: ["Could you open the window?", "창문 좀 열어주실 수 있나요?"],
      },
      {
        en: "I'm trying to find",
        ko: "~를 찾으려고 노력 중이다",
        ex: ["I'm trying to find the parking lot.", "주차장을 찾고 있어요."],
      },
      {
        en: "How do I",
        ko: "어떻게 ~하나요?",
        ex: ["How do I use this?", "이거 어떻게 사용하나요?"],
      },
      {
        en: "Why not try",
        ko: "~해보는 건 어때?",
        ex: ["Why not just ask directly?", "그냥 직접 물어보는 건 어때?"],
      },
      {
        en: "How come",
        ko: "왜? 어째서?",
        ex: ["How come you're not eating?", "왜 안 먹어?"],
      },
      {
        en: "What do you think about",
        ko: "~에 대해 어떻게 생각해?",
        ex: ["What do you think about my idea?", "내 생각에 대해 어떻게 생각해?"],
      },
      {
        en: "Then what about",
        ko: "그럼 ~는 어때?",
        ex: ["Then what about next week?", "그럼 다음 주는 어때?"],
      },
      {
        en: "Have you tried",
        ko: "~해봤니?",
        ex: ["Have you tried turning it off and on?", "껐다 켜봤니?"],
      },
      {
        en: "Have you been to",
        ko: "~에 가본 적 있니?",
        ex: ["Have you been to that cafe?", "그 카페에 가본 적 있니?"],
      },
      {
        en: "Where can I",
        ko: "어디서 ~ 할 수 있나요?",
        ex: ["Where can I exchange money here?", "여기서 어디서 환전할 수 있나요?"],
      },
      {
        en: "How long does it take",
        ko: "~가 얼마나 걸리나요?",
        ex: ["How long does it take to get downtown?", "시내까지 얼마나 걸리나요?"],
      },
      {
        en: "What if",
        ko: "만약 ~라면 어쩌지?",
        ex: ["What if I'm late?", "만약 내가 늦으면 어쩌지?"],
      },
      {
        en: "How long did it take",
        ko: "~가 얼마나 걸렸니?",
        ex: ["How long did it take to learn that?", "그거 배우는 데 얼마나 걸렸니?"],
      },
    ],
  },
  {
    grp: "새 표현 · 계획·상태·감정",
    items: [
      {
        en: "It's been",
        ko: "~한 지 ~가 되었다",
        ex: ["It's been 6 months since I moved here.", "여기 이사 온 지 6개월이 됐어."],
      },
      {
        en: "I feel like",
        ko: "~하고 싶다/기분이다",
        ex: ["I feel like going for a walk.", "산책하러 가고 싶어."],
      },
      {
        en: "I'll stick with",
        ko: "~로 할게/고수할게",
        ex: ["I'll stick with the original.", "원래 걸로 할게."],
      },
      {
        en: "I'm about to",
        ko: "막 ~하려던 참이다",
        ex: ["I'm about to head out.", "막 나가려던 참이야."],
      },
      {
        en: "I've got to",
        ko: "~해야만 한다",
        ex: ["I've got to go right now.", "지금 당장 가야 해."],
      },
      {
        en: "I'm supposed to",
        ko: "~하기로 되어 있다",
        ex: ["I'm supposed to be on a diet.", "나 다이어트 하기로 되어 있어."],
      },
      {
        en: "I was just about to",
        ko: "막 ~하려던 참이었다",
        ex: ["I was just about to order.", "막 주문하려던 참이었어."],
      },
      {
        en: "I'm all set to",
        ko: "~할 준비가 다 되었다",
        ex: ["I'm all set to leave.", "떠날 준비 다 됐어."],
      },
      {
        en: "I'm thinking about",
        ko: "~에 대해 생각 중이다",
        ex: ["I'm thinking about changing jobs.", "이직할까 생각 중이야."],
      },
      {
        en: "I'm able to",
        ko: "~할 수 있다",
        ex: ["I'm able to help tomorrow.", "내일 도울 수 있어."],
      },
      {
        en: "I don't think I can",
        ko: "~할 수 있을지 모르겠다",
        ex: ["I don't think I can make it today.", "오늘 못 갈 것 같아."],
      },
      {
        en: "Don't forget to",
        ko: "~하는 것을 잊지 마",
        ex: ["Don't forget to lock the door.", "문 잠그는 거 잊지 마."],
      },
      {
        en: "I'm working on",
        ko: "~을 작업/노력 중이다",
        ex: ["I'm working on improving my pronunciation.", "발음 고치려고 노력 중이야."],
      },
      {
        en: "I'm trying to avoid",
        ko: "~를 피하려고 노력 중이다",
        ex: ["I'm trying to avoid caffeine.", "카페인을 피하려고 노력 중이야."],
      },
      {
        en: "I'm getting",
        ko: "~해지고 있다",
        ex: ["I'm getting tired.", "피곤해지고 있어."],
      },
      {
        en: "I'm getting used to",
        ko: "~에 익숙해지고 있다",
        ex: ["I'm getting used to the new keyboard.", "새 키보드에 익숙해지고 있어."],
      },
      {
        en: "I've got",
        ko: "~가 있다",
        ex: ["I've got plans tonight.", "오늘 밤에 계획이 있어."],
      },
      {
        en: "I got to",
        ko: "~해야만 했다",
        ex: ["I got to hang up now.", "이제 끊어야 해."],
      },
      {
        en: "I'm okay",
        ko: "난 괜찮아",
        ex: ["I'm okay, thanks.", "난 괜찮아, 고마워."],
      },
      {
        en: "I've been",
        ko: "계속 ~해왔다",
        ex: ["I've been looking for this.", "계속 이걸 찾고 있었어."],
      },
      {
        en: "I'm considering",
        ko: "~를 고려 중이다",
        ex: ["I'm considering starting a YouTube channel.", "유튜브 채널 시작을 고려 중이야."],
      },
      {
        en: "I would",
        ko: "~할 것 같아/할게",
        ex: ["I would just wait.", "난 그냥 기다릴 것 같아."],
      },
      {
        en: "I'm obsessed with",
        ko: "~에 사로잡혀 있다/광적으로 좋아한다",
        ex: ["I'm obsessed with this song.", "이 노래에 완전히 꽂혔어."],
      },
      {
        en: "I've been busy",
        ko: "~하느라 바빴어",
        ex: ["I've been busy preparing for my move.", "이사 준비하느라 바빴어."],
      },
      {
        en: "I'm not sure if I should",
        ko: "~해도 될지 모르겠어",
        ex: ["I'm not sure if I should bring it up.", "그 이야기를 꺼내야 할지 모르겠어."],
      },
      {
        en: "I feel like I",
        ko: "내가 ~한 것 같은 기분이다",
        ex: ["I feel like I missed something.", "뭔가 놓친 것 같은 기분이야."],
      },
    ],
  },
  {
    grp: "새 표현 · 경험·의견·결과",
    items: [
      {
        en: "It's not about",
        ko: "~가 문제가 아니다",
        ex: ["It's not about the money.", "돈 문제가 아니야."],
      },
      {
        en: "It turns out",
        ko: "알고 보니 ~더라",
        ex: ["It turns out we went to the same school.", "알고 보니 우리 같은 학교 다녔더라."],
      },
      {
        en: "I didn't mean to",
        ko: "일부러 ~하려던 건 아니었다",
        ex: ["I didn't mean to offend you.", "기분 상하게 하려던 건 아니었어."],
      },
      {
        en: "I ended up",
        ko: "결국 ~하게 되었다",
        ex: ["I ended up walking there.", "결국 거기까지 걸어갔어."],
      },
      {
        en: "You should have",
        ko: "~했어야지",
        ex: ["You should have booked in advance.", "미리 예약했어야지."],
      },
      {
        en: "That's what happens when",
        ko: "~하면 이런 결과가 나와/그게 ~의 결과야",
        ex: ["That's what happens when you rush.", "서두르면 그런 결과가 나오는 거야."],
      },
    ],
  },
];
