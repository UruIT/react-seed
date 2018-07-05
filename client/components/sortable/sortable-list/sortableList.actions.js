export const SORT_LIST = 'SORT_LIST';

export const sortList = ({ oldIndex, newIndex }) => ({
	type: SORT_LIST,
	payload: {
		oldIndex,
		newIndex
	}
});

export const ITEMS_FETCH_REQUESTED = 'ITEMS_FETCH_REQUESTED';

export const itemsFetchRequested = () => ({
	type: ITEMS_FETCH_REQUESTED
});

export const ITEMS_FETCH_SUCCEEDED = 'ITEMS_FETCH_SUCCEEDED';

export const itemsFetchSucceeded = items => ({
	type: ITEMS_FETCH_SUCCEEDED,
	items
});

export const ITEMS_FETCH_FAILED = 'ITEMS_FETCH_FAILED';

export const itemsFetchFailed = error => ({
	type: ITEMS_FETCH_FAILED,
	message: error.message || error
});
