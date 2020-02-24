import * as actionTypes from '../actions/gameList';

const initialState = {
    games: null,
    currentPage: 1,
    error: false,
    isLoggedIn: false
}

const gameListReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.UPDATE_GAMES:
            return {
                ...state,
                games: {
                    ...state.games,
                    
                }
            };
    }
};