(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var KEY = "opic2_words_unk", unk = {}, list = [], i = 0, flipped = false, rev = false;
  try { unk = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(unk)); } catch (e) {} }

  var sel = $("selTopic");
  var o = document.createElement("option"); o.value = "all"; o.textContent = "전체 주제"; sel.appendChild(o);
  TOPICS.forEach(function (t) { var x = document.createElement("option"); x.value = t.id; x.textContent = t.name + " (" + t.w.length + ")"; sel.appendChild(x); });

  function build() {
    list = [];
    TOPICS.forEach(function (t) {
      if (sel.value !== "all" && sel.value !== t.id) return;
      t.w.forEach(function (x) { if ($("selMode").value === "all" || unk[x[0]]) list.push({ en: x[0], ko: x[1], t: t.name }); });
    });
    i = 0; render();
  }
  function shuffle() { for (var k = list.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)), t = list[k]; list[k] = list[j]; list[j] = t; } i = 0; render(); }

  function render() {
    flipped = false; var c = list[i];
    $("back").hidden = true; $("tap").hidden = false;
    if (!c) { $("front").textContent = "카드가 없어요"; $("back").textContent = ""; $("prog").textContent = ""; $("stat").textContent = ""; return; }
    $("front").textContent = rev ? c.ko : c.en; $("back").textContent = rev ? c.en : c.ko;
    $("prog").textContent = (i + 1) + " / " + list.length + " · " + c.t;
    $("stat").textContent = "모르는 단어 " + Object.keys(unk).length + "개 저장됨" + (unk[c.en] ? " · 이 카드는 모르는 단어로 표시됨" : "");
  }
  function flip() { if (!list[i]) return; flipped = !flipped; $("back").hidden = !flipped; $("tap").hidden = flipped; }
  function go(d) { if (!list.length) return; i = (i + d + list.length) % list.length; render(); }
  $("cardface").onclick = flip;
  $("cardface").onkeydown = function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } };
  $("btnNext").onclick = function () { go(1); };
  $("btnPrev").onclick = function () { go(-1); };
  $("btnShuffle").onclick = shuffle;
  $("btnDir").onclick = function () { rev = !rev; this.textContent = rev ? "뜻 → 영어" : "영어 → 뜻"; render(); };
  $("btnSay").onclick = function () { var c = list[i]; if (!c) return; try { speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(c.en.replace(/~ing/g, "")); u.lang = "en-US"; speechSynthesis.speak(u); } catch (e) {} };
  $("btnKnow").onclick = function () { var c = list[i]; if (!c) return; delete unk[c.en]; save(); go(1); };
  $("btnUnk").onclick = function () { var c = list[i]; if (!c) return; unk[c.en] = 1; save(); go(1); };
  sel.onchange = $("selMode").onchange = build;
  $("up").innerHTML = UPGRADE.map(function (u) { return "<li><b>" + u[0] + "</b> → " + u[1] + "</li>"; }).join("");
  build();
})();
