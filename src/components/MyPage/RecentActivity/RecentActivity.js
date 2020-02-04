import React from 'react';
import classes from './RecentActivity.module.css';

import Logo from '../../Logo/Logo'//Delete this once implementing image-display function

const recentActivity = props => {
    // const reviewsArray = []; //Put reviews into this array and map them to each <li>
    // const thumbnail = null //This receives image from props

    return (
        <div className={classes.RecentActivity}>
            <h2 className={classes.Header}>Recent Activity</h2>
            <ul className={classes.RecentReviews}>
                <div>
                    {/* <img src={thumbnail} alt='game-thumbnail' /> */}
                    <li>Review 1</li>
                </div>
                <div>
                    {/* <img src={thumbnail} alt='game-thumbnail' /> */}
                    <li>Review 2</li>
                </div>
                <div>
                    {/* <img src={thumbnail} alt='game-thumbnail' /> */}
                    <li>Review 3</li>
                </div>
                {/* {reviewsArray.map((gameObject, index) => (
                    <Game key={index} game={gameObject.game} />
                ))} */}
            </ul>
        </div>
    );
}

export default recentActivity;
