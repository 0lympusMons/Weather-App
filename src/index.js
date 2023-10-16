/* 
todo 

*/

const searchForm = document.querySelector("#search-form");
const searchBar = document.querySelector("#location-search");
const searchButton = document.querySelector("#location-search-button");

const $location = document.querySelector("#location");
const $conditions = document.querySelector("#condition");
const $icon = document.querySelector("#condition-icon");
const $temperature = document.querySelector("#temperature");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let searchQuery = e.target[0].value;

  searchWeather(searchQuery).then(function (response) {
    $location.innerText += response.location.country;
    $conditions.innerText += response.current.condition.text;
    $icon.src = response.current.condition.icon;
    $temperature.innerText += response.current.temp_c;
  });
  /* 
  * deleted code
  * erase search bar value after searching
  e.target[0].value = "" 
  */
});

async function searchWeather(searchQuery) {
  const APIKey = "053c4c71f49e41e485944435230610c0d7";
  const url = `https://api.weatherapi.com/v1/current.json?key=053c4c71f49e41e485944435230610&q=${searchQuery}`;

  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
}
