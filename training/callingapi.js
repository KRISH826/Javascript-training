/** @format */

const mainContent = document.querySelector("#weathermain");

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/india");
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const htmlData = `
        <div class="card" style="width: 18rem;">
  <img src="${data.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.capital}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;

  mainContent.insertAdjacentHTML("afterbegin", htmlData);
});
