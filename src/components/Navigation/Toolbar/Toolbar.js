import React from 'react';
import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <div>DrowerToggle</div>
        <div>SearchBar</div>
        <nav>
            <div>NavigationItems</div>
        </nav>
    </header>
);

export default toolbar