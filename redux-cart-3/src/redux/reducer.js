import {ADD_TO_CART, ADD_TO_ORDER} from './actionType';
import data from '../utils/data.json';

const initialState = {
    data : data,
    cartArray:[],
    order: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:{
            return{
                ...state,
                cartArray:[...state.cartArray,payload]
            }
        }
        case ADD_TO_ORDER:{
            let { order } = state
            let newOrder = {
                id: order.length ? Number(order[order.length-1].id) + 1 : 1,
                user: payload,
                cart: state.cartArray
            }
            return{
                ...state,
                order: [...state.order, newOrder],
                cartArray: []
            }
        }

        default:
            return {...state}
    }
}