const number = Number.isInteger(prompt("Введите число:"))
  ? "Число четное"
  : "Число не четное";

console.log(number);

// ===================================================

const age = +prompt("Введите ваш возраст:");

// const discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
// console.log(`Ваша скидка составляет ${discount}%!`);

let discount = 0;

switch (true) {
  case (age < 18):
    discount = 10;
    break;
  case (age >= 18 && age <= 65):
    discount = 20;
    break;
  case (age > 65):
    discount = 30;
    break;
  default:
    console.log("Неверный ввод возраста");
}

console.log(`Ваша скидка составляет ${discount}%!`)

// ===================================================

const username = prompt("Введите ваш статус:");
const password = prompt("Введите ваш пароль:");

if ((username == "admin" || "user") && password == "123456") {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}
