import React from 'react';
import classes from './Review.module.css';
import Rating from './Rating/Rating';
import Good from './Good/Good';
import Bad from './Bad/Bad';

const review = props => {
    const title = props.game.title;
    let description = props.game.itemCaption;
    if (description.length > 400) {
        description = description.substr(0, 400) + '...';
    }

    return (
        <div className={classes.Review}>
            <div className={classes.Description}>
                <h2 className={classes.Title}>{title}</h2>
                <p>{description}</p>
            </div>
            <Rating />
            <Good />
            <Bad />
        </div>
    );
};

export default review;
