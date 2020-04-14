import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './LikeButton.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Aux from '../../../hoc/Aux/Aux';
import * as actions from '../../../store/actions/index';

const LikeButton = props => {
    const { likesCount, userId, reviewId } = props;
    const dispatch = useDispatch();
    const likes = useSelector(state => state.likeReducer.likes);

    const [count, setCount] = useState(likesCount);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        dispatch(actions.fetchLike(likes, userId, reviewId));
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
        isLiked
    ]);

    const onLikeHandler = () => {
        dispatch(actions.like(likes, userId, reviewId));
        setCount(count + 1);
        setIsLiked(true);
    };
    const onUnlikeHandler = () => {
        dispatch(actions.unlike(likes, userId, reviewId, likes[reviewId].id));
        setCount(count - 1);
        setIsLiked(false);
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
            {favorite}
        </div>
    );
};

export default LikeButton;
