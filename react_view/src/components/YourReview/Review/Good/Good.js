import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Good.module.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as actions from '../../../../store/actions/index';

const StyledTextField = withStyles({
    root: {
        width: '500px',
    },
})(TextField);

const Good = props => {
    const reviewSelector = state => state.reviewReducer.review;
    const review = useSelector(reviewSelector);
    const dispatch = useDispatch();

    const inputChangedHandler = newValue => {
        const updatedReview = {
            ...review,
            good: newValue,
        };
        dispatch(actions.setReview(updatedReview));
    };

    return (
        <div className={classes.Good}>
            <ThumbUpIcon fontSize="large" />
            <div className={classes.Content}>
                <StyledTextField
                    id="outlined-multiline-static"
                    multiline
                    rows="3"
                    placeholder="Write good points!"
                    variant="outlined"
                    value={props.value}
                    onChange={event => inputChangedHandler(event.target.value)}
                />
            </div>
        </div>
    );
};

export default Good;
