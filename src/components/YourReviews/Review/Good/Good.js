import React from 'react';
import classes from './Good.module.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ReviewText from '../ReviewText/ReviewText';

const good = props => (
    <div className={classes.Good}>
        <ThumbUpIcon fontSize="large" />
        <div className={classes.Content}>
            <ReviewText title="Good Point"/>
        </div>
    </div>
);

export default good;
