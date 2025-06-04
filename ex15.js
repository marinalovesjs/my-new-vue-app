let age = 18;

if (age >= 18) {
    console.log("Вы совершеннолетний.");
} else {
    console.log("Вы ещё ребёнок.");
}
if (age < 18) {
    console.log("Вы ещё ребёнок.");
} else if (age < 30) {
    console.log("Вы молодой взрослый.");
} else if (age < 60) {
    console.log("Вы взрослый человек.");
} else {
    console.log("Вы пенсионер.");
}
