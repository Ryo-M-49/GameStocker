import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setGames = games => {
    return {
        type: actionTypes.SET_GAMES,
        games: games,
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
        axios
            .get(
                `https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&page=${currentPage}&hits=30&booksGenreId=006&applicationId=1009084489441242376`
            )
            .then(response => {
                console.log(response.data);
                dispatch(setGames(response.data));
            })
            .catch(error => {
                dispatch(fetchGamesFailed());
            });
    };
};
