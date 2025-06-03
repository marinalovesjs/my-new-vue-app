let num1 = Number(prompt("Введите первое число:"));
let operation = prompt("Выберите операцию: +, -, *, /");
let num2 = Number(prompt("Введите второе число:"));
let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num2 !== 0 ? num1 / num2 : "На ноль делить нельзя!";
} else {
    result = "Неизвестная операция!";
}

alert("Результат: " + result);
console.log(`Операция: ${num1} ${operation} ${num2} = ${result}`);
