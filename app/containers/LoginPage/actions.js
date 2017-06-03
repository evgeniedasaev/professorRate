/*
 * User Actions
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
    CHECK_USER,
    CHECK_USER_SUCCESS,
    CHECK_USER_ERROR,
} from './constants';

/**
 * Init loading of user
 * 
 * @param  {number} id The user id for load
 *
 * @return {object}    An action object with a type of CHECK_USER
 */
export function logIn(login, password) {
    return {
        type: CHECK_USER,
        login,
        password,
    };
}

/**
 * Dispatched when the users are loaded by the request saga
 *
 * @param  {array} user The user data
 *
 * @return {object}      An action object with a type of CHECK_USER_SUCCESS passing the users
 */
export function userLoaded(user) {
    return {
        type: CHECK_USER_SUCCESS,
        user,
    };
}

/**
 * Dispatched when loading the users fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of CHECK_USER_ERROR passing the error
 */
export function userLoadingError(error) {
    return {
        type: CHECK_USER_ERROR,
        error,
    };
}