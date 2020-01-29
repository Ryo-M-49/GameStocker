import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
            タイムライン
        </NavigationItem>
        <NavigationItem link="/" exact>
            マイページ
        </NavigationItem>
    </ul>
);

export default navigationItems;
