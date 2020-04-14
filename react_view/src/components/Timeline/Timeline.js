import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Timeline.module.css';
import ReviewCard from './ReviewCard/ReviewCard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import Aux from '../../hoc/Aux/Aux';
import * as actions from '../../store/actions/index';

const Timeline = props => {
    const reviews = useSelector(state => state.reviewReducer.reviews);
    const auth = useSelector(state => state.authReducer);
    const likes = useSelector(state => state.likeReducer.likes);
    const isLoading = useSelector(state => state.reviewReducer.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.userId) {
            dispatch(actions.getAllReviews(auth.userId));
        } else {
            dispatch(actions.getAllReviews(1));
        }
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
        reviewCard = reviews.map((review, index) => (
            <li key={index}>
                <ReviewCard review={review} />
            </li>
        ));
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
