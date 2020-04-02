import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    games: null,
    error: false,
    isSearched: false,
};

const setGames = (state, action) => {
    return updateObject(state, {
        games: action.games,
        isSearched: action.isSearched,
    });
};

const setCurrentPage = (state, action) => {
    return updateObject(state, {
        games: {
            ...state.games,
            page: action.currentPage,
        },
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
