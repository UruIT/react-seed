import { takeLatest, call, put } from 'redux-saga/effects';
import { getJson, putJSON } from '../../../../utils/fetch';
import { watchItemsFetchRequested, watchSortListRequested, fetchItems, sortListItems } from '../sortableList.sagas';
import {
	itemsFetchSucceeded,
	itemsFetchFailed,
	ITEMS_FETCH_REQUESTED,
	sortListSucceeded,
	sortListFailed,
	SORT_LIST_REQUESTED
} from '../sortableList.action';

describe('app.sagas', () => {
	describe('watchItemsFetchRequested', () => {
		it('should take latest ITEMS_FETCH_REQUESTED and call fetchItems', () => {
			const expected = takeLatest(ITEMS_FETCH_REQUESTED, fetchItems);
			expect(watchItemsFetchRequested().next().value).toEqual(expected);
		});
	});

	describe('fetchItems', () => {
		const iterator = fetchItems();

		it('call api', () => {
			expect(iterator.next().value).toEqual(call(getJson, '/api/item'));
		});

		it('fetch success', () => {
			const response = ['Item 1', 'Item 2'];
			expect(iterator.next(response).value).toEqual(put(itemsFetchSucceeded(response)));
		});

		it('fetch failed', () => {
			const error = { message: 'unexpected error!' };

			expect(iterator.throw(error).value).toEqual(put(itemsFetchFailed(error.message)));
		});

		it('end sagas', () => {
			const end = { value: undefined, done: true };
			expect(iterator.next()).toEqual(end);
		});
	});

	describe('watchSortListRequested', () => {
		it('should take latest SORT_LIST_REQUESTED and call sortListItems', () => {
			const expected = takeLatest(SORT_LIST_REQUESTED, sortListItems);
			expect(watchSortListRequested().next().value).toEqual(expected);
		});
	});

	describe('sortItems', () => {
		const iterator = sortListItems({ payload: { oldIndex: 0, newIndex: 1 } });
		const items = [
			{
				title: 'Item 1',
				index: '0'
			},
			{
				title: 'Item 2',
				index: '1'
			},
			{
				title: 'Item 3',
				index: '2'
			}
		];
		const sortedItems = [
			{
				title: 'Item 2',
				index: '1'
			},
			{
				title: 'Item 1',
				index: '0'
			},
			{
				title: 'Item 3',
				index: '2'
			}
		];
		iterator.next();

		it('call api', () => {
			expect(iterator.next(items).value).toEqual(call(putJSON, '/api/item', JSON.stringify(sortedItems)));
		});

		it('sort success', () => {
			expect(iterator.next().value).toEqual(put(sortListSucceeded(sortedItems)));
		});

		it('sort failed', () => {
			const error = { message: 'unexpected error!' };
			expect(iterator.throw(error).value).toEqual(put(sortListFailed(error.message)));
		});

		it('end sagas', () => {
			const end = { value: undefined, done: true };
			expect(iterator.next()).toEqual(end);
		});
	});
});
