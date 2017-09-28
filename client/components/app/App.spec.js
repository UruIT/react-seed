import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import { getJson } from 'utils/fetch';
import Button from '../button/Button';
import App from './App';
import links from '../../routes/links';

jest.mock('utils/fetch', () => ({
	getJson: jest.fn(
		url => new Promise((resolve, reject) => (url ? resolve({ value: 'Chuck Norris joke' }) : reject()))
	)
}));

describe('<App/>', () => {
	it('snapshot', ()=> {
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

	it('should update <Button> children', () => {
		return app
			.instance()
			.handleClick()
			.then(() => {
				expect(app.find(Button).props().text).toEqual('Chuck Norris joke');
			});
	});
});
