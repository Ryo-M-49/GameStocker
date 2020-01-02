import React from 'react';
import classes from './SearchBar.module.css';

import SearchField from 'react-search-field';

const searchBar = (props) => (
    <div className={classes.SearchBar}>
        <SearchField 
            placeholder="Search games you have played..."
            // onChange={props.onClickedSearchBar} 
        />
    </div>
);

export default searchBar;