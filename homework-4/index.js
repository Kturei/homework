function calculateFinalPrice(price, discount, tax) {
  const discountedPrice = price * (1 - discount / 100);
  const finalPrice = discountedPrice + discountedPrice * tax;

  return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));

// ===============================

(function checkAccess(userName, password) {
  if (userName === "admin" && password === "123456") {
    return console.log("Доступ разрешен");
  } else {
    return console.log("Доступ запрещен");
  }
})("admin", "123456");

// ===============================

(function getTimeOfDay(currentTime) {
  let timeOfDay;
  switch (true) {
    case currentTime <= 5:
      timeOfDay = "Ночь";
      return console.log(timeOfDay);
    case currentTime >= 6 && currentTime <= 11:
      timeOfDay = "Утро";
      return console.log(timeOfDay);
    case currentTime >= 12 && currentTime <= 17:
      timeOfDay = "День";
      return console.log(timeOfDay);
    case currentTime >= 18 && currentTime <= 23:
      timeOfDay = "Вечер";
      return console.log(timeOfDay);
    default:
      return console.log("Некорректное время");
  }
})(4);

// ===============================

(function findFirstEven(start, end) {
  if (start > end) {
    return console.log("Неверный диапозон");
  }
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return console.log(`Четное число: ${i}`);
    }
  }

  return console.log("Нету ни одного четного число");
})(1, 10);
