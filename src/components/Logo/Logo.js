import React from 'react';
import { Link } from 'react-router-dom';

import gameStockerLogo from '../../assets/images/logo_transparent.png';
import classes from './Logo.module.css';
const logo = props => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <Link to="/">
            <img src={gameStockerLogo} alt="GameStocker-Logo" />
        </Link>
    </div>
);

export default logo;
