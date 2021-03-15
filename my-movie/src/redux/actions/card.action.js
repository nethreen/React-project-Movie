import * as actionTypes from "./cart-types";

export const addToCart = (movieID) =>{
    return {
        type : actionTypes.ADD_TO_CART,
        payload : {
            id : movieID
        }  
    }
}

export const removeFromCart = (movieID) =>{
    return {
        type : actionTypes.REMOVE_FROM_CART,
        payload : {
            id : movieID
        }  
    }
} 

export const adjustyQty = (movieID, value) =>{
    return {
        type : actionTypes.ADJUSTY_QTY,
        payload : {
            id : movieID,
            qty : value
        }  
    }
} 

export const loadCurrentItem = (movieID) =>{
    return {
        type : actionTypes.LOAD_CURRENT_ITEM ,
        payload : {
            id : movieID
        }  
    }
} 





export function cartAction(data){
    return (dispatch) => {
        dispatch({payload : data, type : "SET_CURRENT_CART"})
    }
}