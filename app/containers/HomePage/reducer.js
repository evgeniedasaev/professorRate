/*
 * HomeReducer
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
} from './constants';

// The initial state of the App
const initialState = fromJS({
  professors: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BEST_PROFESSORS:

      return state
        .set('professors', []);
    case LOAD_BEST_PROFESSORS_SUCCESS:

      return state
        .set('professors', action.professors);     
    default:
      return state;
  }
}

export default homeReducer;
