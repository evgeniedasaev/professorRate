/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_PROFESSOR } from './constants';
import { professorLoaded, professorLoadingError } from './actions';

import client from '../../utils/jsonApiClient';

/**
 * Github repos request/response handler
 */
export function* getProfessor(action) {
  const { id } = action;

  try {
    const resource = yield call([client, client.get], 'user', id, {
      include: 'courses,comments'
    });

    const professor = resource.toJSONTree();

    yield put(professorLoaded(professor));
  } catch (error) {
    console.log(error);
    yield put(professorLoadingError(error));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* apiData() {
  // Watches for LOAD_PROFESSOR actions and calls getProfessor when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_PROFESSOR, getProfessor);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  apiData,
];
