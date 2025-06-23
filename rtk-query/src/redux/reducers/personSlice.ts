import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type Person = {
    _id: string;
    name: string;
    age: number;
    email: string;
}

interface PersonState {
    data: Person[] | null;
    loading: boolean;
    error: string | null;
}

const initialState : PersonState = {
    data: [
        {
            _id: "1",
            name: "John Doe",
            age: 30,
            email: "BkOyA@example.com"
        },
        {
            _id: "2",
            name: "Jane Smith",
            age: 25,
            email: "VH5aB@example.com"
        }
    ],
    loading: false,
    error: null
}

const personSlice = createSlice({
    name: "person",
    initialState,
    reducers: {}
})

// export slice
export default personSlice;

// export actions
export const { } = personSlice.actions;

// export single reducer
export const personSliceReducer = personSlice.reducer;

// export selectors
// export const selectPersons = (state: { person: PersonState }) => state.person.data;
export const selectPersons = (state : RootState) => state.persons;