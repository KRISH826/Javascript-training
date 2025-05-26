/** @format */

// Object.getOwnPropertyDescriptor(Math);
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// Math.PI -> is not changable ! why is not changable ?

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

const test = {
  name: "krishnendu",
  age: 25,
  isloggedIn: true,

  orderchai: function () {
    console.log(`test is not done`);
  },
};
console.log(test.name);

console.log(Object.getOwnPropertyDescriptor(test, "name"));

Object.defineProperty(test, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(test, "name"));

// set to this object to ObjectDescriptor

for (let [key, value] of Object.entries(test)) {
  if (typeof value !== "function") console.log(`${key}, ${value}`);
}
