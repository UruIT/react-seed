import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Clickable from './Clickable';

describe('<Clickable/>', () => {
	it('snapshot - default props', () => {
		const tree = renderer.create(<Clickable />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('snapshot - with TEXT', () => {
		const tree = renderer.create(<Clickable content="TEXT" />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Clickable - on Click', () => {
	it('should call onClick callback', () => {
		const onClickCb = jest.fn();

		const app = shallow(<Clickable onClick={onClickCb} />);

		app.simulate('click');

		expect(onClickCb).toBeCalled();
	});
});
