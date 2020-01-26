// React Component
import React from 'react';
import classes from './BurgerMenu.module.css';

import Burger from '@animated-burgers/burger-arrow';
import '@animated-burgers/burger-arrow/dist/styles.css';

const burgerMenu = props => (
    <div className={classes.BurgerMenu}>
        <Burger
            {...props}
            isOpen={false}
            direction="down"
            Component="button"
            type="button"
        />
    </div>
);

export default burgerMenu;
