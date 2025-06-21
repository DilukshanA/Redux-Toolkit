import { ActionTypes } from "../actions/action";

const defaultState = {
    number: 0,
}

const reducer = (state = defaultState, {type, payload}) => {
    if (type === ActionTypes.INCREMENT) {
        return {
            ...state, // spread operator
            number: state.number + payload,
        }
    }

    if (type === ActionTypes.DECREMENT) {
        return {
            ...state,
            number: state.number - payload,
        }
    }
    return state;
}

export default reducer;