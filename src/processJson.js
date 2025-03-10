import { Weather } from "./weatherObject";

async function getWeather(url) {
  try {
    const response = await fetch(url, { mode: "cors" });
    if(!response.ok){
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
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

export { getWeather, processJson };
