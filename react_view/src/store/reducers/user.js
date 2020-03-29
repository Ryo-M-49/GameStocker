import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    user: {
        id: null,
        first_name: null,
        last_name: null,
        image: null,
        introduction: null,
        error: null,
    },
    users: null,
};

const controlUserFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
    });
};

const getUserSuccess = (state, action) => {
    return updateObject(state, {
        user: {
            id: action.id,
            first_name: action.first_name,
            last_name: action.last_name,
            image: action.image,
            introduction: action.introduction,
            error: action.error,
        }
    });
};

const getAllUserSuccess = (state, action) => {
    return updateObject(state, {
        user: action.users,
    });
};

const deleteUserSuccess = (state, action) => {
    return updateObject(state, {
        user: {
            id: null,
            first_name: null,
            last_name: null,
            image: null,
            introduction: null,
            error: null,
        }
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CONTROL_USER_FAIL:
            return controlUserFail(state, action);
        case actionTypes.GET_USER_SUCCESS:
            return getUserSuccess(state, action);
        case actionTypes.GET_ALL_USER_SUCCESS:
            return getAllUserSuccess(state, action);
        case actionTypes.DELETE_USER_SUCCESS:
            return deleteUserSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;
