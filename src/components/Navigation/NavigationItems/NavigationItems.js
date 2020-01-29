import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
            Your Reviews
        </NavigationItem>
        <NavigationItem link="/" exact>
            My Profile
        </NavigationItem>
    </ul>
);

export default navigationItems;
