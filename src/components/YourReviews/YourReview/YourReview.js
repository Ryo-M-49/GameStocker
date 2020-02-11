import React from 'react';
import classes from './YourReview.module.css';

import Aux from '../../../hoc/Aux/Aux';
import Review from '../Review/Review';
import QuitButton from '../../UI/QuitButton/QuitButton';
import ShareButton from '../../UI/ShareButton/ShareButton';
import SaveButton from '../../UI/SaveButton/SaveButton';

const yourReview = props => {
    const game = props.location.aboutProps.game;

    return (
        <Aux>
            <div className={classes.YourReview}>
                <QuitButton />
                <div className={classes.ReviewWrapper}>
                    <div className={classes.Description}>
                        <h2 className={classes.Title}>{game.title}</h2>
                        <p className={classes.Description}>
                            {game.itemCaption}
                        </p>
                    </div>
                    <Review />
                </div>
                <div className={classes.RightContent}>
                    <div className={classes.GameImage}>
                        <img
                            className={classes.Img}
                            src={game.largeImageUrl}
                            alt="game-image"
                        />
                    </div>
                    <div className={classes.ButtonWrapper}>
                        <div className={classes.ShareButton} >
                            <ShareButton />
                        </div>
                        <SaveButton />
                    </div>
                </div>
            </div>
        </Aux>
    );
};

export default yourReview;
