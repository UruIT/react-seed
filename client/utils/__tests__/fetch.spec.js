import mockResponse from '../__mocks__/fetch-response.mock';
import { getJson } from '../fetch';

const _fetch = window.fetch;

describe('fetch', () => {
	it('should call then part when response was successful', () => {
		const RESPONSE = { joke: 'kcuhC' };
		window.fetch = jest.fn(() => Promise.resolve(mockResponse(200, null, JSON.stringify(RESPONSE))));

		return getJson('//url').then(response => {
			expect(response).toEqual(RESPONSE);
		});
	});

	it('should call catch part when response was not successful', () => {
		const RESPONSE = { status: 404, statusText: '404 Error' };
		window.fetch = jest.fn(() => Promise.resolve(mockResponse(404, '404 Error', JSON.stringify(RESPONSE))));

		return getJson('//url').catch(error => {
			expect(error.status).toEqual(RESPONSE.status);
		});
	});

	it('has window.fetch polyfill', () => {
		expect(_fetch.polyfill).toBe(true);
	});
});
