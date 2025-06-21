import { configureStore } from "@reduxjs/toolkit"
import  laptopSliceReducer  from "../reducers/laptopSlice"
import computerSliceReducer from "../reducers/computerSlice";

const store = configureStore({
    reducer:{
        laptopSlice: laptopSliceReducer,
        computerSlice: computerSliceReducer
    }
})

export default store;