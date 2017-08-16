export const SAMPLES_FETCH_REQUESTED = 'SAMPLES_FETCH_REQUESTED';

export const samplesFetchRequested = () => ({
	type: SAMPLES_FETCH_REQUESTED
});

export const SAMPLES_FETCH_SUCCEEDED = 'SAMPLES_FETCH_SUCCEEDED';

export const samplesFetchSucceeded = samples => ({
	type: SAMPLES_FETCH_SUCCEEDED,
	samples
});

export const SAMPLES_FETCH_FAILED='SAMPLES_FETCH_FAILED';

export const samplesFetchFailed = error => ({
	type: SAMPLES_FETCH_FAILED,
	message: error.message || error
});
