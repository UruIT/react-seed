class BadRequestException extends Error {
	constructor(message) {
		super(message);

		Error.captureStackTrace(this, BadRequestException);
		this.name = this.constructor.name;
		this.status = 400;
	}
}

module.exports = BadRequestException;
