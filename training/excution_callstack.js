/** @format */
// JAVASCRIPT EXECUTION CONTEXT

// javscript likhle kichu jinis toiri hye --

// 1. global execution context (.this).
// 2. function execution context
// 3. eval execution context

// javascript execution duto phase e hye --

// 1.Memory Creation Phase
// 2.excution phase

// what is the difference between memory creation phase and excution phase
// ---------------------------------------

// creation phase e sob kichu store kore rakha hye like - var, let, const e ja store kora hye

let val1 = 10;
let val2 = 15;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(5, 12);

// process of execution
// -----
// 1️⃣ Global Execution ➡️ this

// 2️⃣ Memory Creation Phase -
// first of all javascript e sob variable store hye & tader value first of all undefined thake
// here,
// val1 = undefined
// val2 = undefined
// ⬇️
// any Function defination
// addNum() function defination
// ⬇️
// then here,
// result1 & result 2 is undefined

// 3️⃣ Excution Phase -
// here
// val1 = 10; //his value
// val2 = 15; // his value
// ⬇️

// then function here, addNum() ➡️ ei addnum er mdhya (new variable environment + execution thread) toiru hyr -- ar ai kaj ta hye gele alaeways delete hye jye
// ar eta bare bare hye jaye just like that,
// (new variable environment + execution thread) er jonne abar duto phase toiri hye
// Memory Phase ➡️ val1 = undefinrd, val2 = undefined, total = undefined
// and then execution phase ➡️ num1 = 10; num2 = 15, total = 254

// ar ai return total ta hye global excution e

// ---------------------
// CALL STACK
// ------------------------
// call stack holo LIFO method e hye

//  prottek ta function global excution e ase then ota delete kore daye
