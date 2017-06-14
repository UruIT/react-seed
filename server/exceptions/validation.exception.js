class ValidationException extends Error {
	constructor() {
		super('Data validation error');

		Error.captureStackTrace(this, ValidationException);
		this.name = this.constructor.name;
		this.status = 409;
	}
}

module.exports = ValidationException;
