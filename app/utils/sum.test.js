import { sum, double } from './sum';

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('double 2 to equal 4', () => {
	expect(double(2)).toBe(4);
});
