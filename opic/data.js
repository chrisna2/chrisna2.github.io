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
