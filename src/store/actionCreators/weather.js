import axios from "axios";
import {
  FETCH_ONE_DAY_WEATHER,
  FETCH_ONE_DAY_WEATHER_ERROR,
  FETCH_ONE_DAY_WEATHER_SUCCESS,
} from "../constants";

export const fetchOneDayWeather = (city) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_ONE_DAY_WEATHER });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      dispatch({
        type: FETCH_ONE_DAY_WEATHER_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FETCH_ONE_DAY_WEATHER_ERROR,
        payload: "Error loading one day weather",
      });
    }
  };
};