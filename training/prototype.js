/** @format */

// what is prototype ?
// Javascript Mechanisam

// javascript a array o Object e hye
// ARRAY -> Object -> null
// String -> Object -> null
// function -> Object -> null

// function multiply5(num) {
//   return num * 5;
// }

// console.log(multiply5(2));
// console.log((multiply5.power = 2));
// console.log(multiply5.prototype);

// this is the example of "function is a prototype"
// ei prototype use korle akta "{}" pawa jaye jeta hcche "this" mane hcche oi function er current context

// function createUser(userName, Score) {
//   this.userName = userName;
//   this.Score = Score;
// }

// createUser.prototype.increment = function () {
//   this.Score++;
// };

// createUser.prototype.printMe = function () {
//   console.log(`score is ${this.Score}`);
// };

// const chai = new createUser("krish", 99);
// const tea = new createUser("deb", 98);
// console.log(chai);
// console.log(tea);

// chai.printMe();

// "new" KeyWord Details

// new keyword use korar fole akta new Object initiate hye
// a prototype is linked: new keyword use kore constructor function toiri hye,ar ei constructor diyai amra prototype use korte pari

let myname = "krish     ";
let myname2 = "debjit    ";
// amake protek ta string er truelength bar korte hbe amra 100 bar likhbo na

let heroes = ["thor", "hulk", "batman"];
let herpower = {
  thor: "hammer",
  hulk: "smash",
  batman: "money",

  getaHulkPower: function () {
    console.log(`hulk's power is ${this.hulk}`);
  },
};

Object.prototype.krish = function () {
  console.log(`krish is present on all object`);
};

Array.prototype.krishArray = function () {
  console.log("krish says hello");
};

// herpower.krish();

heroes.krish();
heroes.krishArray();

// inheritance

const User = {
  name: "krishnendu",
  email: "krishnendu@gmail.com",
};

const teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvaliable: true,
};

const TaSupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // eta akta object er sthe ar akta object er connection toiri kore
};

teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, teacher);

let UserName = "krishnendu    ";
String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`truelength is ${this.trim().length}`);
};

console.log(UserName.truelength());
console.log(myname.truelength());
