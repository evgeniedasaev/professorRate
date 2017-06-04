/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CREATE_USER } from './constants';
import { userLoaded, userLoadingError } from './actions';

import client from '../../utils/jsonApiClient';

import Guid from 'guid';

/**
 * Github repos request/response handler
 */
export function* createUser(action) {
    const { userData } = action;
    userData.id = Guid.raw();

    try {
        const resource = yield call([client, client.create], 'user', userData);
        resource.sync();

        const user = resource.toJSONTree();
        localStorage.setItem('currentUser', JSON.stringify(user));

        yield put(userLoaded(user));
    } catch (error) {
        console.log(error);
        yield put(userLoadingError(error));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* apiData() {
    // Watches for CREATE_USER actions and calls createUser when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    const watcher = yield takeLatest(CREATE_USER, createUser);

    // Suspend execution until location changes
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}

// Bootstrap sagas
export default [
    apiData,
];
