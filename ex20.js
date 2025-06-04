const price = Number(prompt("Введите цену товара:"));
const discountPercent = Number(prompt("Введите процент скидки:"));

const discountAmount = (price * discountPercent) / 100;
const finalPrice = price - discountAmount;

console.log("Цена товара:", price);
console.log("Скидка:", discountAmount);
console.log("Итого к оплате:", finalPrice);
