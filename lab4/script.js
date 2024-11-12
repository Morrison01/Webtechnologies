const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const startButton = document.getElementById('startButton');
const difficultySelect = document.getElementById('difficulty');
const colorSelect = document.getElementById('color');
const target = document.getElementById('target');
const result = document.getElementById('result');

let initialGameTime, gameTime, size, moveRange, timer, score = 0, gameStarted = false;

startButton.addEventListener('click', () => {
    const difficulty = difficultySelect.value;
    const color = colorSelect.value;
    
    if (!difficulty || !color) {
        alert('Choose the difficulty level and color!');
        return;
    }

    setupGame(difficulty, color);
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    result.innerHTML = '';

    score = 0;
    gameStarted = true;
    target.style.display = 'block';

    resetTimer();
    moveTarget();
});

function setupGame(difficulty, color) {
    target.style.backgroundColor = color;

    // Налаштування початкового часу для кожного рівня складності
    if (difficulty === 'easy') {
        initialGameTime = 6;
        size = 50;
        moveRange = 50;
    } else if (difficulty === 'medium') {
        initialGameTime = 4;
        size = 40;
        moveRange = 100;
    } else if (difficulty === 'hard') {
        initialGameTime = 2;
        size = 30;
        moveRange = 150;
    }

    gameTime = initialGameTime;
    target.style.width = `${size}px`;
    target.style.height = `${size}px`;
    updateResult();  // Відображення початкового часу на екрані
}

function resetTimer() {
    clearInterval(timer);  // Скидання попереднього інтервалу
    gameTime = initialGameTime;  // Скидання часу
    updateResult();  // Оновлення відображення після кожного кліку

    timer = setInterval(() => {
        gameTime--;
        updateResult();

        if (gameTime <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function updateResult() {
    result.innerHTML = `Time: ${gameTime} seconds, Points: ${score}`;
}

function endGame() {
    gameStarted = false;
    target.style.display = 'block';  // Квадрат залишається на місці
    alert(`Game over! You typed ${score} points. Congratulations, refresh the page to start the game!`);
}

target.addEventListener('click', () => {
    if (!gameStarted) return;

    score++;
    resetTimer();  // Скидання таймера після кліку
    moveTarget();
});

function moveTarget() {
    const x = Math.floor(Math.random() * (gameScreen.clientWidth - size - moveRange)) + moveRange / 2;
    const y = Math.floor(Math.random() * (gameScreen.clientHeight - size - moveRange)) + moveRange / 2;

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}
