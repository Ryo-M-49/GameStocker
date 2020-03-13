import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '400px',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 400,
            '&:focus': {
                width: 500,
            },
        },
    },
}));

/* 
state: {
 keyword: string,
};

games = [];


フォームの情報をリアルタイムでstate:keywordに更新する。

検索をサブミットする

state:keywordを引数に関数１が動く
	関数１では、引数のワードでgamesの配列にfilterをかける
関数１の返り値はfilterごのgames配列
続けて、gamesのstateを変更するactionが動き、reducerに渡される
reducerはgamesのstateをfilter後の配列に更新する
更新されたgamesをsetGames()に渡し、画面を更新する
最後にGameListにRedirectする
*/


const filterGamesHandler = (games, keyword) => {
Object.entries(games).map(([games, value]) => ({'games': games, 'value': value}))

// gamesの中身想定 (楽天APIたたいた時のresponse.dataの中身)
// {count: 1766, page: 1, first: 1, last: 30, hits: 30, …}
// GenreInformation: []
// Items: (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// carrier: 0
// count: 1766
// first: 1
// hits: 30
// last: 30
// page: 1
// pageCount: 59
};

const SearchAppBar = props => {
    const classes = useStyles();
    const [keyword, setKeyword] = useState('');
    const gamesSelector = state => state.gameListReducer.games;
    const games = useSelector(gamesSelector);

    const inputChangedHandler = (event) => {
        setKeyword(event.target.value);
    };

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Find games you have played..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
}

export default SearchAppBar;
