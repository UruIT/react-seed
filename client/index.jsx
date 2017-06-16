import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import './index.scss';

import configureStore from './store';
import Root from './routes/Root';

const store = configureStore();

render(
	<Root store={store} />,
	document.getElementById('app')
);
