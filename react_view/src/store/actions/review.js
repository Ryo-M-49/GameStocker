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

export const getReview = (userId, gameId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${gameId}`;
        axios
            .get(url)
            .then(response => {
                if (response.data) {
                    const updatedReview = {
                        good: response.data.good,
                        bad: response.data.bad,
                        rate: response.data.rate,
                        isExisted: true
                    }
                    dispatch(setReview(updatedReview));
                } else {
                    const emptyReview = {
                        good: '',
                        bad: '',
                        rate: null,
                        isExisted: false
                    }
                    dispatch(setReview(emptyReview));
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const createReview = (reviewDetail, userId) => {
    const url = `http://localhost:3001/users/${userId}/reviews`;
    axios
        .post(url, reviewDetail)
        .then(response => {
            console.log(response, 'Review POST success!');
        })
        .catch(error => {
            console.log(error);
        });
};

export const updateReview = (reviewDetail, userId, reviewId) => {
    const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}`;
    axios
        .patch(url, reviewDetail)
        .then(response => {
            console.log(response, 'Revie update success!');
        })
        .catch(error => {
            console.log(error);
        });
};
