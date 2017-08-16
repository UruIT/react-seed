import {
	SAMPLES_FETCH_REQUESTED,
	SAMPLES_FETCH_SUCCEEDED,
	SAMPLES_FETCH_FAILED,
	samplesFetchRequested,
	samplesFetchSucceeded,
	samplesFetchFailed,
} from '../app.action';

describe('app.action', () => {
	it('samplesfetchRequested', () => {
		const expectedAction = {
			type: SAMPLES_FETCH_REQUESTED
		};

		const result = samplesFetchRequested();

		expect(result).toEqual(expectedAction);
	});

	it('samplesFetchSucceeded', () => {
		const expectedAction = {
			type: SAMPLES_FETCH_SUCCEEDED,
			samples: 'Chuck Norris CAN kill you in your dreams'
		};

		const result = samplesFetchSucceeded('Chuck Norris CAN kill you in your dreams');

		expect(result).toEqual(expectedAction);
	});

	it('samplesFetchFailed', () => {
		const expectedAction = {
			type: SAMPLES_FETCH_FAILED,
			message: 'network error!'
		};

		const result = samplesFetchFailed({ message: 'network error!' });

		expect(result).toEqual(expectedAction);
	});
});
