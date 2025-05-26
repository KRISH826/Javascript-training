/** @format */

// Date And Time (Get and Set)
// By default, JavaScript will use the browser's time zone and display a date as a full text string:
// Wed Oct 11 2023 19:08:37 GMT+0530 (India Standard Time)

// new Date();
// new Date(date string);
// new Date(year, month, day, hours, minutes, seconds, ms);
// new Date(milliseconds);

// examples

// var currDate = new Date().toLocaleString();
// var currDate = new Date().toString();
// var currDate = Date.now();

// var currDate = new Date(2022, 2, 10);

// creates a new date object from a datestring
// var currDate = new Date("Octobor 13, 2021, 11:00:00");

// console.log(currDate.toLocaleString());

// Date Methods (GET)
const currentDate = new Date();

// console.log(currentDate.getDate());
// console.log(currentDate.getHours());
// console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());

// Date Methods (Set) all are set[prototype]
console.log(currentDate.setMonth(10));
console.log(currentDate.setFullYear(2023));

// Date Methods

var DateGet = new Date().toLocaleDateString(); //only for date
// var DateGet = new Date().toLocaleTimeString(); //only for time
console.log(DateGet);
