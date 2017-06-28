import { call, put } from 'redux-saga/effects';
import { getJson } from '../../utils/fetch';
import {
	TRANSLATIONS_REQUESTED,
	TRANSLATIONS_SUCCEEDED,
	TRANSLATIONS_FAILED,
	translationsRequested,
	translationsSucceeded,
	translationsFailed,
	fetchTranslations } from '../translations.action';

describe('translations action creators', () => {
	it('translationsRequested', () => {
		const expectedAction = {
			type: TRANSLATIONS_REQUESTED,
			language: 'en'
		};

		const result = translationsRequested('en');

		expect(result).toEqual(expectedAction);
	});

	it('jokeFetchSucceeded', () => {
		const expectedAction = {
			type: TRANSLATIONS_SUCCEEDED,
			translations: {"test": "Test", "home":"Home"}
		};

		const result = translationsSucceeded({"test": "Test", "home":"Home"});

		expect(result).toEqual(expectedAction);
	});

	it('translationsFailed', () => {
		const expectedAction = {
			type: TRANSLATIONS_FAILED,
			message: 'bad request!'
		};

		const result = translationsFailed({ message: 'bad request!' });

		expect(result).toEqual(expectedAction);
	});
});

describe('sagas effects: fecthTranslations', () => {

	const iterator = fetchTranslations({language: "en"});

	it('call api', () => {
		expect(iterator.next().value).toEqual(call(getJson, '/api/translations/en'));
	});

	it('fetch success', () => {
		expect(iterator.next({'test':'Test', 'home':'Home'}).value)
		.toEqual(put({ type: TRANSLATIONS_SUCCEEDED, translations:{'test':'Test', 'home':'Home'} }));
	});

	it('fetch failed', () => {
		const error = { message: 'bad request!' };

		expect(iterator.throw(error).value).toEqual(put({ type: TRANSLATIONS_FAILED, message: error.message }));
	});

	it('end sagas', () => {
		const end = { value: undefined, done: true };

		expect(iterator.next()).toEqual(end);
	});
});
