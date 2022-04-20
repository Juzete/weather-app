import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";

export const rootReducer = combineReducers({
  weather: weatherReducer,
});
