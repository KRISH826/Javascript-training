/** @format */

// promise
// promise holo akta Object

// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise consume");
// }).catch; // promise.then er sthe connecttion hlo resolve er sthe

// without variable

// new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("promise 2 consume");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("promise resolve");
// });

// data consumption
// how to value pass on resolve and then
// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve({ name: "krishnendu", title: "panja" });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ name: "krishnendu", title: "panja" });
//     } else {
//       reject("something is wrong");
//     }
//   }, 1000);
// });

// const userName = promiseFour
//   .then(function (user) {
//     console.log(user);
//     return user.name;
//   })
//   .then(function (name) {
//     console.log(name);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => console.log("the promise either resolve or rejected"));

// console.log(userName);

// .promise alaways .then or .catch nao hote pare amra asynce await use krte o pari, async await direct error ke handle korte pare na

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ name: "krishnendu", title: "panja" });
    } else {
      reject("something is wrong");
    }
  }, 1000);
});

// async function consumePromiseFive() {
//   try {
//     const res = await promiseFive;
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getAllusers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
}

getAllusers();

// https://prnt.sc/eQ76snBTsd4C -- structure of javascript

// kichu somoy fetch lagabar karone otake special queue create toiri hye then ota age call stack e chle jaye the..eigulor fole je special queue toiri hye take microtask queue bola hye.

// fetch('something ') - eta duvabe kaj hye akta holo ->
// 1.web browser/node => network request
// ebar network request jokhon hye tokhon okhaner somosto data onfullfilled chle jaye
// ebar network request jokhon na hye tokhon okhaner somosto data onRejection chle jaye

// then ota variable store or Data te chle jaye then ota response jaye mean global memory te

//
// 2 variable store (DATA)= > 1.onfullfilled(resolve) 2.onRejection(reject)
