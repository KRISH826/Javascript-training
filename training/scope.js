/** @format */

// scope starts with let var const

// What is block scoping JavaScript?
// The block scope of a variable means that the variable is accessible within the block that is between the curly braces.

// nested scopes

function one() {
  const user = "krish";

  function two() {
    console.log(user);
    const user1 = "debjit";
  }
  two();
  //   console.log(user1); //out of scope
}

one();
