/** @format */

const month = 3;

switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;

  default:
    console.log("default");
    break;
}

// falsy values
// 0, false, BigInt, "", null, undefined, -0

// truthy values
// "0", 'false', " ", [], {}, function(){}

// how to check an array on condition basis

// let myArray = [1, 2];

// if (myArray.length === 0) {
//   console.log("yeah its true");
// } else {
//   console.log("its not an empty array");
// }

// how to check an objects on condition basis

// let myObjects = {};

// if (Object.keys(myObjects).length === 0) {
//   console.log("its a empty objects");
// }

// nullish coalescing OPerator(??): null defined
// database theke jokhon value ase kono karone null and value dutoi aste pare setake jate amra null ta avoid korte pari ajonno amra ?? ei opertor ta use kori..eta shudhu null and undefined er jonno use kora hye.

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = null ?? 10 ?? 15;

// val1 = undefined ?? 15;
console.log(val1);

// ternary operator
// condition ? true statement : false statement
