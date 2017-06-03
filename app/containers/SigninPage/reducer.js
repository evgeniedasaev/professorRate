/*
 * SigninReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({});

function searchReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default searchReducer;
