import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import './index.scss';

import configureStore from './store';
import Translations from './translations/Translations';

const store = configureStore();

render(
	<Provider store={store}>
		<Translations />
	</Provider>,
	document.getElementById('app')
);
