import mockResponse from '../__mocks__/fetch-response.mock';
import { getJson, postJson, fetchJson, Fetch, run, responseAsJson, handleError } from '../fetch';

const _fetch = window.fetch;
describe('window.fetch', () => {
	it('should define polyfill', () => {
		expect(_fetch.polyfill).toBe(true);
	});
});

describe('responseAsJson', () => {
	it('should call json method from response', () => {
		const response = { json: jest.fn() };
		responseAsJson(response);
		expect(response.json).toBeCalled();
	});
});

describe('handleError', () => {
	describe('when response is ok', () => {
		const response = { ok: true };
		it('should return response object', () => {
			expect(handleError(response)).toBe(response);
		});
	});
	describe('when response is not ok', () => {
		const response = { ok: false, status: 500, statusText: 'Internal Server Error' };
		const call = () => handleError(response);
		it('should throw error with statusText as message, status and response', () => {
			const expected = new Error('Internal Server Error');
			expected.status = 500;
			expected.response = response;
			expect(call).toThrow(expected);
		});
	});
});

describe('run', () => {
	it('should call window.fetch with url and request', done => {
		const response = { data: 'calculator' };
		const mockedResponse = mockResponse(200, null, JSON.stringify(response));
		window.fetch = jest.fn(() => Promise.resolve(mockedResponse));
		const config = {
			url: '/api/calculator',
			request: {
				method: 'GET'
			}
		};
		run(config)
			.then(() => expect(window.fetch).toBeCalledWith(config.url, config.request))
			.then(done);
	});
	it('should call errorHandler with mocked response', done => {
		const response = { status: 500, statusText: 'Internal Server Error' };
		const mockedResponse = mockResponse(500, null, JSON.stringify(response));
		window.fetch = jest.fn(() => Promise.resolve(mockedResponse));
		const config = {
			errorHandler: jest.fn()
		};
		run(config)
			.then(() => expect(config.errorHandler).toBeCalledWith(mockedResponse))
			.then(done);
	});
	it('should call responseHandler with mocked response', done => {
		const response = { data: 'calculator' };
		const mockedResponse = mockResponse(200, null, JSON.stringify(response));
		window.fetch = jest.fn(() => Promise.resolve(mockedResponse));
		const config = {
			responseHandler: jest.fn()
		};
		run(config)
			.then(() => expect(config.responseHandler).toBeCalledWith(mockedResponse))
			.then(done);
	});
	afterEach(() => (window.fetch = _fetch));
});

describe('Fetch', () => {
	const url = '/api/calculator';
	let fetch, result;
	const checkResult = () => expect(result).toBe(fetch);
	beforeEach(() => (fetch = new Fetch(url)));
	describe('constructor', () => {
		it('should set the url', () => {
			expect(fetch.url).toEqual(url);
		});
		it('should set the request just with empty headers', () => {
			const expected = { headers: {} };
			expect(fetch.request).toEqual(expected);
		});
		it('should set the errorHandler with handleError', () => {
			expect(fetch.errorHandler).toBe(handleError);
		});
		it('should set the responseHandler with identity func', () => {
			expect(fetch.responseHandler(url)).toBe(url);
		});
	});
	describe('withMethod', () => {
		const method = 'GET';
		beforeEach(() => (result = fetch.withMethod(method)));
		it('should set request method prop with argument', () => {
			expect(fetch.request.method).toEqual(method);
		});
		it('should return fetch instance', checkResult);
	});
	describe('withHeader', () => {
		const name = 'Content-Type';
		const value = 'application/json';
		beforeEach(() => (result = fetch.withHeader(name, value)));
		it('should add header to request headers prop', () => {
			const expected = { [name]: value };
			expect(fetch.request.headers).toMatchObject(expected);
		});
		it('should return fetch instance', checkResult);
	});
	describe('withHeaders', () => {
		const headers = {
			'Content-Type': 'application/json',
			'Content-Length': 1232
		};
		beforeEach(() => (result = fetch.withHeaders(headers)));
		it('should add all headers to request headers prop', () => {
			const expected = headers;
			expect(fetch.request.headers).toMatchObject(expected);
		});
		it('should return fetch instance', checkResult);
	});
	describe('withBasicAuthentication', () => {
		const username = 'test@rri.com';
		const password = 'test';
		beforeEach(() => (result = fetch.withBasicAuthentication(username, password)));
		it('should add header Authorization with Basic credentials in base64', () => {
			const credentials = 'test@rri.com:test';
			const expected = { Authorization: `Basic ${btoa(credentials)}` };
			expect(fetch.request.headers).toMatchObject(expected);
		});
		it('should return fetch instance', checkResult);
	});
	describe('withJWT', () => {
		const jwt = 'jwt-token';
		beforeEach(() => (result = fetch.withJWT(jwt)));
		it('should add header Authorization with Bearer token', () => {
			const expected = { Authorization: `Bearer ${jwt}` };
			expect(fetch.request.headers).toMatchObject(expected);
		});
		it('should return fetch instance', checkResult);
	});
	describe('withBody', () => {
		const body = { data: 'calculator' };
		beforeEach(() => (result = fetch.withBody(body)));
		it('should set request body prop with stringified argument', () => {
			const expected = { body: JSON.stringify(body) };
			expect(fetch.request).toMatchObject(expected);
		});
		it('should add header Content-Type with application/json', () => {
			const expected = { 'Content-Type': 'application/json' };
			expect(fetch.request.headers).toMatchObject(expected);
		});
		it('should return fetch instance', checkResult);
	});
	describe('withRawBody', () => {
		const body = 'This is a raw text body';
		const contentType = 'text/plain';
		beforeEach(() => (result = fetch.withRawBody(body, contentType)));
		it('should set request body prop with unmodified body', () => {
			const expected = { body: body };
			expect(fetch.request).toMatchObject(expected);
		});
		it('should add header Content-Type with contentType', () => {
			const expected = { 'Content-Type': contentType };
			expect(fetch.request.headers).toMatchObject(expected);
		});
		it('should return fetch instance', checkResult);
	});
	describe('parseResponseAsJson', () => {
		beforeEach(() => (result = fetch.parseResponseAsJson()));
		it('should set responseHandler with responseAsJson', () => {
			expect(fetch.responseHandler).toBe(responseAsJson);
		});
		it('should add header Accept with application/json', () => {
			const expected = { Accept: 'application/json' };
			expect(fetch.request.headers).toMatchObject(expected);
		});
		it('should return fetch instance', checkResult);
	});
});

describe('fetchJson', () => {
	const url = '/api/calculator';
	const fetch = fetchJson(url);
	it('should return fetch with url', () => {
		expect(fetch.url).toBe(url);
	});
	it('should have called parseResponseAsJson', () => {
		const expected = new Fetch(url).parseResponseAsJson();
		expect(fetch).toEqual(expected);
	});
});

describe('getJson', () => {
	it('should have called withMethod with GET', () => {
		const url = '/api/calculator';
		const fetch = getJson(url);
		const expected = fetchJson(url).withMethod('GET');
		expect(fetch).toEqual(expected);
	});
});

describe('postJson', () => {
	it('should have called withMethod with POST', () => {
		const url = '/api/calculator';
		const fetch = postJson(url);
		const expected = fetchJson(url).withMethod('POST');
		expect(fetch).toEqual(expected);
	});
});
