import noop from '../noop';

describe('noop', () => {
	it('return nothing', () => {
		const result = noop();
		expect(result).toBeFalsy();
	})
});
