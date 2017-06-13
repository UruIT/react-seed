
class GenericException extends Error {
	constructor() {
		super();

		Error.captureStackTrace(this, GenericException);
		this.name = this.constructor.name;
		this.status = 500;
	}
};

module.exports = GenericException;
