import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import * as actions from '../../../store/actions/index';

const DeleteButton = props => {
    const userId = localStorage.getItem('userId');
    const reviewId = useSelector(state => state.reviewReducer.review.id);
    const dispatch = useDispatch();

    const deleteButtonClickedHandler = () => {
        dispatch(actions.deleteReview(userId, reviewId));
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                startIcon={<DeleteIcon />}
                onClick={deleteButtonClickedHandler}
            >
                DELETE
            </Button>
        </div>
    );
};

export default DeleteButton;
