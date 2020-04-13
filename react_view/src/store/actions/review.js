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

export const getAllReviews = userId => {
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

export const getUserReviews = userId => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/show_by_user`;
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

export const getUserReviewsByRecent = userId => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/show_by_recent`;
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

export const getUserReviewsByLike = userId => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/show_by_like`;
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

export const createReview = (reviewDetail, userId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews`;
        axios
            .post(url, reviewDetail)
            .then(response => {
                console.log('createReview triggered', response.data);
                dispatch(getReview(userId, reviewDetail.gameId));
                dispatch(toggleSnackbar(true));
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
) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}`;
        axios
            .patch(url, reviewDetail)
            .then(response => {
                dispatch(toggleSnackbar(true));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const deleteReview = (
    userId,
    reviewId,
) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}`;
        axios
            .delete(url)
            .then(response => {
                dispatch(toggleSnackbar(true));
                let emptyReview = {
                    id: null,
                    good: '',
                    bad: '',
                    rate: null,
                    likes_count: null,
                    isExisted: false,
                };
                dispatch(setReview(emptyReview));
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
