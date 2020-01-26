import React from 'react';

import gameStockerLogo from '../../assets/images/logo_transparent.png';
import classes from './Logo.module.css';
const logo = props => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={gameStockerLogo} alt="GameStocker-Logo" />
    </div>
);

export default logo;
