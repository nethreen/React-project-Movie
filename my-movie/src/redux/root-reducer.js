import {combineReducers} from "redux";

import cartReducer from "../redux/reducer/cart.reducer"


const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer;