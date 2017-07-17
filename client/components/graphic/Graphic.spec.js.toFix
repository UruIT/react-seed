import React from 'react';
import Graphic from './Graphic';
import renderer from 'react-test-renderer';

test('renders Graphic', () => {
	const tree = renderer.create(<Graphic />).toJSON();

	expect(tree).toMatchSnapshot();
});
