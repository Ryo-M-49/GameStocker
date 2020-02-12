import React from 'react';
import classes from './Timeline.module.css';
import ReviewCard from '../Timeline/ReviewCard/ReviewCard';

const timeline = props => (
    <div className={classes.Timeline}>
        <ul>
            <ReviewCard />
        </ul>
    </div>
);

export default timeline;
