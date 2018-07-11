import {
	SORT_LIST_REQUESTED,
	SORT_LIST_SUCCEEDED,
	SORT_LIST_FAILED,
	ITEMS_FETCH_REQUESTED,
	ITEMS_FETCH_SUCCEEDED,
	ITEMS_FETCH_FAILED,
	sortListRequested,
	sortListSucceeded,
	sortListFailed,
	itemsFetchRequested,
	itemsFetchSucceeded,
	itemsFetchFailed
} from '../sortableList.action';

describe('sortableList.action', () => {
	it('sortListRequested', () => {
		const expectedAction = {
			type: SORT_LIST_REQUESTED,
			payload: { oldIndex: 0, newIndex: 1 }
		};

		const result = sortListRequested({ oldIndex: 0, newIndex: 1 });

		expect(result).toEqual(expectedAction);
	});

	it('sortListSucceeded', () => {
		const expectedAction = {
			type: SORT_LIST_SUCCEEDED,
			items: ['Item1']
		};

		const result = sortListSucceeded(['Item1']);

		expect(result).toEqual(expectedAction);
	});

	it('sortListFailed', () => {
		const expectedAction = {
			type: SORT_LIST_FAILED,
			message: 'Error!'
		};

		const result = sortListFailed({ message: 'Error!' });

		expect(result).toEqual(expectedAction);
	});

	it('itemsFetchRequested', () => {
		const expectedAction = {
			type: ITEMS_FETCH_REQUESTED
		};

		const result = itemsFetchRequested();

		expect(result).toEqual(expectedAction);
	});

	it('itemsFetchSucceeded', () => {
		const expectedAction = {
			type: ITEMS_FETCH_SUCCEEDED,
			items: ['Item1']
		};

		const result = itemsFetchSucceeded(['Item1']);

		expect(result).toEqual(expectedAction);
	});

	it('itemsFetchFailed', () => {
		const expectedAction = {
			type: ITEMS_FETCH_FAILED,
			message: 'Error!'
		};

		const result = itemsFetchFailed({ message: 'Error!' });

		expect(result).toEqual(expectedAction);
	});
});
