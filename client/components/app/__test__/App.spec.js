import React from 'react';
import { App } from '../App';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

const PROPS = {
	fetchJoke: jest.fn(),
	joke: '',
	loading: false,
	error: ''
};

describe('<App/>', () => {
	const renderer = new ShallowRenderer();

	it('render no joke, no loading and no error', () => {
		const tree = renderer.render(<App {...PROPS} />);

		expect(tree).toMatchSnapshot();
	});

	it('render a joke', () => {
		const tree = renderer.render(<App {...PROPS} joke="joke!" />);

		expect(tree).toMatchSnapshot();
	});

	it('render loading...', () => {
		const tree = renderer.render(<App {...PROPS} loading />);

		expect(tree).toMatchSnapshot();
	});

	it('render error', () => {
		const tree = renderer.render(<App {...PROPS} error="something went wrong!" />);

		expect(tree).toMatchSnapshot();
	});

	it('render loading before joke', () => {
		const tree = renderer.render(<App {...PROPS} joke="joke!" loading />);

		expect(tree).toMatchSnapshot();
	});

	it('render error before joke', () => {
		const tree = renderer.render(<App {...PROPS} joke="joke!" error="error!" />);

		expect(tree).toMatchSnapshot();
	});
});

test('click on button should call props.fetchJoke func', () => {
	const app = shallow(<App {...PROPS} />);

	app.find('button').simulate('click');

	expect(PROPS.fetchJoke).toBeCalled();
});
