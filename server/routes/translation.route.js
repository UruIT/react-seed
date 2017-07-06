const express = require('express');
const router = express.Router();
const translation = require('../services/translation.service');

router.get('/:locale', (request, response) => {
	const messages = translation.getDictionary(request.params.locale).messages;
	response.send(messages);
});

module.exports = router;
