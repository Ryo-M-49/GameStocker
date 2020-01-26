import React from 'react';
import classes from './Rating.module.css';

const rating = props => (
    <div className={classes.Rating}>
        <div className={classes.Star}>
            <i className="fa fa-star"></i>
        </div>
        <div className={classes.Content}>
            <h3>Rating</h3>
            <textarea placeholder="your review here" />
        </div>
    </div>
);

export default rating;
