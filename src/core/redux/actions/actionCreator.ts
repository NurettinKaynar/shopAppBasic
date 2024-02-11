import { ProductDto } from "../../models";
import * as actionTypes from "./actionTypes";

export const selectProduct = (product:ProductDto) => ({ type: actionTypes.SET_SELECTED_PRODUCT, payload: product })

export const addToCart = (product:ProductDto) => ({ type: actionTypes.ADD_CART, payload: product })

export const removeToCard = (product:ProductDto) => ({ type: actionTypes.REMOVE_CART, payload: product })