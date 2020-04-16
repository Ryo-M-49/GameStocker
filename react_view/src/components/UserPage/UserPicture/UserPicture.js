import React from 'react';
import { useSelector } from 'react-redux';
import classes from './YourPicture.module.css';
import DefaultImage from '../../../assets/images/default-user.png';
import Avatar from '../../UI/Avatar/Avatar';

const UserPicture = props => {
    const profileImage = useSelector(state => state.userReducer.image);

    return (
        <div className={classes.Picture}>
            <Avatar image={profileImage ? profileImage : DefaultImage} />
        </div>
    );
}

export default UserPicture;
