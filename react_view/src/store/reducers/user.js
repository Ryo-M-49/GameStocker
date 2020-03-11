import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './utility';
import reducer from './gameList';

const initialState = {
    id: null,
    first_name: null,
    last_name: null,
    image: null,
    error: null
}

export default reducer;