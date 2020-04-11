import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './LikeButton.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import * as actions from '../../../store/actions/index';
import axios from 'axios';

async function fetchLike (userId, reviewId) {
    const url = `http://localhost:3001/users/${userId}/reviews/${reviewId}/likes/1`;
    let result = null;
    axios
        .get(url)
        .then(response => {
            result = response.data;
        })
        .catch(error => {
            console.log(error);
        });
    console.log('result in fetchLike is ', result);
    return result;
};

const LikeButton = props => {
    let { likesCount, reviewId } = props;
    const like = useSelector(state => state.likeReducer.like);
    const userId = useSelector(state => state.authReducer.userId);
    const dispatch = useDispatch();

    const [localLike, setLocalLike] = useState(null);
    const [count, setCount] = useState(likesCount);

    const onLikeHandler = () => {
        dispatch(actions.like(userId, reviewId));
        setCount(count + 1);
    }
    const onUnlikeHandler = () => {
        dispatch(actions.unlike(userId, reviewId, like.id));
        setCount(count - 1);
    }

    useEffect(() => {
        setLocalLike(like);
    }, [props, like, count]);

    let favorite = (
        <div className={classes.LikeButton}>
            <FavoriteBorderIcon 
                onClick={onLikeHandler}
                className={classes.Icon}
            />
            {count}
        </div>
    );

    if (localLike) {
        favorite = (
            <div className={classes.LikeButton}>
                <FavoriteIcon 
                    onClick={onUnlikeHandler}
                    className={classes.FavoriteIcon}
                />
                {count}
            </div>
        );
    }
    
    return (
        <div>
            {favorite}
        </div>
    );
};

export default LikeButton;