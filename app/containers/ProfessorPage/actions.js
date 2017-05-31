/*
 * Professor Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_PROFESSOR,
  LOAD_PROFESSOR_SUCCESS,
  LOAD_PROFESSOR_ERROR,
} from './constants';

/**
 * Init loading of professor
 * 
 * @param  {number} id The professor id for load
 *
 * @return {object}    An action object with a type of LOAD_PROFESSOR
 */
export function loadProfessor(id) {
  return {
    type: LOAD_PROFESSOR,
    id
  };
}

/**
 * Dispatched when the professors are loaded by the request saga
 *
 * @param  {array} professor The professor data
 *
 * @return {object}      An action object with a type of LOAD_PROFESSOR_SUCCESS passing the professors
 */
export function professorLoaded(professor) {
  return {
    type: LOAD_PROFESSOR_SUCCESS,
    professor,
  };
}

/**
 * Dispatched when loading the professors fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PROFESSOR_ERROR passing the error
 */
export function professorLoadingError(error) {
  return {
    type: LOAD_PROFESSOR_ERROR,
    error,
  };
}