/**
 * Signinpage selectors
 */

import { createSelector } from 'reselect';

const selectSignin = (state) => state.get('signin');

export {
    selectSignin,
};
