import reducers from "../index";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

export default function createShopStore(): any {
  const rootReducer = combineReducers(reducers);
  return configureStore({
    reducer: rootReducer
  });
}
