import React from 'react';
import About from '../About';
import renderer from 'react-test-renderer';

test('renders About', () => {
	const tree = renderer.create(
		<About />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
