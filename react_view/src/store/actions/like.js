import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setLike = likes => {
    return {
        type: actionTypes.SET_LIKE,
        likes: likes,
    };
};

export const fetchLike = (likes, userId, reviewId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}/likes/1`;
        axios
            .get(url)
            .then(response => {
                likes[reviewId] = response.data;
                dispatch(setLike(likes));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const like = (likes, userId, reviewId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}/likes`;
        axios
            .post(url)
            .then(response => {
                likes[reviewId] = response.data;
                dispatch(setLike(likes));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const unlike = (likes, userId, reviewId, likeId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}/likes/${likeId}`;
        axios
            .delete(url)
            .then(response => {
                delete likes[reviewId];
                dispatch(setLike(likes));
            })
            .catch(error => {
                console.log(error);
            });
    };
};
