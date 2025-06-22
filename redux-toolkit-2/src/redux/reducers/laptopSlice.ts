import { createSlice } from "@reduxjs/toolkit";

// initialize the laptop types
export type laptopTypes = {
    id: number;
    price: number;
    cpu: string;
    ram: string;
}

// create initial state for laptop slice 
const initialState : laptopTypes[] = [
    {
        id: 1,
        price: 1000,
        cpu: "i3",
        ram: "8GB",
    },
    {
        id: 2,
        price: 1500,
        cpu: "i5",
        ram: "8GB",
    },
    {
        id: 3,
        price: 2000,
        cpu: "i7",
        ram: "8GB",
    },
    {
        id: 4,
        price: 2500,
        cpu: "i7",
        ram: "16GB",
    },
]

//create laptop slice
const laptopSlice = createSlice({
    name: "laptop",
    initialState,
    reducers: {
        addLaptop: (state, action) => {
            state.push(action.payload);
        }
    }
})

// export the slice
export default laptopSlice;

// export actions
export const { addLaptop } = laptopSlice.actions;

// export single reducer
export const laptopSliceReducer = laptopSlice.reducer;

// export selectors
export const selectLaptop = ((state : any) => state.laptop);