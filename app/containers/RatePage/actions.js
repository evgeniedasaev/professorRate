/*
 * rate Actions
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
    SEND_RATE,
    SEND_RATE_SUCCESS,
    SEND_RATE_ERROR,
} from './constants';

/**
 * Init loading of rate
 * 
 * @param  {number} id The rate id for load
 *
 * @return {object}    An action object with a type of SEND_RATE
 */
export function sendRate(rateData, author, user) {
    return {
        type: SEND_RATE,
        rateData,
        author,
        user,
    };
}

/**
 * Dispatched when the rates are loaded by the request saga
 *
 * @param  {array} rate The rate data
 *
 * @return {object}      An action object with a type of SEND_RATE_SUCCESS passing the rates
 */
export function rateLoaded(rate) {
    return {
        type: SEND_RATE_SUCCESS,
        rate,
    };
}

/**
 * Dispatched when loading the rates fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of SEND_RATE_ERROR passing the error
 */
export function rateLoadingError(error) {
    return {
        type: SEND_RATE_ERROR,
        error,
    };
}