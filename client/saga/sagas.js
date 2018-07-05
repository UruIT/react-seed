import { all } from 'redux-saga/effects';

import { watchSamplesFetchRequested } from '../components/app/app.sagas';
import { watchItemsFetchRequested } from '../components/sortable/sortable-list/sortableList.sagas';
// add new sagas here...

export default function*() {
	yield all([watchSamplesFetchRequested(), watchItemsFetchRequested()]);
}
