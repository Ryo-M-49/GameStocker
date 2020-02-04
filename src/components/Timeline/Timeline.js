import React from 'react';
import classes from './Timeline.module.css';
import RecentActivity from '../MyPage/RecentActivity/RecentActivity';

const timeline = props => (
    <div className={classes.Timeline}>
        <div>
            <ul>
                <li>ReviewCardComponent</li>
                <li>ReviewCardComponent</li>
                <li>ReviewCardComponent</li>
            </ul>
        </div>
        <RecentActivity />
    </div>
);

export default timeline;
