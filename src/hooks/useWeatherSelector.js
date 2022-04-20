import { useSelector } from "react-redux";
import { weatherSelector } from "../store/selectors";

export const useWeatherSelector = () => {
  useSelector(weatherSelector);
};
