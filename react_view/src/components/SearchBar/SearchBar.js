import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
      padding: '1px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      height: 40
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
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
        <Paper component="form" className={classes.root}>
            <InputBase
            className={classes.input}
            placeholder="Find a game to write a review about!"
            inputProps={{ 'aria-label': 'find a game to write a review about' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchAppBar;
