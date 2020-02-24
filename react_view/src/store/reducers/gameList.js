import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    games: null,
    currentPage: 1,
    error: false,
};

const setGames = (state, action) => {
    return updateObject(state, {
        games: action.games,
    });
};

const setCurrentPage = (state, action) => {
    return updateObject(state, {
        games: action.games,
        currentPage: action.currentPage,
    });
};

const fetchGamesFailed = (state, action) => {
    return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_GAMES:
            return setGames(state, action);
        case actionTypes.SET_CURRENT_PAGE:
            return setCurrentPage(state, action);
        case actionTypes.FETCH_GAMES_FAILED:
            return fetchGamesFailed(state, action);
        default:
            return state;
    }
};

export default reducer;
