import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setLoading = isLoading => {
    return {
        type: actionTypes.SET_LOADING,
        isLoading: isLoading,
    };
};

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
        dispatch(setLoading(true));
        const url = `${process.env.REACT_APP_API_ENDPOINT_URI}/users/${userId}/reviews/${gameId}`;
        axios
            .get(url)
            .then(response => {
                dispatch(setLoading(false));
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
                dispatch(setLoading(false));
                console.log(error);
            });
    };
};

export const getAllReviews = userId => {
    return dispatch => {
        dispatch(setLoading(true));
        const url = `${process.env.REACT_APP_API_ENDPOINT_URI}/users/${userId}/reviews`;
        axios
            .get(url)
            .then(response => {
                dispatch(setLoading(false));
                if (response.data) {
                    dispatch(setReviews(response.data));
                } else {
                    dispatch(setReview(null));
                }
            })
            .catch(error => {
                dispatch(setLoading(false));
                console.log(error);
            });
    };
};

export const getUserReviews = userId => {
    return dispatch => {
        dispatch(setLoading(true));
        const url = `${process.env.REACT_APP_API_ENDPOINT_URI}/users/${userId}/reviews/show_by_user`;
        axios
            .get(url)
            .then(response => {
                dispatch(setLoading(false));
                if (response.data) {
                    dispatch(setReviews(response.data));
                } else {
                    dispatch(setReview(null));
                }
            })
            .catch(error => {
                dispatch(setLoading(false));
                console.log(error);
            });
    };
};

export const getUserReviewsByRecent = userId => {
    return dispatch => {
        dispatch(setLoading(true));
        const url = `${process.env.REACT_APP_API_ENDPOINT_URI}/users/${userId}/reviews/show_by_recent`;
        axios
            .get(url)
            .then(response => {
                dispatch(setLoading(false));
                if (response.data) {
                    dispatch(setReviews(response.data));
                } else {
                    dispatch(setReview(null));
                }
            })
            .catch(error => {
                dispatch(setLoading(false));
                console.log(error);
            });
    };
};

export const getUserReviewsByLike = userId => {
    return dispatch => {
        dispatch(setLoading(true));
        const url = `${process.env.REACT_APP_API_ENDPOINT_URI}/users/${userId}/reviews/show_by_like`;
        axios
            .get(url)
            .then(response => {
                dispatch(setLoading(false));
                if (response.data) {
                    dispatch(setReviews(response.data));
                } else {
                    dispatch(setReview(null));
                }
            })
            .catch(error => {
                dispatch(setLoading(false));
                console.log(error);
            });
    };
};

export const createReview = (reviewDetail, userId) => {
    return dispatch => {
        dispatch(setLoading(true));
        const url = `${process.env.REACT_APP_API_ENDPOINT_URI}/users/${userId}/reviews`;
        axios
            .post(url, reviewDetail)
            .then(response => {
                dispatch(setLoading(false));
                console.log('createReview triggered', response.data);
                dispatch(getReview(userId, reviewDetail.gameId));
                dispatch(toggleSnackbar(true));
            })
            .catch(error => {
                dispatch(setLoading(false));
                console.log(error);
            });
    };
};

export const updateReview = (reviewDetail, userId, reviewId) => {
    return dispatch => {
        dispatch(setLoading(true));
        const url = `${process.env.REACT_APP_API_ENDPOINT_URI}/users/${userId}/reviews/${reviewId}`;
        axios
            .patch(url, reviewDetail)
            .then(response => {
                dispatch(setLoading(false));
                dispatch(toggleSnackbar(true));
            })
            .catch(error => {
                dispatch(setLoading(false));
                console.log(error);
            });
    };
};

export const deleteReview = (userId, reviewId) => {
    return dispatch => {
        dispatch(setLoading(true));
        const url = `${process.env.REACT_APP_API_ENDPOINT_URI}/users/${userId}/reviews/${reviewId}`;
        axios
            .delete(url)
            .then(response => {
                dispatch(setLoading(false));
                dispatch(toggleSnackbar(true));
                const emptyReview = {
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
                dispatch(setLoading(false));
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
