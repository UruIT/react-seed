import { all } from 'redux-saga/effects';

import watchFetchJokeSaga from '../components/app/app.action';
// add new sagas here...

export default function* () {
	yield all([
		watchFetchJokeSaga()
	]);
}
