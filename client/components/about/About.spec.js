import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import About from './About';

describe('<About/>', () => {
	it('snapshot', () => {
		const renderer = new ShallowRenderer();
		const tree = renderer.render(<About />);
		expect(tree).toMatchSnapshot();
	});
});
