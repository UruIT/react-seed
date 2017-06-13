const test = require('tape');
const request = require('supertest');
const app = require('../app.test');

test('GET samples', (t) => {
	request(app)
		.get('/api/sample')
		.expect(200)
		.end((err, res) => {
			t.error(err, 'Expectations fullfilled');
			t.same(res.body.length, 0, 'samples as expected');
			t.end();
		});
});
