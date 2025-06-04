let a = Number(prompt("Введите сторону A:"));
let b = Number(prompt("Введите сторону B:"));
let c = Number(prompt("Введите сторону C:"));

if (a + b <= c || a + c <= b || b + c <= a) {
    alert("Такой треугольник невозможен.");
} else if (a === b && b === c) {
    alert("Равносторонний треугольник.");
} else if (a === b || b === c || a === c) {
    alert("Равнобедренный треугольник.");
} else {
    alert("Разносторонний треугольник.");
}
