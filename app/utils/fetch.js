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

export const getJson = url => fetch(url).then(_errorHandle).then(_parseJson);

export default { getJson };
