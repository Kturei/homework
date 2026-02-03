const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

// ========================================

let sumAge = 0;
let allUsers = 0;

users.forEach(function (user) {
  sumAge += user.age;
  allUsers += 1;
});

const aveAge = sumAge / allUsers;

console.log(aveAge);

// ========================================

const isAdmin = [];

users.forEach(function (user) {
  if (user.isAdmin === true) {
    isAdmin.push(user);
  }
});

console.log(isAdmin);

// ========================================

function first(arr, el) {
  if (el === 0) {
    return [];
  }
  if (el === undefined || el === null) {
    return arr[0];
  }

  return arr.slice(0, el);
}

console.log(first(users));
