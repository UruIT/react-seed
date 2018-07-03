import React from 'react';
import renderer from 'react-test-renderer';

import ListItem from './ListItem';

describe('<ListItem />', () => {
	it('snapshot', () => {
		const tree = renderer
			.create(
				<ListItem>
					<p>TEST</p>
				</ListItem>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
