import React from 'react';
import Chart from './Chart';
import renderer from 'react-test-renderer';

test('renders Chart', () => {
	const tree = renderer.create(<Chart />).toJSON();

	expect(tree).toMatchSnapshot();
});
