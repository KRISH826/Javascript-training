/** @format */
// for of loop
// let myArray = [1, 2, 3, 4, 5];

// for (const item of myArray) {
//   console.log(item);
// }

const map = new Map();
map.set("IN", "India");
map.set("AUS", "Australia");

// console.log(map);
for (const [key, value] of map) {
  //   console.log(`this key is ${key} and the value is ${value}`);
}

// const myObject = {
//   name1: "krish",
//   name2: "debjit",
// };

// for (const item of myObject) {
//   console.log(item);
// }

// eta theke bhoja galo map holo iterable ekhane for of loop use kra jete pare..kintu amra kono object ke for of loop e felte pari na thle ota iterable error daye..age object ke iterable korte hbe then

// const myObject = {
//   name1: "krish",
//   name2: "debjit",
// };

// for (const key in myObject) {
//   console.log(`${key} is ${myObject[key]}`);
// }

// const programming = ["js", "react", "html"];

// for (const programme in programming) {
//   console.log(programming[programme]);
// }

// foreachloop

const coding = ["js", "python", "java", "cpp"];

// coding.forEach((item) => {
//   console.log(item);
// });

// coding.forEach((item, index, arraylist) => {
//   console.log(item, index, arraylist);
// });

const coding2 = [
  { name: "krish", blood: "B+" },
  { name: "debjit", blood: "A+" },
];

coding2.forEach((item) => {
  console.log(`my name is ${item.name} and my blood is ${item.blood}`);
});

// at the last foreach loop kono value return kore naa\
