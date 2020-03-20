import * as actionTypes from './actionTypes';

export const setReview = review => {
    return {
        type: actionTypes.SET_REVIEW,
        review: review,
    };
};

export const setGame = game => {
    return {
        type: actionTypes.SET_GAME,
        game: game,
    };
};
