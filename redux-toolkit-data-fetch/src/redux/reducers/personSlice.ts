import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

export type Person = {
    _id: string;
    name: string;
    age: number;
    email: string;
}

interface PersonSate {
    data: Person[] | null;
    loading: boolean;
    error: boolean | string;
}

const initialState : PersonSate = {
    data: [],
    loading: false,
    error: false
}

export const fetchAllPerson = createAsyncThunk<Person[]>(
    "person/fetchAllPerson",
    async () => {
        try {
            const response = await axios.get("http://localhost:4000/all-persons");
            const data = await response.data;
            // const response = await fetch("http://localhost:4000/all-persons");
            // const data = await response.json();
            if (data) {
                return data;
            } else {
                return{ error : "No data found" };
            }
        } catch (error : any) {
            return { error: error.message || "Failed to fetch persons"
            }
        }
    }
)

const personSlice = createSlice({
    name: "persons",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllPerson.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(fetchAllPerson.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchAllPerson.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        })
    }
})

// export the slice
export default personSlice;

// export the actions
export const { } = personSlice.actions;

// export single reducer
export const personSliceReducer = personSlice.reducer;

// export selectors
// Other code such as selectors can use the imported `RootState` type
export const selectPersonData = (state: RootState) => state.allPersons;