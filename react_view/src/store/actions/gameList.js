import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setSearched = () => {
    return {
        type: actionTypes.SET_SEARCHED,
        isSearched: true,
    };
};

export const setLoading = isLoading => {
    return {
        type: actionTypes.SET_LOADING,
        isLoading: isLoading,
    };
};

export const setGames = games => {
    return {
        type: actionTypes.SET_GAMES,
        games: games,
        // isSearched: false,
    };
};

export const setCurrentPage = selectedPage => {
    return {
        type: actionTypes.SET_CURRENT_PAGE,
        currentPage: selectedPage,
    };
};

export const fetchGamesFailed = () => {
    return {
        type: actionTypes.FETCH_GAMES_FAILED,
        error: true,
        isSearched: false,
    };
};

export const updateGamesByPage = currentPage => {
    return dispatch => {
        dispatch(setLoading(true));
        const url = `https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&page=${currentPage}&hits=30&booksGenreId=006&applicationId=1009084489441242376`;
        axios
            .get(url)
            .then(response => {
                dispatch(setGames(response.data));
                dispatch(setLoading(false));
            })
            .catch(error => {
                dispatch(fetchGamesFailed());
            });
    };
};

export const updateGamesByTitle = title => {
    // setSearched();
    return dispatch => {
        dispatch(setLoading(true));
        const url = `https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&title=${title}&hits=30&booksGenreId=006&applicationId=1009084489441242376`;
        axios
            .get(url)
            .then(response => {
                dispatch(setGames(response.data));
                dispatch(setLoading(false));
            })
            .catch(error => {
                dispatch(fetchGamesFailed());
            });
    };
};
