function mockResponse(status, statusText, response = '{}') {
	return new Response(response, {
		status,
		statusText,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

export default mockResponse;
