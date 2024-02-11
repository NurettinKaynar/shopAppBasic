import { CardItem, ProductDto } from "../../models";
import * as actionTypes from "./actionTypes";

export const selectProduct = (product:CardItem) => ({ type: actionTypes.SET_SELECTED_PRODUCT, payload: product })

export const addToCart = (product:ProductDto) => ({ type: actionTypes.ADD_CART, product })


export const updateCartItemQuantity = (product: ProductDto, quantity: number) => ({
    type: actionTypes.UPDATE_CART_ITEM_QUANTITY,
    product,
    quantity
});


export const incrementProductQuantity = (product: CardItem) => ({
    type: actionTypes.INCREMENT_PRODUCT_QUANTITY,
    payload: product
});

export const decrementProductQuantity = (product: CardItem) => ({
    type: actionTypes.DECREMENT_PRODUCT_QUANTITY,
    product
});


export const removeToCard = (product:CardItem) => ({ type: actionTypes.REMOVE_CART, payload: product })