import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow, mount } from 'enzyme';

import { getJson } from 'utils/fetch';
import Clickable from '../clickable';
import links from '../../routes/links';
import App from './App';

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

describe('App - button onClick', () => {
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
	describe('server request succeeded', () => {
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

	describe('server request error', () => {
		getJson.mockImplementation(() => Promise.reject({ code: 500 }));
		const app = mount(<App />);

		it('should update state.error', () => {
			expect(app.instance().state).toMatchObject({ error: { code: 500 } });
		});

		it('should not have any joke', () => {
			expect(app.state().jokes).toEqual([]);
		});
	});
});
