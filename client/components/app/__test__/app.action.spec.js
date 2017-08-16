import {
	JOKE_FETCH_REQUESTED,
	JOKE_FETCH_SUCCEEDED,
	JOKE_FETCH_FAILED,
	jokeFetchRequested,
	jokeFetchSucceeded,
	jokeFetchFailed,
} from '../app.action';

describe('app.action', () => {
	it('jokefetchRequested', () => {
		const expectedAction = {
			type: JOKE_FETCH_REQUESTED
		};

		const result = jokeFetchRequested();

		expect(result).toEqual(expectedAction);
	});

	it('jokeFetchSucceeded', () => {
		const expectedAction = {
			type: JOKE_FETCH_SUCCEEDED,
			joke: 'Chuck Norris CAN kill you in your dreams'
		};

		const result = jokeFetchSucceeded('Chuck Norris CAN kill you in your dreams');

		expect(result).toEqual(expectedAction);
	});

	it('jokeFetchFailed', () => {
		const expectedAction = {
			type: JOKE_FETCH_FAILED,
			message: 'network error!'
		};

		const result = jokeFetchFailed({ message: 'network error!' });

		expect(result).toEqual(expectedAction);
	});
});
