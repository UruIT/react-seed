import React from 'react';
import renderer from 'react-test-renderer';

import DragHandle from './DragHandle';

describe('<DragHandle />', () => {
	it('snapshot', () => {
		const tree = renderer.create(<DragHandle />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
