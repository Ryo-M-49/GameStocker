import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    id: null,
    first_name: null,
    last_name: null,
    image: null,
    error: null
}

const controlUserFail = (state, action) => {
    return updateObject(state, {
        error: action.error   
    })
}

const getUserSuccess = (state, action) => {
    return updateObject(state, {
        id: action.id,
        first_name: action.first_name,
        last_name: action.last_name,
        image: action.image,
        error: action.error
    })
}

const deleteUserSuccess = (state, action) => {
    return updateObject(state, {
        id: null,
        first_name: null,
        last_name: null,
        image: null,
        error: null 
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CONTROL_USER_FAIL:
            return controlUserFail(state, action);
        case actionTypes.GET_USER_SUCCESS:
            return getUserSuccess(state, action);
        case actionTypes.DELETE_USER_SUCCESS:
            return deleteUserSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;