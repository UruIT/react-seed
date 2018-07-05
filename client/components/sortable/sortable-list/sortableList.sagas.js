import { call, put, takeLatest } from 'redux-saga/effects';
import { getJson } from '../../../utils/fetch';
import { itemsFetchSucceeded, itemsFetchFailed, ITEMS_FETCH_REQUESTED } from './sortableList.actions';

export function* fetchItems() {
	try {
		const items = yield call(getJson, '/api/item');
		yield put(itemsFetchSucceeded(items));
	} catch (err) {
		yield put(itemsFetchFailed(err));
	}
}

export function* watchItemsFetchRequested() {
	yield takeLatest(ITEMS_FETCH_REQUESTED, fetchItems);
}
