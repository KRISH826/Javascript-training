/** @format */

// There are 4 ways of writing Events in javascript..

// - using inline events alert
// - by calling a function
// - using inline events (on Html declaration)
// - using Event listners (addEventlistenrs)

// ------------------------
// here are some examples of HTML events
// - An HTML web page has finished loading
// - An HTML input field was changed
// - An HTML button was clicked
// - Often,when events happen, you may want to do something

// function clickFunction() {
//   alert("hi hello krish");
// }

// let clickbutton = (document.getElementById("clickFunc").onclick = function () {
//   alert("hi");
// });

// what is Event Object ?
// --Event object is the parent object of the event object
// examples are -
// MouseEvent, FocusEvent, KeyboardEvent

// const checkEvent = (event) => {
//   console.log(event);
//   console.log(event.type);
//   console.log(event.target);
// };

// let fourthWay = document.querySelector("#fourway");
// fourthWay.addEventListener("click", checkEvent);

// input based events
// function myValue() {
//   const inputChange = document.getElementById("myName").value;
//   const selectChange = document.getElementById("nameLists").value;

//   console.log(`input is ${inputChange} and select is ${selectChange}`);
// }

// timing based events

// the window object allowes excution of code at specified time intervals.
// these time intervals are called timing events/
// the two key methods to use with javascript are:

// setTimeout(function, miliseconds)
// executes a function, after waiting a specified number of miliseconds.

// setInterval(function, miliseconds)
// samse as setTimeout(), but repeates the excutions of the functions continously

// const NewName = document.querySelector("#myName");
// const BtnName = document.getElementById("clickBtn");

// const generateName = () => {
//   NewName.innerHTML = "loading...";
//   setTimeout(() => {
//     NewName.innerHTML = "Krishnendu Panja";
//   }, 2000);
// };

// BtnName.addEventListener("click", generateName);

// setInterval

// const NewName = document.querySelector("#myName");
// const BtnName = document.getElementById("clickBtn");
// const stopBtnName = document.getElementById("pauseBtn");
// let timeRef;

// const generateName = () => {
//   NewName.innerHTML = "loading...";
//   let num = 0;
//   timeRef = setInterval(() => {
//     NewName.innerHTML = `${num}`;
//     num++;
//   }, 1000);
// };

// BtnName.addEventListener("click", generateName);
// stopBtnName.addEventListener("click", () => {
//   clearInterval(timeRef);
// });

// what is object oriented programming system (oops)

// what is Object Literal ?

// Object Literal is simply a key: value pair data structure
// storing variables and functions together in one container
// we can refer this is an object

// how to create an object?
// 1st way
// let realName = {
//   name: "krish",
//   age: 25,
//   getData: function () {
//     console.log(`my name is ${realName.name}`);
//   },
// };

// console.log(realName.getData());

// 2nd way

// let realName = {
//   name: "krish",
//   age: 25,
//   getData() {
//     console.log(`my name is ${realName.name}`);
//   },
// };

// console.log(realName.getData());

//  what is this object
// the defination of 'this' object is that it contain the current context

// some notes
// kichu na kichu activity korar jonno events use kora hye
// alaways amra addEventListener use korbo kano ki addEventListener e onek event dhora jaye and e

document.getElementById("submit").addEventListener(
  "click",
  (e) => {
    console.log(e);
  },
  false
  //   type, timestamp, defaultPrevent(), target, toELement,srcElement, CurrentTarget,clientX, clientY,screenX, screenY,altkey,shiftkey,ctrlkey,others keycodes
);
//ekhane default false e thake amra true o korte pari
// what is event propogation ?
// -- event propogation e duto context thake -- 1.event bubbling, 2. event capturing

// event bubbling child to parent call kore
// event capturing parent to child call kore5

document.getElementById("list").addEventListener(
  "click",
  () => {
    console.log("list clicked");
  },
  false
  //   true
); //ekhane true kore dile event capturing on hye jaye event bubbling default thake

// document.getElementById("juio").addEventListener(
//   "click",
//   (e) => {
//     console.log("juio clicked");
//     e.stopPropagation(); // stopPropagation er jonne parents er event ar call hbe na
//   },
//   false
//   //   true
// ); //ekhane true kore dile event capturing on hye jaye event bubbling default thake

// -- this is event bubbling

// Jquery
// attachEvent use kora hoto internet explorer jonno
// (e) => stands for event Object

//

const listconst = document.querySelector("#languageID");
listconst.addEventListener("click", (e) => {
  console.log(e.target);
  e.target.remove();
});
