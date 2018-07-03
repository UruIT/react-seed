import React from 'react';
import renderer from 'react-test-renderer';


import Card from './Card';

describe('<Card />', () => {
	it('snapshot - default props', () => {
		const tree = renderer.create(<Card />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('snapshot - with content', () => {
		const tree = renderer.create(<Card content="TEXT" />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('snapshot - with title', () => {
		const tree = renderer.create(<Card title="TEXT" />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('snapshot - with title and content', () => {
		const tree = renderer.create(<Card content="CONTENT" title="TITLE"/>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
