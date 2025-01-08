const words = [
    { english: "prepare", thai: "จัดเตรียม" },
    { english: "available", thai: "หาได้" },
    { english: "raw food", thai: "อาหารดิบ" },
    { english: "low-calorie food", thai: "อาหารพลังงานต่ำ" },
    { english: "dairy food", thai: "อาหารประเภทนมเนย" },
    { english: "ingredient", thai: "ส่วนผสม" },
    { english: "vegan diet", thai: "อาหารมังสวิรัติ" },
    { english: "recommend", thai: "แนะนำ" },
    { english: "ancestor", thai: "บรรพบุรุษ" },
    { english: "increase", thai: "เพิ่มขึ้น" },
    { english: "extinct", thai: "สูญสิ้น" },
    { english: "language", thai: "ภาษา" },
    { english: "endangered", thai: "ใกล้สูญพันธุ์" },
    { english: "crowded", thai: "แออัด" },
    { english: "native speaker", thai: "เจ้าของภาษา" },
    { english: "population", thai: "ประชากร" },
    { english: "neighborhood", thai: "ละแวกบ้าน" },
    { english: "vehicle", thai: "ยานพาหนะ" },
    { english: "sidewalk", thai: "ทางเท้า" },
    { english: "traffic", thai: "การจราจร" }
];

const startButton = document.getElementById('startButton');
const quizSection = document.getElementById('quizSection');
const wordToWrite = document.getElementById('wordToWrite');
const englishInput = document.getElementById('englishInput');
const thaiInput = document.getElementById('thaiInput');
const submitButton = document.getElementById('submitButton');

let currentWordIndex = 0;

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    quizSection.style.display = 'block';
    loadNewWord();
});

submitButton.addEventListener('click', () => {
    const englishAnswer = englishInput.value.trim().toLowerCase();
    const thaiAnswer = thaiInput.value.trim();

    if (englishAnswer === words[currentWordIndex].english.toLowerCase() && thaiAnswer === words[currentWordIndex].thai) {
        alert('Correct!');
    } else {
        alert(`Wrong! Correct answer: ${words[currentWordIndex].english} - ${words[currentWordIndex].thai}`);
    }

    englishInput.value = '';
    thaiInput.value = '';
    loadNewWord();
});

function loadNewWord() {
    currentWordIndex = Math.floor(Math.random() * words.length);
    const speech = new SpeechSynthesisUtterance(words[currentWordIndex].english);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);

    wordToWrite.innerText = "Listen and write the word";
}
