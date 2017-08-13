jest.mock('../../utils/fetch', () => ({
	getJson: jest.fn(
		url =>
			new Promise(
				(resolve, reject) =>
					url ? resolve([{ id: 1, description: 'sample #1' }, { id: 2, description: 'sample #2' }]) : reject()
			)
	)
}));

import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import { getJson } from '../../utils/fetch';

describe('On click in button', () => {
	const app = shallow(<App />);
	app.find('button').simulate('click');

	it('should call samples API', () => {
		expect(getJson).toBeCalledWith('/api/sample');
	});

	it('should update Button children', () => {
		return app.instance().handleClick().then(() => {
			expect(app.find('div.sample').map(x => x.text())).toEqual(['sample #1', 'sample #2']);
		});
	});
});

test('<App/>', () => {
	const renderer = new ShallowRenderer();
	const tree = renderer.render(<App />);

	expect(tree).toMatchSnapshot();
});
