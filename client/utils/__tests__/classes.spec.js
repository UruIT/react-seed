import classes from '../classes';

describe('classes', () => {
	it('return all classnames separated by spaces', () => {
		const result = classes('classname1', 'classname2', 'classname3', 'classname4');

		expect(result).toBe('classname1 classname2 classname3 classname4');
	});

	it('return only truthy classnames', () => {
		const result = classes('classname1', '', 1, '');

		expect(result).toBe('classname1 1');
	});

	it('return truthy expressions', () => {
		const condition = b => !!b;

		const result = classes('classnameN', condition(0) && 'classnameO', condition(1) && 'classnameP');

		expect(result).toBe('classnameN classnameP');
	});
});
