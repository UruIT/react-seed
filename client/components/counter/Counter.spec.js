import React from 'react';
import Counter from './Counter';
import ShallowRenderer from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import withContext from '../__mocks__/context-hoc';

const CONTEXT = {
	store: {
		getState: jest.fn(() => ({ counter: 0 })),
		subscribe: jest.fn(),
		dispatch: jest.fn()
	}
};

describe('<Counter/>', () => {
	const CounterWrapper = withContext(CONTEXT)(Counter);

	it('match <Connect(Counter)/>', () => {
		const renderer = new ShallowRenderer();

		const tree = renderer.render(<CounterWrapper />);

		expect(tree).toMatchSnapshot();
	});

	it('render primitives', () => {
		const tree = renderer.create(<CounterWrapper />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
