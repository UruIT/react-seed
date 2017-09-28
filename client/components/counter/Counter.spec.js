import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Counter from './Counter';

describe('<Counter/>', () => {
	it('snapshot', () => {
		const renderer = new ShallowRenderer();
		const tree = renderer.render(<Counter />);

		expect(tree).toMatchSnapshot();
	});
});
