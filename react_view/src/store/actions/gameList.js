import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setGames = games => {
    return {
        type: actionTypes.SET_GAMES,
        games: games,
        isSearched: false,
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
    };
};

export const updateGamesByPage = currentPage => {
    return dispatch => {
        const url = `https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&page=${currentPage}&hits=30&booksGenreId=006&applicationId=1009084489441242376`;
        axios
            .get(url)
            .then(response => {
                dispatch(setGames(response.data));
            })
            .catch(error => {
                dispatch(fetchGamesFailed());
            });
    };
};

export const updateGamesByTitle = title => {
    return dispatch => {
        const url = `https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&title=${title}&hits=30&booksGenreId=006&applicationId=1009084489441242376`;
        axios
            .get(url)
            .then(response => {
                dispatch(setGames(response.data));
            })
            .catch(error => {
                dispatch(fetchGamesFailed());
            });
    };
};
