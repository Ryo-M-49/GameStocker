import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Bad.module.css';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as actions from '../../../../store/actions/index';

const StyledTextField = withStyles({
    root: {
        width: '550px',
    },
})(TextField);

const Bad = props => {
    const reviewSelector = state => state.reviewReducer.review;
    const review = useSelector(reviewSelector);
    const dispatch = useDispatch();

    const inputChangedHandler = newValue => {
        const updatedReview = {
            ...review,
            bad: newValue,
        };
        dispatch(actions.setReview(updatedReview));
    };

    let isReadOnly = true;
    if (props.isYourReview) {
        isReadOnly = false;
    }

    return (
        <div className={classes.Bad}>
            <ThumbDownIcon fontSize="large" />
            <div className={classes.Content}>
                <StyledTextField
                    id="outlined-multiline-static"
                    multiline
                    rows="5"
                    placeholder="Write bad points!"
                    variant="outlined"
                    value={props.value}
                    InputProps={{
                        readOnly: isReadOnly,
                    }}
                    onChange={event => inputChangedHandler(event.target.value)}
                />
            </div>
        </div>
    );
};

export default Bad;
