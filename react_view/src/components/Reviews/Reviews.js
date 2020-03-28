import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Reviews.module.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import * as actions from '../../store/actions/index';

const Reviews = props => {
    const reviews = useSelector(state => state.reviewReducer.reviews); 
    const userId = useSelector(state => state.authReducer.userId);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getReviews(userId));
    }, [userId]);

    let reviewCard = null;
    if (reviews) {
        reviewCard = (
            reviews.map((review, index) => (
                <li key={index}>
                    <ReviewCard 
                        image={review.image} 
                        title={review.title}
                        createdAt={review.created_at}
                        good={review.good}
                    />
                </li>
            ))      
        );
    }
    
    return (
        <div className={classes.Reviews}>
            <ul className={classes.List}>
                {reviewCard}
            </ul>
        </div>
    );
    
}

export default Reviews;
