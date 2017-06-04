/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => {
    let currentUser = globalState.get('currentUser');

    if (!currentUser) {
      currentUser = localStorage.getItem('currentUser');

      if (currentUser !== null) {
        currentUser = JSON.parse(currentUser);
      } else {
        currentUser = false;
      }
    }

    return currentUser;
  }
);

const makeSelectRedirect = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('shouldRedirect')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectRedirect,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocationState,
};
