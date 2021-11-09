"use strict";

const searchButton = document.getElementsByTagName("button");
console.log(searchButton);
const enteredIP = document.querySelector("input");
const ipAddress = document.querySelectorAll(".output-field__output")[0];

function searchCity() {
  console.log(enteredIP.value);
  ipAddress.textContent = enteredIP.value;
  enteredIP.value = "";
}

searchButton[0].addEventListener("click", searchCity);
