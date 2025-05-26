/** @format */

// IIFE => Immediately Invoked Function Expressions

// amra jokhon duto iife function likhi tokhon amader 1st function a alaways akta semicolon diya aste hye

(function chai() {
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("krishnendu");

// chai();

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
