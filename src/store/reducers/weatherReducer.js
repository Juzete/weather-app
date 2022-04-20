import {
  FETCH_ONE_DAY_WEATHER,
  FETCH_ONE_DAY_WEATHER_ERROR,
  FETCH_ONE_DAY_WEATHER_SUCCESS,
} from "../constants";

const initialState = {
  oneDayWeather: null,
  fiveDaysWeather: null,
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

    default:
      return state;
  }
};
