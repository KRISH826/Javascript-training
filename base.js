/** @format */

// ECHMASCRIPT

// let vs const vs var
// var => function scope
// let & const = > block scope

// example here

// function bioData() {
//   let name = "krishnendu";
//   console.log(name);
//   if (true) {
//     let lastname = "panja";
//     console.log("firstName " + name);
//     console.log("lastName " + lastname);
//   }

//   console.log(name + " " + lastname);
// }

// bioData();

// Template literals (Template strigs)
const b = "krishnendu";
console.log(`he is ${b}`);

// default parameters

function multi(z, y = 25) {
  return z + y;
}
console.log(multi(2));

// fat arrow function

const sum = () => {
  //function expression
  console.log("hii");
};

sum();
