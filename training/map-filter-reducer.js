/** @format */
// with map
const arr = [1, 2, 3, 43, 5, 5, 6, 7, 8];

const newarr = arr.filter((num) => {
  return num > 5;
});
console.log(newarr);

// with each loops

// let newnum = [];
// arr.forEach((num) => {
//   if (num > 8) {
//     newnum.push(num);
//   }
// });

// console.log(newnum);

// const books = [
//   { name: "sola saga", price: 20 },
//   { name: "sola saga1", price: 50 },
//   { name: "sola saga2", price: 40 },
//   { name: "sola saga3", price: 100 },
//   { name: "sola saga4", price: 205 },
// ];

// const newbooks = books.filter((book) => {
//   return book.price < 100;
// });

// console.log(newbooks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const newnums = myNumbers.map((item) => item);
console.log(newnums);

// map er opor amra map use korte pari then filter o use krte pari chain hisebe

// const mynums = [1, 2, 3, 4];

// const mytotal = mynums.reduce((accu, curr) => {
//   console.log(accu, curr);
//   return accu + curr;
// }, 0);

// console.log(mytotal);

const shoppingCart = [
  { course: "java", price: 100 },
  { course: "data science", price: 999 },
  { course: "javascript", price: 200 },
];

const CheckoutPage = shoppingCart.reduce((accum, current) => {
  return accum + current.price;
}, 0);

console.log(CheckoutPage);
