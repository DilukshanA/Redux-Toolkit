import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 12,
    computer:[]
}

export const computerSlice = createSlice({
    name: "computer",
    initialState,
    reducers: {
        addComputer: (state, action) => {
            state.count += action.payload;
        },
        removeComputer: (state, action) => {
            state.count -= action.payload
        }
    }
})

export const computerSliceSelector = (store: any) => store.computerSlice.count;
export const { addComputer, removeComputer } = computerSlice.actions;
export default computerSlice.reducer;