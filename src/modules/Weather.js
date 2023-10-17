export default class Weather {
  static async searchWeather(searchQuery) {
    // const APIKey = "053c4c71f49e41e485944435230610c0d7";
    const APIKey = "053c4c71f49e41e485944435230610";
    const url = `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${searchQuery}`;

    try {
      const response = await fetch(url, { mode: "cors" });
      const json = await response.json();

      console.log(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  }
}
