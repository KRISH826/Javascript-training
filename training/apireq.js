/** @format */

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);

  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data.title);
  }
};
xhr.send();

// api theke jokhon data ase tokhon string ase alaways
