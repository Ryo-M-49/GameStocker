import React from 'react';
import classes from './Review.module.css';
import Rating from './Rating/Rating';

const review = (props) => (
    <div className={classes.Review}>
        <Rating />
        <div>Good Component</div>
        <div>Bad Component</div>
    </div>
);

export default review;