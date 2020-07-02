import data from '../utils/data.json';

const initialState = {
    data : data
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case typeName:
        return { ...state, ...payload }

    default:
        return {...state}
    }
}
