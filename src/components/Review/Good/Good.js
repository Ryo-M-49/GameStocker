import React from 'react';
import classes from './Good.module.css';

const good = (props) => (
    <div className={classes.Good}>
        <div className={classes.ThumbsUp}>
            <i className="fa fa-thumbs-up"></i>
        </div>
        <div className={classes.Content}>
            <h3>Good</h3>
            <textarea placeholder="your review here" />
        </div>
    </div>
);

export default good;