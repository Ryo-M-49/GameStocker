import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from './LikeButton.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Aux from '../../../hoc/Aux/Aux';
import * as actions from '../../../store/actions/index';

const LikeButton = props => {
    const { likesCount, userId, reviewId } = props;
    const dispatch = useDispatch();
    const likes = useSelector(state => state.likeReducer.likes);
    const token = useSelector(state => state.authReducer.token);
    const isAuthenticated = token !== null;

    const [count, setCount] = useState(likesCount);
    const [isLiked, setIsLiked] = useState(false);
    const [authRedirect, setAuthRedirect] = useState(null);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(actions.fetchLike(likes, userId, reviewId));
        }
        const timer = setTimeout(() => {
            if (likes[reviewId]) {
                setIsLiked(true);
            }
        }, 200);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props, 
        likes,
        count, 
        isLiked,
        authRedirect,
    ]);

    const onLikeHandler = () => {
        if (isAuthenticated) {
            dispatch(actions.like(likes, userId, reviewId));
            setCount(count + 1);
            setIsLiked(true);
        } else {
            setAuthRedirect(<Redirect to="/signin" />);
        }
    };

    const onUnlikeHandler = () => {
        if (isAuthenticated) {
            dispatch(actions.unlike(likes, userId, reviewId, likes[reviewId].id));
            setCount(count - 1);
            setIsLiked(false);
        } else {
            setAuthRedirect(<Redirect to="/signin" />);
        }
    };

    let favorite = (
        <Aux>
            <FavoriteBorderIcon
                onClick={onLikeHandler}
                className={classes.Icon}
            />
            {count}
        </Aux>
    );

    if (isLiked) {
        favorite = (
            <Aux>
                <FavoriteIcon
                    onClick={onUnlikeHandler}
                    className={classes.FavoriteIcon}
                />
                {count}
            </Aux>
        );
    }

    return (
        <div className={classes.LikeButton}>
            {authRedirect}
            {favorite}
        </div>
    );
};

export default LikeButton;
