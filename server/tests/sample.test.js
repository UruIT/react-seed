const test = require('tape');
const request = require('supertest');
const app = require('../app.test');

test('GET samples', t => {
	request(app)
		.get('/api/sample')
		.expect(200)
		.end((err, res) => {
			t.error(err, 'Expectations fullfilled');
			t.same(res.body.length, 3, 'Samples as expected');
			t.end();
		});
});

test('GET sample one', t => {
	request(app)
		.get('/api/sample/1')
		.expect('Content-Type', /json/)
		.expect(200)
		.end((err, res) => {
			const expected = { id: 1, description: 'UruIT', value: null };
			t.error(err, 'Expectations fullfilled');
			t.same(res.body, expected, 'Sample as expected');
			t.end();
		});
});

test('GET inexistent sample', t => {
	request(app)
		.get('/api/sample/100')
		.expect('Content-Type', /html/)
		.expect(404)
		.end((err, res) => {
			const expected = { };
			t.error(err, 'Expectations fullfilled');
			t.same(res.body, expected, 'Empty sample');
			t.end();
		});
});

test('POST data with missing values', t => {
	request(app)
		.post('/api/sample')
		.send({ id: 3 }) // missing description
		.expect(400)
		.end((err) => {
			t.error(err, 'Expectations fullfilled');
			t.end();
		})
});

test('POST data with incorrect values', t => {
	request(app)
		.post('/api/sample')
		.send({ id: 4, description: 'my test', value: 8 }) // value: 8 does not exists in table `lookup`
		.expect(409)
		.end((err) => {
			t.error(err, 'Status code');
			t.end();
		})
});
