import React from 'react';
import classes from './Bad.module.css';

const bad = props => (
    <div className={classes.Bad}>
        <div className={classes.ThumbsDown}>
            <i className="fa fa-thumbs-down"></i>
        </div>
        <div className={classes.Content}>
            <h3>Bad</h3>
            <textarea placeholder="your review here" />
        </div>
    </div>
);

export default bad;
