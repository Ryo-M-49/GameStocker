import axios from 'axios';
import * as actions from './index';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (
    userId, 
    firstName, 
    lastName, 
    accessToken, email, image) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        firstName: firstName,
        lastName: lastName,
        userId: userId,
        token: accessToken,
        uid: email,
        image: image,
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('image');
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
                console.log('data is ', data);
                localStorage.setItem('userId', data.id);
                localStorage.setItem('firstName', data.first_name);
                localStorage.setItem('lastName', data.last_name);
                localStorage.setItem('token', response.headers['access-token']);
                localStorage.setItem('email', response.headers['uid']);
                localStorage.setItem('image', data.image_url);
                dispatch(
                    authSuccess(
                        data.id,
                        data.first_name,
                        data.last_name,
                        response.headers['access-token'],
                        response.headers['uid'],
                        data.image_url
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
            const firstName = localStorage.getItem('firstName');
            const lastName = localStorage.getItem('lastName');
            const email = localStorage.getItem('email');
            const image = localStorage.getItem('image');
            dispatch(authSuccess
                        (
                            userId, 
                            firstName, 
                            lastName, 
                            token, 
                            email, 
                            image
                        )
                    );
        }
    };
};

export const toggleAuthSnackbar = isSnackbarOpen => {
    return {
        type: actionTypes.TOGGLE_AUTH_SNACKBAR,
        isSnackbarOpen: isSnackbarOpen,
    };
};


export const setImage = image => {
    return {
        type: actionTypes.SET_IMAGE,
        image: image,
    };
};

export const setYourInformation = response => {
    return {
        type: actionTypes.SET_YOUR_INFORMATION,
        id: response.id,
        first_name: response.first_name,
        last_name: response.last_name,
        image: response.image_url,
        introduction: response.introduction,
    };
};


export const getYourInformation = yourId => {
    return dispatch => {
        dispatch(actions.setIsLoading(true));
        const url = `http://localhost:3001/users/${yourId}`;
        axios
            .get(url)
            .then(response => {
                // Set global state for MyPage
                dispatch(setYourInformation(response.data));
                dispatch(actions.setIsLoading(false));
            })
            .catch(error => {
                dispatch(authFail(error));
                dispatch(actions.setIsLoading(false));
            });
    };
};
