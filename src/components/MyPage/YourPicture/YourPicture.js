import React from 'react';
import classes from './YourPicture.module.css';

import ProfileImage from '../../../assets/images/sample-profile.png';
import Avatar from '../../UI/Avatar/Avatar';
import EditButton from '../../UI/EditButton/EditButton';

const yourPicture = props => (
    <div className={classes.Picture}>
        <Avatar image={ProfileImage} />
        <div className={classes.EditButton}>
            <EditButton />
        </div>
    </div>
);

export default yourPicture;
