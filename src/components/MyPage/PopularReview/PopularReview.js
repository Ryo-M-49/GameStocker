import React from 'react';
import classes from './PopularReview.module.css';

const popularReview = props => (
    <div className={classes.PopularReview}>
        <div className={classes.ReviewWrapper}>
            <h2>Your Popular Review</h2>
            <ul className={classes.ReviewList}>
                <li>
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-inverse fa-stack-1x">1</i>
                    </span>
                    Review 1 Review 1 Review 1 Review 1
                    <i className="fa fa-arrow-right"></i>
                </li>
                <li>
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-inverse fa-stack-1x">2</i>
                    </span>
                    Review 2 Review 2 Review 2 Review 2
                    <i className="fa fa-arrow-right"></i>
                </li>
                <li>
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-inverse fa-stack-1x">3</i>
                    </span>
                    Review 3 Review 3 Review 3 Review 3
                    <i className="fa fa-arrow-right"></i>
                </li>
            </ul>
        </div>
    </div>
);

export default popularReview;
