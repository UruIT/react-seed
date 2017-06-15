import { call, put, takeEvery } from 'redux-saga/effects';
import { getJson } from '../../utils/fetch';

export const JOKE_FETCH_REQUESTED = 'JOKE_FETCH_REQUESTED';

export const jokeFetchRequested = () => ({
	type: JOKE_FETCH_REQUESTED
});

export const JOKE_FETCH_SUCCEEDED = 'JOKE_FETCH_SUCCEEDED';
export const JOKE_FETCH_FAILED='JOKE_FETCH_FAILED';

export function* fetchJoke() {
	try {
		const joke = yield call(getJson, 'https://api.chucknorris.io/jokes/random');
		yield put({ type: JOKE_FETCH_SUCCEEDED, joke });
	} catch (e) {
		yield put({ type: JOKE_FETCH_FAILED, message: e.message });
	}
}

export default function *jokeSaga() {
	yield takeEvery(JOKE_FETCH_REQUESTED, fetchJoke);
}
