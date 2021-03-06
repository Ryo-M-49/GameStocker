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
        type: actionTypes.SIGNUP_FAIL,
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
        const url = `${process.env.REACT_APP_API_ENDPOINT_URI}/api/auth`;
        axios
            .post(url, signupData)
            .then(response => {
                const data = response.data.data;
                localStorage.setItem('userId', data.id);
                localStorage.setItem('firstName', data.first_name);
                localStorage.setItem('lastName', data.last_name);
                localStorage.setItem('token', response.headers['access-token']);
                localStorage.setItem('email', response.headers['uid']);
                localStorage.setItem('image', data.image_url);
                dispatch(signupSuccess(userData));
                dispatch(
                    actions.authSuccess(
                        data.id,
                        data.first_name,
                        data.last_name,
                        response.headers['access-token'],
                        response.headers['uid'],
                        data.image_url
                    )
                );
            })
            .catch(error => {
                const snackbar = {
                    isOpen: true,
                    type: 'signup-fail',
                };
                console.log('Catched error', error);
                dispatch(actions.toggleAuthSnackbar(snackbar));
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
