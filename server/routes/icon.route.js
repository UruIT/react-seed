const express = require('express');
const router = express.Router();
const iconSvc = require('../services/icon.service');

router.get('/', (request, response) => {
	response.set('Content-Type', 'text/plain');
	response.send(iconSvc.getIcon());
});

module.exports = router;
