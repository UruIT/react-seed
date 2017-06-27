import { call, put, takeLatest } from 'redux-saga/effects';
import { getJson } from '../utils/fetch';

export const TRANSLATIONS_REQUESTED = 'TRANSLATIONS_REQUESTED';

export const translationsRequested = (language) => ({
	type: TRANSLATIONS_REQUESTED,
	language
});

export const TRANSLATIONS_SUCCEEDED = 'TRANSLATIONS_SUCCEEDED';

export const translationsSucceeded = translations => ({
	type: TRANSLATIONS_SUCCEEDED,
	translations
});

export const TRANSLATIONS_FAILED='TRANSLATIONS_FAILED';

export const translationsFailed = error => ({
	type: TRANSLATIONS_FAILED,
	message: error.message || error
});

export function *fetchTranslations(action) {
	try {
		const translations = yield call(getJson, '/api/translations/'+action.language);
		yield put(translationsSucceeded(translations));
	} catch (err) {
		yield put(translationsFailed(err));
	}
}

export default function *watchFetchTranslations() {
	yield takeLatest(TRANSLATIONS_REQUESTED, fetchTranslations);
}
