const user = {
  zakhar: {
    age: 15,
    isAdmin: true,
    sayHello(name) {
      console.log(`hello ${name}`);
    },
  },
};

user.zakhar.sayHello('alex')

const users = [
  {
    name: "alex",
    age: 30,
    isAdmin: true,
  },
  {
    name: "anna",
    age: 23,
    isAdmin: false,
  },
  {
    name: "jonh",
    age: 33,
    isAdmin: false,
  },
  {
    name: "kirill",
    age: 22,
    isAdmin: true,
  },
  {
    name: "dilara",
    age: 43,
    isAdmin: true,
  },
];



let noAdmin = 0;

for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
    noAdmin++;
  }
}

console.log(noAdmin);
