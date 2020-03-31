import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import * as actions from '../../../store/actions/index';

const UpdateButton = props => {
    const review = useSelector(state => state.reviewReducer);
    const dispatch = useDispatch();

    const buttonClickedHandler = () => {
        const updatedReview = {
            ...review.game,
            ...review.review,
        };
        delete updatedReview.isExisted;

        dispatch(
            actions.updateReview(
                updatedReview,
                updatedReview.user_id,
                updatedReview.gameId,
                true
            )
        );
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                onClick={buttonClickedHandler}
            >
                UPDATE
            </Button>
        </div>
    );
};

export default UpdateButton;
