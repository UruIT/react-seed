import React from 'react';
import About from './About';
import ShallowRenderer from 'react-test-renderer/shallow';

test('renders About', () => {
	const renderer = new ShallowRenderer();
	const tree = renderer.render(<About />);

	expect(tree).toMatchSnapshot();
});
