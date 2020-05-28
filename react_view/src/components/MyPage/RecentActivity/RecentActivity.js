import React from 'react';
import classes from './RecentActivity.module.css';
import SmallReviewCard from './SmallReviewCard/SmallReviewCard';

const RecentActivity = props => {
    const { reviews } = props;

    let reviewCard = null;
    if (reviews) {
        reviews.sort((a, b) => {
            if (a.updated_at > b.updated_at) return 1;
            if (a.updated_at < b.updated_at) return -1;
            return 0;
        });

        const array = [];
        const MAX_LENGTH_REVIEW = 2;
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
        <div className={classes.RecentActivity}>
            <h2 className={classes.Header}>Recent Activity</h2>
            <ul className={classes.RecentReviews}>{reviewCard}</ul>
        </div>
    );
};

export default RecentActivity;
