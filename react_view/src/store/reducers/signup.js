import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    userData: null,
    error: null,
    loading: false,
    signupRedirectPath: '/'
};


const signupStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const signupSuccess = (state, action) => {
    return updateObject(state, {
        userData: action.userData,
        error: null,
        loading: false,
    });
};

const signupFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    });
};

const setSignupRedirectPath = (state, action) => {
    return updateObject(state, { signupRedirectPath: action.path });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_START:
            return signupStart(state, action);
        case actionTypes.SIGNUP_SUCCESS:
            return signupSuccess(state, action);
        case actionTypes.SIGNUP_FAIL:
            return signupFail(state, action);
        case actionTypes.SET_SIGNUP_REDIRECT_PATH:
            return setSignupRedirectPath(state, action);
        default:
            return state;
    }
};

export default reducer;
