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

const initialState = {
  oneDayWeather: null,
  fiveDaysWeather: null,
  selfLocationOneDayWeather: null,
  selfLocationFiveDaysWeather: null,
  currentWeatherOneDay: null,
  currentWeatherFiveDays: null,
  weatherTime: null,
  error: null,
  loading: false,
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ONE_DAY_WEATHER:
      return { ...state, loading: true };
    case FETCH_ONE_DAY_WEATHER_SUCCESS:
      return { ...state, loading: false, oneDayWeather: payload };
    case FETCH_ONE_DAY_WEATHER_ERROR:
      return { ...state, loading: false, error: payload };

    case FETCH_FIVE_DAYS_WEATHER:
      return { ...state, loading: true };
    case FETCH_FIVE_DAYS_WEATHER_SUCCESS:
      return { ...state, loading: false, fiveDaysWeather: payload };
    case FETCH_FIVE_DAYS_WEATHER_ERROR:
      return { ...state, loading: false, error: payload };

    case FETCH_SELF_LOCATION_ONE_DAY_WEATHER:
      return { ...state, loading: true };
    case FETCH_SELF_LOCATION_ONE_DAY_WEATHER_SUCCESS:
      return { ...state, loading: false, selfLocationOneDayWeather: payload };
    case FETCH_SELF_LOCATION_ONE_DAY_WEATHER_ERROR:
      return { ...state, loading: false, error: payload };

    case FETCH_SELF_LOCATION_FIVE_DAYS_WEATHER:
      return { ...state, loading: true };
    case FETCH_SELF_LOCATION_FIVE_DAYS_WEATHER_SUCCESS:
      return { ...state, loading: false, selfLocationFiveDaysWeather: payload };
    case FETCH_SELF_LOCATION_FIVE_DAYS_WEATHER_ERROR:
      return { ...state, loading: false, error: payload };

    case SET_CURRENT_WEATHER_TO_VIEW:
      if (payload === "self") {
        return {
          ...state,
          currentWeatherOneDay: state.selfLocationOneDayWeather,
          currentWeatherFiveDays: state.selfLocationFiveDaysWeather,
        };
      } else if (payload === "search") {
        return {
          ...state,
          currentWeatherOneDay: state.oneDayWeather,
          currentWeatherFiveDays: state.fiveDaysWeather,
        };
      }
      return state;

    case SET_WEATHER_TIME:
      return { ...state, weatherTime: payload };

    case REFRESH_WEATHER:
      return {
        ...state,
        oneDayWeather: null,
        fiveDaysWeather: null,
        selfLocationOneDayWeather: null,
        selfLocationFiveDaysWeather: null,
        currentWeatherOneDay: null,
        currentWeatherFiveDays: null,
      };

    default:
      return state;
  }
};
