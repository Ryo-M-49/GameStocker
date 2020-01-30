import React from 'react';
import classes from './PopularReviews.module.css';

const popularReviews = props => (
    <div className={classes.PopularReviews}>
        <div className={classes.ReviewWrapper}>
            <h2>User's Popular Review</h2>
            <ul>
                <li>PopularReviewComponent</li>
                <li>PopularReviewComponent</li>
                <li>PopularReviewComponent</li>
            </ul>
        </div>
    </div>
);

export default popularReviews;
