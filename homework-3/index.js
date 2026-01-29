for (let i = 0; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

// ==============================

const number = +prompt("Введите число которого хотите получить факториал:", 0);

if (isNaN(number) || number < 0) {
  console.log("Введите неотрицательное целое число");
} else {
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  console.log(`Факториал число ${number} равен: ${factorial}`);
}
