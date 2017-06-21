import { call, put, takeLatest } from 'redux-saga/effects';
import { getJson } from '../../utils/fetch';

export const JOKE_FETCH_REQUESTED = 'JOKE_FETCH_REQUESTED';

export const jokeFetchRequested = () => ({
	type: JOKE_FETCH_REQUESTED
});

export const JOKE_FETCH_SUCCEEDED = 'JOKE_FETCH_SUCCEEDED';

export const jokeFetchSucceeded = joke => ({
	type: JOKE_FETCH_SUCCEEDED,
	joke
});

export const JOKE_FETCH_FAILED='JOKE_FETCH_FAILED';

export const jokeFetchFailed = error => ({
	type: JOKE_FETCH_FAILED,
	message: error.message || error
});

export function* fetchJoke() {
	try {
		const joke = yield call(getJson, 'https://api.chucknorris.io/jokes/random');
		yield put(jokeFetchSucceeded(joke));
	} catch (err) {
		yield put(jokeFetchFailed(err));
	}
}

export default function *watchFetchJoke() {
	yield takeLatest(JOKE_FETCH_REQUESTED, fetchJoke);
}
