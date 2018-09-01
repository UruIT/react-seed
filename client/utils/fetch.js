import 'es6-promise/auto';
import 'whatwg-fetch';

export const handleError = response => {
	if (response.ok) {
		return response;
	}

	let error = new Error(response.statusText);
	error.status = response.status;
	error.response = response;

	throw error;
};

export const handleResponse = x => x;
export const responseAsJson = response => response.json();

export class Fetch {
	constructor(url) {
		this.url = url;
		this.request = {
			headers: {}
		};
		this.errorHandler = handleError;
		this.responseHandler = handleResponse;
	}
	withMethod(method) {
		this.request.method = method;
		return this;
	}
	withHeader(name, value) {
		this.request.headers[name] = value;
		return this;
	}
	withHeaders(headers) {
		Object.keys(headers).forEach(name => this.withHeader(name, headers[name]));
		return this;
	}
	withBasicAuthentication(username, password) {
		const credentials = btoa(`${username}:${password}`);
		return this.withHeader('Authorization', `Basic ${credentials}`);
	}
	withJWT(jwt) {
		return this.withHeader('Authorization', `Bearer ${jwt}`);
	}
	withBody(body) {
		this.request.body = JSON.stringify(body);
		return this.withHeader('Content-Type', 'application/json');
	}
	withRawBody(body, contentType) {
		this.request.body = body;
		return this.withHeader('Content-Type', contentType);
	}
	parseResponseAsJson() {
		this.responseHandler = responseAsJson;
		return this.withHeader('Accept', 'application/json');
	}
}

export const run = ({ url, request, errorHandler, responseHandler }) =>
	fetch(url, request)
		.then(errorHandler)
		.then(responseHandler);

export const fetchJson = url => new Fetch(url).parseResponseAsJson();

export const getJson = url => fetchJson(url).withMethod('GET');
export const postJson = url => fetchJson(url).withMethod('POST');
export const putJson = url => fetchJson(url).withMethod('PUT');
export const deleteJson = url => fetchJson(url).withMethod('DELETE');

export const post = url => new Fetch(url).withMethod('POST');
