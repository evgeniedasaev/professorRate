/*
 * SearchReducer
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
  LOAD_SEARCHED_PROFESSORS,
  LOAD_SEARCHED_PROFESSORS_SUCCESS,
  LOAD_SEARCHED_PROFESSORS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  professors: false,
});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SEARCHED_PROFESSORS:

      return state
        .set('professors', []);
    case LOAD_SEARCHED_PROFESSORS_SUCCESS:

      return state
        .set('professors', action.professors);
    default:
      return state;
  }
}

export default searchReducer;
