/** @format */

// javascript e ki class hye ??
// javascript is a prototype based language

// OOPS = > programmice parametrics

// what is Object ?
// - collection of properties and methods
// -toLowerCase()

// why OOPS ??

// PARTS LOOP
// - constructor function
// - Prototypes
//     - Classes
// - instances (new, this)

// Pillars OF OOPS

// const user = {
//   username: "krish",
//   loginCount: 8,
//   signedIn: true,

//   getuserDetails: function () {
//     // console.log(`UserName : ${this.loginCount}`);
//     console.log(this);
//   },
// };

// console.log(user.getuserDetails());

// "new" keyword keno use kora hye ?
// new context bananor jonno ei keyword ta use kora hye

function UserFun(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}
const UserOne = new UserFun("krishnendu", 12, false);
const UserTw0 = new UserFun("Debjit", 1, false);
// console.log(UserOne);
// console.log(UserTw0);
console.log(UserOne instanceof UserFun);
console.log(UserOne instanceof Object);
console.log(UserOne.constructor);

// this dewa manei okhane object create hye jaye
// new keyword notun vabe abar object create kora jete pare
// ei new keyword holo constructor
