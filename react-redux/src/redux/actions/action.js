// export action types
export const ActionTypes = {
    INCREMENT : 'increment',
    DECREMENT : 'decrement',
}

// return action objects
export const numberIncrement = (value) => {
    return {
        type: ActionTypes.INCREMENT,
        payload: value,
    }
}


export function numberDecrement(value) {
    return {
        type: ActionTypes.DECREMENT,
        payload: value,
    }
}