import { getJson } from '../../../utils/fetch';
import {
	JOKE_FETCH_REQUESTED,
	JOKE_FETCH_SUCCEEDED,
	JOKE_FETCH_FAILED,
	jokeFetchRequested,
	fetchJoke
} from '../app.action';
import { call, put } from 'redux-saga/effects';

describe('app action creators', () => {
	it('jokefetchRequested', () => {
		const expectedAction = {
			type: JOKE_FETCH_REQUESTED
		};

		const result = jokeFetchRequested();

		expect(result).toEqual(expectedAction);
	});
});

describe('sagas effects: fecthJoke', () => {
	const iterator = fetchJoke();

	it('call api', () => {
		expect(iterator.next().value)
			.toEqual(call(getJson, 'https://api.chucknorris.io/jokes/random'));
	});

	it('fetch success', () => {
		expect(iterator.next().value)
			.toEqual(put({ type: JOKE_FETCH_SUCCEEDED }));
	});

	it('fetch success', () => {
		const error = { message: 'unexpected error!' };

		expect(iterator.throw(error).value)
			.toEqual(put({ type: JOKE_FETCH_FAILED, message: error.message }));
	});
});
