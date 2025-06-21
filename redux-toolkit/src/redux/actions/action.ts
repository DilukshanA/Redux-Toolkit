import actionTypes from "./actionTypes";

// this can use into dispatch

export const numberIncrement = (payload: number) => ({
    type: actionTypes.INC,
    payload,
})

export const numberDecrement = (payload: number) => ({
    type: actionTypes.DEC,
    payload
})