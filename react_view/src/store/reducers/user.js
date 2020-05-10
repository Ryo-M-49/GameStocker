import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    id: null,
    first_name: null,
    last_name: null,
    image: null,
    introduction: null,
    isLoading: false,
    error: null,
};

const setIsLoading = (state, action) => {
    return updateObject(state, {
        isLoading: action.isLoading,
    });
};

const controlUserFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
    });
};

const setImage = (state, action) => {
    return updateObject(state, {
        image: action.image,
    });
};

const setUser = (state, action) => {
    return updateObject(state, {
        id: action.id,
        first_name: action.first_name,
        last_name: action.last_name,
        image: action.image,
        introduction: action.introduction,
        error: action.error,
    });
};

const getUserSuccess = (state, action) => {
    return updateObject(state, {
        id: action.id,
        first_name: action.first_name,
        last_name: action.last_name,
        image: action.image,
        introduction: action.introduction,
        error: action.error,
    });
};

const deleteUserSuccess = (state, action) => {
    return updateObject(state, {
        id: null,
        first_name: null,
        last_name: null,
        image: null,
        introduction: null,
        error: null,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ISLOADING:
            return setIsLoading(state, action);
        case actionTypes.CONTROL_USER_FAIL:
            return controlUserFail(state, action);
        case actionTypes.SET_IMAGE:
            return setUser(state, action);
        case actionTypes.SET_USER:
            return setUser(state, action);
        case actionTypes.GET_USER_SUCCESS:
            return getUserSuccess(state, action);
        case actionTypes.DELETE_USER_SUCCESS:
            return deleteUserSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;
