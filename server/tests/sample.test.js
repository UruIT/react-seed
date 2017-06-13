const test = require('tape');
const request = require('supertest');
const app = require('../app.test');

test('GET samples', t => {
	request(app)
		.get('/api/sample')
		.expect(200)
		.end((err, res) => {
			t.error(err, 'Expectations fullfilled');
			t.same(res.body.length, 3, 'samples as expected');
			t.end();
		});
});

test('GET sample one', t => {
	request(app)
		.get('/api/sample/1')
		.expect('Content-Type', /json/)
		.expect(200)
		.end((err, res) => {
			const expected = { id: 1, description: 'UruIT' };
			t.error(err, 'Expectations fullfilled');
			t.same(res.body, expected, 'sample as expected');
			t.end();
		});
});

test('GET inexistent sample', t => {
	request(app)
		.get('/api/sample/100')
		.expect('Content-Type', /json/)
		.expect(200)
		.end((err, res) => {
			const expected = { };
			t.error(err, 'Expectations fullfilled');
			t.same(res.body, expected, 'empty sample');
			t.end();
		});
});
