import React from 'react';
import Report from './Report';
import renderer from 'react-test-renderer';

test('renders Report', () => {
	const tree = renderer.create(<Report />).toJSON();

	expect(tree).toMatchSnapshot();
});
