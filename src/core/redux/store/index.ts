import rootReducer from "../index";
import reducers from "../index";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

export default function createShopStore(): any {
  return configureStore({
    reducer: rootReducer
  });
}
