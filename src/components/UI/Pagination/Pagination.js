import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';

const pagination = props => (
    <div>
        <Pagination
            count={props.pageCount}
            onChange={props.pageChangedHandler}
        />
    </div>
);

pagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    pageChangedHandler: PropTypes.func.isRequired,
};

export default pagination;
