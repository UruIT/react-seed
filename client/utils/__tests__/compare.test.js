import { compare } from '../compare';

test('compare {index:1} with {index:2}', () => {
	expect(compare({ index: 1 }, { index: 2 })).toBe(-1);
});

test('compare {index:2} with {index:0}', () => {
	expect(compare({ index: 2 }, { index: 1 })).toBe(1);
});

test('compare {index:1} with {index:1}', () => {
	expect(compare({ index: 1 }, { index: 1 })).toBe(0);
});
