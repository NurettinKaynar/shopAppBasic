import {  ProductDto } from "../../models";
import * as actionTypes from "./actionTypes";

export const selectProduct = (product:ProductDto) => ({ type: actionTypes.SET_SELECTED_PRODUCT, payload: product })

export const AddCart=(payload:any)=>({ type:actionTypes.ADD_CART, payload })

export const UpdateCart=(payload:any)=>(  { type:actionTypes.UPDATE_CART_ITEM, payload } )

export const DeleteCart=(payload:any)=>({ type:actionTypes.REMOVE_CART, payload } )

export const IncreaseQuantity=(payload:any)=>({type:actionTypes.INCREMENT_PRODUCT_QUANTITY,payload})

export const DecreaseQuantity=(payload:any)=>({ type:actionTypes.DECREMENT_PRODUCT_QUANTITY, payload })