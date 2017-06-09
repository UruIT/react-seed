class GenericException extends Error {
	constructor(err) {
		super(err);

		Error.captureStackTrace(this, GenericException);
		this.name = this.constructor.name;
		this.innerError = err;
		this.status = 500;
	}
}

module.exports = GenericException;
