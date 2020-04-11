import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import classes from './YourReview.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Review from './Review/Review';
import QuitButton from '../UI/QuitButton/QuitButton';
import ShareButton from '../UI/DeleteButton/DeleteButton';
import SaveButton from '../UI/SaveButton/SaveButton';
import UpdateButton from '../UI/UpdateButton/UpdateButton';
import * as actions from '../../store/actions/index';

const YourReview = props => {
    const review = useSelector(state => state.reviewReducer);
    const auth = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const isReviewExisted = review.review.isExisted;

    const yourId = localStorage.getItem('userId')
        ? localStorage.getItem('userId')
        : auth.userId;

    const game = props.location.state.game;
    const reviewerId = props.location.state.user_id;
    const updatedGame = {
        ...review.game,
        user_id: game.user_id,
        gameId: game.gameId,
        title: game.title,
        caption: game.caption,
        image: game.image,
        url: game.url,
    };

    useEffect(() => {
        dispatch(actions.setGame(updatedGame));
        dispatch(actions.getReview(reviewerId, game.gameId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    const snackbarClosedHandler = () => {
        dispatch(actions.toggleSnackbar(false));
    };

    const isSnackbarOpen = review.isSnackbarOpen;
    let notification = null;
    if (isSnackbarOpen) {
        notification = (
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={isSnackbarOpen}
                onClose={snackbarClosedHandler}
            >
                <MuiAlert severity="success" onClose={snackbarClosedHandler}>
                    Your change has been saved successfully!
                </MuiAlert>
            </Snackbar>
        );
    }

    const isYourReview = yourId == reviewerId;

    let buttons = null;
    if (isYourReview && isReviewExisted) {
        buttons = (
            <div className={classes.ButtonWrapper}>
                <div className={classes.ShareButton}>
                    <ShareButton />
                </div>
                <UpdateButton />
            </div>
        );
    } else if (isYourReview && !isReviewExisted) {
        buttons = (
            <div className={classes.ButtonWrapper}>
                <SaveButton type="review" />
            </div>
        );
    }

    return (
        <div className={classes.YourReview}>
            {notification}
            <QuitButton />
            <div className={classes.ReviewWrapper}>
                <Review game={game} isYourReview={isYourReview} />
            </div>
            <div className={classes.RightContent}>
                <div className={classes.ImageWrapper}>
                    <a
                        href={game.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className={classes.Img}
                            src={game.image}
                            alt="thumbnail"
                        />
                    </a>
                </div>
                {buttons}
            </div>
        </div>
    );
};

export default withRouter(YourReview);
