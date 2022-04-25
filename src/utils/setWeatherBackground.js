import {
  clearBG,
  cloudyBG,
  mistBG,
  rainyBG,
  snowyBG,
} from "../assets/weatherBackgrounds";

export const setWeatherBackground = (weather) => {
  switch (weather) {
    case "Clouds":
      return cloudyBG;
    case "Clear":
      return clearBG;
    case "Rain":
      return rainyBG;
    case "Snow":
      return snowyBG;
    case "Mist":
      return mistBG;

    default:
      break;
  }
};
