const words = [
    { english: "prepare", thai: "จัดเตรียม" },
    { english: "available", thai: "หาได้" },
    { english: "raw food", thai: "อาหารดิบ" },
    { english: "low-calorie food", thai: "อาหารพลังงานต่ำ" },
    { english: "recommend", thai: "แนะนำ" },
    { english: "vegan diet", thai: "อาหารมังสวิรัติ" },
    { english: "ingredient", thai: "ส่วนผสม" },
    { english: "dairy food", thai: "อาหารประเภทนมเนย" },
    { english: "ancestor", thai: "บรรพบุรุษ" },
    { english: "increase", thai: "เพิ่มขึ้น" },
    { english: "extinct", thai: "สูญสิ้น" },
    { english: "language", thai: "ภาษา" },
    { english: "endangered", thai: "ใกล้สูญพันธุ์" },
    { english: "crowded", thai: "แออัด" },
    { english: "native speaker", thai: "เจ้าของภาษา" },
    { english: "Population", thai: "ประชากร" },
    { english: "traffic", thai: "การจราจร" },
    { english: "sidewalk", thai: "ทางเท้า" },
    { english: "vehicle", thai: "ยานพาหนะ" },
    { english: "neighborhood", thai: "ละแวกบ้าน" }
];

const startButton = document.getElementById('startButton');
const quizSection = document.getElementById('quizSection');
const wordToWrite = document.getElementById('wordToWrite');
const englishInput = document.getElementById('englishInput');
const thaiInput = document.getElementById('thaiInput');
const playButton = document.getElementById('playButton');
const submitButton = document.getElementById('submitButton');
const revealButton = document.getElementById('revealButton');
const scoreDisplay = document.getElementById('score');
const autoCheck = document.getElementById('autoCheck');

let currentWordIndex = 0;
let score = 0;
let playCount = 0;

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    quizSection.style.display = 'block';
    loadNewWord();
});

submitButton.addEventListener('click', checkAnswer);
revealButton.addEventListener('click', revealAnswer);

playButton.addEventListener('click', () => {
    playCount++;
    playWord(words[currentWordIndex].english, playCount > 1 ? 0.5 : 1);
});

function loadNewWord() {
    currentWordIndex = Math.floor(Math.random() * words.length);
    playCount = 0;
    wordToWrite.innerText = "Listen and write the word";
    playWord(words[currentWordIndex].english);
}

function playWord(word, rate = 1) {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-US';
    speech.rate = rate;
    window.speechSynthesis.speak(speech);
}

function checkAnswer() {
    const englishAnswer = englishInput.value.trim().toLowerCase();
    const thaiAnswer = thaiInput.value.trim();

    if (englishAnswer === words[currentWordIndex].english.toLowerCase() && thaiAnswer === words[currentWordIndex].thai) {
        alert('Correct!');
        score++;
        updateScore();
    } else {
        alert(`Wrong! Correct answer: ${words[currentWordIndex].english} - ${words[currentWordIndex].thai}`);
    }

    if (autoCheck.checked) {
        loadNewWord();
    } else {
        revealButton.style.display = 'block';
    }

    englishInput.value = '';
    thaiInput.value = '';
}

function revealAnswer() {
    alert(`Answer: ${words[currentWordIndex].english} - ${words[currentWordIndex].thai}`);
    revealButton.style.display = 'none';
    loadNewWord();
}

function updateScore() {
    scoreDisplay.innerText = `Score: ${score}`;
}
