import { all } from 'redux-saga/effects';

import { watchSamplesFetchRequested } from '../components/app/app.sagas';
// add new sagas here...

export default function *() {
	yield all([
		watchSamplesFetchRequested()
	]);
}
