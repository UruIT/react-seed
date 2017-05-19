const express = require('express'),
    router = express.Router(),
    path = require('path'),
	sampleSvc = require('../services/sample.service');

router.get('/', (request, response) => {
	sampleSvc.getAll()
        .then((result) => response.send(result));
});

router.get('/:id', (request, response) => {
	sampleSvc.get(request.params.id)
        .then((result) => response.send(result));
});

module.exports = router;
