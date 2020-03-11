import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getUserSuccess = (userData) => {
    return {
        type: actionTypes.GET_USER_SUCCESS,
        id: userData.id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        image: userData.image
    }
}

export const getUserFail = (error) => {
    return {
        type: actionTypes.GET_USER_FAIL,
        error: error
    }
}

export const getUser = (userId) => {
    return dispatch => {
        const url = `http://localhost:3001/users/${userId}`;
        axios
            .get(url)
            .then(response => {
                dispatch(
                    getUserSuccess(response.data)
                );
            })
            .catch(error => {
                dispatch(getUserFail(error));
            })
    }
}

export const editUser = (userData) => {
    return dispatch => {
        const updatedUser = {
            ...userData,
            first_name: userData.first_name,
            last_name: userData.last_name,
            image: userData.image
            // description: userData.description
        };
        const url = `http://localhost:3001/users/${userId}`;
        axios
            .patch(url, updatedUser)
            .then(response => {
                dispatch(
                    getUserSuccess(response.data)
                );
            })
            .catch(error => {
                dispatch(getUserFail(error));
            })
    }
}

//updateアクションを追加して、実際に試してみる
// talnetでどうやってpatchリクエストを送る？

export const deleteUser = (userId, email) => {
    return {
        type: actionTypes.GET_USER,
        id: userId,
        email: email
    }
}

export const changePassword = (userId, email) => {
    return {
        type: actionTypes.CHANGE_PASSWORD,
        id: userId,
        email: email
    }
}

export const checkCurrentUser = (email, token) => {

}