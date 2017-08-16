import { call, put, takeLatest } from 'redux-saga/effects';
import { getJson } from '../../utils/fetch';
import { jokeFetchSucceeded, jokeFetchFailed, JOKE_FETCH_REQUESTED } from './app.action';

export function* fetchJoke() {
	try {
		const joke = yield call(getJson, 'https://api.chucknorris.io/jokes/random');
		yield put(jokeFetchSucceeded(joke));
	} catch (err) {
		yield put(jokeFetchFailed(err));
	}
}

export function* watchJokeFetchRequested() {
	yield takeLatest(JOKE_FETCH_REQUESTED, fetchJoke);
}
