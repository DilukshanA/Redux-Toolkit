const defaultState = {
    number: 0,
}

const reducer = (state = defaultState, {type, payload}) => {
    if (type === 'increment') {
        return {
            number: state.number + payload,
        }
    }

    if (type === 'decrement') {
        return {
            number: state.number - payload,
        }
    }
    return state;
}

export default reducer;