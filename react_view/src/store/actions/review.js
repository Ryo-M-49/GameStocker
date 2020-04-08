import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setReview = review => {
    return {
        type: actionTypes.SET_REVIEW,
        review: review,
    };
};

export const setReviews = reviews => {
    return {
        type: actionTypes.SET_REVIEWS,
        reviews: reviews,
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
                    console.log('getReview triggered' ,response.data);
                    const updatedReview = {
                        id: response.data.id,
                        good: response.data.good,
                        bad: response.data.bad,
                        rate: response.data.rate,
                        likes_count: response.data.likes_count,
                        isExisted: true,
                    };
                    dispatch(setReview(updatedReview));
                } else {
                    const emptyReview = {
                        id: null,
                        good: '',
                        bad: '',
                        rate: null,
                        likes_count: null,
                        isExisted: false,
                    };
                    dispatch(setReview(emptyReview));
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const getReviews = userId => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews`;
        axios
            .get(url)
            .then(response => {
                if (response.data) {
                    dispatch(setReviews(response.data));
                } else {
                    dispatch(setReview(null));
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const createReview = (reviewDetail, userId, isSnackbarOpen) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews`;
        axios
            .post(url, reviewDetail)
            .then(response => {
                console.log('createReview triggered',  response.data);
                dispatch(getReview(userId, reviewDetail.gameId));
                dispatch(toggleSnackbar(isSnackbarOpen));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const updateReview = (
    reviewDetail,
    userId,
    reviewId,
    isSnackbarOpen
) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}`;
        axios
            .patch(url, reviewDetail)
            .then(response => {
                dispatch(toggleSnackbar(isSnackbarOpen));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const toggleSnackbar = isSnackbarOpen => {
    return {
        type: actionTypes.TOGGLE_SNACKBAR,
        isSnackbarOpen: isSnackbarOpen,
    };
};
