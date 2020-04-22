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
    const user = useSelector(state => state.userReducer);
    const userId = user.id;
    const dispatch = useDispatch();

    const saveButtonClickedHandler = () => {
        if (props.type === 'review') {
            const updatedReview = {
                ...review.game,
                ...review.review,
            };
            delete updatedReview.isExisted;
            delete updatedReview.likes_count;
            dispatch(actions.createReview(updatedReview, userId));
        } else if (props.type === 'mypage') {
            // Shaping the data to make it matched with the format of the request.
            const updatedUser = {
                user: {
                    ...user,
                },
            };
            delete updatedUser.user.id;

            dispatch(actions.updateUser(updatedUser, userId));

            props.clicked();
        }
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
