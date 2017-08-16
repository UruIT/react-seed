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
