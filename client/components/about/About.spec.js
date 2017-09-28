import React from 'react';
import renderer from 'react-test-renderer';
import About from './About';

describe('<About/>', () => {
	it('snapshot', () => {
		const tree = renderer.create(<About />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
