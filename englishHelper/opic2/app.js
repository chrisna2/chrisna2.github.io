(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var cur = null, pool = [], rec = null, recOn = false, t0 = 0, tick = null, baseText = "";
  var HKEY = "opic2_hist";

  function store(get, v) {
    try { if (get) return JSON.parse(localStorage.getItem(HKEY) || "[]"); localStorage.setItem(HKEY, JSON.stringify(v)); } catch (e) {}
    return [];
  }

  // 세트 / 유형 선택
  var selSet = $("selSet");
  var all = document.createElement("option"); all.value = "all"; all.textContent = "전체 세트"; selSet.appendChild(all);
  SETS.forEach(function (s) { var o = document.createElement("option"); o.value = s.id; o.textContent = s.name; selSet.appendChild(o); });

  function buildPool() {
    var sv = selSet.value, cv = $("selCat").value; pool = [];
    SETS.forEach(function (s) {
      if (sv !== "all" && String(s.id) !== sv) return;
      s.qs.forEach(function (q) { if (cv === "all" || q.cat === cv) pool.push({ set: s, q: q }); });
    });
    $("count").textContent = "해당 문제 " + pool.length + "개";
  }
  selSet.onchange = $("selCat").onchange = buildPool;

  function pick() {
    if (!pool.length) return;
    cur = pool[Math.floor(Math.random() * pool.length)];
    show();
  }

  function frameOf(q) {
    return q.s.map(function (x) { return String(x[2] || "").split(" · ")[0]; });
  }

  function show() {
    var q = cur.q;
    $("work").hidden = false;
    $("qkind").textContent = q.kind; $("qt").textContent = cur.set.name + " · " + q.t;
    $("qen").textContent = q.q[0]; $("qko").textContent = q.q[1]; $("qko").hidden = true; $("btnKo").textContent = "한글 보기";
    var ol = $("frame"); ol.innerHTML = "";
    frameOf(q).forEach(function (k) { var li = document.createElement("li"); li.textContent = k; ol.appendChild(li); });
    renderVocab();
    $("txt").value = ""; $("result").hidden = true; $("model").hidden = true; $("model").innerHTML = "";
    $("ai").hidden = true; $("aiBody").innerHTML = ""; $("aiStatus").textContent = "";
    $("timer").textContent = "0:00"; stopRec();
    $("work").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function topicOf(q) {
    var t = (q.kind + " " + q.q[0]).toLowerCase();
    for (var i = 0; i < TOPICS.length; i++) if (TOPICS[i].re.test(t)) return TOPICS[i];
    return null;
  }
  function renderVocab() {
    var tp = topicOf(cur.q), box = $("vocab"); box.innerHTML = ""; box.classList.remove("hide"); $("btnVocab").textContent = "뜻 가리기";
    if (tp) tp.w.forEach(function (x) { var d = document.createElement("span"); d.className = "chip"; d.innerHTML = x[0] + "<small>" + x[1] + "</small>"; box.appendChild(d); });
    else box.textContent = "이 문제는 주제 단어가 없어요.";
    $("upgrade").innerHTML = UPGRADE.map(function (u) { return "<li><b>" + u[0] + "</b> → " + u[1] + "</li>"; }).join("");
    $("stall").textContent = STALL.join(" / ");
  }
  $("btnVocab").onclick = function () { var b = $("vocab"); b.classList.toggle("hide"); this.textContent = b.classList.contains("hide") ? "뜻 보기" : "뜻 가리기"; };

  $("btnRandom").onclick = pick;
  $("btnNext").onclick = pick;
  $("btnKo").onclick = function () { var h = $("qko").hidden; $("qko").hidden = !h; this.textContent = h ? "한글 숨기기" : "한글 보기"; };
  $("btnSpeak").onclick = function () {
    try { speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(cur.q.q[0]); u.lang = "en-US"; u.rate = 0.95; speechSynthesis.speak(u); } catch (e) {}
  };

  // 음성 인식 (되는 브라우저에서만)
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  $("srNote").textContent = SR ? "" : "이 브라우저는 음성 인식이 안 돼요. 직접 적어 주세요.";
  function fmt(s) { return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }
  function stopRec() {
    recOn = false; clearInterval(tick); $("btnRec").textContent = "말하기 시작"; $("btnRec").classList.remove("rec");
    try { if (rec) rec.stop(); } catch (e) {}
  }
  $("btnRec").onclick = function () {
    if (recOn) { stopRec(); return; }
    recOn = true; t0 = Date.now(); baseText = $("txt").value ? $("txt").value + " " : "";
    $("btnRec").textContent = "멈추기"; $("btnRec").classList.add("rec");
    tick = setInterval(function () { $("timer").textContent = fmt(Math.floor((Date.now() - t0) / 1000)); }, 500);
    if (!SR) return;
    rec = new SR(); rec.lang = "en-US"; rec.continuous = true; rec.interimResults = true;
    rec.onresult = function (e) {
      var s = ""; for (var i = 0; i < e.results.length; i++) s += e.results[i][0].transcript + " ";
      $("txt").value = baseText + s.trim();
    };
    rec.onend = function () { if (recOn) { try { baseText = $("txt").value + " "; rec.start(); } catch (e) {} } };
    rec.onerror = function () {};
    try { rec.start(); } catch (e) {}
  };

  // 점검
  function words(s) { return (s.toLowerCase().replace(/\{|\}/g, "").match(/[a-z']+/g) || []); }
  function grams(w, n) { var g = {}, c = 0; for (var i = 0; i + n <= w.length; i++) { g[w.slice(i, i + n).join(" ")] = 1; c++; } return { g: g, c: c }; }
  function similarity(user, model) {
    var u = grams(words(user), 4), m = grams(words(model), 4);
    if (!u.c) return 0; var hit = 0; for (var k in u.g) if (m.g[k]) hit++;
    return hit / Object.keys(u.g).length;
  }
  function count(re, s) { return (s.match(re) || []).length; }
  function row(label, val, cls) { return '<li><span>' + label + '</span><span class="' + cls + '">' + val + '</span></li>'; }

  $("btnCheck").onclick = function () {
    var text = $("txt").value.trim(); if (!text) return;
    var w = words(text).length, sec = Math.max(1, Math.round((Date.now() - t0) / 1000));
    var model = cur.q.s.map(function (x) { return x[0]; }).join(" ");
    var sim = similarity(text, model);
    var cn = { "and then": count(/\band then\b/gi, text), so: count(/\bso\b/gi, text), because: count(/\bbecause\b/gi, text), but: count(/\bbut\b/gi, text) };
    var ctotal = cn["and then"] + cn.so + cn.because + cn.but;
    var restarts = count(/\b([a-z']+)(,?\s+\1\b)+/gi, text);
    var fillers = count(/\b(uh|um|uhm|er|erm)\b/gi, text);
    var sents = Math.max(1, count(/[.!?]/g, text) || 1);
    var h = "";
    h += row("단어 수", w + "개", w >= 60 ? "ok" : w >= 35 ? "warn" : "bad");
    h += row("연결어 (and then / so / because / but)", ctotal + "개 · " + Object.keys(cn).map(function (k) { return k + " " + cn[k]; }).join(", "), ctotal >= 4 ? "ok" : ctotal >= 2 ? "warn" : "bad");
    h += row("같은 말 되풀이 (I, I)", restarts + "번", restarts === 0 ? "ok" : restarts <= 2 ? "warn" : "bad");
    h += row("uh / um", fillers + "번", fillers <= 2 ? "ok" : fillers <= 5 ? "warn" : "bad");
    h += row("참고 답안과 겹침 (4단어 묶음)", Math.round(sim * 100) + "%", sim < 0.25 ? "ok" : sim < 0.45 ? "warn" : "bad");
    var tp = topicOf(cur.q), lt = text.toLowerCase(), used = [];
    if (tp) tp.w.forEach(function (x) { var e = x[0].toLowerCase().replace(/ ~ing| ~/g, "").replace(/^be (a )?/, ""); if (e.length > 2 && lt.indexOf(e) > -1) used.push(x[0]); });
    var basic = count(/\b(good|great|really|very|nice)\b/gi, text);
    h += row("주제 단어 사용", used.length + "개" + (used.length ? " (" + used.slice(0, 5).join(", ") + ")" : ""), used.length >= 3 ? "ok" : used.length >= 1 ? "warn" : "bad");
    h += row("기본 단어 (good, great, really, very, nice)", basic + "번", basic <= 2 ? "ok" : basic <= 4 ? "warn" : "bad");
    $("stats").innerHTML = h;
    var v = [];
    if (sim >= 0.45) v.push("참고 답안을 거의 그대로 말했어요. 시험에서 암기로 보일 수 있으니 같은 틀로 다른 문장을 만들어 다시 말해 보세요.");
    else if (sim >= 0.25) v.push("참고 답안과 꽤 비슷해요. 몇 문장은 내 말로 바꿔 보세요.");
    else v.push("참고 답안을 외운 티가 거의 없어요. 좋아요.");
    if (ctotal < 2) v.push("연결어가 적어요. 문장 사이에 and then / so / because를 넣어 보세요.");
    if (restarts > 2) v.push("같은 말을 되풀이했어요. 꼬이면 그 문장을 짧게 끝내고 다음으로 가요.");
    if (basic > 4) v.push("good / great / really / very를 많이 썼어요. 위의 바꿔 쓰기 단어로 바꿔 보세요.");
    if (tp && !used.length) v.push("이 주제 단어를 하나도 쓰지 않았어요. 위 단어 중 3개를 골라 넣어 보세요.");
    if (w < 35) v.push("조금 짧아요. 이유와 느낌을 한 문장씩 더 붙여 보세요.");
    $("verdict").textContent = v.join(" ");
    $("result").hidden = false; $("model").hidden = true;
    var hist = store(true); hist.unshift({ d: nowLocal(), q: cur.q.t, w: w, c: ctotal, sim: Math.round(sim * 100) });
    store(false, hist.slice(0, 20)); renderHist();
  };

  $("btnModel").onclick = function () {
    var m = $("model"); m.hidden = !m.hidden; if (m.hidden) return;
    m.innerHTML = cur.q.s.map(function (x) { return "<p>" + x[0].replace(/[{}]/g, "") + '<br><span class="ko">' + x[1] + "</span></p>"; }).join("");
  };

  function renderHist() {
    var h = store(true); $("histBox").hidden = !h.length;
    $("hist").innerHTML = h.map(function (x) { return "<li>" + x.d + " · " + x.q + " · " + x.w + "단어 · 연결어 " + x.c + " · 겹침 " + x.sim + "%</li>"; }).join("");
  }
  // 로컬 시간 기록용 (YYYY-MM-DD HH:MM)
  function nowLocal() {
    var d = new Date(), p = function (n) { return String(n).padStart(2, "0"); };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) + " " + p(d.getHours()) + ":" + p(d.getMinutes());
  }

  // ===== AI 평가: 스크립트 → n8n 웹훅 → OpenAI → 결과 표시·기록 =====
  var AI_KEY = "opic2_ai", aiBusy = false;
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function aiLoad() { try { return JSON.parse(localStorage.getItem(AI_KEY) || "[]"); } catch (e) { return []; } }
  function aiSave(list) { try { localStorage.setItem(AI_KEY, JSON.stringify(list.slice(0, 30))); } catch (e) {} }
  function aiHtml(r) {
    var li = function (a) { return (a || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""); };
    var probs = (r.problems || []).map(function (p) {
      return '<div class="rvp"><div>' + esc(p.issue) + '</div><div class="k">→ ' + esc(p.fix) + "</div></div>";
    }).join("");
    return '<p class="verdict">예상 등급: ' + esc(r.grade) + "</p>" +
      "<p>" + esc(r.summary) + "</p>" +
      '<div class="lbl">잘한 점</div><ul class="rv">' + li(r.good) + "</ul>" +
      '<div class="lbl">문제점과 고칠 점</div>' + probs +
      '<div class="lbl">다음 시도 우선순위</div><ol class="rv">' + li(r.actions) + "</ol>";
  }
  function renderAI() {
    var list = aiLoad();
    $("aiHistBox").hidden = !list.length;
    $("aiHist").innerHTML = list.map(function (x) {
      return '<details class="ai-item"><summary>' + esc(x.d) + " · " + esc(x.q) + " · 예상 등급 " + esc(x.result.grade) + "</summary>" +
        '<div class="lbl">내 스크립트</div><p class="tx">' + esc(x.transcript) + "</p>" + aiHtml(x.result) + "</details>";
    }).join("");
  }

  $("btnAI").onclick = function () {
    var btn = this, text = $("txt").value.trim(), box = $("ai"), st = $("aiStatus"), body = $("aiBody");
    box.hidden = false; body.innerHTML = "";
    if (!cur) { st.textContent = "먼저 문제를 뽑아 주세요."; return; }
    if (!text) { st.textContent = "먼저 말하거나 스크립트를 적어 주세요."; return; }
    if (!window.N8N_EVAL_URL) { st.textContent = "설정 필요: opic2/config.js에 n8n 웹훅 주소를 넣어 주세요."; return; }
    if (aiBusy) return;
    if (recOn) stopRec();
    aiBusy = true; btn.disabled = true; btn.textContent = "평가 중…";
    st.textContent = "n8n → OpenAI로 평가를 요청하고 있어요. 보통 10~30초 걸려요.";
    var ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 60000);
    var payload = {
      question: cur.q.q[0], kind: cur.q.kind, transcript: text,
      seconds: t0 ? Math.max(1, Math.round((Date.now() - t0) / 1000)) : 0
    };
    fetch(window.N8N_EVAL_URL, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload), signal: ctrl ? ctrl.signal : undefined
    })
      .then(function (res) { if (!res.ok) throw new Error("서버 응답 " + res.status); return res.json(); })
      .then(function (data) {
        if (data.error || !data.result) throw new Error(data.error || "응답 형식이 올바르지 않아요.");
        var r = data.result;
        st.textContent = "평가 완료";
        body.innerHTML = aiHtml(r);
        var list = aiLoad();
        list.unshift({ d: nowLocal(), q: cur.q.t, kind: cur.q.kind, transcript: text, result: r });
        aiSave(list); renderAI();
      })
      .catch(function (err) {
        var why = err && err.name === "AbortError" ? "시간 초과(60초)" : (err && err.message) || "알 수 없는 오류";
        st.textContent = "평가에 실패했어요: " + why + ". 다시 눌러 보세요.";
      })
      .then(function () {
        clearTimeout(timer); aiBusy = false; btn.disabled = false; btn.textContent = "AI 평가";
      });
  };

  buildPool(); renderHist(); renderAI();
})();
