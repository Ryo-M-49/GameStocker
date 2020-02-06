import React from 'react';
import classes from './Timeline.module.css';
import RecentActivity from '../MyPage/RecentActivity/RecentActivity';
import ReviewCard from '../Timeline/ReviewCard/ReviewCard';

const timeline = props => (
    <div className={classes.Timeline}>
        <div className={classes.MyPageLeft}>
            <ul>
                <ReviewCard />
            </ul>
        </div>
        <div className={classes.MyPageRight}>
            <RecentActivity />
        </div>
    </div>
);

export default timeline;
