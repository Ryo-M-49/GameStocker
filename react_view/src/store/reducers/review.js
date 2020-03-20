import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    review: {
        title: null,
        image: null,
        good: null,
        bad: null,
        rate: 3  
    }
};

const setReview = (state, action) => {
    return updateObject(state, {
        review: action.review,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_GAMES:
            return setReview(state, action);
        default:
            return state;
    }
};

export default reducer;
