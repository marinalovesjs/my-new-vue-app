const secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const result = document.getElementById("result");

    if (isNaN(userGuess)) {
        result.textContent = "Введите число!";
    } else if (userGuess < secretNumber) {
        result.textContent = "Слишком маленькое!";
    } else if (userGuess > secretNumber) {
        result.textContent = "Слишком большое!";
    } else {
        result.textContent = "Поздравляю! Ты угадала 🎉";
    }
}
