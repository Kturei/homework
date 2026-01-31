// const person = {
//   name: "Zakhar",
//   age: 16,
//   gender: "male",
// };

// console.log(person);

// =====================================

// let number;

// function isEmpty(object) {
//   if (object === undefined || object === null) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEmpty(number));

// =====================================

// const task = {
//   title: "Задача",
//   description: "Описание",
//   isCompleted: true,
// };

// function cloneAndModify(object, modifications) {
//   const object2 = { ...object, modifications };
//   for (const objKey in object2) {
//     console.log(`${objKey}:`, object2[objKey]);
//   }
// }

// cloneAndModify(task, { inProcces: false });

// =====================================

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

function callAllMethods(object) {
  for (const key in object) {
    if (typeof object[key] === "function") {
      object[key].call(object);
    }
  }
}

callAllMethods(myObject);
