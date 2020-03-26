import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Timeline.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import GameImage1 from '../../assets/images/sample-game-1.jpg';
import GameImage2 from '../../assets/images/sample-game-2.jpg';
import GameImage3 from '../../assets/images/sample-game-3.jpg';
import ReviewCard from '../Timeline/ReviewCard/ReviewCard';
import * as actions from '../../store/actions/index';

const Timeline = props => {
    const auth = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const snackbarClosedHandler = isSnackbarOpen => {
        dispatch(actions.toggleAuthSnackbar(isSnackbarOpen));
    };

    const isOpen = auth.isSnackbarOpen.isOpen;
    const type = auth.isSnackbarOpen.type;
    let notificationText = null;
    if (type === 'signin') {
        notificationText = 'Signed in!';
    } else if (type === 'signout') {
        notificationText = 'Signed out!';
    }

    const snackbar = {
        isOpen: false,
        type: 'null',
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
                onClose={snackbar => snackbarClosedHandler(snackbar)}
            >
                <MuiAlert
                    severity="success"
                    onClose={snackbar => snackbarClosedHandler(snackbar)}
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
};

export default Timeline;
