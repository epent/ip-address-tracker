"use strict";

const searchButton = document.getElementsByTagName("button");
console.log(searchButton);
const enteredIP = document.querySelector("input");
const ipAddress = document.querySelectorAll(".output-field__output")[0];
const locationAddress = document.querySelectorAll(".output-field__output")[1];
const timeZone = document.querySelectorAll(".output-field__output")[2];
const isp = document.querySelectorAll(".output-field__output")[3];

function searchCity() {
  let api_key = "at_iQOJlWwcqia8VYuVYdzrFPn1WzAYY";
  let ip = enteredIP.value.toString();

  const fetchData = async () => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${api_key}&ipAddress=${ip}`
    );
    const fetchedData = await response.json();
    console.log(fetchedData);

    ipAddress.textContent = fetchedData.ip;
    locationAddress.textContent = `${fetchedData.location.region}, ${fetchedData.location.country}`;
    timeZone.textContent = `UTC${fetchedData.location.timezone}`;
    isp.textContent = fetchedData.isp;
  };
  fetchData();

  enteredIP.value = "";
}

searchButton[0].addEventListener("click", searchCity);
