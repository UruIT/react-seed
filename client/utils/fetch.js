import 'es6-promise/auto';
import 'whatwg-fetch';

const _errorHandle = response => {
	if (response.ok) {
		return response;
	}

	let error = new Error(response.statusText);
	error.status = response.status;
	error.response = response;

	throw error;
};

const _parseJson = response => response.json();

export const getJson = url =>
	fetch(url)
		.then(_errorHandle)
		.then(_parseJson);

export const putJSON = (url, data) => {
	const options = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: data
	};
	return fetch(url, options)
		.then(_errorHandle)
		.then(_parseJson);
};

export default { getJson, putJSON };
