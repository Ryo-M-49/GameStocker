import React from 'react';
import classes from './YourReview.module.css';

import Review from '../Review/Review';

const TITLE_MAX_LENGTH = 165;

const yourReview = (props) => {
    let game = props.location.aboutProps.game;
    
    // Modify the description with 166+ length
    let description = game.itemCaption;
    if (description.length > TITLE_MAX_LENGTH) {
        description = game.itemCaption.substr(0, TITLE_MAX_LENGTH) + "...";
    }

    return(
        <div className={classes.YourReview}>
            <div className={classes.ReviewWrapper}>
                <div className={classes.Description}> 
                    <h2 className={classes.Title}>{game.title}</h2>
                    <p className={classes.Description}>{description}</p>
                </div>
                <Review />
            </div>
            <div className={classes.GameImage}>
                <img className={classes.Img} src={game.largeImageUrl} alt="game-image"/>
            </div>
        </div>
    );
}

export default yourReview;