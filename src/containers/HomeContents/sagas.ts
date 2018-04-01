import {call, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import fetch from 'isomorphic-fetch';

import {CONTENTLIST} from './constants';
import {contentListSuccess, contentListError, contentListFaild} from './actions';

function* fetchData(action: Action<any>) {
    try {
        const response = (yield call(fetch, './mock/homeContents/content1.json')) as Response;
        if (response.ok) {
            console.log(" HomeContents requestDataSuccess");

            const json = yield response.json();
            // put是saga对Redux中dispatch方法的一个封装
            yield put(contentListSuccess(json));
        } else {
            console.log("HomeContents requestDataError");

            yield put(contentListError(response.status));
        }
    } catch (e) {
        console.log("HomeContents requestDataFaild");

        yield put(contentListFaild(e.message));
    }
}

export default function* saga() {
    yield takeEvery(CONTENTLIST, fetchData);
}