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

// state: {
// 	games: games
// }
// As is
// games == {
// 	items: [
// 		item: {title: a,
// 			image: b,
// 			etc: c,
// 			...
// 		},
// 		item: {title: a,
// 			image: b,
// 			etc: c,
// 			...
// 		},
// 		...
// 	],
// 	count,
// 	page,
// 	...
// }

// このitemsに非同期で取った前ページのゲームデータは配列を渡す
// ページ数とゲーム数は計算で求めて設定する
// 1ページ当たり30item入るので、item数を30で割ってページ数を出し、30分割する

// gameコンポーネントに渡すときは
// game = {
// 	title: a,
// 	image: b,
// 	etc: c,
// 	...
// }

// pagenationに渡すときは
// items = {
// 	items: [],
// 	pageCount: 50,
// 	page: 1,
// }

// 非同期通信でresponse.dataをすべてのページまでpushして配列に格納した場合、
// games == [
// 	{
// 		items: [
// 			item {
// 				title: a,
// 				image: b,
// 				etc: c,
// 				...
// 			},
// 			item: {
// 				title: a,
// 				image: b,
// 				etc: c,
// 				...
// 			}
// 		],
// 		count: 1,
// 		page: 1,
// 		pageCount: 50,
// 		...
// 	},
// 	{
// 		items: [
// 			item {
// 				title: a,
// 				image: b,
// 				etc: c,
// 				...
// 			},
// 			item: {
// 				title: a,
// 				image: b,
// 				etc: c,
// 				...
// 			}
// 		],
// 		count: 2,
// 		page: 2,
// 		pageCount: 50,
// 		...
// 	},
// ]

// 上記games配列のすべてのitemを配列に格納していく
// const gamesArray = [];
// if (this.props.games) {
// 	for (let i = 0; i < this.props.games.length; i++) {
// 		for (let j = 0; j < this.props.games[i].Items.length; j++) {
// 			const game = this.props.games[i].Items[j].Item;
// 				gamesArray.push({game});
// 		}
// 	}
// }

// すると、
// gamesArray = [
// 	{
// 		title: a,
// 		image: b,
// 		etc: c,
// 	},
// 		{
// 		title: a,
// 		image: b,
// 		etc: c,
// 	},
// 	...
// ]

// となる

// games = {
// 	items: null,
// 	count: null,
// 	page, null,
// 	pageCount: null,
// };

// games = {
// 	items: gamesArray,
// 	count: gamesArray
// }
