import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { laptopTypes } from "./laptopSlice";

export type laptopCartTypes = laptopTypes & {
    count: number;
}

const initialState : laptopCartTypes[] = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: {
            reducer: (state, action: PayloadAction<laptopCartTypes>) => {
                const id = action.payload.id;
                const existingItem = state.find(item => item.id === id);
                if (existingItem) {
                    existingItem.count += 1;
                    return;
                } else {
                    state.push(action.payload);
                }
            },
            prepare: ({ id, price, cpu, ram } : laptopCartTypes) => ({
                payload: {
                    id,
                    price,
                    cpu,
                    ram,
                    count: 1
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