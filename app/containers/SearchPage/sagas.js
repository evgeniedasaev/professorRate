/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_SEARCHED_PROFESSORS } from './constants';
import { professorsLoaded, professorsLoadingError } from './actions';

import client from '../../utils/jsonApiClient';

/**
 * Github repos request/response handler
 */
export function* getProfessors(action) {
  const { qtail } = action;
  console.log(action)
  try {
    const professors = [];

    const resource = yield call([client, client.find], 'user', {
      include: 'courses',
      filter: {
        userType: 1,
        title: ':' + qtail
      }
    });

    resource.map(resourceItem => {
      professors.push(resourceItem.toJSONTree());
    });

    yield put(professorsLoaded(professors));
  } catch (error) {
    console.log(error);
    yield put(professorsLoadingError(error));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* apiData() {
  // Watches for LOAD_SEARCHED_PROFESSORS actions and calls getProfessors when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_SEARCHED_PROFESSORS, getProfessors);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  apiData,
];
