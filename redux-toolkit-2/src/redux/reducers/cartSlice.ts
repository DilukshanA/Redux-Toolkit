import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { laptopTypes } from "./laptopSlice";

const initialState : laptopTypes[] = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: {
            reducer: (state, action: PayloadAction<laptopTypes>) => {
                state.push(action.payload);
            },
            prepare: ({ id, price, cpu, ram } : laptopTypes) => ({
                payload: {
                    id,
                    price,
                    cpu,
                    ram
                }
            })
        }
    }
})

// export the slice
export default cartSlice;

// export actions
export const { addItemToCart } = cartSlice.actions;

//export single reducer
export const cartSliceReducer = cartSlice.reducer;

// export selectors
export const selectCart = ({ cart } : any) => cart;