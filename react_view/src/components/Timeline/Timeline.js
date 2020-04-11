import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Timeline.module.css';
import ReviewCard from './ReviewCard/ReviewCard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import * as actions from '../../store/actions/index';

const Timeline = props => {
    const reviews = useSelector(state => state.reviewReducer.reviews);
    const auth = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.userId) {
            dispatch(actions.getReviews(auth.userId));
        } else {
            dispatch(actions.getReviews(1));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    const snackbarClosedHandler = () => {
        const snackbar = {
            isOpen: false,
            type: 'null',
        };
        dispatch(actions.toggleAuthSnackbar(snackbar));
    };

    //Snackbar settings
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
        reviewCard = reviews.map((review, index) => (
            <li key={index}>
                <ReviewCard review={review} />
            </li>
        ));
    }

    return (
        <div className={classes.Timeline}>
            {notification}
            <ul className={classes.List}>
                {reviewCard}
            </ul>
        </div>
    );
};

export default Timeline;
