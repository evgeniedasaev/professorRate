/*
 * ProfessorReducer
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
  LOAD_PROFESSOR,
  LOAD_PROFESSOR_SUCCESS,
  LOAD_PROFESSOR_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  currentProfessor: false,
});

function professorReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFESSOR_SUCCESS:

      return state
        .set('currentProfessor', action.professor);     
    default:
      return state;
  }
}

export default professorReducer;
