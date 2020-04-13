import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Reviews.module.css';
import ReviewCard from './ReviewCard/ReviewCard';
import * as actions from '../../store/actions/index';

const Reviews = props => {
    const reviews = useSelector(state => state.reviewReducer.reviews);
    const userId = localStorage.getItem('userId');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getUserReviews(userId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    let reviewCard = <p>No review to show for now. Write a review!</p>;
    if (reviews) {
        reviewCard = reviews.map((review, index) => (
            <li key={index}>
                <ReviewCard review={review} />
            </li>
        ));
    }

    return (
        <div className={classes.Reviews}>
            <ul className={classes.List}>{reviewCard}</ul>
        </div>
    );
};

export default Reviews;
