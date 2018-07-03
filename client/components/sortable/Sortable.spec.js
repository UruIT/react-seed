import React from 'react';
import renderer from 'react-test-renderer';

import Sortable from './Sortable';

describe('<Sortable />', () => {
	it('snapshot', () => {
		const tree = renderer.create(<Sortable />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

