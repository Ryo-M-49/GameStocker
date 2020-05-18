import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Reviews.module.css';
import ReviewCard from '../Timeline/ReviewCard/ReviewCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as actions from '../../store/actions/index';
import axios from 'axios';

const Reviews = props => {
    const reviews = useSelector(state => state.reviewReducer.reviews);
    const userId = useSelector(state => state.userReducer.id);

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const fetchUser = useCallback(() => {
        setIsLoading(true);
        const url = `${process.env.REACT_APP_API_ENDPOINT_URI}/users/${userId}`;
        const promise = Promise.resolve(axios.get(url));
        promise
            .then(response => {
                setUser(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchUser();
        dispatch(actions.getUserReviews(userId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    let reviewCard = <p>No review to show for now. Write a review!</p>;
    if (reviews.length > 0 && user) {
        reviewCard = reviews.map((review, index) => (
            <li key={index}>
                <ReviewCard review={review} user={user} />
            </li>
        ));
    }

    let component = <ul className={classes.List}>{reviewCard}</ul>;

    if (isLoading) {
        component = (
            <CircularProgress className={classes.Progress} size="5rem" />
        );
    }

    return <div className={classes.Reviews}>{component}</div>;
};

export default Reviews;
