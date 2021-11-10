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
  console.log(window.location);
}

searchButton[0].addEventListener("click", searchCity);

let mymap = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiZXBlbnQiLCJhIjoiY2t2dGc2NjRxMGQ4YzJ3anRxNDZoNjJpeSJ9.V6jxm3rLXRVwH5tzsL9f3Q",
  }
).addTo(mymap);
