import { configureStore } from "@reduxjs/toolkit"
import  laptopSliceReducer  from "../reducers/laptopSlice"
import computerSliceReducer from "../reducers/computerSlice";
import mobileSliceReducer from "../reducers/mobileSlice";

const store = configureStore({
    reducer:{
        laptopSlice: laptopSliceReducer,
        computerSlice: computerSliceReducer,
        mobileSlice: mobileSliceReducer
    }
})

export default store;