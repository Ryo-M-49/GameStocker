import React from 'react';
import classes from './PopularReview.module.css';
import SmallReviewCard from '../../Timeline/SmallReviewCard/SmallReviewCard';

const popularReview = props => (
    <div className={classes.PopularReview}>
        <div className={classes.ReviewWrapper}>
            <h2>Your Popular Review</h2>
            <ul className={classes.ReviewList}>
                <li>
                    <SmallReviewCard />
                </li>
                <li>
                    <SmallReviewCard />
                </li>
                <li>
                    <SmallReviewCard />
                </li>
            </ul>
        </div>
    </div>
);

export default popularReview;
