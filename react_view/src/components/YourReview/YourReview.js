import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import classes from './YourReview.module.css';
import Review from './Review/Review';
import QuitButton from '../UI/QuitButton/QuitButton';
import ShareButton from '../UI/ShareButton/ShareButton';
import SaveButton from '../UI/SaveButton/SaveButton';
import EditButton from '../UI/EditButton/EditButton';
import * as actions from '../../store/actions/index';

const YourReview = props => {
    const review = useSelector(state => state.reviewReducer);
    const auth = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    
    const game = props.location.state.game;
    const isReviewExisted = review.review.isExisted;

    const updatedGame = {
        ...review.game,
        user_id: auth.userId,
        gameId: game.jan,
        title: game.title,
        caption: game.itemCaption,
        image: game.largeImageUrl,
        url: game.itemUrl,
    };

    useEffect(() => {
        dispatch(actions.setGame(updatedGame));
        dispatch(actions.getReview(updatedGame.user_id, updatedGame.gameId));
    }, [game]);

    let buttons = (
        <div className={classes.ButtonWrapper}>
            <SaveButton />
        </div>
    );

    if (isReviewExisted) {
        buttons = (
            <div className={classes.ButtonWrapper}>
                <div className={classes.ShareButton}>
                    <ShareButton />
                </div>
                <EditButton />
            </div>
        );
    };

    return (
        <div className={classes.YourReview}>
            <QuitButton />
            <div className={classes.ReviewWrapper}>
                <Review game={game} />
            </div>
            <div className={classes.RightContent}>
                <div className={classes.ImageWrapper}>
                    <img
                        className={classes.Img}
                        src={game.largeImageUrl}
                        alt="thumbnail"
                    />
                </div>
                { buttons }
            </div>
        </div>
    );
};

export default withRouter(YourReview);
