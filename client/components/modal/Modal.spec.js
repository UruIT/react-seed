import React from 'react';
import Modal from './Modal';
import renderer from 'react-test-renderer';

test('renders Modal', () => {
	const tree = renderer.create(<Modal />).toJSON();

	expect(tree).toMatchSnapshot();
});
