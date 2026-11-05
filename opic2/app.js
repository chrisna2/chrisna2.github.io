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
    $("txt").value = ""; $("result").hidden = true; $("model").hidden = true; $("model").innerHTML = "";
    $("timer").textContent = "0:00"; stopRec();
    $("work").scrollIntoView({ behavior: "smooth", block: "start" });
  }

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
    $("stats").innerHTML = h;
    var v = [];
    if (sim >= 0.45) v.push("참고 답안을 거의 그대로 말했어요. 시험에서 암기로 보일 수 있으니 같은 틀로 다른 문장을 만들어 다시 말해 보세요.");
    else if (sim >= 0.25) v.push("참고 답안과 꽤 비슷해요. 몇 문장은 내 말로 바꿔 보세요.");
    else v.push("참고 답안을 외운 티가 거의 없어요. 좋아요.");
    if (ctotal < 2) v.push("연결어가 적어요. 문장 사이에 and then / so / because를 넣어 보세요.");
    if (restarts > 2) v.push("같은 말을 되풀이했어요. 꼬이면 그 문장을 짧게 끝내고 다음으로 가요.");
    if (w < 35) v.push("조금 짧아요. 이유와 느낌을 한 문장씩 더 붙여 보세요.");
    $("verdict").textContent = v.join(" ");
    $("result").hidden = false; $("model").hidden = true;
    var hist = store(true); hist.unshift({ d: new Date().toISOString().slice(0, 16).replace("T", " "), q: cur.q.t, w: w, c: ctotal, sim: Math.round(sim * 100) });
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
  buildPool(); renderHist();
})();
