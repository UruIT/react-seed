import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';

import SortableList from './SortableList';

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
	},
	{
		title: 'Item 4',
		content: 'Item number four'
	},
	{
		title: 'Item 5',
		content: 'Item number five'
	},
	{
		title: 'Item 6',
		content: 'Item number six'
	}
];

const itemsSorted = [
	{
		title: 'Item 2',
		content: 'Item number two'
	},
	{
		title: 'Item 3',
		content: 'Item number three'
	},
	{
		title: 'Item 1',
		content: 'Item number one'
	},
	{
		title: 'Item 4',
		content: 'Item number four'
	},
	{
		title: 'Item 5',
		content: 'Item number five'
	},
	{
		title: 'Item 6',
		content: 'Item number six'
	}
];

describe('<SortableList />', () => {

	it('snapshot', () => {
		const tree = renderer.create(<SortableList />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should reorder the items array in the state',()=>{
		const wrapper = shallow(<SortableList />)
		const instance = wrapper.instance()
		expect(wrapper.state('items')).toEqual(items)
		instance.onSortEnd({ oldIndex:0, newIndex:2 } )
		expect(wrapper.state('items')).toEqual(itemsSorted)
	})
});
