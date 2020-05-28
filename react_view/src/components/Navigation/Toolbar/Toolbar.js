import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import SideDrawer from '../SideDrawer/SideDrawer';
import SearchBar from '../../SearchBar/SearchBar';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = props => {
    const token = useSelector(state => state.authReducer.token);
    const isAuthenticated = token !== null;

    return (
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <SideDrawer
                onButtonClicked={props.drawerToggleClicked}
                onDrawerClosed={props.drawerToggleClosed}
                isOpen={props.isOpen}
            />
            <div
                className={
                    isAuthenticated ? classes.AuthSearchBar : classes.SearchBar
                }
            >
                <SearchBar />
            </div>
            <nav>
                <NavigationItems isAuth={props.isAuthenticated} />
            </nav>
        </header>
    );
};

export default Toolbar;
