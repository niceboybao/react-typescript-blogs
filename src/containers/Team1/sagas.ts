import {call, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import fetch from 'isomorphic-fetch';

import {REQUESTDATA} from './constants';
import {requestDataSuccess, requestDataError, requestDataFaild} from './actions';

function* fetchData(action: Action<any>) {
    try {
        const response = (yield call(fetch, './mock/test.json')) as Response;
        if (response.ok) {
            const json = yield response.json();
            console.log(" team1 requestDataSuccess");
            //             put是saga对Redux中dispatch方法的一个封装
            yield put(requestDataSuccess(json));
        } else {
            console.log("team1 requestDataError");
            yield put(requestDataError(response.status));
        }
    } catch (e) {
        console.log("team1 requestDataFaild");
        yield put(requestDataFaild(e.message));
    }
}

export default function* saga() {
    yield takeEvery(REQUESTDATA, fetchData);
}