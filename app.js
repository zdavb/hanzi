
// DOM Elements
const levelDisplay = document.getElementById('level-display');
const counterDisplay = document.getElementById('counter-display');
const progressBar = document.getElementById('progress-bar');
const hanziDisplay = document.getElementById('hanzi-display');
const pinyinDisplay = document.getElementById('pinyin-display');
const englishDisplay = document.getElementById('english-display');
const animationArea = document.getElementById('animation-area');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnMistakes = document.getElementById('btn-mistakes');
const btnJump = document.getElementById('btn-jump');
const jumpInput = document.getElementById('jump-input');
const btnMark = document.getElementById('btn-mark');
const mistakeModal = document.getElementById('mistake-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const mistakeListContainer = document.getElementById('mistake-list');

// State
let currentIndex = 0;
let mistakeList = [];
const STORAGE_KEY = 'moe_hanzi_progress';
const MISTAKE_KEY = 'moe_hanzi_mistakes';
const MILESTONE_STEP = 5;

// Helper to create elements with class
function el(tag, className, text) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (text) e.textContent = text;
    return e;
}

// Special Renderers (Ported from hanzi_demo.html)
const specialRenderers = {
    "一": () => el('div', 'bone-container'),
    "二": () => {
        const c = el('div', 'chopsticks-container');
        c.appendChild(el('div', 'chopstick'));
        c.appendChild(el('div', 'chopstick'));
        return c;
    },
    "三": () => {
        const c = el('div', 'burger-container');
        c.appendChild(el('div', 'bun-top'));
        const patty = el('div', 'patty');
        patty.appendChild(el('div', 'lettuce'));
        c.appendChild(patty);
        c.appendChild(el('div', 'bun-bottom'));
        return c;
    },
    "口": () => {
        const c = el('div', 'mouth-container');
        c.appendChild(el('div', 'mouth-inner'));
        return c;
    },
    "山": () => {
        const c = el('div', 'mountain-container');
        c.appendChild(el('div', 'mountain'));
        c.appendChild(el('div', 'mountain middle'));
        c.appendChild(el('div', 'mountain'));
        return c;
    },
    "日": () => {
        const c = el('div', 'sun-container');
        c.appendChild(el('div', 'sun-bar'));
        c.appendChild(el('div', 'sun-rays'));
        return c;
    },
    "田": () => {
        const c = el('div', 'field-container');
        for(let i=0; i<4; i++) c.appendChild(el('div', 'field-cell'));
        return c;
    },
    "雨": () => {
        const c = el('div', 'rain-container');
        c.appendChild(el('div', 'cloud'));
        for(let i=0; i<4; i++) c.appendChild(el('div', 'raindrop'));
        return c;
    },
    "门": () => {
        const c = el('div', 'door-container');
        const l = el('div', 'door-left'); l.appendChild(el('div', 'door-knob'));
        const r = el('div', 'door-right'); r.appendChild(el('div', 'door-knob'));
        c.appendChild(l); c.appendChild(r);
        return c;
    },
    "伞": () => {
        const c = el('div', 'umbrella-container');
        c.appendChild(el('div', 'umbrella-top'));
        c.appendChild(el('div', 'umbrella-handle'));
        return c;
    },
    "羊": () => {
        const c = el('div', 'sheep-container');
        const hl = el('div', 'sheep-horn left');
        const hr = el('div', 'sheep-horn right');
        const head = el('div', 'sheep-head');
        head.appendChild(el('div', 'sheep-eye left'));
        head.appendChild(el('div', 'sheep-eye right'));
        c.appendChild(hl); c.appendChild(hr); c.appendChild(head);
        return c;
    },
    "鱼": () => {
        const c = el('div', 'fish-container');
        const body = el('div', 'fish-body');
        body.appendChild(el('div', 'fish-eye'));
        c.appendChild(body);
        c.appendChild(el('div', 'fish-tail'));
        return c;
    }
};

// Initialize
function init() {
    loadProgress();
    loadMistakes();
    renderCurrentCard();
    updateProgressUI();
}

// Load Progress
function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        currentIndex = parseInt(saved, 10);
        // Ensure index is valid
        if (currentIndex >= hanziData.length) currentIndex = hanziData.length - 1;
        if (currentIndex < 0) currentIndex = 0;
    }
}

// Load Mistakes
function loadMistakes() {
    const saved = localStorage.getItem(MISTAKE_KEY);
    if (saved) {
        try {
            mistakeList = JSON.parse(saved);
        } catch (e) {
            mistakeList = [];
        }
    }
}

// Save Progress
function saveProgress() {
    localStorage.setItem(STORAGE_KEY, currentIndex.toString());
}

// Save Mistakes
function saveMistakes() {
    localStorage.setItem(MISTAKE_KEY, JSON.stringify(mistakeList));
}

// Render Card
function renderCurrentCard() {
    if (!hanziData || hanziData.length === 0) return;

    const item = hanziData[currentIndex];

    // Text Content
    hanziDisplay.textContent = item.char;
    pinyinDisplay.textContent = item.pinyin;
    englishDisplay.textContent = item.english || '';
    
    // Level Display
    levelDisplay.textContent = item.level || "Level 1";

    // Mark Button State
    if (mistakeList.includes(item.char)) {
        btnMark.textContent = '★'; // Solid Star
        btnMark.classList.add('active');
        btnMark.ariaLabel = "移出错题本";
    } else {
        btnMark.textContent = '☆'; // Outline Star
        btnMark.classList.remove('active');
        btnMark.ariaLabel = "加入错题本";
    }

    // Animation / Visual
    animationArea.innerHTML = ''; // Clear previous
    let visual;
    if (item.hasSpecialCSS && specialRenderers[item.char]) {
        visual = specialRenderers[item.char]();
    } else {
        visual = el('div', 'emoji-display', item.emoji || item.char);
    }
    animationArea.appendChild(visual);

    // Update Buttons State
    if (btnPrev) btnPrev.disabled = currentIndex === 0;
    if (btnNext) btnNext.disabled = currentIndex === hanziData.length - 1;
}

// Update Progress UI
function updateProgressUI() {
    const total = hanziData.length;
    const learned = currentIndex + 1; // Assuming reaching a card means learning it
    const percentage = (learned / total) * 100;

    progressBar.style.width = `${percentage}%`;
    counterDisplay.textContent = `${learned} / ${total}`;
}

// Milestone Check - Disabled
function checkMilestone() {
    // Milestone feature is currently disabled based on user feedback.
    return; 
}

function showMilestone(count) {
    // Disabled
}

function toggleMistake() {
    const char = hanziData[currentIndex].char;
    const index = mistakeList.indexOf(char);
    
    if (index === -1) {
        // Add
        mistakeList.push(char);
        // Animate visual feedback maybe?
    } else {
        // Remove
        mistakeList.splice(index, 1);
    }
    saveMistakes();
    renderCurrentCard(); // Update button state
}

function renderMistakeList() {
    mistakeListContainer.innerHTML = '';
    
    if (mistakeList.length === 0) {
        const empty = el('div', 'empty-state', '暂无错题，继续加油！');
        mistakeListContainer.appendChild(empty);
        return;
    }

    mistakeList.forEach(char => {
        const item = el('div', 'mistake-item', char);
        item.addEventListener('click', () => {
            // Find index of this char
            const idx = hanziData.findIndex(d => d.char === char);
            if (idx !== -1) {
                currentIndex = idx;
                saveProgress();
                renderCurrentCard();
                updateProgressUI();
                closeModal();
            }
        });
        mistakeListContainer.appendChild(item);
    });
}

function openModal() {
    renderMistakeList();
    mistakeModal.classList.add('active');
}

function closeModal() {
    mistakeModal.classList.remove('active');
}

// Jump Logic
function jumpToCard() {
    const val = parseInt(jumpInput.value, 10);
    if (!isNaN(val) && val >= 1 && val <= hanziData.length) {
        currentIndex = val - 1; // 0-based index
        saveProgress();
        renderCurrentCard();
        updateProgressUI();
        jumpInput.value = ''; // Clear input
    } else {
        alert('请输入有效的序号 (1 - ' + hanziData.length + ')');
    }
}

// Event Listeners for New Features
if (btnMark) btnMark.addEventListener('click', toggleMistake);
if (btnMistakes) btnMistakes.addEventListener('click', openModal);
if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
if (btnJump) btnJump.addEventListener('click', jumpToCard);
if (jumpInput) {
    jumpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') jumpToCard();
    });
}

// Close modal when clicking outside
if (mistakeModal) {
    mistakeModal.addEventListener('click', (e) => {
        if (e.target === mistakeModal) closeModal();
    });
}

// Navigation Handlers
if (btnPrev) {
    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            saveProgress();
            renderCurrentCard();
            updateProgressUI();
        }
    });
}

if (btnNext) {
    btnNext.addEventListener('click', () => {
        if (currentIndex < hanziData.length - 1) {
            currentIndex++;
            saveProgress();
            renderCurrentCard();
            updateProgressUI();
            
            // Check milestone ONLY when moving forward
            checkMilestone();
        }
    });
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && btnPrev) btnPrev.click();
    if (e.key === 'ArrowRight' && btnNext) btnNext.click();
});

// Start
init();
