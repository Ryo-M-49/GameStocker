export const setLike = review => {
    return {
        type: actionTypes.SET_LIKE,
        isLiked: review.isLiked,
        like: review.like,
    };
};

export const like = (userId, reviewId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}/likes`;
        axios
            .post(url)
            .then(response => {
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
                dispatch(setLike(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};
