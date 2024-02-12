// @ts-nocheck
import initialState from "../initialState";
import * as actionTypes from "../actions/actionTypes";
import { CardItem } from "../../models";


const initProduct = {
  numberCart:0,
  Carts:[],
  _products:[]
}

export default function cardReducer(state = initProduct, action: any) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_PRODUCT:
        localStorage.setItem("SELECTED_PRODUCT",JSON.stringify(action.payload))
      return { ...state, product: action.payload };


      case actionTypes.ADD_CART:
    const existingItemIndex = state.Carts.findIndex(item => item.id === action.payload.id);
    if (existingItemIndex !== -1) {
        // If item already exists in the cart, update its quantity
        const updatedCarts = state.Carts.map((item, index) => {
            if (index === existingItemIndex) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        localStorage.setItem('SHOPPING_CARTS', JSON.stringify(updatedCarts));
        return {
            ...state,
            Carts: updatedCarts,
            numberCart: state.numberCart + 1
        };
    } else {
        const newCart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price
        };
        const updatedCarts = [...state.Carts, newCart];
        localStorage.setItem('SHOPPING_CARTS', JSON.stringify(updatedCarts));
        return {
            ...state,
            Carts: updatedCarts,
            numberCart: state.numberCart + 1
        };
    }

    case actionTypes.INCREMENT_PRODUCT_QUANTITY:
      const newState = { ...state };
      newState.Carts = newState.Carts.map((item, index) => {
        if (index === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      });
      newState.numberCart++;
      localStorage.setItem('SHOPPING_CARTS', JSON.stringify(newState.Carts));
      return newState;

      case actionTypes.DECREMENT_PRODUCT_QUANTITY:
        const newStateDec = { ...state };
        const decreasedQuantity = newStateDec.Carts[action.payload].quantity;
    
        if (decreasedQuantity > 1) {
            // If quantity is greater than 1, decrement the quantity
            newStateDec.Carts = newStateDec.Carts.map((item, index) => {
                if (index === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            newStateDec.numberCart--; // Decrease the total number of items in the cart
        } else if (decreasedQuantity === 1) {
            // If quantity is 1, remove the item from the cart
            newStateDec.Carts = newStateDec.Carts.filter((_, index) => index !== action.payload);
            newStateDec.numberCart--; // Decrease the total number of items in the cart
        }
    
        localStorage.setItem('SHOPPING_CARTS', JSON.stringify(newStateDec.Carts));
        return newStateDec;
    


    default:
      return state;
  }
}
