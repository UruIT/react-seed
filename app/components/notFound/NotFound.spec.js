import React from 'react';
import NotFound from './NotFound';
import ShallowRenderer from 'react-test-renderer/shallow';

test('<NotFound/>', () => {
	const renderer = new ShallowRenderer();

	const tree = renderer.render(<NotFound />);

	expect(tree).toMatchSnapshot();
});
