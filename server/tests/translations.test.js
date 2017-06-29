const test = require('tape');
const request = require('supertest');
const app = require('../app.test');

test('GET russian translation', t => {
	request(app).get('/api/translations/ru').expect('Content-Type', /json/).expect(200).end((err, res) => {
		const expected = {
			test: 'Контрольная работа',
			home: 'Главная',
			about: 'Около'
		};
		t.error(err, 'Expectations fullfilled');
		t.same(res.body, expected, 'Sample as expected');
		t.end();
	});
});

test('GET default translation', t => {
	request(app).get('/api/translations/es').expect('Content-Type', /json/).expect(200).end((err, res) => {
		const expected = {
			test: 'Test',
			home: 'Home',
			about: 'About'
		};
		t.error(err, 'Expectations fullfilled');
		t.same(res.body, expected, 'Sample as expected');
		t.end();
	});
});
