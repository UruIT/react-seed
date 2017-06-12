import React from 'react';
import Counter from './Counter';
import ShallowRenderer from 'react-test-renderer/shallow';

test('<Counter/>', () => {
	const renderer = new ShallowRenderer();
	const tree = renderer.render(<Counter />);

	expect(tree).toMatchSnapshot();
});
