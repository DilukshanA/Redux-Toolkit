import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer } from "../reducers/cartSlice";

const store = configureStore({
    reducer: {
        // add reducers here
        cart: cartSliceReducer
    }
})

export default store;