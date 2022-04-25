import axios from "axios";
import {
  FETCH_FIVE_DAYS_WEATHER,
  FETCH_FIVE_DAYS_WEATHER_ERROR,
  FETCH_FIVE_DAYS_WEATHER_SUCCESS,
  FETCH_ONE_DAY_WEATHER,
  FETCH_ONE_DAY_WEATHER_ERROR,
  FETCH_ONE_DAY_WEATHER_SUCCESS,
  FETCH_SELF_LOCATION_FIVE_DAYS_WEATHER,
  FETCH_SELF_LOCATION_FIVE_DAYS_WEATHER_ERROR,
  FETCH_SELF_LOCATION_FIVE_DAYS_WEATHER_SUCCESS,
  FETCH_SELF_LOCATION_ONE_DAY_WEATHER,
  FETCH_SELF_LOCATION_ONE_DAY_WEATHER_ERROR,
  FETCH_SELF_LOCATION_ONE_DAY_WEATHER_SUCCESS,
  REFRESH_WEATHER,
  SET_CURRENT_WEATHER_TO_VIEW,
  SET_WEATHER_TIME,
} from "../constants";

export const setCurrentWeatherToView = (condition) => ({
  type: SET_CURRENT_WEATHER_TO_VIEW,
  payload: condition,
});

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

export const fetchFiveDaysWeather = (city) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_FIVE_DAYS_WEATHER });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      dispatch({
        type: FETCH_FIVE_DAYS_WEATHER_SUCCESS,
        payload: response.data,
      });
      dispatch(setCurrentWeatherToView("search"));
    } catch (e) {
      dispatch({
        type: FETCH_FIVE_DAYS_WEATHER_ERROR,
        payload: "Error loading five days weather",
      });
    }
  };
};

export const fetchSelfLocationOneDayWeather = (lat, lon) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_SELF_LOCATION_ONE_DAY_WEATHER });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      dispatch({
        type: FETCH_SELF_LOCATION_ONE_DAY_WEATHER_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FETCH_SELF_LOCATION_ONE_DAY_WEATHER_ERROR,
        payload: "Error loading one day self location weather",
      });
    }
  };
};

export const fetchSelfLocationFiveDaysWeather = (lat, lon) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_SELF_LOCATION_FIVE_DAYS_WEATHER });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      dispatch({
        type: FETCH_SELF_LOCATION_FIVE_DAYS_WEATHER_SUCCESS,
        payload: response.data,
      });
      dispatch(setCurrentWeatherToView("self"));
    } catch (e) {
      dispatch({
        type: FETCH_SELF_LOCATION_FIVE_DAYS_WEATHER_ERROR,
        payload: "Error loading five days self location weather",
      });
    }
  };
};

export const setWeatherTime = (time) => ({
  type: SET_WEATHER_TIME,
  payload: time,
});

export const refreshWeather = () => ({
  type: REFRESH_WEATHER,
});
