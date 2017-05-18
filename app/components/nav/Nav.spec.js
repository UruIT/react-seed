import React from 'react';
import Nav from './Nav';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import withContext from '../__mocks__/context-hoc';

test('<Nav/>', () => {
	const ROUTER = {
		router: {
			route: {
				location: jest.fn()
			},
			history: {
				createHref: jest.fn(),
				replace: jest.fn(),
				push: jest.fn()
			}
		}
	};
	const NavWithContext = withContext(ROUTER)(Nav);
	const tree = renderer.create(<NavWithContext />).toJSON();

	expect(tree).toMatchSnapshot();
});

test('shallow <Nav/>', () => {
	const renderer = new ShallowRenderer();
	const tree = renderer.render(<Nav />);

	expect(tree).toMatchSnapshot();
});
