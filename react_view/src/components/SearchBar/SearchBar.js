import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
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
        width: 350,
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

const SearchAppBar = props => {
    const classes = useStyles();
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

    const inputChangedHandler = event => {
        setKeyword(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        dispatch(actions.setSearch(false, null));
        const encodedKeyword = encodeURI(keyword);
        dispatch(actions.setSearch(true, encodedKeyword));
    };

    return (
        <Paper
            component="form"
            className={classes.root}
            onSubmit={submitHandler}
        >
            <InputBase
                className={classes.input}
                placeholder="Find a game to stock!"
                inputProps={{
                    'aria-label': 'find a game!',
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
