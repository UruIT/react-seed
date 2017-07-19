import React from 'react';
import Graphic from './Graphic';
import ShallowRenderer from 'react-test-renderer/shallow';

test('renders Graphic', () => {
	const renderer = new ShallowRenderer();
	const tree = renderer.render(<Graphic />);

	expect(tree).toMatchSnapshot();
});
