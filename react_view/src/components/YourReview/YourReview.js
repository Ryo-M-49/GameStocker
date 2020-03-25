import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import classes from './YourReview.module.css';
import Review from './Review/Review';
import QuitButton from '../UI/QuitButton/QuitButton';
import ShareButton from '../UI/ShareButton/ShareButton';
import SaveButton from '../UI/SaveButton/SaveButton';
import * as actions from '../../store/actions/index';

const YourReview = props => {
    const game = props.location.state.game;
    const gameState = useSelector(state => state.reviewReducer.game);
    const auth = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const updatedGame = {
        ...gameState,
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
                <div className={classes.ButtonWrapper}>
                    <div className={classes.ShareButton}>
                        <ShareButton />
                    </div>
                    <SaveButton />
                </div>
            </div>
        </div>
    );
};

export default withRouter(YourReview);
