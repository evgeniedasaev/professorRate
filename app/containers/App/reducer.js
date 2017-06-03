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

import * as actionsHome from '../HomePage/constants';
import * as actionsProfessor from '../ProfessorPage/constants';
import * as actionsSearch from '../SearchPage/constants';
import * as actionsSignin from '../SigninPage/constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionsHome.LOAD_BEST_PROFESSORS:
    case actionsProfessor.LOAD_PROFESSOR:
    case actionsSearch.LOAD_SEARCHED_PROFESSORS:
    case actionsSignin.CREATE_USER:

      return state
        .set('loading', true)
        .set('error', false);

    case actionsHome.LOAD_BEST_PROFESSORS_SUCCESS:
    case actionsProfessor.LOAD_PROFESSOR_SUCCESS:
    case actionsSearch.LOAD_SEARCHED_PROFESSORS_SUCCESS:


      return state
        .set('loading', false);

    case actionsSignin.CREATE_USER_SUCCESS:

      return state
        .set('loading', false)
        .set('currentUser', action.user);

    case actionsHome.LOAD_BEST_PROFESSORS_ERROR:
    case actionsProfessor.LOAD_PROFESSOR_ERROR:
    case actionsSearch.LOAD_SEARCHED_PROFESSORS_ERROR:
    case actionsSignin.CREATE_USER_ERROR:

      return state
        .set('error', action.error)
        .set('loading', false);

    default:
      return state;
  }
}

export default appReducer;
