import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (accessToken, uId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: accessToken,
        uid: uId,
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            password_confirmation: password,
        };
        const url = 'http://localhost:3001/api/auth/sign_in';
        axios
            .post(url, authData)
            .then(response => {
                localStorage.setItem('token', response.headers['access-token']);
                localStorage.setItem('userId', response.headers['uid']);
                dispatch(
                    authSuccess(
                        response.headers['access-token'],
                        response.headers['uid']
                    )
                );
            })
            .catch(error => {
                dispatch(authFail(error));
            });
    };
};

export const setAuthRedirectPath = path => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path,
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));
        }
    };
};

// export const changePassword = (userId, email) => {
//     return {
//         type: actionTypes.CHANGE_PASSWORD,
//         id: userId,
//         email: email
//     }
// }

// export const checkCurrentUser = (email, token) => {

// }
