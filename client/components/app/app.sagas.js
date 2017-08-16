import { call, put, takeLatest } from 'redux-saga/effects';
import { getJson } from '../../utils/fetch';
import { samplesFetchSucceeded, samplesFetchFailed, SAMPLES_FETCH_REQUESTED } from './app.action';

export function* fetchSamples() {
	try {
		const samples = yield call(getJson, '/api/sample');
		yield put(samplesFetchSucceeded(samples));
	} catch (err) {
		yield put(samplesFetchFailed(err));
	}
}

export function* watchSamplesFetchRequested() {
	yield takeLatest(SAMPLES_FETCH_REQUESTED, fetchSamples);
}
