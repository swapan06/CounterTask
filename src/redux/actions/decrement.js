import types from "../types";
import store from "../store";

const { dispatch } = store
export function decrement(output) {
    dispatch({
        type: types.DECREMENT,
        payload: output
    })
}