/** @format */

// function languageDetect(languageName) {
//   const li = document.createElement("li");
//   li.innerHTML = `${languageName}`;
//   const mainDiv = document.querySelector(".language");
//   mainDiv.appendChild(li);
// }

// languageDetect("react");
// languageDetect("python");
// languageDetect("angular");

// optimization

function optimizationLang(name) {
  const li = document.createElement("li");
  li.innerHTML = `${name}`;
  document.getElementById("languageID").appendChild(li);
}

optimizationLang("html 5");
optimizationLang("python");
optimizationLang("java");
optimizationLang("Dotnet");

// EDIT

const selectLang = document.querySelector(".language li:nth-child(2)");
// 1st approach
// selectLang.innerHTML = "mojo";
// 2nd approach
// const newli = document.createElement("li");
// newli.textContent = "mojo";
// selectLang.replaceWith(newli);

//

const deleteLang = document.querySelector(".language li:first-child");
deleteLang.remove();
