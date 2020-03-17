import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setReview = review => {
    return {
        type: actionTypes.SET_REVIEW,
        review: review,
    };
};
