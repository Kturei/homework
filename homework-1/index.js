const firstName = "Zakhar";
const lastName = "Karataev";
const isStudent = true;

const age = 16;
let currentYear = 2026;
let birthYear;

birthYear = currentYear - age;

console.log(birthYear);

console.log(
  `Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик/ученица курса: ${isStudent}.`,
);

let a = "123";
let b = +"455";
let c = Number("657");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;
console.log(result);
