import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow, mount } from 'enzyme';

import { getJson, run } from 'utils/fetch';
import Clickable from '../clickable';
import links from '../../routes/links';
import App from './App';

jest.mock('utils/fetch', () => ({
	getJson: url => ({ url }),
	run: jest.fn(
		config => new Promise((resolve, reject) => (config.url ? resolve({ value: 'another joke' }) : reject()))
	)
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
		run.mockImplementation(() => Promise.resolve({ value: 'another joke' }));
		app.find('button').simulate('click');
	});

	it('should call ChuckNorris api', () => {
		expect(run).toBeCalledWith(getJson(links.chucknorris));
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
		run.mockImplementation(() => Promise.resolve(sample));
		const tree = mount(<App />);

		it('should call run', () => {
			expect(run).toBeCalledWith(getJson(links.api.sample));
		});

		it('should update state.sample', () => {
			expect(tree.instance().state).toMatchObject({ sample });
		});
	});

	describe('server request error', () => {
		run.mockImplementation(() => Promise.reject({ code: 500 }));
		const app = mount(<App />);

		it('should update state.error', () => {
			expect(app.instance().state).toMatchObject({ error: { code: 500 } });
		});

		it('should not have any joke', () => {
			expect(app.state().jokes).toEqual([]);
		});
	});
});
