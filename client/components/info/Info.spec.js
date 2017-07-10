import React from 'react';
import Info from './Info';
import renderer from 'react-test-renderer';

test('renders Info', () => {
	const tree = renderer.create(<Info />).toJSON();

	expect(tree).toMatchSnapshot();
});
