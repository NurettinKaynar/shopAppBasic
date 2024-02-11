import initialState from "../initialState";
import * as actionTypes from "../actions/actionTypes";
import { CardItem, ProductDto } from "../../models";

interface Action {
  type: string;
  payload: any;
  item:CardItem
}

export default function cardReducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_PRODUCT:
        localStorage.setItem("SELECTED_PRODUCT",JSON.stringify(action.payload))
      return { ...state, product: action.payload };

      case actionTypes.ADD_CART:
        const newItem = {
            product: action.product,
            quantity: 1 // Initially add the product with a quantity of 1
        };
        const updatedCart = [...state.shoppingCart, newItem]; // Add the new item to the cart
        localStorage.setItem('SHOPPING_CART', JSON.stringify(updatedCart)); // Update localStorage
        return {
            ...state,
            shoppingCart: updatedCart
        };

      case actionTypes.INCREMENT_PRODUCT_QUANTITY:
        
        localStorage.setItem('SHOPPING_CART', JSON.stringify(action.payload));
    
        return { ...state, product: action.payload };
    
    
        case actionTypes.DECREMENT_PRODUCT_QUANTITY:
            return {
                ...state,
                shoppingCart: state.shoppingCart.map(item => {
                    if (item.product.id === action.product.id && item.quantity > 0) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };
                    }
                    return item;
                })
            };
    

    default:
      return state;
  }
}
