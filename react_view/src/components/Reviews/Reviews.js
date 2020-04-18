import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Reviews.module.css';
import ReviewCard from '../Timeline/ReviewCard/ReviewCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as actions from '../../store/actions/index';

const Reviews = props => {
    const reviews = useSelector(state => state.reviewReducer.reviews);
    const user = useSelector(state => state.userReducer);
    const isLoading = useSelector(state => state.reviewReducer.isLoading);
    const userId = localStorage.getItem('userId');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getUser(userId));
        dispatch(actions.getUserReviews(userId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    let reviewCard = <p>No review to show for now. Write a review!</p>;
    if (reviews) {
        reviewCard = reviews.map((review, index) => (
            <li key={index}>
                <ReviewCard review={review} user={user}/>
            </li>
        ));
    }

    let component = <ul className={classes.List}>{reviewCard}</ul>;

    if (isLoading) {
        component = <CircularProgress
                        className={classes.Progress} 
                        size='5rem'
                    />
    }

    return (
        <div className={classes.Reviews}>
            {component}
        </div>
    );
};

export default Reviews;
