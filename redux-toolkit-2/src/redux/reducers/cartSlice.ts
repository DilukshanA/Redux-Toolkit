import { createSlice } from "@reduxjs/toolkit";

const initialState : any = []
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.push(action.payload);
        }
    }
})

// export the slice
export default cartSlice;

// export actions
export const { addItemToCart } = cartSlice.actions;

//export single reducer
export const cartSliceReducer = cartSlice.reducer;