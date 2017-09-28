import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<Button/>', () => {
	it('snapshot - default props', () => {
		const tree = renderer.create(<Button />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('snapshot - with TEXT', () => {
		const tree = renderer.create(<Button text="TEXT" />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Button - on Click', () => {
	it('should call onClick callback', () => {
		const onClickCb = jest.fn();

		const app = shallow(<Button onClick={onClickCb} />);

		app.simulate('click');

		expect(onClickCb).toBeCalled();
	});
});
