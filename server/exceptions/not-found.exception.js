
class NotFoundException extends Error {
	constructor() {
		super();

		Error.captureStackTrace(this, NotFoundException);
		this.name = this.constructor.name;
		this.status = 404;
	}
};

module.exports = NotFoundException;
