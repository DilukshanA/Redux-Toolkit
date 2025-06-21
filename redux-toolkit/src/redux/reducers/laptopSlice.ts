import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 10,
    laptop: []
}

export const laptopSlice = createSlice({
    name: "laptop",
    initialState,
    reducers:{
        addLaptop: (state, action) => ({
            ...state,
            count: state.count + action.payload,
        }),
        removeLaptop: (state, action) => ({
            ...state,
            count: state.count - action.payload
        })
    }
})

export const { addLaptop, removeLaptop } = laptopSlice.actions;
export default laptopSlice.reducer;