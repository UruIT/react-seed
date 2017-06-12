
const mockResponse = (status, statusText, response = '{}') =>
	new Response(response, {
		status,
		statusText,
		headers: {
			'Content-Type': 'application/json'
		}
	});

export default mockResponse;
