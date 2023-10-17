import UI from "./modules/UI";
import Weather from "./modules/Weather";

const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let searchQuery = e.target[0].value;

  Weather.searchWeather(searchQuery).then(function (response) {
    UI.editLocation(response.location.country);
    UI.editCondition(response.current.condition.text);
    UI.editIcon(response.current.condition.icon);
    UI.editTemperature(response.current.temp_c);
    UI.showResult();
  });
});
