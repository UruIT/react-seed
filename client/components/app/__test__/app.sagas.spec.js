import { watchJokeFetchRequested, fetchJoke } from '../app.sagas';
import { jokeFetchSucceeded, jokeFetchFailed, JOKE_FETCH_REQUESTED } from '../app.action';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getJson } from '../../../utils/fetch';

describe('app.sagas', () => {
	describe('watchJokeFetchRequested', () => {
		it('should take latest JOKE_FETCH_REQUESTED and call fetchJoke', () => {
			const expected = takeLatest(JOKE_FETCH_REQUESTED, fetchJoke);
			expect(watchJokeFetchRequested().next().value).toEqual(expected);
		});
	});
	describe('fetchJoke', () => {
		const iterator = fetchJoke();

		it('call api', () => {
			expect(iterator.next().value).toEqual(call(getJson, 'https://api.chucknorris.io/jokes/random'));
		});

		it('fetch success', () => {
			const response = { data: 'Throw me a punch!' };
			expect(iterator.next(response).value).toEqual(put(jokeFetchSucceeded(response)));
		});

		it('fetch failed', () => {
			const error = { message: 'unexpected error!' };

			expect(iterator.throw(error).value).toEqual(put(jokeFetchFailed(error.message)));
		});

		it('end sagas', () => {
			const end = { value: undefined, done: true };

			expect(iterator.next()).toEqual(end);
		});
	});
});
