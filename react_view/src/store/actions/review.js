import axios from 'axios';
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

export const createReview = reviewDetail => {
    return dispatch => {
        const userId = reviewDetail.user_id;
        const url = `http://localhost:3001/users/${userId}/reviews`;
        axios
            .post(url, reviewDetail)
            .then(response => {
                console.log(response, 'Review creation success!');
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const updateReview = (reviewDetail, userId, reviewId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}`;
        axios
            .patch(url, reviewDetail)
            .then(response => {
                console.log(response, 'Revie creation success!');
            })
            .catch(error => {
                console.log(error);
            });
    };
};
