import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import * as actions from '../../../../store/actions/index';

const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
        margin: '20px 0',
    },
    icon: {
        fontSize: '30px',
    },
});

const HoverRating = props => {
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    const classes = useStyles();

    const reviewSelector = state => state.reviewReducer.review;
    const review = useSelector(reviewSelector);
    const dispatch = useDispatch();

    const inputChangedHandler = newValue => {
        const updatedReview = {
            ...review,
            rate: newValue,
        };
        dispatch(actions.setReview(updatedReview));
    };

    let isReadOnly = true;
    if (props.isYourReview) {
        isReadOnly = false;
    }

    return (
        <div className={classes.root}>
            <Rating
                name="hover-feedback"
                value={props.value ? props.value : value}
                precision={0.5}
                readOnly={isReadOnly}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    inputChangedHandler(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
            />
        </div>
    );
};

export default HoverRating;
