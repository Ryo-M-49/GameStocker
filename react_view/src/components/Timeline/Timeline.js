import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import classes from './Timeline.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ReviewCard from '../Reviews/ReviewCard/ReviewCard';
import * as actions from '../../store/actions/index';
import axios from 'axios';

const Timeline = props => {
    const auth = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getAllUser());
    }, [props]);

    const isOpen = auth.isSnackbarOpen.isOpen;
    const type = auth.isSnackbarOpen.type;
    let notificationText = null;
    if (type === 'signin') {
        notificationText = 'Signed in!';
    } else if (type === 'signout') {
        notificationText = 'Signed out!';
    }

    const snackbarClosedHandler = () => {
        const snackbar = {
            isOpen: false,
            type: 'null',
        };
        dispatch(actions.toggleAuthSnackbar(snackbar));
    };

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
                <MuiAlert
                    severity="success"
                    onClose={snackbarClosedHandler}
                >
                    {notificationText}
                </MuiAlert>
            </Snackbar>
        );
    }

    return (
        <div className={classes.Timeline}>
            {notification}
            <ul className={classes.List}>
                <li>
                    Implementing now
                    {/* <ReviewCard image={GameImage1} /> */}
                </li>
            </ul>
        </div>
    );
};

export default Timeline;
