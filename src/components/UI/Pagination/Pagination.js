import React from 'react';
import classes from './Pagination.module.css';
import PropTypes from 'prop-types';

import ReactPaginate from 'react-paginate';

const pagination = props => (
    <div>
        <ReactPaginate
            pageCount={props.pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplay={2}
            onPageChange={props.pageChangedHandler}
            containerClassName={classes.Pagination}
            pageClassName={classes.PageItem}
            pageLinkClassName="page-link"
            activeClassName="active"
            previousLabel="previous"
            nextLabel="next"
            previousClassName={classes.PageItem}
            nextClassName={classes.PageItem}
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            disabledClassName="disabled"
            breakLabel="..."
            breakClassName={classes.PageItem}
            breakLinkClassName="page-link"
        />
    </div>
);

pagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    pageChangedHandler: PropTypes.func.isRequired,
};

export default pagination;
