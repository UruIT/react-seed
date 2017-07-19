import React from 'react';
import Chart from './Chart';
import ShallowRenderer from 'react-test-renderer/shallow';

test('renders Chart', () => {
	const renderer = new ShallowRenderer();
	const data = {};
	const tree = renderer.render(<Chart data={data} />);

	expect(tree).toMatchSnapshot();
});
