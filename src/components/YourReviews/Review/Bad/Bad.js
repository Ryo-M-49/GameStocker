import React from 'react';
import classes from './Bad.module.css';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReviewText from '../ReviewText/ReviewText';

const bad = props => (
    <div className={classes.Bad}>
        <ThumbDownIcon fontSize="large" />
        <div className={classes.Content}>
            <ReviewText title="Bad Point" />
        </div>
    </div>
);

export default bad;
