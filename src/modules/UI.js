const $location = document.querySelector("#location");
const $conditions = document.querySelector("#condition");
const $icon = document.querySelector("#condition-icon");
const $temperature = document.querySelector("#temperature");
const results = document.querySelector("#results");

export default class UI {
  static editLocation(_location) {
    $location.innerText = "";
    $location.innerText += `Location: ${_location}`;
  }

  static editCondition(_condition) {
    $conditions.innerText = "";
    $conditions.innerText = `Condition: ${_condition}`;
  }

  static editIcon(_icon) {
    $icon.innerText = "";
    $icon.src = _icon;
  }

  static editTemperature(_temperature) {
    $temperature.innerText = "";
    $temperature.innerText += `Temperature: ${_temperature} °C`;
  }

  static showResult() {
    results.style.display = "block";
  }
}
