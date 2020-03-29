import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import classes from './YourReview.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
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
    const isReviewExisted = review.review.isExisted;

    const id = localStorage.getItem('userId')
        ? localStorage.getItem('userId')
        : auth.userId;


    const game = props.location.state.game;
    const updatedGame = {
        ...review.game,
        user_id: id,
        gameId: game.gameId,
        title: game.title,
        caption: game.caption,
        image: game.image,
        url: game.url,
    };

    useEffect(() => {
        dispatch(actions.setGame(updatedGame));
        dispatch(actions.getReview(updatedGame.user_id, updatedGame.gameId));
    }, [props]);

    let buttons = (
        <div className={classes.ButtonWrapper}>
            <SaveButton />
        </div>
    );

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
                <MuiAlert
                    severity="success"
                    onClose={snackbarClosedHandler}
                >
                    Your change has been saved successfully!
                </MuiAlert>
            </Snackbar>
        );
    }

    if (isReviewExisted) {
        buttons = (
            <div className={classes.ButtonWrapper}>
                <div className={classes.ShareButton}>
                    <ShareButton />
                </div>
                <EditButton />
            </div>
        );
    }

    return (
        <div className={classes.YourReview}>
            {notification}
            <QuitButton />
            <div className={classes.ReviewWrapper}>
                <Review game={game} />
            </div>
            <div className={classes.RightContent}>
                <div className={classes.ImageWrapper}>
                    <img
                        className={classes.Img}
                        src={game.image}
                        alt="thumbnail"
                    />
                </div>
                {buttons}
            </div>
        </div>
    );
};

export default withRouter(YourReview);
