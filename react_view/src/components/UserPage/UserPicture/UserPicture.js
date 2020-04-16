import React from 'react';
import classes from './YourPicture.module.css';
import ProfileImage from '../../../assets/images/default-user.png';
import Avatar from '../../UI/Avatar/Avatar';

const userPicture = props => (
    <div className={classes.Picture}>
        <Avatar image={ProfileImage} />
    </div>
);

export default userPicture;
