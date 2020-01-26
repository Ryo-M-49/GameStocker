import React from 'react';
import classes from './Review.module.css';
import Rating from './Rating/Rating';
import Good from './Good/Good';
import Bad from './Bad/Bad';

const review = props => (
    <div className={classes.Review}>
        <Rating />
        <Good />
        <Bad />
    </div>
);

export default review;
