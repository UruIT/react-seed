import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './Counter';

Enzyme.configure({ adapter: new Adapter() });

describe('<Counter/>', () => {
	it('snapshot', () => {
		const renderer = new ShallowRenderer();
		const tree = renderer.render(<Counter />);

		expect(tree).toMatchSnapshot();
	});
});

describe('Counter', () => {
	let tree;
	beforeEach(() => {
		tree = shallow(<Counter />);
	});

	it('should start with value in zero', () => {
		expect(tree.state()).toEqual({ value: 0 });
	});

	it('should decrement value', () => {
		const minus = tree.find('a').first();
		minus.simulate('click');

		expect(tree.state()).toEqual({ value: -1 });
	});

	it('should increment value', () => {
		const plus = tree.find('a').last();
		plus.simulate('click');

		expect(tree.state()).toEqual({ value: 1 });
	});
});
