let number = Number(prompt("Введите число для таблицы умножения:"));
let output = "";

for (let i = 1; i <= 10; i++) {
    let result = number * i;
    output += `${number} × ${i} = ${result}\n`;
}

alert(output);
console.log("Таблица умножения для " + number + ":\n" + output);
