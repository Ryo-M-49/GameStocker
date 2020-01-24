import React from 'react';
import classes from './YourReview.module.css';

import Aux from '../../../hoc/Aux/Aux';
import Review from '../Review';
import QuitButton from '../../UI/QuitButton/QuitButton';
import ShareButton from '../../UI/ShareButton/ShareButton';

const TITLE_MAX_LENGTH = 165;

const yourReview = (props) => {
    let game = props.location.aboutProps.game;
    
    // Modify the description with 166+ length
    let description = game.itemCaption;
    if (description.length > TITLE_MAX_LENGTH) {
        description = game.itemCaption.substr(0, TITLE_MAX_LENGTH) + "...";
    }

    return(
        <Aux>
            <div className={classes.YourReview}>
                <QuitButton />
                <div className={classes.ReviewWrapper}>
                    <div className={classes.Description}> 
                        <h2 className={classes.Title}>{game.title}</h2>
                        <p className={classes.Description}>{description}</p>
                    </div>
                    <Review />
                </div>
                <div className={classes.RightContent}>
                    <div className={classes.GameImage}>
                        <img className={classes.Img} src={game.largeImageUrl} alt="game-image"/>
                    </div>
                    <ShareButton />
                </div>
            </div>
        </Aux>
    );
}

export default yourReview;