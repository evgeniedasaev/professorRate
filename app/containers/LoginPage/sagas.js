/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CHECK_USER } from './constants';
import { userLoaded, userLoadingError } from './actions';

import client from '../../utils/jsonApiClient';

import Guid from 'guid';

/**
 * Github repos request/response handler
 */
export function* logIn(action) {
    const { login, password } = action;

    try {
        const resource = yield call([client, client.find], 'user', {
            filter: {
                login,
                password,
                isPublished: 1
            }
        });

        let user = false;
        if (resource.length) {
            user = resource[0].toJSONTree();
        } else {
            throw "Пользователь с таким логином или паролем не найден!";
        }

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
    // Watches for CHECK_USER actions and calls logIn when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    const watcher = yield takeLatest(CHECK_USER, logIn);

    // Suspend execution until location changes
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}

// Bootstrap sagas
export default [
    apiData,
];
