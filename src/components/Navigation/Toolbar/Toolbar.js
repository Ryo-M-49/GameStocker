import React from 'react';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>DrawerToggle</div>
        <div className={classes.Logo}>
            Logo
        </div>
        <nav>
            <div>NavigationItems</div>
        </nav>
    </header>
);

export default toolbar