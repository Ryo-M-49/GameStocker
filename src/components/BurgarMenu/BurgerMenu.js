// React Component
import React from 'react';
import classes from './BurgerMenu.module.css';

import Burger from '@animated-burgers/burger-arrow';
import '@animated-burgers/burger-arrow/dist/styles.css';

const burgerMenu = props => (
    <div className={classes.BurgerMenu}>
        <Burger
            {...props}
            isOpen={props.isOpen}
            direction="down"
            Component="button"
            type="button"
            onClick={props.clicked}
        />
    </div>
);

export default burgerMenu;
