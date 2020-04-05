export const setLike = review => {
    return {
        type: actionTypes.SET_LIKE,
        isLiked: review.isLiked,
        like: review.like,
    };
};

export const like = (userId, gameId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${gameId}/likes`;
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

export const unlike = (userId, gameId, likeId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${gameId}/likes/${likeId}`;
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
