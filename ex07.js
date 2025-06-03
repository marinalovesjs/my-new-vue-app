let currentHour = new Date().getHours();
let greeting;

if (currentHour >= 5 && currentHour < 12) {
    greeting = "Доброе утро!";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Добрый день!";
} else if (currentHour >= 18 && currentHour < 23) {
    greeting = "Добрый вечер!";
} else {
    greeting = "Доброй ночи!";
}

alert(greeting);
console.log("Текущее время: " + currentHour + " ч. — " + greeting);
