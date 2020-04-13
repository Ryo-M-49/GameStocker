import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './LikeButton.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import * as actions from '../../../store/actions/index';

const LikeButton = props => {
    const { likesCount, userId, reviewId } = props;
    const dispatch = useDispatch();
    const likes = useSelector(state => state.likeReducer.likes);

    const [count, setCount] = useState(likesCount);

    useEffect(() => {
        dispatch(actions.fetchLike(likes, userId, reviewId));
        console.log('likes is ', likes);
        console.log(`likes[${reviewId}] is `, likes[reviewId]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props, likes, count]);

    const onLikeHandler = () => {
        dispatch(actions.like(likes, userId, reviewId));
        setCount(count + 1);
    };
    const onUnlikeHandler = () => {
        dispatch(actions.unlike(likes, userId, reviewId, likes[reviewId].id));
        setCount(count - 1);
    };

    let favorite = (
        <div className={classes.LikeButton}>
            <FavoriteBorderIcon
                onClick={onLikeHandler}
                className={classes.Icon}
            />
            {count}
        </div>
    );

    if (likes[reviewId]) {
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

    return <div>{favorite}</div>;
};

export default LikeButton;
