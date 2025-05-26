/** @format */

const user = {
  name: "krish",
  age: 25,
  welcomeFunc: function () {
    console.log(`my name is ${this.name}`);
    console.log(this);
  },
};

// user.welcomeFunc();
// user.name = "debjit";
// user.welcomeFunc();

// console.log(this);

// function thisOne() {
//   const user = "krishnendu";
//   console.log(this.user);
// }
// thisOne();

// arrow Function

// const addTwo = (num, num2) => {
//   return num + num2;
// };

// console.log(addTwo(2, 5));

// implicit return => bole jokhon akta line er code lekhar hole amra return keyword use kori naa
// expample

// const addTwo = (num, num2) => num + num2;

// console.log(addTwo(2, 5));

// ekahne object jokhon return korte hbe tokhon ta ke paranthisis er mdhya rakhte hbe
// just like that

const addTwo = () => ({ name: "krish" });
console.log(addTwo());

// CALL AND THIS
// window object e this object means direct window ke call kore and node object e eta empty object retur kore

function SetUserName(username) {
  this.username = username;
}

function CreateUserName(username, email, password) {
  SetUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const UserProfile = new CreateUserName(
  "Debjit",
  "debjitpanja98@gmail.com",
  "123558"
);

console.log(UserProfile);


