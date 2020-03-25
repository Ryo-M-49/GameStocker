import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import * as actions from '../../../store/actions/index';

const EditButton = props => {
    const review = useSelector(state => state.reviewReducer.review);
    const dispatch = useDispatch();

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                onClick={(review) => dispatch(actions.setReview(review))}
            >
                Edit
            </Button>
        </div>
    );
};

export default EditButton;
