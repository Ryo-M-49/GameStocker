import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setLike = like => {
    return {
        type: actionTypes.SET_LIKE,
        like: like,
    };
};

export const fetchLike = (userId, reviewId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}/likes/1`;
        axios
            .get(url)
            .then(response => {
                dispatch(setLike(response.data));
                return response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
};

export const like = (userId, reviewId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}/likes`;
        axios
            .post(url)
            .then(response => {
                console.log('like triggered', response.data);
                dispatch(setLike(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const unlike = (userId, reviewId, likeId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}/likes/${likeId}`;
        axios
            .delete(url)
            .then(response => {
                dispatch(setLike(null));
            })
            .catch(error => {
                console.log(error);
            });
    };
};
