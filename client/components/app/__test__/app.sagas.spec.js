import { watchSamplesFetchRequested, fetchSamples } from '../app.sagas';
import { samplesFetchSucceeded, samplesFetchFailed, SAMPLES_FETCH_REQUESTED } from '../app.action';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getJson } from '../../../utils/fetch';

describe('app.sagas', () => {
	describe('watchSamplesFetchRequested', () => {
		it('should take latest SAMPLES_FETCH_REQUESTED and call fetchSamples', () => {
			const expected = takeLatest(SAMPLES_FETCH_REQUESTED, fetchSamples);
			expect(watchSamplesFetchRequested().next().value).toEqual(expected);
		});
	});
	describe('fetchSamples', () => {
		const iterator = fetchSamples();

		it('call api', () => {
			expect(iterator.next().value).toEqual(call(getJson, '/api/sample'));
		});

		it('fetch success', () => {
			const response = { data: 'Throw me a punch!' };
			expect(iterator.next(response).value).toEqual(put(samplesFetchSucceeded(response)));
		});

		it('fetch failed', () => {
			const error = { message: 'unexpected error!' };

			expect(iterator.throw(error).value).toEqual(put(samplesFetchFailed(error.message)));
		});

		it('end sagas', () => {
			const end = { value: undefined, done: true };

			expect(iterator.next()).toEqual(end);
		});
	});
});
