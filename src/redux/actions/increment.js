import types from "../types";
import store from "../store";

const { dispatch } = store
export function increment(output) {
    dispatch({
        type: types.INCREMENT,
        payload: output
    })
}