/** @format */

// Destructuring in ES6
// array distructure
let bioData = ["krishnendu", "UI Developer", "25"];
let [myName, Prof, Age, myDegree = "b.com"] = bioData;
console.log(myDegree);

// object distructure

// const myBioData = {
//   name: "debjit",
//   hobby: "BGMI",
//   machine: "Dell",
// };

// let { name, hobby, machine } = myBioData;
// console.log(hobby);

// object properties
// let Devops = "UI Developer";

// let data = {
//   [Devops]: "yooo", // we can use dynamic propoerty
// };
// console.log(data);

// spread operator // we can use on object not only array format
// const colors = ["red", "green", "blue", "black"];
// const myColors = [...colors, "aqua", "sky blue"];
// console.log(myColors);

// ecma 2016
// --------------------
// Array.prototype.includes

// exponentiation operator (**)
// console.log(2 ** 4);

// ecma 2016
// --------------------

// string padding

// let padData = "adidas".padStart(7);
// let padData = "adidas".padEnd(9);
// console.log(padData);

// Object.entries() && Object.values()
const ObjectData = { name: "krish", age: 25 };
// console.log(Object.values(ObjectData));
// console.log(Object.entries(ObjectData));

// it returns object format (fromEntries4)
// let newObjectData = Object.entries(ObjectData);
// console.log(Object.fromEntries(newObjectData));

// ES 2019
// --------------------

// const threeDimensional = [
//   1,
//   2,
//   [("krish", "debjit")],
//   ["UI", "react"],
//   ["library", ["dev1", "dev2", ["dev0", "dev4"]]],
// ];

let studentsData = [1, 2, [("Jack", 24)], ["Sara", 23]];
// console.log(threeDimensional.flat(Infinity));
console.log(studentsData.toString());

// ECMA 2020

// BigInt
let oldnumber = Number.MAX_SAFE_INTEGER;
const newnum = 252582825225n + 12n;
console.log(newnum);
