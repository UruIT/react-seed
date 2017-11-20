import React from 'react';
import Clickable from './Clickable';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
