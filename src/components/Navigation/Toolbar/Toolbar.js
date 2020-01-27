import React from 'react';
import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import BurgerMenu from '../../BurgarMenu/BurgerMenu';
import SearchBar from '../../SearchBar/SearchBar';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <BurgerMenu clicked={props.drawerToggleClicked} isOpen={props.open} />
        <div className={classes.SearchBar}>
            <SearchBar />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
