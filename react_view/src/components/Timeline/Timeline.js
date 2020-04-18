import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Timeline.module.css';
import ReviewCard from './ReviewCard/ReviewCard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import Aux from '../../hoc/Aux/Aux';
import * as actions from '../../store/actions/index';
import axios from 'axios';

const Timeline = props => {
    // const reviews = useSelector(state => state.reviewReducer.reviews);
    const auth = useSelector(state => state.authReducer);
    const likes = useSelector(state => state.likeReducer.likes);
    const isLoading = useSelector(state => state.reviewReducer.isLoading);
    const dispatch = useDispatch();

    const [reviews, setReviews] = useState([]); // use state rerender component on each call setUsers;
    const [users, setUsers] = useState([]); // use state rerender component on each call setUsers;

    const fetchUsers = useCallback(() => {
        try {
            //Fetching all reviews
            const url = `http://localhost:3001/users/1/reviews`;
            const promise = Promise.resolve(axios.get(url));
            promise.then(response => {
                const reviews = response.data;
                setReviews(reviews);
                const listOfRequests = reviews.map(review => axios.get(`http://localhost:3001/users/${review.user_id}`));
                return listOfRequests;
            })
            //Resolving promises of user data of each review
            .then(responses => {
                return Promise.all(responses)
            })
            //Set users state with the fethed data from the api
            .then(responses => {
                const users = responses.map((result) => result.data);
                setUsers(users);
            });
        } catch(error) {
            console.error(error);
        }
      }, []);

    useEffect(() => {
        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props, likes]);

    const snackbarClosedHandler = () => {
        const snackbar = {
            isOpen: false,
            type: 'null',
        };
        dispatch(actions.toggleAuthSnackbar(snackbar));
    };

    // Snackbar settings
    const isOpen = auth.isSnackbarOpen.isOpen;
    const type = auth.isSnackbarOpen.type;
    let notificationText = null;
    if (type === 'signin') {
        notificationText = 'Signed in!';
    } else if (type === 'signout') {
        notificationText = 'Signed out!';
    }
    let notification = null;
    if (isOpen) {
        notification = (
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={isOpen}
                onClose={snackbarClosedHandler}
            >
                <MuiAlert severity="success" onClose={snackbarClosedHandler}>
                    {notificationText}
                </MuiAlert>
            </Snackbar>
        );
    }

    let reviewCard = <p>No review to show for now. Write a review!</p>;
    if (reviews) {
        reviewCard = users.map((user, index) => (
            <li key={index}>
                <ReviewCard review={reviews[index]} user={user} />
            </li>
            )
        );
    }

    let component = (
        <Aux>
            {notification}
            <ul className={classes.List}>{reviewCard}</ul>
        </Aux>
    );

    if (isLoading) {
        component = <CircularProgress size='5rem'/>
    }

    return (
        <div className={classes.Timeline}>
            {component}
        </div>
    );
};

export default Timeline;
