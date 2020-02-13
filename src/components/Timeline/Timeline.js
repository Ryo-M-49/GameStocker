import React from 'react';
import classes from './Timeline.module.css';
import GameImage1 from '../../assets/images/sample-game-1.jpg';
import GameImage2 from '../../assets/images/sample-game-2.jpg';
import GameImage3 from '../../assets/images/sample-game-3.jpg';
import ReviewCard from '../Timeline/ReviewCard/ReviewCard';

const timeline = props => (
    <div className={classes.Timeline}>
        <ul className={classes.List}>
            <li>
                <ReviewCard image={GameImage1} />
            </li>
            <li>
                <ReviewCard image={GameImage2} />
            </li>
            <li>
                <ReviewCard image={GameImage3} />
            </li>
        </ul>
    </div>
);

export default timeline;
