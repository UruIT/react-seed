const express = require('express'),
	router = express.Router(),
	userSvc = require('../services/user.service');

router.get('/', (request, response) => {
	userSvc
		.getAll()
		.then(result => response.send(result))
		.catch(err => next(err));
});

router.get('/:id', (request, response, next) => {
	userSvc
		.get(request.params.id)
		.then(result => response.send(result))
		.catch(err => next(err));
});

router.post('/', (request, response, next) => {
	userSvc
		.save(request.body)
		.then(result => response.send(result))
		.catch(err => next(err));
})

module.exports = router;
