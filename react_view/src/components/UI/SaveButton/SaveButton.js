import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as actions from '../../../store/actions/index';

const StyledButton = withStyles({
    root: {
        width: '100px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const SaveButton = props => {
    const review = useSelector(state => state.reviewReducer);
    const dispatch = useDispatch();

    const saveButtonClickedHandler = () => {
        const updatedReview = {
            ...review.game,
            ...review.review,
        };
        dispatch(actions.createReview(updatedReview, updatedReview.user_id, review.isSnackbarOpen));
    };

    return (
        <div>
            <StyledButton
                variant="contained"
                color="secondary"
                onClick={saveButtonClickedHandler}
            >
                Save
            </StyledButton>
        </div>
    );
};

export default SaveButton;
