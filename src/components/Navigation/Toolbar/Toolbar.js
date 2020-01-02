import React from 'react';
import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import BurgerMenu from '../../BurgarMenu/BurgerMenu';
import SearchBar from '../../SearchBar/SearchBar';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        {/* <div>DrowerToggle</div> */}
        <div className={classes.Logo}>
            <Logo />
        </div>
        <BurgerMenu />
        <div className={classes.SearchBar}>
            <SearchBar />
        </div>
        <nav>
            <div>NavigationItems</div>
        </nav>
    </header>
);

export default toolbar