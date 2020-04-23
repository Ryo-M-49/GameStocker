import axios from 'axios';
import * as actions from './index';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (userId, accessToken, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: userId,
        token: accessToken,
        uid: email,
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
                const data = response.data.data;
                localStorage.setItem('userId', data.id);
                localStorage.setItem('token', response.headers['access-token']);
                localStorage.setItem('email', response.headers['uid']);
                dispatch(
                    authSuccess(
                        data.id,
                        response.headers['access-token'],
                        response.headers['uid']
                    )
                );
                dispatch(actions.getUser(data.id));
                const snackbar = {
                    isOpen: true,
                    type: 'signin',
                };
                dispatch(toggleAuthSnackbar(snackbar));
            })
            .catch(error => {
                const snackbar = {
                    isOpen: true,
                    type: 'signin-fail',
                };
                dispatch(toggleAuthSnackbar(snackbar));
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
            const email = localStorage.getItem('email');
            dispatch(authSuccess(userId, token, email));
        }
    };
};

export const toggleAuthSnackbar = isSnackbarOpen => {
    return {
        type: actionTypes.TOGGLE_AUTH_SNACKBAR,
        isSnackbarOpen: isSnackbarOpen,
    };
};
