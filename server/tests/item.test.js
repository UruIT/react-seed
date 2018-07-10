const test = require('tape');
const request = require('supertest');
const app = require('../app.test');
const items = [
	{ id: 1, index: 0, title: 'Lukas Podolski', content: 'Football is like chess but without the dice' },
	{
		id: 2,
		index: 1,
		title: 'Bart Simpson',
		content: "I didn't do it"
	},
	{
		id: 3,
		index: 2,
		title: 'Groucho Marx',
		content: "Outside of a dog, a book is man's best friend. Inside of a dog, it's too dark to read."
	},
	{ id: 4, index: 3, title: 'Garrison Keillor', content: 'When in doubt, look intelligent.' }
];

test('GET item', t => {
	request(app)
		.get('/api/item')
		.expect(200)
		.end((err, res) => {
			t.error(err, 'Expectations fullfilled');
			t.same(res.body.length, 4, 'Items as expected');
			t.end();
		});
});

test('PUT data', t => {
	request(app)
		.put('/api/item')
		.send(items)
		.expect(200)
		.end(err => {
			t.error(err);
			t.end();
		});
});

test('GET item one', t => {
	request(app)
		.get('/api/item/1')
		.expect('Content-Type', /json/)
		.expect(200)
		.end((err, res) => {
			const expected = {
				id: 1,
				index: 0,
				title: 'Lukas Podolski',
				content: 'Football is like chess but without the dice'
			};
			t.error(err);
			t.same(res.body, expected, 'Item as expected');
			t.end();
		});
});

test('GET inexistent item', t => {
	request(app)
		.get('/api/item/100')
		.expect('Content-Type', /html/)
		.expect(404)
		.end((err, res) => {
			const expected = {};
			t.error(err, 'Expectations fullfilled');
			t.same(res.body, expected, 'Empty item');
			t.end();
		});
});
