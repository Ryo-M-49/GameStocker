import React from 'react';
import classes from './PopularReview.module.css';
import SmallReviewCard from '../SmallReviewCard/SmallReviewCard';

const PopularReview = props => {
    const { reviews } = props;

    let reviewCard = <p>No review to show for now. Write a review!</p>;
    if (reviews) {
        reviews.sort((a, b) => {
            if (a.likes_count > b.likes_count) return 1;
            if (a.likes_count < b.likes_count) return -1;
            return 0;
        });

        const array = [];
        const MAX_LENGTH_REVIEW = 3;
        for (let i = 0; i < MAX_LENGTH_REVIEW; i++) {
            array.push(
                <li className={classes.ReviewCard} key={i}>
                    <SmallReviewCard review={reviews[i]} />
                </li>
            );
            reviewCard = array;
        }
    }

    return (
        <div className={classes.PopularReview}>
            <div className={classes.ReviewWrapper}>
                <h2>Popular Review</h2>
                <ul className={classes.ReviewList}>{reviewCard}</ul>
            </div>
        </div>
    );
};

export default PopularReview;
