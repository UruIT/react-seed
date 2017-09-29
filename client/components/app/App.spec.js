import React from 'react';
import { shallow, mount } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import { getJson } from 'utils/fetch';
import Clickable from '../clickable';
import App from './App';
import links from '../../routes/links';

jest.mock('utils/fetch', () => ({
	getJson: jest.fn(url => new Promise((resolve, reject) => (url ? resolve({ value: 'another joke' }) : reject())))
}));

describe('<App/>', () => {
	it('snapshot', () => {
		const renderer = new ShallowRenderer();
		const tree = renderer.render(<App />);
		expect(tree).toMatchSnapshot();
	});
});

describe('App - on button click', () => {
	const app = shallow(<App />);

	beforeEach(() => {
		getJson.mockImplementation(() => Promise.resolve({ value: 'another joke' }));
		app.find('button').simulate('click');
	});

	it('should call ChuckNorris api', () => {
		expect(getJson).toBeCalledWith(links.chucknorris);
	});

	it('should keep previous jokes', () => {
		expect(app.state().jokes.length).toBe(2);
	});

	it('should update <Clickable> children', () => {
		return app
			.instance()
			.handleClick()
			.then(() =>
				expect(
					app
						.find(Clickable)
						.first()
						.props().content
				).toEqual('another joke')
			);
	});
});

describe('App - mounting', () => {
	const sample = [{ id: 1 }, { id: 2 }];
	getJson.mockImplementation(() => Promise.resolve(sample));
	const tree = mount(<App />);

	it('should call getJson', () => {
		expect(getJson).toBeCalledWith(links.api.sample);
	});

	it('should update state.sample', () => {
		expect(tree.instance().state).toMatchObject({ sample });
	});
});
