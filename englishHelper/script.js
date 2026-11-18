let currentIndex = 0;
let currentLevel = 'middle';
let currentMode = 'all';
let filteredWordList = [];
let learnedWords = new Set();
let notlearnedWords = new Set();

const card = document.getElementById('card');
const cardWord = document.getElementById('cardWord');
const cardMeaning = document.getElementById('cardMeaning');
const cardInner = document.getElementById('cardInner');

const flipBtn = document.getElementById('flipBtn');
const speakBtn = document.getElementById('speakBtn');
const repeatBtn = document.getElementById('repeatBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const learnedBtn = document.getElementById('learnedBtn');
const notlearnedBtn = document.getElementById('notlearnedBtn');

const autoPlaySound = document.getElementById('autoPlaySound');
const showMeaningOnLoad = document.getElementById('showMeaningOnLoad');

const currentCardSpan = document.getElementById('currentCard');
const totalCardsSpan = document.getElementById('totalCards');
const progressFill = document.getElementById('progressFill');
const learnedCountSpan = document.getElementById('learnedCount');
const notlearnedCountSpan = document.getElementById('notlearnedCount');
const learnRateSpan = document.getElementById('learnRate');
const reviewCountSpan = document.getElementById('reviewCount');

const levelTabs = document.querySelectorAll('.level-tab');
const modeButtons = document.querySelectorAll('.btn-mode');

const flashApp = document.getElementById('flashApp');
const opicPractice = document.getElementById('opicPractice');
const opicUnkBadge = document.getElementById('opicUnkBadge');

const subTabs = document.querySelectorAll('.sub-tab');
const opicFrame = document.getElementById('opicFrame');
const opicFull = document.getElementById('opicFull');

const OPIC_PAGES = {
    survey: 'opic/index.html?cat=survey',
    rp: 'opic/index.html?cat=rp',
    surprise: 'opic/index.html?cat=surprise',
    phr: 'opic/index.html?cat=phr',
    mock: 'opic/index.html?cat=mock',
    frame: 'opic2/index.html',
    words: 'opic2/words.html'
};
const SUB_KEY = 'englishHelper.opicSub';

// opic2 단어 카드에 저장된 '모르는 단어' 개수 표시
function updateOpicBadge() {
    let count = 0;
    try {
        count = Object.keys(JSON.parse(localStorage.getItem('opic2_words_unk') || '{}')).length;
    } catch (e) {}
    opicUnkBadge.textContent = '모르는 ' + count;
    opicUnkBadge.title = '모르는 단어 ' + count + '개';
    opicUnkBadge.hidden = count === 0;
}

function getSavedSub() {
    try {
        const saved = localStorage.getItem(SUB_KEY);
        if (OPIC_PAGES[saved]) return saved;
    } catch (e) {}
    return 'survey';
}

// OPIC 하위 탭 열기: 선택한 기능 페이지를 아래 프레임에 불러온다
function openOpicSub(sub) {
    subTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.sub === sub));
    const page = OPIC_PAGES[sub];
    opicFrame.src = page + (page.includes('?') ? '&' : '?') + 'embed=1';
    opicFull.href = OPIC_PAGES[sub];
    try { localStorage.setItem(SUB_KEY, sub); } catch (e) {}
    updateOpicBadge();
}

// 프레임을 비워 재생 중인 소리를 멈춘다
function closeOpicFrame() {
    if (opicFrame.getAttribute('src')) opicFrame.src = 'about:blank';
}

// 현재 카드의 고유 ID 생성
function getWordId(word) {
    return currentLevel + '_' + word.word;
}

// 레벨별 단어 필터링
function filterWordsByLevel(level) {
    return wordList.filter(word => word.level === level);
}

// 모드별 필터링
function getFilteredList() {
    let list = filterWordsByLevel(currentLevel);
    if (currentMode === 'review') {
        list = list.filter(word => notlearnedWords.has(getWordId(word)));
    }
    return list;
}

// 모드 변경
function changeMode(mode) {
    currentMode = mode;
    currentIndex = 0;
    filteredWordList = getFilteredList();

    modeButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        }
    });

    if (filteredWordList.length === 0) {
        currentCardSpan.textContent = 0;
        totalCardsSpan.textContent = 0;
        cardWord.textContent = '단어 없음';
        cardMeaning.textContent = '';
    } else {
        loadCard(0);
    }
}

// 레벨 변경
function changeLevel(level) {
    currentLevel = level;
    currentMode = 'all';
    currentIndex = 0;

    levelTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.level === level) {
            tab.classList.add('active');
        }
    });

    if (level === 'opic') {
        speechSynthesis.cancel();
        flashApp.hidden = true;
        opicPractice.hidden = false;
        openOpicSub(getSavedSub());
        return;
    }

    flashApp.hidden = false;
    opicPractice.hidden = true;
    closeOpicFrame();

    modeButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.mode === 'all') {
            btn.classList.add('active');
        }
    });

    filteredWordList = getFilteredList();
    updateStats();
    loadCard(0);
}

// 카드 로드
function loadCard(index) {
    if (!filteredWordList.length) return;
    if (index < 0) currentIndex = filteredWordList.length - 1;
    if (index >= filteredWordList.length) currentIndex = 0;
    currentIndex = index;

    const word = filteredWordList[currentIndex];
    cardWord.textContent = word.word;
    cardMeaning.textContent = word.meaning;

    card.classList.remove('flipped');
    cardInner.style.transform = '';

    currentCardSpan.textContent = currentIndex + 1;
    totalCardsSpan.textContent = filteredWordList.length;
    updateProgressBar();

    if (showMeaningOnLoad.checked) {
        setTimeout(() => flip(), 100);
    }

    if (autoPlaySound.checked) {
        setTimeout(() => speak(), 300);
    }
}

// 카드 뒤집기
function flip() {
    if (currentLevel === 'opic') return;
    card.classList.toggle('flipped');
}

// 발음 재생
function speak() {
    const item = filteredWordList[currentIndex];
    if (currentLevel === 'opic' || !item) return;
    const word = item.word;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

// 단어를 외웠음으로 표시
function markAsLearned() {
    const word = filteredWordList[currentIndex];
    if (!word) return;
    const wordId = getWordId(word);
    learnedWords.add(wordId);
    notlearnedWords.delete(wordId);
    updateStats();
    loadCard(currentIndex + 1);
}

// 단어를 못 외웠음으로 표시
function markAsNotLearned() {
    const word = filteredWordList[currentIndex];
    if (!word) return;
    const wordId = getWordId(word);
    learnedWords.delete(wordId);
    notlearnedWords.add(wordId);
    updateStats();
    loadCard(currentIndex + 1);
}

// 진행률 업데이트
function updateProgressBar() {
    const percent = ((currentIndex + 1) / filteredWordList.length) * 100;
    progressFill.style.width = percent + '%';
}

// 통계 업데이트
function updateStats() {
    const levelWords = filterWordsByLevel(currentLevel);
    const learned = levelWords.filter(w => learnedWords.has(getWordId(w))).length;
    const notlearned = levelWords.filter(w => notlearnedWords.has(getWordId(w))).length;
    const total = levelWords.length;
    const rate = total === 0 ? 0 : Math.round((learned / total) * 100);

    learnedCountSpan.textContent = learned;
    notlearnedCountSpan.textContent = notlearned;
    learnRateSpan.textContent = rate + '%';
    reviewCountSpan.textContent = notlearned;
}

// 초기화
function init() {
    filteredWordList = getFilteredList();
    totalCardsSpan.textContent = filteredWordList.length;
    updateStats();
    loadCard(0);
}

// 레벨 탭 이벤트 리스너
levelTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        changeLevel(tab.dataset.level);
    });
});

// OPIC 하위 탭 이벤트 리스너
subTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        openOpicSub(tab.dataset.sub);
    });
});

// 단어 카드(opic2)에서 '모르는 단어'가 바뀌면 배지 갱신
window.addEventListener('storage', (e) => {
    if (e.key === 'opic2_words_unk') updateOpicBadge();
});

// 모드 버튼 이벤트 리스너
modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        changeMode(btn.dataset.mode);
    });
});

// 이벤트 리스너
flipBtn.addEventListener('click', flip);
speakBtn.addEventListener('click', speak);
learnedBtn.addEventListener('click', markAsLearned);
notlearnedBtn.addEventListener('click', markAsNotLearned);

repeatBtn.addEventListener('click', () => {
    speak();
    setTimeout(() => speak(), 1000);
});

prevBtn.addEventListener('click', () => {
    loadCard(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    loadCard(currentIndex + 1);
});

card.addEventListener('click', flip);

// 키보드 단축키
document.addEventListener('keydown', (e) => {
    if (currentLevel === 'opic') return;
    if (e.key === ' ') {
        e.preventDefault();
        flip();
    }
    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    }
    if (e.key === 'ArrowRight') {
        nextBtn.click();
    }
    if (e.key === 'Enter') {
        speakBtn.click();
    }
});

// 초기화 실행
init();
