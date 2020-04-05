import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    isLiked: false,
    like: null,
};

const setLike = (state, action) => {
    return updateObject(state, {
        isLiked: action.isLiked,
        like: action.like,
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
