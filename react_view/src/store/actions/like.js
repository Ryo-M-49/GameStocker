export const like = (userId, gameId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/reviews/${gameId}/likes`;
        const likedReview = {
            user_id: userId,
            review_id: gameId,
        };
        axios
            .post(url, likedReview)
            .then(response => {
                console.log(response, 'successfully liked it!');
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
                console.log(response, 'successfully unliked it!');
            })
            .catch(error => {
                console.log(error);
            });
    };
};
