/**
 * Gets the repositories of the rate from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SEND_RATE } from './constants';
import { rateLoaded, rateLoadingError } from './actions';

import { LOAD_PROFESSOR } from '../ProfessorPage/constants';
import { getProfessor } from '../ProfessorPage/sagas';

import client from '../../utils/jsonApiClient';
/**
 * Github repos request/response handler
 */
export function* sendRate(action) {
    const { rateData, author, user } = action;

    try {
        const resourceComment = yield call([client, client.create], 'comment', rateData);
        resourceComment.sync();

        const resourceAuthor = yield call([client, client.get], 'user', author.id);
        resourceAuthor.relationships("createdComments").add(resourceComment);
        resourceAuthor.sync();

        const resourceUser = yield call([client, client.get], 'user', user.id);
        resourceUser.relationships("comments").add(resourceComment);
        resourceUser.sync();

        const rate = resourceComment.toJSONTree();

        yield put(rateLoaded(rate));
    } catch (error) {
        console.log(error);
        yield put(rateLoadingError(error));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* apiData() {
    // Watches for SEND_RATE actions and calls sendRate when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    const watcher = yield [
        takeLatest(SEND_RATE, sendRate),
        takeLatest(LOAD_PROFESSOR, getProfessor),
    ];

    // Suspend execution until location changes
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}

// Bootstrap sagas
export default [
    apiData,
];
