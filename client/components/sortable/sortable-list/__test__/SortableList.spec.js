import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SortableList from '../SortableList';
import items from '../items';

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

const PROPS = {
	fetchItems: jest.fn(() => items),
	onSortEnd: jest.fn(() => itemsSorted),
	items,
	loading: false,
	error: ''
};
const PROPS_LOADING = {
	...PROPS,
	loading: true
};
const PROPS_ERROR = {
	...PROPS,
	error: 'ERROR'
};

describe('<SortableList />', () => {
	it('snapshot', () => {
		const tree = renderer.create(<SortableList {...PROPS} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('loading', () => {
		const tree = renderer.create(<SortableList {...PROPS_LOADING} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('error', () => {
		const tree = renderer.create(<SortableList {...PROPS_ERROR} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should reorder the items array in the state', () => {
		const wrapper = shallow(<SortableList {...PROPS} />);
		expect(PROPS.fetchItems).toBeCalled();
		const instance = wrapper.instance();
		instance.props.onSortEnd({ oldIndex: 0, newIndex: 2 });
		expect(PROPS.onSortEnd).toBeCalled();
		expect(PROPS.onSortEnd).toBeCalledWith({ oldIndex: 0, newIndex: 2 });
	});
});
