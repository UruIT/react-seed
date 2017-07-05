const test = require('tape');
const request = require('supertest');
const app = require('../app.test');

test('PDF generation', t => {
	request(app)
		.get('/api/report')
		.expect('Content-Type', 'application/pdf')
		.end((err) => {
			t.error(err, 'Expectations fullfilled')
			t.end()
		})
});
