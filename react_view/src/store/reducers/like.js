import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    likes: {},
};

const setLike = (state, action) => {
    return updateObject(state, {
        likes: action.likes,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LIKE:
            return setLike(state, action);
        default:
            return state;
    }
};

export default reducer;
