class BadRequestException extends Error {
	constructor() {
		super('Inconsistent data');

		Error.captureStackTrace(this, BadRequestException);
		this.name = this.constructor.name;
		this.status = 400;
	}
}

module.exports = BadRequestException;
