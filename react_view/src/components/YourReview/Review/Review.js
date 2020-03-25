import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Review.module.css';
import Rating from './Rating/Rating';
import Good from './Good/Good';
import Bad from './Bad/Bad';

const Review = props => {
    const review = useSelector(state => state.reviewReducer.review);

    const title = props.game.title;
    let description = props.game.itemCaption;
    if (description.length > 400) {
        description = description.substr(0, 400) + '...';
    }

    return (
        <div className={classes.Review}>
            <div className={classes.Description}>
                <h2 className={classes.Title}>{title}</h2>
                <p>{description}</p>
            </div>
            <form>
                <Rating value={review.rate}/>
                <Good value={review.good}/>
                <Bad value={review.bad}/>
            </form>
        </div>
    );
};

export default Review;
