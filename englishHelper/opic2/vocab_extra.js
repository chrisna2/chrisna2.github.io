// OPIc 기본 단어: 메인 앱의 OPIC 단어를 단어 카드로 통합한 것. words.html에서 vocab.js 다음에 불러온다.
// re는 틀 연습의 주제 매칭에 끼어들지 않도록 절대 일치하지 않는 패턴이다.
TOPICS.push(
  { id: "x_daily", name: "OPIc 일상·취미", re: /(?!)/, w: [["describe","설명하다"],["talk about","~에 대해 말하다"],["spend time","시간을 보내다"],["usually","보통"],["sometimes","가끔"],["often","자주"],["rarely","드물게"],["favorite","좋아하는"],["interest","관심사"],["skill","기술"],["experience","경험"],["travel","여행"],["plan","계획"],["schedule","일정"],["daily routine","일상"],["morning","아침"],["afternoon","오후"],["evening","저녁"],["weekend","주말"],["weekday","평일"],["relaxation","휴식"],["exercise","운동"],["cooking","요리"],["reading","독서"],["watching","보기"],["movie","영화"],["music","음악"],["sports","스포츠"],["game","게임"],["relaxing","편안한"],["fascinating","매력적인"],["interesting","흥미로운"],["enjoyable","즐거운"],["challenging","도전적인"],["rewarding","보람있는"],["helpful","도움이 되는"]] },
  { id: "x_work", name: "OPIc 직장·업무", re: /(?!)/, w: [["work","일"],["job","직업"],["career","경력"],["colleague","동료"],["boss","상사"],["employee","직원"],["office","사무실"],["meeting","회의"],["project","프로젝트"],["deadline","마감일"],["busy","바쁜"]] }
);
