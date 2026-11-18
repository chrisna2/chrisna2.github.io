// 주소의 ?cat=survey|rp|surprise|phr|mock 값에 맞는 대분류 버튼을 눌러 해당 화면으로 연다 (app.js 뒤에 로드)
(function () {
  var m = /[?&]cat=([a-z]+)/.exec(location.search);
  if (!m) return;
  var btn = document.querySelector('#cats [data-cat="' + m[1] + '"]');
  if (btn) btn.click();
})();
