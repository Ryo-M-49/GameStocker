import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import * as actions from '../../store/actions/index';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '1px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        height: 40,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

const divideArrayIntoPieces = (array, numsPerArray) => {
    const arrayList = [];
    const index = 0;
    while (index < array.length) {
        arrayList.push(array.splice(index, index + numsPerArray));
    }
    return arrayList;
};

const filterGames = (games, keyword) => {
    const items = [];
    const MAXIMUM_ITEM_PER_PAGE = 30;

    if (games.length > 0) {
        for (let i = 0; i < games.length; i++) {
            for (let j = 0; j < games[i].Items.length; j++) {
                const game = games[i].Items[j].Item;
                items.push({ item: game });
            }
        }
    }

    const filteredGamesArray = items.filter(item => {
        if (item.title.indexOf(keyword) !== -1) {
            return true;
        }
        return false;
    });

    const dividedGamesArray = divideArrayIntoPieces(
        filteredGamesArray,
        MAXIMUM_ITEM_PER_PAGE
    );
    const pageCount = Math.ceil(
        filteredGamesArray.length / MAXIMUM_ITEM_PER_PAGE
    );

    const searchedGames = {
        Items: dividedGamesArray[0],
        itemsArrayPerPage: dividedGamesArray,
        page: 1,
        pageCount: pageCount,
    };

    return searchedGames;
};

const SearchAppBar = props => {
    const classes = useStyles();
    const [keyword, setKeyword] = useState('');

    const games = useSelector(state => state.gameListReducer.games);
    const dispatch = useDispatch();

    const inputChangedHandler = event => {
        setKeyword(event.target.value);
    };

    const submit = (event, pageCount, keyword) => {
        event.preventDefault();
        const games = actions.fetchAllGames(500, pageCount);
        dispatch(actions.setSearchedGames(filterGames(games, keyword)));
    };

    const submitHandler = event => {
        submit(event, games.pageCount, keyword);
    };

    return (
        <Paper
            component="form"
            className={classes.root}
            onSubmit={event => submitHandler(event)}
        >
            <InputBase
                className={classes.input}
                placeholder="Find a game to write a review about!"
                inputProps={{
                    'aria-label': 'find a game to write a review about',
                }}
                onChange={inputChangedHandler}
            />
            <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchAppBar;
