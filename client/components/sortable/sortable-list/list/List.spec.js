import React from 'react';
import renderer from 'react-test-renderer';

import List from './List';

const items = [
	{
		title: 'Item 1',
		content: 'Item number one'
	},
	{
		title: 'Item 2',
		content: 'Item number two'
	},
	{
		title: 'Item 3',
		content: 'Item number three'
	}
];
describe('<List />', () => {
	it('snapshot', () => {
		const tree = renderer.create(<List items={items} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
