import { call, put, takeLatest, select } from 'redux-saga/effects';
import { arrayMove } from 'react-sortable-hoc';
import { getSortableItems } from '../../../saga/selectors/index';
import { getJson, putJSON } from '../../../utils/fetch';
import { compare } from '../../../utils/compare';
import {
	itemsFetchSucceeded,
	itemsFetchFailed,
	ITEMS_FETCH_REQUESTED,
	sortListSucceeded,
	sortListFailed,
	SORT_LIST_REQUESTED
} from './sortableList.actions';

export function* fetchItems() {
	try {
		const items = yield call(getJson, '/api/item');
		items.sort(compare);
		yield put(itemsFetchSucceeded(items));
	} catch (err) {
		yield put(itemsFetchFailed(err));
	}
}

export function* sortListItems(action) {
	try {
		const items = yield select(getSortableItems);
		const sortedItems = arrayMove(items, action.payload.oldIndex, action.payload.newIndex);
		yield call(putJSON, '/api/item', JSON.stringify(sortedItems));
		yield put(sortListSucceeded(sortedItems));
	} catch (err) {
		yield put(sortListFailed(err));
	}
}

export function* watchItemsFetchRequested() {
	yield takeLatest(ITEMS_FETCH_REQUESTED, fetchItems);
}

export function* watchSortListRequested() {
	yield takeLatest(SORT_LIST_REQUESTED, sortListItems);
}
