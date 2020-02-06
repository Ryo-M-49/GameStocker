import React from 'react';
import classes from './ReviewCard.module.css';
import Rating from '../../YourReviews/Review/Rating/Rating';

const reviewCard = props => (
    <li className={classes.ReviewCard}>
        <img src="#" alt="your-image" />
        <div className={classes.ReviewContent}>
            <img src="#" alt="thumbnail" />
            <div className={classes.ReviewDescription}>
                <Rating />
            </div>
        </div>
    </li>
);

export default reviewCard;
