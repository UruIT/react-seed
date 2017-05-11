jest.mock('../../utils/fetch', () => ({
	getJson: jest.fn(() => Promise.resolve({}))
}));

import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import { getJson } from '../../utils/fetch';

describe('On click in button', () => {
	const app = shallow(<App />);
	app.find('button').simulate('click');
	
	it('should call ChuckNorris API', () => {
		expect(getJson).toBeCalledWith('https://api.chucknorris.io/jokes/random');
	});
});
