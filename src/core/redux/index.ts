import { combineReducers } from "redux";
import ShopReducer from "./reducer/ProductReducer"

const rootReducer = combineReducers({
  shop:ShopReducer
});

export default rootReducer;