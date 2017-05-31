/*
 * AppReducer
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
  LOAD_BEST_PROFESSORS,
  LOAD_BEST_PROFESSORS_SUCCESS,
  LOAD_BEST_PROFESSORS_ERROR,
} from '../HomePage/constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BEST_PROFESSORS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_BEST_PROFESSORS_SUCCESS:
      return state
        .set('loading', false);
    case LOAD_BEST_PROFESSORS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
