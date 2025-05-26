/** @format */

// Window/
// window is the main container or we can say the global Object and any operations related to entire browser window can be a part of window object

// please read difference between window and document

// Document/ - whereas the DOM is the child window object

// DOM = document (document object model), HTML
// BOM = navigator, screen, location, frames, XMLHttpRequest, history (Browser Object MOdel)
// Javascript = Object, Array, Function

// main parent is window

// window.innerHeight()
// window.innerWidth()

// alert(location.href);
// if (confirm("want to visit")) {
//   location.href =
//     "https://www.geeksforgeeks.org/how-are-the-javascript-window-and-javascript-document-different-from-one-another/";
// }

// what is the root element of document ?
// - html,head,body

// hasChildNodes()

// document.body.children;
// var firstChild = document.body.firstElementChild;
// console.log(firstChild);

// const childTwo = document.querySelector(".box-grid2");
// childTwo.style.background = "red";

// siblings
// const siblingsCon = document.nextSibling(".box-grid2");
// const siblingsCon = document.nextSibling(".box-grid2");
// const siblingsCon = document.nextSibling(".box-grid2");
// const siblingsCon = document.nextSibling(".box-grid2");
// console.log(siblingsCon);

function goBack() {
  //   document.getElementById("heading").innerHTML = "TEXT IS CHANGE";
  //   var selected = document.getElementsByClassName("box-grid");
  //   for (let i = 0; i < selected.length; i++) {
  //     selected[i].style.backgroundColor = "aqua";
  //   }
  var select = document.querySelector(".headingmain");
  select.innerHTML = "HI its change";
}

// difference between getelementId and queryselector
