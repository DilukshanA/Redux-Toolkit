import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

type Mobile ={
    id: string;
    name: string;
    price: number;
    spec: {
        storage: string;
        ram: string;
    }
}

const initialState: Mobile[] =[
    {
        id: "1",
        name: "Samsung Galaxy S21",
        price: 799,
        spec: {
            storage: "256GB",
            ram: "8GB",
        }
    }
] 

export const mobileSlice = createSlice({
    name: "mobile",
    initialState,
    reducers:{
        addMobile: {
            reducer: (state, action: PayloadAction<Mobile>) => {
                state.push(action.payload)
            },
            prepare: (name : string, price: number, storage: string, ram: string ) => {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        price,
                        spec: {
                            storage,
                            ram
                        }
                    }
                }
            }
        }
    }
})

export const mobileSliceSelector = (store: any) => store.mobileSlice;
export const { addMobile } = mobileSlice.actions;
export default mobileSlice.reducer;