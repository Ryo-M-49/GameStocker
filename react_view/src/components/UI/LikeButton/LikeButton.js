import React from 'react';
import classes from './LikeButton.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const LikeButton = props => {

    let favorite = (
        <div className={classes.LikeButton}>
            <FavoriteBorderIcon />
            {props.likesCount}
        </div>
    );
    
    return (
        <div>
            {favorite}
        </div>
    );
};

export default LikeButton;