import {ADD_TO_CART, ADD_TO_ORDER} from './actionType';

export const addToCart=payload=>{
    return{
        type:ADD_TO_CART,
        payload
    }
}
export const addToOrder = (payload) => ({
    type: ADD_TO_ORDER,
    payload
})