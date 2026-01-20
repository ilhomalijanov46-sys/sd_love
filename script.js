/* Фразы */
const texts = [
    "Ты — мой самый тёплый человек",
    "Я люблю тебя больше с каждым днём",
    "С тобой даже тишина становится уютной",
    "Ты — моё вдохновение",
    "Ты — моё счастье",
    "Ты — моя нежность",
    "Ты — моё навсегда"
];

let index = 0;
const textEl = document.getElementById("text");

function showText() {
    textEl.style.opacity = 0;
    setTimeout(() => {
        textEl.textContent = texts[index];
        textEl.style.opacity = 1;
        index = (index + 1) % texts.length;
    }, 800);
}

showText();
setInterval(showText, 6000);

/* Таймер */
const startDate = new Date(2024, 9, 17, 3, 44);
const timerEl = document.getElementById("love-timer");

function updateTimer() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) { seconds += 60; minutes--; }
    if (minutes < 0) { minutes += 60; hours--; }
    if (hours < 0) { hours += 24; days--; }
    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) { months += 12; years--; }

    timerEl.textContent =
        `${years} г ${months} мес ${days} дн ${hours} ч ${minutes} мин ${seconds} сек`;
}

updateTimer();
setInterval(updateTimer, 1000);

/* Музыка */
const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("bg-music");

let playing = false;

musicBtn.addEventListener("click", () => {
    if (!playing) {
        music.play();
        musicBtn.style.background = "rgba(255,255,255,0.30)";
    } else {
        music.pause();
        musicBtn.style.background = "rgba(255,255,255,0.15)";
    }
    playing = !playing;
});
