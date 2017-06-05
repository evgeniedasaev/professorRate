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
        let resourceComment = client.create("comment", rateData);
        resourceComment = yield call([resourceComment, resourceComment.sync]);

        let [resourceAuthor, resourceUser] =  yield [
            call([client, client.get], 'user', author.id, {
                include: 'courses,comments,createdComments'
            }),
            call([client, client.get], 'user', user.id, {
                include: 'courses,comments,createdComments'
            })
        ];

        resourceAuthor.relationships("createdComments").add(resourceComment);
        if (typeof resourceAuthor.courses !== 'undefined') {
            resourceAuthor.courses.map(
                courseRelation => resourceAuthor.relationships("courses").add(courseRelation)
            );
        }

        resourceUser.relationships("comments").add(resourceComment);
        if (typeof resourceUser.courses !== 'undefined') {
            resourceUser.courses.map(
                courseRelation => resourceUser.relationships("courses").add(courseRelation)
            );
        }

        yield [
            call([resourceAuthor, resourceAuthor.sync]),
            call([resourceUser, resourceUser.sync])
        ];

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
