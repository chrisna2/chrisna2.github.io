// 대분류: 서베이 / 롤플레이 / 돌발 — 주제(TOPICS)와 뼈대(SKELS)는 각각 하나의 분류에 속한다
const CATS = [
  ["survey", "서베이", "내 이야기"],
  ["rp", "롤플레이", "11·12·13번"],
  ["surprise", "돌발", "교재 중심"],
];
// 분류별 한 줄 안내 (빈도는 2026 상반기 통계 기준)
const CAT_NOTE = {
  survey:
    "내가 고른 주제를 내 경험으로 말합니다. 2026 상반기 인기: 음악감상 · 집 · 해외여행 · 국내여행 · 영화 · 하이킹.",
  rp: "정해진 상황을 연기합니다. 11번 질문 3~4개 → 12번 문제 설명 + 대안 → 13번 비슷한 과거 경험. 빈출 상황: MP3 · 약속 · 해외여행 · 영화 · 가구.",
  surprise:
    "서베이에 없는 주제가 나옵니다. 어렵다 → 많다·중요 → 필수 답변 → 자부심 → 결론의 틀로 답합니다. 빈출: 테크놀로지 · 미용실 · 약속 · 재활용 · 직장 · 호텔 · 산업.",
};
// 주제 ti가 속한 분류 (cat 필드가 없으면 서베이)
const catOf = (ti) => TOPICS[ti].cat || "survey";
// 분류 c에 속한 주제 인덱스 목록
const catTopics = (c) => TOPICS.map((t, i) => i).filter((i) => catOf(i) === c);
// 뼈대가 속한 분류: tag가 RP로 시작하면 롤플레이, SP면 돌발, 나머지는 서베이
const skCat = (S) => (S.tag.startsWith("RP") ? "rp" : S.tag === "SP" ? "surprise" : "survey");
// 템플릿의 빈칸 표시 {}를 제거해 읽을 수 있는 순수 문장으로 만든다
const plain = (s) => s.replace(/[{}]/g, "");
// 뼈대 S에서 주제 key의 표시 이름 (뼈대별 별칭이 있으면 우선)
const kn = (S, k) => (S.kn && S.kn[k]) || SK_NAMES[k];
// 뼈대(skId) × 주제(key) 조합으로 묶음(section) 하나를 만든다.
// 뼈대의 <슬롯>을 주제별 값으로 채워 {빈칸} 문장, 한글, 키워드를 생성.
function genSec(skId, key) {
  const S = SKELS.find((s) => s.id === skId),
    sl = S.slots[key];
  const qd = S.qs
    ? S.qs[key]
    : [
        "Tell me about a memorable experience you had " + SK_Q[key][0] + ". What happened?",
        SK_Q[key][1] + " 겪은 기억에 남는 경험을 말해 주세요. 무슨 일이 있었나요?",
      ];
  const fill = (t, i, mark) =>
    t.replace(/<(\w+)>/g, (m, k) => (mark ? "{" + sl[k][i] + "}" : sl[k][i]));
  return {
    t: S.name + " × " + kn(S, key),
    tag: S.tag,
    gen: true,
    q: qd,
    s: S.parts.map((p) => [
      fill(p[0], 0, true),
      fill(p[1], 1, false),
      p[2],
      [...p[0].matchAll(/<(\w+)>/g)].map((m) => sl[m[1]][1]).join(" / "),
    ]),
  };
}
// 뼈대에서 만들어지는 주제(fromSkel)는 시작할 때 주제별 묶음을 생성해 채운다
TOPICS.forEach((tp) => {
  if (tp.fromSkel) {
    const S = SKELS.find((x) => x.id === tp.fromSkel);
    tp.secs = Object.keys(S.slots).map((k) => genSec(S.id, k));
  }
});

/* ===== 상태 ===== */
// localStorage 래퍼. 사생활 모드 등에서 예외가 나도 앱이 죽지 않도록 try/catch로 감싼다.
// get(키, 기본값) / set(키, 값). 키에는 'opicLoop.' 접두사가 붙는다.
const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem("opicLoop." + k);
      return v == null ? d : JSON.parse(v);
    } catch (e) {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem("opicLoop." + k, JSON.stringify(v));
    } catch (e) {}
  },
};
// 사용자 설정 기본값 + 저장된 값 병합 (화면, 재생 방식, 반복 횟수, 모의고사 옵션 등)
const cfg = Object.assign(
  {
    view: "listen",
    unit: "sent",
    withQ: true,
    skSk: "A",
    skKey: "cafe",
    cat: "survey",
    topicOf: {},
    skHint: false,
    skHideEn: false,
    skRead: false,
    mode: "shadow",
    rate: 0.9,
    reps: 2,
    gap: 1,
    loop: true,
    voice: "",
    random: false,
    hideEn: false,
    scope: "sec",
    topic: 0,
    sec: 0,
    bsec: 0,
    koHint: true,
    kwScope: "topic",
    kwShuffle: false,
    kwHint: "kw",
    mockMode: "full",
    mockCat: "all",
    mockSecs: 60,
    mockCaption: false,
    mockAuto: true,
  },
  store.get("cfg", {}),
);
// 약한 문장 / 약한 묶음 표시(별표) 목록 — 저장된 값에서 복원
let weak = new Set(store.get("weak", []));
let weakSec = new Set(store.get("weakSec", []));
// 모든 문장을 한 줄로 펼친 재생용 목록. id = '주제.묶음.문장' 형식
const ITEMS = [];
TOPICS.forEach((tp, ti) =>
  tp.secs.forEach((sc, si) =>
    sc.s.forEach((p, ni) =>
      ITEMS.push({ id: ti + "." + si + "." + ni, ti, si, ni, en: plain(p[0]), ko: p[1] }),
    ),
  ),
);
// id로 문장을 바로 찾기 위한 인덱스
const byId = Object.fromEntries(ITEMS.map((i) => [i.id, i]));
if (cfg.topic >= TOPICS.length) cfg.topic = 0;
cfg.cat = catOf(cfg.topic);
if (cfg.view === "rp") cfg.view = "skel";
// 재생 상태: queue 재생 대기열, qi 현재 위치, playing 재생 중 여부,
// token 비동기 흐름 취소용 번호(바뀌면 이전 흐름이 멈춤), wake 화면 꺼짐 방지 잠금,
// cancelSleep 대기 즉시 취소 함수, revealed 정답을 펼친 문장, curRep 현재 반복 회차
let queue = [],
  qi = 0,
  playing = false,
  token = 0,
  wake = null,
  cancelSleep = null,
  revealed = new Set(),
  curRep = 0;
// document.querySelector 축약
const $ = (s) => document.querySelector(s);
// 현재 설정을 저장
const save = () => store.set("cfg", cfg);
// 브라우저 음성합성(TTS) 지원 여부
const SYNTH = "speechSynthesis" in window;
if (!SYNTH) $("#warn").hidden = false;
// 배열을 무작위로 섞는다 (Fisher-Yates, 원본을 직접 변경)
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
// 배열에서 무작위로 하나 고른다
const pick = (a) => a[Math.floor(Math.random() * a.length)];

/* ===== 아이콘 ===== */
// 아이콘 SVG 문자열 (재생 / 일시정지 / 스피커 / 별)
const ICON_PLAY =
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
const ICON_PAUSE =
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
const ICON_SPK =
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/></svg>';
const ICON_STAR = (on) =>
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="' +
  (on ? "currentColor" : "none") +
  '" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>';
// HTML 특수문자 이스케이프 (innerHTML에 넣기 전 필수)
const esc = (s) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
// 템플릿 문장을 HTML로 변환. {빈칸}을 filled=false면 빈 밑줄, true면 강조(mark)로 표시
const tplHtml = (en, filled) =>
  esc(en).replace(/\{([^}]*)\}/g, (m, w) =>
    filled
      ? "<mark>" + w + "</mark>"
      : '<span class="blank" style="min-width:' +
        Math.max(3, Math.min(11, w.length * 0.55)).toFixed(1) +
        'em"></span>',
  );

/* ===== 음성 ===== */
// 사용 가능한 영어 음성 목록
let voices = [];
// 브라우저가 제공하는 영어 음성을 읽어 음성 선택 드롭다운을 채운다
function loadVoices() {
  if (!SYNTH) return;
  voices = speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang));
  const sel = $("#voice");
  sel.innerHTML =
    '<option value="">자동 (영어 기본)</option>' +
    voices
      .map(
        (v) =>
          '<option value="' + esc(v.name) + '">' + esc(v.name) + " (" + esc(v.lang) + ")</option>",
      )
      .join("");
  sel.value = cfg.voice && voices.some((v) => v.name === cfg.voice) ? cfg.voice : "";
}
// 재생에 쓸 음성 선택: 랜덤 옵션 > 사용자가 고른 음성 > en-US > 첫 번째 음성
function pickVoice() {
  if (!voices.length) return null;
  if (cfg.random) return voices[Math.floor(Math.random() * voices.length)];
  const f = voices.find((v) => v.name === cfg.voice);
  if (f) return f;
  return voices.find((v) => /en-US/i.test(v.lang)) || voices[0];
}
// 한 문장을 읽고 끝나면 resolve되는 Promise.
// 일부 브라우저는 onend가 안 오기도 해서 단어 수 기반 타임아웃으로 안전장치를 둔다.
function speak(text, voice, lang) {
  return new Promise((res) => {
    if (!SYNTH) {
      res();
      return;
    }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang || "en-US";
    if (voice) {
      u.voice = voice;
      u.lang = voice.lang;
    }
    u.rate = cfg.rate;
    let done = false,
      tm = null;
    const fin = () => {
      if (!done) {
        done = true;
        clearTimeout(tm);
        res();
      }
    };
    u.onend = fin;
    u.onerror = fin;
    const w = text.split(/\s+/).length;
    tm = setTimeout(fin, (1500 + w * 650) / cfg.rate + 2500);
    try {
      speechSynthesis.speak(u);
    } catch (e) {
      fin();
    }
  });
}
// 현재 설정의 음성으로 한 문장 읽기
const say = (t) => speak(t, pickVoice());
// ms 동안 대기. cancelSleep()으로 즉시 깨울 수 있다 (정지 버튼용)
function sleep(ms) {
  return new Promise((res) => {
    const t = setTimeout(() => {
      cancelSleep = null;
      res();
    }, ms);
    cancelSleep = () => {
      clearTimeout(t);
      cancelSleep = null;
      res();
    };
  });
}
// 따라 말할 시간(ms): 단어 수에 비례하고, 설정(짧게/보통/길게)에 따라 배율이 달라진다
function gapMs(en) {
  const w = en.split(/\s+/).length;
  return (900 + w * 400) * [0.7, 1, 1.6][cfg.gap];
}
// 읽고 있는 음성과 대기를 즉시 중단
function stopAudio() {
  if (cancelSleep) cancelSleep();
  if (SYNTH)
    try {
      speechSynthesis.cancel();
    } catch (e) {}
}
// 재생 중 화면이 꺼지지 않도록 Wake Lock 요청 (미지원이면 무시)
async function keepAwake() {
  try {
    if (navigator.wakeLock && !wake) {
      wake = await navigator.wakeLock.request("screen");
      wake.addEventListener("release", () => {
        wake = null;
      });
    }
  } catch (e) {}
}
// 화면 꺼짐 방지 해제
function releaseAwake() {
  try {
    if (wake) {
      wake.release();
      wake = null;
    }
  } catch (e) {}
}
// 모의고사 시작/종료 신호음 (주파수 f, 0.18초)
function beep(f) {
  try {
    const C = window.AudioContext || window.webkitAudioContext;
    const c = new C();
    const o = c.createOscillator(),
      g = c.createGain();
    o.frequency.value = f;
    g.gain.value = 0.08;
    o.connect(g);
    g.connect(c.destination);
    o.start();
    setTimeout(() => {
      o.stop();
      c.close();
    }, 180);
  } catch (e) {}
}
// 모든 재생·모의고사·타이머를 멈추고 화면 상태를 초기화.
// token을 올려서 진행 중이던 비동기 흐름이 스스로 종료되게 한다.
function stopAll() {
  token++;
  playing = false;
  curRep = 0;
  sk.playing = false;
  mockClear();
  stopAudio();
  setPlayIcon();
  setStatus();
  releaseAwake();
}
// 문장 목록을 차례로 읽는다. 중간에 token이 바뀌면(취소) false 반환
async function sayAll(list, my) {
  // 정답 문장들을 차례로 읽어 주기
  for (const t of list) {
    if (my !== token) return false;
    await say(t);
    if (my !== token) return false;
    await sleep(350);
  }
  return my === token;
}

/* ===== 탭 ===== */
// 상단 탭 정의: [뷰 id, 큰 글씨, 작은 글씨]
const TABS = [
  ["listen", "듣기", "따라 말하기"],
  ["blank", "1단계", "빈칸 채우기"],
  ["kw", "2단계", "키워드 말하기"],
  ["skel", "응용", "뼈대 바꿔끼우기"],
];
// 상단 탭 버튼 그리기 (현재 뷰는 aria-pressed=true)
function renderTabs() {
  $("#tabs").innerHTML = TABS.map(
    (t) =>
      '<button data-v="' +
      t[0] +
      '" aria-pressed="' +
      (cfg.view === t[0]) +
      '">' +
      t[1] +
      "<small>" +
      t[2] +
      "</small></button>",
  ).join("");
}
// 탭 전환: 재생을 멈추고, 해당 뷰만 보이게 하고, 뷰별 초기 렌더링을 수행
// 분류와 별개로 단독 화면을 쓰는 뷰: 필수 표현, 모의고사
const STANDALONE = ["phr", "mock"];
function setView(v) {
  stopAll();
  cfg.view = v;
  save();
  renderTabs();
  $("#v-listen").hidden = v !== "listen";
  $("#v-blank").hidden = v !== "blank";
  $("#v-kw").hidden = v !== "kw";
  $("#v-skel").hidden = v !== "skel";
  $("#v-mock").hidden = v !== "mock";
  $("#v-phr").hidden = v !== "phr";
  $("#chips").hidden = STANDALONE.includes(v) || v === "skel";
  $("#tabs").hidden = $("#catnote").hidden = STANDALONE.includes(v);
  renderCats();
  renderChips();
  $("#dock").hidden = v !== "listen";
  document.body.classList.toggle("nodock", v !== "listen");
  if (v === "listen") {
    renderMain();
  }
  if (v === "blank") renderBlank();
  if (v === "kw") {
    kwBuild();
    renderKw();
  }
  if (v === "skel") {
    sk.shown = false;
    sk.drill = null;
    renderSkel();
  }
  if (v === "mock") renderMock();
  if (v === "phr") renderPhr();
  window.scrollTo({ top: 0 });
}
// 대분류 선택(서베이 / 롤플레이 / 돌발)과 안내 문구 그리기
function renderCats() {
  $("#cats").innerHTML =
    CATS.map(
      (c) =>
        '<button data-cat="' +
        c[0] +
        '" aria-pressed="' +
        (!STANDALONE.includes(cfg.view) && cfg.cat === c[0]) +
        '">' +
        c[1] +
        "<small>" +
        c[2] +
        "</small></button>",
    ).join("") +
    '<button data-cat="phr" aria-pressed="' +
    (cfg.view === "phr") +
    '">표현<small>시작 문구</small></button>' +
    // 모의고사는 분류와 별개의 최종 단계: 서베이·돌발·롤플레이를 묶어서 푼다
    '<button data-cat="mock" aria-pressed="' +
    (cfg.view === "mock") +
    '">모의고사<small>최종 점검</small></button>';
  $("#catnote").textContent = CAT_NOTE[cfg.cat];
}
// 대분류 전환: 분류별로 마지막에 보던 주제를 기억했다가 복원하고 현재 탭을 다시 그린다
function setCat(c) {
  // 모의고사 화면에서 분류를 누르면 그 분류의 듣기 탭으로 돌아간다
  const fromMock = STANDALONE.includes(cfg.view);
  if (c === cfg.cat && !fromMock) return;
  stopAll();
  if (c !== cfg.cat) {
    cfg.topicOf[cfg.cat] = cfg.topic;
    cfg.cat = c;
    const saved = cfg.topicOf[c];
    cfg.topic =
      saved != null && saved < TOPICS.length && catOf(saved) === c ? saved : catTopics(c)[0];
    cfg.sec = 0;
    cfg.bsec = 0;
    brev.clear();
  }
  save();
  setView(fromMock ? "listen" : cfg.view);
}
// 주제 칩(기억에 남는 경험, 집, 영화 …) 그리기
function renderChips() {
  $("#chips").innerHTML = catTopics(cfg.cat)
    .map((i) => [TOPICS[i], i])
    .map(
      ([t, i]) =>
        '<button class="chip" data-t="' +
        i +
        '" aria-pressed="' +
        (i === cfg.topic) +
        '">' +
        esc(t.name) +
        "</button>",
    )
    .join("");
}

/* ===== 듣기 탭 ===== */
// 듣기 탭의 재생 범위 선택(이 묶음 / 이 주제 / 전체 / 약한 문장) 그리기
function renderScope() {
  const opts = [
    ["sec", "이 묶음"],
    ["topic", "이 주제"],
    ["all", "전체"],
    ["weak", "약한 문장 " + weak.size],
  ];
  $("#scope").innerHTML = opts
    .map(
      (o) =>
        '<button data-s="' +
        o[0] +
        '" aria-pressed="' +
        (cfg.scope === o[0]) +
        '">' +
        o[1] +
        "</button>",
    )
    .join("");
}
// 듣기 탭 본문: 선택한 주제의 묶음별 질문과 문장 카드 목록 그리기
function renderMain() {
  const tp = TOPICS[cfg.topic];
  const hide = cfg.hideEn || cfg.mode === "recall";
  let h = '<div class="' + (hide ? "hide" : "") + '">';
  tp.secs.forEach((sc, si) => {
    h +=
      '<div class="sec"><h2>' +
      esc(sc.t) +
      '<span class="tag">' +
      esc(sc.tag) +
      '</span></h2><button class="mini" data-play-sec="' +
      si +
      '">이 묶음 재생</button></div>' +
      (sc.q
        ? '<p class="note" id="q' +
          cfg.topic +
          "." +
          si +
          '">Q. ' +
          esc(sc.q[0]) +
          "<br>" +
          esc(sc.q[1]) +
          "</p>"
        : "") +
      '<div class="list">';
    sc.s.forEach((p, ni) => {
      const id = cfg.topic + "." + si + "." + ni,
        on = weak.has(id);
      h +=
        '<div class="card' +
        (revealed.has(id) ? " shown" : "") +
        '" id="r' +
        id +
        '" data-id="' +
        id +
        '"><span class="num">' +
        (ni + 1) +
        "</span>" +
        '<div class="txt"><div class="en" data-reveal="' +
        id +
        '">' +
        esc(plain(p[0])) +
        '</div><div class="ko">' +
        esc(p[1]) +
        "</div></div>" +
        '<div class="acts"><button class="ib" data-say="' +
        id +
        '" aria-label="이 문장부터 재생">' +
        ICON_SPK +
        "</button>" +
        '<button class="ib' +
        (on ? " on" : "") +
        '" data-weak="' +
        id +
        '" aria-label="약한 문장 표시" aria-pressed="' +
        on +
        '">' +
        ICON_STAR(on) +
        "</button></div></div>";
    });
    h += "</div>";
  });
  $("#main").innerHTML = h + "</div>";
}
// 재생 방식 선택(따라 말하기 / 한글→영어 / 듣기만) 그리기
function renderModes() {
  const m = [
    ["shadow", "따라 말하기"],
    ["recall", "한글→영어"],
    ["listen", "듣기만"],
  ];
  $("#modes").innerHTML = m
    .map(
      (o) =>
        '<button data-m="' +
        o[0] +
        '" aria-pressed="' +
        (cfg.mode === o[0]) +
        '">' +
        o[1] +
        "</button>",
    )
    .join("");
}
// 재생 중이면 일시정지 아이콘, 아니면 재생 아이콘으로 교체
function setPlayIcon() {
  $("#play").innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
  $("#play").setAttribute("aria-label", playing ? "일시정지" : "재생");
}
// 하단 상태줄: 현재 문장 번호, 반복 회차, 진행 막대
function setStatus() {
  const q = queue.length;
  $("#stTxt").textContent = q ? "문장 " + (qi + 1) + " / " + q : "대기 중";
  $("#stRep").textContent = playing && curRep ? curRep + " / " + cfg.reps + "회" : "";
  $("#prog").style.width = q ? Math.min(1, (qi + (playing ? 0.5 : 0)) / q) * 100 + "%" : "0";
}
// 지금 읽는 문장 카드를 강조하고 화면 가운데로 스크롤
function markActive(item) {
  document.querySelectorAll(".card.active").forEach((e) => e.classList.remove("active"));
  const el = document.getElementById("r" + item.id);
  if (el) {
    el.classList.add("active");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
  }
}
// 문장 카드의 영어 정답을 펼치거나(on) 가린다
function reveal(id, on) {
  if (on) revealed.add(id);
  else revealed.delete(id);
  const el = document.getElementById("r" + id);
  if (el) el.classList.toggle("shown", on);
}
// 재생 범위(scope) 설정에 맞는 문장 대기열을 만든다
function buildQueue() {
  const t = cfg.topic;
  if (cfg.scope === "all") return ITEMS.filter((i) => catOf(i.ti) === cfg.cat);
  if (cfg.scope === "weak") return ITEMS.filter((i) => weak.has(i.id));
  if (cfg.scope === "topic") return ITEMS.filter((i) => i.ti === t);
  return ITEMS.filter((i) => i.ti === t && i.si === cfg.sec);
}
// 듣기 탭 재생 메인 루프. start 위치부터 대기열을 순서대로 처리한다.
// - unit='sent': 문장 하나씩 reps번 반복  / unit='block': 질문 + 묶음 전체를 reps번 반복
// - mode: shadow(듣고 따라 말하기) / recall(한글만 보고 말한 뒤 정답 공개) / listen(듣기만)
// token이 바뀌면 즉시 종료되고, loop 설정이면 끝에서 처음으로 돌아간다.
async function run(start) {
  stopAudio();
  const my = ++token;
  queue = buildQueue();
  if (!queue.length) {
    playing = false;
    setPlayIcon();
    setStatus();
    $("#stTxt").textContent = "재생할 문장이 없습니다";
    return;
  }
  qi = Math.max(0, Math.min(start, queue.length - 1));
  playing = true;
  setPlayIcon();
  keepAwake();
  while (my === token) {
    if (qi >= queue.length) {
      if (cfg.loop) {
        qi = 0;
        [...revealed].forEach((id) => reveal(id, false));
        continue;
      }
      break;
    }
    const it = queue[qi];
    if (it.ti !== cfg.topic) {
      cfg.topic = it.ti;
      cfg.cat = catOf(it.ti);
      renderCats();
      renderChips();
      renderMain();
    }
    [...revealed].forEach((id) => reveal(id, false));
    if (cfg.unit === "block") {
      // 묶음 통째로: 문제 → 문장들을 쉬지 않고 이어서, 묶음 전체를 반복
      const base = qi,
        blk = [];
      for (let k = base; k < queue.length && queue[k].ti === it.ti && queue[k].si === it.si; k++)
        blk.push(queue[k]);
      const sq = TOPICS[it.ti].secs[it.si].q;
      const total = blk.reduce((a, x) => a + gapMs(x.en), 0);
      for (let r = 1; r <= cfg.reps; r++) {
        curRep = r;
        qi = base;
        setStatus();
        [...revealed].forEach((id) => reveal(id, false));
        markActive(blk[0]);
        if (cfg.withQ && sq) {
          const qe = document.getElementById("q" + it.ti + "." + it.si);
          if (qe) qe.style.color = "var(--live)";
          $("#stTxt").textContent = "문제";
          await say(sq[0]);
          if (qe) qe.style.color = "";
          if (my !== token) return;
          await sleep(cfg.mode === "listen" ? 250 : 1000);
          if (my !== token) return;
        }
        if (cfg.mode === "recall") {
          await sleep(total * 0.9);
          if (my !== token) return;
          blk.forEach((x) => reveal(x.id, true));
        }
        for (let k = 0; k < blk.length; k++) {
          qi = base + k;
          setStatus();
          markActive(blk[k]);
          await say(blk[k].en);
          if (my !== token) return;
          await sleep(450);
          if (my !== token) return;
        }
        qi = base;
        if (!(cfg.mode === "listen" && r === cfg.reps)) {
          await sleep(cfg.mode === "listen" ? 900 : total * 0.8);
          if (my !== token) return;
        }
      }
      qi = base + blk.length;
      continue;
    }
    markActive(it);
    curRep = 0;
    setStatus();
    if (cfg.withQ && it.ni === 0) {
      const sq = TOPICS[it.ti].secs[it.si].q;
      if (sq) {
        const qe = document.getElementById("q" + it.ti + "." + it.si);
        if (qe) qe.style.color = "var(--live)";
        $("#stTxt").textContent = "문제";
        await say(sq[0]);
        if (qe) qe.style.color = "";
        if (my !== token) return;
        await sleep(cfg.mode === "listen" ? 250 : 1200);
        if (my !== token) return;
        setStatus();
      }
    }
    if (cfg.mode === "recall") {
      curRep = 1;
      setStatus();
      await sleep(gapMs(it.en) * 1.3);
      if (my !== token) return;
      reveal(it.id, true);
      for (let r = 1; r <= cfg.reps; r++) {
        curRep = r;
        setStatus();
        await say(it.en);
        if (my !== token) return;
        await sleep(gapMs(it.en));
        if (my !== token) return;
      }
    } else if (cfg.mode === "shadow") {
      for (let r = 1; r <= cfg.reps; r++) {
        curRep = r;
        setStatus();
        await say(it.en);
        if (my !== token) return;
        await sleep(gapMs(it.en));
        if (my !== token) return;
      }
    } else {
      for (let r = 1; r <= cfg.reps; r++) {
        curRep = r;
        setStatus();
        await say(it.en);
        if (my !== token) return;
        await sleep(700);
        if (my !== token) return;
      }
    }
    qi++;
  }
  if (my === token) {
    playing = false;
    curRep = 0;
    setPlayIcon();
    setStatus();
    releaseAwake();
  }
}
// 특정 문장(id)부터 재생. 현재 범위에 없으면 범위를 '이 주제'로 넓힌다
function startFrom(id) {
  const q = buildQueue();
  let i = q.findIndex((x) => x.id === id);
  if (i < 0) {
    cfg.scope = "topic";
    renderScope();
    save();
    i = buildQueue().findIndex((x) => x.id === id);
  }
  run(Math.max(0, i));
}
// 현재 선택한 묶음의 첫 문장이 대기열에서 몇 번째인지 반환
function firstIndex() {
  const q = buildQueue();
  const i = q.findIndex((x) => x.ti === cfg.topic && x.si === cfg.sec);
  return i < 0 ? 0 : i;
}

/* ===== 1단계: 문제 → 빈칸 템플릿 ===== */
// 1단계에서 정답을 펼쳐 본 문장 id 목록
const brev = new Set();
// 해당 주제에서 질문(q)이 있는 묶음만 골라낸다
function qSecs(ti) {
  return TOPICS[ti].secs.map((s, i) => ({ s, i })).filter((x) => x.s.q);
}
// 질문 카드 HTML (영어/한글 질문 + '문제 듣기' 버튼)
function qCard(sc, ti, label) {
  return (
    '<div class="qcard"><div class="qlab">' +
    esc(label) +
    '</div><div class="qen">' +
    esc(sc.q[0]) +
    '</div><div class="qko">' +
    esc(sc.q[1]) +
    "</div>" +
    '<div class="row2"><button class="mini pri" data-qsay="1">문제 듣기</button></div></div>'
  );
}
// 1단계(빈칸 채우기) 화면: 질문 → 내가 채울 부분이 비어 있는 템플릿 문장들
function renderBlank() {
  const list = qSecs(cfg.topic);
  if (!list.some((x) => x.i === cfg.bsec)) cfg.bsec = list[0].i;
  const tp = TOPICS[cfg.topic],
    sc = tp.secs[cfg.bsec];
  let h =
    '<p class="note">문제를 듣고, 빈칸에 내 이야기를 채워 소리 내어 말하세요. 카드를 누르면 정답이 채워지고 읽어 줍니다.</p>';
  h +=
    '<div class="pills">' +
    list
      .map(
        (x) =>
          '<button class="pill" data-bsec="' +
          x.i +
          '" aria-pressed="' +
          (x.i === cfg.bsec) +
          '">' +
          esc(x.s.t) +
          "</button>",
      )
      .join("") +
    "</div>";
  h += qCard(sc, cfg.topic, "Q · " + tp.name + " · " + sc.tag);
  h +=
    '<div class="row2"><label class="lbl"><input type="checkbox" id="koHint"' +
    (cfg.koHint ? " checked" : "") +
    "> 한글 뜻 보이기</label>" +
    '<button class="mini" data-ball="1">전부 보기</button><button class="mini" data-bnone="1">전부 가리기</button><button class="mini" data-bread="1">정답 이어 읽기</button></div>';
  h += '<div class="list">';
  sc.s.forEach((p, ni) => {
    const id = "b" + cfg.topic + "." + cfg.bsec + "." + ni,
      on = brev.has(id);
    h +=
      '<button class="bcard' +
      (on ? " shown" : "") +
      '" data-b="' +
      id +
      '" data-ni="' +
      ni +
      '"><span class="num">' +
      (ni + 1) +
      '</span><span class="txt"><span class="en" style="display:block">' +
      tplHtml(p[0], on) +
      "</span>" +
      (cfg.koHint ? '<span class="ko" style="display:block">' + esc(p[1]) + "</span>" : "") +
      "</span></button>";
  });
  h +=
    '</div><div class="nav2"><span class="cnt">' +
    (list.findIndex((x) => x.i === cfg.bsec) + 1) +
    " / " +
    list.length +
    '</span><div class="g">' +
    '<button class="big" data-bnext="-1">이전 묶음</button><button class="big pri" data-bnext="1">다음 묶음</button></div></div>';
  $("#v-blank").innerHTML = h;
}
// 1단계 정답 펼침 상태 갱신
function bSet(id, on) {
  if (on) brev.add(id);
  else brev.delete(id);
}

/* ===== 2단계: 키워드 흐름 ===== */
// 2단계 상태: deck 출제할 묶음 목록, i 현재 번호, shown 정답 공개 여부
const kw = { deck: [], i: 0, shown: false };
// 2단계 문제 묶음 만들기 (범위: 이 주제/전체/약한 묶음, 섞기 옵션)
function kwBuild() {
  let d = [];
  TOPICS.forEach((tp, ti) =>
    tp.secs.forEach((sc, si) => {
      if (!sc.q) return;
      if (cfg.kwScope === "topic" && ti !== cfg.topic) return;
      if (cfg.kwScope === "all" && catOf(ti) !== cfg.cat) return;
      if (cfg.kwScope === "weak" && !weakSec.has(ti + "." + si)) return;
      d.push({ ti, si });
    }),
  );
  if (cfg.kwShuffle) shuffle(d);
  kw.deck = d;
  kw.i = 0;
  kw.shown = false;
}
// 2단계(키워드 말하기) 화면: 질문과 키워드 흐름만 보여 주고, 말한 뒤 정답과 비교
function renderKw() {
  let h =
    '<p class="note">문제를 듣고 키워드 순서대로 말하세요. 다 말한 뒤 정답을 보고 비교합니다.</p>';
  h +=
    '<div class="row2"><span class="lbl">범위</span><div class="seg" id="kwScope">' +
    [
      ["topic", "이 주제"],
      ["all", "전체"],
      ["weak", "약한 묶음 " + weakSec.size],
    ]
      .map(
        (o) =>
          '<button data-ks="' +
          o[0] +
          '" aria-pressed="' +
          (cfg.kwScope === o[0]) +
          '">' +
          o[1] +
          "</button>",
      )
      .join("") +
    "</div>" +
    '<span class="lbl">힌트</span><div class="seg">' +
    [
      ["kw", "키워드만"],
      ["first", "첫 단어까지"],
    ]
      .map(
        (o) =>
          '<button data-kh="' +
          o[0] +
          '" aria-pressed="' +
          (cfg.kwHint === o[0]) +
          '">' +
          o[1] +
          "</button>",
      )
      .join("") +
    "</div>" +
    '<label class="lbl"><input type="checkbox" id="kwShuf"' +
    (cfg.kwShuffle ? " checked" : "") +
    "> 섞기</label></div>";
  if (!kw.deck.length) {
    $("#v-kw").innerHTML =
      h +
      '<p class="note">이 범위에 문제가 없습니다. 범위를 바꿔 보세요. (약한 묶음은 카드의 별표로 표시합니다.)</p>';
    return;
  }
  const d = kw.deck[kw.i],
    tp = TOPICS[d.ti],
    sc = tp.secs[d.si],
    wk = weakSec.has(d.ti + "." + d.si);
  h += qCard(
    sc,
    d.ti,
    "Q " + (kw.i + 1) + " / " + kw.deck.length + " · " + tp.name + " · " + sc.tag,
  );
  h +=
    '<div class="qlab" style="margin:0 0 6px">키워드 흐름 · 이 순서로 말하세요</div><ol class="flow">';
  sc.s.forEach((p, ni) => {
    const first = plain(p[0]).split(/\s+/).slice(0, 3).join(" ") + " …";
    h +=
      "<li><b>" +
      (ni + 1) +
      '</b><span><span class="k">' +
      esc(p[2]) +
      "</span>" +
      (cfg.kwHint === "first" ? "<small>" + esc(first) + "</small>" : "") +
      "</span></li>";
  });
  h +=
    '</ol><div class="row2"><button class="big pri" data-kshow="1">' +
    (kw.shown ? "정답 가리기" : "정답 보기 · 읽어 주기") +
    "</button>" +
    '<button class="big' +
    (wk ? " live" : "") +
    '" data-kweak="1">' +
    (wk ? "약한 묶음 ★" : "약한 묶음 ☆") +
    "</button></div>";
  if (kw.shown) {
    h +=
      '<div class="ans">' +
      sc.s
        .map(
          (p) =>
            '<div><div class="e">' +
            tplHtml(p[0], true) +
            '</div><div class="k">' +
            esc(p[1]) +
            "</div></div>",
        )
        .join("") +
      "</div>";
  }
  h +=
    '<div class="nav2"><span class="cnt">' +
    (kw.i + 1) +
    " / " +
    kw.deck.length +
    '</span><div class="g"><button class="big" data-knav="-1">이전</button><button class="big pri" data-knav="1">다음 문제</button></div></div>';
  $("#v-kw").innerHTML = h;
}
// 2단계에서 n칸 이동(이전/다음)하고 새 질문을 읽어 준다
function kwGo(n) {
  stopAll();
  kw.i = (kw.i + n + kw.deck.length) % kw.deck.length;
  kw.shown = false;
  renderKw();
  window.scrollTo({ top: 0 });
  const d = kw.deck[kw.i];
  const my = ++token;
  say(TOPICS[d.ti].secs[d.si].q[0]);
}

/* ===== 응용: 뼈대 바꿔끼우기 =====
 같은 뼈대(고정 문장)에 주제별 빈칸 값만 바꿔 끼워 어떤 주제 문제에도 답하는 연습 */
// 정답을 펼칠 때 자동으로 읽어 줄지 정하는 체크박스 HTML (기본값: 읽지 않음)
const skReadOpt = () =>
  '<div class="row2"><label class="lbl"><input type="checkbox" id="skRead"' +
  (cfg.skRead ? " checked" : "") +
  "> 정답 펼칠 때 자동으로 읽어 주기</label></div>";
// 응용 탭 상태: playing 전체 재생 중, shown 정답 표시 여부
const sk = { playing: false, shown: false, drill: null };
// 롤플레이 11번 질문 연습: 뼈대에서 가운데 문장 3~4개를 무작위로 뽑는다 (첫 인사·마무리는 항상 포함).
// 키워드만 보고 직접 질문을 만들어 말한 뒤 모범 질문을 확인한다.
function drillPick(S) {
  const key = pick(Object.keys(S.slots));
  const mid = S.parts.map((p, i) => i).slice(1, S.parts.length - 1);
  const n = Math.min(mid.length, 3 + Math.floor(Math.random() * 2));
  const chosen = shuffle(mid.slice())
    .slice(0, n)
    .sort((a, b) => a - b);
  return { id: S.id, key, idx: [0, ...chosen, S.parts.length - 1], shown: false };
}
// 현재 분류에 속한 뼈대 목록
const skList = () => SKELS.filter((s) => skCat(s) === cfg.cat);
// 응용 탭 화면(분류별 뼈대 목록): 뼈대 선택(유형별 그룹) → 주제 선택 → 질문과 채워진 뼈대, 주제별 비교표
function renderSkel() {
  const list = skList(),
    rpv = cfg.cat === "rp";
  // 다른 탭에서 고른 뼈대가 이 탭 목록에 없으면 첫 번째 뼈대로 바꾼다
  if (!list.some((s) => s.id === cfg.skSk)) cfg.skSk = list[0].id;
  const S = SKELS.find((s) => s.id === cfg.skSk),
    keys = Object.keys(S.slots);
  if (!keys.includes(cfg.skKey)) cfg.skKey = keys[0];
  const sec = genSec(S.id, cfg.skKey);
  let h =
    '<p class="note">' +
    (rpv
      ? "롤플레이는 흐름(순서)이 전부입니다. 11번은 질문 3~4개, 12번은 문제 설명 + 대안 2~3개, 13번은 비슷한 과거 경험입니다. 흐름은 그대로 두고 빈칸만 상황에 맞게 바꿔 끼우세요."
      : "뼈대(고정 문장)는 그대로 두고, 빈칸만 주제에 맞게 바꿔 끼웁니다. 어떤 주제 문제가 나와도 같은 뼈대로 답하는 연습입니다.") +
    "</p>";
  h +=
    '<div class="lbl" style="margin-bottom:4px">뼈대 · ' +
    list.length +
    "개</div>" +
    [...new Set(list.map((s) => s.grp))]
      .map(
        (g) =>
          '<div class="lbl" style="margin:6px 0 4px;font-size:11.5px">' +
          esc(g) +
          '</div><div class="pills">' +
          list
            .filter((s) => s.grp === g)
            .map(
              (s) =>
                '<button class="pill" data-sksk="' +
                s.id +
                '" aria-pressed="' +
                (s.id === S.id) +
                '">' +
                esc(s.name) +
                " · " +
                esc(s.desc) +
                "</button>",
            )
            .join("") +
          "</div>",
      )
      .join("");
  h +=
    '<div class="lbl" style="margin-bottom:4px">' +
    (rpv ? "상황 (문제)" : "주제 (문제)") +
    '</div><div class="pills">' +
    keys
      .map(
        (k) =>
          '<button class="pill" data-skkey="' +
          k +
          '" aria-pressed="' +
          (k === cfg.skKey) +
          '">' +
          esc(kn(S, k)) +
          "</button>",
      )
      .join("") +
    "</div>";
  const dr = sk.drill && sk.drill.id === S.id ? sk.drill : null;
  if (S.tag === "RP11") {
    h +=
      '<div class="row2"><button class="big' +
      (dr ? " live" : " pri") +
      '" data-skdrill="1">' +
      (dr ? "다시 뽑기 (질문 3~4개)" : "질문 3~4개만 뽑아 연습하기") +
      "</button>" +
      (dr ? '<button class="big" data-skdrill="0">연습 끄기</button>' : "") +
      "</div>";
  }
  if (dr) {
    const dsec = genSec(S.id, dr.key);
    h += qCard(dsec, 0, "Q · " + S.name + " × " + kn(S, dr.key));
    h +=
      '<div class="row2"><span class="lbl">이 순서대로 질문을 만들어 말해 보세요. 키워드만 보입니다.</span></div><div class="ans">' +
      dr.idx
        .map((i, n) => {
          const p = dsec.s[i];
          return (
            '<div><div class="k" style="font-weight:600">' +
            (n + 1) +
            ". " +
            esc(p[2]) +
            "</div>" +
            (dr.shown
              ? '<div class="e">' +
                tplHtml(p[0], true) +
                '</div><div class="k">' +
                esc(p[1]) +
                "</div>"
              : "") +
            "</div>"
          );
        })
        .join("") +
      "</div>" +
      '<div class="row2"><button class="big pri" data-skdrillshow="1">' +
      (dr.shown ? "정답 가리기" : "모범 질문 보기") +
      "</button>" +
      '<button class="big" data-skread="1">읽어 주기</button>' +
      "</div>" +
      skReadOpt();
    h += '<div class="note" id="skStatus"></div>';
  } else {
    h += qCard(sec, 0, "Q · 뼈대 " + S.name + " × " + kn(S, cfg.skKey));
    h +=
      '<div class="row2"><span class="lbl">이 뼈대로 말하세요. 빈칸은 이 주제에 맞는 내용으로 바꿔 끼웁니다.</span></div>';
    h +=
      '<div class="row2"><label class="lbl"><input type="checkbox" id="skHint"' +
      (cfg.skHint ? " checked" : "") +
      "> 빈칸 힌트 보기 (한글)</label>" +
      '<label class="lbl"><input type="checkbox" id="skHideEn"' +
      (cfg.skHideEn ? " checked" : "") +
      "> 영어 뼈대 가리기 (키워드·힌트만)</label></div>";
    h +=
      '<div class="ans">' +
      sec.s
        .map(
          (p) =>
            "<div>" +
            (cfg.skHideEn && !sk.shown
              ? '<div class="k" style="font-weight:600">' +
                esc(p[2]) +
                "</div>" +
                (p[3] ? '<div class="k">힌트: ' + esc(p[3]) + "</div>" : "")
              : '<div class="e">' +
                tplHtml(p[0], sk.shown) +
                "</div>" +
                (sk.shown
                  ? cfg.skHint
                    ? '<div class="k">' + esc(p[1]) + "</div>"
                    : ""
                  : cfg.skHint && p[3]
                    ? '<div class="k">힌트: ' + esc(p[3]) + "</div>"
                    : "")) +
            "</div>",
        )
        .join("") +
      "</div>";
    h +=
      '<div class="row2"><button class="big pri" data-skshow="1">' +
      (sk.shown ? "정답 가리기" : "정답 보기") +
      "</button>" +
      '<button class="big" data-skread="1">읽어 주기</button>' +
      '<button class="big" data-sknext="1">다음 조합 (랜덤)</button>' +
      '<button class="big' +
      (sk.playing ? " live" : "") +
      '" data-skall="1">' +
      (sk.playing ? "정지" : "이 뼈대로 모든 주제 이어 듣기") +
      "</button></div>";
    h += skReadOpt();
    h += '<div class="note" id="skStatus"></div>';
  }
  const cols = Object.keys(S.slots[keys[0]]);
  h +=
    '<details class="res"><summary><span class="tt">이 뼈대의 주제별 빈칸 값 · 한눈에 비교</span></summary><div style="overflow-x:auto"><table class="tbl"><thead><tr><th>주제</th>' +
    cols.map((c) => "<th>" + esc(SK_LABEL[c] || c) + "</th>").join("") +
    "</tr></thead><tbody>" +
    keys
      .map(
        (k) =>
          "<tr><th>" +
          esc(kn(S, k)) +
          "</th>" +
          cols.map((c) => "<td>" + esc(S.slots[k][c][0]) + "</td>").join("") +
          "</tr>",
      )
      .join("") +
    "</tbody></table></div></details>";
  $("#v-skel").innerHTML = h;
}
// 선택한 뼈대를 모든 주제에 대해 차례로 읽어 준다 (질문 → 답변 문장들)
async function skPlayAll() {
  stopAll();
  const my = ++token;
  sk.playing = true;
  renderSkel();
  const S = SKELS.find((s) => s.id === cfg.skSk);
  for (const key of Object.keys(S.slots)) {
    if (my !== token) return;
    const sec = genSec(S.id, key);
    const st = $("#skStatus");
    if (st) st.textContent = "재생 중: " + kn(S, key);
    await say(sec.q[0]);
    if (my !== token) return;
    await sleep(500);
    if (my !== token) return;
    if (
      !(await sayAll(
        sec.s.map((p) => plain(p[0])),
        my,
      ))
    )
      return;
    await sleep(900);
    if (my !== token) return;
  }
  if (my === token) {
    sk.playing = false;
    renderSkel();
  }
}

/* ===== 3단계: 모의고사 ===== */
// 모의고사 문제의 묶음을 반환: 뼈대로 생성한 문제는 q.sec, 기존 문제는 TOPICS에서 조회
const secOf = (q) => (q.gen ? q.sec : TOPICS[q.ti].secs[q.si]);
// 모의고사 상태: phase = setup → ask → ready → answer → done → result
const mock = {
  on: false,
  qs: [],
  i: 0,
  phase: "setup",
  left: 0,
  total: 60,
  iv: null,
  res: [],
  replayed: false,
  t0: 0,
  over: false,
};
// 모의고사 타이머를 정리하고, 진행 중이었다면 설정 화면으로 되돌린다
function mockClear() {
  if (mock.iv) {
    clearInterval(mock.iv);
    mock.iv = null;
  }
  if (mock.on && mock.phase !== "result" && mock.phase !== "setup") {
    mock.on = false;
    mock.phase = "setup";
    if (cfg.view === "mock") renderMock();
  }
}
// 모의고사 문제 구성: 묘사 → 습관·비교 → 기억에 남는 경험 → 롤플레이 11·12·13.
// 각 문제는 기존 묶음 또는 뼈대 응용(약 50%)으로 무작위 생성.
function buildMock() {
  const used = new Set(),
    qs = [];
  const pool = catTopics("survey").filter((i) => TOPICS[i].name !== "기억에 남는 경험");
  const mem = [];
  catTopics("survey").forEach((ti) =>
    TOPICS[ti].secs.forEach((s, si) => {
      if (s.q && s.tag === "4·7·10") mem.push({ ti, si });
    }),
  );
  const n = cfg.mockMode === "short" ? 1 : 3;
  // 출제 범위: 전체 / 서베이만 / 돌발만 / 롤플레이만
  const want = cfg.mockCat,
    doSurvey = want === "all" || want === "survey",
    doSp = want === "all" || want === "surprise",
    doRp = want === "all" || want === "rp";
  const add = (c, kind) => {
    const a = c.filter((x) => !used.has(x.ti + "." + x.si));
    const x = pick(a.length ? a : c);
    used.add(x.ti + "." + x.si);
    qs.push({ ti: x.ti, si: x.si, kind });
  };
  if (doSurvey)
    shuffle(pool.slice())
      .slice(0, n)
      .forEach((ti) => {
        const secs = qSecs(ti).map((x) => ({ ti, si: x.i, tag: x.s.tag }));
        const d = secs.filter((x) => x.tag === "2·5·8"),
          h = secs.filter((x) => x.tag === "3" || x.tag === "6·9"),
          m = secs.filter((x) => x.tag === "4·7·10");
        const key = SKEY[TOPICS[ti].name];
        const genQ = (tags, kind) => {
          const o = SKELS.filter((s) => tags.includes(s.tag) && s.slots[key]);
          if (!key || !o.length) return false;
          qs.push({
            ti,
            si: -1,
            kind: kind + " (뼈대 응용)",
            gen: true,
            sec: genSec(pick(o).id, key),
          });
          return true;
        };
        if (!(Math.random() < 0.5 && genQ(["2·5·8"], "묘사"))) add(d.length ? d : secs, "묘사");
        if (!(Math.random() < 0.5 && genQ(["3", "6·9"], "습관·비교·최근")))
          add(h.length ? h : secs, "습관·비교·최근");
        if (!((!m.length || Math.random() < 0.5) && genQ(["4·7·10"], "기억에 남는 경험")))
          add(m.length ? m : mem, "기억에 남는 경험");
      });
  // 돌발 주제: 시설 7단계 / 돌발 기본형 / 신경향 중에서 서로 다른 주제로 뽑는다
  if (doSp)
    shuffle(catTopics("surprise"))
      .slice(
        0,
        want === "all" ? (cfg.mockMode === "short" ? 1 : 2) : cfg.mockMode === "short" ? 2 : 3,
      )
      .forEach((ti) =>
        add(
          qSecs(ti).map((x) => ({ ti, si: x.i })),
          "돌발 주제",
        ),
      );
  const rpTis = catTopics("rp");
  const rp = rpTis.flatMap((ti) => qSecs(ti).map((x) => ({ ti, si: x.i, tag: x.s.tag })));
  const genRP = (tag, kind) => {
    const sk0 = pick(SKELS.filter((s) => s.tag === tag));
    qs.push({
      ti: rpTis[0],
      si: -1,
      kind: kind + " (뼈대 응용)",
      gen: true,
      sec: genSec(sk0.id, pick(Object.keys(sk0.slots))),
    });
  };
  if (doRp) {
    // 11번은 질문하기 뼈대(친구편 L / 업체편 M)로 매번 새로 만든다
    genRP("RP11", "롤플레이 11");
    if (Math.random() < 0.5) genRP("RP12", "롤플레이 12");
    else
      add(
        rp.filter((x) => x.tag === "RP12"),
        "롤플레이 12",
      );
    if (Math.random() < 0.5) genRP("RP13", "롤플레이 13");
    else
      add(
        rp.filter((x) => x.tag === "RP13"),
        "롤플레이 13",
      );
  }
  // 각 문제에 분류(서베이/돌발/롤플레이)를 붙인다
  qs.forEach((q) => {
    q.cat = q.kind === "돌발 주제" ? "surprise" : q.kind.startsWith("롤플레이") ? "rp" : "survey";
  });
  return qs;
}
/* ===== 필수 표현 =====
 문장을 시작하는 틀 25개: 뜻과 예문을 보고, 영어를 가려 뜻만 보고 말해 본 뒤 눌러서 확인 */
const phr = { hide: false, open: new Set(), mode: "en", grp: "all", tok: -1, loop: false };
const phrRunning = () => phr.tok === token && phr.kind === "list";
const phrScriptRunning = () => phr.tok === token && phr.kind === "script";
// 내가 고른 첫어구를 이어 붙여 하나의 스크립트(문단) 만들기: 어구만 읽어 주고 나머지는 내가 채워 말한다
phr.secs = 20;
phr.lmode = "en";
phr.llaps = 3;
phr.lgap = 7;
phr.lnext = true;
phr.lnext = true;
phr.sets = [{ name: "세트 1", sel: [] }];
phr.act = 0;
Object.defineProperty(phr, "sel", {
  get: () => phr.sets[phr.act].sel,
  set: (v) => {
    phr.sets[phr.act].sel = v;
  },
});
const phrOk = (id) => {
  const [g, i] = String(id).split(".");
  return !!(PHRASES[g] && PHRASES[g].items[i] && !PHRASES[g].items[i].hidden);
};
// 중복이라 숨긴 카드(hidden)는 같은 뜻의 남은 카드(alias)로 바꿔 준다 (예전에 담아 둔 세트 호환)
const phrRemap = (id) => {
  const [g, i] = String(id).split(".");
  const it = PHRASES[g] && PHRASES[g].items[i];
  if (!it || !it.alias) return id;
  for (let gg = 0; gg < PHRASES.length; gg++) {
    const k = PHRASES[gg].items.findIndex((x) => x.en === it.alias && !x.hidden);
    if (k >= 0) return gg + "." + k;
  }
  return id;
};
try {
  const sv = JSON.parse(localStorage.getItem("opic_phr_sets") || "null");
  if (sv && Array.isArray(sv.sets) && sv.sets.length) {
    phr.sets = sv.sets.map((x, n) => ({
      name: String(x.name || "세트 " + (n + 1)),
      sel: (x.sel || []).map(phrRemap).filter(phrOk),
    }));
    phr.act = Math.min(Math.max(+sv.act || 0, 0), phr.sets.length - 1);
  } else {
    phr.sets[0].sel = JSON.parse(localStorage.getItem("opic_phr_sel") || "[]").filter(phrOk);
  }
} catch (e) {}
// 롤플레이 틀 기본 세트: 앱을 처음 열 때 한 번만 추가한다 (지워도 다시 생기지 않음)
const RP_PRESETS = [
  [
    "RP 질문 틀",
    [
      "Hi, it's … I'm calling about",
      "Which day is good for you?",
      "What time is good for you?",
      "Where should we meet?",
      "What should I bring?",
      "How many people are coming?",
      "Thank you, I got it",
    ],
  ],
  [
    "RP 대안 틀 (늦음·고장)",
    [
      "I'm sorry, but I have a problem",
      "My car broke down",
      "I'll be late",
      "I have two ideas",
      "First, we can",
      "Second, we can",
      "Which one is better for you?",
      "Please call me back",
    ],
  ],
  [
    "RP 대안 틀 (가족 아픔)",
    [
      "I'm sorry, but I have a problem",
      "My brother is sick",
      "I have two ideas",
      "First, we can",
      "Second, we can",
      "Which one is better for you?",
      "I'm really sorry about this",
    ],
  ],
];
const RP_PRESETS2 = [
  [
    "경험 이야기 틀 (과거)",
    [
      "It happened about … ago",
      "I was with",
      "At first,",
      "Then,",
      "After that,",
      "In the end,",
      "I felt",
      "It was a great memory",
    ],
  ],
  [
    "비교·선택 틀",
    [
      "Both are similar because",
      "The first one is",
      "The second one is",
      "However,",
      "I prefer … because",
      "I like the second one better",
    ],
  ],
  [
    "문제·해결 틀",
    [
      "I think there are some problems",
      "The biggest problem is",
      "Another problem is",
      "One solution is",
      "Another solution is",
      "That's how we can solve it",
    ],
  ],
];
const RP_PRESETS3 = [
  [
    "자기소개 틀",
    [
      "Hi, my name is",
      "Nice to meet you",
      "I'm a software developer at",
      "I've worked in the IT field for about",
      "I live alone in",
      "In my free time, I like",
      "I'm taking this test because",
      "I'll do my best",
    ],
  ],
];
const RP_PRESETS4 = [
  [
    "RP 대안 틀 (예약 취소)",
    [
      "I'm sorry, but I have a problem",
      "We have to cancel our reservation",
      "I'll call the restaurant",
      "I have two ideas",
      "First, we can",
      "Second, we can",
      "Which one is better for you?",
      "I'm really sorry about this",
    ],
  ],
  [
    "RP 식당 전화 (예약 취소·변경)",
    [
      "I made a reservation for",
      "I need to cancel my reservation",
      "Can I change it to",
      "Is there an open table on",
      "Is there any cancellation fee?",
      "Could you send me a confirmation?",
      "I'm sorry for the trouble",
    ],
  ],
];
const RP_PRESETS5 = [
  [
    "장소 묘사 틀",
    [
      "Let me tell you about",
      "It's located in",
      "It looks",
      "You can see",
      "The atmosphere is",
      "It's famous for",
      "That's why I like it",
    ],
  ],
  [
    "물건 묘사 틀",
    [
      "Let me tell you about",
      "I bought it",
      "It looks",
      "It has",
      "It comes in",
      "It can",
      "What I like most is",
      "I use it for",
      "That's why I like it",
    ],
  ],
];
// 기본 세트를 한 번만 추가한다 (flag로 구분, 지워도 다시 생기지 않음)
function seedSets(flag, presets) {
  try {
    if (localStorage.getItem(flag)) return;
    const idOf = (en) => {
      for (let g = 0; g < PHRASES.length; g++) {
        const i = PHRASES[g].items.findIndex((x) => x.en === en && !x.hidden);
        if (i >= 0) return g + "." + i;
      }
      return null;
    };
    const only = phr.sets.length === 1 && !phr.sets[0].sel.length;
    const add = presets.map(([name, ens]) => ({ name, sel: ens.map(idOf).filter(Boolean) }));
    phr.sets = only ? add : phr.sets.concat(add);
    phr.act = Math.min(phr.act, phr.sets.length - 1);
    localStorage.setItem(flag, "1");
    localStorage.setItem("opic_phr_sets", JSON.stringify({ act: phr.act, sets: phr.sets }));
  } catch (e) {}
}
seedSets("opic_phr_seed1", RP_PRESETS);
seedSets("opic_phr_seed2", RP_PRESETS2);
seedSets("opic_phr_seed3", RP_PRESETS3);
seedSets("opic_phr_seed4", RP_PRESETS4);
// 예전의 합쳐진 "묘사 틀 (장소·물건)" 세트는 장소/물건 두 세트로 대체한다
try {
  if (!localStorage.getItem("opic_phr_seed5")) {
    const k = phr.sets.findIndex((x) => x.name === "묘사 틀 (장소·물건)");
    if (k >= 0 && phr.sets.length > 1) {
      phr.sets.splice(k, 1);
      phr.act = Math.min(phr.act, phr.sets.length - 1);
    }
  }
} catch (e) {}
seedSets("opic_phr_seed5", RP_PRESETS5);
// 모든 틀의 마지막 문장은 완성된 짧은 문장이 되도록, 예전에 만들어진 세트의 마지막 칸을 교체한다
try {
  if (!localStorage.getItem("opic_phr_seed6")) {
    const idOf2 = (en) => {
      for (let g = 0; g < PHRASES.length; g++) {
        const i = PHRASES[g].items.findIndex((x) => x.en === en && !x.hidden);
        if (i >= 0) return g + "." + i;
      }
      return null;
    };
    const fix = {
      "비교·선택 틀": ["That's why I like it", "I like the second one better"],
      "문제·해결 틀": ["In short", "That's how we can solve it"],
    };
    phr.sets.forEach((st) => {
      const f = fix[st.name];
      if (!f || !st.sel.length) return;
      if (st.sel[st.sel.length - 1] === idOf2(f[0])) st.sel[st.sel.length - 1] = idOf2(f[1]);
    });
    localStorage.setItem("opic_phr_seed6", "1");
    localStorage.setItem("opic_phr_sets", JSON.stringify({ act: phr.act, sets: phr.sets }));
  }
} catch (e) {}
// 틀 개편(카드 6~8개, 마지막은 "끝났다"는 신호 문장): 같은 이름의 기본 세트를 새 구성으로 교체한다
const RP_PRESETS6 = [
  [
    "RP 질문 틀",
    [
      "Hi, it's … I'm calling about",
      "Which day is good for you?",
      "What time is good for you?",
      "Where should we meet?",
      "What should I bring?",
      "How many people are coming?",
      "Thank you, I got it",
      "That's all I wanted to ask",
    ],
  ],
  [
    "RP 대안 틀 (늦음·고장)",
    [
      "I'm sorry, but I have a problem",
      "My car broke down",
      "Because of that,",
      "I have two ideas",
      "First, we can",
      "Second, we can",
      "Which one is better for you?",
      "Please call me back",
      "That's all I wanted to say",
    ],
  ],
  [
    "RP 대안 틀 (가족 아픔)",
    [
      "I'm sorry, but I have a problem",
      "My brother is sick",
      "Because of that,",
      "I have two ideas",
      "First, we can",
      "Second, we can",
      "Which one is better for you?",
      "I'm really sorry about this",
      "That's all I wanted to say",
    ],
  ],
  [
    "RP 대안 틀 (예약 취소)",
    [
      "I'm sorry, but I have a problem",
      "We have to cancel our reservation",
      "I have two ideas",
      "First, we can",
      "Second, we can",
      "Which one is better for you?",
      "I'm really sorry about this",
      "That's all I wanted to say",
    ],
  ],
  [
    "RP 식당 전화 (예약 취소·변경)",
    [
      "I made a reservation for",
      "I need to cancel my reservation",
      "Can I change it to",
      "Is there an open table on",
      "Is there any cancellation fee?",
      "Could you send me a confirmation?",
      "I'm sorry for the trouble",
      "That's all I wanted to say",
    ],
  ],
  [
    "경험 이야기 틀 (과거)",
    [
      "It happened about … ago",
      "At first,",
      "Then,",
      "Because of that,",
      "After that,",
      "In the end,",
      "I felt",
      "It was a great memory",
      "That's my story",
    ],
  ],
  [
    "비교·선택 틀",
    [
      "Both are similar because",
      "The first one is",
      "The second one is",
      "However,",
      "For me, …",
      "I prefer … because",
      "I like the second one better",
      "That's my answer",
    ],
  ],
  [
    "문제·해결 틀",
    [
      "I think there are some problems",
      "The biggest problem is",
      "Because",
      "Another problem is",
      "One solution is",
      "Another solution is",
      "That's how we can solve it",
      "That's my answer",
    ],
  ],
  [
    "자기소개 틀",
    [
      "Hi, my name is",
      "I'm a software developer at",
      "I've worked in the IT field for about",
      "I live alone in",
      "In my free time, I like",
      "I'm taking this test because",
      "I'll do my best",
      "That's all about me",
    ],
  ],
  [
    "장소 묘사 틀",
    [
      "Let me tell you about",
      "It's located in",
      "It looks",
      "You can see",
      "Especially …",
      "The atmosphere is",
      "That's why I like it",
      "That's all about this place",
    ],
  ],
  [
    "물건 묘사 틀",
    [
      "Let me tell you about",
      "It looks",
      "It has",
      "It can",
      "What I like most is",
      "I use it for",
      "Most of the time, I",
      "That's why I like it",
      "That's all about it",
    ],
  ],
];
try {
  if (!localStorage.getItem("opic_phr_seed9")) {
    const idOf3 = (en) => {
      for (let g = 0; g < PHRASES.length; g++) {
        const i = PHRASES[g].items.findIndex((x) => x.en === en && !x.hidden);
        if (i >= 0) return g + "." + i;
      }
      return null;
    };
    RP_PRESETS6.forEach(([name, ens]) => {
      const sel = ens.map(idOf3).filter(Boolean);
      const k = phr.sets.findIndex((x) => x.name === name);
      if (k >= 0) phr.sets[k].sel = sel;
      else phr.sets.push({ name, sel });
    });
    phr.act = Math.min(phr.act, phr.sets.length - 1);
    localStorage.setItem("opic_phr_seed9", "1");
    localStorage.setItem("opic_phr_sets", JSON.stringify({ act: phr.act, sets: phr.sets }));
  }
} catch (e) {}
// 8회차 모의시험 복기에서 추가한 틀: 도움·영향(Q3), 어릴 적 vs 지금(Q9)
const RP_PRESETS7 = [
  [
    "도움·영향 틀",
    [
      "This helps me every day",
      "First, I use",
      "Second, I use",
      "Third, I use",
      "It makes my life easier",
      "So it's very important to me",
      "That's my answer",
    ],
  ],
  [
    "어릴 적 vs 지금 틀",
    [
      "When I was young,",
      "I felt",
      "Now I",
      "It's different because",
      "I miss those days",
      "That's my story",
    ],
  ],
];
seedSets("opic_phr_seed10", RP_PRESETS7);
const phrClean = (t) => t.replace(/\.{3}/g, ", ");
const phrItem = (id) => {
  const [g, i] = id.split(".");
  return PHRASES[g].items[i];
};
// 틀(트레이)의 문장 ↔ 아래 카드를 오가며 이동: 도착한 요소를 잠깐 강조한다
function phrJump(sel, fallback) {
  const el = document.querySelector(sel) || (fallback && document.querySelector(fallback));
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.add("flash");
  setTimeout(() => el.classList.remove("flash"), 1600);
}
function phrSave() {
  try {
    localStorage.setItem("opic_phr_sets", JSON.stringify({ act: phr.act, sets: phr.sets }));
  } catch (e) {}
}
// 선택 트레이(담은 어구 목록) 다시 그리기
function phrTray() {
  const el = $("#phTray");
  if (!el) return;
  const ss = $("#phSetList");
  if (ss)
    ss.innerHTML = phr.sets
      .map(
        (x, n) =>
          '<button class="chip' +
          (n === phr.act ? " on" : "") +
          '" data-phset="' +
          n +
          '">' +
          esc(x.name) +
          " (" +
          x.sel.length +
          ")</button>",
      )
      .join("");
  el.innerHTML = phr.sel.length
    ? '<ol class="trl">' +
      phr.sel
        .map(
          (id, n) =>
            '<li class="' +
            (phrItem(id).fill ? "fillc" : "") +
            '" data-trid="' +
            id +
            '"><span class="trt" data-phgo="' +
            id +
            '" title="누르면 아래 카드로 이동">' +
            esc(phrItem(id).en) +
            '</span><button class="mini" data-phmv="' +
            n +
            ',-1" aria-label="위로">↑</button><button class="mini" data-phmv="' +
            n +
            ',1" aria-label="아래로">↓</button><button class="mini" data-phrm="' +
            n +
            '" aria-label="빼기">✕</button></li>',
        )
        .join("") +
      "</ol>"
    : '<p class="note">아래 카드의 "＋ 담기"를 눌러 첫어구를 순서대로 고르세요.</p>';
  document.querySelectorAll("#v-phr [data-phadd]").forEach((b) => {
    const on = phr.sel.includes(b.dataset.phadd);
    b.textContent = on ? "✓ 담김" : "＋ 담기";
    b.classList.toggle("pri", on);
  });
  const fb = $("#phFillBar");
  if (fb) {
    const by = {};
    PHRASES.forEach((g, gi) =>
      g.items.forEach((it, ii) => {
        if (it.fill && !it.hidden)
          (by[it.ft || "기타"] = by[it.ft || "기타"] || []).push([gi + "." + ii, it]);
      }),
    );
    fb.innerHTML = Object.keys(by)
      .map(
        (k) =>
          '<div class="fillrow"><span class="fillft">' +
          esc(k) +
          "</span>" +
          by[k]
            .map(
              ([id, it]) =>
                '<button class="chip fillc" data-phfill="' + id + '">' + esc(it.en) + "</button>",
            )
            .join("") +
          "</div>",
      )
      .join("");
  }
  const lb = $("#phSListen");
  if (lb) lb.textContent = phr.tok === token && phr.kind === "slisten" ? "■ 정지" : "🔁 틀 듣기";
  const go = $("#phSGo");
  if (go) go.textContent = phrScriptRunning() ? "■ 정지" : "▶ 이어 말하기 연습";
}
async function phrScriptRun() {
  stopAll();
  const my = ++token;
  phr.tok = my;
  phr.kind = "script";
  phrTray();
  const st = $("#phStage");
  const items = phr.sel.map(phrItem);
  for (let n = 0; n < items.length; n++) {
    if (my !== token) return;
    const en = items[n].en;
    const draw = (left) => {
      st.innerHTML =
        '<div class="cnt">' +
        (n + 1) +
        " / " +
        items.length +
        '</div><div class="stbig">' +
        esc(en) +
        '</div><div class="note">이어서 마저 말해 보세요 · ' +
        (left > 0 ? left + "초" : "다음") +
        "</div>";
    };
    draw(phr.secs);
    await say(phrClean(en));
    for (let t = phr.secs; t > 0; t--) {
      if (my !== token) return;
      draw(t);
      await sleep(1000);
    }
  }
  if (my !== token) return;
  st.innerHTML =
    '<div class="note">끝! 오늘 만든 문단의 뼈대: <b>' +
    esc(items.map((x) => x.en).join(" / ")) +
    "</b></div>";
  phr.tok = -1;
  phr.kind = "";
  phrTray();
}
// 내가 만든 틀(세트)을 처음부터 끝까지 반복해서 들려준다: 틀 문장만 / 틀 문장 → 예문 / 한글 뜻 → 틀 문장
async function phrSetListen() {
  stopAll();
  const my = ++token;
  phr.tok = my;
  phr.kind = "slisten";
  phrTray();
  const st = $("#phStage");
  // 한 바퀴 = 지금 세트부터 (모든 틀 이어서가 켜져 있으면) 비어 있지 않은 모든 세트를 차례로 한 번씩
  const first = phr.act;
  const order = [];
  for (let s = 0; s < phr.sets.length; s++) {
    const c = (first + s) % phr.sets.length;
    if (phr.sets[c].sel.length && (phr.lnext || s === 0)) order.push(c);
  }
  for (let lap = 1; !phr.llaps || lap <= phr.llaps; lap++) {
    for (const c of order) {
      if (my !== token) return;
      if (phr.act !== c) {
        phr.act = c;
        phrSave();
        phrTray();
      }
      const items = phr.sets[c].sel.map(phrItem);
      for (let n = 0; n < items.length; n++) {
        if (my !== token) return;
        const it = items[n];
        document.querySelectorAll("#phTray li.now").forEach((x) => x.classList.remove("now"));
        const li = document.querySelectorAll("#phTray li")[n];
        if (li) li.classList.add("now");
        st.innerHTML =
          '<div class="cnt">' +
          lap +
          "바퀴째 · " +
          esc(phr.sets[c].name) +
          " · " +
          (n + 1) +
          " / " +
          items.length +
          '</div><div class="stbig">' +
          esc(it.en) +
          "</div>";
        if (phr.lmode === "ko") {
          await speak(it.ko.replace(/\s*\(채우기\)/, ""), null, "ko-KR");
          if (my !== token) return;
          await sleep(500);
          if (my !== token) return;
        }
        await say(phrClean(it.en));
        if (my !== token) return;
        // 내가 틀의 내용을 채워 말하는 시간 (카운트다운 표시)
        for (let t = phr.lgap; t > 0; t--) {
          const nt = st.querySelector(".lgapnote");
          if (nt) nt.textContent = "내용을 채워 말해 보세요 · " + t + "초";
          else
            st.insertAdjacentHTML(
              "beforeend",
              '<div class="note lgapnote">내용을 채워 말해 보세요 · ' + t + "초</div>",
            );
          await sleep(1000);
          if (my !== token) return;
        }
        if (phr.lmode === "ex") {
          await say(it.ex[0]);
          if (my !== token) return;
        }
        await sleep(500);
      }
      if (my !== token) return;
      await sleep(1200);
    }
  }
  if (my !== token) return;
  document.querySelectorAll("#phTray li.now").forEach((x) => x.classList.remove("now"));
  st.innerHTML = '<div class="note">끝! ' + phr.llaps + "바퀴를 모두 들었어요.</div>";
  phr.tok = -1;
  phr.kind = "";
  phrTray();
}
// 표현 묶음을 쭉 들려준다. mode "en": 표현 → 예문 / mode "ko": 한글 예문 → (내가 영어로 말함) → 정답 영어
function phrBtn() {
  const b = $("#phPlay");
  if (b) b.textContent = phrRunning() ? "■ 정지" : "▶ 시작";
}
async function phrRun() {
  stopAll();
  const my = ++token;
  phr.tok = my;
  phr.kind = "list";
  phrBtn();
  const list = [];
  PHRASES.forEach((g, gi) => {
    if (phr.grp === "all" || phr.grp === String(gi))
      g.items.forEach((it, ii) => it.hidden || list.push([gi + "." + ii, it]));
  });
  do {
    for (const [id, it] of list) {
      if (my !== token) return;
      document.querySelectorAll("#v-phr .bcard.now").forEach((x) => x.classList.remove("now"));
      const el = document.querySelector('#v-phr [data-ph="' + id + '"]');
      if (el) {
        el.classList.add("now");
        el.scrollIntoView({ block: "center", behavior: "smooth" });
      }
      if (phr.mode === "full") {
        // 한글 뜻 → 표현 말하기 → 표현 확인 → 한글 예문 → 문장 말하기 → 예문 확인
        const steps = [
          () => speak(it.ko, null, "ko-KR"),
          () => sleep(gapMs(it.en) * 1.3),
          () => say(phrClean(it.en)),
          () => sleep(gapMs(it.en)),
          () => speak(it.ex[1], null, "ko-KR"),
          () => sleep(gapMs(it.ex[0]) * 1.3),
          () => say(it.ex[0]),
          () => sleep(gapMs(it.ex[0])),
        ];
        for (const f of steps) {
          await f();
          if (my !== token) return;
        }
      } else if (phr.mode === "ko") {
        await speak(it.ex[1], null, "ko-KR");
        if (my !== token) return;
        await sleep(gapMs(it.ex[0]) * 1.3);
        if (my !== token) return;
        await say(phrClean(it.en) + ". " + it.ex[0]);
        if (my !== token) return;
        await sleep(700);
      } else {
        await say(phrClean(it.en));
        if (my !== token) return;
        await sleep(500);
        if (my !== token) return;
        await say(it.ex[0]);
        if (my !== token) return;
        await sleep(900);
      }
    }
    if (my === token && phr.loop) await sleep(1200);
  } while (my === token && phr.loop);
  if (my === token) {
    phr.tok = -1;
    phrBtn();
  }
}
// 필수 표현 화면: 묶음별 카드(표현·뜻·예문), 영어 가리기, 읽어 주기
function renderPhr() {
  let h =
    '<p class="note">문장을 여는 틀입니다. 뜻을 보고 표현과 예문을 말해 본 뒤 확인하세요. 시험에서는 이 틀로 문장을 시작하면 끊기지 않고 이어집니다.</p>' +
    '<div class="phbar"><button class="mini pri" id="phCards">🃏 카드 넘기며 외우기 (선택한 묶음)</button></div>' +
    '<div class="row2"><label class="lbl"><input type="checkbox" id="phHide"' +
    (phr.hide ? " checked" : "") +
    "> 영어 가리기 (뜻만 보고 말하기, 누르면 확인)</label></div>" +
    '<div class="trbox"><div class="lbl">내 스크립트 (첫어구 이어 붙이기)</div><div id="phSetList" class="setchips"></div><div class="phbar"><button class="mini" id="phSNew">＋ 새 세트</button><button class="mini" id="phSRen">이름</button><button class="mini" id="phSDel">삭제</button></div><div id="phTray"></div><div class="lbl" style="margin-top:6px">채우기 문장 끼우기 (눌러서 추가)</div><div id="phFillBar" class="setchips"></div>' +
    '<div class="phbar"><select id="phSecs"><option value="10"' +
    (phr.secs === 10 ? " selected" : "") +
    '>어구마다 10초</option><option value="20"' +
    (phr.secs === 20 ? " selected" : "") +
    '>20초</option><option value="30"' +
    (phr.secs === 30 ? " selected" : "") +
    '>30초</option><option value="45"' +
    (phr.secs === 45 ? " selected" : "") +
    '>45초</option></select><button class="mini pri" id="phSGo">▶ 이어 말하기 연습</button><button class="mini" id="phSClr">비우기</button></div>' +
    '<div class="phbar"><select id="phLMode"><option value="en"' +
    (phr.lmode === "en" ? " selected" : "") +
    '>틀 문장만 듣기</option><option value="ex"' +
    (phr.lmode === "ex" ? " selected" : "") +
    '>틀 문장 → 예문</option><option value="ko"' +
    (phr.lmode === "ko" ? " selected" : "") +
    '>한글 뜻 → 틀 문장</option></select><label class="ck"><input type="checkbox" id="phLNext"' +
    (phr.lnext ? " checked" : "") +
    '> 끝나면 다음 틀로</label><label class="ck"><input type="checkbox" id="phLNext"' +
    (phr.lnext ? " checked" : "") +
    '> 모든 틀 이어서</label><select id="phLGap">' +
    [0, 3, 5, 7, 10]
      .map(
        (v) =>
          '<option value="' +
          v +
          '"' +
          (phr.lgap === v ? " selected" : "") +
          ">" +
          (v ? "말할 시간 " + v + "초" : "말할 시간 없음") +
          "</option>",
      )
      .join("") +
    '</select><select id="phLLaps">' +
    [1, 2, 3, 5, 10, 0]
      .map(
        (v) =>
          '<option value="' +
          v +
          '"' +
          (phr.llaps === v ? " selected" : "") +
          ">" +
          (v ? v + "바퀴" : "무한 반복") +
          "</option>",
      )
      .join("") +
    '</select><button class="mini pri" id="phSListen">🔁 틀 듣기</button></div><div id="phStage" class="stage2"></div></div>' +
    '<div class="phbar"><select id="phMode"><option value="en"' +
    (phr.mode === "en" ? " selected" : "") +
    '>쭉 듣기 (표현 → 예문)</option><option value="ko"' +
    (phr.mode === "ko" ? " selected" : "") +
    '>한글 → 내가 영어로 말하기</option><option value="full"' +
    (phr.mode === "full" ? " selected" : "") +
    '>풀코스 (뜻 → 표현 → 예문)</option></select><select id="phGrp"><option value="all">전체</option>' +
    PHRASES.map(
      (g, gi) =>
        '<option value="' +
        gi +
        '"' +
        (phr.grp === String(gi) ? " selected" : "") +
        ">" +
        esc(g.grp) +
        "</option>",
    ).join("") +
    '</select><label class="ck"><input type="checkbox" id="phLoop"' +
    (phr.loop ? " checked" : "") +
    '> 끝나면 처음부터 반복</label><button class="mini pri" id="phPlay">' +
    (phrRunning() ? "■ 정지" : "▶ 시작") +
    "</button></div>";
  PHRASES.forEach((g, gi) => {
    h += '<div class="lbl" style="margin:12px 0 6px">' + esc(g.grp) + '</div><div class="list">';
    g.items.forEach((it, ii) => {
      if (it.hidden) return;
      const id = gi + "." + ii,
        show = !phr.hide || phr.open.has(id);
      h +=
        '<div class="bcard' +
        (it.fill ? " fillc" : "") +
        (show && phr.hide ? " shown" : "") +
        '" data-ph="' +
        id +
        '" style="display:block;cursor:pointer"><div class="ko" style="margin:0;font-weight:600">' +
        (known.has(it.en) ? "✓ " : "") +
        (it.fill ? '<span class="fillft">채우기 · ' + esc(it.ft || "") + "</span> " : "") +
        esc(it.ko) +
        '</div><div class="row2" style="margin:4px 0 0"><button class="mini" data-phadd="' +
        id +
        '">＋ 담기</button><button class="mini" data-phup="' +
        id +
        '">▲ 틀로</button></div>' +
        (show
          ? '<div class="en" style="margin-top:4px"><mark>' +
            esc(it.en) +
            '</mark></div><div class="en" style="font-weight:400;font-size:15px">' +
            esc(it.ex[0]) +
            '</div><div class="ko">' +
            esc(it.ex[1]) +
            '</div><div class="row2" style="margin:6px 0 0"><button class="mini" data-phsay="' +
            id +
            '">읽어 주기</button></div>'
          : "") +
        "</div>";
    });
    h += "</div>";
  });
  $("#v-phr").innerHTML = h;
  phrTray();
}
// 필수 표현 화면 이벤트: 가리기 체크, 카드 눌러 확인, 읽어 주기
$("#v-phr").addEventListener("change", (e) => {
  if (e.target.id === "phMode") phr.mode = e.target.value;
  if (e.target.id === "phGrp") phr.grp = e.target.value;
  if (e.target.id === "phLoop") phr.loop = e.target.checked;
  if (e.target.id === "phSecs") phr.secs = +e.target.value;
  if (e.target.id === "phLMode") phr.lmode = e.target.value;
  if (e.target.id === "phLLaps") phr.llaps = +e.target.value;
  if (e.target.id === "phLGap") phr.lgap = +e.target.value;
  if (e.target.id === "phLNext") phr.lnext = e.target.checked;
  if (e.target.id === "phLNext") phr.lnext = e.target.checked;
  if (e.target.id === "phHide") {
    phr.hide = e.target.checked;
    phr.open.clear();
    renderPhr();
  }
});
$("#v-phr").addEventListener("click", (e) => {
  const fl = e.target.closest("[data-phfill]");
  if (fl) {
    const at = Math.max(phr.sel.length - 1, 0);
    phr.sel.splice(at, 0, fl.dataset.phfill);
    phrSave();
    phrTray();
    return;
  }
  const go = e.target.closest("[data-phgo]");
  if (go) {
    phrJump('#v-phr [data-ph="' + go.dataset.phgo + '"]');
    return;
  }
  const up = e.target.closest("[data-phup]");
  if (up) {
    phrJump('#phTray [data-trid="' + up.dataset.phup + '"]', "#phTray");
    return;
  }
  const st = e.target.closest("[data-phset]");
  if (st) {
    stopAll();
    phr.tok = -1;
    phr.kind = "";
    phr.act = +st.dataset.phset;
    phrSave();
    phrTray();
    const sg = $("#phStage");
    if (sg) sg.innerHTML = "";
    return;
  }
  const ad = e.target.closest("[data-phadd]");
  if (ad) {
    const id = ad.dataset.phadd,
      k = phr.sel.indexOf(id);
    if (k >= 0) phr.sel.splice(k, 1);
    else phr.sel.push(id);
    phrSave();
    phrTray();
    return;
  }
  const mv = e.target.closest("[data-phmv]");
  if (mv) {
    const [n, d] = mv.dataset.phmv.split(",").map(Number);
    if (phr.sel[n + d] !== undefined) {
      [phr.sel[n], phr.sel[n + d]] = [phr.sel[n + d], phr.sel[n]];
      phrSave();
      phrTray();
    }
    return;
  }
  const rm = e.target.closest("[data-phrm]");
  if (rm) {
    phr.sel.splice(+rm.dataset.phrm, 1);
    phrSave();
    phrTray();
    return;
  }
  if (e.target.closest("#phSNew")) {
    const nm = prompt("새 세트 이름", "세트 " + (phr.sets.length + 1));
    if (nm && nm.trim()) {
      phr.sets.push({ name: nm.trim().slice(0, 30), sel: [] });
      phr.act = phr.sets.length - 1;
      phrSave();
      phrTray();
    }
    return;
  }
  if (e.target.closest("#phSRen")) {
    const nm = prompt("세트 이름 바꾸기", phr.sets[phr.act].name);
    if (nm && nm.trim()) {
      phr.sets[phr.act].name = nm.trim().slice(0, 30);
      phrSave();
      phrTray();
    }
    return;
  }
  if (e.target.closest("#phSDel")) {
    if (phr.sets.length > 1 && confirm('"' + phr.sets[phr.act].name + '" 세트를 삭제할까요?')) {
      phr.sets.splice(phr.act, 1);
      phr.act = Math.max(0, phr.act - 1);
      phrSave();
      phrTray();
    }
    return;
  }
  if (e.target.closest("#phSClr")) {
    phr.sel = [];
    phrSave();
    phrTray();
    return;
  }
  if (e.target.closest("#phSListen")) {
    if (phr.tok === token && phr.kind === "slisten") {
      stopAll();
      phr.tok = -1;
      phr.kind = "";
      phrTray();
    } else if (phr.sel.length) phrSetListen();
    return;
  }
  if (e.target.closest("#phSGo")) {
    if (phrScriptRunning()) {
      stopAll();
      phr.tok = -1;
      phr.kind = "";
      phrTray();
    } else if (phr.sel.length) phrScriptRun();
    return;
  }
  if (e.target.closest("#phCards")) {
    cardsOpen();
    return;
  }
  if (e.target.closest("#phPlay")) {
    if (phrRunning()) {
      stopAll();
      phr.tok = -1;
      phrBtn();
    } else phrRun();
    return;
  }
  const sy = e.target.closest("[data-phsay]");
  if (sy) {
    const [g, i] = sy.dataset.phsay.split(".");
    const it = PHRASES[g].items[i];
    stopAll();
    ++token;
    say(phrClean(it.en) + ". " + it.ex[0]);
    return;
  }
  const c = e.target.closest("[data-ph]");
  if (c && phr.hide) {
    const id = c.dataset.ph;
    if (phr.open.has(id)) phr.open.delete(id);
    else phr.open.add(id);
    renderPhr();
  }
});
// 표현 카드 슬라이드: 한 장씩 넘기며 외우기 (앞면 뜻 → 뒷면 표현·예문). 좌우 스와이프, 버튼, 방향키 지원
const cards = { list: [], i: 0, flip: false, auto: false, shuffle: false, only: false };
// 외운 표현 표시: 영어 표현 문자열을 기준으로 localStorage(opic_phr_known)에 저장
const known = new Set();
try {
  JSON.parse(localStorage.getItem("opic_phr_known") || "[]").forEach((x) => known.add(x));
} catch (e) {}
function knownSave() {
  try {
    localStorage.setItem("opic_phr_known", JSON.stringify([...known]));
  } catch (e) {}
}
function cardsBuild() {
  const out = [];
  PHRASES.forEach((g, gi) => {
    if (phr.grp === "all" || phr.grp === String(gi))
      g.items.forEach((it, ii) => it.hidden || out.push({ it, id: gi + "." + ii, grp: g.grp }));
  });
  cards.all = out.length;
  const left = cards.only ? out.filter((c) => !known.has(c.it.en)) : out.slice();
  out.length = 0;
  out.push(...left);
  if (cards.shuffle) out.sort(() => Math.random() - 0.5);
  cards.list = out;
  cards.i = Math.min(cards.i, Math.max(out.length - 1, 0));
}
function cardsDraw() {
  const ov = document.getElementById("cardsOv");
  if (!ov) return;
  const c = cards.list[cards.i];
  if (!c) {
    ov.querySelector(".cdPos").textContent = "0 / 0";
    ov.querySelector(".cdBody").innerHTML =
      "<p>" + (cards.only ? "모두 외웠어요! 🎉" : "카드가 없습니다") + "</p>";
    return;
  }
  const kn = known.has(c.it.en);
  ov.querySelector(".cdPos").textContent =
    cards.i + 1 + " / " + cards.list.length + (kn ? "  ✓ 외움" : "");
  ov.querySelector("#cdYes").classList.toggle("pri", !kn);
  ov.querySelector("#cdNo").classList.toggle("pri", kn);
  ov.querySelector(".cdStat").textContent = "외운 표현 " + known.size + "개";
  ov.querySelector(".cdGrp").textContent = c.grp;
  ov.querySelector(".cdBody").classList.toggle("fillc", !!c.it.fill);
  ov.querySelector(".cdBody").innerHTML = cards.flip
    ? '<div class="cdEn">' +
      esc(c.it.en) +
      '</div><div class="cdEx">' +
      esc(c.it.ex[0]) +
      '</div><div class="cdKo">' +
      esc(c.it.ex[1]) +
      '</div><div class="cdHint">뜻: ' +
      esc(c.it.ko) +
      "</div>"
    : '<div class="cdFront">' + esc(c.it.ko) + '</div><div class="cdHint">눌러서 영어 확인</div>';
  if (cards.flip && cards.auto) cardsSay();
}
function cardsSay() {
  const c = cards.list[cards.i];
  if (!c) return;
  stopAll();
  ++token;
  say(phrClean(c.it.en) + ". " + c.it.ex[0]);
}
function cardsGo(d) {
  const n = cards.i + d;
  if (n < 0 || n >= cards.list.length) return;
  stopAll();
  cards.i = n;
  cards.flip = false;
  cardsDraw();
}
function cardsClose() {
  stopAll();
  const ov = document.getElementById("cardsOv");
  if (ov) ov.remove();
  document.removeEventListener("keydown", cardsKey);
}
function cardsKey(e) {
  if (e.key === "ArrowRight") cardsGo(1);
  else if (e.key === "ArrowLeft") cardsGo(-1);
  else if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    cards.flip = !cards.flip;
    cardsDraw();
  } else if (e.key === "Escape") cardsClose();
}
function cardsOpen() {
  cardsClose();
  cards.i = 0;
  cards.flip = false;
  cardsBuild();
  const ov = document.createElement("div");
  ov.id = "cardsOv";
  ov.innerHTML =
    '<div class="cdTop"><span class="cdPos"></span><span class="cdGrp"></span><button class="mini" id="cdX">닫기</button></div>' +
    '<div class="cdBody" id="cdBody"></div>' +
    '<div class="cdMark"><button class="mini" id="cdNo">✗ 아직 못 외움</button><button class="mini" id="cdYes">✓ 외웠어요</button></div>' +
    '<div class="cdBar"><button class="mini" id="cdPrev">◀ 이전</button><button class="mini" id="cdSay">🔊 읽어 주기</button><button class="mini pri" id="cdNext">다음 ▶</button></div>' +
    '<div class="cdOpt"><label class="ck"><input type="checkbox" id="cdAuto"> 뒤집으면 자동 읽기</label><label class="ck"><input type="checkbox" id="cdShuf"> 섞기</label><label class="ck"><input type="checkbox" id="cdOnly"> 못 외운 것만</label></div><div class="cdStat"></div>';
  document.body.appendChild(ov);
  ov.addEventListener("click", (e) => {
    const t = e.target;
    if (t.id === "cdX") cardsClose();
    else if (t.id === "cdYes" || t.id === "cdNo") {
      const c = cards.list[cards.i];
      if (!c) return;
      if (t.id === "cdYes") known.add(c.it.en);
      else known.delete(c.it.en);
      knownSave();
      if (cards.i < cards.list.length - 1) cardsGo(1);
      else cardsDraw();
    } else if (t.id === "cdPrev") cardsGo(-1);
    else if (t.id === "cdNext") cardsGo(1);
    else if (t.id === "cdSay") {
      if (!cards.flip) {
        cards.flip = true;
        cardsDraw();
      }
      cardsSay();
    } else if (t.closest("#cdBody")) {
      cards.flip = !cards.flip;
      cardsDraw();
    }
  });
  ov.addEventListener("change", (e) => {
    if (e.target.id === "cdAuto") cards.auto = e.target.checked;
    if (e.target.id === "cdOnly") {
      cards.only = e.target.checked;
      cards.i = 0;
      cards.flip = false;
      cardsBuild();
      cardsDraw();
    }
    if (e.target.id === "cdShuf") {
      cards.shuffle = e.target.checked;
      cards.i = 0;
      cards.flip = false;
      cardsBuild();
      cardsDraw();
    }
  });
  let x0 = null;
  ov.addEventListener("touchstart", (e) => {
    x0 = e.touches[0].clientX;
  });
  ov.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 50) cardsGo(dx < 0 ? 1 : -1);
  });
  document.addEventListener("keydown", cardsKey);
  ov.querySelector("#cdAuto").checked = cards.auto;
  ov.querySelector("#cdShuf").checked = cards.shuffle;
  ov.querySelector("#cdOnly").checked = cards.only;
  cardsDraw();
}
// 모의고사 출제·표시 순서 (서베이 → 돌발 → 롤플레이)
const MOCK_ORDER = ["survey", "surprise", "rp"];
// 저장된 모의시험 세트(MOCK_SETS[idx])를 분류(서베이 → 돌발 → 롤플레이)별로 묶어 출제한다. 문제 번호는 제목에 남기고 모범답안은 결과 화면에서 확인
function buildReplay(idx) {
  const set = MOCK_SETS[idx];
  return set.qs
    .filter((r) => cfg.mockCat === "all" || r.cat === cfg.mockCat)
    .map((r, i) => [r, i])
    .sort((a, b) => MOCK_ORDER.indexOf(a[0].cat) - MOCK_ORDER.indexOf(b[0].cat) || a[1] - b[1])
    .map(([r]) => r)
    .map((r) => ({
      cat: r.cat,
      ti: 0,
      si: -1,
      kind: r.kind,
      tp: set.tp || set.name,
      gen: true,
      sec: { t: r.t, tag: r.tag, gen: true, q: r.q, s: r.s },
    }));
}
// 날짜별 복기 기록(MOCK_REVIEWS)을 최신순 접이식 목록으로 만든다: 종합 → 잘한 점 → 문제별 문제점·고칠 점 → 우선순위
function mockReviewHtml() {
  if (!MOCK_REVIEWS.length) return "";
  const li = (a) => a.map((x) => "<li>" + esc(x) + "</li>").join("");
  return (
    '<div class="lbl" style="margin:18px 0 6px">발화 노트 · 날짜별 평가와 복기</div>' +
    MOCK_REVIEWS.slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .map(
        (r) =>
          '<details class="res"><summary><span class="n">' +
          esc(r.date.slice(5).replace("-", "/")) +
          '</span><span class="tt">' +
          esc(r.title) +
          "</span></summary>" +
          '<div class="qen" style="font-size:15px">예상 등급: ' +
          esc(r.grade) +
          '</div><div class="qko">' +
          esc(r.summary) +
          "</div>" +
          '<div class="lbl" style="margin:10px 0 4px">잘한 점</div><ul class="rv">' +
          li(r.good) +
          '</ul><div class="lbl" style="margin:10px 0 4px">문제점과 고칠 점</div>' +
          r.problems
            .map(
              (p) =>
                '<div class="rvp"><b>' +
                esc(p.q) +
                '</b> <span class="tag">' +
                esc(p.cat) +
                "</span><div>" +
                esc(p.issue) +
                '</div><div class="k">→ ' +
                esc(p.fix) +
                "</div></div>",
            )
            .join("") +
          '<div class="lbl" style="margin:10px 0 4px">시험 전 우선순위</div><ol class="rv">' +
          li(r.actions) +
          '</ol><div class="row2">' +
          (MOCK_SETS[r.set]
            ? '<button class="big pri" data-mset="' + r.set + '">이 시험 문제 다시 풀기</button>'
            : "") +
          "</div></details>",
      )
      .join("")
  );
}
// 모의고사 화면 그리기: 설정 / 출제 중 / 답변 타이머 / 결과 (phase에 따라 다름)
function renderMock() {
  const el = $("#v-mock");
  if (mock.phase === "setup" || (!mock.on && mock.phase !== "result")) {
    const secs = [30, 45, 60, 90];
    el.innerHTML =
      '<p class="note">문제만 음성으로 읽어 줍니다. 아무것도 보지 않고 답하세요. 마이크 녹음은 이 페이지에서 쓸 수 없어서, 말한 시간만 기록합니다.</p>' +
      '<div class="row2"><span class="lbl">구성</span><div class="seg">' +
      [
        ["full", "전체"],
        ["short", "짧게"],
      ]
        .map(
          (o) =>
            '<button data-mm="' +
            o[0] +
            '" aria-pressed="' +
            (cfg.mockMode === o[0]) +
            '">' +
            o[1] +
            "</button>",
        )
        .join("") +
      "</div></div>" +
      '<div class="row2"><span class="lbl">범위</span><div class="seg">' +
      [["all", "전체"], ...CATS.map((c) => [c[0], c[1]])]
        .map(
          (o) =>
            '<button data-mc="' +
            o[0] +
            '" aria-pressed="' +
            (cfg.mockCat === o[0]) +
            '">' +
            o[1] +
            "</button>",
        )
        .join("") +
      '</div></div><div class="note">이번 구성: ' +
      buildMock().length +
      "문제" +
      (cfg.mockCat === "all" ? "" : " · " + CATS.find((c) => c[0] === cfg.mockCat)[1] + "만") +
      "</div>" +
      '<div class="row2"><span class="lbl">문제당 답변 시간</span><div class="seg">' +
      secs
        .map(
          (s) =>
            '<button data-ms="' +
            s +
            '" aria-pressed="' +
            (cfg.mockSecs === s) +
            '">' +
            s +
            "초</button>",
        )
        .join("") +
      "</div></div>" +
      '<div class="row2"><label class="lbl"><input type="checkbox" id="mCap"' +
      (cfg.mockCaption ? " checked" : "") +
      "> 문제 자막 보기</label>" +
      '<label class="lbl"><input type="checkbox" id="mAuto"' +
      (cfg.mockAuto ? " checked" : "") +
      "> 시간이 끝나면 자동으로 다음 문제</label></div>" +
      '<p class="note">전체: 서베이 주제 3개 × 3문제(묘사, 습관·비교·최근, 기억에 남는 경험) + 돌발 주제 2문제 + 롤플레이 11·12·13번. 각 문제는 절반쯤의 확률로, 응용 탭의 뼈대를 다른 주제에 바꿔 끼워 답해야 하는 문제로 나옵니다. 문제마다 한 번 다시 들을 수 있습니다.</p>' +
      '<button class="big live" data-mstart="1" style="width:100%">시작</button>' +
      '<div class="lbl" style="margin:16px 0 6px">저장된 모의시험 · 분류별로 묶어서 풉니다 (위 범위 적용)</div>' +
      MOCK_SETS.map(
        (m, i) =>
          '<button class="big" data-mset="' +
          i +
          '" style="width:100%;margin-bottom:8px;text-align:left">' +
          esc(m.name) +
          " · " +
          buildReplay(i).length +
          "문제" +
          (m.note
            ? '<small style="display:block;font-weight:400;opacity:.75">' + esc(m.note) + "</small>"
            : "") +
          "</button>",
      ).join("") +
      mockReviewHtml();
    return;
  }
  if (mock.phase === "result") {
    const tot = mock.res.reduce((a, b) => a + b, 0),
      avg = mock.res.length ? Math.round(tot / mock.res.length) : 0;
    let h =
      '<div class="qcard"><div class="qlab">결과</div><div class="qen">' +
      mock.qs.length +
      "문제 · 평균 " +
      avg +
      "초 / " +
      mock.total +
      "초</div>" +
      '<div class="qko">IM2는 문제당 30초 이상 막힘없이 이어 가는 것이 목표입니다. 너무 짧았던 문제는 빨간색으로 표시됩니다.</div></div>';
    let lastCat = "";
    mock.qs.forEach((q, i) => {
      if (q.cat && q.cat !== lastCat) {
        lastCat = q.cat;
        h +=
          '<div class="lbl" style="margin:12px 0 4px">' +
          CATS.find((c) => c[0] === q.cat)[1] +
          "</div>";
      }
      const tpn = q.tp || (q.gen ? "응용" : TOPICS[q.ti].name),
        sc = secOf(q),
        sec = mock.res[i] || 0,
        wk = !q.gen && weakSec.has(q.ti + "." + q.si);
      h +=
        '<details class="res"><summary><span class="n">Q' +
        (i + 1) +
        '</span><span class="tt">' +
        esc(tpn) +
        " · " +
        esc(sc.t) +
        '</span><span class="sec2 ' +
        (sec < 25 ? "low" : "") +
        '">' +
        sec +
        "초</span></summary>" +
        '<div class="qen" style="font-size:15px">' +
        esc(sc.q[0]) +
        '</div><div class="qko">' +
        esc(sc.q[1]) +
        "</div>" +
        '<div class="ans">' +
        sc.s
          .map(
            (p) =>
              '<div><div class="e">' +
              tplHtml(p[0], true) +
              '</div><div class="k">' +
              esc(p[1]) +
              "</div></div>",
          )
          .join("") +
        "</div>" +
        '<div class="row2"><button class="mini" data-rsay="' +
        i +
        '">정답 읽어 주기</button>' +
        (q.gen
          ? ""
          : '<button class="mini" data-rweak="' +
            i +
            '">' +
            (wk ? "약한 묶음 ★" : "약한 묶음 ☆") +
            "</button>") +
        "</div></details>";
    });
    h +=
      '<div class="nav2"><span></span><div class="g"><button class="big" data-mreset="1">설정으로</button><button class="big pri" data-mstart="1">다시 하기</button></div></div>';
    el.innerHTML = h;
    return;
  }
  // 진행 화면
  const q = mock.qs[mock.i],
    sc = secOf(q);
  const ph = mock.phase;
  const label = {
    ask: "문제를 듣는 중",
    ready: "곧 시작합니다",
    answer: "지금 말하세요",
    done: "시간 종료",
  }[ph];
  let h =
    '<div class="stage"><div class="cnt">Q ' +
    (mock.i + 1) +
    " / " +
    mock.qs.length +
    " · " +
    esc(q.kind) +
    "</div>" +
    '<div class="phase" id="mPhase">' +
    label +
    "</div>" +
    '<div class="ring"><svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="var(--surface2)" stroke-width="10"/>' +
    '<circle id="mRing" cx="100" cy="100" r="90" fill="none" stroke="' +
    (ph === "answer" ? "var(--live)" : "var(--accent)") +
    '" stroke-width="10" stroke-linecap="round" stroke-dasharray="565.5" stroke-dashoffset="0"/></svg>' +
    '<div class="t"><span id="mT">' +
    (ph === "ask" ? "♪" : Math.ceil(mock.left)) +
    "</span></div></div>";
  if (cfg.mockCaption) h += '<div class="cap">' + esc(sc.q[0]) + "</div>";
  h += '<div class="row2" style="justify-content:center">';
  if (ph === "ready" || ph === "ask")
    h +=
      '<button class="big" data-mreplay="1"' +
      (mock.replayed || ph === "ask" ? " disabled" : "") +
      '>문제 다시 듣기 (1회)</button><button class="big live" data-mgo="1">지금 시작</button>';
  if (ph === "answer") h += '<button class="big pri" data-mnext="1">답변 끝 · 다음 문제</button>';
  if (ph === "done") h += '<button class="big pri" data-mnext="1">다음 문제</button>';
  h += '<button class="big" data-mquit="1">그만하기</button></div></div>';
  el.innerHTML = h;
}
// 타이머 링과 남은 초 표시 갱신
function mockTick() {
  const ring = $("#mRing"),
    t = $("#mT");
  const total = mock.phase === "answer" ? mock.total : 5;
  if (ring)
    ring.setAttribute("stroke-dashoffset", String(565.5 * (1 - Math.max(0, mock.left) / total)));
  if (t) t.textContent = String(Math.max(0, Math.ceil(mock.left)));
}
// secs초 카운트다운을 시작하고 끝나면 onEnd 호출
function mockTimer(secs, onEnd) {
  if (mock.iv) clearInterval(mock.iv);
  const t0 = Date.now();
  mock.left = secs;
  mockTick();
  mock.iv = setInterval(() => {
    mock.left = secs - (Date.now() - t0) / 1000;
    mockTick();
    if (mock.left <= 0) {
      clearInterval(mock.iv);
      mock.iv = null;
      mock.left = 0;
      mockTick();
      onEnd();
    }
  }, 200);
}
// 질문을 읽어 주고(ask) 끝나면 준비 단계로 넘어간다
async function mockAsk() {
  stopAudio();
  const my = ++token;
  const q = mock.qs[mock.i],
    sc = secOf(q);
  mock.phase = "ask";
  mock.replayed = false;
  renderMock();
  await say(sc.q[0]);
  if (my !== token) return;
  mockReady(my);
}
// 준비 5초 카운트다운 후 답변 시작
function mockReady(my) {
  mock.phase = "ready";
  renderMock();
  mockTimer(5, () => {
    if (my === token) mockAnswer(my);
  });
}
// 답변 단계: 신호음 → 제한 시간 타이머 → 끝나면 자동으로 다음 문제(옵션)
function mockAnswer(my) {
  mock.phase = "answer";
  mock.t0 = Date.now();
  renderMock();
  beep(880);
  mockTimer(mock.total, () => {
    mock.res[mock.i] = mock.total;
    beep(440);
    mock.phase = "done";
    renderMock();
    if (cfg.mockAuto)
      setTimeout(() => {
        if (my === token && mock.phase === "done") mockNext();
      }, 1500);
  });
}
// 답변 시간을 기록하고 다음 문제로. 마지막이면 결과 화면으로
function mockNext() {
  if (mock.phase === "answer") {
    mock.res[mock.i] = Math.min(mock.total, Math.round((Date.now() - mock.t0) / 1000));
  }
  if (mock.iv) {
    clearInterval(mock.iv);
    mock.iv = null;
  }
  if (mock.i + 1 >= mock.qs.length) {
    token++;
    stopAudio();
    mock.phase = "result";
    renderMock();
    window.scrollTo({ top: 0 });
    return;
  }
  mock.i++;
  mockAsk();
}
// 모의고사 시작: 문제 생성, 상태 초기화, 첫 문제 출제
function mockStart(setIdx) {
  stopAll();
  mock.set = setIdx == null ? null : setIdx;
  mock.qs = mock.set == null ? buildMock() : buildReplay(mock.set);
  mock.i = 0;
  mock.res = [];
  mock.total = cfg.mockSecs;
  mock.on = true;
  keepAwake();
  mockAsk();
}

/* ===== 이벤트 ===== */
/* ===== 이벤트 연결 =====
 아래 리스너들은 화면별로 클릭/변경을 위임(delegation) 방식으로 처리한다 */
// 상단 탭 전환
$("#tabs").addEventListener("click", (e) => {
  const b = e.target.closest("[data-v]");
  if (b) setView(b.dataset.v);
});
// 대분류 선택
$("#cats").addEventListener("click", (e) => {
  const b = e.target.closest("[data-cat]");
  if (!b) return;
  if (b.dataset.cat === "mock" || b.dataset.cat === "phr") setView(b.dataset.cat);
  else setCat(b.dataset.cat);
});
// 주제 칩 선택
$("#chips").addEventListener("click", (e) => {
  const b = e.target.closest("[data-t]");
  if (!b) return;
  stopAll();
  cfg.topic = +b.dataset.t;
  cfg.sec = 0;
  cfg.bsec = 0;
  save();
  [...revealed].forEach((id) => reveal(id, false));
  brev.clear();
  renderChips();
  if (cfg.view === "listen") renderMain();
  if (cfg.view === "blank") renderBlank();
  if (cfg.view === "kw") {
    kwBuild();
    renderKw();
  }
  window.scrollTo({ top: 0 });
});
// 재생 범위 선택
$("#scope").addEventListener("click", (e) => {
  const b = e.target.closest("[data-s]");
  if (!b) return;
  cfg.scope = b.dataset.s;
  save();
  renderScope();
  if (playing) run(0);
});
// 재생 방식 선택
$("#modes").addEventListener("click", (e) => {
  const b = e.target.closest("[data-m]");
  if (!b) return;
  cfg.mode = b.dataset.m;
  save();
  [...revealed].forEach((id) => reveal(id, false));
  renderModes();
  renderMain();
  if (playing) run(qi);
});
// 듣기 탭 카드: 정답 펼치기, 이 문장부터 재생, 약한 문장 별표, 묶음 재생
$("#main").addEventListener("click", (e) => {
  const sec = e.target.closest("[data-play-sec]");
  if (sec) {
    cfg.sec = +sec.dataset.playSec;
    cfg.scope = "sec";
    save();
    renderScope();
    startFrom(cfg.topic + "." + cfg.sec + ".0");
    return;
  }
  const sy = e.target.closest("[data-say]");
  if (sy) {
    const id = sy.dataset.say;
    cfg.sec = byId[id].si;
    save();
    startFrom(id);
    return;
  }
  const wk = e.target.closest("[data-weak]");
  if (wk) {
    const id = wk.dataset.weak;
    weak.has(id) ? weak.delete(id) : weak.add(id);
    store.set("weak", [...weak]);
    const on = weak.has(id);
    wk.classList.toggle("on", on);
    wk.setAttribute("aria-pressed", on);
    wk.innerHTML = ICON_STAR(on);
    renderScope();
    return;
  }
  const rv = e.target.closest("[data-reveal]");
  if (rv) {
    const id = rv.dataset.reveal;
    reveal(id, !revealed.has(id));
  }
});
// 재생/일시정지 버튼
$("#play").addEventListener("click", () => {
  playing ? stopAll() : run(qi < queue.length && queue.length ? qi : firstIndex());
});
// 이전/다음 버튼: 문장 단위 또는 묶음 단위(unit='block')로 이동 후 그 위치에서 재생
function jump(dir) {
  if (!queue.length) {
    run(0);
    return;
  }
  if (cfg.unit !== "block") {
    run(Math.max(0, Math.min(queue.length - 1, qi + dir)));
    return;
  }
  const key = (x) => x.ti + "." + x.si,
    cur = key(queue[qi]);
  let i = qi;
  if (dir > 0) {
    while (i < queue.length && key(queue[i]) === cur) i++;
    if (i >= queue.length) i = 0;
  } else {
    let s = qi;
    while (s > 0 && key(queue[s - 1]) === cur) s--;
    if (qi > s) i = s;
    else {
      i = s - 1;
      if (i < 0) i = queue.length - 1;
      const k = key(queue[i]);
      while (i > 0 && key(queue[i - 1]) === k) i--;
    }
  }
  run(i);
}
// 이전/다음 이동
$("#prev").addEventListener("click", () => jump(-1));
$("#next").addEventListener("click", () => jump(1));
// 설정 패널 열기/닫기
$("#gear").addEventListener("click", () => {
  const p = $("#panel");
  p.hidden = !p.hidden;
  $("#gear").setAttribute("aria-expanded", !p.hidden);
});

// 1단계: 클릭 (문제 듣기, 묶음 선택, 정답 보기, 약한 묶음 표시 등)
$("#v-blank").addEventListener("click", async (e) => {
  const sc = TOPICS[cfg.topic].secs[cfg.bsec];
  if (e.target.closest("[data-qsay]")) {
    stopAll();
    const my = ++token;
    say(sc.q[0]);
    return;
  }
  const ps = e.target.closest("[data-bsec]");
  if (ps) {
    stopAll();
    cfg.bsec = +ps.dataset.bsec;
    save();
    brev.clear();
    renderBlank();
    return;
  }
  if (e.target.closest("[data-ball]")) {
    sc.s.forEach((p, ni) => bSet("b" + cfg.topic + "." + cfg.bsec + "." + ni, true));
    renderBlank();
    return;
  }
  if (e.target.closest("[data-bnone]")) {
    stopAll();
    brev.clear();
    renderBlank();
    return;
  }
  if (e.target.closest("[data-bread]")) {
    stopAll();
    const my = ++token;
    sc.s.forEach((p, ni) => bSet("b" + cfg.topic + "." + cfg.bsec + "." + ni, true));
    renderBlank();
    sayAll(
      sc.s.map((p) => plain(p[0])),
      my,
    );
    return;
  }
  const nx = e.target.closest("[data-bnext]");
  if (nx) {
    stopAll();
    const l = qSecs(cfg.topic);
    let k = l.findIndex((x) => x.i === cfg.bsec) + +nx.dataset.bnext;
    const ct = catTopics(cfg.cat);
    if (k >= l.length) {
      cfg.topic = ct[(ct.indexOf(cfg.topic) + 1) % ct.length];
      cfg.bsec = qSecs(cfg.topic)[0].i;
      renderChips();
    } else if (k < 0) {
      cfg.topic = ct[(ct.indexOf(cfg.topic) - 1 + ct.length) % ct.length];
      const l2 = qSecs(cfg.topic);
      cfg.bsec = l2[l2.length - 1].i;
      renderChips();
    } else cfg.bsec = l[k].i;
    save();
    brev.clear();
    renderBlank();
    window.scrollTo({ top: 0 });
    return;
  }
  const bc = e.target.closest("[data-b]");
  if (bc) {
    const id = bc.dataset.b,
      ni = +bc.dataset.ni,
      on = !brev.has(id);
    bSet(id, on);
    renderBlank();
    if (on) {
      stopAll();
      const my = ++token;
      say(plain(sc.s[ni][0]));
    }
  }
});
// 1단계: 체크박스 등 변경
$("#v-blank").addEventListener("change", (e) => {
  if (e.target.id === "koHint") {
    cfg.koHint = e.target.checked;
    save();
    renderBlank();
  }
});

// 2단계: 클릭 (범위, 섞기, 정답 보기, 이전/다음 등)
$("#v-kw").addEventListener("click", (e) => {
  const ks = e.target.closest("[data-ks]");
  if (ks) {
    stopAll();
    cfg.kwScope = ks.dataset.ks;
    save();
    kwBuild();
    renderKw();
    return;
  }
  const kh = e.target.closest("[data-kh]");
  if (kh) {
    cfg.kwHint = kh.dataset.kh;
    save();
    renderKw();
    return;
  }
  if (!kw.deck.length) return;
  const d = kw.deck[kw.i],
    sc = TOPICS[d.ti].secs[d.si];
  if (e.target.closest("[data-qsay]")) {
    stopAll();
    const my = ++token;
    say(sc.q[0]);
    return;
  }
  if (e.target.closest("[data-kshow]")) {
    stopAll();
    kw.shown = !kw.shown;
    renderKw();
    if (kw.shown) {
      const my = ++token;
      sayAll(
        sc.s.map((p) => plain(p[0])),
        my,
      );
    }
    return;
  }
  if (e.target.closest("[data-kweak]")) {
    const k = d.ti + "." + d.si;
    weakSec.has(k) ? weakSec.delete(k) : weakSec.add(k);
    store.set("weakSec", [...weakSec]);
    renderKw();
    return;
  }
  const kn = e.target.closest("[data-knav]");
  if (kn) {
    kwGo(+kn.dataset.knav);
  }
});
// 2단계: 입력 변경
$("#v-kw").addEventListener("change", (e) => {
  if (e.target.id === "kwShuf") {
    cfg.kwShuffle = e.target.checked;
    save();
    kwBuild();
    renderKw();
  }
});

// 응용 탭: 뼈대/주제 선택, 힌트·정답 토글, 다음 조합, 전체 재생
$("#v-skel").addEventListener("click", (e) => {
  const S = SKELS.find((s) => s.id === cfg.skSk),
    sec = genSec(S.id, cfg.skKey);
  const a = e.target.closest("[data-sksk]");
  if (a) {
    stopAll();
    cfg.skSk = a.dataset.sksk;
    sk.drill = null;
    save();
    sk.shown = false;
    renderSkel();
    return;
  }
  const b = e.target.closest("[data-skkey]");
  if (b) {
    stopAll();
    cfg.skKey = b.dataset.skkey;
    sk.drill = null;
    save();
    sk.shown = false;
    renderSkel();
    return;
  }
  if (e.target.closest("[data-qsay]")) {
    stopAll();
    ++token;
    say(sec.q[0]);
    return;
  }
  const dbtn = e.target.closest("[data-skdrill]");
  if (dbtn) {
    stopAll();
    if (dbtn.dataset.skdrill === "0") sk.drill = null;
    else {
      sk.drill = drillPick(S);
      ++token;
      say(genSec(S.id, sk.drill.key).q[0]);
    }
    sk.shown = false;
    renderSkel();
    return;
  }
  if (e.target.closest("[data-skdrillshow]") && sk.drill) {
    stopAll();
    sk.drill.shown = !sk.drill.shown;
    renderSkel();
    if (sk.drill.shown && cfg.skRead) {
      const ds = genSec(S.id, sk.drill.key),
        my = ++token;
      sayAll(
        sk.drill.idx.map((i) => plain(ds.s[i][0])),
        my,
      );
    }
    return;
  }
  if (e.target.closest("[data-skshow]")) {
    stopAll();
    sk.shown = !sk.shown;
    renderSkel();
    if (sk.shown && cfg.skRead) {
      const my = ++token;
      sayAll(
        sec.s.map((p) => plain(p[0])),
        my,
      );
    }
    return;
  }
  // 정답을 펼친 상태에서 '읽어 주기' 버튼: 자동 읽기가 꺼져 있어도 원할 때만 읽는다
  if (e.target.closest("[data-skread]")) {
    stopAll();
    const my = ++token;
    if (sk.drill && sk.drill.id === S.id) {
      const ds = genSec(S.id, sk.drill.key);
      sayAll(
        sk.drill.idx.map((i) => plain(ds.s[i][0])),
        my,
      );
    } else
      sayAll(
        sec.s.map((p) => plain(p[0])),
        my,
      );
    return;
  }
  if (e.target.closest("[data-sknext]")) {
    stopAll();
    const all = [];
    SKELS.filter((s) => s.grp === S.grp).forEach((s) =>
      Object.keys(s.slots).forEach((k) => {
        if (!(s.id === cfg.skSk && k === cfg.skKey)) all.push([s.id, k]);
      }),
    );
    const c = pick(all);
    cfg.skSk = c[0];
    cfg.skKey = c[1];
    save();
    sk.shown = false;
    renderSkel();
    ++token;
    say(genSec(c[0], c[1]).q[0]);
    return;
  }
  if (e.target.closest("[data-skall]")) {
    if (sk.playing) {
      stopAll();
      renderSkel();
    } else skPlayAll();
    return;
  }
});
// 응용 탭: 힌트 체크박스
$("#v-skel").addEventListener("change", (e) => {
  if (["skHint", "skHideEn", "skRead"].includes(e.target.id)) {
    cfg[e.target.id] = e.target.checked;
    save();
    renderSkel();
  }
});

// 모의고사: 모드·시간 선택, 시작, 다시 듣기, 다음 문제, 결과 화면 버튼
$("#v-mock").addEventListener("click", (e) => {
  const mc = e.target.closest("[data-mc]");
  if (mc) {
    cfg.mockCat = mc.dataset.mc;
    save();
    renderMock();
    return;
  }
  const mm = e.target.closest("[data-mm]");
  if (mm) {
    cfg.mockMode = mm.dataset.mm;
    save();
    renderMock();
    return;
  }
  const ms = e.target.closest("[data-ms]");
  if (ms) {
    cfg.mockSecs = +ms.dataset.ms;
    save();
    renderMock();
    return;
  }
  const mset = e.target.closest("[data-mset]");
  if (mset) {
    mockStart(+mset.dataset.mset);
    return;
  }
  if (e.target.closest("[data-mstart]")) {
    mockStart(mock.phase === "result" ? mock.set : null);
    return;
  }
  if (e.target.closest("[data-mreset]")) {
    stopAll();
    mock.phase = "setup";
    mock.on = false;
    renderMock();
    return;
  }
  if (e.target.closest("[data-mquit]")) {
    stopAll();
    mock.phase = mock.res.length ? "result" : "setup";
    mock.on = false;
    if (mock.phase === "result") {
      mock.qs = mock.qs.slice(0, mock.res.length);
    }
    renderMock();
    return;
  }
  if (e.target.closest("[data-mgo]")) {
    stopAudio();
    const my = ++token;
    if (mock.iv) {
      clearInterval(mock.iv);
      mock.iv = null;
    }
    mockAnswer(my);
    return;
  }
  if (e.target.closest("[data-mnext]")) {
    token++;
    mockNext();
    return;
  }
  if (e.target.closest("[data-mreplay]")) {
    if (mock.replayed) return;
    mock.replayed = true;
    if (mock.iv) {
      clearInterval(mock.iv);
      mock.iv = null;
    }
    stopAudio();
    const my = ++token;
    mock.phase = "ask";
    renderMock();
    say(secOf(mock.qs[mock.i]).q[0]).then(() => {
      if (my === token) mockReady(my);
    });
    return;
  }
  const rs = e.target.closest("[data-rsay]");
  if (rs) {
    stopAll();
    const q = mock.qs[+rs.dataset.rsay];
    const my = ++token;
    sayAll(
      secOf(q).s.map((p) => plain(p[0])),
      my,
    );
    return;
  }
  const rw = e.target.closest("[data-rweak]");
  if (rw) {
    const q = mock.qs[+rw.dataset.rweak];
    if (q.gen) return;
    const k = q.ti + "." + q.si;
    weakSec.has(k) ? weakSec.delete(k) : weakSec.add(k);
    store.set("weakSec", [...weakSec]);
    rw.textContent = weakSec.has(k) ? "약한 묶음 ★" : "약한 묶음 ☆";
  }
});
// 모의고사: 자막·자동 진행 옵션
$("#v-mock").addEventListener("change", (e) => {
  if (e.target.id === "mCap") {
    cfg.mockCaption = e.target.checked;
    save();
  }
  if (e.target.id === "mAuto") {
    cfg.mockAuto = e.target.checked;
    save();
  }
});

// 저장된 설정 값을 설정창 입력 요소에 반영
function bindSettings() {
  $("#rate").value = cfg.rate;
  $("#rateV").textContent = cfg.rate.toFixed(2) + "x";
  $("#reps").value = cfg.reps;
  $("#repsV").textContent = cfg.reps + "회";
  $("#withQ").checked = cfg.withQ;
  $("#unit").value = cfg.unit;
  $("#gap").value = cfg.gap;
  $("#random").checked = cfg.random;
  $("#loop").checked = cfg.loop;
  $("#hideEn").checked = cfg.hideEn;
}
// 설정창: 속도 / 반복 횟수 / 따라 말할 시간 / 음성 / 랜덤 음성 / 반복 재생 / 영어 숨김 / 질문 읽기 / 반복 단위
$("#rate").addEventListener("input", (e) => {
  cfg.rate = +e.target.value;
  $("#rateV").textContent = cfg.rate.toFixed(2) + "x";
  save();
});
$("#reps").addEventListener("input", (e) => {
  cfg.reps = +e.target.value;
  $("#repsV").textContent = cfg.reps + "회";
  save();
});
$("#gap").addEventListener("change", (e) => {
  cfg.gap = +e.target.value;
  save();
});
$("#voice").addEventListener("change", (e) => {
  cfg.voice = e.target.value;
  save();
});
$("#random").addEventListener("change", (e) => {
  cfg.random = e.target.checked;
  save();
});
$("#loop").addEventListener("change", (e) => {
  cfg.loop = e.target.checked;
  save();
});
$("#hideEn").addEventListener("change", (e) => {
  cfg.hideEn = e.target.checked;
  save();
  renderMain();
});
$("#withQ").addEventListener("change", (e) => {
  cfg.withQ = e.target.checked;
  save();
});
$("#unit").addEventListener("change", (e) => {
  cfg.unit = e.target.value;
  save();
  if (playing) run(qi);
});
// 스페이스바로 재생/일시정지 (듣기 탭에서 입력 요소가 아닐 때)
document.addEventListener("keydown", (e) => {
  if (
    e.code === "Space" &&
    cfg.view === "listen" &&
    !/^(INPUT|SELECT|BUTTON|TEXTAREA|SUMMARY)$/.test(e.target.tagName)
  ) {
    e.preventDefault();
    $("#play").click();
  }
});
// 화면이 다시 보이면 Wake Lock 재요청 (탭 전환 시 해제되므로)
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && (playing || mock.on)) keepAwake();
});

/* ===== 시작 ===== */
// 초기 화면 구성 (칩·범위·방식·설정 → 음성 로드 → 마지막으로 보던 탭 열기)
/* ===== 시작 ===== */
renderChips();
renderScope();
renderModes();
bindSettings();
setPlayIcon();
setStatus();
if (SYNTH) {
  loadVoices();
  speechSynthesis.addEventListener && speechSynthesis.addEventListener("voiceschanged", loadVoices);
}
if (cfg.view === "mock" && mock.phase === "setup") {
}
setView(["listen", "blank", "kw", "skel", "phr", "mock"].includes(cfg.view) ? cfg.view : "listen");
