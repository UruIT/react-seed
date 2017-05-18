import React from 'react';
import Nav from './Nav';
import ShallowRenderer from 'react-test-renderer/shallow';

test('<Nav/>', () => {
	const renderer = new ShallowRenderer();
	const tree = renderer.render(<Nav />);

	expect(tree).toMatchSnapshot();
});
