import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    game: {
        gameId: null,
        title: null,
        caption: null,
        image: null,
        url: null,
    },
    review: {
        good: null,
        bad: null,
        rate: 3,
    },
};

const setReview = (state, action) => {
    return updateObject(state, {
        review: action.review,
    });
};

const setGame = (state, action) => {
    return updateObject(state, {
        game: action.game,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_REVIEW:
            return setReview(state, action);
        case actionTypes.SET_GAME:
            return setGame(state, action);
        default:
            return state;
    }
};

export default reducer;
