const BadRequestException = require('./bad-request.exception');
const GenericException = require('./generic.exception');
const NotFoundException = require('./not-found.exception');
const ValidationException = require('./validation.exception');

module.exports = {
	BadRequestException,
	GenericException,
	NotFoundException,
	ValidationException
};
