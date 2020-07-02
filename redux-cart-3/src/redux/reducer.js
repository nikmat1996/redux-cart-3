import {ADD_TO_CART} from './actionType';
import data from '../utils/data.json';

const initialState = {
    data : data,
    cartArray:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:{
            return{
                ...state,
                cartArray:[...state.cartArray,payload]
            }
        }

        default:
            return {...state}
    }
}
