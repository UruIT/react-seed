import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Nav from './Nav';

describe('<Nav/>', () => {
	it('snapshot', () => {
		const renderer = new ShallowRenderer();
		const tree = renderer.render(<Nav />);

		expect(tree).toMatchSnapshot();
	});
});
