let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = Number(prompt("Угадай число от 1 до 10"));

if (guess === secretNumber) {
    alert("Ты угадала! 🎉");
} else {
    alert("Увы, не угадала. Было число " + secretNumber);
}

console.log(`Загадано: ${secretNumber}, Введено: ${guess}`);
