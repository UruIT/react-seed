import React from 'react';
import { render } from 'react-dom';
import './index.scss';

import Root from './config/Root';
import store from './components/store';

render(
	<Root store={store} />,
	document.getElementById('app')
);
