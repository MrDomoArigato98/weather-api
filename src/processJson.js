import { Weather } from "./weatherObject";

async function getWeather(url) {
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    return processJson(data);
  } catch (error) {
    console.log(error);
  }
}

const processJson = function processWeatherJsonResponse(jsonData) {
  const weather = new Weather(
    jsonData.resolvedAddress,
    jsonData.currentConditions.datetime,
    jsonData.currentConditions.temp,
    jsonData.currentConditions.feelslike,
    jsonData.currentConditions.humidity,
    jsonData.currentConditions.windspeed,
    jsonData.description
  );

  console.log(weather);
  return weather;
};

export { getWeather };
