import React from 'react';
import classes from './Timeline.module.css';
import RecentActivity from '../MyPage/RecentActivity/RecentActivity';
import ReviewCard from '../Timeline/ReviewCard/ReviewCard';

const timeline = props => (
    <div className={classes.Timeline}>
        <ul>
            <ReviewCard />
        </ul>
    </div>
);

export default timeline;
