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

const filterGames = (games, keyword) => {
    const items = [];
    const pageCount = null;
    const MAXIMUM_ITEM_PER_PAGE = 30;

    if (games.length > 0) {
        for (let i = 0; i < games.length; i++) {
            for (let j = 0; j < games[i].Items.length; j++) {
                const game = games[i].Items[j].Item;
                    items.push({item: game});
            };
        };
    };

    filteredGamesArray = items.filter(item => {
        if (item.title.indexOf(keyword) != -1) {
            return true;
        }
    });
    
    pageCount = Math.ceil(filteredGamesArray.length / MAXIMUM_ITEM_PER_PAGE);

    const searchedGames = {
        items: filteredGamesArray,
        page: 1,
        pageCount: pageCount
    }

};

const SearchAppBar = props => {
    const classes = useStyles();
    const [keyword, setKeyword] = useState('');

    const games = useSelector(state => state.gameListReducer.games);
    const dispatch = useDispatch();

    const inputChangedHandler = event => {
        setKeyword(event.target.value);
    };

    const searchClickedHandler = (pageCount, keyword) => {
        const games = actions.fetchAllGames(pageCount);
        filterGames(games, keyword);
    };

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Find a game to write a review about!"
                inputProps={{
                    'aria-label': 'find a game to write a review about',
                }}
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
