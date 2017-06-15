import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import './index.scss';

import Root from './routes/Root';
import store from './store';

render(
	<Root store={store} />,
	document.getElementById('app')
);
