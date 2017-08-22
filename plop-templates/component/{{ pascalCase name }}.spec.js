import React from 'react';
import {{ pascalCase name }} from './{{ pascalCase name }}';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const PROPS = {};

describe('{{ pascalCase name }}', () => {
	it('should render', () => {
		const wrapper = shallow(<{{ pascalCase name }} {...PROPS} />);
		expect(wrapper.find('div').node).toBeTruthy();
	});
});
