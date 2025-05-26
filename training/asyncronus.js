/** @format */

// what is bubbling phase of javascript?
// Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event.

// what is the capturing phase in javascript?

// In event capturing, an event propagates from the outermost element to the target element. It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements

// propagation is boardly categorized into 3 main Types

// - the capture phase (going from window to the event phase)
// - the target phase (it is the target phase)
// - the bubble phase (From the event target parent back to the window) (by default)

// parent.addEventListener('click', functionName, true) //bubble phase to capture phase
// parent.addEventListener('click', functionName, false) [(by default its alaways false, means its it is bubble phase )]

// higher order function
// const add = (a, b) => {
//   return a * b;
// };

// const calculator = (num1, num2, operator) => {
//   return operator(num1, num2);
// };

// console.log(calculator(5, 10, add));

// HOW javascript works and asyncronous javascript

// Hoisting in javascript
// we have a creation phase and execution phase

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

// for example
// console.log(myname);
// var myname = "krishnendu";

// what is scope chain and Lexical Scoping in Javascript

// the scope chain is used for resolve the value of variable names in javascript
// scope chain in js is lexically defined, which means that we can see what the scope chain will be by looking at the code.
// lexical scoping means Now,the inner function can get access to thier parent functions variables but the vice versa is not true.

// lexical scoping

// let a = "hello guys";
// const first = () => {
//   let b = "i am krishnendu";

//   const second = () => {
//     let c = "i am bubu";
//     console.log(a + " " + b + " " + c); // lexical scoping
//   };

//   second();
//   //   console.log(a + " " + b + " " + c);
// };

// first();

// what is clousres in javascript

// as same as Lexical scope but but the vice versa is true.

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     console.log(a + b);
//   };
//   innerFun();
//   console.log(a + b);
// };
// outerFun(5);

// Event loop

// Difference Between Syncronous and Asyncronous javascript

// syncronous Function

// const fun1 = () => {
//   console.log("calling fun1");
//   const fun2 = () => {
//     console.log("calling fun2");
//   };
//   fun2();
//   console.log("again call fun1");
// };

// fun1();

// asyncronous Function

// const fun4 = () => {
//   setTimeout(() => {
//     console.log("fun4 called");
//   }, 2000);
// };

// const fun3 = () => {
//   console.log("fun3 called");
//   fun4();
//   console.log("again fun3 called");
// };

// fun3();

//
// Event loop in Javascript

// setTimeout, Dom, Ajax/Api Calls is under WEB APIS

// what is function currying
// example of output sum(5) (3) (8)

// process 1

// function sumFunc(a) {
//   console.log(a);
//   return function (b) {
//     console.log(a, b);
//     return function (c) {
//       console.log(a, b, c);
//     };
//   };
// }

// process 2

// const sumFunc = (a) => (b) => (c) => console.log(a, b, c);

// sumFunc(5)(3)(8);

// callback Hell

// setTimeout(() => {
//   console.log("work 1 is done");
//   setTimeout(() => {
//     console.log("wokr 2 is done");
//     setTimeout(() => {
//       console.log("work3 is done");
//       setTimeout(() => {
//         console.log("work 4 is done");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// on default javascript akta synchronous and eti akta single thread language
// javascript engine call stack and memory heap diya hye thake
// task queue sob event or call back events ke call stacke e add kore daye..task queue FIFO method e hye and Call stack LIFO method

// fetch() er jonne akta promise queue add hye jaye ar eta high priority hye

// setTimeout(function () {
//   console.log("krish");
// }, 3000);

// const Name = () => {
//   console.log("krishnendu");
// };

// setTimeout(Name, 2000);

// const Namchange = () => {
//   document.querySelector("#heading").innerHTML = "Debjit Panja";
// };

// const changeText = setTimeout(Namchange, 3000);

// document.querySelector("#stop").addEventListener("click", () => {
//   clearTimeout(changeText);
//   console.log("stop");
// });

// const IntervalFun = () => {
//   console.log("krish");
// };
// let textInterVAl;
// document.querySelector("#start").addEventListener("click", function () {
//   textInterVAl = setInterval(IntervalFun, 2000);
// });

// document.querySelector("#stop").addEventListener("click", function () {
//   clearInterval(textInterVAl);
// });

// clearInterval(sayDateInterval);

function randomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let interValid;

function startChangingColor() {
  if (!interValid) {
    interValid = setInterval(changingBackground, 1000); //null checking
  }
  function changingBackground() {
    document.body.style.backgroundColor = randomColor();
  }
}

function stopChangingColor() {
  clearInterval(interValid);
  interValid = null;
}

document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
