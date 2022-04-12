import types from "../types";

const initial_state = {
    num: 1
}

export function counterReducer(state = initial_state, action) {
    switch (action.type) {
        case types.INCREMENT: {
            let output = action.payload
            return { ...state, num: output + 1 }
        }
        case types.DECREMENT: {
            let output = action.payload
            return { ...state, num: output - 1 }
        }
        default:
            return { ...state, }
    }
}