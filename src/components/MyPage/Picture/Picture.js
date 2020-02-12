import React from 'react';
import classes from './Picture.module.css';

import logo from '../../../assets/images/logo_transparent.png';

const picture = props => (
    <div className={classes.Picture}>
        <img
            src={logo}
            alt="profile picture"
            className={classes.ProfilePicture}
        />
    </div>
);

export default picture;
