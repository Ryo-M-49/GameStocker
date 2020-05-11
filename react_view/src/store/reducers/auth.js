import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    userId: null,
    firstName: null,
    lastName: null,
    token: null,
    email: null,
    image: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
    isSnackbarOpen: {
        isOpen: false,
        type: null,
    },
};

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        userId: action.userId,
        firstName: action.firstName,
        lastName: action.lastName,
        token: action.token,
        email: action.uid,
        image: action.image,
        error: null,
        loading: false,
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { 
        userId: null, 
        firstName: null, 
        lastName: null, 
        token: null, email: null, image: null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path });
};

const toggleAuthSnackbar = (state, action) => {
    return updateObject(state, {
        isSnackbarOpen: action.isSnackbarOpen,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPath(state, action);
        case actionTypes.TOGGLE_AUTH_SNACKBAR:
            return toggleAuthSnackbar(state, action);
        default:
            return state;
    }
};

export default reducer;
