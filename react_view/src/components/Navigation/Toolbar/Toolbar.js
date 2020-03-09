import React from 'react';
import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import SideDrawer from '../SideDrawer/SideDrawer';
import SearchBar from '../../SearchBar/SearchBar';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <SideDrawer
            onButtonClicked={props.drawerToggleClicked}
            onDrawerClosed={props.drawerToggleClosed}
            isOpen={props.isOpen}
        />
        <div className={classes.SearchBar}>
            <SearchBar />
        </div>
        <nav>
            <NavigationItems
                isAuth={props.isAuthenticated}
             />
        </nav>
    </header>
);

export default toolbar;
