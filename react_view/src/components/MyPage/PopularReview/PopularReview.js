import React from 'react';
import classes from './PopularReview.module.css';
import SmallReviewCard from '../../SmallReviewCard/SmallReviewCard';
import Image1 from '../../../assets/images/sample-game-1.jpg';
import Image2 from '../../../assets/images/sample-game-2.jpg';
import Image3 from '../../../assets/images/sample-game-3.jpg';

const popularReview = props => (
    <div className={classes.PopularReview}>
        <div className={classes.ReviewWrapper}>
            <h2>Your Popular Review</h2>
            <ul className={classes.ReviewList}>
                <li>
                    <SmallReviewCard image={Image1} />
                </li>
                <li>
                    <SmallReviewCard image={Image2} />
                </li>
                <li>
                    <SmallReviewCard image={Image3} />
                </li>
            </ul>
        </div>
    </div>
);

export default popularReview;
