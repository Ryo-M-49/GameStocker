import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
    },
}));

const GamelistPagination = props => {
    const classes = useStyles();
    return (
        <div>
            <Pagination
                className={classes.root}
                count={props.pageCount}
                onChange={props.pageChangedHandler}
                page={props.pageNumber}
                color="primary"
            />
        </div>
    );
};

GamelistPagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    pageChangedHandler: PropTypes.func.isRequired,
};

export default GamelistPagination;
