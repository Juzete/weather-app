import cloudyDay1 from "../assets/weatherIcons/cloudy-day-1.svg";
import day from "../assets/weatherIcons/day.svg";
import rainy from "../assets/weatherIcons/rainy-1.svg";
import snowy from "../assets/weatherIcons/snowy-3.svg";
import mist from "../assets/weatherIcons/cloudy.svg";

export const setWeatherIcon = (weather) => {
  switch (weather) {
    case "Clouds":
      return cloudyDay1;
    case "Clear":
      return day;
    case "Rain":
      return rainy;
    case "Snow":
      return snowy;
    case "Mist":
      return mist;

    default:
      break;
  }
};
