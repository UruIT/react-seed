import React from 'react';
import { shallow } from 'enzyme';
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
		app.find('button').simulate('click');
	});

	it('should call ChuckNorris api', () => {
		expect(getJson).toBeCalledWith(links.chucknorris);
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
