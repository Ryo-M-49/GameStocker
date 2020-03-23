import * as actionTypes from './actionTypes';
import axios from 'axios';

// Used to set games
export const setGames = (games, currentPage, pageCount) => {
    return {
        type: actionTypes.SET_GAMES,
        games: games,
        currentPage: currentPage,
        pageCount: pageCount,
        isSearched: false
    };
};

// Used to set searched games
export const setAllGames = (searchedGames, currentPage, pageCount) => {
    return {
        type: actionTypes.SET_ALL_GAMES,
        searchedGames: searchedGames,
        currentPage: currentPage,
        pageCount: pageCount,
        isSearched: true,
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
                const results = response.data;
                dispatch(setGames(results, results.page, results.pageCount));
            })
            .catch(error => {
                dispatch(fetchGamesFailed());
            });
    };
};

export const fetchAllGames = pageCount => {
    const games = [];
        for (let page = 1; page <= pageCount; page++) {
            axios
                .get(
                    `https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&page=${page}&hits=30&booksGenreId=006&applicationId=1009084489441242376`
                )
                .then(response => {
                    games.push(response.data);
                })
                .catch(error => {
                    console.log('Failed to fetch all games');
                });
        };
    return games;
};
