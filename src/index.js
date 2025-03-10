import "./reset.css";
import "./style.css";
import { Weather } from "./weatherObject";
import { getWeather } from "./processJson";
import gitImg from "./assets/git.png";

const locationInput = document.getElementById("input-location");

let locationWeather; //This is the object that will get re-assigned. To be fair it's unnecessary. I'll do the DOM with const later.

locationInput.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    const location = locationInput.value;
    const url =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      location +
      "?unitGroup=us&key=TK8J2K84WTDTJ2QTMZTJNHQPX&contentType=json";

    getWeather(url).then(function (locationWeather) {
        //Do something here. Maybe start populating the DOM
        // console.log(locationWeather.getCelsius());
    });
  }
});

//

// console.log(locationWeather.getCelsius());
