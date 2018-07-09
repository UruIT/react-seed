export const SORT_LIST_REQUESTED = 'SORT_LIST_REQUESTED';

export const sortListRequested = ({ oldIndex, newIndex }) => ({
	type: SORT_LIST_REQUESTED,
	payload: {
		oldIndex,
		newIndex
	}
});

export const SORT_LIST_SUCCEEDED = 'SORT_LIST_SUCCEEDED';

export const sortListSucceeded = items => ({
	type: SORT_LIST_SUCCEEDED,
	items
});

export const SORT_LIST_FAILED = 'SORT_LIST_FAILED';

export const sortListFailed = error => ({
	type: SORT_LIST_FAILED,
	message: error.message || error
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
