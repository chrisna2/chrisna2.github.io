// 롤플레이 주제(TOPICS의 마지막 항목)의 인덱스
const RP_TI = TOPICS.length - 1;
// 템플릿의 빈칸 표시 {}를 제거해 읽을 수 있는 순수 문장으로 만든다
const plain = (s) => s.replace(/[{}]/g, "");

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
    skHint: false,
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
function speak(text, voice) {
  return new Promise((res) => {
    if (!SYNTH) {
      res();
      return;
    }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
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
  ["rp", "롤플레이", "11·12·13번"],
  ["mock", "3단계", "모의고사"],
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
function setView(v) {
  stopAll();
  cfg.view = v;
  save();
  renderTabs();
  $("#v-listen").hidden = v !== "listen";
  $("#v-blank").hidden = v !== "blank";
  $("#v-kw").hidden = v !== "kw";
  $("#v-skel").hidden = v !== "skel" && v !== "rp";
  $("#v-mock").hidden = v !== "mock";
  $("#chips").hidden = v === "mock" || v === "skel" || v === "rp";
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
  if (v === "skel" || v === "rp") {
    sk.shown = false;
    sk.drill = null;
    renderSkel();
  }
  if (v === "mock") renderMock();
  window.scrollTo({ top: 0 });
}
// 주제 칩(기억에 남는 경험, 집, 영화 …) 그리기
function renderChips() {
  $("#chips").innerHTML = TOPICS.map(
    (t, i) =>
      '<button class="chip" data-t="' +
      i +
      '" aria-pressed="' +
      (i === cfg.topic) +
      '">' +
      esc(t.name) +
      "</button>",
  ).join("");
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
  if (cfg.scope === "all") return ITEMS.slice();
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
// 롤플레이 뼈대(L·M·H·I·J)인지 판별: tag가 RP11 / RP12 / RP13
const isRpSk = (S) => S.tag.startsWith("RP");
// 현재 탭에 보여 줄 뼈대 목록: 롤플레이 탭이면 롤플레이 뼈대만, 응용 탭이면 나머지
const skList = () => SKELS.filter((s) => isRpSk(s) === (cfg.view === "rp"));
// 응용 탭 / 롤플레이 탭 화면(같은 렌더러 공유): 뼈대 선택(유형별 그룹) → 주제 선택 → 질문과 채워진 뼈대, 주제별 비교표
function renderSkel() {
  const list = skList(),
    rpv = cfg.view === "rp";
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
    '<div class="lbl" style="margin-bottom:4px">주제 (문제)</div><div class="pills">' +
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
      (dr.shown ? "정답 가리기" : "모범 질문 보기 · 읽어 주기") +
      "</button></div>";
    h += '<div class="note" id="skStatus"></div>';
  } else {
    h += qCard(sec, 0, "Q · 뼈대 " + S.name + " × " + kn(S, cfg.skKey));
    h +=
      '<div class="row2"><span class="lbl">이 뼈대로 말하세요. 빈칸은 이 주제에 맞는 내용으로 바꿔 끼웁니다.</span></div>';
    h +=
      '<div class="row2"><label class="lbl"><input type="checkbox" id="skHint"' +
      (cfg.skHint ? " checked" : "") +
      "> 빈칸 힌트 보기 (한글)</label></div>";
    h +=
      '<div class="ans">' +
      sec.s
        .map(
          (p) =>
            '<div><div class="e">' +
            tplHtml(p[0], sk.shown) +
            "</div>" +
            (sk.shown
              ? '<div class="k">' + esc(p[1]) + "</div>"
              : cfg.skHint && p[3]
                ? '<div class="k">힌트: ' + esc(p[3]) + "</div>"
                : "") +
            "</div>",
        )
        .join("") +
      "</div>";
    h +=
      '<div class="row2"><button class="big pri" data-skshow="1">' +
      (sk.shown ? "정답 가리기" : "정답 보기 · 읽어 주기") +
      "</button>" +
      '<button class="big" data-sknext="1">다음 조합 (랜덤)</button>' +
      '<button class="big' +
      (sk.playing ? " live" : "") +
      '" data-skall="1">' +
      (sk.playing ? "정지" : "이 뼈대로 모든 주제 이어 듣기") +
      "</button></div>";
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
  const pool = [];
  TOPICS.forEach((t, i) => {
    if (!t.rp && t.name !== "기억에 남는 경험") pool.push(i);
  });
  const mem = [];
  TOPICS.forEach((t, ti) =>
    t.secs.forEach((s, si) => {
      if (s.q && s.tag === "4·7·10") mem.push({ ti, si });
    }),
  );
  const n = cfg.mockMode === "short" ? 1 : 3;
  const add = (c, kind) => {
    const a = c.filter((x) => !used.has(x.ti + "." + x.si));
    const x = pick(a.length ? a : c);
    used.add(x.ti + "." + x.si);
    qs.push({ ti: x.ti, si: x.si, kind });
  };
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
  const rp = qSecs(RP_TI).map((x) => ({ ti: RP_TI, si: x.i, tag: x.s.tag }));
  const genRP = (tag, kind) => {
    const sk0 = pick(SKELS.filter((s) => s.tag === tag));
    qs.push({
      ti: RP_TI,
      si: -1,
      kind: kind + " (뼈대 응용)",
      gen: true,
      sec: genSec(sk0.id, pick(Object.keys(sk0.slots))),
    });
  };
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
  return qs;
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
        ["full", "전체 12문제"],
        ["short", "짧게 6문제"],
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
      '<p class="note">전체: 주제 3개 × 3문제(묘사, 습관·비교·최근, 기억에 남는 경험) + 롤플레이 11·12·13번. 각 문제는 절반쯤의 확률로, 응용 탭의 뼈대를 다른 주제에 바꿔 끼워 답해야 하는 문제로 나옵니다. 문제마다 한 번 다시 들을 수 있습니다.</p>' +
      '<button class="big live" data-mstart="1" style="width:100%">시작</button>';
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
    mock.qs.forEach((q, i) => {
      const tpn = q.gen ? "응용" : TOPICS[q.ti].name,
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
function mockStart() {
  stopAll();
  mock.qs = buildMock();
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
    if (k >= l.length) {
      cfg.topic = (cfg.topic + 1) % TOPICS.length;
      cfg.bsec = qSecs(cfg.topic)[0].i;
      renderChips();
    } else if (k < 0) {
      cfg.topic = (cfg.topic - 1 + TOPICS.length) % TOPICS.length;
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
    if (sk.drill.shown) {
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
    if (sk.shown) {
      const my = ++token;
      sayAll(
        sec.s.map((p) => plain(p[0])),
        my,
      );
    }
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
  if (e.target.id === "skHint") {
    cfg.skHint = e.target.checked;
    save();
    renderSkel();
  }
});

// 모의고사: 모드·시간 선택, 시작, 다시 듣기, 다음 문제, 결과 화면 버튼
$("#v-mock").addEventListener("click", (e) => {
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
  if (e.target.closest("[data-mstart]")) {
    mockStart();
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
setView(["listen", "blank", "kw", "skel", "rp", "mock"].includes(cfg.view) ? cfg.view : "listen");
