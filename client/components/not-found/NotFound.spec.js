import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NotFound from './NotFound';

describe('<NotFound/>', () => {
	it('snapshot', () => {
		const renderer = new ShallowRenderer();
		const tree = renderer.render(<NotFound />);
		expect(tree).toMatchSnapshot();
	});
});
