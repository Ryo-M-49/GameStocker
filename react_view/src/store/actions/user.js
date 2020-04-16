import axios from 'axios';
import * as actionTypes from './actionTypes';

// いったんauthのことは考えず、ここではアクションを実行するのに必要な引数だけ考えればよい
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
        image: userData.image,
        introduction: userData.introduction,
    };
};

export const setImageSuccess = image => {
    return {
        type: actionTypes.SET_IMAGE_SUCCESS,
        image: image,
    };
};

export const setImage = (image, userId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}/upload_image`;
        axios
            .post(url, image)
            .then(response => {
                dispatch(setImageSuccess(response.data.image));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const getUser = userId => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}`;
        axios
            .get(url)
            .then(response => {
                dispatch(getUserSuccess(response.data));
            })
            .catch(error => {
                dispatch(controlUserFail(error));
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
