/** @format */

// first element of array name is lower index and last element of array name is upper boundary
var array = new Array();
var array = ["krishnendu", "debjit", "hi", "dee"];

// in javascript, we have an array class, and arrays are the prototype of this class
// Traversal of array - it use navigate through an array.

// length is start with 1;
// index starts with 0;

// if we want to check the last elements of array
// console.log(array[array.length - 1]);

// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// after ES6 we have for..in and for..of loop too

//for of loop
// var friends = ["binod", "lolly", "vairab", "chammani", "raju"];
// for (let elements of friends) {
//   console.log(elements);
// }

//for in loop
// var friends = ["binod", "lolly", "vairab", "chammani", "raju"];
// for (let elements in friends) {
//   console.log(elements);
// }

// for each loop method - calls a function for each Element in tha array;

// var friends = ["binod", "lolly", "vairab", "chammani", "raju"];

// friends.forEach(function (elements, index, array) {
//   console.log(index + " " + elements + " : " + array);
// });

// friends.forEach((elements, index, array) => {
//   console.log(index + " " + elements + " : " + array);
// });

// ---------------------------------------------------------
// SEARCH AND FILTER
//----------------------------------------------------------

// indexOf - The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns - 1 if the value is not found.The indexOf() method is case sensitive.

// var friends = ["binod", "lolly", "vairab", "chammani", "raju", "vairab"];
// console.log(friends.indexOf("Vairab", 1));

// lastIndexOf() - The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string. The lastIndexOf()
//method searches the string from the end to the beginning.

// var friends = ["binod", "lolly", "vairab", "chammani", "raju", "vairab"];
// console.log(friends.lastIndexOf("vairab", 2));

// includes - its search the given value..and it returs boolean value like when the given value is there it returns true and when its not it given false
// example are
// console.log(friends.includes("vairab", 7));

// find() => The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.The find() method returns undefined if no elements are found.

// findIndex => as same as findPrice. it returns -1 if no elements are found;

// const prices = [200, 300, 350, 400, 500, 600];
// const findPrice = prices.findIndex((current, index) => {
//   return current < 400;
// });

// console.log(findPrice);

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.The filter() method does not change the original array.
// const prices1 = [200, 300, 350, 400, 500, 600];

// const newPrice = prices1.filter((elem, index) => {
//   return elem > 400;
// });

// console.log(newPrice);

// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted

// const months = ["jan", "feb", "mar", "may", "aug"];
// console.log(months.sort());

// push() Method and Unshift() Method

const animal = ["goat", "lion", "horse", "peacock"];
// animal.push("crow");
animal.unshift("crow", "elephant");
console.log(animal);

// Pop() Method

// const animals = ["goat", "lion", "horse", "peacock"];
// animals.pop();
// console.log(animals);

// shift() Method

// const animals = ["goat", "lion", "horse", "peacock"];
// animals.shift();
// console.log(animals);

// example: 2
// 1 add sept at the end of an array ?
// 2 what is the return value of splice method ?
// update july to JULY
// Delete june from an array.

const months = ["jan", "july", "dec", "nov", "august"];

// ans:1
// months.splice(months.length, 0, "sept");
// console.log(months);

// ans:2 - splice specially use for delete method, but here we delete nothing,on new array he returns the empty array, he return only the delete array
// const newMonths = months.splice(months.length, 0, "sept");
// console.log(Months);

// ans:3
// const indexOfMonth = months.indexOf("july");
// console.log(indexOfMonth);
// if (indexOfMonth != -1) {
//   //   months.splice(indexOfMonth, indexOfMonth, "JULY"); // update
//   months.splice(indexOfMonth, indexOfMonth); // delete
//   console.log(months);
// } else {
//   console.log("nono");
// }

// MAP() => The Javascript map() method in JavaScript creates an array by calling a specific function
//     on each element present in the parent array.It is a non - mutating method.

// const arraylist = [1, 4, 9, 16, 10, 12];
// let newarraylist = arraylist.map((elem, index) => {
//   return `our number is ${elem}`;
// });
// console.log(newarraylist);

// reduce() method in JavaScript is used to reduce the array to a single value
// and executes a provided function for each value of the array(from left to right)
// and the return value of the function is stored in an accumulator.

// let arrayListReduce = [20, 30, 40, 60, 40];
// let newarrayListReduce = arrayListReduce.reduce((accumulator, elem) => {
//   return (accumulator *= elem);
// });

// console.log(newarrayListReduce);

let arrayListReduce = [20, 30, 40, 60, 40];
let newarrayListReduce = arrayListReduce.reduce((accumulator, elem) => {
  return (accumulator += elem);
}, 70);

console.log(newarrayListReduce);

// two dimensional array

let dimensionalArray = [
  ["krish", "panja"],
  ["debjit", "panja"],
  ["ranju", "tudu"],
];

let dimensionalArrayNew = dimensionalArray.reduce((accumulator, elem) => {
  return accumulator.concat(elem);
});

console.log(dimensionalArrayNew);
