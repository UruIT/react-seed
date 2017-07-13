import React from 'react';
import Dialog from './Dialog';
import renderer from 'react-test-renderer';

test('renders Info', () => {
	const tree = renderer.create(<Dialog />).toJSON();

	expect(tree).toMatchSnapshot();
});
