const express = require('express');
const router = express.Router();
const reportSvc = require('../services/report.service');

router.get('/', (request, response) => {
	reportSvc.getPDF().then(doc => {
		response.setHeader('Content-disposition', 'attachment; filename=report-poc.pdf');
		response.setHeader('Content-type', 'application/pdf');
		response.send(doc);
	});
});

module.exports = router;
