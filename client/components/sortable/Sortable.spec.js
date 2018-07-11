import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { shallow } from 'enzyme';

import Sortable from './Sortable';

describe('<Sortable />', () => {
	it('snapshot', () => {
		const renderer = new ShallowRenderer();
		const tree = renderer.render(<Sortable />);
		expect(tree).toMatchSnapshot();
	});
});

describe('Sortable - events', () => {
	const sortable = shallow(<Sortable />);

	it("should update to true enableDragHandle in component's state", () => {
		sortable
			.find('[name="useDragHandle"]')
			.simulate('change', { target: { checked: true, name: 'useDragHandle' } });
		expect(sortable.instance().state.enableDragHandle).toEqual(true);
	});
	it("should update to false enableDragHandle in component's state", () => {
		sortable
			.find('[name="useDragHandle"]')
			.simulate('change', { target: { checked: false, name: 'useDragHandle' } });
		expect(sortable.instance().state.enableDragHandle).toEqual(false);
	});
	it("should update to true lockAxis in component's state", () => {
		sortable.find('[name="lockAxis"]').simulate('change', { target: { checked: true, name: 'lockAxis' } });
		expect(sortable.instance().state.lockAxis).toEqual(true);
	});
	it("should update to false  lockAxis in component's state", () => {
		sortable.find('[name="lockAxis"]').simulate('change', { target: { checked: false, name: 'loyarnckAxis' } });
		expect(sortable.instance().state.lockAxis).toEqual(false);
	});
	it("should update to 800 transitionDuration in component's state", () => {
		sortable
			.find('[name="transitionDuration"]')
			.simulate('change', { target: { value: '800', name: 'transitionDuration' } });
		expect(sortable.instance().state.transitionDuration).toEqual(800);
	});
	it("should update to 0 transitionDuration in component's state", () => {
		sortable
			.find('[name="transitionDuration"]')
			.simulate('change', { target: { value: '', name: 'transitionDuration' } });
		expect(sortable.instance().state.transitionDuration).toEqual(0);
	});
	it("should update to 500 pressDelay in component's state", () => {
		sortable.find('[name="pressDelay"]').simulate('change', { target: { value: '500', name: 'pressDelay' } });
		expect(sortable.instance().state.pressDelay).toEqual(500);
	});
	it("should update to 0 pressDelay in component's state", () => {
		sortable.find('[name="pressDelay"]').simulate('change', { target: { value: '', name: 'pressDelay' } });
		expect(sortable.instance().state.pressDelay).toEqual(0);
	});
	it("should update to 20 distance in component's state", () => {
		sortable.find('[name="distance"]').simulate('change', { target: { value: '20', name: 'distance' } });
		expect(sortable.instance().state.distance).toEqual(20);
	});
	it("should update to 0 distance in component's state", () => {
		sortable.find('[name="distance"]').simulate('change', { target: { value: '', name: 'distance' } });
		expect(sortable.instance().state.distance).toEqual(0);
	});
});
