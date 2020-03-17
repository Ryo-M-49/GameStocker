import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as actions from './index';

export const signupStart = () => {
    return {
        type: actionTypes.SIGNUP_START,
    };
};

export const signupSuccess = userData => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        userData: userData,
    };
};

export const signupFail = error => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        error: error,
    };
};

export const signup = userData => {
    return dispatch => {
        dispatch(signupStart());
        const signupData = {
            first_name: userData.firstName.value,
            last_name: userData.lastName.value,
            email: userData.email.value,
            password: userData.password.value,
        };
        const url = 'http://localhost:3001/api/auth';
        axios
            .post(url, signupData)
            .then(response => {
                localStorage.setItem('token', response.headers['access-token']);
                localStorage.setItem('userId', response.headers['uid']);
                dispatch(signupSuccess(userData));
                dispatch(
                    actions.authSuccess(
                        response.headers['access-token'],
                        response.headers['uid']
                    )
                );
            })
            .catch(error => {
                dispatch(signupFail(error));
            });
    };
};

export const setSignupRedirectPath = path => {
    return {
        type: actionTypes.SET_SIGNUP_REDIRECT_PATH,
        path: path,
    };
};
