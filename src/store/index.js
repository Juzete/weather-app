import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducers";

const loggerMiddleware = (store) => (next) => (action) => {
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  const result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk, loggerMiddleware))
    : applyMiddleware(thunk)
);
