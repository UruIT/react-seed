import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<Button/>', () => {
	test('with default props', () => {
		const tree = renderer.create(
			<Button />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});

	test('with some props', () => {
		const tree = renderer.create(
			<Button text="TEXT" />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});

describe('On Click', () => {
	it('should call onClick callback', () => {
		const onClickCb = jest.fn();

		const app = shallow(<Button onClick={onClickCb} />);

		app.simulate('click');

		expect(onClickCb).toBeCalled();
	});
});
