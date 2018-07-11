const express = require('express');
const router = express.Router();
const itemSvc = require('../services/item.service');

router.get('/', (request, response, next) => {
	itemSvc
		.getAll()
		.then(result => response.send(result))
		.catch(err => next(err));
});

router.get('/:id', (request, response, next) => {
	itemSvc
		.get(request.params.id)
		.then(result => response.send(result))
		.catch(err => next(err));
});

router.put('/', (request, response, next) => {
	itemSvc
		.update(request.body)
		.then(result => response.send(result))
		.catch(err => next(err));
});

module.exports = router;
