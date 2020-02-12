import React from 'react';
import classes from './RecentActivity.module.css';
import SmallReviewCard from '../../Timeline/SmallReviewCard/SmallReviewCard';

const recentActivity = props => {
    // const reviewsArray = []; //Put reviews into this array and map them to each <li>
    // const thumbnail = null //This receives image from props

    return (
        <div className={classes.RecentActivity}>
            <h2 className={classes.Header}>Recent Activity</h2>
            <ul className={classes.RecentReviews}>
                <li>
                    <SmallReviewCard />
                </li>
            </ul>
        </div>
    );
};

export default recentActivity;
