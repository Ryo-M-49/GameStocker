import React from 'react';
import classes from './RecentActivity.module.css';
import SmallReviewCard from '../../SmallReviewCard/SmallReviewCard';
import Image from '../../../assets/images/sample-game-2.jpg';

const recentActivity = props => {
    // const reviewsArray = []; //Put reviews into this array and map them to each <li>
    // const thumbnail = null //This receives image from props

    return (
        <div className={classes.RecentActivity}>
            <h2 className={classes.Header}>Recent Activity</h2>
            <ul className={classes.RecentReviews}>
                <li>
                    <SmallReviewCard image={Image} />
                </li>
            </ul>
        </div>
    );
};

export default recentActivity;
