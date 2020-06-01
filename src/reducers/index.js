import { combineReducers } from "redux";

const fetchData = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_DATA':
            return action.payload.productName
        default:
            return state;
    }
}

const fetchCart = (state = {}, action) => {
    if(action.type === 'FETCH_CART'){
        return action.payload
    }
    return state;
}

export default combineReducers({
    data: fetchData,
    cart: fetchCart
})
