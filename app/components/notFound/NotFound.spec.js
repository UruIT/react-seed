import React from 'react';
import NotFound from './NotFound';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import withContext from '../__mocks__/context-hoc';

test('<NotFound/>', () => {
	const ROUTER = {
		router: {
			history: {
				createHref: jest.fn(),
				push: jest.fn(),
				replace: jest.fn()
			}
		}
	};
	const NotFoundWithContext = withContext(ROUTER)(NotFound);

	const tree = renderer.create(<NotFoundWithContext />).toJSON();

	expect(tree).toMatchSnapshot();
});

test('shallow <NotFound/>', () => {
	const renderer = new ShallowRenderer();

	const tree = renderer.render(<NotFound />);

	expect(tree).toMatchSnapshot();
});
