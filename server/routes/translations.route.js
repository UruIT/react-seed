const express = require('express');
const router = express.Router();
const translation = require('../services/translations.service');

router.get('/:locale', (request, response) => {
	let messages = translation.getDictionary(request.params.locale).messages;
	response.send(messages);
});

module.exports = router;
