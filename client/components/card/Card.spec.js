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
		const tree = renderer.create(<Card content="CONTENT" title="TITLE" />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('snapshot - handle and default props', () => {
		const tree = renderer.create(<Card enableDragHandle />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('snapshot - with handle and content', () => {
		const tree = renderer.create(<Card enableDragHandle content="TEXT" />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('snapshot - with handle and title', () => {
		const tree = renderer.create(<Card enableDragHandle title="TEXT" />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('snapshot - with handle, title and content', () => {
		const tree = renderer.create(<Card enableDragHandle content="CONTENT" title="TITLE" />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
