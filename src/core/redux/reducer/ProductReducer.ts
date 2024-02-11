import initialState from "../initialState";
import * as actionTypes from "../actions/actionTypes";
import { ProductDto } from "../../models";

interface Action {
  type: string;
  payload: any;
}

export default function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_PRODUCT:
      return { ...state, product: action.payload };
    case actionTypes.REMOVE_CART:
      // Filter out the product with the matching ID
      const updatedShoppingCart = state.shoppingCart.filter((product: ProductDto) => product.id !== action.payload.id);
      return { ...state, shoppingCart: updatedShoppingCart };
    case actionTypes.ADD_CART:
      return { ...state, shoppingCart: [...state.shoppingCart, action.payload] };
    default:
      return state;
  }
}
