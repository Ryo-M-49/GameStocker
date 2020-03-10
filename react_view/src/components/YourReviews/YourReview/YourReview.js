import React from 'react';
import { withRouter } from 'react-router';
import classes from './YourReview.module.css';
import Review from './Review/Review';
import QuitButton from '../../UI/QuitButton/QuitButton';
import ShareButton from '../../UI/ShareButton/ShareButton';
import SaveButton from '../../UI/SaveButton/SaveButton';

const yourReview = props => {
    const game = props.location.state.game;

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

export default withRouter(yourReview);
