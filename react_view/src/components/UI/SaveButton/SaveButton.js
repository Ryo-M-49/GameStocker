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
    const review = useSelector(state => state.reviewReducer.review);
    const game = useSelector(state => state.reviewReducer.game);
    const user = useSelector(state => state.reviewReducer.user);
    const dispatch = useDispatch();

    const saveButtonClickedHandler = () => {
        const updatedReview = {
            ...review,
            ...game
        };
        dispatch(actions.createReview(updatedReview, user.id));
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
