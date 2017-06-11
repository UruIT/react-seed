import mockResponse from '../__mocks__/fetch-response.mock';
import { getJson } from '../fetch';

const _fetch = window.fetch;

it('call then if fetch response was successful', () => {
	const RESPONSE = { joke: 'kcuhC' };
	window.fetch = jest.fn(() =>
		Promise.resolve(mockResponse(200, null, JSON.stringify(RESPONSE)))
	);

	return getJson('//url').then(response => {
		expect(response).toEqual(RESPONSE);
	});
});

it('call catch if fetch response was not successful', () => {
	const RESPONSE = { status: 404, statusText: '404 Error' };
	window.fetch = jest.fn(() =>
		Promise.resolve(
			mockResponse(404, '404 Error', JSON.stringify(RESPONSE))
		)
	);

	return getJson('//url').catch(error => {
		expect(error.status).toEqual(RESPONSE.status);
	});
});

it('window.fetch polyfill', () => {
	expect(_fetch.polyfill).toBe(true);
});
