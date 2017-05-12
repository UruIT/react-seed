jest.mock('../../utils/fetch', () => ({
	getJson: jest.fn(url => new Promise((resolve, reject) => !!url ?
		resolve({ value: 'Chuck Norris joke' }) : reject()))
}));

import React from 'react';
import App from '../App';
import MyButton from '../MyButton/MyButton';
import { shallow } from 'enzyme';
import { getJson } from '../../utils/fetch';

describe('On click in button', () => {
	const app = shallow(<App />);
	app.find('button').simulate('click');
	
	it('should call ChuckNorris API', () => {
		expect(getJson).toBeCalledWith('https://api.chucknorris.io/jokes/random');
	});

	it('should update MyButton children', () => {
		return app.instance().handleClick()
			.then(() => {
				expect(app.find(MyButton).childAt(0).text()).toEqual('Chuck Norris joke');
			});
	});
});
