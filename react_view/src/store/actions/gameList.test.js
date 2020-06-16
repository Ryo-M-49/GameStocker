import * as actionTypes from './actionTypes';
import * as actions from './gameList';
import moxios from 'moxios';

import { RAKUTEN_API_BASE_URL, RAKUTEN_API_OPTIONAL_URL, createTestStore } from '../../../test/testUtil';

describe('action creators', () => {
    it('should create an action to set a keyword for search', () => {
        const isSearched = true;
        const keyword = 'keyword';
        const expectedAction = {
            type: actionTypes.SET_SEARCH,
            isSearched,
            keyword,
        };
        expect(actions.setSearch(isSearched, keyword)).toEqual(expectedAction);
    });

    it('should create an action to toggle a loading flag', () => {
        const isLoading = true;
        const expectedAction = {
            type: actionTypes.SET_LOADING,
            isLoading,
        };
        expect(actions.setLoading(isLoading)).toEqual(expectedAction);
    });

    it('should create an action to set games', () => {
        const games = {
            count: 1525,
            title: 'title',
        };
        const expectedAction = {
            type: actionTypes.SET_GAMES,
            games,
        };
        expect(actions.setGames(games)).toEqual(expectedAction);
    });

    it('should create an action to set a current page', () => {
        const currentPage = 1;
        const expectedAction = {
            type: actionTypes.SET_CURRENT_PAGE,
            currentPage,
        };
        expect(actions.setCurrentPage(currentPage)).toEqual(expectedAction);
    });

    it('should create an action to set an error', () => {
        const expectedAction = {
            type: actionTypes.FETCH_GAMES_FAILED,
            error: true,
            search: {
                isSearched: false,
                keyword: null,
            },
        };
        expect(actions.fetchGamesFailed()).toEqual(expectedAction);
    });
});

describe('async actions', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('creates SET_GAMES and SET_LOADING when fetching games has been done', () => {
        const currentPage = 1;
        const store = createTestStore();
        const expectedActions = [
            { type: actionTypes.SET_LOADING, isLoading: true },
            { type: actionTypes.SET_GAMES, games: { data: { games: 'games'} } },
            { type: actionTypes.SET_LOADING, isLoading: false },
        ];

        moxios.stubRequest(
            `${RAKUTEN_API_BASE_URL}&hardware=PS&page=${currentPage}&${RAKUTEN_API_OPTIONAL_URL}`, 
            {
                response: {
                    data: {
                        games: 'games'
                    }
                }
            }
        );

        return store.dispatch(actions.updateGamesByPage(currentPage))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        }) 
    });

    it('creates SET_SEARCH/SET_LOADING/SET_GAMES when updating games has been done', () => {
        const title = 'title';
        const currentPage = 1;
        const store = createTestStore();
        const expectedActions = [
            { type: actionTypes.SET_SEARCH, isSearched: true, keyword: title },
            { type: actionTypes.SET_LOADING, isLoading: true },
            { type: actionTypes.SET_GAMES, games: { data: { games: 'games'} } },
            { type: actionTypes.SET_LOADING, isLoading: false },
        ];

        moxios.stubRequest(
            // `${RAKUTEN_API_BASE_URL}&hardware=PS&title=${title}&page=${currentPage}&${RAKUTEN_API_OPTIONAL_URL}`, 
            `https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&title=${title}&hits=30&booksGenreId=006&page=${currentPage}&applicationId=1009084489441242376`, 
            {
                response: {
                    data: {
                        games: 'games'
                    }
                }
            }
        );

        return store.dispatch(actions.updateGamesByTitle(title, currentPage))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        }) 
    });
});