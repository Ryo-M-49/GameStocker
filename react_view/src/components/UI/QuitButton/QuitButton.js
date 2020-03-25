import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './QuitButton.module.css';
import { withRouter } from 'react-router';

import * as actions from '../../../store/actions/index';

const QuitButton = props => {
    const review = useSelector(state => state.reviewReducer.review);
    const dispatch = useDispatch();

    const buttonClickedHandler = () => {
        const emptyReview = {
            good: null,
            bad: null,
            rate: null,
            isExisted: false
        }
        props.history.goBack();
        dispatch(actions.setReview(emptyReview));
    }

    return (
        <div className={classes.QuitButton} onClick={buttonClickedHandler}>
            <i className="fa fa-times-circle"></i>
        </div>
    );
}

export default withRouter(QuitButton);
