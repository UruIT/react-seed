const express = require('express');
const router = express.Router();
const zh = require('../dictionaries/zh');
const ja = require('../dictionaries/ja');
const ru = require('../dictionaries/ru');
const en = require('../dictionaries/en');


function getDictionary(locale) {
	switch (locale) {
		case 'zh':
			return zh;
		case 'ja':
			return ja;
		case 'ru':
			return ru;
		default:
			return en;
	}
}

router.get('/:locale', (request, response) => {
	let translation = getDictionary(request.params.locale).messages;
	response.send(translation);
});

module.exports = router;
