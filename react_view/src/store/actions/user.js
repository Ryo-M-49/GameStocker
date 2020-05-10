import axios from 'axios';
import * as actionTypes from './actionTypes';

export const controlUserFail = error => {
    return {
        type: actionTypes.CONTROL_USER_FAIL,
        error: error,
    };
};

export const getUserSuccess = userData => {
    return {
        type: actionTypes.GET_USER_SUCCESS,
        id: userData.id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        image: userData.image_url,
        introduction: userData.introduction,
    };
};

export const setIsLoading = isLoading => {
    return {
        type: actionTypes.SET_ISLOADING,
        isLoading: isLoading,
    };
};

export const setImage = image => {
    return {
        type: actionTypes.SET_IMAGE,
        image: image,
    };
};

export const getUser = userId => {
    return dispatch => {
        dispatch(setIsLoading(true));
        const url = `http://localhost:3001/users/${userId}`;
        axios
            .get(url)
            .then(response => {
                dispatch(getUserSuccess(response.data));
                dispatch(setIsLoading(false));
            })
            .catch(error => {
                dispatch(controlUserFail(error));
                dispatch(setIsLoading(false));
            });
    };
};

export const updateUser = (userData, userId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}`;
        axios
            .patch(url, userData)
            .then(response => {
                dispatch(getUserSuccess(response.data));
            })
            .catch(error => {
                dispatch(controlUserFail(error));
            });
    };
};

export const getUserImage = userId => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/show_user_image`;
        axios
            .get(url)
            .then(response => {
                dispatch(setImage(response.data));
            })
            .catch(error => {
                dispatch(controlUserFail(error));
            });
    };
};

export const updateUserImage = (image, userId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/update_user_image`;
        axios
            .patch(url, image)
            .then(response => {
                const imageUrl = response.data.image_url;
                console.log('imageUrl is', imageUrl);
                dispatch(setImage(imageUrl));
            })
            .catch(error => {
                dispatch(controlUserFail(error));
            });
    };
};

export const deleteUserSuccess = () => {
    return {
        type: actionTypes.DELETE_USER_SUCCESS,
    };
};

export const deleteUser = userId => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}`;
        axios
            .delete(url)
            .then(response => {
                dispatch(deleteUserSuccess());
            })
            .catch(error => {
                dispatch(controlUserFail(error));
            });
    };
};
